export default {
  editorialVoice: 'hackportugal',
  id: 'madeira-irs-rates',
  categoryId: 'taxes',
  title: 'IRS na Madeira: taxa fiscal separada para residentes da região autónoma',
  tldr: 'Aos residentes fiscais da Madeira aplica-se uma tabela de IRS própria, e não a tabela do mainland Portugal. Em 2026, a Madeira tem taxas reduzidas: para o escalão inferior, a MCS indica 8,75% contra a referência do continente de 12,50%; contudo, a primeira taxa nacional de IRS em vigor para 2026 é 11,97%, pelo que deve confirmar o cálculo final no simulador da AT. Para rendimentos de capitais, a taxa especial padrão na Madeira é 19,6% em vez de 28%. A condição-chave é ter fiscal domicile na Madeira.',
  tags: ['irs', 'madeira', 'impostos', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'O que é diferente na Madeira',
      content: [
        { kind: 'paragraph', text: 'A Madeira é uma Região Autónoma, pelo que, para os residentes da região, o IRS é calculado segundo uma escala regional própria. Não é um desconto que tenha de ser pedido separadamente, mas sim uma tabela de taxas distinta, aplicada na declaração anual Modelo 3, se o seu domicílio fiscal pertencer à Madeira.' },
        { kind: 'paragraph', text: 'A principal diferença prática está nas taxas progressivas de IRS mais baixas e nas taxas especiais mais baixas para parte do rendimento passivo. Segundo materiais da MCS para 2026, a primeira taxa regional da Madeira é 8,75%, e a taxa especial padrão sobre capital income é 19,6% em vez de 28% no mainland Portugal.' },
        { kind: 'warning', text: 'Não confunda três regimes: as taxas regionais normais da Madeira, o IFICI e a Zona Franca/MIBC. Mudar-se para a Madeira, por si só, não faz de si participante do IFICI nem lhe concede benefícios empresariais do MIBC.' }
      ]
    },
    {
      id: 'who-qualifies',
      title: 'Quem tem direito às taxas da Madeira',
      content: [
        { kind: 'paragraph', text: 'As taxas da Madeira aplicam-se a pessoas singulares que sejam residentes fiscais em Portugal e tenham fiscal domicile na Região Autónoma da Madeira. Para um expatriado, isto significa normalmente: vive na ilha, actualizou a morada nas Finanças e entrega o IRS como residente.' },
        { kind: 'checklist', items: [
          'Você é residente fiscal em Portugal: normalmente 183+ dias no país durante o ano ou uma habitação que indique intenção de residência habitual.',
          'A sua morada no NIF foi actualizada para a Madeira através do Portal das Finanças, de um balcão Finanças ou com a ajuda de um representante fiscal.',
          'Tem prova de residência: contrato de arrendamento, escritura/caderneta predial, factura de serviços públicos ou atestado de residência.',
          'No Modelo 3 IRS está indicado o fiscal domicile correcto, pertencente à Região Autónoma da Madeira.',
          'O rendimento é declarado como rendimento de residente em Portugal, incluindo rendimentos do estrangeiro, se se tornou residente fiscal.',
          'Se se mudou durante o ano, a data da mudança efectiva e a data da alteração de morada nas Finanças são importantes — não deixe a morada antiga do mainland até entregar o IRS.',
          'Se tem cônjuge/parceiro e declaração conjunta, verifique a morada e a residência de ambos os sujeitos passivos.'
        ] },
        { kind: 'warning', text: 'Ter um apartamento na Madeira não equivale a residência fiscal na Madeira. As Finanças analisam o fiscal domicile e a ligação efectiva à região, não apenas a compra de imóvel.' }
      ]
    },
    {
      id: 'income-types',
      title: 'Que rendimentos beneficiam da taxa regional',
      content: [
        { kind: 'paragraph', text: 'A redução nota-se sobretudo no rendimento tributável normal: salário, pensão, self-employment/recibos verdes, parte do rental income quando se opta pelo englobamento. Em 2026, a primeira taxa nacional de IRS para o continente após as actualizações é 11,97%, mas a Madeira aplica a sua própria tabela regional reduzida; as análises comerciais da MCS indicam especificamente a taxa inferior da Madeira de 8,75%.' },
        { kind: 'checklist', items: [
          'Categoria A — salário ao abrigo de contrato de trabalho.',
          'Categoria B — recibos verdes, freelancing, empresário em nome individual.',
          'Categoria H — pensões, se forem tributadas em Portugal.',
          'Categoria F — arrendamento, se optar pelo englobamento em vez da taxa autónoma.',
          'Categoria E — juros e dividendos: muitas vezes existe escolha entre retenção liberatória/taxa especial e englobamento.',
          'Categoria G — capital gains: depende do tipo de activo, da residência e das regras de englobamento.',
          'Os rendimentos do estrangeiro também têm de ser declarados se for residente em Portugal; aplicam-se convenções para evitar a dupla tributação e foreign tax credit.'
        ] },
        { kind: 'paragraph', text: 'Para rendimentos de capitais, a Madeira proporciona muitas vezes uma poupança directa: a taxa especial padrão de 28% no continente é reduzida em 30%, ou seja, para 19,6%. Isto é especialmente importante para juros, alguns dividendos, rental income à taxa autónoma e determinadas capital gains.' }
      ]
    },
    {
      id: 'how-to-set-up',
      title: 'Como não perder a taxa da Madeira',
      content: [
        { kind: 'substeps', items: [
          { id: 'change-address', title: '1. Actualize o fiscal domicile', content: [
            { kind: 'paragraph', text: 'Depois da mudança, altere a morada do NIF para a Madeira. Se tiver Cartão de Cidadão ou Chave Móvel Digital (CMD), parte das operações pode ser feita online; para estrangeiros com autorização de residência, muitas vezes é mais simples através do Portal das Finanças ou presencialmente num serviço de Finanças.' }
          ] },
          { id: 'keep-proof', title: '2. Guarde provas de residência', content: [
            { kind: 'checklist', items: [
              'Contrato de arrendamento registado nas Finanças.',
              'Recibos de renda do senhorio.',
              'Facturas de electricidade, água, internet em seu nome.',
              'Atestado de residência da Junta de Freguesia.',
              'Contrato de trabalho ou recibos verdes com actividade na Madeira.',
              'Bilhetes e documentos da mudança, se o ano tiver sido de transição.'
            ] }
          ] },
          { id: 'file-irs', title: '3. Verifique o Modelo 3 antes de submeter', content: [
            { kind: 'paragraph', text: 'A entrega do IRS decorre normalmente de 1 de Abril a 30 de Junho relativamente ao ano fiscal anterior. Na declaração, verifique a morada, a região, o agregado familiar, os anexos e o regime de tributação dos rendimentos E/F/G: por vezes o englobamento é mais vantajoso, outras vezes a taxa especial de 19,6% é melhor.' }
          ] }
        ] }
      ]
    },
    {
      id: 'pitfalls',
      title: 'Erros frequentes dos expatriados',
      content: [
        { kind: 'checklist', items: [
          'Deixam a morada do NIF em Lisboa/Porto, embora vivam na Madeira.',
          'Pensam que arrendar um Airbnb durante 2 meses dá automaticamente acesso às taxas regionais.',
          'Não declaram juros do estrangeiro, dividendos ou conta de corretora, porque o dinheiro não entrou em Portugal.',
          'Comparam apenas a taxa inferior, mas não calculam todo o IRS: deductions, Segurança Social, surcharge e foreign tax credit podem alterar o resultado final.',
          'Confundem withholding tax com imposto final: a retenção na fonte nem sempre é igual ao IRS final.',
          'Não verificam se o englobamento é vantajoso para juros, dividendos, rendas e capital gains.',
          'Baseiam-se nas tabelas antigas do NHR: o NHR está fechado a novos requerentes, foi substituído pelo IFICI, e a taxa regional da Madeira existe separadamente.'
        ] },
        { kind: 'warning', text: 'Se as Finanças considerarem que o seu domicílio fiscal real não é na Madeira, a declaração pode ser recalculada segundo as regras do mainland e podem ser cobrados imposto adicional, juros compensatórios e coima.' }
      ]
    }
  ],
  costs: [
    { label: 'Alteração do fiscal domicile nas Finanças', amountEUR: 0, note: 'Normalmente gratuita; só podem existir custos com documentos notariais/traduções ou representante.' },
    { label: 'Atestado de residência na Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'A taxa depende da freguesia; é frequentemente necessário como prova de morada.' },
    { label: 'Contabilista/consultor fiscal para IRS', amountEURMin: 80, amountEURMax: 300, note: 'Intervalo habitual para uma declaração particular com rendimentos estrangeiros; casos complexos custam mais.' }
  ],
  sources: [
    {
      title: 'MCS: Imposto sobre o rendimento das pessoas singulares na Madeira vs Portugal continental em 2026',
      url: 'https://mcs.pt/personal-income-tax-in-madeira-vs-mainland-portugal-in-2026/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'MCS: Taxas reduzidas de IRS na Madeira — quem se qualifica em 2026',
      url: 'https://mcs.pt/reduced-irs-rates-in-madeira-who-qualifies-in-2026/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária: Código do IRS, taxas gerais e taxas especiais',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/irs/Pages/irs68.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Lei Orgânica 2/2013 — Lei das Finanças das Regiões Autónomas',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei-organica/2013-34545875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
