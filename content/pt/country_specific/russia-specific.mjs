export default {
  editorialVoice: 'hackportugal',
  id: 'russia-specific',
  categoryId: 'country_specific',
  title: 'Mudança da Rússia — especificidades',
  tldr: 'Russos: as sanções da UE complicaram a parte bancária, mas a mudança continua a ser possível. Os vistos turísticos Schengen normalmente não são emitidos (excepto em casos humanitários). Os vistos D são emitidos. O Consulado de Portugal em Moscovo funciona, mas com uma fila de espera de 2–4 meses. Importante: os cartões Visa/Mastercard de bancos russos NÃO funcionam fora da Federação Russa (desde 2022 — Visa/MC saíram da Federação Russa). UnionPay é aceite parcialmente em alguns terminais. Muitos grandes bancos russos (Sber, VTB, Alfa, Gazprombank, Tinkoff/T-Bank e outros) estão sob sanções da UE/SDN; a origem de fundos proveniente desses bancos exige comprovação alargada da origem e pode ser bloqueada por um banco português. Abra uma conta portuguesa antes da chegada ou imediatamente depois.',
  audience: { countryCodes: ['RU'] },
  tags: ['rússia', 'sanções', 'vistos'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'visas-2026',
      title: 'Vistos 2026',
      content: [
        { kind: 'checklist', items: [
          '❌ Schengen turísticos (C) — a UE suspendeu o acordo de facilitação com a Federação Russa desde Setembro de 2022; taxa de visto 90 €; emissões pontuais',
          '✅ Vistos D (D2/D3/D4/D7/D8) — são emitidos, processo igual ao de outros países terceiros',
          '✅ Reagrupamento Familiar — funciona',
          '✅ A mobilidade CPLP não se aplica (a Rússia não pertence à comunidade dos países de língua portuguesa). Opção — apenas se tiver uma segunda cidadania de um país CPLP',
          '✅ D4 de estudante — é emitido, popular',
          'Consulado de Portugal em Moscovo: Rua Fadeyeva 11 — funciona em regime normal, fila para marcação de 2–4 meses'
        ]}
      ]
    },
    {
      id: 'embassy-update-2026-04',
      title: 'Simplificação da submissão para D4 / E9 / E6 (17.04.2026)',
      content: [
        { kind: 'paragraph', text: 'A 17 de Abril de 2026, a Embaixada de Portugal em Moscovo publicou o anúncio «Pedidos de visto — Estudantes e marcação na AIMA» sobre a simplificação do procedimento de submissão de documentos para três categorias de requerentes.' },
        { kind: 'checklist', items: [
          '✅ D4 — visto nacional de estudo (licenciatura, mestrado, doutoramento, cursos de línguas de longa duração)',
          '✅ E9 — visto para participação no programa Erasmus Mundus',
          '✅ E6 — visto para quem precisa depois de se dirigir à AIMA para questões de regularização (por exemplo, renovação de autorização de residência, Reagrupamento Familiar). NÃO são programas de investimento — Golden Visa e D2 seguem percursos diferentes'
        ]},
        { kind: 'warning', text: 'Formulação exacta do procedimento: «com o objectivo de simplificar o procedimento de submissão de documentos». A Embaixada NÃO declara literalmente «sem marcação»; a publicação refere-se a uma submissão prioritária/simplificada. Antes da visita, verifique os requisitos actuais no site da embaixada e da BLS.' },
        { kind: 'paragraph', text: 'Centro de vistos BLS em Moscovo (aterro Kosmodamianskaya, 52s7): recepção de pedidos 09:00–15:00 (seg–sex), entrega de passaportes e consultas 15:00–16:00. Telefone: +7 (499) 110 63 76, email: info.portugal@blshelpline.com.' },
        { kind: 'warning', text: 'A simplificação do procedimento de submissão NÃO significa simplificação do conjunto de documentos. Todos os requisitos padrão (admissão numa universidade, prova de meios, alojamento, seguro de saúde, certificado de registo criminal com apostila) mantêm-se. Veja os detalhes no guia «Visto D4 (estudante)».' }
      ]
    },
    {
      id: 'banking',
      title: 'Nuances bancárias',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Cartões russos NÃO funcionam em Portugal', content: [
            { kind: 'paragraph', text: 'Visa/Mastercard emitidos na Federação Russa estão bloqueados fora da Federação Russa desde Março de 2022. UnionPay de bancos russos — funciona, mas não é aceite em todo o lado em Portugal.' }
          ]},
          { id: 'b2', title: 'Transferir dinheiro para Portugal', content: [
            { kind: 'checklist', items: [
              'Dinheiro em numerário na fronteira — limite 10 000 € (declaração), em vigor',
              'Wise, Revolut — abrir num país onde seja permitido (Cazaquistão, Sérvia, Arménia, etc.)',
              'Criptomoeda — USDT/USDC → levantamento para Revolut/N26/banco português',
              'Compra de ouro na Federação Russa → venda em Portugal (funciona, mas é ineficiente)',
              'Transferência através de familiares em países não sancionados'
            ]}
          ]},
          { id: 'b3', title: 'Abrir uma conta portuguesa', content: [
            { kind: 'paragraph', text: 'ActivoBank, Millennium, Caixa — aceitam russos com visto/autorização de residência válido e morada portuguesa. Necessários: passaporte, NIF, comprovativo de morada em Portugal, comprovativo da origem dos rendimentos.' },
            { kind: 'warning', text: 'Alguns bancos (Santander, BPI) podem recusar devido a requisitos AML. Tente vários.' }
          ]}
        ]}
      ]
    },
    {
      id: 'golden-visa',
      title: 'Golden Visa para russos',
      content: [
        { kind: 'paragraph', text: 'O Golden Visa está formalmente disponível, mas com verificações AML reforçadas para cidadãos da Federação Russa. É necessário apoio jurídico. Prazo — 12–24 meses.' },
        { kind: 'warning', text: 'Muitos grandes bancos russos estão em listas de sanções da UE/OFAC: Sber, VTB, Alfa, Gazprombank, PSB, Rosselkhozbank, Tinkoff/T-Bank (desde 2023), Sovcombank e outros. Um banco português pode recusar aceitar dinheiro desses bancos ou pode bloqueá-lo. Antes da transferência — confirme no banco receptor a lista actual e os requisitos de comprovação da origem dos fundos. Raiffeisen Rússia ainda funciona, mas também está sob controlo especial. Prepare comprovação detalhada da origem dos fundos (declarações, autoridade fiscal, contratos).' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos da Federação Russa',
      content: [
        { kind: 'checklist', items: [
          'Certificado de registo criminal — através do Ministério do Interior ou do portal Gosuslugi. Prazo 14–30 dias',
          'Apostila — Ministério da Justiça regional. 2–4 semanas. Validade do certificado + apostila = 3–6 meses',
          'Certidões do registo civil — segundas vias + apostila. 1–3 meses',
          'Diplomas — Rosobrnadzor + apostila do Ministério da Justiça',
          'Procurações notariais para familiares na Federação Russa — no Consulado de Portugal em Moscovo',
          '⚠️ Todas as traduções — certificadas (tradução certificada com apostila)'
        ]}
      ]
    },
    {
      id: 'after-arrival',
      title: 'Após a chegada',
      content: [
        { kind: 'checklist', items: [
          'NIF → abertura de conta → arrendamento',
          'Telemóvel: comprar imediatamente um cartão SIM português (MEO/NOS/Vodafone)',
          'Cancelamento do registo na Federação Russa: remotamente através do Gosuslugi + consulado',
          'Trabalhador independente na Federação Russa — encerrar antecipadamente, se não tenciona continuar a actividade',
          'Residência fiscal: após 183 dias em Portugal — residente em Portugal. Declarar ambos (Portugal + Federação Russa) no primeiro ano',
          'Certificado de residência da Federação Russa — necessário para evitar dupla tributação'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Comunidade de língua russa',
      content: [
        { kind: 'checklist', items: [
          'Escola russa (para crianças): Carlos Freixo (Oeiras)',
          'Igreja Ortodoxa Russa — Lisboa (Rua Maria Pia)',
          'Embaixada da Federação Russa — Rua Visconde de Santarém, 57, 1000-286 Lisboa (+351 21 846 4417)',
          'Associação cultural «Casa Russa» (Casa da Rússia) — eventos, cursos de língua russa',
          'Clínicas privadas com médicos de língua russa — Cuf, Luz (pergunte)',
          'Retalho: «Magnit», «Matrioshka» — produtos da CEI em Lisboa'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Embaixada de Portugal em Moscovo', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'Anúncio de 17.04.2026 — pedidos de visto D4/E9/E6', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'BLS Portugal Rússia — contactos e horários de atendimento', url: 'https://blsportugalrussia.ru/russian/contact.php', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'AIMA — site oficial', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — vistos D', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — compensações e AML', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90,
  recentlyChangedAt: '2026-05-13',
  changeSummary: '13.05.2026 Adicionada secção sobre o anúncio da Embaixada de Portugal em Moscovo de 17.04.2026: simplificação do procedimento de submissão de documentos para vistos de estudo D4 (nacional de estudo), E9 (Erasmus Mundus) e E6 (para contacto posterior com a AIMA). Esclarecido: a embaixada não declara literalmente «sem marcação»; trata-se de submissão prioritária/simplificada. Horário da BLS Moscovo: recepção 09:00–15:00, entrega/consultas 15:00–16:00 (seg–sex).'
}
