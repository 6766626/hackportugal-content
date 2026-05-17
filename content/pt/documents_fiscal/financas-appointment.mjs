export default {
  editorialVoice: 'hackportugal',
  id: 'financas-appointment',
  categoryId: 'documents_fiscal',
  title: 'Marcação nas Finanças — online e sem filas',
  tldr: 'As Finanças passaram para um modelo híbrido: a maioria das operações é feita online, e o atendimento presencial é por marcação através do Portal das Finanças («Atendimento por Marcação / Agendar atendimento»). Sem marcação, por vezes é possível ser atendido se houver senhas/atendimento livre, mas não é garantido. A marcação é gratuita; as datas disponíveis dependem do serviço de finanças e do tipo de serviço — em Lisboa/Porto, as vagas podem esgotar rapidamente. Serviços populares: NIF, alteração de morada, senha, IRS, recibos verdes, IUC, IMT (imposto na compra de imóveis).',
  tags: ['finanças', 'marcação', 'atendimento'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'how-to-book',
      title: 'Como fazer a marcação',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças → Contactos / Atendimento por Marcação / Agendar atendimento',
          '🌐 e-balcão — é uma alternativa para enviar um pedido escrito à AT, mas não é uma marcação de atendimento',
          '📱 É necessário iniciar sessão com senha ou CMD',
          '🏛️ Escolher o serviço de finanças (Serviço de Finanças)',
          '📋 Escolher o serviço na lista',
          '📅 Escolher a data e hora disponíveis; a duração depende do serviço',
          '✅ Confirmar e descarregar o comprovativo com código QR',
          '🔔 Guarde o comprovativo da marcação; se o sistema enviar um lembrete por email/SMS — verifique os dados de contacto'
        ]}
      ]
    },
    {
      id: 'services-list',
      title: 'Serviços populares com marcação',
      content: [
        { kind: 'checklist', items: [
          '🆔 Atribuição de NIF (para estrangeiros) — 15 min',
          '🏠 Alteração de morada — 10 min (normalmente online)',
          '🔑 Senha de acesso (activação da senha) — 5 min',
          '💼 Início / Cessação de Atividade (trabalhador independente) — 30 min',
          '🧾 Certidões (domicílio, dívida, rendimentos) — 15 min',
          '🚗 IUC — imposto sobre veículo (20 min)',
          '🏠 IMT — imposto na compra de imóveis (20 min)',
          '🏢 IMI — 30 min',
          '📄 Apoio ao preenchimento de IRS — 30–45 min; época principal de entrega da Modelo 3: 1 de abril – 30 de junho'
        ]}
      ]
    },
    {
      id: 'walk-in',
      title: 'Sem marcação',
      content: [
        { kind: 'checklist', items: [
          'Serviços grandes em Lisboa (Saldanha, Algés, Restelo) — fila a partir das 07:30',
          'Porto Baixa, Gaia, Matosinhos — semelhante',
          'Serviços mais pequenos em regiões afastadas — o atendimento sem marcação decorre muitas vezes sem problemas',
          'Pode ser recusado se as vagas estiverem cheias — é melhor fazer marcação',
          'Sem marcação, conte apenas com questões urgentes ou simples; se houver muita afluência, podem pedir que faça marcação'
        ]}
      ]
    },
    {
      id: 'no-show',
      title: 'Faltou à marcação',
      content: [
        { kind: 'paragraph', text: 'Se não puder comparecer, cancele ou remarque a marcação o mais cedo possível através do mesmo canal onde a efectuou. Verifique as condições de cancelamento no comprovativo de confirmação da marcação.' },
        { kind: 'checklist', items: [
          '⚠️ Cancele/remarque com antecedência',
          '🔄 Após um no-show, faça uma nova marcação; se o sistema não permitir escolher uma vaga, contacte através do e-balcão ou do Centro de Atendimento Telefónico da AT',
          '📞 Se chegar atrasado < 15 min — muitas vezes atendem',
          '🚫 Se chegar atrasado > 15 min — é necessária nova marcação'
        ]}
      ]
    },
    {
      id: 'online-alternatives',
      title: 'O que pode fazer SEM visita',
      content: [
        { kind: 'paragraph', text: 'Desde 2022, a maioria das operações está disponível online. A visita às Finanças é normalmente necessária nos casos em que é exigida identificação presencial, quando não é possível resolver a questão através do Portal/e-balcão ou quando o serviço não está disponível online. A biometria não é tratada nas Finanças — isso é com a AIMA/IRN.' },
        { kind: 'checklist', items: [
          '✅ A obtenção de NIF por estrangeiro depende do estatuto e dos documentos: um não residente normalmente através de representante fiscal/mandatário pelo e-balcão ou presencialmente no Serviço de Finanças',
          '✅ Alteração de morada — online',
          '✅ Activação da senha — online (envio por correio)',
          '✅ Declaração de IRS — online (Modelo 3)',
          '✅ Certidões — descarregar PDF',
          '✅ Recibo Verde — emissão online',
          '❌ Se o estrangeiro não tiver acesso ao Portal/CMD e não tiver representante/mandatário — normalmente resta o atendimento presencial no Serviço de Finanças com os documentos'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Atendimento por Marcação', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Agendar atendimento no Serviço de Finanças', url: 'https://eportugal.gov.pt/servicos/agendar-atendimento-no-servico-de-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — e-balcão (pedidos escritos)', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
