export default {
  editorialVoice: 'hackportugal',
  id: 'license-renewal',
  categoryId: 'driving_license',
  title: 'Renovação da carta de condução portuguesa',
  tldr: 'Carta de condução portuguesa (categorias do grupo I — AM/A/B/BE, etc.): válida por 15 anos até aos 60 anos, depois renovação aos 60, 65, 70 e, após os 70, de 2 em 2 anos. Para cartas emitidas antes de 02.01.2013 e para o grupo II (categorias profissionais C/D, etc.) — aplicam-se regras transitórias/especiais próprias (os prazos podem ser mais curtos).\n\nRenovação online através de imt-online.imt.gov.pt com CMD/Chave Móvel Digital — taxa administrativa de 27 € online (30 € presencial; 50% para condutores com 70 ou mais anos) + atestado médico (normalmente exigido a partir dos 60 anos para o grupo I) + avaliação psicotécnica (para determinados casos / idades / categorias).',
  tags: ['carta de condução', 'renovação', 'imt', 'renovação da carta', 'exame médico'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-to-renew',
      title: '⏰ Quando renovar',
      content: [
        { kind: 'checklist', items: [
          '🟢 Grupo I (categorias comuns AM/A/B/BE) — emitidas após 02.01.2013: 15 anos até aos 60 anos, depois renovação aos 60, 65, 70 anos; após os 70 — de 2 em 2 anos',
          '🟡 Atestado médico normalmente exigido a partir dos 60 anos para o grupo I',
          '🟠 Avaliação psicotécnica — para algumas categorias/idades e para o grupo II (condutores profissionais C/D)',
          '⚠️ Grupo II (profissionais C, D, BE com reboques, etc.) — prazos próprios mais curtos, exames anuais/de 2 em 2 anos',
          '⚠️ Cartas emitidas antes de 02.01.2013 — regras transitórias próprias; confirme em imt-ip.pt',
          '⚠️ Se o prazo expirou há menos de 2 anos — normalmente é possível revalidar sem exame, mas não pode conduzir com a carta caducada; peça a revalidação o mais rapidamente possível',
          '🔴 Se a caducidade for superior a 2 anos — o procedimento depende do tempo decorrido: pode ser necessário exame especial e/ou formação. Consulte a tabela actual do IMT para carta caducada',
          '💡 A notificação do IMT chega 60 dias antes por correio ou por e-mail'
        ]}
      ]
    },
    {
      id: 'online',
      title: '💻 Passo 1. Renovação online (recomendado)',
      content: [
        { kind: 'paragraph', text: 'A renovação online está disponível desde 2018 para a maioria das categorias. É a forma mais rápida.' },
        { kind: 'substeps', items: [
          { id: 'o1', title: 'O que é necessário', content: [
            { kind: 'checklist', items: [
              '🆔 Cartão de Cidadão ou autorização de residência + NIF',
              '🔐 Chave Móvel Digital activa',
              '💳 Multibanco/MB WAY/cartão para pagamento',
              '📷 Fotografia recente 3,5×4,5 (carregar através do site)',
              '🩺 Atestado médico — normalmente a partir dos 60 anos para o grupo I; avaliação psicotécnica — para o grupo II e determinados casos'
            ]}
          ]},
          { id: 'o2', title: 'Processo', content: [
            { kind: 'checklist', items: [
              '🌐 imt-online.imt.gov.pt → «Renovação de Carta de Condução»',
              '🔐 Entrar com CMD',
              '📤 Carregar o atestado médico e a fotografia',
              '💳 Pagar 27 € (taxa administrativa online; 50% para condutores com 70 ou mais anos)',
              '📩 Confirmação por e-mail',
              '📬 O cartão chega por correio em 2-4 semanas',
              '✅ Durante o processamento, pode conduzir com o cartão antigo + a confirmação impressa'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'medical',
      title: '🩺 Passo 2. Exame médico (a partir dos 60 anos para o grupo I)',
      content: [
        { kind: 'paragraph', text: 'A partir dos 60 anos, para as categorias comuns do grupo I, normalmente é necessário um atestado médico electrónico emitido por médico (médico de família ou médico autorizado pelo IMT).\n\nA avaliação psicológica não é exigida a todos — sobretudo para o grupo II / categorias profissionais ou quando determinada pelo médico/IMT.' },
        { kind: 'substeps', items: [
          { id: 'm1', title: 'O que é avaliado', content: [
            { kind: 'checklist', items: [
              '👁️ Visão (leitura de tabela a 5 m de distância)',
              '👂 Audição',
              '🩸 Tensão arterial',
              '❤️ Ritmo cardíaco',
              '🧠 Coordenação básica'
            ]}
          ]},
          { id: 'm2', title: 'Onde fazer', content: [
            { kind: 'checklist', items: [
              '🏥 SNS Centro de Saúde — gratuito para residentes, mas com marcação com 1-2 semanas de antecedência',
              '🏥 Médico de família — 15-30 €',
              '🏥 Médico privado autorizado pelo IMT — 30-50 €',
              '⚠️ O atestado é válido por 3 meses — renove rapidamente'
            ]}
          ]},
          { id: 'm3', title: 'Avaliação psicológica (para grupo II / categorias profissionais)', content: [
            { kind: 'checklist', items: [
              '🧠 Avaliação psicológica — normalmente para o grupo II / condutores profissionais e em casos específicos determinados',
              '⏱️ 30-45 min',
              '💰 50-80 € em centros privados',
              '📍 Lista de centros — em imt-ip.pt → «Psicólogos autorizados»'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'in-person',
      title: '🏛️ Alternativa — atendimento presencial',
      content: [
        { kind: 'paragraph', text: 'Se o online não estiver disponível (sem CMD, problemas técnicos) — faça marcação no IMT/Espaço Cidadão.' },
        { kind: 'checklist', items: [
          '📅 Marcação em agendamentos.imt-ip.pt',
          '🆔 Documentos: original da carta de condução, Cartão de Cidadão/autorização de residência, atestado médico, fotografia 3,5×4,5',
          '💰 Taxa: 30 € (presencial; 50% para condutores com 70 ou mais anos, ou seja 15 €)',
          '⏰ Duração da visita: 30 min',
          '📅 Há poucas vagas — marque com 2-4 semanas de antecedência',
          '🏛️ Também é possível em grandes Loja de Cidadão (Lisboa, Porto)'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: '⚠️ Casos especiais',
      content: [
        { kind: 'checklist', items: [
          '📝 Perda/roubo da carta: participação à polícia (PSP/GNR), depois duplicado através do imt-online — 30 €',
          '🩺 Alteração do estado de saúde (diabetes, epilepsia, AVC): é obrigatório informar o IMT; podem exigir novos testes',
          '🚙 Categoria D (autocarro) ou C (camião): exame médico anual para condutores profissionais',
          '🌐 A morada mudou: actualizar através do imt-online (gratuito)',
          '🇪🇺 Mudança para outro país da UE: a carta é válida, mas trate do cartão local no prazo de 2 anos',
          '🔄 Categoria adicional (mota A depois de automóvel B): formação + exames, ~400-700 €'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Taxa administrativa do IMT (renovação online)', amountEUR: 27, note: '30 € presencial; 50% para condutores com 70 ou mais anos' },
    { label: 'Atestado médico do médico de família (a partir dos 60 anos)', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Avaliação psicológica (para grupo II/categorias profissionais)', amountEURMin: 50, amountEURMax: 80 },
    { label: 'Duplicado em caso de perda', amountEUR: 30 },
    { label: 'Em caso de caducidade — consulte a tabela do IMT para carta caducada', note: 'o procedimento depende do tempo decorrido desde a caducidade' }
  ],
  timelineDaysMin: 14,
  timelineDaysMax: 30,
  sources: [
    { title: 'IMT — Renovação da carta de condução', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/CondutoresVeiculos/Pages/RenovacaoCartaConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT Online (renovação online)', url: 'https://www.imt-online.imt.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
