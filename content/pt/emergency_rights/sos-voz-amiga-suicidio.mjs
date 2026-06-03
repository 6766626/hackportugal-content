export default {
  editorialVoice: 'hackportugal',
  id: 'sos-voz-amiga-suicidio',
  categoryId: 'emergency_rights',
  title: 'SOS Voz Amiga e linhas de apoio psicológico de emergência',
  tldr: 'Se houver risco de suicídio ou a pessoa já estiver em perigo — ligue 112 ou dirija-se à Urgência hospitalar. Para conversar e desescalar a situação em Portugal, estão disponíveis a SOS Voz Amiga 213 544 545, o apoio psicológico do SNS 24 808 24 24 24, a Linha de Emergência Social 144, a SOS Criança 116 111, a Linha SOS Estudante e a Vodafone SOS Saúde Mental. A maioria das linhas é gratuita ou cobrada de acordo com o tarifário do operador; pode ligar sem NIF, autorização de residência ou inscrição no SNS.',
  tags: ['suicídio', 'psicologia', '112', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'immediate-risk',
      title: '1. Se o risco for imediato: 112 e Urgência',
      content: [
        {
          kind: 'paragraph', text: 'Se a pessoa disser que se vai matar, já tiver tomado comprimidos, estiver a cortar-se, estiver junto a uma janela/ponte, tiver desaparecido com uma mensagem de despedida ou se você não conseguir garantir a segurança — isto não é “apenas uma crise”. Ligue 112. O operador encaminhará para o INEM/PSP/GNR e enviará uma ambulância ou a polícia.'
        },
        {
          kind: 'checklist',
          items: [
            'Ligue 112 — gratuito, 24/7, funciona a partir de qualquer telefone.',
            'Diga: “risco de suicídio” ou “tentativa de suicídio”.',
            'Indique a morada exacta: rua, número, andar, código postal, concelho.',
            'Informe se há armas, medicamentos, álcool, drogas, altura, água, carro.',
            'Não deixe a pessoa sozinha até a ajuda chegar.',
            'Retire comprimidos, facas, cordas, chaves do carro, álcool.',
            'Se a pessoa estiver inconsciente, não respirar ou houver hemorragia — diga isso primeiro.',
            'Se não estiver perto, peça a um vizinho, porteiro, recepção, PSP/GNR para verificar a morada.'
          ]
        },
        {
          kind: 'warning', text: 'As linhas de apoio não substituem o 112. Se houver perigo imediato para a vida, primeiro 112, depois uma linha de apoio psicológico para acompanhamento.'
        }
      ]
    },
    {
      id: 'main-lines',
      title: '2. Números que vale a pena guardar 📞',
      content: [
        {
          kind: 'paragraph', text: 'Numa crise, não é preciso provar o seu estatuto em Portugal. NIF, NISS, autorização de residência, número de utente e conhecimento de português não são condição para receber ajuda de emergência. Se não falar português, comece por “English please” ou peça ajuda a alguém que esteja por perto.'
        },
        {
          kind: 'checklist',
          items: [
            '112 — perigo de vida, tentativa de suicídio, automutilação, psicose, agressividade, desaparecimento com risco.',
            'SOS Voz Amiga — 213 544 545 (também 912 802 669 / 963 524 660): apoio emocional e prevenção do suicídio; funciona diariamente das 15:30 às 00:30, não 24 horas. Fora desse horário use o 112, o SNS 24 808 24 24 24 ou a Linha de Emergência Social 144.',
            'SNS 24 — 808 24 24 24: escolha apoio psicológico / aconselhamento psicológico; funciona 24/7, pode ligar sem ir ao Centro de Saúde.',
            'Linha de Emergência Social — 144: gratuita, 24/7; se a crise estiver relacionada com situação de sem-abrigo, violência, falta de comida, crianças, idosos, risco social urgente.',
            'SOS Criança — 116 111: linha gratuita para crianças e situações com crianças; adequada em casos de violência, negligência, ameaças, fuga de casa.',
            'Linha SOS Estudante — para estudantes e jovens em crise; os horários e números podem mudar consoante o ano lectivo, confirme antes de ligar.',
            'Vodafone SOS Saúde Mental — iniciativa do operador para apoio psicológico; confirme o acesso actual no site da Vodafone, pois o formato das campanhas muda.',
            'Se o número não atender: não espere pela linha “ideal” — ligue 112 ou SNS 24.'
          ]
        },
        {
          kind: 'warning', text: 'Os números 808 em Portugal são normalmente cobrados como chamadas de valor acrescentado/tarifário do operador ou chamada local; 112, 144 e 116 111 devem ser gratuitos. Se não tiver saldo, use o 112.'
        }
      ]
    },
    {
      id: 'what-to-say',
      title: '3. O que dizer ao operador',
      content: [
        {
          kind: 'paragraph', text: 'Numa crise, é normal falar de forma breve e confusa. O essencial é transmitir o risco, o local e o que já aconteceu. O operador não precisa de uma história “bem contada”.'
        },
        {
          kind: 'checklist',
          items: [
            '“Estou com pensamentos suicidas” — tenho pensamentos suicidas.',
            '“A pessoa está em risco de suicídio” — a pessoa está em risco de suicídio.',
            '“Houve uma tentativa de suicídio” — houve uma tentativa de suicídio.',
            '“Tomou comprimidos / álcool / drogas” — tomou comprimidos / álcool / drogas.',
            '“Tem uma faca / arma / está numa janela / ponte” — tem uma faca / arma / está numa janela / ponte.',
            '“Não consigo garantir a segurança” — não consigo garantir a segurança.',
            '“Preciso de ajuda em inglês/russo” — preciso de ajuda em inglês/russo.',
            '“Morada completa é…” — a morada completa é...',
            '“Estou sozinho/a com a pessoa” — estou sozinho/a com esta pessoa.'
          ]
        },
        {
          kind: 'paragraph', text: 'Se estiver a ligar por outra pessoa, não prometa confidencialidade total. Quando há risco de vida, pode e deve comunicar a morada e os factos aos serviços de ajuda.'
        }
      ]
    },
    {
      id: 'supporting-someone',
      title: '4. Como agir junto de uma pessoa em crise',
      content: [
        {
          kind: 'paragraph', text: 'O objectivo dos primeiros 20–30 minutos não é “curar”, mas reduzir o risco até a ajuda chegar ou até haver contacto com uma linha de apoio. Fale com calma, em frases simples, sem discussões sobre o sentido da vida.'
        },
        {
          kind: 'checklist',
          items: [
            'Pergunte directamente: “Estás a pensar em suicidar-te?” — isto não “dá a ideia”, ajuda a avaliar o risco.',
            'Pergunte: “Tens um plano? Meios? Quando?” — os detalhes concretos são mais importantes do que frases gerais.',
            'Retire o acesso a meios de automutilação, mas não entre em confronto físico.',
            'Fique por perto ou organize para que outro adulto esteja presente.',
            'Diga: “Estou contigo”, “vamos chamar ajuda agora”, “não é preciso resolver tudo hoje”.',
            'Não diga: “não dramatizes”, “há quem esteja pior”, “pensa na família”, “isso é pecado”.',
            'Não deixe a pessoa “dormir para passar”, se tiver tomado comprimidos, álcool ou houver ferimentos.',
            'Depois da estabilização, ajude a marcar consulta com médico de família, psicólogo ou psiquiatra.'
          ]
        },
        {
          kind: 'warning', text: 'Se a pessoa se tornar agressiva, se fechar, fugir ou houver armas — afaste-se para um local seguro e ligue 112. Não tente contê-la fisicamente sozinho/a.'
        }
      ]
    },
    {
      id: 'after-crisis',
      title: '5. Depois do episódio agudo: para onde ir a seguir',
      content: [
        {
          kind: 'paragraph', text: 'Depois de uma chamada ou hospitalização, é necessário um plano para os dias seguintes: contacto médico, ambiente seguro, medicação controlada, uma pessoa de contacto e nova chamada para a linha se houver agravamento.'
        },
        {
          kind: 'checklist',
          items: [
            'Através do SNS: chamada para o SNS 24 808 24 24 24 ou marcação com médico de família no Centro de Saúde.',
            'Se houver urgência psiquiátrica no seu hospital público — pode dirigir-se directamente em caso de novo risco.',
            'Se for estudante — contacte os serviços de ação social / gabinete de apoio psicológico da sua universidade.',
            'Se a crise estiver relacionada com habitação, violência, comida ou crianças — ligue 144 e peça avaliação social urgente.',
            'Se a vítima for uma criança — 116 111, CPCJ da área de residência ou 112 em caso de perigo imediato.',
            'Se tiver seguro privado — verifique a cobertura de psiquiatria/psicologia e o copagamento.',
            'Elabore um “safety plan”: 3 contactos, a urgência mais próxima, o que retirar de casa, o que fazer durante a noite.',
            'Guarde os números no telemóvel com nomes simples: 112, SNS 24, SOS Voz Amiga, 144.'
          ]
        },
        {
          kind: 'paragraph', text: 'Para expats, um ponto prático importante: o apoio psicológico no sector privado é muitas vezes mais rápido, mas em caso de risco de suicídio não espere por uma vaga. A Urgência e o 112 são o caminho correcto mesmo sem documentos portugueses.'
        }
      ]
    }
  ],
  costs: [
    {
      label: '112',
      amountEUR: 0,
      note: 'Número europeu de emergência, gratuito 24/7.'
    },
    {
      label: 'Linha de Emergência Social 144',
      amountEUR: 0,
      note: 'Linha gratuita de emergência social.'
    },
    {
      label: 'SOS Criança 116 111',
      amountEUR: 0,
      note: 'Linha gratuita para crianças e situações com crianças.'
    },
    {
      label: 'SNS 24 808 24 24 24',
      amountEURMin: 0,
      amountEURMax: 1,
      note: 'O custo depende do tarifário do operador; em caso de ameaça à vida, use o 112 gratuito.'
    }
  ],
  sources: [
    {
      title: 'SOS Voz Amiga — linha oficial de apoio emocional',
      url: 'https://www.sosvozamiga.org',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS — saúde mental e prevenção do suicídio',
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
