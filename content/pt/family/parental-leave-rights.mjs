export default {
  editorialVoice: 'hackportugal',
  id: 'parental-leave-rights',
  categoryId: 'work_business',
  title: 'Licença de maternidade/paternidade e direitos parentais',
  tldr: 'Licença de maternidade/paternidade (licença parental) em Portugal em 2026: licença parental inicial — 120 dias (100%), Substituir por: «120 dias — 100%; 150 dias sem partilha — 80%; 150 dias partilhada — 100%; 180 dias partilhada — 83% ou 90% com partilha reforçada ao abrigo da Lei 13/2023».\n\nApós as 6 semanas obrigatórias da mãe, o tempo restante pode ser partilhado pelos pais. Pai: 28 dias obrigatórios (7 — imediatamente após o nascimento, 21 — no prazo de 42 dias) + até 7 dias adicionais em conjunto com a mãe. O posto de trabalho fica protegido durante a licença. Amamentação/aleitação: normalmente 2 horas por dia (2 períodos × 1 hora), após 1 ano em caso de amamentação — é necessário atestado médico. Direito a horário flexível / trabalho a tempo parcial — até aos 12 anos da criança (Código do Trabalho art. 55/56). Para crianças com necessidades especiais — aplicam-se regras alargadas.',
  tags: ['maternidade', 'licença parental', 'licença parental', 'mãe', 'pai', 'segurança social'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'overview',
      title: '👶 Estrutura da licença',
      content: [
        { kind: 'substeps', items: [
          { id: 'mother', title: 'Mãe — parte obrigatória e parte adicional', content: [
            { kind: 'checklist', items: [
              '🏥 Parte obrigatória: 6 semanas (42 dias) imediatamente após o parto — só a mãe pode gozar',
              '👶 Licença parental inicial: 120 dias pagos a 100% (após os 42 dias obrigatórios da mãe, o restante pode ser utilizado pela mãe ou pelo pai)',
              '🤝 Inicial partilhada: 150 dias (a outra taxa) ou 180 dias pagos a 90% se forem cumpridas as condições de partilha da licença entre os pais (Lei 13/2023)',
              '⏰ É possível iniciar a licença antes do parto com atestado médico (regra geral, cerca de 10 dias antes)',
              '👼 Em caso de gémeos: +30 dias',
              '👶 Em caso de trigémeos: +60 dias'
            ]}
          ]},
          { id: 'father', title: 'Pai — direitos e obrigações', content: [
            { kind: 'checklist', items: [
              '🛌 28 dias obrigatórios: 7 consecutivos imediatamente após o nascimento + 21 no prazo de 42 dias após o nascimento (seguidos ou interpolados)',
              '➕ +7 dias adicionais após os 28 obrigatórios, desde que coincidam com a licença parental inicial da mãe',
              '🤝 Parte partilhada (por acordo com a mãe): período mínimo obrigatório exclusivo do pai — obrigatório na partilhada de 150/180 dias',
              '⚖️ Os direitos estão protegidos — o despedimento por causa da licença é ilegal (Lei 7/2009 art. 36)',
              '🏥 Se a mãe não puder gozar a licença ou falecer — o pai recebe a parte da licença dela'
            ]}
          ]},
          { id: 'who-pays', title: 'Quem paga', content: [
            { kind: 'checklist', items: [
              '🛡️ Segurança Social (Subsídio Parental) — principal fonte dos pagamentos',
              '💼 A entidade empregadora NÃO paga durante a licença, mas mantém o posto de trabalho',
              '💸 Cálculo: remuneração de referência = soma das remunerações dos primeiros 6 dos últimos 8 meses / 180; depois aplica-se a taxa de 100%, 90%, 83%, 80%, etc. (depende do regime)',
              '⏰ O dinheiro chega mensalmente à conta bancária',
              '📑 O pedido de subsídio é apresentado pelo próprio trabalhador através da Segurança Social Direta; a entidade empregadora contabiliza separadamente a ausência e comunica os dados salariais'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apply',
      title: '📋 Como tratar do pedido',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Antes do parto', content: [
            { kind: 'checklist', items: [
              '📩 Se a mãe iniciar a licença antes do parto — informar a entidade empregadora com atestado médico, regra geral com 10 dias de antecedência (em casos urgentes — o mais cedo possível)',
              '📋 Apresentar o «requerimento de subsídio parental» na Segurança Social Direta',
              '📑 Anexar atestado médico com a data prevista do parto',
              '🤝 Se a licença for partilhada (partilhada): apresentar declaração conjunta com o pai'
            ]}
          ]},
          { id: 'a2', title: 'Após o parto', content: [
            { kind: 'checklist', items: [
              '📜 No prazo de 7 dias após o nascimento, comunicar à entidade empregadora as datas da licença; em caso de partilhada — declaração conjunta dos pais',
              '⏰ O pedido de subsídio na Segurança Social deve ser apresentado no prazo de 6 meses a contar do primeiro dia da licença/do evento; em caso de apresentação tardia, o subsídio pode ser reduzido',
              '📲 É possível alterar o calendário da licença através da Segurança Social Direta: por exemplo, prolongar ou encurtar a parte adicional',
              '💰 O pagamento chega após aprovação pela SS para o IBAN indicado; não há prazo garantido, depende do processamento do pedido'
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
          '🕐 2 horas de redução do dia de trabalho em caso de amamentação (1 hora de manhã + 1 hora depois do almoço OU 2 horas num único bloco)',
          '⏰ Até ao 1.º aniversário da criança — sem questões adicionais',
          '🍼 Após 1 ano — é necessário atestado médico do pediatra',
          '🚫 A entidade empregadora NÃO pode reduzir o salário por esse motivo',
          '📑 Pedido à entidade empregadora; após 1 ano em caso de amamentação, anexar atestado médico (normalmente não é necessária cópia para a Segurança Social — é um direito laboral, não um subsídio da SS)',
          '👶 Em caso de aleitação artificial: as mesmas 2 horas podem ser partilhadas pela mãe e pelo pai',
          '👯 Em caso de nascimento múltiplo: +30 minutos por cada criança além da primeira'
        ]}
      ]
    },
    {
      id: 'flexible-work',
      title: '⏰ Horário flexível e trabalho a tempo parcial até aos 12 anos da criança',
      content: [
        { kind: 'paragraph', text: 'O Código do Trabalho art. 55 regula o trabalho a tempo parcial, e o art. 56 — o horário flexível para trabalhador com filho até aos 12 anos; para criança com deficiência/doença crónica aplicam-se regras alargadas sem limite etário rígido.' },
        { kind: 'checklist', items: [
          '🕐 Meio tempo: metade do dia de trabalho + metade do salário',
          '🕐 3/4 do horário: 75% do trabalho e do salário',
          '⏰ Horário flexível: as mesmas horas, mas com possibilidade de deslocar o início/fim do dia',
          '✅ Se pretender recusar, a entidade empregadora deve cumprir um procedimento especial e enviar o processo à CITE para parecer prévio (este é o organismo-chave especificamente para estas recusas)',
          '📑 O pedido é apresentado com antecedência (nos termos do Código do Trabalho)',
          '👨‍🦱 Ambos os pais têm este direito',
          '⚖️ A ACT (inspeção do trabalho) — para queixas sobre violações da legislação laboral, mas não substitui a CITE'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: '🌟 Casos especiais',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 Adoção: os mesmos 120/150/180 dias nos regimes correspondentes',
          '🏥 Hospitalização da criança após o parto / parto antes das 33 semanas: aplicam-se regras especiais de aumento/suspensão da licença parental inicial; confirmar as datas junto da Segurança Social/entidade empregadora',
          '♿ Criança com necessidades especiais: direitos alargados/licenças adicionais mediante relatório médico (ver Código do Trabalho)',
          '👵 Avós: direitos especiais em casos concretos — por exemplo, até 30 dias consecutivos após o nascimento do neto, se o progenitor da criança tiver menos de 16 anos e o neto viver com avó/avô; não existe um direito universal a «14 dias se os pais não puderem» (ver Código do Trabalho art. 50)',
          '📑 Recibo Verde (trabalhador independente): podem ter direito a subsídio parental se cumprirem o prazo de garantia (normalmente 6 meses de remunerações registadas) e tiverem a situação contributiva regularizada; as garantias laborais da entidade empregadora não se aplicam',
          '🛂 Estrangeiros que trabalham em Portugal: os mesmos direitos laborais; o subsídio da SS depende do registo, das contribuições e do cumprimento do prazo de garantia. Se as contribuições forem insuficientes, podem existir prestações sociais sujeitas a condição de recursos'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '💰 Substituir por: «180 dias partilhada pode ser um regime vantajoso, mas confirme a taxa: 83% na variante shared normal ou 90% com partilha reforçada ao abrigo da Lei 13/2023. Compare o rendimento familiar total e a possibilidade de cada progenitor gozar o período exclusivo exigido»., mas compare o rendimento familiar total e a possibilidade de o pai gozar efetivamente a sua parte',
          '📅 Antes/depois do nascimento, escolha o regime de licença parental inicial: 120, 150 ou partilhada 150/180 dias; para 180 dias partilhada, acorde antecipadamente com as entidades empregadoras os períodos da mãe e do pai',
          '🩺 Cálculo do subsídio: remuneração de referência = remuneração dos 6 dos 8 meses anteriores / 180. Se entrar em licença pouco depois de um aumento, o novo salário pode não entrar totalmente na base de cálculo',
          '🛡️ A licença parental não interrompe o tempo de residência legal, se a autorização de residência continuar válida/prorrogada. Para a nacionalidade, verifique a redação atual da Lei da Nacionalidade: a Lei Orgânica 1/2026, de 18 de maio (que altera a Lei 37/81), já está em vigor desde 19.05.2026 e, para novos pedidos, exige 7 anos de residência (nacionais CPLP/UE) ou 10 anos (restantes); a regra dos 5 anos só se mantém para procedimentos já pendentes antes de 19.05.2026 (Art. 7.º n.º 2)',
          '⚖️ Proteção contra despedimento: o despedimento de trabalhadora grávida, puérpera, lactante ou de trabalhador em parental leave exige procedimento especial e parecer prévio da CITE; não existe imunidade universal durante 12 meses após o regresso',
          '👶 No SNS, o acompanhamento da gravidez, o parto, a vacinação e os cuidados pediátricos são normalmente gratuitos/isentos de taxas moderadoras; para estrangeiros — tratar antecipadamente do número de utente',
          '📑 Guarde todos os atestados e pedidos — podem ser necessários na licença seguinte ou numa inspeção fiscal'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Subsídio Parental — pago pela Segurança Social', amountEUR: 0, note: 'não sai do bolso' },
    { label: 'Apresentação do pedido', amountEUR: 0 },
    { label: 'Tradução de documentos (se necessário)', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'Lei 13/2023 — Alteração ao Código do Trabalho', url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2023-208854851', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Subsídio Parental', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 7/2009 — Código do Trabalho', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CITE — Comissão para a Igualdade no Trabalho', url: 'https://cite.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei Orgânica 1/2026, de 18 de maio — alteração à Lei 37/81 (Lei da Nacionalidade)', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2026-1123539996', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
