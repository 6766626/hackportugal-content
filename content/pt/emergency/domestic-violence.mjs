export default {
  editorialVoice: 'hackportugal',
  id: 'domestic-violence',
  categoryId: 'emergency_rights',
  title: 'Apoio a vítimas de violência doméstica',
  tldr: 'Linha SOS: 800 202 148 (gratuita, 24/7, anónima, em vários idiomas). APAV (Associação Portuguesa de Apoio à Vítima): 116 006. A Lei 112/2009 reconhece a violência doméstica como crime — a acusação pode avançar mesmo sem o consentimento da vítima (procedimento público). Você tem direito a: abrigo de emergência (casa-abrigo, gratuito), apoio jurídico, exame médico, medidas de protecção (medidas de coação) contra o agressor, estatuto de imigração se a autorização de residência dependia do parceiro. O apoio está disponível em 4+ idiomas.',
  tags: ['violência', 'doméstica', 'vítimas', 'apav'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'immediate',
      title: '🆘 Medidas de emergência',
      content: [
        { kind: 'checklist', items: [
          '☎️ 112 — se houver ameaça imediata. A polícia irá ao local e afastará o agressor (medida de coação)',
          '☎️ 800 202 148 — Serviço de Informação às Vítimas de Violência Doméstica (CIG, gratuito, 24/7, anónimo, apoio multilingue). É uma linha especializada para vítimas de violência doméstica, não confundir com a linha social geral 144',
          '☎️ 144 — Linha Nacional de Emergência Social (Segurança Social, gratuita, 24/7) — para emergências sociais gerais',
          '☎️ APAV: 116 006 — apoio nacional a vítimas',
          '☎️ GNR / PSP — denúncia local do crime (contacto com a polícia)',
          '🏥 Serviço de urgência hospitalar — exame médico + relatório médico-legal (essencial para o processo-crime). Diga que quer apresentar queixa; chamarão um assistente social',
          '💊 Hospital de São José, Júlio de Matos em Lisboa / Hospital de São João no Porto têm GAV (Gabinete de Apoio à Vítima)'
        ]}
      ]
    },
    {
      id: 'legal-rights',
      title: '⚖️ Os seus direitos legais',
      content: [
        { kind: 'paragraph', text: 'Lei 112/2009 (lei da violência doméstica) e Código Penal art. 152.' },
        { kind: 'checklist', items: [
          '🏛️ Procedimento público: a polícia / Ministério Público podem iniciar o processo sem o consentimento da vítima, se tiverem conhecimento da violência. Isto significa que, mesmo que depois você “retire” a queixa, o processo continua',
          '🛡️ Medidas de coação: proibição de aproximação, afastamento da habitação comum, proibição de armas, vigilância por pulseira electrónica',
          '🏠 Casa-abrigo: abrigo com morada secreta, gratuito, até 1 ano. Inclui alimentação, advogado, psicólogo. O transporte é assegurado pela APAV / Cruz Vermelha',
          '👨‍👩‍👧 Crianças: ficam com o progenitor vítima; a guarda temporária é decidida em tribunal. A escola é informada, mas não comunica a morada',
          '💰 Adiantamento de indemnização: o Estado paga uma compensação antes da decisão judicial (Lei 104/2009)',
          '🛂 Protecção imigratória: se a sua autorização de residência dependia do parceiro agressor (Reagrupamento Familiar) — você obtém uma autorização de residência autónoma independentemente dele (art. 107 Lei 23/2007)'
        ]}
      ]
    },
    {
      id: 'safety-plan',
      title: '📋 Plano de segurança',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Se ainda estiver numa situação de perigo', content: [
            { kind: 'checklist', items: [
              '📱 Telemóvel com contactos de emergência (112, 800 202 148) em marcação rápida',
              '👜 Mala com o essencial pronta num local escondido: documentos, muda de roupa, medicamentos, dinheiro',
              '🔑 Conjunto de chaves suplente com uma pessoa de confiança',
              '💻 Conta de email segura + novo Apple/Google ID — os antigos podem estar a ser monitorizados',
              '🤐 Não discutir o planeamento em canais duvidosos (iCloud partilhado, Email partilhado)',
              '👥 Palavra-código com um amigo / família: “está tudo bem” = não está bem, preciso de ajuda',
              '🏥 Guardar relatórios médicos após idas ao hospital — prova do histórico'
            ]}
          ]},
          { id: 's2', title: 'Ao sair', content: [
            { kind: 'checklist', items: [
              'Não comunicar o destino — nem mesmo a pessoas próximas (podem contar sob pressão)',
              'A morada da Casa-abrigo é SECRETA — não a partilhe com ninguém, excepto com a APAV',
              'Mudar o número de telefone (NOS / MEO / Vodafone — no prazo de 1 dia)',
              'Mudar as palavras-passe de todas as contas; activar 2FA',
              'Bloquear cartões de crédito, se havia vida financeira conjunta — o banco ajuda',
              'Informe apenas a escola das crianças (com pedido de confidencialidade)',
              'Se o trabalho conhecia a morada antiga — actualizar apenas nos recursos humanos (HR) com nota de confidencialidade'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'support',
      title: '🤝 Apoio a longo prazo',
      content: [
        { kind: 'substeps', items: [
          { id: 'sup1', title: 'APAV — o principal recurso', content: [
            { kind: 'checklist', items: [
              '116 006 — linha nacional (gratuita)',
              'Gabinetes em cada região: Lisboa, Porto, Coimbra, Faro, Évora, Beja, Bragança',
              'Apoio jurídico: gratuito para vítimas',
              'Apoio psicológico: 6-12 sessões gratuitas',
              'Acompanhamento em tribunal (acompanhamento processual)',
              'Serviços em vários idiomas: PT/EN/FR/ES/RU/UK nos grandes centros'
            ]}
          ]},
          { id: 'sup2', title: 'UMAR / rede Casa Abrigo', content: [
            { kind: 'checklist', items: [
              'UMAR (União de Mulheres Alternativa e Resposta) — organização feminista',
              '40+ casa-abrigo em todo o país',
              'Contacto através do 800 202 148',
              'Estadia de 6-12 meses; durante esse período há apoio com trabalho / documentos / crianças',
              'Do abrigo — transição para habitação social com prioridade'
            ]}
          ]},
          { id: 'sup3', title: 'Saúde e apoio jurídico', content: [
            { kind: 'checklist', items: [
              'SNS 24 → opção 4: apoio psicológico em crise',
              'Apoio judiciário (apoio jurídico gratuito): gratuito se o rendimento < 1.5 IAS — através da Segurança Social',
              'Ordem dos Advogados — advogado pro bono para vítimas',
              'Comissão de Cidadania para a Igualdade (CIG): comissão estatal, coordena o apoio'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'language-help',
      title: '🌍 Em idiomas estrangeiros',
      content: [
        { kind: 'checklist', items: [
          '🇬🇧 EN: 800 202 148, APAV 116 006 — há profissionais que falam inglês em todo o lado',
          '🇷🇺 RU: na APAV em Lisboa há um profissional que fala russo; SOS Voz Amiga 213 544 545 — por vezes',
          '🇺🇦 UK: desde 2022 foram alargados os serviços para mulheres ucranianas que fogem da guerra',
          '🇧🇷 PT-BR: qualquer linha em língua portuguesa é adequada',
          '🇫🇷 FR: APAV — por vezes, através da linha de crise',
          'Se o idioma necessário não estiver disponível — a linha disponibilizará um serviço de interpretação'
        ]}
      ]
    },
    {
      id: 'children-specific',
      title: '👶 Se houver crianças envolvidas',
      content: [
        { kind: 'checklist', items: [
          'CPCJ (Comissão de Protecção de Crianças e Jovens): comissão local de protecção de crianças — em cada município. Pode retirar / proteger temporariamente a criança',
          'Linha SOS Crianças: 116 111 (para as próprias crianças)',
          'A escola é informada — não divulga a morada',
          'No tribunal de família — definição de guarda temporária, pensão de alimentos',
          'Psicólogo para a criança — criticamente importante, gratuito através do pediatra / SNS',
          'Programa APAV-Kids: grupo especializado para crianças vítimas'
        ]}
      ]
    },
    {
      id: 'aggressor-help',
      title: '🚹 Para o agressor — ÚTIL para todos',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem programas para agressores — a intervenção precoce reduz o risco de violência repetida. Se notar impulsos agressivos em si:' },
        { kind: 'checklist', items: [
          '⚠️ IMPORTANTE: o número 808 24 24 24 é o SNS24 (linha médica geral do Ministério da Saúde), e não “SOS Agressor”. Em Portugal não existe uma linha pública universal 24/7 para agressores — a maioria dos programas funciona através do tribunal / DGRSP / NGO especializadas',
          'Programa para Agressores de Violência Doméstica (PAVD) — programa da DGRSP, normalmente por determinação judicial; o contacto espontâneo é possível através dos serviços sociais',
          'APAV (116 006) e CIG também podem encaminhar o agressor para um programa adequado — mesmo que seja você a contactar',
          'Casa Abrigo Homem Vítima: para homens vítimas de violência doméstica (também existem — exemplo: ProMundo)',
          'Terapia de grupo para agressores (parte obrigatória da determinação judicial ou contacto espontâneo)',
          'Contacto precoce → menos consequências, oportunidade de preservar a relação através de mudanças reais'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Linhas de apoio (todas)', amountEUR: 0 },
    { label: 'Casa-abrigo', amountEUR: 0 },
    { label: 'Apoio jurídico/psicológico APAV', amountEUR: 0 },
    { label: 'Compensação estatal (adiantamento)', amountEUR: 0, note: 'até 6 IAS' }
  ],
  sources: [
    { title: 'APAV — Associação Portuguesa de Apoio à Vítima', url: 'https://apav.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CIG — Comissão para a Cidadania e Igualdade', url: 'https://www.cig.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 112/2009 — Violência Doméstica', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34466375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UMAR', url: 'https://umarfeminismos.org/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
