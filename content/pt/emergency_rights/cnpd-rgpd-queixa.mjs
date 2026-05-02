export default {
  editorialVoice: 'hackportugal',
  id: 'cnpd-rgpd-queixa',
  categoryId: 'emergency_rights',
  title: 'RGPD: queixa à CNPD por violação de privacidade',
  tldr: 'Se em Portugal os seus dados pessoais foram divulgados indevidamente, são usados para marketing sem consentimento, o empregador o vigia ilegalmente ou a CCTV de um vizinho filma a sua porta/janela, pode apresentar gratuitamente uma queixa à CNPD — Comissão Nacional de Proteção de Dados. A queixa é apresentada online através de cnpd.pt. Normalmente, vale a pena contactar primeiro a organização por escrito; a CNPD pode pedir dados, emitir uma ordem e aplicar uma coima até 20 000 000 € ou 4% do volume de negócios mundial nos termos do RGPD.',
  tags: ['rgpd', 'cnpd', 'queixa', 'dados'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-to-complain',
      title: 'Quando apresentar queixa à CNPD',
      content: [
        { kind: 'paragraph', text: 'A CNPD é a autoridade de controlo portuguesa para a proteção de dados pessoais. Recebe queixas ao abrigo do RGPD/GDPR quando a violação está relacionada com Portugal: a organização está cá, o serviço foi prestado cá, a câmara filma cá, o empregador ou o condomínio está cá.' },
        { kind: 'checklist', items: [
          'Fuga de dados: documentos, NIF, NISS, IBAN, dados médicos, morada, telefone, e-mail chegaram a terceiros.',
          'Marketing sem consentimento: SMS, e-mail, chamadas, envios por WhatsApp após recusa ou sem opt-in.',
          'A organização não responde a um pedido de acesso, apagamento, retificação ou portabilidade dos dados.',
          'O empregador instala videovigilância, GPS, keylogger, controlo de e-mail sem base legal clara e sem aviso.',
          'A CCTV de um vizinho, loja ou condomínio filma a entrada do apartamento, janela, varanda ou rua pública para além do necessário.',
          'Um site ou aplicação recolhe cookies/dados sem consentimento real.',
          'Um banco, escola, clínica, senhorio ou agência imobiliária exige documentos excessivos sem explicar a finalidade.',
          'Os dados de uma criança são usados sem fundamento legal ou sem consentimento parental quando este é exigido.'
        ] },
        { kind: 'warning', text: 'A CNPD não substitui a polícia, o tribunal nem o Livro de Reclamações. Se houver chantagem, intrusão numa conta, roubo de identidade ou publicação de materiais íntimos — contacte em paralelo a PSP/GNR ou o Ministério Público.' }
      ]
    },
    {
      id: 'try-controller-first',
      title: 'Escreva primeiro ao responsável pelos dados',
      content: [
        { kind: 'paragraph', text: 'Nos termos do RGPD, a organização que determina as finalidades do tratamento de dados chama-se responsável pelo tratamento ou controller. Na prática, a CNPD aprecia melhor queixas em que se vê que: você pediu primeiro à organização que corrigisse a violação, e esta recusou, ignorou ou respondeu de forma meramente formal.' },
        { kind: 'checklist', items: [
          'Encontre a privacy policy / política de privacidade no site da organização.',
          'Procure o contacto do DPO / Encarregado de Proteção de Dados, e-mail privacidade@ ou geral@.',
          'Escreva de forma breve: que dados, o que aconteceu, o que exige.',
          'Refira o RGPD: direito de acesso, apagamento, oposição, retificação, limitação ou retirada de consentimento.',
          'Peça resposta por escrito.',
          'Guarde o e-mail, resposta automática, capturas de ecrã do formulário, número do pedido.',
          'Se for CCTV — peça o esquema da zona filmada, o fundamento do tratamento e o prazo de conservação das gravações.',
          'Se for o empregador — use o seu e-mail pessoal para a cópia, mas não retire segredos comerciais.'
        ] },
        { kind: 'paragraph', text: 'Nos termos do RGPD, a organização deve normalmente responder ao pedido do titular dos dados no prazo de 1 mês. Este prazo pode ser prorrogado por mais 2 meses em caso de pedido complexo, mas deve ser informado da prorrogação e dos motivos.' }
      ]
    },
    {
      id: 'prepare-evidence',
      title: 'Reúna provas',
      content: [
        { kind: 'paragraph', text: 'A CNPD analisa factos, não emoções. Quanto mais precisamente indicar a data, a pessoa, a organização e a violação, maior é a probabilidade de a queixa ser admitida para tramitação e de serem pedidos esclarecimentos ao infrator.' },
        { kind: 'checklist', items: [
          'Os seus dados: nome, e-mail, telefone, morada em Portugal, se for necessária para contacto.',
          'Dados do infrator: nome, NIPC/NIF da empresa se conhecido, morada, site, e-mail, nome do DPO.',
          'Cronologia: datas das mensagens, chamadas, fuga de dados, instalação da câmara, resposta ou silêncio.',
          'Capturas de ecrã de SMS, e-mail, WhatsApp, formulários de consentimento, banner de cookies, mensagens publicitárias.',
          'Cópias dos seus pedidos de apagamento/acesso/oposição a marketing e das respostas da organização.',
          'Fotografia da CCTV de modo a mostrar a direção da câmara, mas sem filmagem ilegal de zonas privadas de terceiros.',
          'Contrato, invoice, recibo, contrato de trabalho ou outro documento que comprove a ligação à organização.',
          'Se houve fuga de dados — notificação do incidente, carta da empresa, captura da publicação, aviso do banco.',
          'Se a queixa for de vários moradores — consentimentos escritos separados ou queixas individuais.'
        ] },
        { kind: 'warning', text: 'Não junte dados pessoais excessivos de terceiros. Oculte NIF, IBAN, rostos de crianças, detalhes médicos e moradas de outras pessoas se não forem necessários para provar a violação.' }
      ]
    },
    {
      id: 'submit-online',
      title: 'Apresente a queixa online em cnpd.pt',
      content: [
        { kind: 'paragraph', text: 'A queixa à CNPD é gratuita. No site cnpd.pt, use a secção para cidadãos / apresentar queixa ou formulário de queixa. O formulário pode mudar, mas a lógica é a mesma: quem se queixa, contra quem, o que aconteceu, que direitos foram violados, que provas são anexadas.' },
        { kind: 'checklist', items: [
          'Abra cnpd.pt e procure o formulário queixa / reclamação.',
          'Escolha o tipo de queixa: violação dos direitos do titular dos dados, videovigilância, marketing, internet/cookies, employer surveillance ou outro.',
          'Preencha os seus contactos: o e-mail é obrigatório para a resposta.',
          'Indique a organização infratora e os respetivos contactos.',
          'Descreva os factos por datas: sem uma história longa, mas com acontecimentos concretos.',
          'Escreva o que pretende: cessação do tratamento, apagamento dos dados, retificação, proibição da câmara, investigação da fuga de dados.',
          'Anexe provas em PDF/JPG/PNG, de preferência num único PDF organizado.',
          'Envie o formulário e guarde a confirmação, número de processo ou e-mail da CNPD.'
        ] },
        { kind: 'paragraph', text: 'Na prática, em queixas simples, a CNPD pode dar uma primeira resposta ou pedir esclarecimentos em cerca de 30 dias, mas a investigação final demora mais. Nos termos do RGPD, a autoridade de controlo deve informar o reclamante sobre o andamento e o resultado da queixa, incluindo a possibilidade de tutela judicial se o processo não avançar.' }
      ]
    },
    {
      id: 'after-filing',
      title: 'O que acontece depois da submissão',
      content: [
        { kind: 'paragraph', text: 'A CNPD pode pedir-lhe que esclareça os factos, solicitar documentos à organização, realizar uma inspeção, emitir uma advertência, ordenar o apagamento/limitação dos dados, proibir o tratamento ou aplicar uma coima administrativa.' },
        { kind: 'checklist', items: [
          'Verifique o e-mail, incluindo spam: a CNPD pode dar um prazo para responder.',
          'Responda de forma breve e anexe apenas os documentos pedidos.',
          'Se a violação continuar, envie novas provas com datas.',
          'Não entre em conflito público com o infrator se isso puder revelar ainda mais dados.',
          'Se a organização corrigiu a violação, informe a CNPD, mas peça que o facto da violação fique registado.',
          'Se houver prejuízo material ou dano moral, a CNPD não paga indemnização — isso é uma ação cível separada.',
          'Se o caso for transfronteiriço, a CNPD pode transmiti-lo ou coordená-lo com outra autoridade da UE através do mecanismo one-stop-shop.'
        ] },
        { kind: 'paragraph', text: 'As coimas máximas ao abrigo do RGPD dependem do tipo de violação: até 10 000 000 € ou 2% do volume de negócios anual mundial, ou até 20 000 000 € ou 4% do volume de negócios — aplica-se o valor mais elevado. Para o reclamante, a apresentação da queixa é gratuita.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos expatriados',
      content: [
        { kind: 'checklist', items: [
          'Escrever a queixa apenas em russo: é melhor em português ou inglês; o texto russo pode ser anexado como explicação.',
          'Não indicar onde está exatamente a ligação com Portugal.',
          'Queixar-se de “spam” sem capturas de ecrã, data, remetente e prova de oposição ao envio.',
          'Exigir à CNPD compensação monetária — a CNPD aplica coimas ao infrator, mas não cobra dinheiro a seu favor.',
          'Confundir uma violação do RGPD com mau serviço: para a qualidade dos serviços existem o Livro de Reclamações e os reguladores setoriais.',
          'Enviar passaporte, autorização de residência, NIF e contrato inteiros sem ocultar dados excessivos.',
          'Queixar-se de CCTV sem mostrar que a câmara filma uma zona privada, e não apenas a entrada da loja ou uma zona comum de segurança.'
        ] },
        { kind: 'warning', text: 'Se está num processo migratório na AIMA, uma queixa à CNPD por si só não afeta a autorização de residência. Mas não anexe à queixa documentos AIMA excessivos se o litígio não estiver relacionado com o tratamento desses dados.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação de queixa à CNPD', amountEUR: 0, note: 'A queixa online é gratuita; só podem existir custos com advogado ou tradução, se decidir utilizá-los.' },
    { label: 'Coima potencial para o infrator', amountEURMax: 20000000, note: 'Nos termos do RGPD — até 20 000 000 € ou 4% do volume de negócios anual mundial, aplicando-se o valor mais elevado.' }
  ],
  sources: [
    { title: 'CNPD — Comissão Nacional de Proteção de Dados: site oficial e apresentação de queixas', url: 'https://www.cnpd.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulamento (UE) 2016/679 — RGPD/GDPR, texto no EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 58/2019 — execução do RGPD em Portugal', url: 'https://dre.pt/dre/detalhe/lei/58-2019-123815982', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
