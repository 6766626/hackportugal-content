export default {
  editorialVoice: 'hackportugal',
  id: 'uk-specific',
  categoryId: 'country_specific',
  title: 'Britânicos em Portugal após o Brexit',
  tldr: 'Os britânicos que residiam em Portugal antes de 31.12.2020 estão protegidos pelo Withdrawal Agreement e têm cartões especiais de autorização de residência. Os novos chegados após o Brexit são cidadãos de países terceiros e precisam de visto D. O acordo fiscal Portugal—Reino Unido está em vigor. O FATCA não se aplica ao Reino Unido, mas o CRS (troca automática de informações) aplica-se.',
  audience: { countryCodes: ['GB'] },
  tags: ['reino unido', 'britânicos', 'brexit', 'acordo de saída'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'wa-beneficiaries',
      title: 'Withdrawal Agreement (WA) — quem está abrangido',
      content: [
        { kind: 'paragraph', text: 'Os cidadãos britânicos que residiam em Portugal antes de 31 de dezembro de 2020 estão protegidos pelo WA e têm os mesmos direitos que os cidadãos da UE: liberdade de trabalho, SNS, ensino.' },
        { kind: 'checklist', items: [
          'Estatuto: Autorização de Residência de Beneficiário do WA',
          'Carta de beneficiário do Acordo de Saída',
          'Os mesmos direitos que os outros cidadãos da UE',
          'Não é necessário trocar por um visto D',
          'Aplica-se a todos os membros da família que também estavam em Portugal antes de 31.12.2020'
        ]},
        { kind: 'paragraph', text: 'Se não tratou do estatuto WA a tempo — contacte a AIMA imediatamente; a recuperação poderá ser possível.' }
      ]
    },
    {
      id: 'after-brexit',
      title: 'Novos chegados (após 01.01.2021)',
      content: [
        { kind: 'paragraph', text: 'Os britânicos que chegam agora são considerados cidadãos de países terceiros (não UE). É necessário um visto D para obter autorização de residência.' },
        { kind: 'checklist', items: [
          'D7 (rendimento passivo) — para pensionistas',
          'D8 (nómada digital) — para quem trabalha remotamente. Popular entre especialistas de IT de Londres',
          'D3 (profissional qualificado) — trabalho numa empresa portuguesa',
          'Golden Visa — para grandes investidores',
          'Turistas: 90 dias no Espaço Schengen sem visto'
        ]},
        { kind: 'warning', text: 'CRUE (Certificado de Registo de Cidadão da União) — NÃO está disponível para britânicos após o Brexit. Algumas Junta de Freguesia podem emiti-lo por engano — isso está incorreto. Deve haver um visto D ou WA.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Impostos Reino Unido ↔ Portugal',
      content: [
        { kind: 'checklist', items: [
          'O acordo fiscal Portugal—Reino Unido está em vigor desde 1968, atualizado por protocolos (o mais recente — 2016) — para evitar a dupla tributação',
          'Non-dom no Reino Unido — não é relevante em Portugal (Portugal tributa o rendimento mundial dos residentes sem opção non-dom)',
          'Residente em Portugal (>183 dias) — tributado em Portugal sobre o rendimento mundial',
          'Pensão britânica (estatal, profissional): tributada em Portugal, onde é residente. O Reino Unido pode reter imposto na fonte — crédito através de crédito fiscal por imposto estrangeiro',
          'ISA — o benefício fiscal britânico não funciona em Portugal: o rendimento dentro de uma ISA é tributado em Portugal (dividendos e juros às taxas normais)',
          'SIPP — Portugal normalmente reconhece como plano de pensões; os pagamentos são tributados como rendimento de pensão, mas a tributação do crescimento dentro do SIPP é uma zona cinzenta e muitas vezes requer um especialista',
          'CRS — os bancos britânicos reportam automaticamente a Portugal (Common Reporting Standard)',
          'Regime IFICI: potencialmente disponível para nómadas digitais britânicos e profissionais qualificados'
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documentos do Reino Unido',
      content: [
        { kind: 'checklist', items: [
          'Apostila: Foreign, Commonwealth & Development Office (FCDO)',
          'Certidão de nascimento: General Register Office (GRO) + apostila FCDO',
          'Certidão de casamento: semelhante',
          'DBS (Disclosure and Barring Service) — certificado de registo criminal',
          'Diploma: universidade → apostila FCDO',
          'Todos os documentos devem ser traduzidos para português (tradução juramentada)'
        ]}
      ]
    },
    {
      id: 'banking',
      title: 'Nuances bancárias',
      content: [
        { kind: 'checklist', items: [
          'Bancos britânicos (HSBC, Barclays, etc.) — os cartões funcionam em Portugal',
          'Alguns bancos britânicos encerram contas de residentes britânicos que se mudaram para a UE (regras da FCA)',
          'HSBC Premier International, Citi Plus — contas internacionais funcionam',
          'Revolut, Wise — excelente escolha para GBP↔EUR',
          'Bancos portugueses: ActivoBank, Millennium — aceitam sem dificuldades'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Comunidade britânica',
      content: [
        { kind: 'checklist', items: [
          'British Embassy Lisbon: Rua de São Bernardo 33',
          'British Council — eventos culturais, exames de inglês',
          'Algarve — a maior comunidade de expatriados britânicos',
          'Cascais — a tradicional «baía inglesa»',
          'British Hospital / Lusitânia — com padrões britânicos',
          'Escolas britânicas: St Julian\'s (Carcavelos), The British School of Lisbon'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Embaixada Britânica em Lisboa', url: 'https://www.gov.uk/world/organisations/british-embassy-lisbon', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Acordo de Saída (WA)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'HMRC — Acordo Fiscal com Portugal', url: 'https://www.gov.uk/government/publications/portugal-tax-treaties', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Comissão Europeia — direitos do WA do Brexit', url: 'https://commission.europa.eu/strategy-and-policy/relations-united-kingdom/eu-uk-withdrawal-agreement_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
