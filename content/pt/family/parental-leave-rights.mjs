export default {
  editorialVoice: 'hackportugal',
  id: 'parental-leave-rights',
  categoryId: 'work_business',
  title: 'Licença parental e direitos parentais',
  tldr: 'Licença parental em Portugal em 2026: licença parental inicial — 120 dias (100%), 150 dias ou 150/180 dias partilhada quando dividida com o pai (Lei 13/2023; 90% na partilhada de 180 dias). Após as 6 semanas obrigatórias da mãe, o tempo restante pode ser dividido entre os progenitores. Pai: 28 dias obrigatórios (7 — imediatamente após o nascimento, 21 — no prazo de 42 dias) + até 7 dias adicionais em simultâneo com a mãe. O posto de trabalho fica protegido durante a licença. Amamentação/aleitação: normalmente 2 horas por dia (2 períodos × 1 hora); após 1 ano, em caso de amamentação, é necessário atestado médico. Direito a horário flexível / trabalho a tempo parcial — até aos 12 anos da criança (Código do Trabalho art. 55/56). Para crianças com necessidades especiais — regras alargadas.',
  tags: ['licença parental', 'licença de maternidade', 'licença parental', 'mãe', 'pai', 'segurança social'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'overview',
      title: '👶 Estrutura da licença',
      content: [
        { kind: 'substeps', items: [
          { id: 'mother', title: 'Mãe — parte obrigatória e partes adicionais', content: [
            { kind: 'checklist', items: [
              '🏥 **Parte obrigatória**: 6 semanas (42 dias) imediatamente após o parto — apenas a mãe a goza',
              '👶 **Licença parental inicial**: 120 dias pagos a 100% (após os 42 dias obrigatórios da mãe, o remanescente pode ser usado pela mãe ou pelo pai)',
              '🤝 **Inicial partilhada**: 150 dias (a outra taxa) ou 180 dias pagos a 90% quando cumpridas as condições de partilha da licença entre os progenitores (Lei 13/2023)',
              '⏰ É possível iniciar a licença antes do parto com atestado médico (em regra, cerca de ~10 dias antes)',
              '👼 Em caso de gémeos: +30 dias',
              '👶 Em caso de trigémeos: +60 dias'
            ]}
          ]},
          { id: 'father', title: 'Pai — direitos e obrigações', content: [
            { kind: 'checklist', items: [
              '🛌 **28 dias obrigatórios**: 7 consecutivos imediatamente após o nascimento + 21 no prazo de 42 dias após o nascimento (seguidos ou interpolados)',
              '➕ **+7 dias adicionais** após os 28 obrigatórios, desde que coincidam com a licença parental inicial da mãe',
              '🤝 **Parte partilhada** (por acordo com a mãe): período mínimo exclusivo obrigatório do pai — obrigatório na partilhada de 150/180 dias',
              '⚖️ Os direitos estão protegidos — o despedimento por causa da licença é ilegal (Lei 7/2009 art. 36)',
              '🏥 Se a mãe não puder gozar a licença ou tiver falecido — o pai recebe a parte da licença dela'
            ]}
          ]},
          { id: 'who-pays', title: 'Quem paga', content: [
            { kind: 'checklist', items: [
              '🛡️ **Segurança Social** (Subsídio Parental) — principal fonte dos pagamentos',
              '💼 A entidade empregadora NÃO paga durante a licença, mas mantém o posto de trabalho',
              '💸 Cálculo: remuneração de referência = soma das remunerações dos primeiros 6 dos últimos 8 meses / 180; depois aplica-se a taxa de 100%, 90%, 83%, 80%, etc. (depende do regime)',
              '⏰ O dinheiro entra mensalmente na conta bancária',
              '📑 O pedido do subsídio é apresentado pelo próprio trabalhador através da Segurança Social Direta; a entidade empregadora regista separadamente a ausência e comunica os dados salariais'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apply',
      title: '📋 Como tratar do processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Antes do parto', content: [
            { kind: 'checklist', items: [
              '📩 Se a mãe iniciar a licença antes do parto — informar a entidade empregadora com atestado médico, em regra com 10 dias de antecedência (em casos urgentes — o mais rapidamente possível)',
              '📋 Apresentar o «requerimento de subsídio parental» na Segurança Social Direta',
              '📑 Anexar declaração médica com a data prevista do parto',
              '🤝 Se a licença for partilhada (partilhada): apresentar declaração conjunta com o pai'
            ]}
          ]},
          { id: 'a2', title: 'Após o parto', content: [
            { kind: 'checklist', items: [
              '📜 No prazo de 7 dias após o nascimento, comunicar à entidade empregadora as datas da licença; em caso de partilhada — declaração conjunta dos progenitores',
              '⏰ O pedido de subsídio na Segurança Social deve ser apresentado no prazo de 6 meses a contar do primeiro dia da licença/do evento; se for apresentado tarde, o subsídio pode ser reduzido',
              '📲 É possível alterar o calendário da licença através da Segurança Social Direta: por exemplo, prolongar ou encurtar a parte adicional',
              '💰 O pagamento chega após aprovação da SS para o IBAN indicado; não há prazo garantido, depende do processamento do pedido'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'breastfeeding',
      title: '🤱 Amamentação — direitos',
      content: [
        { kind: 'paragraph', text: 'Nos termos da Lei 7/2009 art. 47, a mãe tem direito a uma redução diária do tempo de trabalho para amamentação.' },
        { kind: 'checklist', items: [
          '🕐 **2 horas de redução do dia de trabalho** em caso de amamentação (1 hora de manhã + 1 hora depois de almoço OU 2 horas num único bloco)',
          '⏰ Até ao 1.º aniversário da criança — sem perguntas adicionais',
          '🍼 Após 1 ano — é necessário atestado médico do pediatra',
          '🚫 A entidade empregadora NÃO pode reduzir o salário por este motivo',
          '📑 Pedido à entidade empregadora; após 1 ano, em caso de amamentação, anexar atestado médico (normalmente não é necessária cópia para a Segurança Social — é um direito laboral, não um subsídio da SS)',
          '👶 Em caso de aleitação artificial: as mesmas 2 horas podem ser divididas entre a mãe e o pai',
          '👯 Em caso de nascimento múltiplo: +30 minutos por cada criança além da primeira'
        ]}
      ]
    },
    {
      id: 'flexible-work',
      title: '⏰ Horário flexível e trabalho a tempo parcial até aos 12 anos da criança',
      content: [
        { kind: 'paragraph', text: 'O Código do Trabalho art. 55 regula o trabalho a tempo parcial, e o art. 56 regula o horário flexível para trabalhador com filho menor de 12 anos; para criança com deficiência/doença crónica aplicam-se regras alargadas sem limite de idade rígido.' },
        { kind: 'checklist', items: [
          '🕐 **Meio tempo**: metade do dia de trabalho + metade do salário',
          '🕐 **3/4 do tempo**: 75% do trabalho e do salário',
          '⏰ **Horário flexível**: as mesmas horas, mas com possibilidade de deslocar o início/fim do dia',
          '✅ Se pretender recusar, a entidade empregadora é obrigada a cumprir um procedimento especial e a remeter o processo à **CITE** para parecer prévio (é o organismo-chave precisamente para estas recusas)',
          '📑 O pedido é apresentado com antecedência (nos termos do Código do Trabalho)',
          '👨‍🦱 Ambos os progenitores têm este direito',
          '⚖️ A ACT (inspeção do trabalho) — para queixas sobre violações da legislação laboral, mas não substitui a CITE'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: '🌟 Casos especiais',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 **Adoção**: os mesmos 120/150/180 dias nos regimes correspondentes',
          '🏥 **Hospitalização da criança após o parto / parto antes das 33 semanas**: aplicam-se regras especiais de aumento/suspensão da licença parental inicial; confirmar as datas junto da Segurança Social/entidade empregadora',
          '♿ **Criança com necessidades especiais**: direitos alargados/licenças adicionais mediante parecer médico (ver Código do Trabalho)',
          '👵 **Avós**: direitos especiais em casos concretos — por exemplo, até 30 dias consecutivos após o nascimento de neto, se o progenitor da criança tiver menos de 16 anos e o neto viver com a avó/avô; não existe um regime universal de «14 dias se os pais não puderem» (ver Código do Trabalho art. 50)',
          '📑 **Recibo Verde (trabalhador independente)**: podem ter direito a subsídio parental se cumprirem o prazo de garantia (normalmente 6 meses de remunerações registadas) e se tiverem a situação contributiva regularizada; as garantias laborais da entidade empregadora não se aplicam',
          '🛂 **Estrangeiros que trabalham em Portugal**: os mesmos direitos laborais; o subsídio da SS depende do registo, das contribuições e do cumprimento do prazo de garantia. Se as contribuições forem insuficientes, podem existir prestações sociais sujeitas a condição de recursos'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Dicas',
      content: [
        { kind: 'checklist', items: [
          '💰 Os 180 dias de partilhada são muitas vezes vantajosos devido aos 60 dias adicionais pagos a 90%, mas compare o rendimento familiar total e a possibilidade real de o pai gozar a sua parte',
          '📅 Antes/depois do nascimento, escolha o regime de licença parental inicial: 120, 150 ou partilhada de 150/180 dias; para a partilhada de 180 dias, acorde previamente com as entidades empregadoras os períodos da mãe e do pai',
          '🩺 Cálculo do subsídio: remuneração de referência = remunerações de 6 dos 8 meses anteriores / 180. Se entrar em licença parental pouco depois de um aumento, o novo salário pode não entrar totalmente na base de cálculo',
          '🛡️ A licença parental não interrompe o tempo de residência legal, se a autorização de residência continuar válida/prorrogada. Para a nacionalidade, verifique a redação atual da Lei da Nacionalidade: **Decreto AR 48/XVII promulgado pelo Presidente Seguru em 03.05.2026** e aumentará o prazo para 7/10 anos após publicação no DRE — em 17.05.2026 a regra em vigor é de 5 anos (Lei 37/81)',
          '⚖️ Proteção contra despedimento: o despedimento de trabalhadora grávida, puérpera, lactante ou de trabalhador em licença parental exige procedimento especial e parecer prévio da **CITE**; não existe imunidade universal durante 12 meses após o regresso',
          '👶 No SNS, o acompanhamento da gravidez, o parto, a vacinação e os cuidados pediátricos são normalmente gratuitos/isentos de taxas moderadoras; estrangeiros — tratar antecipadamente do número de utente',
          '📑 Guarde todos os atestados e requerimentos — podem ser necessários numa próxima licença parental ou numa inspeção fiscal'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Subsídio Parental — pago pela Segurança Social', amountEUR: 0, note: 'não sai do seu bolso' },
    { label: 'Apresentação do pedido', amountEUR: 0 },
    { label: 'Tradução de documentos (se necessário)', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'Lei 13/2023 — Alteração ao Código do Trabalho', url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2023-208854851', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Subsídio Parental', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 7/2009 — Código do Trabalho', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CITE — Comissão para a Igualdade no Trabalho', url: 'https://cite.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
