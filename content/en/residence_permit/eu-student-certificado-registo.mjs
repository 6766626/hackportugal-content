export default {
  editorialVoice: 'hackportugal',
  id: 'eu-student-certificado-registo',
  categoryId: 'residence_permit',
  title: 'EU/Erasmus student: Certificado de Registo instead of a D4 visa',
  tldr: 'An EU/EEA/Swiss citizen who is coming to study in Portugal on Erasmus or a full course does not need a D4 visa and does not need a residence permit through AIMA. You may live without registration for the first 3 months, then within 30 days you must request the Certificado de Registo de Cidadão da União Europeia at the Câmara Municipal for your address of residence. The fee is €15. Usually required: passport/ID, proof of enrolment, address, EHIC/insurance and a declaration of funds.',
  tags: ['eu', 'erasmus', 'crue', 'student'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'not-d4',
      title: 'The key point: not D4 and not AIMA',
      content: [
        { kind: 'paragraph', text: 'If you hold EU, EEA or Swiss citizenship, you benefit from freedom of movement. A national student visa D4 is not issued for study in Portugal: D4 is for third-country nationals.' },
        { kind: 'paragraph', text: 'Your residence document after the first 3 months is the Certificado de Registo de Cidadão da União Europeia, often abbreviated as CRUE or Certificado de Registo. It is not an autorização de residência and not a residence permit card.' },
        { kind: 'checklist', items: [
          'Up to 90 days: you may stay in Portugal without registration as an EU/EEA/Swiss citizen',
          'If you plan to live for more than 3 months: you need to register',
          'Deadline: within 30 days after the first 3 months expire, effectively by the end of the 4th month',
          'Where: the Câmara Municipal for your place of residence; AIMA is not needed for this certificate',
          'Junta de Freguesia is usually needed for an atestado de residência or proof of address, but the Certificado de Registo itself is usually issued by the Câmara Municipal',
          'The fee for the Certificado de Registo is €15',
          'The certificate is usually valid for 5 years or for the declared period of residence, if shorter'
        ] },
        { kind: 'warning', text: 'Do not apply for D4 if you are an EU/EEA/Swiss citizen. The consular D4 visa and AIMA appointment apply to students from third countries; for EU/Erasmus this is an unnecessary and incorrect route.' }
      ]
    },
    {
      id: 'when-to-register',
      title: 'When to go for the Certificado de Registo',
      content: [
        { kind: 'paragraph', text: 'The rule from Lei 37/2006: an EU citizen has the right to reside in Portugal for more than 3 months if they are studying, have health coverage and have sufficient resources so as not to become an unreasonable burden on the social system.' },
        { kind: 'checklist', items: [
          'Day 1–90: legal stay without separate registration',
          'Day 91–120: window for requesting the Certificado de Registo',
          'If you came for an Erasmus semester lasting more than 3 months — the certificate is needed',
          'If the programme is exactly up to 90 days — the certificate is usually not required',
          'If you stay after Erasmus for an internship, work or a second semester — register before the end of the 4th month',
          'If you change municipality, check with the new Câmara Municipal whether you need to update the address'
        ] },
        { kind: 'warning', text: 'Lei 37/2006 provides for a coima if you do not request the Certificado de Registo within the set deadline. In practice, students are more often first asked to arrange the document, but you should not rely on that.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for an EU/Erasmus student',
      content: [
        { kind: 'paragraph', text: 'The list varies slightly by municipality. Before your visit, check the website of your Câmara Municipal or write to the atendimento service. But the basic set for a student is almost the same everywhere.' },
        { kind: 'checklist', items: [
          'Passport or national ID card from the EU/EEA/Swiss country',
          'NIF, if you already have one; formally this is not a condition of the right of residence, but municipalities often ask for it for the booking/receipt',
          'Proof of address in Portugal: rental contract, declaração do senhorio, utility bill or atestado de residência from the Junta de Freguesia',
          'Enrolment document: declaração de matrícula, acceptance letter, Erasmus learning agreement or university certificate',
          'EHIC — Cartão Europeu de Seguro de Doença — or private health insurance',
          'Declaration of sufficient resources: often this is a simple declaração sob compromisso de honra; sometimes they ask for a bank statement or proof of scholarship',
          'Proof of payment of the €15 fee, if the Câmara asks you to pay in advance',
          'Contacts in Portugal: telephone and email'
        ] },
        { kind: 'paragraph', text: 'For “sufficient resources”, the law does not set a fixed amount for an EU student. In practice, it is sensible to have proof of an Erasmus scholarship, parental support or a bank balance covering rent and expenses. As a reference point: SMN in 2026 is €920 per month, but this is not an official threshold for CRUE.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply: Câmara, appointment and collection',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-camara', title: '1. Find your Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Go to the Câmara Municipal for your actual address of residence, not the university address, if these are different municipalities. For example, if you live in Almada and study in Lisboa, you usually need to contact the Câmara Municipal de Almada.' }
          ] },
          { id: 'book-or-walk-in', title: '2. Check the service format', content: [
            { kind: 'paragraph', text: 'In smaller towns, they often receive people without an appointment. In Lisboa, Porto, Cascais, Oeiras and other busy municipalities, an online or telephone marcação may be mandatory.' }
          ] },
          { id: 'bring-originals', title: '3. Take originals and copies', content: [
            { kind: 'paragraph', text: 'The official will check your identity, address and basis for residence. In most cases, the application is completed on the spot. If the address is confirmed through the Junta de Freguesia, obtain the atestado de residência in advance.' }
          ] },
          { id: 'pay-fee', title: '4. Pay €15', content: [
            { kind: 'paragraph', text: 'The fee for issuing the Certificado de Registo is €15. You can usually pay by card or Multibanco, but in smaller municipalities it is better to have cash.' }
          ] },
          { id: 'receive-certificate', title: '5. Receive the paper certificate', content: [
            { kind: 'paragraph', text: 'CRUE is often issued immediately on the day of application. It is a paper A4 document/certificate that you need to keep: it may be requested by a bank, employer, Finanças, SNS, university service or landlord.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-certificate',
      title: 'What to do after receiving it',
      content: [
        { kind: 'paragraph', text: 'The Certificado de Registo settles the issue of legal residence as an EU citizen, but it does not replace the other everyday registrations.' },
        { kind: 'checklist', items: [
          'Keep the original and a scan of the CRUE in the cloud',
          'Inform the university of your Portuguese address, if this is required for Erasmus/bolsa',
          'Arrange or update your NIF address with Finanças if you have become a tax resident',
          'Get a número de utente in the SNS at the Centro de Saúde if you plan to use public healthcare',
          'Arrange a NISS if you will work under a contrato de trabalho or recibos verdes',
          'If you find work, the CRUE remains valid: you do not need to exchange it for a “work residence permit”',
          'After 5 years of lawful continuous residence, you can request a Certificado de Residência Permanente para cidadão da UE/EEE/Suíça'
        ] },
        { kind: 'warning', text: 'CRUE is not a Portuguese Cartão de Cidadão and does not grant Portuguese citizenship automatically. It is only the registration of an EU citizen’s right of residence in Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de Registo de Cidadão da União Europeia', amountEUR: 15, note: 'Official fee for the first issue of the CRUE' },
    { label: 'Atestado de residência at the Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Depends on the Junta; sometimes free, sometimes a few euros' },
    { label: 'Private insurance, if you do not have EHIC', amountEURMin: 15, amountEURMax: 50, note: 'Indicative cost for a basic student/medical plan per month' }
  ],
  sources: [
    {
      title: 'AIMA: Certificado de Registo for EU nationals',
      url: 'https://aima.gov.pt/pt/nacionais-ue-e-familiares/nacionais-ue/certificado-de-registo-para-nacionais-ue',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: Certificado de residência permanente for an EU/EEA/Swiss citizen',
      url: 'https://www2.gov.pt/servicos/pedir-o-certificado-de-residencia-permanente-para-cidadao-da-ue/eee/suica',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 37/2006: legal regime for entry, stay and residence of EU citizens and family members',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34517175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
