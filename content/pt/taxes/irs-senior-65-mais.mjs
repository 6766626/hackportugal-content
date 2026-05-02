export default {
  editorialVoice: 'hackportugal',
  id: 'irs-senior-65-mais',
  categoryId: 'taxes',
  title: 'IRS para pensionistas 65+: regras especiais e deduções',
  tldr: 'No IRS, ter 65+ anos por si só não isenta da declaração, mas os pensionistas têm diferenças importantes: os rendimentos de pensões entram como Categoria H, aplica-se uma dedução específica de 4 350 € por cada beneficiário de pensão, e não a dedução normal de 4 104 € para salários. Pode declarar lares: 25% das despesas com limite de cerca de 403 €. Pensão de alimentos: o beneficiário declara o rendimento, o pagador deduz 20% por decisão judicial/notarial. A declaração Modelo 3 relativa a 2025 é entregue de 1 de abril a 30 de junho de 2026.',
  tags: ['irs', 'pensão', '65mais', 'lares', 'deduções'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-files',
      title: 'Que pensionistas entregam IRS em 2026',
      content: [
        { kind: 'paragraph', text: 'Se se tornou residente fiscal em Portugal, o IRS abrange o seu rendimento mundial: pensão portuguesa, pensão estrangeira, rendas, juros, dividendos, mais-valias e parte dos benefícios. Ter 65+ anos não elimina a obrigação de entregar a Modelo 3, se os rendimentos excederem os limiares de isenção ou se existir rendimento estrangeiro.' },
        { kind: 'checklist', items: [
          'Entrega da declaração relativa aos rendimentos de 2025: de 1 de abril a 30 de junho de 2026.',
          'A pensão portuguesa entra normalmente na Categoria H e é refletida na Modelo 3 através do Anexo A, se estiver pré-preenchida pela AT.',
          'A pensão estrangeira de residente em Portugal é declarada no Anexo J, mesmo que o imposto já tenha sido retido no estrangeiro.',
          'Se a pensão for tributada apenas noutro país ao abrigo de uma Convenção para Evitar a Dupla Tributação, ainda assim é normalmente indicada no Anexo J com o método de eliminação da dupla tributação.',
          'Se o casal optar por tributação conjunta, os rendimentos e deduções são calculados para ambos os cônjuges; por vezes é mais vantajosa a tributação separada.',
          'Se houver recibos verdes, arrendamento, venda de ações ou de imóveis, aos regimes das pensões juntam-se os anexos de IRS correspondentes.'
        ] },
        { kind: 'warning', text: 'Não confunda autorização de residência com residência fiscal. Para o IRS, contam as regras de residência fiscal: normalmente 183+ dias em Portugal num período de 12 meses ou a existência de habitação que faça presumir residência habitual.' }
      ]
    },
    {
      id: 'specific-deduction',
      title: 'O principal benefício: dedução específica de 4 350 €',
      content: [
        { kind: 'paragraph', text: 'O rendimento de pensões da Categoria H é reduzido pela dedução específica. Para as declarações de IRS entregues em 2026, use como referência 4 350 € por cada titular com rendimento de pensões. É mais do que a dedução específica padrão de 4 104 € para rendimentos do trabalho da Categoria A.' },
        { kind: 'checklist', items: [
          'A dedução aplica-se não ao imposto, mas à matéria coletável: primeiro reduz-se o rendimento bruto de pensões, depois aplica-se a tabela de IRS.',
          'Se a pensão anual for inferior a 4 350 €, a dedução não cria rendimento negativo: a base desta categoria fica, na prática, em 0 €.',
          'Se ambos os cônjuges receberem pensão, a dedução aplica-se separadamente a cada beneficiário.',
          'As entidades pagadoras portuguesas normalmente comunicam os dados automaticamente à AT, mas as pensões estrangeiras têm de ser inseridas manualmente no Anexo J.',
          'Contribuições obrigatórias adicionais para subsistemas de saúde ou regimes profissionais podem ter tratamento separado, mas não substituem a verificação da declaração pré-preenchida.',
          'Se recebe simultaneamente salário e pensão, os rendimentos podem entrar em categorias diferentes; as deduções nem sempre se somam de forma mecânica.'
        ] },
        { kind: 'warning', text: 'Verifique a simulação de IRS antes de submeter. Nos pensionistas com pensão estrangeira, um erro frequente é deixar o Anexo J vazio porque “o imposto já foi retido no país da fonte”. Para um residente em Portugal, isto cria risco de liquidação adicional e coima.' }
      ]
    },
    {
      id: 'lares',
      title: 'Lares e cuidados: dedução até 403 €',
      content: [
        { kind: 'paragraph', text: 'As despesas com lares, casas de repouso, apoio domiciliário e instituições para pessoas idosas podem dar uma dedução de 25% do montante, com limite de cerca de 403 € por ano. É uma dedução à coleta: reduz o IRS já calculado, e não o rendimento.' },
        { kind: 'checklist', items: [
          'A fatura deve estar com o seu NIF ou com o NIF do membro da família em relação ao qual a despesa é declarada.',
          'Verifique a categoria das despesas no e-Fatura: os lares devem estar corretamente classificados.',
          'Podem ser consideradas despesas do próprio contribuinte, do cônjuge, de ascendente ou de familiar até ao 3.º grau, se estiverem cumpridas as condições do CIRS.',
          'Para um ascendente, normalmente é importante que o seu rendimento não exceda os limites definidos, associados à pensão mínima/SMN.',
          'As despesas com arrendamento habitacional normal não são lares.',
          'Os serviços médicos dentro do lar podem entrar como saúde, se forem faturados por uma entidade médica separada e tiverem o CAE/IVA correto.',
          'Se o lar não comunicou a fatura ao e-Fatura, peça a correção antes do encerramento do período de verificação de faturas.'
        ] },
        { kind: 'warning', text: 'O limite de 403 € não é um reembolso em dinheiro. Só funciona se existir IRS calculado a reduzir. Com uma pensão muito baixa e IRS nulo, a dedução pode não gerar reembolso efetivo.' }
      ]
    },
    {
      id: 'alimony',
      title: 'Pensão de alimentos: quem paga e quem recebe',
      content: [
        { kind: 'paragraph', text: 'A pensão de alimentos no IRS é tratada de forma assimétrica. O beneficiário declara-a como rendimento da Categoria H, e o pagador pode deduzir 20% dos montantes pagos, se os pagamentos tiverem por base decisão judicial ou acordo oficialmente homologado.' },
        { kind: 'checklist', items: [
          'O beneficiário da pensão de alimentos indica os montantes na declaração como rendimento de pensões/alimentos.',
          'O pagador declara uma dedução à coleta de 20% dos montantes pagos por decisão judicial ou acordo, homologado nos termos da lei.',
          'Transferências informais “por acordo” sem base jurídica podem não dar direito a dedução.',
          'Se o beneficiário integrar o mesmo agregado familiar de IRS, a dedução do pagador normalmente não se aplica.',
          'Guarde a sentença, o acordo, os comprovativos bancários e o NIF do beneficiário.',
          'Se a pensão de alimentos for paga a partir do estrangeiro ou para outro país, verifique como isso é refletido no Anexo J e no país da fonte.'
        ] },
        { kind: 'warning', text: 'Para pensionistas expatriados, um caso frequente é a pensão de alimentos por decisão judicial de outro país. A AT pode pedir tradução e confirmação da força jurídica do documento. É melhor ter uma tradução certificada para português.' }
      ]
    },
    {
      id: 'age-65-nuances',
      title: 'O que os 65+ anos NÃO dão automaticamente',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe uma regra universal “fez 65 anos — não paga IRS”. A maioria dos benefícios não depende da idade por si só, mas do tipo de rendimento, do montante do rendimento, da composição do agregado familiar, da incapacidade, das despesas e das faturas confirmadas.' },
        { kind: 'checklist', items: [
          'O IRS Jovem não se aplica a pensionistas 65+: é um regime para jovens contribuintes, em função da idade e do início da vida laboral.',
          'O IFICI, novo regime que substitui o NHR, não é um benefício automático para pensões e não substitui as regras da Categoria H.',
          'Se tiver uma incapacidade com grau de incapacidade permanente de 60%+, aplicam-se regras próprias de IRS; é necessário um Atestado Médico de Incapacidade Multiuso.',
          'Para uma família que sustenta um progenitor idoso, pode existir dedução por ascendente, mas é uma dedução dos filhos/familiares, não do próprio pensionista.',
          'Os benefícios municipais de IMI para idosos e agregados familiares de baixos rendimentos não são IRS e são verificados separadamente na Câmara Municipal/Finanças.',
          'Um pensionista com rendimentos de arrendamento, investimentos ou venda de imóveis pode pagar IRS significativo, mesmo que a pensão principal seja baixa.'
        ] },
        { kind: 'warning', text: 'Não submeta a declaração só porque ela é “automática”. O IRS Automático é cómodo, mas adapta-se mal a pensões estrangeiras, impostos no estrangeiro, lares, pensões de alimentos e situações familiares não padrão.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Checklist prático antes de submeter',
      content: [
        { kind: 'checklist', items: [
          'Entre no Portal das Finanças com NIF + palavra-passe ou Chave Móvel Digital.',
          'Verifique a residência fiscal, a morada fiscal e a composição do agregado familiar.',
          'Compare as declarações de pensões pré-preenchidas com as declarações anuais dos fundos de pensões.',
          'Adicione as pensões estrangeiras no Anexo J e indique o imposto retido no estrangeiro, se aplicável.',
          'Verifique o e-Fatura: saúde, lares, despesas gerais familiares e faturas com o NIF correto.',
          'Calcule tributação conjunta vs separada para cônjuges através de simular.',
          'Guarde o PDF da declaração, o comprovativo de entrega e a nota de liquidação.',
          'Se o montante da pensão, o país da fonte ou a convenção para evitar a dupla tributação forem discutíveis — peça aconselhamento a um contabilista certificado antes de 30 de junho.'
        ] },
        { kind: 'paragraph', text: 'Após a submissão, a AT normalmente atribui o estado declaração certa, depois liquidação processada. O reembolso chega ao IBAN indicado nas Finanças. Se o IBAN for estrangeiro SEPA, é admissível, mas por vezes exige verificação adicional.' }
      ]
    }
  ],
  costs: [
    { label: 'Dedução específica para pensões da Categoria H', amountEUR: 4350, note: 'Reduz o rendimento de pensões tributável de cada beneficiário de pensão.' },
    { label: 'Dedução específica normal da Categoria A', amountEUR: 4104, note: 'Referência para comparação com rendimentos do trabalho.' },
    { label: 'Dedução de lares', amountEURMax: 403, note: '25% das despesas, mas não acima do limite anual; a vantagem efetiva depende do IRS calculado.' },
    { label: 'Pensão de alimentos do pagador', amountEURMin: 0, amountEURMax: 0, note: 'Não é um montante fixo: dedução de 20% dos pagamentos juridicamente comprovados.' }
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
