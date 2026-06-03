export default {
  editorialVoice: 'hackportugal',
  id: 'sos-voz-amiga-suicidio',
  categoryId: 'emergency_rights',
  title: 'SOS Voz Amiga and emergency psychological support lines',
  tldr: 'If there is a risk of suicide or the person is already in danger, call 112 or go to a hospital Urgência. For conversation and de-escalation in Portugal, SOS Voz Amiga 213 544 545, SNS 24 apoio psicológico 808 24 24 24, Linha de Emergência Social 144, SOS Criança 116 111, Linha SOS Estudante and Vodafone SOS Saúde Mental are available. Most lines are free or charged at your operator’s rate; you can call without a NIF, residence permit or SNS registration.',
  tags: ['suicide', 'psychology', '112', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'immediate-risk',
      title: '1. If the risk is right now: 112 and Urgência',
      content: [
        {
          kind: 'paragraph', text: 'If a person says they are going to die, has already taken pills, is cutting themselves, is standing by a window/bridge, has disappeared leaving a farewell message, or you cannot ensure safety, this is not “just a crisis”. Call 112. The operator will connect you with INEM/PSP/GNR and send an ambulance or the police.'
        },
        {
          kind: 'checklist',
          items: [
            'Call 112 — free, 24/7, works from any phone.',
            'Say: “risco de suicídio” or “tentativa de suicídio”.',
            'Give the exact address: rua, número, andar, código postal, concelho.',
            'Say whether there are weapons, medicines, alcohol, drugs, height, water, a car.',
            'Do not leave the person alone until help arrives.',
            'Remove pills, knives, ropes, car keys, alcohol.',
            'If the person is unconscious, not breathing or there is bleeding, say this first.',
            'If you are not nearby, ask a neighbour, porteiro, reception, PSP/GNR to check the address.'
          ]
        },
        {
          kind: 'warning', text: 'Support hotlines do not replace 112. If there is immediate danger to life, call 112 first, then a psychological support line for follow-up.'
        }
      ]
    },
    {
      id: 'main-lines',
      title: '2. Numbers worth saving 📞',
      content: [
        {
          kind: 'paragraph', text: 'In a crisis, you do not need to prove your status in Portugal. NIF, NISS, residence permit, número de utente and knowledge of Portuguese are not conditions for emergency help. If you do not speak Portuguese, start with “English please” or ask someone nearby to help.'
        },
        {
          kind: 'checklist',
          items: [
            '112 — immediate danger to life, suicide attempt, self-harm, psychosis, aggression, disappearance with risk.',
            'SOS Voz Amiga — 213 544 545 (also 912 802 669 / 963 524 660): emotional support and suicide prevention; open daily from 15:30 to 00:30, not 24/7. Outside those hours use 112, SNS 24 808 24 24 24 or Linha de Emergência Social 144.',
            'SNS 24 — 808 24 24 24: choose apoio psicológico / aconselhamento psicológico; available 24/7, you can call without going to a Centro de Saúde.',
            'Linha de Emergência Social — 144: free, 24/7; if the crisis is linked to homelessness, violence, lack of food, children, older people, urgent social risk.',
            'SOS Criança — 116 111: free line for children and situations involving children; suitable for violence, neglect, threats, running away from home.',
            'Linha SOS Estudante — for students and young people in crisis; schedules and numbers may change during the academic year, check before calling.',
            'Vodafone SOS Saúde Mental — an operator initiative for psychological support; check current access on the Vodafone website, as campaign formats change.',
            'If a number does not answer: do not wait for the “perfect” line — call 112 or SNS 24.'
          ]
        },
        {
          kind: 'warning', text: '808 numbers in Portugal are usually charged as chamadas de valor acrescentado/operator tariff or a local call; 112, 144 and 116 111 should be free. If you have no credit, use 112.'
        }
      ]
    },
    {
      id: 'what-to-say',
      title: '3. What to tell the operator',
      content: [
        {
          kind: 'paragraph', text: 'In a crisis, it is normal to speak briefly and chaotically. The main thing is to communicate the risk, the location and what has already happened. The operator does not need a “well-told” story.'
        },
        {
          kind: 'checklist',
          items: [
            '“Estou com pensamentos suicidas” — I am having suicidal thoughts.',
            '“A pessoa está em risco de suicídio” — the person is at risk of suicide.',
            '“Houve uma tentativa de suicídio” — there has been a suicide attempt.',
            '“Tomou comprimidos / álcool / drogas” — they have taken pills / alcohol / drugs.',
            '“Tem uma faca / arma / está numa janela / ponte” — they have a knife / weapon / are at a window / on a bridge.',
            '“Não consigo garantir a segurança” — I cannot guarantee safety.',
            '“Preciso de ajuda em inglês/russo” — I need help in English/Russian.',
            '“Morada completa é…” — the full address is...',
            '“Estou sozinho/a com a pessoa” — I am alone with the person.'
          ]
        },
        {
          kind: 'paragraph', text: 'If you are calling for someone else, do not promise complete confidentiality. When life is at risk, you can and should pass the address and facts to the emergency services.'
        }
      ]
    },
    {
      id: 'supporting-someone',
      title: '4. How to act when you are with someone in crisis',
      content: [
        {
          kind: 'paragraph', text: 'The aim of the first 20–30 minutes is not to “cure” the person, but to reduce the risk until help arrives or until contact with a support line is made. Speak calmly, in simple phrases, without arguments about the meaning of life.'
        },
        {
          kind: 'checklist',
          items: [
            'Ask directly: “Are you thinking about suicide?” — this does not “put the idea in their head”; it helps assess the risk.',
            'Ask: “Do you have a plan? Means? When?” — specifics matter more than general words.',
            'Remove access to means of self-harm, but do not get into a fight.',
            'Stay nearby or arrange for another adult to be nearby.',
            'Say: “I am with you”, “we are calling for help now”, “you do not have to solve everything today”.',
            'Do not say: “do not be dramatic”, “others have it worse”, “think of your family”, “it is a sin”.',
            'Do not leave the person to “sleep it off” if there have been pills, alcohol or injuries.',
            'After stabilisation, help them make an appointment with a médico de família, psicólogo or psiquiatra.'
          ]
        },
        {
          kind: 'warning', text: 'If the person becomes aggressive, locks themselves in, runs away or there is a weapon, move to safety and call 112. Do not try to physically restrain them on your own.'
        }
      ]
    },
    {
      id: 'after-crisis',
      title: '5. After the acute episode: where to go next',
      content: [
        {
          kind: 'paragraph', text: 'After a call or hospitalisation, a plan is needed for the next few days: medical contact, a safe environment, medicines under supervision, one contact person and a repeat call to a support line if things worsen.'
        },
        {
          kind: 'checklist',
          items: [
            'Through SNS: call SNS 24 808 24 24 24 or book with a médico de família at a Centro de Saúde.',
            'If there is urgência psiquiátrica at your hospital público, you can go directly if the risk returns.',
            'If you are a student, contact the serviços de ação social / gabinete de apoio psicológico at your university.',
            'If the crisis is linked to housing, violence, food or children, call 144 and ask for avaliação social urgente.',
            'If a child has been affected, call 116 111, the CPCJ for the place of residence, or 112 in immediate danger.',
            'If you have private insurance, check cobertura de psiquiatria/psicologia and copagamento.',
            'Make a “safety plan”: 3 contacts, nearest urgência, what to remove from the home, what to do at night.',
            'Save the numbers in your phone under simple names: 112, SNS 24, SOS Voz Amiga, 144.'
          ]
        },
        {
          kind: 'paragraph', text: 'For expats, an important practical point: psychological help in the private sector is often faster, but if there is a risk of suicide, do not wait for an available slot. Urgência and 112 are the right route even without Portuguese documents.'
        }
      ]
    }
  ],
  costs: [
    {
      label: '112',
      amountEUR: 0,
      note: 'European emergency number, free 24/7.'
    },
    {
      label: 'Linha de Emergência Social 144',
      amountEUR: 0,
      note: 'Free social emergency line.'
    },
    {
      label: 'SOS Criança 116 111',
      amountEUR: 0,
      note: 'Free line for children and situations involving children.'
    },
    {
      label: 'SNS 24 808 24 24 24',
      amountEURMin: 0,
      amountEURMax: 1,
      note: 'Cost depends on your operator’s tariff; if life is at risk, use the free 112 number.'
    }
  ],
  sources: [
    {
      title: 'SOS Voz Amiga — official emotional support line',
      url: 'https://www.sosvozamiga.org',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS — saúde mental and prevenção do suicídio',
      url: 'https://www.dgs.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24 — aconselhamento psicológico',
      url: 'https://www.sns24.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — Linha Nacional de Emergência Social 144',
      url: 'https://www.seg-social.pt/linha-nacional-de-emergencia-social-144',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
