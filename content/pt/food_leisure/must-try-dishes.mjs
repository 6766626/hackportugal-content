export default {
  editorialVoice: 'hackportugal',
  id: 'must-try-dishes',
  categoryId: 'food_leisure',
  title: 'O que deve provar em Portugal — por regiões',
  tldr: 'A cozinha portuguesa é muito regional. Lisboa: sardinhas, amêijoas à Bulhão Pato. Porto: Francesinha, Tripas à moda do Porto. Alentejo: açorda, migas, ensopado de borrego, carne de porco à alentejana. Norte: caldo verde. Madeira: espetadas. Açores: cozido das Furnas. O prato-ícone principal é o bacalhau, que tem “365 receitas”. E pastéis de nata para sobremesa — em todo o lado.',
  tags: ['comida', 'pratos', 'cozinha', 'restaurantes', 'regiões'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'lisbon-center',
      title: 'Lisboa e litoral centro',
      content: [
        { kind: 'checklist', items: [
          '🐟 Sardinhas assadas — sardinhas grelhadas, época de junho a setembro. A festa de Santo António (13.06) é o dia das sardinhas',
          '🐚 Amêijoas à Bulhão Pato — amêijoas em molho de alho, azeite, coentros e limão',
          '🍲 Bacalhau à Brás — bacalhau desfiado com batata palha e ovo, um dos principais pratos caseiros',
          '🍛 Arroz de marisco — arroz com marisco em molho de tomate',
          '🧀 Queijo Serra da Estrela DOP — queijo de ovelha macio da região da Serra da Estrela; a melhor época costuma ser do fim do outono à primavera',
          '🥐 Pastéis de nata — creme de ovos em massa estaladiça, com canela por cima',
          '🍷 Vinho de Carcavelos — vinho DOC fortificado histórico da zona de Oeiras/Cascais, mais frequentemente branco/âmbar, mas não estritamente apenas branco'
        ]}
      ]
    },
    {
      id: 'porto-north',
      title: 'Porto e norte',
      content: [
        { kind: 'checklist', items: [
          '🥪 Francesinha — uma sandes-monstro com carne, enchidos, queijo derretido e molho de cerveja e tomate. Ícone do Porto',
          '🥬 Caldo verde — sopa de couve kale e batata com chouriço. Prato nacional de inverno',
          '🐄 Tripas à moda do Porto — dobrada com feijão. Os portuenses são chamados “tripeiros” por causa deste prato',
          '🍷 Vinho Verde — vinho do noroeste de Portugal; muitas vezes leve, fresco e ligeiramente gaseificado, mas também existem estilos mais complexos, sobretudo Alvarinho e Loureiro',
          '🍷 Porto — vinho doce fortificado, de tawny a vintage. Degustação nas caves de Gaia',
          '🐟 Cabidela — galinha ou coelho cozinhado no próprio sangue, prato tradicional do Minho',
          '🥖 Bolinhos de bacalhau — pastéis de bacalhau, petisco presente em todo o lado'
        ]}
      ]
    },
    {
      id: 'alentejo-south',
      title: 'Alentejo e sul',
      content: [
        { kind: 'checklist', items: [
          '🍲 Açorda alentejana — sopa de pão com ovo, coentros, alho e azeite',
          '🐷 Carne de porco à alentejana — carne de porco com amêijoas. Famosa combinação “mar e terra”',
          '🐑 Ensopado de borrego — borrego estufado servido sobre fatias de pão',
          '🐷 Presunto de Barrancos — presunto de porco ibérico alimentado com bolota, DOP',
          '🍷 Vinhos do Alentejo — vinhos tintos encorpados com Touriga Nacional e Aragonez',
          '🥧 Sericaia com ameixa — sobremesa tradicional de Elvas',
          '🍮 Pão de Rala — doce conventual de amêndoa, gemas de ovo e doce de gila/chila'
        ]}
      ]
    },
    {
      id: 'algarve',
      title: 'Algarve',
      content: [
        { kind: 'checklist', items: [
          '🍲 Cataplana — tacho de cobre com peixe ou marisco em caldo de tomate. É preparada para duas pessoas',
          '🐙 Polvo à lagareiro — polvo assado com azeite e batata a murro',
          '🦐 Gambas grelhadas / camarão grelhado — camarões grelhados com sal e limão',
          '🐟 Xerém de conquilhas — papa de milho com conquilhas',
          '🍯 Medronho — aguardente forte feita dos frutos do medronheiro, normalmente com cerca de 40–50% ABV',
          '🥜 Doces de amêndoa — doçaria de amêndoa'
        ]}
      ]
    },
    {
      id: 'islands',
      title: 'Madeira e Açores',
      content: [
        { kind: 'substeps', items: [
          { id: 'mad', title: 'Madeira', content: [
            { kind: 'checklist', items: [
              'Espetada — carne de vaca em espeto de pau de louro',
              'Bolo do caco — pão achatado de trigo com adição de batata-doce, normalmente servido com manteiga de alho',
              'Poncha — aguardente de cana da Madeira + mel + limão/laranja; existem versões com maracujá e outros frutos',
              'Lapas — lapas grelhadas',
              'Vinho da Madeira — vinho fortificado, famoso desde o século XV'
            ]}
          ]},
          { id: 'azr', title: 'Açores', content: [
            { kind: 'checklist', items: [
              'Cozido das Furnas — guisado de carnes cozinhado em solo vulcânico durante 6 horas',
              'Queijo de São Jorge — queijo DOP intenso',
              'Bife à Regional — bife com manteiga de alho e pimenta da terra',
              'Chicharros — pequenos peixes fritos',
              'Vinho dos Biscoitos — vinho branco de vinhas plantadas em lava'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bacalhau',
      title: 'Bacalhau — “365 receitas”',
      content: [
        { kind: 'paragraph', text: 'O bacalhau é o peixe mais importante para os portugueses, embora Portugal praticamente não o pesque: o bacalhau é sobretudo importado do Atlântico Norte, especialmente da Noruega e da Islândia. Diz o provérbio: “365 maneiras de preparar bacalhau, uma para cada dia do ano”. Eis o top 6:' },
        { kind: 'checklist', items: [
          'à Brás — desfiado com batata palha e ovo',
          'à Gomes de Sá — em lascas com batata e cebola, assado',
          'com Natas — em molho de natas',
          'à Lagareiro — assado com batata a murro e azeite',
          'à Zé do Pipo — com puré de batata e maionese, assado',
          'Pastéis de bacalhau — bolinhos, petisco em todo o lado'
        ]}
      ]
    },
    {
      id: 'where-to-eat',
      title: 'Onde encontrar comida autêntica',
      content: [
        { kind: 'checklist', items: [
          '🏠 Tasca — pequeno restaurante local, preços baixos, qualidade elevada',
          '🍽️ Cervejaria — casa de cerveja com marisco fresco',
          '🧀 Casa de pasto — almoço diário com menu do dia, muitas vezes cerca de 10–15 € (em localidades pequenas por vezes mais barato, em zonas turísticas mais caro)',
          '❌ Evite restaurantes com “menu turístico” e fotografias de comida no exterior',
          '✅ Procure espaços onde comem os locais: almoço depois das 13:00, jantar depois das 20:00',
          '💡 A pergunta “O que é típico aqui?” abre os segredos da região'
        ]},
        { kind: 'warning', text: 'O couvert em Portugal é normalmente pago se for consumido. Se não quiser — recuse-o de imediato e não coma; não é obrigado a pagar entradas não solicitadas e intocadas. O preço do couvert deve estar indicado no menu/lista de preços.' }
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomia', url: 'https://www.visitportugal.com/en/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — dieta mediterrânica (inclusão de PT)', url: 'https://ich.unesco.org/en/RL/mediterranean-diet-00884', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Wines of Portugal — regiões', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
