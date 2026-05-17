export default {
  editorialVoice: 'hackportugal',
  id: 'immigrant-calendar',
  categoryId: 'before_arrival',
  title: 'Calendário do imigrante — o que fazer mês a mês após a chegada',
  tldr: 'Checklist mensal para os primeiros 24 meses em Portugal. Mês 1 (NIF, conta bancária, contrato de arrendamento); Mês 2 (NISS, registo na Junta de Freguesia, utente SNS); Meses 2–4 (pedido à AIMA para autorização de residência, pagamento de 96,12 €, verificação do estado através da autorização de residência online); Meses 4–9 (emissão do título de residência); Ano 1 (declaração de IRS até 30 de junho, verificação da morada, seguros); Ano 2 (renovação da autorização de residência 60 dias antes do fim da validade, nova submissão da morada nas Finanças). Após 5 anos — autorização de residência permanente ou nacionalidade (ver guia separado). Cada passo remete para um guia detalhado na aplicação.',
  tags: ['calendário', 'checklist', 'mudança', 'integração'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'month-1',
      title: 'Mês 1 — passos básicos críticos',
      content: [
        { kind: 'paragraph', text: 'Nos primeiros 30 dias, a prioridade é obter o NIF e abrir uma conta bancária. SEM NIF, não conseguirá assinar um arrendamento, comprar um passe de transporte nem registar um cartão SIM. Em paralelo — instale-se, assine o contrato de arrendamento (obrigatoriamente com registo nas Finanças — é uma condição básica para os passos seguintes).' },
        { kind: 'checklist', items: [
          '🆔 Dias 1–7: Obter o NIF (Número de Identificação Fiscal). Para CPLP — gratuito nas Finanças com passaporte + morada. Para países terceiros — é necessário representante fiscal (~80–150 €) ou um amigo CPLP-CV. Ver guia «NIF para cidadãos de países terceiros».',
          '🏠 Dias 1–14: Assinar um contrato de arrendamento de longa duração (mínimo 1 ano). O senhorio DEVE obrigatoriamente registá-lo nas Finanças (recibo eletrónico) — caso contrário, não tem «morada fiscal». Ver «Contrato de arrendamento».',
          '🏦 Dias 1–14: Abrir uma conta bancária (ActivoBank/Best/Millennium). Necessário: passaporte + NIF + morada (fatura de serviços ou contrato de arrendamento). Terá de se deslocar presencialmente a uma agência. Ver «Comparação de bancos».',
          '📱 Dias 7–14: Comprar um SIM local (MEO, NOS, Vodafone) — para ativações (Chave Móvel, MB WAY, push bancário). Será registado com o seu passaporte + NIF.',
          '🗺️ Dias 14–30: Registar o «atestado de residência» na Junta de Freguesia (gratuito, demora 10 minutos). Será necessário para muitos passos posteriores.'
        ]},
        { kind: 'warning', text: 'NÃO deixe tudo para o «último dia dos 90 dias Schengen». O pedido de autorização de residência exige que já tenha NIF, NISS, banco e morada. Se entrou com visto D — tem apenas 4 meses para se registar na AIMA a partir da data de entrada.' }
      ]
    },
    {
      id: 'month-2',
      title: 'Mês 2 — Segurança Social e saúde',
      content: [
        { kind: 'checklist', items: [
          '👤 NISS (Número de Identificação de Segurança Social): obter na Segurança Social Direta online (se tiver Chave Móvel) ou presencialmente. Gratuito. Sem NISS — não pode trabalhar, não pode obter SNS (cuidados de saúde gratuitos). Ver «NISS».',
          '🏥 Utente SNS: com NISS — inscrever-se no centro de saúde da morada de residência. Receberá o «número de utente» — a chave para médico gratuito, receitas e hospitais. Ver «Utente SNS».',
          '🔑 Chave Móvel Digital: configure através da app SNS24 ou presencialmente numa Loja do Cidadão. É o «portal de serviços públicos português» — chave digital única para AIMA, Finanças, ePortugal. Vai poupar-lhe dezenas de horas.',
          '📧 e-Balcão Finanças: ativar a área pessoal em portaldasfinancas.gov.pt. Com Chave Móvel, demora 5 minutos. Através dela — declaração de IRS, certidões, tudo.',
          '📨 Subscrever notificações eletrónicas dos CTT: para que AIMA/Finanças/banco possam notificá-lo sem cartas em papel'
        ]}
      ]
    },
    {
      id: 'month-2-4',
      title: 'Meses 2–4 — pedido à AIMA para autorização de residência',
      content: [
        { kind: 'paragraph', text: 'Desde 2024-2025, a AIMA passou totalmente para submissão online através de aima.gov.pt e do Portal SAPA para a maioria dos tipos de autorização de residência. Não há atendimento presencial para submeter o pedido — apenas a biometria final após aprovação.' },
        { kind: 'checklist', items: [
          '📝 Preparar o dossiê: passaporte, visto D (se aplicável), NIF, NISS, contrato de arrendamento + registo nas Finanças, extrato bancário (3 meses), certificado de registo criminal do país de nacionalidade (apostila + tradução), comprovativo de rendimentos/estudos (depende do tipo de autorização de residência)',
          '💶 Pagar a taxa AIMA: 96,12 € para a maioria dos tipos de autorização de residência (D1-D9), referência Multibanco',
          '📤 Submeter online em aima.gov.pt com Chave Móvel. Ver guia «AIMA online 2026»',
          '⏱️ Aguardar decisão: 30–90 dias (por lei — 90 dias; na prática, 60–180 dias em 2026)',
          '📅 Marcação da biometria (após aprovação): proposta automática de data na área pessoal',
          '⚠️ Se a AIMA não responder >90 dias: apresentar reclamação à Provedoria de Justiça (gratuito), depois — ação no Tribunal Administrativo'
        ]},
        { kind: 'warning', text: 'Se tem um visto D (tipo D7, D8, D2 etc.), DEVE registar-se na AIMA no prazo de 4 meses a contar da data de entrada. Caso contrário, o visto «caduca» e será necessário um novo.' }
      ]
    },
    {
      id: 'month-4-9',
      title: 'Meses 4–9 — emissão do título de residência',
      content: [
        { kind: 'checklist', items: [
          '✅ Receber decisão positiva da AIMA (carta + área pessoal)',
          '📸 Fazer a biometria numa delegação da AIMA (15 minutos — impressões digitais e fotografia)',
          '📬 Após ~30–60 dias — receção do título de residência (cartão físico) por correio CTT (registo) ou presencialmente na AIMA',
          '💳 Registo do cartão de autorização de residência no banco (substituir o estatuto «temporário» por «residente»)',
          '🚗 Se tem um automóvel vindo do estrangeiro — iniciar o processo de importação + matrícula portuguesa (ver guia «Importação de carro da UE»)',
          '📋 Atualizar a morada nas Finanças, Segurança Social (se mudou de casa)'
        ]}
      ]
    },
    {
      id: 'year-1',
      title: 'Ano 1 — impostos e seguros',
      content: [
        { kind: 'checklist', items: [
          '📅 Abril–junho do ano seguinte: entrega do IRS (Modelo 3) relativo ao ano civil anterior. Prazo: 1 de abril – 30 de junho. A maioria — através de portaldasfinancas.gov.pt, com pré-preenchimento automático. Ver «Entrega do IRS».',
          '💰 Se trabalha com recibos verdes: a entrega do IRS é obrigatória desde o primeiro ano, mesmo que não tenha ganho nada — caso contrário, há coima',
          '🚨 Declaração anexo J (contas e rendimentos no estrangeiro): se tiver contas no estrangeiro — obrigatório',
          '🏠 Renovar o seguro de arrendamento (seguro multirisco) — obrigatório por lei, ~50–150 €/ano',
          '🏥 Se tem carro — renovar o seguro automóvel (mínimo — responsabilidade civil)',
          '📋 Verificar a atualização da data de validade da autorização de residência — a maioria dos vistos D dá 2 anos, depois renovação por 3 anos',
          '🎓 Se está a estudar — renovar a autorização de residência D4 student antes do fim do ano letivo'
        ]},
        { kind: 'warning', text: 'IRS, IUC (imposto automóvel) e IMI (imposto sobre imóveis) — os três impostos principais. Todos os três têm notificações automáticas através de portaldasfinancas + e-Balcão. Ative as notificações push na app do banco ligadas à rede Multibanco — verá todas as cobranças.' }
      ]
    },
    {
      id: 'year-2',
      title: 'Ano 2 — renovação da autorização de residência',
      content: [
        { kind: 'checklist', items: [
          '📅 60 dias antes do fim da validade da autorização de residência: submeter o pedido de renovação através de aima.gov.pt',
          '📋 Documentos: os mesmos da primeira submissão + comprovativo de rendimentos (IRS dos últimos 2 anos)',
          '💶 Taxa: 96,12 € (renovação = mesmo custo)',
          '⏱️ Se a AIMA não responder e a autorização de residência estiver prestes a expirar: a sua autorização de residência é OFICIALMENTE prorrogada automaticamente até à decisão da AIMA — traga consigo a autorização de residência antiga + comprovativo de submissão do pedido de renovação',
          '🇵🇹 Ano 2+ — excelente altura para começar a aprender português de forma ativa (para a nacionalidade será necessário A2; para a autorização de residência permanente é útil)',
          '🎓 Inscrever-se em cursos gratuitos PLA (Português Língua de Acolhimento) numa escola ou online — ver «Aprender português»'
        ]}
      ]
    },
    {
      id: 'years-3-4',
      title: 'Anos 3–4 — estabilização',
      content: [
        { kind: 'checklist', items: [
          '🏠 Se planeia comprar casa — este é o ano para planeamento financeiro (crédito habitação para estrangeiros, IMT, imposto do selo)',
          '💼 Se trabalha oficialmente — confirme que as contribuições para a Segurança Social estão a ser feitas (através de ssdireta.seg-social.pt)',
          '👨‍👩‍👧 Se tem família — considere o Reagrupamento Familiar (D6 family reunification) para pais/filhos que ficaram no estrangeiro',
          '🌐 Certificado A2 de português — faça o CIPLE com antecedência (necessário para a nacionalidade). Ver «Exame CIPLE A2»',
          '📊 Regime fiscal para novos residentes: o NHR fechou para novos pedidos em 2024; foi substituído pelo IFICI (Incentivo Fiscal à Investigação Científica e Inovação), com uma lista mais restrita de profissões elegíveis. Verifique a elegibilidade para o IFICI nas Finanças/ATA nos primeiros anos de residência'
        ]}
      ]
    },
    {
      id: 'year-5',
      title: 'Ano 5 — nacionalidade ou autorização de residência permanente',
      content: [
        { kind: 'paragraph', text: 'Após 5 anos de residência legal, pode escolher: pedir a nacionalidade (ao abrigo da lei antiga — enquanto estiver em vigor) ou a autorização de residência permanente.' },
        { kind: 'checklist', items: [
          '🆔 Pedido de naturalização: formulários IRN, certificado A2 PT, certidão de residência legal da AIMA, certificados de registo criminal de todos os países onde residiu >1 ano, taxa de 250 €. Ver «Naturalização 2026»',
          '⚖️ IMPORTANTE: a partir de 2026, a nova lei pode alterar os prazos para 7 (CPLP+EU) ou 10 (países terceiros) anos. Submeta online através do Portal da Nacionalidade ANTES da publicação no DRE — garante a aplicação das regras antigas',
          '🌍 Alternativa: autorização de residência permanente (residencia permanente) — dá quase todos os direitos de um cidadão, exceto votar e ter passaporte, sem renunciar a outra nacionalidade, sem requisito A2 (embora A1 seja recomendado)',
          '👶 Se nasceram filhos em Portugal — podem obter a nacionalidade automaticamente (ver «Nacionalidade por descendência»)'
        ]}
      ]
    },
    {
      id: 'continuous',
      title: 'O que fazer continuamente',
      content: [
        { kind: 'checklist', items: [
          '📋 Uma vez por ano: verificar a validade da autorização de residência, passaporte, carta de condução',
          '🏥 Uma vez por ano: ir ao médico de família (medicina geral familiar) para check-up — gratuito através do SNS',
          '💉 Vacina contra a gripe no outono (outubro-novembro) — gratuita no centro de saúde',
          '📊 A cada 5 anos: raio-X ao tórax + check-up médico geral',
          '🚗 A cada 2 anos para carros <8 anos, anualmente para carros >8 anos: inspeção automóvel (inspeção IPO) — ver «Inspeção IPO»',
          '🎂 A cada 5 anos (para CC após os 25 anos): renovação do Cartão de Cidadão (para cidadãos portugueses após naturalização)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — visão geral dos procedimentos e prazos (site oficial)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal das Finanças — obrigações do contribuinte', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Como obter NISS', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — Como obter número de utente (SNS24)', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal / AMA — Chave Móvel Digital', url: 'https://eportugal.gov.pt/cidadaos/-/chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Pedidos de nacionalidade', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'Novo guia: calendário do imigrante — o que fazer mês a mês após a chegada a Portugal. Mês 1 (NIF, banco, arrendamento), mês 2 (NISS, SNS, Chave Móvel), meses 2-4 (AIMA), meses 4-9 (obtenção da autorização de residência), ano 1 (IRS, seguros), ano 2 (renovação da autorização de residência), ano 5 (nacionalidade/autorização de residência permanente). Ligado a todos os guias principais na aplicação.'
}
