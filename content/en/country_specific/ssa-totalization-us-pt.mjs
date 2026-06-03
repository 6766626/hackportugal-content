export default {
  editorialVoice: 'hackportugal',
  id: 'ssa-totalization-us-pt',
  categoryId: 'country_specific',
  title: 'US Social Security (SSA) for residents of Portugal',
  tldr: 'You can receive American Social Security pension while living in Portugal: payments are handled through the SSA/Federal Benefits Unit at the US Embassy in Lisbon, usually to an account in PT. If you do not have 40 US credits, the US–Portugal totalization agreement allows periods of contributions to Segurança Social to be counted; for a US payment you need at least 6 US credits. A totalization claim is filed with SSA-2490-BK. Medicare barely works abroad.',
  tags: ['ssa', 'pension', 'totalization', 'usa', 'segurança-social'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-totalization-does',
      title: 'What the US–Portugal agreement does',
      content: [
        { kind: 'paragraph', text: 'The US and Portugal have a social security agreement: it helps avoid double contributions and allows insurance periods to be combined for pensions, disability and benefits for surviving family members.' },
        { kind: 'paragraph', text: 'In the US, ordinary entitlement to retirement benefits requires 40 credits. In 2026, 1 credit is earned for $1,890 of earnings, with a maximum of 4 credits per year ($7,560). If you do not have 40 credits, the SSA can count Portuguese contribution periods, but only if you have at least 6 US credits.' },
        { kind: 'warning', text: 'Totalization does not create a “double pension”. The US pays only the proportional part based on your American earnings record. Portugal calculates its own pension separately under Segurança Social rules.' }
      ]
    },
    {
      id: 'who-should-use',
      title: 'Who needs this',
      content: [
        { kind: 'checklist', items: [
          'US citizens and green card holders who live in Portugal and want to claim Social Security retirement, disability or survivors benefits.',
          'Those who worked in the US for less than 10 years and did not earn 40 credits.',
          'Those who worked in Portugal under a contrato de trabalho or recibos verdes and paid contributions to Segurança Social.',
          'Spouses, former spouses, widows/widowers and children claiming family or survivors benefits.',
          'Self-employed Americans in Portugal who need to understand where to pay social security contributions.',
          'Workers temporarily posted from the US to Portugal or from Portugal to the US, so they do not pay contributions into both systems.'
        ] },
        { kind: 'paragraph', text: 'If you already have 40 US credits, Portuguese periods usually will not increase your American pension. But they may be important for the Portuguese pension: in Portugal, the standard minimum contributory period for an old-age pension is 15 years of contributions, and the normal pension age in 2026 is 66 years and 9 months.' }
      ]
    },
    {
      id: 'how-to-claim-from-portugal',
      title: 'How to apply from Portugal',
      content: [
        { kind: 'paragraph', text: 'Residents of Portugal usually deal not with a local SSA office in the US, but with the Federal Benefits Unit (FBU) at the US Embassy in Lisbon. The FBU accepts applications, checks documents and forwards the case to the SSA.' },
        { kind: 'substeps', items: [
          { id: 'prepare-records', title: '1. Gather your work history records', content: [
            { kind: 'checklist', items: [
              'SSN and access to my Social Security, if available.',
              'US passport or another identity document.',
              'Birth certificate; for family benefits — marriage certificate, divorce decree, death certificate.',
              'W-2, 1099, tax returns or other proof of American earnings if the earnings record is incomplete.',
              'NISS and Portuguese record: declaração de carreira contributiva / histórico de remunerações from Segurança Social Direta.',
              'Dates of work in the US and Portugal: employers, addresses, periods, type of employment.',
              'IBAN of a Portuguese account for international direct deposit or details of a US account.'
            ] }
          ] },
          { id: 'contact-fbu', title: '2. Contact FBU Lisbon', content: [
            { kind: 'paragraph', text: 'Write to the FBU via the U.S. Embassy Lisbon / Federal Benefits page. Do not send originals without FBU instructions. The FBU usually arranges a phone/video contact or asks you to upload/send copies.' }
          ] },
          { id: 'file-forms', title: '3. Complete the SSA forms', content: [
            { kind: 'paragraph', text: 'For a standard retirement claim, SSA forms for retirement benefits are used; if Portuguese credits are needed, SSA-2490-BK — Application for Benefits Under a U.S. International Social Security Agreement — is added.' },
            { kind: 'warning', text: 'SSA-2490-BK is important specifically for totalization. If you simply filed an ordinary application and did not list Portuguese periods, the SSA may not request data from Portugal Segurança Social.' }
          ] },
          { id: 'wait-verification', title: '4. Wait for the data exchange', content: [
            { kind: 'paragraph', text: 'The SSA requests confirmation of Portuguese insurance periods through the competent authorities. Timelines are not fixed: simple cases move faster, while cases involving several countries, divorces, military service or self-employment can take months.' }
          ] }
        ] }
      ]
    },
    {
      id: 'payments-and-life-in-portugal',
      title: 'Payments, banks and residence checks',
      content: [
        { kind: 'paragraph', text: 'The SSA can pay benefits to residents of Portugal. Money can be received by international direct deposit into a Portuguese bank account or into an account in the US. When transferring to PT, factor in bank charges and the exchange rate if the account is not in dollars.' },
        { kind: 'checklist', items: [
          'Tell the SSA/FBU about any change of address in Portugal.',
          'Report marriage, divorce, death of a spouse, starting/ending work and any change of citizenship if this affects benefits.',
          'Check your post: the SSA sends out the Foreign Enforcement Questionnaire, usually forms SSA-7162 or SSA-7161.',
          'If the questionnaire is not returned on time, payments may be suspended until life and address are confirmed.',
          'Medicare covers almost no medical services outside the US; for Portugal you need SNS, private insurance or both.',
          'Part B premiums may continue to be deducted from Social Security even if you live in Portugal; cancelling and re-enrolling may involve penalties.'
        ] },
        { kind: 'warning', text: 'Do not ignore SSA letters because of Portuguese post. A practical option is to keep your address up to date, keep scans of all mailings and regularly check communications with the FBU.' }
      ]
    },
    {
      id: 'contributions-and-double-tax',
      title: 'Contributions: how not to pay into two systems',
      content: [
        { kind: 'paragraph', text: 'The agreement also regulates which system social security contributions are paid into. The general logic is that a worker pays into the system of the country where they work, but for a temporary posting the system of the sending country may remain in place.' },
        { kind: 'checklist', items: [
          'If an American company temporarily sends you to work in Portugal, you can usually request a Certificate of Coverage from the SSA and continue paying FICA in the US, rather than Segurança Social in PT.',
          'If a Portuguese company temporarily sends an employee to the US, the certificate is usually requested from Portugal Segurança Social.',
          'If you are self-employed and live/work in Portugal, coverage by the country of residence often applies: contributions to Segurança Social instead of US self-employment tax, provided the correct certificate is in place.',
          'A US tax return may still be mandatory for US citizens, even if social security contributions are paid in Portugal.',
          'For recibos verdes in Portugal, monitor Segurança Social Direta: quarterly declarations, the contribution base and possible exemptions are not replaced by the SSA.'
        ] },
        { kind: 'warning', text: 'A Certificate of Coverage should be arranged before a dispute with the tax/social security authorities, not after debts have been assessed. For US self-employment tax and Portuguese Segurança Social, it is better to agree the position with a US/Portugal tax adviser.' }
      ]
    },
    {
      id: 'tax-and-planning',
      title: 'Tax and planning',
      content: [
        { kind: 'paragraph', text: 'Social Security benefits and the Portuguese pension are not just an SSA issue. Americans still have US tax filing; tax residents of Portugal have IRS obligations.\n\nThe tax treatment depends on residence, type of payment, the double taxation treaty and your income structure.' },
        { kind: 'checklist', items: [
          'Download your Social Security Statement before applying: check your earnings record and estimated benefit.',
          'Compare claim age scenarios: 62, full retirement age and 70; an early claim reduces the payment for life.',
          'If there is a Portuguese pension, request a simulação in Segurança Social Direta.',
          'Check how payments will be reported in IRS Modelo 3 and US Form 1040.',
          'Keep all SSA notices, SSA-2490-BK, certificates of coverage and confirmations from Segurança Social.',
          'Do not plan healthcare in Portugal through Medicare: register with SNS and consider private insurance.'
        ] },
        { kind: 'paragraph', text: 'From 2025, WEP/GPO for Social Security have been repealed in the US, so a foreign state pension should no longer reduce the benefit under those rules. But the SSA may still request information about a foreign pension to process the case correctly.' }
      ]
    }
  ],
  costs: [
    { label: 'SSA/FBU application', amountEUR: 0, note: 'The SSA does not charge a fee for a retirement/totalization claim or form SSA-2490-BK.' },
    { label: 'Certificate of Coverage', amountEUR: 0, note: 'Usually with no government fee; there may be costs for an adviser or certified translations if a specific authority requests them.' }
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
      title: 'SSA: Federal Benefits Units for applicants outside the US',
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
