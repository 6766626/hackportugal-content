# Deployment checklist — HackPortugal v1.0

Из готового MVP в публично-выпускаемый релиз iOS-приложения.

## Перед первым деплоем

### 1. Content repo → GitHub

```bash
cd /Users/alex/DEVELOPER/hackportugal-content
git init
git add .
git commit -m "Initial content v1.0"
# Создать репо hackportugal/hackportugal-content на github.com (public)
git remote add origin git@github.com:hackportugal/hackportugal-content.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages

- Settings → Pages → Source: "GitHub Actions"
- После первого push в main workflow `build-and-deploy.yml` сам запустится, задеплоит:
  - `/` — landing index + privacy/support/terms
  - `/v1/` — content bundle (manifest.json, guides.*.json, ...)
  - `/.well-known/apple-app-site-association` — для Universal Links

**Проверка**:
```bash
curl -f https://hackportugal.github.io/hackportugal-content/v1/manifest.json | jq '.contentVersion'
curl -f https://hackportugal.github.io/hackportugal-content/privacy.html | head -5
curl -f https://hackportugal.github.io/hackportugal-content/.well-known/apple-app-site-association | jq '.applinks.details'
```

### 3. Переводы контента (опционально для v1.0 full-spec)

Можно релизить v1.0 с RU-only контентом и локализованным UI; PT/EN-контент — v1.1. Но если делаем сразу полноценно:

```bash
# Extract → translate → assemble → build → snapshot
npm run translate:extract
OPENAI_API_KEY=sk-... npm run translate:pt     # ~$3-5, 20-30 мин
OPENAI_API_KEY=sk-... npm run translate:en     # ~$3-5
LANGS=ru,pt,en npm run build
npm run snapshot
```

Ключ должен быть от пользователя; скрипт использует `gpt-4o-mini` по умолчанию (настраивается `OPENAI_MODEL`).

Ревью носителем **рекомендуется** перед релизом. Машинный перевод даёт 90-95% качество; для юридически-чувствительных тем (визы, гражданство) native-speaker review даст уверенность.

## iOS: что проверить перед submission

### 4. Xcode settings

- `MARKETING_VERSION = 1.0`
- `CURRENT_PROJECT_VERSION = 1` (build number)
- `PRODUCT_BUNDLE_IDENTIFIER = pt.1in.HackPortugal`
- `DEVELOPMENT_TEAM = <your-team-id>` — обновить в pbxproj если отличается
- `INFOPLIST_FILE = Info.plist`
- Deployment target — iOS 18 или выше (сейчас 26.4)

### 5. Assets

- `AppIcon.appiconset` — 3 варианта (light/dark/tinted) × 1024×1024 ✓
- `PrivacyInfo.xcprivacy` — ✓ (декларирует UserDefaults/FileTimestamp/DiskSpace/SystemBootTime API use без трекинга)
- `Localizable.xcstrings` — ~75 ключей на RU/EN/PT-PT ✓

### 6. Capabilities

- iCloud: НЕ требуется в v1.0 (если позже добавим sync — нужен entitlements file)
- Push Notifications: v1.1+
- App Groups: не используется

### 7. Apple Developer account + App Store Connect

- App Store Connect → My Apps → "+" → New App
  - Bundle ID: `pt.1in.HackPortugal`
  - Name: `HackPortugal`
  - Primary Language: Russian (или English, зависит от appeal)
  - SKU: `hackportugal-ios-v1`
- Category: Reference (Primary), Travel (Secondary)
- Age rating: 4+ (no questionable content)
- Privacy Labels: **"Data Not Collected"** (подтверждается PrivacyInfo.xcprivacy)
- Privacy Policy URL: `https://hackportugal.github.io/hackportugal-content/privacy.html`
- Support URL: `https://hackportugal.github.io/hackportugal-content/support.html`
- Marketing URL: `https://hackportugal.github.io/hackportugal-content/`

### 8. Screenshots (минимум 3-5 на каждое устройство, на каждом языке)

Устройства required by Apple:
- 6.9" (iPhone 17 Pro Max): 1320×2868 или 2868×1320
- 6.1" (iPhone 17 Pro): 1206×2622 или 2622×1206
- 12.9" iPad Pro: 2048×2732 или 2732×2048

**Сделать минимум 5 скринов каждого**: Home, Guide detail, Search, Settings, Onboarding.

Быстрый способ — через Xcode Previews → Export screenshot, либо `xcrun simctl io <UDID> screenshot`. Можно использовать fastlane snapshot для автоматизации.

### 9. TestFlight

- Archive в Xcode → Distribute → TestFlight
- Internal group: мои друзья-тестеры (до 100)
- External group: общественное beta через invite link — 50-200 тестеров из @portugalpages / @aimairn
- Testing period: 2 недели минимум
- Баги через "Send feedback" → feedback@hackportugal.pt

### 10. Submission

- Fill Review Notes: "HackPortugal is a static reference app. All content is bundled; online fetching only retrieves content updates from our public GitHub Pages endpoint. No user data is collected or transmitted. No login."
- Export Compliance: No encryption used → `ITSAppUsesNonExemptEncryption=false` in Info.plist ✓
- Submit for Review

### 11. После approval

- Release: "Manual release after approval" (чтобы выпускать когда готовы)
- Update `README.md` с App Store link
- Push в Telegram @portugalpages с анонсом

## Регулярный контент-update flow

После initial release:

```bash
# 1. Автор правит content/ru/.../*.mjs
# 2. Валидировать локально
npm test
# 3. Commit + push в main → GitHub Actions задеплоит автоматически
git add content/ru/...
git commit -m "Update: AIMA tabela ..."
git push
# 4. iOS-приложение подтянет новый manifest.json, скачает дельту, обновит кэш
```

Пользователи получают обновления без re-submission в App Store — контент лежит отдельно на GitHub Pages.

## Rollback

Если деплой сломал контент:

```bash
git revert <bad-commit>
git push
# GitHub Actions передеплоит предыдущую версию
```

iOS-приложение автоматически откатит кэш при следующей проверке обновлений (version decreases → iOS берёт большую из bundled/cached/remote).

## Что НЕ требует re-submission в App Store

- Контент-правки (любые .mjs / .json в content/ и catalog/)
- Переводы (pt/en после prod-rollout)
- Источники
- community links

## Что требует re-submission

- Изменения Swift-кода
- Info.plist, entitlements
- Новые permissions
- Новая версия iOS SDK / deployment target

## Cost estimates

- GitHub Pages: бесплатно
- OpenAI API (gpt-4o-mini) для переводов: ~$5-10 на полный прогон PT+EN
- Apple Developer Program: $99/год
- Domain (опционально hackportugal.pt): ~€12/год

## Контакты поддержки / incidents

- Email: feedback@hackportugal.pt
- Telegram: @portugalpages
- Issues: github.com/hackportugal/hackportugal-content/issues
