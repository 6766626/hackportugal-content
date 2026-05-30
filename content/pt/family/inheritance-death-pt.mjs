export default {
  editorialVoice: 'hackportugal',
  id: 'inheritance-death-pt',
  categoryId: 'emergency_rights',
  title: 'Herança e morte em Portugal — o que fazer',
  tldr: 'Em caso de morte de uma pessoa próxima em PT: 1) o certificado de óbito é emitido pelo médico/hospital; 2) registo na Conservatória do Registo Civil no prazo de 48 h (através de Loja CTT, Espaço Cidadão ou online); 3) Imposto do Selo sobre heranças — 10% (para não familiares e pessoas que não sejam da CPLP); cônjuge/filhos/pais — 0%; 4) Habilitação de Herdeiros no notário; 5) transmissão de imóveis na Conservatória Predial; 6) comunicação ao banco / seguradoras. Um estrangeiro sem autorização de residência pode receber herança em PT ao abrigo das regras Brussels IV (é possível escolher a lei aplicável — a do seu país ou a de PT).',
  tags: ['herança', 'morte', 'imposto do selo', 'conservatória', 'massa hereditária'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'first-48h',
      title: '⏰ Primeiras 48 horas',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Se a morte ocorrer no hospital/clínica', content: [
            { kind: 'checklist', items: [
              '🩺 O médico emite a «Certidão de Óbito»',
              '🏥 O hospital notifica automaticamente a Conservatória',
              '⚰️ O corpo é entregue à agência funerária',
              '📞 A agência funerária organiza o funeral e o registo'
            ]}
          ]},
          { id: 'h2', title: 'Se ocorrer em casa ou fora do hospital', content: [
            { kind: 'checklist', items: [
              '📞 Chamar o 112 — um profissional de saúde desloca-se ao local e declara o óbito',
              '🚓 Por vezes é chamada a GNR/PSP — para elaboração de auto (especialmente em caso de suspeita de crime)',
              '🩺 O médico de família ou o serviço de atendimento do SNS 24 emite a Certidão',
              '⚰️ A agência funerária recolhe o corpo',
              '📋 A família regista o óbito na Conservatória no prazo de 48 horas'
            ]}
          ]},
          { id: 'h3', title: 'Registo do óbito', content: [
            { kind: 'checklist', items: [
              '🏛️ Qualquer Conservatória do Registo Civil (ou Loja CTT, Espaço Cidadão)',
              '🌐 Alternativa: online através da CMD em ePortugal.gov.pt',
              '📜 Documentos: Certidão de Óbito emitida pelo médico + Cartão de Cidadão do falecido + Cartão de Cidadão do declarante',
              '✅ Gratuito, se for feito no prazo de 48 horas',
              '⚠️ Atraso >48 h = coima de 50–200 €',
              '📜 Recebe o «Assento de Óbito»'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'funeral',
      title: '⚰️ Funeral',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Escolha da agência funerária', content: [
            { kind: 'checklist', items: [
              '🏛️ Agências funerárias municipais (cm-cidade.pt) — mais baratas',
              '🏢 Privadas: Servilusa, Funerária do Telhal, entre outras',
              '💰 Cerimónia simples: 1 500–3 000 €',
              '💰 Com todos os serviços: 4 000–8 000 €',
              '⚖️ Nas grandes cidades tudo é mais caro'
            ]}
          ]},
          { id: 'f2', title: 'Cremação ou sepultamento', content: [
            { kind: 'checklist', items: [
              '⚱️ Cremação: 350–700 €, mais urna 100–500 €',
              '⚰️ Sepultamento: 800–2 000 € (lugar de sepultura em cemitério municipal)',
              '🏛️ Jazigos de família (jazigo): compra 5 000–30 000 €, taxas anuais',
              '⏰ Normalmente o funeral realiza-se 24–72 horas após a morte',
              '🇷🇺 Para enviar o corpo para o país de origem: processo através do consulado, 5 000–15 000 €'
            ]}
          ]},
          { id: 'f3', title: 'Especificidades religiosas', content: [
            { kind: 'checklist', items: [
              '✝️ Missa católica: gratuita para paroquianos',
              '☪️ Cerimónia muçulmana: Mesquita Central de Lisboa',
              '✡️ Judaica: Comunidade Israelita',
              '🛐 Ortodoxa: há serviços ortodoxos na igreja da Sé de Lisboa',
              '🌐 Cerimónia civil: cada vez mais escolhida por estrangeiros'
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
              '🏛️ O notário certifica quem são os herdeiros',
              '📋 Documentos: Assento de Óbito, passaportes/Cartão de Cidadão dos herdeiros, certidão de casamento/nascimento',
              '💰 200–500 € (depende da complexidade)',
              '⏱️ 1–2 semanas',
              '📜 Recebe a «Habilitação de Herdeiros» — acto oficial'
            ]}
          ]},
          { id: 'i2', title: '2. Inventário dos bens', content: [
            { kind: 'checklist', items: [
              '📊 Lista de todos os bens do falecido',
              '🏠 Imóveis (matriz nas Finanças e Conservatória Predial)',
              '🚗 Automóveis (IMT)',
              '💰 Contas bancárias (pedido ao Banco de Portugal)',
              '📈 Investimentos, acções (CMVM, corretora)',
              '👨‍💼 Se houver empresa — quotas numa Lda',
              '⚠️ Parte dos bens pode estar oculta — é melhor contratar um advogado se os valores forem elevados'
            ]}
          ]},
          { id: 'i3', title: '3. Imposto do Selo (imposto sobre heranças)', content: [
            { kind: 'checklist', items: [
              '🟢 Isentos de pagamento (0%): cônjuge/unido de facto, filhos, netos e pais do falecido — mas têm na mesma de entregar o Modelo 1 (a participação é obrigatória mesmo quando o imposto é €0)',
              '🟡 10% Imposto do Selo: irmãos/irmãs, tios/tias, sobrinhos, não familiares',
              '🟣 PT difere de outros países — a herança para familiares próximos NÃO é tributada',
              '⏰ A declaração (participação, Modelo 1 do Imposto do Selo) é entregue através da AT até ao final do 3.º mês seguinte ao do óbito (art. 26.º do Código do Imposto do Selo) — p. ex. morte em março → prazo até 30 de junho',
              '💸 Pagamento: até 60 dias após a entrega da declaração'
            ]}
          ]},
          { id: 'i4', title: '4. Registo da transmissão dos bens', content: [
            { kind: 'checklist', items: [
              '🏠 Imóveis: Conservatória Predial (partilha da herança 350 € + Imposto do Selo)',
              '🚗 Automóvel: IMT — alteração de proprietário, 50 €',
              '🏦 Contas bancárias: com a Habilitação de Herdeiros e o Imposto do Selo pago → passar para o nome dos herdeiros',
              '📊 Acções: através da corretora'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreign',
      title: '🌍 Para estrangeiros — Brussels IV',
      content: [
        { kind: 'paragraph', text: 'O Regulamento UE 650/2012 (Brussels IV) dá o direito de escolher qual a lei aplicável — a do país da sua nacionalidade OU a de PT (onde se encontra). Isto é importante para cidadãos russos/ucranianos/britânicos, cujas regras são diferentes.' },
        { kind: 'checklist', items: [
          '📜 Testamento (Testamento): pode ser feito num notário em PT, escolhendo a lei aplicável (por exemplo, a russa)',
          '🇷🇺 Sem testamento + herdeiros russos: aplica-se a lei de PT (ou seja, cônjuge/filhos recebem tudo em partes iguais)',
          '⚖️ Com testamento ao abrigo da lei russa: são possíveis soluções mais flexíveis',
          '💰 Custo: 200–500 € (notário)',
          '🌐 IMPORTANTE para cidadãos britânicos: o Reino Unido não faz parte do Brussels IV (após o Brexit), aplicam-se regras próprias',
          '🇪🇺 Cidadãos da UE: o certificado europeu de sucessão é reconhecido em toda a UE',
          '🏛️ Recomenda-se um advogado especializado em «direito sucessório internacional»'
        ]}
      ]
    },
    {
      id: 'after',
      title: '📋 Depois de receber a herança',
      content: [
        { kind: 'checklist', items: [
          '💰 IMI (imposto sobre imóveis) — agora é você que paga. Voltar a registar nas Finanças no prazo de 90 dias',
          '🩺 SNS / seguro: notificar (se o falecido fosse dependente)',
          '🏦 Banco: notificar e encerrar/transferir contas',
          '📞 Subscrições e contratos: telefone, internet, serviços de água/luz/gás, Netflix — cancelar ou transferir',
          '👨‍⚖️ Pensões sociais: notificar a Segurança Social — os pagamentos serão interrompidos',
          '📊 Contabilidade para recibos verdes: encerrar a actividade, se era trabalhador independente',
          '⚖️ Acções judiciais: se o falecido era parte — os herdeiros entram no processo',
          '🏠 Imóvel arrendado: o contrato passa automaticamente para os herdeiros (Lei 6/2006)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📜 Fazer testamento em qualquer idade, especialmente se for estrangeiro, simplifica o processo',
          '🆘 Agência funerária 24/7: SNS 808 24 24 24 — linha não apenas para questões médicas',
          '🤝 Advogado de «direito sucessório» é indispensável se: houver imóveis >500 mil, estrangeiros, herdeiros em litígio',
          '⏱️ A declaração do Imposto do Selo é entregue até ao final do 3.º mês seguinte ao do óbito — falhar o prazo significa uma coima fixa de 150–3 750 € (RGIT art. 117.º; mínimo 50 €, ou 25 € se reduzida), e NÃO uma percentagem da herança',
          '💰 Contrato de seguro de vida do falecido — procedimento separado, não integra a herança (se houver beneficiário indicado)',
          '🌐 PT tem acordos internacionais com a Federação Russa/Ucrânia em sucessória — simplificam o processo',
          '🏠 Se o falecido era arrendatário — o herdeiro tem direito a continuar o contrato, não pode ser despejado',
          '📊 Guarde todos os documentos (Habilitação de Herdeiros, pagamento do Imposto do Selo, registos) — podem ser necessários para FATCA / país da sua residência fiscal'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Agência funerária simples', amountEURMin: 1500, amountEURMax: 3000 },
    { label: 'Cremação + urna', amountEURMin: 450, amountEURMax: 1200 },
    { label: 'Habilitação de Herdeiros (notário)', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Imposto do Selo para não familiares', amountEURMin: 10, amountEURMax: 10, note: '% do valor' },
    { label: 'Registo da transmissão de imóveis', amountEUR: 350 },
    { label: 'Testamento no notário (por precaução)', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'IRN — Conservatórias e Cartórios', url: 'https://justica.gov.pt/Servicos/Registos-de-obito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Imposto do Selo (herança)', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Regulamento UE 650/2012 — Brussels IV', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 365
}
