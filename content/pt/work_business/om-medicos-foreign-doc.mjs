export default {
  editorialVoice: 'hackportugal',
  id: 'om-medicos-foreign-doc',
  categoryId: 'work_business',
  title: 'Ordem dos Médicos: inscrição de médico estrangeiro em Portugal',
  tldr: 'Para trabalhar como médico em Portugal, um diploma estrangeiro não é suficiente: primeiro é necessário o reconhecimento do grau em Medicina através da DGES/de uma faculdade de medicina portuguesa ao abrigo do DL 66/2018, e depois a submissão presencial na Ordem dos Médicos. A taxa base do pedido é 385 €. A OM verifica documentos, Good Standing e, regra geral, exige a Prova de Comunicação Médica. Para uma inscrição autónoma plena, a experiência é importante: se após o diploma não houver pelo menos 2 anos de prática médica, poderá ser encaminhado para formação geral/um percurso prático até à autonomia.',
  tags: ['médicos', 'ordem', 'dges', 'trabalho'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'scope',
      title: 'O que permite a inscrição na Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'A Ordem dos Médicos é a associação profissional obrigatória para médicos em Portugal. Sem inscrição ativa na OM, não é legal trabalhar como médico no SNS, numa clínica privada, num hospital, em telemedicina, nem assinar documentos médicos enquanto médico.' },
        { kind: 'paragraph', text: 'O processo é composto por dois blocos distintos: o reconhecimento académico do diploma através da DGES/universidade e a inscrição profissional na OM. O reconhecimento do diploma, por si só, não dá direito a exercer.' },
        { kind: 'checklist', items: ['Adequado para médicos com diploma de Medicina obtido fora de Portugal', 'É necessário NIF e um documento de identificação válido', 'Para cidadãos não-EU, normalmente é necessário estatuto legal em Portugal ou fundamento para trabalhar', 'A OM aceita documentos presencialmente na secção regional', 'A submissão base custa 385 €', 'A língua portuguesa é praticamente obrigatória: a comunicação com o doente é avaliada separadamente'] }
      ]
    },
    {
      id: 'recognition-dges',
      title: 'Passo 1. Reconhecer o diploma de medicina através da DGES',
      content: [
        { kind: 'paragraph', text: 'O diploma estrangeiro de médico passa primeiro por reconhecimento académico ao abrigo do Decreto-Lei 66/2018. Para Medicina, normalmente é necessário reconhecimento específico: uma instituição de ensino superior portuguesa com faculdade de medicina compara o seu programa com o Mestrado Integrado em Medicina.' },
        { kind: 'checklist', items: ['Escolha o tipo de reconhecimento no portal da DGES: na maioria dos casos, reconhecimento específico', 'Submeta o diploma, o suplemento com horas/ECTS, o programa das disciplinas e as classificações', 'Faça apostila/legalização, se o documento tiver sido emitido fora da EU e não houver dispensa', 'Prepare tradução para português, se os documentos não estiverem em PT/EN/ES/FR, conforme exigido pela instituição', 'Pague a taxa da universidade: o valor depende da instituição, muitas vezes algumas centenas de euros', 'Acompanhe o email da universidade: podem pedir syllabi adicionais ou uma entrevista', 'Obtenha a certidão de reconhecimento — é este documento que a OM pedirá depois'] },
        { kind: 'warning', text: 'Não submeta o pedido à OM apenas com o diploma estrangeiro original. Sem o reconhecimento português do grau em Medicina, o processo normalmente não é considerado pronto para inscrição.' }
      ]
    },
    {
      id: 'documents',
      title: 'Passo 2. Reunir o processo para a Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'A OM exige submissão presencial e verifica não só o diploma, mas também a idoneidade profissional: identidade, ausência de restrições disciplinares, Good Standing e experiência.' },
        { kind: 'checklist', items: ['Documento de identificação: passaporte, Cartão de Cidadão ou autorização de residência', 'NIF', 'Certidão de reconhecimento do grau académico em Medicina em Portugal', 'Diploma original e suplemento — é preferível ter também tradução', 'Certificado de Registo Criminal do país/países de residência, válido à data da submissão', 'Certificate of Good Standing / estatuto profissional emitido pela ordem médica do país onde esteve inscrito', 'Comprovativo de experiência: contratos de trabalho, declarações de hospitais, licença, recibos de salário/contribuições sociais, descrição de funções', 'CV em português ou inglês', 'Fotografia e formulário da OM preenchido', 'Comprovativo de morada e contactos em Portugal'] },
        { kind: 'warning', text: 'As declarações de Good Standing e o registo criminal costumam ter prazo de validade curto. Não os peça muitos meses antes da marcação na OM: no momento da submissão, podem pedir documentos novos.' }
      ]
    },
    {
      id: 'exam-language',
      title: 'Passo 3. Fazer a Prova de Comunicação Médica',
      content: [
        { kind: 'paragraph', text: 'Para médicos estrangeiros, a OM aplica uma avaliação da comunicação médica — a Prova de Comunicação Médica. Não é um exame de toda a medicina como numa universidade, mas sim uma verificação da capacidade de comunicar em segurança com o doente e com colegas no contexto clínico português.' },
        { kind: 'checklist', items: ['Prepare o português pelo menos ao nível de uma consulta segura com o doente', 'Treine anamnese, queixas, alergias, medicamentos, informed consent', 'Saiba explicar o diagnóstico, o plano de tratamento e os riscos em português simples', 'Reveja termos do SNS: centro de saúde, urgência, referenciação, receita, baixa médica', 'Confirme se a prova é exigida no seu caso: a OM decide com base no processo, no país de formação e na experiência profissional', 'Não conte trabalhar apenas em inglês: para a licença, a segurança da comunicação em Portugal é essencial'] },
        { kind: 'warning', text: 'Ter diploma, estatuto IFICI/NHR, oferta de trabalho ou contrato com uma clínica não dispensa os requisitos da OM relativos à comunicação e à inscrição profissional.' }
      ]
    },
    {
      id: 'two-year-rule',
      title: 'Passo 4. Verificar a regra dos 2 anos de prática',
      content: [
        { kind: 'paragraph', text: 'O filtro essencial da OM é a autonomia do exercício. Se, após a conclusão do diploma de medicina, tiver pelo menos 2 anos de prática médica real, isso ajuda a obter inscrição como médico com autonomia. A experiência deve ser comprovada documentalmente: cargo, datas, full-time/part-time, funções clínicas, assinatura e carimbo do empregador.' },
        { kind: 'paragraph', text: 'Se não tiver 2 anos de prática ou se os documentos forem fracos, a OM pode não conceder de imediato uma inscrição autónoma plena. Um percurso possível é a realização de formação geral / período prático equivalente em Portugal até obter autonomia. Isto afeta a possibilidade de atender doentes autonomamente e assinar atos.' },
        { kind: 'checklist', items: ['Conte a experiência a partir da data de obtenção do diploma de Medicina, e não os anos de estudo', 'Internship/residency pode contar, se tiver sido trabalho clínico enquanto médico', 'Voluntariado sem estatuto de médico costuma ser prova fraca', 'A declaração deve ser concreta: specialty/department, dates, workload, clinical duties', 'Se trabalhou em vários países, obtenha Good Standing e declarações de experiência de cada um', 'Para qualificações EU/EEA, podem aplicar-se regras de reconhecimento específicas, mas a OM continua a verificar a inscrição e o good standing'] }
      ]
    },
    {
      id: 'submit-in-person',
      title: 'Passo 5. Submeter o pedido presencialmente e aguardar a decisão',
      content: [
        { kind: 'paragraph', text: 'A submissão é feita presencialmente na secção regional da OM: Norte, Centro, Sul, Açores ou Madeira — normalmente de acordo com a área de residência/trabalho. Na prática, é melhor escrever antecipadamente um email à secção competente, enviar digitalizações para uma verificação preliminar e pedir uma marcação.' },
        { kind: 'checklist', items: ['Leve os originais e cópias de todos os documentos', 'Pague a taxa de abertura do processo/inscrição — 385 €', 'Guarde o comprovativo de pagamento', 'Confirme quando será a Prova de Comunicação Médica e se é necessário entregar documentos adicionais', 'Após aprovação, receba o número de cédula profissional', 'Verifique o estado da inscrição no site da OM antes de começar a trabalhar', 'Informe o empregador apenas depois da ativação efetiva da inscrição'] },
        { kind: 'warning', text: 'Não inicie clinical acts antes de obter a cédula profissional ativa. Trabalhar como médico sem inscrição na OM representa um risco para si, para o empregador, para o seguro de responsabilidade civil e para futuros pedidos em Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Submissão/abertura do processo na Ordem dos Médicos', amountEUR: 385, note: 'Taxa do pedido de médico estrangeiro; confirme o valor atual na secção regional antes de pagar.' },
    { label: 'Reconhecimento do diploma através da universidade/DGES', amountEURMin: 300, amountEURMax: 700, note: 'A tabela é definida pela instituição escolhida; para Medicina, costuma ser necessário reconhecimento específico.' },
    { label: 'Traduções, apostila/legalização, cópias notariais', amountEURMin: 100, amountEURMax: 400, note: 'Depende do país de emissão dos documentos e do número de páginas do programa de estudos.' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Sul — FAQ para inscrição de médicos estrangeiros', url: 'https://www.omsul.pt/Portals/0/MQ-FAQS-ENG-OM-Medicos-Estrangeiros.pdf', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Ordem dos Médicos — site oficial e secções regionais', url: 'https://ordemdosmedicos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGES — reconhecimento de graus e diplomas estrangeiros', url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 66/2018 — regime de reconhecimento de graus académicos estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
