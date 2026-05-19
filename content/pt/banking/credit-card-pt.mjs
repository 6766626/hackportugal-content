export default {
  editorialVoice: 'hackportugal',
  id: 'credit-card-pt',
  categoryId: 'banking',
  title: 'Cartões de crédito em Portugal — como obter e que tipos existem',
  tldr: 'Os cartões de crédito em Portugal são diferentes dos da Federação Russa/Ucrânia: um verdadeiro crédito com limite e pagamento mensal é um «cartão de crédito». Um cartão de débito associado à conta é um «cartão de débito»; muitas vezes é chamado cartão MB. Normalmente, para um cartão de crédito, o banco pede NIF, documento de identificação/autorização de residência ou certificado de registo para cidadãos da UE, comprovativo de morada, comprovativo de rendimentos e, por vezes, NISS/comprovativo de contribuições sociais. O tempo de residência e de relação com o banco aumenta as hipóteses, mas um limiar concreto («6+ meses») é prática bancária, não lei. Principais bancos: Millennium BCP, ActivoBank, Santander, BPI.',
  tags: ['cartão de crédito', 'cartão de crédito', 'banco', 'crédito', 'cashback'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'difference',
      title: '💳 Débito ou crédito',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Cartão de débito (cartão de débito)', content: [
            { kind: 'checklist', items: [
              '✅ Associado à conta à ordem, gasta o seu próprio dinheiro',
              '✅ Funciona no Multibanco, em caixas automáticos e terminais de pagamento',
              '✅ Gratuito ou 1–2 €/mês',
              '✅ É possível ultrapassar o saldo até ao descoberto acordado com o banco',
              '⚠️ MB Net para pagamentos online — cartão virtual separado',
              '⚠️ Não conta como crédito no histórico de crédito'
            ]}
          ]},
          { id: 'd2', title: 'Cartão de crédito (cartão de crédito)', content: [
            { kind: 'checklist', items: [
              '💵 O limite é definido pelo banco com base no rendimento',
              '💵 Paga no fim do mês: o montante total ou uma parte com juros',
              '🔁 Pode escolher pagamento a 100% na data de débito — nesse caso, normalmente não são cobrados juros sobre compras',
              '📊 Entra no histórico de crédito do Banco de Portugal (CRC)',
              '🎁 Cashback, milhas, seguro de viagem',
              '⚠️ Se não pagar 100%, são aplicadas TAN/TAEG conforme o contrato; verifique a FIN/FINE e os limites máximos de TAEG trimestrais do Banco de Portugal',
              '💰 Anuidade: 0–150 € dependendo do nível do cartão'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: '✅ Requisitos para obter',
      content: [
        { kind: 'checklist', items: [
          '🪪 Estatuto legal/morada comprovados em Portugal; o tempo de residência e de relação com o banco aumenta as hipóteses, mas o limiar concreto depende do banco',
          '🆔 O NIF é obrigatório; o NISS é frequentemente pedido a trabalhadores por conta de outrem/recibos verdes, mas a lista de documentos depende do banco e da fonte de rendimento',
          '💰 Rendimento regular: contrato de trabalho, recibos verdes, pensão ou outras fontes',
          '📊 Histórico de crédito: nos primeiros 6–12 meses de vida em Portugal não há histórico, por isso o limite será baixo — 300–500 €',
          '⚠️ Se não houver rendimento próprio comprovado, o banco frequentemente recusa ou propõe um limite muito baixo; por vezes é possível um co-requerente/fiador',
          '🏦 Ter uma conta existente nesse banco aumenta as hipóteses',
          '⛔ Atrasos/incumprimento ou endividamento excessivo na CRC quase de certeza irão piorar a decisão; créditos normais sem atrasos não são, por si só, uma recusa automática'
        ]}
      ]
    },
    {
      id: 'cards',
      title: '🎴 Cartões populares',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Cartões básicos até 30 €/ano', content: [
            { kind: 'checklist', items: [
              '🟢 Millennium Cartão Premium: 0 € de anuidade, 1% de cashback em compras pontuais, limite 500–3000 €',
              '🟢 ActivoBank Visa Classic: 0 € de anuidade, limite 500–2500 €, adequado para compras online',
              '🟢 Santander Light: 0 € de anuidade, limite básico',
              '🟢 CGD Caixa Worldwide: 19 €/ano, aceite em 200+ países',
              '🟢 BPI 5 estrelas: 25 €/ano, milhões de caixas automáticos BPI'
            ]}
          ]},
          { id: 'c2', title: 'Cashback e bónus', content: [
            { kind: 'checklist', items: [
              '🟡 Millennium World Mastercard: 75 €/ano, 0,5–1% de cashback + seguro de viagem',
              '🟡 ActivoBank Gold: 50 €/ano, seguro + 0,5% de cashback',
              '🟡 CGD Universal Plus: 30 €/ano, 1% de cashback no Continente / Pingo Doce',
              '🟡 Santander Light Visa: 0,3% de cashback, 35 €/ano',
              '🟡 Wizink White: 0 €/ano, 0% TAEG durante 24 meses para transferência de dívida'
            ]}
          ]},
          { id: 'c3', title: 'Cartões premium (Platinum, World Elite)', content: [
            { kind: 'checklist', items: [
              '🟣 Millennium Visa Platinum: 150 €/ano, 1–2% de cashback, acesso a salas lounge, seguro',
              '🟣 BPI World Elite Mastercard: 250 €/ano, serviço de concierge premium',
              '🟣 Santander Select: 200 €/ano, pacote familiar premium',
              '🟣 Caixa Geral Visa Infinite: 300 €/ano, serviço de concierge exclusivo',
              '⚠️ O rendimento para Platinum é normalmente a partir de 50 000 €/ano'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 Como apresentar o pedido',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Você já é cliente do banco', content: [
            { kind: 'checklist', items: [
              '💻 Através do homebanking — normalmente um clique em «pedir cartão de crédito»',
              '📊 O banco calcula automaticamente o limite com base no salário',
              '✅ Decisão em 1–3 dias úteis',
              '📦 O cartão chega por correio em 5–7 dias'
            ]}
          ]},
          { id: 'a2', title: 'Você não é cliente do banco', content: [
            { kind: 'checklist', items: [
              '🏛️ Marcar atendimento numa agência',
              '📋 Levar: autorização de residência/Cartão de Cidadão, NIF, NISS, recibo de vencimento dos últimos 3 meses, comprovativo de morada, declaração de IRS (modelo 3), se tiver recibos verdes',
              '💼 Decisão em 5–15 dias úteis',
              '✍️ Assinar o contrato'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'building-credit',
      title: '📈 Como construir histórico de crédito',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe uma pontuação de crédito pública como nos EUA (FICO). O Banco de Portugal mantém a CRC (Mapa de Responsabilidades de Crédito) — uma lista dos seus créditos e atrasos. Os bancos utilizam o seu próprio scoring interno.' },
        { kind: 'checklist', items: [
          '✅ Pagar o cartão de crédito a 100% todos os meses — isto aumenta a confiança do banco',
          '✅ Receber o salário ou rendimento de recibos verdes no mesmo banco durante 6 meses',
          '✅ Após 12 meses, pedir o aumento do limite através do homebanking',
          '✅ Não utilizar constantemente mais de 70% do limite',
          '⛔ Um atraso entra na comunicação à CRC e pode prejudicar seriamente o acesso a crédito; depois da regularização, é importante verificar como o banco actualizou o estado na CRC',
          '⛔ Abrir muitos cartões de crédito de uma vez = os bancos reduzem o limite',
          '📊 Pode pedir o extracto da CRC gratuitamente: bportugal.pt → «Mapa de Responsabilidades»',
          '💰 Bom histórico após 12 meses = acesso a crédito à habitação e crédito automóvel'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '💳 O primeiro cartão de crédito é o mais difícil; depois torna-se mais fácil',
          '🎁 Cashback no Continente / Pingo Doce + cartão de crédito = dupla vantagem: cartão do supermercado + cashback do cartão de crédito',
          '🌍 Para viagens ao estrangeiro, é vantajoso pagar com cartão de crédito: muitas vezes têm seguro e chargeback, ou seja, devolução do dinheiro em caso de fraude',
          '⚖️ IMPORTANTE: MUITOS cartões de crédito russos estão bloqueados para pagamentos em Portugal — é necessário um cartão local',
          '🚫 Nunca fazer cash advance com o cartão de crédito — comissão de 5% + juros desde o primeiro dia',
          '🔁 Se não conseguir pagar 100% — combine antecipadamente com o banco uma modalidade de pagamento ou reestruturação; não pagar sem acordo = incumprimento e agravamento da CRC',
          '⚖️ Não confundir: direito ao esquecimento (Lei 75/2021) diz respeito à proibição de discriminação no acesso a crédito/seguros para pessoas com historial oncológico/deficiência, e não ao perdão de dívidas. Os prazos de prescrição das dívidas dependem do tipo de obrigação — é necessária consulta com advogado/DECO',
          '🏆 Wizink White com balance transfer a 0% APR durante 24 meses — uma salvação se tiver dívidas noutros cartões de crédito'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Anuidade de um cartão de crédito básico', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Anuidade de um cartão de crédito premium', amountEURMin: 100, amountEURMax: 300 },
    { label: 'TAN/TAEG em revolving/pagamento fracionado', amountEUR: 0, note: 'Depende do cartão; não pode exceder as taxas máximas trimestrais do Banco de Portugal — verifique a FIN/FINE' },
    { label: 'Comissão por levantamento de dinheiro com cartão de crédito', amountEURMin: 5, amountEURMax: 25 }
  ],
  sources: [
    { title: 'Banco de Portugal — Mapa de Responsabilidades', url: 'https://www.bportugal.pt/page/mapa-de-responsabilidades-de-credito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — Cartões de Crédito (Portal do Cliente Bancário)', url: 'https://clientebancario.bportugal.pt/pt-pt/cartoes-de-credito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
