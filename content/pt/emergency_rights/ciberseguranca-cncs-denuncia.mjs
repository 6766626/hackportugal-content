export default {
  editorialVoice: 'hackportugal',
  id: 'ciberseguranca-cncs-denuncia',
  categoryId: 'emergency_rights',
  title: 'Cibersegurança: CNCS, PJ Crimes Informáticos e queixas online',
  tldr: 'Se lhe roubaram dinheiro através de MB WAY, OLX, phishing, email falso da AIMA/Finanças/SNS ou invadiram uma conta, actue nas primeiras horas: bloqueie o cartão/MB WAY no banco, guarde provas, altere palavras-passe. O CNCS/CERT.PT recebe comunicações de incidentes e ajuda na classificação técnica, mas não investiga crimes nem devolve dinheiro. A participação criminal é apresentada à Polícia Judiciária — Unidade Nacional de Combate ao Cibercrime e Criminalidade Tecnológica ou através dos canais oficiais da polícia. Litígios de consumo com vendedores — DECO PROteste / Livro de Reclamações.',
  tags: ['cncs', 'pj', 'phishing', 'mbway', 'denúncia'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'triage',
      title: 'Primeiro, pare os danos: os primeiros 30 minutos',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, um incidente de cibersegurança e um crime não são a mesma coisa. O CNCS/CERT.PT serve para comunicar um incidente técnico: site de phishing, malware, fuga de dados, DDoS, comprometimento de email. A Polícia Judiciária é necessária se houver roubo de dinheiro, extorsão, acesso a contas, usurpação de identidade ou fraude informática ao abrigo da Lei 109/2009.' },
        { kind: 'checklist', items: [
          'Telefone ao banco e peça o bloqueio imediato do cartão, MB WAY, transferências, cartões virtuais e acessos ao homebanking.',
          'Se usou MB WAY: bloqueie os cartões associados e verifique a lista de dispositivos autorizados.',
          'Altere a palavra-passe do email, banco, Finanças, AIMA, SNS, redes sociais; active 2FA através de uma aplicação, não por SMS, se possível.',
          'Faça capturas de ecrã: SMS, cabeçalhos de email, número de telefone, IBAN, link, perfil OLX/Facebook/Instagram, conversas, comprovativos.',
          'Não apague mensagens suspeitas: guarde o .eml/.msg ou o cabeçalho técnico completo.',
          'Se enviou um documento: assinale o risco de roubo de identidade e guarde uma cópia do que foi enviado.',
          'Se perdeu um dispositivo: bloqueie remotamente o SIM/eSIM e as contas Apple ID / Google.',
          'Se houver ameaça à vida ou chantagem física — ligue 112, não espere por uma resposta online.'
        ] },
        { kind: 'warning', text: 'Não pague “comissão para devolução de dinheiro”, “taxa AIMA”, “desbloqueio MB WAY” ou “multa Finanças” através de um link recebido por SMS/email. Os organismos públicos em Portugal não pedem o pagamento de uma coima ou de uma marcação na AIMA através de um link curto aleatório, WhatsApp ou Revolut/IBAN de uma pessoa singular.' }
      ]
    },
    {
      id: 'cncs',
      title: 'CNCS / CERT.PT: comunicar um ciberincidente',
      content: [
        { kind: 'paragraph', text: 'O Centro Nacional de Cibersegurança (CNCS) é a autoridade nacional de cibersegurança. O seu CERT.PT recebe notificações de incidentes, analisa ameaças e pode coordenar a resposta técnica. Não é polícia nem tribunal: o CNCS não abre processo criminal, não bloqueia transferências bancárias a seu pedido e não recupera dinheiro.' },
        { kind: 'checklist', items: [
          'Use o site oficial cncs.gov.pt e a secção CERT.PT / notificação de incidentes.',
          'Indique o tipo de incidente: phishing, malware, ransomware, account takeover, DDoS, data breach, spoofing, scam website.',
          'Cole os URL completos das páginas suspeitas, não apenas capturas de ecrã.',
          'Anexe cabeçalhos de email, o .eml/.msg original, texto de SMS, números de telefone, domínios, IP, hashes de ficheiros, se existirem.',
          'Indique a data e hora em Portugal, contas afectadas, montante do prejuízo, banco/plataforma.',
          'Se for uma empresa ou associação: adicione NIPC, contacto técnico, DPO/responsável, escala dos dados afectados.',
          'Guarde o número/confirmação do contacto com o CNCS: será útil para o banco, a PJ e a seguradora.'
        ] },
        { kind: 'warning', text: 'Para organizações, o incidente pode ser simultaneamente uma breach de dados pessoais. Nesse caso, avalia-se separadamente a notificação à CNPD ao abrigo do GDPR no prazo de 72 horas após se ter tomado conhecimento da violação. O CNCS e a CNPD são entidades diferentes.' }
      ]
    },
    {
      id: 'pj',
      title: 'Polícia Judiciária: quando é crime',
      content: [
        { kind: 'paragraph', text: 'Se lhe roubaram dinheiro, acederam à sua bank account, obtiveram fraudulentamente códigos MB WAY, usaram os seus documentos, fazem chantagem com fotografias íntimas, invadiram o seu email ou loja — apresente denúncia/queixa à Polícia Judiciária. Na PJ, esta matéria é tratada pela Unidade Nacional de Combate ao Cibercrime e Criminalidade Tecnológica (UNC3T).' },
        { kind: 'checklist', items: [
          'Apresente a participação através dos canais oficiais da PJ ou presencialmente numa unidade da Polícia Judiciária; em caso de urgência, também pode dirigir-se à PSP/GNR, que receberá a denúncia e encaminhará os elementos.',
          'Descreva os factos cronologicamente: data, hora, plataforma, em que clicou, que códigos introduziu, para onde foi o dinheiro.',
          'Anexe comprovativo da transferência, IBAN do destinatário, entidade/referência Multibanco, número MB WAY, número de telefone do burlão.',
          'Anexe conversas de OLX, WhatsApp, Telegram, Instagram, Facebook Marketplace, email e SMS.',
          'Indique o que já fez: bloqueou o cartão, notificou o banco, comunicou ao CNCS, alterou palavras-passe.',
          'Peça ao banco para abrir um processo de fraude/chargeback/contestação da operação — isto faz-se em paralelo com a queixa criminal.',
          'Guarde uma cópia do auto de notícia / comprovativo da denúncia: o banco pede-a frequentemente para analisar o reembolso.'
        ] },
        { kind: 'paragraph', text: 'No direito português, os principais tipos legais para estes casos são burla informática, acesso ilegítimo, falsidade informática, interceção ilegítima e infracções conexas ao abrigo da Lei do Cibercrime, Lei 109/2009. Não é obrigatório formular o artigo por si: o mais importante é descrever com precisão os factos e as provas.' },
        { kind: 'warning', text: 'Se a fraude estiver relacionada com uma transferência SEPA/Instant Transfer, o tempo é crítico. A denúncia à PJ não substitui a chamada ao banco: só o banco pode tentar parar ou revogar urgentemente o pagamento.' }
      ]
    },
    {
      id: 'common-scams',
      title: 'Esquemas comuns em Portugal em 2026',
      content: [
        { kind: 'checklist', items: [
          'MB WAY “comprador”: uma pessoa no OLX diz que vai transferir dinheiro, mas pede-lhe para introduzir o número de telefone/código/“autorizar levantamento”. Resultado — o dinheiro sai da sua conta.',
          'OLX / Facebook Marketplace courier scam: “DPD/CTT already paid, confirm card to receive”. O link leva a uma fake payment page.',
          'Email/SMS falso da AIMA: “regularização”, “agendamento”, “multa”, “taxa urgente”. Verifique o domínio, não pague através de links no email.',
          'Finanças/Autoridade Tributária falsas: “reembolso IRS”, “dívida fiscal”, “penhora”. Entre apenas no portal das Finanças manualmente, não por SMS.',
          'SNS/SNS24 falso: “marcação”, “receita”, “multa consulta”. Não introduza dados bancários para uma marcação médica.',
          'Revolut/crypto recovery scam: prometem recuperar o que foi roubado mediante adiantamento ou “taxa legal”. Isto é quase sempre a segunda fase da fraude.',
          'Rental scam: apartamento em Lisboa/Porto/Algarve demasiado barato, landlord abroad, pede caução antes da visita e passaporte.',
          'Romance scam / sextortion: passam rapidamente a conversa para WhatsApp/Telegram e depois pedem dinheiro ou chantageiam com a publicação de fotografias.'
        ] },
        { kind: 'paragraph', text: 'Regra: se o apressam, ameaçam com coima, pedem código SMS, código MB WAY, Cartão Matriz, token do banco, Chave Móvel Digital ou fotografia da autorização de residência/passaporte por aplicação de mensagens — interrompa o diálogo e verifique manualmente através do site oficial.' }
      ]
    },
    {
      id: 'consumer',
      title: 'DECO, Livro de Reclamações e quando não é caso para a PJ',
      content: [
        { kind: 'paragraph', text: 'Nem todos os problemas online são cybercrime. Se uma loja oficial não entregou um produto, contesta a garantia, recusou a devolução ou impôs um serviço, use primeiro a via do consumidor: livro de reclamações eletrónico, apoio ao cliente, chargeback através do banco, DECO PROteste ou Centro de Arbitragem de Conflitos de Consumo.' },
        { kind: 'checklist', items: [
          'Há um vendedor real com NIF/NIPC, factura e morada — comece pelo Livro de Reclamações eletrónico.',
          'Pagou com cartão — abra chargeback/contestação no banco com provas.',
          'Pagou por MB WAY a uma pessoa singular por um artigo no OLX e o artigo desapareceu — isto já se parece com burla, apresente denúncia.',
          'Pagou para o IBAN de uma empresa — anexe factura, contrato, emails, tracking e reclamação.',
          'Se o litígio chegar à arbitragem, verifique o Centro de Arbitragem competente por local/sector.',
          'A DECO PROteste é útil para modelos de reclamação e pressão sobre a empresa, mas não substitui a polícia em caso de crime.'
        ] },
        { kind: 'warning', text: 'Não envie documentos originais “para verificação de identidade” a um vendedor do OLX/Facebook. Se já enviou passaporte/autorização de residência/NIF, indique-o na participação: risco de crédito posterior, SIM-swap ou abertura de contas em seu nome.' }
      ]
    },
    {
      id: 'evidence',
      title: 'Como recolher provas para a queixa não cair por terra',
      content: [
        { kind: 'paragraph', text: 'A polícia portuguesa e o banco trabalham mais depressa quando as provas estão estruturadas. Crie uma pasta: 01_bank, 02_messages, 03_emails, 04_links, 05_documents, 06_timeline. Não edite ficheiros originais; as cópias podem ser traduzidas para o seu próprio idioma para si, mas oficialmente serão úteis os originais em PT/EN.' },
        { kind: 'checklist', items: [
          'Timeline num único PDF: data, hora, acção, montante, quem participou.',
          'Comprovativos do banco: transaction ID, IBAN, entidade/referência, cartão, merchant name.',
          'Capturas de ecrã com data, hora, número de telefone e URL visíveis.',
          'Email em formato .eml/.msg mais screenshot; os cabeçalhos de email são mais importantes do que uma captura bonita.',
          'Guarde links como texto e também por screenshot; os sites fraudulentos desaparecem rapidamente.',
          'Não contacte o burlão depois de apresentar a queixa, a menos que a polícia peça para manter o contacto.',
          'Se o idioma da conversa for russo/inglês, anexe um resumo curto em português ou inglês.',
          'Guarde os originais pelo menos até à decisão do banco/seguradora e ao encerramento da investigação.'
        ] },
        { kind: 'paragraph', text: 'Mini-modelo de assunto do pedido: “Denúncia de burla informática / phishing — perda de [montante] € — [banco/plataforma] — [data]”. No texto: “Sou residente em Portugal, NIF [se tiver], contacto [telefone/email]. Solicito registo da denúncia e investigação dos factos.”' }
      ]
    }
  ],
  costs: [
    { label: 'Comunicação de incidente ao CNCS/CERT.PT', amountEUR: 0, note: 'Gratuito; não é representação jurídica nem devolução de dinheiro.' },
    { label: 'Apresentação de denúncia/queixa à polícia', amountEUR: 0, note: 'Normalmente gratuito; só poderá haver custos com advogado, traduções ou cópias notariais, se forem necessários.' },
    { label: 'Livro de Reclamações eletrónico', amountEUR: 0, note: 'Canal oficial gratuito para reclamação de consumo.' }
  ],
  sources: [
    {
      title: 'CNCS — Centro Nacional de Cibersegurança / CERT.PT',
      url: 'https://www.cncs.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Polícia Judiciária — criminalidade informática e contactos da PJ',
      url: 'https://policiajudiciaria.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei do Cibercrime — Lei 109/2009',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/109-2009-489693',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações eletrónico — portal oficial de reclamações dos consumidores',
      url: 'https://www.livroreclamacoes.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
