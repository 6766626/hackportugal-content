export default {
  editorialVoice: 'hackportugal',
  id: 'consumer-rights',
  categoryId: 'emergency_rights',
  title: 'Direitos do consumidor — devolução, troca, garantia',
  tldr: 'Em Portugal vigora a protecção do consumidor padrão da UE: 14 dias para desistir de uma compra online/à distância (DL 24/2014), 3 anos de garantia para bens novos (Lei 84/2021), 1 ano para bens usados. Em caso de problema: apresentar reclamação através do Livro de Reclamações Online (livroreclamacoes.pt), contactar a DECO Proteste para apoio, e a ECC Net para litígios transfronteiriços na UE. As lojas são obrigadas a aceitar bens com defeitos e a propor substituição/reparação/reembolso. Se recusarem — reclamação à ASAE (asae.gov.pt).',
  tags: ['consumidor', 'devolução', 'garantia', 'reclamação', 'deco', 'asae'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rights-overview',
      title: '⚖️ Direitos básicos',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Garantia dos bens (Lei 84/2021)', content: [
            { kind: 'checklist', items: [
              '✅ Bens novos: 3 anos de garantia (antes eram 2 — alterado em 2022)',
              '✅ Bens usados: mínimo de 1 ano; vendedor e comprador podem acordar outro prazo',
              '✅ A garantia cobre DEFEITOS de conformidade — não desgaste, nem danos causados por culpa do comprador',
              '🔁 Em caso de defeito, o vendedor é obrigado a propor: reparação OU substituição OU desconto OU reembolso',
              '⏰ Nos primeiros 6 meses aplica-se a presunção de que o defeito existia desde o momento da venda (ónus da prova a cargo do vendedor)',
              '📋 Guarde o recibo (talão de compra) e a embalagem durante todo o prazo da garantia'
            ]}
          ]},
          { id: 'r2', title: 'Direito de livre resolução (apenas online/à distância)', content: [
            { kind: 'checklist', items: [
              '🌐 14 dias para desistir de uma compra online / por telefone / ao domicílio (DL 24/2014)',
              '🚫 SEM explicar os motivos',
              '✅ Reembolso integral no prazo de 14 dias',
              '🚚 A devolução por transporte fica normalmente a cargo do comprador (se a loja não indicar o contrário)',
              '🚫 Excepções: bens personalizados, bens perecíveis, roupa interior (desembalada), software (desembalado), subscrições (após activação)',
              '⚠️ Numa loja física, a regra dos 14 dias NÃO se aplica (mas muitas lojas aceitam voluntariamente devoluções no prazo de 30 dias — pergunte)'
            ]}
          ]},
          { id: 'r3', title: 'Informação e preços', content: [
            { kind: 'checklist', items: [
              '🏷️ O preço INCLUI IVA — sem suplementos ocultos',
              '⚖️ Se na caixa o preço for superior ao da etiqueta, o vendedor é obrigado a vender pelo preço mais baixo',
              '📜 O rótulo deve conter: ingredientes, país de origem, prazo de validade (para alimentos)',
              '🌐 No site — todos os preços com IVA, portes em separado',
              '⚠️ «Black Friday»: o preço deve ser INFERIOR ao preço médio dos últimos 30 dias (Directiva Omnibus UE)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-complain',
      title: '📋 Como apresentar uma reclamação',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Passo 1 — Livro de Reclamações', content: [
            { kind: 'checklist', items: [
              '📓 Todos os estabelecimentos comerciais ou prestadores de serviços são obrigados por lei a ter «Livro de Reclamações» (físico ou electrónico)',
              '📝 Peça-o — são obrigados a disponibilizá-lo a qualquer momento',
              '✍️ Preenche 3 cópias: para si, para o estabelecimento, para o regulador',
              '🌐 Alternativa — Livro de Reclamações Online em livroreclamacoes.pt (o mesmo efeito)',
              '⏰ Prazo obrigatório de resposta do estabelecimento: 15 dias',
              '👮 O regulador (ASAE/DGC) intervém e, por vezes, aplica coimas à loja'
            ]}
          ]},
          { id: 'l2', title: 'Passo 2 — DECO Proteste (apoio)', content: [
            { kind: 'checklist', items: [
              '🛡️ A DECO é a maior associação de defesa do consumidor',
              '💰 Subscrição paga: 25 €/mês — consultor pessoal, modelos de cartas, mediação',
              '🆓 Apoio básico gratuito: 707 200 200 (linha de apoio)',
              '📩 Pedido através do site deco.proteste.pt',
              '📚 Revista «Pro Teste» com testes de bens e serviços'
            ]}
          ]},
          { id: 'l3', title: 'Passo 3 — Regulador', content: [
            { kind: 'checklist', items: [
              '⚖️ ASAE (Autoridade de Segurança Alimentar e Económica) — controlo geral do comércio, asae.gov.pt',
              '⚡ ERSE (electricidade, gás) — erse.pt',
              '📞 ANACOM (telecomunicações, internet) — anacom.pt',
              '🏥 INFARMED (medicamentos) — infarmed.pt',
              '🏦 Banco de Portugal (bancos) — bportugal.pt',
              '🚗 AT IMT (automóvel) — imt-ip.pt',
              '✈️ ANAC (aviação) — anac.pt'
            ]}
          ]},
          { id: 'l4', title: 'Passo 4 — Tribunal / Julgados de Paz', content: [
            { kind: 'checklist', items: [
              '⚖️ Julgados de Paz: pequenas acções até 15 000 € — mais rápido do que um tribunal comum',
              '💰 Custas judiciais de 70 € (se o pedido ≤ 5000 €) ou 105 € (>5000)',
              '⏱️ Decisão normalmente em 2-6 meses',
              '🎓 Advogado não é obrigatório (para pedidos ≤ 3 740 €)',
              '🏛️ Endereços: julgadosdepaz.mj.pt'
            ]}
          ]},
          { id: 'l5', title: 'Litígio transfronteiriço (outro país da UE)', content: [
            { kind: 'checklist', items: [
              '🇪🇺 Centro Europeu do Consumidor (ECC-Net): cec.consumidor.pt',
              '🆓 Apoio gratuito, mediação entre comprador em Portugal e loja estrangeira na UE',
              '📧 ec.europa.eu/consumers — para apresentar online',
              '⏱️ A solução através da ECC costuma demorar 2-3 meses'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sample-cases',
      title: '🎯 Casos típicos',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'O telemóvel avariou ao fim de 8 meses', content: [
            { kind: 'checklist', items: [
              '✅ Dentro dos 3 anos de garantia — contactar a loja',
              '📋 A loja é OBRIGADA a propor: reparação/substituição/reembolso',
              '⏰ Prazo de reparação: máximo de 30 dias; se demorar mais — direito a substituição/reembolso',
              '⚠️ Se recusarem — Livro de Reclamações + ASAE'
            ]}
          ]},
          { id: 's2', title: 'Comprou online roupa desconfortável', content: [
            { kind: 'checklist', items: [
              '✅ 14 dias a contar da recepção — desistência sem explicações',
              '📦 Embalar (não tem de estar «como novo», mas o bem não pode estar danificado)',
              '📩 Notificar o vendedor por e-mail: «exerço o meu direito de livre resolução»',
              '📮 Enviar de volta (custo de envio a cargo do comprador)',
              '💸 O dinheiro é reembolsado no prazo de 14 dias',
              '⚠️ Roupa interior, calçado desembalado — podem recusar em condições específicas'
            ]}
          ]},
          { id: 's3', title: 'A companhia aérea cancelou o voo', content: [
            { kind: 'checklist', items: [
              '🛫 Regulamento UE 261/2004 — compensação de 250-600 € + reencaminhamento',
              '📜 Ver guia separado sobre compensações aéreas (eu-flight-compensation)',
              '🏛️ Regulador: ANAC (anac.pt)'
            ]}
          ]},
          { id: 's4', title: 'Comissões ocultas no banco', content: [
            { kind: 'checklist', items: [
              '🏦 Banco de Portugal — Portal do Cliente Bancário',
              '📋 Reclamação online em bportugal.pt',
              '⏱️ A resposta do banco é obrigatória no prazo de 30 dias',
              '⚖️ O banco é OBRIGADO a divulgar todas as comissões no «PFFI» (folheto fiscal)'
            ]}
          ]},
          { id: 's5', title: 'Produto fora de prazo no supermercado', content: [
            { kind: 'checklist', items: [
              '🏪 ASAE: fotografia + recibo + vídeo — reclamação em asae.gov.pt',
              '⚠️ Se consumiu — consulte um médico; o seguro da loja pode cobrir os danos',
              '💰 Coimas da ASAE à loja: 2 000-30 000 €',
              '🛒 Continente / Pingo Doce costumam fazer reembolso integral + bónus no cartão'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📷 Fotografe o bem ao recebê-lo — é prova se estiver danificado',
          '🧾 Guarde os recibos no Google Drive — a aplicação ChequeCloud funciona',
          '📅 Registe a data da compra — para contar o prazo da garantia',
          '🤝 Comece pela via amigável: em 90% dos casos, o gerente da loja resolve sem reclamações',
          '⚠️ Se a loja fechou: a garantia passa para o fabricante (se existir — Apple, Samsung, Bosch)',
          '🌐 Verifique a loja no «Livro de Reclamações» — reclamações frequentes = não compre',
          '📚 «Direitos do Consumidor» — brochura oficial gratuita da DGC',
          '🇪🇺 EU Online Dispute Resolution: ec.europa.eu/odr — para litígios transfronteiriços',
          '⚖️ A quota anual da DECO Proteste paga-se com um único problema sério',
          '🛡️ Cartão de crédito: chargeback através do banco — último recurso (o banco reverte o débito)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Livro de Reclamações', amountEUR: 0, note: 'obrigatoriamente gratuito' },
    { label: 'Subscrição DECO Proteste', amountEURMin: 25, amountEURMax: 25, note: '€/mês' },
    { label: 'Julgados de Paz (≤ 5000 €)', amountEUR: 70 },
    { label: 'Julgados de Paz (5000-15000 €)', amountEUR: 105 },
    { label: 'Advogado para um caso sério', amountEURMin: 200, amountEURMax: 1500, note: '€ pagamento único' }
  ],
  sources: [
    { title: 'Livro de Reclamações Online', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASAE — Autoridade de Segurança Alimentar e Económica', url: 'https://www.asae.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 84/2021 — Garantia de bens', url: 'https://diariodarepublica.pt/dr/detalhe/lei/84-2021-176053057', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 24/2014 — Contratos à distância', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/24-2014-572691', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Centro Europeu do Consumidor (ECC-Net Portugal)', url: 'https://cec.consumidor.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
