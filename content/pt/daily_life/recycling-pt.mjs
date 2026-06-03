export default {
  editorialVoice: 'hackportugal',
  id: 'recycling-pt',
  categoryId: 'daily_life',
  title: 'Recolha selectiva e eliminação de lixo em Portugal',
  tldr: 'Em Portugal aplica-se a norma da UE — recolha selectiva. As principais cores dos contentores: amarelo (ecoponto amarelo) — plástico e metal, azul — papel e cartão, verde — vidro, castanho — orgânicos (onde exista), cinzento/preto — resíduos indiferenciados. Monos e electrodomésticos — separadamente, através do município. As infracções estão sujeitas a coimas.',
  tags: ['lixo', 'reciclagem', 'ecoponto', 'ecologia'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'system',
      title: 'Como funciona o sistema',
      content: [
        { kind: 'paragraph', text: 'A recolha de lixo em Portugal é da responsabilidade dos municípios (Câmara Municipal), através de prestadores de serviços. O pagamento é feito como parte da factura da água. O sistema baseia-se na directiva da UE 2008/98/EC e no Decreto-Lei n.º 102-D/2020 (Regime Geral da Gestão de Resíduos), com alterações posteriores.' },
        { kind: 'paragraph', text: 'O princípio principal é a existência de contentores separados (ecopontos) nas zonas residenciais. Nos apartamentos, o lixo é separado em casa e depois levado para o ecoponto mais próximo.' }
      ]
    },
    {
      id: 'colors',
      title: 'Cores e o que colocar',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '🟡 Amarelo (Amarelo) — Embalagens', content: [
            { kind: 'checklist', items: [
              'Garrafas de plástico (água, leite, sumo)',
              'Copos de iogurte',
              'Embalagens de plástico, película',
              'Latas metálicas (bebidas, conservas)',
              'Tampas metálicas',
              'Pacotes Tetra Pak (leite, sumos)',
              'Aerossóis (vazios)'
            ]}
          ]},
          { id: 'c2', title: '🔵 Azul (Azul) — Papel e Cartão', content: [
            { kind: 'checklist', items: [
              'Jornais, revistas',
              'Caixas de cartão (desmontadas e espalmadas)',
              'Papel impresso',
              'Livros (se não forem revendidos)',
              '❌ NÃO colocar: caixas de pizza sujas, guardanapos, papel com revestimento de cera'
            ]}
          ]},
          { id: 'c3', title: '🟢 Verde (Verde) — Vidro', content: [
            { kind: 'checklist', items: [
              'Garrafas de vidro (sem rolhas/tampas!)',
              'Frascos de vidro',
              '❌ NÃO colocar: copos, lâmpadas, espelhos, cerâmica — vão para os resíduos indiferenciados'
            ]}
          ]},
          { id: 'c4', title: '🟤 Castanho (Castanho) — Orgânico', content: [
            { kind: 'checklist', items: [
              'Resíduos alimentares (cascas, ossos, restos de comida)',
              'Borras de café',
              'Resíduos de jardim (folhas, relva)',
              'Não existe em todo o lado — depende do município. Em Lisboa e no Porto está a ser implementado em algumas zonas'
            ]}
          ]},
          { id: 'c5', title: '⚫ Cinzento/Preto — Indiferenciado (resíduos indiferenciados)', content: [
            { kind: 'checklist', items: [
              'Tudo o que NÃO é adequado para recolha selectiva',
              'Produtos de higiene (fraldas, pensos higiénicos)',
              'Plástico não reciclável (poliestireno)',
              'Guardanapos usados, papel',
              '❌ Lâmpadas (LED, fluorescentes, economizadoras) NÃO devem ser deitadas no lixo comum — são um fluxo especial; entregue-as em lojas de electrónica ou num ecocentro'
            ]}
          ]},
          { id: 'c6', title: '🔴 Vermelho (Vermelho) — Pilhas (pilhas)', content: [
            { kind: 'checklist', items: [
              'Pilhão — para pilhas portáteis e pequenos acumuladores. Baterias de automóvel/motociclo/industriais devem ser entregues em pontos especializados (oficinas, ecocentro)',
              'As pilhas portáteis também são aceites em muitos supermercados e lojas de electrónica',
              'Baterias de telemóveis/portáteis — aqui também ou em lojas de electrónica',
              'Se não houver contentor vermelho — veja a secção «Eliminação especial» abaixo'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'special',
      title: 'Eliminação especial',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Eléctricos e electrónica', content: [
            { kind: 'paragraph', text: 'Os resíduos de equipamentos eléctricos e electrónicos têm contentores próprios em lojas (Worten, Radio Popular, Fnac) ou nos Ecocentros municipais. Por lei, a loja é obrigada a aceitar o equipamento antigo quando compra um novo.' }
          ]},
          { id: 's2', title: 'Pilhas', content: [
            { kind: 'paragraph', text: 'Pilhão — contentores em muitas lojas (supermercados, farmácias, lojas de electrónica). As obrigações dependem de o ponto vender pilhas e do regime de retoma.' }
          ]},
          { id: 's3', title: 'Óleo (de cozinha)', content: [
            { kind: 'paragraph', text: 'Oleão — contentores em supermercados e municípios. O óleo usado é entregue numa garrafa de plástico. É reciclado para biodiesel.' }
          ]},
          { id: 's4', title: 'Roupa', content: [
            { kind: 'paragraph', text: 'Contentores para roupa — nas ruas (laranja). A H&M/Zara também aceitam roupa usada em troca de um desconto.' }
          ]},
          { id: 's5', title: 'Móveis e resíduos volumosos (monstros)', content: [
            { kind: 'paragraph', text: 'A recolha deve ser agendada junto do município por telefone ou através do formulário online da Câmara Municipal. Normalmente é gratuita 1-2 vezes por ano. Não deixe na rua sem autorização — isso dá coima.' }
          ]},
          { id: 's6', title: 'Entulho de obras (RCD)', content: [
            { kind: 'paragraph', text: 'Resíduos de construção e demolição (RCD) têm um regime próprio. Nem todos os ecocentros aceitam entulho, e muitas vezes há limites de volume e requisitos. Se fizer obras por conta própria — confirme junto da Câmara Municipal; a eliminação é frequentemente paga.' }
          ]},
          { id: 's7', title: 'Medicamentos', content: [
            { kind: 'paragraph', text: 'Valormed — contentores nas farmácias. Aceitam medicamentos fora de prazo e medicamentos de que já não necessita.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Coimas e infracções',
      content: [
        { kind: 'paragraph', text: 'Ao abrigo do Decreto-Lei n.º 102-D/2020 e dos regulamentos municipais, aplicam-se coimas por contraordenações ambientais (Lei 50/2006).\n\nCategorias leve/grave/muito grave; os montantes variam substancialmente para pessoas singulares e pessoas colectivas. Verifique a redacção actual da lei.' },
        { kind: 'checklist', items: [
          '⚠️ Separação incorrecta — formalmente dá coima; na prática, o saco pode não ser recolhido',
          '⚠️ Monos na rua sem pedido — coima de 50-250 €',
          '⚠️ Deitar lixo fora do horário (em algumas zonas há horários definidos)',
          '⚠️ Deitar lixo pela janela do automóvel — coima de 60-300 € (Código da Estrada, art. 79.º)',
          '⚠️ Os Ecocentros aceitam gratuitamente cidadãos com atestado de residência; para entidades comerciais — pago'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '🚮 Passe as embalagens por água para remover restos — embalagens limpas são recicladas melhor',
          '📦 Desmonte as caixas de cartão e espalme-as — assim cabe mais no contentor',
          '🔋 Não deite pilhas no lixo comum — é perigoso',
          '🛍️ Saco de compras (saco reutilizável) — desde 2015, os sacos de plástico leves são pagos nas lojas: contribuição de 8 cêntimos mais IVA, preço mínimo de cerca de 10 cêntimos (os sacos de caixa normais custam mais)',
          '🏭 Ecocentro — existe em todos os grandes municípios; pode entregar lá tudo o que for fora do comum',
          '♻️ Compostagem na varanda ou no quintal — é cada vez mais comum entre residentes, e os municípios distribuem compostores gratuitamente',
          '📱 Aplicação «Sociedade Ponto Verde» — explica onde colocar cada coisa'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Sociedade Ponto Verde — operador de reciclagem de embalagens', url: 'https://www.pontoverde.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 102-D/2020 — Regime Geral da Gestão de Resíduos', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-d-2020', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Directiva 2008/98/CE — directiva-quadro da UE relativa aos resíduos', url: 'https://eur-lex.europa.eu/', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
