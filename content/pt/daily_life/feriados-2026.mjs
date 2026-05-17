export default {
  editorialVoice: 'hackportugal',
  id: 'feriados-2026',
  categoryId: 'daily_life',
  title: 'Feriados e fins de semana em Portugal',
  tldr: 'Em Portugal há cerca de 13 feriados nacionais + 1-2 municipais. Principais: Ano Novo (1.01), Carnaval (fevereiro), Páscoa (março/abril), 25 de Abril (revolução), 1 de Maio, 10 de Junho (Camões), Santos Populares em junho, Assunção 15.08, 5 de Outubro (República), 1 de Novembro (Todos os Santos), 1 de Dezembro (Restauração da Independência), 8 de Dezembro, Natal 25.12. «Ponte» é quando o feriado calha a uma terça-feira ou quinta-feira, e a sexta-feira ou segunda-feira muitas vezes também se tornam dias de descanso.',
  tags: ['feriados', 'fins de semana', 'portugal'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'national',
      title: 'Feriados nacionais 2026',
      content: [
        { kind: 'checklist', items: [
          '1 de janeiro — Ano Novo — quinta-feira',
          '17 de fevereiro — Carnaval (terça-feira) — feriado não oficial, mas muitos não trabalham',
          '3 de abril — Sexta-feira Santa',
          '5 de abril — Páscoa (domingo)',
          '25 de abril — Dia da Liberdade (25 de Abril, Revolução dos Cravos) — sábado',
          '1 de maio — Dia do Trabalhador — sexta-feira',
          '4 de junho — Corpo de Deus — quinta-feira',
          '10 de junho — Dia de Portugal (dia de Camões, identidade portuguesa) — quarta-feira',
          '15 de agosto — Assunção — sábado',
          '5 de outubro — Implantação da República — segunda-feira',
          '1 de novembro — Todos os Santos — domingo',
          '1 de dezembro — Restauração da Independência — terça-feira',
          '8 de dezembro — Imaculada Conceição — terça-feira',
          '25 de dezembro — Natal — sexta-feira'
        ]},
        { kind: 'warning', text: '24 de junho (no Porto — São João) e 13 de junho (em Lisboa — Santo António) são feriados municipais, não laborais nas respetivas cidades.' }
      ]
    },
    {
      id: 'santos-populares',
      title: 'Santos Populares (junho) — o principal mês cultural',
      content: [
        { kind: 'paragraph', text: 'Durante todo o mês de junho, celebram-se os «santos populares» em todo o país:' },
        { kind: 'checklist', items: [
          '13 de junho — Santo António (Lisboa). Festas de rua em Alfama, sardinhas assadas. Marchas Populares a 12 de junho na Avenida da Liberdade',
          '24 de junho — São João (Porto). Batalha com martelos de plástico, alho-porro na cabeça, fogo de artifício sobre o Douro — um acontecimento lendário',
          '29 de junho — São Pedro: feriados municipais em várias cidades (Sintra, Seixal, Póvoa de Varzim, entre outras; em Setúbal, o feriado municipal é a 15 de setembro). Festivais de pescadores'
        ]},
        { kind: 'paragraph', text: 'Para os residentes, isto significa sardinhas, canções portuguesas, grinaldas e parques cheios de gente. Uma excelente forma de sentir a cultura local.' }
      ]
    },
    {
      id: 'es',
      title: 'Pontes — como os portugueses prolongam os fins de semana',
      content: [
        { kind: 'paragraph', text: '«Ponte» é uma ligação entre um feriado e o fim de semana. Se o feriado calhar a uma terça-feira, muitos tiram a segunda-feira como folga → fim de semana de 4 dias.' },
        { kind: 'paragraph', text: 'Em 2026, as pontes clássicas:' },
        { kind: 'checklist', items: [
          '25 de abril (sáb) — não é muito vantajoso',
          '1 de maio (sex) — fim de semana prolongado de 1-3 de maio',
          '10 de junho (qua) — terça-feira ou quinta-feira podem ser dias de folga',
          '5 de outubro (seg) — fim de semana prolongado de 3-4-5 de outubro',
          '8 de dezembro (ter) — muitos tiram 7.12 → fim de semana de 4 dias'
        ]}
      ]
    },
    {
      id: 'working-hours',
      title: 'Trabalho em feriados',
      content: [
        { kind: 'checklist', items: [
          'Serviços públicos — bancos, Finanças, AIMA, escolas — estão fechados',
          'Supermercados (Continente, Lidl) geralmente funcionam, mas com horário reduzido',
          'Restaurantes estão abertos, e locais turísticos populares funcionam',
          'Farmácia de serviço — está aberta',
          'Correios CTT estão fechados',
          'Transportes funcionam com horário de fim de semana'
        ]}
      ]
    },
    {
      id: 'personal-days',
      title: 'Dias adicionais de licença',
      content: [
        { kind: 'paragraph', text: 'Por lei, um trabalhador em Portugal tem:' },
        { kind: 'checklist', items: [
          '22 dias úteis de férias por ano',
          'Subsídio de férias — corresponde à remuneração base relativa ao período de férias; por lei, é pago antes do início das férias',
          'Subsídio de Natal — corresponde a um salário mensal, normalmente pago até 15 de dezembro',
          'Casamento — 15 dias consecutivos de ausência ao abrigo do Código do Trabalho',
          'Falecimento de familiares próximos — o período de ausência justificada depende do grau de parentesco (de 2 a 20 dias segundo o CT art. 251)',
          'Folga no dia de aniversário, se o empregador concordar; é uma prática frequente'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ACT — Autoridade para as Condições do Trabalho', url: 'https://www.act.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo de Portugal — Código do Trabalho', url: 'https://www.dgert.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Diário da República — Lei 7/2009 (Código do Trabalho)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
