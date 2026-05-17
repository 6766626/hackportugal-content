export default {
  editorialVoice: 'hackportugal',
  id: 'irs-municipal-devolucao',
  categoryId: 'taxes',
  title: 'IRS Municipal: refund of up to 5% of income tax from the município',
  tldr: 'IRS Municipal is not a separate relief or an application: the município can return up to 5% of the IRS share to a resident through the Finanças calculation. In the IRS return for 2025, submitted in 2026, the refund is applied automatically if your NIF address on 31.12.2025 was in a município with devolução. 2026 examples: Lisboa — 2.5%, Porto — 3%, Cascais — 5%. Check your address in Finanças before the end of the year: an incorrect domicílio fiscal = the money goes to the wrong município or there is no benefit.',
  tags: ['irs', 'municipal', 'taxes', 'finanças'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-it-is',
      title: 'What IRS Municipal is',
      content: [
        { kind: 'paragraph', text: 'Each município is entitled to a share of up to 5% of the IRS of residents with a tax address in its territory. This is provided for in Lei 73/2013, art. 26 — Regime Financeiro das Autarquias Locais.' },
        { kind: 'paragraph', text: 'If the município decides not to take the full share, the difference is returned to the taxpayer as devolução / benefício municipal in the IRS calculation. The maximum is 5%.' },
        { kind: 'paragraph', text: 'This does not mean you will get back 5% of your salary or of all tax withheld. The calculation is done within the liquidação IRS under the AT formula, from your collecta líquida after applicable deductions.' },
        { kind: 'warning', text: 'IRS Municipal only works for tax residents of Portugal who submit IRS Modelo 3. For non-residents with Portuguese income, this municipal devolução usually does not apply.' }
      ]
    },
    {
      id: 'examples-2026',
      title: 'Examples of rates in 2026',
      content: [
        { kind: 'paragraph', text: 'For IRS for 2025, which is submitted from 1 April to 30 June 2026, the municípios have already sent their decisions to the Autoridade Tributária. Rates must be checked by income year, not by the date the return is submitted.' },
        { kind: 'checklist', items: [
          'Lisboa — devolução 2.5%',
          'Porto — devolução 3%',
          'Cascais — devolução 5%',
          'If the município gives 0% devolução, the resident does not receive a municipal refund',
          'If the município gives 5%, this is the maximum municipal devolução',
          'Rates can change every tax year by decision of the Assembleia Municipal',
          'The check is done on Portal das Finanças in the Taxas do Município section'
        ] },
        { kind: 'paragraph', text: 'In practice, the difference may be small for people with low IRS collecta and more noticeable for families with high taxable income. The refund appears in the final liquidação IRS; no separate application is needed.' }
      ]
    },
    {
      id: 'address-rule',
      title: 'The main condition: the NIF address in the correct município',
      content: [
        { kind: 'paragraph', text: 'Finanças looks at your domicílio fiscal — the tax address linked to your NIF. Usually the relevant address is the one on 31 December of the income year. For the IRS 2025 return, submitted in 2026, the critical situation is on 31.12.2025.' },
        { kind: 'checklist', items: [
          'Check the address on Portal das Finanças: Dados Pessoais → Morada Fiscal',
          'If you have moved, update your morada fiscal as early as possible',
          'With Cartão de Cidadão, the address is changed through ePortugal / CMD and then confirmed with a code',
          'Foreign nationals without Cartão de Cidadão usually change address through Portal das Finanças or a serviço de Finanças',
          'The address in the rental contract does not by itself change the domicílio fiscal',
          'The address at AIMA, the bank, SNS or with the employer does not replace the address in Finanças',
          'If spouses submit a joint return, check the addresses of both NIFs'
        ] },
        { kind: 'warning', text: 'A common expat mistake: living in Cascais or Oeiras but leaving the NIF address in Lisboa, with a fiscal representative, or at an old Airbnb. In that case, IRS Municipal is calculated according to the old município, even if you actually lived somewhere else.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'How to check and see the refund',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-rate', title: '1. Check the município rate', content: [
            { kind: 'paragraph', text: 'Open the Taxas do Município table on Portal das Finanças or the ANMP summary. Look for the income year and the name of the município. It is important to distinguish “participação no IRS” from “devolução”: the benefício for the resident is the part that the município does not take.' }
          ] },
          { id: 'submit-irs', title: '2. Submit IRS as usual', content: [
            { kind: 'paragraph', text: 'The deadline for submitting IRS for 2025 is from 1 April to 30 June 2026. Use IRS Automático if it is available, or Modelo 3 manually. There is usually no separate field to fill in to apply for IRS Municipal.' }
          ] },
          { id: 'see-settlement', title: '3. Check the demonstração de liquidação', content: [
            { kind: 'paragraph', text: 'After the return has been processed, download the Nota de Liquidação / Demonstração de Liquidação on Portal das Finanças. The municipal devolução is reflected in the calculation as a benefício or redução affecting the final result: a larger refund or less imposto a pagar.' }
          ] }
        ] }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Practical scenarios for expats',
      content: [
        { kind: 'checklist', items: [
          'You moved to Portugal in 2025 and became a tax resident: check that the NIF address was updated by 31.12.2025',
          'You lived part of the year in Lisboa, then moved to Cascais: usually the endereço fiscal at year-end is used',
          'Your employer withheld IRS based on the office location in Porto, but you live in Braga: the município is determined not by the office, but by your NIF address',
          'You are self-employed on recibos verdes: the rule is the same, the município is taken from the domicílio fiscal',
          'You have no tax payable after deductions: the municipal devolução may be zero or very small',
          'You receive an IRS reembolso: the devolução increases the refund, but does not arrive as a separate transfer',
          'You have to pay additional IRS: the devolução reduces the amount to pay'
        ] },
        { kind: 'paragraph', text: 'For tax planning, this is a minor point compared with residence, the IFICI regime, IRS rates and deductions, but the NIF address is easy to fix. If the município returns 5%, do not lose this automatic bonus.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Taxas do Município / Participação variável no IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-00073.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANMP — municipal information on participação no IRS',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
