export default {
  editorialVoice: 'hackportugal',
  id: 'close-activity',
  categoryId: 'work_business',
  title: 'Encerramento de atividade (trabalhador independente) e de pessoa coletiva em Portugal',
  tldr: 'Encerramento de recibos verdes (cessação de atividade): gratuito através do Portal das Finanças.\n\nPrazo — normalmente 30 dias a contar da data de cessação da atividade; em caso de entrega tardia pode haver coima. É necessário: entregar a declaração final de IVA (se estava no regime normal) + Modelo 3 IRS (se houve volume de negócios no ano) + notificar a Segurança Social. Encerrar uma Unipessoal / Lda é mais complexo: dissolução + liquidação através da Conservatória Comercial + reporte final.\n\nProcesso de 6-12 meses. Se houver dívidas — insolvência através do tribunal.',
  tags: ['cessação', 'encerramento de atividade independente', 'liquidação', 'pessoa coletiva'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cessacao-atividade',
      title: '👤 Encerramento de atividade independente (recibos verdes)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Concluir o trabalho ativo', content: [
            { kind: 'checklist', items: [
              'Emitir o último recibo',
              'Receber pagamentos dos clientes (idealmente 30 dias antes do encerramento)',
              'Reunir todos os comprovativos de fornecedores para IVA deduzida',
              'Informar os clientes sobre a cessação do trabalho (e-mail, carta) — é uma boa prática',
              'Contratos ativos — rescindir ou encaminhar'
            ]}
          ]},
          { id: 'c2', title: '2. Submeter a cessação na AT', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Serviços → Atividades → Cessação',
              'Indicar a data do último dia de atividade',
              'Motivo: voluntary (mais comum escolher), trabalho subordinado (se passou a trabalhar por conta de outrem), mudança de país, aposentação',
              'Submeter — o processo é imediato, o certificado chega no prazo de uma hora',
              'Pode indicar a data efetiva de cessação, incluindo uma data passada, mas se o prazo de 30 dias tiver sido ultrapassado — pode haver coima e pedido de provas pela AT'
            ]}
          ]},
          { id: 'c3', title: '3. IVA final', content: [
            { kind: 'checklist', items: [
              'Se estava no normal IVA regime e entregava periodic IVA declarations — entregue a última declaração relativa ao período da cessação. Se estava na isenção art. 53 CIVA, normalmente não é entregue periodic IVA',
              'Período: trimestre / mês em que ocorreu a cessação',
              'Prazo: de acordo com as regras habituais do período de IVA — a declaração é normalmente até ao dia 20 do segundo mês após o mês/trimestre, pagamento até ao dia 25 (CIVA arts. 27, 41)',
              'Se houver IVA a pagar (deve à AT) — pagar',
              'Se houver crédito (a AT deve a si) — receber o reembolso em 30-60 dias'
            ]}
          ]},
          { id: 'c4', title: '4. IRS final', content: [
            { kind: 'checklist', items: [
              'Na declaração de IRS (entrega em abril-junho do ano seguinte) — o Anexo B continua a ser preenchido',
              'Calcular o imposto sobre todo o volume de negócios do ano da cessação',
              'No regime simplificado, a base é calculada pelo coeficiente do CIRS art. 31: frequentemente 75% para serviços profissionais, mas para outros rendimentos os coeficientes são diferentes',
              'Retenção na fonte (retenções dos clientes) — é abatida ao imposto',
              'Se o montante for negativo — reembolso'
            ]}
          ]},
          { id: 'c5', title: '5. Segurança Social', content: [
            { kind: 'checklist', items: [
              'Recebem automaticamente a notificação da AT no prazo de 10 dias',
              'MAS: se tinha carência (isenção de 12 meses) e não pagava contribuições — a longo prazo é melhor confirmar na Segurança Social Direta',
              'As contribuições de TI são calculadas pela quarterly declaration: relevant income é normalmente 70% dos serviços ou 20% de sales/production/hotel/restaurant do trimestre anterior, taxa TI 21,4%. Após a cessação, verifique a última declaração trimestral na Segurança Social Direta',
              'O prazo de pagamento das contribuições à SS é normalmente do dia 10 ao dia 20 do mês seguinte',
              '**Após a cessação**: as contribuições deixam de ser cobradas; o tempo contributivo acumulado mantém-se (para futura pensão)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'reopen',
      title: '🔄 Reabrir',
      content: [
        { kind: 'checklist', items: [
          'Reabertura atividade — é possível a qualquer momento através do Portal das Finanças',
          'Aberturas/encerramentos frequentes sem motivo real podem suscitar questões da AT/SS, por isso guarde provas da atividade efetiva e dos motivos da cessação/reabertura',
          'Na prática, é melhor manter um intervalo visível entre o encerramento e a reabertura, se não for uma medida obrigatória',
          'Nova abertura — como uma inscrição totalmente nova: novamente 12 meses de carência de isenção da Segurança Social (se não trabalhou com recibos verdes nos 3 anos anteriores)'
        ]}
      ]
    },
    {
      id: 'company-closure',
      title: '🏢 Encerramento de pessoa coletiva (Lda, Unipessoal, SA)',
      content: [
        { kind: 'paragraph', text: 'Muito mais complexo e caro do que a atividade independente. Processo de dissolução + liquidação.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Etapa 1: Dissolução', content: [
            { kind: 'checklist', items: [
              'Sócios (fundadores) tomam a decisão em Assembleia Geral',
              'Submissão na Conservatória Comercial — registo da dissolução',
              'Publicação no Boletim Oficial',
              'Custo: 100-200 €'
            ]}
          ]},
          { id: 'l2', title: 'Etapa 2: Liquidação', content: [
            { kind: 'checklist', items: [
              'Nomeação de liquidatário (frequentemente — o último gerente/administrador)',
              'Inventariação de ativos e passivos',
              'Venda de bens, pagamento de dívidas',
              'Balanço final',
              'Distribuição entre sócios de acordo com as quotas/participações',
              'Processo: 6-18 meses',
              'Custo: depende muito da complexidade. Unipessoal simples — 500-1000 €. Lda média — 1500-5000 €. SA com ativos — 5000-20000+'
            ]}
          ]},
          { id: 'l3', title: 'Etapa 3: Registo encerramento', content: [
            { kind: 'checklist', items: [
              'Registo final na Conservatória Comercial',
              'Entrega do reporte final na IES (Informação Empresarial Simplificada)',
              'Notificação da Segurança Social sobre a cessação',
              'Conservação dos documentos contabilísticos durante 5 anos (por lei)',
              'Certidão de encerramento — a empresa fica oficialmente encerrada'
            ]}
          ]},
          { id: 'l4', title: 'Simplified dissolução (se não houver ativos / dívidas)', content: [
            { kind: 'checklist', items: [
              '«Empresa na Hora» dissolução — num dia na Conservatória',
              'Apenas para casos simples: sem dívidas por liquidar, dívidas à AT, ativos',
              'Custo: ~360 €',
              'Adequado a ~40% das empresas'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bankruptcy',
      title: '💸 Insolvência — se dívidas > ativos',
      content: [
        { kind: 'checklist', items: [
          'Insolvência → através do tribunal',
          'Procedimento acelerado através de PER (Processo Especial de Revitalização), se ainda houver possibilidade de recuperação',
          'PEVE (Processo Especial de Viabilização) — para microempresas',
          'Insolvência completa com liquidação — 1-3 anos, o tribunal nomeia administrador',
          'Para sócios: responsabilidade pessoal apenas se existir subsidiary liability, fraud ou garantias pessoais',
          'Unipessoal Lda — o sócio está protegido (responsabilidade limitada)',
          'ENI (Empresário em Nome Individual, = empresário individual no sentido comercial) — responsabilidade pessoal plena',
          'Custo: taxas de justiça 1000-5000 €, advogado 2000-10000 €'
        ]}
      ]
    },
    {
      id: 'checklist-final',
      title: '✅ Checklist final',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Financeiros', content: [
            { kind: 'checklist', items: [
              'Todos os clientes pagaram ou os receipts foram assinalados como incobráveis',
              'Todos os fornecedores foram pagos',
              'IVA final entregue',
              'IRS/IRC final entregue',
              'IES final (para Lda) entregue',
              'Contribuições para a Segurança Social pagas',
              'Fechar a conta bancária da empresa (ou transferir para conta pessoal)',
              'Cancelar subscrições (software, domínios, alojamento)'
            ]}
          ]},
          { id: 'f2', title: 'Jurídicos', content: [
            { kind: 'checklist', items: [
              'Notificar o regulador, se a atividade era regulada (por exemplo, imobiliário — APEMIP; seguros — ASF)',
              'Cancelar marcas registadas (ou transferir)',
              'Revogar o acesso delegado ao Portal das Finanças do antigo contabilista',
              'Transferir documentos de arquivo (conservar durante 5 anos)',
              'Notificar Chave Móvel Digital / certificados digitais — podem ficar ativos'
            ]}
          ]},
          { id: 'f3', title: 'Administrativos', content: [
            { kind: 'checklist', items: [
              'Fechar contas em lojas / fornecedores',
              'Fechar a caixa de correio eletrónico da empresa (Gmail / Outlook)',
              'Remover do Google My Business, redes sociais',
              'Configurar reencaminhamento de domínio / email',
              'Notificar o banco (não para conta pessoal, mas se existia conta comercial)',
              'Cancelar seguros empresariais'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cessação atividade (atividade independente)', amountEUR: 0, note: 'gratuito através do Portal das Finanças' },
    { label: 'Declarações finais (se através de contabilista)', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Simplified dissolução (Empresa na Hora)', amountEUR: 360 },
    { label: 'Encerramento de Unipessoal (com liquidação)', amountEURMin: 500, amountEURMax: 1000 },
    { label: 'Lda média (processo completo)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Insolvência através do tribunal', amountEURMin: 1000, amountEURMax: 5000 }
  ],
  sources: [
    { title: 'Portal das Finanças — Cessação Atividade', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Conservatória Comercial', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Insolvência (CIRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-34453275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
