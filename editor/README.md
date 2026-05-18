# HackPortugal Content Editor

Локальный визуальный редактор `.mjs`-гайдов с одной кнопкой публикации в GitHub Pages.

## Quick start

```bash
cd editor
npm install
cp .env.example .env
# Отредактируйте .env (минимум: EDITOR_USER, EDITOR_PASS)
npm run dev
```

- API: http://localhost:3737
- UI (Vite dev): http://localhost:5173 (proxy → API)
- Production single-port: `npm run build && npm start` → всё на 3737

## Архитектура

- `server.ts` — Express, basic auth, маршруты.
- `lib/loader.ts` — динамический import `.mjs` гайдов (с cache-busting по mtime).
- `lib/serialize.ts` — детерминированный writer обратно в `.mjs`. Round-trip покрыт `test/serialize.test.ts`.
- `lib/pipeline.ts` — обёртки для git, SSE-stream, runCommand для validate/build/translate.
- `lib/validate-inline.ts` — лёгкая валидация при сохранении (полная — на publish).
- `routes/guides.ts` — `GET /api/categories`, `GET/PATCH /api/guides/:id`.
- `routes/pipeline.ts` — `GET /api/git/status`, `POST /api/publish`, `POST /api/translate-and-publish`, `POST /api/snapshot`.
- `client/` — React + Vite + Tailwind UI.

## Routes

| Method | Path | Auth | Описание |
|---|---|---|---|
| GET | `/api/health` | + | Проверка |
| GET | `/api/categories` | + | Список 23 категорий (RU/PT/EN titles) |
| GET | `/api/guides?lang=ru` | + | Сводка всех гайдов |
| GET | `/api/guides/:id?lang=ru\|pt\|en` | + | Полный объект гайда |
| PATCH | `/api/guides/:id` | + | Сохранение (только RU; пишет `.mjs` через сериализатор + inline validate) |
| GET | `/api/git/status` | + | Список изменённых файлов |
| POST | `/api/publish` | + | SSE: build → validate → commit → push (только `content/ru/`) |
| POST | `/api/translate-and-publish` | + | SSE: translate → build → validate → commit → push |
| POST | `/api/snapshot` | + | Запускает `scripts/snapshot-to-ios.mjs` |

## .env

```
PORT=3737
EDITOR_USER=alex
EDITOR_PASS=<strong-password>
XRELAY_KEY_FILE=/tmp/.openai-key
XRELAY_BASE_URL=https://api.openai.com/v1
XRELAY_MODEL=gpt-5
GIT_REMOTE=origin
GIT_BRANCH=main
PAGES_MANIFEST_URL=https://6766626.github.io/hackportugal-content/v1/manifest.json
IOS_BUNDLE_PATH=
```

Если `EDITOR_USER`/`EDITOR_PASS` пустые — basic auth отключается (для локальной разработки). На home server обязательно задайте.

## Деплой на Mac mini home server (192.168.1.100)

1. Синхронизировать репозиторий на Mac mini (`rsync -avz` или git clone).
2. `cd editor && npm install && npm run build`.
3. Скопировать `.env.example` → `.env`, прописать пароль и проверить `XRELAY_KEY_FILE`.
4. Создать каталог логов: `mkdir -p logs`.
5. Установить launchd plist:
   ```bash
   cp launchd/com.hackportugal.editor.plist ~/Library/LaunchAgents/
   launchctl load -w ~/Library/LaunchAgents/com.hackportugal.editor.plist
   ```
6. Открыть `http://192.168.1.100:3737` с iPad / телефона / ноутбука. Ввести basic auth.

Перезапуск:
```bash
launchctl kickstart -k gui/$(id -u)/com.hackportugal.editor
```

Остановка:
```bash
launchctl unload ~/Library/LaunchAgents/com.hackportugal.editor.plist
```

## Tests

```bash
npm test
```

Покрывает round-trip serializer на всех 600 RU-гайдах. Should be < 2 sec.
