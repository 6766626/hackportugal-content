export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-de-cidadao',
  categoryId: 'documents_fiscal',
  title: 'Cartão de Cidadão — documento de identificação do cidadão português (para estrangeiros — Título de Residência)',
  tldr: 'O Cartão de Cidadão (CC) é o documento nacional de identificação dos cidadãos portugueses; é aceite como documento de viagem na UE/EEE/Suíça e em alguns países. Associa os identificadores civis, fiscais (NIF), da Segurança Social (NISS) e do SNS (utente), quando atribuídos. Os residentes estrangeiros recebem normalmente o Título de Residência (cartão de autorização de residência) — é a prova do direito de residência, mas não é um equivalente completo do CC: não dá direito de voto, nem CC-eID/assinatura digital. Substituição/renovação — no IRN ou numa Loja de Cidadão.',
  tags: ['cc', 'documentos', 'cartão de cidadão'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'for-whom',
      title: 'Quem recebe o CC',
      content: [
        { kind: 'checklist', items: [
          'Cidadãos portugueses (obrigatório a partir do 20.º dia após o registo do nascimento)',
          'Recém-nascidos cidadãos portugueses: o CC pode ser pedido logo através do serviço Nascer Cidadão no momento do registo do nascimento',
          'Residentes estrangeiros normalmente não recebem CC — o seu documento principal é o Título de Residência (direito de residência), que não é um equivalente completo do CC',
          'Algumas excepções: cidadãos do Brasil com estatuto de igualdade de direitos (Estatuto de Igualdade) podem obter o CC'
        ]},
        { kind: 'warning', text: 'Se se naturalizou → após o registo no Registo Civil, pode pedir o CC. O processo é descrito abaixo.' }
      ]
    },
    {
      id: 'functions',
      title: 'Funções do CC',
      content: [
        { kind: 'checklist', items: [
          'Documento de identificação do cidadão português; é aceite como documento de viagem para deslocações na UE/EEE/Suíça e em alguns países. Fora destes regimes — é necessário passaporte',
          'Contém/associa o NIF (número fiscal), se atribuído',
          'Contém/associa o NISS (número de Segurança Social), se atribuído',
          'Contém/associa o Número de Utente (número de utente do SNS), se atribuído',
          'Biométrico: fotografia; impressões digitais — a partir da idade prevista na lei (a partir dos 12 anos, segundo o Regulamento UE 2019/1157)',
          'Chip para assinatura digital (requer leitor USB ou telemóvel com NFC) quando os certificados estão activos',
          'PIN para activação',
          'Votação em eleições (para cidadãos portugueses)',
          'Identificação em cooperativas, bibliotecas, escolas'
        ]}
      ]
    },
    {
      id: 'first-time',
      title: 'Primeiro pedido',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Para recém-nascidos', content: [
            { kind: 'paragraph', text: 'O CC pode ser pedido separadamente no momento do registo do nascimento, muitas vezes logo através do Nascer Cidadão / Conservatória. Para um cidadão português, o documento é obrigatório a partir do 20.º dia após o registo do nascimento. A validade do CC até aos 25 anos é de 5 anos.' }
          ]},
          { id: 'f2', title: 'Para cidadãos naturalizados', content: [
            { kind: 'paragraph', text: 'Depois de concluído o processo de nacionalidade e o registo no Registo Civil, pode pedir o primeiro CC no IRN/Loja de Cidadão/consulado. O prazo de emissão depende do tipo de pedido: normal, urgente, extremamente urgente — e do local de levantamento.' }
          ]}
        ]}
      ]
    },
    {
      id: 'renew',
      title: 'Renovação / substituição',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Quando renovar', content: [
            { kind: 'paragraph', text: 'Validade: 5 anos para cidadãos com menos de 25 anos; 10 anos para cidadãos a partir dos 25 anos. 6 meses antes de expirar — faça marcação para renovação.' }
          ]},
          { id: 'r2', title: 'Como fazer', content: [
            { kind: 'paragraph', text: 'Faça marcação através do ePortugal/IRN, escolha um balcão IRN/Loja de Cidadão/Espaço Cidadão disponível (se esse serviço concreto estiver disponível nesse local). Numa renovação normal, normalmente é necessário o CC actual e a carta PIN; a confirmação de morada é necessária se alterar a morada ou se a entidade a solicitar. O prazo de emissão depende do tipo de pedido (normal/urgente/extremamente urgente) e do local de entrega.' }
          ]},
          { id: 'r3', title: 'Perda / roubo', content: [
            { kind: 'paragraph', text: 'Cancele (cancelar) urgentemente o CC e os certificados digitais através do ePortugal/Autenticação.gov ou da Linha Cartão de Cidadão. Em caso de roubo — apresente queixa à polícia (PSP/GNR). Depois, peça um novo CC no IRN/Loja de Cidadão/consulado, de acordo com a tarifa aplicável (normal/urgente/extremamente urgente). O auto policial não é obrigatório em caso de simples perda, mas é importante em caso de roubo.' }
          ]}
        ]}
      ]
    },
    {
      id: 'digital',
      title: 'A vertente digital do CC',
      content: [
        { kind: 'paragraph', text: 'O CC pode ser usado para autenticação.gov e para entrar em muitos serviços públicos quando os certificados estão activos e existe PIN, leitor ou telemóvel compatível com NFC. Para alguns serviços, podem estar disponíveis/ser exigidas alternativas (CMD, login próprio).' },
        { kind: 'paragraph', text: 'Os estrangeiros utilizam normalmente a Chave Móvel Digital (CMD): para a activar são necessários NIF e um documento/cartão de residente válido; os métodos de activação disponíveis dependem da situação. A CMD cobre a maioria dos logins de e-government, mas não é um documento físico de identificação.' }
      ]
    }
  ],
  costs: [
    { label: 'Cidadãos com menos de 25 anos (normal, em Portugal)', amountEUR: 15 },
    { label: 'Cidadãos a partir dos 25 anos (normal, em Portugal)', amountEUR: 18, note: 'IRN 2026' },
    { label: 'Urgente (a partir de 3 dias úteis, em Portugal)', amountEUR: 33 },
    { label: 'Extremamente urgente (depende do local e da hora do pedido)', amountEUR: 53 },
    { label: 'Desconto online na renovação online', amountEUR: 0, note: 'normalmente −10%' },
    { label: 'Substituição após perda/roubo', amountEUR: 0, note: 'tarifa = novo pedido normal/urgente conforme a idade, e não uma taxa fixa única' }
  ],
  sources: [
    { title: 'ePortugal — Cartão de Cidadão (pedir/renovar/cancelar)', url: 'https://eportugal.gov.pt/servicos/pedir-o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Cartão de Cidadão (serviço)', url: 'https://irn.justica.gov.pt/Servicos/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Autenticação.gov — Cartão de Cidadão', url: 'https://www.autenticacao.gov.pt/o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Regulamento (UE) 2019/1157 — biometria eID', url: 'https://eur-lex.europa.eu/eli/reg/2019/1157/oj', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
