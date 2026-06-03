export default {
  editorialVoice: 'hackportugal',
  id: 'irs-year-end',
  categoryId: 'taxes',
  title: 'IRS year-end checklist — what to prepare',
  tldr: 'Preparing for IRS starts in December: by 31 December, make the expenses/contributions you want to claim. Invoices in e-Fatura are usually checked and confirmed by 25 February of the following year; then check the calculated deductions in March. The return is filed from 1 April to 30 June. For late filing, the RGIT fine is usually €150–€3,750, with a reduced penalty if you correct it quickly and voluntarily.',
  tags: ['irs', 'taxes', 'checklist', 'deductions'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'december-checklist',
      title: 'December — the final steps of the year',
      content: [
        { kind: 'checklist', items: [
          '🧾 Check e-Fatura: invoices with NIF are pulled in there, but some require manual classification or prescription confirmation; not all expenses generate a tax deduction',
          '✅ Classify unconfirmed receipts (health/education, etc.); unclassified ones may fall into general family expenses',
          '💳 Medical expenses — 15% up to €1,000 (per household)',
          '📚 Education — 30% of eligible expenses, usually up to €800 per household (not per child); higher limits may apply for a deslocado/student living away from home',
          '🍽️ Restaurants/hotels/hairdressers/car and motorcycle repairs — deduction of 15% of the IVA on the invoice, overall limit €250 per household (exigência de fatura)',
          '💡 Utilities with NIF (electricity, gas, water) usually go into despesas gerais familiares: 35% up to €250 per taxpayer (€500 for a couple filing jointly)',
          '🏠 Rent for permanent home: 15% up to €700 (for 2025 expenses/IRS 2026); higher limits may apply for low incomes; e-recibos/reported contracts are required',
          '💰 PPR: 20% of contributions, maximum €400 up to age 35, €350 from 35 to 50, €300 over 50',
          '💳 Donations to NGOs with NIF — deduction of 25% of the contribution, up to 15% of the tax',
          '📊 IFICI subjects: confirm status and documents for qualified activity'
        ]},
        { kind: 'warning', text: 'Receipts without NIF are NOT deductible. ALWAYS say “com NIF, por favor” or “factura com contribuinte” when purchasing. Overall limits on deductions à coleta under art. 78 CIRS restrict the final benefit according to income level — the sum of the individual maximums is not always achievable.' }
      ]
    },
    {
      id: 'january-february',
      title: 'January-February — preparing documents',
      content: [
        { kind: 'checklist', items: [
          '📄 Obtain the Comprovativo de Rendimentos from your employer (they must issue it by 15.02)',
          '📄 Bank statements for the whole year to calculate interest/dividends',
          '📄 Comprovativos/recibos verdes: check in Portal das Finanças, reconcile Anexo B/C, retenções na fonte, despesas and activity code',
          '📄 Foreign income statements — pension certificates, foreign bank statements; foreign accounts and IBANs may need to be declared in Anexo J',
          '📄 If you bought a home: keep the escritura, IMT, imposto do selo, notarial/registration expenses. IMI is usually only needed for special cases (rental income/capital gains)',
          '📄 IRS Jovem confirmations (if applicable — young people up to age 35)',
          '📋 Certidões de não dívida (in case of IRS debts, worth checking)'
        ]}
      ]
    },
    {
      id: 'filing-window',
      title: 'March-June — filing',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'IRS Automático (simplified)', content: [
            { kind: 'paragraph', text: 'For categories A (salary) and H (pension) with one employer and no other sources. Portal das Finanças → IRS → IRS Automático. The return is already filled in — you only need to check and confirm it.' }
          ]},
          { id: 'f2', title: 'Modelo 3 (full)', content: [
            { kind: 'paragraph', text: 'For everyone else. Portal das Finanças → IRS → Entregar. Select the required Anexos.' }
          ]},
          { id: 'f3', title: 'Annexes — which to choose', content: [
            { kind: 'checklist', items: [
              'Anexo A — salary (category A), pension (category H)',
              'Anexo B — Recibo Verde / self-employment (simplified regime)',
              'Anexo C — Recibo Verde / business (organised accounting)',
              'Anexo D — imputação de rendimentos (transparência fiscal, herança indivisa, special cases). NOT for ordinary SA/Lda dividends',
              'Anexo E — rendimentos de capitais (category E): interest, dividends from SA/Lda',
              'Anexo F — income from property rental (category F)',
              'Anexo G — capital gains / mais-valias (category G): sale of shares, property, usually — capital gains on cryptocurrencies',
              'Anexo G1 — simplified annex for certain mais-valias',
              'Anexo H — benefícios fiscais and deductions (despesas dedutíveis)',
              'Anexo I — herança indivisa (specific situations)',
              'Anexo J — foreign-source income (for all categories)',
              'Anexo L — residentes não habituais (NHR) regime and similar preferential regimes'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'deductions-max',
      title: 'Maximising deductions',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Medical expenses (15% up to €1,000)', content: [
            { kind: 'checklist', items: [
              'Doctors (private and SNS taxa)',
              'Pharmacies: expenses with reduced VAT usually enter automatically; items with IVA 23% require a prescription/confirmation in e-Fatura',
              'Dentistry',
              'Surgeries, hospitalisation (IVA 6%)',
              'Glasses, contact lenses — prescribed',
              'Health insurance',
              'To be included, NIF on the receipt is mandatory'
            ]}
          ]},
          { id: 'd2', title: 'Education: 30% of eligible expenses, usually up to €800 per household', content: [
            { kind: 'checklist', items: [
              'School fees',
              'University propina',
              'Language courses — only if the provider and invoice fit the education expenses rules in e-Fatura/AT',
              'Textbooks (IVA 6%)',
              'Clothing/uniforms usually do NOT count as an education expense',
              'School transport — only with a suitable provider/correct classification; ordinary public transport follows IVA rules, not education',
              'After-school club (ATL)',
              'Higher limits may apply for a student living away from home (deslocado)'
            ]}
          ]},
          { id: 'd3', title: 'Housing', content: [
            { kind: 'checklist', items: [
              'Rent for permanent home — 15% up to €700 for 2025 expenses; higher limits may apply for low incomes',
              'Interest on a mortgage for a permanent owner-occupied home — 15% up to €296, only for contracts before 31.12.2011',
              'Electricity/gas/water — this is despesas gerais familiares (35% up to €250 per taxpayer), not a separate housing deduction',
              'IMI on an owner-occupied home usually does NOT give an IRS deduction; it may be taken into account for rental income or capital gains calculations'
            ]}
          ]},
          { id: 'd4', title: 'General family expenses (despesas gerais familiares) — 35% up to €250 per taxpayer', content: [
            { kind: 'paragraph', text: 'Most invoices with NIF that do not belong to special categories. Collected automatically through e-Fatura when invoices include NIF. For a couple filing jointly, the limit is €500.' }
          ]},
          { id: 'd5', title: 'Exigência de fatura (art. 78-F)', content: [
            { kind: 'checklist', items: [
              'Restaurants, alojamento, hairdressers/beauty, car/motorcycle repairs: usually 15% of the IVA paid',
              'Veterinary services: 35% of the IVA on invoices from registered suppliers',
              'Monthly passes and public transport: 100% of the IVA',
              'Overall art. 78-F limit — €250 per household'
            ]}
          ]},
          { id: 'd6', title: 'PPR (pension plan) — 20% of contributions', content: [
            { kind: 'checklist', items: [
              'Up to age 35: up to €400',
              '35–50 years: up to €350',
              'Over 50: up to €300',
              'Useful for long-term retirement saving, but with restrictions on withdrawals'
            ]}
          ]},
          { id: 'd7', title: 'Dependants', content: [
            { kind: 'checklist', items: [
              'Fixed deductions for dependentes: €600 per child over age 3, €726 per child up to age 3 (inclusive), €900 from the second dependant onwards up to age 6 (regardless of the first dependant age) — exact amounts depend on age and household composition',
              'Elderly parents with low income — deduction',
              'Disability: enhanced deductions',
              'Single parent: +increase'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'ifici-nhr',
      title: 'IFICI / NHR subjects — special actions',
      content: [
        { kind: 'checklist', items: [
          '🎓 Confirmation of qualified activity — contract, academic certificates',
          '📊 NHR (for already approved/transitional cases) — declaration through Anexo L. IFICI: registration in the regime must have been approved; in the return it applies only to qualified income',
          '💰 Foreign income — in Anexo J, taking tax treaties into account',
          '🧾 For foreign tax credit — certificates of income and foreign tax actually withheld/paid. Portuguese tax residence certificate is needed by the foreign payer to apply a DTA',
          '🎯 IFICI: 20% rate on eligible net employment/business income; ordinary IRS on the rest'
        ]}
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes',
      content: [
        { kind: 'warning', text: 'Check the return three times — after filing, correction is via Modelo 3 Substituição, but may be subject to limitations.' },
        { kind: 'checklist', items: [
          '❌ Forgetting to include foreign income — EU automatic data exchange (DAC7, CRS) catches this. It is better to declare it and use the credit',
          '❌ Entering incorrect dependant details → overpayment',
          '❌ Not confirming receipts on Faturas.pt → loss of deductions',
          '❌ Filing without checking the calculation — overpayment may not be refunded automatically',
          '❌ Not including Anexo J when there are foreign sources of income',
          '❌ For NHR/IFICI — forgetting to indicate the status in the relevant form field',
          '❌ Missing the deadline — fine €150-€3,750 (progressive scale)'
        ]}
      ]
    },
    {
      id: 'after-submission',
      title: 'After filing',
      content: [
        { kind: 'checklist', items: [
          '⏰ Liquidação (assessment) — usually by 31 July if filed on time',
          '💰 Reembolso: if the return was filed on time and without review — usually by 31 August, often earlier; in case of divergências/fiscalização, deadlines may be extended',
          '📋 Additional payment — deadline 31 August',
          '⚖️ AT can usually correct/assess additional tax within the caducidade period (often 4 years, art. 45 LGT), but there are exceptions and extensions for foreign situations; if an error is found — declaração de substituição',
          '⚖️ Error in your favour — correction via Modelo 3 Substituição usually up to 4 years (with specific rules)',
          '🚨 Check AT requests in Portal das Finanças, ViaCTT/electronic notifications or official post; do not trust ordinary emails without verification (phishing risk)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRS Code (Diário da República)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'e-Fatura — electronic invoices portal', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — filing IRS', url: 'https://www.gov.pt/servicos/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
