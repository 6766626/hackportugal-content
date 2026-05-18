export default {
  editorialVoice: 'hackportugal',
  id: 'parking-fine-municipal',
  categoryId: 'auto_ownership',
  title: 'Multas de estacionamento: EMEL em Lisboa, Porto e outros municípios',
  tldr: 'Em Portugal, os municípios gerem o estacionamento pago, mas as multas seguem o Código da Estrada. A multa típica por estacionamento não pago/com tempo expirado numa zona com parquímetro é de 30–150 €.\n\nEm Lisboa, as notificações chegam frequentemente da EMEL; no Porto — através da Câmara Municipal do Porto/sistema municipal de avença; noutras cidades — através da Câmara ou de um concessionário. A contestação normalmente começa pelas instruções da notificação, e a defesa formal — junto da ANSR no prazo de 15 dias úteis após a notificação oficial.',
  tags: ['estacionamento', 'emel', 'porto', 'multas'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-fines',
      title: 'Quem emitiu exatamente a multa',
      content: [
        { kind: 'paragraph', text: 'Nas cidades portuguesas, o estacionamento pago na via pública é uma competência municipal. Por isso, no papel deixado no para-brisas ou na carta, você não verá “polícia de Portugal”, mas sim EMEL, Câmara Municipal, Polícia Municipal ou um concessionário privado que trabalha por contrato com o município.' },
        { kind: 'checklist', items: [
          'Lisboa: na maioria dos casos, EMEL — Empresa Municipal de Mobilidade e Estacionamento de Lisboa.',
          'Porto: o estacionamento é regulado pela Câmara Municipal do Porto; as autorizações de residente são frequentemente chamadas avença/avença de estacionamento.',
          'Cascais, Oeiras, Almada, Braga, Faro e outros: as regras das zonas, tarifas e formas de pagamento variam consoante o município.',
          'A base sancionatória continua normalmente a ser o Código da Estrada: o município regista a infração, e o processo de contraordenação pode seguir pela ANSR.',
          'Se a notificação tiver referência Multibanco, entidade/referência e número de auto, não deite fora o papel: é a sua chave para pagar ou contestar.',
          'Se receber uma carta registada, os prazos começam a contar a partir da data de receção/notificação jurídica, e não da data da infração.'
        ] }
      ]
    },
    {
      id: 'amounts',
      title: 'Quanto custa a infração em 2026',
      content: [
        { kind: 'paragraph', text: 'Para o estacionamento normal não pago ou com tempo expirado numa zona de estacionamento tarifado, aplica-se uma coima entre 30–150 €. Isto não é uma “dívida do bilhete”, mas uma contraordenação administrativa. O pagamento voluntário mínimo é normalmente igual a 30 €, se não existir uma infração mais grave.' },
        { kind: 'checklist', items: [
          'Não pagou no parquímetro/aplicação: normalmente 30–150 €.',
          'Pagou, mas excedeu o tempo: normalmente o mesmo intervalo de 30–150 €.',
          'Estacionar em lugar para pessoas com deficiência, no passeio, numa passadeira, numa paragem, numa zona de cargas e descargas ou criando perigo pode ser mais caro e mais grave.',
          'Bloqueio da roda e remoção — despesas separadas além da coima: pagas por desbloqueamento/reboque/depósito segundo as tarifas municipais.',
          'O estacionamento indevido normalmente não implica perda de pontos na carta de condução, mas infrações perigosas podem ter consequências adicionais.',
          'Se o carro for alugado, a empresa de aluguer quase sempre acrescentará a sua própria taxa administrativa pela transmissão dos seus dados.'
        ] },
        { kind: 'warning', text: 'Não confunda um aviso de pagamento do serviço municipal de estacionamento com uma contraordenação oficial. O primeiro pode muitas vezes ser pago rapidamente por referência. O segundo é um processo jurídico com prazos processuais e direito a defesa.' }
      ]
    },
    {
      id: 'lisbon-emel',
      title: 'Lisboa: EMEL',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, a EMEL gere o estacionamento pago, os dísticos de residente, a fiscalização, o bloqueio e a remoção nas suas zonas. Se estacionar numa zona verde/amarela/vermelha/castanha sem pagamento ou por mais tempo do que o pago, o fiscal da EMEL pode deixar um aviso e encaminhar o processo.' },
        { kind: 'checklist', items: [
          'Verifique a matrícula, data, hora, rua e código da zona na notificação da EMEL.',
          'Compare com o pagamento na app/parquímetro: guarde recibo, captura de ecrã, operação bancária MB WAY/cartão.',
          'Se tiver dístico de residente, verifique se estava válido exatamente nessa zona e para essa matrícula.',
          'Pode pagar através dos dados indicados na notificação, se reconhecer a infração.',
          'Se considerar que houve erro — apresente reclamação/contestação pelo canal indicado pela EMEL e junte provas.',
          'Quando chega a notificação oficial de contraordenação, a defesa formal segue as regras da ANSR e do Código da Estrada.'
        ] },
        { kind: 'warning', text: 'O dístico de residente da EMEL não dá o direito de estacionar em qualquer lugar em Lisboa. Está associado a uma zona/condições específicas. Um erro frequente dos expats é mudar-se para uma freguesia vizinha e continuar a usar o dístico antigo.' }
      ]
    },
    {
      id: 'porto-and-others',
      title: 'Porto e outros municípios',
      content: [
        { kind: 'paragraph', text: 'No Porto, o estacionamento de residente é tratado através dos canais municipais da Câmara Municipal do Porto; no uso corrente, isto é muitas vezes chamado avença. A lógica é semelhante à de Lisboa: a autorização só é válida na zona atribuída e mediante o cumprimento das condições de residência, matrícula e documentação.' },
        { kind: 'checklist', items: [
          'Porto: verifique a área pessoal/serviços da Câmara Municipal do Porto e as condições da avença para a sua zona.',
          'Se vive no centro do Porto, trate da avença antes de começar a deixar regularmente o carro junto de casa.',
          'Noutras cidades, procure no site da Câmara Municipal a secção “estacionamento”, “parquímetros”, “avenças” ou “dísticos de residente”.',
          'Tarifas, tempo máximo de estacionamento e horários pagos podem mudar até entre ruas vizinhas.',
          'O pagamento por Telpark, Via Verde Estacionar, MB WAY ou aplicação local não garante a zona correta: confirme a geolocalização e o código da zona.',
          'Se o município tiver entregue o estacionamento a um concessionário, a contestação deve ainda assim ter uma via oficial e número de processo.'
        ] },
        { kind: 'paragraph', text: 'Regra prática: se se mudar entre Lisboa, Porto, Cascais, Oeiras, Almada ou Braga, trate o estacionamento como um novo sistema. Hábitos e aplicações antigos podem funcionar, mas os direitos de residente e as tarifas não são transferidos.' }
      ]
    },
    {
      id: 'contest',
      title: 'Como contestar sem perder prazos',
      content: [
        { kind: 'paragraph', text: 'A contestação divide-se em duas fases: reclamação informal junto do serviço municipal/concessionário e defesa formal no processo de contraordenação. Se já recebeu uma notificação oficial, oriente-se pelo prazo de 15 dias úteis para a defesa indicado no Código da Estrada.' },
        { kind: 'checklist', items: [
          'Fotografe o local: sinais, marcações no pavimento, parquímetro, número da zona, ausência/ilegibilidade das placas.',
          'Guarde o comprovativo de pagamento: recibo, email, PDF da aplicação, extrato do cartão, MB WAY.',
          'Verifique a matrícula: erros numa letra/algarismo podem ser fundamento para anulação ou correção.',
          'Verifique a hora: o fiscal pode ter registado a infração antes do fim efetivo do período pago.',
          'Se existia residente permit/dístico/avença, junte comprovativo de validade na data da infração.',
          'Escreva de forma breve em português: “Venho apresentar defesa/reclamação…” + factos + anexos.',
          'Envie através do canal indicado na notificação: EMEL, portal do município, ePorto/CMP, email, balcão ou carta registada.',
          'Após a notificação oficial da ANSR, não ignore a carta: o silêncio normalmente acaba em decisão e cobrança.'
        ] },
        { kind: 'warning', text: 'O pagamento voluntário da coima mínima fecha muitas vezes a contestação como reconhecimento da infração. Se quiser contestar, verifique primeiro se o procedimento concreto permite pagar como depósito sem reconhecimento de culpa.' }
      ]
    },
    {
      id: 'avoid',
      title: 'Como evitar receber estas multas',
      content: [
        { kind: 'checklist', items: [
          'Adicione a matrícula às aplicações de estacionamento com antecedência e verifique o país de registo.',
          'Ative notificações para o fim do tempo de estacionamento.',
          'Confirme sempre o código da zona no poste/parquímetro, e não apenas o GPS na aplicação.',
          'Não conte com “5 minutos”: os fiscais da EMEL e dos serviços municipais trabalham regularmente.',
          'Para a sua casa, trate do dístico/avença logo após o contrato de arrendamento, atestado de residência ou alteração de morada.',
          'Ao vender o carro, atualize o proprietário no Registo Automóvel; caso contrário, as cartas podem continuar a chegar-lhe.',
          'Para um carro alugado, guarde o contrato de aluguer e os recibos de estacionamento durante pelo menos 6 meses.',
          'Se saiu de Portugal, não ignore cartas enviadas para a morada antiga: dívidas e taxas administrativas podem aparecer mais tarde.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Estacionamento pago normal não pago/com tempo expirado', amountEURMin: 30, amountEURMax: 150, note: 'Intervalo típico de coima segundo o Código da Estrada para estacionamento tarifado.' },
    { label: 'Bloqueio/remoção', amountEURMin: 0, amountEURMax: 200, note: 'Depende do município, da classe do veículo, do reboque e do tempo de depósito; é pago separadamente da multa.' },
    { label: 'Taxa administrativa da empresa de aluguer', amountEURMin: 20, amountEURMax: 60, note: 'Não é uma multa estatal, mas sim uma fee rental company pelo processamento da notificação e transmissão dos dados do condutor.' }
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
