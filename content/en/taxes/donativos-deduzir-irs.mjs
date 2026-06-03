export default {
  editorialVoice: 'hackportugal',
  id: 'donativos-deduzir-irs',
  categoryId: 'taxes',
  title: 'IRS donations: tax relief for gifts under Lei do Mecenato',
  tldr: 'Donations in Portugal can reduce IRS if the recipient is entitled to receive donativos fiscalmente relevantes and the payment is issued with your NIF. The basic rule for individuals: 25% of the donativo amount is deducted from the IRS coleta; for many IPSS, religious, cultural and scientific organisations, a limit of up to 15% of the coleta applies. In the IRS 2025 return, filed from 01/04 to 30/06/2026, this is checked in Anexo H, Quadro 6, field 6B. Consignação de IRS 0.5% is not an expense and is not the same thing.',
  tags: ['irs', 'donations', 'patronage', 'anexo-h'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'What counts as a donativo for IRS',
      content: [
        { kind: 'paragraph', text: 'A donativo is a donation of money or assets, made without receiving anything in return, to an organisation recognised for tax-relief purposes: IPSS, Misericórdias, some associations, foundations, the Church and other religious organisations, cultural, scientific, educational and social entities.' },
        { kind: 'paragraph', text: 'For an individual tax resident, the tax effect is usually this: 25% of the donation amount is deducted from the IRS coleta — the tax calculated before personal deductions. This is not an automatic 25% refund to your card, but a reduction in the final IRS payable or an increase in the refund if there was retenção na fonte.' },
        { kind: 'checklist', items: [
          'The donation was made to an organisation entitled to a tax benefit under the EBF / patronage regime',
          'Your NIF is shown on the receipt or recibo',
          'The payment can be evidenced: bank transfer, MB WAY, Multibanco, card, cheque',
          'The recipient correctly reported the donativo to AT, or you can enter it manually in the IRS return',
          'The donation was not payment for a service, a ticket, or a membership fee with a benefit in return',
          'You are a tax resident of Portugal for the relevant year',
          'The donativo relates to the return year: donations made in 2025 are declared in IRS 2025, filed in 2026'
        ] }
      ]
    },
    {
      id: 'deduction-rules',
      title: 'How much you can deduct: 25% and the coleta limit',
      content: [
        { kind: 'paragraph', text: 'The standard rule for individuals under the Estatuto dos Benefícios Fiscais: 25% of the donativos amount is deducted from the IRS coleta. For most donations to private IPSS, religious, cultural, scientific and social entities, a ceiling applies: the deduction cannot exceed 15% of your coleta.' },
        { kind: 'paragraph', text: 'Example: IRS coleta = €3,000. You donated €1,000 to an IPSS entitled to a tax benefit. Calculation: €1,000 × 25% = €250. The 15% coleta limit = €450. This means you can use the full €250 deduction.' },
        { kind: 'paragraph', text: 'If, with the same €3,000 coleta, you donated €3,000, the calculated deduction would be €750, but the 15% coleta limit is €450. In the IRS return, the maximum credited will be €450.' },
        { kind: 'warning', text: 'Online, three different things are often confused: donativos with a 25% deduction, consignação de IRS 0.5%, and corporate patronage rules for companies. For individuals in IRS, do not apply “5%” as a universal deduction rate. If the organisation mentions a special cultural/scientific patronage regime, ask it for the tax recibo and confirm the benefit code in Anexo H.' }
      ]
    },
    {
      id: 'documents',
      title: 'Which documents to keep',
      content: [
        { kind: 'paragraph', text: 'AT may accept part of the data automatically, but the obligation to prove the deduction remains with the taxpayer. Keep documents for at least 4 years after filing the return, as with other IRS evidence.' },
        { kind: 'checklist', items: [
          'Recibo de donativo from the organisation',
          'Name and NIPC/NIF of the recipient organisation',
          'Your NIF as donor',
          'Donation date',
          'Amount in €',
          'Wording stating that this is a donativo with no service in return',
          'Reference to the tax framework: EBF / Lei do Mecenato / eligible entity',
          'Payment confirmation from the bank, MB WAY or Multibanco',
          'Email or letter from the organisation, if the recibo arrived separately',
          'For a donativo in kind — valuation of the asset and transfer document'
        ] },
        { kind: 'warning', text: 'Buying a ticket for a charity dinner, merchandise, a raffle or club membership is usually not a donativo for the full amount if you received goods or a service. A tax deduction is possible only for the gratuitous part, if it is documented separately.' }
      ]
    },
    {
      id: 'declare-anexo-h',
      title: 'How to declare it in IRS: Anexo H, Quadro 6',
      content: [
        { kind: 'paragraph', text: 'The IRS return for 2025 is filed on Portal das Finanças from 01/04/2026 to 30/06/2026. Donativos are checked in Modelo 3 → Anexo H → Quadro 6, field 6B. If the amount is already pre-filled, check the recipient’s NIF, the benefit code and the amount.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Use NIF + password or Chave Móvel Digital. Open IRS → Entregar declaração → IRS Automático or Modelo 3. If you have complex income, recibos verdes, foreign income or changes of residence, you will more often need to complete Modelo 3 manually.' }
          ] },
          { id: 'check-h', title: '2. Open Anexo H', content: [
            { kind: 'paragraph', text: 'Anexo H contains deduções à coleta and tax benefits. Donativos are shown in Quadro 6. If you use IRS Automático, still open the preliminary calculation and check whether the donativos have been included.' }
          ] },
          { id: 'validate', title: '3. Check the amounts', content: [
            { kind: 'checklist', items: [
              'The amount matches the recibo',
              'The donation year is correct',
              'The organisation’s NIF/NIPC is correct',
              'The benefit code matches the type of entity',
              'There is no duplicate of the same amount',
              'The deduction does not exceed the applicable coleta limit',
              'After the IRS simulation, you can see a tax reduction or a higher refund'
            ] }
          ] },
          { id: 'manual', title: '4. If the donativo did not appear', content: [
            { kind: 'paragraph', text: 'You can enter the data manually in Anexo H if you have a document from the organisation. After making a manual change, keep the recibo and payment confirmation: AT may request evidence via e-Balcão or during a check of the return.' }
          ] }
        ] }
      ]
    },
    {
      id: 'consignacao',
      title: 'Do not confuse this with consignação de IRS 0.5%',
      content: [
        { kind: 'paragraph', text: 'Consignação de IRS is a separate mechanism: you choose an entity to which the state will transfer 0.5% of your liquidated IRS. It does not increase your tax and does not reduce your refund. It simply directs part of the IRS already calculated to the chosen organisation.' },
        { kind: 'paragraph', text: 'A donativo is your real money transferred to an organisation during the year. It may give a 25% deduction within the limits. Consignação 0.5% can be done even without making a donation, and a donativo can be declared independently of consignação.' },
        { kind: 'checklist', items: [
          'Donativo: you pay the organisation yourself',
          'Donativo: a recibo with your NIF is needed',
          'Donativo: declared as a tax benefit in Anexo H',
          'Donativo: usually gives a deduction of 25% of the amount',
          'Consignação: no money comes out of your pocket',
          'Consignação: the state transfers 0.5% of IRS to the chosen entity',
          'Consignação: does not replace the tax deduction for a donation'
        ] }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Common mistakes by expats',
      content: [
        { kind: 'warning', text: 'If you were not a tax resident of Portugal in the year of the donation, or you file IRS as a non-resident only for Portuguese income, personal deduções à coleta may not work in the same way as for a resident. Check your residence status for the year, not the date when you file the return.' },
        { kind: 'checklist', items: [
          'The donation was made with a foreign card, but the recibo has no NIF — the deduction may be lost',
          'The donation was made to a foreign charity without Portuguese tax status — there is usually no automatic deduction in IRS',
          'The organisation is “non-profit” but is not entitled to a tax benefit — the word associação alone is not enough',
          'The donativo was entered as despesa geral familiar — this is the wrong category',
          'The amount was declared for the payment year under the wrong tax year',
          'Coleta is confused with payroll withholding: the 15% limit is calculated from coleta, not from your gross salary',
          'Anexo H was deleted because “IRS Automático calculated everything” — donativos may have been left out of the calculation'
        ] },
        { kind: 'paragraph', text: 'A practical test before making a large donation: ask the organisation the question “emite recibo de donativo para efeitos fiscais em IRS?” and confirm the NIPC, regime and code/description for Anexo H. If the answer is vague, do not rely on the deduction.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças: IRS information and forms / Anexo H',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: IRS models and forms',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Estatuto dos Benefícios Fiscais, donations and patronage regime',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2002-148011287',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
