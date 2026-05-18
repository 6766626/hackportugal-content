export default {
  editorialVoice: 'hackportugal',
  id: 'uniao-de-facto',
  categoryId: 'nationality',
  title: 'União de facto — parceria civil em Portugal',
  tldr: 'União de facto é um estatuto jurídico de vida em comum, reconhecido após **2 anos de coabitação** ao abrigo da Lei 7/2001. Confere PARTE dos direitos dos cônjuges: tributação conjunta em IRS, direito a Reagrupamento Familiar e alguns apoios sociais.\n\n⚠️ NÃO é um equivalente pleno do casamento — o parceiro sobrevivo **não é herdeiro legal** por defeito (é necessário testamento/procedimento especial); o acesso ao SNS normalmente NÃO surge automaticamente «através» do parceiro. Para **nacionalidade por união** a Lei 37/81 art. 3 n.3 exige **decisão judicial** (sentença declarativa) sobre >3 anos de união com cidadão português — o simples registo na Junta de Freguesia NÃO é suficiente para efeitos de nacionalidade. O registo na Junta de Freguesia (Lei 7/2001) é um acto administrativo simples para fins fiscais/sociais. Aplica-se a casais de sexos diferentes e do mesmo sexo.',
  tags: ['união', 'coabitação', 'parceria', 'lei 7/2001'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'O que é e como funciona',
      content: [
        { kind: 'paragraph', text: 'União de facto é o reconhecimento jurídico de um casal que vive em comum. É regulada pela Lei 7/2001 (aplica-se a duas pessoas independentemente do sexo; a Lei 23/2010 é a lei sobre casamento entre pessoas do mesmo sexo, não sobre união). Não exige cerimónia, não é casamento, mas confere vários direitos comparáveis.' },
        { kind: 'checklist', items: [
          '💑 Casal de qualquer sexo e nacionalidade (de sexos diferentes ou do mesmo sexo)',
          '📅 Pelo menos 2 anos de coabitação',
          '🏠 Habitação comum — demonstrável por contrato de arrendamento em nome de ambos, facturas de serviços, morada comum nas Finanças',
          '👫 Ambos — maiores de idade com capacidade jurídica',
          '❌ Não estar casado com outra pessoa',
          '❌ Não ter impedimentos do art. 2 Lei 7/2001: ascendentes/descendentes em linha recta, 2.º grau da linha colateral (irmãos/irmãs), afinidade em linha recta (sogra/sogro, etc.)'
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
              'Entrega conjunta de IRS (**tributação conjunta**)',
              'Dedução de pensões de alimentos, despesas médicas e de educação do parceiro',
              '⚠️ O parceiro em união **não é herdeiro automático** — é necessário testamento/planeamento. Em transmissões gratuitas, o surviving partner está normalmente isento de Imposto do Selo de 10% (Código do Imposto do Selo art. 6)',
              'Direito a pensão do parceiro sobrevivo (pensão de sobrevivência) em caso de morte do parceiro',
              '⚠️ Não existe um regime geral de «spousal alimony» como no divórcio. Possíveis claims after breakup/death são limitadas e dependem dos factos; em caso de dependência financeira, é melhor obter aconselhamento jurídico'
            ]}
          ]},
          { id: 'r2', title: '🏥 Medicina e SNS', content: [
            { kind: 'checklist', items: [
              'Segurança Social: a união pode ser relevante para determinados abonos familiares e survivor benefits, mas cada pessoa tem o seu próprio NISS e estatuto de contribuição/benefício',
              'SNS: a parceria por si só **não** «inscreve» no SNS através do parceiro — é necessária residência legal própria e número de utente do SNS; a união ajuda a provar morada/agregado familiar comum',
              'Seguros privados — tarifa para cônjuges (planos familiares)',
              'Visitas hospitalares enquanto pessoa próxima — normalmente é mais fácil, mas para poderes claros de tomada de decisão médica deve formalizar uma directiva antecipada de vontade / procurador de cuidados de saúde (Lei 25/2012)'
            ]}
          ]},
          { id: 'r3', title: '🛂 Imigração', content: [
            { kind: 'checklist', items: [
              '**Reagrupamento Familiar** através de cidadão/residente em Portugal — é possível; espere provas adicionais de durable relationship/cohabitation (a AIMA pode pedir mais documentos do que no caso de cônjuges)',
              '**Nacionalidade por união** após 3 anos com cidadão português ao abrigo do art. 3 Lei 37/81 — normalmente é necessário **reconhecimento judicial** prévio da união de facto em tribunal cível; o certificado da Junta é insuficiente para nacionalidade',
              '**Visto para o parceiro**: se um cidadão português for trabalhar no estrangeiro, o parceiro estrangeiro pode obter estatuto de familiar próximo',
              'Para a livre circulação de cidadãos da UE: o parceiro em coabitação pode ser considerado durable partner com provas adequadas de cohabitation/relação (Lei 37/2006, Directiva 2004/38/EC)'
            ]}
          ]},
          { id: 'r4', title: '🏠 Habitação', content: [
            { kind: 'checklist', items: [
              'Arrendamento: parceiro co-requerente, direito a continuar o arrendamento em caso de morte do arrendatário principal',
              'Propriedade: aquisição conjunta sem impostos adicionais',
              'Habitação social: o casal é considerado «agregado familiar»',
              '⚠️ A family home tem protecções específicas (sobretudo no arrendamento e em caso de morte/ruptura), mas a união **não confere veto automático** ao não proprietário sobre a venda. Se quiser protecção — formalize compropriedade ou proteja por contrato'
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
              'As testemunhas confirmam sob compromisso de honra que vivem juntos há ≥ 2 anos',
              'Emitem o **Certificado de União de Facto** no dia da visita (custo municipal — confirme na Junta)',
              'É suficiente para muitos fins práticos/fiscais, mas cada entidade pode pedir provas adicionais. Para nacionalidade no IRN através de união, normalmente NÃO É SUFICIENTE (é necessário reconhecimento judicial); para a AIMA — espere provas adicionais de cohabitation'
            ]}
          ]},
          { id: 'p2', title: 'Opção B — registo na Conservatória (opcional)', content: [
            { kind: 'checklist', items: [
              'Registo civil da união — acto opcional; em geral fixa a situação no registo civil português, quando isso seja juridicamente possível',
              'Para estrangeiros sem assento de nascimento português, o efeito prático depende do seu civil registration status',
              'Não cria direitos adicionais e **não substitui** o judicial recognition para nacionalidade',
              'Custo: confirme no IRN/ePortugal antes da visita — não existe preço simbólico fixo'
            ]}
          ]},
          { id: 'p3', title: 'Opção C — declaração conjunta de IRS', content: [
            { kind: 'paragraph', text: 'A entrega conjunta de IRS ajuda a provar a vida em comum para fins fiscais, mas não vincula a AIMA/IRN/tribunais. Para nacionalidade ao abrigo do art. 3 com cidadão português — planeie o reconhecimento judicial da união de facto, e não apenas o certificado da Junta.' }
          ]}
        ]}
      ]
    },
    {
      id: 'end',
      title: 'Ruptura / dissolução',
      content: [
        { kind: 'checklist', items: [
          'A dissolução ocorre por: morte, casamento ou vontade de um/ambos os parceiros (Lei 7/2001 art. 8)',
          'Se a ruptura for invocada para fundamentar efeitos jurídicos — pode ser necessária declaração judicial',
          'Notifique a AT/Segurança Social/AIMA/IRN quando for relevante',
          'Após a ruptura: alimentos são limitados e não como no divórcio; partilha de bens — pelo direito comum (não matrimonial)',
          'O custo depende da entidade/procedimento (não existe um «10 €» único). Confirme no IRN/ePortugal',
          'Se não comunicar — pode continuar a constar como união nos documentos, o que pode bloquear novas relações'
        ]}
      ]
    },
    {
      id: 'vs-marriage',
      title: 'União de facto vs casamento',
      content: [
        { kind: 'checklist', items: [
          '🔸 **União**: mais simples de criar/terminar, sem cerimónia, sem divórcio judicial',
          '🔸 **Casamento**: o cônjuge é herdeiro legal; default property regime = comunhão de adquiridos (se não for escolhido outro regime). Mais protecções para a family home e representação',
          '🔸 **Para nacionalidade**: para união com cidadão português normalmente é necessário judicial recognition; o casamento é procedimentalmente mais simples para o IRN',
          '🔸 **Para imigração**: o casamento confere estatuto mais forte; a união exige provas de durable relationship',
          '🔸 **Para a área social**: a pensão de sobrevivência funciona para ambos, mas os detalhes dependem das contribuições',
          '🔸 **Tributação**: ambas as formas permitem tributação conjunta'
        ]},
        { kind: 'warning', text: 'Para Reagrupamento Familiar — reúna provas fortes de cohabitation/relação e verifique a lista actual da AIMA. Para nacionalidade por união com cidadão português — planeie o reconhecimento judicial; o registo apenas na Conservatória não é suficiente.\n\n⚠️ Reforma Lei da Nacionalidade: Decreto AR 48/XVII promulgado pelo Presidente Marcelo 03.05.2026 — à data de 17.05.2026 ainda aguarda publicação no DRE; antes de submeter, confirme a versão actualizada da lei.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de União de Facto (Junta de Freguesia)', amountEURMin: 0, amountEURMax: 20, note: 'preço municipal; confirme na Junta específica' },
    { label: 'Registo na Conservatória do Registo Civil', note: 'segundo a tabela de emolumentos do IRN — confirme no ePortugal antes da visita' },
    { label: 'Dissolução', note: 'depende do procedimento (Junta/registo civil/tribunal) — não existe preço único' }
  ],
  sources: [
    { title: 'Lei 7/2001 — União de facto (consolidada)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34455975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — União de facto', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo de União de Facto', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
