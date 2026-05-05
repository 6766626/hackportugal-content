export default {
  editorialVoice: 'hackportugal',
  id: 'irs-municipal-devolucao',
  categoryId: 'taxes',
  title: 'IRS Municipal: refund of up to 5% of income tax from the município',
  tldr: 'IRS Municipal is not a separate benefit and not an application: the município can return to the resident up to 5% of the IRS share via Finanças’ settlement. In the IRS return for 2025, filed in 2026, the refund is applied automatically if your NIF address on 31.12.2025 was in a município with devolução. 2026 examples: Lisboa — 2.5%, Porto — 3%, Cascais — 5%. Check the address in Finanças before year-end: an incorrect domicílio fiscal = the money will go to the wrong município or there will be no benefit.',
  tags: ['irs', 'municipal', 'taxes', 'finanças'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-it-is',
      title: 'What IRS Municipal is',
      content: [
        { kind: 'paragraph', text: 'Each município is entitled to a share of up to 5% of the IRS of residents whose tax address is within its territory. This is provided for in Lei 73/2013, art. 26 — Regime Financeiro das Autarquias Locais.' },
        { kind: 'paragraph', text: 'If the município decides not to take the full share, the difference is returned to the taxpayer as a devolução / municipal benefit in the IRS calculation. The maximum is 5%.' },
        { kind: 'paragraph', text: 'This does not mean you will get 5% of your salary or of all tax withheld back. The calculation happens inside the IRS liquidação according to the AT formula, based on your collecta líquida after applicable deductions.' },
        { kind: 'warning', text: 'IRS Municipal only works for tax residents of Portugal who file IRS Modelo 3. For non-residents with Portuguese-source income, this municipal devolução usually does not apply.' }
      ]
    },
    {
      id: 'examples-2026',
      title: 'Examples of rates in 2026',
      content: [
        { kind: 'paragraph', text: 'For IRS for 2025, which is filed from 1 April to 30 June 2026, municípios have already submitted their decisions to the Autoridade Tributária. Rates must be checked by year of income, not by the filing date.' },
        { kind: 'checklist', items: [
          'Lisboa — devolução 2.5%',
          'Porto — devolução 3%',
          'Cascais — devolução 5%',
          'If a município grants 0% devolução, the resident receives no municipal refund',
          'If a município grants 5%, that is the maximum municipal devolução',
          'Rates may change each tax year by decision of the Assembleia Municipal',
          'Check on the Portal das Finanças in the Taxas do Município section'
        ] },
        { kind: 'paragraph', text: 'In practice the difference may be small for people with a low IRS collecta and more noticeable for families with higher taxable income. The refund appears in the final IRS liquidação; there is no need to submit a separate application.' }
      ]
    },
    {
      id: 'address-rule',
      title: 'The key condition: NIF address in the correct município',
      content: [
        { kind: 'paragraph', text: 'Finanças looks at your domicílio fiscal — the tax address linked to your NIF. Usually the address as at 31 December of the income year is what matters. For the 2025 IRS return, filed in 2026, the critical situation is on 31.12.2025.' },
        { kind: 'checklist', items: [
          'Check the address in the Portal das Finanças: Dados Pessoais → Morada Fiscal',
          'If you have moved, update the morada fiscal as early as possible',
          'With a Cartão de Cidadão the address is changed via ePortugal / CMD and then confirmed with a code',
          'Foreigners without a Cartão de Cidadão usually change the address via the Portal das Finanças or a serviço de Finanças',
          'The address in a tenancy agreement by itself does not change the domicílio fiscal',
          'The address with AIMA, a bank, the SNS or your employer does not replace the address in Finanças',
          'If spouses file jointly, check the addresses for both NIFs'
        ] },
        { kind: 'warning', text: 'A common expat mistake: living in Cascais or Oeiras but leaving the NIF address in Lisboa, with a fiscal representative, or at an old Airbnb. Then IRS Municipal is calculated by the old município, even if in fact you lived elsewhere.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'How to check and see the refund',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-rate', title: '1. Check the município rate', content: [
            { kind: 'paragraph', text: 'Open the Taxas do Município table on the Portal das Finanças or the ANMP summary. Look for the income year and the município name. It is important to distinguish “participação no IRS” from “devolução”: the benefit for the resident is the part the município does not take.' }
          ] },
          { id: 'submit-irs', title: '2. File IRS as usual', content: [
            { kind: 'paragraph', text: 'The filing window for IRS for 2025 is from 1 April to 30 June 2026. Use IRS Automático if available, or Modelo 3 manually. There is usually no separate field to fill in to apply for IRS Municipal.' }
          ] },
          { id: 'see-settlement', title: '3. Check the demonstração de liquidação', content: [
            { kind: 'paragraph', text: 'After processing, download the Nota de Liquidação / Demonstração de Liquidação from the Portal das Finanças. The municipal devolução is reflected in the calculation as a benefit or redução, affecting the outcome: a larger refund or a lower imposto a pagar.' }
          ] }
        ] }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Practical scenarios for expats',
      content: [
        { kind: 'checklist', items: [
          'Moved to Portugal in 2025 and became a tax resident: make sure the NIF address was updated by 31.12.2025',
          'Lived part of the year in Lisboa and then moved to Cascais: usually the endereço fiscal at year-end is what counts',
          'Your employer withheld IRS based on an office in Porto, but you live in Braga: the município is determined not by the office, but by your NIF address',
          'You are self-employed on recibos verdes: the rule is the same, the município is taken from your domicílio fiscal',
          'You have no tax to pay after deductions: the municipal devolução can be zero or very small',
          'You are receiving an IRS reembolso: the devolução increases the refund but does not arrive as a separate transfer',
          'You have IRS to pay: the devolução reduces the amount due'
        ] },
        { kind: 'paragraph', text: 'For tax planning this is minor compared with residency, the IFICI regime, IRS rates and deductions, but fixing the NIF address is easy. If a município gives 5%, do not lose this automatic bonus.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Municipal rates / Variable participation in IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-00073.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANMP — municipal information on participation in IRS',
      url: 'https://anmp.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 73/2013, art. 26 — participação variável dos municípios no IRS',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2013-50002386',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
