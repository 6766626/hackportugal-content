export default {
  editorialVoice: 'hackportugal',
  id: 'bombeiros-voluntarios-pt',
  categoryId: 'emergency_rights',
  title: 'Bombeiros Voluntários: quando ligar e quanto custa',
  tldr: 'Em Portugal existem 469 corporações de bombeiros voluntários — não são um “serviço privado de bombeiros”, mas parte do sistema de proteção civil. Em caso de incêndio, acidente rodoviário, fuga de gás, desmaio, AVC, ferimento ou qualquer ameaça à vida, ligue 112: a saída de emergência para a população é gratuita. Liga-se diretamente para o quartel dos bombeiros para serviços não urgentes: o transporte de doentes não-urgente custa normalmente 40–80 € localmente; piquetes em eventos e apoio à segurança são pagos segundo as tabelas da corporação concreta.',
  tags: ['112', 'bombeiros', 'emergência', 'transporte'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-they-are',
      title: 'Quem são os Bombeiros Voluntários',
      content: [
        { kind: 'paragraph', text: 'Os Bombeiros Voluntários são corpos de bombeiros voluntários que funcionam através de associações humanitárias locais. Apagam incêndios, intervêm em acidentes rodoviários, salvam pessoas, ajudam em cheias, deslizamentos de terras, tempestades, fugas de gás e prestam primeiros socorros até à transferência do doente para o SNS/INEM.' },
        { kind: 'paragraph', text: 'Em 2026, existem em Portugal cerca de 469 corporações de bombeiros voluntários. Quase todos os concelhos têm o seu quartel, mas uma chamada de emergência é, ainda assim, encaminhada através do 112 e do Centro de Orientação de Doentes Urgentes/operadores da proteção civil.' },
        { kind: 'checklist', items: [
          'Incêndios em apartamento, casa, floresta, garagem, carro',
          'Acidentes rodoviários, pessoas encarceradas, carro capotado',
          'Cheiro a gás, explosão, risco de colapso',
          'Cheia, árvore na estrada, cabos perigosos',
          'Paragem respiratória, perda de consciência, AVC, enfarte',
          'Ferimento grave, hemorragia intensa, queimaduras',
          'Salvamento de pessoas ou animais de um local perigoso'
        ] }
      ]
    },
    {
      id: 'call-112-first',
      title: 'Em emergência: ligue primeiro 112',
      content: [
        { kind: 'paragraph', text: 'Se houver risco para a vida, a saúde, bens ou segurança pública — não procure o número do quartel local. Ligue 112. O operador determinará quem enviar: Bombeiros, INEM, PSP, GNR, Proteção Civil ou vários serviços ao mesmo tempo.' },
        { kind: 'checklist', items: [
          'Indique a morada exata: rua, número, freguesia, concelho, ponto de referência mais próximo',
          'Diga o que aconteceu: incêndio, acidente, queda, gás, inundação, pessoa inconsciente',
          'Quantos feridos existem e em que estado estão',
          'Se há crianças, idosos, pessoas com deficiência, animais',
          'Se há fogo, fumo, gás, eletricidade, risco de explosão',
          'Não desligue até o operador dizer',
          'Se não fala português, comece por “English please” ou “Russian interpreter if available”',
          'Depois da chamada, mantenha o telefone livre: a equipa pode voltar a ligar'
        ] },
        { kind: 'warning', text: 'Não transporte uma pessoa com sinais de AVC, enfarte, ferimento grave ou perda de consciência no seu próprio carro se for possível ligar 112. O transporte por conta própria pode fazer perder tempo e privar o doente de assistência precoce.' }
      ]
    },
    {
      id: 'what-is-free',
      title: 'O que é gratuito e o que pode ser pago',
      content: [
        { kind: 'paragraph', text: 'As operações de emergência através do 112 para a população não são pagas no local: combate a incêndio, salvamento, intervenção em acidente rodoviário, assistência médica urgente, evacuação em caso de ameaça à vida. Não lhe deve ser apresentada uma fatura por os bombeiros terem vindo a uma emergência real.' },
        { kind: 'paragraph', text: 'Normalmente são pagos os serviços sem carácter de urgência: transporte de doentes não-urgente, acompanhamento médico de eventos, piquete de viatura de bombeiros num evento privado, apoio preventivo de segurança, alguns serviços técnicos a pedido.' },
        { kind: 'checklist', items: [
          'Gratuito: incêndio, acidente rodoviário, salvamento, assistência médica urgente através do 112',
          'Gratuito: evacuação em caso de cheia, colapso, incêndio florestal por decisão da Proteção Civil',
          'Pago: transporte não urgente de doente para casa, clínica ou exame',
          'Pago: ambulance standby num evento desportivo ou empresarial',
          'Pago: piquete de bombeiros num evento, se for exigido pela Câmara Municipal ou licença',
          'Pago: serviços a pedido que não estejam ligados a perigo imediato',
          'Pode ser pago pelo SNS: transporte médico não urgente prescrito por médico e cumprindo os critérios do SNS'
        ] },
        { kind: 'warning', text: 'Se a situação estiver no limite, ligue 112 na mesma. Não tente decidir antecipadamente se é “suficientemente urgente”. Errar pelo lado da chamada de emergência é mais seguro do que atrasar em caso de AVC, incêndio ou fuga de gás.' }
      ]
    },
    {
      id: 'non-urgent-transport',
      title: 'Transporte de doentes não-urgente: como pedir',
      content: [
        { kind: 'paragraph', text: 'O transporte não urgente é quando o doente precisa de transporte sentado, deitado ou com acompanhamento, mas não existe ameaça imediata à vida. Por exemplo: ida a hemodiálise, fisioterapia, exame, alta hospitalar para casa, transporte de uma pessoa idosa entre casa e a clínica.' },
        { kind: 'substeps', items: [
          { id: 'check-sns', title: '1. Verifique se o SNS pode pagar', content: [
            { kind: 'paragraph', text: 'Se o transporte for clinicamente necessário, pergunte ao médico do SNS ou ao hospital sobre a requisição de transporte. Sem prescrição, a viagem é normalmente paga pelo doente.' }
          ] },
          { id: 'call-local-quartel', title: '2. Ligue para o quartel local', content: [
            { kind: 'paragraph', text: 'Para transporte não urgente, pode ligar diretamente para os Bombeiros Voluntários do seu concelho. Indique a morada de recolha, a morada de destino, a data, a hora, o estado do doente e se é necessário transporte em maca.' }
          ] },
          { id: 'confirm-price', title: '3. Confirme o preço antes da viagem', content: [
            { kind: 'paragraph', text: 'Uma referência típica para pagamento privado em 2026 é 40–80 € por uma viagem local, mas a tarifa depende da distância, tempo de espera, maca, oxigénio, horário noturno e regras da associação concreta.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'NIF do doente para recibo/fatura',
          'Número de utente, se a viagem estiver relacionada com o SNS',
          'Morada com andar, código da porta e elevador/sem elevador',
          'Contacto do acompanhante',
          'Se são necessários maca, cadeira de rodas, oxigénio',
          'Hora da consulta no hospital ou clínica',
          'Se é necessária viagem de regresso e espera'
        ] }
      ]
    },
    {
      id: 'events-and-private-services',
      title: 'Eventos, obras, segurança',
      content: [
        { kind: 'paragraph', text: 'Para um concerto, corrida desportiva, feira, evento empresarial ou filmagem, a Câmara Municipal, a PSP/GNR ou a licença do evento podem exigir plano de segurança, equipa de socorro ou viatura dos bombeiros no local. Isto não é 112, mas um serviço contratual.' },
        { kind: 'paragraph', text: 'O preço é calculado individualmente: duração, número de participantes, risco, distância, se é necessária ambulância, viatura de bombeiros, bombeiros sapadores/voluntários, enfermeiro ou médico. Peça orçamento por escrito à corporação local com antecedência, idealmente 2–4 semanas antes.' },
        { kind: 'checklist', items: [
          'Nome e tipo de evento',
          'Data, horas de montagem, realização e desmontagem',
          'Morada e planta do recinto, se existir',
          'Número previsto de participantes',
          'Álcool, pirotecnia, gás, geradores, palco',
          'Requisitos da Câmara Municipal ou da licença',
          'Se é necessária ambulância, viatura de bombeiros ou apenas equipa',
          'Quem assina o orçamento e paga a fatura'
        ] }
      ]
    },
    {
      id: 'practical-phrases',
      title: 'Frases em português para a chamada',
      content: [
        { kind: 'paragraph', text: 'Numa emergência, fale de forma breve. A morada e o tipo de ocorrência são mais importantes do que a gramática perfeita.' },
        { kind: 'checklist', items: [
          '“Há um incêndio.” — Há um incêndio.',
          '“Há fumo no prédio.” — Há fumo no edifício.',
          '“Cheira a gás.” — Cheira a gás.',
          '“Houve um acidente de carro.” — Houve um acidente rodoviário.',
          '“Há uma pessoa inconsciente.” — Há uma pessoa inconsciente.',
          '“A pessoa não respira.” — A pessoa não respira.',
          '“Preciso de uma ambulância.” — Preciso de uma ambulância.',
          '“A morada é…” — A morada é…',
          '“Não falo bem português.” — Não falo bem português.'
        ] },
        { kind: 'warning', text: 'Uma chamada falsa para os serviços de emergência pode implicar responsabilidade. Mas uma chamada de boa-fé perante receio real pela vida, incêndio, gás ou acidente rodoviário é uma ação normal e correta.' }
      ]
    }
  ],
  costs: [
    { label: 'Chamada de emergência através do 112', amountEUR: 0, note: 'Incêndio, acidente rodoviário, salvamento, assistência médica urgente; não é paga no local.' },
    { label: 'Transporte de doentes não-urgente', amountEURMin: 40, amountEURMax: 80, note: 'Referência para uma viagem local privada em 2026; a tarifa exata é definida pela associação/corporação local.' },
    { label: 'Piquete médico ou de bombeiros em evento', amountEURMin: 0, amountEURMax: 0, note: 'Preço apenas por orçamento: depende das horas, risco, viaturas, pessoal e requisitos da Câmara Municipal.' }
  ],
  sources: [
    { title: 'Bombeiros.pt — portal dos Bombeiros Portugueses e informação sobre corporações', url: 'https://www.bombeiros.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANEPC — Autoridade Nacional de Emergência e Proteção Civil', url: 'https://www.anepc.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — emergência médica e utilização do 112', url: 'https://www.sns24.gov.pt/guia/emergencia-medica/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
