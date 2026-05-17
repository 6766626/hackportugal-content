export default {
  editorialVoice: 'hackportugal',
  id: 'motorcycle-license-am-a1',
  categoryId: 'driving_license',
  title: 'Categorias de carta de motociclo em Portugal: AM, A1, A2, A',
  tldr: 'Em Portugal, em 2026, as categorias de carta para motos dividem-se assim: AM — ciclomotores/scooters até 50 cm³ e 45 km/h a partir dos 16 anos; A1 — 125 cm³, até 11 kW a partir dos 16 anos; A2 — até 35 kW a partir dos 18 anos; A — sem limite de potência a partir dos 24 anos ou dos 20 anos após 2 anos com A2. Para entregas em 125 cm³, normalmente é necessária a A1 ou uma B portuguesa com autorização para A1 nas condições da lei. Verifique o verso da carta de condução e o seguro: a plataforma não substitui a categoria de condução.',
  tags: ['imt', 'moto', 'a1', 'entrega'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: '1. O que permite cada categoria',
      content: [
        { kind: 'paragraph', text: 'As categorias AM, A1, A2 e A constam da carta de condução portuguesa e são reguladas pelo Regulamento da Habilitação Legal para Conduzir. Para a polícia, a seguradora e a plataforma de delivery, o que importa não é a “potência aproximada”, mas a correspondência exacta entre categoria, cilindrada, potência e, por vezes, relação potência/peso.' },
        { kind: 'checklist', items: [
          'AM — ciclomotores: normalmente ciclomotores/scooters com velocidade máxima por construção até 45 km/h; se o motor for de combustão interna — até 50 cm³; também quadriciclos ligeiros segundo as regras da categoria.',
          'A1 — motociclos até 125 cm³, potência até 11 kW e relação potência/peso até 0,1 kW/kg; também triciclos até 15 kW.',
          'A2 — motociclos com potência até 35 kW e relação potência/peso até 0,2 kW/kg; o motociclo não pode ser uma versão “limitada” de um modelo com potência mais de 2 vezes superior.',
          'A — motociclos sem limite de potência; também triciclos com potência superior a 15 kW, desde que seja cumprida a condição de idade.',
          'A cilindrada de 125 cm³, por si só, não garante a A1: se a potência for superior a 11 kW ou não cumprir o limite kW/kg, é necessária outra categoria.',
          'As scooters eléctricas também são avaliadas pela categoria, potência e velocidade máxima por construção, e não pelo facto de “não serem a gasolina”.'
        ] },
        { kind: 'warning', text: 'Conduzir uma scooter de 125 cm³ tendo apenas a AM é conduzir sem a categoria necessária. Em caso de acidente, a seguradora pode exercer direito de regresso, e a polícia pode autuar a infracção como falta de habilitação legal suficiente.' }
      ]
    },
    {
      id: 'minimum-age',
      title: '2. Idade mínima em 2026',
      content: [
        { kind: 'paragraph', text: 'A idade conta-se na data de obtenção da categoria, não na data de inscrição na escola de condução. A escola pode iniciar o processo antes, mas o exame e a emissão da categoria dependem da idade mínima do IMT.' },
        { kind: 'checklist', items: [
          'AM — a partir dos 16 anos.',
          'A1 — a partir dos 16 anos.',
          'A2 — a partir dos 18 anos.',
          'A — a partir dos 24 anos em acesso directo à categoria.',
          'A — a partir dos 20 anos, se o condutor já tiver A2 há pelo menos 2 anos e fizer o upgrade segundo as regras do IMT.',
          'Triciclos da categoria A com potência superior a 15 kW — normalmente a partir dos 21 anos.',
          'Para aluguer de motociclo, a empresa pode definir uma idade superior à prevista na lei, por exemplo 21–25 anos e 1–2 anos de experiência.'
        ] }
      ]
    },
    {
      id: 'b-license-125',
      title: '3. É possível conduzir uma 125 cm³ com categoria B',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, a categoria B pode conferir direitos adicionais para algumas categorias de duas rodas, mas isto não é uma regra universal para qualquer carta estrangeira. Na carta de condução portuguesa, normalmente vê-se de forma explícita quais as categorias abertas: AM, A1, B e as datas junto delas.' },
        { kind: 'checklist', items: [
          'A B, por si só, normalmente abrange a AM no âmbito das regras portuguesas.',
          'Para A1 com B aplicam-se as condições da lei portuguesa: na prática, muitas vezes é necessária idade de 25+ ou a existência de direito anterior a AM/ciclomotor; verifique o averbamento concreto na carta e o esclarecimento do IMT.',
          'Se tem uma carta estrangeira de categoria B, não presuma que tem automaticamente direito a conduzir 125 cm³ em Portugal: as regras do país emissor e as regras de Portugal podem não coincidir.',
          'Na troca de cartas estrangeiras, o IMT transfere as categorias de acordo com os documentos e as correspondências internacionais; uma “A1 automática” nem sempre aparece.',
          'Para Uber Eats, Glovo, Bolt Food e serviços semelhantes, a plataforma pode pedir carta de condução, livrete/DUA, seguro e confirmação de que o veículo é adequado para uso comercial.',
          'O seguro de moto/scooter deve corresponder ao condutor real e à categoria. Se a categoria não for adequada, o pagamento após um acidente fica em risco.'
        ] },
        { kind: 'warning', text: 'O erro mais comum dos expats: comprar uma 125 cm³ “para entregas”, tendo apenas uma B estrangeira, e concluir que, como em Portugal muitas pessoas conduzem 125 com B, então todos o podem fazer. Verifique primeiro o verso da carta de condução ou obtenha confirmação por escrito junto do IMT/da escola.' }
      ]
    },
    {
      id: 'how-to-get',
      title: '4. Como obter ou subir de categoria',
      content: [
        { kind: 'paragraph', text: 'O caminho habitual é através de uma escola de condução e depois exames do IMT. Para AM/A1/A2/A são necessários documentos, aptidão médica e aprovação na teoria/prática, consoante o conjunto actual de categorias que já possui.' },
        { kind: 'substeps', items: [
          { id: 'choose-school', title: 'Escolha uma escola de condução', content: [
            { kind: 'checklist', items: [
              'Confirme se a escola tem motociclo da categoria necessária: A1, A2 ou A.',
              'Pergunte se o preço inclui exame de código, exame prático, aluguer do motociclo para o exame e taxas IMT.',
              'Verifique o idioma: muitas escolas dão a teoria em português; turmas em inglês são mais caras e não estão disponíveis em todo o lado.',
              'Para entregas em 125 cm³, o mínimo-alvo normalmente é a A1, se a sua B não conferir legalmente direito à A1.',
              'Para um motociclo mais potente depois da A1, o upgrade lógico é A2 e depois A.'
            ] }
          ] },
          { id: 'documents', title: 'Prepare os documentos', content: [
            { kind: 'checklist', items: [
              'Documento de identificação: autorização de residência, Cartão de Cidadão, certificado da UE ou passaporte com estatuto legal.',
              'NIF.',
              'Atestado médico eletrónico — declaração médica, enviada pelo médico para o sistema do IMT.',
              'Carta de condução actual, se já tiver B, AM, A1 ou A2.',
              'Comprovativo de morada pode ser necessário para a escola ou para o IMT, especialmente na troca de carta estrangeira.',
              'Para troca de carta estrangeira — original da carta, certificado de autenticidade/categorias se solicitado pelo IMT e tradução, se o documento não estiver numa língua aceite pelo IMT.'
            ] }
          ] },
          { id: 'exams', title: 'Faça os exames', content: [
            { kind: 'paragraph', text: 'Os exames incluem uma parte teórica e condução prática. No upgrade de A2 para A após 2 anos, o volume de requisitos pode diferir do acesso directo, por isso peça à escola que detalhe exactamente o seu percurso antes de pagar.' }
          ] }
        ] }
      ]
    },
    {
      id: 'foreign-license',
      title: '5. Se já tem carta estrangeira',
      content: [
        { kind: 'paragraph', text: 'Para um expat, a questão central é o reconhecimento e a troca da carta. As regras dependem do país emissor, do tempo de residência, da idade, da validade da carta e da existência de acordos internacionais. As categorias de motociclo não são transferidas “por palavra”, mas sim com base no documento e nas tabelas de correspondência do IMT.' },
        { kind: 'checklist', items: [
          'Cartas da UE/EEE são normalmente reconhecidas em Portugal até ao fim da validade, mas ao residir no país podem surgir obrigações de registo/troca em certos casos.',
          'Cartas de muitos países da OECD/CPLP podem ser usadas sem troca imediata, desde que cumpridas as condições da lei portuguesa, mas isso não elimina a exigência de ter a categoria de moto necessária.',
          'Se o país não estiver abrangido por reconhecimento simplificado, após obter residência é normalmente necessária a troca através do IMT e, por vezes, exame.',
          'Se na carta estrangeira constar apenas B, o IMT não é obrigado a acrescentar automaticamente A1/A2/A.',
          'Se a categoria A estiver aberta no estrangeiro, verifique se existem restrições de potência, código ou data de experiência.',
          'Para trabalhar como estafeta, guarde cópias da carta, DUA, seguro, inspeção quando aplicável e comprovativo de registo do veículo.'
        ] },
        { kind: 'warning', text: 'Não se guie por conselhos do tipo “a polícia não verifica”. Num acidente com feridos, tudo será verificado: categoria, data de emissão, seguro, características técnicas e direito a trabalhar nesse veículo.' }
      ]
    },
    {
      id: 'practical-choice',
      title: '6. O que escolher para a vida diária e entregas',
      content: [
        { kind: 'paragraph', text: 'Para cidade e entregas, a escolha mais comum é 50 cm³ com AM ou 125 cm³ com A1/B nas condições aplicáveis. 50 cm³ é mais barato e simples, mas mais lento e pior para zonas suburbanas. 125 cm³ é o mínimo prático para Lisboa, Porto, Almada, Oeiras, Gaia e zonas com muitas subidas.' },
        { kind: 'checklist', items: [
          'Se é principiante e conduz apenas no bairro — AM pode ser suficiente, mas o rendimento em entregas costuma ser menor devido à velocidade e ao raio de acção.',
          'Se planeia fazer entregas regularmente — aponte para A1 ou confirme que a sua B cobre legalmente a A1.',
          'Se precisa de um motociclo para IC/estradas mais rápidas do que ruas urbanas — considere A2.',
          'Se quer touring, uma naked/scooter maxi potente ou trabalhar a longo prazo de moto — A dá a máxima liberdade.',
          'Antes da compra, verifique o DUA: cilindrada, potência, tipo de veículo e VIN devem coincidir com o anúncio.',
          'Confirme o seguro obrigatório antes de circular na estrada; a falta de seguro é uma infracção grave distinta.',
          'O capacete é obrigatório. Para estafetas, luvas, protecção contra a chuva e fixação da mochila sem prejudicar a manobrabilidade também são importantes.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Emissão/renovação da carta de condução pelo IMT', amountEUR: 30, note: 'Taxa típica do IMT por emissão/revalidação; a escola pode cobrar separadamente pelo acompanhamento.' },
    { label: 'Curso AM/A1 em escola de condução', amountEURMin: 250, amountEURMax: 600, note: 'Intervalo de mercado em 2026; depende da cidade, idioma, exames incluídos e quantidade de prática.' },
    { label: 'Curso A2/A ou upgrade', amountEURMin: 350, amountEURMax: 900, note: 'Mais caro devido ao motociclo, ao seguro da escola e à prática; confirme se o aluguer do motociclo para o exame está incluído.' },
    { label: 'Atestado médico eletrónico', amountEURMin: 20, amountEURMax: 50, note: 'Normalmente no médico de família/médico privado; o preço depende da clínica e do seguro.' }
  ],
  sources: [
    { title: 'IMT: categorias da carta de condução', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Condutores/CartaConducao/Paginas/CategoriasdeCarta.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 138/2012: Regulamento da Habilitação Legal para Conduzir', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2012-175828266', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT: carta de condução — informações para condutores', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Condutores/CartaConducao/Paginas/CartaConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: pedir carta de condução', url: 'https://eportugal.gov.pt/servicos/pedir-a-carta-de-conducao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
