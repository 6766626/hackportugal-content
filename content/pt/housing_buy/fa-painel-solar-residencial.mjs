export default {
  editorialVoice: 'hackportugal',
  id: 'fa-painel-solar-residencial',
  categoryId: 'housing_buy',
  title: 'Fundo Ambiental: voucher para painéis solares para habitação',
  tldr: 'O Fundo Ambiental abre periodicamente concursos para compensação de painéis solares para habitação: solar fotovoltaico para autoconsumo e solar térmico para águas quentes. Nos Avisos típicos, o limite por habitação chegou a cerca de 2 500 €, mas não é um benefício permanente: em abril de 2026 é necessário aguardar um novo Aviso/ronda PRR e verificar as condições da vaga concreta. São necessários habitação em Portugal, NIF, inexistência de dívidas à AT/Segurança Social, fatura e instalador de uma lista admissível.',
  tags: ['fundoambiental', 'solar', 'habitação', 'upac'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é este voucher e a quem se destina',
      content: [
        { kind: 'paragraph', text: 'O Fundo Ambiental é um fundo público através do qual Portugal distribui subsídios para a eficiência energética das habitações. Para sistemas solares, normalmente não se trata de um «desconto na loja», mas sim de uma compensação de parte das despesas após a instalação e a apresentação da candidatura no portal do Fundo Ambiental.' },
        { kind: 'paragraph', text: 'O apoio pode abranger solar fotovoltaico — painéis para autoconsumo de eletricidade, e solar térmico — painéis para aquecimento de água. Em rondas anteriores do Edifícios + Sustentáveis, os limites para tipologias individuais chegaram a cerca de 2 500 € por habitação, mas as percentagens exatas, os tetos e as despesas elegíveis são sempre definidos pelo Aviso concreto.' },
        { kind: 'warning', text: 'Em abril de 2026, isto não é um direito automático do proprietário da habitação. Se o novo Aviso ainda não estiver aberto, não é possível garantir o pagamento por uma instalação feita «retroativamente». Antes de assinar contrato, verifique a data de admissibilidade das despesas no Aviso em vigor.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem normalmente cumpre as condições',
      content: [
        { kind: 'checklist', items: [
          'A habitação situa-se em Portugal: apartamento ou moradia utilizados como habitação.',
          'O candidato tem NIF e acesso ao Portal do Fundo Ambiental; para expatriados, NIF + email/palavra-passe é suficiente, por vezes a CMD simplifica o acesso.',
          'O candidato é proprietário, comproprietário, usufrutuário ou outro titular, se tal for expressamente permitido pelo Aviso.',
          'Não existem dívidas à Autoridade Tributária e à Segurança Social; normalmente são necessárias certidões de não dívida.',
          'As despesas são comprovadas por fatura e recibo em nome do candidato com NIF português.',
          'O equipamento é novo, instalado na habitação elegível e cumpre os requisitos técnicos do Aviso.',
          'O instalador/empresa cumpre os requisitos do Fundo Ambiental; em algumas rondas é necessário escolher a partir de uma lista de aderentes ou apresentar certificação.',
          'O IBAN pertence ao candidato; a compensação chega por transferência bancária após verificação.',
          'A candidatura é apresentada dentro do prazo e antes de esgotado o orçamento do concurso.'
        ] },
        { kind: 'warning', text: 'Um arrendatário sem consentimento do proprietário está quase sempre numa posição frágil: os painéis alteram a configuração técnica da habitação e exigem autorização do proprietário/condomínio. Para um apartamento, verifique adicionalmente as regras do condomínio e o acesso ao telhado.' }
      ]
    },
    {
      id: 'amounts-and-2026-timing',
      title: 'Quanto é atribuído e quando esperar a vaga de 2026',
      content: [
        { kind: 'paragraph', text: 'O Fundo Ambiental funciona através de Aviso: o documento do concurso define o orçamento, as datas, as percentagens de compensação, o limite por tipo de equipamento e a lista de documentos. Em 2026, oriente-se não pelo banner publicitário do instalador, mas pelo PDF do Aviso em fundoambiental.pt.' },
        { kind: 'paragraph', text: 'Referência prática para um sistema solar doméstico: a compensação pode ser parcial — por exemplo, até 85% do custo elegível em programas anteriores de eficiência energética, mas com teto por tipologia. Para solar térmico ou PV com storage, o limite podia ser mais alto, cerca de 2 500 €; para PV simples sem bateria, o teto podia ser inferior. Na nova vaga, os valores podem ser diferentes.' },
        { kind: 'checklist', items: [
          'Verifique a secção «Avisos Abertos» em fundoambiental.pt.',
          'Veja o nome do programa: Edifícios + Sustentáveis, Vale Eficiência ou outro instrumento PRR/Clima — as condições são diferentes.',
          'Registe a data de abertura e a data de admissibilidade das despesas.',
          'Confirme se é possível candidatar um sistema já instalado ou apenas despesas posteriores à publicação do Aviso.',
          'Verifique se existe um limite aumentado para zonas fora de Lisboa/Porto ou para agregados familiares vulneráveis.',
          'Não conte com o pagamento se o orçamento do Aviso tiver terminado: as candidaturas são normalmente analisadas por ordem de submissão e completude.'
        ] }
      ]
    },
    {
      id: 'before-installation',
      title: 'O que fazer antes de instalar os painéis',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-property', title: '1. Verificar o imóvel e as limitações', content: [
            { kind: 'checklist', items: [
              'Para uma moradia: orientação do telhado, sombras, estado das telhas, potência da ligação.',
              'Para um apartamento: ata do condomínio, direito de utilização do telhado, local para o inversor e cablagem.',
              'Para zonas históricas: restrições da Câmara Municipal ou da DGPC podem proibir painéis visíveis.',
              'Para solar térmico: espaço para o depósito, trajetos da água e carga sobre o telhado.',
              'Para PV: consumo previsto durante o dia, existência de heat pump, EV charger ou bateria.'
            ] }
          ] },
          { id: 'choose-installer', title: '2. Escolher um instalador sem armadilhas', content: [
            { kind: 'checklist', items: [
              'Peça um orçamento discriminado: painéis, inversor, estrutura, cabos, proteção, montagem, IVA.',
              'Verifique se a empresa cumpre os requisitos do Aviso em vigor e se consta da lista de fornecedores/instaladores admissíveis, caso a lista tenha sido publicada.',
              'Peça a datasheet do equipamento e a garantia: os painéis têm normalmente 12–25 anos, o inversor frequentemente 5–10 anos.',
              'Verifique se o preço inclui o registo UPAC na DGEG, se este for necessário.',
              'Não pague 100% antes de verificar os documentos para o Fundo Ambiental.'
            ] }
          ] },
          { id: 'paper-trail', title: '3. Reunir logo os documentos corretos', content: [
            { kind: 'checklist', items: [
              'Fatura com o seu NIF e a morada do imóvel.',
              'Recibo ou comprovativo de pagamento: transferência bancária, Multibanco, MB WAY com prova rastreável.',
              'Certidão predial ou caderneta predial urbana para ligar o candidato ao imóvel.',
              'Certidões de não dívida à AT e à Segurança Social.',
              'Fotografias antes/depois, se o Aviso as exigir.',
              'Ficha técnica do equipamento e declaração do instalador.',
              'Comprovativo IBAN em nome do candidato.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'dgeg-and-grid',
      title: 'Registo UPAC e ligação à rede',
      content: [
        { kind: 'paragraph', text: 'O PV para autoconsumo em Portugal é regulado pelo regime UPAC. Os sistemas pequenos passam normalmente por registo simplificado, mas os limiares e obrigações dependem da potência instalada. O instalador deve explicar se é necessária comunicação prévia, registo na DGEG ou certificado de exploração.' },
        { kind: 'paragraph', text: 'Se o sistema injeta excedentes na rede, isso não é o mesmo que o subsídio do Fundo Ambiental. A venda de excedentes exige contrato com comercializador/agregador e pode ter consequências fiscais. Para um agregado familiar comum, a principal poupança é a redução da fatura EDP/Galp/Iberdrola e do consumo da rede nas horas diurnas.' },
        { kind: 'warning', text: 'Não instale painéis «sem legalização». Na venda da casa, num sinistro de seguro ou numa verificação do condomínio, a ausência de documentos DGEG/instalador pode tornar-se um problema.' }
      ]
    },
    {
      id: 'application',
      title: 'Como apresentar candidatura ao Fundo Ambiental',
      content: [
        { kind: 'checklist', items: [
          'Crie uma conta em fundoambiental.pt e escolha o Aviso adequado.',
          'Preencha os dados do beneficiário: NIF, morada, contactos, IBAN.',
          'Indique o imóvel: morada, artigo matricial, tipo de habitação.',
          'Escolha o tipo de intervenção: solar fotovoltaico, solar térmico, storage, se disponível.',
          'Carregue a fatura, recibo, documentos técnicos, certidões AT/SS e prova de propriedade.',
          'Verifique se os valores sem/com IVA coincidem com os requisitos do formulário.',
          'Submeta a candidatura e guarde o comprovativo de submissão.',
          'Responda rapidamente a pedidos de esclarecimento: falhar o prazo leva ao indeferimento.',
          'Após a aprovação, aguarde o pagamento; os prazos podem ir de semanas a muitos meses.'
        ] },
        { kind: 'warning', text: 'Se a candidatura for recusada, normalmente é possível apresentar reclamação/contestação dentro do prazo indicado na notificação. Mas a falta de um documento obrigatório, uma data de fatura incorreta ou um instalador fora das condições do Aviso muitas vezes não são corrigíveis a posteriori.' }
      ]
    }
  ],
  costs: [
    { label: 'Referência de subsídio do Fundo Ambiental por habitação', amountEURMax: 2500, note: 'Limite de 2026 não garantido; depende do Aviso concreto e da tipologia do equipamento.' },
    { label: 'Sistema PV doméstico sem bateria 2–4 kW', amountEURMin: 2500, amountEURMax: 6000, note: 'Ordem de preço de mercado com instalação; depende muito do telhado, inversor e marca.' },
    { label: 'PV com bateria', amountEURMin: 6000, amountEURMax: 12000, note: 'A bateria aumenta o self-consumption, mas nem sempre compensa sem um cálculo preciso do perfil de consumo.' },
    { label: 'Solar térmico para águas quentes', amountEURMin: 1800, amountEURMax: 4500, note: 'Depende do depósito, número de coletores, telhado e hidráulica.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — portal oficial dos programas e Avisos', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGEG — Autoconsumo e UPAC', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/energia/energia-eletrica/producao-de-energia-eletrica/autoconsumo-e-comunidades-de-energia-renovavel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 15/2022 — organização e funcionamento do Sistema Elétrico Nacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/15-2022-177634016', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ADENE — Certificação energética e eficiência em edifícios', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
