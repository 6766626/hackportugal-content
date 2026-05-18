export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-de-cidadao',
  categoryId: 'documents_fiscal',
  title: 'Cartão de Cidadão — documento de identificação do cidadão português (para estrangeiros — Título de Residência)',
  tldr: 'O Cartão de Cidadão (CC) é o documento nacional de identificação dos cidadãos portugueses; é aceite como travel document na UE/EEE/Suíça e em alguns países. Agrega identificadores civis, fiscais (NIF), de segurança social (NISS) e do SNS (utente), quando atribuídos. Os residentes estrangeiros recebem normalmente um Título de Residência (cartão de autorização de residência) — comprova o direito de residência, mas não é um equivalente completo do CC: não dá direito de voto, nem CC-eID/assinatura digital. A substituição/renovação é feita no IRN ou numa Loja de Cidadão.',
  tags: ['cc', 'documentos', 'cartão de cidadão'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'for-whom',
      title: 'Quem obtém o CC',
      content: [
        { kind: 'checklist', items: [
          'Cidadãos portugueses (obrigatório a partir do 20.º dia após o registo de nascimento)',
          'Recém-nascidos cidadãos portugueses: o CC pode ser pedido de imediato através do serviço Nascer Cidadão no momento do registo de nascimento',
          'Os residentes estrangeiros normalmente não obtêm CC — o seu documento principal é o Título de Residência (direito de residência), que não é um equivalente completo do CC',
          'Exceções específicas: cidadãos do Brasil com estatuto de igualdade de direitos (Estatuto de Igualdade) podem obter CC'
        ]},
        { kind: 'warning', text: 'Se se naturalizou → após o registo no Registo Civil, pode pedir o CC. O processo está descrito abaixo.' }
      ]
    },
    {
      id: 'functions',
      title: 'Funções do CC',
      content: [
        { kind: 'checklist', items: [
          'Documento de identificação do cidadão português; é aceite como travel document para viagens na UE/EEE/Suíça e em alguns países. Fora destes regimes — é necessário passaporte',
          'Contém/agrega o NIF (número fiscal), se atribuído',
          'Contém/agrega o NISS (número de identificação da segurança social), se atribuído',
          'Contém/agrega o Número de Utente (número de utente do SNS), se atribuído',
          'Biométrico: fotografia; impressões digitais — a partir da idade legalmente estabelecida (a partir dos 12 anos nos termos do Regulamento UE 2019/1157)',
          'Chip para assinatura digital (requer leitor USB ou telefone com NFC) quando os certificados estão ativos',
          'PIN para ativação',
          'Votação em eleições (para cidadãos portugueses)',
          'Identificação em cooperativas, bibliotecas, escolas'
        ]}
      ]
    },
    {
      id: 'first-time',
      title: 'Primeira emissão',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Para recém-nascidos', content: [
            { kind: 'paragraph', text: 'O CC pode ser pedido separadamente no momento do registo de nascimento, muitas vezes logo através do Nascer Cidadão / Conservatória. Para um cidadão português, o documento é obrigatório a partir do 20.º dia após o registo de nascimento. A validade do CC até aos 25 anos é de 5 anos.' }
          ]},
          { id: 'f2', title: 'Para cidadãos naturalizados', content: [
            { kind: 'paragraph', text: 'Após a conclusão do processo de nacionalidade e o registo no Registo Civil, pode pedir o primeiro CC no IRN/Loja de Cidadão/consulado. O prazo de emissão depende do tipo de pedido: normal, urgente, extremamente urgente — e do local de levantamento.' }
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
            { kind: 'paragraph', text: 'Validade: 5 anos para cidadãos com menos de 25 anos; 10 anos para cidadãos a partir dos 25 anos. 6 meses antes do fim da validade — marque a renovação.' }
          ]},
          { id: 'r2', title: 'Como', content: [
            { kind: 'paragraph', text: 'Marque através do ePortugal/IRN, escolha um balcão IRN/Loja de Cidadão/Espaço Cidadão disponível (se o serviço específico estiver aí disponível). Numa renovação normal, geralmente é necessário o CC atual e a carta PIN; a confirmação de morada é necessária se alterar a morada ou se a entidade a solicitar.\n\nO prazo de emissão depende do tipo de pedido (normal/urgente/extremamente urgente) e do local de entrega.' }
          ]},
          { id: 'r3', title: 'Perda / furto', content: [
            { kind: 'paragraph', text: 'Cancele urgentemente o CC e os certificados digitais através do ePortugal/Autenticação.gov ou da Linha Cartão de Cidadão. Em caso de furto — apresente queixa à polícia (PSP/GNR).\n\nDepois, peça um novo CC no IRN/Loja de Cidadão/consulado, de acordo com a tarifa aplicável (normal/urgente/extremamente urgente).\n\nO auto policial não é obrigatório em caso de simples perda, mas é importante em caso de furto.' }
          ]}
        ]}
      ]
    },
    {
      id: 'digital',
      title: 'Vertente digital do CC',
      content: [
        { kind: 'paragraph', text: 'O CC pode ser utilizado para autenticação.gov e para iniciar sessão em muitos serviços públicos, quando os certificados estão ativos e existe PIN, leitor ou telefone compatível com NFC. Para alguns serviços, podem estar disponíveis/ser exigidas alternativas (CMD, login próprio).' },
        { kind: 'paragraph', text: 'Os estrangeiros utilizam normalmente a Chave Móvel Digital (CMD): para a ativação são necessários NIF e um documento/cartão de residente válido; os métodos de ativação disponíveis dependem da situação. A CMD cobre a maioria dos logins de e-government, mas não é um documento físico de identificação.' }
      ]
    }
  ],
  costs: [
    { label: 'Cidadãos com menos de 25 anos (normal, em Portugal)', amountEUR: 15 },
    { label: 'Cidadãos a partir dos 25 anos (normal, em Portugal)', amountEUR: 18, note: 'IRN 2026' },
    { label: 'Urgente (a partir de 3 dias úteis, em Portugal)', amountEUR: 33 },
    { label: 'Extremamente urgente (depende do local e da hora do pedido)', amountEUR: 53 },
    { label: 'Desconto online na renovação online', amountEUR: 0, note: 'normalmente −10%' },
    { label: 'Substituição após perda/furto', amountEUR: 0, note: 'tarifa = novo pedido normal/urgente consoante a idade, e não uma taxa fixa única' }
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
