export default {
  editorialVoice: 'hackportugal',
  id: 'compra-bicicleta-usada',
  categoryId: 'auto_ownership',
  title: 'Compra de bicicleta usada: OLX, Vinted, Custojusto e verificação do vendedor',
  tldr: 'Em Portugal, uma bicicleta usada costuma procurar-se no OLX, Custojusto, Vinted e em lojas de nicho como a Bici Used. Preço urbano normal em 2026: 80–250 €, MTB 150–600 €, e-bike geralmente a partir de 700 €. Antes de pagar, verifique o número de série do quadro, o desgaste da corrente, os travões, as folgas e a origem: fatura, fotografias, histórico de propriedade. O capacete para uma bicicleta normal não é obrigatório por lei, mas as luzes e os refletores em período nocturno são obrigatórios pelo Código da Estrada.',
  tags: ['bicicleta', 'olx', 'vinted', 'furtos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-search',
      title: 'Onde procurar e como ler anúncios',
      content: [
        { kind: 'paragraph', text: 'OLX.pt é a maior plataforma de classificados em Portugal: tem mais bicicletas, mas também mais lixo, revendedores e anúncios suspeitos. O Custojusto é parecido com o OLX; por vezes há anúncios antigos de particulares. A Vinted é prática para bicicletas dobráveis, de criança e urbanas baratas, mas há menos detalhes técnicos e é mais difícil inspeccionar antes da compra.' },
        { kind: 'paragraph', text: 'Para bicicletas de estrada caras, gravel, MTB e e-bike, veja também lojas especializadas e plataformas de revenda: Bici Used, bike shops locais, grupos de Facebook por cidade. Uma loja é mais cara, mas muitas vezes dá fatura, diagnóstico básico e, por vezes, uma garantia curta.' },
        { kind: 'checklist', items: [
          'Pesquise por palavras: bicicleta, bike, BTT, estrada, gravel, elétrica, dobrável, criança',
          'Use filtro por zona: Lisboa, Porto, Braga, Coimbra, Algarve — enviar uma bicicleta costuma ser pouco prático',
          'Compare o preço com a Decathlon, Sport Zone e modelos novos: se a diferença for inferior a 25–30%, usado nem sempre compensa',
          'Um Trek, Specialized, Cube, Scott, Canyon ou Cannondale demasiado barato é motivo para verificar com especial rigor',
          'Anúncio sem fotografias do número de série, cassete, corrente, travões e zona da direção — peça fotografias adicionais',
          'A frase “não sei o tamanho” numa bicicleta cara muitas vezes significa revendedor ou vendedor sem histórico de propriedade',
          'Se o vendedor apressar a decisão, pedir sinal/adiantamento antecipado ou enviar uma ligação para um “estafeta OLX” fora do site — não pague'
        ] }
      ]
    },
    {
      id: 'reputation-and-scam-check',
      title: 'Reputação do vendedor e esquemas típicos',
      content: [
        { kind: 'paragraph', text: 'No OLX e no Custojusto, a reputação é mais fraca do que em marketplaces com escrow: o perfil pode ser novo e as avaliações limitadas. Por isso, o que conta não é a “estrelinha”, mas o comportamento do vendedor: disponibilidade para mostrar a bicicleta, fornecer o número de série, explicar a origem, encontrar-se num local seguro e não exigir pré-pagamento.' },
        { kind: 'checklist', items: [
          'Verifique a data de registo do perfil e os outros anúncios do vendedor',
          'Peça uma fotografia da bicicleta ao lado de um papel com a data de hoje ou o seu nome',
          'Peça o número de série do quadro antes do encontro, mas não publique o seu número em acesso aberto depois da compra',
          'Pergunte: onde foi comprada, quando teve manutenção, porque está à venda, se há fatura/recibo',
          'Para e-bike, peça fotografias do carregador, das chaves da bateria, do ecrã com quilometragem e erros',
          'Não abra ligações para “OLX pagamento”, “transportadora”, “seguro comprador”, enviadas por WhatsApp/SMS',
          'MB WAY só é seguro se você souber exactamente o que está a fazer: não comunique códigos, PIN, dados do cartão',
          'Na Vinted, use o pagamento e o chat dentro da aplicação; ao passar para WhatsApp, a protecção do comprador praticamente desaparece',
          'Encontre-se de dia junto ao metro, centro comercial, bike shop ou perto da polícia; não numa entrada de prédio nem à noite'
        ] },
        { kind: 'warning', text: 'Em Portugal, as bicicletas são frequentemente furtadas de garagens, arrecadações, entradas de prédio e da rua. Se o vendedor não consegue explicar a origem de uma bicicleta cara, o preço está 50%+ abaixo do mercado, o cadeado foi “perdido” e não há carregador/chaves — é melhor desistir.' }
      ]
    },
    {
      id: 'serial-number',
      title: 'Número de série e verificação da origem',
      content: [
        { kind: 'paragraph', text: 'As bicicletas normais em Portugal não têm registo estatal obrigatório como um automóvel. Por isso, o número de série do quadro é a sua principal referência: com ele pode procurar anúncios de furto, confirmar a propriedade junto da seguradora e apresentar queixa na PSP/GNR se a bicicleta lhe for furtada.' },
        { kind: 'checklist', items: [
          'Procure o número na parte inferior do movimento pedaleiro, no tubo da direção, no dropout traseiro ou debaixo da bateria da e-bike',
          'Compare o número no quadro com a fatura, livro de garantia, fotografia da compra ou documentos de assistência',
          'Verifique o número e o modelo no Google, grupos de Facebook, Bike Index e publicações locais de bicicletas furtadas',
          'Inspeccione o local do número: não deve estar limado, coberto por uma camada grossa de tinta, adulterado ou tapado por um autocolante',
          'Fotografe o número e a vista geral da bicicleta; não fotografe o vendedor sem consentimento',
          'Guarde a conversa, o anúncio, o telefone, o NIF/nome do recibo, se o vendedor aceitar fornecê-lo',
          'Depois da compra, tire as suas próprias fotografias do número, quadro e componentes, e guarde-as na cloud'
        ] },
        { kind: 'paragraph', text: 'Para uma compra cara, peça um recibo de compra e venda simples: data, preço, nome do vendedor, documento/NIF se as partes quiserem, marca, modelo, cor, serial number, assinaturas. Não é um acto notarial, mas é muito melhor do que dinheiro sem rasto.' }
      ]
    },
    {
      id: 'technical-check',
      title: 'Inspecção técnica em 10–15 minutos',
      content: [
        { kind: 'paragraph', text: 'Não compre uma bicicleta sem um pequeno test-ride. Mesmo uma bicicleta bonita pode precisar de 100–300 € em reparações. Se não percebe do assunto, combine encontrar-se numa oficina de bicicletas e pagar 10–20 € por uma inspecção rápida — é mais barato do que substituir a transmissão depois da compra.' },
        { kind: 'checklist', items: [
          'Tamanho do quadro: deve conseguir ficar em pé por cima do quadro com segurança e não esticar-se até ao guiador como se estivesse em espargata',
          'Quadro e forqueta: fissuras, amolgadelas, sinais de queda, rodas desalinhadas — sinal de alerta',
          'Corrente: verifique com chain checker; desgaste de 0,75% já é motivo para negociar, 1,0% muitas vezes implica cassete e pratos',
          'Mudanças: todas as mudanças devem entrar sem ruído de trituração, saltos ou passagem espontânea',
          'Travões: a manete não deve afundar até ao guiador; o disco não deve roçar muito nem estar empenado',
          'Rodas: levante e rode — roda empenada, oscilação, estalidos nos cubos e folga significam reparação',
          'Direção e movimento pedaleiro: aperte o travão e abane a bicicleta; cliques e folgas são motivo para baixar o preço',
          'Pneus: fissuras causadas pelo sol em Portugal são frequentes; um par de pneus novos pode facilmente custar 30–80 €',
          'E-bike: a bateria deve carregar, não deve abanar, as chaves devem servir e o motor não deve apresentar erros'
        ] },
        { kind: 'warning', text: 'Não compre uma e-bike sem carregador e chaves da bateria. “Depois compro carregador” é quase sempre uma má ideia: a bateria original e a electrónica podem custar centenas de euros, e a origem da bicicleta será difícil de provar.' }
      ]
    },
    {
      id: 'law-and-safety',
      title: 'Lei, luzes, capacete e segurança',
      content: [
        { kind: 'paragraph', text: 'Segundo o Código da Estrada, uma bicicleta é um velocípede. Para uma bicicleta normal, o capacete em Portugal não é uma obrigação geral, mas é fortemente recomendado, sobretudo em cidade, em estradas EN e para crianças. São obrigatórios o cumprimento das regras de trânsito, travões funcionais e, em período nocturno e com má visibilidade, luz dianteira/traseira e elementos refletores.' },
        { kind: 'checklist', items: [
          'Luz dianteira branca ou amarela — use à noite, em túneis, chuva/nevoeiro',
          'Luz traseira vermelha e refletor — must-have para cidade e subúrbios',
          'Campainha ou outro sinal sonoro é útil em cidade, mesmo que o vendedor a tenha retirado',
          'Compre capacete novo se não conhece o histórico de quedas do antigo',
          'Um bom U-lock ou folding lock é mais importante do que um cabo barato: em Lisboa e no Porto, cabos são cortados depressa',
          'Não deixe a bicicleta à noite na rua, mesmo com dois cadeados',
          'Logo após a compra, substitua o cadeado de código/antigo, se tiver vindo “incluído”',
          'Para transporte na Comboios de Portugal e no metro, verifique as regras do operador concreto e as horas de ponta'
        ] },
        { kind: 'paragraph', text: 'Se a bicicleta for furtada, apresente queixa na PSP ou GNR e indique serial number, fotografias, local, data, características específicas e documentos de compra. Sem número de série, a probabilidade de recuperar a bicicleta cai drasticamente.' }
      ]
    },
    {
      id: 'payment-and-handover',
      title: 'Pagamento e entrega',
      content: [
        { kind: 'paragraph', text: 'O cenário mais seguro para uma compra entre particulares: encontro presencial, inspecção, test-ride, verificação do número de série, recibo curto e só depois pagamento. Para valores até 200–300 €, muitas vezes usa-se dinheiro; para bicicletas caras, uma transferência bancária ou MB WAY no local é mais prático, mas apenas depois da inspecção.' },
        { kind: 'checklist', items: [
          'Guarde uma captura de ecrã do anúncio antes de ser apagado',
          'Verifique se estão incluídos todos os acessórios prometidos: carregador, chaves, pedais, guarda-lamas, porta-bagagens',
          'Tire uma fotografia da bicicleta depois da entrega',
          'Peça ao vendedor para escrever no chat “recebi X € pela bicicleta marca/modelo/serial”',
          'Não envie sinal antecipadamente, excepto uma quantia simbólica a uma loja conhecida com invoice normal',
          'Se comprar numa loja, exija fatura com NIF ou consumidor final e confirme a garantia',
          'Depois da compra, ajuste imediatamente o selim, a pressão dos pneus, os travões e compre luzes, se não existirem'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Bicicleta urbana usada', amountEURMin: 80, amountEURMax: 250, note: 'Intervalo funcional para OLX/Custojusto em 2026; abaixo disso, muitas vezes precisa de reparações' },
    { label: 'MTB / BTT usada', amountEURMin: 150, amountEURMax: 600, note: 'Depende muito da forqueta, transmissão e estado das rodas' },
    { label: 'E-bike usada', amountEURMin: 700, amountEURMax: 2000, note: 'Abaixo de 700 €, verifique bateria, carregador, chaves e origem com especial atenção' },
    { label: 'Manutenção básica em oficina de bicicletas', amountEURMin: 35, amountEURMax: 90, note: 'Afinação de travões/mudanças sem peças caras' },
    { label: 'Bom cadeado U-lock/folding', amountEURMin: 30, amountEURMax: 80, note: 'Não poupe: um cabo barato serve apenas como segundo cadeado' },
    { label: 'Luzes e refletores', amountEURMin: 15, amountEURMax: 60, note: 'Necessários para circular à noite e com má visibilidade' }
  ],
  sources: [
    { title: 'OLX Portugal — secção de bicicletas e anúncios particulares', url: 'https://www.olx.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — regras para velocípedes, iluminação e circulação', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34402975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Custojusto Portugal — plataforma de anúncios particulares', url: 'https://www.custojusto.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Vinted Portugal — regras de compra e protecção dentro da plataforma', url: 'https://www.vinted.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
