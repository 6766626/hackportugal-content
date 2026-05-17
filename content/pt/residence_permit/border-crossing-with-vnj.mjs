export default {
  editorialVoice: 'hackportugal',
  id: 'border-crossing-with-vnj',
  categoryId: 'residence_permit',
  title: 'Passagem de fronteira com autorização de residência portuguesa — Schengen e países terceiros',
  tldr: 'Com uma autorização de residência portuguesa (cartão de residência), pode circular livremente por todo o espaço Schengen até 90 dias em cada 180, sem visto separado. Para entrar — passaporte + cartão de residência válido (e, se a autorização de residência tiver caducado mas estiver em processo de renovação — comprovativo da AIMA sobre a renovação/manutenção do estatuto). Para entrar em Portugal a partir de países fora da UE, leve o cartão de embarque e a autorização de residência; podem não carimbar o passaporte. Ao regressar do espaço Schengen, normalmente o agente não coloca questões.',
  tags: ['fronteira', 'schengen', 'autorização de residência', 'deslocações', 'viagens'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'schengen',
      title: 'Schengen: 90/180 sem visto',
      content: [
        { kind: 'paragraph', text: 'Nos termos do Regulamento (UE) 2016/399 (Código das Fronteiras Schengen), o titular de uma autorização de residência válida de um Estado-Membro Schengen pode circular livremente pelos outros países Schengen até 90 dias em cada 180. Esta regra aplica-se a viagens curtas: turismo, família, deslocações profissionais.' },
        { kind: 'checklist', items: [
          'Documentos: passaporte + cartão de residência (cartão físico)',
          'Passaporte: verifique os requisitos do país de destino/trânsito; para entrada de curta duração no espaço Schengen, em regra — válido pelo menos 3 meses após a saída prevista do espaço Schengen e emitido há menos de 10 anos (SBC art. 6)',
          'O seguro para viagens dentro do espaço Schengen normalmente NÃO é verificado como condição de visto para titulares de autorização de residência, mas é fortemente recomendado; para países fora de Schengen, consulte as regras do país de destino',
          'Se a autorização de residência tiver caducado, mas existir comprovativo de renovação — é arriscado e NÃO equivale a um cartão válido para outros países Schengen. A prorrogação interna portuguesa da validade dos documentos nem sempre é reconhecida fora de Portugal. Sempre que possível, aguarde pelo novo cartão',
          'No máximo 90 dias no total noutros países Schengen em cada 180 dias'
        ]},
        { kind: 'warning', text: 'A autorização de residência NÃO dá direito a trabalhar noutros países Schengen. Apenas em Portugal (ou em excepções — cartão ICT, Cartão Azul UE com direitos de mobilidade entre países).' }
      ]
    },
    {
      id: 'non-eu',
      title: 'Entrada em Portugal e saída de/para países terceiros',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Voo de Portugal para um país fora da UE (Federação Russa, Turquia, EUA, etc.)', content: [
            { kind: 'checklist', items: [
              'Passaporte + autorização de residência válida; aos titulares de autorização de residência, normalmente, o passaporte NÃO é carimbado nem à entrada nem à saída (Código das Fronteiras Schengen art. 11)',
              'O controlo de fronteira no aeroporto é normalmente efectuado pela PSP; os e-gates/ABC automáticos podem ser utilizados onde estiverem disponíveis',
              'Sem autorização de residência — como turista 90/180; precisa de visto para regressar, se não tiver isenção de visto',
              'A companhia aérea verifica a validade da autorização de residência no check-in'
            ]}
          ]},
          { id: 'n2', title: 'Regresso a Portugal a partir de um país fora da UE', content: [
            { kind: 'checklist', items: [
              'Passaporte + autorização de residência',
              'O agente verifica: integridade do cartão, correspondência do nome com o passaporte, prazo de validade',
              'O carimbo de entrada normalmente NÃO é colocado aos titulares de autorização de residência; se o carimbo for colocado por engano — guarde o boarding pass/bilhetes e, se necessário, esclareça junto do serviço de fronteiras',
              'Se a autorização de residência estiver em renovação — comprovativo + cartão antigo',
              'EES (Entry-Exit System) — lançamento faseado a partir de 12.10.2025. O EES aplica-se a cidadãos de países terceiros na ENTRADA para estadias de curta duração. **Titulares de autorização de residência/long-stay visa válida de um país Schengen, que entrem enquanto residentes, normalmente NÃO são registados no EES** — apresente a autorização de residência + passaporte; o guarda de fronteira determinará o procedimento correcto'
            ]}
          ]},
          { id: 'n3', title: 'Trânsito pelo espaço Schengen', content: [
            { kind: 'paragraph', text: 'O trânsito por outro aeroporto Schengen conta como passagem da fronteira Schengen. Para viajar para um país fora da UE com escala em Frankfurt/Madrid, a autorização de residência é suficiente.' }
          ]}
        ]}
      ]
    },
    {
      id: 'expired',
      title: 'Autorização de residência caducada / prestes a caducar',
      content: [
        { kind: 'checklist', items: [
          '⏰ Autorização de residência válida — sem problemas',
          '🔄 Em processo de renovação, antes do termo do cartão — as viagens são possíveis com o cartão antigo + comprovativo de submissão',
          '🟠 O cartão caducou, o novo ainda não chegou — viajar é arriscado: comprovativo de submissão / deferimento são documentos para assuntos em Portugal; a companhia aérea e o guarda de fronteira de outro país Schengen não são obrigados a aceitá-los em vez de um cartão de autorização de residência válido. Sempre que possível, aguarde pelo novo cartão; antes da viagem, consulte o consulado de Portugal no país de trânsito e/ou a companhia aérea',
          '🔒 Caducou sem procedimento de renovação — a fronteira pode não permitir o regresso sem visto. Não saia até regularizar o estatuto',
          '⚠️ Perda/roubo em Portugal — participação à polícia (PSP/GNR), guarde o auto de denúncia, depois solicite a duplicata através da AIMA. Os prazos de emissão dependem da AIMA — não planeie sair antes de receber o novo cartão',
          '❓ Perda no estrangeiro — participe à polícia local, contacte a companhia aérea e o consulado de Portugal. Se também perdeu o passaporte — o passaporte de emergência é emitido pelo consulado do SEU país de nacionalidade, não por Portugal. O consulado português pode ajudar no regresso a Portugal por meios alternativos (por exemplo, ajudar a verificar o estatuto)'
        ]},
        { kind: 'warning', text: 'As companhias aéreas têm o direito de recusar o embarque sem um cartão de autorização de residência válido — verificam automaticamente pelo passaporte. Uma confirmação em PDF não é um documento de viagem.' }
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
            { kind: 'paragraph', text: 'Não é Schengen. A autorização de residência PT, por si só, NÃO dá direito de entrada; a necessidade de Irish visa depende do passaporte. Para cidadãos da Federação Russa/Bielorrússia, normalmente é necessário visto. Site — irishimmigration.ie.' }
          ]},
          { id: 's3', title: 'Bulgária, Roménia, Chipre', content: [
            { kind: 'paragraph', text: 'Desde 2025, a Bulgária e a Roménia estão no espaço Schengen — a autorização de residência portuguesa funciona. Chipre não está no espaço Schengen, mas uma autorização de residência válida de Portugal/de outro país Schengen normalmente permite a entrada em Chipre sem visto cipriota separado por um curto período (EU Decision No 565/2014/EU). Antes da viagem, verifique as condições por nacionalidade e prazo de validade do documento no site do Cyprus MFA.' }
          ]},
          { id: 's4', title: 'Croácia', content: [
            { kind: 'paragraph', text: 'No espaço Schengen desde 2023 — a autorização de residência funciona.' }
          ]},
          { id: 's5', title: 'EUA, Canadá, Austrália', content: [
            { kind: 'paragraph', text: 'São necessários vistos ou autorizações separadas (ESTA/eTA ou um visto completo). A autorização de residência PT, por si só, NÃO dá direito de entrada e normalmente NÃO confere prioridade formal. Pode ser usada como prova de residência legal/vínculos num pedido de visto; as regras dependem da nacionalidade e do país de destino.' }
          ]},
          { id: 's6', title: 'Rússia, Bielorrússia', content: [
            { kind: 'paragraph', text: 'Não há voos directos; a rota é normalmente via Sérvia / Turquia / EAU. Vistos da Federação Russa para cidadãos de países terceiros — segundo as regras gerais.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents-checklist',
      title: 'Checklist: o que levar na viagem',
      content: [
        { kind: 'checklist', items: [
          '🛂 Passaporte (validade 3+ meses)',
          '🪪 Cartão físico cartão de residência (não um scan!)',
          '📄 Cópia digital — foto / PDF no telemóvel',
          '💼 Seguro (para Schengen — opcional, excepto países com requisito obrigatório; para países fora da UE — recomendo)',
          '💶 Comprovativo de meios financeiros (para estadias longas)',
          '🏨 Reserva de hotel / convite — para países não Schengen',
          '🧾 Bilhete de regresso (por vezes exigido na fronteira do país de destino)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Regulamento (UE) 2016/399 — Código das Fronteiras Schengen', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0399', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Cartão de Residência (cartão de autorização de residência)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Sistema de Entrada/Saída da UE (EES) — ec.europa.eu', url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — regras para cidadãos de países terceiros', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
