export default {
  editorialVoice: 'hackportugal',
  id: 'carta-condicionada-imt',
  categoryId: 'driving_license',
  title: 'Carta de Condução Condicionada: carta com restrições médicas',
  tldr: 'A Carta de Condução Condicionada é uma carta de condução portuguesa normal, mas com códigos de restrição: óculos 01, aparelho auditivo 02, prótese 03, travões/acelerador/volante adaptados 20/25/40, apenas um veículo específico 50, condução diurna 61, entre outros. As restrições são atribuídas com base no atestado médico eletrónico e, em casos complexos, através de junta médica IMT. O AMIM ajuda a comprovar a incapacidade, mas por si só não substitui a avaliação médica para condução.',
  tags: ['imt', 'carta', 'amim', 'medicina'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a carta condicionada',
      content: [
        { kind: 'paragraph', text: 'A Carta de Condução Condicionada não é uma categoria separada de carta, mas sim uma carta de condução com códigos de restrição ou adaptações. Os códigos são impressos no campo 12 da carta de condução e são obrigatórios para o condutor em cada viagem.' },
        { kind: 'paragraph', text: 'As restrições podem ser simples: conduzir apenas com óculos, lentes, aparelho auditivo ou prótese. Podem ser técnicas: veículo com caixa automática, comando manual do travão, deslocação do pedal do acelerador, volante adaptado, banco especial. Por vezes, o direito de conduzir é limitado a um veículo concreto ou a determinadas condições: apenas de dia, sem autoestradas, sem passageiros.' },
        { kind: 'warning', text: 'Se a carta indicar um código de adaptação, mas você conduzir um automóvel sem essa adaptação, isso é considerado condução fora das condições de habilitação. Em caso de acidente, a seguradora e a polícia vão olhar precisamente para os códigos no campo 12.' }
      ]
    },
    {
      id: 'who-needs',
      title: 'Quem precisa disto',
      content: [
        { kind: 'checklist', items: [
          'Pessoas com deficiência visual: óculos/lentes obrigatórios, visão monocular, restrições por grupo de carta.',
          'Pessoas com deficiência auditiva, se o médico indicar a necessidade de aparelho auditivo.',
          'Condutores com amputação, paresia, paralisia cerebral, sequelas de AVC, lesão da coluna ou limitação de mobilidade dos membros.',
          'Condutores após cirurgias ou doenças que afectem a condução: epilepsia, diabetes com risco de hipoglicemia, doenças cardiovasculares, condições neurológicas.',
          'Titulares de AMIM — Atestado Médico de Incapacidade Multiuso, se a incapacidade afectar a capacidade de conduzir em segurança.',
          'Expatriados que trocam carta/licence estrangeira por carta portuguesa e já têm restrições médicas na carta/licence anterior.',
          'Candidatos em escola de condução que precisem de aulas e exame num veículo adaptado.'
        ] },
        { kind: 'paragraph', text: 'Para o grupo 1 — AM, A1, A2, A, B, BE — os requisitos médicos são mais flexíveis do que para o grupo 2. O grupo 2 — C, CE, D, DE, táxi, TVDE, ambulâncias, transporte escolar e condução profissional — é avaliado de forma mais rigorosa; algumas condições admissíveis para B podem impedir categorias profissionais.' }
      ]
    },
    {
      id: 'medical-route',
      title: 'Percurso médico através do médico e do IMT',
      content: [
        { kind: 'substeps', items: [
          { id: 'doctor', title: '1. Obter o atestado médico eletrónico', content: [
            { kind: 'paragraph', text: 'O processo não começa no IMT, mas sim no médico. Para categorias comuns, pode ser o médico de família no SNS ou um médico privado com acesso à emissão eletrónica de atestado médico para carta de condução. O atestado é enviado electronicamente para o sistema do IMT; normalmente não é necessária certidão em papel, mas peça um comprovativo.' },
            { kind: 'checklist', items: [
              'Passaporte ou Cartão de Cidadão / autorização de residência.',
              'NIF e, se tiver, número de utente.',
              'Carta antiga, se for uma troca ou revalidação.',
              'Óculos, lentes, aparelho auditivo, próteses ou ortóteses que usa efectivamente.',
              'Relatórios médicos, resultados de exames, pareceres de oftalmologista/neurologista/cardiologista.',
              'AMIM, se existir: é útil como prova de incapacidade reconhecida, mas não substitui o atestado médico para condução.'
            ] }
          ] },
          { id: 'imt-board', title: '2. Se o caso for complexo — junta médica IMT', content: [
            { kind: 'paragraph', text: 'Se o médico não conseguir declarar de forma inequívoca apto/apto com restrições ou se o IMT identificar risco, o processo é encaminhado para a comissão médica do IMT — junta médica. Esta determina se pode conduzir, quais os códigos a aplicar e se é necessária prova prática num veículo adaptado.' },
            { kind: 'paragraph', text: 'Para a junta médica, é melhor levar um dossier completo: AMIM, relatórios clínicos recentes, lista de medicamentos, descrição das adaptações do veículo, carta estrangeira antiga e traduções, se os documentos não estiverem em PT/EN/ES/FR.' }
          ] },
          { id: 'imt-issue', title: '3. Submeter o pedido no IMT', content: [
            { kind: 'paragraph', text: 'Após a avaliação médica, é submetida a revalidação, emissão, troca de carta estrangeira ou pedido especial através do IMT/IMTonline, balcão IMT ou Espaço Cidadão, se o serviço estiver disponível. O IMT transfere as restrições para o campo 12 da nova carta de condução.' }
          ] }
        ] }
      ]
    },
    {
      id: 'codes',
      title: 'Principais códigos de restrições e adaptações',
      content: [
        { kind: 'paragraph', text: 'Portugal utiliza códigos europeus harmonizados de restrição. Na carta, aparecem como números, por vezes com subcódigos. O que importa não é a tradução, mas a correspondência exacta entre o veículo, o comportamento do condutor e esses códigos.' },
        { kind: 'checklist', items: [
          '01 — correcção da visão: óculos, lentes ou outra correcção óptica.',
          '02 — aparelho auditivo ou dispositivo de comunicação.',
          '03 — prótese ou ortótese de membro.',
          '10 — transmissão modificada, muitas vezes significando, na prática, veículo sem embraiagem convencional.',
          '15 — embraiagem adaptada.',
          '20 — sistema de travagem adaptado.',
          '25 — acelerador / pedal do acelerador adaptado.',
          '30 — adaptações combinadas de travão e acelerador.',
          '35 — comandos adaptados: indicadores de mudança de direcção, luzes, limpa-vidros, etc.',
          '40 — direcção adaptada.',
          '42 — espelhos ou visibilidade adaptados.',
          '43 — banco do condutor adaptado.',
          '44 — adaptações de motociclo.',
          '50 — o direito só é válido para um veículo concreto ou número VIN/chassis.',
          '61–69 — restrições às condições de condução: apenas de dia, num raio a partir de casa, sem passageiros, com limite de velocidade, com acompanhante, sem reboque, sem autoestradas, zero álcool, alcohol interlock.'
        ] },
        { kind: 'warning', text: 'O código 78 “apenas caixa automática” não é um código médico, mas cruza-se frequentemente com a condução adaptada. Se o exame B foi feito num veículo automático, a carta pode ter o código 78; para o remover, é necessário exame/procedimento em veículo com caixa manual segundo as regras do IMT.' }
      ]
    },
    {
      id: 'amim',
      title: 'Percurso para titulares de AMIM',
      content: [
        { kind: 'paragraph', text: 'O AMIM — Atestado Médico de Incapacidade Multiuso — comprova a percentagem de incapacidade para efeitos fiscais, sociais e outros. Para a carta de condução, é útil, mas não constitui autorização ou proibição automática de conduzir. A decisão sobre carta condicionada cabe ao médico da carta de condução e/ou à junta médica IMT.' },
        { kind: 'checklist', items: [
          'Se já tiver AMIM: apresente-o ao médico ao tratar do atestado médico eletrónico.',
          'Se o AMIM indicar incapacidade motora, visual, auditiva ou neurológica, prepare-se para avaliação adicional pelo IMT.',
          'Se precisar de veículo adaptado para aprender, procure uma escola de condução que tenha veículo adaptado às suas restrições.',
          'Se as adaptações não forem standard, peça antecipadamente ao instalador uma declaração técnica e documentos de homologação/inspeção, se aplicável.',
          'Se a carta for estrangeira e já tiver restrições, leve o original e, se necessário, tradução: o IMT tem de compreender que restrições deve transferir.',
          'Se a condição for progressiva, a validade da carta pode ser encurtada: por exemplo, não até à idade normal de revalidação, mas pelo prazo definido pelo médico.'
        ] },
        { kind: 'paragraph', text: 'O INR publica informação de referência sobre os direitos das pessoas com deficiência, AMIM e apoios. A decisão prática sobre a aptidão para conduzir continua, ainda assim, no sistema do IMT e da avaliação médica para condução.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Prática: como não ficar preso na burocracia',
      content: [
        { kind: 'checklist', items: [
          'Não compre um veículo adaptado antes da avaliação médica: primeiro são necessários os códigos, depois a técnica de acordo com esses códigos.',
          'Peça ao médico que indique as restrições da forma mais concreta possível; formulações vagas conduzem muitas vezes a junta médica e atrasos.',
          'Para troca de carta estrangeira, inicie o processo com antecedência: restrições médicas quase sempre aumentam o prazo de tratamento.',
          'Guarde cópias do AMIM, relatórios médicos, comprovativo do atestado eletrónico e correspondência com o IMT.',
          'Antes do exame num veículo adaptado, confirme que a escola de condução acordou o veículo com o IMT.',
          'Depois de receber a nova carta, verifique imediatamente o campo 12: corrigir um código errado leva tempo.',
          'Se a condição tiver melhorado e a restrição já não for necessária, a remoção do código só é feita através de nova avaliação médica e decisão do IMT.',
          'Se a condição tiver piorado, não espere pela revalidação: é mais seguro pedir uma reavaliação médica antes de um acidente ou fiscalização.'
        ] },
        { kind: 'warning', text: 'Em Portugal, o médico pode declarar uma pessoa “inapto” para conduzir se o risco para o condutor e para terceiros for elevado. Nesse caso, o IMT pode não emitir ou pode suspender o direito de conduzir até nova avaliação.' }
      ]
    }
  ],
  costs: [
    { label: 'Emissão ou revalidação da carta de condução no IMT', amountEUR: 30, note: 'Taxa típica do IMT; através do IMTonline aplica-se normalmente um desconto de 10%, ou seja, 27 €.' },
    { label: 'Taxa IMT para condutores a partir dos 70 anos', amountEUR: 15, note: 'Para revalidação após os 70 anos aplica-se uma taxa reduzida; online pode ser mais barato se o desconto estiver disponível.' },
    { label: 'Consulta médica privada para atestado', amountEURMin: 25, amountEURMax: 80, note: 'Mercado das clínicas privadas; no SNS pode ser mais barato, mas depende do Centro de Saúde e da disponibilidade do médico.' },
    { label: 'AMIM através de junta médica de avaliação de incapacidade', amountEUR: 12.5, note: 'Taxa normal pela primeira avaliação de incapacidade; urgência e reavaliação dependem das regras do SNS/ULS.' }
  ],
  sources: [
    {
      title: 'IMT — Carta de condução, revalidação, troca e requisitos médicos',
      url: 'https://www.imt-ip.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'INR — Pessoas com deficiência, AMIM e direitos dos cidadãos com incapacidade',
      url: 'https://www.inr.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei n.º 138/2012 — Regulamento da Habilitação Legal para Conduzir',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2012-175923700',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diretiva 2006/126/CE — categorias europeias e códigos da carta de condução',
      url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32006L0126',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
