export default {
  editorialVoice: 'hackportugal',
  id: 'irs-senior-65-mais',
  categoryId: 'taxes',
  title: 'IRS para pensionistas 65+: regras especiais e deduções',
  tldr: 'No IRS, ter 65+ anos, por si só, não dispensa a entrega da declaração. Com o OE 2025 (Lei 45-A/2024), a base da dedução específica para **ambas as categorias A e H** fica ligada à fórmula **max(4 104 €; 8,54 × IAS desse ano)**.\n\n**Para rendimentos de 2025 (declaração de 2026): 4 462,15 €** (8,54 × IAS 2025 522,50 €) — por cada titular de pensão (Categoria H) ou trabalhador (Categoria A). É possível declarar lares: 25% das despesas com limite de cerca de 403 €. Pensão de alimentos: o beneficiário declara o rendimento, o pagador deduz 20% com base em decisão judicial/notarial. A declaração Modelo 3 relativa a 2025 é entregue de 1 de abril a 30 de junho de 2026.',
  tags: ['irs', 'pensão', '65mais', 'lares', 'deduções'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-files',
      title: 'Que pensionistas entregam IRS em 2026',
      content: [
        { kind: 'paragraph', text: 'Se se tornou residente fiscal em Portugal, o IRS abrange o seu rendimento mundial: pensão portuguesa, pensão estrangeira, rendas, juros, dividendos, mais-valias e parte dos benefícios. Ter 65+ anos não elimina a obrigação de entregar o Modelo 3 se os rendimentos excederem os limiares de dispensa ou se existir rendimento estrangeiro.' },
        { kind: 'checklist', items: [
          'Entrega da declaração relativa aos rendimentos de 2025: de 1 de abril a 30 de junho de 2026.',
          'A pensão portuguesa normalmente enquadra-se na Categoria H e é refletida no Modelo 3 através do Anexo A, se estiver pré-preenchida pela AT.',
          'A pensão estrangeira de um residente em Portugal é declarada no Anexo J, mesmo que o imposto já tenha sido retido no estrangeiro.',
          'Se a pensão for tributável apenas noutro país ao abrigo da Convenção para Evitar a Dupla Tributação, normalmente continua a ser indicada no Anexo J com o método de eliminação da dupla tributação.',
          'Se o casal optar pela tributação conjunta, os rendimentos e as deduções são calculados para ambos os cônjuges; por vezes, a tributação separada é mais vantajosa.',
          'Se existirem recibos verdes, rendas, venda de ações ou de imóveis, aos regimes das pensões somam-se os anexos de IRS correspondentes.'
        ] },
        { kind: 'warning', text: 'Não confunda autorização de residência com residência fiscal. Para o IRS, contam as regras de residência fiscal: normalmente 183+ dias em Portugal num período de 12 meses ou a existência de habitação que faça presumir residência habitual.' }
      ]
    },
    {
      id: 'specific-deduction',
      title: 'Principal benefício: dedução específica de 4 462,15 € para rendimentos de 2025',
      content: [
        { kind: 'paragraph', text: 'Após o OE 2025 (Lei n.º 45-A/2024), a base da dedução específica no Código do IRS art. 25 (Categoria A — trabalho) e art. 53 (Categoria H — pensões) fica ligada à fórmula **max(4 104 €; 8,54 × IAS desse ano)**. Para rendimentos de 2025: 8,54 × 522,50 € = **4 462,15 €** — igual para as categorias A e H (a mesma base). Para rendimentos de 2026, a referência é: 8,54 × 537,13 € ≈ **4 587,09 €** (declaração de 2027). A Categoria H já NÃO tem uma dedução majorada separada — a base é única.' },
        { kind: 'checklist', items: [
          'Para a declaração de IRS 2026 (relativa a rendimentos de 2025) — base de 4 462,15 € por cada titular com rendimento da Categoria H OU da Categoria A.',
          'A dedução aplica-se não ao imposto, mas à matéria coletável: primeiro reduz o rendimento bruto de pensões/salários, depois aplica-se a escala de IRS.',
          'Se a pensão/salário anual for inferior a 4 462,15 €, a dedução não cria rendimento negativo: a base desta categoria passa efetivamente a 0 €.',
          'Se ambos os cônjuges receberem pensão, a dedução aplica-se separadamente a cada beneficiário.',
          'As entidades pagadoras portuguesas normalmente comunicam os dados automaticamente à AT, mas as pensões estrangeiras têm de ser inseridas manualmente no Anexo J.',
          'Contribuições obrigatórias adicionais para subsistemas de saúde ou sistemas profissionais podem ter tratamento separado, mas não substituem a verificação da declaração pré-preenchida.',
          'Se receber simultaneamente salário e pensão, os rendimentos podem enquadrar-se em categorias diferentes; as deduções nem sempre se somam mecanicamente.',
          'Se as contribuições obrigatórias para a Segurança Social/sistema profissional forem superiores à dedução específica base, na Categoria A aplica-se o valor mais elevado (segundo as regras do CIRS art. 25).'
        ] },
        { kind: 'warning', text: 'Verifique a simulação do IRS antes de submeter. Nos pensionistas com pensão estrangeira, um erro frequente é deixar o Anexo J vazio porque “o imposto já foi retido no país da fonte”. Para um residente em Portugal, isto cria risco de liquidação adicional e coima. Também não use valores antigos de 4 350 € / 4 104 € — após a reforma de 2025, a base é única (4 462,15 € para rendimentos de 2025).' }
      ]
    },
    {
      id: 'lares',
      title: 'Lares e cuidados: dedução até 403 €',
      content: [
        { kind: 'paragraph', text: 'As despesas com lares, casas de repouso, apoio domiciliário e instituições para idosos podem dar direito a uma dedução de 25% do valor, com limite de cerca de 403 € por ano. É uma dedução à coleta: reduz o IRS já apurado, não o rendimento.' },
        { kind: 'checklist', items: [
          'A fatura deve ter o seu NIF ou o NIF do familiar por quem a despesa é declarada.',
          'Verifique a categoria das despesas no e-Fatura: os lares devem estar corretamente classificados.',
          'Podem ser consideradas despesas do próprio sujeito passivo, do cônjuge, de ascendente ou de familiar até ao 3.º grau, se estiverem cumpridas as condições do CIRS.',
          'Para ascendente, normalmente é importante que o respetivo rendimento não ultrapasse os limites estabelecidos, ligados à pensão mínima/SMN.',
          'As despesas com arrendamento habitacional normal não são lares.',
          'Serviços médicos dentro do lar podem entrar como saúde, se forem faturados por uma entidade médica separada e tiverem o CAE/IVA correto.',
          'Se o lar não comunicou a factura no e-Fatura, peça a correção antes do fim do período de verificação das faturas.'
        ] },
        { kind: 'warning', text: 'O limite de 403 € não é um reembolso em dinheiro. Só funciona se houver IRS apurado para reduzir. Com uma pensão muito baixa e IRS nulo, a dedução pode não gerar qualquer reembolso efetivo.' }
      ]
    },
    {
      id: 'alimony',
      title: 'Pensão de alimentos: quem paga e quem recebe',
      content: [
        { kind: 'paragraph', text: 'A Pensão de alimentos no IRS é tratada de forma assimétrica. O beneficiário declara-a como rendimento da Categoria H, e o pagador pode deduzir 20% dos valores pagos, se os pagamentos se basearem em decisão judicial ou acordo oficialmente homologado.' },
        { kind: 'checklist', items: [
          'O beneficiário da pensão de alimentos indica os valores na declaração como rendimento de pensão/alimentos.',
          'O pagador declara uma dedução à coleta de 20% dos valores pagos por decisão judicial ou acordo, homologado nos termos da lei.',
          'Transferências informais “por acordo” sem base jurídica podem não dar direito à dedução.',
          'Se o beneficiário integrar o mesmo agregado familiar de IRS, a dedução do pagador normalmente não se aplica.',
          'Guarde a sentença, acordo, comprovativos bancários e NIF do beneficiário.',
          'Se a pensão de alimentos for paga a partir do estrangeiro ou para outro país, confirme como deve ser refletida no Anexo J e no país da fonte.'
        ] },
        { kind: 'warning', text: 'Para pensionistas expatriados, um caso frequente é a pensão de alimentos por decisão de tribunal de outro país. A AT pode pedir tradução e confirmação da força jurídica do documento. É melhor ter uma tradução certificada para português.' }
      ]
    },
    {
      id: 'age-65-nuances',
      title: 'O que os 65+ anos NÃO dão automaticamente',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe uma regra universal do tipo “fez 65 anos — não paga IRS”. A maioria dos benefícios depende não da idade por si só, mas do tipo de rendimento, do montante do rendimento, da composição do household, da deficiência, das despesas e das faturas confirmadas.' },
        { kind: 'checklist', items: [
          'O IRS Jovem não se aplica a pensionistas 65+: é um regime para contribuintes jovens, em função da idade e do início da vida laboral.',
          'O IFICI, novo regime em substituição do NHR, não é um benefício automático para pensões e não substitui as regras da Categoria H.',
          'Se tiver deficiência com grau de incapacidade permanente de 60%+, aplicam-se regras de IRS próprias; é necessário Atestado Médico de Incapacidade Multiuso.',
          'Para uma família que suporta um progenitor idoso, pode existir dedução por ascendente, mas é uma dedução dos filhos/familiares, não do próprio pensionista.',
          'Benefícios municipais de IMI para idosos e agregados de baixos rendimentos não são IRS e são verificados separadamente na Câmara Municipal/Finanças.',
          'Um pensionista com rendimentos de rendas, investimentos ou venda de imóveis pode pagar IRS significativo, mesmo que a pensão principal seja reduzida.'
        ] },
        { kind: 'warning', text: 'Não submeta a declaração apenas porque ela é “automática”. O IRS Automático é conveniente, mas é pouco adequado para pensão estrangeira, impostos pagos no estrangeiro, lares, pensão de alimentos e situações familiares não standard.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Checklist prática antes de submeter',
      content: [
        { kind: 'checklist', items: [
          'Entre no Portal das Finanças com NIF + palavra-passe ou Chave Móvel Digital.',
          'Verifique a residência fiscal, a morada fiscal e a composição do agregado familiar.',
          'Compare as pension statements pré-preenchidas com as declarações anuais dos fundos de pensões.',
          'Adicione as pensões estrangeiras no Anexo J e indique o imposto retido no estrangeiro, se aplicável.',
          'Verifique o e-Fatura: saúde, lares, despesas gerais familiares e invoices com o NIF correto.',
          'Calcule a tributação conjunta vs separada para os cônjuges através de simular.',
          'Guarde o PDF da declaração, o comprovativo de entrega e a nota de liquidação.',
          'Se o valor da pensão, o país da fonte ou a convenção para evitar dupla tributação forem discutíveis — peça aconselhamento a um contabilista certificado antes de 30 de junho.'
        ] },
        { kind: 'paragraph', text: 'Depois da submissão, a AT normalmente atribui o estado declaração certa, depois liquidação processada. O reembolso chega ao IBAN indicado nas Finanças. Se o IBAN for estrangeiro SEPA, é admissível, mas por vezes exige verificação adicional.' }
      ]
    }
  ],
  costs: [
    { label: 'Dedução específica para rendimentos de 2025 (Categoria H e A) — base única', amountEUR: 4462.15, note: '8,54 × IAS 2025 (522,50 €) = 4 462,15 € — aplica-se a cada titular com rendimento da Categoria H (pensões) ou A (trabalho) na declaração de IRS 2026.' },
    { label: 'Referência da dedução específica para rendimentos de 2026 (declaração de 2027)', amountEUR: 4587.09, note: '8,54 × IAS 2026 (537,13 €) ≈ 4 587,09 €.' },
    { label: 'Dedução de lares', amountEURMax: 403, note: '25% das despesas, mas não acima do limite anual; a vantagem efetiva depende do IRS apurado.' },
    { label: 'Pensão de alimentos do pagador', amountEURMin: 0, amountEURMax: 0, note: 'Não é um valor fixo: dedução de 20% dos pagamentos juridicamente comprovados.' }
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
