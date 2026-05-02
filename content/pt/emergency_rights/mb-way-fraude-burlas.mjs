export default {
  editorialVoice: 'hackportugal',
  id: 'mb-way-fraude-burlas',
  categoryId: 'emergency_rights',
  title: 'MB WAY: fraude e como proteger-se no OLX, SMS e mensageiros',
  tldr: 'O MB WAY é seguro enquanto você não divulgar códigos nem confirmar operações. Os principais esquemas em 2026: um “comprador” no OLX pede o seu MB WAY/Multibanco para “receber dinheiro”, SMS de phishing em nome da CMD/Autenticação.gov/banco e chamadas “do apoio ao cliente”. Em 2023, segundo o Banco de Portugal, as perdas por fraude em pagamentos em Portugal atingiram 12,3 milhões €. Se já clicou/confirmou — bloqueie imediatamente o cartão no banco, contacte o MB WAY/SIBS, apresente queixa na PSP/GNR/PJ e conteste a operação junto do banco.',
  tags: ['mbway', 'fraude', 'olx', 'phishing'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'how-scams-work',
      title: 'Como funcionam os esquemas MB WAY',
      content: [
        { kind: 'paragraph', text: 'O MB WAY está associado ao seu número de telefone e ao seu cartão bancário. O número de telefone, por si só, não dá acesso ao dinheiro. A fraude começa quando o levam a: activar o MB WAY no telefone de outra pessoa através do Multibanco, indicar um código recebido por SMS, clicar numa ligação de phishing ou confirmar uma operação na aplicação.' },
        { kind: 'checklist', items: [
          'OLX / Facebook Marketplace: o “comprador” diz que vai pagar por MB WAY e encaminha-o para o Multibanco para “receber o dinheiro”. Na realidade, você está a associar o telefone dele ao seu cartão.',
          'Falso “reembolso”: enviam um pedido que parece ser um recebimento, mas é “Enviar dinheiro” — uma transferência a partir do seu cartão.',
          'SMS em nome da CMD, Autenticação.gov, banco, CTT, Finanças: a ligação leva a uma cópia de um site onde roubam o NIF, a palavra-passe, dados bancários ou o código de confirmação.',
          'Chamada “do banco/MB WAY”: assustam-no com uma alegada intrusão e pedem-lhe urgentemente o código por SMS ou que confirme a “anulação da operação”. Essa é precisamente a operação do burlão.',
          'WhatsApp/Telegram: enviam um código QR ou uma ligação “para pagar a entrega”, “seguro OLX”, “pagamento seguro”. O OLX não exige que introduza credenciais bancárias através de ligações externas.',
          'Falsificação do remetente: uma SMS pode aparecer na mesma conversa onde antes existiam mensagens verdadeiras do banco ou de gov.pt. Não deve confiar no nome do remetente, mas sim na acção que lhe estão a pedir.'
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Sinais de alerta: quando deve terminar a conversa de imediato',
      content: [
        { kind: 'checklist', items: [
          'Pedem-lhe para ir ao Multibanco para “receber uma transferência”. Para receber dinheiro por MB WAY não precisa de caixa automático.',
          'Pedem-lhe para escolher “MB WAY” no Multibanco e introduzir o número de telefone de outra pessoa.',
          'Pedem-lhe o código por SMS, código de ativação, código de segurança, PIN MB WAY ou código bancário de utilização única.',
          'Pedem-lhe para confirmar uma notificação push “para cancelar o pagamento”. Uma confirmação na aplicação significa quase sempre consentimento para a operação.',
          'O comprador pressiona: “o estafeta já vai a caminho”, “o pagamento tem de ser agora”, “OLX bloqueia a conta”.',
          'A ligação não é para um domínio oficial: não é gov.pt, não é autenticação.gov.pt, não é o site do seu banco, não é mbway.pt.',
          'A mensagem tem erros linguísticos, pontuação estranha, ligações encurtadas, domínios como .click, .top, .info.',
          'Pedem-lhe para instalar AnyDesk, TeamViewer, RustDesk ou uma “aplicação de segurança do banco”. O banco não pede acesso remoto ao telefone.',
          'O comprador está disposto a comprar sem ver o artigo, acima do preço e com “entrega pelo OLX/CTT”. É um isco típico.'
        ] },
        { kind: 'warning', text: 'Regra principal: códigos MB WAY, códigos SMS do banco, PIN e confirmações na aplicação são como dinheiro vivo. Se você indicou o código ou confirmou a operação, o banco pode considerar isso “strong customer authentication” e será mais difícil contestar o reembolso.' }
      ]
    },
    {
      id: 'safe-use',
      title: 'Como usar o MB WAY em segurança',
      content: [
        { kind: 'paragraph', text: 'Para uma transferência normal por MB WAY basta o número de telefone do destinatário na aplicação. Para vender no OLX, é mais seguro dar ao comprador o seu número MB WAY e aguardar pela transferência recebida na aplicação do banco/MB WAY. Não vá ao Multibanco seguindo instruções do comprador.' },
        { kind: 'checklist', items: [
          'Verifique a operação na aplicação: “Receber” — entrada; “Enviar” — você está a enviar dinheiro.',
          'Defina limites MB WAY na aplicação do banco: limite diário, limite por operação, limite de pagamentos online.',
          'Desassocie do MB WAY os cartões que raramente utiliza ou mantenha um cartão separado com limite baixo.',
          'Active as notificações do banco e do MB WAY para cada operação.',
          'Nunca introduza dados bancários depois de abrir uma ligação de uma SMS. Abra o site manualmente ou através da aplicação oficial.',
          'Verifique os domínios: serviços do Estado — gov.pt ou autenticação.gov.pt; MB WAY — mbway.pt; banco — domínio oficial do banco.',
          'Actualize a aplicação MB WAY e a aplicação bancária apenas através da App Store / Google Play.',
          'Não guarde o PIN MB WAY em notas, WhatsApp ou fotografias.',
          'Se vender um artigo caro, use transferência bancária SEPA, dinheiro no encontro presencial ou entrega segura com pagamento através da plataforma oficial, e não uma ligação enviada pelo comprador.'
        ] }
      ]
    },
    {
      id: 'if-clicked-or-paid',
      title: 'Se já clicou numa ligação, indicou o código ou o dinheiro saiu',
      content: [
        { kind: 'substeps', items: [
          { id: 'first-10-minutes', title: 'Primeiros 10 minutos', content: [
            { kind: 'checklist', items: [
              'Ligue imediatamente para o banco através do número no cartão/site oficial, não pelo número indicado na SMS.',
              'Peça o bloqueio do cartão, do MB WAY, do homebanking e de todas as operações suspeitas.',
              'Na aplicação do banco, desassocie o cartão do MB WAY e reduza os limites para 0 €, se ainda tiver acesso.',
              'Contacte o apoio MB WAY/SIBS, se a operação tiver passado pelo MB WAY, e indique o número de telefone, a hora e o montante.',
              'Altere as palavras-passe do banco, email e gov.pt/CMD, se as tiver introduzido num site de phishing.',
              'Se deu acesso remoto — desligue a internet, remova a aplicação de acesso remoto, verifique o dispositivo e altere as palavras-passe a partir de outro dispositivo.'
            ] }
          ] },
          { id: 'same-day-evidence', title: 'No mesmo dia, reúna provas', content: [
            { kind: 'checklist', items: [
              'Capturas de ecrã do anúncio no OLX/Facebook e do perfil do interlocutor.',
              'Conversa completa, números de telefone, WhatsApp, Telegram, email.',
              'SMS com a ligação de phishing e o cabeçalho do remetente.',
              'Capturas de ecrã das operações MB WAY/banco: data, hora, montante, destinatário/IBAN, referência, ID da operação.',
              'URL do site de phishing, se ainda estiver no histórico do navegador.',
              'Número do pedido no banco e nome do operador, se tiver sido indicado.',
              'Extracto do cartão/conta com a operação fraudulenta.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Não continue a trocar mensagens com o burlão “para que ele devolva o dinheiro” e não pague “comissão de reembolso”. Muitas vezes, depois do primeiro roubo, vem uma segunda ronda: “advogado”, “PSP”, “Interpol”, “banco” — todos exigem um novo pagamento.' }
      ]
    },
    {
      id: 'report-and-recover',
      title: 'Onde apresentar queixa e como tentar obter o reembolso',
      content: [
        { kind: 'paragraph', text: 'A ordem é esta: primeiro o banco — bloqueio e contestação da operação; depois a polícia — participação criminal; depois, se o banco recusar sem explicação adequada, reclamação ao Banco de Portugal através do Livro de Reclamações ou do Portal do Cliente Bancário. Quanto mais depressa notificar o banco, maior a probabilidade de limitar as perdas.' },
        { kind: 'checklist', items: [
          'Banco: apresente uma reclamação/impugnação de operação não autorizada por escrito. Peça o número do processo.',
          'PSP ou GNR: apresente denúncia. Nas cidades é normalmente a PSP; fora das cidades, muitas vezes a GNR. Também pode contactar a Polícia Judiciária para cibercrime.',
          'Banco de Portugal: reclamação contra o banco, se este não responder, atrasar o processo ou recusar sem análise. O BdP não “devolve o dinheiro” directamente, mas fiscaliza o comportamento do banco.',
          'Livro de Reclamações Eletrónico: canal oficial de reclamação contra o banco/prestador de serviços de pagamento.',
          'OLX/Facebook/WhatsApp: denuncie o perfil e o anúncio, anexando a participação criminal, para que o perfil seja bloqueado.',
          'Phishing CMD/Autenticação.gov: não introduza dados; a mensagem pode ser reencaminhada/comunicada através dos canais oficiais gov.pt indicados na página de aviso.'
        ] },
        { kind: 'paragraph', text: 'Ao abrigo do regime dos serviços de pagamento em Portugal (PSD2, Decreto-Lei 91/2018), depois de notificar o banco, você não responde por novas operações não autorizadas. Antes da notificação, pode existir responsabilidade do ordenante até 50 €, mas se o banco provar fraude ou negligência grosseira do cliente — por exemplo, se comunicou voluntariamente o código e confirmou a operação — o reembolso pode ser contestado. Por isso, formule os factos na declaração: quando reparou, quando notificou, que acções não realizou e que confirmações foram obtidas por engano.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação de denúncia na PSP/GNR', amountEUR: 0, note: 'A participação de um crime é gratuita; peça comprovativo/número do processo.' },
    { label: 'Bloqueio do cartão pelo banco', amountEURMin: 0, amountEURMax: 15, note: 'Muitos bancos bloqueiam gratuitamente; a reemissão do cartão pode ter custo conforme o preçário da conta.' },
    { label: 'Reclamação ao Banco de Portugal / Livro de Reclamações', amountEUR: 0, note: 'As reclamações oficiais são gratuitas.' }
  ],
  sources: [
    {
      title: 'gov.pt: aviso sobre SMS fraudulentas em nome da Chave Móvel Digital e Autenticação.gov',
      url: 'https://www2.gov.pt/en/burlas-e-sms-fraudulentas-em-nome-de-chave-movel-digital-ou-autenticacao-gov',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal: segurança nos pagamentos e medidas em caso de fraude',
      url: 'https://clientebancario.bportugal.pt/pt-pt/seguranca-nos-pagamentos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 91/2018: regime jurídico dos serviços de pagamento e da moeda eletrónica',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/91-2018-116095188',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'MB WAY / SIBS: recomendações de segurança',
      url: 'https://www.mbway.pt/seguranca/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
