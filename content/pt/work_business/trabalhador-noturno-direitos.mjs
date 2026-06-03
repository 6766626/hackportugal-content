export default {
  editorialVoice: 'hackportugal',
  id: 'trabalhador-noturno-direitos',
  categoryId: 'work_business',
  title: 'Trabalho noturno em Portugal — direitos do trabalhador e acréscimo de 25%',
  tldr: 'Segundo o Código do Trabalho, o período noturno por defeito é 22:00–07:00. Se trabalha regularmente pelo menos 3 horas nesse período, é trabalhador noturno: as horas noturnas são pagas com um acréscimo de 25%, existem limites de tempo e exames médicos gratuitos obrigatórios. Em 2026, com o SMN de 920 €, a hora vale cerca de 5,31 €, e o acréscimo noturno é de +1,33 €/hora. Podem existir exceções para regimes/CCT em que o caráter noturno já esteja incluído na remuneração: parte do setor público, hospitais, transportes, turismo.',
  tags: ['trabalho', 'noturna', 'salário', 'act'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts-as-night',
      title: 'O que conta como trabalho noturno 🌙',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o período noturno é definido pelo Código do Trabalho. Se um contrato coletivo de trabalho, CCT, não tiver fixado outro período, aplica-se o padrão: das 22:00 às 07:00.' },
        { kind: 'paragraph', text: 'O CCT pode alterar o período noturno, mas este deve durar entre 7 e 11 horas e incluir obrigatoriamente o intervalo entre as 00:00 e as 05:00. Por isso, verifique primeiro o seu contrato de trabalho e o CCT aplicável: hotelaria, segurança privada, saúde, transportes e call centers têm frequentemente regras próprias.' },
        { kind: 'checklist', items: [
          'Um turno noturno 22:00–06:00 conta quase todo como trabalho noturno.',
          'Num turno 18:00–02:00, as horas noturnas são normalmente 22:00–02:00.',
          'Num turno 05:00–13:00, as horas noturnas são normalmente 05:00–07:00.',
          'Se o CCT tiver fixado, por exemplo, 23:00–06:00, o acréscimo é calculado segundo esse período.',
          'As pausas que não são pagas como tempo de trabalho normalmente não dão direito ao acréscimo noturno.',
          'O acréscimo é calculado sobre as horas noturnas efetivamente trabalhadas, e não apenas pelo nome do turno.'
        ] }
      ]
    },
    {
      id: 'who-is-night-worker',
      title: 'Quem é considerado trabalhador noturno',
      content: [
        { kind: 'paragraph', text: 'Um turno pontual até à meia-noite nem sempre faz de si trabalhador noturno. A lei distingue um estatuto específico de trabalhador noturno, porque se aplicam exames médicos e limites à duração do trabalho.' },
        { kind: 'checklist', items: [
          'É trabalhador noturno se trabalha habitualmente pelo menos 3 horas do seu tempo diário de trabalho no período noturno.',
          'Também pode ser considerado trabalhador noturno se, anualmente, fizer de noite um número de horas equivalente a 3 horas por dia de trabalho, segundo as regras da lei ou do CCT.',
          'O estatuto é importante para a proteção da saúde, horários e limites, mas o acréscimo de 25% aplica-se às horas noturnas enquanto tais.',
          'O empregador é obrigado a manter um registo de tempos de trabalho: início, fim, pausas, horas extraordinárias.',
          'Guarde escalas, mensagens WhatsApp/Teams, picagens, recibos de vencimento — são provas se o acréscimo não for pago.',
          'Se o horário for “rotativo”, só contam como noturnas as horas dentro do período noturno.'
        ] }
      ]
    },
    {
      id: 'pay-increment',
      title: 'Acréscimo de 25%: como calcular o dinheiro',
      content: [
        { kind: 'paragraph', text: 'A regra base do Código do Trabalho: o trabalho noturno é pago com um acréscimo de 25% em relação ao pagamento de trabalho diurno equivalente. O acréscimo deve ser visível no recibo de vencimento ou estar claramente incluído no sistema de remuneração acordado, se isso estiver legalmente previsto.' },
        { kind: 'paragraph', text: 'Fórmula para salário mensal com 40 h/semana: valor hora = salário mensal / (40 × 52 / 12). Com o SMN 2026 de 920 €, isto dá cerca de 5,31 €/hora. O acréscimo noturno de 25% é cerca de 1,33 € por cada hora noturna. Total por hora noturna: cerca de 6,64 € antes de impostos e Segurança Social.' },
        { kind: 'checklist', items: [
          'Exemplo: 8 horas noturnas com SMN de 920 € dão cerca de 10,62 € de acréscimo noturno por turno.',
          '10 turnos noturnos de 8 horas — cerca de 106,15 € brutos de acréscimo por mês.',
          'Se parte do turno for diurna e parte noturna, os +25% incidem apenas sobre as horas noturnas.',
          'Se o trabalho noturno for também trabalho suplementar, aplicam-se as regras do trabalho noturno e do trabalho suplementar; o cálculo depende da estrutura remuneratória e do CCT.',
          'O acréscimo está sujeito a IRS e Segurança Social como salário.',
          'O empregador não pode “compensar” o acréscimo com gorjetas, ajudas de custo ou pagamentos não registados.'
        ] },
        { kind: 'warning', text: 'Se no recibo de vencimento não houver uma linha do tipo “trabalho nocturno/noturno” ou um suplemento fixo compreensível, peça uma explicação escrita do cálculo. A frase oral “isso já está incluído” não é suficiente se o contrato/CCT/tabela remuneratória não o confirmar.' }
      ]
    },
    {
      id: 'limits-and-health',
      title: 'Limites de horas e exames médicos',
      content: [
        { kind: 'paragraph', text: 'O trabalho noturno é considerado mais arriscado para a saúde, por isso a lei exige controlo dos horários e vigilância médica. Isto é uma obrigação do empregador, não um “benefício” a pedido do trabalhador.' },
        { kind: 'checklist', items: [
          'A regra normal do Código do Trabalho é até 8 horas por dia e 40 horas por semana, se não existir um regime admissível de adaptabilidade/banco de horas/CCT.',
          'Para o trabalhador noturno, em regimes com média de tempos, o período diário normal não deve exceder 8 horas em média no período definido.',
          'Se o trabalho envolver riscos especiais, forte esforço físico ou mental, não se pode trabalhar mais de 8 horas em qualquer período de 24 horas em que seja prestado trabalho noturno.',
          'O empregador deve assegurar uma avaliação de saúde gratuita e confidencial antes da colocação em trabalho noturno.',
          'Depois do início do trabalho noturno, os exames médicos devem realizar-se regularmente e, no mínimo, anualmente.',
          'Se o médico relacionar problemas de saúde com o trabalho noturno, o empregador deve, quando possível, transferir o trabalhador para trabalho diurno adequado.',
          'Trabalhadoras grávidas, puérperas e lactantes têm regras de proteção próprias; o trabalho noturno pode ser proibido ou limitado por parecer médico.',
          'Para menores, o trabalho noturno é, em regra, proibido ou fortemente limitado.'
        ] }
      ]
    },
    {
      id: 'exceptions',
      title: 'Quando os 25% podem não ser pagos',
      content: [
        { kind: 'paragraph', text: 'Existem exceções, mas isso não significa que qualquer empregador possa retirar os 25% com uma linha no contrato. É preciso verificar o Código do Trabalho, o CCT, o estatuto da carreira e a forma concreta como o salário foi estruturado.' },
        { kind: 'checklist', items: [
          'O CCT pode substituir os 25% por uma redução equivalente do tempo de trabalho ou por um acréscimo fixo.',
          'O acréscimo pode não ser pago separadamente se o salário tiver sido legalmente fixado já tendo em conta o caráter noturno do trabalho.',
          'Para atividades exercidas exclusiva ou predominantemente à noite, as regras de pagamento podem ser diferentes.',
          'Para atividades que, pela sua natureza ou por lei, têm de funcionar à noite para o público, aplicam-se frequentemente regimes especiais: hospitais, farmácias, hotelaria, restauração, segurança, transportes.',
          'Na Administração Pública e para civil servants aplicam-se regras especiais da LGTFP/carreiras/tabelas, e nem sempre o regime privado padrão do Código do Trabalho.',
          'Nos setores medical e transport sectors, é quase sempre necessário verificar o CCT ou o estatuto público: podem existir suplementos de turno, noturnos e de prevenção em vez de uma simples linha +25%.',
          'Se está a recibos verdes, não é “trabalhador” ao abrigo de um contrato de trabalho; mas, em caso de falso recibo verde, pode pedir o reconhecimento da relação laboral.'
        ] },
        { kind: 'warning', text: 'A expressão “horário por turnos” no contrato, por si só, não elimina o acréscimo noturno. A exceção deve resultar da lei, do CCT ou de uma estrutura salarial transparente.' }
      ]
    },
    {
      id: 'how-to-claim',
      title: 'Como exigir o pagamento se o empregador se esquivar',
      content: [
        { kind: 'paragraph', text: 'Comece por escrito e com calma. Em Portugal é importante criar um histórico comprovável: o que perguntou, que horas indicou e como o empregador respondeu ou ficou em silêncio.' },
        { kind: 'checklist', items: [
          'Reúna o contrato de trabalho, o CCT se for conhecido, recibos de vencimento, escalas, picagens, emails, WhatsApp, registos de entrada/saída.',
          'Faça uma tabela: data, início do turno, fim do turno, horas noturnas, valor hora, acréscimo esperado de 25%.',
          'Envie um email ou carta registada ao empregador: peça a retificação dos recibos e o pagamento do trabalho noturno para os meses concretos.',
          'Peça que indiquem a base legal se o empregador considerar que o acréscimo já está incluído ou não é devido.',
          'Se não houver resposta, apresente uma denúncia na ACT — Autoridade para as Condições do Trabalho. A queixa pode ser apresentada online ou num serviço local da ACT.',
          'A ACT pode realizar uma inspeção e aplicar uma coima, mas normalmente não “cobra o dinheiro” diretamente por si.',
          'Para recuperar os valores pode ser necessário recorrer ao Tribunal do Trabalho, a um advogado ou a um sindicato.',
          'Os créditos salariais decorrentes do contrato de trabalho normalmente podem ser reclamados até 1 ano após a cessação do contrato; não espere pelo despedimento se os montantes aumentam todos os meses.'
        ] },
        { kind: 'warning', text: 'Não aceite pagamento por fora. Os acréscimos noturnos devem passar pelo payroll: isso afeta o IRS, a Segurança Social, baixas médicas, subsídios e a futura pensão.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação de queixa na ACT', amountEUR: 0, note: 'A denúncia na ACT é gratuita; a inspeção não garante a cobrança automática da dívida.' },
    { label: 'Estimativa do acréscimo noturno com SMN 2026', amountEUR: 1.33, note: 'Cerca de +1,33 € brutos por cada hora noturna com salário de 920 € e 40 h/semana.' },
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
