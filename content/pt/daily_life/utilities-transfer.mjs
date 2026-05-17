export default {
  editorialVoice: 'hackportugal',
  id: 'utilities-transfer',
  categoryId: 'daily_life',
  title: 'Serviços públicos — contratos, mudança de fornecedor, poupança',
  tldr: 'Em Portugal há 3 serviços obrigatórios: electricidade, água, gás (se estiver ligado). Electricidade e gás — mercado liberalizado: pode escolher o fornecedor, por exemplo EDP, Galp, Iberdrola, Endesa e outros. A água é sempre um serviço municipal (EPAL em Lisboa). A mudança de fornecedor é gratuita e decorre sem interrupções. A transferência de contratos para uma nova morada em caso de mudança demora 5–15 dias, sem penalização, nos termos do Decreto-Lei 38/2017.',
  tags: ['electricidade', 'gás', 'água', 'edp', 'galp', 'iberdrola'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'market',
      title: 'Mercado regulado e liberalizado',
      content: [
        { kind: 'paragraph', text: 'A electricidade e o gás em Portugal estão liberalizados desde 2015 — o fornecedor pode ser qualquer empresa, com preços livres. Paralelamente, desde 2021 regressou a tarifa regulada para clientes vulneráveis: pessoas idosas e pessoas com baixos rendimentos.' },
        { kind: 'checklist', items: [
          '💡 Electricidade: mais de 20 fornecedores (EDP Comercial, Galp, Iberdrola, Endesa, Goldenergy, Coopérnico, Luzigás, entre outros)',
          '🔥 Gás: mais de 10 fornecedores (muitas vezes os mesmos)',
          '💧 Água: municipal (EPAL, SMAS, Águas do Douro, entre outros) — não é possível escolher',
          '📜 Regulador: ERSE (Entidade Reguladora dos Serviços Energéticos)',
          '💡 Comparação de tarifas: poupaenergia.pt (agregador oficial da ERSE)'
        ]}
      ]
    },
    {
      id: 'choose-supplier',
      title: 'Como escolher o fornecedor',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Conhecer o consumo', content: [
            { kind: 'paragraph', text: 'Apartamento médio de 70 m² para 2 pessoas: 150–250 kWh/mês (electricidade), 50 m³ de gás no Inverno. Famílias maiores — mais de 500 kWh.' }
          ]},
          { id: 's2', title: '2. Escolher a potência (potência)', content: [
            { kind: 'checklist', items: [
              '3.45 kVA — apartamento pequeno sem aparelhos de grande potência',
              '4.60 kVA — apartamento T2 padrão',
              '6.90 kVA — apartamento T3 com ar condicionado e placa eléctrica',
              '10.35 kVA — casa grande / termoacumulador',
              '13.80+ kVA — utilização profissional'
            ]}
          ]},
          { id: 's3', title: '3. Tarifa (tarifa)', content: [
            { kind: 'checklist', items: [
              'Simples — um preço 24/7',
              'Bi-horária — dia / noite (das 22:00 às 08:00)',
              'Tri-horária — ponta / cheias / vazio (para indústria)'
            ]}
          ]},
          { id: 's4', title: '4. Comparar em poupaenergia.pt', content: [
            { kind: 'paragraph', text: 'Site oficial da ERSE. É necessário introduzir o código postal, o consumo e a potência → aparece uma lista de todas as tarifas com o preço por mês.' }
          ]}
        ]}
      ]
    },
    {
      id: 'new-contract',
      title: 'Celebração do contrato',
      content: [
        { kind: 'checklist', items: [
          '📋 Documentos: Cartão de Cidadão/autorização de residência, NIF, IBAN para débito directo',
          '🏠 Morada e códigos energéticos (CPE para electricidade, CUI para gás) — indicados no contador já instalado',
          '💻 Online através do site do fornecedor ou do call center',
          '📞 Pagamento: débito directo mensal ou referência Multibanco',
          '📅 Ligação: 2–10 dias úteis',
          '📊 Leituras do contador — de 2 em 2 meses, autonomamente ou por telefone'
        ]},
        { kind: 'warning', text: 'O Certificado Energético é exigido, em regra, na venda/arrendamento de imóveis (Decreto-Lei 101-D/2020), e não como condição para uma nova ligação de electricidade/gás. Para o contrato propriamente dito com o fornecedor são necessários os códigos CPE/CUI do contador. Confirme com o senhorio ao assinar o contrato.' }
      ]
    },
    {
      id: 'change',
      title: 'Mudança de fornecedor',
      content: [
        { kind: 'checklist', items: [
          '💻 Online no site do novo fornecedor — demora 5 minutos',
          '📝 Necessário: NIF, CPE / CUI (na factura), IBAN',
          '📅 A transição é automática — no máximo 3 semanas',
          '💡 A electricidade não é interrompida nem por um minuto',
          '💰 Não há comissão de mudança',
          '🔒 O contrato antigo é encerrado automaticamente, o novo fornecedor trata do processo',
          '📊 Factura final do fornecedor antigo — após a última leitura'
        ]}
      ]
    },
    {
      id: 'move',
      title: 'Mudança de casa — transferência do contrato',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Manter o fornecedor antigo, mas alterar a morada', content: [
            { kind: 'paragraph', text: 'Pedido através da aplicação: «Alteração de morada do contrato». Mantêm-se a tarifa e o número do contrato. Prazo — 5–10 dias.' }
          ]},
          { id: 'm2', title: 'Novo fornecedor na nova casa', content: [
            { kind: 'paragraph', text: 'Se o morador anterior deixou um contrato activo, você encerra-o mediante pedido e celebra de imediato o seu. Sem atrasos.' }
          ]},
          { id: 'm3', title: 'Serviço desligado após uma pausa prolongada', content: [
            { kind: 'paragraph', text: 'É necessária uma nova ligação: 50–100 € + técnico no local. Prazo — até 15 dias. Se o contador for antigo, a substituição é obrigatória.' }
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Problemas e reclamações',
      content: [
        { kind: 'checklist', items: [
          '📋 Livro de Reclamações — em papel ou em livroreclamacoes.pt',
          '⚖️ ERSE — regulador, erse.pt/reclamações',
          '⚡ DGEG (Direcção-Geral de Energia) — para casos graves',
          '💰 CTC (Centro de Arbitragem de Conflitos de Consumo) — a nível regional',
          '🚫 O corte de electricidade sem aviso é proibido; há direito a compensação',
          '📅 Atrasos no reembolso / crédito >30 dias — multa para o fornecedor'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Electricidade, apartamento médio de 70 m²', amountEURMin: 40, amountEURMax: 80, note: '€/mês' },
    { label: 'Gás (se estiver ligado)', amountEURMin: 30, amountEURMax: 80, note: '€/mês' },
    { label: 'Água (EPAL Lisboa, 2 pessoas)', amountEURMin: 15, amountEURMax: 30, note: '€/mês' },
    { label: 'Mudança de fornecedor', amountEUR: 0 },
    { label: 'Nova ligação de serviço desligado', amountEURMin: 50, amountEURMax: 100 }
  ],
  sources: [
    { title: 'ERSE — Entidade Reguladora dos Serviços Energéticos', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Poupa Energia — agregador oficial da ERSE', url: 'https://www.poupaenergia.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Direcção-Geral de Energia e Geologia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 38/2017 — comercialização de electricidade', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/38-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
