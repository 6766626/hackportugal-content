export default {
  editorialVoice: 'hackportugal',
  id: 'iva-reembolso-pedido',
  categoryId: 'taxes',
  title: 'Reembolso de IVA por pagamento em excesso: pedido de reembolso a partir de 250 €',
  tldr: 'Se, nos recibos verdes ou numa empresa, o IVA suportado nas despesas for superior ao IVA liquidado nas vendas, o crédito pode não ser reportado e pode ser pedido o reembolso através da declaração periódica de IVA: campo 95 «Montante a reembolsar». O mínimo para pedido de reembolso é 250 €. A submissão é feita no Portal das Finanças juntamente com a declaração mensal ou trimestral; o tratamento normal pela AT é de cerca de 30 dias em caso de validação automática e até 60 dias pela regra geral do art. 22 CIVA. O dinheiro é pago para o IBAN registado nas Finanças.',
  tags: ['iva', 'reembolso', 'finanças', 'recibos verdes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-it-applies',
      title: 'Quando pode pedir o reembolso de IVA',
      content: [
        { kind: 'paragraph', text: 'O pedido de reembolso é a devolução de crédito de IVA acumulado. Surge quando o IVA dedutível de compras, importações, rendas, contabilidade, equipamento e outras despesas empresariais é superior ao IVA que liquidou aos clientes.' },
        { kind: 'checklist', items: [
          'Está registado como sujeito passivo de IVA: trabalhador independente com atividade aberta ou empresa.',
          'Entrega a declaração periódica de IVA — mensal ou trimestral.',
          'Na declaração apurou-se crédito de imposto, e não IVA a pagar.',
          'O montante a reembolsar no campo 95 é de pelo menos 250 €.',
          'As despesas estão efetivamente relacionadas com uma atividade sujeita a IVA.',
          'As faturas foram emitidas com o seu NIF ou NIPC e estão visíveis/registadas no e-Fatura ou na contabilidade.',
          'O IBAN está confirmado no Portal das Finanças.',
          'Não há declarações de IVA, IES/DA ou outras obrigações declarativas em falta que a AT possa usar como fundamento para atrasar o reembolso.'
        ] },
        { kind: 'warning', text: 'Se trabalha no regime de isenção art. 53 CIVA, normalmente não liquida IVA aos clientes nem deduz IVA das despesas. Portanto, o pedido de reembolso normal através do campo 95 não se aplica a si.' }
      ]
    },
    {
      id: 'field-95',
      title: 'Campo 95: o que deve exatamente preencher',
      content: [
        { kind: 'paragraph', text: 'Na declaração periódica de IVA, depois do cálculo do imposto, o sistema mostra se existe IVA a pagar ou crédito. Se quiser receber o crédito em dinheiro, o montante é colocado no quadro 06, campo 95 — «Montante a reembolsar». Se preferir reportá-lo para o período seguinte, usa-se o campo 96 — «Excesso a reportar».' },
        { kind: 'checklist', items: [
          'Pode pedir o crédito total ou apenas uma parte, desde que o campo 95 fique ≥250 €.',
          'O saldo que não pedir para reembolso é reportado para os períodos seguintes.',
          'O montante não pode ser “inventado”: deve resultar do cálculo da declaração.',
          'Se o crédito for inferior a 250 €, o pedido de reembolso não avança — o montante é reportado.',
          'Para empresas com investimentos permanentes, o reembolso costuma ser mais vantajoso do que reportar crédito indefinidamente.',
          'Para freelancers com despesas reduzidas, pode ser mais simples reportar o crédito até este atingir 250 €.'
        ] },
        { kind: 'warning', text: 'Não confunda isto com tourist tax free. Aqui trata-se do reembolso de IVA a uma empresa ou a um trabalhador independente registado no Portuguese VAT system.' }
      ]
    },
    {
      id: 'before-submitting',
      title: 'Verificação antes de submeter nas Finanças',
      content: [
        { kind: 'paragraph', text: 'A AT cruza automaticamente declarações, e-Fatura, períodos anteriores, dívidas e dados bancários. Quanto mais limpa estiver a preparação, maior a probabilidade de receber o reembolso sem verificação manual.' },
        { kind: 'checklist', items: [
          'Confirme que a atividade aberta inclui os códigos CAE/CIRS reais da sua atividade.',
          'Confira todas as faturas emitidas/recibos verdes com os montantes de IVA na declaração.',
          'Verifique as faturas de despesas: NIF/NIPC, data, taxa de IVA, ligação ao negócio.',
          'Exclua IVA não dedutível: despesas pessoais, parte das despesas com automóveis ligeiros, coimas, despesas de representação acima do permitido.',
          'Garanta que não existem declarações periódicas de IVA em falta de períodos anteriores.',
          'Confirme que a Modelo 10, IES/DA e retenções na fonte, se aplicável, foram entregues.',
          'Entre em Finanças → Dados Cadastrais → IBAN e confirme a conta bancária.',
          'Guarde o PDF da declaração, a lista de faturas e o cálculo do crédito — a AT pode pedir documentos.'
        ] },
        { kind: 'warning', text: 'Se pedir um reembolso elevado logo depois de abrir atividade ou de comprar equipamento caro, isso não é proibido, mas o risco de pedido de documentos é maior. Guarde a fatura, o proof of payment, o contrato e a explicação da utilização empresarial.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como submeter o pedido de reembolso online',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Autentique-se com NIF + palavra-passe, Chave Móvel Digital ou Cartão de Cidadão. Para uma empresa, normalmente é necessário acesso do representante ou do contabilista certificado.' }
          ] },
          { id: 'declaration', title: '2. Abrir a declaração periódica de IVA', content: [
            { kind: 'paragraph', text: 'O caminho no Portal das Finanças muda, mas a secção costuma encontrar-se através de IVA → Declaração Periódica → Entregar declaração. Escolha o período: mensal ou trimestral.' }
          ] },
          { id: 'calculate', title: '3. Preencher o IVA e calcular o crédito', content: [
            { kind: 'paragraph', text: 'Indique taxable operations, IVA liquidado, IVA dedutível, regularizações e outros campos. Depois do cálculo, confirme que resultou excesso/crédito.' }
          ] },
          { id: 'request', title: '4. Preencher o campo 95', content: [
            { kind: 'paragraph', text: 'Insira o montante do reembolso no campo 95. Se reportar parte do crédito, verifique o campo 96. Submeta a declaração e guarde o comprovativo.' }
          ] },
          { id: 'follow-up', title: '5. Acompanhar o estado', content: [
            { kind: 'paragraph', text: 'O estado do reembolso é consultado no Portal das Finanças na área de IVA / reembolsos. Se a AT pedir documentos, responda dentro do prazo através do e-Balcão ou do canal indicado na notificação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'deadlines-payment',
      title: 'Prazos: declaração, 30/60 dias e pagamento',
      content: [
        { kind: 'paragraph', text: 'Em 2026, os prazos normais de entrega da declaração periódica de IVA são: regime mensal — até ao dia 20 do segundo mês seguinte ao período; regime trimestral — até ao dia 20 do segundo mês seguinte ao trimestre. Por exemplo, o IVA de janeiro de 2026 é entregue até 20 de março de 2026, e o 1.º trimestre de 2026 até 20 de maio de 2026.' },
        { kind: 'paragraph', text: 'Após o pedido de reembolso, a AT trata o reembolso em cerca de 30 dias se a declaração passar nas verificações automáticas e não houver divergências. Pela regra geral do art. 22 CIVA, o reembolso deve ser efetuado até ao fim do segundo mês seguinte ao da apresentação do pedido, ou seja, conte com um prazo até 60 dias.' },
        { kind: 'checklist', items: [
          'O dinheiro é transferido para o IBAN registado nas Finanças.',
          'Se o IBAN não estiver confirmado, o pagamento será atrasado.',
          'Se existirem dívidas fiscais, a AT pode compensar o reembolso com a dívida.',
          'Se forem pedidos documentos, o prazo na prática prolonga-se até à resposta e verificação.',
          'Se a declaração for substituída por uma declaração de substituição, o prazo pode começar a contar de novo.',
          'Se a AT ultrapassar o prazo legal sem motivo, podem vencer-se juros indemnizatórios, mas na prática isso exige acompanhamento separado.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros típicos de expats',
      content: [
        { kind: 'checklist', items: [
          'Colocaram no campo 95 um montante inferior a 250 € — o sistema ou a AT não aceitará o pedido de reembolso.',
          'Declararam IVA de despesas sem fatura com o seu NIF/NIPC.',
          'Deduziram IVA de compras pessoais, viagens da família ou despesas domésticas sem ligação ao negócio.',
          'Trabalham ao abrigo do art. 53 CIVA, mas tentam recuperar IVA das despesas.',
          'Não atualizaram o IBAN depois de mudar de banco.',
          'Falharam uma declaração trimestral e tentam receber o reembolso no período seguinte.',
          'Não consideram o prorata quando existem simultaneamente operações com direito e sem direito à dedução de IVA.',
          'Acham que o reembolso de IVA é rendimento. Não é rendimento para efeitos de IRS/IRC, mas sim a devolução de imposto indireto pago anteriormente; ainda assim, a contabilidade deve estar correta.'
        ] },
        { kind: 'warning', text: 'Se o montante do reembolso for significativo e não tiver contabilista certificado, é melhor pagar por uma revisão da declaração. Um erro em IVA pode levar a correções, coimas e juros compensatórios.' }
      ]
    }
  ],
  costs: [
    { label: 'Submissão do pedido de reembolso no Portal das Finanças', amountEUR: 0, note: 'Não há taxa administrativa; pode haver custo de contabilista se usar um contabilista certificado.' },
    { label: 'Montante mínimo de reembolso', amountEUR: 250, note: 'Campo 95 da declaração periódica de IVA; um crédito inferior é reportado para o período seguinte.' }
  ],
  sources: [
    {
      title: 'gov.pt: Reembolso de Imposto sobre Valor Acrescentado (IVA) em Portugal',
      url: 'https://www2.gov.pt/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/impostos-para-atividades-economicas-em-portugal/reembolso-de-imposto-sobre-valor-acrescentado-iva-em-portugal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA, art. 22 — direito à dedução, reporte e reembolso',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: IVA — obrigações declarativas e declaração periódica',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Guias/Pages/IVA.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
