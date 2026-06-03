export default {
  editorialVoice: 'hackportugal',
  id: 'certificados-aforro-ot',
  categoryId: 'banking',
  title: 'Portuguese government bonds: Certificados de Aforro, Certificados do Tesouro and OT via AforroNet',
  tldr: 'AforroNet is IGCP online access to Portugal’s retail government debt. In 2026 the main mass-market product is Certificados de Aforro Série F: minimum €100, maximum €250,000 per person, term up to 15 years, cannot be redeemed in the first 3 months, rate = Euribor 3M + 1%, but capped at 2.5% before bonuses. You need a NIF, Conta Aforro, confirmed IBAN and Portuguese tax address. Interest is subject to IRS withholding at source: usually 28%.',
  tags: ['aforronet', 'igcp', 'bonds', 'irs', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-can-buy',
      title: 'What you can actually buy in 2026',
      content: [
        { kind: 'paragraph', text: 'IGCP sells retail government debt directly to individuals through the CTT/partner network and online via AforroNet. This is debt of the Portuguese Republic: the risk is sovereign, not banking risk. It is not covered by the Fundo de Garantia de Depósitos because it is not a deposit.' },
        { kind: 'checklist', items: ['Certificados de Aforro Série F — the main product available for new subscriptions in 2026', 'Minimum Série F subscription: €100', 'Maximum Série F: €250,000 per person (limit raised in April 2026); total Série E + Série F limit — €500,000', 'Série F term: up to 15 years', 'Early redemption of Série F is prohibited for the first 3 months', 'Série F rate: average Euribor 3M + 1%, but the base rate is capped at 2.5%', 'Série F holding-period bonuses are added from the 2nd year and rise from +0.25% up to +1.75% depending on the holding period', 'Certificados do Tesouro — old series can be held and redeemed; new subscriptions depend on whether the specific IGCP series is open', 'OT / Obrigações do Tesouro — standard treasury bonds; retail availability via AforroNet depends on the specific issue, and on the secondary market they are usually bought through a bank or broker'] },
        { kind: 'warning', text: 'Do not confuse Certificados de Aforro with a bank fixed-term deposit. The yield changes, liquidity is restricted by the series rules, and the price of standard OT on the market may fall when rates rise.' }
      ]
    },
    {
      id: 'eligibility-documents',
      title: 'Who can access it and which documents are needed',
      content: [
        { kind: 'paragraph', text: 'An expat does not need a Portuguese passport. You need identification, a NIF and a bank account for payments. In practice, everything is tied to the Conta Aforro — the individual investor account at IGCP.' },
        { kind: 'checklist', items: ['NIF with an up-to-date tax address in Finanças', 'Passport, Cartão de Cidadão or residence permit', 'Portuguese IBAN or an IBAN that IGCP/the service point will accept for linking to the Conta Aforro', 'IBAN confirmation: bank certificate, statement or homebanking document with the account holder’s name', 'Portuguese phone number and email for notifications and AforroNet', 'Residential address; if the address in Finanças is outdated, update it first', 'For minors — documents of the legal representative and the child', 'For tax non-residents — check which address and status are recorded in Finanças, because this affects IRS withholding'] },
        { kind: 'warning', text: 'If your NIF has the address of an old tax representative or an address outside Portugal, do not open the product “on autopilot”. First check your residence status in Finanças: mistakes later surface in IRS and tax withholding.' }
      ]
    },
    {
      id: 'open-conta-aforro',
      title: 'Open a Conta Aforro and activate AforroNet',
      content: [
        { kind: 'paragraph', text: 'AforroNet does not create an investor from scratch using only a NIF. First you need a Conta Aforro in the IGCP system. It is usually opened in person at a balcão CTT or another service point indicated by IGCP.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Prepare the documents', content: [
            { kind: 'checklist', items: ['Identity document', 'NIF', 'IBAN confirmation', 'Phone and email', 'Up-to-date address', 'Money for the first subscription, if you are opening the account with a purchase straight away'] }
          ]},
          { id: 's2', title: '2. Open the Conta Aforro', content: [
            { kind: 'paragraph', text: 'At the service point they create the Conta Aforro and link your NIF and IBAN. Check the name, NIF, address and IBAN before signing — corrections take time later.' }
          ]},
          { id: 's3', title: '3. Request adesão ao AforroNet', content: [
            { kind: 'paragraph', text: 'After creating the Conta Aforro, activate AforroNet at aforronet.igcp.pt. The system uses the Conta Aforro data and sends/activates access according to the IGCP procedure. Access may not appear instantly on the day of opening.' }
          ]},
          { id: 's4', title: '4. Check login and limits', content: [
            { kind: 'paragraph', text: 'After the first login, check the carteira, IBAN, contacts and available operations: subscrição, resgate, extratos, alteração de dados. If a product is not displayed, this usually means the series is closed to new subscriptions or the operation is not available online.' }
          ]}
        ] }
      ]
    },
    {
      id: 'buy-redeem',
      title: 'Buying, redeeming and money in the account',
      content: [
        { kind: 'paragraph', text: 'In AforroNet operations look simple, but each product has its own timings. For Certificados de Aforro Série F the key restriction is that the money is locked for the first 3 months.' },
        { kind: 'checklist', items: ['Choose subscrição and the product, if it is open for subscription', 'Enter the amount: for Série F the minimum is €100', 'Pay according to the IGCP instructions, usually through a banking channel/Multibanco if the system issues payment details', 'Keep the subscription comprovativo and payment document', 'Interest on Certificados de Aforro accrues quarterly and is capitalised after tax withholding', 'Redemption of Série F is possible only after 3 months of holding', 'For partial redemption, make sure the remaining balance does not breach the minimum rules of the series', 'Money from resgate is transferred to the IBAN linked to the Conta Aforro', 'If you change bank, first update the IBAN with IGCP and wait for confirmation'] },
        { kind: 'warning', text: 'OT is not the same as Certificados de Aforro. If you buy standard Obrigações do Tesouro through a bank/broker, the price depends on the market, and there are bid/ask spreads and fees. AforroNet does not replace a broker investment account for the secondary market.' }
      ]
    },
    {
      id: 'tax',
      title: 'Taxes: IRS and reporting',
      content: [
        { kind: 'paragraph', text: 'For individual residents of Portugal, interest on Certificados de Aforro, Certificados do Tesouro and Portuguese debt securities is usually subject to withholding at source at 28% under the Código do IRS. This is retenção na fonte com carácter liberatório: in the typical case, the tax has already been withheld, and the income does not have to be declared separately unless you choose englobamento.' },
        { kind: 'checklist', items: ['Resident of Portugal: standard IRS withholding — 28%', 'Interest is credited after tax has already been withheld', 'You can choose englobamento in Modelo 3 IRS, but then all relevant income is included in the progressive scale — this is not beneficial for everyone', 'If you are a tax non-resident, check the applicable rate and the double taxation treaty', 'To apply a treaty rate, a non-resident may need forms and proof of tax residence in another country', 'If you moved to Portugal in the middle of the year, check the date of change of tax residence in Finanças', 'Income from selling OT on the market may generate mais-valias/menos-valias; this is not the same as interest on Certificados de Aforro', 'Keep IGCP extratos and annual bank documents at least until the IRS audit period has ended'] },
        { kind: 'warning', text: 'Do not rely on Russian or Ukrainian tax logic. In Portugal, tax residence, source of income, type of instrument and whether tax was withheld at source matter. For a portfolio with OT through a broker, check the declaração IRS in advance.' }
      ]
    },
    {
      id: 'practical-choice',
      title: 'How to choose: Série F, Tesouro or OT',
      content: [
        { kind: 'paragraph', text: 'For a 3–24 month reserve, Certificados de Aforro are usually simpler: no market price, clear redemption rules, entry from €100. For money you may need before 3 months, the product is not suitable.' },
        { kind: 'checklist', items: ['Need simplicity and a government issuer — look at Certificados de Aforro Série F', 'Need liquidity tomorrow — a bank account or depósito a prazo without a lock-up is better', 'Ready to hold until maturity and the series is open — you can compare Certificados do Tesouro if IGCP again offers a new subscription', 'Want the fixed yield of a specific OT until maturity — calculate yield, fees and tax through the bank/broker', 'Planning to leave Portugal — check the change of address, IBAN and tax status in advance', 'Do not put the whole emergency fund into Série F: there is no access to the money for the first 3 months', 'Compare yield after 28% IRS, not just the gross rate'] },
        { kind: 'warning', text: 'The Série F rate has a ceiling: even if Euribor is high, the base rate of Certificados de Aforro Série F does not exceed 2.5% before holding-period bonuses. This is protection for the state, not for the investor.' }
      ]
    }
  ],
  costs: [
    { label: 'Opening Conta Aforro / AforroNet', amountEUR: 0, note: 'IGCP does not charge a fee for opening or online access; your bank may charge fees for operations.' },
    { label: 'Minimum subscription for Certificados de Aforro Série F', amountEUR: 100, note: 'The subscription nominal amount follows the rules of the series; check the operation form in AforroNet.' },
    { label: 'Maximum Certificados de Aforro Série F', amountEUR: 250000, note: 'Limit per person for Série F (raised in April 2026); total Série E + Série F limit — €500,000.' },
    { label: 'IRS on interest for a resident', amountEURMin: 0, amountEURMax: 28, note: 'This is a 28% rate, not a fixed amount in euros; it is withheld from accrued income.' },
    { label: 'OT fees through a bank/broker', amountEURMin: 0, amountEURMax: 50, note: 'They depend on the intermediary: purchase, custody, coupon payment, sale. Through AforroNet there are usually no IGCP fees for Certificados.' }
  ],
  sources: [
    { title: 'AforroNet IGCP — official portal for retail government debt operations', url: 'https://www.aforronet.igcp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IGCP — Dívida Pública de Retalho: Certificados de Aforro, Tesouro and OT', url: 'https://www.igcp.pt/en/investidores/instrumentos-de-financiamento/instrumentos-de-medio-longo-prazo/divida-de-retalho', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — tax withholding at source, art. 71', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS and englobamento de rendimentos de capitais', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
