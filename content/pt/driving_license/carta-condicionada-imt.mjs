export default {
  editorialVoice: 'hackportugal',
  id: 'carta-condicionada-imt',
  categoryId: 'driving_license',
  title: 'Carta de Condução Condicionada: carta com restrições médicas',
  tldr: 'A Carta de Condução Condicionada é uma carta de condução portuguesa normal, mas com códigos de restrição: óculos 01, aparelho auditivo 02, prótese 03, travões/acelerador/volante adaptados 20/25/40, apenas um veículo específico 50, condução apenas diurna 61, entre outros. As restrições são definidas através do atestado médico eletrónico e, em casos complexos, pela junta médica IMT. O AMIM ajuda a comprovar a incapacidade, mas, por si só, não substitui a avaliação médica para condução.',
  tags: ['imt', 'carta', 'amim', 'medicina'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a carta condicionada',
      content: [
        { kind: 'paragraph', text: 'A Carta de Condução Condicionada não é uma categoria separada de carta, mas sim uma carta de condução com códigos de restrições ou adaptações. Os códigos são impressos no campo 12 da carta de condução e são obrigatórios para o condutor em todas as deslocações.' },
        { kind: 'paragraph', text: 'As restrições podem ser simples: condução apenas com óculos, lentes, aparelho auditivo ou prótese. Podem ser técnicas: veículo com caixa automática, comando manual do travão, transferência do pedal do acelerador, volante adaptado, banco especial. Por vezes, o direito de conduzir é limitado a um veículo específico ou a determinadas condições: apenas de dia, sem autoestradas, sem passageiros.' },
        { kind: 'warning', text: 'Se na carta constar um código de adaptação, mas você conduzir um veículo sem essa adaptação, isso é considerado condução fora das condições de habilitação. Em caso de acidente, a seguradora e a polícia irão verificar precisamente os códigos no campo 12.' }
      ]
    },
    {
      id: 'who-needs',
      title: 'Quem precisa disto',
      content: [
        { kind: 'checklist', items: [
          'Pessoas com deficiência visual: óculos/lentes obrigatórios, visão monocular, restrições por grupo de carta.',
          'Pessoas com deficiência auditiva, se o médico indicar a necessidade de aparelho auditivo.',
          'Condutores com amputação, paresia, paralisia cerebral, sequelas de AVC, lesão da coluna ou limitação da mobilidade dos membros.',
          'Condutores após cirurgias ou doenças que afectem a condução: epilepsia, diabetes com risco de hipoglicemia, doenças cardiovasculares, condições neurológicas.',
          'Titulares de AMIM — Atestado Médico de Incapacidade Multiuso, se a incapacidade afectar a capacidade de conduzir em segurança.',
          'Expatriados que trocam uma carta estrangeira por uma carta portuguesa e já têm restrições médicas na carta/licence anterior.',
          'Candidatos numa escola de condução que precisam de aulas e exame num veículo adaptado.'
        ] },
        { kind: 'paragraph', text: 'Para o grupo 1 — AM, A1, A2, A, B, BE — os requisitos médicos são menos exigentes do que para o grupo 2. O grupo 2 — C, CE, D, DE, táxi, TVDE, ambulâncias, transporte escolar e condução profissional — é avaliado com maior rigor; algumas condições admissíveis para a categoria B podem impedir categorias profissionais.' }
      ]
    },
    {
      id: 'medical-route',
      title: 'Percurso médico através do médico e do IMT',
      content: [
        { kind: 'substeps', items: [
          { id: 'doctor', title: '1. Obter o atestado médico eletrónico', content: [
            { kind: 'paragraph', text: 'O processo começa não no IMT, mas no médico. Para categorias comuns, pode ser o médico de família no SNS ou um médico privado com acesso à emissão eletrónica de atestado médico para carta de condução. O parecer é enviado electronicamente para o sistema do IMT; normalmente não é necessário um atestado em papel, mas peça um comprovativo.' },
            { kind: 'checklist', items: [
              'Passaporte ou Cartão de Cidadão / autorização de residência.',
              'NIF e, se tiver, número de utente.',
              'Carta antiga, se se tratar de troca ou renovação.',
              'Óculos, lentes, aparelho auditivo, próteses ou ortóteses que utilize efectivamente.',
              'Relatórios médicos, resultados de exames, pareceres de oftalmologista/neurologista/cardiologista.',
              'AMIM, se tiver: é útil como prova de incapacidade reconhecida, mas não substitui o atestado médico para condução.'
            ] }
          ] },
          { id: 'imt-board', title: '2. Se o caso for complexo — junta médica IMT', content: [
            { kind: 'paragraph', text: 'Se o médico não conseguir declarar de forma inequívoca apto/apto com restrições, ou se o IMT identificar risco, o processo é encaminhado para a comissão médica do IMT — junta médica. Esta decide se a pessoa pode conduzir, que códigos devem ser aplicados e se é necessária prova prática num veículo adaptado.' },
            { kind: 'paragraph', text: 'Para a junta médica, é melhor levar um processo completo: AMIM, relatórios clínicos recentes, lista de medicamentos, descrição das adaptações do veículo, cartas estrangeiras antigas e traduções, se os documentos não estiverem em PT/EN/ES/FR.' }
          ] },
          { id: 'imt-issue', title: '3. Submeter o pedido no IMT', content: [
            { kind: 'paragraph', text: 'Após o parecer médico, é submetida a revalidação, emissão, troca de carta estrangeira ou pedido especial através do IMT/IMTonline, balcão IMT ou Espaço Cidadão, se o serviço estiver disponível. O IMT transfere as restrições para o campo 12 da nova carta de condução.' }
          ] }
        ] }
      ]
    },
    {
      id: 'codes',
      title: 'Principais códigos de restrições e adaptações',
      content: [
        { kind: 'paragraph', text: 'Portugal utiliza códigos europeus harmonizados de restrições. Na carta, aparecem como números, por vezes com subcódigos. O importante não é a tradução, mas a correspondência exacta do veículo e do comportamento do condutor a esses códigos.' },
        { kind: 'checklist', items: [
          '01 — correcção visual: óculos, lentes ou outra correcção óptica.',
          '02 — aparelho auditivo ou dispositivo de comunicação.',
          '03 — prótese ou ortótese de membro.',
          '10 — transmissão modificada, muitas vezes significa, na prática, veículo sem embraiagem convencional.',
          '15 — embraiagem adaptada.',
          '20 — sistema de travagem adaptado.',
          '25 — acelerador / pedal do acelerador adaptado.',
          '30 — adaptações combinadas de travão e acelerador.',
          '35 — comandos adaptados: indicadores, luzes, limpa-vidros, etc.',
          '40 — direcção adaptada.',
          '42 — espelhos ou visibilidade adaptados.',
          '43 — banco do condutor adaptado.',
          '44 — adaptações de motociclo.',
          '50 — o direito é válido apenas para um veículo específico ou número VIN/chassis.',
          '61–69 — restrições das condições de condução: apenas de dia, dentro de um raio a partir de casa, sem passageiros, com limite de velocidade, com acompanhante, sem reboque, sem autoestradas, zero álcool, alcohol interlock.'
        ] },
        { kind: 'warning', text: 'O código 78 “apenas caixa automática” não é um código médico, mas cruza-se frequentemente com a condução adaptada. Se o exame B tiver sido feito num veículo automático, a carta pode incluir o código 78; para o remover, é necessário exame/procedimento em veículo manual de acordo com as regras do IMT.' }
      ]
    },
    {
      id: 'amim',
      title: 'Percurso para titulares de AMIM',
      content: [
        { kind: 'paragraph', text: 'O AMIM — Atestado Médico de Incapacidade Multiuso — comprova a percentagem de incapacidade para efeitos fiscais, sociais e outros. Para a carta de condução, é útil, mas não constitui autorização ou proibição automática de conduzir. A decisão sobre a carta condicionada é tomada pelo médico para a carta de condução e/ou pela junta médica IMT.' },
        { kind: 'checklist', items: [
          'Se já tiver AMIM: apresente-o ao médico ao tratar do atestado médico eletrónico.',
          'Se o AMIM indicar incapacidade motora, visual, auditiva ou neurológica, prepare-se para uma avaliação adicional pelo IMT.',
          'Se precisar de um veículo adaptado para aprender, procure uma escola de condução que tenha veículo adaptado às suas restrições.',
          'Se as adaptações forem não standard, peça antecipadamente ao instalador uma declaração técnica e documentos de homologação/inspeção, se aplicável.',
          'Se a carta for estrangeira e já tiver restrições, leve o original e, se necessário, uma tradução: o IMT tem de perceber que restrições deve transferir.',
          'Se a condição for progressiva, o prazo de validade da carta pode ser reduzido: por exemplo, não até à idade normal de revalidação, mas pelo período definido pelo médico.'
        ] },
        { kind: 'paragraph', text: 'O INR publica informação de referência sobre os direitos das pessoas com deficiência, AMIM e apoios. A decisão prática sobre a aptidão para conduzir continua, ainda assim, no sistema do IMT e na avaliação médica para condução.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Na prática: como não ficar preso na burocracia',
      content: [
        { kind: 'checklist', items: [
          'Não compre um veículo adaptado antes do parecer médico: primeiro são necessários os códigos, depois a técnica adequada a esses códigos.',
          'Peça ao médico que indique as restrições da forma mais concreta possível; formulações vagas levam frequentemente a junta médica e atrasos.',
          'Para a troca de cartas estrangeiras, comece o processo com antecedência: as restrições médicas quase sempre aumentam o prazo de processamento.',
          'Guarde cópias do AMIM, relatórios médicos, comprovativo do atestado eletrónico e correspondência com o IMT.',
          'Antes do exame num veículo adaptado, confirme que a escola de condução acordou o veículo com o IMT.',
          'Depois de receber a nova carta, verifique de imediato o campo 12: corrigir um código errado demora tempo.',
          'Se a condição melhorou e a restrição já não é necessária, a remoção do código só é feita através de nova avaliação médica e decisão do IMT.',
          'Se a condição piorou, não espere pela renovação: é mais seguro pedir uma reavaliação médica antes de um acidente ou fiscalização.'
        ] },
        { kind: 'warning', text: 'Em Portugal, o médico pode declarar uma pessoa “inapto” para conduzir se o risco para o condutor e para terceiros for elevado. Nesse caso, o IMT pode não emitir ou pode suspender o direito de conduzir até nova avaliação.' }
      ]
    }
  ],
  costs: [
    { label: 'Emissão ou renovação da carta de condução no IMT', amountEUR: 30, note: 'Taxa típica do IMT; através do IMTonline aplica-se normalmente um desconto de 10%, ou seja, 27 €.' },
    { label: 'Taxa do IMT para condutores a partir dos 70 anos', amountEUR: 15, note: 'Para revalidação depois dos 70 anos aplica-se uma taxa reduzida; online pode ser mais barato se o desconto estiver disponível.' },
    { label: 'Exame médico privado para atestado', amountEURMin: 25, amountEURMax: 80, note: 'Mercado das clínicas privadas; no SNS pode ser mais barato, mas depende do Centro de Saúde e da disponibilidade do médico.' },
    { label: 'AMIM através de junta médica de avaliação de incapacidade', amountEUR: 12.5, note: 'Taxa habitual pela primeira avaliação de incapacidade; a urgência e a reavaliação dependem das regras do SNS/ULS.' }
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
