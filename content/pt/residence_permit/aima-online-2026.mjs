export default {
  editorialVoice: 'hackportugal',
  id: 'aima-online-2026',
  categoryId: 'residence_permit',
  title: 'Renovação da autorização de residência através do portal online da AIMA',
  tldr: 'A partir de 1 de janeiro de 2026, a renovação da autorização de residência é feita através de portal-renovacoes.aima.gov.pt. Sem deslocação presencial, se todos os documentos estiverem em ordem. A submissão é possível 30 dias antes do fim da validade do cartão, mas é aconselhável fazê-la 60–90 dias antes. O cartão da autorização de residência chega por correio; enquanto espera, o estatuto legal é comprovado pelo comprovativo de submissão. Decreto-Lei 41/2023 introduziu a regra: se a AIMA ultrapassar o prazo e não concluir o processo a tempo, a sua permanência NÃO se torna ilegal — o comprovativo substitui a autorização de residência até à emissão do novo cartão.',
  tags: ['aima', 'autorização de residência', 'renovação', 'online'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2026-01-01',
  changeSummary: 'Lançamento de portal-renovacoes.aima.gov.pt em 01.01.2026. Prazo final para renovar autorizações de residência caducadas até 30.06.2025 — 15.04.2026.',
  steps: [
    {
      id: 'which-portal',
      title: 'Que portal usar para cada cartão',
      content: [
        { kind: 'paragraph', text: 'Em 2026, as renovações passam por vários portais — é importante escolher o correto, caso contrário o sistema “não vê” o seu processo:' },
        { kind: 'checklist', items: [
          '✅ portal-renovacoes.aima.gov.pt — cartões que caducam entre 01.07.2025 e 30.06.2026 (canal principal)',
          '✅ portal-renovacoes.aima.gov.pt — ARI / Golden Visa que caducam entre 22.02.2020 e 30.06.2026',
          '⚠️ Cartões caducados ANTES de 30.06.2025 — através do portal dos serviços principais da AIMA (canal antigo), não através de renovações',
          '❌ Cidadãos da UE não usam este portal. O primeiro CRUE (certificado de registo de cidadão da UE) é tratado na Câmara Municipal / Junta de Freguesia da área de residência, normalmente por 5 anos. Após 5 anos — há um procedimento separado para pedir o documento de residência permanente de cidadão da UE'
        ]},
        { kind: 'warning', text: 'Não confunda portal-renovacoes.aima.gov.pt com o portal geral portal.aima.gov.pt (área única). É precisamente o portal de renovações que contém o formulário de renovação.' }
      ]
    },
    {
      id: 'when-to-apply',
      title: 'Quando submeter',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Oficialmente — a partir de 30 dias antes do fim da validade da autorização de residência',
          '✅ Recomendação: 60–90 dias antes do fim da validade (menos stress, mais tempo para corrigir erros)',
          '⚠️ Com menos de 30 dias — o portal pode aceitar, mas não há garantia de conclusão antes do fim da validade',
          '⏰ Se a autorização de residência já caducou: submeta imediatamente. Formalmente, a coima é de 75–300 € (art. 192 Lei 23/2007), mas em 2025–2026, na renovação online, praticamente não é aplicada',
          '🛡️ Decreto-Lei 41/2023: se a AIMA não tratar o seu pedido dentro do prazo — mantém-se em situação legal com o comprovativo'
        ]},
        { kind: 'warning', text: 'Todas as autorizações de residência com data de validade até 30.06.2025 devem ser renovadas até 15 de abril de 2026. Depois dessa data, o estatuto é considerado inválido; a recuperação — através de um procedimento complexo com advogado.' }
      ]
    },
    {
      id: 'prerequisites',
      title: 'O que verificar antes da submissão',
      content: [
        { kind: 'checklist', items: [
          '🔐 Chave Móvel Digital ativada com a função de assinatura (não apenas autenticação). Verifique em autenticacao.gov.pt',
          '📱 Número de telefone português atualizado na CMD (não estrangeiro) — é para esse número que chegam os códigos SMS',
          '📄 Passaporte válido por ≥ 3 meses após a data prevista de receção do novo cartão da autorização de residência',
          '🏠 O endereço coincide: na AIMA, Finanças, NISS e no atestado de residência (se tenciona anexá-lo)',
          '💼 Se tem emprego/trabalho independente ou se a sua categoria de autorização de residência implica verificação pela Segurança Social — confirme o NISS e a inexistência de dívidas. Para categorias sem obrigação de pagar contribuições (por exemplo, reformados, familiares sem atividade), a ausência de pagamentos por si só não constitui “dívida”',
          '💸 Para as categorias aplicáveis, prepare a certidão de não dívida das Finanças e o comprovativo de situação contributiva da Segurança Social',
          '📷 Biometria — se já passaram 5+ anos desde a última vez, podem exigir uma deslocação presencial para nova biometria (raro, mas acontece)'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Submissão passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Entrar em portal-renovacoes.aima.gov.pt', content: [
            { kind: 'paragraph', text: 'Autenticação através da Chave Móvel Digital (assinatura eletrónica do Estado). Para cidadãos portugueses — através do Cartão de Cidadão. Importante: este é um portal separado, não portal.aima.gov.pt (área geral) — a ligação é especificamente para renovações.' }
          ]},
          { id: 's2', title: '2. Selecionar o tipo de autorização de residência', content: [
            { kind: 'paragraph', text: 'O sistema propõe o tipo da sua autorização de residência atual (preenchido automaticamente). Verifique — se o tipo estiver incorreto, é possível que o seu processo ainda esteja na antiga base de dados do SEF; será necessário um pedido separado por email para a delegação regional.' }
          ]},
          { id: 's3', title: '3. Carregar digitalizações', content: [
            { kind: 'checklist', items: [
              'Passaporte — todas as páginas preenchidas, boa qualidade JPG/PDF',
              'Cartão atual da autorização de residência (ambos os lados)',
              'Atestado de Residência (recente, com menos de 3 meses) da Junta de Freguesia OU contrato de arrendamento registado nas Finanças OU fatura de serviços públicos em seu nome',
              'Registo criminal português: consoante o procedimento, a AIMA pode pedir autorização para consulta do registo criminal português ou certificado do registo criminal. O certificado online no ePortugal costuma custar 5 € e é válido por 3 meses',
              'Para D7/D8 — comprovativo de rendimentos: extrato bancário de 3 meses, contrato de trabalho/contrato com cliente, documentos de pensão',
              'Para Reagrupamento Familiar — certidão de casamento/nascimento dos filhos',
              'Comprovativo de NISS + inexistência de dívidas (Segurança Social Direta → Comprovativo de situação contributiva)',
              'Comprovativo das Finanças — certidão de não dívida (gratuita no Portal das Finanças)',
              'Comprovativo de seguro de saúde ou número de utente do SNS (se exigido para o seu tipo de autorização de residência)'
            ]},
            { kind: 'paragraph', text: 'Na prática: o limite de tamanho do ficheiro é de 5 MB por documento. Se não couber — comprima em ilovepdf.com ou equivalente. Todas as digitalizações — a cores, não fotografias, legíveis.' }
          ]},
          { id: 's4', title: '4. Pagar a taxa', content: [
            { kind: 'paragraph', text: 'O portal gera uma referência Multibanco (DUC — Documento Único de Cobrança) ou permite pagamento por cartão.\n\nDesde 01.03.2026 está em vigor a nova tabela de taxas da AIMA (+33% face à anterior): receção + análise 133 €, emissão/renovação da autorização de residência (art. 75) ~307,20 €, autorização de residência permanente (art. 76) ~351,10 €, 2.ª via do cartão — 50% do custo de emissão. O pagamento é confirmado em 1–3 horas, mas por vezes pode demorar até um dia.' },
            { kind: 'warning', text: 'Se o montante pago ficou incompleto (erro típico — passou menos por causa do câmbio): pague o valor em falta NO MESMO DUC, mas através de OUTRO banco (não o banco usado para o primeiro pagamento). Evite pagamentos complementares através de CTT ou Payshop — muitas vezes não são associados. Não pode criar um novo DUC para pagar a diferença.' }
          ]},
          { id: 's5', title: '5. Assinar através da CMD', content: [
            { kind: 'paragraph', text: 'O passo final é a assinatura eletrónica do pedido através da Chave Móvel Digital. Receberá um código SMS ou uma notificação push na aplicação Autenticação.gov.' }
          ]},
          { id: 's6', title: '6. Guardar o comprovativo', content: [
            { kind: 'paragraph', text: 'Após a submissão, o portal emite um comprovativo de submissão em PDF. É um documento IMPORTANTE para tratar de assuntos em Portugal. Guarde-o em todo o lado: nuvem, email, impressão. Em Portugal, bancos, escolas, SNS e empregadores aceitam-no como prova de que o pedido foi submetido.' },
            { kind: 'warning', text: 'Comprovativo de submissão NÃO é substituto do cartão da autorização de residência para viagens e NÃO é um documento de viagem garantido. As companhias aéreas e as autoridades de fronteira de outros países Schengen não são obrigadas a aceitá-lo em vez de um cartão da autorização de residência válido. Se o cartão antigo caducou e o novo ainda não chegou — existe risco de recusa de embarque/entrada. Antes de viajar, é melhor consultar o consulado de Portugal no país de trânsito.' }
          ]},
          { id: 's7', title: '7. Aguardar a decisão', content: [
            { kind: 'timeline', text: 'Padrão — 30–90 dias. Máximo legal — até 120 dias. Lei 61/2025 (em vigor em 23.10.2025) estabeleceu um prazo geral de decisão da AIMA de 9 meses para casos complexos. A diretiva da UE relativa à autorização única obriga Portugal a apreciar pedidos de autorização única em 90 dias a partir de 22.05.2026. A notificação chega por email + na área pessoal. Estados: “Em análise”, “Notificado para entrevista”, “Aprovado”, “Indeferido”.' }
          ]},
          { id: 's7a', title: '7a. Comprovativo de Deferimento — confirmação de decisão favorável', content: [
            { kind: 'paragraph', text: 'Assim que o processo é aprovado, surge na área pessoal o botão “Comprovativo de Deferimento” — PDF com código QR para verificação de autenticidade. É o documento que confirma a decisão FAVORÁVEL da AIMA até à chegada do cartão físico.' },
            { kind: 'checklist', items: [
              '🪪 Em Portugal — bancos, escolas, SNS e empregadores normalmente aceitam como prova de estatuto aprovado',
              '⚠️ ✈️ Companhias aéreas e autoridades de fronteira de outros países Schengen NÃO são obrigadas a aceitá-lo em vez do cartão físico válido da autorização de residência. O código QR ajuda a verificar a decisão dentro de Portugal, mas não transforma o PDF num documento de viagem padrão/num título de residência Schengen',
              '📱 Guarde o PDF na nuvem e no telefone — para tratar de assuntos em Portugal',
              '🛂 Se planeia viajar antes de receber o cartão — fale com o consulado de Portugal/AIMA, ou aguarde pelo cartão físico'
            ]}
          ]},
          { id: 's8', title: '8. Receber o cartão', content: [
            { kind: 'paragraph', text: 'O novo cartão plástico da autorização de residência chega pelos CTT em correio registado para a morada indicada no pedido. Se não o receber 30 dias após o estado “Aprovado” — escreva à delegação regional da AIMA.' },
            { kind: 'paragraph', text: 'O número de seguimento do envio CTT NÃO aparece na área pessoal da AIMA após a aprovação — só é possível obtê-lo por telefone junto da delegação regional. É melhor ligar 2 semanas após o estado “Aprovado”.' }
          ]}
        ]}
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos (experiência da comunidade)',
      content: [
        { kind: 'checklist', items: [
          '🖥️ Submeta a partir de um computador no Chrome — no telemóvel há falhas ocasionais no carregamento de ficheiros',
          '⏰ Não submeta às 08:00 / 09:00 de segunda-feira — o portal fica sobrecarregado e aumenta a probabilidade de erros técnicos. Melhores horas — terça a quinta, 14:00–17:00',
          '📸 Se o processo ficar “preso” num ecrã — faça uma captura de ecrã, NÃO feche o separador, aguarde 2 minutos',
          '🚫 Não tente submeter novamente se a primeira tentativa “bloqueou” — verifique 24 horas depois na área pessoal; muitas vezes o pedido acabou por ser enviado',
          '📋 Atestado de Residência (Junta de Freguesia) por vezes é emitido sem testemunhas — confirme na sua Junta. Uma fatura de serviços públicos ou um contrato de arrendamento é muitas vezes suficiente como alternativa',
          '📷 Fotografias tipo passe nas digitalizações não são necessárias — a AIMA usa a biometria do atendimento anterior ou chama para nova recolha se necessário',
          '🧾 Peça com antecedência a certidão de não dívida nas Finanças e na Segurança Social — a geração pode demorar 1–2 dias',
          '⚡ Para autorização de residência D7/D8 — o extrato bancário deve demonstrar rendimento ESTÁVEL (não uma entrada única de grande montante antes da submissão)',
          '👨‍👩‍👦 Para Reagrupamento Familiar: crianças até 16 anos — são anexadas automaticamente; adolescentes 16–18 submetem separadamente a sua própria renovação'
        ]},
        { kind: 'warning', text: 'Se houver um erro nos seus dados na base da AIMA (por exemplo, transliteração incorreta do nome, morada incorreta do antigo processo SEF) — a submissão através do portal fica muitas vezes bloqueada. Solução — email para a delegação regional a pedir a correção dos dados e, depois, submissão.' }
      ]
    },
    {
      id: 'if-rejected',
      title: 'Recusa ou pedido de documentos adicionais',
      content: [
        { kind: 'paragraph', text: 'Se, após a submissão, receber uma carta a pedir documentos adicionais (Notificação para aperfeiçoamento):' },
        { kind: 'checklist', items: [
          '📬 Prazo de resposta — 10 dias úteis a partir da data da notificação',
          '💻 Os complementos devem ser carregados através do mesmo portal-renovacoes, separador “Processos em curso”',
          '📧 Se o prazo não for suficiente — pode pedir prorrogação por email à delegação regional',
          '🚫 Falhar o prazo = recusa automática (indeferimento por falta de elementos)'
        ]},
        { kind: 'paragraph', text: 'Em caso de recusa final (Indeferimento):' },
        { kind: 'checklist', items: [
          '⚖️ Os prazos de impugnação dependem do tipo de notificação e do ato. Frequentemente são 10 dias úteis para audiência prévia/aperfeiçoamento ou 30 dias para reclamação/recurso administrativo; para impugnação judicial o prazo costuma ser mais longo (frequentemente até 3 meses ao abrigo do CPTA). Em caso de indeferimento, mostre imediatamente a carta a um advogado',
          '🧑‍💼 Recomendamos contratar um advogado com prática de imigração — a probabilidade de reapreciação é maior',
          '🏛️ Em paralelo — queixa ao Provedor de Justiça, especialmente se a recusa for formal',
          '⏰ Enquanto decorre a impugnação — o seu estatuto normalmente mantém-se pelo comprovativo'
        ]}
      ]
    },
    {
      id: 'if-delayed',
      title: 'AIMA ultrapassou o prazo do processo — o que fazer',
      content: [
        { kind: 'paragraph', text: 'O prazo padrão é de 30–90 dias. Se passaram 90 dias sem resposta — é altura de agir. O máximo legal é de 120 dias; depois disso, a AIMA viola o prazo processual.' },
        { kind: 'checklist', items: [
          '🛡️ Mantém-se em situação legal — Decreto-Lei 41/2023 protege expressamente enquanto tiver o comprovativo',
          '📧 90+ dias — email para a delegação regional da AIMA (ver guia “Como contactar a AIMA”) com o número do processo e a data de submissão',
          '🏛️ 120+ dias — queixa ao Provedor de Justiça em provedor-jus.pt (acelera na prática; a AIMA é obrigada a responder ao Provedor)',
          '⚖️ 180+ dias — discutir com um advogado uma ação administrativa contra a inação da AIMA. O tipo de procedimento depende do caso (por exemplo, intimação para a prática de ato devido); o tribunal pode obrigar a AIMA a atuar, mas o prazo concreto e o resultado não são garantidos. Intimação para prestação de informações aplica-se apenas quando é necessário obter informações/cópias de documentos, e NÃO para obrigar a AIMA a tomar uma decisão sobre a autorização de residência',
          '✈️ Para viagens ao estrangeiro — comprovativo + cartão antigo da autorização de residência válido (NÃO caducado) + passaporte podem ajudar a explicar a situação, mas NÃO garantem embarque nem entrada. Juridicamente, é mais seguro aguardar pelo novo cartão. Antes de viajar, verifique os requisitos da transportadora e do país de trânsito/entrada'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: 'Casos especiais — não através do portal principal',
      content: [
        { kind: 'paragraph', text: 'Algumas categorias exigem um procedimento separado, não através de portal-renovacoes:' },
        { kind: 'substeps', items: [
          { id: 'sp1', title: 'Estudantes que continuam os estudos + trabalho (art. 122.j Lei 23/2007)', content: [
            { kind: 'checklist', items: [
              'Submissão através do formulário de contacto da AIMA (não através de renovações)',
              'Pedido de vaga para biometria — apenas através de lista de espera',
              'Documentos: passaporte, autorização de residência antiga, declaração de IRS, contrato de trabalho, NISS, certidão de não dívida',
              'Tempo de espera pela vaga — 2–6 meses'
            ]}
          ]},
          { id: 'sp2', title: 'Cursos profissionais (art. 92)', content: [
            { kind: 'checklist', items: [
              'Inscrever-se na lista de espera através do formulário no site da AIMA',
              'Documentos: cópia do passaporte, comprovativo de inscrição no curso (IEFP / centro certificado), recibo de pagamento',
              'Mais tarde, a AIMA marca atendimento presencial — aguardar convocatória por email',
              'Presença pessoal obrigatória (não online)'
            ]}
          ]},
          { id: 'sp3', title: 'ARI / Golden Visa', content: [
            { kind: 'paragraph', text: 'A renovação é possível através de portal-renovacoes para ARI caducados entre 22.02.2020 e 30.06.2026. Presença física mínima para ARI: 7 dias no primeiro ano e 14 dias em cada período subsequente de dois anos de validade da autorização (se forem aplicáveis as regras ARI padrão; comprovada por carimbos ou comprovativo de alojamento).' }
          ]},
          { id: 'sp4', title: 'CRUE para cidadãos da UE', content: [
            { kind: 'paragraph', text: 'O CRUE de cidadãos da UE é tratado através da Câmara Municipal / Junta de Freguesia e NÃO é renovado através do portal da AIMA para autorizações de residência de cidadãos de países terceiros. Após 5 anos, normalmente é tratado o documento de residência permanente através de procedimento separado. Cartão de residência de familiar de cidadão da UE (para familiares de cidadãos da UE provenientes de países terceiros) — é um documento separado com procedimento diferente, não é CRUE.' }
          ]}
        ]}
      ]
    },
    {
      id: 'first-card',
      title: 'Primeiro cartão após visto D — isto NÃO é uma renovação',
      content: [
        { kind: 'warning', text: 'Este artigo é sobre a renovação de um cartão plástico da autorização de residência já emitido. Se tem apenas um visto D e ainda não tem cartão, trata-se do procedimento de primeira concessão / emissão inicial — normalmente através de marcação/vaga na AIMA, e não através de portal-renovacoes. O portal renovações aplica-se a títulos de residência já existentes (se a AIMA tiver aberto a categoria correspondente).' },
        { kind: 'paragraph', text: 'O que a AIMA verifica na primeira emissão do cartão após visto D:' },
        { kind: 'checklist', items: [
          '📄 Correspondência entre o visto D e a situação atual (D7 → rendimento passivo; D8 → trabalho remoto; etc.)',
          '💰 Comprovativo de rendimentos DE TODO O PERÍODO desde a entrada (extrato bancário completo)',
          '🏠 Atestado de Residência — recente (com menos de 2 meses)',
          '📝 Se o visto D incluía uma condição (por exemplo, “abrir conta bancária em 90 dias”) — anexar comprovativo de cumprimento',
          '⏰ Prazo de emissão do primeiro cartão — normalmente mais longo do que uma renovação padrão'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Chave Móvel Digital', note: 'obrigatória com função de assinatura' },
    { title: 'Passaporte', note: 'válido por ≥ 3 meses' },
    { title: 'Autorização de residência atual / visto D', note: 'ambos os lados, digitalização' },
    { title: 'Atestado de Residência', note: 'com menos de 3 meses, da Junta de Freguesia' },
    { title: 'Certidão do registo criminal PT', note: 'normalmente 5 € no ePortugal; por vezes a AIMA pede não o certificado, mas autorização para consulta' },
    { title: 'Comprovativo de situação contributiva (NISS)', note: 'gratuito na Segurança Social Direta' },
    { title: 'Certidão de não dívida Finanças', note: 'gratuita no Portal das Finanças' },
    { title: 'Comprovativo de rendimentos (D7/D8)', note: 'extrato bancário de 3 meses' },
    { title: 'Seguro de saúde / número de utente do SNS', note: 'se exigido' }
  ],
  costs: [
    { label: 'AIMA — receção + análise', amountEUR: 133, note: 'tarifas 01.03.2026' },
    { label: 'AIMA — emissão/renovação (art. 75)', amountEUR: 307.20, note: 'tarifas 01.03.2026' },
    { label: 'AIMA — autorização de residência permanente (art. 76)', amountEUR: 351.10, note: 'tarifas 01.03.2026' },
    { label: '2.ª via do cartão (art. 75)', amountEUR: 153.60, note: '50% da taxa emissão/concessão correspondente; para cartão permanente, o montante é diferente' },
    { label: 'Coima por atraso (raramente aplicada)', amountEURMin: 75, amountEURMax: 300 }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — Portal de Renovações', url: 'https://portal-renovacoes.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — site oficial', url: 'https://aima.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 41/2023 — proteção do estatuto em caso de atraso da AIMA', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/41-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — regime de entrada e permanência', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Renovar Título de Residência', url: 'https://eportugal.gov.pt/cidadaos-ue/-/informacoes/renovar-titulo-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 60
}
