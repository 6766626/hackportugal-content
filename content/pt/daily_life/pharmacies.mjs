export default {
  editorialVoice: 'hackportugal',
  id: 'pharmacies',
  categoryId: 'healthcare',
  title: 'Farmácias em Portugal — Farmácia e Parafarmácia',
  tldr: 'Farmácia (cruz verde) — vende medicamentos sujeitos e não sujeitos a receita médica, e há aconselhamento do farmacêutico. Parafarmácia — apenas medicamentos não sujeitos a receita médica e cosmética de cuidado. A Comparticipação SNS (15-90% por escalão A/B/C/D) aplica-se a receitas emitidas no sistema com a identificação correcta do utente/beneficiário — o NIF por si só não dá desconto SNS. Farmácia de serviço — farmácia de turno segundo a escala de serviço.',
  tags: ['farmácia', 'parafarmácia', 'receita', 'sns'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'types',
      title: 'Farmácia vs Parafarmácia',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Farmácia (farmácia completa)', content: [
            { kind: 'paragraph', text: 'Cruz verde na fachada. Licença do INFARMED. Só aqui se vendem medicamentos sujeitos a receita médica. O farmacêutico presta aconselhamento gratuitamente. Normalmente funciona das 9:00 às 19:30 + sábado até às 13:00.' }
          ]},
          { id: 't2', title: 'Parafarmácia (parafarmácia)', content: [
            { kind: 'paragraph', text: 'Em supermercados ou em loja própria. Apenas produtos não sujeitos a receita médica: vitaminas, cosmética de cuidado, alguns medicamentos não sujeitos a receita médica (ibuprofeno, xarope para a tosse). Os preços são 10–20% mais baixos do que numa Farmácia. Auchan Bem-Estar, Celeiro e Wells são muito populares.' }
          ]}
        ]}
      ]
    },
    {
      id: 'prescription',
      title: 'Receita (receita médica)',
      content: [
        { kind: 'paragraph', text: 'A receita é obtida junto de um médico (SNS ou privado). Electrónica — recebe um SMS com código e palavra-passe. Em papel — se tiver sido emitida por um médico privado sem ligação ao SNS.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Na farmácia', content: [
            { kind: 'paragraph', text: 'Mostrar o código da receita (SMS) + passaporte/Cartão de Cidadão (ou Número de Utente). O farmacêutico vê a receita no sistema. Pagamento com desconto SNS (15-90% por escalões A/B/C/D do regime geral; para algumas doenças aplicam-se regimes especiais de comparticipação).' }
          ]},
          { id: 'p2', title: 'Descontos SNS', content: [
            { kind: 'checklist', items: [
              'Escalão A (vitais) — desconto de 90%',
              'Escalão B (necessários) — desconto de 69%',
              'Escalão C (importantes) — desconto de 37%',
              'Escalão D (complementares) — desconto de 15%',
              'Pensionistas com baixos rendimentos recebem um desconto adicional',
              'Crianças até aos 12 anos — descontos adicionais'
            ]}
          ]},
          { id: 'p3', title: 'Sem receita', content: [
            { kind: 'paragraph', text: 'Muitos medicamentos são vendidos livremente sem receita. Mas antibióticos, medicamentos para dormir e analgésicos fortes — só com receita, ao contrário de alguns países.' }
          ]}
        ]}
      ]
    },
    {
      id: 'night',
      title: 'Farmácia nocturna / de serviço',
      content: [
        { kind: 'paragraph', text: 'Farmácia de Serviço — o serviço é organizado por escala de serviço (horário), em regra por turnos entre farmácias da zona. Isto não garante que exista uma farmácia 24/7 em cada freguesia — verifique a lista de farmácias de serviço. A escala está afixada na porta de qualquer Farmácia ou no site.' },
        { kind: 'checklist', items: [
          '📍 farmaciasdeservico.net — site com lista de farmácias de serviço por código postal',
          '📞 Linha 1400 / 1400safe.pt — serviço do INFARMED para localizar medicamentos e farmácias de serviço; INFARMED (infarmed.pt) — «Localize farmácia»; 112 — apenas emergência',
          '💊 Depois das 22:00, toque no videoporteiro — o farmacêutico entrega pelo postigo',
          '💰 À noite há uma sobretaxa de cerca de 2,50 €'
        ]}
      ]
    },
    {
      id: 'common-meds',
      title: 'Onde comprar o quê',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Dor de cabeça/nariz entupido/constipação', content: [
            { kind: 'paragraph', text: 'Parafarmácia ou Farmácia: Ibuprofeno, Paracetamol (Ben-U-Ron), Bisolvon, Cegripe.' }
          ]},
          { id: 'm2', title: 'Alergia', content: [
            { kind: 'paragraph', text: 'Loratadina e Cetirizina estão frequentemente disponíveis sem receita; muitas formas de desloratadina (marca Aerius) em Portugal são classificadas como MSRM — sujeitas a receita médica. Confirme com o farmacêutico.' }
          ]},
          { id: 'm3', title: 'Antibióticos', content: [
            { kind: 'paragraph', text: 'Só com receita. Amoxicilina, Azitromicina.' }
          ]},
          { id: 'm4', title: 'Creme/pomada', content: [
            { kind: 'paragraph', text: 'Protecção solar e cosmética de cuidado — qualquer Parafarmácia. Avène, La Roche-Posay, Uriage e Nuxe são populares.' }
          ]},
          { id: 'm5', title: 'Contraceptivos', content: [
            { kind: 'paragraph', text: 'Preservativos — em todo o lado. Pílulas contraceptivas — com receita, mas baratas com desconto SNS.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'INFARMED — regulador das farmácias', url: 'https://www.infarmed.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Linha 1400 / 1400safe.pt — localizar medicamentos e farmácias de serviço (INFARMED)', url: 'https://www.1400safe.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Farmácias de Serviço — farmácias de serviço', url: 'https://www.farmaciasdeservico.net/', kind: 'reference', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Ordem dos Farmacêuticos', url: 'https://www.ordemfarmaceuticos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
