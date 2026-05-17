export default {
  editorialVoice: 'hackportugal',
  id: 'startup-visa',
  categoryId: 'residence_permit',
  title: 'Startup Visa — para fundadores de startups certificadas',
  tldr: 'O Startup Visa destina-se a fundadores de startups inovadoras. Exige a aprovação de um dos ~94 incubadores certificados em Portugal (lista IAPMEI 2026) + um plano de negócios viável. Por projecto — máximo de 5 empreendedores. A autorização de residência inicial é por 2 anos. O IFICI NÃO é automático: depende do estatuto de residente fiscal português, da actividade elegível e do registo atempado. Candidatura através do portal Startup Visa + residence visa empreendedora no consulado.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['startup', 'autorização de residência', 'startup', 'inovação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'overview',
      title: 'O que é',
      content: [
        { kind: 'paragraph', text: 'Startup Visa = visto de residência para fundadores de startups com um produto tecnológico ou inovador. É gerido pelo IAPMEI em conjunto com a Startup Portugal.' },
        { kind: 'paragraph', text: 'Na fase consular, é, na prática, uma residence visa empreendedora / subtipo D2 para Startup Visa: não basta um plano de negócios, é necessária a aprovação prévia do projecto pelo IAPMEI e um contrato/declaração de um incubador certificado (Beta-i, Startup Lisboa, Fábrica de Startups, entre outros) indicando que o seu projecto é orientado para a inovação.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Produto ou serviço tecnológico inovador',
          'Plano de negócios em inglês ou português',
          'Potencial para criar postos de trabalho qualificados e, ao fim de 5 anos, atingir um volume de negócios > 325 000 €/ano e/ou activos > 325 000 €; a avaliação considera o grau de inovação, a escalabilidade, o potencial de mercado e a qualidade da equipa',
          'Aprovação por um incubador certificado',
          'Por projecto — máximo de 5 empreendedores (co-founders podem candidatar-se em conjunto; os restantes trabalhadores seguem por outras bases de visto)',
          'Meios próprios: requerente — 12× IAS = 6 445,56 € (IAS 2026 = 537,13 €); cônjuge/parceiro — +12× 50% IAS = 3 222,78 €; filho — +12× 30% IAS = 1 933,67 € por cada um',
          'Ausência de antecedentes criminais',
          'Seguro de saúde'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Escolher um incubador da lista', content: [
            { kind: 'link', text: 'Lista de incubadores certificados (~94 em 2026)', url: 'https://startupvisa.iapmei.pt/' }
          ]},
          { id: 's2', title: '2. Contactar o incubador e submeter o projecto', content: [
            { kind: 'paragraph', text: 'Cada incubador tem o seu próprio procedimento de avaliação (apresentações do projecto, entrevistas, documentos).' }
          ]},
          { id: 's3', title: '3. Assinar um contrato com o incubador', content: [
            { kind: 'paragraph', text: 'A confirmação de aceitação do projecto pelo incubador = a chave de ouro.' }
          ]},
          { id: 's4', title: '4. Submeter a candidatura através do portal Startup Visa', content: [
            { kind: 'paragraph', text: 'Com a confirmação do incubador + plano de negócios + documentos financeiros. Referência: cerca de 30 dias úteis após a submissão completa, mas, na prática, os prazos podem prolongar-se devido a correcções, ao incubador ou ao backlog.' }
          ]},
          { id: 's5', title: '5. Após a aprovação — visto no consulado', content: [
            { kind: 'paragraph', text: 'Com a aprovação do IAPMEI, o procedimento de visto é mais rápido (30-60 dias).' }
          ]},
          { id: 's6', title: '6. Entrada + AIMA', content: [
            { kind: 'paragraph', text: 'Procedimento padrão: autorização de residência, biometria, registo da empresa.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Vantagens',
      content: [
        { kind: 'checklist', items: [
          'Apoio do incubador (mentor, coworking, rede de contactos)',
          'Possível acesso ao IFICI: 20% de IRS apenas sobre eligible professional income, se cumprir as condições do regime e efectuar o registo separado; NÃO se aplica automaticamente a todos os rendimentos',
          'Via de visto simplificada (com aprovação do IAPMEI)',
          'Co-founders podem candidatar-se em conjunto, MAS normalmente há um máximo de 5 empreendedores por projecto; os restantes trabalhadores seguem por outras bases de visto'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Candidatura IAPMEI', amountEUR: 0 },
    { label: 'Incubador (programa)', amountEURMin: 0, amountEURMax: 5000, note: 'muitos são gratuitos, alguns cobram uma taxa' },
    { label: 'Visto consular', amountEUR: 90 },
    { label: 'AIMA — receção e análise do pedido', amountEUR: 134.28, note: 'tarifa desde 01.03.2026 (25% IAS com IAS 2026 = 537,13 €)' },
    { label: 'AIMA — emissão do título de residência temporário', amountEUR: 322.28, note: 'tarifa desde 01.03.2026 (60% IAS); a linha exacta da tabela de taxas depende do tipo de autorização' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Startup Visa — portal oficial do IAPMEI', url: 'https://startupvisa.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IAPMEI — Startup Portugal', url: 'https://www.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — Startup Visa', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
