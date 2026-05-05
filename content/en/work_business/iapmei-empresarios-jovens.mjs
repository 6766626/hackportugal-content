export default {
  editorialVoice: 'hackportugal',
  id: 'iapmei-empresarios-jovens',
  categoryId: 'work_business',
  title: 'IAPMEI: support for young entrepreneurs up to 35',
  tldr: 'IAPMEI does not issue an ‘automatic under‑35 grant’: money only flows through open avisos under Portugal 2030/COMPETE 2030 and regional programmes. Vale Empreendedorismo usually covers consultancy/launch planning up to €10,000 in eligible costs, not the founder’s salary. You must apply via Balcão dos Fundos; the old balcao2020.pt is a legacy of Portugal 2020. You will need a NIF, a company/ENI in Portugal, clean Finanças/Segurança Social records, and a business plan.',
  tags: ['iapmei', 'entrepreneurship', 'sme', 'grants'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What IAPMEI actually offers in 2026',
      content: [
        { kind: 'paragraph', text: 'IAPMEI is an agency of the Ministério da Economia that works with SMEs, start-ups, PME certification and part of the Portugal 2030 incentives. For young entrepreneurs up to 35, support is usually not set up as a permanent ‘passport-based benefit’, but appears in specific avisos: Vale Empreendedorismo, inovação produtiva, qualificação PME, digitalização, empreendedorismo qualificado.' },
        { kind: 'paragraph', text: 'Vale Empreendedorismo is the clearest format for a new business: a voucher for external services such as a business plan, market fit, prototype, legal/financial preparation, and go-to-market strategy. The typical ceiling seen in youth/new business calls is up to €10,000 of eligible costs, but the co-financing rate, limits and eligible expenditure are defined each time by the aviso text.' },
        { kind: 'warning', text: 'Do not budget for a grant as guaranteed cash-in. Most programmes work on a reimbursement basis: you first pay the supplier and show faturas/recibos, then receive compensation after verification. In practice, you need working-capital reserves.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who can apply',
      content: [
        { kind: 'checklist', items: [
          'Age: if the aviso is marked as jovem empreendedor, it is usually checked that the founder/controlling sócios are under 35 on the submission date; the exact wording is in the aviso.',
          'The business must be in Portugal: ENI/empresário em nome individual or a sociedade with NIPC, sede/estabelecimento in PT.',
          'An expat may participate if they have the right to work/run a business in Portugal: residence permit, a visa allowing the activity, EU residence, or another lawful status.',
          'NIF is mandatory; for a company — certidão permanente, CAE, the company’s IBAN, contabilidade organizada where required.',
          'No debts at Finanças and Segurança Social: certidões de não dívida are needed or permission for automatic checks.',
          'PME Certification on the IAPMEI portal is often mandatory for companies already created as micro/PME.',
          'The project must not have started before the eligible date: expenditure prior to submission/decision is often not accepted.',
          'Service providers must be independent: you cannot buy consultancy from your own company, relatives or related sócios.',
          'Support usually falls under the de minimis rule: the overall EU de minimis aid limit is €300,000 over 3 years per single undertaking.',
          'Sectors with restrictions: finance, real estate as an investment, gambling, parts of agriculture/fisheries and pure trading may be excluded by a specific aviso.'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to find open calls and apply',
      content: [
        { kind: 'paragraph', text: 'In 2026, rely not on chat rumours but on three places: the IAPMEI website, the COMPETE 2030 portal and Balcão dos Fundos. The old balcao2020.pt relates to Portugal 2020; many links still live, but new Portugal 2030 applications go via Balcão dos Fundos.' },
        { kind: 'substeps', items: [
          { id: 'find-aviso', title: '1. Find an aviso', content: [
            { kind: 'paragraph', text: 'On compete2030.gov.pt open Avisos and filter by "Empreendedorismo", "PME", "Inovação", "Qualificação" or "Vales". On iapmei.pt check news and the "Incentivos" pages.' }
          ] },
          { id: 'read-rules', title: '2. Read the aviso in full', content: [
            { kind: 'checklist', items: [
              'opening and closing date',
              'territory: Continente, Norte, Centro, Lisboa, Alentejo, Algarve, Açores/Madeira',
              'who the beneficiary is: pessoa singular, ENI, sociedade, PME up to X years',
              'maximum incentive: for example up to €10,000 per voucher',
              'co-financing rate: 50%, 60%, 75% or a fixed amount',
              'minimum/maximum budget',
              'permitted despesas elegíveis',
              'evaluation criteria and scores',
              'whether jobs must be created',
              'project implementation deadline'
            ] }
          ] },
          { id: 'submit', title: '3. Submit the candidatura', content: [
            { kind: 'paragraph', text: 'Sign in via autenticação.gov.pt, Chave Móvel Digital or Cartão de Cidadão. For a company you often need access as representante legal. Complete the formulário, upload the business plan, budget/quotes, company documents and declarations.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Document pack: what to prepare in advance',
      content: [
        { kind: 'checklist', items: [
          'The founder’s NIF and the company’s NIPC, if a sociedade already exists.',
          'Documento de identificação: passport + residence permit/visa/CRUE for EU, if applicable.',
          'Certidão permanente comercial or código de acesso.',
          'CAE, início de atividade date in Finanças, declaração de início de atividade for ENI.',
          'Certidões de situação regularizada at Autoridade Tributária and Segurança Social.',
          'PME Certification IAPMEI, if the company is already operating and the aviso requires PME.',
          'Business plan for 2–3 years: product, market, clients, pricing, competitors, sales channels.',
          'Financial plan: investment, cash flow, break-even, sources of co-financing.',
          'Quotations from independent suppliers: consulting, development, marketing, certification, prototype.',
          'CV/founder profile: experience, education, the role of each sócio.',
          'De minimis declaration and a list of grants/subsidies already received.',
          'Company IBAN and evidence that you have funds for your own share of the expenditure.'
        ] },
        { kind: 'warning', text: 'If you do not yet have a company, read the aviso before registering. Some competitions require "empresa criada há menos de 2 anos", and some require that the activity has not yet started. The wrong início de atividade date can kill an application.' }
      ]
    },
    {
      id: 'selection-reality',
      title: 'Chances, timelines and common refusal reasons',
      content: [
        { kind: 'paragraph', text: 'There is no single public “success rate” for youth IAPMEI applications: the percentage depends on the aviso, region and budget. In popular vouchers, money runs out quickly, and competition is higher in Lisboa/Porto and in digital/consulting projects. A realistic timeline: 2–4 weeks for preparation, 2–6 months for a decision, then project delivery and reimbursement.' },
        { kind: 'checklist', items: [
          'Projects look stronger if demand is already validated: LOIs, first clients, pilots, pre-sales.',
          'Scores are higher if there is innovation, export potential, a digital/green component and a qualified team.',
          'Weak applications: “open a cafe/shop” with no differentiation, market or financial model.',
          'Common refusal: costs not eligible — rent, ordinary operating expenses, founder’s salary, an old laptop, marketing unrelated to the project.',
          'Common refusal: debts at Finanças/Segurança Social at the time of verification.',
          'Common refusal: the supplier is related to the applicant or the orçamento looks artificial.',
          'Common refusal: the project started before submission, services already paid, contract already signed.',
          'Common refusal: the company fails the SME criterion or the CAE does not fit the aviso.'
        ] },
        { kind: 'paragraph', text: 'If you need support not for consultancy but for salary/job creation, check IEFP Empreende XXI and medidas de criação do próprio emprego in parallel. These are not IAPMEI, but for first-time entrepreneurs they are often more practical than waiting for a suitable COMPETE 2030 aviso.' }
      ]
    },
    {
      id: 'practical-plan',
      title: 'A practical 30-day plan',
      content: [
        { kind: 'checklist', items: [
          'Days 1–3: check your migration status and right to carry out the atividade; without this, do not spend time on an application.',
          'Days 3–5: get/check your NIF, access to Portal das Finanças, Segurança Social Direta, CMD.',
          'Days 5–10: choose the form: ENI or sociedade por quotas; for grants a sociedade often looks stronger, but costs more in accounting.',
          'Days 10–14: obtain PME Certification on IAPMEI if the company is already created.',
          'Days 14–20: collect 2–3 orçamento from independent suppliers for Vale Empreendedorismo/Vales.',
          'Days 20–25: prepare the business plan and financial model; translate key materials into Portuguese.',
          'Days 25–30: register on Balcão dos Fundos, set up company representation and subscribe to COMPETE 2030 avisos.',
          'In parallel: keep a reserve for your own share of costs and VAT — IVA is often paid upfront, even if part of the expense is later reimbursed.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Vale Empreendedorismo / voucher for services', amountEURMax: 10000, note: 'Typical ceiling of eligible costs for youth/new business vouchers; check the specific aviso for the exact limit and co-financing percentage.' },
    { label: 'Online registration of a sociedade por quotas', amountEUR: 220, note: 'Empresa Online; may differ with a non-standard statute/articles or lawyer’s services.' },
    { label: 'Accounting for a microempresa', amountEURMin: 100, amountEURMax: 250, note: 'Usual monthly range without payroll and complex IVA; not a grant, but needed for compliance.' },
    { label: 'Certidão permanente comercial', amountEUR: 25, note: 'Usually valid for 1 year; often a código de acesso is required instead of a PDF.' }
  ],
  sources: [
    { title: 'IAPMEI — incentives, SMEs and entrepreneurship', url: 'https://www.iapmei.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'COMPETE 2030 — Portugal 2030 calls for SMEs and entrepreneurship', url: 'https://www.compete2030.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Balcão dos Fundos — submit Portugal 2030 applications', url: 'https://balcaofundosue.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'European Commission — de minimis state aid rules 2024–2030', url: 'https://competition-policy.ec.europa.eu/state-aid/legislation/regulations/de-minimis-regulation_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
