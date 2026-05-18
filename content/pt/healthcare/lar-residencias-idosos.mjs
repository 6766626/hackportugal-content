export default {
  editorialVoice: 'hackportugal',
  id: 'lar-residencias-idosos',
  categoryId: 'healthcare',
  title: 'Lar de Idosos / ERPI — lares de idosos em Portugal',
  tldr: 'ERPI é a designação oficial dos lares de idosos em Portugal: Estruturas Residenciais para Pessoas Idosas.\n\nEm 2026, as vagas dividem-se entre sociais, através da Segurança Social/IPSS, e totalmente privadas. Uma vaga social costuma custar cerca de 600–1 500 €/mês e depende dos rendimentos da família; uma IPSS sem subsidiação completa — 800–2 500 €/mês; ERPI privadas — 1 500–4 500 €/mês. As listas de espera são longas: 12–36 meses em Lisboa, Porto e zonas costeiras. Verifique a licença através da Carta Social.',
  tags: ['erpi', 'idosos', 'saúde', 'apoio social'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-erpi',
      title: 'O que é uma ERPI e em que difere de uma cuidadora',
      content: [
        { kind: 'paragraph', text: 'Lar de Idosos, na linguagem corrente, quase sempre significa ERPI — Estrutura Residencial para Pessoas Idosas. É uma instituição com alojamento, alimentação, cuidados, apoio médico básico e actividade social para pessoas idosas que não conseguem viver sozinhas em segurança ou que precisam de ajuda permanente.' },
        { kind: 'paragraph', text: 'Uma ERPI não é um hospital nem uma unidade de cuidados continuados. Se a pessoa precisar de reabilitação após um AVC, cuidados paliativos ou vigilância médica 24 horas por dia, deve verificar-se primeiro o encaminhamento através do SNS/RNCCI. A ERPI é adequada para cuidados quotidianos de longa duração: alimentação, higiene, medicação, supervisão, ajuda na mobilidade.' },
        { kind: 'checklist', items: [
          'ERPI / Lar de Idosos — residência permanente de uma pessoa idosa',
          'Centro de Dia — centro diurno sem pernoita',
          'Serviço de Apoio Domiciliário — apoio em casa: refeições, higiene, limpeza, medicação',
          'Residência Sénior privada — lar de idosos comercial, frequentemente mais caro, mas mais rápido',
          'IPSS — organização sem fins lucrativos com acordos com a Segurança Social',
          'Santa Casa da Misericórdia — operador frequente de ERPI sociais nos municípios',
          'RNCCI — rede de cuidados continuados após doença; não é um lar de idosos comum'
        ] }
      ]
    },
    {
      id: 'types-and-prices',
      title: 'Tipos de vagas e preços reais em 2026',
      content: [
        { kind: 'paragraph', text: 'O preço depende não só da qualidade da instituição, mas também do tipo de vaga. A distinção mais importante é entre uma vaga com acordo com a Segurança Social, uma vaga numa IPSS sem subsidiação completa e uma vaga totalmente privada.' },
        { kind: 'checklist', items: [
          'Vaga social através da Segurança Social/IPSS: cerca de 600–1 500 €/mês; o valor é calculado com base nos rendimentos da pessoa idosa e da família',
          'IPSS com pagamento parcial ou sem vaga subsidiada disponível: cerca de 800–2 500 €/mês',
          'ERPI privada / residência sénior: cerca de 1 500–4 500 €/mês',
          'Lisboa, Cascais, Oeiras, Porto e Algarve são geralmente mais caros do que as zonas do interior',
          'Um quarto para 2–3 pessoas é mais barato do que um quarto individual',
          'Pessoa acamada, demência, vigilância nocturna, oxigénio, dietas especiais e fraldas podem aumentar a factura',
          'O depósito inicial ou caução em lares privados é frequentemente igual a 1 mês de pagamento',
          'Podem ser cobrados à parte medicamentos, fraldas, transporte, fisioterapia, cabeleireiro, medicina dentária e consultas privadas'
        ] },
        { kind: 'warning', text: 'Não se oriente apenas pelo preço anunciado “desde 1 200 €”. Peça a minuta do contrato e a lista de extras antes de assinar. Numa ERPI, 1 400 €/mês podem facilmente transformar-se em 1 700–1 900 €/mês por causa de medicamentos, fraldas, lavandaria ou transporte.' }
      ]
    },
    {
      id: 'how-to-find-place',
      title: 'Como procurar uma vaga: Carta Social, Segurança Social, município',
      content: [
        { kind: 'paragraph', text: 'Comece pela Carta Social — é o catálogo oficial das instituições sociais em Portugal. Aí pode procurar ERPI por distrito, concelho e freguesia, ver o tipo de resposta social, a capacidade e os contactos. Depois telefone directamente às instituições e, em paralelo, contacte a Segurança Social da área de residência.' },
        { kind: 'substeps', items: [
          {
            id: 'search-carta-social',
            title: '1. Verificar instituições na Carta Social',
            content: [
              { kind: 'checklist', items: [
                'Abra cartasocial.pt',
                'Seleccione resposta social: Estrutura Residencial para Pessoas Idosas',
                'Filtre pelo concelho onde a família consegue realmente visitar a pessoa idosa',
                'Guarde 10–20 contactos: há lista de espera em quase todo o lado',
                'Verifique se está indicada a entidade proprietária: IPSS, Misericórdia, empresa privada',
                'Telefone, em vez de esperar por resposta por email: as ERPI têm frequentemente comunicação administrativa fraca'
              ] }
            ]
          },
          {
            id: 'contact-social-security',
            title: '2. Marcar atendimento na Segurança Social',
            content: [
              { kind: 'paragraph', text: 'Para uma vaga social, é importante a avaliação socioeconómica: rendimentos, estado de saúde, grau de dependência, existência de família, habitação, urgência. A marcação é feita através da Segurança Social Direta, da Linha Segurança Social ou do atendimento presencial.' }
            ]
          },
          {
            id: 'ask-local-network',
            title: '3. Envolver o Centro de Saúde e a Junta de Freguesia',
            content: [
              { kind: 'paragraph', text: 'O médico de família, o assistente social no Centro de Saúde, a Junta de Freguesia e a Câmara Municipal conhecem frequentemente as IPSS locais, a Santa Casa da Misericórdia e as listas de espera melhor do que os sites centrais.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'documents-and-admission',
      title: 'Documentos e critérios de admissão',
      content: [
        { kind: 'paragraph', text: 'A admissão numa ERPI é quase sempre sujeita a avaliação de recursos: a instituição analisa os rendimentos e o património da pessoa idosa, o apoio da família, as necessidades médicas e o risco social. Para estrangeiros, são importantes a residência legal, NIF, SNS/utente e documentos de rendimento claros.' },
        { kind: 'checklist', items: [
          'Passaporte, autorização de residência ou Cartão de Cidadão / cartão de residência',
          'NIF',
          'Número de utente SNS',
          'NISS, se existir',
          'Documento da pensão: Segurança Social, Caixa Geral de Aposentações ou pensão estrangeira',
          'Declaração de IRS / nota de liquidação ou comprovativo de inexistência de IRS em Portugal',
          'Extractos bancários, se a instituição pedir para avaliar rendimentos',
          'Relatório médico do médico de família ou de especialista',
          'Lista de medicamentos e diagnósticos',
          'Contacto do familiar responsável ou representante legal',
          'Documento de incapacidade ou grau de dependência, se existir',
          'Procuração ou tutela judicial, se a pessoa idosa não puder assinar o contrato'
        ] },
        { kind: 'warning', text: 'Se a pessoa idosa tiver demência e já não compreender as consequências do contrato, uma assinatura simples pode não ser suficiente. É necessária uma procuração feita antecipadamente ou representação legal através do tribunal. Não deixe isto para o momento de crise.' }
      ]
    },
    {
      id: 'waiting-lists-and-urgent-cases',
      title: 'Listas de espera: por que motivo são 12–36 meses e o que fazer em caso urgente',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a procura por ERPI é superior à oferta. Nas grandes cidades e no litoral, a lista de espera típica para uma vaga social é de 12–36 meses. Pode ser mais rápido no interior, mas isso dificulta as visitas da família e o controlo de qualidade.' },
        { kind: 'checklist', items: [
          'Inscreva-se em várias listas de espera ao mesmo tempo: IPSS, Misericórdia, ERPI privada',
          'Não espere pela vaga “ideal” perto de casa — verifique concelhos vizinhos',
          'Peça ao assistente social para elaborar um relatório social, se a situação for urgente',
          'Se houver risco de quedas, violência, sem-abrigo ou impossibilidade de prestar cuidados, informe a Segurança Social e o SNS',
          'Considere temporariamente Serviço de Apoio Domiciliário + Centro de Dia',
          'Para recuperação após internamento, pergunte ao médico sobre a RNCCI, não sobre ERPI',
          'Para uma vaga privada, negoceie os extras e a caução, mas não a segurança básica',
          'Visite a instituição pessoalmente sem aviso prévio em horários diferentes, se possível'
        ] },
        { kind: 'warning', text: '“Há vaga amanhã, pague o depósito por MB WAY” — é um sinal de alerta. Verifique a entidade jurídica, a licença, a morada, o contrato de prestação de serviços e a existência da instituição na Carta Social. Não transfira a caução para uma pessoa singular sem contrato e recibo.' }
      ]
    },
    {
      id: 'quality-check',
      title: 'Como verificar a qualidade e o contrato antes da entrada',
      content: [
        { kind: 'paragraph', text: 'O preço não garante qualidade. Mais importantes são a licença, o pessoal, um contrato transparente, o acesso da família, o plano de cuidados e a reacção a quedas, infecções, demência e medicação.' },
        { kind: 'checklist', items: [
          'Verifique a ERPI na Carta Social e a correspondência da morada com o contrato',
          'Peça a licença de funcionamento ou o número de registo',
          'Confirme o rácio de pessoal durante o dia e durante a noite',
          'Pergunte quem gere os medicamentos e como são registados os erros',
          'Verifique a existência de enfermeiro, médico assistente, fisioterapia, plano individual de cuidados',
          'Observe o cheiro, a limpeza, o estado das casas de banho, os botões de chamada e a alimentação',
          'Confirme as regras de visitas, videochamadas e saídas para passeios',
          'Peça o menu semanal e a lista de serviços incluídos',
          'Verifique se é possível rescindir o contrato e com quantos dias de antecedência',
          'Confirme o que acontece em caso de hospitalização: se a vaga é mantida e se o mês completo é pago',
          'Peça todos os extras num anexo escrito ao contrato'
        ] },
        { kind: 'paragraph', text: 'Para expatriados, uma questão prática importante é a língua. Em lares privados em Lisboa, Cascais, Porto e Algarve, é mais comum haver pessoal que fala inglês; a língua russa é rara. Se a pessoa idosa não falar português, prepare antecipadamente um cartão com diagnósticos, medicamentos, alergias e frases básicas.' }
      ]
    }
  ],
  costs: [
    { label: 'Vaga social Segurança Social / IPSS', amountEURMin: 600, amountEURMax: 1500, note: 'Valor indicativo mensal; a comparticipação efectiva depende dos rendimentos da pessoa idosa e da família.' },
    { label: 'IPSS sem subsidiação completa', amountEURMin: 800, amountEURMax: 2500, note: 'Valor indicativo mensal; o preço depende da região, do quarto e do nível de dependência.' },
    { label: 'ERPI privada / residência sénior', amountEURMin: 1500, amountEURMax: 4500, note: 'Valor indicativo mensal; unidades premium em Cascais, Lisboa, Porto e Algarve podem ser mais caras.' },
    { label: 'Caução / depósito em ERPI privada', amountEURMin: 1500, amountEURMax: 4500, note: 'Frequentemente igual a 1 mês de pagamento; as condições de devolução devem constar do contrato.' }
  ],
  sources: [
    { title: 'Segurança Social — respostas sociais para pessoas idosas', url: 'https://www.seg-social.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carta Social — pesquisa oficial de ERPI e outras respostas sociais', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — apoio social a pessoas idosas', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
