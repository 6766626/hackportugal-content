export default {
  editorialVoice: 'hackportugal',
  id: 'iapmei-empresarios-jovens',
  categoryId: 'work_business',
  title: 'IAPMEI: support for young entrepreneurs under 35',
  tldr: 'IAPMEI does not issue an “automatic grant for under-35s”: money is available only through open Portugal 2030/COMPETE 2030 avisos and regional programmes. Vale Empreendedorismo usually covers consultancy/launch plan costs up to €10,000 eligible costs, not the founder’s salary. You must apply through Balcão dos Fundos; the old balcao2020.pt is a Portugal 2020 legacy system. You need a NIF, a company/ENI in Portugal, clean Finanças/Segurança Social records and a business plan.',
  tags: ['iapmei', 'entrepreneurship', 'sme', 'grants'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What IAPMEI actually provides in 2026',
      content: [
        { kind: 'paragraph', text: 'IAPMEI is an agency of the Ministério da Economia that handles PME, startups, PME certification and part of the Portugal 2030 incentive system. For young entrepreneurs under 35, support is usually not structured as a permanent “passport-based benefit”, but appears in specific avisos: Vale Empreendedorismo, inovação produtiva, qualificação PME, digitalização, empreendedorismo qualificado.' },
        { kind: 'paragraph', text: 'Vale Empreendedorismo is the clearest format for a new business: a voucher for external services, for example a business plan, market fit, prototype, legal/financial preparation, or product launch strategy. A typical ceiling seen in youth/new business calls is up to €10,000 eligible costs, but the co-financing rate, limits and eligible expenses are set each time by the aviso text.' },
        { kind: 'warning', text: 'Do not treat the grant as guaranteed cash-in. Most programmes work by reimbursement: first you pay the supplier and show faturas/recibos, then you receive compensation after checks. In practice, you need a working-capital buffer.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who can apply',
      content: [
        { kind: 'checklist', items: [
          'Age: if the aviso is marked as jovem empreendedor, it is usually checked that the founder/controlling socios are under 35 on the application date; the exact wording is in the aviso.',
          'The business must be in Portugal: ENI/empresário em nome individual or sociedade with NIPC, sede/estabelecimento in PT.',
          'An expat can participate if they have the right to work/run a business in Portugal: residence permit, visa with permission for the activity, EU residence, or another lawful status.',
          'A NIF is mandatory; for a company — certidão permanente, CAE, company IBAN, contabilidade organizada where required.',
          'No debts to Finanças and Segurança Social: certidões de não dívida are needed, or permission for automatic checks.',
          'PME Certification on the IAPMEI portal is often mandatory for companies already created as micro/PME.',
          'The project must not have started before the eligible date: expenses before application/decision are often not accepted.',
          'Service providers must be independent: you cannot buy consultancy from your own company, relatives or connected socios.',
          'Support usually falls under the regra de minimis: the total EU de minimis aid limit is €300,000 over 3 years per undertaking.',
          'Restricted sectors: finance, property as an investment, gambling, parts of agriculture/fisheries and pure trading may be excluded by a specific aviso.'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to find open calls and apply',
      content: [
        { kind: 'paragraph', text: 'In 2026, do not rely on chat-room rumours, but on three places: the IAPMEI website, the COMPETE 2030 portal and Balcão dos Fundos. The old balcao2020.pt relates to Portugal 2020; many links still work, but new Portugal 2030 applications go through Balcão dos Fundos.' },
        { kind: 'substeps', items: [
          { id: 'find-aviso', title: '1. Find an aviso', content: [
            { kind: 'paragraph', text: 'On compete2030.gov.pt, open Avisos and filter by “Empreendedorismo”, “PME”, “Inovação”, “Qualificação” or “Vales”. On iapmei.pt, check the news and “Incentivos” pages.' }
          ] },
          { id: 'read-rules', title: '2. Read the full aviso', content: [
            { kind: 'checklist', items: [
              'opening and closing date',
              'territory: Continente, Norte, Centro, Lisboa, Alentejo, Algarve, Açores/Madeira',
              'who the beneficiary is: pessoa singular, ENI, sociedade, PME up to X years old',
              'maximum incentivo: for example up to €10,000 via a voucher',
              'co-financing rate: 50%, 60%, 75% or a fixed amount',
              'minimum/maximum orçamento',
              'permitted despesas elegíveis',
              'assessment criteria and scores',
              'whether jobs must be created',
              'project implementation period'
            ] }
          ] },
          { id: 'submit', title: '3. Submit the candidatura', content: [
            { kind: 'paragraph', text: 'Login is through autenticação.gov.pt, Chave Móvel Digital or Cartão de Cidadão. For a company, access as representante legal is often needed. You fill in the formulário, upload the business plan, orçamento/quotes, company documents and declarations.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Document pack: what to prepare in advance',
      content: [
        { kind: 'checklist', items: [
          'Founder’s NIF and company NIPC, if the sociedade has already been created.',
          'Documento de identificação: passport + residence permit/visa/CRUE for EU, if applicable.',
          'Certidão permanente comercial or código de acesso.',
          'CAE, activity start date in Finanças, declaração de início de atividade for ENI.',
          'Certidões de situação regularizada from Autoridade Tributária and Segurança Social.',
          'PME Certification IAPMEI, if the company is already operating and the aviso requires PME.',
          'Business plan for 2–3 years: product, market, customers, pricing, competitors, sales channels.',
          'Plano financeiro: investimento, cash flow, break-even, sources of cofinanciamento.',
          'Orçamentos from independent suppliers: consultancy, development, marketing, certification, prototype.',
          'CV/founder profile: experience, education, role of each socio.',
          'De minimis declaration and list of grants/subsidies already received.',
          'Company IBAN and proof that you have money for your own share of expenses.'
        ] },
        { kind: 'warning', text: 'If you do not yet have a company, check the aviso before registering. Some calls require an “empresa criada há menos de 2 anos”, while others require that activity has not yet started. The wrong início de atividade date can kill the application.' }
      ]
    },
    {
      id: 'selection-reality',
      title: 'Chances, timelines and typical refusal reasons',
      content: [
        { kind: 'paragraph', text: 'There is no single public “success rate” for IAPMEI youth applications: the percentage depends on the aviso, region and budget. In popular vouchers, the money runs out quickly, and competition is higher in Lisboa/Porto and digital/consulting projects. A realistic timeline: 2–4 weeks for preparation, 2–6 months for a decision, then project implementation and reimbursement.' },
        { kind: 'checklist', items: [
          'Projects with already validated demand look stronger: LOI, first customers, pilots, pre-sales.',
          'The score is higher if there is innovation, export potential, a digital/green component and a qualified team.',
          'Weak applications: “open a café/shop” with no differentiation, market or financial model.',
          'Common refusal: expenses are not eligible — rent, ordinary operating expenses, founder salary, an old laptop, marketing with no link to the project.',
          'Common refusal: debts to Finanças/Segurança Social at the time of checks.',
          'Common refusal: the supplier is connected to the applicant or the orçamento looks artificial.',
          'Common refusal: the project started before application, services have already been paid for, or a contract has already been signed.',
          'Common refusal: the company does not meet the PME criterion or the CAE does not fit the aviso.'
        ] },
        { kind: 'paragraph', text: 'If you need support not for consultancy but for salary/job creation, also check IEFP Empreende XXI and criação do próprio emprego measures. This is not IAPMEI, but for early-stage entrepreneurs it is often more practical than waiting for the right COMPETE 2030 aviso.' }
      ]
    },
    {
      id: 'practical-plan',
      title: 'A practical 30-day plan',
      content: [
        { kind: 'checklist', items: [
          'Day 1–3: check your immigration status and right to carry out atividade; without this, do not spend time on the application.',
          'Day 3–5: obtain/check your NIF, access to Portal das Finanças, Segurança Social Direta, CMD.',
          'Day 5–10: decide the form: ENI or sociedade por quotas; for grants, a sociedade often looks stronger, but is more expensive for accounting.',
          'Day 10–14: complete PME Certification on IAPMEI, if the company has already been created.',
          'Day 14–20: gather 2–3 orçamento from independent suppliers for Vale Empreendedorismo/Vales.',
          'Day 20–25: prepare the business plan and financial model; translate key materials into Portuguese.',
          'Day 25–30: register in Balcão dos Fundos, set up company representation and subscribe to COMPETE 2030 avisos.',
          'In parallel: keep a reserve for your own share of expenses and VAT — IVA is often paid immediately, even if part of the expense is later reimbursed.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Vale Empreendedorismo / service voucher', amountEURMax: 10000, note: 'Typical eligible costs ceiling for youth/new business vouchers; check the exact limit and co-financing % in the specific aviso.' },
    { label: 'Online sociedade por quotas registration', amountEUR: 220, note: 'Empresa Online; may differ with non-standard articles of association/legal services.' },
    { label: 'Microempresa accounting', amountEURMin: 100, amountEURMax: 250, note: 'Usual monthly range without payroll and complex IVA; not a grant, but needed for compliance.' },
    { label: 'Certidão permanente comercial', amountEUR: 25, note: 'Usually for 1 year; an access code is often required instead of a PDF.' }
  ],
  sources: [
    { title: 'IAPMEI — incentives, PME and entrepreneurship', url: 'https://www.iapmei.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'COMPETE 2030 — Portugal 2030 avisos for PME and entrepreneurship', url: 'https://www.compete2030.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Balcão dos Fundos — submitting Portugal 2030 candidaturas', url: 'https://balcaofundosue.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'European Commission — de minimis aid rules 2024–2030', url: 'https://competition-policy.ec.europa.eu/state-aid/legislation/regulations/de-minimis-regulation_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
