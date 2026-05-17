export default {
  editorialVoice: 'hackportugal',
  id: 'parking-fine-municipal',
  categoryId: 'auto_ownership',
  title: 'Multas de estacionamento: EMEL em Lisboa, Porto e outros municípios',
  tldr: 'Em Portugal, os municípios gerem o estacionamento pago, mas as multas seguem o Código da Estrada. A coima típica por estacionamento não pago/expirado numa zona com parquímetro é de 30–150 €. Em Lisboa, as notificações chegam frequentemente da EMEL; no Porto — através da Câmara Municipal do Porto/sistema municipal de avença; noutras cidades — através da Câmara ou do concessionário. A contestação costuma começar pelas instruções no aviso, e a defesa formal — junto da ANSR no prazo de 15 dias úteis após a notificação oficial.',
  tags: ['estacionamento', 'emel', 'porto', 'multas'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-fines',
      title: 'Quem emitiu concretamente a multa',
      content: [
        { kind: 'paragraph', text: 'Nas cidades de Portugal, o estacionamento pago na via pública é uma competência municipal. Por isso, no papel deixado no limpa-para-brisas ou na carta, você não verá “polícia de Portugal”, mas sim EMEL, Câmara Municipal, Polícia Municipal ou um concessionário privado que trabalha ao abrigo de contrato com o município.' },
        { kind: 'checklist', items: [
          'Lisboa: na maioria dos casos, EMEL — Empresa Municipal de Mobilidade e Estacionamento de Lisboa.',
          'Porto: o estacionamento é regulado pela Câmara Municipal do Porto; as autorizações de residente são frequentemente chamadas avença/avença de estacionamento.',
          'Cascais, Oeiras, Almada, Braga, Faro e outros: as regras das zonas, tarifas e formas de pagamento variam consoante o município.',
          'A base da multa continua normalmente a ser o Código da Estrada: o município regista a infração, e o processo de contraordenação pode seguir pela ANSR.',
          'Se o aviso tiver referência Multibanco, entidade/referência e número do auto, não deite o papel fora: é a sua chave para pagar ou contestar.',
          'Se chegou uma carta registada, os prazos começam a contar a partir da data de receção/notificação jurídica, e não da data da infração.'
        ] }
      ]
    },
    {
      id: 'amounts',
      title: 'Quanto custa a infração em 2026',
      content: [
        { kind: 'paragraph', text: 'Para estacionamento comum não pago ou expirado numa zona de estacionamento tarifado, aplica-se o intervalo de coima de 30–150 €. Isto não é uma “dívida pelo bilhete”, mas sim uma contraordenação administrativa. O pagamento voluntário mínimo é normalmente igual a 30 €, se não existir uma infração mais grave.' },
        { kind: 'checklist', items: [
          'Não pagou o parquímetro/aplicação: normalmente 30–150 €.',
          'Pagou, mas excedeu o tempo: normalmente o mesmo intervalo de 30–150 €.',
          'Estacionar num lugar para pessoas com deficiência, no passeio, numa passadeira, numa paragem, numa zona de cargas e descargas ou criando perigo pode ser mais caro e mais grave.',
          'Bloqueio da roda e remoção — custos separados além da coima: pagam-se pelo desbloqueamento/reboque/depósito de acordo com as tarifas municipais.',
          'O estacionamento indevido normalmente não implica perda de pontos na carta de condução, mas infrações perigosas podem ter consequências adicionais.',
          'Se o carro for alugado, a rent-a-car quase sempre acrescentará a sua própria taxa administrativa pela transmissão dos seus dados.'
        ] },
        { kind: 'warning', text: 'Não confunda um aviso de pagamento do serviço municipal de estacionamento com uma contraordenação oficial. O primeiro pode muitas vezes ser pago rapidamente por referência. O segundo é um processo jurídico com prazos processuais e direito a defesa.' }
      ]
    },
    {
      id: 'lisbon-emel',
      title: 'Lisboa: EMEL',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, a EMEL gere o estacionamento pago, dísticos de residente, fiscalização, bloqueio e remoção nas suas zonas. Se você estacionar numa zona verde/amarela/vermelha/castanha sem pagamento ou durante mais tempo do que o pago, um fiscal da EMEL pode deixar um aviso e encaminhar o processo.' },
        { kind: 'checklist', items: [
          'Verifique a matrícula, data, hora, rua e código da zona no aviso da EMEL.',
          'Compare com o pagamento na app/parquímetro: guarde o recibo, captura de ecrã, operação bancária MB WAY/cartão.',
          'Se tiver dístico de residente, verifique se estava válido exatamente nessa zona e para essa matrícula.',
          'Pode pagar através dos dados indicados no aviso, se reconhecer a infração.',
          'Se considerar que houve erro — apresente reclamação/contestação pelo canal indicado pela EMEL e junte provas.',
          'Quando chega a notificação oficial de contraordenação, a defesa formal segue as regras da ANSR e do Código da Estrada.'
        ] },
        { kind: 'warning', text: 'O dístico de residente EMEL não dá o direito de estacionar em qualquer lugar de Lisboa. Está associado a uma zona/condições concretas. Um erro frequente entre expats é mudar-se para uma freguesia vizinha e continuar a usar o dístico antigo.' }
      ]
    },
    {
      id: 'porto-and-others',
      title: 'Porto e outros municípios',
      content: [
        { kind: 'paragraph', text: 'No Porto, o estacionamento de residente é tratado através dos canais municipais da Câmara Municipal do Porto; no uso corrente é frequentemente chamado avença. A lógica é semelhante à de Lisboa: a autorização só é válida na zona atribuída e mediante o cumprimento das condições de residência, matrícula e documentos.' },
        { kind: 'checklist', items: [
          'Porto: consulte a área pessoal/serviços da Câmara Municipal do Porto e as condições da avença para a sua zona.',
          'Se vive no centro do Porto, trate da avença antes de começar a deixar regularmente o carro junto de casa.',
          'Noutras cidades, procure no site da Câmara Municipal a secção “estacionamento”, “parquímetros”, “avenças” ou “dísticos de residente”.',
          'As tarifas, o tempo máximo de estacionamento e os horários pagos podem mudar até entre ruas vizinhas.',
          'O pagamento através de Telpark, Via Verde Estacionar, MB WAY ou aplicação local não garante a zona correta: confirme a geolocalização e o código da zona.',
          'Se o município entregou o estacionamento a um concessionário, a contestação deve, ainda assim, ter uma via oficial e um número de processo.'
        ] },
        { kind: 'paragraph', text: 'Regra prática: se você se mudar entre Lisboa, Porto, Cascais, Oeiras, Almada ou Braga, trate o estacionamento como um sistema novo. Hábitos e aplicações antigos podem funcionar, mas os direitos de residente e as tarifas não são transferidos.' }
      ]
    },
    {
      id: 'contest',
      title: 'Como contestar sem perder prazos',
      content: [
        { kind: 'paragraph', text: 'A contestação divide-se em duas fases: reclamação informal ao serviço municipal/concessionário e defesa formal no processo de contraordenação. Se já chegou uma notificação oficial, oriente-se pelo prazo de 15 dias úteis para a defesa, indicado no Código da Estrada.' },
        { kind: 'checklist', items: [
          'Fotografe o local: sinais, marcações no pavimento, parquímetro, número da zona, ausência/ilegibilidade das placas.',
          'Guarde o comprovativo de pagamento: recibo, email, PDF da aplicação, extrato do cartão, MB WAY.',
          'Verifique a matrícula: erros numa letra/algarismo podem servir de fundamento para anulação ou correção.',
          'Verifique a hora: o fiscal pode ter registado a infração antes do fim efetivo do período pago.',
          'Se tinha residente permit/dístico/avença, junte comprovativo de validade à data da infração.',
          'Escreva de forma breve em português: “Venho apresentar defesa/reclamação…” + factos + anexos.',
          'Envie pelo canal indicado no aviso: EMEL, portal do município, ePorto/CMP, email, balcão ou carta registada.',
          'Após a notificação oficial da ANSR, não ignore a carta: o silêncio normalmente termina em decisão e cobrança.'
        ] },
        { kind: 'warning', text: 'O pagamento voluntário da coima mínima encerra muitas vezes a contestação como reconhecimento da infração. Se pretende contestar, verifique primeiro se o procedimento concreto permite pagar como depósito sem reconhecimento de culpa.' }
      ]
    },
    {
      id: 'avoid',
      title: 'Como evitar estas multas',
      content: [
        { kind: 'checklist', items: [
          'Adicione a matrícula às aplicações de estacionamento antecipadamente e confirme o país de registo.',
          'Ative notificações sobre o fim do tempo de estacionamento.',
          'Confirme sempre o código da zona no poste/parquímetro, e não apenas o GPS na aplicação.',
          'Não conte com “5 minutos”: os fiscais da EMEL e dos serviços municipais trabalham regularmente.',
          'Para a sua casa, trate do dístico/avença logo após o contrato de arrendamento, atestado de residência ou mudança de morada.',
          'Ao vender o carro, atualize o proprietário no Registo Automóvel, caso contrário as cartas podem continuar a chegar a si.',
          'Para carro alugado, guarde o contrato de aluguer e os recibos de estacionamento durante pelo menos 6 meses.',
          'Se saiu de Portugal, não ignore cartas enviadas para a morada antiga: dívidas e taxas administrativas podem alcançá-lo mais tarde.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Estacionamento pago comum não pago/expirado', amountEURMin: 30, amountEURMax: 150, note: 'Intervalo típico da coima segundo o Código da Estrada para estacionamento tarifado.' },
    { label: 'Bloqueio/remoção', amountEURMin: 0, amountEURMax: 200, note: 'Depende do município, da classe do veículo, do reboque e do tempo de depósito; é pago separadamente da multa.' },
    { label: 'Taxa administrativa da empresa de aluguer', amountEURMin: 20, amountEURMax: 60, note: 'Não é uma multa estatal, mas uma taxa da rental company pelo tratamento da notificação e transmissão dos dados do condutor.' }
  ],
  sources: [
    {
      title: 'EMEL — FAQ sobre multas, fiscalização e estacionamento',
      url: 'https://www.emel.pt/pt/faq/index.php?id=10',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código da Estrada — Decreto-Lei 114/94, versão no DRE',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34403375',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANSR — contraordenações rodoviárias e defesa',
      url: 'https://www.ansr.pt/Contraordenacoes/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal do Porto — serviços municipais de estacionamento',
      url: 'https://www.cm-porto.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
