export default {
  editorialVoice: 'hackportugal',
  id: 'radar-multa-contestar',
  categoryId: 'auto_ownership',
  title: 'Challenging a fine from a SINCRO speed camera',
  tldr: 'Fines from radares SINCRO come from ANSR: for a passenger car, exceeding the limit by up to 20 km/h in a built-up area or up to 30 km/h outside one is €60–300; beyond that, fines rise up to €2,500 and a driving ban is possible. Portugal applies a metrological tolerance: usually 7 km/h up to 100 km/h and 7% above 100 km/h. You usually have 15 working days after notification to submit a defence or name another driver; if you pay, do it as a depósito so you do not close the case. Check the photo, sign, location, IPQ verification period and the 2-year prescrição.',
  tags: ['radar', 'fine', 'ansr', 'car'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'read-notice',
      title: '1. Understand the ANSR notice',
      content: [
        { kind: 'paragraph', text: 'A speeding fine letter usually arrives to the vehicle owner at the address in the Documento Único Automóvel / registo automóvel. In the document, look for: the auto de contraordenação number, date and place, speed limit, measured speed and speed after tolerance, the Código da Estrada article, the coima amount and payment details.' },
        { kind: 'checklist', items: [
          'Check who is listed as arguido: the owner, the driver or the company.',
          'Compare the number plate and vehicle make in the photo.',
          'Check the date, time, road, direction of travel and km marker.',
          'Compare the stated limit with the actual sign at the location.',
          'Check whether the speed tolerance was applied: 7 km/h up to 100 km/h or 7% above 100 km/h.',
          'Look for any threat of sanção acessória: a driving ban usually appears with a contraordenação grave / muito grave.',
          'Count the deadline: usually 15 working days from the notification date for defesa or identificação do condutor.'
        ] },
        { kind: 'warning', text: 'Do not ignore the letter. If the owner does not name the real driver, the procedure often continues against the owner, and companies or failure to provide details may face separate sanctions.' }
      ]
    },
    {
      id: 'know-amounts',
      title: '2. Understand how serious the speeding is',
      content: [
        { kind: 'paragraph', text: 'For passenger cars and motorcycles, fines under art. 27 Código da Estrada depend on the place and the amount by which the limit was exceeded after the metrological tolerance, not on the radar’s “raw” speed.' },
        { kind: 'checklist', items: [
          'In a built-up area: up to +20 km/h — €60–300.',
          'In a built-up area: +20 to +40 km/h — €120–600, usually grave.',
          'In a built-up area: +40 to +60 km/h — €300–1,500, usually muito grave.',
          'In a built-up area: more than +60 km/h — €500–2,500, muito grave.',
          'Outside a built-up area: up to +30 km/h — €60–300.',
          'Outside a built-up area: +30 to +60 km/h — €120–600, usually grave.',
          'Outside a built-up area: +60 to +80 km/h — €300–1,500, usually muito grave.',
          'Outside a built-up area: more than +80 km/h — €500–2,500, muito grave.'
        ] },
        { kind: 'paragraph', text: 'For lorries, buses, vehicles with trailers and some categories, the thresholds are lower. If the notice does not refer to a passenger car, check the applicable line of art. 27.' }
      ]
    },
    {
      id: 'pay-or-deposit',
      title: '3. If you pay, preserve your right to defend yourself',
      content: [
        { kind: 'paragraph', text: 'The main trap: voluntary payment of the coima is usually treated as acceptance of the fine and closes the dispute over the coima itself. If you want to challenge it but avoid enforcement problems, use the depósito mechanism.' },
        { kind: 'checklist', items: [
          'If you are stopped on the road, ask for the payment to be recorded as a depósito, not pagamento voluntário.',
          'If the letter arrived at home, state explicitly in the defesa that the amount, if paid, was lodged como depósito e não como pagamento voluntário.',
          'Keep the comprovativo de pagamento and a copy of the defesa.',
          'Do not pay “just to make it go away” if you plan to dispute the photo, sign or radar verification.',
          'For grave / muito grave cases, even paying the coima does not always resolve the issue: a driving ban of 1–12 months or 2–24 months may proceed separately.',
          'For drivers with a clean record, it is sometimes possible to request suspensão da sanção acessória, but this is not an automatic right.'
        ] },
        { kind: 'warning', text: 'The 48-hour rule matters in roadside enforcement: to challenge after payment, the money must be lodged as a depósito under the established procedure. The wording on the receipt matters.' }
      ]
    },
    {
      id: 'defence-arguments',
      title: '4. What to actually check in the defesa',
      content: [
        { kind: 'paragraph', text: 'A good defesa is not “I did not notice the sign”, but specific procedural and technical points. Write in Portuguese, briefly, with attachments: photos of the location, a map screenshot, copies of documents, evidence of who was driving.' },
        { kind: 'checklist', items: [
          'Driver identification: if you were not driving, submit identificação do condutor within the deadline and attach the driver’s details.',
          'Photo: request a copy of the photograph if it was not attached or does not allow the vehicle to be confidently identified.',
          'Location: check whether the coordinate/km marker matches the road and direction where the radar SINCRO actually stands.',
          'Speed-limit sign: photograph the approach to the location, especially if the sign is obscured, missing, contradictory or placed after the radar.',
          'Speed tolerance: check that ANSR used the speed after deducting 7 km/h or 7%, not the “raw” measurement.',
          'IPQ / metrologia: request the certificado de aprovação de modelo and certificado de verificação periódica do cinemómetro, valid on the date of the offence.',
          'Deadlines: check the offence date, the auto date, the notification date and any possible prescrição.',
          'Duplication: if there were several letters for one episode, check whether the events were wrongly split.'
        ] },
        { kind: 'paragraph', text: 'The IPQ argument does not work like a magic button, but as a request for evidence: the radar must be homologado/aprovado and have a valid metrological verification. If the file does not contain a valid certificate for the offence date, this is a strong point for arquivamento.' }
      ]
    },
    {
      id: 'submit',
      title: '5. Where to submit: Portal Contraordenações or letter',
      content: [
        { kind: 'paragraph', text: 'The most convenient route is the Portal das Contraordenações Rodoviárias ANSR. To log in, you usually need a NIF and digital authentication: Chave Móvel Digital, Cartão de Cidadão or another supported method. Through the portal you can view procedures, submit a defesa, name the driver and attach files.' },
        { kind: 'checklist', items: [
          'Go to portalcontraordenacoes.ansr.pt.',
          'Find the procedure by the auto de contraordenação number.',
          'Choose the action: defesa, identificação do condutor or consulta do processo.',
          'Upload a PDF with the defesa text and attachments.',
          'Ask for juntada aos autos de fotografia, certificado IPQ and relatório do equipamento if they are not there.',
          'Download the comprovativo de submissão.',
          'If the portal is not working, send a registered letter with aviso de receção to the address stated in the notice.',
          'Keep the envelope: the receipt date affects the 15-working-day deadline.'
        ] },
        { kind: 'warning', text: 'The ANSR portal does not suspend deadlines. If you do not have time to gather everything, submit a short defesa within the deadline and request access to the file; you can supplement it later if the authority allows it.' }
      ]
    },
    {
      id: 'prescription',
      title: '6. Watch the 2-year limitation period',
      content: [
        { kind: 'paragraph', text: 'For road contraordenações, a key deadline is often the prescrição do procedimento after 2 years from the offence date. If there is no final decision within that time, you can request arquivamento por prescrição. In practice, however, ANSR may refer to interruption or suspension of deadlines, so check the history of procedural acts.' },
        { kind: 'checklist', items: [
          'Note the offence date: this is the starting point.',
          'Check the dates of notifications, decisions and your submissions.',
          'If around 2 years have passed, submit a requerimento de prescrição.',
          'Do not confuse prescrição do procedimento with the payment deadline for an already final fine.',
          'If a decisão final arrives with a driving ban, the deadline for impugnação judicial is short — do not wait for prescrição.',
          'For serious fines with a risk of a driving ban, it makes sense to show the case to an advogado or solicitador.'
        ] },
        { kind: 'paragraph', text: 'The list and location of radares SINCRO can be conveniently cross-checked on radaresavista.pt: it publishes a map and list of fixed cameras, including SINCRO. This does not replace the ANSR file, but helps verify the location, direction and speed limit.' }
      ]
    }
  ],
  costs: [
    { label: 'Minor speeding offence', amountEURMin: 60, amountEURMax: 300, note: 'Typically up to +20 km/h in a built-up area or up to +30 km/h outside one for a passenger car.' },
    { label: 'Grave speeding offence', amountEURMin: 120, amountEURMax: 600, note: 'May lead to sanção acessória — a driving ban; it depends on the driver’s history and the offence category.' },
    { label: 'Muito grave speeding offence', amountEURMin: 300, amountEURMax: 2500, note: 'The range depends on how much the limit was exceeded; the risk of a driving ban is higher.' },
    { label: 'Registered letter with aviso de receção', amountEURMin: 4, amountEURMax: 8, note: 'CTT estimate; use this if you submit the defesa other than through the ANSR portal.' }
  ],
  sources: [
    {
      title: 'Portal das Contraordenações Rodoviárias ANSR',
      url: 'https://portalcontraordenacoes.ansr.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código da Estrada — art. 27 and contraordenações regime',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34474975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANSR — enforcement, radares and segurança rodoviária',
      url: 'https://www.ansr.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Radares à Vista — list and map of radares SINCRO',
      url: 'https://radaresavista.pt/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
