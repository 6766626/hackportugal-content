export default {
  editorialVoice: 'hackportugal',
  id: 'uniao-de-facto',
  categoryId: 'nationality',
  title: 'União de facto — parceria civil em Portugal',
  tldr: 'União de facto — estatuto jurídico de vida em comum, reconhecido após **2 anos de coabitação** ao abrigo da Lei 7/2001. Confere PARTE dos direitos dos cônjuges: tributação conjunta em IRS, direito a Reagrupamento Familiar e alguns benefícios sociais. ⚠️ NÃO é um equivalente pleno do casamento — o parceiro sobrevivo **não é herdeiro legal** por defeito (é necessário testamento/procedimento especial); o acesso ao SNS normalmente NÃO surge automaticamente “através” do parceiro. Para **nacionalidade por união** a Lei 37/81 art. 3 n.3 exige **decisão judicial** (sentença declarativa) sobre >3 anos de união com cidadão português — o simples registo na Junta de Freguesia para efeitos de nacionalidade NÃO é suficiente. O registo na Junta de Freguesia (Lei 7/2001) — é um ato administrativo simples para fins fiscais/sociais. Aplica-se a casais de sexo diferente e do mesmo sexo.',
  tags: ['união', 'coabitação', 'parceria', 'lei 7/2001'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'O que é e como funciona',
      content: [
        { kind: 'paragraph', text: 'União de facto — reconhecimento jurídico de um casal que vive junto. É regulada pela Lei 7/2001 (aplica-se a duas pessoas independentemente do sexo; Lei 23/2010 — é a lei sobre casamento entre pessoas do mesmo sexo, não sobre união). Não exige cerimónia, não é casamento, mas confere vários direitos comparáveis.' },
        { kind: 'checklist', items: [
          '💑 Casal de qualquer sexo e nacionalidade (de sexo diferente ou do mesmo sexo)',
          '📅 Mínimo de 2 anos de coabitação',
          '🏠 Habitação comum — comprovável por contrato de arrendamento em nome dos dois, contas de serviços, morada comum nas Finanças',
          '👫 Ambos — maiores de idade e com capacidade jurídica',
          '❌ Não estar num casamento em vigor com outra pessoa',
          '❌ Não ter impedimentos do art. 2 Lei 7/2001: ascendentes/descendentes em linha reta, 2.º grau da linha colateral (irmãos/irmãs), afinidade em linha reta (sogra/sogro, etc.)'
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'Que direitos confere',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '💰 Impostos e finanças', content: [
            { kind: 'checklist', items: [
              'Entrega conjunta do IRS (**tributação conjunta**)',
              'Dedução de pensões de alimentos, despesas de saúde e de educação do parceiro',
              '⚠️ O parceiro em união **não é herdeiro automático** — é necessário testamento/planeamento. Em transmissões gratuitas, o surviving partner normalmente está isento do Imposto do Selo de 10% (Código do Imposto do Selo art. 6)',
              'Direito a pensão de sobrevivência em caso de morte do parceiro',
              '⚠️ Não existe um regime geral de “spousal alimony” como no divórcio. Possíveis claims after breakup/death são limitados e dependem dos factos; em caso de dependência financeira — é melhor obter aconselhamento jurídico'
            ]}
          ]},
          { id: 'r2', title: '🏥 Saúde e SNS', content: [
            { kind: 'checklist', items: [
              'Segurança Social: a união pode ser relevante para determinadas prestações familiares e survivor benefits, mas cada pessoa tem o seu próprio NISS e o seu estatuto contributivo/de benefício',
              'SNS: a parceria por si só **não** “inscreve” no SNS através do parceiro — é necessária lawful residence própria e número de utente do SNS; a união ajuda a provar morada/agregado comum',
              'Seguros privados — tarifa para cônjuges (planos familiares)',
              'Visitas hospitalares enquanto pessoa próxima — normalmente é mais fácil, mas para poderes claros de decisão em matéria de saúde faça uma formal advance directive / procurador de cuidados de saúde (Lei 25/2012)'
            ]}
          ]},
          { id: 'r3', title: '🛂 Imigração', content: [
            { kind: 'checklist', items: [
              '**Reagrupamento Familiar** através de cidadão/residente em Portugal — é possível; conte com provas adicionais de durable relationship/cohabitation (a AIMA pode pedir mais documentos do que para cônjuges)',
              '**Nacionalidade por união** após 3 anos com cidadão PT nos termos do art. 3 Lei 37/81 — normalmente é necessário **reconhecimento judicial** prévio da união de facto em tribunal cível; certificado da Junta é insuficiente para nacionalidade',
              '**Visto para parceiro**: se um cidadão português for trabalhar para o estrangeiro, o parceiro estrangeiro pode obter estatuto de familiar próximo',
              'Para a livre circulação de cidadãos da EU: o parceiro coabitante pode ser considerado durable partner mediante provas adequadas de cohabitation/relação (Lei 37/2006, Diretiva 2004/38/EC)'
            ]}
          ]},
          { id: 'r4', title: '🏠 Habitação', content: [
            { kind: 'checklist', items: [
              'Arrendamento: parceiro co-requerente, direito a continuar o arrendamento em caso de morte do arrendatário principal',
              'Propriedade: aquisição conjunta sem impostos adicionais',
              'Habitação social: o casal é considerado “agregado familiar”',
              '⚠️ A family home tem proteções específicas (especialmente no arrendamento e em caso de morte/rutura), mas a união **não confere veto automático** ao não proprietário sobre a venda. Se pretende proteção — constitua compropriedade ou proteja por contrato'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-prove',
      title: 'Como provar / formalizar',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Opção A — certificado da Junta de Freguesia', content: [
            { kind: 'checklist', items: [
              'A forma mais rápida e simples',
              'Na Junta de Freguesia da área de residência com: Cartão de Cidadão/autorização de residência de ambos, 2 testemunhas (vizinhos, amigos), atestado de residência',
              'As testemunhas confirmam sob compromisso que vivem juntos há ≥ 2 anos',
              'É emitido **Certificado de União de Facto** no dia da visita (custo municipal — confirme na Junta)',
              'Suficiente para muitos fins práticos/fiscais, mas cada entidade pode pedir provas adicionais. Para nacionalidade via IRN por união, normalmente NÃO É SUFICIENTE (é necessário reconhecimento judicial); para a AIMA — conte com provas adicionais de cohabitation'
            ]}
          ]},
          { id: 'p2', title: 'Opção B — registo na Conservatória (opcional)', content: [
            { kind: 'checklist', items: [
              'Registo civil da união — ato opcional; essencialmente fixa a situação no registo civil PT, quando tal é juridicamente possível',
              'Para estrangeiros sem assento de nascimento português, o efeito prático depende do respetivo civil registration status',
              'Não cria direitos adicionais e **não substitui** o judicial recognition para nacionalidade',
              'Custo: confirme no IRN/ePortugal antes da visita — não há preço simbólico fixo'
            ]}
          ]},
          { id: 'p3', title: 'Opção C — declaração conjunta de IRS', content: [
            { kind: 'paragraph', text: 'A IRS joint filing ajuda a provar vida em comum para fins fiscais, mas não vincula a AIMA/IRN/tribunais. Para nacionalidade ao abrigo do art. 3 com cidadão PT — planeie o reconhecimento judicial da união de facto, e não apenas o certificado da Junta.' }
          ]}
        ]}
      ]
    },
    {
      id: 'end',
      title: 'Rutura / dissolução',
      content: [
        { kind: 'checklist', items: [
          'A dissolução ocorre por: morte, casamento ou vontade de um/ambos os parceiros (Lei 7/2001 art. 8)',
          'Se a rutura for invocada para fundamentar efeitos jurídicos — pode ser necessária judicial declaration',
          'Notifique a AT/Segurança Social/AIMA/IRN quando for relevante',
          'Após a rutura: pensão de alimentos é limitada e não como no divórcio; partilha de bens — pelo direito comum (não matrimonial)',
          'O custo depende da entidade/procedimento (não há “10 €” único). Confirme no IRN/ePortugal',
          'Se não comunicar — pode continuar como união nos documentos, o que pode bloquear novas relações'
        ]}
      ]
    },
    {
      id: 'vs-marriage',
      title: 'União de facto vs casamento',
      content: [
        { kind: 'checklist', items: [
          '🔸 **União**: mais simples de criar/terminar, sem cerimónia, sem divórcio judicial',
          '🔸 **Casamento**: o cônjuge é herdeiro legal; default property regime = comunhão de adquiridos (se não for escolhido outro regime). Mais proteções para a family home e representação',
          '🔸 **Para nacionalidade**: para união com cidadão PT normalmente é necessário judicial recognition; o casamento é procedimentalmente mais simples para o IRN',
          '🔸 **Para imigração**: o casamento confere estatuto mais forte; a união exige provas de durable relationship',
          '🔸 **Para a área social**: a pensão de sobrevivência funciona para ambos, mas os detalhes dependem das contribuições',
          '🔸 **Tributação**: ambas as formas permitem tributação conjunta'
        ]},
        { kind: 'warning', text: 'Para Reagrupamento Familiar — reúna provas fortes de cohabitation/relação e verifique a lista atual da AIMA. Para nacionalidade por união com cidadão PT — planeie o reconhecimento judicial; o simples registo na Conservatória não é suficiente. ⚠️ Reforma Lei da Nacionalidade: Decreto AR 48/XVII promulgado pelo Presidente Seguro em 03.05.2026 — à data de 17.05.2026 ainda aguarda publicação no DRE; antes de submeter, confirme a redação atual da lei.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de União de Facto (Junta de Freguesia)', amountEURMin: 0, amountEURMax: 20, note: 'preço municipal; confirme na Junta concreta' },
    { label: 'Registo na Conservatória do Registo Civil', note: 'segundo a tabela de emolumentos do IRN — verifique no ePortugal antes da visita' },
    { label: 'Dissolução', note: 'depende do procedimento (Junta/registo civil/tribunal) — não há preço único' }
  ],
  sources: [
    { title: 'Lei 7/2001 — União de facto (consolidada)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34455975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — União de facto', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo de União de Facto', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
