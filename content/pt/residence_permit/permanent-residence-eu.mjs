export default {
  editorialVoice: 'hackportugal',
  id: 'permanent-residence-eu',
  categoryId: 'residence_permit',
  title: 'Residência permanente em Portugal (arts. 76, 80) e EU Long-Term Resident (arts. 125+)',
  tldr: 'Após 5 anos de titularidade de uma autorização de residência temporária em Portugal, é possível requerer a Autorização de Residência Permanente (arts. 76 e 80 Lei 23/2007).\n\nA própria autorização é POR TEMPO INDETERMINADO (sem limite de tempo); apenas o título/cartão é renovado de 5 em 5 anos (art. 76 nº 4 Lei 23/2007). Alternativa: Estatuto de Residente de Longa Duração UE / EU Long-Term Resident (arts. 125+ Lei 23/2007, transpõe a Directive 2003/109/EC) — também com cartão de 5 anos, facilita a mudança para muitos países da UE (NÃO é liberdade de circulação automática como a dos cidadãos da UE; Dinamarca/Irlanda não participam). Requisitos: 5 anos de residência TEMPORÁRIA, português A2, ausência de judicial conviction por crime com pena privativa de liberdade > 1 ano, meios estáveis. Pedido na AIMA.',
  tags: ['residência-permanente', 'permanente', 'autorização-de-residência', 'eu-long-term'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'national-vs-eu',
      title: 'Dois tipos de residência permanente — qual escolher',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: '🇵🇹 Autorização de Residência Permanente (nacional)', content: [
            { kind: 'checklist', items: [
              'A própria autorização é por tempo indeterminado (sem limite de tempo, art. 76 Lei 23/2007). O cartão (título de residência) é renovado de 5 em 5 anos (art. 76 nº 4)',
              'Direito a trabalhar, viver e estudar em Portugal sem restrições',
              'Risco de cancellation em caso de ausência por 24 meses consecutivos OU 30 meses interpolados em 3 anos sem motivo atendível (art. 85 Lei 23/2007)',
              'Lei Orgânica 1/2026 (publicada 18.05.2026, em vigor desde 19.05.2026): a naturalização passa a ser de 7 anos para CPLP/UE e 10 anos para os restantes (em vez dos anteriores 5). A residência permanente NÃO é obrigatória para pedir a nacionalidade, mas torna-se mais importante como estatuto intermédio estável durante esses 7–10 anos de espera',
              'Os membros da família recebem uma autorização de residência temporária e depois podem seguir o seu próprio percurso para a residência permanente',
              'Não confere direitos noutros países da UE'
            ]}
          ]},
          { id: 'n2', title: '🇪🇺 EU Long-Term Resident (EULTR)', content: [
            { kind: 'checklist', items: [
              'O cartão é válido por 5 anos → renovação (o estatuto de residente de longa duração também é por tempo indeterminado; só o cartão é renovado)',
              'Facilita a mudança para muitos países da UE: depois da entrada no segundo Estado, normalmente é necessário requerer uma residence permit local e cumprir as respetivas condições (NÃO é liberdade de circulação como a dos cidadãos da UE)',
              'NÃO se aplica à Dinamarca e à Irlanda (não participam na Directive 2003/109/EC)',
              'Requisitos: meios de subsistência estáveis e regulares, seguro de saúde, conhecimento básico de português',
              'Risco de perda em caso de ausência da UE por 12 meses consecutivos e noutras situações previstas na Lei 23/2007/Directive 2003/109',
              'Vantagem para quem planeia mobilidade na UE'
            ]}
          ]},
          { id: 'n3', title: '🤔 Recomendação', content: [
            { kind: 'paragraph', text: 'Para a maioria dos residentes — residência permanente nacional: o procedimento é mais simples, exige menos documentos e não caduca. EULTR — se planeia realmente mudar-se para outro país da UE dentro de 1-3 anos. Em teoria, é possível ter national permanent residence e/ou o estatuto EU long-term resident, mas o procedimento e a menção/cartão dependem da AIMA — é melhor confirmar a estratégia antes de submeter o pedido.' }
          ]}
        ]}
      ]
    },
    {
      id: 'conditions',
      title: 'Condições para apresentar o pedido (arts. 76, 80)',
      content: [
        { kind: 'checklist', items: [
          '📅 5 anos de titularidade de uma autorização de residência temporária em Portugal. NÃO confundir com as regras da nacionalidade: os períodos de espera dos pedidos podem ser relevantes para a contagem da nacionalidade, mas normalmente NÃO substituem os 5 anos de autorização de residência temporária para a residência permanente',
          '🗣️ Português A2 — certificado CIPLE/CAPLE, certificado de curso de português reconhecido, ou outro documento expressamente aceite pela AIMA ao abrigo da lei/regulamento',
          '💰 Meios de subsistência estáveis e regulares — normalmente trabalho, pensão, rendimentos; a AIMA orienta-se pelos Portuguese subsistence thresholds',
          '🏠 Alojamento adequado — contrato de arrendamento / propriedade, área em função do agregado familiar',
          '⚕️ Seguro de saúde ou utente do SNS — funciona se estiver registado',
          '⚖️ Sem cadastro criminal por crime que, segundo o direito português, seja punível com pena de prisão superior a 1 ano (art. 80 Lei 23/2007)',
          '📋 Ausência de dívidas às Finanças e à Segurança Social',
          '🛡️ Sem infrações à legislação de imigração (estadia expirada, trabalho ilegal)'
        ]}
      ]
    },
    {
      id: 'counting-5-years',
      title: 'Quando começam a contar os 5 anos: nuances importantes',
      content: [
        { kind: 'paragraph', text: 'Regra principal: os 5 anos contam-se a partir da data de emissão do PRIMEIRO cartão de autorização de residência (título de residência). NÃO da entrada com visto, NÃO da submissão da MdI, NÃO da emissão do visto D. Mas existem nuances importantes:' },
        { kind: 'checklist', items: [
          'Visto D antes do primeiro cartão — NÃO conta. O visto é uma autorização de entrada, não de residência.',
          'Manifestação de Interesse (MdI) — NUNCA contou nem para a ARP nacional nem para o EULTR. A Lei 38/2024 permitiu brevemente para a nacionalidade, e a Lei Orgânica 1/2026 reverteu. O próprio regime da MdI foi revogado pela Lei 61/2025.',
          'Fila de renovação com pedido apresentado a tempo — CONTA como continuous legal residence (art. 78 + DR 84/2007 art. 61). Desde Outubro de 2025 a AIMA prolongou explicitamente a validade dos cartões caducados.',
          'Um intervalo sem título válido e sem pedido de renovação pendente — reinicia a contagem. A AIMA normalmente tolera intervalos curtos se a renovação anterior tiver sido pedida a tempo.',
          'Período de transição SEF→AIMA com cartões SEF caducados e renovação pendente confirmada — CONTA. Comprovado por uma certidão da AIMA.',
          'Conversões entre tipos de vistos (D2→D7, D7→D8) — a contagem NÃO se reinicia, desde que a autorização de residência se tenha mantido contínua. O importante é a continuidade da titularidade, não o tipo.',
          'Reagrupamento familiar: o membro da família tem a SUA PRÓPRIA data de início — o seu primeiro cartão de reagrupamento, NÃO a data do residente principal.',
          'Crianças nascidas em Portugal de residentes não-UE — art. 122 nº 1 al. a (NÃO 81!). O primeiro cartão próprio inicia os seus 5 anos.',
          'Estudantes: para a ARP nacional (art. 80), o tempo em autorização para estudo conta integralmente. Para o EULTR (art. 126 nº 3) conta apenas 50%; os estudantes em regime exclusivo de estudo não podem ser beneficiários EULTR enquanto não converterem o estatuto.'
        ] },
        { kind: 'warning', text: 'Se o seu historial dos 5 anos for não linear (mudanças de visto, intervalos, ausências prolongadas, transição SEF→AIMA) — peça à AIMA uma certidão de residência antes de submeter o pedido. Mostra num único documento todos os seus períodos de residência legal e elimina disputas no atendimento.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos',
      content: [
        { kind: 'checklist', items: [
          '📝 Modelo de requerimento (no site da AIMA)',
          '📄 Passaporte (original + cópias de todas as páginas preenchidas)',
          '📄 Autorização de residência válida (título de residência)',
          '🎓 Certificado A2 (CIPLE / PLA / diploma)',
          '💼 Comprovativo de rendimentos: IRS Anexo A dos últimos 3 anos, 12 recibos mensais de vencimento ou Anexo B (para trabalhadores independentes)',
          '🏠 Atestado de residência da Junta + contrato de arrendamento',
          '💳 Certidões sem dívida: Finanças + Segurança Social (gratuitas nos portais eletrónicos)',
          '⚖️ Registo criminal: Portugal (gratuito em eportugal.gov.pt) + países de residência ≥ 1 ano nos últimos 5 anos',
          '📸 2 fotografias 3x4',
          '💶 Pagamento da taxa'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo de pedido',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Submeter na AIMA', content: [
            { kind: 'paragraph', text: 'A submissão depende do canal atual da AIMA: portal online, se a AIMA tiver aberto a opção correspondente, ou marcação/submissão através da AIMA. Verifique a página da AIMA para «autorização de residência permanente» / «estatuto de residente de longa duração» antes de submeter.' }
          ]},
          { id: 'p2', title: '2. Pagar a taxa', content: [
            { kind: 'paragraph', text: 'AIMA — concessão art. 76 = 351,10 € (tabela 01.03.2026). Adicionalmente, receção + análise ~133 €.' }
          ]},
          { id: 'p3', title: '3. Entrevista na AIMA (se exigida)', content: [
            { kind: 'paragraph', text: 'Normalmente não é exigida para a residência permanente nacional; por vezes há convocatória. Para EU Long-Term — a entrevista é obrigatória.' }
          ]},
          { id: 'p4', title: '4. Decisão', content: [
            { kind: 'timeline', text: '6-12 meses (pela Lei 61/2025 — até 9 meses legais). Na prática, em 2026 — até 18 meses devido às filas.' }
          ]},
          { id: 'p5', title: '5. Receber o cartão', content: [
            { kind: 'paragraph', text: 'O cartão de residência permanente chega por correio. A validade do cartão é de 5 anos (tanto para a residência permanente nacional ao abrigo do art. 76 nº 4, como para EULTR). A própria autorização é por tempo indeterminado — só o plástico é renovado.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'Depois de obter a residência permanente',
      content: [
        { kind: 'checklist', items: [
          '🎂 Não há «recontagem» obrigatória do tempo — renovação do CARTÃO de 5 em 5 anos (a própria autorização é por tempo indeterminado)',
          '🌍 Residência permanente nacional: risco de cancellation em caso de ausência por 24 meses consecutivos OU 30 meses interpolados em 3 anos sem motivo atendível. EULTR: risco de perda em caso de ausência da UE por 12 meses consecutivos e noutros casos',
          '💼 Trabalho sem restrições, sem autorizações',
          '👨‍👩‍👧 Reagrupamento Familiar — verifique as condições atuais na Lei 23/2007 (após a Lei 61/2025)',
          '🎓 Acesso ao ensino público nos termos gerais',
          '🏛️ Voto nas eleições locais (municipais) — para cidadãos da UE e de alguns países CPLP',
          '🎫 Nacionalidade: procedimento separado através do IRN. A residência permanente NÃO é obrigatória. Lei Orgânica 1/2026 (em vigor desde 19.05.2026): passa a ser de 7 anos para CPLP/UE e 10 anos para os restantes (em vez dos anteriores 5)'
        ]},
        { kind: 'warning', text: 'A residência permanente NÃO confere nacionalidade automaticamente — é necessário apresentar um pedido separado através do IRN. Mas simplifica o processo, uma vez que todos os documentos ficam mais estáveis + a língua já está comprovada.' }
      ]
    },
    {
      id: 'eu-long-term',
      title: 'EU Long-Term Resident — especificidades',
      content: [
        { kind: 'checklist', items: [
          'O pedido é apresentado na AIMA, escolhendo «Estatuto de residente de longa duração (UE)»',
          'Meios de subsistência estáveis e regulares, suficientes para o requerente e a família sem recurso a social assistance (limiar exato — confirmar junto da AIMA)',
          'Condição de integração — em Portugal, normalmente prova de conhecimento básico da língua portuguesa em formato aceite pela AIMA',
          'Para OBTER EULTR: a residência de 5 anos deve ser contínua — limites habituais de ausências não superiores a 6 meses consecutivos e não superiores a 10 meses no total ao longo de 5 anos, salvo exceções',
          'Mobilidade para um segundo Estado da UE: normalmente é necessário requerer uma residence permit local no prazo de 3 meses após a entrada e cumprir as condições desse país; alguns países exigem passos prévios / visto / teste do mercado de trabalho',
          'Exceções e regras especiais: estatutos diplomáticos/temporários ficam excluídos; períodos de estudo normalmente não dão direito por si só e podem ser contados parcialmente; beneficiaries of international protection — existem regras especiais na Lei 23/2007 / Directive 2011/51/EU',
          'Perda: após a obtenção, aplicam-se regras próprias da Lei 23/2007 (risco em caso de ausência prolongada da UE e noutros casos)'
        ]}
      ]
    },
    {
      id: 'common-myths',
      title: 'Mitos sobre ARP e EULTR',
      content: [
        { kind: 'paragraph', text: 'Estes equívocos surgem frequentemente nas discussões sobre ARP nacional vs EULTR. Realidade em Maio de 2026:' },
        { kind: 'checklist', items: [
          '❌ "EULTR = direito automático de viver em qualquer país da UE como os cidadãos da UE" — Não, é o direito de APRESENTAR um pedido de residência noutro país da UE ao abrigo das regras nacionais desse país. Dinamarca e Irlanda não participam de todo na Directive 2003/109.',
          '❌ "É preciso escolher entre ARP nacional e EULTR" — Pode ter os dois estatutos em simultâneo. Advogados (PaxLegal, Lexidy, Fiolegal) recomendam frequentemente primeiro a ARP nacional (mais simples, mais barata), depois o EULTR por cima.',
          '❌ "Os anos de estudo contam da mesma forma para os dois" — Para a ARP nacional (art. 80) contam integralmente. Para o EULTR (art. 126 nº 3) contam apenas 50%; estudantes em regime exclusivo de estudo ficam totalmente excluídos.',
          '❌ "As ausências prolongadas são igualmente perigosas" — Limiares diferentes: a ARP nacional perde-se após 24 meses consecutivos ou 30/36 interpolados. O EULTR perde-se após 12 meses fora da UE.',
          '❌ "Os recursos para o EULTR são iguais aos da ARP" — O EULTR exige recursos estáveis e regulares (com referência ao SMN/pensão), além de EXPLICITAMENTE seguro de saúde ou SNS. A ARP tem formulação mais branda — meios de subsistência.',
          '❌ "A Manifestação de Interesse contava para um deles" — Não, nunca contou nem para ARP nem para EULTR.',
          '❌ "O cartão EULTR acompanha-o para outro país da UE" — Não. O EULTR é um estatuto português. Noutro país da UE pede a residência local (normalmente em 3 meses após a entrada), mas o EULTR português reforça o argumento.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'AIMA receção + análise', amountEUR: 133 },
    { label: 'AIMA permanente (art. 76)', amountEUR: 351.10 },
    { label: 'Certidões Finanças / SS', amountEUR: 0 },
    { label: 'Apostilas + traduções de certificados de registo criminal', amountEURMin: 100, amountEURMax: 300 },
    { label: 'CIPLE (se não tiver certificado)', amountEUR: 85 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 540,
  sources: [
    { title: 'Lei 23/2007 — Autorização de Residência Permanente (arts. 76, 80) e Residente de Longa Duração (arts. 125+)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DL 29/2012 — EU Long-Term Resident', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/29-2012-542995', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Directive 2003/109/EC', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0109', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização Permanente', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-25',
  recentlyChangedAt: '2026-05-25',
  changeSummary: 'Atualização de Maio 2026: (1) Comparação mais profunda entre ARP nacional (art. 80) e EULTR (art. 125+): estudantes contam de forma diferente, limiares de ausência diferentes, padrões de recursos diferentes. (2) Passo "Quando começam a contar os 5 anos" com 9 nuances importantes (visto D, MdI, fila de renovação, intervalos, SEF→AIMA, conversões, reagrupamento, crianças nascidas em PT, estudantes). (3) Mitos frequentes sobre diferenças ARP vs EULTR. (4) Lei Orgânica 1/2026 (em vigor desde 19.05.2026): a nacionalidade agora exige 7/10 anos, a ARP torna-se mais importante como estatuto intermédio.',
  verifyIntervalDays: 180
}
