export default {
  editorialVoice: 'hackportugal',
  id: 'pregnancy-birth',
  categoryId: 'healthcare',
  title: 'Pregnancy and childbirth in Portugal',
  tldr: 'Portugal provides high-quality pregnancy care through the SNS free of charge for residents with a Número de Utente. 9 mandatory consultations + 3 ultrasound scans. Births in public maternity hospitals are free; in private clinics they cost €3,500-8,000. Parental leave is 120-180 days with full or partial pay. The child is registered at the Conservatória do Registo Civil within 20 days.',
  tags: ['pregnancy', 'childbirth', 'sns', 'maternity'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'overview',
      title: 'General process',
      content: [
        { kind: 'paragraph', text: 'Pregnancy care in the SNS is free for all legal residents with a Número de Utente (SNS patient number). The quality of medical care is high; most maternity hospitals are public, with modern equipment.' },
        { kind: 'paragraph', text: 'The alternative is private clinics (Luz Saúde, CUF, Lusíadas, Trofa Saúde). Pros: an individual obstetrician-gynaecologist, comfortable rooms, shorter queues. Cons: high cost, and sometimes excessive use of procedures.' }
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
          { id: 'r2', title: '2. Opening the process in the SNS', content: [
            { kind: 'paragraph', text: 'The family doctor refers you to the maternity unit at the Centro de Saúde. A Processo Clínico is opened in SNS 24, and a boletim de grávida is issued — a green booklet where all appointments and tests are recorded.' }
          ]},
          { id: 'r3', title: '3. Advance registration of the child', content: [
            { kind: 'paragraph', text: 'From 23 weeks, you can submit an advance application for Subsídio Parental in Segurança Social Direta (the online social security portal) — so payments start immediately after the birth.' }
          ]}
        ]}
      ]
    },
    {
      id: 'consultations',
      title: 'Pregnancy care — schedule',
      content: [
        { kind: 'paragraph', text: 'The SNS standard is 9 mandatory consultations:' },
        { kind: 'checklist', items: [
          '1st: before 12 weeks — initial appointment, tests, early ultrasound scan',
          '2nd: 16-20 weeks — morphology ultrasound scan (detailed scan)',
          '3rd: 24-28 weeks — gestational diabetes test',
          '4th: 28-32 weeks — 3rd ultrasound scan, biometrics',
          '5th: 32-34 weeks',
          '6th: 34-36 weeks',
          '7th: 36-38 weeks — birth plan',
          '8th: 38-40 weeks',
          '9th: after 40 weeks (if labour has not yet started)',
          '+ postnatal visit: by the 42nd day after birth'
        ]},
        { kind: 'paragraph', text: 'Additional tests are ordered automatically: TORCH, blood group, HIV, syphilis, hepatitis, and a monthly urine test.' }
      ]
    },
    {
      id: 'maternity-preparation',
      title: 'Preparing for childbirth',
      content: [
        { kind: 'checklist', items: [
          '👩‍⚕️ Preparation courses (Preparação para o Parto) — free in most Centros de Saúde, from week 26',
          '🏥 Choosing a maternity hospital: by default, it is the hospital for your area. You can register at another one by request',
          '📋 Plano de Parto (birth plan) — your preferences: epidural anaesthesia, position, music, the father’s presence at the birth',
          '🎒 Hospital bag: medical documents, clothes for the mother and baby, hygiene products',
          '🚗 Route to the maternity hospital — know it in advance, especially for night-time births',
          '📞 SNS 24 line (808 24 24 24) — help in critical cases'
        ]}
      ]
    },
    {
      id: 'birth',
      title: 'Childbirth and hospital stay',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Hospital admission', content: [
            { kind: 'paragraph', text: 'Hospital admission at the first signs of the active phase of labour or as planned (if it is a caesarean). In the SNS, the stay is usually 1-2 days after a vaginal birth and 3-4 days after a caesarean. In private clinics you can stay longer if you wish.' }
          ]},
          { id: 'b2', title: 'The first hours', content: [
            { kind: 'paragraph', text: 'Immediately after birth — basic procedures: Apgar score assessment, measurements, first latch, vitamin K. In Portugal, the public standard is skin-to-skin contact for at least 1 hour.' }
          ]},
          { id: 'b3', title: 'Birth registration', content: [
            { kind: 'paragraph', text: 'The maternity hospital has a Balcão do Nado Vivo — a one-stop desk where you can apply for the Assento de Nascimento on the day of birth itself. The alternative is the Conservatória do Registo Civil within 20 days. Free of charge.' }
          ]},
          { id: 'b4', title: 'Documents on discharge', content: [
            { kind: 'checklist', items: [
              'Assento de Nascimento',
              'Boletim de Saúde Infantil (child health record book)',
              'Cartão de Cidadão (Portuguese citizen ID card) for the child — can be requested at the Conservatória do Registo Civil',
              'NIF for the child (automatically upon registration)',
              'Número de Utente for the child (automatic)'
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
              '150 days — 80% (if shared between the parents)',
              '180 days — 90% (if both parents take at least 30 days each; Lei 13/2023 / Agenda do Trabalho Digno, previously 83%)',
              'Father — mandatory 20 days of Licença Parental Exclusiva do Pai + 8 additional (optional) days = up to 28 days (Lei 90/2019)',
              'Entitlement to leave — for both parents as employees, self-employed workers, or unemployed people (subject to the relevant conditions)'
            ]}
          ]},
          { id: 'l2', title: 'Subsidy', content: [
            { kind: 'paragraph', text: 'Subsídio Parental is paid by Segurança Social. It is calculated based on the average salary over the last 6 months. Application is made in Segurança Social Direta, usually automatically after the child is registered.' }
          ]},
          { id: 'l3', title: 'Additional leave', content: [
            { kind: 'checklist', items: [
              'Licença parental complementar — up to 3 additional months, 25% of salary',
              'Licença para assistência a filho — up to 2 years unpaid (guaranteed return to work)',
              'Breastfeeding breaks until the child is 1 year old — 2× 30 minutes per day, paid',
              'Part-time work — at the mother’s request until the child’s 3rd year'
            ]}
          ]},
          { id: 'l4', title: 'One-off payments', content: [
            { kind: 'checklist', items: [
              'Bónus Bebé (2026) — one-off €146 per child (1st income bracket)',
              'Subsídio Parental profits (additional benefit) — in some cases',
              'Abono de Família (child benefit) — monthly from birth (see separate guide)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'private-vs-sns',
      title: 'SNS or private clinic — which to choose',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'SNS (public system)', content: [
            { kind: 'checklist', items: [
              '✅ Free of charge',
              '✅ High quality of medical care',
              '✅ Modern maternity hospitals (especially Maternidade Alfredo da Costa, Hospital Santa Maria in Lisbon, S. João in Porto)',
              '❌ You do not choose the doctor; each appointment may be with a different specialist',
              '❌ Standard wards (2-4 mothers in a room)',
              '❌ Less flexibility in the birth plan'
            ]}
          ]},
          { id: 's2', title: 'Private clinic', content: [
            { kind: 'checklist', items: [
              '💰 €2,500-5,000 for a vaginal birth without insurance',
              '💰 €4,000-8,000 for a caesarean',
              '✅ Your obstetrician-gynaecologist manages the pregnancy and attends the birth',
              '✅ Comfortable single rooms',
              '✅ Individual approach',
              '❌ Excessive use of caesareans (40-60% versus 25-30% in the SNS) — higher risk of medical interventions',
              '🩺 With insurance (Médis, Multicare with maternity cover): €500-1,500 co-payment'
            ]}
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Direção-Geral da Saúde — programme for pregnant women', url: 'https://www.dgs.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS 24 — maternity benefits', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — parenthood', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do Trabalho (labour code) — parenthood (Lei 7/2009)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Balcão do Nado Vivo', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
