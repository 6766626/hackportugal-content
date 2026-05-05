export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-h-deducoes',
  categoryId: 'taxes',
  title: 'IRS Anexo H: all deductions for saúde, educação, lares and imóvel',
  tldr: 'Anexo H in Modelo 3 IRS is where, in the 2026 return for 2025 income, you review and, if needed, correct deductions: saúde 15% up to €1,000 per household, educação 30% up to €800, lares 25% up to €403.75, rent of housing 15% up to €700–€800 (OE 2024/25), interest on old mortgages up to €296. Most figures are pulled automatically from e-Fatura, but if you edit manually, keep invoices for 4 years. Abono de família is not declared as income; “casamento jovem €750” is not a standard Anexo H line.',
  tags: ['irs', 'anexo-h', 'deductions', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-anexo-h-does',
      title: 'What Anexo H does',
      content: [
        { kind: 'paragraph', text: 'Anexo H is an attachment to Modelo 3 IRS for tax reliefs and deductions à coleta. For a typical expat it matters mainly because of the expenses that Finanças pulls from e-Fatura: healthcare, education, care homes, rent of housing and old mortgage interest.' },
        { kind: 'paragraph', text: 'The IRS return in 2026 is filed for 2025 income from 1 April to 30 June 2026. If you file IRS Automático, Anexo H is usually not completed manually, but you still need to verify the amounts in the simulation.' },
        { kind: 'checklist', items: [
          'Check e-Fatura: NIF must be on the invoice at the time of purchase or payment.',
          'Family expenses are calculated by household: spouses/união de facto and dependentes.',
          'If the Finanças amounts are correct — usually leave the automatic values.',
          'If you change amounts manually in Anexo H, you take on the obligation to prove them with documents.',
          'Keep invoices, recibos and the tenancy agreement for at least 4 years.',
          'Expenses outside the EU/EEA can be claimed, but documentation and a link to your NIF/tax residency are required.',
          'Anexo H does not replace Anexo J for foreign income and does not set up IRS Jovem.'
        ] }
      ]
    },
    {
      id: 'main-deductions',
      title: 'Main deductions: saúde, educação, lares, imóvel',
      content: [
        { kind: 'paragraph', text: 'Key limits for the 2026 IRS return for 2025 income:' },
        { kind: 'checklist', items: [
          'Saúde: 15% of healthcare expenses, maximum €1,000 per household. This includes consultations, tests, hospital, pharmacy, health insurance premiums if they are recognised as saúde.',
          'Saúde with IVA at 23% only counts if there is a prescription or medical justification in e-Fatura.',
          'Educação e formação: 30% of expenses, maximum €800 per household. Schools, universities, creche, textbooks, propinas, recognised courses.',
          'Estudante deslocado: a student’s rent away from the permanent address may count towards educação with the correct contrato de arrendamento and registration on the Portal das Finanças; the overall educação cap may increase under special rules.',
          'Lares: 25% of expenses with lares, apoio domiciliário and similar institutions, maximum €403.75.',
          'Imóvel — rent of permanent housing: 15% of rendas under the contrato de arrendamento, maximum €700–€800 (after indexation in OE 2024/25).',
          'Imóvel — mortgage interest: the deduction for juros de crédito à habitação applies mainly to old loans taken out up to 31.12.2011, maximum €296.',
          'IMI, condomínio, repairs and furniture do not become an Anexo H deduction just because they are housing-related.'
        ] },
        { kind: 'warning', text: 'The limits “€1,000 (saúde) / €800 (educação) / €403.75 (lares) / €700–€800 (rent HPP) / €296 (juros on old mortgage)” are the maximum deduction from the tax due, not the amount of expenditure. For example, to obtain €1,000 for saúde you must have around €6,666.67 of recognised medical expenses.' }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'How to check and correct in the Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to the IRS return', content: [
            { kind: 'paragraph', text: 'Go to Portal das Finanças → IRS → Entregar Declaração → Modelo 3. You need your NIF and Finanças password or Chave Móvel Digital (CMD).' }
          ] },
          { id: 'open-h', title: '2. Open Anexo H', content: [
            { kind: 'paragraph', text: 'Add Anexo H if you are not submitting a fully automatic return or you want to review deduções à coleta. For a joint family return there is one Anexo H per household.' }
          ] },
          { id: 'choose-values', title: '3. Decide: automatic amounts or manual entry', content: [
            { kind: 'paragraph', text: 'In the expenses section Finanças shows amounts calculated from e-Fatura and tenancy agreement data. If you choose manual correction, the Anexo H values replace the automatic data for the respective category.' },
            { kind: 'checklist', items: [
              'Reconcile saúde with pharmacies, CUF/Luz/hospitals, the insurer and recibos.',
              'Reconcile educação with escolas, universidades, creche, propinas and textbooks.',
              'Check that the contrato de arrendamento is registered by the landlord with Finanças.',
              'For rent, check the electronic recibos de renda or the annual declaration if the landlord is exempt from electronic recibos.',
              'For mortgage interest check the bank’s annual statement.',
              'If the expense belongs to a child, ensure the child is declared as a dependente in your return.'
            ] }
          ] },
          { id: 'simulate', title: '4. Run a simulation before submitting', content: [
            { kind: 'paragraph', text: 'Click Simular and compare the result with the version without manual edits. Sometimes correcting a single line does not yield savings due to the overall deduction cap or low tax payable.' }
          ] }
        ] }
      ]
    },
    {
      id: 'limits-and-income-cap',
      title: 'Why the deduction may not fully work',
      content: [
        { kind: 'paragraph', text: 'Portuguese deductions reduce IRS à coleta, that is, the tax already calculated. If the tax due is low, any unused portion of the deduction is usually not refunded beyond the IRS withheld/paid.' },
        { kind: 'checklist', items: [
          'There is a separate cap for each category: saúde, educação, lares, imóvel.',
          'There is an overall cap on deduções à coleta, which depends on the household’s rendimento coletável.',
          'For low incomes the overall cap is softer; for high incomes it tightens.',
          'Families with 3 and more dependentes get a 5% increase to the overall cap per dependente.',
          'If you are non-resident for IRS, the availability of some deductions depends on the regime chosen and the share of income from Portugal/EU.',
          'If you became resident mid-year, check your residency status and period of stay: this affects the return more strongly than Anexo H.',
          'IFICI/NHR, IRS Jovem and other income-tax regimes are not “expenses” of Anexo H.'
        ] },
        { kind: 'warning', text: 'Do not rely solely on e-Fatura. The mere presence of an invoice in e-Fatura does not guarantee the full deduction: the category, NIF, type of IVA, supporting document and the overall IRS cap all matter.' }
      ]
    },
    {
      id: 'family-abono-casamento',
      title: 'Children, abono de família and “casamento jovem €750”',
      content: [
        { kind: 'paragraph', text: 'Abono de família is a Segurança Social social benefit. It is not ordinary taxable IRS income and is not declared as an expense in Anexo H. Tax deductions for dependentes are usually calculated automatically if children are correctly listed in the household.' },
        { kind: 'checklist', items: [
          'Check the composição do agregado familiar in the Portal das Finanças before filing.',
          'Enter dependentes with their NIF; without the child’s NIF some automatic deductions and e-Fatura entries may be lost.',
          'A child’s healthcare and education expenses must bear the child’s NIF or be correctly linked to the household.',
          'Divorced parents must check residência alternada and the allocation of expenses.',
          'You do not need to “add” abono de família in Anexo H as income or as a deduction.',
          'Fixed deductions for dependentes are calculated separately from the saúde/educação caps.'
        ] },
        { kind: 'warning', text: 'At national level, as at 03.05.2026 there is no standard Anexo H line “casamento jovem €750”, which you can simply enter as a deduction. If the media or a consultant mention “€750 for casamento jovem”, check the official benefit code in the Portal das Finanças: this may relate to a different regime, a regional measure or to IRS Jovem, but not to ordinary saúde/educação/lares/imóvel expenses.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to keep in case of an audit',
      content: [
        { kind: 'paragraph', text: 'Finanças may request supporting evidence after you submit the return. Questions arise especially about manual Anexo H edits, foreign invoices, rent and healthcare expenses with IVA at 23%.' },
        { kind: 'checklist', items: [
          'Faturas-recibo and recibos with the payer’s or dependente’s NIF.',
          'Medical prescriptions for goods/services with IVA at 23%.',
          'Insurer statements on medical payments and reimbursements.',
          'Invoices from schools, universidades, creche, centros de formação.',
          'Contrato de arrendamento, recibos de renda and confirmation that the dwelling is habitação permanente.',
          'The bank’s annual statement of juros de crédito à habitação, if the loan is old and falls under the regime.',
          'Documents from lares or apoio domiciliário with the institution’s NIF.',
          'Proof of dependente status if the child studies, lives separately or there is residência alternada.',
          'Documents for foreign expenses with translation where needed.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Filing Modelo 3 IRS via the Portal das Finanças', amountEUR: 0, note: 'Self-filing online is free.' },
    { label: 'Typical help from a contabilista with IRS', amountEURMin: 40, amountEURMax: 120, note: 'Price depends on the number of anexos, foreign income and manual Anexo H edits.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, deductions from the tax due and submission of the return',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Rendimentos/Declaracao/Deducoes_a_coleta/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — expenses eligible for deduction from the tax due / e-Fatura',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Rendimentos/Declaracao/Deducoes_beneficios_taxas/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — articles 78 to 85 on deductions from the tax due',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — e-Fatura portal',
      url: 'https://faturas.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
,
    { title: 'AT — IRS deductions 2025 leaflet', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/IRS_deducoes_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}
