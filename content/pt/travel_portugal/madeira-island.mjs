export default {
  editorialVoice: 'hackportugal',
  id: 'madeira-island',
  categoryId: 'travel_portugal',
  title: 'Madeira — para nómadas digitais',
  tldr: 'Região Autónoma, primavera eterna +18-24°C durante todo o ano. Funchal — a capital. Digital Nomads Village em Ponta do Sol. Inglês amplamente falado. O SNS funciona. ZFM (Zona Franca da Madeira) — regime especial para **empresas** (IRC 5% em vez de 21%, não IRS de pessoas singulares!). Para pessoas singulares residentes na Madeira, o IRS à taxa regional é geralmente inferior ao do continente em 1–2 p.p. A renda é mais barata do que em Lisboa, mas em 2024-2025 aumentou devido aos nómadas digitais.',
  tags: ['madeira', 'funchal', 'nómada digital', 'ilha'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why',
      title: 'Porque escolher a Madeira',
      content: [
        { kind: 'checklist', items: [
          '🌡️ Clima: +18-24°C durante todo o ano, inverno ameno',
          '🌿 Natureza: montanhas, cascatas, plantas subtropicais, oceano',
          '🏝️ Ilha — mas com todas as comodidades + aeroporto com voos directos',
          '💻 Digital Nomads Village em Ponta do Sol — o hub do programa',
          '🇬🇧 O inglês é compreendido em todo o lado',
          '💰 Estatuto fiscal autónomo: 10% de IRS em alguns regimes',
          '🚑 O SNS funciona plenamente, há clínicas privadas',
          '📚 Escolas internacionais no Funchal',
          '👨‍👩‍👧 Seguro, ritmo de vida tranquilo'
        ]}
      ]
    },
    {
      id: 'cons',
      title: 'Desvantagens',
      content: [
        { kind: 'checklist', items: [
          'Ilha: tudo é importado, alguns produtos são mais caros',
          'Tempo ventoso, nevoeiro nas montanhas',
          'As rendas aumentaram devido aos nómadas digitais — T1 800–1500 € no Funchal',
          'Menos variedade — ilha pequena, rapidamente se “percorre” tudo',
          'Aeroporto sazonal — no inverno há menos voos',
          'Para famílias com filhos 15+ — escolha limitada de escolas e actividades',
          'Nebulosidade intensa por vezes durante semanas na costa'
        ]}
      ]
    },
    {
      id: 'areas',
      title: 'Onde viver na Madeira',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Funchal — a capital', content: [
            { kind: 'paragraph', text: 'Centro — turístico, lojas, restaurantes. São Martinho — mais tranquilo. Lido — hotéis + residências. T1 800–1500 €.' }
          ]},
          { id: 'a2', title: 'Ponta do Sol', content: [
            { kind: 'paragraph', text: 'Digital Nomads Village. Menos nebulosidade. Comunidade forte de nómadas digitais. T1 700–1200 €.' }
          ]},
          { id: 'a3', title: 'Calheta', content: [
            { kind: 'paragraph', text: 'Sudoeste, praia (artificial com areia). Tranquilo, soalheiro. T1 700–1100 €.' }
          ]},
          { id: 'a4', title: 'Câmara de Lobos / Estreito', content: [
            { kind: 'paragraph', text: 'Vila piscatória perto do Funchal. Autêntica, mais barata. T1 600–900 €.' }
          ]},
          { id: 'a5', title: 'Santana / costa norte', content: [
            { kind: 'paragraph', text: 'Casas tradicionais, natureza dramática. Longe do Funchal (uma hora de carro). Carro indispensável.' }
          ]}
        ]}
      ]
    },
    {
      id: 'nomad-village',
      title: 'Digital Nomads Madeira',
      content: [
        { kind: 'paragraph', text: 'Desde 2021, a Madeira acolhe um programa para nómadas digitais. Coworking gratuito em Ponta do Sol, comunidade no Slack, eventos. Para se registar — preencher o formulário em digitalnomads.startupmadeira.eu.' },
        { kind: 'link', text: 'digitalnomads.startupmadeira.eu', url: 'https://digitalnomads.startupmadeira.eu/' },
        { kind: 'paragraph', text: 'Não substitui o visto D8 — é um programa de integração, não de legalização. O visto D8 é obtido separadamente.' }
      ]
    },
    {
      id: 'logistics',
      title: 'Logística',
      content: [
        { kind: 'checklist', items: [
          '✈️ Aeroporto do Funchal: 1,5 h até Lisboa (50–200 €), voos directos para o Reino Unido/Alemanha/França',
          '🚐 Do aeroporto para a cidade: autocarro Aerobus 5 € / táxi 25–30 €',
          '🚗 Carro recomendado — relevo complexo, transportes públicos fracos',
          '🚌 Horários do Funchal e SAM — autocarros pela ilha',
          '🏥 Hospital Dr. Nélio Mendonça (SNS), privados: Hospital Particular da Madeira',
          '🏫 International School of Madeira',
          '🌊 Porto Santo — segunda ilha, 2 h de ferry, praias de areia'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Madeira Promotion Bureau — oficial', url: 'https://www.visitmadeira.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Digital Nomads Madeira', url: 'https://digitalnomads.startupmadeira.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional Madeira', url: 'https://www.madeira.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
