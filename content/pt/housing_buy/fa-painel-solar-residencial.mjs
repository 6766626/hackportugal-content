export default {
  editorialVoice: 'hackportugal',
  id: 'fa-painel-solar-residencial',
  categoryId: 'housing_buy',
  title: 'Fundo Ambiental: voucher para painéis solares em habitação',
  tldr: 'O Fundo Ambiental abre periodicamente concursos para compensação de painéis solares para habitação: solar fotovoltaico para autoconsumo e solar térmico para água quente. Em Avisos típicos, o limite por dwelling chegou a cerca de 2 500 €, mas não é um benefício permanente: em abril de 2026 é necessário aguardar um novo Aviso/uma nova ronda PRR e consultar as condições da vaga concreta. São necessários habitação em Portugal, NIF, ausência de dívidas à AT/Segurança Social, fatura e instalador da lista admissível.',
  tags: ['fundoambiental', 'solar', 'habitação', 'upac'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é este voucher e a quem interessa',
      content: [
        { kind: 'paragraph', text: 'O Fundo Ambiental é um fundo público através do qual Portugal distribui subsídios para a eficiência energética da habitação. Para sistemas solares, normalmente não se trata de um “desconto na loja”, mas de uma compensação de parte das despesas após a instalação e a submissão da candidatura no portal do Fundo Ambiental.' },
        { kind: 'paragraph', text: 'O apoio pode cobrir solar fotovoltaico — painéis para autoconsumo de eletricidade — e solar térmico — painéis para aquecimento de água. Em rondas anteriores do Edifícios + Sustentáveis, os limites por tipologias individuais chegaram a cerca de 2 500 € por dwelling, mas as percentagens, tetos e eligible expenses exatos são sempre definidos pelo Aviso concreto.' },
        { kind: 'warning', text: 'Em abril de 2026, isto não é um direito automático do proprietário da habitação. Se o novo Aviso ainda não estiver aberto, não é possível garantir o pagamento por uma instalação feita “com efeitos retroativos”. Antes de assinar contrato, verifique a data de admissibilidade das despesas no Aviso em vigor.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem costuma cumprir as condições',
      content: [
        { kind: 'checklist', items: [
          'A habitação situa-se em Portugal: apartamento ou moradia usados como habitação.',
          'O requerente tem NIF e acesso ao Portal do Fundo Ambiental; para expats, NIF + email/palavra-passe é suficiente, e por vezes a CMD simplifica o acesso.',
          'O requerente é proprietário, comproprietário, usufrutuário ou outro titular, se o Aviso o permitir expressamente.',
          'Não existem dívidas à Autoridade Tributária e à Segurança Social; normalmente são necessárias certidões de não dívida.',
          'As despesas são comprovadas por fatura e recibo em nome do requerente, com NIF português.',
          'O equipamento é novo, instalado numa eligible dwelling e cumpre os requisitos técnicos do Aviso.',
          'O instalador/a empresa cumpre os requisitos do Fundo Ambiental; em algumas rondas é necessário escolher de uma lista de aderentes ou apresentar certificação.',
          'O IBAN pertence ao requerente; a compensação chega por transferência bancária após verificação.',
          'A candidatura é submetida dentro do prazo e antes de se esgotar o orçamento do concurso.'
        ] },
        { kind: 'warning', text: 'Um arrendatário sem consentimento do proprietário está quase sempre numa posição frágil: os painéis alteram a configuração técnica da habitação e exigem autorização do proprietário/condomínio. Para apartamento, verifique também as regras do condomínio e o acesso ao telhado.' }
      ]
    },
    {
      id: 'amounts-and-2026-timing',
      title: 'Quanto é atribuído e quando esperar a ronda de 2026',
      content: [
        { kind: 'paragraph', text: 'O Fundo Ambiental funciona através de Aviso: o documento do concurso define o orçamento, as datas, as percentagens de compensação, o limite por tipo de equipamento e a lista de documentos. Em 2026, oriente-se não pelo banner publicitário do instalador, mas pelo PDF do Aviso em fundoambiental.pt.' },
        { kind: 'paragraph', text: 'Referência prática para um sistema solar doméstico: a compensação pode ser parcial — por exemplo, até 85% do eligible cost em programas anteriores de eficiência energética, mas com teto por tipologia. Para solar térmico ou PV com storage, o limite podia ser mais alto, cerca de 2 500 €; para PV simples sem bateria, o teto podia ser inferior. Na nova vaga, os valores podem ser diferentes.' },
        { kind: 'checklist', items: [
          'Consulte a secção «Avisos Abertos» em fundoambiental.pt.',
          'Veja o nome do programa: Edifícios + Sustentáveis, Vale Eficiência ou outro instrumento PRR/Clima — as condições diferem.',
          'Registe a data de abertura e a data de admissibilidade das despesas.',
          'Confirme se é possível candidatar um sistema já instalado ou apenas despesas posteriores à publicação do Aviso.',
          'Verifique se existe limite majorado para zonas fora de Lisboa/Porto ou para agregados familiares vulneráveis.',
          'Não conte com o pagamento se o orçamento do Aviso se esgotar: as candidaturas são normalmente analisadas por ordem de submission e de completude.'
        ] }
      ]
    },
    {
      id: 'before-installation',
      title: 'O que fazer antes da instalação dos painéis',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-property', title: '1. Verificar o imóvel e as restrições', content: [
            { kind: 'checklist', items: [
              'Para moradia: orientação do telhado, sombras, estado das telhas, potência da ligação.',
              'Para apartamento: ata do condomínio, direito de usar o telhado, local para o inversor e o cabo.',
              'Para zonas históricas: restrições da Câmara Municipal ou da DGPC podem proibir painéis visíveis.',
              'Para solar térmico: espaço para o depósito, trajetos de água e carga sobre o telhado.',
              'Para PV: consumo previsto durante o dia, existência de heat pump, EV charger ou bateria.'
            ] }
          ] },
          { id: 'choose-installer', title: '2. Escolher um instalador sem armadilhas', content: [
            { kind: 'checklist', items: [
              'Peça um orçamento discriminado: painéis, inversor, estrutura, cabos, proteção, montagem, IVA.',
              'Verifique se a empresa cumpre os requisitos do Aviso em vigor e se consta da lista de fornecedores/instaladores admissíveis, caso a lista tenha sido publicada.',
              'Peça a datasheet do equipamento e a garantia: os painéis têm normalmente 12–25 anos, o inversor frequentemente 5–10 anos.',
              'Confirme se o preço inclui o registo da UPAC na DGEG, se for necessário.',
              'Não pague 100% antes de verificar os documentos para o Fundo Ambiental.'
            ] }
          ] },
          { id: 'paper-trail', title: '3. Reunir logo os documentos corretos', content: [
            { kind: 'checklist', items: [
              'Fatura com o seu NIF e a morada do imóvel.',
              'Recibo ou comprovativo de pagamento: transferência bancária, Multibanco, MB WAY com traceable proof.',
              'Certidão predial ou caderneta predial urbana para relacionar o requerente com o imóvel.',
              'Certidões de não dívida AT e Segurança Social.',
              'Fotografias antes/depois, se o Aviso as exigir.',
              'Ficha técnica do equipamento e declaração do instalador.',
              'Comprovativo IBAN em nome do requerente.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'dgeg-and-grid',
      title: 'Registo da UPAC e ligação à rede',
      content: [
        { kind: 'paragraph', text: 'O PV para autoconsumo em Portugal é regulado pelo regime da UPAC. Os sistemas pequenos passam normalmente por registo simplificado, mas os limiares e obrigações dependem da installed capacity. O instalador deve explicar se é necessária comunicação prévia, registo na DGEG ou certificado de exploração.' },
        { kind: 'paragraph', text: 'Se o sistema injeta excedentes na rede, isso não é o mesmo que o subsídio do Fundo Ambiental. A venda de excedentes exige contrato com um comercializador/agregador e pode ter consequências fiscais. Para um agregado familiar comum, a principal poupança é a redução da fatura EDP/Galp/Iberdrola e do consumo da rede durante as horas diurnas.' },
        { kind: 'warning', text: 'Não instale painéis “sem legalização”. Na venda da casa, num sinistro de seguro ou numa verificação do condomínio, a ausência de documentos DGEG/instalador pode tornar-se um problema.' }
      ]
    },
    {
      id: 'application',
      title: 'Como submeter a candidatura ao Fundo Ambiental',
      content: [
        { kind: 'checklist', items: [
          'Crie uma conta em fundoambiental.pt e escolha o Aviso relevante.',
          'Preencha os dados do beneficiário: NIF, morada, contactos, IBAN.',
          'Indique o imóvel: morada, artigo matricial, tipo de habitação.',
          'Escolha o tipo de intervention: solar fotovoltaico, solar térmico, storage, se disponível.',
          'Carregue a fatura, recibo, documentos técnicos, certidões AT/SS e proof of ownership.',
          'Verifique se os montantes sem/com IVA coincidem com os requisitos do formulário.',
          'Submeta a candidatura e guarde o comprovativo submission.',
          'Responda rapidamente a pedidos de esclarecimento: falhar o prazo leva a indeferimento.',
          'Após aprovação, aguarde o pagamento; os prazos podem ir de semanas a muitos meses.'
        ] },
        { kind: 'warning', text: 'Se a candidatura for rejeitada, normalmente é possível apresentar reclamação/contestação dentro do prazo indicado na notificação. Mas a falta de um documento obrigatório, uma data de fatura incorreta ou um instalador fora das condições do Aviso muitas vezes não se corrigem a posteriori.' }
      ]
    }
  ],
  costs: [
    { label: 'Referência de subsídio do Fundo Ambiental por dwelling', amountEURMax: 2500, note: 'Não é um limite garantido para 2026; depende do Aviso concreto e da tipologia do equipamento.' },
    { label: 'Sistema PV doméstico sem bateria 2–4 kW', amountEURMin: 2500, amountEURMax: 6000, note: 'Ordem de grandeza de preço de mercado com instalação; depende muito do telhado, do inversor e da marca.' },
    { label: 'PV com bateria', amountEURMin: 6000, amountEURMax: 12000, note: 'A bateria aumenta o self-consumption, mas nem sempre compensa sem um cálculo rigoroso do perfil de consumo.' },
    { label: 'Solar térmico para água quente', amountEURMin: 1800, amountEURMax: 4500, note: 'Depende do depósito, do número de coletores, do telhado e da hidráulica.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — portal oficial de programas e Avisos', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGEG — Autoconsumo e UPAC', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/energia/energia-eletrica/producao-de-energia-eletrica/autoconsumo-e-comunidades-de-energia-renovavel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 15/2022 — organização e funcionamento do Sistema Elétrico Nacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/15-2022-177634016', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ADENE — Certificação energética e eficiência em edifícios', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
