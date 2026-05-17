export default {
  editorialVoice: 'hackportugal',
  id: 'eu-student-certificado-registo',
  categoryId: 'residence_permit',
  title: 'EU/Erasmus student: Certificado de Registo instead of a D4 visa',
  tldr: 'An EU/EEA/Swiss citizen coming to Portugal to study on Erasmus or for a full course does not need a D4 visa and does not need a residence permit via AIMA. You may live without registration for the first 3 months, then within 30 days you must request the Certificado de Registo de Cidadão da União Europeia at the Câmara Municipal for your address. The fee is €15. Usually you need a passport/ID, proof of enrolment, address, EHIC/insurance and a declaration of means.',
  tags: ['eu', 'erasmus', 'crue', 'student'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'not-d4',
      title: 'Key point: you do not need D4 or AIMA',
      content: [
        { kind: 'paragraph', text: 'If you have EU, EEA or Swiss citizenship, you benefit from freedom of movement. A national student visa D4 is not issued for studying in Portugal: D4 is for third-country nationals.' },
        { kind: 'paragraph', text: 'Your residence document after the first 3 months is the Certificado de Registo de Cidadão da União Europeia, often shortened to CRUE or Certificado de Registo. It is not an autorização de residência and not a residence permit card.' },
        { kind: 'checklist', items: [
          'Up to 90 days: you may stay in Portugal without registration as an EU/EEA/Swiss citizen',
          'If you plan to live for more than 3 months: you must register',
          'Deadline: within 30 days after the first 3 months expire, i.e. effectively by the end of the 4th month',
          'Where: Câmara Municipal for your place of residence; AIMA is not needed for this certificate',
          'Junta de Freguesia is usually needed for an atestado de residência or proof of address, but the Certificado de Registo itself is usually issued by the Câmara Municipal',
          'Fee for the Certificado de Registo — €15',
          'The certificate is usually valid for 5 years or for the declared period of residence, if shorter'
        ] },
        { kind: 'warning', text: 'Do not apply for D4 if you are an EU/EEA/Swiss citizen. The consular D4 visa and AIMA appointment apply to students from third countries; for EU/Erasmus this is an unnecessary and incorrect route.' }
      ]
    },
    {
      id: 'when-to-register',
      title: 'When to apply for the Certificado de Registo',
      content: [
        { kind: 'paragraph', text: 'The rule from Lei 37/2006: an EU citizen has the right to reside in Portugal for more than 3 months if they are studying, have health cover and sufficient resources so as not to become an unreasonable burden on the social system.' },
        { kind: 'checklist', items: [
          'Day 1–90: legal stay without separate registration',
          'Day 91–120: window for requesting the Certificado de Registo',
          'If you arrived for an Erasmus semester lasting more than 3 months — the certificate is needed',
          'If the programme is exactly up to 90 days — the certificate is usually not required',
          'If you stay after Erasmus for an internship, work or a second semester — register by the end of the 4th month',
          'If you change municipality, check with the new Câmara Municipal whether the address needs to be updated'
        ] },
        { kind: 'warning', text: 'For failure to request the Certificado de Registo within the established deadline, Lei 37/2006 provides for a coima. In practice, students are more often first asked to arrange the document, but you should not rely on this.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for an EU/Erasmus student',
      content: [
        { kind: 'paragraph', text: 'The list differs slightly between municipalities. Before your visit, check your Câmara Municipal website or write to atendimento. But the basic set for a student is almost the same everywhere.' },
        { kind: 'checklist', items: [
          'Passport or national ID card of an EU/EEA/Swiss country',
          'NIF, if you already have one; formally this is not a condition of the right of residence, but municipalities often request it for booking/receipt purposes',
          'Proof of address in Portugal: rental contract, declaração do senhorio, utility bill or atestado de residência from the Junta de Freguesia',
          'Proof of enrolment: declaração de matrícula, acceptance letter, Erasmus learning agreement or university certificate',
          'EHIC — Cartão Europeu de Seguro de Doença — or private health insurance',
          'Declaration of sufficient resources: often this is a simple declaração sob compromisso de honra; sometimes a bank statement or scholarship confirmation is requested',
          'Proof of payment of the €15 fee, if the Câmara asks you to pay in advance',
          'Contacts in Portugal: phone and email'
        ] },
        { kind: 'paragraph', text: 'For “sufficient resources”, the law does not set a fixed amount for an EU student. In practice, it is sensible to have proof of an Erasmus scholarship, parental support or a bank balance covering housing and expenses. As a reference point: the SMN in 2026 is €920 per month, but this is not an official threshold for CRUE.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply: Câmara, appointment and collection',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-camara', title: '1. Find your Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Go to the Câmara Municipal for your actual residential address, not the university address, if these are different municipalities. For example, if you live in Almada and study in Lisboa — you normally need to contact Câmara Municipal de Almada.' }
          ] },
          { id: 'book-or-walk-in', title: '2. Check the reception format', content: [
            { kind: 'paragraph', text: 'In smaller towns, walk-ins are often accepted. In Lisboa, Porto, Cascais, Oeiras and other busy municipalities, marcação online or booking by phone may be mandatory.' }
          ] },
          { id: 'bring-originals', title: '3. Bring originals and copies', content: [
            { kind: 'paragraph', text: 'The officer will verify your identity, address and basis of residence. In most cases, the application is completed on the spot. If your address is proven through the Junta de Freguesia, obtain the atestado de residência in advance.' }
          ] },
          { id: 'pay-fee', title: '4. Pay €15', content: [
            { kind: 'paragraph', text: 'The fee for issuing the Certificado de Registo is €15. You can usually pay by card or Multibanco, but in smaller municipalities it is better to have cash.' }
          ] },
          { id: 'receive-certificate', title: '5. Receive the paper certificate', content: [
            { kind: 'paragraph', text: 'CRUE is often issued immediately on the day you apply. It is a paper A4 document/certificate which you must keep: it may be requested by a bank, employer, Finanças, SNS, university service or landlord.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-certificate',
      title: 'What to do after receiving it',
      content: [
        { kind: 'paragraph', text: 'The Certificado de Registo settles the issue of legal residence as an EU citizen, but it does not replace other everyday registrations.' },
        { kind: 'checklist', items: [
          'Keep the original and a scan of the CRUE in the cloud',
          'Tell the university your Portuguese address, if this is required for Erasmus/bolsa',
          'Arrange or update your NIF address with Finanças if you have become tax resident',
          'Obtain a número de utente in the SNS at the Centro de Saúde if you plan to use public healthcare',
          'Arrange NISS if you will work under a contrato de trabalho or recibos verdes',
          'If you find a job, the CRUE remains valid: you do not need to exchange it for a “work residence permit”',
          'After 5 years of lawful continuous residence, you can request the Certificado de Residência Permanente para cidadão da UE/EEE/Suíça'
        ] },
        { kind: 'warning', text: 'CRUE is not a Portuguese Cartão de Cidadão and does not grant Portuguese citizenship automatically. It is only registration of an EU citizen’s right of residence in Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de Registo de Cidadão da União Europeia', amountEUR: 15, note: 'Official fee for the initial issue of CRUE' },
    { label: 'Atestado de residência at Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Depends on the Junta; sometimes free, sometimes a few euros' },
    { label: 'Private insurance, if there is no EHIC', amountEURMin: 15, amountEURMax: 50, note: 'Indicative monthly cost for a basic student/medical plan' }
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
      title: 'Lei 37/2006: legal framework for entry, stay and residence of EU citizens and family members',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34517175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
