export default {
  editorialVoice: 'hackportugal',
  id: 'wine-regions',
  categoryId: 'food_leisure',
  title: 'Vinhos de Portugal — regiões e o que comprar',
  tldr: 'Portugal é um dos maiores produtores de vinho da UE, normalmente por volta do 5.º lugar em volume. É prático orientar-se pelas 14 regiões vitivinícolas; DOC/DO/DOP são denominações protegidas dentro das regiões. Ícones: vinho do Porto (vinho fortificado do Douro), Vinho Verde (vinho jovem do norte), Alentejo (tinto encorpado), Douro DOC, Madeira, Bairrada. Nos supermercados há excelentes vinhos económicos por 3–8 € por garrafa.',
  tags: ['vinho', 'vinho do porto', 'douro', 'alentejo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'regions',
      title: '14 regiões vitivinícolas de Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Norte', content: [
            { kind: 'checklist', items: [
              'Vinho Verde — jovem, leve, para o verão (Casal Garcia — um clássico)',
              'Porto e Douro — região de origem do Port/Porto e dos Douro DOC não fortificados; para tintos Douro tinto: Duorum, Quinta do Crasto, entre outros',
              'Trás-os-Montes — zona fronteiriça com Espanha, tintos potentes'
            ]}
          ]},
          { id: 'r2', title: 'Centro', content: [
            { kind: 'checklist', items: [
              'Bairrada — espumante + tintos da casta Baga',
              'Dão e Lafões — tintos elegantes, a «Borgonha portuguesa»',
              'Távora-Varosa — vinhos espumantes, nas colinas entre o Douro e o Dão',
              'Beira Interior — vinhos de montanha, menos conhecidos, mas de qualidade',
              'Lisboa — em redor da capital, preços acessíveis, qualidade em crescimento',
              'Tejo — rio Tejo, vinhos acessíveis'
            ]}
          ]},
          { id: 'r3', title: 'Sul', content: [
            { kind: 'checklist', items: [
              'Alentejo — sul quente, tintos encorpados (Herdade do Esporão)',
              'Península de Setúbal — Moscatel de Setúbal/Moscatel Roxo como vinhos fortificados doces; Palmela e tintos/brancos secos',
              'Algarve — região pequena, mas interessante'
            ]}
          ]},
          { id: 'r4', title: 'Ilhas', content: [
            { kind: 'checklist', items: [
              'Madeira — vinho fortificado, processo único de estágio em calor',
              'Açores — vinhos vulcânicos em basalto (Pico), incluindo Paisagem da Cultura da Vinha da Ilha do Pico UNESCO'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'port',
      title: 'Vinho do Porto — o que precisa de saber',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Ruby', content: [
            { kind: 'paragraph', text: 'Jovem (2–3 anos), frutado, acessível. Boa opção para começar.' }
          ]},
          { id: 'p2', title: 'Tawny', content: [
            { kind: 'paragraph', text: 'Estagia em madeira; pode ser básico/Reserve e com indicação de idade 10/20/30/40/50 years old. A idade no rótulo é uma categoria de estilo e do carácter médio do lote.' }
          ]},
          { id: 'p3', title: 'Vintage', content: [
            { kind: 'paragraph', text: 'De um único ano especialmente bom, com estágio em garrafa. Caro, icónico. Apenas em anos «declarados».' }
          ]},
          { id: 'p4', title: 'LBV (Late Bottled Vintage)', content: [
            { kind: 'paragraph', text: 'Alternativa acessível ao Vintage. De um único ano, 4–6 anos em casco.' }
          ]},
          { id: 'p5', title: 'White Port', content: [
            { kind: 'paragraph', text: 'Vinho do Porto branco, muitas vezes com tónica = cocktail «Portonic».' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Produtores conhecidos: Taylor\'s, Graham\'s, Croft, Niepoort, Sandeman, Ramos Pinto. Caves em Vila Nova de Gaia — visitas com prova por 15–30 €.' }
      ]
    },
    {
      id: 'buying',
      title: 'Onde comprar',
      content: [
        { kind: 'checklist', items: [
          'Supermercado — por 3–8 € há vinho bom, por 10–20 € há vinho muito bom',
          'Garrafeira (loja de vinhos) — aconselhamento, escolha mais ampla',
          'Directamente ao produtor — visitas a quintas no Douro e no Alentejo, compra no local',
          'Online: Garrafeira Nacional, Wine With Spirit',
          'Aeroporto — nem sempre é mais vantajoso, os preços são comparáveis aos do Lidl',
          'O Lidl é frequentemente bom para vinhos económicos e selecções promocionais (gama Deluxe, Cimarosa, entre outras)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos para residentes',
      content: [
        { kind: 'checklist', items: [
          'O vinho dos supermercados em Portugal é muito bom — não procure italiano/francês por 5 € básicos',
          'Os Vinho Verde de grande distribuição são muitas vezes leves, frescos e ligeiramente frisantes; mas a região também produz Alvarinho/Loureiro tranquilos e sérios',
          'O espumante da Bairrada é uma alternativa mais barata ao Prosecco',
          'No restaurante — Vinho da Casa (vinho da casa) é frequentemente digno, 3–5 € por 0,5 l',
          'Os restaurantes acrescentam margens de 100–200% às garrafas — pense antes de encomendar',
          'Aprendizagem: provas em Lisboa e Porto (Ultimate Wine Experience, Bacalhau), 25–60 €'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Wines of Portugal — oficial', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — enoturismo', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
