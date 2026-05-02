export default {
  editorialVoice: 'hackportugal',
  id: 'motorcycle-license-am-a1',
  categoryId: 'driving_license',
  title: 'Categorias de carta de motociclo em Portugal: AM, A1, A2, A',
  tldr: 'Em Portugal, em 2026, as cartas de motociclo dividem-se assim: AM — ciclomotores/scooters até 50 cm³ e 45 km/h a partir dos 16 anos; A1 — 125 cm³, até 11 kW a partir dos 16 anos; A2 — até 35 kW a partir dos 18 anos; A — sem limite de potência a partir dos 24 anos ou a partir dos 20 anos após 2 anos de A2. Para entregas em 125 cm³, normalmente é necessária A1 ou uma B portuguesa com autorização para A1 nas condições da lei. Verifique o verso da carta de condução e o seguro: a plataforma não substitui a categoria de condução.',
  tags: ['imt', 'moto', 'a1', 'entrega'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: '1. O que cada categoria permite',
      content: [
        { kind: 'paragraph', text: 'As categorias AM, A1, A2 e A constam da carta de condução portuguesa e são reguladas pelo Regulamento da Habilitação Legal para Conduzir. Para a polícia, para a seguradora e para a plataforma de delivery, o que importa não é uma “potência aproximada”, mas a correspondência exacta entre categoria, cilindrada, potência e, por vezes, relação potência/peso.' },
        { kind: 'checklist', items: [
          'AM — ciclomotores: normalmente ciclomotores/scooters com velocidade máxima por construção até 45 km/h; se tiverem motor de combustão interna — até 50 cm³; também quadriciclos ligeiros segundo as regras da categoria.',
          'A1 — motociclos até 125 cm³, potência até 11 kW e relação potência/peso até 0,1 kW/kg; também triciclos até 15 kW.',
          'A2 — motociclos com potência até 35 kW e relação potência/peso até 0,2 kW/kg; o motociclo não pode ser uma versão “limitada” de um modelo com potência mais de 2 vezes superior.',
          'A — motociclos sem limite de potência; também triciclos com potência superior a 15 kW, respeitando a condição de idade.',
          'A cilindrada de 125 cm³, por si só, não garante A1: se a potência for superior a 11 kW ou não cumprir o limite kW/kg, é necessária outra categoria.',
          'As scooters eléctricas também são avaliadas pela categoria, potência e velocidade máxima por construção, e não pelo facto de “não serem a gasolina”.'
        ] },
        { kind: 'warning', text: 'Conduzir uma scooter de 125 cm³ tendo apenas AM é conduzir sem a categoria necessária. Em caso de acidente, a seguradora pode exercer direito de regresso, e a polícia pode autuar a infracção como falta de habilitação legal suficiente.' }
      ]
    },
    {
      id: 'minimum-age',
      title: '2. Idade mínima em 2026',
      content: [
        { kind: 'paragraph', text: 'A idade é contada na data de obtenção da categoria, não na data de inscrição na escola de condução. A escola pode iniciar o processo antecipadamente, mas o exame e a emissão da categoria dependem da idade mínima do IMT.' },
        { kind: 'checklist', items: [
          'AM — a partir dos 16 anos.',
          'A1 — a partir dos 16 anos.',
          'A2 — a partir dos 18 anos.',
          'A — a partir dos 24 anos, quando a categoria é obtida directamente.',
          'A — a partir dos 20 anos, se o condutor já tiver A2 há pelo menos 2 anos e fizer o upgrade segundo as regras do IMT.',
          'Triciclos da categoria A com potência superior a 15 kW — normalmente a partir dos 21 anos.',
          'Para aluguer de motociclo, a empresa pode impor uma idade superior à prevista na lei, por exemplo 21–25 anos e 1–2 anos de experiência.'
        ] }
      ]
    },
    {
      id: 'b-license-125',
      title: '3. É possível conduzir 125 cm³ com categoria B',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, a categoria B pode conferir direitos adicionais para algumas categorias de duas rodas, mas isso não é uma regra universal para qualquer carta estrangeira. Na carta de condução portuguesa costuma ser visível directamente quais as categorias abertas: AM, A1, B e as datas junto delas.' },
        { kind: 'checklist', items: [
          'A B, por si só, normalmente cobre AM no âmbito das regras portuguesas.',
          'Para A1 com B aplicam-se as condições da lei portuguesa: na prática, muitas vezes é necessária idade de 25+ ou a existência de habilitação anterior para AM/ciclomotor; verifique a inscrição concreta na carta e o esclarecimento do IMT.',
          'Se tem uma carta estrangeira de categoria B, não pressuponha o direito automático a 125 cm³ em Portugal: as regras do país emissor e as regras de Portugal podem não coincidir.',
          'Ao trocar uma carta estrangeira, o IMT transfere as categorias com base nos documentos e nas correspondências internacionais; a “A1 automática” nem sempre aparece.',
          'Para Uber Eats, Glovo, Bolt Food e serviços semelhantes, a plataforma pode pedir carta de condução, livrete/DUA, seguro e confirmação de que o veículo é adequado para uso comercial.',
          'O seguro para moto/scooter deve corresponder ao condutor real e à categoria. Se a categoria não for adequada, o pagamento após um acidente fica em risco.'
        ] },
        { kind: 'warning', text: 'O erro mais comum entre expats: comprar uma 125 cm³ “para entregas”, tendo apenas uma B estrangeira, e concluir que, como em Portugal muita gente conduz 125 com B, então todos podem fazê-lo. Verifique primeiro o verso da carta de condução ou obtenha confirmação por escrito no IMT/na escola.' }
      ]
    },
    {
      id: 'how-to-get',
      title: '4. Como obter ou elevar a categoria',
      content: [
        { kind: 'paragraph', text: 'O percurso habitual é através de uma escola de condução, seguido dos exames do IMT. Para AM/A1/A2/A são necessários documentos, aptidão médica e aprovação na teoria/prática, consoante o seu conjunto actual de categorias.' },
        { kind: 'substeps', items: [
          { id: 'choose-school', title: 'Escolha uma escola de condução', content: [
            { kind: 'checklist', items: [
              'Confirme se a escola tem motociclo da categoria necessária: A1, A2 ou A.',
              'Pergunte se o preço inclui exame de código, exame prático, aluguer do motociclo para o exame e taxas do IMT.',
              'Verifique a língua: muitas escolas dão a teoria em português; turmas em inglês são mais caras e não estão disponíveis em todo o lado.',
              'Para entregas em 125 cm³, o objectivo mínimo costuma ser A1, se a sua B não conferir legalmente o direito a A1.',
              'Para um motociclo mais potente depois da A1, o upgrade lógico é A2, depois A.'
            ] }
          ] },
          { id: 'documents', title: 'Prepare os documentos', content: [
            { kind: 'checklist', items: [
              'Documento de identificação: autorização de residência, Cartão de Cidadão, certificado da UE ou passaporte com estatuto legal.',
              'NIF.',
              'Atestado médico eletrónico — declaração médica, transmitida pelo médico ao sistema do IMT.',
              'Carta de condução actual, se já tiver B, AM, A1 ou A2.',
              'Comprovativo de morada pode ser necessário para a escola ou para o IMT, especialmente na troca de cartas estrangeiras.',
              'Para troca de carta estrangeira — carta original, certificado de autenticidade/categorias se solicitado pelo IMT e tradução, se o documento não estiver numa língua aceite pelo IMT.'
            ] }
          ] },
          { id: 'exams', title: 'Faça os exames', content: [
            { kind: 'paragraph', text: 'Os exames incluem uma componente teórica e condução prática. No upgrade de A2 para A após 2 anos, o volume de requisitos pode diferir da obtenção directa, por isso peça à escola que descreva exactamente o seu percurso antes de pagar.' }
          ] }
        ] }
      ]
    },
    {
      id: 'foreign-license',
      title: '5. Se já tem uma carta estrangeira',
      content: [
        { kind: 'paragraph', text: 'Para um expat, a questão principal é o reconhecimento e a troca da carta. As regras dependem do país emissor, do tempo de residência, da idade, da validade da carta e da existência de acordos internacionais. As categorias de motociclo são transferidas não “por palavra”, mas com base no documento e nas tabelas de equivalência do IMT.' },
        { kind: 'checklist', items: [
          'Cartas da UE/EEE são normalmente reconhecidas em Portugal até ao fim da validade, mas, ao residir no país, podem surgir obrigações de registo/troca em determinados casos.',
          'Cartas de muitos países da OCDE/CPLP podem ser usadas sem troca imediata se cumprirem as condições da lei portuguesa, mas isso não elimina a exigência de ter a categoria de moto necessária.',
          'Se o país não estiver abrangido por reconhecimento simplificado, após obter residência normalmente é necessária a troca através do IMT e, por vezes, exame.',
          'Se a carta estrangeira indicar apenas B, o IMT não é obrigado a acrescentar automaticamente A1/A2/A.',
          'Se a categoria A estiver aberta no estrangeiro, verifique se existem limitações de potência, código ou data de experiência.',
          'Para trabalhar como estafeta, guarde cópias da carta, DUA, seguro, inspeção quando aplicável e comprovativo de registo do veículo.'
        ] },
        { kind: 'warning', text: 'Não se guie por conselhos do tipo “a polícia não verifica”. Num acidente com feridos, tudo será verificado: categoria, data de emissão, seguro, características técnicas e direito de trabalhar com esse veículo.' }
      ]
    },
    {
      id: 'practical-choice',
      title: '6. O que escolher para a vida diária e entregas',
      content: [
        { kind: 'paragraph', text: 'Para a cidade e entregas, a escolha mais frequente é 50 cm³ com AM ou 125 cm³ com A1/B, desde que cumpridas as condições. 50 cm³ é mais barato e simples, mas mais lento e pior para zonas suburbanas. 125 cm³ é o mínimo prático para Lisboa, Porto, Almada, Oeiras, Gaia e zonas com muitas colinas.' },
        { kind: 'checklist', items: [
          'Se é principiante e conduz apenas no seu bairro — AM pode bastar, mas o rendimento em entregas costuma ser mais baixo devido à velocidade e ao raio de acção.',
          'Se planeia fazer entregas regularmente — aponte para A1 ou confirme que a sua B cobre legalmente A1.',
          'Se precisa de um motociclo para IC/estradas mais rápidas do que ruas urbanas — considere A2.',
          'Se quer touring, uma naked/scooter maxi potente ou trabalhar a longo prazo de moto — A dá a máxima liberdade.',
          'Antes da compra, verifique o DUA: cilindrada, potência, tipo de veículo e VIN devem coincidir com o anúncio.',
          'Verifique o seguro obrigatório antes de sair para a estrada; ausência de seguro é uma infracção grave autónoma.',
          'O capacete é obrigatório. Para estafetas, também são importantes luvas, protecção contra a chuva e fixação da mochila sem comprometer a maneabilidade.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Emissão/renovação da carta de condução no IMT', amountEUR: 30, note: 'Taxa típica do IMT por emissão/revalidação; a escola pode cobrar separadamente pelo acompanhamento.' },
    { label: 'Curso AM/A1 em escola de condução', amountEURMin: 250, amountEURMax: 600, note: 'Intervalo de mercado em 2026; depende da cidade, da língua, dos exames incluídos e da quantidade de prática.' },
    { label: 'Curso A2/A ou upgrade', amountEURMin: 350, amountEURMax: 900, note: 'Mais caro devido ao motociclo, ao seguro da escola e à prática; confirme se o aluguer do motociclo para o exame está incluído.' },
    { label: 'Atestado médico eletrónico', amountEURMin: 20, amountEURMax: 50, note: 'Normalmente no médico de família/médico privado; o preço depende da clínica e do seguro.' }
  ],
  sources: [
    { title: 'IMT: categorias da carta de condução', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Condutores/CartaConducao/Paginas/CategoriasdeCarta.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 138/2012: Regulamento da Habilitação Legal para Conduzir', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2012-175828266', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT: carta de condução — informações para condutores', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Condutores/CartaConducao/Paginas/CartaConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: pedir carta de condução', url: 'https://eportugal.gov.pt/servicos/pedir-a-carta-de-conducao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
