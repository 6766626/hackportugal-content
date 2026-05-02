export default {
  editorialVoice: 'hackportugal',
  id: 'teletrabalho-lei',
  categoryId: 'work_business',
  title: 'Teletrabalho: lei sobre trabalho remoto em Portugal',
  tldr: 'Teletrabalho em Portugal não é simplesmente “trabalho a partir de casa”: segundo o Código do Trabalho arts. 165-171, é necessário um contrato escrito ou addendum, onde constem o local de trabalho, o horário, o equipamento e a compensação de despesas. O empregador é obrigado a fornecer o equipamento ou a compensar despesas adicionais comprovadas com internet/eletricidade. Existe direito ao descanso: é proibido contactar o trabalhador fora do horário de trabalho, salvo em caso de força maior. Em 2026, a referência fiscalmente segura para a compensação é até 22 €/mês com 22 dias úteis, mas o direito laboral não limita o reembolso efetivo a este valor.',
  tags: ['teletrabalho', 'trabalho', 'ct', 'despesas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-counts',
      title: 'O que é considerado teletrabalho',
      content: [
        { kind: 'paragraph', text: 'Segundo o Código do Trabalho art. 165, teletrabalho é a prestação de trabalho em regime de subordinação jurídica ao empregador, habitualmente fora da empresa e através do recurso a tecnologias de informação e comunicação. Ou seja, o escritório em casa, o trabalho remoto regular a partir de um coworking ou um regime híbrido enquadram-se neste regime, se não se tratar de um acordo pontual do tipo “hoje vou trabalhar a partir de casa”.' },
        { kind: 'checklist', items: ['Continua a ser trabalhador ao abrigo de um contrato de trabalho, e não freelancer com recibos verdes', 'O trabalho é realizado fora das instalações do empregador de forma regular ou estruturada', 'São utilizados portátil, VPN, e-mail corporativo, Teams/Slack, CRM ou outros sistemas informáticos', 'O local de teletrabalho deve estar definido no acordo: por exemplo, a morada da habitação em Portugal', 'Também é preferível formalizar por escrito o regime híbrido: dias no escritório e dias em remoto', 'O trabalho remoto a partir de outro país é um risco separado em matéria de impostos, Segurança Social, seguro e RGPD; não se considera automaticamente autorizado'] }
      ]
    },
    {
      id: 'written-agreement',
      title: 'O acordo escrito é obrigatório',
      content: [
        { kind: 'paragraph', text: 'O teletrabalho deve ser formalizado por escrito: através de contrato autónomo, cláusula no contrato de trabalho ou addendum. Um acordo verbal num chat cria litígios: quem paga a internet, se é possível exigir o regresso ao escritório, onde ocorreu um acidente de trabalho.' },
        { kind: 'checklist', items: ['Identificação do empregador e do trabalhador', 'Local onde é prestado o teletrabalho', 'Período normal de trabalho: horas, dias da semana, calendário híbrido', 'Funções do trabalhador e departamento/responsável hierárquico', 'Salário e prestações adicionais, se existirem', 'A quem pertence o equipamento: portátil, monitor, telefone, cadeira ergonómica', 'Quem instala e mantém software, VPN, antivírus, acessos', 'Como são compensadas as despesas adicionais: internet, eletricidade, equipamento', 'Duração do regime: a termo ou por tempo indeterminado', 'Regras de presença no escritório, reuniões e controlo do trabalho'] },
        { kind: 'warning', text: 'Se o empregador “autorizou o remoto”, mas não formalizou um addendum, peça confirmação escrita antes do início do regime. Isto é especialmente importante para vistos D7/D8, morada de residência, seguro de acidentes de trabalho e compensação de despesas.' }
      ]
    },
    {
      id: 'who-can-demand',
      title: 'Quem tem um direito reforçado ao trabalho remoto',
      content: [
        { kind: 'paragraph', text: 'Regra geral: o teletrabalho exige acordo das partes. Mas o Código do Trabalho confere a alguns trabalhadores o direito de exigir o regime remoto, se as funções forem compatíveis e o empregador tiver recursos.' },
        { kind: 'checklist', items: ['Progenitor de criança até 3 anos — direito ao teletrabalho, se o trabalho for compatível', 'Progenitor de criança até 8 anos — nos casos previstos na lei: por exemplo, quando ambos os progenitores utilizam o regime alternadamente ou em família monoparental', 'Trabalhador reconhecido como cuidador informal não principal pode ter direito ao teletrabalho se as funções forem compatíveis', 'Vítimas de violência doméstica têm direitos especiais à alteração das condições de trabalho, incluindo regime à distância quando estejam cumpridas as condições legais', 'O empregador é obrigado a fundamentar a recusa se a lei conferir ao trabalhador o direito a esse regime', 'Se o trabalho exigir presença física — armazém, horeca, produção, medicina presencial — o empregador pode recusar de forma fundamentada'] },
        { kind: 'warning', text: 'O direito ao teletrabalho não significa direito a trabalhar a partir de qualquer ponto do mundo. Se saiu de Portugal durante meses, podem surgir residência fiscal noutro país, estabelecimento estável do empregador, problemas com Segurança Social e seguro.' }
      ]
    },
    {
      id: 'expenses-equipment',
      title: 'Equipamento e despesas: quem paga',
      content: [
        { kind: 'paragraph', text: 'Segundo o CT art. 168, o empregador é responsável por fornecer o equipamento e os sistemas necessários ao trabalho e à comunicação. Se o trabalhador utilizar equipamento próprio ou suportar despesas adicionais devido ao teletrabalho, o empregador deve compensar o custo adicional comprovado.' },
        { kind: 'checklist', items: ['Portátil, monitor, telefone, auricular, VPN e software de trabalho são normalmente fornecidos pelo empregador', 'Se o equipamento for seu, isso deve constar expressamente do acordo', 'São compensadas as despesas adicionais diretamente causadas pelo teletrabalho: aumento da fatura de eletricidade, internet, consumíveis', 'Guarde faturas: eletricidade, internet, compra de cabos, adaptadores, cadeira de escritório, se acordado', 'A compensação fixa é admissível, mas não deve disfarçar salário', 'Para IRS/Segurança Social em 2026, a referência segura segundo a Portaria 292-A/2023 é: 0,10 €/dia eletricidade, 0,40 €/dia internet, 0,50 €/dia computador; no total 1 €/dia, ou seja, 22 €/mês com 22 dias úteis', 'Se as despesas efetivas comprovadas forem superiores a 22 €/mês, o direito laboral permite exigir reembolso; o regime fiscal pode exigir prova adicional', 'As despesas devem estar ligadas especificamente ao trabalho, e não ao consumo doméstico normal'] },
        { kind: 'warning', text: 'Não assine uma cláusula segundo a qual “o trabalhador suporta todas as despesas de teletrabalho” sem compensação. Tal cláusula entra em conflito com a lógica do CT art. 168 e pode ser contestada.' }
      ]
    },
    {
      id: 'disconnect-privacy',
      title: 'Direito ao descanso, proibição de pressão e privacidade',
      content: [
        { kind: 'paragraph', text: 'O trabalho remoto não elimina o horário de trabalho. O empregador é obrigado a respeitar períodos de descanso, pausas, fins de semana e férias. Segundo o CT art. 199-A, o empregador deve abster-se de contactar o trabalhador durante o período de descanso, salvo em casos de força maior. A violação pode constituir contraordenação grave.' },
        { kind: 'checklist', items: ['Não é obrigado a responder a e-mail, WhatsApp, Slack e chamadas depois do horário de trabalho, se não houver força maior', 'Mensagens constantes à noite, ao fim de semana ou durante férias podem constituir prova de violação do direito ao descanso', 'O empregador não pode usar o trabalho remoto para isolar o trabalhador da equipa ou para discriminação na carreira', 'O empregador deve organizar contactos presenciais com colegas e chefia com intervalo não superior a 2 meses, salvo acordo diferente entre as partes dentro dos limites da lei', 'O controlo da produtividade deve ser proporcional: tarefas, prazos, relatórios — sim; webcam permanente e monitorização oculta — risco de ilegalidade', 'A visita do empregador ao domicílio só é possível para controlo do trabalho/equipamento, normalmente com aviso prévio de 24 horas, com consentimento do trabalhador e dentro do período 09:00-19:00', 'É proibido o acesso a divisões pessoais, a verificação de correspondência privada e da vida familiar'] },
        { kind: 'warning', text: 'Se a chefia escrever “tem de estar sempre online porque trabalha a partir de casa”, isso não é a norma legal. O horário de trabalho é fixado da mesma forma que no escritório, incluindo limites de horário e descanso.' }
      ]
    },
    {
      id: 'if-conflict',
      title: 'Se o empregador violar as regras',
      content: [
        { kind: 'paragraph', text: 'Atue por escrito e com calma. Em Portugal, um litígio laboral muitas vezes resolve-se logo após um e-mail formal com referência ao Código do Trabalho. Se não resultar, recorre-se à ACT ou a um advogado/solicitador de direito do trabalho.' },
        { kind: 'checklist', items: ['Reúna o contrato, addendum, e-mail sobre teletrabalho, screenshots do horário e de mensagens fora do horário de trabalho', 'Peça um acordo escrito nos termos do CT arts. 165-171, se ainda não existir', 'Solicite separadamente a compensação de despesas, juntando faturas e cálculo', 'Se o obrigarem a responder fora do horário — indique por escrito o horário de trabalho e peça o cumprimento do CT art. 199-A', 'Não apague mensagens: WhatsApp, Slack, Teams, e-mail podem servir como prova', 'Se houver pressão, ameaças de despedimento, isolamento ou sanção por recusar responder à noite — registe datas, horas, testemunhas', 'Apresente queixa à ACT se o empregador violar sistematicamente o regime ou se recusar a formalizar o teletrabalho', 'Antes de se despedir ou assinar um acordo de revogação, mostre os documentos a um jurista: é fácil perder compensações e prazos'] }
      ]
    }
  ],
  costs: [
    { label: 'Compensação de teletrabalho fiscalmente segura', amountEURMax: 22, note: 'Referência com 22 dias úteis: 1 €/dia segundo a Portaria 292-A/2023. Não é o limite máximo do reembolso laboral, se as despesas comprovadas forem superiores.' },
    { label: 'Eletricidade', amountEURMax: 2.2, note: '0,10 €/dia com 22 dias — componente da compensação fixa para efeitos fiscais.' },
    { label: 'Internet', amountEURMax: 8.8, note: '0,40 €/dia com 22 dias — componente da compensação fixa para efeitos fiscais.' },
    { label: 'Computador/equipamento', amountEURMax: 11, note: '0,50 €/dia com 22 dias — componente da compensação fixa para efeitos fiscais.' }
  ],
  sources: [
    { title: 'DGAEP: Teletrabalho — regime jurídico e perguntas frequentes', url: 'https://www.dgaep.gov.pt/index.cfm?OBJID=b8a129f3-8eb7-4b56-932f-f084b9abab44&ID=74000000', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — Lei 7/2009, arts. 165-171 e art. 199-A', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 83/2021 — alterações ao regime de teletrabalho e dever de abstenção de contacto', url: 'https://diariodarepublica.pt/dr/detalhe/lei/83-2021-175397114', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 292-A/2023 — valores de referência para compensação de despesas em teletrabalho', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/292-a-2023-221850548', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
