export default {
  editorialVoice: 'hackportugal',
  id: 'certificados-aforro-ot',
  categoryId: 'banking',
  title: 'Portuguese government bonds: Certificados de Aforro, Certificados do Tesouro and OT via AforroNet',
  tldr: 'AforroNet is IGCP’s online access to Portugal’s retail government debt. In 2026, the main mass-market product is Certificados de Aforro Série F: minimum €100, maximum €50,000 per person, term up to 15 years, cannot be redeemed in the first 3 months, rate = 3M Euribor + 1%, but capped at 2.5% before holding-period bonuses. You need a NIF, Conta Aforro, confirmed IBAN and Portuguese tax address. Interest is subject to IRS withholding at source: usually 28%.',
  tags: ['aforronet', 'igcp', 'bonds', 'irs', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-can-buy',
      title: 'What you can actually buy in 2026',
      content: [
        { kind: 'paragraph', text: 'IGCP sells retail government debt directly to individuals through the CTT/partner network and online via AforroNet. This is debt of the Portuguese Republic: the risk is sovereign, not bank risk. It is not covered by the Fundo de Garantia de Depósitos, because it is not a deposit.' },
        { kind: 'checklist', items: ['Certificados de Aforro Série F — the main product available for new subscriptions in 2026', 'Minimum Série F subscription: €100', 'Maximum Série F: €50,000 per person; overall Série E + Série F limit — €250,000', 'Série F term: up to 15 years', 'Early redemption of Série F is prohibited for the first 3 months', 'Série F rate: average 3M Euribor + 1%, but the base rate is capped at 2.5%', 'Série F holding-period bonuses are added after the 1st year: +0.25%, +0.50% or +1.00% depending on the holding period', 'Certificados do Tesouro — old series can be held and redeemed; new subscriptions depend on whether the specific IGCP series is open', 'OT / Obrigações do Tesouro — ordinary treasury bonds; retail availability via AforroNet depends on the specific issue, while on the secondary market they are usually bought through a bank or broker'] },
        { kind: 'warning', text: 'Do not confuse Certificados de Aforro with a bank term deposit. The return changes, liquidity is limited by the rules of the series, and the price of ordinary OT on the market can fall when rates rise.' }
      ]
    },
    {
      id: 'eligibility-documents',
      title: 'Who can access them and which documents are needed',
      content: [
        { kind: 'paragraph', text: 'An expat does not need a Portuguese passport. You need identification, a NIF and a bank account for payments. In practice, everything is linked to the Conta Aforro — the individual investor account at IGCP.' },
        { kind: 'checklist', items: ['NIF with an up-to-date tax address in Finanças', 'Passport, Cartão de Cidadão or residence permit', 'Portuguese IBAN or an IBAN that IGCP/the service point will accept for linking to the Conta Aforro', 'Proof of IBAN: bank certificate, statement or homebanking document showing the account holder’s name', 'Portuguese phone number and email for notifications and AforroNet', 'Residential address; if the address in Finanças is out of date, update it first', 'For minors — documents of the legal representative and the child', 'For tax non-residents — check which address and status are recorded in Finanças, because this affects IRS withholding'] },
        { kind: 'warning', text: 'If you have a NIF with the address of an old tax representative or an address outside Portugal, do not open the product “on autopilot”. First check your residency status in Finanças: mistakes later surface in IRS and tax withholding.' }
      ]
    },
    {
      id: 'open-conta-aforro',
      title: 'Open a Conta Aforro and activate AforroNet',
      content: [
        { kind: 'paragraph', text: 'AforroNet does not create an investor from scratch using only a NIF. First you need a Conta Aforro in the IGCP system. It is usually opened in person at a balcão CTT or another point listed by IGCP.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Prepare the documents', content: [
            { kind: 'checklist', items: ['Identity document', 'NIF', 'Proof of IBAN', 'Phone and email', 'Up-to-date address', 'Money for the first subscription if you open the account and buy at the same time'] }
          ]},
          { id: 's2', title: '2. Open the Conta Aforro', content: [
            { kind: 'paragraph', text: 'At the service point, they create the Conta Aforro and link your NIF and IBAN. Check the name, NIF, address and IBAN before signing — corrections later take time.' }
          ]},
          { id: 's3', title: '3. Request adesão ao AforroNet', content: [
            { kind: 'paragraph', text: 'After creating the Conta Aforro, activate AforroNet at aforronet.igcp.pt. The system uses the Conta Aforro data and sends/activates access according to the IGCP procedure. Access may not appear instantly on the day the account is opened.' }
          ]},
          { id: 's4', title: '4. Check login and limits', content: [
            { kind: 'paragraph', text: 'After the first login, check the carteira, IBAN, contacts and available operations: subscrição, resgate, extratos, alteração de dados. If the product is not displayed, this usually means that the series is closed to new subscriptions or the operation is not available online.' }
          ]}
        ] }
      ]
    },
    {
      id: 'buy-redeem',
      title: 'Buying, redeeming and money in the account',
      content: [
        { kind: 'paragraph', text: 'In AforroNet, operations look simple, but each product has its own timings. For Certificados de Aforro Série F, the main restriction is that the money is locked for the first 3 months.' },
        { kind: 'checklist', items: ['Select subscrição and the product, if it is open for subscription', 'Enter the amount: for Série F the minimum is €100', 'Pay according to the IGCP instructions, usually through a banking channel/Multibanco if the system issues payment details', 'Keep the comprovativo of subscription and the payment document', 'Interest on Certificados de Aforro is accrued quarterly and capitalised after tax withholding', 'Redemption of Série F is possible only after 3 months of holding', 'For partial redemption, make sure the remaining balance does not breach the minimum rules of the series', 'Money from resgate is transferred to the IBAN linked to the Conta Aforro', 'If you change bank, first update the IBAN with IGCP and wait for confirmation'] },
        { kind: 'warning', text: 'OT are not the same as Certificados de Aforro. If you buy ordinary Obrigações do Tesouro through a bank/broker, the price depends on the market, and there is a bid/ask spread and fees. AforroNet does not replace a broker investment account for the secondary market.' }
      ]
    },
    {
      id: 'tax',
      title: 'Taxes: IRS and reporting',
      content: [
        { kind: 'paragraph', text: 'For individuals resident in Portugal, interest on Certificados de Aforro, Certificados do Tesouro and Portuguese debt securities is usually subject to withholding at source at 28% under the Código do IRS. This is retenção na fonte com carácter liberatório: in the standard case, the tax has already been withheld, and declaring the income separately is not mandatory if you do not choose englobamento.' },
        { kind: 'checklist', items: ['Portugal resident: standard IRS withholding — 28%', 'Interest is credited after tax has already been withheld', 'You can choose englobamento in Modelo 3 IRS, but then all relevant income is included in the progressive tax bands — this is not beneficial for everyone', 'If you are a tax non-resident, check the applicable rate and the double taxation treaty', 'To apply a treaty rate, a non-resident may need forms and proof of tax residence in another country', 'If you moved to Portugal in the middle of the year, check the date of the tax residence change in Finanças', 'Income from selling OT on the market can generate mais-valias/menos-valias; this is not the same as interest on Certificados de Aforro', 'Keep IGCP extratos and annual bank documents at least until the IRS audit period has ended'] },
        { kind: 'warning', text: 'Do not rely on Russian or Ukrainian tax logic. In Portugal, tax residence, income source, type of instrument and whether tax was withheld at source matter. For a portfolio with OT through a broker, check the declaração IRS in advance.' }
      ]
    },
    {
      id: 'practical-choice',
      title: 'How to choose: Série F, Tesouro or OT',
      content: [
        { kind: 'paragraph', text: 'For a 3–24 month reserve, Certificados de Aforro are usually simpler: no market price, clear redemption rules, entry from €100. For money that may be needed before 3 months, the product is not suitable.' },
        { kind: 'checklist', items: ['Need simplicity and a government issuer — look at Certificados de Aforro Série F', 'Need liquidity tomorrow — a bank account or depósito a prazo without a lock-up is better', 'Ready to hold to maturity and the series is open — you can compare Certificados do Tesouro if IGCP offers a new subscription again', 'Want a fixed return on a specific OT to maturity — calculate yield, fees and tax through the bank/broker', 'Planning to leave Portugal — check the change of address, IBAN and tax status in advance', 'Do not put your entire emergency fund into Série F: there is no access to the money for the first 3 months', 'Compare returns after 28% IRS, not just the gross rate'] },
        { kind: 'warning', text: 'The Série F rate has a ceiling: even if Euribor is high, the base rate of Certificados de Aforro Série F does not exceed 2.5% before holding-period bonuses. This is protection for the state, not for the investor.' }
      ]
    }
  ],
  costs: [
    { label: 'Opening Conta Aforro / AforroNet', amountEUR: 0, note: 'IGCP does not charge a fee for opening or online access; your bank may charge fees for operations.' },
    { label: 'Minimum subscription for Certificados de Aforro Série F', amountEUR: 100, note: 'The subscription nominal amount follows the rules of the series; check the operation form in AforroNet.' },
    { label: 'Maximum Certificados de Aforro Série F', amountEUR: 50000, note: 'Limit per person for Série F; overall Série E + Série F limit — €250,000.' },
    { label: 'IRS on interest for a resident', amountEURMin: 0, amountEURMax: 28, note: 'This is a 28% rate, not a fixed amount in euros; it is withheld from the income accrued.' },
    { label: 'OT fees through a bank/broker', amountEURMin: 0, amountEURMax: 50, note: 'They depend on the intermediary: purchase, custody, coupon payment, sale. Through AforroNet, there are usually no IGCP fees for Certificados.' }
  ],
  sources: [
    { title: 'AforroNet IGCP — official portal for retail government debt operations', url: 'https://www.aforronet.igcp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IGCP — Dívida Pública de Retalho: Certificados de Aforro, Tesouro and OT', url: 'https://www.igcp.pt/pt/divida-publica-de-retalho/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — tax withholding at source, art. 71', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS and englobamento de rendimentos de capitais', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
