export default {
  editorialVoice: 'hackportugal',
  id: 'immigrant-calendar',
  categoryId: 'before_arrival',
  title: 'Calendário do imigrante — o que fazer mês a mês após a chegada',
  tldr: 'Checklist mês a mês para os primeiros 24 meses em Portugal. Mês 1 (NIF, conta bancária, contrato de arrendamento); Mês 2 (NISS, junta de freguesia, utente SNS); Meses 2–4 (pedido de autorização de residência na AIMA, taxa de 96 €, verificação de estado no portal); Meses 4–9 (emissão do título de residência); Ano 1 (IRS até 30 de junho, verificação de morada e seguros); Ano 2 (renovação do título 60 dias antes do prazo, atualização de morada nas Finanças). Após 5 anos — residência permanente ou cidadania (guia separado). Cada passo remete para o guia detalhado na aplicação.',
  tags: ['calendário', 'checklist', 'imigração', 'onboarding'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'month-1',
      title: 'Mês 1 — fundamentos críticos',
      content: [
        { kind: 'paragraph', text: 'Os primeiros 30 dias são para obter NIF e abrir conta bancária. Sem NIF não assina arrendamento, não compra passe, não regista cartão SIM. Em paralelo — mude-se e assine o contrato de arrendamento (com registo nas Finanças, caso contrário não conta como morada fiscal para o resto).' },
        { kind: 'checklist', items: [
          '🆔 Dia 1–7: obtenha o NIF (Número de Identificação Fiscal). Para cidadãos CPLP — gratuito nas Finanças com passaporte + morada. Para nacionais de países terceiros — precisa de um representante fiscal (~80–150 €) ou amigo CPLP. Ver «NIF para países terceiros».',
          '🏠 Dia 1–14: assine contrato de arrendamento de longa duração (mínimo 1 ano). O senhorio TEM de o registar nas Finanças (recibo eletrónico) — caso contrário não tem «morada fiscal». Ver «Contrato de arrendamento».',
          '🏦 Dia 1–14: abra conta bancária (ActivoBank/Best/Millennium). Precisa de: passaporte + NIF + comprovativo de morada (fatura ou contrato). Presencial. Ver «Bancos comparados».',
          '📱 Dia 7–14: compre cartão SIM português (MEO, NOS, Vodafone) — para ativações (Chave Móvel, MB Way, notificações do banco). Registado em seu passaporte + NIF.',
          '🗺️ Dia 14–30: obtenha um «atestado de residência» na junta de freguesia (gratuito, 10 minutos). Vai precisar dele para muitos passos seguintes.'
        ]},
        { kind: 'warning', text: 'NÃO deixe tudo para «o último dia dos 90 dias Schengen». O pedido de autorização de residência exige já ter NIF, NISS, banco e morada. Com visto D só tem 4 meses para se registar na AIMA a contar da data de entrada.' }
      ]
    },
    {
      id: 'month-2',
      title: 'Mês 2 — segurança social e saúde',
      content: [
        { kind: 'checklist', items: [
          '👤 NISS (Número de Identificação de Segurança Social): obtenha pelo Segurança Social Direta online (se já tem Chave Móvel) ou presencialmente. Gratuito. Sem NISS — não pode trabalhar, não pode aceder ao SNS (saúde gratuita). Ver «NISS».',
          '🏥 Utente SNS: com NISS, inscreva-se no centro de saúde correspondente à sua morada. Recebe um «número de utente» — chave para médico, receitas e hospital gratuitos. Ver «SNS utente».',
          '🔑 Chave Móvel Digital: configure pela app SNS24 ou na Loja do Cidadão. É o identificador digital português único — uma chave para AIMA, Finanças, ePortugal. Poupa-lhe dezenas de horas.',
          '📧 e-Balcão das Finanças: ative a sua conta em portaldasfinancas.gov.pt. Com Chave Móvel, demora 5 minutos. Por aqui faz IRS, certidões, tudo.',
          '📨 Subscreva notificações eletrónicas dos CTT: para que AIMA/Finanças/banco o contactem sem cartas em papel'
        ]}
      ]
    },
    {
      id: 'month-2-4',
      title: 'Meses 2–4 — pedido de autorização de residência na AIMA',
      content: [
        { kind: 'paragraph', text: 'Desde 2024-2025 a AIMA passou a maior parte dos tipos de autorização para submissão online via aima.gov.pt e portal SAPA. Não há reunião presencial para o pedido (só biometria final após aprovação).' },
        { kind: 'checklist', items: [
          '📝 Prepare o dossier: passaporte, visto D (se aplicável), NIF, NISS, contrato de arrendamento + registo nas Finanças, extrato bancário (3 meses), registo criminal do país de nacionalidade (apostilha + tradução), comprovativo de rendimento/estudo (depende do tipo)',
          '💶 Pague a taxa AIMA: 96,12 € para a maioria dos tipos D (D1-D9), via referência Multibanco',
          '📤 Submeta online em aima.gov.pt com Chave Móvel. Ver guia «AIMA online 2026»',
          '⏱️ Espera pela decisão: 30–90 dias por lei, 60–180 dias na prática em 2026',
          '📅 Marcação da biometria (após aprovação): proposta de data automática no portal',
          '⚠️ Se a AIMA ficar em silêncio >90 dias: reclamação para a Provedoria de Justiça (gratuita), depois ação no Tribunal Administrativo'
        ]},
        { kind: 'warning', text: 'Se tem visto D (D7, D8, D2 etc.), TEM de se registar na AIMA no prazo de 4 meses a contar da entrada. Caso contrário o visto «caduca» e precisa de novo.' }
      ]
    },
    {
      id: 'month-4-9',
      title: 'Meses 4–9 — emissão do título de residência',
      content: [
        { kind: 'checklist', items: [
          '✅ Receba a decisão favorável da AIMA (carta + portal)',
          '📸 Faça biometria no balcão AIMA (15 minutos — impressões digitais e foto)',
          '📬 Após ~30–60 dias — receba o título de residência (cartão físico) por correio registado dos CTT ou levante na AIMA',
          '💳 Atualize o banco com o cartão de residência (passe de «temporário» para «residente»)',
          '🚗 Se tem carro estrangeiro — comece o processo de importação + matrícula portuguesa (ver «Car import from EU»)',
          '📋 Atualize a morada nas Finanças e na Segurança Social (se mudou de casa)'
        ]}
      ]
    },
    {
      id: 'year-1',
      title: 'Ano 1 — impostos e seguros',
      content: [
        { kind: 'checklist', items: [
          '📅 Abril–junho do ano seguinte: entrega de IRS (Modelo 3) referente ao ano civil anterior. Prazo: 1 de abril – 30 de junho. A maioria entrega via portaldasfinancas.gov.pt, pré-preenchido. Ver «IRS filing».',
          '💰 Se trabalha em recibos verdes: entrega de IRS obrigatória desde o primeiro ano, mesmo sem ter ganho nada — caso contrário coima',
          '🚨 Anexo J (contas e rendimentos no estrangeiro): se tem contas fora — obrigatório',
          '🏠 Renove o seguro de arrendamento (seguro multirisco) — obrigatório por lei, ~50–150 €/ano',
          '🏥 Se tem carro — renove o seguro automóvel (mínimo — responsabilidade civil)',
          '📋 Verifique a data de validade do título de residência — a maioria dos vistos D dá 2 anos, renovação seguinte 3 anos',
          '🎓 Se estuda — renove o D4 student antes do fim do ano letivo'
        ]},
        { kind: 'warning', text: 'IRS, IUC (imposto do carro) e IMI (imposto sobre imóveis) são os três impostos principais. Todos enviam notificações automáticas via portaldasfinancas + e-Balcão. Ligue as notificações push da app do banco à rede Multibanco — vê todas as cobranças.' }
      ]
    },
    {
      id: 'year-2',
      title: 'Ano 2 — renovação do título',
      content: [
        { kind: 'checklist', items: [
          '📅 60 dias antes do título expirar: peça a renovação via aima.gov.pt',
          '📋 Documentos: os mesmos do pedido inicial + comprovativo de rendimentos (IRS dos últimos 2 anos)',
          '💶 Taxa: 96,12 € (renovação tem o mesmo custo)',
          '⏱️ Se a AIMA estiver em silêncio e o título estiver prestes a expirar: o seu título prolonga-se OFICIALMENTE de forma automática até decisão da AIMA — ande com o título antigo + recibo de submissão da renovação',
          '🇵🇹 Ano 2+ é a altura certa para começar a aprender português a sério (precisa de A2 para a nacionalidade e ajuda para a residência permanente)',
          '🎓 Inscreva-se em cursos PLA (Português Língua de Acolhimento) gratuitos numa escola ou online — ver «Learn Portuguese»'
        ]}
      ]
    },
    {
      id: 'years-3-4',
      title: 'Anos 3–4 — estabilização',
      content: [
        { kind: 'checklist', items: [
          '🏠 Se planeia comprar casa — este é o ano para o planeamento financeiro (Mortgage foreigners, IMT, Imposto do Selo)',
          '💼 Se trabalha formalmente — verifique se as contribuições para a Segurança Social estão a ser feitas (via ssdireta.seg-social.pt)',
          '👨‍👩‍👧 Se família — considere o reagrupamento (D6 family reunification) para pais/filhos no estrangeiro',
          '🌐 Certificado A2 de português — faça o CIPLE com antecedência (é preciso para a nacionalidade). Ver «CIPLE A2 exam»',
          '📊 Peça o RNH (Residente Não Habitual) se tem direito — só pode nos primeiros 5 anos, depois nunca mais'
        ]}
      ]
    },
    {
      id: 'year-5',
      title: 'Ano 5 — nacionalidade ou residência permanente',
      content: [
        { kind: 'paragraph', text: 'Após 5 anos de residência legal, pode escolher: pedir a nacionalidade (pelo regime antigo, enquanto este vigorar) ou a residência permanente.' },
        { kind: 'checklist', items: [
          '🆔 Pedido de naturalização: formulários do IRN, certificado A2 de português, certidão de residência legal da AIMA, registos criminais de todos os países onde viveu >1 ano, taxa 250 €. Ver «Naturalization 2026»',
          '⚖️ IMPORTANTE: a partir de 2026 a nova lei pode mudar o prazo para 7 anos (CPLP+UE) ou 10 anos (países terceiros). Submeta via Portal da Nacionalidade ANTES da publicação no DRE — isso fixa-o nas regras antigas',
          '🌍 Alternativa: residência permanente — confere quase todos os direitos do cidadão, exceto votar e ter passaporte, sem renunciar a outra cidadania, sem requisito de A2 (embora A1 seja recomendado)',
          '👶 Se tem filhos nascidos em Portugal — podem ter nacionalidade automaticamente (ver «Citizenship by descent»)'
        ]}
      ]
    },
    {
      id: 'continuous',
      title: 'O que fazer continuamente',
      content: [
        { kind: 'checklist', items: [
          '📋 Anualmente: verifique a validade do título de residência, passaporte e carta de condução',
          '🏥 Anualmente: vá ao médico de família (medicina geral familiar) para check-up — gratuito pelo SNS',
          '💉 Vacina da gripe no outono (outubro-novembro) — gratuita no centro de saúde',
          '📊 De 5 em 5 anos: raio-X do tórax + check-up geral',
          '🚗 De 2 em 2 anos para carros <8 anos, anualmente para >8 anos: inspeção (inspeção IPO) — ver «IPO inspection»',
          '🎂 De 5 em 5 anos (para CC após os 25): renovação do Cartão de Cidadão (para cidadãos portugueses após naturalização)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — descrição de procedimentos e prazos (site oficial)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal das Finanças — obrigações do contribuinte', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — como obter NISS', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — como obter número de utente (SNS24)', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal / AMA — Chave Móvel Digital', url: 'https://eportugal.gov.pt/cidadaos/-/chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Pedidos de nacionalidade', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'Novo guia: calendário do imigrante — o que fazer mês a mês depois de chegar a Portugal. Mês 1 (NIF, banco, arrendamento), mês 2 (NISS, SNS, Chave Móvel), meses 2-4 (AIMA), meses 4-9 (emissão do título), ano 1 (IRS, seguros), ano 2 (renovação), ano 5 (nacionalidade/residência permanente). Cruzado com os guias-chave da app.'
}
