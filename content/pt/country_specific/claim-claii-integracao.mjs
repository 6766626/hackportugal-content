export default {
  editorialVoice: 'hackportugal',
  id: 'claim-claii-integracao',
  categoryId: 'country_specific',
  title: 'CLAIM/CLAII — centros locais de apoio à integração de migrantes',
  tldr: 'CLAIM são pontos locais gratuitos de apoio a migrantes: explicam que documentos são necessários para AIMA, Finanças, SNS, Segurança Social, escola, habitação e trabalho, ajudam a preencher formulários e a fazer marcações online. A rede funciona em mais de 90 municípios através da Câmara Municipal/Junta de Freguesia, AIMA e da antiga estrutura ACM; a designação antiga CLAII ainda aparece em sites. Não é um acelerador de autorização de residência nem um advogado, e as taxas administrativas da AIMA/IRN/Finanças são pagas à parte.',
  tags: ['claim', 'migrantes', 'aima', 'integração'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-claim',
      title: 'O que é o CLAIM e porque é que a designação antiga CLAII ainda aparece',
      content: [
        { kind: 'paragraph', text: 'CLAIM significa Centros Locais de Apoio à Integração de Migrantes. São centros locais de apoio à integração de migrantes. Prestam apoio inicial gratuito em questões do dia a dia, administrativas e de integração: documentos, marcações, cartas de organismos públicos, acesso ao SNS, escola, Segurança Social e direitos laborais.' },
        { kind: 'paragraph', text: 'CLAII é a designação antiga da rede: Centros Locais de Apoio à Integração de Imigrantes. Em alguns sites municipais, placas e PDF, ainda é utilizada. Na prática, CLAIM e CLAII muitas vezes significam a mesma coisa: um gabinete local de apoio a migrantes.' },
        { kind: 'paragraph', text: 'O CLAIM funciona normalmente junto da Câmara Municipal, Junta de Freguesia, associação local, Santa Casa ou outra organização local, mas está metodologicamente ligado à AIMA e à herança do ACM. Por isso, a qualidade e os horários de atendimento dependem do município concreto.' }
      ]
    },
    {
      id: 'what-they-help-with',
      title: 'Em que ajudam na prática 🧾',
      content: [
        { kind: 'checklist', items: [
          'AIMA: explicar o tipo de procedimento, a lista de documentos, o que significa uma carta/notificação e como se preparar para o atendimento',
          'Finanças: NIF, morada fiscal, acesso ao Portal das Finanças, questões básicas de IRS/IVA sem planeamento fiscal',
          'Segurança Social: NISS, Segurança Social Direta, prestações familiares e sociais, se houver direito',
          'SNS: número de utente, Centro de Saúde, encaminhamento para o SNS24, orientação básica sobre o acesso a cuidados de saúde',
          'Escola e crianças: matrícula, equivalência escolar, contacto com a escola ou a Câmara sobre transporte/alimentação',
          'Trabalho: informação básica sobre contrato de trabalho, recibos verdes, ACT, IEFP e direitos do trabalhador',
          'Habitação e morada: atestado de residência, contactos da Junta de Freguesia, esclarecimento de cartas do senhorio/município',
          'Tradução do sentido dos documentos: ajuda para compreender uma carta em português, mas não tradução notarial',
          'Marcação e navegação em portais: ePortugal, AIMA, Segurança Social Direta, Portal das Finanças, SNS24',
          'Encaminhamento para CNAIM, advogado, associação, linha telefónica ou outro serviço, se a questão for complexa'
        ] },
        { kind: 'warning', text: 'O CLAIM não emite autorização de residência, NIF, NISS ou número de utente por si só. O centro ajuda a preparar e entregar/explicar documentos, mas a decisão cabe ao organismo competente: AIMA, Finanças, Segurança Social, SNS, IRN, Câmara Municipal ou escola.' }
      ]
    },
    {
      id: 'limits',
      title: 'Limitações: o que o CLAIM não pode fazer',
      content: [
        { kind: 'paragraph', text: 'O erro principal é ir ao CLAIM como se fosse uma “via alternativa” para a AIMA. Isso não funciona. O CLAIM não tem uma quota própria de vagas da AIMA, não acelera a análise da autorização de residência e não anula multas, taxas ou requisitos legais.' },
        { kind: 'checklist', items: [
          'Não garante marcação na AIMA e não vende vagas',
          'Não decide sobre autorização de residência, renovação de autorização de residência ou nacionalidade',
          'Não substitui um advogado/solicitador num litígio, tribunal, reclamação ou processo fiscal complexo',
          'Não faz tradução certificada, apostila, reconhecimento de assinatura ou ato notarial',
          'Não paga por si taxas administrativas da AIMA, IRN, Finanças, IMT, IMI, IUC ou outros pagamentos',
          'Não é obrigado a falar russo: as línguas dependem do centro e dos funcionários concretos',
          'Não é um serviço de emergência: em caso de perigo de vida, ligue 112; para questões de saúde — SNS24 808 24 24 24'
        ] },
        { kind: 'warning', text: 'Se alguém se apresentar como “funcionário do CLAIM” e pedir dinheiro por uma marcação na AIMA, aceleração da autorização de residência ou tratamento de documentos “sem fila”, isso é um sinal de alerta. A consulta oficial do CLAIM é gratuita; as taxas do Estado são pagas apenas por meios oficiais.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Como encontrar o CLAIM mais próximo',
      content: [
        { kind: 'substeps', items: [
          { id: 'search-official', title: '1. Procure através dos sites oficiais', content: [
            { kind: 'paragraph', text: 'Comece por aima.gov.pt e acm.gov.pt: procure “CLAIM”, “Centro Local de Apoio à Integração de Migrantes” ou “rede CLAIM”. Nos resultados há normalmente uma lista de centros, morada, telefone, email, entidade promotora e horário de atendimento.' }
          ] },
          { id: 'municipality-site', title: '2. Consulte o site da Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Nos sites municipais, o serviço pode chamar-se CLAIM, CLAII, Gabinete de Apoio ao Imigrante, Espaço Cidadão Migrante ou Integração de Migrantes. Pesquisar no site da Câmara + “CLAIM” é muitas vezes mais rápido do que uma pesquisa geral no Google.' }
          ] },
          { id: 'book-before-going', title: '3. Confirme a marcação antes da visita', content: [
            { kind: 'checklist', items: [
              'Telefone ou envie email: muitos centros atendem apenas por marcação',
              'Confirme as línguas da consulta: português, inglês, francês, árabe, ucraniano, etc.',
              'Pergunte se pode ir sem autorização de residência, mas com passaporte e visto/comprovativo de permanência',
              'Peça confirmação da lista de documentos para o seu tema',
              'Se o centro da sua freguesia estiver sobrecarregado, pergunte se o município vizinho atende'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'what-to-bring',
      title: 'O que levar para a consulta',
      content: [
        { kind: 'paragraph', text: 'Quanto melhor for a preparação, mais útil será a visita. Normalmente, o funcionário do CLAIM não consegue “adivinhar” a sua situação sem datas de entrada, tipo de visto, cartas dos serviços e morada efetiva.' },
        { kind: 'checklist', items: [
          'Passaporte e cópia da página com os dados pessoais',
          'Visto D1-D8, visto Schengen, carimbo de entrada ou outro documento de entrada/permanência',
          'Autorização de residência, cartão de residência, Manifestação de Interesse/comprovativo de procedimento AIMA — se existir',
          'NIF e dados de acesso ao Portal das Finanças — se já existirem',
          'NISS e acesso à Segurança Social Direta — se já existirem',
          'Contrato de arrendamento, comprovativo de morada, atestado de residência ou fatura de serviços públicos',
          'Todas as cartas/SMS/email da AIMA, Finanças, Segurança Social, SNS, IRN, Câmara ou escola',
          'Contrato de trabalho, recibos verdes, recibos de vencimento ou declaração de início de atividade — se a questão for sobre trabalho',
          'Certidões de nascimento/casamento, documentos escolares das crianças, traduções — se a questão for familiar',
          'Lista de perguntas concretas em papel ou no telefone, para não se esquecer durante o atendimento'
        ] },
        { kind: 'warning', text: 'Não entregue originais de documentos por muito tempo sem recibo e não transmita palavras-passe do Portal das Finanças, Segurança Social Direta, email ou CMD a terceiros. Na consulta, pode inserir os dados você próprio no seu telefone.' }
      ]
    },
    {
      id: 'when-to-use',
      title: 'Quando o CLAIM é especialmente útil',
      content: [
        { kind: 'paragraph', text: 'O CLAIM funciona melhor como “tradutor do sistema”: explicam-lhe onde deve ir, que documento é necessário, o que está escrito numa carta e qual é o passo seguinte. Isto é especialmente útil nos primeiros 3–6 meses em Portugal, quando são necessários ao mesmo tempo NIF, morada, SNS, escola, trabalho e AIMA.' },
        { kind: 'checklist', items: [
          'Acabou de chegar e não percebe por onde começar a regularizar a vida quotidiana',
          'Recebeu uma carta da AIMA/Finanças/SNS e não compreende o prazo ou o requisito',
          'Precisa de se preparar para uma marcação na AIMA e verificar o conjunto de documentos',
          'Precisa de matricular uma criança na escola ou compreender as regras municipais',
          'Precisa de explicar ao Centro de Saúde porque tem direito a número de utente',
          'Não fala português e precisa de um intermediário para o primeiro contacto com um serviço local',
          'Precisa de encaminhamento: o CLAIM dirá quando a questão já exige advogado, ACT, CNAIM, Segurança Social ou Tribunal'
        ] },
        { kind: 'paragraph', text: 'Se a questão for urgente e juridicamente arriscada — indeferimento da AIMA, prazo de recurso a expirar, despejo, dívida, violência doméstica, detenção, inspeção fiscal complexa — use o CLAIM apenas como ponto de entrada e peça imediatamente encaminhamento para um serviço especializado ou jurista.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta CLAIM/CLAII', amountEUR: 0, note: 'Gratuita; o centro não deve cobrar dinheiro pelo atendimento ou pelo esclarecimento de documentos' },
    { label: 'Taxas do Estado', amountEURMin: 0, amountEURMax: 307.2, note: 'O CLAIM não anula as taxas oficiais. Por exemplo, após 01.03.2026, as taxas da AIMA podem incluir 133 € por admission e 307,20 € ao abrigo do art. 75, dependendo do procedimento' }
  ],
  sources: [
    { title: 'AIMA — Agência para a Integração, Migrações e Asilo: informação e serviços para migrantes', url: 'https://aima.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACM — informação arquivada e de referência sobre CLAIM/CNAIM e integração de migrantes', url: 'https://www.acm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — portal do Estado para serviços e contactos da administração pública', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
