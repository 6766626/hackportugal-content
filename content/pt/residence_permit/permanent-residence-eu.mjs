export default {
  editorialVoice: 'hackportugal',
  id: 'permanent-residence-eu',
  categoryId: 'residence_permit',
  title: 'Residência permanente em Portugal (arts. 76, 80) e EU Long-Term Resident (arts. 125+)',
  tldr: 'Após 5 anos de titularidade de uma autorização de residência temporária em Portugal, pode pedir a **Autorização de Residência Permanente** (arts. 76 e 80 Lei 23/2007) — renovação a cada 10 anos. Alternativa: **Estatuto de Residente de Longa Duração UE / EU Long-Term Resident** (arts. 125+ Lei 23/2007, transpõe a Directive 2003/109/EC) — facilita a mudança para muitos países da UE (NÃO é liberdade de circulação automática como a dos cidadãos da UE; Dinamarca/Irlanda não participam). Requisitos: 5 anos de residência TEMPORÁRIA (e não de “processo”), português A2, ausência de judicial conviction por crime com pena privativa de liberdade > 1 ano, meios estáveis. Pedido na AIMA.',
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
              'Válida por 10 anos → renovação a cada 10 anos',
              'Direito a trabalhar, viver e estudar em Portugal sem limitações',
              'Risco de cancellation em caso de ausência durante 24 meses consecutivos OU 30 meses no total ao longo de 3 anos sem motivo atendível (art. 85 Lei 23/2007)',
              'Ao abrigo do direito em vigor, a naturalização é possível após 5 anos de residência legal — **03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII**, que, após publicação no DRE, aumentará o prazo para 7 anos para CPLP/EU e 10 anos para os restantes. Permanent residence NÃO é obrigatória para pedir a cidadania',
              'Os familiares obtêm uma autorização de residência temporária e depois podem seguir o seu próprio caminho para a residência permanente',
              'Não confere direitos noutros países da UE'
            ]}
          ]},
          { id: 'n2', title: '🇪🇺 EU Long-Term Resident (EULTR)', content: [
            { kind: 'checklist', items: [
              'Válida por 5 anos → renovação',
              'Facilita a mudança para muitos países da UE: depois da entrada no segundo Estado, normalmente é necessário pedir uma autorização de residência local e cumprir as respetivas condições (isto NÃO é liberdade de circulação como a dos cidadãos da UE)',
              'NÃO se aplica à Dinamarca nem à Irlanda (não participam na Directive 2003/109/EC)',
              'Requisitos: meios de subsistência estáveis e regulares, seguro de saúde, conhecimento básico de português',
              'Risco de perda em caso de ausência da UE durante 12 meses consecutivos e noutras situações previstas na Lei 23/2007/Directive 2003/109',
              'Vantagem para quem planeia mobilidade na UE'
            ]}
          ]},
          { id: 'n3', title: '🤔 Recomendação', content: [
            { kind: 'paragraph', text: 'Para a maioria dos residentes — **residência permanente nacional**: procedimento mais simples, menos documentos, não caduca. EULTR — se planeia realmente mudar-se para outro país da UE dentro de 1-3 anos. Em teoria, é possível ter permanent residence nacional e/ou o estatuto de EU long-term resident, mas o procedimento e a menção/cartão dependem da AIMA — é melhor confirmar a estratégia antes do pedido.' }
          ]}
        ]}
      ]
    },
    {
      id: 'conditions',
      title: 'Condições para o pedido (arts. 76, 80)',
      content: [
        { kind: 'checklist', items: [
          '📅 **5 anos de titularidade de uma autorização de residência temporária** em Portugal. NÃO confundir com as regras da cidadania: os períodos de espera dos pedidos podem ser relevantes para o nationality clock, mas normalmente NÃO substituem 5 anos de temporary residence permit para residência permanente',
          '🗣️ **Português A2** — certificado CIPLE/CAPLE, certificado de curso de português reconhecido, ou outro documento expressamente aceite pela AIMA ao abrigo da lei/regulamento',
          '💰 **Meios de subsistência estáveis e regulares** — normalmente trabalho, pensão, rendimentos; a AIMA orienta-se pelos Portuguese subsistence thresholds',
          '🏠 **Alojamento adequado** — contrato de arrendamento / propriedade, área em função da família',
          '⚕️ **Seguro de saúde ou utente do SNS** — funciona se estiver registado',
          '⚖️ **Sem registo criminal** por crime que, segundo o direito português, seja punível com pena de prisão superior a 1 ano (art. 80 Lei 23/2007)',
          '📋 **Ausência de dívidas** nas Finanças e na Segurança Social',
          '🛡️ Sem infrações à legislação de imigração (estadia caducada, trabalho ilegal)'
        ]}
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
          '💼 Comprovativo de rendimentos: IRS Anexo A dos últimos 3 anos, 12 recibos mensais de salário ou Anexo B (para trabalhadores independentes)',
          '🏠 Atestado de residência da Junta + contrato de arrendamento',
          '💳 Certidões sem dívida: Finanças + Segurança Social (gratuito nos portais electrónicos)',
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
          { id: 'p1', title: '1. Apresentar o pedido na AIMA', content: [
            { kind: 'paragraph', text: 'A apresentação depende do canal actual da AIMA: portal online, se a AIMA tiver aberto a opção correspondente, ou marcação/apresentação através da AIMA. Verifique a página da AIMA para “autorização de residência permanente” / “estatuto de residente de longa duração” antes de apresentar o pedido.' }
          ]},
          { id: 'p2', title: '2. Pagar a taxa', content: [
            { kind: 'paragraph', text: 'AIMA — concessão art. 76 = **351,10 €** (tabela 01.03.2026). Adicionalmente, recepção + análise ~133 €.' }
          ]},
          { id: 'p3', title: '3. Entrevista na AIMA (se exigida)', content: [
            { kind: 'paragraph', text: 'Normalmente não é exigida para a residência permanente nacional; por vezes há convocação. Para EU Long-Term — a entrevista é obrigatória.' }
          ]},
          { id: 'p4', title: '4. Decisão', content: [
            { kind: 'timeline', text: '6-12 meses (segundo a Lei 61/2025 — até 9 meses legais). Na prática, em 2026 — até 18 meses devido às filas.' }
          ]},
          { id: 'p5', title: '5. Receber o cartão', content: [
            { kind: 'paragraph', text: 'O cartão de residência permanente chega por correio. É válido por 10 anos (nacional) ou 5 anos (EULTR).' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'Depois de obter a residência permanente',
      content: [
        { kind: 'checklist', items: [
          '🎂 Não há “recontagem” obrigatória do tempo — renovação a cada 10 anos',
          '🌍 Residência permanente nacional: risco de cancellation em caso de ausência durante 24 meses consecutivos OU 30 meses no total ao longo de 3 anos sem motivo atendível. EULTR: risco de perda em caso de ausência da UE durante 12 meses consecutivos e noutras situações',
          '💼 Trabalho sem limitações, sem autorizações',
          '👨‍👩‍👧 Reagrupamento Familiar — verifique as condições actuais ao abrigo da Lei 23/2007 (após a Lei 61/2025)',
          '🎓 Acesso ao ensino público nas mesmas condições gerais',
          '🏛️ Voto nas eleições locais (municipais) — para cidadãos da UE e de alguns países CPLP',
          '🎫 Cidadania: procedimento separado através do IRN. Permanent residence NÃO é obrigatória. Ao abrigo do direito em vigor — 5 anos de residência legal; **03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII** — após publicação no DRE serão 7 anos para CPLP/EU e 10 anos para os restantes'
        ]},
        { kind: 'warning', text: 'A residência permanente NÃO confere cidadania automaticamente — é necessário apresentar pedido separado através do IRN. Mas simplifica o processo, porque todos os documentos ficam mais estáveis + a língua já está comprovada.' }
      ]
    },
    {
      id: 'eu-long-term',
      title: 'EU Long-Term Resident — especificidades',
      content: [
        { kind: 'checklist', items: [
          'O pedido é apresentado na AIMA, escolhendo “Estatuto de residente de longa duração (UE)”',
          'Meios de subsistência estáveis e regulares, suficientes para o requerente e a família sem recurso a social assistance (limiar exacto — confirmar junto da AIMA)',
          'Condição de integração — em Portugal, normalmente prova de conhecimento básico da língua portuguesa na forma aceite pela AIMA',
          'Para OBTER EULTR: a residência de 5 anos deve ser contínua — limites habituais de ausências não superiores a 6 meses consecutivos e não superiores a 10 meses no total em 5 anos, salvo excepções',
          'Mobilidade para um segundo Estado da UE: apresentar pedido de autorização de residência local normalmente no prazo de 3 meses após a entrada e cumprir as condições desse país; alguns países exigem passos prévios / visto / verificação do mercado de trabalho',
          'Excepções e regras especiais: estatutos diplomáticos/temporários são excluídos; períodos de estudo normalmente não conferem direito por si só e podem contar parcialmente; beneficiaries of international protection — existem regras especiais na Lei 23/2007 / Directive 2011/51/EU',
          'Perda: depois da obtenção, aplicam-se regras próprias da Lei 23/2007 (risco em caso de ausência prolongada da UE e noutras situações)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'AIMA recepção + análise', amountEUR: 133 },
    { label: 'AIMA permanent (art. 76)', amountEUR: 351.10 },
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
