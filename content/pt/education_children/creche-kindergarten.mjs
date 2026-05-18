export default {
  editorialVoice: 'hackportugal',
  id: 'creche-kindergarten',
  categoryId: 'education_children',
  title: 'Creche e Jardim de Infância em Portugal',
  tldr: 'A Creche (geralmente 0–3) pode ser IPSS/social, privada e, mais raramente, municipal. Ao abrigo do programa **Creche Feliz**, a vaga pode ser gratuita em instituições abrangidas (sobretudo IPSS/rede social)\.\n\nJardim de Infância / educação pré-escolar (3–6 anos) — na rede pública, a componente educativa é gratuita; alimentação, transporte e AAAF/prolongamento podem ser pagos à parte. A frequência do pré-escolar **não é obrigatória** — a escolaridade obrigatória começa aos 6 anos. Inscrição na Creche Feliz: Segurança Social Direta; no Jardim de Infância: Portal das Matrículas.',
  tags: ['creche', 'jardim de infância', 'crianças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Tipos de instituições',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Creche Feliz (creche gratuita para vagas elegíveis) — desde 2022', content: [
            { kind: 'paragraph', text: 'Vaga gratuita em instituições **abrangidas** — sobretudo na rede social/solidária IPSS; creches privadas com fins lucrativos só podem participar cumprindo as regras do programa (normalmente quando não existe vaga adequada na rede social)\.\n\nInicialmente (2022/23), existia limitação aos 1.º–2.º escalões do abono — em 2026 já não é a regra principal. A mensalidade padrão é 0 €; «extras» (serviços adicionais, horários alargados) podem ser pagos à parte.' }
          ]},
          { id: 't2', title: 'Creche IPSS fora da Creche Feliz', content: [
            { kind: 'paragraph', text: 'Se a vaga não estiver abrangida pela Creche Feliz, pode aplicar-se uma comparticipação familiar de acordo com o rendimento, segundo as regras da instituição/Segurança Social. A alimentação costuma estar incluída no valor padrão.' }
          ]},
          { id: 't3', title: 'Creche privada', content: [
            { kind: 'paragraph', text: 'Instituições comerciais. 400–1200 €/mês em Lisboa e no Porto. Existem opções internacionais com inglês, francês ou alemão.' }
          ]},
          { id: 't4', title: 'Jardim de Infância / educação pré-escolar (3–6 anos)', content: [
            { kind: 'paragraph', text: 'Na rede pública, a componente educativa é gratuita. **A frequência não é obrigatória** — a escolaridade obrigatória começa aos 6 anos. Alimentação, transporte escolar e AAAF/prolongamento podem ser pagos ou subsidiados, dependendo do município e do escalão da Ação Social Escolar (ASE).' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-creche',
      title: 'Inscrição na Creche',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Candidatar-se através da Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Para vagas ao abrigo da Creche Feliz: SSD → Família → Creche Feliz / Pedido de Creche. Confirme no portal o limite atual de escolha de instituições. Para creches privadas ou vagas fora do programa, candidate-se diretamente junto da instituição.' }
          ]},
          { id: 'c2', title: '2. Documentos', content: [
            { kind: 'checklist', items: [
              'NISS da criança e dos pais',
              'Declaração de IRS e nota de liquidação / comprovativo de rendimentos',
              'Certidão de nascimento',
              'Comprovativo de morada',
              'Se necessário, comprovativo do escalão de abono / composição do agregado familiar'
            ]}
          ]},
          { id: 'c3', title: '3. Prioridade', content: [
            { kind: 'paragraph', text: 'Escalão do abono de família + irmãos/irmãs na mesma instituição + proximidade à morada de trabalho ou de residência.' }
          ]},
          { id: 'c4', title: '4. Aguardar resposta', content: [
            { kind: 'timeline', text: '1–6 meses. Em Lisboa e no Porto, a lista de espera para Creche é enorme — candidate-se antes do nascimento ou aos 1–2 meses.' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-jardim',
      title: 'Inscrição no Jardim de Infância',
      content: [
        { kind: 'substeps', items: [
          { id: 'j1', title: '1. Portal das Matrículas', content: [
            { kind: 'paragraph', text: 'portaldasmatriculas.edu.gov.pt → início de sessão/autenticação (Chave Móvel Digital / Cartão de Cidadão / NIF+palavra-passe AT) → escolher instituições/agrupamentos por ordem de preferência. Se não conseguir autenticar-se online, contacte a escola/agrupamento.' }
          ]},
          { id: 'j2', title: '2. Prazos', content: [
            { kind: 'paragraph', text: 'O calendário é publicado anualmente (despacho); normalmente a apresentação de candidaturas ao pré-escolar/1.º ano decorre em abril–maio. As datas exatas e os prazos de publicação das colocações estão no Portal das Matrículas para o ano letivo concreto.' }
          ]},
          { id: 'j3', title: '3. Prioridade', content: [
            { kind: 'paragraph', text: 'Idade (crianças mais velhas primeiro), zona, irmãos/irmãs.' }
          ]}
        ]}
      ]
    },
    {
      id: 'private-international',
      title: 'Jardins de infância privados internacionais',
      content: [
        { kind: 'paragraph', text: 'Para famílias russófonas, opções populares em Lisboa:' },
        { kind: 'checklist', items: [
          'Clube Russo Carlos Freixo, Oeiras — língua e cultura russas',
          'St. Julian\'s School (Carcavelos) — britânico, 2–18 anos',
          'International Preparatory School — escola internacional/British-style em inglês; confirme no site as faixas etárias/preços',
          'Escola Alemã (Lisboa) — alemão',
          'Lycée Français Charles Lepierre — francês'
        ]},
        { kind: 'paragraph', text: 'A tuition costuma ser 8 000–18 000 €/ano, mas first-year registration/capital fees, alimentação, uniforme, transporte e after-school care normalmente são extra — confirme a fee table da escola concreta.' }
      ]
    }
  ],
  costs: [
    { label: 'Creche Feliz (vaga abrangida)', amountEUR: 0, note: 'mensalidade padrão de 0 €, sobretudo em IPSS/rede social; privados participantes apenas segundo as regras do programa; extras/extended services podem ser pagos' },
    { label: 'Creche IPSS fora da Creche Feliz', note: 'comparticipação familiar de acordo com o rendimento — varia por instituição/fórmula familiar' },
    { label: 'Creche privada', amountEURMin: 400, amountEURMax: 1200, note: '/mês em grandes cidades' },
    { label: 'Jardim de Infância público (componente educativa)', amountEUR: 0, note: 'alimentação/AAAF/transporte podem ser pagos pelo município/ASE' },
    { label: 'Jardim privado / internacional', amountEURMin: 300, amountEURMax: 1500, note: '/mês' }
  ],
  sources: [
    { title: 'Segurança Social — Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Matrículas', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Orientações Curriculares para a Educação Pré-Escolar', url: 'https://www.dge.mec.pt/orientacoes-curriculares-para-educacao-pre-escolar', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
