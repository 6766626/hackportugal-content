export default {
  editorialVoice: 'hackportugal',
  id: 'om-medicos-foreign-doc',
  categoryId: 'work_business',
  title: 'Ordem dos Médicos: inscrição de médico estrangeiro em Portugal',
  tldr: 'Para trabalhar como médico em Portugal, um diploma estrangeiro não basta: primeiro é necessário o reconhecimento do grau de Medicina através da DGES/de uma faculdade de medicina portuguesa ao abrigo do DL 66/2018, depois a entrega presencial na Ordem dos Médicos. A taxa base de candidatura é 385 €. A OM verifica documentos, Good Standing e, em regra, exige a Prova de Comunicação Médica. Para a inscrição autónoma plena, a experiência é importante: se depois do diploma não houver pelo menos 2 anos de prática médica, pode ser encaminhado para formação geral/percurso prático até à autonomia.',
  tags: ['médicos', 'ordem', 'dges', 'trabalho'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'scope',
      title: 'O que permite a inscrição na Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'A Ordem dos Médicos é a associação profissional obrigatória para médicos em Portugal. Sem inscrição ativa na OM, não é legal trabalhar como médico no SNS, numa clínica privada, num hospital, em telemedicina ou assinar documentos médicos enquanto médico.' },
        { kind: 'paragraph', text: 'O processo é composto por dois blocos diferentes: o reconhecimento académico do diploma através da DGES/universidade e a inscrição profissional na OM. O reconhecimento do diploma, por si só, não dá direito a exercer.' },
        { kind: 'checklist', items: ['Adequado a médicos com diploma de Medicina obtido fora de Portugal', 'É necessário NIF e documento de identificação válido', 'Para não-EU, normalmente é necessário estatuto legal em Portugal ou fundamento para trabalhar', 'A OM aceita documentos presencialmente na secção regional', 'A candidatura base custa 385 €', 'A língua portuguesa é praticamente obrigatória: a comunicação com o paciente é avaliada separadamente'] }
      ]
    },
    {
      id: 'recognition-dges',
      title: 'Passo 1. Reconhecer o diploma médico através da DGES',
      content: [
        { kind: 'paragraph', text: 'O diploma estrangeiro de médico passa primeiro por reconhecimento académico nos termos do Decreto-Lei 66/2018. Para Medicina, normalmente é necessário reconhecimento específico: uma instituição de ensino superior portuguesa com faculdade de medicina compara o seu programa com o Mestrado Integrado em Medicina.' },
        { kind: 'checklist', items: ['Escolha o tipo de reconhecimento no portal da DGES: na maioria dos casos, reconhecimento específico', 'Submeta o diploma, suplemento com horas/ECTS, programa das disciplinas e classificações', 'Faça apostila/legalização, se o documento tiver sido emitido fora da EU e não houver dispensa', 'Prepare tradução para português, se os documentos não estiverem em PT/EN/ES/FR, conforme exigido pela instituição', 'Pague a taxa da universidade: o valor depende da instituição, frequentemente algumas centenas de euros', 'Acompanhe o email da universidade: podem pedir syllabi adicionais ou entrevista', 'Obtenha a certidão de reconhecimento — é precisamente esta que a OM pedirá depois'] },
        { kind: 'warning', text: 'Não submeta o pedido na OM apenas com o diploma estrangeiro original. Sem reconhecimento português do grau de Medicina, o processo geralmente não é considerado pronto para inscrição.' }
      ]
    },
    {
      id: 'documents',
      title: 'Passo 2. Reunir o dossier para a Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'A OM exige entrega presencial e verifica não só o diploma, mas também a idoneidade profissional: identidade, ausência de restrições disciplinares, Good Standing e experiência.' },
        { kind: 'checklist', items: ['Documento de identificação: passaporte, Cartão de Cidadão ou autorização de residência', 'NIF', 'Certidão de reconhecimento do grau académico em Medicina em Portugal', 'Original do diploma e suplemento — é melhor ter também tradução', 'Certificado de Registo Criminal do país/países de residência, válido à data da entrega', 'Certificate of Good Standing / estatuto profissional da ordem médica do país onde esteve inscrito', 'Comprovativo de experiência: contratos de trabalho, declarações de hospitais, licença, payroll/contribuições sociais, descrição de funções', 'CV em português ou inglês', 'Fotografia e formulário OM preenchido', 'Comprovativo de morada e contactos em Portugal'] },
        { kind: 'warning', text: 'As declarações de Good Standing e o registo criminal costumam ter um prazo de validade curto. Não os peça muitos meses antes da marcação na OM: no momento da entrega, podem pedir documentos novos.' }
      ]
    },
    {
      id: 'exam-language',
      title: 'Passo 3. Realizar a Prova de Comunicação Médica',
      content: [
        { kind: 'paragraph', text: 'Para médicos estrangeiros, a OM aplica uma avaliação da comunicação médica — Prova de Comunicação Médica. Não é um exame de toda a medicina como na universidade, mas uma verificação da capacidade de comunicar em segurança com o paciente e com colegas no contexto clínico português.' },
        { kind: 'checklist', items: ['Prepare português, no mínimo, ao nível de uma consulta segura com o paciente', 'Treine anamnese, queixas, alergias, medicamentos, informed consent', 'Saiba explicar diagnóstico, plano de tratamento e riscos em português simples', 'Reveja termos do SNS: centro de saúde, urgência, referenciação, receita, baixa médica', 'Confirme se a prova se aplica especificamente ao seu caso: a OM decide com base no dossier, país de formação e experiência profissional', 'Não conte trabalhar apenas em inglês: para a licença, a segurança da comunicação em Portugal é essencial'] },
        { kind: 'warning', text: 'A existência de diploma, estatuto IFICI/NHR, oferta de trabalho ou contrato com uma clínica não elimina as exigências da OM quanto à comunicação e à inscrição profissional.' }
      ]
    },
    {
      id: 'two-year-rule',
      title: 'Passo 4. Verificar a regra dos 2 anos de prática',
      content: [
        { kind: 'paragraph', text: 'O filtro-chave da OM é a autonomia do exercício. Se, depois de concluir o diploma médico, tiver pelo menos 2 anos de prática médica real, isso ajuda a obter inscrição como médico com autonomia. A experiência tem de ser comprovada documentalmente: cargo, datas, full-time/part-time, responsabilidades clínicas, assinatura e carimbo do empregador.' },
        { kind: 'paragraph', text: 'Se não tiver 2 anos de prática ou se os documentos forem insuficientes, a OM pode não conceder de imediato uma inscrição autónoma plena. Um percurso possível é a realização de formação geral / período prático equivalente em Portugal até obter autonomia. Isto afeta a possibilidade de observar pacientes autonomamente e assinar atos.' },
        { kind: 'checklist', items: ['Conte a experiência após a data de obtenção do diploma de Medicina, não os anos de estudo', 'Internship/residency pode contar, se tiver sido trabalho clínico médico', 'Voluntariado sem estatuto de médico é geralmente uma prova fraca', 'A declaração deve ser concreta: specialty/department, dates, workload, clinical duties', 'Se trabalhou em vários países, obtenha Good Standing e declarações de experiência de cada um', 'Para qualificações EU/EEA, podem aplicar-se regras de reconhecimento separadas, mas a OM continua a verificar a inscrição e o good standing'] }
      ]
    },
    {
      id: 'submit-in-person',
      title: 'Passo 5. Entregar o pedido presencialmente e aguardar decisão',
      content: [
        { kind: 'paragraph', text: 'A entrega é feita presencialmente na secção regional da OM: Norte, Centro, Sul, Açores ou Madeira — normalmente de acordo com o local de residência/trabalho. Na prática, é melhor escrever previamente um email à secção competente, enviar digitalizações para pré-verificação e pedir uma vaga.' },
        { kind: 'checklist', items: ['Leve originais e cópias de todos os documentos', 'Pague a taxa de abertura do processo/inscrição — 385 €', 'Guarde o comprovativo de pagamento', 'Confirme quando será a Prova de Comunicação Médica e se é necessário entregar documentos adicionais', 'Após aprovação, obtenha o número de cédula profissional', 'Verifique o estado da inscrição no site da OM antes de começar a trabalhar', 'Informe o empregador apenas após a ativação efetiva da inscrição'] },
        { kind: 'warning', text: 'Não inicie clinical acts antes de obter cédula profissional ativa. Trabalhar como médico sem inscrição na OM é um risco para si, para o empregador, para o seguro de responsabilidade civil e para futuros pedidos em Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Candidatura/abertura de processo na Ordem dos Médicos', amountEUR: 385, note: 'Taxa do pedido para médico estrangeiro; confirme o valor atual na secção regional antes de pagar.' },
    { label: 'Reconhecimento do diploma através da universidade/DGES', amountEURMin: 300, amountEURMax: 700, note: 'A tarifa é definida pela instituição de ensino superior escolhida; para Medicina, é frequentemente necessário reconhecimento específico.' },
    { label: 'Traduções, apostila/legalização, cópias notariais', amountEURMin: 100, amountEURMax: 400, note: 'Depende do país de emissão dos documentos e do número de páginas do programa de estudos.' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Sul — FAQ para inscrição de médicos estrangeiros', url: 'https://www.omsul.pt/Portals/0/MQ-FAQS-ENG-OM-Medicos-Estrangeiros.pdf', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Ordem dos Médicos — site oficial e secções regionais', url: 'https://ordemdosmedicos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGES — reconhecimento de graus e diplomas estrangeiros', url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 66/2018 — regime de reconhecimento de graus académicos estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
