export default {
  editorialVoice: 'hackportugal',
  id: 'vaccinations-pt',
  categoryId: 'healthcare',
  title: 'Vacinas em Portugal — PNV, crianças, adultos, viagens',
  tldr: 'O PNV (Plano Nacional de Vacinação) é o programa público de vacinação, gratuito no SNS para residentes com número de utente. As vacinas do PNV em Portugal são **recomendadas e gratuitas**, mas juridicamente, em geral, não são obrigatórias; escolas/médicos podem pedir o boletim de vacinas e encaminhar para vacinação de recuperação. Adultos: Td/Tdap — reforço contra tétano/difteria segundo o calendário etário do PNV; Tdap especialmente durante a gravidez. Gripe anualmente no outono/inverno para os grupos definidos pela DGS na campanha sazonal em vigor (normalmente 60+, grávidas, doenças crónicas, etc.), reforço COVID segundo a campanha sazonal da DGS. Vacinas de viagem e profilaxia: Hep A, febre tifoide, febre amarela, raiva, encefalite japonesa — na Consulta do Viajante / Centro de Vacinação Internacional. Malária — comprimidos profiláticos, não vacina.',
  tags: ['vacinas', 'pnv', 'sns', 'crianças', 'viagens'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'pnv-overview',
      title: 'PNV — o que inclui',
      content: [
        { kind: 'paragraph', text: 'O PNV (Plano Nacional de Vacinação) é o calendário público de vacinas, aprovado e atualizado pela DGS através de normas e documentos técnicos (Norma 018/2020 e atualizações posteriores). Verifique a versão atual na página da DGS / SNS24.' },
        { kind: 'checklist', items: [
          '🆓 Gratuito para todos com número de utente (SNS)',
          '💊 Administradas no centro de saúde da área de residência (Centro de Saúde)',
          '📱 Acompanhamento: e-Boletim de Vacinas na aplicação SNS 24',
          '🗓️ O PNV abrange crianças (0–18) + adolescentes (HPV) + adultos (reforços)',
          '⚠️ Clínicas privadas — as mesmas vacinas pagas, 20–80 € por visita'
        ]}
      ]
    },
    {
      id: 'children',
      title: 'Crianças — vacinas recomendadas do PNV (gratuitas)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Até 1 ano', content: [
            { kind: 'checklist', items: [
              '0 meses: Hep B dose 1. BCG — apenas para crianças de grupos de risco (desde 2017 não é universal, segundo critérios da DGS)',
              '2 meses: **hexavalente DTPaHibVIPVHB** (6-em-1: difteria, tétano, tosse convulsa, Hib, poliomielite, Hep B) + PCV + MenB',
              '4 meses: **pentavalente DTPaHibVIP** (5-em-1, SEM componente Hep B) + PCV + MenB',
              '6 meses: **hexavalente DTPaHibVIPVHB** (novamente com Hep B)',
              '12 meses: PCV, **MenACWY** (desde abril de 2025 substituiu a MenC por decisão da DGS), MenB (reforço), MMR/VASPR dose 1'
            ]}
          ]},
          { id: 'c2', title: '1–5 anos', content: [
            { kind: 'checklist', items: [
              '18 meses: **reforço pentavalente DTPaHibVIP** (SEM Hep B — o componente Hep B já foi concluído pelo esquema 0/2/6 meses)',
              '5 anos: reforço DTPa-IPV + MMR/VASPR dose 2'
            ]}
          ]},
          { id: 'c3', title: 'Adolescentes', content: [
            { kind: 'checklist', items: [
              '10 anos: HPV para raparigas e rapazes pelo PNV — proteção contra cancros e doenças associados ao HPV. Confirme o número atual de doses no e-Boletim/DGS',
              '10 anos: Td (tétano-difteria) — reforço segundo o PNV',
              '10 anos: MenACWY (reforço; exceto quando a criança já recebeu MenACWY aos 12 meses pelo PNV atualizado — nesse caso, confirmação pelo médico)',
              'Confirme as idades exatas dos reforços na adolescência na tabela atual do PNV da DGS'
            ]}
          ]}
        ]},
        { kind: 'warning', text: 'Algumas escolas privadas exigem o boletim de vacinas no momento da inscrição. Nas escolas públicas — o centro de saúde verifica e notifica se a criança estiver atrasada em relação ao calendário.' }
      ]
    },
    {
      id: 'adults',
      title: 'Adultos',
      content: [
        { kind: 'checklist', items: [
          '💉 **Td/Tdap**: reforço contra tétano/difteria segundo o calendário etário do PNV para adultos (normalmente Td aos 25/45/65 e depois com maior frequência após os 65 anos). Tdap especialmente durante a gravidez e por indicações específicas. Verifique o e-Boletim ou confirme no centro de saúde',
          '💉 **Gripe**: anualmente na campanha sazonal da DGS — normalmente gratuita/recomendada para 60+, grávidas, pessoas com doenças crónicas/grupos de risco e profissionais de saúde. As condições exatas (SNS / farmácias) mudam de época para época, o preço da vacina paga depende da farmácia/clínica',
          '💉 **Reforço COVID**: segundo a campanha sazonal em vigor da DGS, normalmente para idosos, imunocomprometidos, grupos de risco, grávidas e trabalhadores da saúde/área social. O limiar etário muda de época para época',
          '💉 **Hep B**: se não recebeu na infância (antes de 1995 — não constava do PNV). Série 0/1/6 meses',
          '💉 **MMR**: se não tiver 2 doses (verifique o seu boletim de vacinas)',
          '💉 **Zona**: recomendada para 60+, não incluída no PNV (paga, 150–200 €/dose)',
          '💉 **HPV para adultos**: possível fora do PNV por prescrição médica; idade, número de doses e preço dependem do medicamento e dos antecedentes. Para situações não cobertas pelo PNV — normalmente pago',
          '💉 **Pneumococo**: para idosos e determinados grupos de risco. A sequência concreta de vacinas (conjugada / PPSV23) e as condições de gratuitidade dependem das normas da DGS e da prescrição médica — confirme no centro de saúde'
        ]}
      ]
    },
    {
      id: 'travel-vaccines',
      title: 'Viagens — vacinas para deslocações',
      content: [
        { kind: 'paragraph', text: 'Vacinas antes de viajar para os trópicos / Ásia / África.' },
        { kind: 'substeps', items: [
          { id: 't1', title: '🏥 Onde fazer', content: [
            { kind: 'checklist', items: [
              '**Consulta do Viajante / Centros de Vacinação Internacional (CVI)** — lista e contactos no SNS24/DGS. Disponibilidade, marcação e tarifas dependem da unidade concreta',
              '**Clínicas privadas**: Lusíadas, CUF, Luz, entre outras — departamentos de medicina do viajante',
              '**Febre amarela** — apenas em Centros de Vacinação Internacional autorizados, que emitem o International Certificate. Lista de locais — no site oficial do SNS24/DGS',
              '**Marcação**: através das páginas informativas do SNS24, da linha SNS 24 — 808 24 24 24, ou diretamente na Consulta do Viajante / CVI escolhida'
            ]}
          ]},
          { id: 't2', title: '💉 Populares para turistas', content: [
            { kind: 'checklist', items: [
              '**Febre amarela**: 1 dose normalmente para toda a vida; deve ser administrada/registada num CVI autorizado para obter o International Certificate. O preço varia consoante os centros — confirme a tarifa oficial',
              '**Hepatite A**: para Índia, África, América do Sul — normalmente 2 doses',
              '**Febre tifoide**: Índia, Ásia, África — proteção de cerca de 3 anos',
              '**Encefalite japonesa**: Ásia rural — série de 2 doses',
              '**Raiva**: para trabalhadores com animais, trekkings longos — série de 3 doses',
              '**Malária**: não é vacina — comprimidos profiláticos (doxycycline, Malarone) por prescrição médica'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'boletim',
      title: 'Boletim de Vacinas (eletrónico)',
      content: [
        { kind: 'checklist', items: [
          'O Boletim de Vacinas está disponível em formato eletrónico através do SNS 24 / Área do Cidadão; registos em papel e vacinas estrangeiras/privadas devem ser levados ao centro de saúde para registo',
          'Acesso: SNS 24 → Área Reservada → Vacinas',
          'Histórico de vacinas desde o nascimento (se foram administradas no SNS)',
          'PDF para escola / visto / trabalho',
          'Se recebeu vacinas no estrangeiro — leve o boletim de vacinação ao centro de saúde; os dados serão transferidos'
        ]}
      ]
    },
    {
      id: 'newcomers',
      title: 'Recém-chegados — o que fazer',
      content: [
        { kind: 'checklist', items: [
          '📋 Trazer o boletim de vacinas do país de origem (tradução desejável, mas muitas vezes o médico português consegue interpretar o alfabeto latino)',
          '🏥 Na primeira visita ao centro de saúde — pedir o registo das vacinas no sistema português',
          '🔍 O médico de família verificará se as vacinas estão atualizadas segundo o PNV; as que faltarem podem ser recuperadas gratuitamente no Centro de Saúde',
          '💉 As vacinas em falta são administradas gratuitamente (se tiver número de utente)',
          '🚸 Crianças: a escola pode pedir o boletim de vacinas e encaminhar a família para o centro de saúde. Como as vacinas do PNV normalmente não são juridicamente obrigatórias, a ausência/boletim incompleto, em regra, não deve por si só impedir a matrícula numa escola pública — confirme separadamente com a escola e o centro de saúde. As vacinas em falta começarão a ser recuperadas segundo o catch-up schedule; algumas podem ser administradas numa só visita, mas séries com várias doses exigem intervalos',
          '🇧🇷 Brasileiros: o PNV e o calendário nacional do Brasil são muito semelhantes, mas há diferenças — o calendário da MMR é diferente',
          '🇷🇺 Falantes de russo: muitos calendários de infância divergem — a vacina pneumocócica conjugada e a MenB podem diferir do esquema do país de origem. O centro de saúde avaliará a recuperação adequada à idade e o direito a doses gratuitas'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Vacinas do PNV no SNS', amountEUR: 0, note: 'para utente' },
    { label: 'Gripe fora dos grupos da campanha gratuita da DGS', amountEURMin: 15, amountEURMax: 25, note: 'o preço na farmácia/clínica varia; para grupos elegíveis segundo a campanha sazonal da DGS — gratuito' },
    { label: 'Febre amarela (em CVI autorizado)', amountEURMin: 40, amountEURMax: 80, note: 'o preço depende do centro; inclui certificado' },
    { label: 'HPV (adultos)', amountEURMin: 150, amountEURMax: 200, note: 'por dose; o número de doses depende do medicamento e dos antecedentes' },
    { label: 'Consulta do Viajante', amountEURMin: 0, amountEURMax: 60, note: 'a tarifa depende do prestador público/privado' }
  ],
  sources: [
    { title: 'DGS — Programa Nacional de Vacinação (Norma 018/2020 e atualizações)', url: 'https://www.dgs.pt/normas-orientacoes-e-informacoes/normas-e-circulares-normativas.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Vacinação', url: 'https://www.sns24.gov.pt/tema/vacinacao/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Consulta do Viajante e Centros de Vacinação Internacional', url: 'https://www.sns24.gov.pt/tema/vacinacao/consulta-do-viajante/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
