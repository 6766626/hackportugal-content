export default {
  editorialVoice: 'hackportugal',
  id: 'consular-appointment-booking',
  categoryId: 'before_arrival',
  title: 'Marcação no consulado de Portugal — como apanhar uma vaga',
  tldr: 'As filas nos consulados de Portugal (Moscovo, Kiev, Minsk, Almaty, Istambul) implicam 2–6 meses de espera. As vagas abrem de forma irregular, muitas vezes durante a noite. Estratégias: **verificar a cada poucas horas** (as vagas aparecem devido a cancelamentos); **bots de monitorização** (bots de Telegram notificam sobre novas vagas); **deslocar-se para uma jurisdição vizinha** (Erevan, Tbilisi, Vilnius — muitas vezes com mais disponibilidade); **consultor privado** (VFS Global, agências) — 50–200 €, mas com vaga garantida. Alternativa: viajar para Portugal sem visto (entrada sem visto no Espaço Schengen por 90 dias para vários países) e tratar do visto D aí.',
  tags: ['consulado', 'marcação', 'visto d', 'marcação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'where',
      title: '🌍 Jurisdições dos consulados',
      content: [
        { kind: 'paragraph', text: 'O consulado de Portugal aceita apenas residentes do país de acreditação. Mas pode apresentar os documentos através do consulado do país onde **se encontra temporariamente** (turismo, viagem de trabalho). É uma alternativa legal.' },
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Principais jurisdições da CEI / Federação Russa', content: [
            { kind: 'checklist', items: [
              '🇷🇺 **Moscovo** (embaixada e consulados-gerais): serve a Federação Russa',
              '🇺🇦 **Kiev** (encerrado devido à guerra desde 2022)',
              '🇧🇾 **Varsóvia** (para Belarus + Polónia)',
              '🇰🇿 **Almaty** (para Cazaquistão, Quirguistão, Tajiquistão)',
              '🇹🇷 **Istambul** (para cidadãos que aí chegaram)',
              '🇦🇲 **Erevan** — muitas vezes com mais disponibilidade do que outros (para quem se mudou via Arménia)',
              '🇬🇪 **Tbilisi** — alternativa popular para requerentes russos',
              '🇱🇹 **Vilnius** — para bielorrussos',
              '🇮🇱 **Telavive** — para residentes de Israel'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'stalking',
      title: '🎯 Caça às vagas',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Monitorização directa do portal', content: [
            { kind: 'checklist', items: [
              '**Portal oficial**: vistos.mne.gov.pt → escolher o país → marcação',
              'As vagas aparecem devido a cancelamentos — normalmente 1–3 por dia, de forma aleatória',
              'Verificar **a cada 2–4 horas** — especialmente às 9:00, 14:00, 22:00 (quando os funcionários processam pedidos)',
              'Ao fim de semana é mais raro, mas acontece',
              'Para reservar — preparar o NIF e o passaporte com antecedência, preencher em 3 minutos'
            ]}
          ]},
          { id: 's2', title: 'Bots de Telegram para monitorização', content: [
            { kind: 'checklist', items: [
              '⚠️ Geridos pela comunidade, não oficiais — verifique avaliações, não pague a serviços suspeitos',
              'Populares: @portugalvisabot, @ptvisastatus, @consulate_monitor_bot',
              'Enviam notificação push quando abre uma vaga',
              'Normalmente gratuitos para funcionalidades básicas; versão paga para notificações imediatas — 3–10 €/mês',
              '⚠️ Sem garantias — o bot pode falhar uma vaga ou enviar uma notificação falsa',
              'Chat @aimairn — bem informado sobre a situação dos consulados'
            ]}
          ]},
          { id: 's3', title: 'Agências intermediárias', content: [
            { kind: 'checklist', items: [
              '**VFS Global Portugal** (vfsglobal.com): operador oficial do consulado em alguns países. Preço +50–100 € além da taxa consular',
              '**Unitel, Nexus Portugal**: agências privadas com marcação prévia por +100–300 €',
              'Vantagem: vaga garantida no prazo acordado (2–4 semanas)',
              'Desvantagem: pagamentos antecipados, contratos, risco de fraude (verifique o estatuto jurídico)',
              '⚠️ **NÃO existe** procedimento oficial “acelerado” — qualquer pessoa que ofereça “por 500 € uma vaga amanhã” é burlona'
            ]}
          ]},
          { id: 's4', title: 'Deslocação para uma jurisdição alternativa', content: [
            { kind: 'checklist', items: [
              '1. Confirmar: Erevan / Tbilisi / Istambul — é necessário visto para entrar a partir da Federação Russa (normalmente não)',
              '2. Viajar, confirmar alojamento (hotel, Airbnb)',
              '3. No portal — escolher o consulado correspondente',
              '4. A marcação está frequentemente disponível em 2–4 semanas',
              '5. Comparecer com o conjunto completo de documentos trazidos de casa',
              '6. Levantar o passaporte após 60–90 dias (por correio / estafeta)',
              '💡 Custos totais: voos ~300–500 € + hotel ~200 € + despesas de vida = **mais barato do que esperar 6 meses em Moscovo**'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bypass',
      title: '🛫 Entrada em Portugal sem visto D',
      content: [
        { kind: 'paragraph', text: 'Para cidadãos de países com isenção de visto (BR, US, UK, UA depois de 2022, muitos outros), é possível entrar no Espaço Schengen em regime turístico e depois pedir autorização de residência a partir de dentro.' },
        { kind: 'checklist', items: [
          '✅ Brasileiros (CPLP): entrada sem visto, depois AIMA',
          '✅ Ucranianos: ao abrigo da Proteção Temporária',
          '✅ Cidadãos dos US, UK, CA: turismo 90 dias, MAS não é possível pedir autorização de residência a partir de dentro após o fim da MdI (03.06.2024); é necessário visto D antecipadamente',
          '❌ **Federação Russa, BY, KZ**: regime de vistos Schengen, visto D obrigatório ANTES da entrada',
          'Excepção: TPD Ucrânia até 04.03.2027, CPLP Brasileiros sempre'
        ]}
      ]
    },
    {
      id: 'prep',
      title: '📋 Preparação para a marcação',
      content: [
        { kind: 'paragraph', text: 'No momento em que a vaga aparecer, — **tudo deve estar pronto**, caso contrário perde-a.' },
        { kind: 'checklist', items: [
          '✅ NIF (possível online através de representante, 70–150 €)',
          '✅ Passaporte — válido por ≥ 6 meses + páginas em branco',
          '✅ Fotografia 35×45 mm (formato Schengen)',
          '✅ Documentos para o visto D (ver o guia correspondente ao tipo)',
          '✅ Seguro ≥ 30 000 € para todo o período',
          '✅ Comprovativo de alojamento (contrato de arrendamento / reserva > 4 meses)',
          '✅ Comprovativo de meios financeiros (extracto bancário de 3–6 meses)',
          '✅ Certificado de registo criminal com apostila (< 3 meses)',
          '✅ Carta de motivação em português / inglês',
          '⏰ Quando a vaga abrir — confirmar em 15 minutos, caso contrário o sistema devolve-a ao conjunto geral'
        ]}
      ]
    },
    {
      id: 'alternative',
      title: '🔄 Se, ainda assim, não conseguiu',
      content: [
        { kind: 'checklist', items: [
          '💼 **Visto startup**: candidatura através do IAPMEI por incubadora certificada, prazo 30–60 dias, vaga no consulado após aprovação — mais rápido',
          '🎓 **Visto de estudante D4**: ingressar numa universidade / escola de línguas, prazo de análise do visto mais curto',
          '💻 **Visto de nómada digital (D8)**: categoria separada desde 2022, muitas vezes com vaga mais rápida',
          '👨‍👩‍👧 **Reagrupamento Familiar**: se já houver em Portugal um familiar residente, apresentar na AIMA (não é necessário a partir de dentro), o visto é emitido depois por notificação',
          '🇪🇺 **Passaporte da UE** (se tiver): não exige visto D de todo',
          '⏰ **Esperar**: um novo “pacote” de vagas abre normalmente uma vez a cada 2–3 meses em Moscovo'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Taxa consular (standard)', amountEUR: 90 },
    { label: 'Agência para obter vaga', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Deslocação para Erevan/Tbilisi (voo+hotel+visto)', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Bot de Telegram de monitorização (versão paga)', amountEURMin: 3, amountEURMax: 10, note: '€/mês' }
  ],
  sources: [
    { title: 'Vistos MNE — marcação no consulado', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'VFS Global Portugal', url: 'https://visa.vfsglobal.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Consulado de Portugal em Moscovo', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
