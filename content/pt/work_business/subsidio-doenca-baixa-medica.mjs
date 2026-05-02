export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-doenca-baixa-medica',
  categoryId: 'work_business',
  title: 'Subsídio de Doença / Baixa Médica — baixa por doença para trabalhador por conta de outrem',
  tldr: 'Em Portugal, a baixa por doença para trabalhador por conta de outrem é formalizada através do CIT — certificado de incapacidade temporária. É emitido pelo médico de família, SNS/hospital ou outro médico autorizado; uma ausência curta até 3 dias pode ser declarada através do SNS24, mas isso não é um subsídio pago. A Segurança Social paga normalmente a partir do 4.º dia: 55% da remuneração de referência até 30 dias, 60% entre 31 e 90, 70% entre 91 e 365, 75% após 365. A partir do 1.º dia, há pagamento em caso de hospitalização, cirurgia de ambulatório, tuberculose e algumas exceções.',
  tags: ['baixa', 'doença', 'segurança-social', 'trabalho'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a baixa médica e quem paga',
      content: [
        { kind: 'paragraph', text: 'A baixa médica é uma incapacidade temporária para o trabalho. Para a Segurança Social, ela só existe como CIT: certificado de incapacidade temporária para o trabalho. Uma declaração médica comum sem CIT pode justificar a ausência perante o empregador, mas não desencadeia o pagamento do subsídio de doença.' },
        { kind: 'paragraph', text: 'Para trabalhador por conta de outrem, o pagamento é feito pela Segurança Social, não pelo empregador. O empregador regista a ausência justificada, deixa de pagar salário pelos dias de baixa, e a Segurança Social transfere a prestação para o seu IBAN, se as condições estiverem cumpridas.' },
        { kind: 'checklist', items: [
          'Você trabalha com contrato de trabalho e são entregues declarações de remunerações à Segurança Social em seu nome',
          'Tem NISS e inscrição ativa na Segurança Social',
          'O CIT foi emitido por um médico e enviado eletronicamente para a Segurança Social',
          'Comunicou a baixa ao empregador dentro do prazo aceite na empresa',
          'O IBAN está adicionado na Segurança Social Direta',
          'Foi cumprido o prazo de garantia: normalmente 6 meses com remunerações registadas',
          'Para trabalhadores, é necessário o índice de profissionalidade: pelo menos 12 dias com remuneração nos primeiros 4 meses dos últimos 6 antes da doença'
        ] }
      ]
    },
    {
      id: 'how-to-open',
      title: 'Como abrir uma baixa: CIT, médico de família, SNS24',
      content: [
        { kind: 'paragraph', text: 'Se estiver realmente doente e não puder trabalhar, o caminho normal é o médico. Pode ser o médico de família no Centro de Saúde, atendimento SNS, hospital ou um médico autorizado que possa emitir o CIT. O CIT normalmente segue eletronicamente para a Segurança Social; é-lhe entregue uma cópia em papel/digital com as datas e os códigos.' },
        { kind: 'substeps', items: [
          { id: 'call-or-book', title: '1. Contactar o SNS24 ou o Centro de Saúde', content: [
            { kind: 'paragraph', text: 'Ligue para o SNS24: 808 24 24 24, use a app/portal SNS24 ou contacte o seu Centro de Saúde. Em caso de sintomas urgentes — 112 ou urgência.' }
          ] },
          { id: 'doctor-issues-cit', title: '2. Obter o CIT junto do médico', content: [
            { kind: 'paragraph', text: 'O médico indica o período de incapacidade, o tipo de doença e o regime: se pode sair de casa, se é necessária hospitalização, se há prolongamento. As datas são importantes: a Segurança Social calcula o pagamento por dias de calendário, não apenas por dias úteis.' }
          ] },
          { id: 'tell-employer', title: '3. Comunicar ao empregador', content: [
            { kind: 'paragraph', text: 'Entregue ao empregador a confirmação da baixa: uma cópia do CIT ou os dados para verificação. Não envie detalhes médicos desnecessários — o empregador precisa das datas e do facto de a ausência estar justificada, não do diagnóstico.' }
          ] },
          { id: 'check-ssd', title: '4. Verificar a Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Entre na Segurança Social Direta → Doença / Prestações e verifique se o processo apareceu. Se o IBAN não estiver indicado, adicione-o com antecedência: sem IBAN, o pagamento atrasa-se.' }
          ] }
        ] }
      ]
    },
    {
      id: 'three-day-sns24',
      title: '⚠️ Até 3 dias através do SNS24: prático, mas normalmente sem pagamento',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existe a autodeclaração de doença através do SNS24: o trabalhador declara a sua própria doença até 3 dias consecutivos. É uma forma de justificar a ausência perante o empregador sem consulta médica.' },
        { kind: 'checklist', items: [
          'É feita através do SNS24, app SNS24 ou Linha SNS24',
          'Máximo de 3 dias consecutivos de cada vez',
          'Pode ser usada no máximo 2 vezes por ano civil',
          'O empregador pode verificar o documento através de um código',
          'Não é um CIT emitido por um médico',
          'A Segurança Social não paga subsídio de doença por esta autodeclaração',
          'Se a doença continuar, é necessário consultar um médico e obter um CIT a partir do 4.º dia ou desde a data efetiva que o médico indicar de forma justificada'
        ] },
        { kind: 'warning', text: 'Não confunda: “justificar a ausência” e “receber uma prestação” são coisas diferentes. A autodeclaração SNS24 resolve a questão disciplinar no trabalho, mas não cria direito a dinheiro da Segurança Social.' }
      ]
    },
    {
      id: 'payment-rules',
      title: 'Quanto é pago e a partir de que dia',
      content: [
        { kind: 'paragraph', text: 'O valor é calculado a partir da remuneração de referência — a base diária calculada com base nos salários registados na Segurança Social. De forma simplificada: consideram-se os rendimentos dos primeiros 6 meses dos 8 meses anteriores ao mês de início da doença e divide-se por 180. Os subsídios de férias/Natal podem ser considerados segundo regras especiais, pelo que a base efetiva na Segurança Social pode ser diferente do seu “salário líquido”.' },
        { kind: 'checklist', items: [
          'Até 30 dias de doença: 55% da remuneração de referência',
          'Do 31.º ao 90.º dia: 60%',
          'Do 91.º ao 365.º dia: 70%',
          'A partir do 366.º dia: 75%',
          'Com uma base baixa ou com 3+ filhos/filho com deficiência, as primeiras taxas podem aumentar 5 p.p. se estiverem cumpridas as condições da Segurança Social',
          'Para trabalhador por conta de outrem, o período de espera normal é de 3 dias: o pagamento começa no 4.º dia',
          'A partir do 1.º dia, há pagamento em caso de internamento hospitalar, cirurgia de ambulatório, tuberculose e em algumas situações relacionadas com parentalidade',
          'A duração máxima para trabalhador por conta de outrem é normalmente 1095 dias; para tuberculose aplica-se um regime especial'
        ] },
        { kind: 'paragraph', text: 'Exemplo: se a sua remuneração de referência for, hipoteticamente, 60 € por dia, numa baixa normal de 10 dias de calendário a Segurança Social paga apenas os dias 4–10: 7 × 60 € × 55% = 231 €. Os primeiros 3 dias, no caso padrão, não são pagos pela Segurança Social.' },
        { kind: 'warning', text: 'O subsídio de doença não é igual ao salário. Se tiver renda, crédito ou dependentes, mantenha uma reserva: numa doença curta, a perda sente-se muitas vezes precisamente por causa dos primeiros 3 dias não pagos e da taxa de 55%.' }
      ]
    },
    {
      id: 'employee-actions',
      title: 'O que o trabalhador deve fazer para não perder dinheiro',
      content: [
        { kind: 'checklist', items: [
          'Verifique que tem NISS e acesso à Segurança Social Direta',
          'Adicione e confirme o IBAN na Segurança Social Direta com antecedência',
          'Guarde uma cópia do CIT e os códigos de verificação para o empregador',
          'Comunique a doença ao empregador o mais cedo possível: email, portal de RH, Slack/Teams — conforme for habitual na empresa',
          'Se o médico prolongar a baixa, confirme que o novo CIT não deixa intervalo entre datas',
          'Se o processo não aparecer na Segurança Social Direta ao fim de alguns dias, ligue para a Segurança Social ou confirme junto do médico se o CIT foi enviado',
          'Não trabalhe durante a baixa se o CIT proibir trabalho: isso pode levar à devolução da prestação e a problemas com o empregador',
          'Se ficar doente durante as férias, esclareça urgentemente com RH as regras de transferência das férias: é necessário documento médico e cumprimento do procedimento'
        ] },
        { kind: 'paragraph', text: 'O dinheiro chega normalmente por transferência bancária da Segurança Social. Os prazos dependem da rapidez com que o CIT entrou no sistema, de ter IBAN confirmado e de não existirem divergências nas contribuições do empregador.' }
      ]
    },
    {
      id: 'edge-cases',
      title: 'Situações frequentes entre expatriados',
      content: [
        { kind: 'paragraph', text: 'Se se mudou recentemente e trabalha há menos de 6 meses em Portugal, pode ainda não ter direito ao subsídio de doença: a Segurança Social analisa os períodos de remuneração registados. Dentro da UE, por vezes aplicam-se regras de coordenação da segurança social, mas isso é um procedimento separado com documentos do país de seguro anterior.' },
        { kind: 'checklist', items: [
          'Existe contrato, mas o empregador não pagou contribuições: a prestação pode ficar bloqueada — verifique a carreira contributiva',
          'Está em recibos verdes: as regras são semelhantes, mas o período de espera e os limites diferem dos de trabalhador por conta de outrem',
          'Está em período experimental: o direito à baixa não desaparece, mas é necessária comunicação correta com o empregador',
          'Trabalho remoto a partir de casa durante a baixa não é um “compromisso seguro”: se está incapacitado, não pode trabalhar sem um regime autorizado',
          'Não é necessário revelar o diagnóstico ao empregador; a informação médica está protegida',
          'Se a doença estiver relacionada com acidente de trabalho ou doença profissional, não se trata de um subsídio de doença normal — intervém a seguradora/o regime de riscos profissionais'
        ] },
        { kind: 'warning', text: 'Não assine uma ausência “voluntária” sem remuneração em vez de baixa, se estiver realmente doente. Isso retira-lhe o registo normal do CIT e pode custar-lhe a prestação.' }
      ]
    }
  ],
  costs: [
    { label: 'Autodeclaração de doença através do SNS24', amountEUR: 0, note: 'Gratuita, até 3 dias, no máximo 2 vezes por ano; normalmente sem pagamento de subsídio de doença' },
    { label: 'Consulta no SNS para obter CIT', amountEUR: 0, note: 'No SNS, as taxas moderadoras para a maioria dos cuidados primários foram eliminadas; uma consulta privada é paga segundo a tabela da clínica/seguro' },
    { label: 'Salário mínimo SMN 2026', amountEUR: 920, note: 'Referência para salários; a prestação não é calculada a partir do SMN, mas da remuneração de referência registada' },
    { label: 'IAS 2026', amountEUR: 537.13, note: 'Indicador de prestações sociais; usado em vários limites e regras mínimas da Segurança Social' }
  ],
  sources: [
    { title: 'Segurança Social — Subsídio de Doença', url: 'https://www.seg-social.pt/subsidio-de-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS24 — portal de serviços de saúde e autodeclaração de doença', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — faltas justificadas por doença', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
