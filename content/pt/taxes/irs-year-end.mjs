export default {
  editorialVoice: 'hackportugal',
  id: 'irs-year-end',
  categoryId: 'taxes',
  title: 'Checklist de IRS para o fim do ano — o que preparar',
  tldr: 'A preparação para o IRS começa em dezembro: até 31 de dezembro, faça as despesas/contribuições que pretende considerar. As faturas no e-Fatura devem ser verificadas e validadas normalmente até 25 de fevereiro do ano seguinte; depois, confirme as deduções calculadas em março. A declaração é entregue entre 1 de abril e 30 de junho. Por entrega fora de prazo — coima ao abrigo do RGIT geralmente de 150 € a 3 750 €, com multa reduzida em caso de correção voluntária rápida.',
  tags: ['irs', 'impostos', 'checklist', 'deduções'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'december-checklist',
      title: 'Dezembro — últimos passos do ano',
      content: [
        { kind: 'checklist', items: [
          '🧾 Verificar o e-Fatura: as faturas com NIF aparecem aí, mas algumas exigem classificação manual ou validação de receita médica; nem todas as despesas dão direito a dedução fiscal',
          '✅ Classificar faturas não validadas (saúde/educação, etc.); as não classificadas podem entrar nas despesas gerais familiares',
          '💳 Despesas de saúde — 15% até 1 000 € (por agregado familiar)',
          '📚 Educação — 30% das despesas elegíveis, normalmente até 800 € por agregado familiar (e não por criança); podem existir majorações para estudante deslocado/que vive fora de casa',
          '🍽️ Restaurantes/hotéis/cabeleireiros/reparação de automóveis e motociclos — dedução de 15% do IVA da fatura, limite global de 250 € por agregado familiar (exigência de fatura)',
          '💡 Serviços domésticos com NIF (eletricidade, gás, água) entram normalmente em despesas gerais familiares: 35% até 250 € por sujeito passivo (500 € para casal em declaração conjunta)',
          '🏠 Renda da habitação permanente: 15% até 700 € (para despesas de 2025/IRS 2026); podem existir limites superiores para baixos rendimentos; são necessários e-recibos/contratos comunicados',
          '💰 PPR: 20% das contribuições, máximo 400 € até aos 35 anos, 350 € dos 35 aos 50, 300 € acima dos 50',
          '💳 Donativos a ONG com NIF — dedução de 25% do valor doado, até 15% do imposto',
          '📊 Sujeitos IFICI: confirmar estatuto e documentos sobre atividade qualificada'
        ]},
        { kind: 'warning', text: 'Faturas sem NIF — NÃO são dedutíveis. Diga SEMPRE «com NIF, por favor» ou «factura com contribuinte» ao comprar. Os limites globais das deduções à coleta ao abrigo do art. 78 CIRS limitam o benefício final em função do nível de rendimento — a soma dos máximos individuais nem sempre é atingível.' }
      ]
    },
    {
      id: 'january-february',
      title: 'Janeiro-fevereiro — preparação de documentos',
      content: [
        { kind: 'checklist', items: [
          '📄 Obter o Comprovativo de Rendimentos do empregador (deve ser entregue até 15.02)',
          '📄 Extratos bancários de todo o ano para calcular juros/dividendos',
          '📄 Comprovativos/recibos verdes: verificar no Portal das Finanças, conferir Anexo B/C, retenções na fonte, despesas e código de atividade',
          '📄 Declarações de rendimentos estrangeiros — comprovativos de pensões, extratos bancários estrangeiros; contas estrangeiras e IBAN podem exigir declaração no Anexo J',
          '📄 Se comprou habitação: guardar escritura, IMT, imposto do selo, despesas notariais/de registo. O IMI normalmente só é necessário em casos especiais (rendimentos prediais/mais-valias)',
          '📄 Comprovativos de IRS Jovem (se aplicável — jovens até aos 35 anos)',
          '📋 Certidões de não dívida (para verificar eventuais dívidas fiscais, vale a pena confirmar)'
        ]}
      ]
    },
    {
      id: 'filing-window',
      title: 'Março-junho — entrega',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'IRS Automático (simplificado)', content: [
            { kind: 'paragraph', text: 'Para categorias A (salário) e H (pensão) com um empregador e sem outras fontes. Portal das Finanças → IRS → IRS Automático. A declaração já vem preenchida — só precisa de verificar e confirmar.' }
          ]},
          { id: 'f2', title: 'Modelo 3 (completo)', content: [
            { kind: 'paragraph', text: 'Para todos os outros casos. Portal das Finanças → IRS → Entregar. Escolha os Anexos necessários.' }
          ]},
          { id: 'f3', title: 'Anexos — quais escolher', content: [
            { kind: 'checklist', items: [
              'Anexo A — salário (categoria A), pensão (categoria H)',
              'Anexo B — recibos verdes / trabalho independente (regime simplificado)',
              'Anexo C — recibos verdes / atividade empresarial (contabilidade organizada)',
              'Anexo D — imputação de rendimentos (transparência fiscal, herança indivisa, casos especiais). NÃO é para dividendos comuns de SA/Lda',
              'Anexo E — rendimentos de capitais (categoria E): juros, dividendos de SA/Lda',
              'Anexo F — rendimentos prediais (categoria F)',
              'Anexo G — ganhos de capital / mais-valias (categoria G): venda de ações, imóveis, normalmente — mais-valias de criptomoedas',
              'Anexo G1 — anexo simplificado para determinadas mais-valias',
              'Anexo H — benefícios fiscais e deduções (despesas dedutíveis)',
              'Anexo I — herança indivisa (situações específicas)',
              'Anexo J — rendimentos de fonte estrangeira (para todas as categorias)',
              'Anexo L — regime residentes não habituais (NHR) e regimes fiscais favoráveis semelhantes'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'deductions-max',
      title: 'Maximização das deduções',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Despesas de saúde (15% até 1 000 €)', content: [
            { kind: 'checklist', items: [
              'Médicos (privados e taxas SNS)',
              'Farmácias: despesas com IVA reduzido normalmente entram automaticamente; produtos com IVA 23% exigem receita/validação no e-Fatura',
              'Medicina dentária',
              'Cirurgias, internamento (IVA 6%)',
              'Óculos, lentes de contacto — prescritos',
              'Seguro de saúde',
              'Para inclusão, o NIF na fatura é obrigatório'
            ]}
          ]},
          { id: 'd2', title: 'Educação: 30% das despesas elegíveis, normalmente até 800 € por agregado familiar', content: [
            { kind: 'checklist', items: [
              'Propinas escolares',
              'Propina universitária',
              'Cursos de línguas — apenas se o prestador e a fatura cumprirem as regras de despesas de educação no e-Fatura/AT',
              'Manuais escolares (IVA 6%)',
              'Roupa/uniforme normalmente NÃO conta como despesa de educação',
              'Transporte escolar — apenas com prestador adequado/classificação correta; o transporte público comum segue as regras do IVA, não da educação',
              'ATL',
              'Podem existir majorações para estudante que vive fora de casa (deslocado)'
            ]}
          ]},
          { id: 'd3', title: 'Habitação', content: [
            { kind: 'checklist', items: [
              'Renda da habitação permanente — 15% até 700 € para despesas de 2025; podem existir limites superiores para baixos rendimentos',
              'Juros de empréstimo para habitação própria permanente — 15% até 296 €, apenas para contratos até 31.12.2011',
              'Eletricidade/gás/água — são despesas gerais familiares (35% até 250 € por sujeito passivo), não uma dedução autónoma de habitação',
              'IMI de habitação própria normalmente NÃO dá dedução em IRS; pode ser considerado em rendimentos prediais ou no cálculo de mais-valias'
            ]}
          ]},
          { id: 'd4', title: 'Despesas gerais familiares — 35% até 250 € por sujeito passivo', content: [
            { kind: 'paragraph', text: 'A maioria das faturas com NIF que não pertencem a categorias especiais. Recolha automática através do e-Fatura quando as faturas têm NIF. Para casal em declaração conjunta, o limite é 500 €.' }
          ]},
          { id: 'd5', title: 'Exigência de fatura (art. 78-F)', content: [
            { kind: 'checklist', items: [
              'Restaurantes, alojamento, cabeleireiros/beleza, reparação automóvel/motociclos: normalmente 15% do IVA pago',
              'Veterinária: 35% do IVA das faturas de prestadores registados',
              'Passes mensais e transporte público: 100% do IVA',
              'Limite global do art. 78-F — 250 € por agregado familiar'
            ]}
          ]},
          { id: 'd6', title: 'PPR (plano de poupança-reforma) — 20% das contribuições', content: [
            { kind: 'checklist', items: [
              'Até aos 35 anos: até 400 €',
              '35–50 anos: até 350 €',
              'Acima dos 50: até 300 €',
              'Vantajoso para reforma de longo prazo, mas com restrições ao resgate'
            ]}
          ]},
          { id: 'd7', title: 'Dependentes', content: [
            { kind: 'checklist', items: [
              'Deduções fixas por dependentes: 600 € (1.ª criança), 726 € (2.ª se tiver menos de 6 anos), 900 € (3.ª e seguintes) — os valores exatos dependem da idade e da composição do agregado',
              'Pais idosos com baixos rendimentos — dedução',
              'Deficiência: deduções reforçadas',
              'Família monoparental: +majoração'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'ifici-nhr',
      title: 'Sujeitos IFICI / NHR — ações especiais',
      content: [
        { kind: 'checklist', items: [
          '🎓 Comprovação de atividade qualificada — contrato, certificados académicos',
          '📊 NHR (para casos já aprovados/transitórios) — declaração através do Anexo L. IFICI: a inscrição no regime deve estar aprovada; na declaração aplica-se apenas a rendimentos qualificados',
          '💰 Rendimento estrangeiro — no Anexo J, tendo em conta as convenções fiscais',
          '🧾 Para foreign tax credit — comprovativos de rendimento e de imposto estrangeiro efetivamente retido/pago. Portuguese tax residence certificate é necessário para o pagador estrangeiro aplicar a DTA',
          '🎯 IFICI: taxa de 20% sobre eligible net employment/business income; IRS normal sobre o restante'
        ]}
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros comuns',
      content: [
        { kind: 'warning', text: 'Verifique a declaração três vezes — após a entrega, a correção é feita através do Modelo 3 Substituição, mas pode haver limitações.' },
        { kind: 'checklist', items: [
          '❌ Esquecer-se de incluir rendimentos estrangeiros — a troca automática de dados da EU (DAC7, CRS) deteta isto. É melhor declarar e beneficiar do crédito de imposto',
          '❌ Indicar dados incorretos dos dependentes → pagamento em excesso',
          '❌ Não validar faturas no Faturas.pt → perda de deduções',
          '❌ Entregar sem verificar o cálculo — o pagamento em excesso pode não ser devolvido automaticamente',
          '❌ Não incluir o Anexo J quando existem fontes de rendimento no estrangeiro',
          '❌ Para NHR/IFICI — esquecer-se de indicar o estatuto no campo do formulário correspondente',
          '❌ Falhar o prazo — coima de 150-3750 € (escala progressiva)'
        ]}
      ]
    },
    {
      id: 'after-submission',
      title: 'Após a entrega',
      content: [
        { kind: 'checklist', items: [
          '⏰ Liquidação (cálculo) — normalmente até 31 de julho se a entrega foi feita dentro do prazo',
          '💰 Reembolso: se a declaração foi entregue a tempo e sem inspeção — normalmente até 31 de agosto, muitas vezes antes; em caso de divergências/fiscalização, os prazos podem prolongar-se',
          '📋 Pagamento adicional — prazo até 31 de agosto',
          '⚖️ A AT normalmente pode corrigir/liquidar imposto adicional dentro do prazo de caducidade (frequentemente 4 anos, art. 45 LGT), mas há exceções e prorrogações para situações estrangeiras; se detetar um erro — declaração de substituição',
          '⚖️ Erro a seu favor — correção através do Modelo 3 Substituição normalmente até 4 anos (com especificidades)',
          '🚨 Verifique pedidos da AT no Portal das Finanças, ViaCTT/notificações eletrónicas ou correio oficial; não confie em emails comuns sem verificação (risco de phishing)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS (Diário da República)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'e-Fatura — portal de faturas eletrónicas', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — entrega do IRS', url: 'https://www.gov.pt/servicos/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
