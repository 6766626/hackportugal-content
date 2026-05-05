export default {
  editorialVoice: 'hackportugal',
  id: 'naturalization-2026',
  categoryId: 'nationality',
  title: 'Naturalização — obtenção da nacionalidade portuguesa (2026)',
  tldr: 'Caminho padrão: residência legal 5 anos + conhecimento de português A2 + ausência de condenações. A «ligação a Portugal» oficialmente NÃO é requisito obrigatório (a lei não a menciona); o IRN pode avaliá-la em casos duvidosos, mas o próprio facto de 5 anos de residência legal já é considerado suficiente. Importante: no momento da entrega do pedido você ainda não tem o Cartão de Cidadão — só é emitido após obter a nacionalidade. Anexa-se o título de residência. **03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII** — reforma da Lei da Nacionalidade. Em 05.05.2026 a lei AINDA NÃO foi publicada no DRE e não entrou em vigor. Após a entrada em vigor: prazo de naturalização 7 anos para CPLP+UE / 10 anos para os restantes, o tempo de espera pela primeira autorização de residência deixa de contar, teste cultural obrigatório, limiar de antecedentes criminais reduzido de 5 para 3 anos de prisão. Seguro pediu publicamente que os processos já submetidos fossem apreciados pelas regras antigas por segurança jurídica. O Decreto 49/XVII conexo (perda da nacionalidade como pena adicional) AINDA NÃO foi promulgado — sob fiscalização preventiva do TC.',
  tags: ['cidadania', 'naturalização', 'cplp'],
  estimatedReadMinutes: 10,
  pendingLaw: {
    summary: 'Decreto AR 48/XVII (renumerado de 17/XVII após passar pelo TC) — reforma da Lei da Nacionalidade. **Promulgado pelo Presidente Seguro em 03.05.2026.** Aprovado pelo Parlamento em 01.04.2026 (152 votos PSD/Chega/IL/CDS «a favor», 64 «contra») após o veto de Marcelo e a inconstitucionalidade do Acórdão 1133/2025. Em 05.05.2026 a publicação no Diário da República AINDA NÃO ocorreu — a lei entrará em vigor no dia seguinte à publicação. Após a entrada em vigor: prazo de naturalização 7 anos para CPLP+UE, 10 anos para os restantes; o tempo de espera pela primeira autorização de residência deixa de contar; teste cultural obrigatório; limiar de antecedentes criminais reduzido de 5 para 3 anos de prisão; para crianças nascidas em Portugal os pais terão de ter 5 anos de autorização de residência válida para pedir a nacionalidade do filho; a via sefardita é totalmente revogada. Seguro, no discurso de 03.05, pediu publicamente que os processos já submetidos não fossem afetados («os processos em tratamento devem ser apreciados pelas regras antigas por razões de segurança jurídica e de confiança no Estado»). O paralelo Decreto AR 49/XVII (alteração do Código Penal — perda de nacionalidade como pena adicional em caso de ≥5 anos por crimes graves) — em 05.05.2026 NÃO foi promulgado, encontra-se sob fiscalização preventiva do Tribunal Constitucional: 51 deputados do PS (Partido Socialista) enviaram-no ao TC; os juízes têm ~25 dias para decidir, prazo aproximadamente meio de maio de 2026.',
  },
  recentlyChangedAt: '2026-05-03',
  changeSummary: '03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII (reforma da Lei da Nacionalidade). O Parlamento aprovou em 01.04.2026 (152 votos). A lei entrará em vigor no dia seguinte à publicação no DRE. O Presidente pediu aplicar as regras antigas aos processos já submetidos. O Decreto 49/XVII conexo (perda da nacionalidade como pena) AINDA NÃO foi promulgado.',
  variants: [
    {
      id: 'cplp',
      audience: { citizenships: ['cplp'] },
      tldr: 'Para cidadãos da CPLP: pela lei vigente — 5 anos, pela nova lei de 2026 — 7 anos. O A2 de língua é contado automaticamente (português é língua materna/oficial no país de origem, CIPLE não é necessário).',
      timelineDaysMin: 180,
      timelineDaysMax: 540
    },
    {
      id: 'eu-eea',
      audience: { citizenships: ['euEeaSwiss'] },
      tldr: 'Para cidadãos da UE/EEE/Suíça: 5 anos pela lei vigente, pela nova lei de 2026 — 7 anos (UE equiparados à CPLP). Língua A2 — é necessário CIPLE ou certificado equivalente. Dupla nacionalidade permitida.'
    },
    {
      id: 'third-country',
      audience: { citizenships: ['thirdCountry'] },
      tldr: 'Para cidadãos de países terceiros: 5 anos pela lei vigente, 10 anos pela nova lei de 2026. Língua A2 (CIPLE ou certificado de escola a partir de 150 horas). A maioria dos países permite dupla nacionalidade — verifique a lei do seu país.'
    }
  ],
  steps: [
    {
      id: 'conditions',
      title: 'Condições segundo a lei vigente',
      content: [
        { kind: 'paragraph', text: 'Nos termos do art. 6.º da Lei 37/81 (Lei da Nacionalidade) e do Decreto-Lei 237-A/2006, os requisitos são:' },
        { kind: 'checklist', items: [
          '📅 Residência legal em Portugal ≥ 5 anos (contínua ou com interrupções)',
          '🗣️ Conhecimento de português A2 — comprovado por certificado (CIPLE, DEPLE, diploma escolar ≥ 150 horas, diploma de universidade portuguesa, conclusão do 6.º ano de escolaridade em Portugal). Não é exigido para cidadãos da CPLP.',
          '⚖️ Ausência de condenações com pena ≥ 3 anos de prisão — em qualquer país de residência',
          '🛡️ Não constituir ameaça à segurança nacional (na prática raramente aplicado)'
        ]},
        { kind: 'paragraph', text: 'O que a lei NÃO exige (contrariando a opinião comum):' },
        { kind: 'checklist', items: [
          '❌ A «ligação a Portugal» NÃO é um requisito formal no art. 6.º. Só pode ser solicitada perante indícios evidentes de permanência fictícia. 5 anos de autorização de residência legal são considerados prova suficiente',
          '❌ Não é exigido teste cultural/histórico (até à promulgação e entrada em vigor da nova lei de 2026)',
          '❌ Não é necessário renunciar à nacionalidade anterior — Portugal permite dupla nacionalidade'
        ]}
      ]
    },
    {
      id: 'counting-years',
      title: 'Como contar 5 anos — questão-chave',
      content: [
        { kind: 'paragraph', text: 'Segundo a redação vigente da Lei 37/81 + Decreto-Lei 237-A/2006, a referência base é a data da primeira emissão do título de residência (autorização de residência). Contudo, após as alterações de 2024, para efeitos de nacionalidade também conta o período desde o momento em que foi SOLICITADA a autorização de residência temporária, se a autorização tiver sido posteriormente concedida.' },
        { kind: 'checklist', items: [
          '✅ A partir da DATA DE EMISSÃO do primeiro título de residência — ponto de partida base',
          '✅ O tempo desde a DATA DO PEDIDO da primeira autorização de residência (se depois foi concedida) — também conta, pelas alterações de 2024',
          '⚠️ Manifestação de Interesse: o regime foi revogado pelo Decreto-Lei 37-A/2024 e pela Lei 61/2025 (em vigor desde 23.10.2025). Para quem apresentou a MdI até 03.06.2024 e obteve comprovativo — há entendimento de que o período de espera conta; a extensão exata é controversa e depende da Conservatória que aprecia e da prática judicial',
          '✅ Saídas curtas (férias, viagens de trabalho) não interrompem o prazo',
          '⚠️ Ausência prolongada > 6 meses seguidos ou > 8 meses no total em 2 anos pode interromper o prazo — depende do tipo de autorização de residência',
          '⚠️ Se a autorização de residência expirar e não for renovada atempadamente — ocorre uma interrupção da legalidade'
        ]},
        { kind: 'paragraph', text: 'Para uma contagem exata é útil (mas NÃO obrigatório) obter junto da AIMA a «Certidão de residência legal» — confirma as datas de todas as autorizações de residência e períodos de espera. Encomenda-se online em portal.aima.gov.pt.' },
        { kind: 'warning', text: 'A lei mudou várias vezes (alterações de 2018, 2020, 2024). Se os seus 5 anos abrangem diferentes redações — consulte obrigatoriamente um advogado de imigração. Especialmente para casos com MdI (revogada em 2024–2025).' }
      ]
    },
    {
      id: 'pending-law',
      title: 'Nova lei (Decreto AR 48/XVII) — promulgada em 03.05.2026',
      content: [
        { kind: 'paragraph', text: 'Cronologia breve: 28.10.2025 — o Parlamento aprovou a primeira versão (Decreto AR 17/XVII). 15.12.2025 — o Acórdão 1133/2025 declarou 4 normas inconstitucionais. 19.12.2025 — o Presidente Marcelo vetou e devolveu ao Parlamento. Janeiro de 2026 — eleições presidenciais, venceu António José Seguro (do PS). Tomada de posse em 09.03.2026. 01.04.2026 — o Parlamento aprovou novamente o texto corrigido (152 votos PSD+Chega+IL+CDS «a favor», 64 PS+Livre+PCP+BE+PAN «contra»). Após passar pelo TC o texto recebeu novo número — Decreto AR 48/XVII. 13.04.2026 — enviado para Belém. 21.04.2026 — 51 deputados do PS remeteram ao Tribunal Constitucional o Decreto AR 49/XVII conexo (alteração do Código Penal — perda de nacionalidade como pena) para fiscalização preventiva (prazo do TC — 25 dias). **03.05.2026 — o Presidente Seguro promulgou o Decreto AR 48/XVII (Lei da Nacionalidade)**. A lei entrará em vigor no dia seguinte à publicação no Diário da República. Em 05.05.2026 a publicação no DRE AINDA NÃO ocorreu. O Decreto 49/XVII (Código Penal) CONTINUA NÃO promulgado — aguardamos decisão do TC.' },
        { kind: 'paragraph', text: 'Alterações face ao regime antigo (entrarão em vigor após publicação no DRE):' },
        { kind: 'checklist', items: [
          '📅 CPLP: 5 → 7 anos',
          '📅 UE/EEE/Suíça: 5 → 7 anos (equiparam-se à CPLP)',
          '📅 Países terceiros: 5 → 10 anos',
          '⏱️ O tempo de espera da Manifestação de Interesse / da primeira autorização de residência deixa de contar — a contagem inicia-se apenas na DATA DE EMISSÃO do primeiro título de residência',
          '📝 Teste obrigatório sobre a cultura portuguesa, direitos e deveres dos cidadãos e organização política do Estado',
          '🏠 Requisitos reforçados de presença efetiva — não basta ter autorização de residência, é preciso viver fisicamente em Portugal',
          '⚖️ Limiar de idoneidade criminal agravado: de 5 para 3 anos de prisão (mesmo uma condenação mais leve passa a bloquear a naturalização)',
          '👶 Crianças nascidas em Portugal: para pedir a nacionalidade do filho com base neste fundamento, os pais devem ter ≥5 anos de autorização de residência válida (antes era mais simples)',
          '🚫 Revogação da via sefardita acelerada (Lei 43/2013 + DL 30-A/2015) — totalmente removida',
          '🔴 Perda de nacionalidade como pena adicional em caso de condenação ≥5 anos por crimes graves — isto é objeto do Decreto AR 49/XVII (Código Penal), em 05.05.2026 NÃO promulgado, sob fiscalização preventiva do TC a pedido de 51 deputados do PS',
          '⚡ Pedidos submetidos ANTES da entrada em vigor da nova lei — o Presidente Seguro no discurso de 03.05.2026 pediu publicamente que fossem apreciados pelas regras antigas («não devem ser materialmente afetados por razões de segurança jurídica e de confiança no Estado»). O regime transitório final — no texto da lei aquando da publicação no DRE'
        ]},
        { kind: 'warning', text: 'Recomendação: se os seus 5 anos pela lei antiga já foram cumpridos ou estão prestes a cumprir-se — submeta IMEDIATAMENTE, antes da publicação do Decreto 48/XVII no DRE. A submissão fixa o processo no regime legislativo antigo (sobretudo tendo em conta o pedido do Presidente ao IRN). Após a publicação, as novas regras aplicam-se a todos os novos pedidos.' }
      ]
    },
    {
      id: 'language',
      title: 'Conhecimento de português — como comprovar',
      audience: { citizenships: ['euEeaSwiss', 'thirdCountry'] },
      content: [
        { kind: 'paragraph', text: 'Qualquer dos documentos é suficiente:' },
        { kind: 'checklist', items: [
          '📜 Certificado CIPLE (nível A2) do CAPLE — 85 € (2026), sessões mensais',
          '📜 Certificado DEPLE (B1), DIPLE (B2), DAPLE (C1), DUPLE (C2) — do CAPLE, qualquer acima de A2',
          '📜 Certificado de escola ≥ 150 horas no programa PLA (cursos públicos gratuitos — ver abaixo)',
          '🎓 Diploma de universidade portuguesa (qualquer área)',
          '🏫 Certificado de conclusão do 6.º ano de escolaridade em Portugal ou superior',
          '🇵🇹 Para cidadãos da CPLP (Brasil, Angola, Cabo Verde, Moçambique, São Tomé e Príncipe, Timor-Leste, Guiné-Bissau, Guiné Equatorial) — o certificado NÃO é necessário: o português é considerado língua materna/oficial'
        ]},
        { kind: 'paragraph', text: 'Mais detalhes sobre preparação, cursos gratuitos e o exame — no guia separado «CIPLE A2».' }
      ]
    },
    {
      id: 'documents',
      title: 'Conjunto de documentos para a submissão',
      content: [
        { kind: 'checklist', items: [
          '📝 Requerimento — formulário modelo 1-A (para naturalização) — descarregar em irn.pt, preencher à mão ou online',
          '📄 Passaporte válido — cópia de todas as páginas preenchidas',
          '📄 Título de residência (autorização de residência) — válido. Nesta fase você AINDA NÃO tem Cartão de Cidadão — só é emitido após a aprovação da nacionalidade',
          '📄 Certidão de nascimento — apostila + tradução juramentada para português (completa, com nomes dos pais)',
          '📄 Certidão do registo criminal em Portugal (certidão do registo criminal) — gratuito em eportugal.gov.pt',
          '📄 Certidão do registo criminal do país de nacionalidade + de cada país de residência ≥ 1 ano nos últimos 5 anos — com apostila e tradução juramentada',
          '📜 Certificado de conhecimento de português (para não-CPLP)',
          '💶 Taxa 250 € — paga no IRN (a referência Multibanco é emitida no ato de submissão)'
        ]},
        { kind: 'paragraph', text: 'O que é conveniente anexar, mas oficialmente NÃO obrigatório:' },
        { kind: 'checklist', items: [
          '📜 Certidão de residência legal da AIMA — confirma as datas exatas das autorizações de residência e dos períodos de espera. Ajuda o IRN a verificar mais rapidamente os 5 anos; sem ela o IRN solicita os dados à AIMA (mais 1–3 meses no prazo)',
          '📋 Comprovativos de «ligação a Portugal»: declarações de IRS, contratos de trabalho, certidões de casamento/nascimento de filhos, atestado de residência. Isto NÃO é requisito legal; mas, se anexar, acelera a análise e reduz o risco de pedidos adicionais'
        ]},
        { kind: 'warning', text: 'Todos os documentos estrangeiros devem ter apostila (ou legalização consular) + tradução para português por tradutor-intérprete ajuramentado. Lista de tradutores ajuramentados: no site do Ministério dos Negócios Estrangeiros.' }
      ]
    },
    {
      id: 'where',
      title: 'Onde apresentar o pedido',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conservatória dos Registos Centrais (Lisboa) — canal principal',
          '🏛️ Qualquer Conservatória do Registo Civil da sua área de residência',
          '🏢 Espaço Registos na Loja do Cidadão (por marcação)',
          '🌍 Através do consulado de Portugal (se vive no estrangeiro, por exemplo com base em 5 anos de residência no passado)',
          '💻 Online através do Portal da Nacionalidade (irn.justica.gov.pt) — desde 2025 para alguns casos',
          '🧑‍💼 Através de advogado por procuração — submissão sem presença pessoal'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: 'Prazos',
      content: [
        { kind: 'timeline', text: 'Prazo oficial — 1 ano a contar da data de submissão. Prazo efetivo em 2026 — 24–48 meses (média 36 meses). Fila no IRN >200 000 pedidos. Submissões online são tratadas mais rapidamente.' },
        { kind: 'paragraph', text: 'Após a aprovação, o IRN publica a decisão no Diário da República. Só a partir da data de publicação você é cidadão português. Depois disso: pedido do Cartão de Cidadão em qualquer Loja do Cidadão (fotografia + biometria, 18 € emissão normal / 33 € urgente / 53 € muito urgente — tarifas IRN 2026), pedido de passaporte português no IRN (85 €), registo de filhos recém-nascidos como cidadãos portugueses.' }
      ]
    }
  ],
  costs: [
    { label: 'Taxa do IRN', amountEUR: 250 },
    { label: 'CIPLE (para não-CPLP)', amountEUR: 85, note: '2026' },
    { label: 'Traduções ajuramentadas + apostilas', amountEURMin: 100, amountEURMax: 400 },
    { label: 'Certidão de residência legal AIMA (opcional)', amountEUR: 15 },
    { label: 'Cartão de Cidadão após obter a nacionalidade', amountEUR: 18, note: 'standard; 33 € urgente / 53 € muito urgente' },
    { label: 'Primeiro passaporte', amountEUR: 85 }
  ],
  timelineDaysMin: 365,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Submeter pedido de nacionalidade', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 — Lei da Nacionalidade (art. 6.º)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2006-34456975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Certidão de residência legal', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgação Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 60
}
