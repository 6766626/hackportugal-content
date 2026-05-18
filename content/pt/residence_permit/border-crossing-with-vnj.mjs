export default {
  editorialVoice: 'hackportugal',
  id: 'border-crossing-with-vnj',
  categoryId: 'residence_permit',
  title: 'Passagem de fronteira com autorização de residência portuguesa — Schengen e países terceiros',
  tldr: 'Com uma autorização de residência portuguesa (cartão de residência), pode circular livremente por todo o espaço Schengen até 90 dias em cada 180 sem visto separado. Para entrar — passaporte + cartão de residência válido (e, se a autorização de residência tiver expirado e estiver em processo de renovação — comprovativo da AIMA sobre a renovação/manutenção do estatuto). Para entrar em Portugal a partir de países fora da UE, leve o cartão de embarque e a autorização de residência; podem não colocar carimbo. Ao regressar de Schengen, o agente normalmente não coloca questões.',
  tags: ['fronteira', 'schengen', 'autorização de residência', 'deslocações', 'viagens'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'schengen',
      title: 'Schengen: 90/180 sem visto',
      content: [
        { kind: 'paragraph', text: 'Nos termos do Regulamento (EU) 2016/399 (Código das Fronteiras Schengen), o titular de uma autorização de residência válida de um Estado-Membro Schengen pode circular livremente por outros países Schengen até 90 dias em cada 180. Esta regra aplica-se a viagens curtas: turismo, família, deslocações de trabalho.' },
        { kind: 'checklist', items: [
          'Documentos: passaporte + cartão de residência (cartão físico)',
          'Passaporte: verifique os requisitos do país de destino/trânsito; para entrada de curta duração em Schengen, a regra padrão é — válido pelo menos 3 meses após a saída prevista de Schengen e emitido há menos de 10 anos (SBC art. 6)',
          'O seguro para viagens dentro de Schengen normalmente NÃO é verificado como condição de visto para titulares de autorização de residência, mas é altamente recomendado; para países não Schengen, consulte as regras do país de destino',
          'Se a autorização de residência expirou, mas existe comprovativo de renovação — é arriscado e NÃO equivale a um cartão válido para outros países Schengen. A prorrogação interna portuguesa da validade dos documentos nem sempre é reconhecida fora de Portugal. Sempre que possível, aguarde pelo novo cartão',
          'Não mais de 90 dias no total noutros países Schengen em cada 180 dias'
        ]},
        { kind: 'warning', text: 'A autorização de residência NÃO confere direito a trabalhar noutros países Schengen. Apenas em Portugal (ou em exceções — cartão ICT, Cartão Azul EU com direitos de mobilidade entre países).' }
      ]
    },
    {
      id: 'non-eu',
      title: 'Entrada em Portugal e saída de/para países terceiros',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Voo de Portugal para um país fora da UE (Federação Russa, Turquia, EUA, etc.)', content: [
            { kind: 'checklist', items: [
              'Passaporte + autorização de residência válida; aos titulares de autorização de residência, normalmente NÃO é colocado carimbo no passaporte nem à entrada nem à saída (Schengen Borders Code art. 11)',
              'O controlo de fronteira no aeroporto é normalmente efetuado pela PSP; podem ser usadas e-gates/ABC automáticas onde estiverem disponíveis',
              'Sem autorização de residência — como turista 90/180; precisa de visto para regressar, se não houver isenção de visto',
              'A companhia aérea verifica a validade da autorização de residência no check-in'
            ]}
          ]},
          { id: 'n2', title: 'Regresso a Portugal a partir de um país fora da UE', content: [
            { kind: 'checklist', items: [
              'Passaporte + autorização de residência',
              'O agente verifica: integridade do cartão, correspondência do nome com o passaporte, prazo de validade',
              'Normalmente NÃO é colocado carimbo de entrada aos titulares de autorização de residência; se o carimbo for colocado por engano — guarde o cartão de embarque/bilhetes e, se necessário, esclareça junto do serviço de fronteiras',
              'Se a autorização de residência estiver em renovação — comprovativo + cartão antigo',
              'EES (Entry-Exit System) — implementação faseada a partir de 12.10.2025. O EES aplica-se a cidadãos de países terceiros na ENTRADA para estadias de curta duração. **Titulares de autorização de residência/visto de longa duração válido de um país Schengen que entram como residentes normalmente NÃO são registados no EES** — apresente a autorização de residência + passaporte; o agente de fronteira determinará o procedimento correto'
            ]}
          ]},
          { id: 'n3', title: 'Trânsito por Schengen', content: [
            { kind: 'paragraph', text: 'O trânsito por outro aeroporto Schengen conta como passagem da fronteira Schengen. Para viajar para um país fora da UE com escala em Frankfurt/Madrid, a autorização de residência é suficiente.' }
          ]}
        ]}
      ]
    },
    {
      id: 'expired',
      title: 'A autorização de residência expirou / está prestes a expirar',
      content: [
        { kind: 'checklist', items: [
          '⏰ A autorização de residência está válida — sem problemas',
          '🔄 Em processo de renovação, antes do fim da validade do cartão — as viagens são possíveis com o cartão antigo + comprovativo de submissão',
          '🟠 O cartão expirou, o novo ainda não chegou — viajar é arriscado: comprovativo de submissão / deferimento são documentos para tratar de assuntos em Portugal; a companhia aérea e o agente de fronteira de outro país Schengen não são obrigados a aceitá-los em vez de um cartão de autorização de residência válido. Sempre que possível, aguarde pelo novo cartão; antes de viajar, consulte o consulado de Portugal no país de trânsito e/ou a companhia aérea',
          '🔒 Expirou sem procedimento de renovação — a fronteira pode não permitir o regresso sem visto. Não saia antes de regularizar o estatuto',
          '⚠️ Perda/roubo em Portugal — apresente queixa à polícia (PSP/GNR), guarde o auto de denúncia e depois peça uma duplicata através da AIMA. Os prazos de emissão dependem da AIMA — não planeie sair antes de receber o novo cartão',
          '❓ Perda no estrangeiro — comunique à polícia local, contacte a companhia aérea e o consulado de Portugal. Se também perdeu o passaporte — o passaporte de emergência é emitido pelo consulado do SEU país de nacionalidade, não por Portugal. O consulado português pode ajudar no regresso a Portugal por meios alternativos (por exemplo, ajudar a verificar o estatuto)'
        ]},
        { kind: 'warning', text: 'As companhias aéreas têm o direito de recusar o embarque sem um cartão de autorização de residência válido — fazem a verificação automaticamente pelo passaporte. Um comprovativo em PDF não é um documento de viagem.' }
      ]
    },
    {
      id: 'countries-notes',
      title: 'Especificidades por país',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Reino Unido', content: [
            { kind: 'paragraph', text: 'NÃO é Schengen. O Reino Unido não reconhece a autorização de residência PT como direito de entrada. A regra depende do passaporte: cidadãos de países visa-national (incluindo Federação Russa/Bielorrússia) normalmente precisam de UK Standard Visitor visa; cidadãos de países visa-free precisam de ETA. A ETA custa £16 (2025+), é válida até 2 anos ou até ao fim da validade do passaporte; as visitas permitidas são normalmente até 6 meses.' }
          ]},
          { id: 's2', title: 'Irlanda', content: [
            { kind: 'paragraph', text: 'Não é Schengen. A autorização de residência PT por si só NÃO confere direito de entrada; a necessidade de Irish visa depende do passaporte. Para cidadãos da Federação Russa/Bielorrússia, normalmente é necessário visto. Site — irishimmigration.ie.' }
          ]},
          { id: 's3', title: 'Bulgária, Roménia, Chipre', content: [
            { kind: 'paragraph', text: 'Desde 2025, a Bulgária e a Roménia estão em Schengen — a autorização de residência portuguesa funciona. Chipre não está em Schengen, mas uma autorização de residência válida de Portugal/de outro país Schengen normalmente permite a entrada em Chipre sem visto cipriota separado por um curto período (EU Decision No 565/2014/EU).\n\nAntes de viajar, verifique as condições por nacionalidade e prazo de validade do documento no site do Cyprus MFA.' }
          ]},
          { id: 's4', title: 'Croácia', content: [
            { kind: 'paragraph', text: 'Em Schengen desde 2023 — a autorização de residência funciona.' }
          ]},
          { id: 's5', title: 'EUA, Canadá, Austrália', content: [
            { kind: 'paragraph', text: 'São necessários vistos ou autorizações separados (ESTA/eTA ou um visto completo). A autorização de residência PT por si só NÃO confere direito de entrada e normalmente NÃO dá prioridade formal. Pode ser usada como prova de residência legal/vínculos num pedido de visto; as regras dependem da nacionalidade e do país de destino.' }
          ]},
          { id: 's6', title: 'Rússia, Bielorrússia', content: [
            { kind: 'paragraph', text: 'Não há voos diretos; a rota é normalmente via Sérvia / Turquia / EAU. Vistos da Federação Russa para cidadãos de países terceiros — de acordo com as regras gerais.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents-checklist',
      title: 'Checklist: o que levar na viagem',
      content: [
        { kind: 'checklist', items: [
          '🛂 Passaporte (validade de 3+ meses)',
          '🪪 Cartão físico cartão de residência (não uma digitalização!)',
          '📄 Cópia digital — fotografia / PDF no telemóvel',
          '💼 Seguro (para Schengen — opcional, exceto países com requisito obrigatório; para países fora da UE — recomendo)',
          '💶 Prova de meios financeiros (para estadias prolongadas)',
          '🏨 Reserva de hotel / convite — para países não Schengen',
          '🧾 Bilhete de regresso (por vezes exigido na fronteira do país de destino)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Regulamento (EU) 2016/399 — Código das Fronteiras Schengen', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0399', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Cartão de Residência (cartão de autorização de residência)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Sistema de Entrada/Saída da UE (EES) — ec.europa.eu', url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — regras para cidadãos de países terceiros', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
