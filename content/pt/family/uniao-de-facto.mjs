export default {
  editorialVoice: 'hackportugal',
  id: 'uniao-de-facto',
  categoryId: 'nationality',
  title: 'União de facto — parceria civil em Portugal',
  tldr: 'A União de facto é um estatuto jurídico de coabitação, reconhecido após 2 anos de vida em comum ao abrigo da Lei 7/2001. Confere PARTE dos direitos dos cônjuges: tributação conjunta em IRS, direito ao Reagrupamento Familiar e alguns benefícios sociais.\n\n⚠️ NÃO é um equivalente completo ao casamento — o parceiro sobrevivo não é herdeiro legal por defeito (é necessário testamento/procedimento especial); o acesso ao SNS normalmente NÃO surge automaticamente «através» do parceiro. Para nacionalidade por união a Lei 37/81 art. 3 n.3 exige decisão judicial (sentença declarativa) sobre >3 anos de união com cidadão português — o simples registo na Junta de Freguesia NÃO é suficiente para efeitos de nacionalidade. O registo na Junta de Freguesia (Lei 7/2001) é um acto administrativo simples para fins fiscais/sociais. Aplica-se a casais de sexo diferente e do mesmo sexo.',
  tags: ['união', 'coabitação', 'parceria', 'lei 7/2001'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'O que é e como funciona',
      content: [
        { kind: 'paragraph', text: 'A União de facto é o reconhecimento jurídico de um casal que vive em conjunto.\n\nO regime de base é a Lei 7/2001. A Lei 23/2010, em 2010, alargou e clarificou os direitos dos parceiros de facto (prestações sociais, certas protecções sucessórias). A Lei 9/2010 é uma lei distinta que introduziu o same-sex marriage (alterações ao Código Civil); isto diz respeito apenas ao casamento, não à união. A Lei 7/2001 já se aplica a casais independentemente do sexo. Não exige cerimónia, não é casamento, mas confere vários direitos comparáveis.' },
        { kind: 'checklist', items: [
          '💑 Casal de qualquer sexo e nacionalidade (de sexo diferente ou do mesmo sexo)',
          '📅 Pelo menos 2 anos de vida em comum',
          '🏠 Habitação comum — demonstrável por contrato de arrendamento em nome de ambos, facturas de serviços, morada comum nas Finanças',
          '👫 Ambos — maiores e com capacidade jurídica',
          '❌ Não estar em casamento vigente com outra pessoa',
          '❌ Não ter impedimentos do art. 2 Lei 7/2001: ascendentes/descendentes em linha recta, 2.º grau da linha colateral (irmãos/irmãs), afinidade na linha recta (sogra/sogro, etc.)'
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
              'Entrega conjunta de IRS (tributação conjunta)',
              'Dedução de pensões de alimentos, despesas de saúde e educação do parceiro',
              '⚠️ O parceiro em união não é herdeiro automático — é necessário testamento/planeamento. Em transmissões gratuitas, o surviving partner está normalmente isento de Imposto do Selo de 10% (Código do Imposto do Selo art. 6)',
              'Direito a pensão do parceiro sobrevivo (pensão de sobrevivência) em caso de morte do parceiro',
              '⚠️ Não existe um regime geral de «spousal alimony» como no divórcio. Possíveis claims after breakup/death são limitados e dependem dos factos; em caso de dependência financeira, é melhor obter aconselhamento jurídico'
            ]}
          ]},
          { id: 'r2', title: '🏥 Medicina e SNS', content: [
            { kind: 'checklist', items: [
              'Segurança Social: a união pode ser relevante para determinadas prestações familiares e survivor benefits, mas cada pessoa tem o seu próprio NISS e contribution/benefit status',
              'SNS: a parceria, por si só, não «inscreve» a pessoa no SNS através do parceiro — é necessária lawful residence própria e número de utente do SNS; a união ajuda a provar morada/agregado comum',
              'Seguros privados — tarifa para cônjuges (planos familiares)',
              'Visitas hospitalares enquanto pessoa próxima — normalmente mais fácil, mas para poderes claros de decisão médica deve formalizar uma formal advance directive / procurador de cuidados de saúde (Lei 25/2012)'
            ]}
          ]},
          { id: 'r3', title: '🛂 Imigração', content: [
            { kind: 'checklist', items: [
              'Reagrupamento Familiar através de cidadão/residente de Portugal — é possível; espere pedidos adicionais de prova de durable relationship/cohabitation (a AIMA pode solicitar mais documentos do que aos cônjuges)',
              'Nacionalidade por união após 3 anos com cidadão PT ao abrigo do art. 3 Lei 37/81 — normalmente é necessário reconhecimento judicial prévio da união de facto em tribunal cível; o certificado da Junta é insuficiente para nacionalidade',
              'Visto para parceiro: se um cidadão português for trabalhar para o estrangeiro, o parceiro estrangeiro pode obter o estatuto de familiar próximo',
              'Para a livre circulação de cidadãos EU: o parceiro em coabitação pode ser considerado durable partner mediante provas adequadas de cohabitation/relação (Lei 37/2006, Directiva 2004/38/EC)'
            ]}
          ]},
          { id: 'r4', title: '🏠 Habitação', content: [
            { kind: 'checklist', items: [
              'Arrendamento: parceiro co-requerente, direito a continuar o arrendamento em caso de morte do arrendatário principal',
              'Propriedade: aquisição conjunta sem impostos adicionais',
              'Habitação social: o casal é considerado «agregado familiar»',
              '⚠️ A family home tem protecções específicas (especialmente no arrendamento e em caso de morte/ruptura), mas a união não confere veto automático ao não-proprietário sobre a venda. Se quiser protecção — formalize compropriedade ou proteja por contrato'
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
              'As testemunhas confirmam sob juramento que vocês vivem juntos há ≥ 2 anos',
              'Emitem o Certificado de União de Facto no dia da visita (o custo é municipal — confirme na Junta)',
              'Suficiente para muitos fins quotidianos/fiscais, mas cada entidade pode pedir provas adicionais. Para nacionalidade através do IRN por união, normalmente NÃO É SUFICIENTE (é necessário reconhecimento judicial); para a AIMA — espere provas adicionais de cohabitation'
            ]}
          ]},
          { id: 'p2', title: 'Opção B — registo na Conservatória (opcional)', content: [
            { kind: 'checklist', items: [
              'Registo civil da união — acto opcional; no essencial, fixa a situação no registo civil PT, quando isso é juridicamente possível',
              'Para estrangeiros sem assento de nascimento português, o efeito prático depende do seu civil registration status',
              'Não cria direitos adicionais e não substitui o judicial recognition para nacionalidade',
              'Custo: confirme no IRN/ePortugal antes da visita — não existe preço simbólico fixo'
            ]}
          ]},
          { id: 'p3', title: 'Opção C — declaração conjunta de IRS', content: [
            { kind: 'paragraph', text: 'A entrega conjunta de IRS ajuda a provar a vida em comum para fins fiscais, mas não vincula AIMA/IRN/tribunais. Para nacionalidade ao abrigo do art. 3 com cidadão PT — planeie o reconhecimento judicial da união de facto, e não apenas um certificado da Junta.' }
          ]}
        ]}
      ]
    },
    {
      id: 'end',
      title: 'Ruptura / dissolução',
      content: [
        { kind: 'checklist', items: [
          'A Dissolução ocorre por: morte, casamento ou vontade de um/ambos os parceiros (Lei 7/2001 art. 8)',
          'Se a ruptura for invocada para fundamentar efeitos jurídicos — pode ser necessária judicial declaration',
          'Notifique a AT/Segurança Social/AIMA/IRN quando for relevante',
          'Após a ruptura: as pensões de alimentos são limitadas e não são como no divórcio; a partilha de bens segue o direito comum (não matrimonial)',
          'O custo depende da entidade/procedimento (não há um «10 €» único). Confirme no IRN/ePortugal',
          'Se não comunicar — pode permanecer como união nos documentos, o que pode bloquear novas relações'
        ]}
      ]
    },
    {
      id: 'vs-marriage',
      title: 'União de facto vs casamento',
      content: [
        { kind: 'checklist', items: [
          '🔸 União: mais simples de constituir/terminar, sem cerimónia, sem divórcio judicial',
          '🔸 Casamento: o cônjuge é herdeiro legal; default property regime = comunhão de adquiridos (se não for escolhido outro regime). Mais protecções para a family home e representação',
          '🔸 Para nacionalidade: para união com cidadão PT normalmente é necessário judicial recognition; o casamento é processualmente mais simples para o IRN',
          '🔸 Para imigração: o casamento confere um estatuto mais forte; a união exige provas de durable relationship',
          '🔸 Para a área social: a pensão de sobrevivência funciona para ambos, mas os detalhes dependem das contribuições',
          '🔸 Fiscalidade: ambas as formas permitem tributação conjunta'
        ]},
        { kind: 'warning', text: 'Para Reagrupamento Familiar — reúna provas fortes de cohabitation/relação e verifique a lista actual da AIMA. Para nacionalidade por união com cidadão PT — planeie o reconhecimento judicial; o registo na Conservatória por si só não é suficiente.\n\n⚠️ Reforma Lei da Nacionalidade: Decreto AR 48/XVII promulgado pelo Presidente Seguro em 03.05.2026 — à data de 17.05.2026 ainda aguarda publicação no DRE; antes de submeter, confira a redacção actual da lei.' }
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
