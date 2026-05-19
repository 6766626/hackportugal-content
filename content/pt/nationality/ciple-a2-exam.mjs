export default {
  editorialVoice: 'hackportugal',
  id: 'ciple-a2-exam',
  categoryId: 'nationality',
  title: 'Português A2 — cursos gratuitos, programas escolares e exame CIPLE',
  tldr: 'O certificado de nível A2 só é necessário para a naturalização por residência (ao abrigo da Lei 37/81 em vigor — 5 anos; 03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII — após publicação em DRE, o prazo aumentará para 7 anos para CPLP/EU e 10 anos para os restantes, além de passar a existir um teste obrigatório de conhecimentos sobre cultura portuguesa, direitos e organização do Estado). Para casamento, união de facto, Reagrupamento Familiar — NÃO é necessário.\n\nIMPORTANTE: para a naturalização, o IRN aceita apenas certificado oficial de nível A2+ (CIPLE / PLA / Centros Qualifica / DEPLE / DAPLE) — uma simples declaração de frequência de 150 horas de curso SEM avaliação de nível NÃO é aceite. As vias mais baratas: PLA (0 €), IEFP (0 € + bolsa, mas com obrigações enquanto desempregado), escolas públicas para adultos ~20 €/semestre. Exame CIPLE — 85 € (2026), sessões mensais.',
  audience: { citizenships: ['thirdCountry', 'euEeaSwiss'] },
  tags: ['ciple', 'a2', 'língua', 'exame', 'pla'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando o certificado é necessário e quando não é',
      content: [
        { kind: 'paragraph', text: 'O nível A2 de português é necessário apenas em alguns casos:' },
        { kind: 'checklist', items: [
          '✅ Naturalização por residência (art. 6 Lei 37/81 + art. 25 Decreto-Lei 237-A/2006): ao abrigo do direito em vigor — após 5 anos. 03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII — após publicação em DRE: 7 anos para CPLP/EU, 10 anos para os restantes, além de teste obrigatório de conhecimentos sobre cultura portuguesa, direitos e organização do Estado. Até à publicação em DRE, aplicam-se as regras antigas',
          '✅ Para admissão em determinados programas do IEFP, escolas públicas e Centros Qualifica'
        ]},
        { kind: 'paragraph', text: 'Quando o certificado CIPLE NÃO é exigido:' },
        { kind: 'checklist', items: [
          '❌ Nacionalidade por casamento / união de facto — a Lei 37/81 não exige língua (apenas «ligações efetivas»)',
          '⚠️ Nacionalidade por origem — netos/bisnetos de portugueses (Lei 37/81 art. 1(1)(d) e art. 1(1)(e)): a lei exige «sufficient knowledge of the Portuguese language» (conhecimento suficiente da língua portuguesa), e não especificamente A2. O certificado CIPLE A2 ou equivalente é a forma mais segura de comprovar; em casos duvidosos, o IRN também pode aceitar entrevista, documentos escolares de um país de língua portuguesa, documentos CPLP, etc. Filhos de portugueses (art. 1(1)(c)) — normalmente sem requisito linguístico',
          '❌ Reagrupamento Familiar — a AIMA não pede prova de língua',
          '❌ Renovação da autorização de residência — a AIMA não exige',
          '❌ Cidadãos de países com português como língua oficial (Brasil, Angola, Cabo Verde, Moçambique, Guiné-Bissau, São Tomé, Timor-Leste, Guiné Equatorial): pelas regras do Regulamento da Nacionalidade, presume-se o conhecimento da língua. Confirme o seu caso concreto junto do IRN'
        ]},
        { kind: 'warning', text: 'O IRN, ao submeter pedido de naturalização por residência (art. 6), aceita apenas certificado OFICIAL que indique um nível concreto A2 ou superior. Uma declaração de frequência de curso (frequência) sem avaliação de nível — NÃO serve. Para netos/bisnetos (art. 1(1)(d/e)), o conjunto de provas admissíveis é mais amplo — confirme junto do IRN se o CIPLE não estiver disponível.' }
      ]
    },
    {
      id: 'accepted-certificates',
      title: 'Que certificados o IRN aceita para naturalização',
      content: [
        { kind: 'paragraph', text: 'Nos termos do art. 25 Decreto-Lei 237-A/2006 e das instruções do IRN, para comprovar o conhecimento de português são aceites:' },
        { kind: 'checklist', items: [
          '✅ CIPLE (A2), DEPLE (B1), DIPLE (B2), DAPLE (C1), DUPLE (C2) — exames CAPLE/Universidade de Lisboa',
          '✅ Certificado PLA — Português Língua de Acolhimento, emitido por escola pública/Centro Qualifica com indicação do nível A2 ou superior',
          '✅ Certificado Centros Qualifica — documento oficial com confirmação do nível segundo o CEFR',
          '✅ Certificado escolar PLNM (Português Língua Não Materna) — se indicar o nível A2+ alcançado',
          '✅ Certificado de conclusão de escola portuguesa (9.º/12.º ano) — é automaticamente considerado C1',
          '✅ Curso/diploma de ensino superior em português — normalmente é aceite',
          '⚠️ Uma simples «declaração de frequência» de 150 horas SEM avaliação de nível — NÃO é aceite'
        ]}
      ]
    },
    {
      id: 'free-paid-courses',
      title: 'Cursos gratuitos e pagos (com bolsa)',
      content: [
        { kind: 'substeps', items: [
          { id: 'iefp', title: '1. IEFP — centro de emprego: curso + bolsa (para desempregados inscritos)', content: [
            { kind: 'paragraph', text: 'O IEFP (iefp.pt) organiza cursos de português para residentes. Se estiver inscrito como desempregado/à procura de emprego — o curso é gratuito + bolsa de formação.' },
            { kind: 'warning', text: 'A inscrição no IEFP implica OBRIGAÇÕES: comparecer a convocatórias, participar em medidas ativas de emprego, aceitar ofertas adequadas de trabalho/estágio. Não é indicado para quem, na prática, não procura emprego — por falta de comparência, pode ser retirado da inscrição e perder prestações.' },
            { kind: 'checklist', items: [
              'Inscrever-se no Centro de Emprego mais próximo (lista em iefp.pt)',
              'Necessário: NIF, NISS, autorização de residência, comprovativo de morada',
              'Formato: aulas em grupo durante 4–6 meses',
              'Podem existir apoios sociais: bolsa de formação, alimentação, transporte. O valor e o direito ao pagamento dependem do programa, do estatuto de desempregado e de outros apoios — confirme junto do IEFP. Para referência: IAS 2026 = 537,13 €',
              'O subsídio de alimentação pode ser pago pelos dias efetivos de formação, se o programa e o horário conferirem esse direito',
              'No final — certificado com indicação do nível (A2/B1) — aceite pelo IRN'
            ]}
          ]},
          { id: 'pla', title: '2. PLA — Português Língua de Acolhimento (normalmente gratuito)', content: [
            { kind: 'paragraph', text: 'Programa público organizado pela AIMA em conjunto com escolas / Centros Qualifica. O PLA é normalmente gratuito para migrantes adultos, incluindo requerentes e beneficiários de proteção internacional, mas a inscrição depende de vagas, nível, idade e requisitos do Centro Qualifica / escola / IEFP concreto. Confirme os documentos no momento da inscrição.' },
            { kind: 'checklist', items: [
              '150 horas — bloco típico que cobre A1 + A2 (mas o que conta não é o número de horas, e sim a avaliação final de nível)',
              'Níveis mais elevados são organizados em módulos separados; a duração e o nível final dependem do programa e da entidade formadora',
              'Inscrever-se através do Centro Qualifica da sua área de residência (qualifica.gov.pt) ou da AIMA',
              'Formato: aulas à noite ou ao fim de semana (2–3 vezes por semana, 3 horas)',
              '🎓 No final — Certificado PLA com indicação do nível final (A2, B1, B2). Só um certificado COM NÍVEL A2+ serve para o IRN',
              '⚠️ Pergunte ANTES da inscrição: «este curso emite certificado com nível A2 reconhecido pelo IRN para nacionalidade?»'
            ]}
          ]},
          { id: 'public-school', title: '3. Escolas públicas para adultos (Escola Secundária)', content: [
            { kind: 'paragraph', text: 'Muitas Escolas Secundárias públicas têm cursos noturnos de PLNM (Português Língua Não Materna).' },
            { kind: 'checklist', items: [
              'Inscrição através da escola (matrícula) — normalmente ~10–25 € por semestre',
              'Curso gratuito (ensino público)',
              'Formato: aulas completas com professor',
              'Horário: setembro—junho, 2–3 vezes por semana',
              '🎓 IMPORTANTE: pergunte se a escola emite certificado com nível A2 (e não apenas uma declaração de frequência)',
              'Lista de escolas com PLNM: no site do município, na secção Educação'
            ]}
          ]},
          { id: 'junta', title: '4. Junta de Freguesia — cursos informais', content: [
            { kind: 'paragraph', text: 'Algumas Junta de Freguesia organizam cursos gratuitos de conversação com voluntários. Normalmente NÃO emitem certificado (não serve para o IRN), mas são excelentes para prática oral. Pergunte na sua zona.' }
          ]},
          { id: 'online', title: '5. Recursos online para estudo autónomo', content: [
            { kind: 'checklist', items: [
              'Practice Portuguese (practiceportuguese.com) — subscrição ~10 €/mês, português europeu',
              'Portuguese With Carla (YouTube) — aulas gratuitas',
              'Mondly / Duolingo — nível básico',
              'Tandem / HelloTalk — prática gratuita com falantes nativos',
              'Áudio: Said No One Ever Podcast, Portuguese Lab',
              '⚠️ Cursos online NÃO dão certificado reconhecido pelo IRN — é necessário exame CIPLE ou curso oficial'
            ]}
          ]},
          { id: 'private', title: '6. Escolas de línguas privadas', content: [
            { kind: 'paragraph', text: 'Apenas se precisar de máxima rapidez / abordagem individual. A partir de 300 € por intensivo; curso completo A1→A2 ~700–1200 €. CIAL, CLIC, Fast Forward. O certificado de uma escola privada normalmente NÃO é aceite pelo IRN — é necessário CIPLE ou certificado público.' }
          ]}
        ]}
      ]
    },
    {
      id: 'exam-structure',
      title: 'Exame CIPLE — se optar pela via CAPLE',
      content: [
        { kind: 'paragraph', text: 'CIPLE (Certificado Inicial de Português Língua Estrangeira) — exame de nível A2 do CAPLE (Universidade de Lisboa). É aceite por todas as entidades em Portugal.' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Leitura + escrita (75 min)', content: [
            { kind: 'paragraph', text: '4 textos com perguntas (escolha múltipla + respostas curtas). Texto curto (70–90 palavras): e-mail, nota, felicitação.' }
          ]},
          { id: 'e2', title: 'Compreensão oral (30 min)', content: [
            { kind: 'paragraph', text: '4 áudios: diálogo, anúncio, instrução, conversa. Perguntas de escolha múltipla.' }
          ]},
          { id: 'e3', title: 'Produção oral (15 min)', content: [
            { kind: 'paragraph', text: 'Individualmente ou em pares. 3 tarefas: apresentação pessoal, jogo de papéis, descrição de imagem/conversa.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Nota mínima — 55% da pontuação total. O certificado é emitido 6–8 semanas após o exame e é válido por tempo indeterminado.' }
      ]
    },
    {
      id: 'registration',
      title: 'Inscrição no CIPLE',
      content: [
        { kind: 'checklist', items: [
          '📅 Sessões 2026: CIPLE-P nacionais mensais (fev—nov, excluindo agosto) + internacionais em maio/julho/novembro. Calendário em caple.letras.ulisboa.pt',
          '💻 Inscrição online no site do CAPLE',
          '🏢 Centros em Portugal e no estrangeiro variam consoante as sessões — verifique a lista de centros de exame no site do CAPLE antes da inscrição',
          '💶 Custo: 85 € em 2026 (até 95 € em centros internacionais). Pagamento por cartão ou por referência Multibanco',
          '📧 A convocatória chega uma semana antes',
          '📄 Resultados — na área pessoal CAPLE em 6–8 semanas; o certificado PDF é descarregado no mesmo local'
        ]}
      ]
    },
    {
      id: 'preparation',
      title: 'Como preparar-se de forma autónoma',
      content: [
        { kind: 'checklist', items: [
          '📚 Manuais: «Português XXI — Nível A2» (Lidel), «Passaporte Para Português A2» (Lidel), «Aprender Português» (Texto Editora)',
          '📝 Testes de treino: o CAPLE publica exemplos/modelos de prova para o CIPLE; a quantidade de materiais disponíveis varia — verifique a página do CAPLE',
          '🎧 Podcasts: «Practice Portuguese», «Said No One Ever», «Portuguesepod101»',
          '🎬 Séries: RTP Play (gratuito), Netflix PT com legendas',
          '🗣️ Prática oral: parceiros de tandem, «café fala português» na Junta de Freguesia',
          '📅 100–150 horas de aulas são suficientes a partir do nível inicial; se já tiver A1 — 50–80 horas'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PLA (cursos públicos)', amountEUR: 0 },
    { label: 'IEFP — curso + bolsa para inscritos', amountEUR: 0, note: '+ bolsa parcial a partir do IAS 537,13 €' },
    { label: 'Escola pública para adultos — inscrição', amountEURMin: 10, amountEURMax: 25, note: '/semestre' },
    { label: 'Exame CIPLE', amountEUR: 85, note: 'tarifa CAPLE para 2026' },
    { label: 'Subscrição online (prática)', amountEURMin: 0, amountEURMax: 15, note: '€/mês' },
    { label: 'Escola privada (se precisar rapidamente)', amountEURMin: 300, amountEURMax: 1200 }
  ],
  sources: [
    { title: 'IRN — Aquisição da nacionalidade portuguesa', url: 'https://justica.gov.pt/Servicos/Pedir-a-nacionalidade-portuguesa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/237-a-2006-541731', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CAPLE — Centro de Avaliação de Português Língua Estrangeira', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — cursos de formação', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Centros Qualifica', url: 'https://www.qualifica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — Português Língua de Acolhimento (PLA)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Presidência da República — Promulgação Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
