export default {
  editorialVoice: 'hackportugal',
  id: 'trabalhador-noturno-direitos',
  categoryId: 'work_business',
  title: 'Trabalho noturno em Portugal — direitos do trabalhador e suplemento de 25%',
  tldr: 'Segundo o Código do Trabalho, o período noturno por defeito é 22:00–07:00. Se você trabalha regularmente pelo menos 3 horas durante esse período, é trabalhador noturno: as horas noturnas são pagas com um acréscimo de 25%, há limites de tempo e exames médicos gratuitos obrigatórios. Em 2026, com SMN de 920 €, a hora vale cerca de 5,31 €, e o suplemento noturno é +1,33 €/hora. Podem existir exceções para regimes/CCT em que o caráter noturno já está incluído na remuneração: parte do sector público, hospitais, transportes, turismo.',
  tags: ['trabalho', 'noturno', 'salário', 'act'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts-as-night',
      title: 'O que conta como trabalho noturno 🌙',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o período noturno é definido pelo Código do Trabalho. Se o contrato coletivo de trabalho, CCT, não tiver estabelecido outro período, aplica-se a regra padrão: das 22:00 às 07:00.' },
        { kind: 'paragraph', text: 'O CCT pode alterar o período noturno, mas este deve durar entre 7 e 11 horas e incluir obrigatoriamente o intervalo entre as 00:00 e as 05:00. Por isso, verifique primeiro o seu contrato de trabalho e o CCT aplicável: hotelaria, segurança privada, saúde, transportes, call centers têm frequentemente regras próprias.' },
        { kind: 'checklist', items: [
          'Turno noturno 22:00–06:00 — quase todo conta como noturno.',
          'Turno 18:00–02:00 — as horas noturnas são normalmente 22:00–02:00.',
          'Turno 05:00–13:00 — as horas noturnas são normalmente 05:00–07:00.',
          'Se o CCT tiver definido, por exemplo, 23:00–06:00, o suplemento é calculado com base nesse período.',
          'As pausas que não são pagas como tempo de trabalho normalmente não dão direito ao suplemento noturno.',
          'O suplemento é calculado sobre as horas noturnas efetivamente trabalhadas, e não apenas pelo nome do turno.'
        ] }
      ]
    },
    {
      id: 'who-is-night-worker',
      title: 'Quem é considerado trabalhador noturno',
      content: [
        { kind: 'paragraph', text: 'Um turno isolado até à meia-noite nem sempre faz de você trabalhador noturno. A lei prevê um estatuto específico de trabalhador noturno, porque se aplicam exames médicos e limites à duração do trabalho.' },
        { kind: 'checklist', items: [
          'Você é trabalhador noturno se trabalha habitualmente pelo menos 3 horas do seu período normal diário de trabalho no período noturno.',
          'Também pode ser considerado trabalhador noturno se, anualmente, prestar de noite um número de horas equivalente a 3 horas por dia de trabalho, de acordo com as regras da lei ou do CCT.',
          'O estatuto é importante para a proteção da saúde, horários e limites, mas o suplemento de 25% aplica-se às horas noturnas enquanto tais.',
          'O empregador é obrigado a manter registo de tempos de trabalho: início, fim, pausas, horas suplementares.',
          'Guarde escalas, mensagens WhatsApp/Teams, picagens, recibos de vencimento — são provas caso o suplemento não seja pago.',
          'Se o horário for “rotativo”, só contam como noturnas as horas dentro do período noturno.'
        ] }
      ]
    },
    {
      id: 'pay-increment',
      title: 'Suplemento de 25%: como calcular o dinheiro',
      content: [
        { kind: 'paragraph', text: 'A regra base do Código do Trabalho: o trabalho noturno é pago com um acréscimo de 25% relativamente a trabalho diurno equivalente. O suplemento deve estar visível no recibo de vencimento ou estar claramente incluído no sistema de remuneração acordado, se tal estiver legalmente previsto.' },
        { kind: 'paragraph', text: 'Fórmula para salário mensal com 40 h/semana: hourly rate = salário mensal / (40 × 52 / 12). Com o SMN 2026 de 920 €, isto dá cerca de 5,31 €/hora. O suplemento noturno de 25% é cerca de 1,33 € por cada hora noturna. Total da hora noturna: cerca de 6,64 € antes de impostos e Segurança Social.' },
        { kind: 'checklist', items: [
          'Exemplo: 8 horas noturnas com SMN de 920 € dão cerca de 10,62 € de suplemento noturno por turno.',
          '10 turnos noturnos de 8 horas — cerca de 106,15 € brutos de suplemento por mês.',
          'Se parte do turno for diurna e parte noturna, os +25% incidem apenas sobre as horas noturnas.',
          'Se o trabalho noturno for também trabalho suplementar, aplicam-se as regras do trabalho noturno e do trabalho suplementar; o cálculo depende da estrutura de remuneração e do CCT.',
          'O suplemento está sujeito a IRS e Segurança Social como salário.',
          'O empregador não pode “compensar” o suplemento com gorjetas, ajudas de custo ou pagamentos não declarados.'
        ] },
        { kind: 'warning', text: 'Se no recibo de vencimento não houver uma linha do tipo “trabalho nocturno/noturno” ou um supplemento fixo compreensível, peça uma explicação escrita do cálculo. A frase oral “isso já está incluído” é insuficiente se o contrato/CCT/tabela salarial não o confirmar.' }
      ]
    },
    {
      id: 'limits-and-health',
      title: 'Limites de horas e exames médicos',
      content: [
        { kind: 'paragraph', text: 'O trabalho noturno é considerado mais arriscado para a saúde, por isso a lei exige controlo dos horários e vigilância médica. Isto é uma obrigação do empregador, e não um “benefício” a pedido do trabalhador.' },
        { kind: 'checklist', items: [
          'A regra normal pelo Código do Trabalho é até 8 horas por dia e 40 horas por semana, salvo regime admissível de adaptabilidade/banco de horas/CCT.',
          'Para o trabalhador noturno em regimes com média, o período normal diário não deve exceder 8 horas em média durante o período estabelecido.',
          'Se o trabalho envolver riscos especiais, forte tensão física ou psíquica, não se pode trabalhar mais de 8 horas em qualquer período de 24 horas em que seja prestado trabalho noturno.',
          'O empregador deve assegurar uma avaliação de saúde gratuita e confidencial antes da afetação a trabalho noturno.',
          'Depois de iniciado o trabalho noturno, os exames médicos devem ser realizados regularmente e, no mínimo, anualmente.',
          'Se o médico relacionar problemas de saúde com o trabalho noturno, o empregador deve, quando possível, transferir o trabalhador para trabalho diurno adequado.',
          'Trabalhadoras grávidas, puérperas e lactantes têm regras de proteção próprias; o trabalho noturno pode ser proibido ou limitado por parecer médico.',
          'O trabalho noturno de menores é, em regra geral, proibido ou fortemente limitado.'
        ] }
      ]
    },
    {
      id: 'exceptions',
      title: 'Quando os 25% podem não ser pagos',
      content: [
        { kind: 'paragraph', text: 'Existem exceções, mas isso não significa que qualquer empregador possa eliminar os 25% com uma linha no contrato. É necessário analisar o Código do Trabalho, o CCT, o estatuto da carreira e a forma concreta como o salário está estruturado.' },
        { kind: 'checklist', items: [
          'O CCT pode substituir os 25% por uma redução equivalente do tempo de trabalho ou por um suplemento fixo.',
          'O suplemento pode não ser pago separadamente se o salário tiver sido legalmente fixado já tendo em conta o caráter noturno do trabalho.',
          'Para atividades que são exclusiva ou predominantemente exercidas de noite, as regras de remuneração podem ser diferentes.',
          'Para atividades que, pela sua natureza ou por lei, têm de funcionar de noite para o público, aplicam-se frequentemente regimes especiais: hospitais, farmácias, hotelaria, restauração, segurança, transportes.',
          'Na Administração Pública e para civil servants aplicam-se regras especiais da LGTFP/carreiras/tabelas, e nem sempre o esquema padrão privado do Código do Trabalho.',
          'Nos medical e transport sectors é quase sempre necessário verificar o CCT ou o estatuto público: podem existir suplementos por turnos, noturnos e de disponibilidade em vez de uma simples linha de +25%.',
          'Se está a recibos verdes, não é “trabalhador” ao abrigo de contrato de trabalho; mas, em caso de falso recibo verde, pode exigir o reconhecimento da relação laboral.'
        ] },
        { kind: 'warning', text: 'A frase no contrato “horário por turnos” por si só não elimina o suplemento noturno. A exceção deve decorrer da lei, do CCT ou de uma estrutura salarial transparente.' }
      ]
    },
    {
      id: 'how-to-claim',
      title: 'Como exigir o pagamento se o empregador se esquivar',
      content: [
        { kind: 'paragraph', text: 'Comece por escrito e com calma. Em Portugal, é importante criar um histórico comprovável: o que perguntou, que horas indicou, como o empregador respondeu ou se ficou em silêncio.' },
        { kind: 'checklist', items: [
          'Reúna contrato de trabalho, CCT se conhecido, recibos de vencimento, escalas, picagens, emails, WhatsApp, registos de entrada/saída.',
          'Faça uma tabela: data, início do turno, fim do turno, horas noturnas, taxa, suplemento esperado de 25%.',
          'Envie ao empregador um email ou carta registada: peça a rectificação dos recibos e o pagamento do trabalho noturno para os meses concretos.',
          'Peça que seja indicada a base legal caso o empregador considere que o suplemento já está incluído ou que não é devido.',
          'Se não houver resposta, apresente denúncia à ACT — Autoridade para as Condições do Trabalho. A queixa pode ser apresentada online ou num serviço local da ACT.',
          'A ACT pode realizar uma inspeção e aplicar coima, mas normalmente não “cobra o dinheiro” por si diretamente.',
          'Para cobrar os montantes, pode ser necessário recorrer ao Tribunal do Trabalho, a advogado ou a sindicato.',
          'Os créditos salariais decorrentes de contrato de trabalho normalmente podem ser reclamados até 1 ano após a cessação do contrato; não espere pelo despedimento se os valores aumentam todos os meses.'
        ] },
        { kind: 'warning', text: 'Não aceite pagamento por fora. Os suplementos noturnos devem passar pelo payroll: isso afeta o IRS, a Segurança Social, baixas médicas, subsídios e a futura pensão.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação de queixa à ACT', amountEUR: 0, note: 'A denúncia à ACT é gratuita; a inspeção não garante a cobrança automática da dívida.' },
    { label: 'Estimativa do suplemento noturno com SMN 2026', amountEUR: 1.33, note: 'Aproximadamente +1,33 € brutos por cada hora noturna com salário de 920 € e 40 h/semana.' },
    { label: 'Advogado para litígio laboral', amountEURMin: 60, amountEURMax: 150, note: 'Consulta inicial típica; o preço depende da cidade, do idioma e da complexidade do caso.' }
  ],
  sources: [
    {
      title: 'Código do Trabalho — Lei n.º 7/2009, artigos sobre trabalho noturno',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT — informação sobre trabalho noturno e direitos do trabalhador',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT — pedidos de intervenção inspetiva e denúncias laborais',
      url: 'https://www.act.gov.pt/(pt-PT)/Itens/QueixasDenuncias/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
