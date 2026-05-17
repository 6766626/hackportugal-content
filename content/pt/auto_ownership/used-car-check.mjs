export default {
  editorialVoice: 'hackportugal',
  id: 'used-car-check',
  categoryId: 'auto_ownership',
  title: 'Verificação de carro usado antes da compra em Portugal',
  tldr: 'Cinco verificações antes de comprar um carro usado: (1) **Registo Automóvel** através do IRN/Conservatória/Automóvel Online (NÃO é o IMT — o registo de propriedade e ónus é mantido pelo IRN; através de automovelonline.mj.pt obtém a certidão com registos sobre o proprietário, reserva de propriedade, penhoras, hipotecas), (2) Finanças — IUC sem dívidas, (3) IPO recente, (4) Carvertical como equivalente ao Carfax para o histórico, (5) inspeção numa oficina independente. Por ~50 € evita comprar um carro com dívidas ou defeitos ocultos.',
  tags: ['carro usado', 'verificação', 'compra', 'dua'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'check-registo',
      title: '1. Registo Automóvel — registo oficial de propriedade (IRN)',
      content: [
        { kind: 'paragraph', text: 'O registo de propriedade automóvel e de ónus é mantido pelo **IRN (Instituto dos Registos e do Notariado)** através da Conservatória do Registo Automóvel e do serviço online **Automóvel Online** (automovelonline.mj.pt). NÃO é o IMT — o IMT trata da parte técnica (matrícula, IPO, cartas de condução), mas não do registo de propriedade.' },
        { kind: 'checklist', items: [
          '💻 automovelonline.mj.pt → pedir **certidão permanente do registo automóvel** (é necessário Chave Móvel Digital (CMD) ou Cartão de Cidadão (CC) + leitor)',
          '🔍 Introduzir a matrícula (número de registo)',
          '📋 a certidão mostra: proprietário atual, data de registo, ónus registados (reserva de propriedade, penhoras, hipotecas, locação financeira)',
          '🔒 «Penhora» — sinal de alerta, não compre',
          '💰 «Reserva de propriedade» — significa que o carro está associado a crédito; só deve comprar depois de a reserva ser cancelada',
          '🏦 «Hipoteca» — hipoteca/garantia bancária',
          '🚗 «Locação financeira» — leasing',
          '💶 Custo: a certidão permanente costuma ser ~25 € por 6 meses de acesso online (tarifa atual — em irn.justica.gov.pt / automovelonline.mj.pt)'
        ]}
      ]
    },
    {
      id: 'check-finances',
      title: '2. Finanças — IUC e dívidas',
      content: [
        { kind: 'paragraph', text: 'O vendedor deve apresentar a Declaração sem dívidas relativa ao IUC e IMT dos últimos 3 anos. É pedida no Portal das Finanças → «Certidões» → «Certidão de Não Dívida».' },
        { kind: 'checklist', items: [
          'Se o IUC não estiver pago — a dívida passa para si',
          'Exija comprovativo dos últimos 3 anos',
          'Verifique também multas — através da CGA / Finanças'
        ]}
      ]
    },
    {
      id: 'check-ipo',
      title: '3. IPO (inspeção técnica) e DUA',
      content: [
        { kind: 'checklist', items: [
          '🧾 DUA (Documento Único Automóvel) — documento principal',
          '🔎 O VIN no carro coincide com o DUA',
          '📅 O último IPO não tem mais de um ano (recente — bom sinal)',
          '📋 Relatório do IPO sem «deficiências graves»',
          '🛣️ Quilometragem real — verificar comparando relatórios de IPO de anos diferentes',
          '⚠️ Se o IPO não é feito há muito tempo — compre com a condição de «fazer primeiro o IPO»'
        ]}
      ]
    },
    {
      id: 'history-check',
      title: '4. Histórico e Carvertical',
      content: [
        { kind: 'paragraph', text: 'Carvertical (carvertical.com), CarfaxPT, Autobiz — serviços pagos de verificação de histórico por VIN. Mostram acidentes, quilometragem e proprietários em todos os países da UE.' },
        { kind: 'checklist', items: [
          '💶 15–30 € por relatório',
          '🔍 Quilometragem por datas (adulteração fica visível)',
          '💥 Acidentes e participações de seguro',
          '🌍 Países de registo anteriores',
          '🔧 Reparações em grandes redes (Bosch, Norauto)',
          '🚨 «Salvage» / «Total loss» — sinal de alerta'
        ]}
      ]
    },
    {
      id: 'oficina-check',
      title: '5. Inspeção na oficina',
      content: [
        { kind: 'checklist', items: [
          '🔧 Leve para diagnóstico: 40–80 € numa oficina independente',
          '📋 Verificação completa: motor, transmissão, suspensão, travões, ferrugem na carroçaria',
          '💻 Diagnóstico OBD — códigos de erro da ECU',
          '🛞 Pneus, desenho do piso, data de fabrico',
          '🪟 Carroçaria quanto a repintura, massa (medindo com medidor de espessura)',
          '❄️ Ar condicionado funciona no verão / inverno',
          '🧰 Todos os botões / componentes elétricos funcionam',
          '🗒️ Peça um relatório escrito — será útil na negociação'
        ]}
      ]
    },
    {
      id: 'purchase',
      title: 'Formalização da compra',
      content: [
        { kind: 'checklist', items: [
          '📝 Contrato de compra e venda — 2 exemplares com os dados de todas as partes',
          '🆔 Ambas as partes: CC/autorização de residência, NIF, IBAN',
          '📋 Entrega-receção do DUA + chaves + sobresselentes',
          '💶 Pagamento — transferência bancária com a descrição «compra viatura matrícula X»',
          '🏢 Registo de propriedade no IRN (irn.justica.gov.pt) — 45 € + formalização',
          '📅 Prazo para registar a alteração — 60 dias a contar da assinatura',
          '🛡️ Seguro em seu nome a partir do dia da entrega',
          '🧾 IUC: o proprietário em 1 de janeiro do ano corrente continua responsável por esse ano; não há recálculo quando há mudança de proprietário durante o ano. O ano seguinte — fica a cargo do novo proprietário'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Certidão Permanente Registo Automóvel (IRN/Automóvel Online)', amountEURMin: 15, amountEURMax: 25, note: 'as tarifas podem variar, verifique em irn.justica.gov.pt' },
    { label: 'Relatório Carvertical', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Diagnóstico na oficina', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Registo de propriedade para o novo proprietário (IRN)', amountEURMin: 45, amountEURMax: 65 },
    { label: 'TOTAL das verificações antes do negócio', amountEURMin: 60, amountEURMax: 130 }
  ],
  sources: [
    { title: 'Automóvel Online — IRN/Conservatória', url: 'https://automovelonline.mj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN — Registo Automóvel', url: 'https://justica.gov.pt/Servicos/Registar-automovel', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — Certidões', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT — IPO (inspeção técnica)', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
