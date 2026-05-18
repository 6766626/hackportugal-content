export default {
  editorialVoice: 'hackportugal',
  id: 'cpap-medicina-sono',
  categoryId: 'healthcare',
  title: 'Apneia do sono e CPAP através do SNS: do médico de família à polissonografia',
  tldr: 'Perante suspeita de apneia obstrutiva do sono, o percurso no SNS é normalmente: médico de família → referenciação para pneumologia/consulta do sono → polissonografia ou estudo cardiorrespiratório do sono → prescrição de CPAP como Cuidados Respiratórios Domiciliários. Segundo a Norma DGS 031/2011, atualizada em 13.07.2015, o CPAP é prescrito por um médico e fornecido através de um prestador convencionado; o paciente, em regra, não compra o equipamento por conta própria. Em 2026, consultas e exames prescritos no SNS estão, na maioria dos casos, isentos de taxa moderadora.',
  tags: ['sns', 'cpap', 'sono', 'apneia'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-suspect',
      title: 'Quando ir ao médico 😴',
      content: [
        { kind: 'paragraph', text: 'A apneia do sono consiste em paragens repetidas ou reduções acentuadas da respiração durante o sono.\n\nEm Portugal, o diagnóstico e a prescrição de CPAP no SNS são normalmente feitos por pneumologia, neurologia ou por uma consulta do sono especializada, mas o ponto de entrada para a maioria dos residentes é o médico de família no Centro de Saúde.' },
        { kind: 'checklist', items: [
          'Ressonar alto quase todas as noites',
          'Pausas respiratórias durante o sono observadas pelo parceiro',
          'Dores de cabeça de manhã, boca seca',
          'Sonolência ao volante ou no trabalho',
          'Despertares com sensação de sufoco',
          'Tensão arterial elevada, especialmente se mal controlada',
          'Obesidade, perímetro do pescoço aumentado, aumento de peso',
          'Suores noturnos, micção frequente durante a noite',
          'Diminuição da concentração, irritabilidade, sintomas depressivos'
        ] },
        { kind: 'warning', text: 'Se adormece ao volante, teve acidentes/quase acidentes devido a sonolência ou tem sonolência diurna intensa, não espere por uma vaga programada: peça uma avaliação urgente ao médico de família ou ligue para o SNS 24 — 808 24 24 24.' }
      ]
    },
    {
      id: 'gp-referral',
      title: 'Passo 1: médico de família e referenciação',
      content: [
        { kind: 'paragraph', text: 'Marque consulta no Centro de Saúde através do Balcão SNS 24, da aplicação SNS 24, pelo telefone 808 24 24 24 ou diretamente na sua unidade de saúde. Na consulta, o objetivo não é “obter um CPAP”, mas sim conseguir referenciação para diagnóstico do sono.' },
        { kind: 'checklist', items: [
          'Leve o Cartão de Utente / número de utente',
          'Passaporte ou autorização de residência, se o cartão do SNS ainda não tiver sido pedido neste Centro de Saúde',
          'Lista de medicamentos, especialmente para a tensão arterial, ansiedade ou insónia',
          'Medições da tensão arterial em casa durante 1–2 semanas, se tiver hipertensão',
          'Descrição breve dos sintomas: ressonar, pausas respiratórias, sonolência, despertares',
          'Vídeo/áudio do ressonar e das pausas respiratórias, se o parceiro puder gravar',
          'Informação sobre acidentes, adormecer ao volante, trabalho por turnos',
          'Altura, peso, alterações recentes de peso'
        ] },
        { kind: 'paragraph', text: 'O médico pode preencher a escala de sonolência de Epworth, avaliar riscos cardiovasculares e emitir referenciação hospitalar para pneumologia/consulta do sono. Em algumas regiões, o médico de família pode pedir diretamente um exame do sono segundo protocolo local, mas, mais frequentemente, é necessário um especialista.' }
      ]
    },
    {
      id: 'sleep-study',
      title: 'Passo 2: polissonografia ou estudo do sono em casa',
      content: [
        { kind: 'paragraph', text: 'O diagnóstico não é feito com base no ressonar, mas sim através de um estudo do sono. No SNS, poderá ser encaminhado para polissonografia num laboratório do sono ou para estudo cardiorrespiratório do sono, muitas vezes domiciliário. O formato depende dos sintomas, doenças associadas e disponibilidade na região.' },
        { kind: 'checklist', items: [
          'Polissonografia completa: sono em laboratório, sensores de respiração, oxigénio, ECG, movimentos e fases do sono',
          'Estudo cardiorrespiratório domiciliário: o equipamento é entregue para usar em casa durante a noite, normalmente mais simples e mais rápido',
          'AHI/IAH 5–14,9: apneia ligeira',
          'AHI/IAH 15–29,9: apneia moderada',
          'AHI/IAH ≥30: apneia grave',
          'Não são importantes apenas os valores de AHI: consideram-se também a saturação, sonolência, tensão arterial, arritmias e profissão de motorista',
          'Se a noite foi atípica ou os sensores se soltaram, o estudo pode ser repetido'
        ] },
        { kind: 'warning', text: 'Não compre um CPAP “por conselho de conhecidos” antes do diagnóstico. São necessários o modo correto, a pressão, a máscara e o acompanhamento posterior. Configurações inadequadas reduzem a tolerância e podem mascarar outras perturbações do sono.' }
      ]
    },
    {
      id: 'cpap-prescription',
      title: 'Passo 3: prescrição de CPAP como Cuidados Respiratórios Domiciliários',
      content: [
        { kind: 'paragraph', text: 'Se o médico confirmar a indicação, o CPAP é prescrito como ventiloterapia no âmbito dos Cuidados Respiratórios Domiciliários. A página atual da DGS sobre este tema é a Norma DGS 031/2011, atualizada em 13.07.2015; no uso comum, por vezes é incorretamente chamada “030/2011”.' },
        { kind: 'paragraph', text: 'Pelo SNS, o paciente normalmente não compra o equipamento: o médico emite a prescrição e o prestador convencionado entrega o CPAP/APAP, a máscara, o tubo e os consumíveis. O modelo e o prestador dependem do contrato e da região, não da vontade do paciente de escolher uma marca.' },
        { kind: 'checklist', items: [
          'Confirme com o médico: CPAP, APAP ou outro modo',
          'Peça que lhe expliquem a pressão-alvo ou o intervalo de pressão',
          'Verifique o tipo de máscara: nasal, almofadas nasais, oronasal',
          'Pergunte quem é o prestador e como o contactar em caso de problemas',
          'Anote a data de início da terapêutica e a data da consulta de controlo',
          'Confirme as regras de substituição da máscara, filtros e tubo',
          'Pergunte como são transmitidos os dados: cartão de memória, modem, relatório do prestador',
          'Se se ausentar de Portugal por muito tempo, combine antecipadamente a manutenção e os consumíveis'
        ] },
        { kind: 'warning', text: 'O equipamento recebido através do SNS é normalmente parte de um serviço pago, e não sua propriedade. Não o venda, não o entregue a outra pessoa e não altere as definições sem o médico ou o prestador.' }
      ]
    },
    {
      id: 'adaptation',
      title: 'Primeiros 30–90 dias: como não abandonar a terapêutica',
      content: [
        { kind: 'paragraph', text: 'O CPAP só ajuda se for utilizado regularmente. As primeiras semanas são muitas vezes as mais difíceis: secura, fugas de ar, pressão na cana do nariz, sensação de “não consigo expirar”. Isto é motivo para ajustar a máscara e o modo, não para abandonar o tratamento.' },
        { kind: 'checklist', items: [
          'Coloque a máscara durante o dia por 15–20 minutos para se habituar',
          'Verifique o tamanho da máscara: as fugas são frequentemente causadas por tamanho incorreto',
          'Em caso de secura, peça um humidificador ou ajuste da humidificação',
          'Em caso de nariz entupido, discuta o tratamento da rinite com o médico',
          'Não aperte demasiado as correias: isso aumenta as fugas e a fricção',
          'Se a pressão parecer demasiado alta, pergunte sobre ramp ou APAP',
          'Guarde os relatórios de utilização: horas, AHI em terapêutica, fugas',
          'Em caso de perda de peso, cirurgia ORL, gravidez ou agravamento dos sintomas, é necessária reavaliação'
        ] },
        { kind: 'paragraph', text: 'Normalmente é necessário controlo após algumas semanas ou meses: o médico avalia os sintomas, as horas de utilização, o AHI residual e as fugas. Se o CPAP não for tolerado, discutem-se a troca de máscara, pressão, modo, terapêutica posicional, perda de peso, dispositivo dentário ou avaliação ORL.' }
      ]
    },
    {
      id: 'private-and-urgent',
      title: 'Se a lista de espera for longa: opção privada e o que acontece depois',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, no Porto e em hospitais grandes, a espera por uma consulta do sono pode ser longa. Um pneumologista privado e uma polissonografia privada aceleram o diagnóstico, mas, para CPAP comparticipado através do SNS, continua a ser necessária uma prescrição reconhecida no sistema SNS/CRD.' },
        { kind: 'checklist', items: [
          'Pode fazer um sleep study privado e levar o resultado ao médico de família ou ao hospital SNS',
          'Verifique se o relatório inclui AHI/IAH, saturação, tipo de eventos e recomendação',
          'Pergunte ao médico privado se pode emitir prescrição CRD, caso trabalhe com o SNS/convenções',
          'Se comprar o equipamento em privado, guarde a invoice e a prescrição médica',
          'Não cancele a lista de espera no SNS até a questão da manutenção a longo prazo estar resolvida',
          'Para motoristas, pilotos e profissões de risco, peça um parecer escrito sobre aptidão e controlo da sonolência'
        ] },
        { kind: 'warning', text: 'O SNS 24 não prescreve CPAP nem interpreta estudos do sono. O seu papel é a navegação: triagem, aconselhamento, marcação ou encaminhamento para o serviço adequado em caso de agravamento do estado.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta no SNS por referenciação', amountEUR: 0, note: 'Em 2026, a maioria das consultas e exames prescritos no SNS está isenta de taxa moderadora.' },
    { label: 'Polissonografia / estudo do sono no SNS', amountEUR: 0, note: 'Se prescrito por médico do SNS e realizado pelo percurso do SNS; os prazos dependem da região.' },
    { label: 'Estudo do sono privado', amountEURMin: 150, amountEURMax: 450, note: 'Valor indicativo de mercado; o preço depende do laboratório, do formato e do seguro.' },
    { label: 'Compra privada de CPAP/APAP', amountEURMin: 500, amountEURMax: 1200, note: 'Não é necessária se o CPAP for tratado através do SNS como CRD; a compra privada não substitui a prescrição médica.' }
  ],
  sources: [
    {
      title: 'DGS: Norma n.º 031/2011, Cuidados Respiratórios Domiciliários, atualizada em 13.07.2015',
      url: 'https://www.dgs.pt/em-destaque/norma-da-dgs-n0312011-de-30092011-actualizada-a-13072015.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: portal e linha SNS 24 para acesso a serviços de saúde',
      url: 'https://www.sns24.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
