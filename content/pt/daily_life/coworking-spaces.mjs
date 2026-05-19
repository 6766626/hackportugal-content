export default {
  editorialVoice: 'hackportugal',
  id: 'coworking-spaces',
  categoryId: 'daily_life',
  title: 'Coworkings em Portugal — onde trabalhar remotamente',
  tldr: 'Lisboa, Porto e Madeira são grandes hubs de nómadas digitais.\n\nPreços: 150-400 €/mês por um lugar flexível, 250-800 €/mês por um lugar fixo. Grandes redes: Second Home (premium), LACS, Avila Spaces, Impact Hub, WorkIO. Digital Nomads Village Ponta do Sol (Madeira) — coworking gratuito para trabalhadores remotos registados.\n\nNo Porto: Porto i/o, Village Underground, Selina Cowork. Wi-Fi 100-1000 Mbit, salas para chamadas a partir de 10 €/hora.',
  tags: ['coworking', 'trabalho remoto', 'nómada digital', 'escritório'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisboa — o principal hub',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: '💎 Premium (300-800 €/mês)', content: [
            { kind: 'checklist', items: [
              'Second Home (Mercado da Ribeira) — espaço lendário, design com plantas, 400-800 €/mês',
              'WorkIO (Marquês de Pombal) — coworking aberto e bonito, 350-600 €/mês',
              'Heden (Avenida) — formato boutique com escritórios privados, 500+ €/mês',
              'The Hub (Saldanha) — escritórios coletivos operacionais, 400-700 €/mês'
            ]}
          ]},
          { id: 'l2', title: '🏢 Preço intermédio (150-350 €/mês)', content: [
            { kind: 'checklist', items: [
              'Avila Spaces — 3 localizações (Saldanha, Avenida, Atrium) — 150-300 €/mês por lugar flexível',
              'Impact Hub Lisboa (Avenida Liberdade) — foco em projetos sociais, 200-400 €/mês',
              'LACS (Santos) — espaço relacionado com o Village Underground — 220 €/mês por lugar flexível, 400 € por lugar fixo',
              'Village Underground (Cais do Sodré) — contentores como escritórios — 280-500 €/mês',
              'Cowork Central (Chiado) — tranquilo, bom para freelancers — 200 €/mês',
              'B.Hive (Saldanha) — com comunidade ativa, 180 €/mês'
            ]}
          ]},
          { id: 'l3', title: '💰 Económico (<150 €/mês)', content: [
            { kind: 'checklist', items: [
              'Selina Cowork Secret Garden — no hostel Selina, é possível usar por dia por 15-25 €',
              'Bibliotecas do município de Lisboa — gratuitas, Wi-Fi, lugares para trabalhar',
              'Fablab Lisboa — para projetos de hardware, tarifas acessíveis',
              'CoworkLisboa — um dos mais antigos, 120-180 €/mês'
            ]}
          ]},
          { id: 'l4', title: '☕ Cafés-coworking', content: [
            { kind: 'paragraph', text: 'Hello, Kristof, Dear Breakfast, Fauna & Flora, Heim Café — cafés tranquilos com Wi-Fi estável, que aceitam pessoas a trabalhar. Não expulsam do lugar ao fim de uma hora, 5-15 € por visita para café e almoço.' }
          ]}
        ]}
      ]
    },
    {
      id: 'porto',
      title: 'Porto',
      content: [
        { kind: 'checklist', items: [
          'Porto i/o (3 localizações: Ribeira, Seaside, Downtown) — a rede mais popular, 180-350 €/mês',
          'Selina Porto — hostel e coworking, passe diário 15 € / 200 €/mês',
          'Typographia (zona do Bolhão) — ambiente de loft literário, 150 €/mês',
          'Cowork Porto (Rua do Almada) — económico, 130 €/mês',
          'Cospaces (Cedofeita) — comunidade de freelancers, 180-280 €/mês',
          'Up.Start (Boavista) — para startups, muitas vezes gratuito para residentes da aceleradora'
        ]}
      ]
    },
    {
      id: 'madeira',
      title: 'Madeira — Digital Nomads Village',
      content: [
        { kind: 'paragraph', text: 'Ponta do Sol (15 km do Funchal) funciona desde 2021 como a primeira “aldeia de nómadas digitais” da Europa. Registe-se em digitalnomads.startupmadeira.eu — recebe um passe gratuito para o coworking de Ponta do Sol, eventos da comunidade e um chat no Slack com outros trabalhadores remotos (mais de 1000 participantes).' },
        { kind: 'checklist', items: [
          '🆓 Coworking em Ponta do Sol — gratuito para registados',
          '💸 Coworkings no Funchal: Colab, CentroCoworking — 150-250 €/mês',
          '🏖️ Cafés-coworking junto ao mar: Loft, Restaurante do Farol',
          '🌿 Comunidade: encontros semanais de surf, caminhadas, encontros de conversação'
        ]}
      ]
    },
    {
      id: 'other-cities',
      title: 'Regiões',
      content: [
        { kind: 'checklist', items: [
          'Coimbra — Cowork Coimbra (200 €/mês), ambiente estudantil',
          'Braga — Startup Braga (0 € para startups certificadas), Start Point',
          'Aveiro — Creative Science Park 100 €/mês',
          'Faro/Algarve — Cowork Algarve (Loulé), Selina Algarve (Lagos) — especialmente popular no inverno entre trabalhadores remotos',
          'Évora — EcoHub Alentejo, coworking raro na região, 80 €/mês'
        ]}
      ]
    },
    {
      id: 'what-to-look',
      title: 'A que deve prestar atenção ao escolher',
      content: [
        { kind: 'checklist', items: [
          '🌐 Wi-Fi: >100 Mbit — é o normal, não aceite menos',
          '🔊 Isolamento acústico — zonas tranquilas separadas para chamadas',
          '🪑 Ergonomia — cadeira regulável, monitor',
          '🍽️ Cozinha / café incluídos?',
          '🖨️ Impressora / scanner',
          '📞 Cabines para chamadas — quantas existem, gratuitas ou com custo adicional',
          '🎉 Comunidade — networking, eventos (normalmente uma vez por semana)',
          '🕐 Horário — 24/7 ou 9:00-19:00',
          '💼 Morada para reencaminhamento de correio (alguns estatutos de trabalhador independente exigem)',
          '🚇 Acessibilidade por transportes — metro / autocarro a 10 min',
          '🆓 Dia ou semana experimental — quase sempre oferecem'
        ]}
      ]
    },
    {
      id: 'tax-deduction',
      title: 'Aspeto fiscal',
      content: [
        { kind: 'paragraph', text: 'Para recibos verdes no regime simplificado, as despesas não são deduzidas diretamente a 100%: o rendimento tributável é calculado por coeficientes (frequentemente 75% para serviços), mas parte das despesas com faturas pode reduzir a base. Para contabilidade organizada e pessoas coletivas, o coworking é considerado uma despesa de trabalho. A dedução do IVA só é possível para atividades sujeitas a IVA e com a documentação correta. Peça sempre uma fatura com NIF; guarde os recibos durante pelo menos 4 anos.' },
        { kind: 'checklist', items: [
          'Lugar flexível: serviço "serviços de escritório / coworking"',
          'Lugar fixo: serviço/arrendamento (office services); a classificação depende do contrato',
          'Coworking como morada fiscal da empresa — alguns permitem (Avila Spaces, Impact Hub); isto é útil para o registo, mas não é uma condição obrigatória para recibos verdes',
          'IFICI (regime separado Incentivo Fiscal à Investigação Científica e Inovação, que substituiu o NHR para novos requerentes com critérios mais restritos) — a tributação depende da qualificação da atividade'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Lugar flexível em Lisboa', amountEURMin: 150, amountEURMax: 400, note: '€/mês' },
    { label: 'Lugar fixo', amountEURMin: 250, amountEURMax: 800, note: '€/mês' },
    { label: 'Escritório privado 1-2 pessoas', amountEURMin: 500, amountEURMax: 1500, note: '€/mês' },
    { label: 'Passe diário', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Digital Nomads Village Madeira', amountEUR: 0, note: 'para registados' }
  ],
  sources: [
    { title: 'Digital Nomads Madeira — oficial', url: 'https://digitalnomads.startupmadeira.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Avila Spaces', url: 'https://avilaspaces.com/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Porto i/o', url: 'https://porto.io/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Impact Hub Lisboa', url: 'https://lisbon.impacthub.net/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
