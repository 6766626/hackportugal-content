export default {
  editorialVoice: 'hackportugal',
  id: 'oculista-exame-visao',
  categoryId: 'healthcare',
  title: 'Oculista e optometrista: onde fazer exame à visão e comprar óculos em Portugal',
  tldr: 'Em Portugal, o exame visual gratuito na Multiopticas, Wells, Lapierre e em Ópticas locais é muitas vezes feito por um optometrista: é suficiente para escolher óculos e lentes, mas não é uma consulta médica. É necessário um oculista / médico oftalmologista em caso de dor, flashes, diabetes, glaucoma, crianças e após cirurgias. O SNS quase nunca comparticipa óculos para adultos; o apoio costuma existir apenas para crianças/através de programas locais. Os seguros privados dão frequentemente um limite anual de 50–200 € para lentes/armação.',
  tags: ['oculista', 'óptica', 'óculos', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-is-who',
      title: 'Quem é quem: oculista, oftalmologista, optometrista',
      content: [
        { kind: 'paragraph', text: 'No dia a dia, os portugueses usam oculista para falar de “médico dos olhos” ou de uma loja de óptica, mas juridicamente e em termos práticos são coisas diferentes. Para escolher em segurança, é importante distinguir entre consulta médica e medição de dioptrias.' },
        { kind: 'checklist', items: [
          'Médico oftalmologista — médico especialista em oftalmologia. Diagnostica doenças dos olhos, prescreve medicamentos, faz cirurgias, acompanha glaucoma, cataratas, retinopatia diabética.',
          'Oculista — termo coloquial. Pode significar oftalmologista, mas também vendedor/técnico numa óptica. Confirme: “é médico oftalmologista?”',
          'Optometrista — especialista em refracção: mede miopia, hipermetropia, astigmatismo, escolhe óculos e lentes de contacto.',
          'Ortoptista — especialista em visão binocular, estrabismo, ambliopia; trabalha frequentemente com crianças e em hospitais.',
          'Óptica — loja de óculos: Multiopticas, Wells, Lapierre, Óptica Vista Alegre e ópticas independentes.',
          'Exame visual numa loja — normalmente é um teste feito por um optometrista, não uma consulta de médico oftalmologista.'
        ] },
        { kind: 'warning', text: 'Se tiver dor no olho, perda súbita de visão, flashes/“moscas volantes”, trauma, vermelhidão forte, visão dupla, diabetes, gravidez com alteração da visão, suspeita de glaucoma ou uma criança que vê mal — não se limite ao teste gratuito numa óptica. É necessário um médico oftalmologista através do SNS, de uma clínica privada ou da urgência.' }
      ]
    },
    {
      id: 'where-to-go',
      title: 'Onde fazer exame à visão: Multiopticas, Wells, Lapierre, Vista Alegre',
      content: [
        { kind: 'paragraph', text: 'O caminho mais rápido para um adulto sem sintomas de alarme é marcar numa óptica um exame visual. A avaliação é frequentemente gratuita ou condicionalmente gratuita, porque a loja espera vender uma armação, lentes oftálmicas ou lentes de contacto.' },
        { kind: 'checklist', items: [
          'Multiopticas — a cadeia mais visível: muitas lojas em centros comerciais e ruas centrais, marcação online, promoções frequentes “2 pares”, “exame visual gratuito”.',
          'Wells — rede de saúde e óptica associada ao Continente / Sonae: conveniente se houver um hipermercado ou centro comercial por perto; costuma ter óptica, lentes de contacto e avaliação básica da visão.',
          'Lapierre — rede/marca de óptica focada em óculos, lentes e armações de designer; a existência de gabinete de optometrista depende da loja concreta.',
          'Óptica Vista Alegre — existe como óptica local, não confundir com a porcelana Vista Alegre; confirme a morada específica, os serviços e a existência de optometrista.',
          'As ópticas independentes de bairro são por vezes mais baratas e flexíveis em reparações, soldadura de armações, substituição de plaquetas e fabrico urgente.',
          'Nas grandes cidades, a marcação costuma ser em 0–7 dias; nas cidades mais pequenas, muitas vezes atendem no próprio dia.'
        ] },
        { kind: 'paragraph', text: 'Ao marcar, pergunte em português: “O exame visual é gratuito? É feito por optometrista? Dão receita com graduação no final?” — se o teste é gratuito, quem o faz e se entregam uma impressão com as dioptrias.' }
      ]
    },
    {
      id: 'exam-and-prescription',
      title: 'Como decorre o exame visual e o que pedir para levar consigo',
      content: [
        { kind: 'paragraph', text: 'Um teste standard numa óptica dura 15–30 minutos. Medem-lhe a refracção num aparelho, fazem o teste da tabela, perguntam sobre queixas, distância de trabalho, utilização de ecrãs e óculos actuais. Para lentes de contacto é necessária uma adaptação separada: assentamento da lente, curvatura, diâmetro, ensino de colocação.' },
        { kind: 'checklist', items: [
          'Não é obrigatório levar passaporte/autorização de residência, mas é útil para fazer a encomenda; o NIF é necessário para a fatura e possível IRS/seguro.',
          'Leve os óculos antigos e as embalagens das lentes de contacto.',
          'Diga se precisa de óculos para longe, leitura, computador, condução nocturna ou lentes progressivas.',
          'Peça receita / graduação: OD/OS, esfera, cilindro, eixo, adição, distância pupilar.',
          'Confirme se está incluída uma nova correcção das dioptrias, caso os óculos não sirvam.',
          'Peça um orçamento antes de encomendar: armação, lentes, tratamentos, seguro contra quebra, prazo de fabrico.',
          'Para lentes de contacto, confirme trial lenses e controlo passados alguns dias.',
          'Guarde a fatura com NIF: é necessária para seguro privado, ADSE, empregador ou despesas de saúde no IRS.'
        ] },
        { kind: 'warning', text: 'O optometrista pode detectar sinais suspeitos e encaminhar para um médico, mas não substitui um exame da retina com dilatação da pupila, medição da pressão intraocular como rastreio médico e tratamento de doenças.' }
      ]
    },
    {
      id: 'sns-private',
      title: 'SNS, médico privado e seguro',
      content: [
        { kind: 'paragraph', text: 'Através do SNS, o percurso é: médico de família no Centro de Saúde → referenciação para oftalmologia, se houver indicação médica. Para um simples “quero óculos novos”, o SNS normalmente não é necessário e será mais lento do que a óptica.' },
        { kind: 'checklist', items: [
          'O SNS é adequado em caso de doenças, traumatismos, diabetes, glaucoma, cataratas, problemas de visão em crianças.',
          'A espera por uma consulta de oftalmologia através do SNS depende da região e da prioridade; em Lisboa e no Porto pode ser longa.',
          'Um médico oftalmologista privado costuma custar 60–120 € por consulta sem seguro.',
          'Com seguro privado, a consulta fica muitas vezes com copayment de 15–40 €, se a clínica estiver na rede.',
          'Os seguros Médis, Multicare, AdvanceCare, Allianz, MGEN e planos empresariais dão frequentemente um plafond separado para óculos/lentes.',
          'O limite típico para óculos/lentes é cerca de 50–200 € por ano ou de 2 em 2 anos, mas as condições dependem muito da apólice.',
          'Para reembolso, quase sempre são necessários prescrição/graduação, fatura com NIF e, por vezes, relatório médico.',
          'A ADSE para funcionários públicos tem as suas próprias regras de reembolso, diferentes das dos seguros comerciais.'
        ] },
        { kind: 'warning', text: 'O SNS nacional em 2026 não funciona como “óculos gratuitos para todos os adultos”. O apoio para óculos comuns de adultos é extremamente limitado. Para crianças, a ajuda pode existir através de referenciações do SNS, programas escolares/municipais ou medidas sociais, mas as condições dependem da idade, rendimento e Câmara Municipal.' }
      ]
    },
    {
      id: 'prices-and-traps',
      title: 'Preços, promoções e armadilhas ao comprar óculos',
      content: [
        { kind: 'paragraph', text: 'As ópticas portuguesas publicitam frequentemente teste gratuito e armação barata, mas o preço final depende das lentes. As posições mais caras são lentes progressivas, redução de espessura, antirreflexo, fotocromáticas, filtro para ecrã, polarização e marca da armação.' },
        { kind: 'checklist', items: [
          'Óculos simples “armação + lentes monofocais” em promoção podem começar nos 49–99 €.',
          'Boas lentes monofocais com antirreflexo costumam dar um total de 100–250 €.',
          'Lentes progressivas custam frequentemente 250–700 €+ por conjunto, sobretudo com tratamentos premium.',
          'Óculos de sol graduados são normalmente mais caros do que óculos de sol comuns: a partir de 120–300 €+.',
          'Lentes de contacto: as mensais custam frequentemente 15–40 € por caixa, as diárias ficam mais caras por dia.',
          'Pergunte o prazo de entrega: normalmente 3–10 dias úteis, lentes complexas demoram mais.',
          'Verifique a garantia da armação, o tratamento das lentes e o ajuste gratuito.',
          'Não aceite um “pacote” sem discriminação: peça o preço separado da armação, de cada lente e dos tratamentos.',
          'Se o seu português for fraco, peça um orçamento impresso e traduza em casa antes de pagar.'
        ] },
        { kind: 'paragraph', text: 'A frase “exame grátis” não obriga a comprar óculos, mas em algumas lojas a gratuitidade pode depender da compra. Confirme antecipadamente para evitar discutir na caixa.' }
      ]
    }
  ],
  costs: [
    { label: 'Exame visual com optometrista numa óptica', amountEURMin: 0, amountEURMax: 30, note: 'Frequentemente gratuito na Multiopticas/Wells em promoção ou na compra de óculos.' },
    { label: 'Consulta privada de médico oftalmologista', amountEURMin: 60, amountEURMax: 120, note: 'Sem seguro; com seguro, normalmente o copayment é mais baixo.' },
    { label: 'Óculos básicos em promoção', amountEURMin: 49, amountEURMax: 99, note: 'Normalmente armação simples e lentes monofocais sem tratamentos complexos.' },
    { label: 'Óculos com lentes monofocais de qualidade', amountEURMin: 100, amountEURMax: 250, note: 'O total depende do índice de redução de espessura, antirreflexo e marca.' },
    { label: 'Óculos progressivos', amountEURMin: 250, amountEURMax: 700, note: 'Lentes premium e armação de designer podem custar mais.' }
  ],
  sources: [
    { title: 'Multiopticas — serviços de óptica e exame visual', url: 'https://www.multiopticas.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Wells — secção de óptica, óculos e lentes de contacto', url: 'https://www.wells.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — acesso a cuidados de saúde e consultas no SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Entidade Reguladora da Saúde — direitos dos utentes dos serviços de saúde', url: 'https://www.ers.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
