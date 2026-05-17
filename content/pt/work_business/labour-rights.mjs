export default {
  editorialVoice: 'hackportugal',
  id: 'labour-rights',
  categoryId: 'work_business',
  title: 'Direitos laborais em Portugal — o que o trabalhador precisa de saber',
  tldr: 'As relações laborais em Portugal são reguladas pelo Código do Trabalho (Lei 7/2009). Essencial: semana de 40 horas (máx. 48 horas com horas extraordinárias), férias de 22 dias úteis + 13 feriados, licença parental 120-180 dias com pagamento de 90-100%, o despedimento exige fundamentação + compensação (limite de 12-20 meses de salário), salário mínimo de 920 €/mês em 2026. Período experimental: 90 dias (geral), 180 (cargos de responsabilidade), 240 (cargos de direcção). Os sindicatos são activos: CGTP-IN e UGT. As queixas por violações de direitos laborais são apresentadas à ACT (Autoridade para as Condições do Trabalho).',
  tags: ['trabalho', 'direitos do trabalhador', 'código'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'contract-types',
      title: '📋 Tipos de contratos',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Contrato sem termo (por tempo indeterminado)', content: [
            { kind: 'checklist', items: [
              'Contrato-padrão, sem data de fim',
              'Período experimental: 90 dias (normal), 180 (responsabilidade), 240 (cargos de direcção, elevada qualificação)',
              'Despedimento pelo empregador: exige fundamentação (despedimento por justa causa, extinção, inadequação) + compensação',
              'Denúncia pelo trabalhador: aviso prévio de 30 dias (até 2 anos na empresa) ou 60 dias (mais)'
            ]}
          ]},
          { id: 'c2', title: 'Contrato a termo certo (com data fixa)', content: [
            { kind: 'checklist', items: [
              'Data de fim concreta. Após a Agenda do Trabalho Digno (Lei 13/2023): máximo geral — **2 anos** (incluindo renovações). O mínimo depende da fundamentação; para casos típicos — 6 meses',
              'Apenas por motivos objectivos enumerados no Código do Trabalho (conjuntura, projecto temporário, substituição de trabalhador, etc.)',
              'Máximo de **3 renovações**, sendo que a duração total das renovações não pode exceder o prazo inicial',
              'No fim do prazo sem conversão em contrato sem termo — compensação nos termos da Lei 13/2023 (taxa geral de 24 dias de retribuição base + diuturnidades por cada ano); o cálculo concreto depende da situação'
            ]}
          ]},
          { id: 'c3', title: 'Contrato a termo incerto (sem data fixa)', content: [
            { kind: 'paragraph', text: 'Contrato a termo sem data fixa (até à conclusão de um projecto / substituição de alguém em licença parental). Máximo de **4 anos** (após a Lei 13/2023). Compensação pelas mesmas regras gerais do termo certo.' }
          ]},
          { id: 'c4', title: 'Contrato de prestação de serviços / Recibo Verde', content: [
            { kind: 'paragraph', text: 'Formato semelhante a trabalhador independente. Paga os impostos por si através do Anexo B. Não há direitos laborais de trabalhador por conta de outrem ao abrigo do Código do Trabalho — férias pagas pelo empregador, subsídios de férias/Natal, protecção contra despedimento. Mas, com contribuições para a Segurança Social, o trabalhador independente pode ter acesso a algumas prestações sociais (doença, parentalidade) mediante condições. Para protecção, o contrato deve reflectir o estatuto independente real; caso contrário, é um «falso recibo verde» — pode levar ao reconhecimento de contrato de trabalho, acertos de contribuições para a Segurança Social e coimas da ACT (o montante depende da categoria da infracção).' }
          ]}
        ]}
      ]
    },
    {
      id: 'pay',
      title: '💰 Salário e impostos',
      content: [
        { kind: 'checklist', items: [
          '**Salário mínimo 2026**: 920 €/mês × 14 (incluindo 13.º mês + subsídio de férias)',
          '**Subsídio de férias**: 1 salário mensal em Junho',
          '**Subsídio de Natal** (13.º): 1 salário mensal em Dezembro',
          '**Subsídio de alimentação**: não é obrigatório, mas é comum. 6-9 €/dia útil. Até 6 €/dia não é sujeito a IRS quando pago em dinheiro; em cartão/vale refeição o limite é superior — 10,20 €/dia',
          '**Horas extraordinárias (horas extras)**: +25% na primeira hora, +37,5% depois',
          '**Trabalho nocturno** (22:00-07:00): +25% adicional',
          '**Trabalho em descanso semanal/feriado**: normalmente +50% por cada hora; em alguns casos também há direito a descanso compensatório. O contrato colectivo pode estabelecer condições melhores (Código do Trabalho arts. 268, 269)',
          '**Descontos**: IRS (escala progressiva 11,97-48%), Segurança Social 11%. A diferença entre bruto e líquido é aproximadamente 22-35%, dependendo do salário',
          '**Recibo de vencimento**: deve ser entregue mensalmente, com discriminação de todos os descontos'
        ]}
      ]
    },
    {
      id: 'time',
      title: '⏰ Tempo de trabalho',
      content: [
        { kind: 'checklist', items: [
          '**Padrão**: 40 horas por semana, 8 horas por dia',
          'Máximo de horas extraordinárias: 150 horas/ano (para a maioria dos sectores)',
          'Pausa para almoço: 1-2 horas, mínimo de 1 hora se o dia de trabalho for >6 horas',
          'Intervalo entre turnos: ≥ 11 horas',
          'Descanso semanal: 1 obrigatório + 1 complementar (normalmente sábado+domingo)',
          'Horário flexível: possível por acordo',
          '**Trabalho remoto (teletrabalho)**: regulado pela Lei 83/2021 — contrato escrito, pagamento de electricidade/comunicações pelo empregador, direito a desligar'
        ]}
      ]
    },
    {
      id: 'leave',
      title: '🏖️ Férias e baixa médica',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Férias (férias anuais)', content: [
            { kind: 'checklist', items: [
              '**22 dias úteis** (padrão) = cerca de 31 dias de calendário',
              '+ 3 dias adicionais, se ≤ 3 dias de faltas por doença no ano',
              'Devem ser gozadas durante o ano civil (não podem ser transferidas sem acordo)',
              'Pagas a 100% + subsídio de férias',
              'Se for despedido: compensação por dias não gozados'
            ]}
          ]},
          { id: 'l2', title: 'Baixa médica', content: [
            { kind: 'checklist', items: [
              'Os primeiros 3 dias — não são pagos (regra geral)',
              'A partir do 4.º dia — Subsídio de doença da Segurança Social, 55-75% do salário médio',
              'Em doença prolongada (>365 dias) — 70%',
              'Atestado médico (baixa) do médico de família ou do serviço de urgência',
              '**Dispensa do trabalho** — até 4 horas para consultas médicas sem redução do salário'
            ]}
          ]},
          { id: 'l3', title: 'Licença parental', content: [
            { kind: 'checklist', items: [
              '**120 dias**: 100% do salário (padrão)',
              '**150 dias**: 80% (se partilhada com o parceiro)',
              '**180 dias**: **90%** (desde 2023, Lei 13/2023 — se ambos os progenitores gozarem ≥ 30 dias)',
              '**Pai**: 28 dias obrigatórios + 8 opcionais (Lei 90/2019)',
              'Gravidez: 30+ dias antes do parto — licença obrigatória',
              'Amamentação: 2 × 30 min por dia de pausas pagas até um ano'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'dismissal',
      title: '🚪 Despedimento — os seus direitos',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Despedimento por justa causa (por culpa do trabalhador)', content: [
            { kind: 'paragraph', text: 'O empregador deve provar uma infracção grave: faltas injustificadas, furto, conflito grave, incumprimento sistemático de deveres. Comunicação escrita + direito de defesa (direito de audiência prévia). Se o tribunal considerar o despedimento ilícito — compensação + reintegração.' }
          ]},
          { id: 'd2', title: 'Despedimento colectivo / extinção (redução de posto)', content: [
            { kind: 'checklist', items: [
              'Motivos objectivos: económicos, de mercado, tecnológicos',
              'Aviso prévio de 30-75 dias (depende da antiguidade)',
              'Compensação: **14 dias de salário por cada ano de antiguidade** (limite de 12 × salário mensal ou mínimo de 3 × salários mensais)',
              'Subsídio de desemprego: após despedimento por motivo não imputável ao trabalhador'
            ]}
          ]},
          { id: 'd3', title: 'Abandono do trabalho', content: [
            { kind: 'paragraph', text: 'Se o trabalhador desaparecer > 10 dias úteis sem motivo justificativo — o empregador pode considerar isso uma denúncia por iniciativa do trabalhador. Isto elimina o direito a compensação + Subsídio de desemprego.' }
          ]}
        ]}
      ]
    },
    {
      id: 'rights-conflicts',
      title: '⚖️ Conflitos e protecção',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Sindicatos', content: [
            { kind: 'checklist', items: [
              '**CGTP-IN** — o maior, de esquerda, 600 000 membros',
              '**UGT** — centrista, 400 000',
              '**FESAP**, **STE** — para funcionários públicos',
              'Quota: 0,5-1% do salário',
              'Protecção: negociação de contratos colectivos, apoio jurídico, greves'
            ]}
          ]},
          { id: 'r2', title: 'ACT — inspecção do trabalho', content: [
            { kind: 'checklist', items: [
              'Autoridade para as Condições do Trabalho',
              'Queixa anónima: act.gov.pt → «Queixa / Denúncia»',
              'A ACT verifica: condições de trabalho, salários, horas extraordinárias, segurança no trabalho, falso recibos verdes',
              'Coimas ao empregador: 500-61 000 €'
            ]}
          ]},
          { id: 'r3', title: 'Tribunais — Tribunal do Trabalho', content: [
            { kind: 'checklist', items: [
              'Para litígios sobre despedimento ilícito, salários não pagos',
              'Prazo: 1 ano após o evento',
              'Advogado não é obrigatório (mas é recomendado)',
              'Apoio judiciário gratuito — se o rendimento < IAS × 1.5',
              'Prazo médio: 6-18 meses',
              'Resultado: reintegração / compensação + custas judiciais'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Salário mínimo 2026', amountEUR: 920, note: '€/mês bruto' },
    { label: 'Compensação por despedimento', amountEUR: 0, note: '14 dias × anos de antiguidade' },
    { label: 'Filiação sindical', amountEUR: 0, note: '0.5-1% do salário' },
    { label: 'Advogado laboral', amountEURMin: 50, amountEURMax: 150, note: '€/hora' }
  ],
  sources: [
    { title: 'Código do Trabalho (Lei 7/2009 consolidada)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACT — Autoridade para as Condições do Trabalho', url: 'https://www.act.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — prestações laborais', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CGTP-IN', url: 'https://www.cgtp.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UGT', url: 'https://www.ugt.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
