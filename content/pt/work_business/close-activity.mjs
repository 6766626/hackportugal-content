export default {
  editorialVoice: 'hackportugal',
  id: 'close-activity',
  categoryId: 'work_business',
  title: 'Encerramento de atividade (trabalhador independente) e de pessoa coletiva em Portugal',
  tldr: 'Encerramento de recibos verdes (cessação de atividade): através do Portal das Finanças, gratuitamente.\n\nPrazo — normalmente 30 dias a contar da data de cessação da atividade; em caso de entrega tardia, pode haver coima. É necessário: entregar a declaração final de IVA (se estava no regime normal) + Modelo 3 IRS (se houve volume de negócios no ano) + notificar a Segurança Social. Encerrar uma Unipessoal / Lda é mais complexo: dissolução + liquidação através da Conservatória Comercial + declarações finais.\n\nProcesso de 6-12 meses. Se houver dívidas — insolvência através do tribunal.',
  tags: ['cessação', 'encerramento trabalhador independente', 'liquidação', 'pessoa coletiva'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cessacao-atividade',
      title: '👤 Encerramento de trabalhador independente (recibos verdes)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Concluir o trabalho ativo', content: [
            { kind: 'checklist', items: [
              'Emitir o último recibo',
              'Receber os pagamentos dos clientes (idealmente 30 dias antes do encerramento)',
              'Reunir todos os recibos/faturas de fornecedores para IVA deduzida',
              'Notificar os clientes da cessação do trabalho (email, carta) — é uma boa prática',
              'Contratos ativos — rescindir ou reencaminhar'
            ]}
          ]},
          { id: 'c2', title: '2. Submeter a cessação na AT', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Serviços → Atividades → Cessação',
              'Indicar a data do último dia de atividade',
              'Motivo: voluntary (normalmente a escolher), trabalho subordinado (se passou para trabalho por conta de outrem), mudança de país, aposentação',
              'Submeter — o processo é imediato, o certificado chega no prazo de uma hora',
              'Pode indicar a data efetiva de cessação, incluindo uma data passada, mas se o prazo de 30 dias tiver sido ultrapassado — pode haver coima e pedido de comprovativos pela AT'
            ]}
          ]},
          { id: 'c3', title: '3. IVA final', content: [
            { kind: 'checklist', items: [
              'Se estava no normal IVA regime e entregava periodic IVA declarations — entregue a última declaração relativa ao período da cessação. Se estava em isenção art. 53 CIVA, normalmente não é entregue periodic IVA',
              'Período: trimestre / mês em que ocorreu a cessação',
              'Prazo: de acordo com as regras normais do período de IVA — a declaração é normalmente entregue até ao dia 20 do segundo mês após o mês/trimestre, pagamento até ao dia 25 (CIVA arts. 27, 41)',
              'Se houver IVA a pagar (deve à AT) — pagar',
              'Se existir crédito de IVA, pode pedir reembolso na declaração final/periódica, cumprindo as condições do CIVA; o prazo depende da verificação da AT e não é garantido (não conte com 30–60 dias fixos)'
            ]}
          ]},
          { id: 'c4', title: '4. IRS final', content: [
            { kind: 'checklist', items: [
              'Na declaração de IRS (entrega entre abril e junho do ano seguinte) — o Anexo B continua a ser preenchido',
              'Calcular o imposto sobre todo o volume de negócios do ano da cessação',
              'No regime simplificado, a base é calculada segundo o coeficiente do CIRS art. 31: frequentemente 75% para serviços profissionais, mas para outros rendimentos os coeficientes são diferentes',
              'Retenção na fonte (retenções dos clientes) — são abatidas ao imposto',
              'Se o montante for negativo — reembolso'
            ]}
          ]},
          { id: 'c5', title: '5. Segurança Social', content: [
            { kind: 'checklist', items: [
              'Recebem automaticamente a notificação da AT no prazo de 10 dias',
              'MAS: se tinha carência (isenção de 12 meses) e não pagava contribuições — a longo prazo, é melhor confirmar na Segurança Social Direta',
              'As contribuições TI são calculadas pela quarterly declaration: relevant income normalmente 70% dos serviços ou 20% de sales/production/hotel/restaurant do trimestre anterior, taxa TI 21,4%. Após a cessação, verifique a última declaração trimestral na Segurança Social Direta',
              'O prazo de pagamento das contribuições SS é normalmente do dia 10 ao dia 20 do mês seguinte',
              'Após a cessação: deixam de ser cobradas contribuições; o período contributivo acumulado mantém-se (para a futura pensão)'
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
          'Reabertura atividade — possível a qualquer momento através do Portal das Finanças',
          'Aberturas/encerramentos frequentes sem motivo real podem suscitar questões da AT/SS, por isso guarde comprovativos da atividade efetiva e dos motivos da cessação/reabertura',
          'Na prática, é melhor manter um intervalo visível entre o encerramento e a reabertura, se não for uma medida forçada',
          'Na reabertura, as regras da Segurança Social dependem do enquadramento anterior e da duração da interrupção. Não conte automaticamente com novos 12 meses sem contribuições — verifique a Segurança Social Direta ou peça confirmação à SS ou a um contabilista'
        ]}
      ]
    },
    {
      id: 'company-closure',
      title: '🏢 Encerramento de pessoa coletiva (Lda, Unipessoal, SA)',
      content: [
        { kind: 'paragraph', text: 'Muito mais complexo e caro do que o trabalhador independente. Processo de dissolução + liquidação.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Etapa 1: Dissolução', content: [
            { kind: 'checklist', items: [
              'Sócios (fundadores) tomam a decisão em Assembleia Geral',
              'Entrega na Conservatória Comercial — registo da dissolução',
              'A publicação do ato registado é efetuada eletronicamente através do portal das publicações oficiais de atos comerciais (IRN) após o registo na Conservatória Comercial',
              'Custo: 100-200 €'
            ]}
          ]},
          { id: 'l2', title: 'Etapa 2: Liquidação', content: [
            { kind: 'checklist', items: [
              'Nomeação de liquidatário (muitas vezes — o último gerente/administrador)',
              'Inventário de ativos e passivos',
              'Venda de bens, pagamento de dívidas',
              'Balanço final',
              'Distribuição entre os sócios de acordo com as quotas/participações',
              'Processo: 6-18 meses',
              'Custo: depende muito da complexidade. Unipessoal simples — 500-1000 €. Lda média — 1500-5000 €. SA com ativos — 5000-20000+'
            ]}
          ]},
          { id: 'l3', title: 'Etapa 3: Registo encerramento', content: [
            { kind: 'checklist', items: [
              'Registo final na Conservatória Comercial',
              'Após a cessação/encerramento, o contabilista entrega as declarações finais: declaração de cessação, Modelo 22 IRC em prazo especial após a cessação, IES/DA em prazo especial, IVA final e retenções na fonte, se aplicável',
              'Notificação da Segurança Social sobre a cessação',
              'Conservação dos documentos contabilísticos durante 5 anos (por lei)',
              'Certidão de encerramento — a empresa está oficialmente encerrada'
            ]}
          ]},
          { id: 'l4', title: 'Dissolução e liquidação imediata (via acelerada)', content: [
            { kind: 'checklist', items: [
              '«Empresa na Hora» dissolução — num dia na Conservatória',
              'Apenas para casos simples: sem dívidas por liquidar, sem dívidas à AT, sem ativos',
              'Emolumento segundo a tabela IRN/RERN; para dissolução/liquidação imediata, o valor ronda os 300 €, mas verifique os emolumentos IRN atualizados antes da entrega',
              'Adequado a ~40% das empresas'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bankruptcy',
      title: '💸 Insolvência — se as dívidas > ativos',
      content: [
        { kind: 'checklist', items: [
          'Insolvência → através do tribunal',
          'PER (processo especial de revitalização) — procedimento de recuperação/negociação com credores para empresas em situação económica difícil ou em insolvência iminente; não é uma insolvência liquidatária',
          'O PEVE foi um procedimento temporário COVID (vigorou até 30 de junho de 2023) e, em 2026, não é uma opção padrão; para reestruturação analisa-se normalmente PER/RERE, para liquidação — insolvência',
          'Insolvência completa com liquidação — 1-3 anos, o tribunal nomeia administrador',
          'Para sócios: responsabilidade pessoal apenas se existir subsidiary liability, fraud ou garantias pessoais',
          'Unipessoal Lda — sócio protegido (responsabilidade limitada)',
          'ENI (Empresário em Nome Individual, = trabalhador independente em sentido comercial) — responsabilidade pessoal ilimitada',
          'Custo: taxas judiciais 1000-5000 €, advogado 2000-10000 €'
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
              'Todos os clientes pagaram ou os receipts foram marcados como incobráveis/anulados',
              'Todos os fornecedores foram pagos',
              'IVA final entregue',
              'IRS/IRC final entregue',
              'IES final (para Lda) entregue',
              'Contribuições para a Segurança Social pagas',
              'Após o pagamento de dívidas, impostos e aprovação do balanço de liquidação, distribuir o remanescente entre os sócios segundo as regras da liquidação e encerrar a conta bancária da empresa',
              'Cancelar subscrições (software, domínios, alojamento)'
            ]}
          ]},
          { id: 'f2', title: 'Jurídicos', content: [
            { kind: 'checklist', items: [
              'Cancelar ou transferir licenças setoriais junto do regulador competente: imobiliário/mediação imobiliária — IMPIC; seguros — ASF; turismo/animação turística — Turismo de Portugal, etc.',
              'Cancelar marcas registadas (ou transferir)',
              'Revogar o acesso delegado no Portal das Finanças para o antigo contabilista',
              'Transferir documentos de arquivo (guardar 5 anos)',
              'Notificar Chave Móvel Digital / certificados digitais — podem permanecer ativos'
            ]}
          ]},
          { id: 'f3', title: 'Administrativos', content: [
            { kind: 'checklist', items: [
              'Encerrar contas em lojas / junto de fornecedores',
              'Encerrar a caixa de correio eletrónico da empresa (Gmail / Outlook)',
              'Remover do Google My Business, redes sociais',
              'Configurar reencaminhamento de domínio / email',
              'Notificar o banco (não para a conta pessoal, mas se existia uma conta comercial)',
              'Cancelar seguro empresarial'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cessação atividade (trabalhador independente)', amountEUR: 0, note: 'gratuito através do Portal das Finanças' },
    { label: 'Declarações finais (se através de contabilista)', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Dissolução e liquidação imediata (Empresa na Hora)', amountEUR: 300, note: 'emolumento IRN, incluindo o registo' },
    { label: 'Encerramento de Unipessoal (com liquidação)', amountEURMin: 500, amountEURMax: 1000 },
    { label: 'Lda média (processo completo)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Insolvência através do tribunal', amountEURMin: 1000, amountEURMax: 5000 }
  ],
  sources: [
    { title: 'Portal das Finanças — Cessação Atividade', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Conservatória Comercial', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Insolvência (CIRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-34453275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
