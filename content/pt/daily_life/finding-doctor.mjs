export default {
  editorialVoice: 'hackportugal',
  id: 'finding-doctor',
  categoryId: 'healthcare',
  title: 'Encontrar médico em Portugal',
  tldr: 'Médico de família — gratuito através do SNS no Centro de Saúde da área de residência, mas a espera por uma marcação é de 2–14 dias. Especialistas do SNS — espera de 1–12 meses. Para situações urgentes — hospital do SNS (Urgência).\n\nClínicas privadas (CUF, Lusíadas, HPA) — sem fila, mediante pagamento (~50–80 € a primeira consulta).',
  tags: ['médico', 'sns', 'centro de saúde', 'especialista'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'family-doctor',
      title: 'Médico de família',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Inscrição', content: [
            { kind: 'paragraph', text: 'No Centro de Saúde da sua zona. São necessários NIF, NISS, Utente (ver o guia sobre o SNS). Por vezes não há médico disponível — fica inscrito em lista de espera.' }
          ]},
          { id: 'f2', title: 'Marcação de consulta', content: [
            { kind: 'checklist', items: [
              '📞 SNS 24 (808 24 24 24) — canal geral, marcação no seu Centro de Saúde',
              '📱 Aplicação SNS 24 — smartphone',
              '🌐 sns24.gov.pt — online',
              '🏢 Presencialmente no Centro de Saúde — balcão de atendimento',
              'Normalmente 2–14 dias até haver horário disponível'
            ]}
          ]},
          { id: 'f3', title: 'Na consulta', content: [
            { kind: 'paragraph', text: 'Para constipações, doenças crónicas e questões gerais de saúde. O médico pode emitir referenciação para um especialista ou prescrever análises. A receita é eletrónica e chega por SMS.' }
          ]},
          { id: 'f4', title: 'Se não houver médico de família', content: [
            { kind: 'paragraph', text: 'Permanece na lista de espera. Ao fim de 3–6 meses, normalmente é atribuído um médico. Em caso de necessidade aguda, pode marcar consulta com qualquer médico disponível no Centro de Saúde.' }
          ]}
        ]}
      ]
    },
    {
      id: 'specialists',
      title: 'Especialistas através do SNS',
      content: [
        { kind: 'paragraph', text: 'Com referenciação do médico de família → lista de espera para consulta com especialista. As esperas são longas:' },
        { kind: 'checklist', items: [
          'Cardiologista: 3–6 meses',
          'Oftalmologista: 2–4 meses',
          'Dermatologista: 4–8 meses',
          'Ginecologista / urologista: 2–4 meses',
          'Ortopedista: 3–6 meses',
          'Dentista: o SNS cobre muito pouco — pago',
          'Psicólogo / psiquiatra: 4–12 meses'
        ]},
        { kind: 'paragraph', text: 'Enquanto aguarda a consulta, os sintomas podem mudar. Se for urgente — Urgência (serviço de urgência).' }
      ]
    },
    {
      id: 'private',
      title: 'Clínicas privadas',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Principais redes', content: [
            { kind: 'checklist', items: [
              'Hospital da Luz / Luz Saúde — a maior, em todo o país',
              'CUF — rede premium, Lisboa/Porto/Algarve',
              'Lusíadas Saúde — segunda grande rede',
              'HPA Saúde — líder no Algarve',
              'Trofa Saúde — Porto/Norte',
              'Clinica Médis — clínica com rede de médicos'
            ]}
          ]},
          { id: 'p2', title: 'Como marcar', content: [
            { kind: 'paragraph', text: 'Telefone / site / aplicação. Muitas vezes há consulta no dia seguinte. A primeira consulta custa 50–80 €, análises à parte. Com seguro (Médis, Multicare) — copagamento de 15–30 €.' }
          ]},
          { id: 'p3', title: 'Utilização do seguro', content: [
            { kind: 'paragraph', text: 'Apresente o cartão do seguro → a tabela de preços é aplicada automaticamente. Sem seguro — paga a tabela completa. Dentista — quase sempre pago, mesmo no SNS.' }
          ]}
        ]}
      ]
    },
    {
      id: 'urgencia',
      title: 'Urgência (cuidados urgentes)',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Quando ir', content: [
            { kind: 'checklist', items: [
              'Dor aguda',
              'Fratura / trauma grave',
              'Febre >39°C que não baixa',
              'Sintomas de isquemia, AVC',
              'Reações alérgicas graves'
            ]}
          ]},
          { id: 'u2', title: 'Triagem de Manchester', content: [
            { kind: 'paragraph', text: 'Chega ao serviço → um enfermeiro avalia o estado → atribui uma cor de prioridade (vermelho = 0 min, laranja = 10 min, amarelo = 60 min, verde = 120 min, azul = 240 min, branco = não urgente, deve ir ao Centro de Saúde).' }
          ]},
          { id: 'u3', title: 'Custo', content: [
            { kind: 'paragraph', text: 'Desde 2022 (DL 37/2022), a maioria das taxas moderadoras do SNS foi abolida, mas no Serviço de Urgência podem ser cobradas se o paciente se apresentar sem referenciamento prévio do SNS24/médico de família e não houver internamento/isenção. Se a cor for «branco/azul» (não urgente), podem encaminhá-lo para o Centro de Saúde.' }
          ]},
          { id: 'u4', title: 'Urgência privada', content: [
            { kind: 'paragraph', text: 'Numa clínica privada (CUF, Luz) — sem fila, mas 80–150 € pela primeira consulta. Mais rápido se a espera no SNS for de 4+ horas.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'SNS — portal oficial', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS 24 — serviços online', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACSS — estatísticas do SNS', url: 'https://www.acss.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
