export default {
  editorialVoice: 'hackportugal',
  id: 'traditional-dishes',
  categoryId: 'food_leisure',
  title: 'O que provar da cozinha portuguesa',
  tldr: 'A base é bacalhau (o peixe dos “1001 receitas”), sardinhas assadas (em Lisboa no verão), cozido à portuguesa (sortido de carnes), francesinha (o prato emblemático do Porto), arroz de marisco (arroz com marisco), leitão da Bairrada (leitão assado).\n\nSobremesa — pastel de nata por todo o lado, ovos moles em Aveiro.',
  tags: ['comida', 'cozinha', 'bacalhau', 'pastel de nata'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'must-try',
      title: 'TOP-10: o que deve mesmo provar',
      content: [
        { kind: 'checklist', items: [
          '🐟 Bacalhau à Brás — bacalhau com batata, ovo e cebola (um clássico)',
          '🐟 Bacalhau com Natas — bacalhau gratinado com molho de natas',
          '🐟 Bacalhau à Lagareiro — bacalhau assado com azeite e “batatinhas”',
          '🐟 Sardinhas Assadas — sardinhas assadas na brasa (junho-setembro, mais baratas nas tascas)',
          '🐟 Arroz de Marisco — arroz com marisco, um clássico do Portugal costeiro',
          '🍖 Cozido à Portuguesa — carnes cozidas, enchidos, legumes, grão',
          '🍖 Leitão da Bairrada — leitão assado no espeto (região da Bairrada)',
          '🥪 Francesinha — sanduíche com carne, queijo e molho; muitas vezes acrescentam ovo por cima (Porto, obrigatório provar)',
          '🍲 Caldo Verde — sopa de couve e chouriço (encontra-se por todo o país)',
          '🥟 Pastéis de Bacalhau — croquetes fritos de bacalhau e batata (entrada)'
        ]}
      ]
    },
    {
      id: 'desserts',
      title: 'Sobremesas',
      content: [
        { kind: 'checklist', items: [
          '🥧 Pastel de Nata — creme de ovos em massa estaladiça (os melhores — Pastéis de Belém, o original)',
          '🥚 Ovos Moles de Aveiro — gema de ovo + açúcar, numa hóstia fina (IGP/PGI Aveiro)',
          '🧁 Queijadas de Sintra — pequenos bolos de queijo fresco',
          '🌰 Castanhas assadas — castanhas assadas (novembro-janeiro)',
          '🍮 Leite-Creme — crème brûlée português',
          '🍰 Bolo Rei — bolo de Natal com frutos secos e cristalizados (dezembro-janeiro)',
          '🍧 Arroz Doce — arroz doce com canela'
        ]}
      ]
    },
    {
      id: 'drinks',
      title: 'Bebidas',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Café', content: [
            { kind: 'checklist', items: [
              'Bica (Lisboa) / Cimbalino (Porto) — espresso, normalmente cerca de 0,90–1,30 € em cafés comuns, mais caro em zonas turísticas',
              'Meia de Leite — espresso com leite em proporções iguais, servido numa chávena',
              'Galão — café grande com leite (num copo)',
              'Abatanado — café “comprido”, tipo americano',
              'Pingado — espresso com um pouco de leite'
            ]}
          ]},
          { id: 'd2', title: 'Vinho', content: [
            { kind: 'checklist', items: [
              'Vinho Verde — vinho “verde” leve (norte de Portugal, melhor servido fresco)',
              'Douro DOC — tinto encorpado',
              'Alentejo — tinto rico',
              'Vinho do Porto (Porto) — vinho de sobremesa, Ruby / Tawny / Vintage',
              'Madeira — vinho fortificado da Madeira: de seco a doce, muitas vezes servido como aperitivo ou vinho de sobremesa',
              'Bairrada espumante — vinho espumante, normalmente branco ou rosé'
            ]}
          ]},
          { id: 'd3', title: 'Outras', content: [
            { kind: 'checklist', items: [
              'Ginjinha — licor de ginja (Lisboa, bares A Ginjinha perto do Rossio)',
              'Licor Beirão — licor de ervas português',
              'Sumol / Compal — néctares de fruta',
              'Água com gás / sem gás — com gás / sem gás'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'regional',
      title: 'Especialidades regionais',
      content: [
        { kind: 'checklist', items: [
          'Noroeste (Porto, Minho) — francesinha, caldo verde, bacalhau com broa',
          'Centro (Coimbra, Aveiro) — ovos moles, leitão, chanfana (cabrito/cabra estufado em vinho tinto)',
          'Lisboa e Setúbal — bifana (sandes de porco), caracóis (no verão)',
          'Alentejo — porco preto, migas, açorda',
          'Algarve — marisco, cataplana, doce fino',
          'Madeira — espetada (carne no espeto), bolo do caco (pão)',
          'Açores — cozido das Furnas (cozido vulcânico)'
        ]}
      ]
    },
    {
      id: 'etiquette',
      title: 'Etiqueta',
      content: [
        { kind: 'checklist', items: [
          'Pão, azeitonas, manteiga e patês podem ser colocados na mesa como couvert, mas são pagos se os comer; os preços devem constar do menu. Se não quiser, diga logo “não, obrigado” e peça para retirar',
          'O almoço principal é entre as 13:00-15:00, o jantar entre as 20:00-22:00',
          'O café toma-se depois da sobremesa, nunca com a comida',
          'As gorjetas não são obrigatórias: nos cafés costuma arredondar-se a conta; num restaurante, por bom serviço, pode deixar uma pequena quantia ou cerca de 5–10%',
          'Menu do dia/prato do dia — normalmente o almoço mais económico: cerca de 9–15 € consoante a cidade e a zona',
          'Na conta, “IVA incluído” significa que o IVA já está incluído no preço. Uma “taxa de serviço” separada só é possível se estiver indicada previamente',
          'Para pedir a conta: “A conta, por favor”'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomia', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGAV — segurança dos produtos alimentares', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGADR — DOP/IGP: denominações protegidas e produtos tradicionais', url: 'https://www.dgadr.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
