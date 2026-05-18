export default {
  editorialVoice: 'hackportugal',
  id: 'fuel-savings',
  categoryId: 'auto_ownership',
  title: 'Gasolina e gasóleo — como poupar em combustível',
  tldr: 'Preço nos postos de abastecimento em Portugal continental em 2026: gasolina 95 (gasolina) 1,70–1,90 €/l, gasóleo (gasóleo) 1,55–1,75 €/l.\n\nOs preços são livres no continente; a ERSE publica semanalmente o «preço eficiente» — uma referência indicativa e não obrigatória, não um tecto máximo.\n\nNa Madeira e nos Açores, os preços podem ser regulados administrativamente. A diferença entre redes caras (Galp / BP / Repsol) e baratas (Prio, Intermarché, Continente, Cepsa/Moeve) pode chegar a 0,15 €/l. As apps ComboMais / IdealGás / Tankpreise ajudam a encontrar o posto mais barato. Os cartões de fidelização dão descontos de 0,05–0,12 €/l.',
  tags: ['gasolina', 'posto de abastecimento', 'poupança', 'combustível'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prices',
      title: '⛽ Preços e diferença entre redes',
      content: [
        { kind: 'paragraph', text: 'Os preços em Portugal são livres, mas regulados pelo mercado. O Estado publica semanalmente preços máximos recomendados — todos os postos de abastecimento mantêm-se abaixo.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Níveis das marcas', content: [
            { kind: 'checklist', items: [
              '🔴 **Premium** (Galp, BP, Repsol, ENI, Cepsa/Moeve): 1,75–1,90 €/l — nas cidades, nas autoestradas. Normalmente um pouco mais caro',
              '🟡 **Segmento médio** (OMV, Prio, BPCarga): 1,65–1,80 €/l — nas regiões, menos frequente nos centros',
              '🟢 **Económicos** (postos Intermarché, Continente Auto, Leclerc): 1,55–1,70 €/l — junto a supermercados, muitas vezes os mais baratos'
            ]}
          ]},
          { id: 'p2', title: 'Diferenças geográficas', content: [
            { kind: 'checklist', items: [
              'Autoestrada (Via Rápida / Auto-Estrada): mais caro em 0,05–0,10 €/l',
              'Aeroporto: mais caro em 0,10 €/l',
              'Regiões (Alentejo, interior): mais barato em 0,03–0,05 €/l',
              'Ilhas (Açores, Madeira): mais caro devido aos custos de transporte',
              '✅ **Regra**: sair da autoestrada para um posto de abastecimento numa localidade = poupança de 5–10 € por depósito cheio'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Apps para encontrar postos de abastecimento baratos',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Melhores apps', content: [
            { kind: 'checklist', items: [
              '**ComboMais** — app portuguesa, preços de todas as redes em tempo real, actualizações pelos utilizadores',
              '**IdealGás** — app semelhante, muitos utilizadores',
              '**Buy the Way** — para trajectos longos',
              '**WayZ** (Intermarché) — mostra os postos deles + descontos Continente',
              '**GAS** by Galp — para clientes frequentes (pontos GAS)',
              '**Portal ERSE** (www.erse.pt) — regulador da energia, preços semanais'
            ]}
          ]},
          { id: 'a2', title: 'Como usar', content: [
            { kind: 'checklist', items: [
              'Instalar 2 apps para verificação cruzada',
              'Pesquisa «perto de mim» — raio de 5–10 km',
              'Verificar o preço — normalmente é 0,02–0,05 € mais baixo do que a indicação no Google Maps',
              'Vale a pena conduzir por causa de 0,05 €? → num depósito cheio de 50 l = poupança de 2,50 €. Se conduzir mais 5 km, gastará cerca de 3 € em gasolina — não compensa',
              '💡 **Regra**: posto barato a 1–2 km = vamos, a 5+ km = ficamos onde estamos'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'loyalty',
      title: '💳 Programas de fidelização e descontos',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Cartões de fidelização dos postos de abastecimento', content: [
            { kind: 'checklist', items: [
              '**BP PLUS** — desconto de 0,06 €/l + cashback de 0,02 €',
              '**Galp Poupa** — 0,04–0,08 €/l + cashback no Continente',
              '**Repsol** — programa pouco expressivo, pequeno cashback',
              '**Prio Card** — descontos básicos',
              'Adesão: no posto de abastecimento ou online, gratuita'
            ]}
          ]},
          { id: 'l2', title: 'Descontos de supermercados em postos de abastecimento (a melhor opção!)', content: [
            { kind: 'checklist', items: [
              '🏆 **Continente + Galp**: Cartão Continente na Galp = desconto de 0,12 €/l (a melhor oferta comercial)',
              '🏆 **Pingo Doce + Repsol**: Poupa Mais — 0,10 €/l',
              '🏆 **Postos Auchan**: para titulares do Auchan Card — 0,08 €/l',
              '**Intermarché** os postos já são baratos por si só; pode combinar com o cartão Intermarché = mais -0,03 €',
              '💡 Os pontos acumulam-se no supermercado — usar na loja (desconto duplo)'
            ]}
          ]},
          { id: 'l3', title: 'Cartões empresariais e cartões para frotas', content: [
            { kind: 'checklist', items: [
              '**Galp Frota, BP Fleet, Cepsa StarFleet** — empresariais',
              'Desconto de 0,10–0,15 €/l para empresas',
              'Trabalhadores independentes (recibos verdes) também podem aderir com volume de negócios > 10000 €/ano',
              'Factura mensal (sem pagar em numerário de cada vez), mais simples para facturas com IVA'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'strategies',
      title: '💡 Estratégias de poupança',
      content: [
        { kind: 'checklist', items: [
          '📅 **Abastecer de terça a quinta-feira**: os preços são normalmente mais baixos do que de sexta a domingo',
          '🌅 **De manhã**: o posto de abastecimento actualiza os preços de manhã — por vezes é melhor do que à noite (mas a diferença é pequena)',
          '🏝️ **Antes do Alentejo / Algarve**: abastecer em Lisboa, onde é mais barato do que nas zonas turísticas',
          '🇪🇸 **Espanha**: na fronteira (Badajoz, Huelva) — a gasolina é 0,20–0,30 €/l mais barata. Se vai a Espanha de férias — abasteça lá',
          '⛽ **Depósito cheio** vs abastecimentos frequentes: depósito cheio = menos deslocações ao posto de abastecimento. Mas se agora está barato — abasteça agora, depois pode ficar mais caro',
          '🚗 **O seu consumo**: **condução ecológica** (arranque/travagem suaves, cruise control, pneus correctos) — menos 10–20% de consumo',
          '🎯 **Gasolina normal, não premium 98**: para a maioria dos carros não há diferença (excepto os de alto desempenho), poupança de 0,10–0,20 €/l'
        ]}
      ]
    },
    {
      id: 'ev',
      title: '⚡ Para veículos eléctricos',
      content: [
        { kind: 'checklist', items: [
          'Carregamento AC: 0,25–0,35 €/kWh (em casa / carregamento público lento)',
          'Carregamento rápido DC: 0,40–0,55 €/kWh',
          'Tarifa doméstica nocturna (tarifa bi-horária): 0,15–0,20 €/kWh (a mais barata!)',
          'Tesla Supercharger: 0,35–0,45 €/kWh (para não Tesla), -10% para proprietários Tesla',
          '💡 Poupança: com tarifa bi-horária + wallbox doméstica — custo de 100 km de autonomia cerca de 2–3 €, contra 8–10 € para motor de combustão'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Gasolina (95)', amountEURMin: 1.70, amountEURMax: 1.90, note: '€/l' },
    { label: 'Gasóleo', amountEURMin: 1.55, amountEURMax: 1.75, note: '€/l' },
    { label: 'Premium (98)', amountEURMin: 1.85, amountEURMax: 2.05, note: '€/l' },
    { label: 'AutoGás (GPL)', amountEURMin: 0.90, amountEURMax: 1.10, note: '€/l' },
    { label: 'Carregamento rápido EV DC', amountEURMin: 0.40, amountEURMax: 0.55, note: '€/kWh' }
  ],
  sources: [
    { title: 'ERSE — preços dos combustíveis', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Direção-Geral de Energia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
