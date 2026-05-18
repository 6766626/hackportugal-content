export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-h-deducoes',
  categoryId: 'taxes',
  title: 'IRS Anexo H: all deductions for saúde, educação, lares and imóvel',
  tldr: 'Anexo H in Modelo 3 IRS is where, in the 2026 return for 2025 income, deductions are checked and, if necessary, corrected: saúde 15% up to €1,000 per household, educação 30% up to €800, lares 25% up to €403.75, housing rent 15% up to €700–800 (OE 2024/25), interest on old mortgages up to €296. Most amounts are pulled from e-Fatura automatically, but if you edit them manually, keep invoices for 4 years. Abono de família is not declared as income; “casamento jovem €750” is not a standard Anexo H line.',
  tags: ['irs', 'anexo-h', 'deductions', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-anexo-h-does',
      title: 'What Anexo H does',
      content: [
        { kind: 'paragraph', text: 'Anexo H is an attachment to Modelo 3 IRS for tax benefits and deductions à coleta. For a typical expat, it matters mainly because of expenses that Finanças pulls from e-Fatura: healthcare, education, care homes, housing rent and old mortgage interest.' },
        { kind: 'paragraph', text: 'The IRS return in 2026 is filed for 2025 income from 1 April to 30 June 2026. If you file IRS Automático, Anexo H is usually not completed manually, but the amounts still need to be checked in the simulation.' },
        { kind: 'checklist', items: [
          'Check e-Fatura: the NIF must have been included on the invoice at the time of purchase or payment.',
          'Family expenses are calculated by household: spouses/união de facto and dependentes.',
          'If the Finanças amounts are correct, you should usually leave the automatic values.',
          'If you change amounts manually in Anexo H, you take on the obligation to prove them with documents.',
          'Keep invoices, recibos and the tenancy agreement for at least 4 years.',
          'Expenses abroad in the EU/EEA can be claimed, but you need documents and a link to your NIF/tax residence.',
          'Anexo H does not replace Anexo J for foreign income and does not set up IRS Jovem.'
        ] }
      ]
    },
    {
      id: 'main-deductions',
      title: 'Main deductions: saúde, educação, lares, imóvel',
      content: [
        { kind: 'paragraph', text: 'Key limits for the 2026 IRS return for 2025:' },
        { kind: 'checklist', items: [
          'Saúde: 15% of medical expenses, maximum €1,000 per household. This includes consultations, tests, hospital, pharmacy, health insurance contributions, if they are recognised as saúde.',
          'Saúde with IVA at 23% only counts where there is a prescription or medical justification in e-Fatura.',
          'Educação e formação: 30% of expenses, maximum €800 per household. Schools, universities, creche, textbooks, propinas, recognised courses.',
          'Estudante deslocado: housing rent paid by a student away from their permanent address may be included in educação with the correct contrato de arrendamento and registration in Portal das Finanças; the overall educação limit may increase under special rules.',
          'Lares: 25% of expenses with lares, apoio domiciliário and similar institutions, maximum €403.75.',
          'Imóvel — permanent home rent: 15% of rendas under a contrato de arrendamento, maximum €700–800 (after OE 2024/25 indexation).',
          'Imóvel — mortgage interest: the deduction for juros de crédito à habitação applies mainly to old loans taken out before 31.12.2011, maximum €296.',
          'IMI, condomínio, repairs and furniture do not become an Anexo H deduction just because they are connected with housing.'
        ] },
        { kind: 'warning', text: 'The limits “€1,000 (saúde) / €800 (educação) / €403.75 (lares) / €700–800 (HPP rent) / €296 (old mortgage juros)” are the maximum deduction from tax, not the expense amount.\n\nFor example, to get €1,000 for saúde, you need to have about €6,666.67 of recognised medical expenses.' }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'How to check and correct it in Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Enter the IRS return', content: [
            { kind: 'paragraph', text: 'Go to Portal das Finanças → IRS → Entregar Declaração → Modelo 3. You need your NIF and Finanças password or Chave Móvel Digital (CMD).' }
          ] },
          { id: 'open-h', title: '2. Open Anexo H', content: [
            { kind: 'paragraph', text: 'Add Anexo H if you are not filing a fully automatic return or want to check deduções à coleta. In a family return, there is one Anexo H per household.' }
          ] },
          { id: 'choose-values', title: '3. Decide: automatic amounts or manual entry', content: [
            { kind: 'paragraph', text: 'In the expenses section, Finanças shows amounts calculated from e-Fatura and tenancy agreement data. If you choose manual correction, the Anexo H values replace the automatic data for the relevant category.' },
            { kind: 'checklist', items: [
              'Reconcile saúde against pharmacies, CUF/Luz/hospitals, insurance and recibos.',
              'Reconcile educação against escolas, universidades, creche, propinas and textbooks.',
              'Check that the contrato de arrendamento has been registered by the landlord with Finanças.',
              'For rent, check recibos de renda eletrónicos or the annual declaração if the landlord is exempt from electronic recibos.',
              'For mortgage interest, check the bank’s annual statement.',
              'If an expense belongs to a child, make sure the child is listed as a dependente in your return.'
            ] }
          ] },
          { id: 'simulate', title: '4. Run a simulation before submitting', content: [
            { kind: 'paragraph', text: 'Click Simular and compare the result with the version without manual edits. Sometimes correcting one line does not produce a saving because of the overall deduction cap or a low tax liability.' }
          ] }
        ] }
      ]
    },
    {
      id: 'limits-and-income-cap',
      title: 'Why the deduction may not work in full',
      content: [
        { kind: 'paragraph', text: 'Portuguese deductions reduce IRS à coleta, meaning the tax already calculated. If the tax due is low, the unused part of the deduction is usually not refunded beyond the IRS withheld/paid.' },
        { kind: 'checklist', items: [
          'There is a separate limit for each category: saúde, educação, lares, imóvel.',
          'There is an overall deduções à coleta limit, which depends on the household rendimento coletável.',
          'For low incomes, the overall limit is more generous; for high incomes, it tightens.',
          'Families with 3 or more dependentes receive a 5% increase in the overall limit for each dependente.',
          'If you are non-resident for IRS, the availability of some deductions depends on the chosen regime and the share of income from Portugal/EU.',
          'If you became resident in the middle of the year, check your residence status and period of residence: this affects the return more than Anexo H.',
          'IFICI/NHR, IRS Jovem and other income tax regimes are not Anexo H “expenses”.'
        ] },
        { kind: 'warning', text: 'Do not rely only on e-Fatura. Having an invoice in e-Fatura does not guarantee the full deduction: the category, NIF, IVA type, supporting document and overall IRS limit all matter.' }
      ]
    },
    {
      id: 'family-abono-casamento',
      title: 'Children, abono de família and “casamento jovem €750”',
      content: [
        { kind: 'paragraph', text: 'Abono de família is a Segurança Social social benefit. It is not ordinary taxable IRS income and is not declared as an expense in Anexo H.\n\nTax deductions for dependentes are usually calculated automatically if children are correctly listed in the household.' },
        { kind: 'checklist', items: [
          'Check the composição do agregado familiar in Portal das Finanças before filing the return.',
          'Include dependentes with a NIF; without the child’s NIF, some automatic deductions and e-Fatura data may be lost.',
          'The child’s saúde and educação expenses must have the child’s NIF or be correctly linked to the household.',
          'Divorced parents should check residência alternada and the allocation of expenses.',
          'Abono de família does not need to be “added” in Anexo H as income or a deduction.',
          'Fixed deductions for dependentes are calculated separately from the saúde/educação limits.'
        ] },
        { kind: 'warning', text: 'At national IRS level, as at 03.05.2026, there is no standard Anexo H line “casamento jovem €750” that you can simply enter as a deduction. If the media or a consultant mentions “€750 for casamento jovem”, check the official benefit code in Portal das Finanças: it may relate to another regime, a regional measure or IRS Jovem, but not to ordinary saúde/educação/lares/imóvel expenses.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to keep in case of an audit',
      content: [
        { kind: 'paragraph', text: 'Finanças may request evidence after the return is filed. Questions arise particularly often for manual Anexo H edits, foreign invoices, rent and medical expenses with IVA at 23%.' },
        { kind: 'checklist', items: [
          'Faturas-recibo and recibos with the payer’s or dependente’s NIF.',
          'Medical prescriptions for goods/services with IVA at 23%.',
          'Insurance statements for medical payments and reimbursements.',
          'Invoices from schools, universidades, creche, centros de formação.',
          'Contrato de arrendamento, recibos de renda and confirmation that the property is habitação permanente.',
          'The bank’s annual statement for juros de crédito à habitação, if the loan is old and falls under the regime.',
          'Documents from lares or apoio domiciliário with the institution’s NIF.',
          'Proof of dependente status if the child is studying, living separately or there is residência alternada.',
          'Documents for foreign expenses, with a translation if necessary.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Filing Modelo 3 IRS through Portal das Finanças', amountEUR: 0, note: 'Self-filing online is free.' },
    { label: 'Typical contabilista help with IRS', amountEURMin: 40, amountEURMax: 120, note: 'The price depends on the number of anexos, foreign income and manual Anexo H edits.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, deduções à coleta and filing the return',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Rendimentos/Declaracao/Deducoes_a_coleta/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — despesas para dedução à coleta / e-Fatura',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Rendimentos/Declaracao/Deducoes_beneficios_taxas/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — articles 78.º to 85.º on deduções à coleta',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Portal e-Fatura',
      url: 'https://faturas.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
,
    { title: 'AT — IRS deductions 2025 leaflet', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/IRS_deducoes_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
