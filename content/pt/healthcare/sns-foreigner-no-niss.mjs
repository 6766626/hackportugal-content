export default {
  editorialVoice: 'hackportugal',
  id: 'sns-foreigner-no-niss',
  categoryId: 'healthcare',
  title: 'SNS para estrangeiros sem NISS — o que fazer',
  tldr: 'Numa urgência, um hospital público é obrigado a prestar assistência independentemente dos documentos e do estatuto (Constituição art. 64; Lei de Bases da Saúde, Lei n.º 95/2019), mas «são obrigados a atender» ≠ «é sempre gratuito»: podem aplicar-se taxas moderadoras (Decreto-Lei n.º 37/2022) ou uma fatura segundo as tabelas do SNS, se não tiver direito ao SNS/EHIC/seguro. Há isenções de pagamento para alguns grupos. Para cuidados programados é necessário o número de utente: com autorização de residência ou, sem autorização de residência, através de atestado da Junta de Freguesia que confirme residência em Portugal há mais de 90 dias (Despacho n.º 25360/2001). O NISS não é necessário para o número de utente — são números diferentes. Refugiados/TPD têm acesso pelo regime de acolhimento. Turistas — EHIC/CESD (UE) ou seguro privado.',
  tags: ['sns', 'utente', 'turistas', 'sem NISS'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'emergency-rights',
      title: '🚨 Assistência de emergência — são obrigados a prestar, mas nem sempre é gratuita',
      content: [
        { kind: 'paragraph', text: 'O direito à proteção da saúde está consagrado na **Constituição art. 64** e na **Lei de Bases da Saúde (Lei n.º 95/2019)**. Para estrangeiros em situação irregular aplicam-se regras especiais de acesso (Despacho n.º 25360/2001); para menores — Decreto-Lei n.º 67/2004. O regime das taxas moderadoras é regulado pelo Decreto-Lei n.º 37/2022.' },
        { kind: 'checklist', items: [
          '✅ **112** — número europeu único de emergência em Portugal. **SNS 24: 808 24 24 24** — triagem/aconselhamento, pode encaminhar para urgência. Em caso de risco de vida, ligue 112',
          '✅ **Urgência num hospital público**: são obrigados a prestar assistência em caso de ameaça imediata, independentemente dos documentos',
          '✅ **Parto e cuidados perinatais**: para grávidas sem documentos — regime especial de acesso',
          '✅ **Trauma, acidente**: prestação de cuidados independentemente do estatuto',
          '✅ **Emergência de saúde mental**: em caso de perigo imediato — 112/urgência. Para apoio psicológico — SNS 24: 808 24 24 24',
          '⚠️ Uma situação non-emergency sem direito ao SNS/seguro pode ser paga segundo as tabelas do SNS/da instituição (Portaria n.º 207/2017 e alterações). O valor final depende do serviço, dos exames e do internamento; o preço pode ser substancialmente superior ao de uma consulta simples',
          '⚠️ «São obrigados a atender» não significa «gratuito para todos»: as taxas moderadoras na urgência mantêm-se em vários casos, se o atendimento não tiver sido encaminhado pelo SNS 24/INEM/instituição e não tiver terminado em internamento'
        ]}
      ]
    },
    {
      id: 'utente-provisorio',
      title: '📋 Número de Utente para estrangeiros residentes',
      content: [
        { kind: 'paragraph', text: 'Na saúde, o identificador principal é o **Número de Utente** (registo no RNU através do Centro de Saúde/ULS). O NISS é o número da Segurança Social: é necessário para a segurança social e algumas prestações, mas **não é o documento principal para inscrição no SNS**.' },
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Documentos', content: [
            { kind: 'checklist', items: [
              'Autorização de residência válida / certificado de registo cidadão UE / outro comprovativo de permanência legal (visto + passaporte)',
              'NIF (se tiver)',
              'Comprovativo de morada (atestado da Junta de Freguesia, contrato de arrendamento, fatura de serviços)',
              'Passaporte/ID',
              'Normalmente o NISS não é necessário. Alguns centros podem pedi-lo por engano — oficialmente, para o SNS é necessário o número de utente/RNU. Em caso de recusa, peça a fundamentação por escrito ou contacte o ACES/USF/ULS'
            ]}
          ]},
          { id: 'u2', title: 'O que está incluído', content: [
            { kind: 'checklist', items: [
              '✅ Inscrição na lista para médico de família',
              '✅ Assistência de emergência e urgência (com regime de taxas moderadoras)',
              '✅ Vacinas de acordo com o PNV',
              '✅ Consultas pediátricas',
              '✅ Acompanhamento da gravidez até ao parto',
              '⚠️ Medicamentos especializados caros — copagamento parcial',
              '🕒 Se lhe emitirem um registo temporário/condicional — confirme o prazo de validade e que documentos precisa de entregar posteriormente no seu Centro de Saúde/ULS. Não existe uma regra universal de «6 meses até ao NISS»'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tourist',
      title: '✈️ Turistas — sem residência',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'UE/EEE/Suíça', content: [
            { kind: 'checklist', items: [
              '✅ **EHIC / CESD** — cobre cuidados medically necessary no sistema público durante uma estada temporária, nas mesmas condições que para os utentes locais',
              '✅ Apresente o cartão + passaporte no hospital. Podem aplicar-se as mesmas taxas/condições que aos residentes locais',
              '⚠️ Não cobre: clínicas privadas, repatriamento, tratamento programado sem autorização separada',
              '⚠️ Se não tiver EHIC — pagará segundo as tabelas do SNS/da instituição como doente privado e depois deve pedir o reembolso através do seguro no seu país'
            ]}
          ]},
          { id: 't2', title: 'Turistas de fora da UE', content: [
            { kind: 'checklist', items: [
              '⚠️ Devem ter **seguro médico de viagem** ≥ 30 000 € (para visto Schengen)',
              '✅ Emergency: a assistência será prestada imediatamente; depois o hospital pode emitir uma fatura a si ou ao seu seguro, se não tiver direito ao SNS/EHIC ou outra cobertura',
              '💰 Sem seguro: podem surgir faturas segundo as tabelas da instituição — 100–300 € por visita, 1000 €+ por cirurgia',
              '🏥 Clínicas privadas: dependem mais do seguro / pagamento em dinheiro',
              '🛂 **Refugiados ucranianos (Proteção Temporária)**: têm acesso ao SNS através do registo de temporary protection — obtenha o número de utente através do Centro de Saúde com os documentos da AIMA'
            ]}
          ]},
          { id: 't3', title: 'Fornecedores de seguros de viagem', content: [
            { kind: 'checklist', items: [
              'World Nomads, SafetyWing, IMG, Allianz Travel — internacionais',
              'Locais: Tranquilidade Travel, Fidelidade Travel, Generali Travel',
              'Preços: 1–5 €/dia para cobertura básica; 5–10 €/dia para cobertura completa',
              'Longo prazo (>180 days): SafetyWing «Nomad Insurance» — popular entre digital nomads, 40–60 €/mês'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'undocumented',
      title: '⚠️ Sem residência, sem seguro — o que fazer',
      content: [
        { kind: 'paragraph', text: 'Por vezes as pessoas encontram-se num período de transição: o visto está a expirar, a autorização de residência está em apreciação, não existe estatuto legal. O acesso pleno não funciona, mas há opções.' },
        { kind: 'checklist', items: [
          '🏥 **Assistência de emergência**: é prestada a todos — NÃO o mandam para casa mesmo sem estatuto legal. Mas pode ser emitida uma fatura (se não houver isenção ao abrigo de um programa especial)',
          '👶 **Parto + cuidados perinatais**: para grávidas sem documentos — regime especial de acesso por categorias protegidas',
          '👶 **Menores estrangeiros em situação irregular** têm proteção especial e acesso a healthcare/education independentemente do estatuto dos pais; é tratado através dos serviços competentes (DL n.º 67/2004)',
          '🤰 **Grávidas**: pertencem a categorias protegidas e devem receber acompanhamento da gravidez/parto; mesmo em situação irregular, dirija-se ao Centro de Saúde/urgência. Leve quaisquer documentos que comprovem identidade e morada; o regime de pagamento/isenção depende do registo e do estatuto',
          '🏥 **Asylum seekers**: depois de apresentarem o pedido, têm direito a acesso ao SNS/cuidados médicos necessários ao abrigo do regime de acolhimento (Lei n.º 27/2008, com alterações). Para o registo, normalmente é necessário um comprovativo/declaração da apresentação do pedido através da AIMA. Grupos vulneráveis — com garantias adicionais',
          '🏥 **Vítimas de tráfico de seres humanos**: emergência + cuidados médicos subsequentes, programa especial',
          '🎯 **Organizações de solidariedade**: Médicos do Mundo PT (medicosdomundo.pt) oferece clínicas gratuitas para pessoas sem documentos, Lisboa e Porto',
          '🎯 **Cuidados de Saúde Primários — Programa para imigrantes**: em alguns municípios existem clínicas móveis'
        ]}
      ]
    },
    {
      id: 'process-utente',
      title: '🆔 Para obter acesso completo — peça o Número de Utente',
      content: [
        { kind: 'checklist', items: [
          'Número de Utente — número principal para o SNS. É pedido no Centro de Saúde/USF da área de residência',
          'Documentos: ID/passaporte + estatuto (autorização de residência / CRUE / visto / atestado de residência >90 dias), NIF, comprovativo de morada',
          'NISS — número da segurança social; não substitui o número de utente e normalmente não é exigido para inscrição no SNS',
          'Prazo: muitas vezes o número é atribuído no próprio dia ou no prazo de 1–14 dias. A atribuição de médico de família é uma etapa separada',
          'Em caso de recusa do centro de saúde — peça a fundamentação por escrito; reclamação à direção do ACES/ULS, através do Livro de Reclamações ou na ERS'
        ]}
      ]
    },
    {
      id: 'private-affordable',
      title: '💼 Medicina privada acessível — se o SNS estiver lento',
      content: [
        { kind: 'checklist', items: [
          'Orçamento: **AdvanceCare basic plan** cerca de 40 €/mês — dá acesso a medicina privada com copagamento',
          '**Generali Saúde** — plano familiar básico 60–90 €/mês',
          '**Médis Essencial** — tarifa inicial 30–50 €/mês',
          '**Consultas pontuais** numa clínica sem seguro: 40–80 € médico de clínica geral, 70–150 € especialista',
          '**Clínicas com preços razoáveis**: clínicas da Cruz Vermelha, clínicas da Misericórdia — sem fins lucrativos',
          '**Consulta online**: Knok, Doctorino — 30–50 € por videochamada, recibo. Os preços e a disponibilidade de English-speaking doctors mudam — confirme antes de marcar',
          'Chat Saúde 24: gratuito, não substitui um médico, mas dá uma primeira opinião'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Assistência de emergência num hospital do SNS', amountEUR: 0, note: 'são obrigados a prestar assistência; o preço depende do estatuto/cobertura. Pode ser 0 € em caso de isenção/encaminhamento/internamento, mas podem aplicar-se taxas moderadoras ou fatura segundo as tabelas do SNS' },
    { label: 'Seguro de viagem mínimo para Schengen', amountEUR: 30000, note: 'cobertura' },
    { label: 'Consulta com médico privado de clínica geral sem seguro', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Especialista privado', amountEURMin: 70, amountEURMax: 150 }
  ],
  sources: [
    { title: 'Despacho n.º 25360/2001 — acesso de cidadãos estrangeiros ao SNS', url: 'https://diariodarepublica.pt/dr/detalhe/despacho/25360-2001-3043226', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 37/2022 — taxas moderadoras', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-2022-184170621', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Acesso de cidadãos estrangeiros ao SNS', url: 'https://www.sns24.gov.pt/tema/cidadaos-estrangeiros/acesso-de-cidadaos-estrangeiros-ao-sns/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Médicos do Mundo Portugal', url: 'https://medicosdomundo.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
