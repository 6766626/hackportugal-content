export default {
  editorialVoice: 'hackportugal',
  id: 'd4-student',
  categoryId: 'residence_permit',
  title: 'Visto D4 (estudante) — licenciatura, mestrado, doutoramento',
  tldr: 'D4 / visto de residência para estudo — sobretudo para ensino superior e alguns programas de longa duração reconhecidos. Para cursos de línguas/preparatórios aplica-se frequentemente um visto de estada temporária, e não o D4. Um estudante com autorização de residência para ensino superior pode trabalhar por conta de outrem ou como trabalhador independente, cumprindo a lei e notificando a AIMA — neste regime não existe um limite geral de 20 horas por semana. Após a conclusão dos estudos, é possível pedir uma autorização de residência/prorrogação para procura de trabalho ou empreendedorismo por até 1 ano (isto NÃO é o mesmo «visto de procura de trabalho» para entrada a partir do estrangeiro).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d4', 'estudante', 'autorização de residência', 'estudos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Admissão numa instituição de ensino superior acreditada (para D4) ou num programa de estudos de longa duração reconhecido; para cursos de línguas/preparatórios aplica-se frequentemente um visto de estada temporária',
          'Comprovativo de pagamento do primeiro ano de estudos',
          'Referência para meios financeiros em 2026: até 920 €/mês × 12 = 11 040 €, se o consulado aplicar o SMN. Bolsa de estudo, estudos/alojamento pagos ou termo de responsabilidade podem ser considerados. Verifique a checklist do consulado/VFS específico',
          'Alojamento em Portugal (contrato de arrendamento ou residência universitária)',
          'Seguro de saúde',
          'Certificado de registo criminal',
          'Para cidadãos CPLP — processo simplificado'
        ]}
      ]
    },
    {
      id: 'apply',
      title: 'Como proceder',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Escolher o programa', content: [
            { kind: 'paragraph', text: 'Para estudantes internacionais não UE, a candidatura é normalmente feita directamente junto da instituição de ensino superior pública ou privada escolhida através do Concurso Especial para Estudantes Internacionais (Decreto-Lei 36/2014). A DGES (www.dges.gov.pt) administra o concurso nacional de acesso e é útil como referência do sistema de ensino superior, mas NÃO é um portal único de candidatura para estrangeiros.' }
          ]},
          { id: 'a2', title: '2. Reconhecimento do ensino secundário / equivalência', content: [
            { kind: 'paragraph', text: 'A instituição de ensino superior pode avaliar autonomamente o certificado de conclusão do ensino secundário para o concurso de estudantes internacionais. Para a equivalência formal ao ensino secundário, o procedimento decorre normalmente através de uma escola portuguesa/autoridades educativas (DGEstE/DGE), não através da DGES. Verifique as instruções da instituição de ensino superior concreta.' }
          ]},
          { id: 'a3', title: '3. Submeter os documentos à universidade', content: [
            { kind: 'paragraph', text: 'Prazos: para públicas — Julho–Agosto; para privadas — durante todo o ano em alguns programas.' }
          ]},
          { id: 'a4', title: '4. Obter a carta de admissão', content: [
            { kind: 'paragraph', text: 'É necessária para o visto D4.' }
          ]},
          { id: 'a5', title: '5. Pedir o visto D4', content: [
            { kind: 'paragraph', text: 'No consulado, com a admissão, comprovativos financeiros e seguro.' }
          ]}
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'Direitos ao abrigo do D4',
      content: [
        { kind: 'checklist', items: [
          'Trabalho por conta de outrem ou como trabalhador independente mediante notificação à AIMA e cumprimento do regime laboral, fiscal e migratório; em Portugal NÃO existe um limite geral de 20 h/semana para o D4, mas a bolsa de estudo/instituição de ensino superior pode limitar a actividade profissional',
          'Após a legalização, é possível inscrever-se no SNS / centro de saúde. O SNS é, em geral, tendencialmente gratuito, mas medicamentos e alguns serviços são parcialmente pagos; até à inscrição é necessário seguro de saúde',
          'Renovação pelo período dos estudos',
          'Havendo uma oferta de emprego após o diploma, é possível alterar o fundamento da autorização de residência para actividade profissional; para funções altamente qualificadas pode aplicar-se o regime de highly qualified activity. A possibilidade depende do contrato, salário/qualificações e decisão da AIMA',
          'Após a conclusão dos estudos, é possível pedir uma autorização de residência/prorrogação para procura de trabalho ou empreendedorismo por um período de até 1 ano (Lei 23/2007 art. 122) — isto NÃO é o visto de procura de trabalho para entrada a partir do estrangeiro'
        ]}
      ]
    },
    {
      id: 'cplp-note',
      title: 'Cidadãos CPLP',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'Brasileiros podem candidatar-se a algumas instituições de ensino superior com o ENEM (exame brasileiro). Como via migratória, pode ser possível uma via de visto/autorização de residência para estudo ou, se os requisitos forem cumpridos e o procedimento estiver disponível — CPLP residence permit. Isto deve ser verificado de acordo com as regras actuais da AIMA/consulado e os requisitos da instituição de ensino superior. O regime CPLP NÃO é uma substituição universal do D4 para todas as situações.' },
        { kind: 'paragraph', text: 'Outros cidadãos CPLP: ao abrigo do acordo, estão disponíveis programas educativos de intercâmbio. Verifique no site da instituição de ensino superior pretendida.' }
      ]
    }
  ],
  costs: [
    { label: 'Visto consular', amountEUR: 90 },
    { label: 'Universidade pública', amountEURMin: 700, amountEURMax: 7000, note: 'por ano, para estrangeiros' },
    { label: 'Universidade privada', amountEURMin: 3500, amountEURMax: 15000, note: 'por ano' },
    { label: 'Curso de línguas/preparatório', amountEURMin: 500, amountEURMax: 2000, note: 'Aceite pelo consulado apenas se se enquadrar na categoria de visto correspondente e se a instituição/programa forem acreditados; a preparação para o CIPLE, por si só, não garante o D4' },
    { label: 'AIMA — processamento/emissão de autorização de residência e renovações', amountEURMin: 0, amountEURMax: 400, note: 'De acordo com a tabela de taxas AIMA em vigor desde 01.03.2026; o montante depende do tipo de acto e da urgência/canal' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Vistos MNE — Visto de Estudo', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Estudantes estrangeiros', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
