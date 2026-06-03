export default {
  editorialVoice: 'hackportugal',
  id: 'pregnancy-birth',
  categoryId: 'healthcare',
  title: 'Pregnancy and birth in Portugal',
  tldr: 'Portugal provides high-quality pregnancy care through the SNS free of charge for residents with a Número de Utente. In low-risk pregnancy, the DGS recommends a minimum of 6 follow-up consultations + usually 3 screening ultrasounds (11–13+6, 20–22 and 30–32 weeks).\n\nBirths in public maternity units are free; in private units, the indicative cost is €2,500–8,000+ without insurance (vaginal births are cheaper, caesarean sections and complications are more expensive).\n\nLicença parental inicial is 120–180 days with different payment percentages. The birth must be registered within 20 days — often directly at the maternity unit through Balcão do Nado Vivo.',
  tags: ['pregnancy', 'birth', 'sns', 'maternity'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'overview',
      title: 'Overall process',
      content: [
        { kind: 'paragraph', text: 'Pregnancy care in the SNS is free for all legal residents with a Número de Utente (SNS patient number). The quality of medical care is high; most maternity units are public and have modern equipment.' },
        { kind: 'paragraph', text: 'The alternative is private clinics (Luz Saúde, CUF, Lusíadas, Trofa Saúde). Pros: an individual obstetrician-gynaecologist, comfortable rooms, fewer queues. Cons: high cost and sometimes excessive use of procedures.' }
      ]
    },
    {
      id: 'registration',
      title: 'Registering the pregnancy',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. First test and consultation', content: [
            { kind: 'paragraph', text: 'Positive test → book an appointment with your family doctor at the Centro de Saúde (public health centre) or with a private gynaecologist (€25-100 for the first appointment).' }
          ]},
          { id: 'r2', title: '2. Opening follow-up in the SNS', content: [
            { kind: 'paragraph', text: 'The family doctor/USF opens pregnancy follow-up in the SNS, issues referrals and gives you the Boletim de Saúde da Grávida — the pregnancy booklet where consultations, tests and ultrasounds are recorded.' }
          ]},
          { id: 'r3', title: '3. Benefits — what and when', content: [
            { kind: 'paragraph', text: 'From the 13th week, you can request Abono de Família Pré-Natal if the family meets the income criteria. Subsídio Parental is requested after the child is born / leave begins via Segurança Social Direta — usually within 6 months from the first day for which the benefit is requested.' }
          ]}
        ]}
      ]
    },
    {
      id: 'consultations',
      title: 'Pregnancy care — schedule',
      content: [
        { kind: 'paragraph', text: 'For low-risk pregnancy, the DGS recommends a minimum of 6 consultations; in practice, the schedule is often more frequent towards the end of pregnancy and depends on the USF/hospital and clinical risk.' },
        { kind: 'checklist', items: [
          '1st: before 12 weeks — initial appointment, tests, referrals for screenings',
          'Routine ultrasounds are usually: 11–13+6 weeks, 20–22 weeks, 30–32 weeks',
          '24-28 weeks — gestational diabetes screening',
          '32-36 weeks — birth plan, discussion of anaesthesia',
          '36-40 weeks — weekly/fortnightly monitoring',
          'After 40 weeks — if labour has not started, additional monitoring',
          '+ postnatal visit: by the 42nd day after birth'
        ]},
        { kind: 'paragraph', text: 'Tests are prescribed according to the DGS protocol by trimester: blood group/Rh, full blood count, glucose/gestational diabetes screening, urine/urine culture, HIV, syphilis, hepatitis B, rubella immunity, toxoplasmosis if there is no immunity, etc.; frequency depends on gestational age and risk.' }
      ]
    },
    {
      id: 'maternity-preparation',
      title: 'Preparing for birth',
      content: [
        { kind: 'checklist', items: [
          '👩‍⚕️ Preparation classes (Preparação para o Parto) — free in most Centros de Saúde, from 26 weeks',
          '🏥 Choosing a maternity unit: by default — the hospital for your area. You can register at another one by request',
          '📋 Plano de Parto (birth plan) — your preferences: epidural anaesthesia, position, music, the father being present at the birth',
          '🎒 Hospital bag: medical documents, clothes for mother and baby, hygiene products',
          '🚗 Route to the maternity unit — know it in advance, especially for night-time births',
          '📞 SNS 24 (808 24 24 24) — medical triage line for doubts/non-emergency situations. In case of life-threatening danger, heavy bleeding, seizures, loss of consciousness — call 112'
        ]}
      ]
    },
    {
      id: 'birth',
      title: 'Birth and stay',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Admission to hospital', content: [
            { kind: 'paragraph', text: 'Admission at the first signs of the active phase of labour or as scheduled (if caesarean). In the SNS, the stay is usually 1-2 days after a vaginal birth, 3-4 days after a caesarean. In private clinics, you can stay longer if you wish.' }
          ]},
          { id: 'b2', title: 'First hours', content: [
            { kind: 'paragraph', text: 'Immediately after birth — basic procedures: Apgar score, measurements, first latch, vitamin K. In Portugal, the public standard is skin-to-skin contact for at least 1 hour.' }
          ]},
          { id: 'b3', title: 'Birth registration', content: [
            { kind: 'paragraph', text: 'Many maternity units have a Balcão do Nado Vivo, where you can register the birth and obtain the Assento de Nascimento directly on the day of birth. If there is none/it is closed — registration is done at the Conservatória do Registo Civil or through available online services. Registration must be within 20 days. Free of charge.' }
          ]},
          { id: 'b4', title: 'Documents on discharge', content: [
            { kind: 'checklist', items: [
              'Assento de Nascimento',
              'Boletim de Saúde Infantil (child health booklet)',
              'Cartão de Cidadão is issued only if the child is a Portuguese citizen. Children of foreigners born in Portugal acquire citizenship only if the conditions of the Lei da Nacionalidade are met. The 2026 nationality law reform (promulgated in May 2026) tightened the rules: one parent must now have lived legally in Portugal for at least 5 years (previously 1 year). Check the current status and transitional rules',
              'If the child is not a Portuguese citizen — foreign documents/passport are arranged through the parents\' consulate and, if necessary, the residence process through AIMA',
              'NIF for a foreign child is usually requested separately from the Autoridade Tributária through a representative; for a Portuguese child, the number may be linked to the issue of the Cartão de Cidadão',
              'Número de Utente is often created through the Nascer Utente mechanism, but check it after discharge; if the number has not appeared — request it at the Centro de Saúde/ULS with the assento de nascimento and the parents\' documents'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'parental-leave',
      title: 'Parental leave and benefits',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Licença Parental Inicial', content: [
            { kind: 'checklist', items: [
              '120 days — 100% of salary (basic option)',
              '150 days — 80%, if the sharing conditions are not met; 150 days when shared between parents under Segurança Social rules — 100%',
              '180 days when shared — 90%, if after the mother\'s mandatory period each parent takes the legally provided exclusive period (for example, 30 consecutive days or two periods of 15 days) according to Segurança Social rules',
              'Father: 28 mandatory days licença parental exclusiva do pai; 7 of them consecutive immediately after birth, the rest within the first 42 days. There are also 7 optional days, which can be taken at the same time as the mother\'s leave (Código do Trabalho art. 43, Lei 13/2023)',
              'Entitlement to leave applies to both parents as employees, self-employed people, and unemployed people (provided the relevant conditions are met)'
            ]}
          ]},
          { id: 'l2', title: 'Benefit', content: [
            { kind: 'paragraph', text: 'Subsídio Parental is paid by Segurança Social. It is calculated based on the average salary over the last 6 months. The application is made in Segurança Social Direta, usually automatically after the child is registered.' }
          ]},
          { id: 'l3', title: 'Additional leave', content: [
            { kind: 'checklist', items: [
              'Licença parental complementar / subsídio parental alargado: up to 3 months for each parent immediately after licença parental inicial, usually 30% of the remuneração de referência; there are also other forms of complementar leave with separate conditions',
              'Licença para assistência a filho — up to 2 years unpaid (guaranteed return to work)',
              'Breaks for amamentação/aleitação: usually 2 periods of up to 1 hour per day. Aleitação — up to 1 year; amamentação can continue after 1 year with medical confirmation (Código do Trabalho art. 47–48)',
              'The right to part-time / flexible working time may be available to the mother or father for a child under 12, subject to the notification procedure and conditions of the Código do Trabalho (art. 55–57)'
            ]}
          ]},
          { id: 'l4', title: 'One-off payments', content: [
            { kind: 'checklist', items: [
              'There is no single national "baby bonus". Check municipal apoios à natalidade in your place of residence',
              'At national level, the following are available: Abono de Família Pré-Natal (from the 13th week, income-tested), Abono de Família for the child, Garantia para a Infância, Subsídio Social Parental',
              'Subsídio Social Parental — for those who are not entitled to the standard Subsídio Parental and meet low-income/resources conditions',
              'Abono de Família (child benefit) — monthly from birth (see separate guide)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'private-vs-sns',
      title: 'SNS or private clinic — what to choose',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'SNS (public system)', content: [
            { kind: 'checklist', items: [
              '✅ Free of charge',
              '✅ High-quality medical care',
              '✅ Modern maternity units (especially Maternidade Alfredo da Costa, Hospital Santa Maria in Lisbon, S. João in Porto)',
              '❌ You do not choose the doctor; each appointment may be with a different specialist',
              '❌ Standard rooms (2-4 mothers in a room)',
              '❌ Less flexibility in the birth plan'
            ]}
          ]},
          { id: 's2', title: 'Private clinic', content: [
            { kind: 'checklist', items: [
              '💰 €2,500–5,000 for a vaginal birth without insurance',
              '💰 €4,000–8,000+ for a caesarean',
              '✅ Your obstetrician-gynaecologist manages the pregnancy and attends the birth',
              '✅ Comfortable single rooms',
              '✅ Individual approach',
              '❌ Excessive use of caesarean sections (40-60% versus 25-30% in the SNS) — higher risk of medical interventions',
              '🩺 With insurance (Médis, Multicare with maternity cover): €500-1,500 co-payment'
            ]}
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'DGS — National Programme for the Surveillance of Low-Risk Pregnancy', url: 'https://www.dgs.pt/em-destaque/programa-nacional-para-a-vigilancia-da-gravidez-de-baixo-risco.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS 24 — pregnancy', url: 'https://www.sns24.gov.pt/tema/gravidez/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — parenthood', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do Trabalho (Lei 7/2009, amended by Lei 13/2023)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Registering a birth / Balcão do Nado Vivo', url: 'https://irn.justica.gov.pt/Registos/Registo-Civil/Nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
