export default {
  editorialVoice: 'hackportugal',
  id: 'rf-remote-services',
  categoryId: 'country_specific',
  title: 'Serviços remotos da Federação Russa a partir de Portugal — certificado, empresário individual, procurações',
  tldr: 'A partir de Portugal pode: obter um certificado de registo criminal através do Gosuslugi (com assinatura eletrónica qualificada); cancelar remotamente o registo de residência num apartamento através do Gosuslugi; encerrar a atividade como empresário individual através do FNS + Gosuslugi sem viajar; emitir uma procuração na secção consular russa em Lisboa. Secção consular: Rua Visconde de Santarém 57, Lisboa, +351 21 846 4417. Para alguns serviços, é necessário um banco não sancionado ou criptomoeda para pagamento devido a restrições bancárias.',
  audience: { countryCodes: ['RU'] },
  tags: ['russia', 'remoto', 'gosuslugi', 'procuração'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'consulate',
      title: '🏛️ Secção consular da Embaixada da Federação Russa em Lisboa',
      content: [
        { kind: 'checklist', items: [
          '📍 Morada: Rua Visconde de Santarém, 57, 1000-286 Lisboa',
          '📞 Telefone: +351 21 846 4417',
          '📧 Correio eletrónico: cons.lisbon@mid.ru',
          '🌐 Site: portugal.mid.ru',
          '🕐 Atendimento: por marcação no site',
          '🚇 Metro: Avenida ou Parque',
          '⏰ Marcação: fila eletrónica, normalmente 2-6 semanas de espera',
          '💰 Pagamento de taxas consulares: por cartão (qualquer um, incluindo “Mir”, funcionava em 2023-2024; verifique a atualidade) ou em numerário em euros'
        ]}
      ]
    },
    {
      id: 'certificates',
      title: '📋 Certificados',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Certificado de registo criminal (GUVM do MVD)', content: [
            { kind: 'checklist', items: [
              'Através do Gosuslugi (gosuslugi.ru) → Serviços → Certificados → Existência de registo criminal',
              'Prazo: até 30 dias de calendário (na prática, muitas vezes mais rápido)',
              'Entrega: em PDF com assinatura eletrónica na área pessoal',
              'Adicionalmente — apostila: através do Gosuslugi (apostila eletrónica) ou através do MFC / Ministério dos Negócios Estrangeiros',
              'Para Portugal basta o PDF com assinatura eletrónica + PDF com apostila + tradução certificada para português',
              'Alternativa: pedido através do consulado em Lisboa (prazo 45-60 dias)'
            ]}
          ]},
          { id: 'c2', title: 'Certidões do registo civil ZAGS (segundas vias)', content: [
            { kind: 'checklist', items: [
              'Certidão de nascimento, casamento, divórcio — através do MFC na Federação Russa (por procuração) ou do Gosuslugi',
              'Pedido online: até 30 dias úteis, entrega na morada de um familiar na Federação Russa ou no consulado',
              'Apostila: na segunda via da certidão é feita separadamente (Ministério da Justiça ou ZAGS regional)'
            ]}
          ]},
          { id: 'c3', title: 'Certificado de residência fiscal / rendimentos', content: [
            { kind: 'checklist', items: [
              '2-NDFL através da área pessoal em nalog.ru — instantâneo',
              'Certificado de residência fiscal para evitar dupla tributação — através de nalog.ru → Os meus impostos → Certificados',
              'Para Portugal: é necessário com apostila + tradução certificada'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'powers-attorney',
      title: '📝 Procurações',
      content: [
        { kind: 'paragraph', text: 'Uma procuração notarial russa a partir de Portugal é emitida através da secção consular em Lisboa. Funciona como uma procuração normal da Federação Russa.' },
        { kind: 'checklist', items: [
          '📍 Secção consular, marcação online',
          '📋 Documentos: passaporte da Federação Russa, texto da procuração (preparar antecipadamente), dados do procurador (nome completo, dados do passaporte, morada)',
          '💶 Taxa: cerca de 30-60 € consoante o tipo (geral, pontual)',
          '📜 O notário-cônsul autentica no dia da visita',
          'A procuração pronta é válida na Federação Russa como notarial (o cônsul pratica atos notariais ao abrigo do Estatuto Consular da Federação Russa)',
          'Pode ser usada para: venda de imóveis, condução de processos judiciais, operações fiscais, recebimento de pensão, encerramento de atividade como empresário individual'
        ]},
        { kind: 'warning', text: 'Alternativa — contacto remoto com um notário na Federação Russa através da aplicação “Notarius Online” + Gosuslugi. Mas a aplicação exige ESIA e biometria — funciona apenas se a conta estiver ativa e a biometria tiver sido feita anteriormente na Federação Russa.' }
      ]
    },
    {
      id: 'ip-closure',
      title: '💼 Encerramento remoto de atividade como empresário individual',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. Concluir todas as obrigações', content: [
            { kind: 'checklist', items: [
              'Notificar os clientes sobre o encerramento',
              'Pagar contribuições para a segurança social (desde 2023 — ao Fundo Social da Rússia, SFR; proporcionalmente ao período trabalhado no ano)',
              'Submeter as declarações finais (USN / patente) — através da área pessoal em nalog.ru',
              'Pagar saldos de impostos',
              'Encerrar a conta bancária empresarial (ou mantê-la — não é obrigatório antes do encerramento da atividade como empresário individual)'
            ]}
          ]},
          { id: 'i2', title: '2. Submeter o requerimento R26001', content: [
            { kind: 'checklist', items: [
              'Através do Gosuslugi (gosuslugi.ru) com assinatura eletrónica qualificada',
              'Ou através de nalog.ru “Área pessoal do empresário individual”',
              'Taxa estatal: na submissão eletrónica com assinatura eletrónica qualificada (através do Gosuslugi ou nalog.ru) — 0 ₽; a taxa de 160 ₽ aplica-se apenas à submissão em papel',
              'Prazo de processamento: 5 dias úteis',
              'Resultado: notificação de cessação na área pessoal + EGRIP'
            ]}
          ]},
          { id: 'i3', title: '3. Últimos relatórios', content: [
            { kind: 'checklist', items: [
              'No prazo de 15 dias após o encerramento — submeter as declarações fiscais finais',
              'No prazo de 15 dias — pagar as contribuições para a segurança social relativas ao período trabalhado',
              'A saída do registo estatístico no Rosstat ocorre automaticamente aquando do encerramento',
              'Guardar os documentos durante 5 anos (prazo previsto no art. 23 do Código Fiscal da Federação Russa)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'registration',
      title: '🏠 Cancelamento do registo de residência num apartamento / saída do registo',
      content: [
        { kind: 'checklist', items: [
          'Através do Gosuslugi → Serviços → Registo → Cancelamento do registo de residência',
          'É necessária uma assinatura eletrónica qualificada — disponível no Gosuslugi com conta ESIA confirmada',
          'Prazo de processamento: 3 dias úteis',
          'Notificação por correio eletrónico + na área pessoal',
          'Nova morada: pode indicar “saída para o estrangeiro” ou uma morada em Portugal (sem documentos portugueses não a confirmarão, mas fica registada em papel)',
          'O cancelamento do registo de residência retira automaticamente do registo militar (se estiver sujeito ao serviço militar — confirme também no comissariado militar)'
        ]}
      ]
    },
    {
      id: 'banking',
      title: '🏦 Bancos e pagamentos',
      content: [
        { kind: 'checklist', items: [
          '💳 “Mir” em Portugal: não funciona (não é aceite por caixas automáticos nem terminais de pagamento na UE)',
          '💳 UnionPay (Gazprombank) — funciona parcialmente em caixas automáticos em Portugal',
          '💳 Visa/Mastercard de bancos não sancionados: Raiffeisen (Raiffeisen Bank International — sob pressão, o estatuto muda), T-Bank (antigo Tinkoff) — parcialmente',
          '💰 Para pagamentos na Federação Russa (impostos, taxas) a partir de Portugal: use a conta de um familiar / criptomoeda → rublos através de P2P Binance / BestChange',
          '💼 Sanções da UE: transferências para a Federação Russa via SWIFT a partir de bancos da UE estão fortemente limitadas. Use Wise / Revolut para transferir para um destinatário russo que tenha um banco não sancionado',
          '⚠️ Grandes fornecedores recusam aceitar SWIFT da Federação Russa — tenha isto em conta no planeamento'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '📅 Marcação no consulado — reserve com 2-3 meses de antecedência para serviços planeados',
          '🔐 ESIA / Gosuslugi: guarde um login funcional antes da mudança; não altere a palavra-passe sem acesso ao telefone russo',
          '📱 Telefone russo: mantenha o número ativo (T-Mobile RU, MTS eSIM) — é necessário para códigos SMS do Gosuslugi',
          '📧 Notificações do FNS: associe o correio eletrónico à área pessoal — caso contrário, poderá perder notificações fiscais',
          '⚖️ Situações complexas (partilha de bens, ações judiciais, herança): contratar um advogado na Federação Russa + emitir-lhe uma procuração através do consulado da Federação Russa em Portugal',
          '🔑 Assinatura eletrónica: se precisar de atos notariais sem ela — apenas através do consulado'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Certificado de registo criminal do GUVM', amountEUR: 0 },
    { label: 'Apostila (Ministério da Justiça da Federação Russa)', amountEURMin: 25, amountEURMax: 35, note: 'taxa estatal 2500 ₽' },
    { label: 'Procuração consular', amountEURMin: 30, amountEURMax: 60 },
    { label: 'Encerramento de atividade como empresário individual (Gosuslugi, eletrónico)', amountEUR: 0, note: 'gratuito; 160 ₽ apenas na submissão em papel' },
    { label: 'Tradução certificada em Portugal', amountEURMin: 25, amountEURMax: 50, note: '€/página' }
  ],
  sources: [
    { title: 'Embaixada da Federação Russa em Portugal', url: 'https://portugal.mid.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' },
    { title: 'Gosuslugi', url: 'https://gosuslugi.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' },
    { title: 'FNS — Área pessoal do empresário individual', url: 'https://lkip.nalog.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
