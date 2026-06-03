export default {
  editorialVoice: 'hackportugal',
  id: 'voto-imigrante-municipal',
  categoryId: 'country_specific',
  title: 'Direito de voto dos migrantes nas eleições municipais em Portugal',
  tldr: 'Em Portugal, os estrangeiros podem votar nas eleições autárquicas — eleições para a Câmara Municipal, Assembleia Municipal e Assembleia de Freguesia. Os cidadãos da UE votam se forem residentes e estiverem inscritos no recenseamento eleitoral. Brasil e Cabo Verde — com residência legal há mais de 2 anos e reciprocidade. Vários países com reciprocidade por acordo, incluindo Argentina, Chile, Colômbia, Islândia, Noruega, Nova Zelândia, Peru, Reino Unido, Uruguai, Venezuela — mediante residência legal há mais de 3 anos. A inscrição é gratuita, a verificação é feita em eleitor.mai.gov.pt.',
  tags: ['voto', 'eleições', 'migrantes', 'cplp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-vote',
      title: 'Quem, entre os estrangeiros, pode votar 🗳️',
      content: [
        { kind: 'paragraph', text: 'Trata-se apenas de eleições locais / eleições autárquicas: Câmara Municipal, Assembleia Municipal e Assembleia de Freguesia. Isto não dá direito a votar nas eleições para a Assembleia da República, Presidente da República ou referendos, salvo regimes especiais para determinados cidadãos, por exemplo brasileiros com estatuto de igualdade de direitos políticos.' },
        { kind: 'checklist', items: [
          'Cidadãos da UE residentes em Portugal: podem votar nas eleições municipais depois da inscrição no recenseamento eleitoral.',
          'Cidadãos do Brasil: o direito depende da residência legal, da inscrição e do regime de reciprocidade; para direitos políticos mais amplos é necessário o Estatuto de Igualdade de Direitos Políticos.',
          'Cidadãos de Cabo Verde: normalmente integram o regime da CPLP com reciprocidade para eleições autárquicas depois de residência legal há mais de 2 anos.',
          'Cidadãos de outros países com reciprocidade: Argentina, Chile, Colômbia, Islândia, Noruega, Nova Zelândia, Peru, Reino Unido, Uruguai, Venezuela — com residência legal há mais de 3 anos e declaração MAI/CNE em vigor.',
          'Idade: vota-se a partir dos 18 anos no dia das eleições; pode inscrever-se no recenseamento eleitoral a partir dos 17 anos.',
          'É necessário estar inscrito como eleitor na freguesia de residência.',
          'A morada no recenseamento eleitoral deve corresponder ao local de residência efectivo, porque se vota na própria freguesia.'
        ] },
        { kind: 'warning', text: 'Verifique o seu país na lista actual da CNE/MAI antes das eleições. A lista de países com reciprocidade pode ser actualizada por declarações do Estado; não confie em tabelas antigas de blogues.' }
      ]
    },
    {
      id: 'residence-periods',
      title: 'Período de residência: UE, CPLP e países com tratado',
      content: [
        { kind: 'paragraph', text: 'Para cidadãos da UE, a condição essencial é residir em Portugal e estar inscrito como eleitor. O período mínimo de residência para o voto municipal normalmente não se aplica da mesma forma que aos nacionais de países terceiros.' },
        { kind: 'paragraph', text: 'Para cidadãos de países de língua portuguesa com reciprocidade, na prática sobretudo Brasil e Cabo Verde, aplica-se a regra de residência legal há mais de 2 anos para o direito de voto activo nas eleições locais, se não existir um estatuto especial mais amplo.' },
        { kind: 'paragraph', text: 'Para “outros países com tratado / reciprocidade” — Argentina, Chile, Colômbia, Islândia, Noruega, Nova Zelândia, Peru, Reino Unido, Uruguai, Venezuela — a regra é residência legal há mais de 3 anos para o direito de voto activo, desde que se mantenha a reciprocidade; consulte sempre a formulação actual da CNE e do MAI. Nos guias públicos, muitas vezes mistura-se o direito activo de votar com o direito passivo de ser candidato: os prazos para candidatura são mais elevados. Se lhe indicarem outro prazo, confirme se se trata de votar ou da possibilidade de ser eleito.' },
        { kind: 'checklist', items: [
          'UE: residência + inscrição no recenseamento eleitoral.',
          'CPLP com reciprocidade: normalmente residência legal há mais de 2 anos para votar.',
          'Brasil: verifique separadamente o Estatuto de Igualdade, se quiser direitos mais amplos do que os municipais.',
          'Cabo Verde: verifique o período de residência legal e a inscrição.',
          'Argentina / Chile / Colômbia / Islândia / Noruega / Nova Zelândia / Peru / Reino Unido / Uruguai / Venezuela: normalmente residência legal há mais de 3 anos para votar; verifique a lista recíproca actual da CNE.',
          'Para a candidatura, os prazos e regras são mais rigorosos do que para votar.',
          'Ter NIF, NISS ou SNS, por si só, não cria direito de voto.'
        ] }
      ]
    },
    {
      id: 'register',
      title: 'Como inscrever-se no recenseamento eleitoral',
      content: [
        { kind: 'paragraph', text: 'Os estrangeiros, em regra, não entram automaticamente nas listas. É necessário pedir a inscrição no recenseamento eleitoral na freguesia/município da sua área de residência ou através dos serviços digitais disponíveis, se estes estiverem abertos ao seu estatuto.' },
        { kind: 'checklist', items: [
          'Verifique o estado e o local de voto em eleitor.mai.gov.pt.',
          'Prepare o passaporte ou Cartão de Cidadão / documento de identificação nacional para cidadãos da UE.',
          'Prepare a autorização de residência de Portugal ou o Certificado de Registo de Cidadão da União Europeia para cidadãos da UE.',
          'Leve comprovativo de morada: atestado de residência, contrato de arrendamento, factura de serviços ou documento da Câmara/Junta, se solicitado.',
          'Indique o país de nacionalidade e o fundamento do direito de voto: UE, CPLP/reciprocidade ou reciprocidade por tratado.',
          'Peça comprovativo da inscrição ou guarde uma impressão/captura de ecrã do Portal do Eleitor.',
          'Verifique a freguesia depois de uma mudança de casa: votará onde estiver inscrito.'
        ] },
        { kind: 'warning', text: 'A inscrição e as alterações no recenseamento eleitoral normalmente ficam suspensas 60 dias antes das eleições. Se as eleições locais já estiverem marcadas, não espere pela última semana: pode não ser incluído nos cadernos eleitorais da votação em curso.' }
      ]
    },
    {
      id: 'election-day',
      title: 'No dia da votação',
      content: [
        { kind: 'paragraph', text: 'Nas eleições locais, vota na assembleia de voto da sua freguesia. A secção e o número de eleitor são verificados em eleitor.mai.gov.pt ou através dos serviços SMS do MAI, se estiverem activos para as eleições em causa.' },
        { kind: 'checklist', items: [
          'Leve um documento de identificação válido: Cartão de Cidadão, passaporte, documento de identificação nacional da UE ou autorização de residência.',
          'Verifique antecipadamente a morada e a freguesia nas listas de eleitor.',
          'Na mesa de voto, diga o seu nome e mostre o documento de identificação.',
          'Receberá boletins de voto para os órgãos municipais: Câmara Municipal, Assembleia Municipal, Assembleia de Freguesia.',
          'O voto é secreto; não é necessário fotografar o boletim e isso pode causar problemas.',
          'Se não estiver na lista, peça à mesa que verifique o caderno eleitoral e os dados da freguesia.',
          'Se se mudou recentemente, a assembleia de voto pode ainda corresponder à freguesia antiga, enquanto a alteração não estiver actualizada.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos migrantes',
      content: [
        { kind: 'checklist', items: [
          'Pensar que a autorização de residência dá automaticamente direito de voto. Não dá: é necessário ser de um país com regime adequado e estar inscrito.',
          'Confundir eleições municipais com eleições nacionais. O direito de voto de estrangeiros está quase sempre limitado às eleições locais.',
          'Verificar apenas a morada do NIF nas Finanças. A morada eleitoral é um registo separado no recenseamento eleitoral.',
          'Mudar-se para outra freguesia e não actualizar a inscrição.',
          'Chegar tarde à suspensão de 60 dias antes das eleições.',
          'Achar que todos os cidadãos da CPLP têm automaticamente os mesmos direitos. É necessária reciprocidade e residência legal.',
          'Confundir o direito de votar com o direito de ser candidato: para a candidatura, as regras são mais rigorosas.',
          'Confiar em listas de países anteriores ao Brexit ou a novas declarações MAI/CNE.'
        ] },
        { kind: 'paragraph', text: 'Se não tiver a certeza, escreva ou dirija-se à Junta de Freguesia da sua área de residência e peça para verificar a “inscrição no recenseamento eleitoral para cidadão estrangeiro”. É um procedimento administrativo gratuito.' }
      ]
    }
  ],
  costs: [
    { label: 'Inscrição no recenseamento eleitoral', amountEUR: 0, note: 'Gratuito; apenas podem existir custos para obter comprovativo de morada, se a Junta de Freguesia exigir atestado.' },
    { label: 'Atestado de residência na Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'A taxa depende da freguesia; por vezes é gratuito para determinados fins.' }
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
