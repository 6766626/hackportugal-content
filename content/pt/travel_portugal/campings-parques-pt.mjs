export default {
  editorialVoice: 'hackportugal',
  id: 'campings-parques-pt',
  categoryId: 'travel_portugal',
  title: 'Campismo em Portugal: Federação Campismo, ACSI, Orbitur',
  tldr: 'Em Portugal, um parque de campismo normal é um parque de campismo licenciado, com duche, electricidade e regras de silêncio. Em 2026, a referência é: lugar para tenda/autocaravana 15–45 € por noite, bungalows e glamping 40–120 €. A FCMP é útil para descontos em clubes e parques de campismo associados, o ACSI CampingCard dá tarifas fortes de época baixa fora de Julho-Agosto, e a Orbitur é uma rede mais cara, mas previsível, junto a praias e cidades. O campismo selvagem e a pernoita em autocaravana são limitados por lei, especialmente em áreas protegidas e na costa.',
  tags: ['campismo', 'orbitur', 'acsi', 'fcmp', 'autocaravana'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'map-options',
      title: '1. Que opções de campismo existem em Portugal',
      content: [
        { kind: 'paragraph', text: 'Um parque de campismo português não é apenas um campo para tendas. Normalmente há recepção, blocos sanitários, duche quente, lavandaria, pontos de electricidade, por vezes piscina, minimercado, restaurante e zonas para autocaravanas.' },
        { kind: 'checklist', items: ['Parque de campismo municipal — muitas vezes mais barato, mais simples, mais perto de cidades e zonas naturais', 'Parques de campismo privados — preço mais alto, melhor infraestrutura, mais regras de check-in', 'Orbitur — grande rede com localizações de praia e urbanas, muitos bungalows', 'Parceiros ACSI — vantajosos na época baixa com o CampingCard ACSI', 'FCMP / Federação de Campismo de Portugal — útil para quem viaja com frequência e quer descontos de clube', 'Área de serviço para autocaravanas — zona de serviço para autocaravana, nem sempre um parque de campismo completo', 'Glamping — tendas, pods, mobile homes e bungalows com cama, cozinha ou casa de banho'] }
      ]
    },
    {
      id: 'prices-2026',
      title: '2. Quanto custa uma noite em 2026',
      content: [
        { kind: 'paragraph', text: 'O preço depende da época, da costa, da electricidade, do número de pessoas, do tamanho da parcela e do tipo de alojamento. Em Julho-Agosto, o Algarve, a Costa Vicentina, Peniche, Nazaré, Ericeira e as zonas perto de Lisboa encarecem mais.' },
        { kind: 'checklist', items: ['Tenda + 1–2 pessoas: normalmente 15–30 € por noite em parques de campismo simples', 'Autocaravana ou campervan com electricidade: frequentemente 20–45 € por noite', 'Suplemento de electricidade: normalmente incluído na tarifa ou 3–7 € por noite', 'Suplemento por cão: frequentemente 2–6 € por noite, nem sempre é permitido', 'Bungalow / mobile home / glamping: cerca de 40–120 € por noite', 'Época alta: Julho, Agosto, Semana Santa, fins-de-semana prolongados e festivais', 'Época baixa: Novembro-Março, excepto feriados; alguns parques de campismo fecham'] },
        { kind: 'warning', text: 'Veja sempre o preço final antes de pagar: em Portugal, o parque de campismo pode cobrar separadamente a pessoa, a tenda, o carro, a electricidade, a taxa turística do município e o animal.' }
      ]
    },
    {
      id: 'fcmp',
      title: '3. FCMP: quando é necessária a Federação de Campismo de Portugal',
      content: [
        { kind: 'paragraph', text: 'A Federação de Campismo e Montanhismo de Portugal é a federação de campismo de clube e actividades outdoor. Para um turista comum, a filiação não é obrigatória: pode entrar na maioria dos parques de campismo sem cartão FCMP. Mas, se vive em Portugal e viaja com frequência, o cartão através de um clube pode compensar com descontos e acesso à rede federativa.' },
        { kind: 'checklist', items: ['Verifique em fcmp.pt os clubes filiados e benefícios actuais', 'Confirme se o seu clube emite cartão campista ou uma confirmação equivalente', 'Antes da viagem, telefone para o parque de campismo: o desconto FCMP pode depender da época e da disponibilidade', 'Não conte com desconto em Agosto sem confirmação — a época alta é frequentemente excluída', 'Para viagens em família, pergunte se o desconto se aplica a todas as pessoas ou apenas ao titular do cartão', 'Guarde o cartão físico ou digital: a recepção pode pedi-lo no check-in'] },
        { kind: 'paragraph', text: 'A FCMP é especialmente útil para quem viaja por parques de campismo municipais e de clube dentro do país, e não apenas para parques premium de praia.' }
      ]
    },
    {
      id: 'acsi-orbitur',
      title: '4. ACSI e Orbitur: dois cenários diferentes',
      content: [
        { kind: 'substeps', items: [
          { id: 'acsi', title: 'ACSI CampingCard — poupança fora de época', content: [
            { kind: 'paragraph', text: 'O ACSI CampingCard é um cartão internacional de desconto para parques de campismo parceiros. Em Portugal, é especialmente útil na Primavera, no Outono e no Inverno: muitos parques oferecem uma tarifa fixa reduzida fora da época alta, e por vezes a poupança chega a cerca de 50% face ao preço normal.' },
            { kind: 'checklist', items: ['Verifique as datas de validade do ACSI para cada parque de campismo — não é o ano inteiro', 'Procure a indicação sobre se estão incluídas 2 pessoas, pitch, carro, duche e electricidade', 'Compare com o site directo do parque de campismo: por vezes a promoção do próprio parque é mais barata', 'Em Julho-Agosto, o ACSI normalmente não funciona ou é quase inútil', 'Para uma road trip por Portugal e Espanha, o cartão costuma compensar em poucas noites'] }
          ]},
          { id: 'orbitur', title: 'Orbitur — mais cara, mas previsível', content: [
            { kind: 'paragraph', text: 'A Orbitur é uma grande rede portuguesa de parques de campismo e bungalows. É escolhida pelas localizações junto a praias, pela reserva simples, pela infraestrutura, pelas piscinas e pelas opções sem tenda própria: bungalows, mobile homes, caravans, glamping.' },
            { kind: 'checklist', items: ['Adequada para uma primeira viagem com crianças ou sem experiência de campismo', 'Boa para localizações de praia: Algarve, Costa da Caparica, Peniche, Vagueira, Angeiras e outras', 'Preço superior ao dos parques de campismo municipais, especialmente no Verão', 'É melhor reservar bungalows com antecedência para Julho-Agosto', 'Leia as regras sobre roupa de cama, limpeza, caução e animais de estimação'] }
          ]}
        ]}
      ]
    },
    {
      id: 'rules-and-booking',
      title: '5. Regras, reservas e pernoitas selvagens',
      content: [
        { kind: 'paragraph', text: 'Na época alta, reserve com antecedência, especialmente se precisar de bungalow, electricidade, lugar para uma autocaravana grande ou alojamento com cão. Na época baixa, é melhor verificar primeiro se o parque está aberto: muitos parques de campismo costeiros fecham parte da infraestrutura.' },
        { kind: 'checklist', items: ['No check-in, normalmente pedem um documento: passaporte, Cartão de Cidadão ou autorização de residência', 'O check-in é frequentemente até às 19:00–22:00; combine a chegada tardia com antecedência', 'O silêncio é normalmente depois das 22:00 ou 23:00', 'Churrasqueira e fogo aberto são frequentemente proibidos no Verão devido ao risco de incêndio rural', 'Para autocaravana, confirme a existência de grey water / chemical toilet disposal', 'Não deixe objectos de valor na tenda ou visíveis no carro', 'Em zonas costeiras e naturais, use apenas parques de estacionamento e parques de campismo autorizados'] },
        { kind: 'warning', text: 'O campismo selvagem e a pernoita em autocaravana não são livres “em qualquer sítio”. Segundo o Código da Estrada art. 50-A, a pernoita de autocaravanas é proibida em áreas protegidas, Natura 2000 e zonas abrangidas por coastal planning, excepto em locais autorizados. Nos restantes locais, aplica-se o limite de até 48 horas no mesmo município, salvo se as regras locais forem mais restritivas.' }
      ]
    }
  ],
  costs: [
    { label: 'Lugar para tenda / pitch', amountEURMin: 15, amountEURMax: 30, note: 'Referência por noite para 1–2 pessoas num parque de campismo normal; no Verão, junto ao mar, é mais caro.' },
    { label: 'Autocaravana com electricidade', amountEURMin: 20, amountEURMax: 45, note: 'Por noite; depende da época, do tamanho do lugar e do serviço incluído.' },
    { label: 'Bungalow / glamping / mobile home', amountEURMin: 40, amountEURMax: 120, note: 'Por noite; Julho-Agosto e localizações de praia podem ser mais caros.' },
    { label: 'Electricidade', amountEURMin: 3, amountEURMax: 7, note: 'Se não estiver incluída na tarifa pitch.' },
    { label: 'Cão', amountEURMin: 2, amountEURMax: 6, note: 'Nem todos os parques de campismo aceitam animais; para bungalows, as regras são mais rigorosas.' }
  ],
  sources: [
    { title: 'Federação de Campismo e Montanhismo de Portugal — clubes, cartões e informação para campismo', url: 'https://www.fcmp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Orbitur — rede de parques de campismo, bungalows e glamping em Portugal', url: 'https://www.orbitur.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACSI CampingCard — parques de campismo parceiros e tarifas off-season', url: 'https://www.campingcard.co.uk', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada art. 50-A — regras de pernoita e aparcamento de autocaravanas', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34455575', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
