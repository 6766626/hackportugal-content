export default {
  editorialVoice: 'hackportugal',
  id: 'algarve-living',
  categoryId: 'travel_portugal',
  title: 'Algarve para expats — viver junto ao mar',
  tldr: 'Costa sul. Sol 300 dias por ano, +18–28°C durante todo o ano. Faro — principal cidade e aeroporto. Locais populares para viver: Tavira (autêntica), Lagos (activa), Albufeira (turística), Portimão (prática).\n\nSazonalidade: no Verão os preços são 3 vezes mais altos, no Inverno fica vazio. Comunidade internacional, o inglês é suficiente.',
  tags: ['algarve', 'faro', 'mar', 'reforma'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cities',
      title: 'Principais cidades',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Faro', content: [
            { kind: 'paragraph', text: 'Capital da região. Aeroporto, universidade, serviços públicos. Centro histórico pitoresco. Menos turística do que as restantes. T1 700–1100 €.' }
          ]},
          { id: 'c2', title: 'Tavira', content: [
            { kind: 'paragraph', text: 'A mais autêntica — ruas tradicionais de pescadores, pontes, salinas. Mais tranquila. T1 600–1000 €.' }
          ]},
          { id: 'c3', title: 'Lagos', content: [
            { kind: 'paragraph', text: 'Algarve ocidental. Cidade activa, juventude, surf. Clubes. T1 800–1300 €.' }
          ]},
          { id: 'c4', title: 'Albufeira', content: [
            { kind: 'paragraph', text: 'Capital turística. No Verão, multidões de britânicos. Para férias em família. T1 700–1200 € fora de época.' }
          ]},
          { id: 'c5', title: 'Portimão', content: [
            { kind: 'paragraph', text: 'Cidade grande e prática. Hospitais, escolas, Continente, tudo perto. Muitos expats. T1 700–1100 €.' }
          ]},
          { id: 'c6', title: 'Sagres / Vila do Bispo', content: [
            { kind: 'paragraph', text: 'Extremo ocidente. Natureza selvagem, surf. Remoto. T1 500–800 € nas aldeias.' }
          ]}
        ]}
      ]
    },
    {
      id: 'why-live',
      title: 'Vantagens de viver',
      content: [
        { kind: 'checklist', items: [
          'Clima: 300 dias de sol, Inverno ameno +15–18°C',
          'Praias: algumas das melhores da Europa',
          'Comunidade internacional — britânicos, alemães, escandinavos, falantes de russo',
          'O inglês está disponível em todo o lado — fácil no primeiro ano',
          'Menos burocracia nas cidades pequenas',
          'Campos de golfe de nível mundial',
          'Saúde: clínicas privadas de bom nível (HPA Health Group)',
          'Arrendamento mais barato do que em Lisboa',
          'Voos domésticos baratos Lisboa — Faro'
        ]}
      ]
    },
    {
      id: 'cons',
      title: 'Desvantagens',
      content: [
        { kind: 'checklist', items: [
          'Sazonalidade: no Verão o arrendamento é 3 vezes mais caro, os restaurantes estão cheios',
          'No Inverno muitos estabelecimentos estão fechados (especialmente nas cidades pequenas)',
          'Há pouco trabalho — tudo está orientado para o turismo e reformados',
          'Longe de Lisboa (3 h de comboio / 2,5 h de carro)',
          'Se for “só inglês” — a integração é mais fraca, há menos cultura portuguesa',
          'Educação das crianças: menos escolas internacionais do que em Lisboa/Porto',
          'Saúde: hospital SNS em Faro, mas operações complexas — em Lisboa'
        ]}
      ]
    },
    {
      id: 'who-for',
      title: 'Para quem',
      content: [
        { kind: 'checklist', items: [
          '👴 Reformados D7 — ideal',
          '💻 Nómadas digitais D8 — excelente para o Verão, mas no Inverno pode ser calmo',
          '👨‍👩‍👧 Famílias com crianças — bom, se houver uma escola internacional por perto',
          '🏄 Surfistas — Algarve ocidental (Lagos, Sagres)',
          '🏌️ Golfistas — Vilamoura, Vale do Lobo',
          '💼 NÃO é adequado para carreira em IT/sector empresarial — melhor Lisboa/Porto'
        ]}
      ]
    },
    {
      id: 'logistics',
      title: 'Logística',
      content: [
        { kind: 'checklist', items: [
          '✈️ Aeroporto de Faro: Ryanair / EasyJet / TAP — voos directos para o Reino Unido/Alemanha/Países Baixos/França',
          '🚆 CP: Faro ↔ Lisboa AP 3 h 30–40 €, IC 3 h 40 min 23 €',
          '🚌 Rede Expressos / FlixBus: as mesmas 3–3,5 h, 20–30 €',
          '🚗 Carro quase obrigatório para viver fora das cidades — distâncias',
          '🏥 HPA Faro / Lusíadas Algarve / Luz Saúde — clínicas privadas',
          '🏫 Nobel International, Prime School, International School of the Algarve — para crianças',
          '🛒 Continente, Pingo Doce, Lidl, Aldi, Jumbo — em todo o lado'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo do Algarve — oficial', url: 'https://www.visitalgarve.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CCDR Algarve — administração regional', url: 'https://www.ccdr-alg.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMAL — associação de municípios do Algarve', url: 'https://www.amal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
