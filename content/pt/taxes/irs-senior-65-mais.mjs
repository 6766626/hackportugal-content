export default {
  editorialVoice: 'hackportugal',
  id: 'irs-senior-65-mais',
  categoryId: 'taxes',
  title: 'IRS para reformados 65+: regras especiais e deduções',
  tldr: 'No IRS, ter 65+ anos por si só não isenta da declaração, mas os reformados têm diferenças importantes: os rendimentos de pensões entram como Categoria H, aplica-se a dedução específica de 4 350 € por cada beneficiário de pensão, e não a dedução normal de 4 104 € para salários. É possível declarar lares: 25% das despesas com limite de cerca de 403 €. Pensão de alimentos: o beneficiário declara o rendimento, o pagador deduz 20% por decisão judicial/notarial. A declaração Modelo 3 relativa a 2025 é entregue de 1 de abril a 30 de junho de 2026.',
  tags: ['irs', 'pensão', '65mais', 'lares', 'deduções'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-files',
      title: 'Que reformados entregam IRS em 2026',
      content: [
        { kind: 'paragraph', text: 'Se passou a ser residente fiscal em Portugal, o IRS abrange o seu rendimento mundial: pensão portuguesa, pensão estrangeira, rendas, juros, dividendos, mais-valias e parte dos benefícios. Ter 65+ anos não elimina a obrigação de entregar a Modelo 3, se os rendimentos excederem os limites de isenção ou se existir rendimento estrangeiro.' },
        { kind: 'checklist', items: [
          'Entrega da declaração relativa aos rendimentos de 2025: de 1 de abril a 30 de junho de 2026.',
          'A pensão portuguesa normalmente enquadra-se na Categoria H e é refletida na Modelo 3 através do Anexo A, se estiver pré-preenchida pela AT.',
          'A pensão estrangeira de um residente em Portugal é declarada no Anexo J, mesmo que o imposto já tenha sido retido no estrangeiro.',
          'Se a pensão for tributada apenas noutro país ao abrigo de uma Convenção para Evitar a Dupla Tributação, normalmente continua a ser indicada no Anexo J com o método de eliminação da dupla tributação.',
          'Se o casal optar pela tributação conjunta, os rendimentos e as deduções são calculados para ambos os cônjuges; por vezes, a tributação separada é mais vantajosa.',
          'Se existirem recibos verdes, rendas, venda de ações ou de imóveis, aos critérios das pensões juntam-se os anexos IRS correspondentes.'
        ] },
        { kind: 'warning', text: 'Não confunda autorização de residência com residência fiscal. Para o IRS, contam as regras de residência fiscal: em geral, 183+ dias em Portugal num período de 12 meses ou a existência de habitação que pressuponha residência habitual.' }
      ]
    },
    {
      id: 'specific-deduction',
      title: 'Principal benefício: dedução específica de 4 350 €',
      content: [
        { kind: 'paragraph', text: 'O rendimento de pensões da Categoria H é reduzido pela dedução específica. Para declarações IRS entregues em 2026, use como referência 4 350 € por cada titular com rendimento de pensões. Este valor é superior à dedução específica normal de 4 104 € para rendimentos do trabalho da Categoria A.' },
        { kind: 'checklist', items: [
          'A dedução não se aplica ao imposto, mas à matéria coletável: primeiro reduz o rendimento bruto da pensão, depois aplica-se a escala do IRS.',
          'Se a pensão anual for inferior a 4 350 €, a dedução não cria rendimento negativo: a base desta categoria fica efetivamente em 0 €.',
          'Se ambos os cônjuges receberem pensão, a dedução aplica-se separadamente a cada beneficiário.',
          'As entidades pagadoras portuguesas normalmente comunicam os dados à AT de forma automática, mas as pensões estrangeiras devem ser inseridas manualmente no Anexo J.',
          'Contribuições obrigatórias adicionais para subsistemas de saúde ou sistemas profissionais podem ter tratamento próprio, mas não substituem a verificação da declaração pré-preenchida.',
          'Se receber simultaneamente salário e pensão, os rendimentos podem enquadrar-se em categorias diferentes; as deduções nem sempre se somam mecanicamente.'
        ] },
        { kind: 'warning', text: 'Verifique a simulação do IRS antes de entregar. Nos reformados com pensão estrangeira, um erro frequente é deixar o Anexo J vazio porque “o imposto já foi retido no país de origem”. Para um residente em Portugal, isto representa risco de correção adicional e coima.' }
      ]
    },
    {
      id: 'lares',
      title: 'Lares e cuidados: dedução até 403 €',
      content: [
        { kind: 'paragraph', text: 'As despesas com lares, casas de repouso, apoio domiciliário e instituições para idosos podem dar uma dedução de 25% do valor, com limite de cerca de 403 € por ano. É uma dedução à coleta: reduz o IRS já apurado, não o rendimento.' },
        { kind: 'checklist', items: [
          'A fatura deve ter o seu NIF ou o NIF do membro da família por quem a despesa é declarada.',
          'Verifique a categoria das despesas no e-Fatura: os lares devem estar classificados corretamente.',
          'Podem ser consideradas despesas do próprio sujeito passivo, do cônjuge, de ascendente ou de familiar até ao 3.º grau, se estiverem cumpridas as condições do CIRS.',
          'Para ascendente, normalmente é importante que o rendimento dele não ultrapasse os limites estabelecidos, associados à pensão mínima/SMN.',
          'As despesas com arrendamento normal de habitação não são lares.',
          'Serviços médicos dentro do lar podem entrar como saúde, se forem faturados por uma entidade médica separada e tiverem o CAE/IVA correto.',
          'Se o lar não comunicou a factura no e-Fatura, peça a correção antes do fim do período de verificação das faturas.'
        ] },
        { kind: 'warning', text: 'O limite de 403 € não é um reembolso em dinheiro. Só funciona se existir IRS apurado para reduzir. Com uma pensão muito baixa e IRS nulo, a dedução pode não gerar reembolso efetivo.' }
      ]
    },
    {
      id: 'alimony',
      title: 'Pensão de alimentos: quem paga e quem recebe',
      content: [
        { kind: 'paragraph', text: 'A Pensão de alimentos é tratada de forma assimétrica no IRS. O beneficiário declara-a como rendimento da Categoria H, e o pagador pode deduzir 20% dos montantes pagos, se os pagamentos tiverem por base decisão judicial ou acordo oficialmente homologado.' },
        { kind: 'checklist', items: [
          'O beneficiário da pensão de alimentos indica os montantes na declaração como rendimento de pensão/alimentos.',
          'O pagador declara uma dedução à coleta de 20% dos montantes pagos por decisão judicial ou acordo, homologado nos termos da lei.',
          'Transferências informais “por acordo” sem base jurídica podem não dar direito a dedução.',
          'Se o beneficiário fizer parte do mesmo agregado familiar IRS, a dedução do pagador normalmente não se aplica.',
          'Guarde a sentença, o acordo, os comprovativos bancários e o NIF do beneficiário.',
          'Se a pensão de alimentos for paga a partir do estrangeiro ou para outro país, verifique como deve ser refletida no Anexo J e no país de origem.'
        ] },
        { kind: 'warning', text: 'Para reformados expatriados, um caso frequente é a pensão de alimentos por decisão judicial de outro país. A AT pode pedir tradução e confirmação da força jurídica do documento. É preferível ter uma tradução certificada para português.' }
      ]
    },
    {
      id: 'age-65-nuances',
      title: 'O que a idade 65+ NÃO dá automaticamente',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, não existe uma regra universal “fez 65 anos — não paga IRS”. A maioria dos benefícios não depende da idade por si só, mas do tipo de rendimento, do montante do rendimento, da composição do household, de incapacidade, das despesas e das faturas comprovadas.' },
        { kind: 'checklist', items: [
          'O IRS Jovem não se aplica a reformados 65+: é um regime para jovens contribuintes em função da idade e do início da vida profissional.',
          'O IFICI, novo regime que substitui o NHR, não é um benefício automático para pensões e não substitui as regras da Categoria H.',
          'Se tiver incapacidade com grau de incapacidade permanente 60%+, aplicam-se regras IRS próprias; é necessário o Atestado Médico de Incapacidade Multiuso.',
          'Para a família que sustenta um progenitor idoso, pode existir dedução por ascendente, mas é uma dedução dos filhos/familiares, não do próprio reformado.',
          'Benefícios municipais de IMI para idosos e agregados com baixos rendimentos não são IRS e são verificados separadamente na Câmara Municipal/Finanças.',
          'Um reformado com rendimento de rendas, investimentos ou venda de imóveis pode pagar IRS significativo, mesmo que a pensão principal seja baixa.'
        ] },
        { kind: 'warning', text: 'Não entregue a declaração só porque ela é “automática”. O IRS Automático é cómodo, mas é pouco adequado para pensão estrangeira, impostos pagos no estrangeiro, lares, pensão de alimentos e situações familiares não padrão.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Checklist prático antes da entrega',
      content: [
        { kind: 'checklist', items: [
          'Entre no Portal das Finanças com NIF + palavra-passe ou Chave Móvel Digital.',
          'Verifique a residência fiscal, a morada fiscal e a composição do agregado familiar.',
          'Compare as declarações de pensão pré-preenchidas com as declarações anuais dos fundos de pensões.',
          'Adicione pensões estrangeiras no Anexo J e indique o imposto retido no estrangeiro, se aplicável.',
          'Verifique o e-Fatura: saúde, lares, despesas gerais familiares e invoices com o NIF correto.',
          'Calcule tributação conjunta vs separada para os cônjuges através de simular.',
          'Guarde o PDF da declaração, o comprovativo de entrega e a nota de liquidação.',
          'Se o montante da pensão, o país de origem ou a convenção para evitar a dupla tributação forem discutíveis — peça aconselhamento a um contabilista certificado antes de 30 de junho.'
        ] },
        { kind: 'paragraph', text: 'Após a entrega, a AT normalmente atribui o estado declaração certa, depois liquidação processada. O reembolso chega ao IBAN indicado nas Finanças. Se o IBAN for estrangeiro SEPA, é aceite, mas por vezes exige verificação adicional.' }
      ]
    }
  ],
  costs: [
    { label: 'Dedução específica para pensões Categoria H', amountEUR: 4350, note: 'Reduz o rendimento de pensões tributável de cada beneficiário de pensão.' },
    { label: 'Dedução específica normal Categoria A', amountEUR: 4104, note: 'Referência para comparação com rendimento do trabalho.' },
    { label: 'Dedução lares', amountEURMax: 403, note: '25% das despesas, mas sem exceder o limite anual; a vantagem efetiva depende do IRS apurado.' },
    { label: 'Pensão de alimentos no pagador', amountEURMin: 0, amountEURMax: 0, note: 'Não é um montante fixo: dedução de 20% dos pagamentos juridicamente comprovados.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, deduções e Modelo 3',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — Categoria H, deduções específicas e deduções à coleta',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — entrega da declaração Modelo 3 IRS',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal — IRS para cidadãos residentes em Portugal',
      url: 'https://eportugal.gov.pt/cidadaos/entregar-a-declaracao-de-irs',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
