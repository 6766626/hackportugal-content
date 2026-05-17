export default {
  editorialVoice: 'hackportugal',
  id: 'recycling-pt',
  categoryId: 'daily_life',
  title: 'Recolha seletiva e eliminação de resíduos em Portugal',
  tldr: 'Em Portugal aplica-se o padrão da UE — recolha seletiva. As principais cores dos contentores são: amarelo (ecoponto amarelo) — plástico e metal, azul — papel e cartão, verde — vidro, castanho — orgânicos (onde exista), cinzento/preto — resíduos indiferenciados. Resíduos volumosos e eletrodomésticos — separadamente, através do município. As infrações podem dar origem a coimas.',
  tags: ['lixo', 'reciclagem', 'ecoponto', 'ecologia'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'system',
      title: 'Como funciona o sistema',
      content: [
        { kind: 'paragraph', text: 'A recolha de resíduos em Portugal é da responsabilidade dos municípios (Câmara Municipal), através de empresas contratadas. O pagamento é feito como parte da fatura da água. O sistema baseia-se na Diretiva da UE 2008/98/EC e no Decreto-Lei n.º 102-D/2020 (Regime Geral da Gestão de Resíduos), com alterações posteriores.' },
        { kind: 'paragraph', text: 'O princípio principal é a existência de contentores separados (ecopontos) nas zonas residenciais. Nos apartamentos, os resíduos são separados em casa e depois levados para o ecoponto mais próximo.' }
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
              'Caixas de cartão (desmontadas e achatadas)',
              'Papel impresso',
              'Livros (se não forem revendidos)',
              '❌ NÃO colocar: caixas de pizza sujas, guardanapos, papel com revestimento encerado'
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
              'Borra de café',
              'Resíduos de jardim (folhas, relva)',
              'Não existe em todo o lado — depende do município. Em Lisboa e no Porto está a ser implementado em algumas zonas'
            ]}
          ]},
          { id: 'c5', title: '⚫ Cinzento/Preto — Indiferenciado (resíduos mistos)', content: [
            { kind: 'checklist', items: [
              'Tudo o que NÃO é adequado para recolha seletiva',
              'Produtos de higiene (fraldas, pensos higiénicos)',
              'Plástico não reciclável (poliestireno)',
              'Guardanapos e papel usados',
              '❌ Lâmpadas (LED, fluorescentes, economizadoras) NÃO devem ser colocadas no lixo comum — são um fluxo específico, entregue-as em lojas de eletrónica ou num ecocentro'
            ]}
          ]},
          { id: 'c6', title: '🔴 Vermelho (Vermelho) — Pilhas (baterias)', content: [
            { kind: 'checklist', items: [
              'Pilhão — para pilhas portáteis e pequenas baterias recarregáveis. Baterias de automóveis/motociclos/industriais são entregues em pontos especializados (oficinas, ecocentro)',
              'As pilhas portáteis também são aceites em muitos supermercados e lojas de eletrónica',
              'Baterias de telemóveis/portáteis — aqui também, ou em lojas de eletrónica',
              'Se não houver contentor vermelho — consulte a secção «Eliminação especial» abaixo'
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
          { id: 's1', title: 'Equipamentos elétricos e eletrónicos', content: [
            { kind: 'paragraph', text: 'Os resíduos de equipamentos elétricos e eletrónicos têm contentores próprios em lojas (Worten, Radio Popular, Fnac) ou nos Ecocentros municipais. Por lei, a loja é obrigada a aceitar o equipamento antigo aquando da compra de um novo.' }
          ]},
          { id: 's2', title: 'Pilhas', content: [
            { kind: 'paragraph', text: 'Pilhão — contentores em muitas lojas (supermercados, farmácias, lojas de eletrónica). As obrigações dependem de o ponto de venda comercializar pilhas e do regime de retoma.' }
          ]},
          { id: 's3', title: 'Óleo (alimentar)', content: [
            { kind: 'paragraph', text: 'Oleão — contentores em supermercados e municípios. O óleo usado é entregue numa garrafa de plástico. É reciclado para produzir biodiesel.' }
          ]},
          { id: 's4', title: 'Roupa', content: [
            { kind: 'paragraph', text: 'Contentores para roupa — nas ruas (cor de laranja). A H&M/Zara também aceitam roupa usada em troca de um desconto.' }
          ]},
          { id: 's5', title: 'Móveis e resíduos volumosos (monstros)', content: [
            { kind: 'paragraph', text: 'A recolha deve ser marcada junto do município por telefone ou através do formulário online da Câmara Municipal. Normalmente é gratuita 1-2 vezes por ano. Não deixe na rua sem autorização — há coima por isso.' }
          ]},
          { id: 's6', title: 'Resíduos de construção (RCD)', content: [
            { kind: 'paragraph', text: 'Resíduos de construção e demolição (RCD) têm um regime separado. Nem todos os ecocentros aceitam resíduos de obras; frequentemente há limites de volume e requisitos. Se estiver a fazer obras por conta própria — confirme junto da Câmara Municipal, pois muitas vezes a eliminação é paga.' }
          ]},
          { id: 's7', title: 'Medicamentos', content: [
            { kind: 'paragraph', text: 'Valormed — contentores nas farmácias. Aceitam medicamentos fora de prazo e medicamentos de que já não precisa.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Coimas e infrações',
      content: [
        { kind: 'paragraph', text: 'Ao abrigo do Decreto-Lei n.º 102-D/2020 e dos regulamentos municipais, aplicam-se coimas por contraordenações ambientais (Lei 50/2006). As categorias são leve/grave/muito grave; os montantes variam substancialmente entre pessoas singulares e pessoas coletivas. Verifique a versão atual da lei.' },
        { kind: 'checklist', items: [
          '⚠️ Separação incorreta — formalmente pode dar origem a coima; na prática, o saco pode não ser recolhido',
          '⚠️ Resíduos volumosos na rua sem pedido — coima de 50-250 €',
          '⚠️ Depositar lixo fora do horário (em algumas zonas existem horários)',
          '⚠️ Atirar lixo a partir de um automóvel — até 750 €',
          '⚠️ Os Ecocentros aceitam gratuitamente cidadãos com atestado de residência; para entidades comerciais — é pago'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '🚮 Passe as embalagens por água para retirar restos — embalagens limpas são recicladas mais facilmente',
          '📦 Desmonte as caixas de cartão e achate-as — assim cabe mais no contentor',
          '🔋 Não coloque pilhas no lixo comum — é perigoso',
          '🛍️ Saco de compras (saco reutilizável) — desde 2021, nos supermercados, os sacos de plástico custam 3-10 cêntimos',
          '🏭 Ecocentro — existe em todos os grandes municípios; pode entregar aí tudo o que é invulgar',
          '♻️ Compostagem na varanda ou no quintal — é cada vez mais comum entre residentes; os municípios distribuem compostores gratuitamente',
          '📱 Aplicação «Sociedade Ponto Verde» — explica onde colocar cada coisa'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Sociedade Ponto Verde — operador de gestão de embalagens', url: 'https://www.pontoverde.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 102-D/2020 — Regime Geral da Gestão de Resíduos', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-d-2020', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Diretiva 2008/98/CE — diretiva-quadro da UE relativa aos resíduos', url: 'https://eur-lex.europa.eu/', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
