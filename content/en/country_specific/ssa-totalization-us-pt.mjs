export default {
  editorialVoice: 'hackportugal',
  id: 'ssa-totalization-us-pt',
  categoryId: 'country_specific',
  title: 'US Social Security (SSA) for residents of Portugal',
  tldr: 'You can receive a US Social Security pension while living in Portugal: payments are handled through the SSA/Federal Benefits Unit at the US Embassy in Lisbon, usually to a PT account. If you do not have 40 US credits, the US–Portugal totalization agreement allows contribution periods in Segurança Social to be counted; for a US payment you need at least 6 US credits. Totalization claims are filed with SSA-2490-BK. Medicare barely works abroad.',
  tags: ['ssa', 'pension', 'totalization', 'usa', 'segurança-social'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-totalization-does',
      title: 'What the US–Portugal agreement does',
      content: [
        { kind: 'paragraph', text: 'The US and Portugal have a social security agreement: it helps avoid double contributions and allows insurance periods to be totalised for retirement, disability and survivors benefits.' },
        { kind: 'paragraph', text: 'In the US, standard entitlement to retirement benefits requires 40 credits. In 2026, 1 credit is earned for US$1,810 of earnings, up to a maximum of 4 credits per year. If you do not have 40 credits, the SSA may count Portuguese contribution periods, but only if you have at least 6 US credits.' },
        { kind: 'warning', text: 'Totalization does not create a “double pension”. The US pays only a proportional part based on your American earnings record. Portugal calculates its own pension separately under Segurança Social rules.' }
      ]
    },
    {
      id: 'who-should-use',
      title: 'Who needs this',
      content: [
        { kind: 'checklist', items: [
          'US citizens and green card holders who live in Portugal and want to claim Social Security retirement, disability or survivors benefits.',
          'People who worked in the US for less than 10 years and did not build up 40 credits.',
          'People who worked in Portugal under a contrato de trabalho or recibos verdes and paid contributions to Segurança Social.',
          'Spouses, former spouses, widows/widowers and children who are claiming family or survivors benefits.',
          'Self-employed Americans in Portugal who need to understand where to pay social security contributions.',
          'Workers temporarily posted from the US to Portugal or from Portugal to the US, so they do not pay contributions into both systems.'
        ] },
        { kind: 'paragraph', text: 'If you already have 40 US credits, Portuguese periods usually will not increase your US pension. But they may matter for the Portuguese pension: in Portugal, the standard minimum contributory period for an old-age pension is 15 years of contributions, and the normal pension age in 2026 is 66 years and 7 months.' }
      ]
    },
    {
      id: 'how-to-claim-from-portugal',
      title: 'How to apply from Portugal',
      content: [
        { kind: 'paragraph', text: 'Residents of Portugal usually deal not with a local SSA office in the US, but with the Federal Benefits Unit (FBU) at the US Embassy in Lisbon. The FBU receives applications, checks documents and forwards the case to the SSA.' },
        { kind: 'substeps', items: [
          { id: 'prepare-records', title: '1. Gather your contribution records', content: [
            { kind: 'checklist', items: [
              'SSN and access to my Social Security, if available.',
              'US passport or another identity document.',
              'Birth certificate; for family benefits — marriage certificate, divorce decree, death certificate.',
              'W-2, 1099, tax returns or other evidence of US earnings if the earnings record is incomplete.',
              'NISS and Portuguese record: declaração de carreira contributiva / histórico de remunerações from Segurança Social Direta.',
              'Dates of work in the US and Portugal: employers, addresses, periods, type of employment.',
              'IBAN of the Portuguese account for international direct deposit or US account details.'
            ] }
          ] },
          { id: 'contact-fbu', title: '2. Contact FBU Lisbon', content: [
            { kind: 'paragraph', text: 'Write to the FBU through the U.S. Embassy Lisbon / Federal Benefits page. Do not send originals without FBU instructions. Usually the FBU schedules a phone/video contact or asks you to upload/send copies.' }
          ] },
          { id: 'file-forms', title: '3. Complete the SSA forms', content: [
            { kind: 'paragraph', text: 'For a standard retirement claim, SSA retirement benefits forms are used; if Portuguese credits are needed, SSA-2490-BK is added — Application for Benefits Under a U.S. International Social Security Agreement.' },
            { kind: 'warning', text: 'SSA-2490-BK is important specifically for totalization. If you simply filed a standard application and did not list Portuguese periods, the SSA may not request data from Portugal Segurança Social.' }
          ] },
          { id: 'wait-verification', title: '4. Wait for the data exchange', content: [
            { kind: 'paragraph', text: 'The SSA requests confirmation of Portuguese insurance periods through the competent authorities. Timelines are not fixed: simple cases move faster, while cases involving several countries, divorces, military service or self-employment may take months.' }
          ] }
        ] }
      ]
    },
    {
      id: 'payments-and-life-in-portugal',
      title: 'Payments, banks and proof of residence/life checks',
      content: [
        { kind: 'paragraph', text: 'The SSA can pay benefits to residents of Portugal. Money can be received by international direct deposit into a Portuguese bank account or into a US account. For transfers to PT, factor in bank fees and the exchange rate if the account is not in dollars.' },
        { kind: 'checklist', items: [
          'Tell the SSA/FBU if your address in Portugal changes.',
          'Report marriage, divorce, the death of a spouse, starting/stopping work and changes of citizenship if these affect benefits.',
          'Check your post: the SSA sends Foreign Enforcement Questionnaires, usually forms SSA-7162 or SSA-7161.',
          'If the questionnaire is not returned on time, payments may be suspended until life status and address are confirmed.',
          'Medicare barely covers healthcare services outside the US; for Portugal you need SNS, private insurance or both.',
          'Part B premiums may continue to be deducted from Social Security even if you live in Portugal; cancellation and later re-enrolment may carry penalties.'
        ] },
        { kind: 'warning', text: 'Do not ignore SSA letters because of Portuguese post. A practical approach is to keep your address up to date, keep scans of everything you send, and regularly check communication with the FBU.' }
      ]
    },
    {
      id: 'contributions-and-double-tax',
      title: 'Contributions: how not to pay into two systems',
      content: [
        { kind: 'paragraph', text: 'The agreement also governs which system social security contributions are paid into. The general logic is: a worker pays into the system of the country where they work, but for a temporary posting the system of the sending country may remain in place.' },
        { kind: 'checklist', items: [
          'If a US company temporarily sends you to work in Portugal, you can usually request a Certificate of Coverage from the SSA and continue paying FICA in the US rather than Segurança Social in PT.',
          'If a Portuguese company temporarily sends an employee to the US, the certificate is usually requested from Portugal Segurança Social.',
          'If you are self-employed and live/work in Portugal, coverage by the country of residence often applies: contributions to Segurança Social instead of US self-employment tax, provided the correct certificate is in place.',
          'A US tax return may still be mandatory for US citizens, even if social security contributions are paid in Portugal.',
          'For recibos verdes in Portugal, monitor Segurança Social Direta: quarterly declarations, the contribution base and possible exemptions are not replaced by the SSA.'
        ] },
        { kind: 'warning', text: 'A Certificate of Coverage should be arranged before a dispute with the tax/social security authorities, not after debts have been assessed. For US self-employment tax and Portuguese Segurança Social, it is better to align the position with a US/Portugal tax adviser.' }
      ]
    },
    {
      id: 'tax-and-planning',
      title: 'Tax and planning',
      content: [
        { kind: 'paragraph', text: 'Social Security benefits and the Portuguese pension are not only an SSA matter. Americans still have US tax filing; Portuguese tax residents have IRS obligations. The tax treatment depends on residence, the type of payment, the double taxation treaty and your income structure.' },
        { kind: 'checklist', items: [
          'Download your Social Security Statement before applying: check your earnings record and estimated benefit.',
          'Compare claim age scenarios: 62, full retirement age and 70; an early claim reduces the payment for life.',
          'If there is a Portuguese pension, request a simulação in Segurança Social Direta.',
          'Check how payments will be reported in IRS Modelo 3 and US Form 1040.',
          'Keep all SSA notices, SSA-2490-BK, certificates of coverage and confirmations from Segurança Social.',
          'Do not plan healthcare in Portugal through Medicare: register with SNS and consider private insurance.'
        ] },
        { kind: 'paragraph', text: 'From 2025, WEP/GPO have been repealed in the US for Social Security, so a foreign government pension should no longer reduce the benefit under those rules. But the SSA may still request information about a foreign pension to process the case correctly.' }
      ]
    }
  ],
  costs: [
    { label: 'SSA/FBU application', amountEUR: 0, note: 'The SSA does not charge a fee for a retirement/totalization claim or form SSA-2490-BK.' },
    { label: 'Certificate of Coverage', amountEUR: 0, note: 'Usually there is no government fee; there may be costs for an adviser or certified translations if requested by the specific authority.' }
  ],
  sources: [
    {
      title: 'SSA: US and Portugal social security agreement',
      url: 'https://www.ssa.gov/international/Agreement_Pamphlets/portugal.html',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SSA POMS GN 01727.001: Portugal — overview of totalization agreement',
      url: 'https://secure.ssa.gov/apps10/poms.nsf/lnx/0201727001',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SSA: Federal Benefits Units for claimants outside the US',
      url: 'https://www.ssa.gov/foreign/foreign.htm',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: old-age pension and access rules',
      url: 'https://www.seg-social.pt/pensao-de-velhice',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
