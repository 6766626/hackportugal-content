export default {
  editorialVoice: 'hackportugal',
  id: 'trabalho-tempo-parcial-ria',
  categoryId: 'work_business',
  title: 'Trabalho a tempo parcial, contrato a termo certo e trabalho intermitente',
  tldr: 'Em Portugal, part-time não significa “sem direitos”: salário, férias, subsídio de Natal/férias e Segurança Social são calculados proporcionalmente, mas as férias mantêm-se normalmente em 22 dias úteis. O contrato a termo certo em 2026 só é admissível perante uma necessidade temporária do empregador nos termos do art. 140 Código do Trabalho; depois da Lei 13/2023, já não pode ser usado para encobrir “primeiro emprego” ou desemprego de longa duração. O limite geral do fixed-term é até 2 anos, não 18 meses universais. O RTI é um regime raro de “chamam quando é preciso”: mínimo de 5 meses de trabalho/ano e compensação por inactividade normalmente de 20%.',
  tags: ['trabalho', 'tempo parcial', 'contrato', 'rti', 'act'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'part-time-basics',
      title: 'Tempo parcial: o que se mantém a meio tempo',
      content: [
        { kind: 'paragraph', text: 'Trabalho a tempo parcial é trabalho com um período normal inferior ao de um trabalhador full-time comparável: menos horas por semana, menos dias por mês ou apenas uma parte do ano. Em 2026, a semana full-time padrão no sector privado é normalmente até 40 horas, mas uma convenção colectiva pode prever menos.' },
        { kind: 'checklist', items: [
          'O contrato deve ser escrito e indicar as horas/dias de trabalho e a comparação com o horário full-time.',
          'Se a forma escrita não for observada, o contrato considera-se celebrado a tempo completo (art. 153 Código do Trabalho). A mesma consequência aplica-se se o contrato não indicar o período normal de trabalho e a comparação com o full-time.',
          'O salário é calculado proporcionalmente: com 20 h/sem em vez de 40 h/sem — no mínimo 50% do salário full-time aplicável.',
          'O SMN 2026 é 920 € por mês para full-time; para 50% de ocupação, a referência é não abaixo de 460 € brutos, se não houver CCT mais favorável.',
          'Férias: o direito a férias não é automaticamente “cortado” para 11 dias; normalmente mantêm-se 22 dias úteis, mas a remuneração de férias corresponde ao seu salário part-time.',
          'O subsídio de férias e o subsídio de Natal são pagos com base no seu salário efectivo/antiguidade no ano.',
          'A Segurança Social é descontada como habitualmente: 11% pelo trabalhador e 23,75% pelo empregador para um contrato de trabalho padrão.',
          'Recibos verdes não são um contrato de trabalho part-time: aí não há subsídios de férias automáticos, baixas como trabalhador por conta de outrem nem protecção contra despedimento.'
        ] },
        { kind: 'warning', text: 'O subsídio de alimentação não é uma obrigação universal do Código do Trabalho. Se for devido por contrato/CCT/política da empresa, para part-time aplica-se frequentemente a regra: valor integral quando o dia de trabalho tem 5+ horas, proporcional quando o dia é mais curto.' }
      ]
    },
    {
      id: 'termo-certo',
      title: 'Contrato a termo certo: quando o contrato temporário é legal',
      content: [
        { kind: 'paragraph', text: 'Contrato a termo certo é um contrato de trabalho temporário com uma data de fim previamente conhecida. Não pode ser usado apenas porque o empregador “quer experimentar primeiro”. É necessária uma razão temporária objectiva prevista no art. 140 Código do Trabalho.' },
        { kind: 'checklist', items: [
          'Substituição de trabalhador temporariamente ausente: parental leave, sick leave, férias, deslocação temporária.',
          'Trabalho sazonal ou pico previsível de actividade.',
          'Aumento excepcional e temporário de encomendas.',
          'Projecto, evento, obra ou tarefa com duração limitada.',
          'Lançamento de nova actividade ou empresa/estabelecimento — apenas dentro das condições da lei.',
          'O contrato deve conter uma razão concreta, e não uma frase genérica como “necessidades temporárias da empresa”.',
          'A data de fim ou o modo de a determinar deve estar escrito expressamente.',
          'O trabalho deve corresponder à razão indicada: não se pode escrever “substituição de João” e, na prática, preencher uma posição permanente.'
        ] },
        { kind: 'warning', text: 'Depois da Lei 13/2023, em vigor desde 01.05.2023, fundamentos antigos como “trabalhador à procura de primeiro emprego” e “desempregado de longa duração” já não são uma justificação normal para contrato a termo certo. Se os RH apresentarem um modelo com a formulação antiga — peça a correcção.' }
      ]
    },
    {
      id: 'duration-renewal',
      title: 'Prazo, renovações e fim do contrato',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o limite geral do contrato a termo certo pelo Código do Trabalho é até 2 anos, incluindo renovações. A afirmação “máximo 18 meses” não é uma regra universal: aparece em materiais antigos e em situações específicas, mas não pode ser usada como tecto geral para fixed-term em 2026.' },
        { kind: 'checklist', items: [
          'Pode haver no máximo 3 renovações.',
          'A duração total das renovações não pode exceder o prazo inicial do contrato.',
          'Se o prazo ou a razão forem irregulares, o contrato pode ser reconhecido como contrato sem termo — por tempo indeterminado.',
          'O período experimental para fixed-term é normalmente de 30 dias, se o contrato for de 6+ meses, e de 15 dias se for inferior a 6 meses ou de prazo incerto, mas previsivelmente curto.',
          'O empregador deve avisar por escrito a não renovação pelo menos 15 dias antes do fim do prazo.',
          'O trabalhador deve avisar a sua não renovação pelo menos 8 dias antes.',
          'Em caso de caducidade por iniciativa do empregador, é normalmente devida compensação de 24 dias de retribuição base e diuturnidades por cada ano de antiguidade, proporcionalmente em caso de ano incompleto.',
          'Se continuar a trabalhar depois da data de fim e o empregador o aceitar, registe horas, e-mails, recibos de vencimento: isso é um argumento a favor de um contrato sem termo.'
        ] },
        { kind: 'warning', text: 'Não assine retroactivamente uma “renovação” ou “cessação por mútuo acordo” se, na prática, não concordou. Numa disputa, são importantes e-mails, escalas, recibos de vencimento, pagamentos bancários e mensagens no Slack/WhatsApp.' }
      ]
    },
    {
      id: 'rti',
      title: 'RTI / trabalho intermitente: “chamam quando é preciso”',
      content: [
        { kind: 'paragraph', text: 'O regime de trabalho intermitente é regulado pelos art. 157-160 Código do Trabalho. Não é um zero-hours contract comum. Pode ser utilizado em empresas com actividade descontínua ou intensidade variável: turismo, eventos, operações sazonais, alguns serviços.' },
        { kind: 'checklist', items: [
          'O contrato tem obrigatoriamente de ser escrito.',
          'O contrato deve indicar os períodos de trabalho ou o número mínimo de horas/dias por ano.',
          'O trabalho anual não pode ser inferior a 5 meses full-time.',
          'Desses 5 meses, pelo menos 3 meses devem ser consecutivos.',
          'O empregador deve chamar o trabalhador com antecedência: normalmente pelo menos 20 dias.',
          'No período de trabalho são pagos o salário normal, férias, subsídios e Segurança Social.',
          'No período de inactividade é paga a compensação estabelecida pelo CCT ou pelo contrato; se nada estiver previsto — normalmente 20% da retribuição base.',
          'Durante a inactividade, o trabalhador pode trabalhar para outro empregador, se o contrato não contiver uma limitação legal e não houver conflito de interesses.',
          'O RTI não deve substituir uma posição part-time permanente com horário regular.'
        ] },
        { kind: 'warning', text: 'Se o “chamam pelo WhatsApp” sem RTI escrito, sem compensação por inactividade e sem recibos de vencimento, isso não é trabalho intermitente legal, mas sim um risco de trabalho não declarado. Pode apresentar queixa à ACT.' }
      ]
    },
    {
      id: 'what-to-check-before-signing',
      title: 'O que verificar antes de assinar 🖊️',
      content: [
        { kind: 'checklist', items: [
          'Nome do empregador, NIPC, morada, local de trabalho e função/categoria profissional.',
          'Tipo de contrato: tempo parcial, termo certo, sem termo, temporário através de agência, RTI — são regimes diferentes.',
          'Salário bruto, periodicidade de pagamento, subsídio de alimentação, subsídio de férias/Natal.',
          'Horas semanais, dias da semana, turnos, regras de escalas e pagamento de trabalho suplementar.',
          'A razão concreta do fixed-term, se for termo certo.',
          'Data de início, data de fim, número de renewals ou regras de renovação.',
          'CCT: muitos sectores têm convenções colectivas com melhores taxas e suplementos.',
          'Período experimental e notice periods.',
          'Registo na Segurança Social: o empregador deve declarar o contrato de trabalho.',
          'Direito a férias, faltas justificadas, parental rights, sick leave através do SNS/Segurança Social.',
          'Existência de cláusula de exclusividade ou non-compete — para part-time e RTI isto é especialmente importante.'
        ] },
        { kind: 'paragraph', text: 'Para efeitos de imigração, guarde o contrato assinado, recibos de vencimento, declaração da entidade patronal, extracto de remunerações da Segurança Social e IRS. AIMA e bancos normalmente analisam não só o contrato, mas também os pagamentos efectivos.' }
      ]
    },
    {
      id: 'if-problem',
      title: 'Se o empregador violar as regras',
      content: [
        { kind: 'paragraph', text: 'Comece por um pedido escrito aos RH: peça a correcção do contrato, a emissão de recibos de vencimento, o registo das horas ou a explicação do fundamento do termo certo/RTI. Escreva por e-mail, não apenas por messenger.' },
        { kind: 'checklist', items: [
          'Guarde o contrato assinado e todas as versões.',
          'Descarregue os recibos de vencimento e os extractos bancários.',
          'Mantenha uma tabela de horas, turnos, overtime e chamadas para trabalhar.',
          'Verifique a Segurança Social Direta: há remunerações?',
          'Peça ao empregador uma declaração de situação profissional.',
          'Se o salário não for pago ou o contrato for fake — apresente denúncia à ACT.',
          'Em caso de despedimento, não assine quitclaim/“acordo” sem cálculo das compensações.',
          'Se a disputa afectar a autorização de residência, consulte em paralelo um advogado/solicitador: a perda de emprego e a ausência de contribuições podem prejudicar a renovação.'
        ] },
        { kind: 'warning', text: 'A ACT fiscaliza a legislação laboral, mas não é o seu advogado em tribunal. Para cobrar dinheiro, reconhecer um contrato sem termo ou impugnar um despedimento, pode ser necessário recorrer ao Tribunal do Trabalho.' }
      ]
    }
  ],
  costs: [
    { label: 'Queixa à ACT', amountEUR: 0, note: 'A apresentação de denúncia pelo trabalhador é gratuita.' },
    { label: 'Salário mínimo full-time em 2026', amountEUR: 920, note: 'SMN; para part-time aplica-se proporcionalmente às horas, se o CCT não prever mais.' },
    { label: 'Compensação por inactividade no RTI', amountEURMin: 0, amountEURMax: 0, note: 'Não é um montante fixo: normalmente 20% da retribuição base, se o CCT/contrato não estabelecer outro valor.' }
  ],
  sources: [
    {
      title: 'ACT — contratos de trabalho, tempo parcial e direitos do trabalhador',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Trabalho — Lei 7/2009, versão consolidada',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2023 — Agenda do Trabalho Digno, alterações ao Código do Trabalho',
      url: 'https://dre.pt/dre/detalhe/lei/13-2023-211340863',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — contribuições dos trabalhadores por conta de outrem',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 139/2025 — RMMG (SMN) 920 € no continente desde 01.01.2026',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/139-2025-992879809',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
