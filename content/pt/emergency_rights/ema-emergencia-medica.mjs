export default {
  editorialVoice: 'hackportugal',
  id: 'ema-emergencia-medica',
  categoryId: 'emergency_rights',
  title: 'INEM e 112: emergência médica em Portugal',
  tldr: 'Em Portugal, em caso de risco de vida, ligue 112: o operador encaminha o caso médico para o CODU/INEM, onde decidem o que enviar — ambulância, SIV, VMER com médico ou TIP para transporte. Para residentes registados no SNS, a assistência de emergência e o encaminhamento pelo INEM para urgência hospitalar normalmente não têm pagamento; não residentes podem ser facturados através de seguro/EHIC. Diga a morada, o que aconteceu, idade, respiração/consciência, riscos e não desligue.',
  tags: ['112', 'inem', 'ambulância', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-call',
      title: 'Quando ligar para o 112',
      content: [
        { kind: 'paragraph', text: '112 é o número europeu único de emergência. Em Portugal, as chamadas médicas, após a triagem inicial, são encaminhadas para o CODU — Centro de Orientação de Doentes Urgentes, o centro de despacho do INEM.' },
        { kind: 'checklist', items: [
          'perda de consciência, convulsões, confusão mental',
          'dor aguda no peito, suspeita de enfarte ou AVC',
          'dificuldade em respirar, asfixia, reacção alérgica grave',
          'trauma grave, acidente rodoviário, queda de altura, hemorragia',
          'queimaduras, afogamento, electrocussão',
          'intoxicação, sobredosagem, tentativa de suicídio',
          'gravidez com dor intensa, hemorragia ou parto fora do hospital',
          'criança em estado grave: prostração, coloração azulada, febre alta com convulsões'
        ] },
        { kind: 'warning', text: 'Se a situação não puser a vida em risco, ligue primeiro para o SNS 24: 808 24 24 24. Mas, se tiver dúvidas entre “esperar” e “112”, escolha 112 — o operador decidirá o nível de urgência.' }
      ]
    },
    {
      id: 'how-dispatch-works',
      title: 'Como o 112 e o INEM encaminham a chamada',
      content: [
        { kind: 'paragraph', text: 'Primeiro, o operador do 112 confirma o local, o tipo de ocorrência e a segurança. Os casos médicos são encaminhados para o CODU/INEM. Aí, um profissional de saúde regulador faz perguntas e escolhe o recurso: aconselhamento telefónico, ambulância, SIV, VMER ou transporte para urgência hospitalar.' },
        { kind: 'checklist', items: [
          'Urgência hospitalar — encaminhamento para o serviço de urgência hospitalar; se necessário, será transportado por ambulância INEM/ bombeiros.',
          'Ambulância de socorro — emergência básica para avaliação, primeiros socorros e transporte para o hospital.',
          'SIV — Suporte Imediato de Vida: viatura com capacidades avançadas de estabilização, normalmente com enfermeiro e técnico de emergência pré-hospitalar.',
          'VMER — Viatura Médica de Emergência e Reanimação: médico e enfermeiro para casos graves, reanimação, enfarte, AVC, trauma grave.',
          'TIP — Transporte Inter-hospitalar Pediátrico: transporte especializado de recém-nascidos/crianças entre hospitais, não é um “táxi para a urgência” normal.',
          'Helicóptero de emergência médica — para locais remotos, ilhas/zonas de difícil acesso ou traumas graves, quando for mais rápido e clinicamente justificado.'
        ] },
        { kind: 'paragraph', text: 'Você não escolhe o tipo de viatura. A decisão é tomada pelo CODU, de acordo com o protocolo, o estado do doente e a disponibilidade dos recursos mais próximos.' }
      ]
    },
    {
      id: 'what-to-say',
      title: 'O que dizer ao operador em português',
      content: [
        { kind: 'paragraph', text: 'Fale de forma breve. Se o seu português for limitado, comece com “Falo pouco português. Preciso de ajuda médica.” Normalmente, o operador fará perguntas fechadas; responda “sim/não”, com números e a morada.' },
        { kind: 'checklist', items: [
          '“Preciso de uma ambulância.” — Preciso de uma ambulância.',
          '“A morada é…” — Morada: rua, número da porta, andar, código da porta.',
          '“Estou em Lisboa/Porto/…” — Estou na cidade de…',
          '“A pessoa está inconsciente.” — A pessoa está inconsciente.',
          '“Não respira / respira com dificuldade.” — Não respira / respira com dificuldade.',
          '“Tem dor no peito.” — Dor no peito.',
          '“Pode ser AVC.” — Pode ser um AVC.',
          '“Houve um acidente de carro.” — Houve um acidente rodoviário.',
          '“Há muito sangue.” — Há uma hemorragia forte.',
          '“Tem … anos.” — Tem … anos.',
          '“Sou estrangeiro, mas tenho NIF/número de utente.” — Sou estrangeiro, mas tenho NIF/número de utente.',
          '“O meu número é…” — O meu telefone é…'
        ] },
        { kind: 'warning', text: 'Não desligue primeiro. O operador pode dar instruções sobre CPR/massagem cardíaca, controlo de hemorragia ou posicionamento do doente até à chegada da equipa.' }
      ]
    },
    {
      id: 'before-arrival',
      title: 'Enquanto a ajuda está a caminho',
      content: [
        { kind: 'checklist', items: [
          'Abra a porta do prédio ou envie alguém para receber a equipa à entrada.',
          'Afaste animais, liberte a passagem, acenda as luzes.',
          'Prepare Cartão de Cidadão/autorização de residência/passaporte, número de utente, lista de medicamentos e alergias.',
          'Não dê comida, álcool ou medicamentos, salvo se o operador lhe disser para o fazer.',
          'Em caso de perda de consciência com respiração, coloque a pessoa na posição lateral de segurança.',
          'Se não houver respiração — inicie compressões torácicas, seguindo as instruções do 112.',
          'Em caso de hemorragia, pressione directamente a ferida com um pano limpo.',
          'Em caso de suspeita de AVC, memorize a hora de início dos sintomas — isto é crítico para o tratamento.',
          'Não transporte você próprio um doente grave se o operador tiver dito para esperar pelo INEM.'
        ] },
        { kind: 'paragraph', text: 'Em Portugal, a ambulância pode ser do INEM, dos bombeiros ou da Cruz Vermelha, a operar no sistema de emergência. É normal: o importante não é o logótipo, mas o facto de o recurso ter sido enviado pelo CODU/INEM.' }
      ]
    },
    {
      id: 'payment',
      title: 'Pagamento: quando é gratuito e quando pode haver factura',
      content: [
        { kind: 'paragraph', text: 'A própria chamada para o 112 é gratuita. Para pessoas que vivem em Portugal e estão registadas no SNS com número de utente, a assistência de emergência do INEM e o encaminhamento para urgência hospitalar através do INEM normalmente não são pagos no local.' },
        { kind: 'paragraph', text: 'No SNS, desde 2022, a maioria das taxas moderadoras foi abolida, mas nas urgências continua a haver uma lógica importante: se chegar à urgência por encaminhamento do INEM/SNS 24/médico ou se for internado, a taxa moderadora não deve ser aplicada. Se for à urgência por iniciativa própria, sem encaminhamento e sem internamento, o hospital pode aplicar as regras de pagamento em vigor para o seu estatuto.' },
        { kind: 'checklist', items: [
          'Residente com número de utente: apresente o utente/autorização de residência ou outro documento no registo do hospital.',
          'Cidadão da UE/EEE/Suíça: tenha consigo o EHIC/CESD, caso contrário podem emitir factura como doente privado.',
          'Turista ou novo expat sem SNS: é necessário travel insurance/private insurance; o hospital pode facturar mais tarde.',
          'Crianças, grávidas e situações de emergência recebem assistência independentemente dos documentos; a questão do pagamento é resolvida após a estabilização.',
          'O seguro privado não substitui o 112 em caso de risco de vida: primeiro 112, depois a seguradora.'
        ] },
        { kind: 'warning', text: 'Não recuse ligar para o 112 por medo da factura. Numa emergência, a prioridade é a estabilização e o transporte para a urgência hospitalar adequada.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos expats',
      content: [
        { kind: 'checklist', items: [
          'Ligar para uma clínica privada com sintomas de AVC/enfarte em vez de ligar para o 112.',
          'Ir de Uber para um hospital aleatório em estado grave — pode perder tempo e acabar num centro não adequado ao caso.',
          'Não saber a morada exacta da habitação: guarde no telefone a morada, código postal, andar e pontos de referência.',
          'Não tratar do número de utente após a mudança — no hospital vão ajudar na mesma, mas a administração e as facturas ficam mais complicadas.',
          'Não informar os medicamentos: anticoagulantes, insulina, antidepressivos e alergias são importantes para a equipa.',
          'Desligar depois de ouvir “ambulância” — o operador pode continuar a triagem ou dar instruções.',
          'Confundir 112 e SNS 24: 112 — risco de vida; SNS 24 — navegação médica urgente, mas não crítica.'
        ] },
        { kind: 'paragraph', text: 'Mínimo prático: guarde no telefone “112”, “SNS 24 — 808 24 24 24”, número de utente, morada em português e contacto ICE — In Case of Emergency.' }
      ]
    }
  ],
  costs: [
    { label: 'Chamada para o 112', amountEUR: 0, note: 'Gratuita a partir de telemóvel e telefone fixo.' },
    { label: 'Assistência de emergência do INEM para residente no SNS', amountEUR: 0, note: 'Normalmente sem pagamento no local quando há encaminhamento pelo 112/INEM; apresente o número de utente.' },
    { label: 'Urgência sem encaminhamento SNS/INEM', amountEURMin: 0, amountEURMax: 0, note: 'Pode depender do estatuto do doente e das regras do SNS/seguro; com encaminhamento pelo INEM, a taxa moderadora normalmente não se aplica.' }
  ],
  sources: [
    { title: 'INEM — site oficial e informação sobre emergência médica', url: 'https://www.inem.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 234/81 — criação e base legal do INEM, DRE', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1981-34546275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contacto 808 24 24 24 e navegação médica', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
