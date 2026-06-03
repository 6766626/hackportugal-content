export default {
  editorialVoice: 'hackportugal',
  id: 'compra-bicicleta-usada',
  categoryId: 'auto_ownership',
  title: 'Compra de bicicleta usada: OLX, Vinted, Custojusto e verificação do vendedor',
  tldr: 'Em Portugal, uma bicicleta usada procura-se normalmente no OLX, Custojusto, Vinted e em lojas de nicho como a Bici Used. Preço urbano normal em 2026: 80–250 €, MTB 150–600 €, e-bike geralmente a partir de 700 €. Antes de pagar, verifique o número de série do quadro, o desgaste da corrente, os travões, as folgas e a origem: fatura, fotografias, histórico de posse. O capacete para uma bicicleta normal não é obrigatório por lei, mas as luzes e os refletores durante a noite são obrigatórios pelo Código da Estrada.',
  tags: ['bicicleta', 'olx', 'vinted', 'furtos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-search',
      title: 'Onde procurar e como ler anúncios',
      content: [
        { kind: 'paragraph', text: 'OLX.pt é o maior site de classificados em Portugal: tem mais bicicletas, mas também mais lixo, revendedores e anúncios suspeitos. O Custojusto é parecido com o OLX; por vezes há anúncios antigos de particulares. O Vinted é prático para bicicletas dobráveis, infantis e urbanas baratas, mas tem menos detalhes técnicos e é mais difícil inspecionar antes da compra.' },
        { kind: 'paragraph', text: 'Para bicicletas de estrada caras, gravel, MTB e e-bike, veja também lojas especializadas e plataformas de revenda: Bici Used, bike shops locais, grupos de Facebook por cidade. A loja é mais cara, mas muitas vezes dá fatura, diagnóstico básico e por vezes uma garantia curta.' },
        { kind: 'checklist', items: [
          'Pesquise por palavras: bicicleta, bike, BTT, estrada, gravel, elétrica, dobrável, criança',
          'Use o filtro por zona: Lisboa, Porto, Braga, Coimbra, Algarve — enviar uma bicicleta é frequentemente pouco prático',
          'Compare o preço com a Decathlon, Sport Zone e modelos novos: se a diferença for inferior a 25–30%, usado nem sempre compensa',
          'Um Trek, Specialized, Cube, Scott, Canyon ou Cannondale demasiado barato é motivo para verificar tudo com especial rigor',
          'Anúncio sem fotografia do número de série, cassete, corrente, travões e zona da direção — peça fotografias adicionais',
          'A frase “não sei o tamanho” para uma bicicleta cara muitas vezes indica um revendedor ou um vendedor sem histórico de posse',
          'Se o vendedor tiver pressa, pedir sinal/adiantamento antecipadamente ou enviar uma ligação para “estafeta OLX” fora do site — não pague'
        ] }
      ]
    },
    {
      id: 'reputation-and-scam-check',
      title: 'Reputação do vendedor e esquemas típicos',
      content: [
        { kind: 'paragraph', text: 'No OLX e no Custojusto, a reputação é mais fraca do que em marketplaces com escrow: o perfil pode ser novo e as avaliações limitadas. Por isso, o que conta não é a “estrelinha”, mas o comportamento do vendedor: disponibilidade para mostrar a bicicleta, dar o número de série, explicar a origem, encontrar-se num local seguro e não exigir pré-pagamento.' },
        { kind: 'checklist', items: [
          'Verifique a data de registo do perfil e os outros anúncios do vendedor',
          'Peça uma fotografia da bicicleta ao lado de um papel com a data de hoje ou o seu nome',
          'Peça o número de série do quadro antes do encontro, mas não publique o seu número em acesso público depois da compra',
          'Pergunte: onde foi comprada, quando teve manutenção, por que motivo está à venda, se existe fatura/recibo',
          'Para e-bike, peça fotografias do carregador, das chaves da bateria, do ecrã com a quilometragem e dos erros',
          'Não abra ligações para “OLX pagamento”, “transportadora”, “seguro comprador” enviadas por WhatsApp/SMS',
          'MB WAY só é seguro se você souber exatamente o que está a fazer: não comunique códigos, PIN, dados do cartão',
          'Para o Vinted, use o pagamento e o chat dentro da aplicação; ao passar para WhatsApp, a proteção do comprador desaparece na prática',
          'Encontre-se de dia junto ao metro, centro comercial, bike shop ou perto da polícia; não numa entrada de prédio nem à noite'
        ] },
        { kind: 'warning', text: 'Em Portugal, é frequente furtarem bicicletas de garagens, arrecadações, entradas de prédio e da rua. Se o vendedor não consegue explicar a origem de uma bicicleta cara, o preço está 50%+ abaixo do mercado, o cadeado “perdeu-se” e não há carregador/chaves — é melhor desistir.' }
      ]
    },
    {
      id: 'serial-number',
      title: 'Número de série e verificação da origem',
      content: [
        { kind: 'paragraph', text: 'As bicicletas normais em Portugal não têm registo estatal obrigatório como um automóvel. Por isso, o número de série do quadro é a sua principal âncora: com ele pode procurar anúncios de furto, confirmar a posse junto da seguradora e apresentar queixa na PSP/GNR, se a bicicleta vier a ser furtada já consigo.' },
        { kind: 'checklist', items: [
          'Procure o número na parte inferior da caixa do movimento pedaleiro, no tubo da direção, na ponteira traseira ou por baixo da bateria da e-bike',
          'Compare o número no quadro com a fatura, livro de garantia, fotografia da compra ou documentos de assistência',
          'Verifique o número e o modelo através do Google, grupos de Facebook, Bike Index e publicações locais de bicicletas furtadas',
          'Inspecione o local do número: não deve estar limado, pintado com uma camada grossa, adulterado ou tapado por um autocolante',
          'Fotografe o número e a vista geral da bicicleta; não fotografe o vendedor sem consentimento',
          'Guarde a conversa, o anúncio, o telefone, NIF/nome do recibo, se o vendedor aceitar fornecê-los',
          'Depois da compra, tire as suas próprias fotografias do número, do quadro e dos componentes, e guarde-as na cloud'
        ] },
        { kind: 'paragraph', text: 'Para uma compra cara, peça um recibo de compra e venda simples: data, preço, nome do vendedor, documento/NIF se as partes quiserem, marca, modelo, cor, serial number, assinaturas. Não é um ato notarial, mas é muito melhor do que dinheiro sem rasto.' }
      ]
    },
    {
      id: 'technical-check',
      title: 'Inspeção técnica em 10–15 minutos',
      content: [
        { kind: 'paragraph', text: 'Não compre uma bicicleta sem um pequeno test ride. Mesmo uma bicicleta bonita pode exigir 100–300 € em reparações. Se não percebe do assunto, combine encontrar-se junto de uma oficina de bicicletas e pagar 10–20 € por uma inspeção rápida — é mais barato do que trocar a transmissão depois da compra.' },
        { kind: 'checklist', items: [
          'Tamanho do quadro: deve conseguir ficar com segurança por cima do quadro e não esticar-se até ao guiador como se estivesse a fazer uma espargata',
          'Quadro e forqueta: fissuras, mossas, sinais de queda, rodas desalinhadas — sinal de alerta',
          'Corrente: verifique com um chain checker; desgaste de 0,75% já é motivo para negociar, 1,0% muitas vezes implica cassete e pratos',
          'Mudanças: todas as relações devem entrar sem estalidos, saltos ou desengate espontâneo',
          'Travões: a manete não deve ir até ao guiador; o disco não deve roçar muito nem estar empenado',
          'Rodas: levante e rode — empeno, oscilação, ruído nos cubos e folga significam reparação',
          'Direção e movimento pedaleiro: aperte o travão e abane a bicicleta; cliques e folgas são motivo para baixar o preço',
          'Pneus: fissuras causadas pelo sol em Portugal são frequentes; um par de pneus novos custa facilmente 30–80 €',
          'E-bike: a bateria deve carregar, não deve abanar, as chaves devem funcionar, o motor não deve apresentar erros'
        ] },
        { kind: 'warning', text: 'Não compre uma e-bike sem carregador e chaves da bateria. “Depois compro carregador” é quase sempre uma má ideia: a bateria original e a eletrónica podem custar centenas de euros, e a origem da bicicleta será difícil de provar.' }
      ]
    },
    {
      id: 'law-and-safety',
      title: 'Lei, luzes, capacete e segurança',
      content: [
        { kind: 'paragraph', text: 'Segundo o Código da Estrada, a bicicleta é um velocípede. Para uma bicicleta normal, o capacete em Portugal não é uma exigência geral obrigatória, mas é fortemente recomendado, especialmente na cidade, em estradas EN e para crianças. São obrigatórios o cumprimento das regras de circulação, travões em bom estado e, durante a noite e com má visibilidade, luz dianteira/traseira e elementos refletores.' },
        { kind: 'checklist', items: [
          'Luz dianteira branca ou amarela — use à noite, em túneis, com chuva/nevoeiro',
          'Luz traseira vermelha e refletor — must-have para cidade e periferia',
          'Campainha ou outro sinal sonoro é útil na cidade, mesmo que o vendedor a tenha retirado',
          'Compre capacete novo se não conhece o histórico de quedas do antigo',
          'Um bom U-lock ou folding lock é mais importante do que um cabo barato: em Lisboa e no Porto, um cabo é cortado rapidamente',
          'Não deixe a bicicleta na rua durante a noite, mesmo com dois cadeados',
          'Logo após a compra, substitua o cadeado de código/antigo, se tiver vindo “incluído”',
          'Para transporte na Comboios de Portugal e no metro, verifique as regras do operador concreto e as horas de ponta'
        ] },
        { kind: 'paragraph', text: 'Se a bicicleta for furtada, apresente queixa na PSP ou GNR e indique serial number, fotografias, local, data, sinais particulares e documentos de compra. Sem número de série, a probabilidade de recuperar a bicicleta cai drasticamente.' }
      ]
    },
    {
      id: 'payment-and-handover',
      title: 'Pagamento e entrega',
      content: [
        { kind: 'paragraph', text: 'O cenário mais seguro para uma transação entre particulares: encontro presencial, inspeção, test ride, verificação do número de série, recibo curto e só depois pagamento. Para valores até 200–300 €, usa-se frequentemente dinheiro; para bicicletas caras, é mais prático transferência bancária ou MB WAY no local, mas apenas depois da inspeção.' },
        { kind: 'checklist', items: [
          'Guarde uma captura de ecrã do anúncio antes de ser eliminado',
          'Verifique se todos os acessórios prometidos estão incluídos: carregador, chaves, pedais, guarda-lamas, porta-bagagens',
          'Tire uma fotografia da bicicleta depois da entrega',
          'Peça ao vendedor para escrever no chat “recebi X € pela bicicleta marca/modelo/serial”',
          'Não envie sinal antecipadamente, exceto uma quantia simbólica a uma loja conhecida com invoice normal',
          'Se comprar numa loja, exija fatura com NIF ou consumidor final e esclareça a garantia',
          'Depois da compra, ajuste imediatamente o selim, a pressão dos pneus e os travões, e compre luzes se não houver'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Bicicleta urbana usada', amountEURMin: 80, amountEURMax: 250, note: 'Intervalo funcional para OLX/Custojusto em 2026; abaixo disso, muitas vezes exige reparações' },
    { label: 'MTB / BTT usada', amountEURMin: 150, amountEURMax: 600, note: 'Depende muito da forqueta, da transmissão e do estado das rodas' },
    { label: 'E-bike usada', amountEURMin: 700, amountEURMax: 2000, note: 'Abaixo de 700 €, verifique a bateria, o carregador, as chaves e a origem com especial atenção' },
    { label: 'Manutenção básica em oficina de bicicletas', amountEURMin: 35, amountEURMax: 90, note: 'Afinação de travões/mudanças sem peças caras' },
    { label: 'Cadeado U-lock/folding decente', amountEURMin: 30, amountEURMax: 80, note: 'Não poupe: um cabo barato serve apenas como segundo cadeado' },
    { label: 'Luzes e refletores', amountEURMin: 15, amountEURMax: 60, note: 'Necessários para circular à noite e com má visibilidade' }
  ],
  sources: [
    { title: 'OLX Portugal — secção de bicicletas e anúncios particulares', url: 'https://www.olx.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — regras para velocípedes, iluminação e circulação', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34402975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Custojusto Portugal — site de anúncios particulares', url: 'https://www.custojusto.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Vinted Portugal — regras de compra e proteção dentro da plataforma', url: 'https://www.vinted.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
