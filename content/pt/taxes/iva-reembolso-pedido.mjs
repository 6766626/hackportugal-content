export default {
  editorialVoice: 'hackportugal',
  id: 'iva-reembolso-pedido',
  categoryId: 'taxes',
  title: 'Reembolso de IVA por pagamento em excesso: pedido de reembolso a partir de 250 €',
  tldr: 'Se, nos recibos verdes ou numa empresa, o IVA suportado nas despesas for superior ao IVA liquidado nas vendas, o crédito pode não ser reportado para períodos seguintes e pode ser pedido como reembolso através da declaração periódica de IVA: campo 95 «Montante a reembolsar». O mínimo para um pedido de reembolso é 250 €. A submissão é feita no Portal das Finanças juntamente com a declaração mensal ou trimestral; o processamento normal pela AT demora cerca de 30 dias quando há validação automática e até 60 dias pela regra geral do art. 22 CIVA. O dinheiro é pago para o IBAN registado nas Finanças.',
  tags: ['iva', 'reembolso', 'finanças', 'recibos verdes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-it-applies',
      title: 'Quando pode pedir o reembolso de IVA',
      content: [
        { kind: 'paragraph', text: 'O pedido de reembolso é a devolução de crédito de IVA acumulado. Surge quando o IVA dedutível em compras, importações, rendas, contabilidade, equipamento e outras despesas de negócio é superior ao IVA que liquidou aos clientes.' },
        { kind: 'checklist', items: [
          'Está registado como sujeito passivo de IVA: trabalhador independente com atividade aberta ou empresa.',
          'Submete a declaração periódica de IVA — mensal ou trimestral.',
          'A declaração apurou crédito de imposto, e não IVA a pagar.',
          'O montante a reembolsar no campo 95 é, no mínimo, 250 €.',
          'As despesas dizem efetivamente respeito a uma atividade sujeita a IVA.',
          'As faturas estão emitidas com o seu NIF ou NIPC e estão visíveis/registadas no e-Fatura ou na contabilidade.',
          'O IBAN está confirmado no Portal das Finanças.',
          'Não há declarações de IVA, IES/DA ou outras obrigações declarativas em falta que a AT possa usar como fundamento para atrasar o processo.'
        ] },
        { kind: 'warning', text: 'Se trabalha no regime de isenção art. 53 CIVA, normalmente não liquida IVA aos clientes e não deduz o IVA das despesas. Portanto, o pedido de reembolso normal através do campo 95 não se aplica a si.' }
      ]
    },
    {
      id: 'field-95',
      title: 'Campo 95: o que deve exatamente preencher',
      content: [
        { kind: 'paragraph', text: 'Na declaração periódica de IVA, depois do apuramento do imposto, o sistema mostra se existe IVA a pagar ou crédito. Se quiser receber o crédito em dinheiro, o montante é colocado no quadro 06, campo 95 — «Montante a reembolsar». Se quiser reportá-lo para o período seguinte, utiliza-se o campo 96 — «Excesso a reportar».' },
        { kind: 'checklist', items: [
          'Pode pedir o reembolso da totalidade do crédito ou apenas de uma parte, desde que o campo 95 continue a ser ≥250 €.',
          'O remanescente que não pedir para reembolso é reportado para os períodos seguintes.',
          'O montante não pode ser “inventado”: deve resultar do apuramento da declaração.',
          'Se o crédito for inferior a 250 €, o pedido de reembolso não avança — o valor é reportado para a frente.',
          'Para empresas com investimentos permanentes, o reembolso é muitas vezes mais vantajoso do que reportar o crédito indefinidamente.',
          'Para freelancers com despesas reduzidas, pode ser mais simples reportar o crédito até este atingir 250 €.'
        ] },
        { kind: 'warning', text: 'Não confunda isto com tourist tax free. Aqui trata-se do reembolso de IVA a uma empresa ou a um trabalhador independente registado no Portuguese VAT system.' }
      ]
    },
    {
      id: 'before-submitting',
      title: 'Verificação antes de submeter nas Finanças',
      content: [
        { kind: 'paragraph', text: 'A AT cruza automaticamente declarações, e-Fatura, períodos anteriores, dívidas e dados bancários. Quanto mais limpa estiver a preparação, maior é a probabilidade de receber o reembolso sem verificação manual.' },
        { kind: 'checklist', items: [
          'Verifique se a atividade aberta inclui os códigos CAE/CIRS reais da sua atividade.',
          'Confira todas as invoices/recibos verdes emitidos com os montantes de IVA na declaração.',
          'Verifique as invoices recebidas: NIF/NIPC, data, taxa de IVA, ligação ao negócio.',
          'Exclua IVA não dedutível: despesas pessoais, parte das despesas com viaturas ligeiras, coimas, despesas de representação acima do permitido.',
          'Certifique-se de que não há declarações periódicas de IVA de períodos anteriores em falta.',
          'Verifique se a Modelo 10, a IES/DA e as retenções na fonte, quando aplicável, foram submetidas.',
          'Entre em Finanças → Dados Cadastrais → IBAN e confirme a conta bancária.',
          'Guarde o PDF da declaração, a lista de invoices e o cálculo do crédito — a AT pode pedir documentos.'
        ] },
        { kind: 'warning', text: 'Se pedir um reembolso elevado pouco depois de abrir atividade ou de comprar equipamento caro, isso não é proibido, mas o risco de pedido de documentos é maior. Guarde a invoice, proof of payment, contrato e explicação da utilização empresarial.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como submeter o pedido de reembolso online',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Autentique-se com NIF + palavra-passe, Chave Móvel Digital ou Cartão de Cidadão. Para uma empresa, normalmente é necessário o acesso do representante ou do contabilista certificado.' }
          ] },
          { id: 'declaration', title: '2. Abrir a declaração periódica de IVA', content: [
            { kind: 'paragraph', text: 'O percurso no Portal das Finanças muda, mas a secção encontra-se normalmente através de IVA → Declaração Periódica → Entregar declaração. Escolha o período: mensal ou trimestral.' }
          ] },
          { id: 'calculate', title: '3. Preencher o IVA e calcular o crédito', content: [
            { kind: 'paragraph', text: 'Indique taxable operations, IVA liquidado, IVA dedutível, regularizações e outros campos. Depois do cálculo, confirme que foi apurado excesso/crédito.' }
          ] },
          { id: 'request', title: '4. Preencher o campo 95', content: [
            { kind: 'paragraph', text: 'Insira o montante do reembolso no campo 95. Se reportar uma parte do crédito, verifique o campo 96. Submeta a declaração e guarde o comprovativo.' }
          ] },
          { id: 'follow-up', title: '5. Acompanhar o estado', content: [
            { kind: 'paragraph', text: 'O estado do reembolso é consultado no Portal das Finanças, na área de IVA / reembolsos. Se a AT pedir documentos, responda dentro do prazo através do e-Balcão ou do canal indicado na notificação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'deadlines-payment',
      title: 'Prazos: declaração, 30/60 dias e pagamento',
      content: [
        { kind: 'paragraph', text: 'Em 2026, os prazos normais de submissão da declaração periódica de IVA são: regime mensal — até ao dia 20 do segundo mês seguinte ao período; regime trimestral — até ao dia 20 do segundo mês seguinte ao trimestre.\n\nPor exemplo, o IVA de janeiro de 2026 é submetido até 20 de março de 2026, e o 1.º trimestre de 2026 até 20 de maio de 2026.' },
        { kind: 'paragraph', text: 'Depois do pedido de reembolso, a AT processa o reembolso em cerca de 30 dias se a declaração passar nas verificações automáticas e não houver divergências. Pela regra geral do art. 22 CIVA, o reembolso deve ser efetuado até ao fim do segundo mês seguinte à apresentação do pedido; por isso, conte com um prazo até 60 dias.' },
        { kind: 'checklist', items: [
          'O dinheiro é transferido para o IBAN registado nas Finanças.',
          'Se o IBAN não estiver confirmado, o pagamento atrasa-se.',
          'Se existirem dívidas fiscais, a AT pode compensar o reembolso com a dívida.',
          'Se forem pedidos documentos, o prazo fica, na prática, prolongado até à resposta e verificação.',
          'Se a declaração for substituída por uma declaração de substituição, o prazo pode começar a contar novamente.',
          'Se a AT ultrapassar o prazo legal sem motivo, podem ser devidos juros indemnizatórios, mas na prática isto exige acompanhamento separado.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros típicos de expats',
      content: [
        { kind: 'checklist', items: [
          'Colocaram no campo 95 um montante inferior a 250 € — o sistema ou a AT não aceitará o pedido de reembolso.',
          'Declararam IVA de despesas sem invoice emitida com o seu NIF/NIPC.',
          'Deduziram IVA de compras pessoais, viagens da família ou despesas domésticas sem ligação ao negócio.',
          'Trabalham ao abrigo do art. 53 CIVA, mas tentam recuperar o IVA das despesas.',
          'Não atualizaram o IBAN depois de mudar de banco.',
          'Falharam uma declaração trimestral e tentam obter o reembolso no período seguinte.',
          'Não têm em conta o prorata quando existem simultaneamente operações com direito e sem direito à dedução de IVA.',
          'Consideram que o reembolso de IVA é rendimento. Não é rendimento para efeitos de IRS/IRC, mas sim a devolução de um imposto indireto previamente pago; ainda assim, a contabilização deve estar correta.'
        ] },
        { kind: 'warning', text: 'Se o montante do reembolso for significativo e não tiver contabilista certificado, é preferível pagar por uma revisão da declaração. Um erro em IVA pode levar a correções, coimas e juros compensatórios.' }
      ]
    }
  ],
  costs: [
    { label: 'Submissão do pedido de reembolso no Portal das Finanças', amountEUR: 0, note: 'Não há taxa do Estado; pode existir custo de contabilista se usar contabilista certificado.' },
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
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva22.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
