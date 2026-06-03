export default {
  editorialVoice: 'hackportugal',
  id: 'logopedia-criancas-sns',
  categoryId: 'education_children',
  title: 'Speech therapy for children: terapia da fala in the SNS, school and privately',
  tldr: 'In Portugal, a children’s speech therapist is called a terapeuta da fala. The free route is via the médico de família at the Centro de Saúde/SNS or via escola/Intervenção Precoce, but waiting times are often 3–12 months and depend on the ACES, school and diagnosis. Privately is faster: usually €30–60 for 45–60 minutes, with an initial avaliação at €40–90. For children aged 0–6 with a risk of delay, SNIPI/ELI is involved; at school, support is organised under Decreto-Lei 54/2018 and through Centros de Recursos para Inclusão.',
  tags: ['speech therapy', 'sns', 'school', 'children'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'recognize-need',
      title: 'When to see a terapeuta da fala',
      content: [
        { kind: 'paragraph', text: 'In Portugal, a “speech therapist” is a terapeuta da fala. They work not only on speech sounds, but also on language comprehension, vocabulary, grammar, stammering, voice, swallowing, autism, ADHD, developmental delay and the consequences of neurological conditions.' },
        { kind: 'checklist', items: [
          'By 18–24 months, the child hardly uses words or suddenly loses speech that had already appeared',
          'By age 2, there are no simple 2-word phrases in the family’s home language',
          'By age 3, only the parents understand the child’s speech, and the child becomes very frustrated because they cannot make themselves understood',
          'By age 4–5, many unclear sounds remain, and the child is poorly understood at nursery',
          'There is stammering, frequent “blocks”, facial tension or avoidance of speaking',
          'The child does not understand simple instructions, does not respond to their name, and interacts little',
          'There are difficulties with chewing, swallowing, drooling, or a very restricted diet',
          'The teacher or educador/a de infância writes that the child finds it difficult to follow activities',
          'In a bilingual family, the delay is present in all languages, not only in Portuguese'
        ] },
        { kind: 'warning', text: 'Bilingualism in itself does not “damage speech” and is not a cause of delay. The important marker is how the child communicates in all their languages, including Russian/Ukrainian/English at home and Portuguese at nursery or school.' }
      ]
    },
    {
      id: 'sns-route',
      title: 'Free via the SNS: Centro de Saúde → referral',
      content: [
        { kind: 'paragraph', text: 'The first official route is the Centro de Saúde for your area of residence. Book an appointment with the médico de família; if you do not yet have a family doctor, ask for consulta aberta/consulta do dia or atendimento administrativo with a pedido de avaliação for the child. The doctor may refer the child to a terapeuta da fala in the ACES/ULS, hospital, pediatria do desenvolvimento, ENT or another specialist appointment.' },
        { kind: 'checklist', items: [
          'The child’s Número de utente',
          'Cartão de Cidadão or the child’s passport/residence permit; for a recém-chegado, whatever documents you have',
          'The child’s NIF, if already issued',
          'Boletim de Saúde Infantil e Juvenil and Boletim de Vacinas',
          'Report from creche/jardim de infância/escola: what exactly the staff are noticing',
          'A 1–2 minute video of the child’s typical speech at home — useful, but it does not replace an appointment',
          'A list of words/phrases the child actually uses in the home language',
          'Previous reports: pediatra, psicologia, ENT, audiology, neurology, autism/ADHD assessment'
        ] },
        { kind: 'paragraph', text: 'Waiting times in the SNS are not uniform.\n\nIn 2026, the realistic range for non-urgent terapia da fala for children is about 3–12 months; in Lisbon, Porto and densely populated concelhos it can be longer. Urgency is increased by: speech regression, suspected autism, swallowing problems, marked stammering, hearing disorders, or a referral from pediatra do desenvolvimento.' },
        { kind: 'warning', text: 'Do not wait silently for a “letter from the hospital”. Three to four weeks after the referral, check with the Centro de Saúde where the pedido was sent, whether there is an episódio/consulta number, and whether the phone number in the SNS system is up to date.' }
      ]
    },
    {
      id: 'early-intervention',
      title: 'Before school and in early childhood: SNIPI / Intervenção Precoce',
      content: [
        { kind: 'paragraph', text: 'For children aged 0–6 with atraso no desenvolvimento or a risk of developmental disorder, the Sistema Nacional de Intervenção Precoce na Infância — SNIPI — operates.\n\nIn practice, this is the Equipa Local de Intervenção (ELI): professionals from health, education and Segurança Social who assess the child and draw up a Plano Individual de Intervenção Precoce.' },
        { kind: 'paragraph', text: 'The request can come via the médico de família, pediatra, creche, jardim de infância, serviço social or directly to the local ELI if the family knows the contact. For a foreign family, the key point is to show that the difficulties are not explained only by the move and the new Portuguese language.' },
        { kind: 'checklist', items: [
          'Ask the creche/jardim for written observations: communication, play, understanding instructions, behaviour in the group',
          'At the SNS appointment, say directly: “Quero referenciação para Intervenção Precoce / ELI”',
          'Gather videos of speech and play at home in the home language',
          'Ask for hearing to be checked: frequent ear infections and reduced hearing often look like speech delay',
          'If the child is under 3, do not accept “let’s wait until school” as the only option',
          'If the child is 3–6, the SNIPI route is still possible, especially before entry into 1.º ciclo'
        ] },
        { kind: 'warning', text: 'SNIPI does not mean automatic weekly sessions with a speech therapist. Sometimes the team provides a plan for the family and nursery, consultations at intervals, or a referral to other services. If intensive therapy is needed, it is often necessary to combine SNIPI/SNS with private sessions.' }
      ]
    },
    {
      id: 'school-route',
      title: 'Via jardim/escola: educação inclusiva and Centros de Recursos',
      content: [
        { kind: 'paragraph', text: 'In state schools and agrupamentos, support for children with speech and language difficulties is provided through the educação inclusiva framework under Decreto-Lei 54/2018. A parent, teacher, educador/a or doctor can initiate an avaliação. The school considers support measures: adaptações, intervenção em grupo, apoio individual, liaison with a terapeuta da fala, psychologist or external services.' },
        { kind: 'paragraph', text: 'Centros de Recursos para Inclusão (CRI) are resource centres that work with schools and can provide technical support, including therapists, when this is included in the school’s plan and available in the region. This is not a “private speech therapist for free at the parents’ request”, but a school mechanism to support inclusion.' },
        { kind: 'checklist', items: [
          'Write to the coordenador/a de turma or educador/a requesting an avaliação das necessidades',
          'Ask for a reunião with the escola and, if there is one, the equipa multidisciplinar de apoio à educação inclusiva',
          'Provide medical and speech therapy reports, even if they were produced privately',
          'Ask for a written registo: what measures are being applied, who is responsible, and when they will be reviewed',
          'Check whether the agrupamento has access to CRI or a terapeuta da fala',
          'If the child does not speak Portuguese after moving, separate language adaptation from clinical speech delay',
          'For children with diagnoses of ASD/PEA, deficiência auditiva, perturbação da linguagem, ask not only to “improve Portuguese”, but for individual measures'
        ] },
        { kind: 'warning', text: 'The school can be very useful, but its resources are limited. If you need a report for AIMA, court, insurance or a foreign school, check in advance whether a school relatório will be accepted or whether you need a report from a terapeuta da fala/psicólogo in a private clinic.' }
      ]
    },
    {
      id: 'private-therapy',
      title: 'Private terapia da fala: faster, but paid',
      content: [
        { kind: 'paragraph', text: 'The private route is usually the fastest: an appointment within a few days or weeks. In 2026, the typical price is €30–60 for a 45–60 minute session; an initial avaliação is often €40–90. In major cities and with specialists in autism, stammering, alimentação/deglutição or bilingual children, the price may be higher.' },
        { kind: 'checklist', items: [
          'Check that the professional is a terapeuta da fala, not simply a tutor or “speech coach”',
          'Ask about experience with children of your child’s age and with bilingual families',
          'Clarify the language of therapy: Portuguese, English, Russian or work through the parents',
          'Ask for a plano terapêutico: goals for 8–12 weeks, frequency, homework',
          'Ask whether they prepare a relatório for escola/SNS/SNIPI',
          'Check whether the clinic issues a fatura com NIF for IRS and insurance',
          'Clarify cancellation rules: many clinics charge if cancellation is less than 24 hours in advance',
          'If you have insurance, check the plafond and network: Médis, Multicare, AdvanceCare, Allianz, Medicare and others'
        ] },
        { kind: 'paragraph', text: 'A normal frequency is once a week, sometimes twice for severe disorders or a short intensive block. A good therapist almost always involves the parents: 10 minutes of practice at home every day is often more important than an occasional session without reinforcement.' },
        { kind: 'warning', text: 'Beware of promises that the child will “start speaking in 10 sessions” without an assessment of hearing, development and the language environment. For young children, therapy should be play-based, with clear goals, not just repeating flashcards at a table.' }
      ]
    },
    {
      id: 'combine-and-track',
      title: 'How to combine routes and not get lost',
      content: [
        { kind: 'paragraph', text: 'The most practical strategy for an expat: open the free route via the SNS/school at the same time as starting a private avaliação, if you can afford it. A private report can be given to the doctor, ELI or school to speed up understanding of the problem, but it does not guarantee priority in the SNS queue.' },
        { kind: 'checklist', items: [
          'Keep one folder: SNS referrals, relatórios, school letters, audiology/ENT results',
          'Every 6–8 weeks, ask the private therapist for a short progress report',
          'Align goals between the therapist and the school: the same words, gestures, visual prompts',
          'At home, maintain the strong home language: rich parental speech helps Portuguese, it does not hinder it',
          'If there is no progress after 3–4 months, ask for the plan to be reviewed and for an additional hearing/development assessment',
          'When moving between concelhos, collect copies of documents in advance: queues and teams may change',
          'If the child is already at school, record requests in writing by email, not only verbally at the school gate'
        ] },
        { kind: 'paragraph', text: 'For AIMA, Finanças or ordinary registration, therapy does not require any special immigration status beyond access to the SNS/school. But for a stable free route, the child needs a número de utente and registration at the local Centro de Saúde; for school — matrícula and contact with the agrupamento for the address of residence.' }
      ]
    }
  ],
  costs: [
    { label: 'Private sessão de terapia da fala', amountEURMin: 30, amountEURMax: 60, note: 'Usually 45–60 minutes; Lisbon/Porto and narrow specialisations may be more expensive' },
    { label: 'Initial private avaliação', amountEURMin: 40, amountEURMax: 90, note: 'Often includes a short relatório; a full written report is sometimes charged separately' },
    { label: 'SNS / Centro de Saúde for a child', amountEUR: 0, note: 'With a número de utente; waiting for referral and therapy often takes 3–12 months' },
    { label: 'Report for school or doctor in a private clinic', amountEURMin: 20, amountEURMax: 80, note: 'If not included in the avaliação; check before booking' }
  ],
  sources: [
    {
      title: 'SNS 24 — official SNS portal and access to healthcare services',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGE — Intervenção Precoce na Infância',
      url: 'https://www.dge.mec.pt/intervencao-precoce',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'DGE — Centros de Recursos para Inclusão (CRI)',
      url: 'https://www.dge.mec.pt/centros-de-recursos-para-inclusao-cri',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República — Decreto-Lei 54/2018, educação inclusiva',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/54-2018-115652961',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
