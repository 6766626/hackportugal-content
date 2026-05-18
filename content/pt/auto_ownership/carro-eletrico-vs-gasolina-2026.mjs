export default {
  editorialVoice: 'hackportugal',
  id: 'carro-eletrico-vs-gasolina-2026',
  categoryId: 'auto_ownership',
  title: 'Comprar um carro elétrico vs gasolina em 2026: total cost of ownership',
  tldr: 'Em Portugal, em 2026, um carro elétrico é normalmente mais caro à entrada: 30 000–50 000 € contra 20 000–35 000 € por um compacto/SUV a gasolina. Mas um BEV não paga ISV nem IUC, em casa circula por 3–5 €/100 km, e nos carregamentos públicos — mais frequentemente 5–9 €/100 km. A gasolina a 1,70–1,85 €/l dá 8–12 €/100 km mais IUC de 120–300 €/ano. O voucher do Fundo Ambiental até 4 000 € pode inverter as contas, mas depende do orçamento e das condições do aviso.',
  tags: ['carro elétrico', 'iuc', 'carregamento', 'tco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'baseline',
      title: '1. Compare não o preço no stand, mas o TCO a 5 anos',
      content: [
        { kind: 'paragraph', text: 'Total cost of ownership é a compra menos a revenda futura, mais energia, impostos, seguro, manutenção, pneus, estacionamento e infraestrutura de carregamento.\n\nEm Portugal, a principal diferença em 2026: o carro elétrico é mais caro na compra, mas mais barato por cada quilómetro e quase sempre mais barato em impostos.' },
        { kind: 'checklist', items: [
          'BEV novo: normalmente 30 000–50 000 €; modelos urbanos por vezes abaixo, SUV familiares muitas vezes 40 000 €+.',
          'Automóvel novo a gasolina: normalmente 20 000–35 000 € por um compacto/crossover do segmento generalista.',
          'BEV: ISV = 0 € e IUC = 0 € para 100% electric passenger car.',
          'Gasolina: o ISV já está incluído no preço do automóvel novo; o IUC é pago anualmente e depende da cilindrada, CO₂ e ano de matrícula.',
          'Eletricidade em casa: cerca de 3–5 €/100 km com consumo de 16–20 kWh/100 km e tarifa doméstica de 0,18–0,25 €/kWh.',
          'Carregamento público Mobi.E: normalmente 1,5–2 vezes mais caro do que em casa devido a CEME + OPC + energia + IVA; estime 5–9 €/100 km.',
          'Gasolina: 8–12 €/100 km com 5,5–7 l/100 km e preço de 1,70–1,85 €/l.',
          'O diesel pode ser mais barato do que a gasolina em autoestrada, mas mais caro em riscos: DPF, AdBlue, deslocações urbanas curtas e futuras restrições.'
        ] }
      ]
    },
    {
      id: 'five-year-example',
      title: '2. Exemplo de cálculo a 5 anos e 15 000 km/ano',
      content: [
        { kind: 'paragraph', text: 'Cenário de base: 75 000 km em 5 anos. Carro elétrico por 38 000 € contra automóvel a gasolina por 28 000 €. Sem considerar crédito e revenda, o carro a gasolina é 10 000 € mais barato à entrada, mas as suas despesas anuais são mais elevadas.' },
        { kind: 'checklist', items: [
          'BEV em casa 70% + público 30%: energia média de cerca de 4,5–6 €/100 km = 3 375–4 500 € por 75 000 km.',
          'BEV só em carregamentos públicos: 5–9 €/100 km = 3 750–6 750 € por 75 000 km.',
          'Gasolina: 8–12 €/100 km = 6 000–9 000 € por 75 000 km.',
          'IUC BEV: 0 € em 5 anos.',
          'IUC de um compacto a gasolina: indicativamente 120–300 €/ano = 600–1 500 € em 5 anos.',
          'Manutenção BEV: muitas vezes 150–300 €/ano = 750–1 500 € em 5 anos.',
          'Manutenção de gasolina: muitas vezes 250–600 €/ano = 1 250–3 000 € em 5 anos.',
          'A diferença de despesas operacionais em 5 anos é normalmente 3 000–7 000 € a favor do BEV, mais — se conduzir muito e carregar em casa.'
        ] },
        { kind: 'paragraph', text: 'Conclusão: se o carro elétrico custar mais 10 000 €, você fizer 10 000 km/ano e carregar sobretudo em postos públicos, a amortização pode não acontecer. Se fizer 20 000 km/ano, carregar em casa e tiver obtido 4 000 € do Fundo Ambiental, o BEV torna-se frequentemente mais barato em 4–6 anos.' }
      ]
    },
    {
      id: 'charging-reality',
      title: '3. Carregamento: a casa decide a economia ⚡',
      content: [
        { kind: 'paragraph', text: 'O modelo de propriedade mais barato é apartamento/casa com tarifa noturna e possibilidade de instalar uma wallbox ou uma tomada dedicada normal.\n\nEm Portugal isto é especialmente importante: a rede pública Mobi.E é conveniente, mas a tarifa é pouco transparente para principiantes, porque a fatura resulta de várias partes.' },
        { kind: 'checklist', items: [
          'Em casa: verifique a potência contratada; para uma wallbox são frequentemente necessários 6,9 kVA ou mais.',
          'Em condomínio, a instalação é possível, mas é necessário notificar a administração e cumprir as regras técnicas; por vezes é exigido um contador separado.',
          'Wallbox com instalação: normalmente 600–1 500 €, mais caro se houver uma linha longa desde o quadro ou modernização da instalação elétrica.',
          'Uma tomada normal serve para baixas quilometragens, mas é mais lenta e exige cablagem em bom estado.',
          'Em público: é necessário um contrato CEME ou uma aplicação/cartão; o preço final depende do operador, potência, tempo e tarifa.',
          'Carregamentos rápidos DC são convenientes em autoestrada, mas os mais caros e aceleram o desgaste da bateria quando usados constantemente.',
          'Nas autoestradas A1/A2/A8/A22 planeie os carregamentos com antecedência: no verão e em feriados, as filas são reais.',
          'Se não tiver carregamento em casa ou no trabalho, considere não 3–5 €/100 km, mas mais perto de 6–9 €/100 km.'
        ] },
        { kind: 'warning', text: 'Não compre um BEV calculando apenas o “custo do kWh em casa” se vive num apartamento arrendado sem lugar de estacionamento. Neste cenário, a poupança face à gasolina cai acentuadamente e o incómodo no dia a dia aumenta.' }
      ]
    },
    {
      id: 'taxes-incentives',
      title: '4. Impostos e subsídios: onde está o benefício real',
      content: [
        { kind: 'paragraph', text: 'Para particulares, a principal vantagem de um 100% electric é a ausência de ISV na compra e de IUC anual. Na gasolina, o ISV está incluído no preço do automóvel novo, e o IUC chega todos os anos através do Portal das Finanças. Para híbridos, as regras são mais complexas: os benefícios dependem das emissões, da autonomia elétrica e do tipo de híbrido; não considere automaticamente um plug-in “como um elétrico”.' },
        { kind: 'checklist', items: [
          'BEV passenger car: ISV 0 €.',
          'BEV passenger car: IUC 0 €.',
          'Gasolina: IUC frequentemente 120–300 €/ano para modelos generalistas, mas pode ser mais alto em SUV potentes.',
          'O IVA não é reembolsado a particulares; para empresas e ENI podem aplicar-se regras, limites e tributação autónoma específicos.',
          'Fundo Ambiental: em 2026, a referência para uma pessoa singular é apoio até 4 000 € na compra de BEV, cumpridas as condições do programa.',
          'O subsídio não é automático: é preciso haver aviso aberto, orçamento, documentos da compra e cumprimento do limite de preço do automóvel.',
          'A compra antes da abertura/fora das condições do aviso pode não dar direito ao pagamento.',
          'O dinheiro do Fundo Ambiental pode esgotar-se antes do prazo — conte o voucher como bónus, não como desconto garantido.'
        ] },
        { kind: 'warning', text: 'Verifique as condições do Fundo Ambiental precisamente no aviso 2026: preço máximo do automóvel, exigência de abate de veículo antigo, data da fatura e procedimento de candidatura podem mudar de ano para ano.' }
      ]
    },
    {
      id: 'depreciation-insurance',
      title: '5. Não se esqueça da revenda, do seguro e dos riscos',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o elemento mais incerto do TCO é o valor residual. Os carros elétricos desvalorizam mais rapidamente com a chegada de novas baterias e guerras de preços entre marcas, mas modelos populares com boa bateria e garantia vendem-se bem. Nos automóveis a gasolina, o mercado é mais familiar, mas futuras restrições ambientais e o ciclo de combustível caro pressionam o valor.' },
        { kind: 'checklist', items: [
          'Verifique a garantia da bateria: frequentemente 8 anos ou 160 000 km, mas as condições de degradação variam.',
          'Evite BEV sem histórico claro de carregamentos, acidentes e estado da bateria.',
          'O seguro de um BEV pode ser 5–20% mais caro devido ao preço das peças de carroçaria e da bateria.',
          'Os pneus num BEV desgastam-se mais depressa devido ao peso e ao binário; preveja um conjunto a cada 30 000–50 000 km.',
          'Um automóvel a gasolina é mais simples de reparar em qualquer oficina, mas óleo, velas, correias, embraiagem e escape continuam a ser despesas regulares.',
          'Para viagens Lisboa–Porto–Algarve, um BEV já é prático, mas no inverno/a 120 km/h a autonomia desce.',
          'Se viajar frequentemente para Espanha ou França, verifique o roaming dos cartões de carregamento e os preços por kWh/min.',
          'Para arrendatários, há um risco: o senhorio/condomínio pode atrasar a aprovação do carregamento.'
        ] }
      ]
    },
    {
      id: 'decision-rule',
      title: '6. Regra rápida de escolha',
      content: [
        { kind: 'paragraph',: 'O carro elétrico é financeiramente mais forte quando conduz muito, carrega em casa/no trabalho e compra um modelo dentro do limite do Fundo Ambiental. A gasolina é mais racional se o orçamento de compra for rígido, as quilometragens forem baixas, não houver carregamento ou o carro for necessário como uma simples “primeira compra portuguesa” por 1–2 anos.' },
        { kind: 'checklist', items: [
          'Escolha um BEV se fizer 15 000–25 000 km/ano e tiver carregamento em casa.',
          'Escolha um BEV se a diferença de preço depois do voucher do Fundo Ambiental for ≤ 5 000–7 000 €.',
          'Escolha um BEV se viver numa casa ou tiver garagem/box com eletricidade.',
          'Escolha gasolina se fizer < 8 000–10 000 km/ano e não tiver carregamento em casa.',
          'Escolha gasolina se o plano de propriedade for 1–2 anos e a liquidez de um carro barato for importante.',
          'Não escolha um BEV caro “pela poupança” se for carregar quase só em postos DC.',
          'Para um SUV familiar, faça as contas separadamente: a diferença de compra pode ser 15 000 €+, e o combustível nem sempre a compensa.',
          'Para empresa/trabalhador independente, peça ao contabilista para calcular IVA,ização e tributação autónoma — o resultado pode diferir da propriedade particular.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'BEV novo do segmento generalista', amountEURMin: 30000, amountEURMax: 50000, note: 'Antes de descontos do concessionário e de eventual Fundo Ambiental; modelos premium são mais caros.' },
    { label: 'Automóvel novo a gasolina', amountEURMin: 20000, amountEURMax: 35000, note: 'Compacto ou crossover do segmento generalista; ISV já incluído no preço.' },
    { label: 'Fundo Ambiental para pessoa singular', amountEUR: 4000, note: 'Referência 2026 para BEV; depende do aviso, orçamento e limite de preço.' },
    { label: 'Eletricidade em casa', amountEURMin: 3, amountEURMax: 5, note: 'Estimativa por 100 km com 16–20 kWh/100 km.' },
    { label: 'Carregamento público', amountEURMin: 5, amountEURMax: 9, note: 'Estimativa por 100 km; depende de CEME, OPC, potência e tempo.' },
    { label: 'Gasolina', amountEURMin: 8, amountEURMax: 12, note: 'Estimativa por 100 km com 5,5–7 l/100 km.' },
    { label: 'Wallbox com instalação', amountEURMin: 600, amountEURMax: 1500, note: 'Sem modernização complexa da instalação elétrica ou aumento de potência.' },
    { label: 'IUC para BEV', amountEUR: 0, note: 'Para 100% electric passenger car.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — incentivos a veículos de emissões nulas', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACAP — mercado automóvel e estatísticas de matrículas em Portugal', url: 'https://www.acap.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária — IUC e ISV no Portal das Finanças', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — Tarifas e Preços Mobilidade Elétrica', url: 'https://www.erse.pt/mobilidade-eletrica/tarifas-e-precos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
