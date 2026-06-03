export default {
  editorialVoice: 'hackportugal',
  id: 'apoio-aleitamento-materno',
  categoryId: 'healthcare',
  title: 'Breastfeeding support: help with breastfeeding in the SNS',
  tldr: 'In Portugal, you can get help with breastfeeding free of charge through the SNS: at the Centro de Saúde with an enfermeira de saúde materna/infantil, at the maternity hospital through the Cantinho da Amamentação, and by phone via Linha SOS Amamentação 213 880 915 (Mon-Fri 10h-18h). A número de utente is needed, but in urgent situations help should not be delayed. At work, Código do Trabalho art. 47 gives up to 2 hours per day for amamentação/aleitação: usually 2 periods of 1 hour, at least until the child is 1 year old, and longer if breastfeeding is actually continuing, with confirmation.',
  tags: ['breastfeeding', 'sns', 'birth', 'work'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-sns-offers',
      title: 'What the SNS provides for breastfeeding',
      content: [
        { kind: 'paragraph', text: 'Apoio à amamentação is not a separate paid service, but part of pregnancy monitoring, the postnatal period and child health care in the SNS. The main entry point is your Centro de Saúde: consulta de enfermagem de saúde materna, consulta de saúde infantil and your family doctor.' },
        { kind: 'checklist', items: ['checking the baby’s latch and position', 'help with pain, cracked nipples and engorgement', 'assessing the baby’s weight gain and number of wet nappies', 'a supplementation plan, if it is genuinely needed', 'support with expressing and storing milk', 'advice when returning to work', 'referral to hospital or urgência if mastitis, dehydration in the baby or severe weight loss is suspected'] },
        { kind: 'warning', text: 'If the mother has a fever, chills, a red painful area on the breast or pus-like discharge, or the baby is lethargic, feeding poorly or urinating little, do not wait for a scheduled appointment. Call SNS 24 or go to urgência.' }
      ]
    },
    {
      id: 'where-to-go',
      title: 'Where to go: Centro de Saúde, maternity hospital, SOS line',
      content: [
        { kind: 'substeps', items: [
          { id: 'centro-saude', title: '1. Centro de Saúde for your address', content: [
            { kind: 'paragraph', text: 'Ask for consulta de enfermagem para apoio à amamentação or consulta de saúde infantil. If you are already registered with a unidade de saúde familiar, write via Portal SNS 24, call the reception desk or go in person.' },
            { kind: 'checklist', items: ['mother’s número de utente', 'baby’s número de utente, if already issued', 'Cartão de Cidadão / residence permit / passport', 'Boletim de Saúde da Grávida or maternity discharge summary', 'baby’s Boletim de Saúde Infantil e Juvenil', 'list of questions: pain, feeding frequency, supplementation, weight, expressing'] }
          ]},
          { id: 'hospital', title: '2. Cantinho da Amamentação in the maternity hospital or hospital', content: [
            { kind: 'paragraph', text: 'Many SNS maternidades and hospitais have a Cantinho da Amamentação — a room or team that helps with lactation after discharge. This is usually especially useful in the first 2–6 weeks, when cracked nipples, blocked ducts, latch problems or supplementation issues arise.' }
          ]},
          { id: 'phone-app', title: '3. Linha SOS Amamentação and app', content: [
            { kind: 'paragraph', text: 'Linha SOS Amamentação: 213 880 915 (Mon-Fri 10h-18h). This is the helpline of Associação SOS Amamentação, where you can get advice on common feeding problems. It is a Lisbon geographic number charged at the normal call rate. The SOS-Amamentação app is also available: useful for recording feeds and quickly finding support contacts.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-ask-in-portuguese',
      title: 'How to phrase the request in Portuguese',
      content: [
        { kind: 'paragraph', text: 'In the SNS it is better to be specific: do not say “I need a consultant”, but describe the symptom and ask for enfermagem de apoio à amamentação. This helps the reception desk direct you more quickly to the right nurse or doctor.' },
        { kind: 'checklist', items: ['“Preciso de apoio à amamentação.” — I need help with breastfeeding.', '“Tenho dor ao amamentar.” — It hurts when I breastfeed.', '“O bebé não pega bem na mama.” — The baby is not latching well.', '“Tenho fissuras no mamilo.” — Cracked nipple.', '“A mama está muito dura e dolorosa.” — The breast is hard and painful.', '“Tenho febre e dor na mama.” — Fever and breast pain.', '“O bebé perdeu peso / não está a ganhar peso.” — The baby has lost weight / is not gaining weight.', '“Preciso de ajuda para extrair e conservar leite.” — I need help with expressing and storing milk.'] },
        { kind: 'warning', text: 'Do not automatically agree to formula just because “it is easier that way”. If the baby is stable, ask for a plan: how much supplementation, how to give it, how often weight should be checked and how to maintain lactation.' }
      ]
    },
    {
      id: 'work-rights',
      title: 'Right to breaks at work: CT art. 47',
      content: [
        { kind: 'paragraph', text: 'Código do Trabalho art. 47 gives a worker the right to dispensa para amamentação — time off work for breastfeeding. If there is no breastfeeding, the mother or father may use dispensa para aleitação until the child reaches 1 year of age.' },
        { kind: 'checklist', items: ['as standard — 2 periods per day of up to 1 hour each, i.e. up to 2 hours per day', 'a different schedule can be agreed with the employer in writing', 'for twins, 30 minutes per day is added for each child beyond the first', 'for part-time work, the entitlement is proportional, but at least 30 minutes per day', 'breaks count as working time and must not reduce salary', 'if the child is over 1 year old and the mother continues breastfeeding, the employer may request medical confirmation', 'notify the employer in advance, usually at least 10 days beforehand, referring to amamentação/aleitação'] },
        { kind: 'warning', text: 'The employer cannot replace these 2 hours with “goodwill”, holiday or unpaid time. If you are being pressured, keep a written record and contact ACT — Autoridade para as Condições do Trabalho.' }
      ]
    },
    {
      id: 'expat-practicalities',
      title: 'What matters for expats',
      content: [
        { kind: 'paragraph', text: 'It is best to arrange the mother’s and baby’s número de utente as early as possible. A child born in Portugal receives health monitoring through the SNS; registration at the Centro de Saúde is usually done according to the family’s place of residence.' },
        { kind: 'checklist', items: ['if there is no utente yet, still contact the Centro de Saúde or hospital — especially in the first days after birth', 'take the maternity discharge summary, the baby’s boletim and the parents’ documents', 'in private maternity hospitals, also ask for a relatório de alta to pass on to the SNS', 'if you do not speak Portuguese, prepare phrases in advance or come with an interpreter', 'for a scheduled visit, bring the baby, nappies, a muslin/cloth and a bottle/expressed milk if you are supplementing', 'if you use a breast pump, you can show the model and pumping settings to the nurse', 'if you have depression, anxiety or the feeling that “I am not coping”, also ask for consulta de saúde mental/perinatal'] }
      ]
    }
  ],
  costs: [
    { label: 'Consulta de enfermagem / apoio à amamentação in the SNS', amountEUR: 0, note: 'For SNS users with a número de utente; in urgent situations, help should not be delayed because of bureaucracy.' },
    { label: 'Linha SOS Amamentação 213 880 915 (Mon-Fri 10h-18h)', amountEUR: 0, note: 'Telephone breastfeeding support line; a Lisbon geographic number charged at the normal call rate.' },
    { label: 'Private lactation consultant', amountEURMin: 40, amountEURMax: 100, note: 'Market guide for an in-person/online consultation; does not replace medical help in case of fever, mastitis or problems with the baby’s weight.' }
  ],
  sources: [
    { title: 'DGS — recommendations and materials on aleitamento materno', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — gravidez, pós-parto, bebé and access to SNS services', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — art. 47, dispensa para amamentação ou aleitação', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Associação SOS Amamentação — Linha SOS Amamentação 213 880 915', url: 'https://www.sosamamentacao.org.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
