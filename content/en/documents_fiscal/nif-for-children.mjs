export default {
  editorialVoice: 'hackportugal',
  id: 'nif-for-children',
  categoryId: 'documents_fiscal',
  title: 'NIF for a child — how to obtain it',
  tldr: 'A child’s NIF is often requested: for school, SNS registration (Número de Utente), insurance, private medical services, and Abono de Família. If the child obtains Portuguese citizenship and the first Cartão de Cidadão/Nascer Cidadão is issued, NIF/NISS/Número de Utente are usually assigned as part of that procedure. For a foreign child (even one born in PT), the NIF is obtained separately at Finanças. Free of charge.',
  tags: ['nif', 'children', 'documents'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'when-needed',
      title: 'When a child’s NIF is usually requested',
      content: [
        { kind: 'checklist', items: [
          'Enrolment in a state or private school, Jardim de Infância or Creche',
          'Registration with the SNS (Número de Utente) — through the Centro de Saúde',
          'Abono de Família — in addition to the NIF, the child’s NISS/link in Segurança Social is usually required, as well as meeting residence and income conditions',
          'Taking out health insurance for the child',
          'Including the child in Reagrupamento Familiar',
          'Inheritance, receiving gifts and transfers'
        ]},
        { kind: 'paragraph', text: 'For school and the SNS, not having a NIF should not block basic access, but the NIF is often needed for administrative records, benefits, insurance, and tax/financial actions.' }
      ]
    },
    {
      id: 'path-pt-born',
      title: 'If the child was born in Portugal',
      content: [
        { kind: 'paragraph', text: 'Hospitals have a Balcão do Nado Vivo (“newborn counter”) — a single procedure for registering the baby.' },
        { kind: 'checklist', items: [
          'Within 20 days after birth — register the name at the Conservatória do Registo Civil',
          'If the child is issued a Portuguese Cartão de Cidadão/Nascer Cidadão, NIF, NISS and Número de Utente are usually assigned together as one package',
          'If the child remains a foreign citizen, check separately: NIF — at Finanças, utente — at the centro de saúde, NISS — at Segurança Social/ISS',
          'Parents receive the Cédula de Nascimento electronically or the Assento de Nascimento',
          'The child’s citizenship depends on the laws of the parents’ country. Under the current Lei n.º 37/81 art. 1.º, a child born in PT to foreign parents may be português de origem if, at the time of birth, one of the parents has been living in PT for at least 1 year and is not in the service of a foreign state; there are also other special grounds. The new citizenship law approved on 01/04/2026 is awaiting promulgation'
        ]}
      ]
    },
    {
      id: 'path-foreign',
      title: 'If the child arrived from abroad',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Option A — in person at Finanças', content: [
            { kind: 'checklist', items: [
              'Book an appointment on Portal das Finanças or attend on a first-come, first-served basis',
              'Both parents or one parent + power of attorney from the other, as well as the child',
              'Documents: child’s passport, birth certificate (apostille/legalisation, if applicable, + certified translation into Portuguese; for EU documents — check Reg. (EU) 2016/1191 on the multilingual standard form), NIF of both parents',
              'Proof of address in Portugal: rental contract or Atestado de Residência',
              'The NIF is issued on the day of the visit, free of charge'
            ]}
          ]},
          { id: 'f2', title: 'Option B — remotely through a representative', content: [
            { kind: 'paragraph', text: 'If the parents are third-country nationals and are not yet in Portugal, the same mechanism applies as for an adult NIF through a fiscal representative. After moving, you need to change the morada fiscal to an address in Portugal/EU/EEA — then the representante fiscal can usually be removed; the residence permit itself, without changing the morada fiscal at Finanças, does not do this. Cost — €70–150 through a lawyer or company.' }
          ]},
          { id: 'f3', title: 'Option C — if the tax address is in Portugal/EU/EEA', content: [
            { kind: 'paragraph', text: 'If the child’s/parent’s tax address is in Portugal/EU/EEA, a fiscal representative is usually not needed. If the address is in a third country (including CPLP), the rules on representante fiscal/electronic notifications need to be checked separately; CPLP citizenship by itself does not provide EU treatment.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After obtaining the NIF',
      content: [
        { kind: 'checklist', items: [
          'The parent/legal representative acts on behalf of the child; if necessary, you can request a Portal das Finanças password for the child’s NIF. For tax purposes, the correct linking of the child in the agregado familiar is important',
          'Activate Portal das Finanças for the child — if the parent needs to view taxes on the child’s behalf; usually this is not required before the age of 18',
          'Provide the NIF to the school or Jardim de Infância when enrolling',
          'For the SNS (Número de Utente), the next step is to contact the Centro de Saúde for the place of residence',
          'For Abono de Família — apply through the parent’s Segurança Social Direta for the child'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Common difficulties',
      content: [
        { kind: 'warning', text: 'If the country issuing the certificate is not party to the Hague Apostille Convention, consular legalisation is required. Check the country’s status in the HCCH Apostille status table — Canada (from 11/01/2024) and China (from November 2023, mainland) already use apostilles. For Ukraine — online apostille via Diia. For EU documents, a multilingual standard form may be available under Reg. (EU) 2016/1191 without translation.' },
        { kind: 'warning', text: 'If the child was born through IVF or with an unknown father — indicate only one parent; Finanças accepts this without problems.' },
        { kind: 'warning', text: 'Transliteration of the child’s name — check how it will be shown in the passport. Different transliterations (MARIIA/MARIA/MARYA) create problems when enrolling in school and obtaining Abono de Família.' }
      ]
    }
  ],
  documents: [
    { title: 'Birth certificate', note: 'apostille/legalisation, if applicable, + certified translation into Portuguese; for EU documents — check multilingual standard form (Reg. EU 2016/1191)' },
    { title: 'Child’s passport', note: 'original + copy' },
    { title: 'Parents’ passports', note: 'both, with NIF' },
    { title: 'Atestado de Residência', note: 'or rental contract' }
  ],
  costs: [
    { label: 'Finanças government fee', amountEUR: 0 },
    { label: 'Apostille + certificate translation', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Fiscal representative (if remote)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'ePortugal — Balcão do Nado Vivo', url: 'https://eportugal.gov.pt/servicos/registar-o-nascimento-no-balcao-do-nado-vivo', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Cartão de Cidadão / Nascer Cidadão', url: 'https://irn.justica.gov.pt/Servicos/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Circular Letter 90057/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'HCCH — Apostille Convention status', url: 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=41', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 37/81 — Nationality Law', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34514475', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
