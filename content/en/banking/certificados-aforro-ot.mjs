export default {
  editorialVoice: 'hackportugal',
  id: 'certificados-aforro-ot',
  categoryId: 'banking',
  title: 'Portugal government bonds: Certificados de Aforro, Certificados do Tesouro and OT via AforroNet',
  tldr: 'AforroNet is IGCP\'s online access to Portugal\'s retail government debt. In 2026 the main mass-market product is Certificados de Aforro Série F: minimum €100, maximum €50,000 per person, maturity up to 15 years, cannot be redeemed in the first 3 months, rate = 3M Euribor + 1% but capped at 2.5% before tenure bonuses. You need a NIF, a Conta Aforro, a verified IBAN and a Portuguese tax address. Interest is subject to IRS withholding at source: typically 28%.',
  tags: ['aforronet', 'igcp', 'bonds', 'irs', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-can-buy',
      title: 'What you can actually buy in 2026',
      content: [
        { kind: 'paragraph', text: 'IGCP sells retail government debt directly to individuals via the CTT/partner network and online via AforroNet. This is debt of the Portuguese Republic: the risk is not banking, but sovereign. It is not covered by the Fundo de Garantia de Depósitos because it is not a deposit.' },
        { kind: 'checklist', items: ['Certificados de Aforro Série F — the main product available for new subscriptions in 2026', 'Minimum subscription for Série F: €100', 'Maximum for Série F: €50,000 per person; combined limit for Série E + Série F — €250,000', 'Term for Série F: up to 15 years', 'Early redemption of Série F is prohibited in the first 3 months', 'Rate for Série F: 3M Euribor average + 1%, but the base rate is capped at 2.5%', 'Tenure bonuses for Série F are added after the 1st year: +0.25%, +0.50% or +1.00% depending on the holding period', 'Certificados do Tesouro — you can hold and redeem older series; new subscriptions depend on whether a specific IGCP series is open', 'OT / Obrigações do Tesouro — standard Treasury bonds; retail availability via AforroNet depends on the specific issue, and on the secondary market they are usually bought via a bank or broker'] },
        { kind: 'warning', text: 'Do not confuse Certificados de Aforro with a bank term deposit. The yield changes, liquidity is constrained by the series rules, and the price of regular OT on the market can fall when rates rise.' }
      ]
    },
    {
      id: 'eligibility-documents',
      title: 'Who is eligible and which documents are needed',
      content: [
        { kind: 'paragraph', text: 'An expat does not need a Portuguese passport. You need identification, a NIF and a bank account for payments. Practically everything hinges on the Conta Aforro — the individual investor account at IGCP.' },
        { kind: 'checklist', items: ['NIF with an up-to-date tax address at Finanças', 'Passport, Cartão de Cidadão or residence permit', 'Portuguese IBAN or an IBAN that IGCP/the service desk will accept for linking to the Conta Aforro', 'IBAN proof: a bank letter, extracto or a document from homebanking showing the account holder’s name', 'Portuguese phone number and email for notifications and AforroNet', 'Residential address; if the address at Finanças is outdated, update it first', 'For minors — documents of the legal representative and the child', 'For tax non-residents — check which address and status are set at Finanças, because this affects IRS withholding'] },
        { kind: 'warning', text: 'If you have a NIF with the address of an old tax representative or an address outside Portugal, do not open the product “on autopilot”. First check the residency status at Finanças: mistakes will later surface in IRS and withholding.' }
      ]
    },
    {
      id: 'open-conta-aforro',
      title: 'Open a Conta Aforro and enable AforroNet',
      content: [
        { kind: 'paragraph', text: 'AforroNet does not create an investor from scratch by NIF alone. You first need a Conta Aforro in the IGCP system. Usually it is opened in person at a CTT counter or another point indicated by IGCP.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Prepare the documents', content: [
            { kind: 'checklist', items: ['Identity document', 'NIF', 'IBAN proof', 'Phone and email', 'Current address', 'Funds for the first subscription if you are opening the account together with a purchase'] }
          ]},
          { id: 's2', title: '2. Open the Conta Aforro', content: [
            { kind: 'paragraph', text: 'At the service point they create the Conta Aforro and link your NIF and IBAN. Check your name, NIF, address and IBAN before signing — corrections take time afterwards.' }
          ]},
          { id: 's3', title: '3. Request adesão ao AforroNet', content: [
            { kind: 'paragraph', text: 'After the Conta Aforro is created, enable AforroNet at aforronet.igcp.pt. The system uses the Conta Aforro data and sends/activates access according to IGCP procedure. Access may not appear instantly on the opening day.' }
          ]},
          { id: 's4', title: '4. Check login and limits', content: [
            { kind: 'paragraph', text: 'After the first login, check the carteira, IBAN, contacts and the available operations: subscrição, resgate, extratos, alteração de dados. If a product is not displayed, this usually means the series is closed for new subscriptions or the operation is not available online.' }
          ]}
        ] }
      ]
    },
    {
      id: 'buy-redeem',
      title: 'Buying, redemption and money in the account',
      content: [
        { kind: 'paragraph', text: 'In AforroNet the operations look simple, but each product has its own timelines. For Certificados de Aforro Série F the main restriction is that the money is locked for the first 3 months.' },
        { kind: 'checklist', items: ['Choose subscrição and the product if it is open for subscription', 'Enter the amount: for Série F the minimum is €100', 'Pay according to IGCP instructions, usually via a banking channel/Multibanco if the system provides payment details', 'Keep the comprovativo of the subscription and the payment document', 'Interest on Certificados de Aforro accrues quarterly and is capitalised after tax withholding', 'Redemption of Série F is only possible after 3 months of holding', 'For partial redemption, ensure the remainder does not breach the series’ minimum rules', 'Funds from resgate are transferred to the IBAN linked to the Conta Aforro', 'If you change bank, first update the IBAN with IGCP and wait for confirmation'] },
        { kind: 'warning', text: 'OT are not the same as Certificados de Aforro. If you buy regular Obrigações do Tesouro via a bank/broker, the price depends on the market, there is a bid/ask spread and fees. AforroNet does not replace a brokerage investment account for the secondary market.' }
      ]
    },
    {
      id: 'tax',
      title: 'Taxes: IRS and reporting',
      content: [
        { kind: 'paragraph', text: 'For individual residents of Portugal, interest on Certificados de Aforro, Certificados do Tesouro and Portuguese debt securities is usually subject to withholding at source at a 28% rate under the Código do IRS. This is retenção na fonte com carácter liberatório: in a typical case the tax has already been withheld and it is not necessary to declare the income separately unless you choose englobamento.' },
        { kind: 'checklist', items: ['Portugal resident: standard IRS withholding — 28%', 'Interest is credited after tax withholding', 'You may choose englobamento in the IRS Modelo 3, but then all the relevant income is included in the progressive scale — this is not beneficial for everyone', 'If you are a tax non-resident, check the applicable rate and the double taxation agreement', 'To apply a treaty rate, a non-resident may need forms and proof of tax residency of the other country', 'If you moved to Portugal mid-year, check the date of the change of tax residency at Finanças', 'Income from selling OT on the market may result in mais-valias/menos-valias; this is not the same as interest from Certificados de Aforro', 'Keep IGCP extratos and annual bank documents at least until the IRS review period ends'] },
        { kind: 'warning', text: 'Do not rely on Russian or Ukrainian tax logic. In Portugal what matters are tax residency, the source of income, the type of instrument and whether tax was withheld at source. If you hold OT via a broker, check your declaração IRS in advance.' }
      ]
    },
    {
      id: 'practical-choice',
      title: 'How to choose: Série F, Tesouro or OT',
      content: [
        { kind: 'paragraph', text: 'For a reserve of 3–24 months, Certificados de Aforro are usually simpler: no market price, clear redemption rules, entry from €100. For money that may be needed before 3 months, the product is not suitable.' },
        { kind: 'checklist', items: ['Need simplicity and a government issuer — look at Certificados de Aforro Série F', 'Need liquidity tomorrow — better a bank account or a depósito a prazo without lock-up', 'Ready to hold to maturity and the series is open — you can compare Certificados do Tesouro if IGCP offers a new subscription again', 'Want a fixed yield of a specific OT to maturity — calculate the yield, fees and tax via a bank/broker', 'Planning to leave Portugal — check address change, IBAN and tax status in advance', 'Do not place your entire emergency fund in Série F: there is no access to the money for the first 3 months', 'Compare returns after 28% IRS, not just the gross rate'] },
        { kind: 'warning', text: 'The Série F rate has a ceiling: even if Euribor is high, the base rate of Certificados de Aforro Série F does not exceed 2.5% before tenure bonuses. This protects the state, not the investor.' }
      ]
    }
  ],
  costs: [
    { label: 'Opening a Conta Aforro / AforroNet', amountEUR: 0, note: 'IGCP does not charge a fee for opening and online access; your bank may charge fees for transactions.' },
    { label: 'Minimum subscription for Certificados de Aforro Série F', amountEUR: 100, note: 'Subscription nominal must follow the series rules; check the operation form in AforroNet.' },
    { label: 'Maximum for Certificados de Aforro Série F', amountEUR: 50000, note: 'Per person limit for Série F; combined limit for Série E + Série F — €250,000.' },
    { label: 'IRS on interest for a resident', amountEURMin: 0, amountEURMax: 28, note: 'This is a 28% rate, not a fixed euro amount; withheld from the accrued income.' },
    { label: 'Fees for OT via a bank/broker', amountEURMin: 0, amountEURMax: 50, note: 'Depend on the intermediary: purchase, custody, coupon payment, sale. Via AforroNet there are usually no IGCP fees for Certificados.' }
  ],
  sources: [
    { title: 'AforroNet IGCP — official portal for retail government debt operations', url: 'https://www.aforronet.igcp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IGCP — Dívida Pública de Retalho: Certificados de Aforro, Tesouro and OT', url: 'https://www.igcp.pt/en/investidores/instrumentos-de-financiamento/instrumentos-de-medio-longo-prazo/divida-de-retalho', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — withholding tax at source, art. 71', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS and englobamento de rendimentos de capitais', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
