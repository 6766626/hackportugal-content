export default {
  editorialVoice: 'hackportugal',
  id: 'sicad-dependencias-sup',
  categoryId: 'healthcare',
  title: 'SICAD/ICAD: apoio gratuito em dependências — álcool, drogas, jogos de azar',
  tldr: 'Em Portugal, o apoio em dependências passa pela rede pública SICAD/ICAD: CRI/CAT/Equipas de Tratamento. Para residentes no país, o tratamento é normalmente gratuito no SNS: consultas, psiquiatria, psicólogo, assistente social, programas de metadona/buprenorfina, apoio no alcoolismo e jogo patológico. Pode dirigir-se directamente ao serviço ou através do médico de família. Intoxicação aguda, abstinência com convulsões, psicose ou risco de suicídio — 112 ou urgência hospitalar, não espere por marcação.',
  tags: ['sicad', 'dependências', 'álcool', 'drogas', 'jogo'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-it',
      title: 'O que são o SICAD/ICAD e onde ir na prática',
      content: [
        { kind: 'paragraph', text: 'SICAD é a designação antiga e ainda muito reconhecida do sistema público para dependências. Em 2026, os serviços práticos são prestados através da rede ICAD/SICAD e dos CRI locais — Centros de Respostas Integradas. Muitas pessoas ainda dizem CAT por hábito: é o nome antigo dos centros de atendimento a toxicodependentes.' },
        { kind: 'paragraph', text: 'O CRI não é polícia nem serviço de imigração. É uma rede médico-social: médico, psiquiatra, psicólogo, enfermeiro, assistente social. O objectivo é tratamento e redução de danos, não punição.' },
        { kind: 'checklist', items: ['Dependência de álcool: avaliação, tratamento em ambulatório, encaminhamento para desintoxicação alcoólica', 'Dependência de opiáceos: programa de substituição opiácea — metadona ou buprenorfina segundo indicação clínica', 'Cocaína, canábis, estimulantes, benzodiazepinas: consultas, psiquiatria, psicoterapia, plano de redução de danos', 'Jogo patológico: jogos de azar, casinos online, apostas, controlo financeiro, psicoterapia', 'Adolescentes e famílias: consultas para pais e sessões familiares', 'Questões sociais: trabalho, habitação, dívidas, ligação à Segurança Social e Junta de Freguesia', 'Encaminhamento para internamento ou comunidade terapêutica, se o tratamento em ambulatório não for suficiente'] }
      ]
    },
    {
      id: 'who-can-use',
      title: 'Quem tem direito e quanto custa',
      content: [
        { kind: 'paragraph', text: 'Para residentes e pessoas que vivem de facto em Portugal, o apoio na rede pública de dependências é prestado através do SNS e é normalmente gratuito. Não precisa de seguro de saúde privado para começar.' },
        { kind: 'checklist', items: ['Leve passaporte ou Cartão de Cidadão / autorização de residência, se tiver', 'Número de utente SNS — é recomendável, mas numa situação aguda não deve ser uma barreira', 'NIF — útil para o registo administrativo, mas não é uma condição médica para o tratamento', 'Comprovativo de morada — contrato de arrendamento, factura, atestado de residência, se lhe pedirem para determinar o seu CRI', 'Lista de medicamentos: antidepressivos, benzodiazepinas, antipsicóticos, opioides, antiepilépticos', 'Resultados de análises, relatórios da urgência, diagnósticos, se existirem', 'Contacto de uma pessoa de confiança — especialmente se houver risco de recaída, convulsões, sobredosagem ou suicídio'] },
        { kind: 'warning', text: 'A ausência de autorização de residência não significa que uma pessoa com abstinência, sobredosagem, psicose ou risco suicida possa ficar sem ajuda. Numa emergência, ligue 112 ou dirija-se à urgência hospitalar. Os documentos administrativos tratam-se depois.' }
      ]
    },
    {
      id: 'how-to-access',
      title: 'Como conseguir uma consulta: 3 percursos que funcionam',
      content: [
        { kind: 'substeps', items: [
          { id: 'self-referral', title: '1. Contactar directamente o CRI/CAT', content: [
            { kind: 'paragraph', text: 'O caminho mais directo: encontre o CRI/Equipa de Tratamento mais próximo no site sicad.pt ou através do Centro de Saúde e telefone. Diga: “Quero marcar uma consulta por dependência de álcool/drogas/jogo”. Para o primeiro contacto não precisa de provar uma «fase grave».' },
            { kind: 'checklist', items: ['Indique a zona onde vive e o concelho', 'Explique brevemente o problema: álcool, heroína/opioides, cocaína, cannabis, jogo online, apostas', 'Diga se há abstinência: tremores, suores, vómitos, insónia, convulsões', 'Informe se está grávida, se tem VIH/hepatite, epilepsia, diabetes ou psicose', 'Peça primeira consulta ou triagem', 'Se não atenderem o telefone — peça ao Centro de Saúde o contacto do seu CRI'] }
          ]},
          { id: 'family-doctor', title: '2. Através do médico de família ou Centro de Saúde', content: [
            { kind: 'paragraph', text: 'Se tiver número de utente e Centro de Saúde, peça encaminhamento para consulta de comportamentos aditivos/dependências. É prático se, em paralelo, precisar de análises, receitas, baixa médica ou tratamento de ansiedade/depressão.' }
          ]},
          { id: 'hospital-emergency', title: '3. Através da urgência hospitalar em caso de sintomas perigosos', content: [
            { kind: 'paragraph', text: 'Em caso de abstinência alcoólica grave, convulsões, delirium tremens, sobredosagem, intoxicação intensa, agressividade, alucinações ou risco de suicídio, não espere pelo CRI. Ligue 112 ou vá à urgência hospitalar. Após estabilização, o hospital pode encaminhar para o CRI.' }
          ]}
        ]}
      ]
    },
    {
      id: 'treatment-options',
      title: 'O que acontece durante o tratamento',
      content: [
        { kind: 'paragraph', text: 'A primeira fase é a triagem: o profissional esclarece consumos, saúde, sintomas psíquicos, riscos, família, trabalho, dívidas e habitação. Depois é elaborado um plano terapêutico. Pode ser ligeiro — consultas de poucas em poucas semanas — ou intensivo, se houver risco elevado.' },
        { kind: 'checklist', items: ['Avaliação médica: tensão arterial, peso, fígado, infecções, medicamentos, risco de convulsões', 'Psiquiatria: ansiedade, depressão, perturbação bipolar, psicose, ADHD, pensamentos suicidas', 'Psicologia: entrevista motivacional, prevenção da recaída, CBT, sessões familiares', 'Álcool: redução em ambulatório, medicamentos contra o craving quando indicados, encaminhamento para detox', 'Opioides: metadona ou buprenorfina, dosagem e dispensa segundo as regras do programa', 'Consumo injectável: redução de danos, testes, encaminhamento para tratamento de VIH/hepatite', 'Jogos de azar: bloqueios, plano financeiro, gestão de dívidas, exclusão de jogos online/offline, terapia da impulsividade', 'Apoio social: documentos, trabalho, ligação à Segurança Social, conflitos familiares'] },
        { kind: 'warning', text: 'Não interrompa abruptamente álcool ou benzodiazepinas se o consumo tiver sido diário e prolongado. A suspensão brusca pode causar convulsões e delirium tremens. Primeiro, avaliação médica.' }
      ]
    },
    {
      id: 'privacy-and-immigration',
      title: 'Confidencialidade, trabalho e estatuto migratório',
      content: [
        { kind: 'paragraph', text: 'O tratamento de dependência é informação médica. Está protegido pelas regras de confidencialidade e não implica uma comunicação automática à AIMA, ao empregador, ao senhorio ou à família. As excepções são as habituais: perigo imediato para si/outros, menores, casos judiciais.' },
        { kind: 'checklist', items: ['Pode pedir atendimento em inglês; tradução para russo no SNS não é garantida', 'Se a língua for crítica — leve um intérprete de confiança, mas tenha em conta a privacidade', 'O empregador não recebe o diagnóstico sem o seu consentimento', 'A baixa médica é emitida através de médico, mas o documento para o empregador normalmente não revela o diagnóstico', 'Se houver crianças, é melhor demonstrar que está em tratamento: isso reduz riscos em situações sociais', 'Se houver dívidas por causa de gambling, procure em paralelo apoio social e aconselhamento sobre insolvência/negociação com credores', 'Se tem receio da polícia por causa de drogas, procure tratamento na mesma: o modelo português está orientado para a saúde e redução de danos'] }
      ]
    },
    {
      id: 'crisis-plan',
      title: 'Plano de crise: quando não esperar por marcação',
      content: [
        { kind: 'paragraph', text: 'Anote antecipadamente: a urgência mais próxima, o número de uma pessoa de confiança, medicamentos actuais, alergias, o que foi consumido exactamente e quando. Em caso de sobredosagem ou perda de consciência, esta informação poupa tempo.' },
        { kind: 'checklist', items: ['112 — imediatamente em caso de perda de consciência, convulsões, paragem respiratória, sobredosagem, trauma', 'SNS 24: 808 24 24 24 — triagem médica, se a situação não parecer imediatamente fatal', 'Urgência hospitalar — abstinência grave, delirium, alucinações, intoxicação marcada', 'Linha Vida / contactos SICAD — para aconselhamento sobre dependências e encaminhamento para serviços', 'Não deixe a pessoa sozinha depois de misturar álcool, opioides, benzodiazepinas ou GHB', 'Numa crise de gambling: limite imediatamente o acesso a cartões, MB WAY, casinos online e peça ao banco para reduzir limites', 'Depois da urgência, marque obrigatoriamente no CRI: o hospital estabiliza, mas o tratamento de longo prazo é construído aí'] },
        { kind: 'warning', text: 'Se houver pensamentos como “era melhor morrer”, plano de suicídio, armas, comprimidos ou salto/comboio — isso não é “fraqueza psicológica”, é uma emergência médica. Ligue 112 ou vá à urgência.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultas no CRI/CAT da rede pública', amountEUR: 0, note: 'Normalmente gratuitas para utentes SNS/residentes; confirme o registo administrativo no local.' },
    { label: 'Urgência hospitalar em situação de emergência', amountEUR: 0, note: 'Desde 2022, a maioria das taxas moderadoras no SNS foi eliminada; a assistência urgente em risco de vida é prestada independentemente do pagamento.' },
    { label: 'Psicoterapia privada, se recorrer fora do SNS', amountEURMin: 40, amountEURMax: 80, note: 'Valor indicativo por sessão nas grandes cidades; não substitui o CRI em caso de detox, metadona ou abstinência grave.' }
  ],
  sources: [
    { title: 'SICAD/ICAD — informação sobre comportamentos aditivos e dependências e rede de respostas', url: 'https://www.sicad.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — normas e recomendações de saúde, álcool, saúde mental e respostas do SNS', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — triagem médica e acesso à urgência', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — acesso ao Serviço Nacional de Saúde e serviços para cidadãos', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
