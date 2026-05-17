export default {
  editorialVoice: 'hackportugal',
  id: 'ferry-madeira-acores',
  categoryId: 'public_transport',
  title: 'Ferries entre as ilhas da Madeira e dos Açores: Atlânticoline, Porto Santo Line, Naviera Armas',
  tldr: 'Em abril de 2026 não existe ferry regular Madeira—Açores: são arquipélagos diferentes, e entre eles viaja-se de avião. Nos Açores, os ferries interilhas são operados pela Atlânticoline: durante todo o ano há ligações curtas Faial—Pico—São Jorge e Flores—Corvo; no verão acrescentam-se rotas mais longas entre as 9 ilhas. Na Madeira, o ferry de passageiros e veículos Funchal—Porto Santo demora cerca de 2 h 30 min; o operador é a Porto Santo Line. A Naviera Armas não é o operador diário da rota Funchal—Porto Santo.',
  tags: ['ferries', 'madeira', 'acores', 'atlanticoline', 'porto-santo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'map-reality',
      title: 'Primeiro, o mapa: o que funciona realmente em 2026',
      content: [
        { kind: 'paragraph', text: 'O erro principal é procurar um «ferry Madeira—Açores». No horário normal de passageiros de 2026, essa rota não existe. Madeira, Porto Santo e os Açores são arquipélagos diferentes no Atlântico; entre a Madeira e os Açores normalmente voa-se via Lisboa, Porto ou Ponta Delgada.' },
        { kind: 'checklist', items: [
          'Açores: ferries interilhas da Atlânticoline entre as ilhas do arquipélago.',
          'Madeira: Funchal—Porto Santo é servido pela Porto Santo Line, navio Lobo Marinho.',
          'Porto Santo: pode viajar como passageiro, com automóvel, motociclo, bicicleta e bagagem, de acordo com as regras do operador.',
          'Naviera Armas: historicamente e sazonalmente aparece em rotas Madeira/Canárias, mas em abril de 2026 não a planeie como operador diário Funchal—Porto Santo.',
          'Não utilize a Moby como operador português regular entre Madeira e Açores no horário de 2026; verifique apenas os sites oficiais da rota concreta.',
          'Continente Portugal—Madeira em ferry regular também não é uma opção diária estável; para mudar-se com carro usa-se mais frequentemente transporte de carga/porta-automóveis.'
        ] },
        { kind: 'warning', text: 'Não compre bilhetes «universais» a intermediários antes de confirmar a rota em atlanticoline.pt ou portosantoline.pt. No Atlântico, o horário depende da época, do tempo, de trabalhos em doca e da disponibilidade dos navios.' }
      ]
    },
    {
      id: 'azores-atlanticoline',
      title: 'Açores: Atlânticoline 🚢',
      content: [
        { kind: 'paragraph', text: 'A Atlânticoline é o principal operador marítimo de transporte de passageiros nos Açores. A rede cobre 9 ilhas, mas não da mesma forma durante todo o ano. As linhas curtas no grupo central funcionam com maior frequência, enquanto as rotas longas de verão abrem de acordo com o calendário sazonal.' },
        { kind: 'checklist', items: [
          'Verifique o horário para uma data concreta, não «por mês»: a mesma rota pode operar 0, 1 ou várias vezes por dia.',
          'Durante todo o ano, normalmente são importantes as travessias curtas Faial—Pico, Faial—São Jorge/Pico—São Jorge e Flores—Corvo.',
          'A época de verão é aproximadamente maio/junho—setembro, quando se acrescentam linhas interilhas mais longas.',
          'Nas linhas longas, os lugares para automóveis são limitados; reserve o carro logo juntamente com o passageiro.',
          'Para residentes nos Açores podem existir tarifas/subsídios bonificados; turistas e novos expatriados normalmente veem a tarifa normal.',
          'Para embarcar é necessário um documento que corresponda ao nome no bilhete: passaporte, Cartão de Cidadão ou autorização de residência.',
          'Nas linhas curtas, chegue pelo menos 30 minutos antes; com automóvel, mais cedo; a hora exacta está indicada no bilhete.',
          'Com mau tempo, cancelamentos e alterações são normais: mantenha uma margem de 1 dia antes de um voo ou de uma reunião importante.'
        ] },
        { kind: 'paragraph', text: 'Exemplo prático: Horta—Madalena, entre o Faial e o Pico, é uma travessia logística curta e diária, não um «cruzeiro». Já Ponta Delgada—Santa Maria ou as rotas entre os grupos oriental, central e ocidental devem ser procuradas no calendário sazonal.' }
      ]
    },
    {
      id: 'madeira-porto-santo',
      title: 'Madeira—Porto Santo: Porto Santo Line',
      content: [
        { kind: 'paragraph', text: 'A ligação regular de passageiros e veículos Madeira—Porto Santo faz-se entre o Funchal e Porto Santo. O operador é a Porto Santo Line. A travessia demora cerca de 2 h 30 min num sentido, mas o horário muda conforme a época: no verão há mais viagens; no inverno podem existir dias sem viagem ou pausas técnicas.' },
        { kind: 'checklist', items: [
          'Abra o calendário em portosantoline.pt e escolha a data de ida/volta.',
          'Veja a hora de partida do Funchal e a viagem de regresso de Porto Santo: para uma viagem de um dia, isto é crítico.',
          'Escolha o tipo de passageiro: adulto, criança, residente Madeira/Porto Santo, tarifa sénior — se aplicável.',
          'Se viajar com carro, adicione vehicle ao reservar: o comprimento/categoria influencia o preço.',
          'Com automóvel, chegue ao porto com antecedência: o carregamento fecha mais cedo do que o embarque de passageiros a pé.',
          'A bagagem segue a lógica de ferry, não de avião, mas objectos perigosos, garrafas de gás e carga volumosa são regulados separadamente.',
          'Com animais, confirme antecipadamente as regras de kennel/transport box; os lugares e zonas são limitados.',
          'Se o mar estiver mau, o operador pode alterar a viagem; não marque um voo internacional para a mesma noite sem margem.'
        ] },
        { kind: 'paragraph', text: 'Para viver na Madeira, esta é a principal forma de ir a Porto Santo com o próprio carro, pranchas, bicicletas ou bagagem grande. Para uma simples weekend trip sem carro, por vezes é mais barato comparar o ferry e o bilhete de avião, mas o ferry é mais cómodo para bagagem.' }
      ]
    },
    {
      id: 'booking-calendar',
      title: 'Como reservar sem surpresas',
      content: [
        { kind: 'substeps', items: [
          { id: 'dates', title: '1. Primeiro, verifique o calendário', content: [
            { kind: 'paragraph', text: 'Na Atlanticoline e na Porto Santo Line não se deve orientar por «normalmente há todos os dias». Introduza a data exacta, o sentido e o número de passageiros. Se o sistema não mostrar uma viagem, não é um erro: é ausência de viagem publicada ou venda ainda fechada.' }
          ] },
          { id: 'vehicle', title: '2. Adicione logo o automóvel', content: [
            { kind: 'paragraph', text: 'O preço e a disponibilidade para passageiro e automóvel são coisas diferentes. Em datas populares de verão, ainda pode haver lugares para passageiros, mas o convés para automóveis já estar sold out.' }
          ] },
          { id: 'documents', title: '3. Verifique nomes e documentos', content: [
            { kind: 'paragraph', text: 'O nome no bilhete deve coincidir com o passaporte, Cartão de Cidadão ou autorização de residência. Para uma tarifa bonificada de residente, podem pedir comprovativo de residência nas ilhas.' }
          ] },
          { id: 'weather-buffer', title: '4. Deixe uma margem por causa do tempo', content: [
            { kind: 'paragraph', text: 'O Atlântico não é o metro. Nos Açores, em especial, preveja margem antes de um voo entre ilhas e de um voo internacional. Para uma mudança, casamento, exame ou AIMA appointment, não chegue «em cima da hora».' }
          ] }
        ] }
      ]
    },
    {
      id: 'prices',
      title: 'Preços: o que esperar',
      content: [
        { kind: 'paragraph', text: 'As tarifas variam conforme a época, residência, idade, tipo de transporte e promoções. Abaixo estão intervalos práticos para planear o orçamento em 2026; o preço final é sempre dado pelo calendário do operador.' },
        { kind: 'checklist', items: [
          'As travessias curtas nos Açores sem automóvel costumam custar alguns euros ou dezenas de euros, dependendo da linha.',
          'Faial—Pico, enquanto linha curta, é claramente mais barata do que viagens longas entre grupos de ilhas.',
          'O automóvel nos Açores custa muitas vezes bastante mais do que o passageiro; nos navios pequenos há poucos lugares.',
          'Funchal—Porto Santo para um adulto ida e volta deve normalmente ser planeado a partir de dezenas de euros; no verão e em datas de pico, é mais caro.',
          'Um carro Funchal—Porto Santo ida e volta frequentemente torna a viagem 2–3 vezes mais cara do que como passageiro a pé.',
          'As tarifas de residente Madeira/Açores não são iguais às tarifas para todos os estrangeiros com NIF; é necessária a residência aplicável segundo as regras do operador.',
          'As tarifas promocionais estão quase sempre limitadas por datas, reembolso e alteração do bilhete.'
        ] },
        { kind: 'warning', text: 'Se lhe oferecerem um «ferry com carro Madeira—Açores» por preço fixo, muito provavelmente não é um ferry de passageiros, mas logística de carga, charter ou erro de intermediário. Peça o número da viagem e confirme com o operador.' }
      ]
    }
  ],
  costs: [
    { label: 'Atlânticoline, travessia interilhas curta sem automóvel', amountEURMin: 4, amountEURMax: 20, note: 'Referência para linhas curtas; o preço exacto depende das ilhas, da residência e da data.' },
    { label: 'Atlânticoline, linha sazonal longa sem automóvel', amountEURMin: 25, amountEURMax: 70, note: 'Para planear rotas de verão entre grupos de ilhas; verificar no calendário de vendas.' },
    { label: 'Automóvel na Atlânticoline', amountEURMin: 20, amountEURMax: 120, note: 'O intervalo depende do comprimento do automóvel e da rota; os lugares no convés são limitados.' },
    { label: 'Porto Santo Line, adulto Funchal—Porto Santo ida e volta', amountEURMin: 60, amountEURMax: 90, note: 'Referência para tarifa de não residente; época, promoções e residência alteram o preço.' },
    { label: 'Porto Santo Line, automóvel ida e volta', amountEURMin: 120, amountEURMax: 220, note: 'Depende da categoria/comprimento do carro e da data; é reservado juntamente com o passageiro.' }
  ],
  sources: [
    { title: 'Site oficial da Atlânticoline: horários, reservas, tarifas dos Açores', url: 'https://www.atlanticoline.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Site oficial da Porto Santo Line: Funchal—Porto Santo, Lobo Marinho', url: 'https://www.portosantoline.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portos dos Açores: infraestrutura marítima e portos do arquipélago', url: 'https://www.portosdosacores.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'APRAM: Administração dos Portos da Região Autónoma da Madeira', url: 'https://www.apram.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
