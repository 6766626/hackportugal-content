export default {
  editorialVoice: 'hackportugal',
  id: 'online-vs-store-14-days',
  categoryId: 'daily_life',
  title: '14 dias para devolver — como funciona para compras online e lojas',
  tldr: 'Numa compra à distância (online, por telefone, por catálogo), você tem um direito incondicional de devolução no prazo de 14 dias sem indicar motivo (Decreto-Lei 24/2014 + UE 2011/83). Numa loja física, a devolução fica à boa vontade do vendedor, se não houver defeito. Exceções para compras online: produtos alimentares, cosméticos selados e produtos de higiene, conteúdos digitais após descarregamento, produtos personalizados.',
  tags: ['devolução', 'compras online', 'direitos do consumidor', '14 dias'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'online-unconditional',
      title: 'Online: 14 dias sem perguntas',
      content: [
        { kind: 'paragraph', text: 'As compras à distância (na internet, por telefone, por catálogo, em feiras fora da loja) estão abrangidas pelo Decreto-Lei 24/2014. O direito de livre resolução aplica-se durante 14 dias de calendário a contar do momento da receção do bem.' },
        { kind: 'checklist', items: [
          'Não é necessário explicar o motivo',
          'A contagem começa no dia da entrega física',
          'Para serviços digitais — a partir do momento da celebração do contrato',
          'Para um conjunto de bens entregue por partes — a partir da receção da última parte',
          'É possível devolver um produto parcialmente desembalado, se o tiver examinado como numa loja'
        ]},
        { kind: 'warning', text: 'O vendedor é obrigado a informar sobre o direito de livre resolução. Se não o fizer, o prazo é prolongado até 12 meses.' }
      ]
    },
    {
      id: 'how-to-return-online',
      title: 'Como devolver uma compra online',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Notificar o vendedor no prazo de 14 dias', content: [
            { kind: 'paragraph', text: 'A forma é livre: e-mail, formulário no site, chamada gravada. Frase em português: «Exerço o meu direito de livre resolução nos termos do Decreto-Lei 24/2014». Pode usar o formulário-tipo do anexo B da lei.' }
          ]},
          { id: 'o2', title: '2. Enviar o produto de volta', content: [
            { kind: 'checklist', items: [
              'Prazo máximo para envio — 14 dias a contar da notificação',
              'A devolução por transporte fica a cargo do comprador apenas se o vendedor o tiver informado previamente; caso contrário, o vendedor é obrigado a pagá-la',
              'Guarde o número de seguimento e o comprovativo — é a sua prova',
              'O produto deve estar numa embalagem razoável, com os acessórios'
            ]}
          ]},
          { id: 'o3', title: '3. Receber o dinheiro', content: [
            { kind: 'paragraph', text: 'O vendedor é obrigado a reembolsar o dinheiro no prazo de 14 dias a contar da receção da notificação, mas pode reter o reembolso até receber o produto. O método de reembolso deve ser o mesmo usado no pagamento. Não é permitido reter uma comissão «de processamento».' }
          ]}
        ]}
      ]
    },
    {
      id: 'exceptions',
      title: 'Quando os 14 dias NÃO se aplicam',
      content: [
        { kind: 'paragraph', text: 'O art. 17 do Decreto-Lei 24/2014 enumera as exceções:' },
        { kind: 'checklist', items: [
          '🍎 Bens perecíveis ou bens com prazo de validade curto (alimentos, flores)',
          '🎨 Bens personalizados (gravação, confeção por medida)',
          '💧 Bens selados de higiene ou saúde após abertura (cosméticos, roupa interior, lentes de contacto)',
          '📀 Áudio, vídeo ou software selados após abertura',
          '🎟️ Reservas com data fixa (hotel, avião, concerto)',
          '💻 Conteúdo digital após o início do descarregamento, se o comprador tiver dado o seu consentimento',
          '📰 Jornais e publicações periódicas (exceto assinaturas)',
          '🍷 Bebidas alcoólicas em contratos em que o preço é acordado no momento da celebração e a entrega ocorre depois de >30 dias, e o valor depende de flutuações do mercado',
          '🧾 Bens misturados com outros após a entrega (combustível, brita)'
        ]}
      ]
    },
    {
      id: 'physical-store',
      title: 'Na loja: devolução por boa vontade',
      content: [
        { kind: 'paragraph', text: 'Uma compra numa loja física sem defeito — a devolução NÃO é garantida por lei. Tudo depende da política da loja.' },
        { kind: 'checklist', items: [
          '🏬 Grandes cadeias (Continente, Pingo Doce, Worten, Fnac, H&M, Zara) dão frequentemente 15–30 dias',
          '🧾 O talão é obrigatório, e o produto deve estar na embalagem original',
          '💳 Normalmente o reembolso é feito para o cartão, se tiver pago com cartão, ou é emitido um vale do mesmo valor',
          '🛍️ Em saldos sazonais, aplica-se frequentemente a regra «apenas troca»',
          '⚠️ Sem talão, as hipóteses são praticamente nulas'
        ]},
        { kind: 'warning', text: 'A existência de um «direito de devolução de 14 dias» numa loja física é um mito. Trata-se de boa vontade do vendedor ou de uma promessa publicitária.' }
      ]
    },
    {
      id: 'conflicts',
      title: 'Conflitos e reclamações',
      content: [
        { kind: 'checklist', items: [
          'O vendedor ignora — apresente uma reclamação no Livro de Reclamações (versão em papel ou `livroreclamacoes.pt`)',
          'A cópia é enviada automaticamente para a ASAE ou para o regulador setorial',
          'Em paralelo, pode apresentar uma reclamação no Centro de Arbitragem de Conflitos de Consumo da sua região (CASA — Centro de Arbitragem do Sector Automóvel especializado; para outros setores existem centros próprios)',
          'Se o vendedor for de outro país da UE — Centro Europeu do Consumidor Portugal (cec.consumidor.pt)',
          'Julgado de Paz (tribunal de pequenas causas) — aprecia processos cíveis dentro da competência material até ao limite estabelecido por lei; não existe «limiar» de 200 €'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Devolução por transporte online', amountEURMin: 5, amountEURMax: 15, note: 'Envio standard CTT / MRW, o vendedor pode pagá-lo por sua iniciativa' },
    { label: 'Julgado de Paz', amountEUR: 70 }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 24/2014 — contratos à distância', url: 'https://dre.pt/dre/detalhe/decreto-lei/24-2014', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Diretiva UE 2011/83 — direitos dos consumidores', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0083', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações — portal oficial', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — compras online e devoluções', url: 'https://www.gov.pt/cidadaos/-/informacoes/direitos-do-consumidor', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
