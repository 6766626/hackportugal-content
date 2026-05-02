export default {
  editorialVoice: 'hackportugal',
  id: 'carro-eletrico-vs-gasolina-2026',
  categoryId: 'auto_ownership',
  title: 'Comprar um elétrico vs gasolina em 2026: custo total de propriedade',
  tldr: 'Em Portugal, em 2026, um carro elétrico é normalmente mais caro à partida: 30 000–50 000 € contra 20 000–35 000 € por um compacto/SUV a gasolina. Mas um BEV não paga ISV nem IUC, em casa circula por 3–5 €/100 km e nos carregamentos públicos fica, na maioria dos casos, em 5–9 €/100 km. A gasolina, com 1,70–1,85 €/l, dá 8–12 €/100 km mais IUC de 120–300 €/ano. O voucher do Fundo Ambiental até 4 000 € pode mudar as contas, mas depende do orçamento e das condições do aviso.',
  tags: ['carro elétrico', 'iuc', 'carregamento', 'tco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'baseline',
      title: '1. Compare não o preço no stand, mas o TCO a 5 anos',
      content: [
        { kind: 'paragraph', text: 'Total cost of ownership é a compra menos a futura revenda, mais energia, impostos, seguro, manutenção, pneus, estacionamento e infraestrutura de carregamento. Em Portugal, a principal diferença em 2026 é esta: o carro elétrico é mais caro na compra, mas mais barato por cada quilómetro e quase sempre mais barato em impostos.' },
        { kind: 'checklist', items: [
          'BEV novo: normalmente 30 000–50 000 €; os modelos citadinos por vezes ficam abaixo, os SUV familiares ficam frequentemente nos 40 000 €+.',
          'Automóvel novo a gasolina: normalmente 20 000–35 000 € por um compacto/crossover do segmento generalista.',
          'BEV: ISV = 0 € e IUC = 0 € para 100% electric passenger car.',
          'Gasolina: o ISV já está incluído no preço do carro novo; o IUC é pago anualmente e depende da cilindrada, CO₂ e ano de matrícula.',
          'Eletricidade em casa: cerca de 3–5 €/100 km com consumo de 16–20 kWh/100 km e tarifa doméstica de 0,18–0,25 €/kWh.',
          'Carregamento público Mobi.E: normalmente 1,5–2 vezes mais caro do que em casa devido a CEME + OPC + energia + IVA; conte com 5–9 €/100 km.',
          'Gasolina: 8–12 €/100 km com 5,5–7 l/100 km e preço de 1,70–1,85 €/l.',
          'O gasóleo pode ser mais barato do que a gasolina em autoestrada, mas é mais caro em riscos: DPF, AdBlue, deslocações urbanas curtas e futuras restrições.'
        ] }
      ]
    },
    {
      id: 'five-year-example',
      title: '2. Exemplo de cálculo a 5 anos e 15 000 km/ano',
      content: [
        { kind: 'paragraph', text: 'Cenário base: 75 000 km em 5 anos. Um carro elétrico por 38 000 € contra um carro a gasolina por 28 000 €. Sem considerar crédito e revenda, o carro a gasolina é 10 000 € mais barato à partida, mas as suas despesas anuais são mais elevadas.' },
        { kind: 'checklist', items: [
          'BEV 70% em casa + 30% em público: energia média cerca de 4,5–6 €/100 km = 3 375–4 500 € por 75 000 km.',
          'BEV apenas em carregamentos públicos: 5–9 €/100 km = 3 750–6 750 € por 75 000 km.',
          'Gasolina: 8–12 €/100 km = 6 000–9 000 € por 75 000 km.',
          'IUC BEV: 0 € em 5 anos.',
          'IUC de um compacto a gasolina: indicativamente 120–300 €/ano = 600–1 500 € em 5 anos.',
          'Manutenção BEV: muitas vezes 150–300 €/ano = 750–1 500 € em 5 anos.',
          'Manutenção a gasolina: muitas vezes 250–600 €/ano = 1 250–3 000 € em 5 anos.',
          'A diferença nas despesas operacionais em 5 anos é normalmente de 3 000–7 000 € a favor do BEV, mais ainda se conduzir muito e carregar em casa.'
        ] },
        { kind: 'paragraph', text: 'Conclusão: se o carro elétrico custa mais 10 000 €, se você faz 10 000 km/ano e carrega sobretudo em postos públicos, a amortização pode não acontecer. Se faz 20 000 km/ano, carrega em casa e recebeu 4 000 € do Fundo Ambiental, o BEV torna-se frequentemente mais barato em 4–6 anos.' }
      ]
    },
    {
      id: 'charging-reality',
      title: '3. Carregamento: a casa decide a economia ⚡',
      content: [
        { kind: 'paragraph', text: 'O modelo de propriedade mais barato é um apartamento/casa com tarifa noturna e possibilidade de instalar uma wallbox ou uma tomada dedicada comum. Em Portugal, isto é especialmente importante: a rede pública Mobi.E é conveniente, mas a tarifa é pouco transparente para iniciantes, porque o valor final resulta de várias componentes.' },
        { kind: 'checklist', items: [
          'Em casa: verifique a potência contratada; para uma wallbox, muitas vezes são necessários 6,9 kVA ou mais.',
          'Num condomínio, a instalação é possível, mas é necessário notificar a administração e cumprir as regras técnicas; por vezes é necessário um contador separado.',
          'Wallbox com instalação: normalmente 600–1 500 €, mais caro se houver uma linha longa desde o quadro elétrico ou modernização da instalação elétrica.',
          'Uma tomada comum serve para baixas quilometragens, mas é mais lenta e exige cablagem em bom estado.',
          'Em público: é necessário um contrato CEME ou uma aplicação/cartão; o preço final depende do operador, da potência, do tempo e da tarifa.',
          'Os carregamentos rápidos DC são convenientes em autoestrada, mas são os mais caros e aceleram o desgaste da bateria quando usados constantemente.',
          'Nas autoestradas A1/A2/A8/A22, planeie os carregamentos com antecedência: no verão e nos feriados, as filas são reais.',
          'Se não tiver carregamento em casa ou no trabalho, não assuma 3–5 €/100 km, mas antes algo mais próximo de 6–9 €/100 km.'
        ] },
        { kind: 'warning', text: 'Não compre um BEV calculando apenas o “custo do kWh em casa” se vive num apartamento arrendado sem lugar de estacionamento. Neste cenário, a poupança face à gasolina cai acentuadamente e o incómodo diário aumenta.' }
      ]
    },
    {
      id: 'taxes-incentives',
      title: '4. Impostos e subsídios: onde está o benefício real',
      content: [
        { kind: 'paragraph', text: 'Para particulares, a principal vantagem de um 100% electric é a ausência de ISV na compra e de IUC anual. Na gasolina, o ISV está incluído no preço do automóvel novo, e o IUC chega todos os anos através do Portal das Finanças. Para os híbridos, as regras são mais complexas: os benefícios dependem das emissões, da autonomia elétrica e do tipo de híbrido; não trate um plug-in automaticamente “como um elétrico”.' },
        { kind: 'checklist', items: [
          'BEV passenger car: ISV 0 €.',
          'BEV passenger car: IUC 0 €.',
          'Gasolina: IUC frequentemente de 120–300 €/ano para modelos generalistas, mas pode ser mais elevado em SUV potentes.',
          'O IVA não é recuperável para particulares; para empresas e ENI podem existir regras específicas, limites e tributação autónoma.',
          'Fundo Ambiental: em 2026, a referência para particulares é um apoio até 4 000 € na compra de um BEV, cumpridas as condições do programa.',
          'O subsídio não é automático: é necessário haver um aviso aberto, orçamento, documentos da compra e cumprimento do limite de preço do automóvel.',
          'A compra antes da abertura do aviso ou fora das suas condições pode não dar direito ao pagamento.',
          'O dinheiro do Fundo Ambiental pode esgotar antes do prazo — considere o voucher um bónus, não um desconto garantido.'
        ] },
        { kind: 'warning', text: 'Verifique as condições do Fundo Ambiental especificamente no aviso 2026: preço máximo do automóvel, exigência de abate de veículo antigo, data da fatura e procedimento de candidatura podem mudar de ano para ano.' }
      ]
    },
    {
      id: 'depreciation-insurance',
      title: '5. Não se esqueça da revenda, do seguro e dos riscos',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o elemento mais incerto do TCO é o valor residual. Os carros elétricos desvalorizam mais depressa com a chegada de novas baterias e guerras de preços entre marcas, mas modelos populares com bateria em bom estado e garantia vendem-se bem. Nos carros a gasolina, o mercado é mais familiar, mas as futuras restrições ambientais e o ciclo de combustível caro pressionam o valor.' },
        { kind: 'checklist', items: [
          'Verifique a garantia da bateria: muitas vezes 8 anos ou 160 000 km, mas as condições de degradação variam.',
          'Evite BEV sem histórico claro de carregamentos, acidentes e estado da bateria.',
          'O seguro de um BEV pode ser 5–20% mais caro devido ao preço das peças de carroçaria e da bateria.',
          'Os pneus dos BEV desgastam-se mais depressa devido ao peso e ao binário; preveja um conjunto a cada 30 000–50 000 km.',
          'Um automóvel a gasolina é mais simples de reparar em qualquer oficina, mas óleo, velas, correias, embraiagem e escape continuam a ser despesas regulares.',
          'Para viagens Lisboa–Porto–Algarve, o BEV já é prático, mas no inverno/a 120 km/h a autonomia diminui.',
          'Se viaja frequentemente para Espanha ou França, verifique o roaming dos cartões de carregamento e os preços por kWh/min.',
          'Para arrendatários, há um risco: o senhorio/condomínio pode atrasar a aprovação do carregamento.'
        ] }
      ]
    },
    {
      id: 'decision-rule',
      title: '6. Regra rápida de escolha',
      content: [
        { kind: 'paragraph', text: 'O carro elétrico é financeiramente mais forte quando você conduz muito, carrega em casa/no trabalho e compra um modelo dentro do limite do Fundo Ambiental. A gasolina é mais racional se o orçamento de compra for rígido, as quilometragens forem baixas, não houver carregamento ou o carro for uma simples “primeira compra portuguesa” por 1–2 anos.' },
        { kind: 'checklist', items: [
          'Escolha BEV se fizer 15 000–25 000 km/ano e tiver carregamento em casa.',
          'Escolha BEV se a diferença de preço após o voucher do Fundo Ambiental for ≤ 5 000–7 000 €.',
          'Escolha BEV se viver numa moradia ou tiver garagem/box com eletricidade.',
          'Escolha gasolina se fizer < 8 000–10 000 km/ano e não houver carregamento em casa.',
          'Escolha gasolina se o plano de propriedade for de 1–2 anos e a liquidez de um carro barato for importante.',
          'Não escolha um BEV caro “para poupar” se vai carregar quase sempre apenas em postos DC.',
          'Para um SUV familiar, faça as contas separadamente: a diferença de compra pode ser 15 000 €+, e o combustível nem sempre a compensa.',
          'Para empresa/trabalhador independente, peça ao contabilista para calcular IVA, amortização e tributação autónoma — o resultado pode diferir da propriedade particular.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'BEV novo do segmento generalista', amountEURMin: 30000, amountEURMax: 50000, note: 'Antes de descontos do concessionário e do eventual Fundo Ambiental; os modelos premium são mais caros.' },
    { label: 'Automóvel novo a gasolina', amountEURMin: 20000, amountEURMax: 35000, note: 'Compacto ou crossover do segmento generalista; ISV já incluído no preço.' },
    { label: 'Fundo Ambiental para particular', amountEUR: 4000, note: 'Referência de 2026 para BEV; depende do aviso, do orçamento e do limite de preço.' },
    { label: 'Eletricidade em casa', amountEURMin: 3, amountEURMax: 5, note: 'Valor indicativo por 100 km com 16–20 kWh/100 km.' },
    { label: 'Carregamento público', amountEURMin: 5, amountEURMax: 9, note: 'Valor indicativo por 100 km; depende de CEME, OPC, potência e tempo.' },
    { label: 'Gasolina', amountEURMin: 8, amountEURMax: 12, note: 'Valor indicativo por 100 km com 5,5–7 l/100 km.' },
    { label: 'Wallbox com instalação', amountEURMin: 600, amountEURMax: 1500, note: 'Sem modernização complexa da instalação elétrica ou aumento de potência.' },
    { label: 'IUC para BEV', amountEUR: 0, note: 'Para 100% electric passenger car.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — incentivos a veículos de emissões nulas', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACAP — mercado automóvel e estatísticas de matrículas em Portugal', url: 'https://www.acap.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária — IUC e ISV no Portal das Finanças', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — informação sobre mobilidade elétrica e carregamento', url: 'https://www.erse.pt/atividade/mobilidade-eletrica/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
