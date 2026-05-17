export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-jovem-europeu',
  categoryId: 'daily_life',
  title: 'Cartão Jovem Europeu — cartão de descontos para jovens até aos 30 anos',
  tldr: 'Cartão Jovem Europeu é a versão portuguesa do European Youth Card para residentes em Portugal dos 12 aos 29 anos inclusive. Em abril de 2026 custa 11 €/ano através do IPDJ/cartaojovem.pt e dá acesso a mais de 60 000 descontos em Portugal e na Europa: normalmente 25% na CP para viagens, museus, cinema, restaurantes, hostels, desporto e serviços online. São necessários registo, NIF/documento e confirmação de pagamento; o cartão é digital e é apresentado na aplicação/área pessoal juntamente com um documento de identificação.',
  tags: ['cartãojovem', 'descontos', 'jovens', 'cp'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que cartão é este',
      content: [
        { kind: 'paragraph', text: 'O Cartão Jovem Europeu não é um cartão bancário nem um documento de autorização de residência. É um cartão de descontos pago do IPDJ, ligado à rede European Youth Card Association. Funciona em Portugal e noutros países participantes da EYCA.' },
        { kind: 'paragraph', text: 'A principal vantagem para um expat com menos de 30 anos é recuperar rapidamente os 11 € através de comboios da CP, museus, eventos culturais, restaurantes, hostels, desporto e parceiros locais. Os descontos dependem do parceiro: nalguns casos basta mostrar o cartão, noutros é necessário um código promocional ou comprar através de um site específico.' },
        { kind: 'checklist', items: [
          'Idade: normalmente dos 12 aos 29 anos inclusive',
          'Preço em 2026: 11 € por 1 ano',
          'Formato: cartão digital na área pessoal/aplicação Cartão Jovem',
          'Geografia: Portugal + parceiros European Youth Card na Europa',
          'Categorias típicas: CP, museus, cinema, concertos, restaurantes, desporto, formação, turismo',
          'O cartão é pessoal: não pode ser emprestado a um amigo',
          'Ao utilizar, podem pedir passaporte, autorização de residência ou Cartão de Cidadão para verificar a idade e o nome'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'A quem está disponível em Portugal',
      content: [
        { kind: 'paragraph', text: 'Para um estrangeiro, as condições principais são simples: viver em Portugal e ter menos de 30 anos. A nacionalidade portuguesa não é necessária. É adequado para estudantes, trabalhadores com D1/D3, digital nomads com D8, familiares, cidadãos da UE com CRUE e outros residentes.' },
        { kind: 'checklist', items: [
          'Passaporte ou outro documento com data de nascimento',
          'Morada de residência em Portugal',
          'NIF — útil para o registo e pagamentos, mesmo que o formulário nem sempre o trate como documento principal',
          'E-mail e número de telefone português ou internacional',
          'Cartão bancário, referência Multibanco ou outro método de pagamento disponível',
          'Acesso à área pessoal em cartaojovem.pt',
          'Para menores, podem ser necessários os dados do progenitor/responsável'
        ] },
        { kind: 'warning', text: 'Se já completou 30 anos, normalmente não é possível emitir um novo cartão. Se comprou o cartão aos 29 anos, verifique a validade na área pessoal: o parceiro verifica precisamente a validade do cartão e as condições etárias da sua campanha.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como pedir online em 10–15 minutos',
      content: [
        { kind: 'substeps', items: [
          { id: 'create-account', title: '1. Criar uma conta', content: [
            { kind: 'paragraph', text: 'Aceda a cartaojovem.pt e escolha a emissão do Cartão Jovem Europeu. Indique o e-mail, o nome tal como consta no documento, a data de nascimento e os contactos. Verifique a grafia do nome: pode ser comparada com o passaporte ou a autorização de residência.' }
          ] },
          { id: 'fill-details', title: '2. Preencher os dados', content: [
            { kind: 'checklist', items: [
              'Nome e apelido em alfabeto latino',
              'Data de nascimento',
              'Morada em Portugal',
              'NIF, se o campo for solicitado ou se precisar de recibo/fatura',
              'Tipo e número do documento, se o formulário pedir identificação',
              'Consentimento com os termos de utilização e tratamento de dados'
            ] }
          ] },
          { id: 'pay', title: '3. Pagar 11 €', content: [
            { kind: 'paragraph', text: 'Depois de submeter o formulário, o sistema apresenta um método de pagamento. Normalmente estão disponíveis cartão bancário ou opções portuguesas como Multibanco/MB WAY, mas os métodos concretos dependem da versão atual do site.' }
          ] },
          { id: 'activate', title: '4. Ativar e guardar o cartão', content: [
            { kind: 'paragraph', text: 'Depois da confirmação do pagamento, o cartão aparece em formato digital. Guarde o acesso à conta e instale a aplicação Cartão Jovem, se estiver disponível para o seu dispositivo. Na bilheteira ou ao embarcar, apresente o cartão juntamente com um documento de identificação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'best-discounts',
      title: 'Onde costuma compensar mais',
      content: [
        { kind: 'paragraph', text: 'A lista de parceiros muda, por isso, antes de comprar um bilhete, confirme as condições em cartaojovem.pt e junto do próprio parceiro. Em 2026, os principais casos de uso generalizado são transportes e cultura.' },
        { kind: 'checklist', items: [
          'CP: é frequentemente indicado um desconto de 25% nas viagens, mas a tarifa, o comboio e o canal de compra podem ter restrições',
          'Museus e monumentos: descontos na entrada, especialmente em equipamentos estatais e municipais',
          'Cinema, concertos, festivais: tarifas promocionais para titulares do Cartão Jovem',
          'Pousadas de Juventude e hostels: descontos em alojamento e ofertas de adesão',
          'Restaurantes e cafés: descontos locais, sobretudo em cidades universitárias',
          'Desporto e fitness: ginásios, atividades, aluguer de equipamento',
          'Educação: cursos, escolas de línguas, livrarias',
          'Parceiros europeus da EYCA: útil para viagens a Espanha, França, Itália e outros países'
        ] },
        { kind: 'warning', text: 'O desconto não é garantido automaticamente. O parceiro pode ter exceções: não ser acumulável com outras promoções, exigir código promocional antes do pagamento, aplicar-se apenas na bilheteira ou apenas em determinadas datas.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos para um expat',
      content: [
        { kind: 'checklist', items: [
          'Compre o cartão antes da primeira viagem CP de maior valor: uma ou duas viagens interurbanas podem cobrir o custo de 11 €',
          'Antes de pagar o bilhete, procure “Cartão Jovem” nas condições da tarifa, não depois da compra',
          'Tenha à mão o passaporte ou a autorização de residência: o nome no cartão e no documento deve coincidir',
          'Se o funcionário da bilheteira não conhecer o cartão, mostre a página do parceiro em cartaojovem.pt com as condições do desconto',
          'Verifique a validade: o cartão é anual e a renovação automática não deve ser considerada garantida',
          'Para viagens pela Europa, instale a aplicação/guarde o número do cartão com antecedência — no estrangeiro podem não aceitar uma captura de ecrã sem validação atual',
          'Se é estudante, compare o desconto do Cartão Jovem com as tarifas de estudante: por vezes outra tarifa é mais vantajosa, por vezes não podem ser combinadas'
        ] },
        { kind: 'paragraph', text: 'Para a maioria dos jovens expats, esta é uma das subscrições “do dia a dia” mais baratas em Portugal: 11 € por ano, burocracia mínima e utilidade clara para transportes e lazer.' }
      ]
    }
  ],
  costs: [
    { label: 'Emissão do Cartão Jovem Europeu', amountEUR: 11, note: 'Custo anual em 2026 através do IPDJ/cartaojovem.pt' },
    { label: 'Desconto típico CP', amountEURMin: 0, amountEURMax: 0, note: 'Não é um valor fixo: frequentemente 25% sobre a tarifa elegível, com condições dependentes do comboio e do canal de compra' }
  ],
  sources: [
    { title: 'Site oficial do Cartão Jovem — pedido, preço e parceiros', url: 'https://cartaojovem.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IPDJ — programas para jovens e Cartão Jovem', url: 'https://ipdj.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'European Youth Card Association — rede internacional de descontos', url: 'https://eyca.org', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
