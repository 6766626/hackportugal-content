export default {
  editorialVoice: 'hackportugal',
  id: 'activobank-opening',
  categoryId: 'banking',
  title: 'Opening a bank account in Portugal (for non-residents and residents)',
  tldr: 'Portugal has ~9 major banks licensed by Banco de Portugal. Several offer fully online account opening for non-residents with a Portuguese NIF. Typical process: video identification, basic KYC, IBAN issued on the same day, card by post in 5-10 days. Basic account maintenance is free at most banks with minimal activity.',
  tags: ['bank', 'account', 'non-resident', 'iban', 'mb way'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-pt-account',
      title: 'Why you need a Portuguese account',
      content: [
        { kind: 'paragraph', text: 'An account with a Portuguese bank, with an IBAN starting with PT50, is needed for most day-to-day procedures: registering a long-term rental contract, direct debits (utilities, taxes, car fines), receiving a salary, arranging investments, receiving benefits from Segurança Social, and applying for a residence permit (some types require proof of funds in a Portuguese account).' },
        { kind: 'warning', text: 'An IBAN from another EU country (IE, DE, LT, etc.) is technically equivalent to a Portuguese one under SEPA rules, but in practice a number of Portuguese counterparties refuse direct debits from a foreign IBAN. For full compatibility, you need a PT-IBAN.' }
      ]
    },
    {
      id: 'types-of-banks',
      title: 'Types of banks in Portugal',
      content: [
        { kind: 'checklist', items: [
          'Large universal banks: Millennium BCP, Caixa Geral de Depósitos (state-owned bank), Novo Banco, Santander Totta, BPI',
          'Online subsidiaries of large banks: ActivoBank (from Millennium BCP)',
          'Digital neobanks with an EU licence operating in Portugal: Revolut (LT), N26 (DE), Wise (BE) — IBAN is not PT, but SEPA works',
          'Co-operative and regional banks: Crédito Agrícola, Montepio — often convenient in small towns',
          'Accounts with CTT (post office): CTT Bank — the state postal operator with basic banking services'
        ]},
        { kind: 'paragraph', text: 'Banks licensed by Banco de Portugal or EU banking regulators — deposits up to €100,000 are insured by the national DGS (Fundo de Garantia de Depósitos for banks licensed in Portugal, equivalent DGS schemes for other EU banks). IMPORTANT: Wise, Revolut and similar payment/EMI companies do NOT have bank status and are usually not covered by DGS; funds are protected through safeguarding (a separate account with a partner bank). This is a different level of protection — especially important for large balances.' }
      ]
    },
    {
      id: 'online-vs-branch',
      title: 'Online or branch',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Online (remote)', content: [
            { kind: 'paragraph', text: 'Several banks allow fully online account opening for clients with a NIF. Process: video identification with an operator in Portuguese or English, electronic signature via Chave Móvel Digital or via video confirmation. Suitable even if you are not yet in Portugal, provided you already have a NIF.' }
          ]},
          { id: 'o2', title: 'At a branch', content: [
            { kind: 'paragraph', text: 'The classic route is to attend a branch with your passport, NIF, proof of address and sometimes proof of income. Large banks often require in-person identification specifically for non-residents.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documents (standard set)',
      content: [
        { kind: 'checklist', items: [
          'Passport (valid for ≥ 6 months, for non-EU citizens)',
          'Cartão de Cidadão (for Portuguese/EU citizens)',
          'NIF (Número de Identificação Fiscal) — mandatory',
          'Proof of address — rental contract, utility bill or bank statement no older than 3 months',
          'Proof of income / source of funds — payslip, bank statement, employer letter',
          'Portuguese phone number — not mandatory, but it makes 2FA and MB WAY much easier'
        ]}
      ]
    },
    {
      id: 'typical-process',
      title: 'Typical online opening process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Fill in the form', content: [
            { kind: 'paragraph', text: 'On the bank website or in the app: full name, NIF, profession, source of income, purpose of the account, tax residence. For non-residents of Portugal, the form must state the country of current tax residence (CRS/DAC2 compliance).' }
          ]},
          { id: 'p2', title: '2. Upload documents', content: [
            { kind: 'paragraph', text: 'Scans / photos of passport, NIF, proof of address. Quality: all corners visible, no glare.' }
          ]},
          { id: 'p3', title: '3. Video identification (KYC)', content: [
            { kind: 'paragraph', text: 'A 5-15 minute video call. The operator asks you to show your passport, turn it, and asks control questions (under AML rules). They speak Portuguese or English, sometimes Spanish.' }
          ]},
          { id: 'p4', title: '4. Sign the contract', content: [
            { kind: 'paragraph', text: 'Electronic signature: either via Chave Móvel Digital or via a confirmation code from email + SMS.' }
          ]},
          { id: 'p5', title: '5. Receive IBAN and card', content: [
            { kind: 'timeline', text: 'IBAN is active on the day of approval (1-3 days). The debit card arrives by post in 5-10 working days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'what-you-get',
      title: 'What is usually included in the basic package',
      content: [
        { kind: 'checklist', items: [
          'Euro account + multi-currency options at some banks',
          'Visa/Mastercard debit card (free issuance at most online banks)',
          'MB WAY — the key Portuguese payment service (transfers by phone number, QR, contactless payment)',
          'Mobile and web banking',
          'Free SEPA transfers within the EU zone',
          'Direct debits (utilities, taxes, car fines)',
          'Access to Multibanco (ATM network in Portugal) with withdrawal limits of €200-400/day'
        ]}
      ]
    },
    {
      id: 'fees-watch',
      title: 'What to watch out for',
      content: [
        { kind: 'checklist', items: [
          'Anuidade / manutenção — annual/monthly maintenance fee. Many online banks charge €0 with minimal activity',
          'Imposto do Selo — stamp duty. In Portugal, it is NOT a fixed quarterly fee for the account itself; it is usually charged as **4%** on bank fees, **0.5%** on interest on loans/consumer credit, etc. If you have a free account with no other services — there may be no real Imposto do Selo at all',
          'Fee for withdrawals at another bank’s Multibanco — usually €0 in Portugal, but there are limits',
          'Inactivity fee — some banks charge €3-10/month if the account is unused for 6+ months',
          'Currency exchange (for international transfers): 1-3% markup over the ECB rate',
          'Fee for SWIFT transfer outside SEPA: €10-40 + correspondent bank fees'
        ]}
      ]
    },
    {
      id: 'red-flags',
      title: 'Common reasons for refusal',
      content: [
        { kind: 'warning', text: 'Banks in Portugal are required to carry out AML/KYC checks under Banco de Portugal rules and EU regulations. Common reasons for refusing account opening for a non-resident:' },
        { kind: 'checklist', items: [
          'Mismatch between the address on the documents and in the form',
          'No proof of source of funds for a large initial deposit',
          'Political exposure (PEP) or sanctions filter — refusal or a prolonged due diligence check',
          'Poor-quality video identification — applicants are often asked to repeat it',
          'Refusal to provide tax residence (CRS) — automatic refusal',
          'Fraudulent past transactions in international registers'
        ]},
        { kind: 'paragraph', text: 'If bank A refuses, it does not mean every bank will refuse — conditions and AML thresholds differ. On average, 2-3 attempts are enough.' }
      ]
    },
    {
      id: 'after-account',
      title: 'What to do after opening',
      content: [
        { kind: 'checklist', items: [
          'Activate MB WAY in the app (Portugal’s most important payment tool)',
          'Save the IBAN in your notes for quick copying when making payments',
          'Set up direct debits (débitos diretos) for utilities and taxes',
          'Enter your PT-IBAN in Portal das Finanças for IRS refunds',
          'Enter your PT-IBAN in Segurança Social for salary/benefits',
          'Connect Multibanco-Homebanking for access via ATM'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Passport or Cartão de Cidadão' },
    { title: 'NIF' },
    { title: 'Proof of address — no older than 3 months' },
    { title: 'Proof of source of funds' }
  ],
  costs: [
    { label: 'Account opening', amountEUR: 0 },
    { label: 'Annual maintenance (often)', amountEUR: 0 },
    { label: 'Imposto do Selo on bank fees', amountEUR: 0, note: '4% on bank fees, 0.5% on loan interest — NOT a fixed quarterly fee' },
    { label: 'Debit card issuance', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 10,
  sources: [
    { title: 'Banco de Portugal — supervision of banking activity', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Fundo de Garantia de Depósitos', url: 'https://www.fgd.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — abrir conta bancária', url: 'https://eportugal.gov.pt/cidadaos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento BdP 2/2018 (AML rules)', url: 'https://www.bportugal.pt/aviso-circular/aviso-ndeg-22018', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
