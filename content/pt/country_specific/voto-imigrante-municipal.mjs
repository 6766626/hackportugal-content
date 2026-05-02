export default {
  editorialVoice: 'hackportugal',
  id: 'voto-imigrante-municipal',
  categoryId: 'country_specific',
  title: 'Direito de voto dos migrantes nas eleições municipais em Portugal',
  tldr: 'Em Portugal, os estrangeiros podem votar nas eleições autárquicas — eleições para a Câmara Municipal, Assembleia Municipal e Junta de Freguesia. Os cidadãos da UE votam se forem residentes e estiverem inscritos no recenseamento eleitoral. Brasil e Cabo Verde — com residência legal normalmente há mais de 2 anos e reciprocidade. Vários países com reciprocidade por acordo, incluindo Argentina, Chile, Colômbia, Islândia, Noruega, Nova Zelândia, Peru, Reino Unido, Uruguai, Venezuela, — com residência legal por um período mais longo. A inscrição é gratuita, a verificação é em eleitor.mai.gov.pt.',
  tags: ['voto', 'eleições', 'migrantes', 'cplp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-vote',
      title: 'Que estrangeiros podem votar 🗳️',
      content: [
        { kind: 'paragraph', text: 'Trata-se apenas de eleições locais / eleições autárquicas: Câmara Municipal, Assembleia Municipal e Assembleia de Freguesia. Isto não dá direito a votar nas eleições para a Assembleia da República, Presidente da República ou em referendos, salvo regimes especiais para certos cidadãos, por exemplo brasileiros com estatuto de igualdade de direitos políticos.' },
        { kind: 'checklist', items: [
          'Cidadãos da UE que residem em Portugal: podem votar nas eleições municipais após a inscrição no recenseamento eleitoral.',
          'Cidadãos do Brasil: o direito depende da residência legal, da inscrição e do regime de reciprocidade; para direitos políticos mais amplos é necessário o Estatuto de Igualdade de Direitos Políticos.',
          'Cidadãos de Cabo Verde: normalmente enquadram-se no regime CPLP com reciprocidade para eleições autárquicas após residência legal há mais de 2 anos.',
          'Cidadãos de outros países com reciprocidade: Argentina, Chile, Colômbia, Islândia, Noruega, Nova Zelândia, Peru, Reino Unido, Uruguai, Venezuela — o direito depende do período de residência legal e da declaração atual do MAI/CNE.',
          'Idade: 18+ no dia das eleições.',
          'É necessário estar inscrito como eleitor na freguesia de residência.',
          'A morada no recenseamento eleitoral deve corresponder ao local de residência efetivo, porque se vota na respetiva freguesia.'
        ] },
        { kind: 'warning', text: 'Verifique o seu país na lista atual da CNE/MAI antes das eleições. A lista de países com reciprocidade pode ser atualizada por declarações do Estado; não confie em tabelas antigas de blogues.' }
      ]
    },
    {
      id: 'residence-periods',
      title: 'Período de residência: UE, CPLP e países com tratado',
      content: [
        { kind: 'paragraph', text: 'Para cidadãos da UE, a condição-chave é residir em Portugal e estar inscrito como eleitor. O período mínimo de residência para o voto municipal normalmente não se aplica da mesma forma que para nacionais de países terceiros.' },
        { kind: 'paragraph', text: 'Para cidadãos de países de língua portuguesa com reciprocidade, na prática sobretudo Brasil e Cabo Verde, aplica-se a regra de residência legal há mais de 2 anos para o direito de voto ativo em eleições locais, se não existir um estatuto especial mais amplo.' },
        { kind: 'paragraph', text: 'Para “outros países com tratado / reciprocidade”, deve consultar a formulação atual da CNE e do MAI. Nas notas informativas públicas, muitas vezes mistura-se o direito ativo de votar e o direito passivo de ser candidato: os prazos para candidatura são mais elevados. Se lhe disserem “4 anos”, confirme se se trata de votar ou da possibilidade de ser eleito.' },
        { kind: 'checklist', items: [
          'UE: residência + inscrição no recenseamento eleitoral.',
          'CPLP com reciprocidade: normalmente legal residence há mais de 2 anos para votar.',
          'Brasil: verifique separadamente o Estatuto de Igualdade, se quiser direitos mais amplos do que os municipais.',
          'Cabo Verde: verifique o período de legal residence e a inscrição.',
          'Argentina / Chile / Colômbia / Islândia / Noruega / Nova Zelândia / Peru / Reino Unido / Uruguai / Venezuela: verifique a lista reciprocal atual da CNE.',
          'Para candidatura, os prazos e as regras são mais rigorosos do que para votar.',
          'Ter NIF, NISS ou SNS, por si só, não cria voting right.'
        ] }
      ]
    },
    {
      id: 'register',
      title: 'Como inscrever-se no recenseamento eleitoral',
      content: [
        { kind: 'paragraph', text: 'Os estrangeiros normalmente não entram nas listas automaticamente. É necessário pedir a inscrição no recenseamento eleitoral na freguesia/município do local de residência ou através dos serviços digitais disponíveis, se estiverem abertos ao seu estatuto.' },
        { kind: 'checklist', items: [
          'Verifique o estatuto e o local de voto em eleitor.mai.gov.pt.',
          'Prepare o passaporte ou Cartão de Cidadão / national ID para cidadãos da UE.',
          'Prepare a autorização de residência de Portugal ou o Certificado de Registo de Cidadão da União Europeia para cidadãos da UE.',
          'Leve comprovativo de morada: atestado de residência, contrato de arrendamento, fatura de serviços ou documento da Câmara/Junta, se for pedido.',
          'Indique o país de cidadania e o fundamento do direito de voto: UE, CPLP/reciprocidade ou reciprocidade por tratado.',
          'Peça confirmação da inscrição ou guarde uma impressão/captura de ecrã do Portal do Eleitor.',
          'Verifique a freguesia após uma mudança de casa: votará onde estiver inscrito.'
        ] },
        { kind: 'warning', text: 'A inscrição e as alterações no recenseamento eleitoral normalmente encerram 60 dias antes das eleições. Se as eleições locais já estiverem marcadas, não espere pela última semana: pode não ser incluído nos cadernos eleitorais da votação em curso.' }
      ]
    },
    {
      id: 'election-day',
      title: 'No dia da votação',
      content: [
        { kind: 'paragraph', text: 'Nas eleições locais, vota na assembleia de voto da sua freguesia. A mesa de voto e o número de eleitor verificam-se em eleitor.mai.gov.pt ou através dos serviços SMS do MAI, se estiverem ativos para as eleições em causa.' },
        { kind: 'checklist', items: [
          'Leve um documento de ID válido: Cartão de Cidadão, passaporte, national ID da UE ou autorização de residência.',
          'Verifique antecipadamente a morada e a freguesia nas listas de eleitor.',
          'Na mesa, diga o seu nome e mostre o ID.',
          'Receberá boletins de voto para os órgãos municipais: Câmara Municipal, Assembleia Municipal, Assembleia de Freguesia.',
          'O voto é secreto; não é necessário fotografar o boletim e isso pode causar problemas.',
          'Se não estiver na lista, peça à mesa para verificar o caderno eleitoral e os dados por freguesia.',
          'Se se mudou recentemente, a mesa pode ainda corresponder à freguesia antiga, enquanto a alteração não for atualizada.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos migrantes',
      content: [
        { kind: 'checklist', items: [
          'Pensar que a autorização de residência dá automaticamente direito a votar. Não: é necessário ter um país com regime adequado e inscrição.',
          'Confundir municipal elections com national elections. O direito de voto de estrangeiros está quase sempre limitado às local elections.',
          'Verificar apenas a morada do NIF nas Finanças. A morada eleitoral é um registo separado no recenseamento eleitoral.',
          'Mudar-se para outra freguesia e não atualizar a inscrição.',
          'Chegar tarde à suspensão de 60 dias antes das eleições.',
          'Considerar que todos os cidadãos CPLP têm automaticamente os mesmos direitos. É necessária reciprocidade e residência legal.',
          'Confundir o direito de votar com o direito de ser candidato: para candidatura, as regras são mais rigorosas.',
          'Confiar em listas de países anteriores ao Brexit ou a novas declarações do MAI/CNE.'
        ] },
        { kind: 'paragraph', text: 'Se não tiver a certeza, escreva ou dirija-se à Junta de Freguesia da sua morada de residência e peça para verificarem a “inscrição no recenseamento eleitoral para cidadão estrangeiro”. Este é um procedimento administrativo gratuito.' }
      ]
    }
  ],
  costs: [
    { label: 'Inscrição no recenseamento eleitoral', amountEUR: 0, note: 'Gratuito; só podem existir custos para obter comprovativo de morada, se a Junta de Freguesia exigir atestado.' },
    { label: 'Atestado de residência na Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'A tarifa depende da freguesia; por vezes é gratuito para determinadas finalidades.' }
  ],
  sources: [
    {
      title: 'CNE — Comissão Nacional de Eleições: direitos dos eleitores estrangeiros e eleições autárquicas',
      url: 'https://www.cne.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal do Eleitor MAI — verificação do recenseamento eleitoral e do local de voto',
      url: 'https://www.eleitor.mai.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei n.º 13/99 — Regime Jurídico do Recenseamento Eleitoral',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1999-34439975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei Orgânica n.º 1/2001 — Eleição dos titulares dos órgãos das autarquias locais',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei-organica/2001-34438175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
