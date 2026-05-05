export default {
  editorialVoice: 'hackportugal',
  id: 'inheritance-death-pt',
  categoryId: 'emergency_rights',
  title: 'Herança e morte em Portugal — o que fazer',
  tldr: 'Ao falecer um familiar em PT: 1) o certificado de óbito é emitido pelo médico/hospital; 2) registo na Conservatória do Registo Civil em 48 h (via Loja CTT, Espaço Cidadão ou online); 3) Imposto do Selo sobre herança — 10% (para não familiares e não oriundos da CPLP); cônjuge/filhos/pais — 0%; 4) Habilitação de Herdeiros no notário; 5) transmissão de imóveis na Conservatória do Registo Predial; 6) pedido ao banco/seguradoras. Estrangeiro sem autorização de residência pode receber herança em PT ao abrigo do Brussels IV (pode escolher o direito aplicável — do seu país ou de PT).',
  tags: ['herança', 'morte', 'imposto do selo', 'conservatória', 'massa hereditária'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'first-48h',
      title: '⏰ Primeiras 48 horas',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Se o óbito ocorrer num hospital/clínica', content: [
            { kind: 'checklist', items: [
              '🩺 O médico emite a «Certidão de Óbito» (certidão de óbito)',
              '🏥 O hospital notifica automaticamente a Conservatória',
              '⚰️ O corpo é entregue à agência funerária',
              '📞 A agência funerária organiza o funeral e o registo'
            ]}
          ]},
          { id: 'h2', title: 'Se for em casa ou fora do hospital', content: [
            { kind: 'checklist', items: [
              '📞 Ligar 112 — um profissional de saúde desloca-se e atesta o óbito',
              '🚓 Por vezes chamam a GNR/PSP — para registo (especialmente em caso de suspeita criminal)',
              '🩺 O médico de família ou o serviço de urgência via SNS 24 emite a Certidão',
              '⚰️ A agência funerária recolhe o corpo',
              '📋 A família regista o óbito na Conservatória no prazo de 48 horas'
            ]}
          ]},
          { id: 'h3', title: 'Registo do óbito', content: [
            { kind: 'checklist', items: [
              '🏛️ Qualquer Conservatória do Registo Civil (ou Loja CTT, Espaço Cidadão)',
              '🌐 Alternativa: online através da CMD em eportugal.gov.pt',
              '📜 Documentos: Certidão de Óbito do médico + CC do falecido + CC do requerente',
              '✅ Gratuito se for dentro de 48 horas',
              '⚠️ Atraso >48 h = coima de 50–200 €',
              '📜 Recebe o «Assento de Óbito»'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'funeral',
      title: '⚰️ Funerais',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Escolha da agência funerária', content: [
            { kind: 'checklist', items: [
              '🏛️ Agências funerárias municipais (cm-cidade.pt) — mais barato',
              '🏢 Privadas: Servilusa, Funerária do Telhal, entre outras',
              '💰 Cerimónia simples: 1 500–3 000 €',
              '💰 Com todos os serviços: 4 000–8 000 €',
              '⚖️ Nas grandes cidades, tudo é mais caro'
            ]}
          ]},
          { id: 'f2', title: 'Cremação ou inumação', content: [
            { kind: 'checklist', items: [
              '⚱️ **Cremação**: 350–700 €, mais urna 100–500 €',
              '⚰️ **Inumação**: 800–2 000 € (campa em cemitério municipal)',
              '🏛️ Jazigos familiares (jazigo): compra 5 000–30 000 €, taxas anuais',
              '⏰ Normalmente o funeral realiza-se 24–72 horas após o óbito',
              '🇷🇺 Para envio do corpo para o país de origem: processo via consulado, 5 000–15 000 €'
            ]}
          ]},
          { id: 'f3', title: 'Especificidades religiosas', content: [
            { kind: 'checklist', items: [
              '✝️ Missa católica: gratuita para paroquianos',
              '☪️ Cerimónia muçulmana: Mesquita Central de Lisboa',
              '✡️ Judaica: Comunidade Israelita',
              '🛐 Ortodoxa: há serviços ortodoxos na Sé de Lisboa',
              '🌐 Cerimónia laica: cada vez mais escolhida por estrangeiros'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'inheritance-process',
      title: '📜 Herança — processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. Habilitação de Herdeiros', content: [
            { kind: 'checklist', items: [
              '🏛️ O notário certifica o elenco de herdeiros',
              '📋 Documentos: Assento de Óbito, passaportes/CC dos herdeiros, certidões de casamento/nascimento',
              '💰 200–500 € (depende da complexidade)',
              '⏱️ 1–2 semanas',
              '📜 Recebe a «Habilitação de Herdeiros» — ato oficial'
            ]}
          ]},
          { id: 'i2', title: '2. Inventário dos bens', content: [
            { kind: 'checklist', items: [
              '📊 Lista de todos os bens do falecido',
              '🏠 Imóveis (cadastro nas Finanças e Conservatória do Registo Predial)',
              '🚗 Automóveis (IMT)',
              '💰 Contas bancárias (pedido ao Banco de Portugal)',
              '📈 Investimentos, ações (CMVM, corretora)',
              '👨‍💼 Se houver empresa — quotas numa Lda',
              '⚠️ Parte do património pode estar oculta — é melhor contratar um advogado se os montantes forem elevados'
            ]}
          ]},
          { id: 'i3', title: '3. Imposto do Selo (imposto sobre heranças)', content: [
            { kind: 'checklist', items: [
              '🟢 **Isentos 0%**: cônjuge, filhos, netos e pais do falecido',
              '🟡 **10% de Imposto do Selo**: irmãos/irmãs, tios/tias, sobrinhos e não familiares',
              '🟣 PT difere de outros países — heranças para familiares próximos NÃO são tributadas',
              '⏰ Declaração no prazo de 30 dias via AT (Modelo 1 do Imposto do Selo)',
              '💸 Pagamento: até 60 dias após a entrega da declaração'
            ]}
          ]},
          { id: 'i4', title: '4. Registo da transmissão dos bens', content: [
            { kind: 'checklist', items: [
              '🏠 **Imóveis**: Conservatória do Registo Predial (apresentação do processo de herança 350 € + imposto do selo)',
              '🚗 **Automóvel**: IMT — alteração de titularidade, 50 €',
              '🏦 **Contas bancárias**: com a Habilitação de Herdeiros e o Imposto do Selo pago → transferir para os herdeiros',
              '📊 **Ações**: através da corretora'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreign',
      title: '🌍 Para estrangeiros — Brussels IV',
      content: [
        { kind: 'paragraph', text: 'O Regulamento (UE) 650/2012 (Brussels IV) permite escolher qual o direito aplicável — o do seu país de nacionalidade OU o de PT (onde se encontra). Isto é importante para cidadãos da Federação Russa/ucranianos/britânicos, cujas regras diferem.' },
        { kind: 'checklist', items: [
          '📜 **Testamento (Testamento)**: pode ser feito num notário em PT, escolhendo o direito aplicável (por exemplo, o da Federação Russa)',
          '🇷🇺 Sem testamento + herdeiros da Federação Russa: aplica-se o direito PT (isto é, cônjuge/filhos recebem tudo em partes iguais)',
          '⚖️ Com testamento ao abrigo do direito da Federação Russa: são possíveis soluções mais flexíveis',
          '💰 Custo: 200–500 € (notário)',
          '🌐 IMPORTANTE para cidadãos britânicos: o Reino Unido não integra o Brussels IV (após o Brexit), aplicam-se regras próprias',
          '🇪🇺 Para cidadãos da UE: o certificado europeu de sucessão é reconhecido em toda a UE',
          '🏛️ Recomenda-se um advogado especializado em «direito sucessório internacional»'
        ]}
      ]
    },
    {
      id: 'after',
      title: '📋 Depois de receber a herança',
      content: [
        { kind: 'checklist', items: [
          '💰 **IMI** (imposto municipal sobre imóveis) — passa a ser pago por si. Atualizar nas Finanças no prazo de 90 dias',
          '🩺 **SNS / seguro**: notificar (se o falecido era dependente)',
          '🏦 **Banco**: notificar e encerrar/transferir contas',
          '📞 **Subscrições e contratos**: telefone, internet, utilidades, Netflix — cancelar ou transferir',
          '👨‍⚖️ **Pensões/Prestações sociais**: notificar a Segurança Social — os pagamentos serão interrompidos',
          '📊 **Contabilidade para recibos verdes**: encerrar a atividade, se era trabalhador independente',
          '⚖️ **Ações judiciais**: se o falecido era parte — os herdeiros sucedem no processo',
          '🏠 **Imóvel arrendado**: o contrato transfere-se automaticamente para os herdeiros (Lei 6/2006)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Dicas',
      content: [
        { kind: 'checklist', items: [
          '📜 Faça um testamento em qualquer idade, sobretudo se é estrangeiro — simplifica o processo',
          '🆘 Funerária 24/7: SNS 808 24 24 24 — a linha não é apenas para questões médicas',
          '🤝 Advogado de «direito sucessório» é indispensável se: há imóveis >500k, há estrangeiros, há herdeiros em litígio',
          '⏱️ 30 dias para a declaração do Imposto do Selo — falhar = coima até 25%',
          '💰 O contrato de seguro de vida do falecido — procedimento à parte, não integra a herança (se existir beneficiário designado)',
          '🌐 PT tem acordos internacionais com a Federação Russa/Ucrânia sobre heranças — simplificam o processo',
          '🏠 Se o falecido era inquilino — o herdeiro tem direito a continuar o contrato, não pode ser despejado',
          '📊 Guarde toda a documentação (Habilitação de Herdeiros, comprovativo de pagamento do Imposto do Selo, registos) — pode ser necessária para FATCA / o seu país de residência fiscal'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Agência funerária simples', amountEURMin: 1500, amountEURMax: 3000 },
    { label: 'Cremação + urna', amountEURMin: 450, amountEURMax: 1200 },
    { label: 'Habilitação de Herdeiros (notário)', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Imposto do Selo para não familiares', amountEURMin: 10, amountEURMax: 10, note: '% do valor' },
    { label: 'Registo de transmissão de imóvel', amountEUR: 350 },
    { label: 'Testamento em notário (preventivo)', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'IRN — Conservatórias e Cartórios', url: 'https://justica.gov.pt/Servicos/Registos-de-obito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Imposto do Selo (herança)', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento (UE) 650/2012 — Brussels IV', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
