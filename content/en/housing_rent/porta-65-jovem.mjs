export default {
  editorialVoice: 'hackportugal',
  id: 'porta-65-jovem',
  categoryId: 'housing_rent',
  title: 'Porta 65 Jovem — rent subsidy for young people aged 18–35',
  tldr: 'Porta 65 Jovem is an IHRU state rent subsidy for housing for young people aged 18–35 in Portugal. Applications in 2026 are submitted online all year round via Portal da Habitação / gov.pt. Support is usually granted for 12 months, with the possibility of renewal up to 60 months; the amount depends on income, household composition, municipality and rent ceiling. There is a 20% uplift for housing in an área de reabilitação urbana and for monoparental households.',
  tags: ['porta65', 'rent', 'housing', 'ihru'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Porta 65 Jovem pays for',
      content: [
        { kind: 'paragraph', text: 'Porta 65 Jovem is not a landlord discount, but a monthly state subsidy for part of the renda. The money is transferred to the recipient’s IBAN after the application is approved.' },
        { kind: 'paragraph', text: 'The programme is aimed at young people who rent housing for permanent residence in Portugal continental or regiões autónomas. For an expat, it is a practical way to reduce the rental burden if they already have a NIF, access to Finanças and a lease contract.' },
        { kind: 'checklist', items: ['The application is free and submitted online', 'Young people aged 18–35 are accepted; in a couple, one of the applicants may be older — up to 37 under the programme rules', 'Support is granted for 12 months', 'It can be renewed while the conditions continue to be met, usually up to a total limit of 60 months', 'The subsidy depends on household income, rent amount, municipality and housing typology', 'There is a 20% majoração for housing in an área de reabilitação urbana', 'There is a 20% majoração for monoparental families', 'Applications in 2026 are accepted all year round, without the old model of short application windows'] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who can apply',
      content: [
        { kind: 'paragraph', text: 'Foreign nationals can participate if they live in Portugal legally and meet the same conditions as Portuguese applicants. In practice, you need a NIF, access to Portal das Finanças or Chave Móvel Digital, verifiable income and a housing rental in Portugal.' },
        { kind: 'checklist', items: ['Age: from 18 to 35 inclusive; for a casal jovem, one element may be up to 37 years old', 'The housing is used as residência permanente, not as an Airbnb, quarto turístico or second home', 'There is a contrato de arrendamento or contrato-promessa, drawn up according to the rules and linked to the parties’ NIF', 'The landlord is not the applicant’s parent, child, grandparent, grandchild or close relative', 'The applicant and household members do not have other suitable housing in the same area that can be used for residence', 'The household does not receive incompatible state support for the same rent', 'Household income must fall within the programme limits; income that is too low, unverifiable or too high may lead to refusal', 'The rent must be compatible with income and the limits set for the município and housing typology'] },
        { kind: 'warning', text: 'If you have only just moved and have not yet declared income in Portugal, the application may be more difficult: IHRU cross-checks data with Autoridade Tributária and Segurança Social. Prepare foreign income records, a contract, recibos de vencimento or documents on recibos verdes, but the final decision depends on what the system can verify.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents and access before applying',
      content: [
        { kind: 'paragraph', text: 'Application is via Portal da Habitação / gov.pt. Login is usually through NIF + senha do Portal das Finanças, Chave Móvel Digital or Cartão de Cidadão. Every adult household member must have correct tax data.' },
        { kind: 'checklist', items: ['NIF of each applicant and adult household member', 'Senha do Portal das Finanças or Chave Móvel Digital', 'Título de residência / cartão de residência / another legal-stay document for a non-EU expat', 'Contrato de arrendamento or contrato-promessa with housing details, renda mensal and NIF senhorio', 'Confirmation that the contract is registered with Finanças, if it is already in force', 'IBAN of a Portuguese or SEPA account in the applicant’s name', 'Declaração de IRS for the latest available year, if you have already filed IRS in Portugal', 'Evidence of current income: contrato de trabalho, recibos de vencimento, recibos verdes, declaração de início de atividade', 'Household composition: spouse/partner, children, dependentes, situação monoparental', 'Check of morada fiscal: it must match the rented housing if the contract is already in force'] },
        { kind: 'warning', text: 'Do not apply with a “verbal agreement”. IHRU works with verifiable data: NIF, contrato, renda, income and household must match across Portal da Habitação, Finanças and Segurança Social.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply online',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal da Habitação', content: [
            { kind: 'paragraph', text: 'Open the “Candidatar-se ao Porta 65 Jovem” service on gov.pt or the Porta 65 Jovem page on Portal da Habitação. Authenticate using an available method — most often NIF + senha das Finanças or CMD.' }
          ]},
          { id: 'household', title: '2. Fill in the household', content: [
            { kind: 'paragraph', text: 'List all the people who will live in the flat and are part of the agregação familiar. An error in family composition changes income limits, housing typology and the subsidy amount.' }
          ]},
          { id: 'lease', title: '3. Enter the lease contract details', content: [
            { kind: 'paragraph', text: 'You will need the address, artigo matricial or property details, NIF senhorio, valor da renda, contract start date and typology. If the housing is in an área de reabilitação urbana, mark this for a possible 20% majoração.' }
          ]},
          { id: 'income', title: '4. Check income and IBAN', content: [
            { kind: 'paragraph', text: 'The system pulls part of the information automatically from Finanças and Segurança Social. If the data is old or incomplete, correct it before applying — after a refusal, it is easier to submit a new correct application than to dispute an obvious error.' }
          ]},
          { id: 'submit', title: '5. Submit and save the comprovativo', content: [
            { kind: 'paragraph', text: 'After submission, save the comprovativo da candidatura. Status is checked in your personal account. If IHRU requests additional information, reply quickly: a missed prazo may lead to arquivamento.' }
          ]}
        ]}
      ]
    },
    {
      id: 'amount-and-renewal',
      title: 'How much is paid and how to renew',
      content: [
        { kind: 'paragraph', text: 'It is best to calculate the exact amount in advance using the IHRU simulator: the formula takes into account rendimento mensal corrigido, renda, município, número de pessoas, typology and special uplifts. In 2026 there is no universal “50% for everyone” rate: two people with the same rent in Lisboa and Castelo Branco may receive different results.' },
        { kind: 'checklist', items: ['The base subsidy is a percentage of the eligible rent, not necessarily of the full amount if your renda is above the programme limit', 'Housing in an área de reabilitação urbana may give +20% to the subsidy', 'A monoparental household may give +20% to the subsidy', 'Support is granted for 12 months', 'Renewal is not automatic: you must confirm conditions and income again', 'If you have changed flat, family composition, income or IBAN — update the data before the new application', 'If income has risen sharply, the subsidy may be reduced or not renewed', 'If you have stopped living in this housing, the support must be stopped, otherwise repayment of amounts may be required'] },
        { kind: 'warning', text: 'Do not plan your budget as if the subsidy has already been approved. First pay the rent yourself: the IHRU decision may take time, and refusal is possible because of income limits, a non-compliant contract or errors in Finanças data.' }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: ['Morada fiscal is still registered at a friend’s address or an old Airbnb', 'The lease contract has not been registered by the senhorio with Finanças', 'The contract names one person, but the application is submitted for a couple or family', 'Income comes from abroad, but is not reflected in IRS or explained by documents', 'The applicant receives other incompatible housing support', 'The rent is too high relative to verified income', 'The flat does not match the household by typology or municipal limits', 'There is no access to Portal das Finanças, and the senha is requested by post and does not arrive immediately', 'The IBAN given is not in the applicant’s name', 'The applicant has moved but has not updated the data in Portal da Habitação'] },
        { kind: 'paragraph', text: 'A practical order for someone moving: first NIF and access to Finanças, then a proper contrato de arrendamento, registration of morada fiscal, then IRS/income documents and only after that Porta 65 Jovem. This reduces refusals caused by mismatches.' }
      ]
    }
  ],
  costs: [
    { label: 'Porta 65 Jovem application', amountEUR: 0, note: 'The state online service is free' },
    { label: 'Atestado de residência at Junta de Freguesia, if needed for address', amountEURMin: 0, amountEURMax: 15, note: 'The price depends on the freguesia; for the application itself, morada fiscal and the contract are usually more important' },
    { label: 'Monthly rent before receiving the decision', amountEURMin: 1, amountEURMax: 9999, note: 'The subsidy does not replace the obligation to pay renda senhorio on time' }
  ],
  sources: [
    {
      title: 'Portal da Habitação — Porta 65 Jovem',
      url: 'https://www.portaldahabitacao.pt/porta-65-jovem1',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt — Apply for Porta 65 Jovem',
      url: 'https://www.gov.pt/servicos/candidatar-se-ao-porta-65-jovem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei n.º 308/2007 — Porta 65 Jovem regime',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/308-2007-640975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
