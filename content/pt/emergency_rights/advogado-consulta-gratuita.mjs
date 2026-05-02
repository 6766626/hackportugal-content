export default {
  editorialVoice: 'hackportugal',
  id: 'advogado-consulta-gratuita',
  categoryId: 'emergency_rights',
  title: 'Consulta jurídica gratuita: Junta de Freguesia + Ordem dos Advogados',
  tldr: 'Em Portugal há 3 vias gratuitas práticas: atendimento por jurista/advogado na sua Junta de Freguesia, gabinetes especializados para migrantes e famílias como o GIAAP/estruturas da CIG, e Apoio Judiciário ao abrigo da Lei 34/2004 — se os rendimentos forem baixos, o Estado paga o advogado, as custas judiciais ou o seu pagamento faseado. As consultas na Junta são normalmente 1 vez por semana/mês, por marcação, e não existem em todo o lado. Para tribunal não precisa de “conselho”, mas sim de um pedido oficial através da Segurança Social; os limiares são calculados a partir do IAS 537,13 € em 2026.',
  tags: ['advogado', 'junta', 'apoiojudiciário', 'migrantes'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-exists',
      title: 'Que opções gratuitas funcionam na prática',
      content: [
        { kind: 'paragraph', text: '“Consulta jurídica gratuita” em Portugal não é um único serviço, mas vários canais diferentes. É importante escolher o canal certo: aconselhamento rápido sobre um problema quotidiano, apoio especializado para migrantes/família/violência ou um advogado completo para tribunal.' },
        { kind: 'checklist', items: [
          'Junta de Freguesia — órgão local da freguesia; em muitas Juntas há atendimento gratuito por jurista ou advogado, mediante marcação.',
          'Câmara Municipal — em alguns municípios existe Gabinete Jurídico, Gabinete de Apoio ao Munícipe ou gabinete para migrantes.',
          'GIAAP / Gabinetes de Informação, Atendimento e Apoio — consultas e encaminhamento em questões familiares, sociais e migratórias; a existência depende da cidade e da rede de parceiros.',
          'CIG — Comissão para a Cidadania e a Igualdade de Género; útil em casos de violência doméstica, discriminação, violência de género e crises familiares.',
          'Ordem dos Advogados — participa no sistema de nomeação de advogados através do Apoio Judiciário e publica informação sobre o acesso ao direito.',
          'Apoio Judiciário — mecanismo oficial ao abrigo da Lei 34/2004: pagamento de advogado, dispensa de custas judiciais ou pagamento faseado para pessoas com insuficiência económica.'
        ] },
        { kind: 'warning', text: 'O atendimento na Junta é normalmente uma consulta inicial. O jurista pode explicar direitos, verificar uma carta, indicar passos, mas não é obrigado a conduzir o seu processo em tribunal, redigir peças processuais ou representá-lo perante a AIMA, Tribunal, ACT ou Finanças.' }
      ]
    },
    {
      id: 'junta-route',
      title: 'Via 1: marcar na Junta de Freguesia',
      content: [
        { kind: 'paragraph', text: 'Comece pela Junta de Freguesia da sua morada. Em muitas Juntas, as consultas realizam-se uma vez por semana ou uma vez por mês, muitas vezes ao fim do dia, mediante marcação prévia. O serviço pode chamar-se consulta jurídica gratuita, apoio jurídico, gabinete jurídico ou atendimento jurídico.' },
        { kind: 'checklist', items: [
          'Encontre o site da sua Junta de Freguesia ou telefone para a secretaria.',
          'Pergunte: “Têm consulta jurídica gratuita? Como posso marcar?”',
          'Confirme a língua: português quase sempre; inglês depende do jurista concreto.',
          'Descreva o tema de forma breve: arrendamento, contrato de trabalho, dívida, divórcio, autorização de residência, coima, litígio de consumo.',
          'Confirme se atendem não residentes da freguesia: algumas Juntas ajudam apenas moradores registados.',
          'Peça um e-mail para enviar documentos antecipadamente, se a consulta for curta.',
          'Se não houver vagas na sua Junta, pergunte pela Câmara Municipal ou por serviços sociais vizinhos.'
        ] },
        { kind: 'paragraph', text: 'Leve para a reunião os documentos do caso: contrato de arrendamento, recibos, cartas do senhorio, AIMA, Finanças, ACT, tribunal, emails, screenshots, NIF, passaporte/autorização de residência, comprovativo de morada. Quanto menos “história contada” houver, mais útil será a consulta.' },
        { kind: 'warning', text: 'Não deixe passar prazos. Em Portugal, muitas respostas têm prazos curtos: 10 dias, 15 dias, 30 dias. A fila gratuita na Junta não suspende o prazo para reclamação, oposição, recurso ou resposta a uma carta registada.' }
      ]
    },
    {
      id: 'migrant-family-help',
      title: 'Via 2: migrantes, família, violência, discriminação',
      content: [
        { kind: 'paragraph', text: 'Se o problema estiver relacionado com violência familiar, ameaças, divórcio, crianças, discriminação, tráfico de seres humanos ou situação de vulnerabilidade, não se limite a uma consulta geral na Junta. Nestes casos existem redes de apoio especializadas, incluindo estruturas ligadas à CIG, aos municípios e a ONG.' },
        { kind: 'checklist', items: [
          'Em caso de violência doméstica, ligue 112 se a ameaça for imediata.',
          'Linha Nacional de Emergência Social: 144 — emergência social.',
          'Serviço de Informação às Vítimas de Violência Doméstica: 800 202 148 — linha gratuita da CIG, funciona 24 horas por dia.',
          'SMS para vítimas de violência doméstica: 3060, se for perigoso falar.',
          'Peça encaminhamento para apoio jurídico e apoio psicológico.',
          'Guarde provas: mensagens, e-mails, fotos, relatórios médicos, queixa na PSP/GNR.',
          'Se houver crianças, confirme medidas de proteção e regulação das responsabilidades parentais.',
          'Se é migrante sem estatuto estável, procure ajuda na mesma: o apoio a vítimas de violência não deve depender da autorização de residência.'
        ] },
        { kind: 'paragraph', text: 'O GIAAP e gabinetes semelhantes podem ter nomes diferentes consoante o município. Procure no site da Câmara Municipal as palavras “migrantes”, “igualdade”, “família”, “apoio jurídico”, “vítimas”. Muitas vezes não conduzem o processo judicial, mas ajudam a perceber o percurso e encaminham para advogado, Segurança Social, PSP/GNR, CPCJ ou Tribunal.' }
      ]
    },
    {
      id: 'apoio-judiciario',
      title: 'Via 3: Apoio Judiciário, se precisar de advogado para tribunal',
      content: [
        { kind: 'paragraph', text: 'Apoio Judiciário é o sistema oficial de acesso ao direito e aos tribunais ao abrigo da Lei 34/2004. É necessário quando não é possível avançar sem advogado: tribunal, processo crime, processo de família, ação judicial, defesa contra uma ação, litígio laboral em tribunal, execução, insolvência. A decisão é tomada pela Segurança Social, e o advogado é nomeado pela Ordem dos Advogados.' },
        { kind: 'checklist', items: [
          'Apresente o pedido de proteção jurídica na Segurança Social: online através da Segurança Social Direta ou presencialmente num serviço de atendimento.',
          'Indique a modalidade de apoio: nomeação e pagamento da compensação de patrono, dispensa de taxa de justiça e demais encargos, pagamento faseado ou consulta jurídica.',
          'Anexe documentos sobre rendimentos, composição do household, renda/empréstimo à habitação, contas, desemprego, prestações sociais, património.',
          'Em 2026, os cálculos estão ligados ao IAS 537,13 €; a Segurança Social considera não só o salário, mas também património/saldos bancários/composição do agregado familiar.',
          'Se o pedido for aprovado, a Ordem dos Advogados nomeia patrono ou defensor.',
          'Se for recusado, pode contestar a decisão dentro do prazo estabelecido; não ignore a carta da Segurança Social.',
          'Se tiver um prazo judicial urgente, peça Apoio Judiciário imediatamente e guarde o comprovativo de entrega.'
        ] },
        { kind: 'warning', text: 'Apoio Judiciário não significa que “qualquer advogado seja gratuito”. Não pode simplesmente escolher um advogado privado caro e pedir ao Estado para pagar a conta. No regime normal, o advogado é nomeado pelo sistema através da Ordem dos Advogados.' }
      ]
    },
    {
      id: 'how-to-prepare',
      title: 'Como preparar-se para que a consulta não seja desperdiçada',
      content: [
        { kind: 'paragraph', text: 'As vagas gratuitas são curtas: muitas vezes 15–30 minutos. A sua tarefa é levar factos, datas e documentos. O jurista não conseguirá ajudar se a história começar com “é tudo complicado” e sem papéis.' },
        { kind: 'checklist', items: [
          'Faça uma cronologia de 1 página: data — acontecimento — documento.',
          'Formule 3 perguntas: “o que fazer?”, “qual é o prazo?”, “onde entregar?”.',
          'Leve originais e cópias dos documentos.',
          'Leve NIF, passaporte, autorização de residência ou visto, comprovativo de morada.',
          'Se a carta chegou por correio registado, guarde o envelope e o aviso de receção.',
          'Para arrendamento: contrato, recibos de renda, caução, troca de mensagens com o senhorio, fotografias de defeitos.',
          'Para trabalho: contrato, recibos de vencimento, horário, mensagens, despedimento, dados do empregador.',
          'Para questões migratórias: comprovativo do pedido AIMA, recibos, email AIMA, título/visa, entry stamp.',
          'Se precisar de intérprete, leve uma pessoa em quem confie; não dependa de tradução automática para termos jurídicos complexos.'
        ] },
        { kind: 'warning', text: 'Não assine confissão de dívida, acordo de revogação, denúncia de contrato, acordo parental ou qualquer documento “só para fechar o assunto” antes de o jurista explicar as consequências. Em Portugal, um acordo assinado é muitas vezes difícil de reverter.' }
      ]
    },
    {
      id: 'when-pay',
      title: 'Quando o canal gratuito não chega',
      content: [
        { kind: 'paragraph', text: 'As consultas gratuitas são boas para diagnóstico e encaminhamento. Mas há situações em que é necessário um advogado privado rapidamente, sobretudo se os rendimentos estiverem acima dos limiares do Apoio Judiciário ou se o caso for comercialmente importante.' },
        { kind: 'checklist', items: [
          'Recebeu uma citação do Tribunal e o prazo já está a correr.',
          'Há despejo, injunção, execução ou penhora.',
          'O empregador despediu-o, não paga o salário ou exige que assine um acordo.',
          'A AIMA recusou ou há risco de perder o prazo para resposta/recurso.',
          'O valor do litígio é significativo: caução, compra de imóvel, negócio, inspeção fiscal.',
          'Precisa de uma carta de advogado em português jurídico.',
          'Não fala português, e o caso exige formulações precisas.'
        ] },
        { kind: 'paragraph', text: 'Peça ao advogado um orçamento escrito: consulta, análise documental, carta, processo judicial, IVA. Em Portugal, os serviços jurídicos estão normalmente sujeitos a IVA de 23%, se não se aplicar isenção. Para uma primeira consulta paga, o intervalo normal no mercado é cerca de 60–150 €, mas os preços são livres.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta na Junta de Freguesia', amountEUR: 0, note: 'Normalmente gratuita, mas a disponibilidade e o horário dependem da Junta concreta.' },
    { label: 'Linha CIG 800 202 148', amountEUR: 0, note: 'Linha gratuita 24 horas por dia para vítimas de violência doméstica.' },
    { label: 'Apoio Judiciário', amountEUR: 0, note: 'Pode cobrir advogado e custas judiciais na totalidade ou permitir pagamento faseado; depende da verificação de meios pela Segurança Social.' },
    { label: 'Primeira consulta paga com advogado', amountEURMin: 60, amountEURMax: 150, note: 'Referência de mercado; os advogados definem os seus próprios honorários, muitas vezes mais IVA 23%.' }
  ],
  sources: [
    { title: 'Ordem dos Advogados: acesso ao direito e Apoio Judiciário', url: 'https://portal.oa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CIG: apoio a vítimas de violência doméstica e contactos de ajuda', url: 'https://www.cig.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social: proteção jurídica / Apoio Judiciário', url: 'https://www.seg-social.pt/protecao-juridica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 34/2004: regime de acesso ao direito e aos tribunais', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2004-34509975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
