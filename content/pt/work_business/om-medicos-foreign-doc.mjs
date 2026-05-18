export default {
  editorialVoice: 'hackportugal',
  id: 'om-medicos-foreign-doc',
  categoryId: 'work_business',
  title: 'Ordem dos Médicos: inscrição de médico estrangeiro em Portugal',
  tldr: 'Para trabalhar como médico em Portugal, um diploma estrangeiro não basta: Esclarecer: «Para diplomas/qualificações de fora da UE/EEE/Suíça, normalmente é primeiro necessário o reconhecimento académico de Medicina ao abrigo do DL 66/2018 através da DGES/de uma universidade portuguesa. Para qualificações médicas da UE/EEE/Suíça, pode aplicar-se um regime separado de reconhecimento profissional ao abrigo da Lei 9/2009/Directive 2005/36/EC — confirme os requisitos da OM para esta categoria».. A taxa base de candidatura é 385 €. A OM verifica documentos, Good Standing e, em regra, exige a Prova de Comunicação Médica. Para a inscrição autónoma plena, a experiência é importante: se, após o diploma, não houver pelo menos 2 anos de prática médica, a pessoa pode ser encaminhada para formação geral/um percurso prático até à autonomia.',
  tags: ['médicos', 'ordem', 'dges', 'trabalho'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'scope',
      title: 'O que permite a inscrição na Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'A Ordem dos Médicos é a associação profissional obrigatória para médicos em Portugal. Esclarecer: «Para a prática médica em Portugal, incluindo telemedicina para pacientes/prestadores no sistema português, é necessária inscrição ativa na OM. Para telemedicina transfronteiriça a partir de Portugal, confirme também separadamente o direito do país do paciente/empregador, o seguro malpractice e as regras portuguesas».' },
        { kind: 'paragraph', text: 'O processo é composto por dois blocos diferentes: reconhecimento académico do diploma através da DGES/universidade e inscrição profissional na OM. O reconhecimento do diploma, por si só, não confere o direito de exercer.' },
        { kind: 'checklist', items: ['Adequado para médicos com diploma de Medicina obtido fora de Portugal', 'É necessário NIF e documento de identificação válido', 'Para não-UE, normalmente é necessário estatuto legal em Portugal ou fundamento para trabalhar', 'A OM recebe documentos presencialmente na secção regional', 'A submissão base custa 385 €', 'A língua portuguesa é praticamente obrigatória: a comunicação com o paciente é avaliada separadamente'] }
      ]
    },
    {
      id: 'recognition-dges',
      title: 'Passo 1. Reconhecer o diploma médico através da DGES',
      content: [
        { kind: 'paragraph', text: 'Substituir por: «Para médicos com diploma obtido fora da UE/EEE/Suíça, o percurso padrão começa normalmente pelo reconhecimento académico ao abrigo do Decreto-Lei 66/2018; para Medicina, na maioria dos casos é necessário reconhecimento específico. Se a qualificação foi obtida na UE/EEE/Suíça, confirme primeiro a via profissional/automatic recognition ao abrigo da Lei 9/2009 junto da OM».: uma universidade portuguesa com faculdade de medicina compara o seu programa com o Mestrado Integrado em Medicina.' },
        { kind: 'checklist', items: ['Escolha o tipo de reconhecimento no portal da DGES: na maioria dos casos, reconhecimento específico', 'Submeta o diploma, o suplemento com horas/ECTS, o programa das unidades curriculares e as classificações', 'Faça apostila/legalização, se o documento tiver sido emitido fora da UE e não houver dispensa', 'Prepare tradução para português, se os documentos não estiverem em PT/EN/ES/FR conforme exigência da universidade', 'Pague a taxa da universidade: o valor depende da instituição, frequentemente algumas centenas de euros', 'Acompanhe o email da universidade: podem pedir syllabi adicionais ou entrevista', 'Obtenha a certidão de reconhecimento — é precisamente esse documento que a OM pedirá depois'] },
        { kind: 'warning', text: 'Não submeta à OM apenas o diploma estrangeiro original. Sem o reconhecimento português do grau de Medicina, o processo normalmente não é considerado pronto para inscrição.' }
      ]
    },
    {
      id: 'documents',
      title: 'Passo 2. Reunir o dossier para a Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'A OM exige submissão presencial e verifica não só o diploma, mas também a idoneidade profissional: identidade, ausência de limitações disciplinares, Good Standing e experiência.' },
        { kind: 'checklist', items: ['Documento de identificação: passaporte, Cartão de Cidadão ou autorização de residência', 'NIF', 'Certidão de reconhecimento do grau académico em Medicina em Portugal', 'Diploma original e suplemento — é melhor ter também tradução', 'Certificado de Registo Criminal do país/países de residência, válido à data da submissão', 'Certificate of Good Standing / estatuto profissional da ordem médica do país onde esteve inscrito', 'Comprovativo de experiência: contratos de trabalho, declarações de hospitais, licença, payroll/contribuições sociais, descrição de funções', 'CV em português ou inglês', 'Fotografia e formulário da OM preenchido', 'Comprovativo de morada e contactos em Portugal'] },
        { kind: 'warning', text: 'As declarações de Good Standing e o registo criminal têm normalmente um prazo de validade curto. Não as peça muitos meses antes da marcação na OM: no momento da submissão, podem pedir documentos novos.' }
      ]
    },
    {
      id: 'exam-language',
      title: 'Passo 3. Realizar a Prova de Comunicação Médica',
      content: [
        { kind: 'paragraph', text: 'Para médicos estrangeiros, a OM aplica uma avaliação de comunicação médica — Prova de Comunicação Médica. Não é um exame sobre toda a medicina como numa universidade, mas uma avaliação da capacidade de comunicar em segurança com o paciente e com colegas no contexto clínico português.' },
        { kind: 'checklist', items: ['Prepare português pelo menos ao nível de uma consulta confiante com o paciente', 'Treine anamnese, queixas, alergias, medicamentos, informed consent', 'Saiba explicar diagnóstico, plano de tratamento e riscos em português simples', 'Reveja termos do SNS: centro de saúde, urgência, referenciação, receita, baixa médica', 'Confirme se a prova é necessária no seu caso: a OM decide com base no dossier, no país de formação e na experiência profissional', 'Não conte trabalhar apenas em inglês: para a licença, a segurança da comunicação em Portugal é importante'] },
        { kind: 'warning', text: 'Ter diploma, estatuto IFICI/NHR, proposta de trabalho ou contrato com uma clínica não elimina as exigências da OM relativas à comunicação e à inscrição profissional.' }
      ]
    },
    {
      id: 'two-year-rule',
      title: 'Passo 4. Verificar a regra dos 2 anos de prática',
      content: [
        { kind: 'paragraph', text: 'O filtro essencial da OM é a autonomia da prática. Se, após concluir o diploma médico, tiver pelo menos 2 anos de prática médica real, isso ajuda a obter inscrição como médico com autonomia. A experiência deve ser comprovada documentalmente: cargo, datas, full-time/part-time, funções clínicas, assinatura e carimbo do empregador.' },
        { kind: 'paragraph', text: 'Se não tiver 2 anos de prática ou se os documentos forem fracos, a OM pode não conceder de imediato uma inscrição autónoma plena. Um percurso possível é a realização de formação geral / período prático equivalente em Portugal até obter autonomia. Isto afeta a possibilidade de atender pacientes de forma independente e assinar atos.' },
        { kind: 'checklist', items: ['Conte a experiência após a data de obtenção do diploma de Medicina, e não os anos de estudo', 'Internship/residency pode contar, se tiver sido trabalho clínico médico', 'Voluntariado sem estatuto de médico é, em regra, uma prova fraca', 'A declaração deve ser concreta: specialty/department, dates, workload, clinical duties', 'Se trabalhou em vários países, obtenha Good Standing e declarações de experiência de cada um', 'Colocar num bloco separado no início do guia: «EU/EEA/Swiss route: se a qualificação médica de base foi obtida na UE/EEE/Suíça e cumpre a Directive 2005/36/EC, o procedimento pode decorrer como reconhecimento profissional através da OM/autoridade competente, com documentos de conformity, good standing e direito de exercer, e não como reconhecimento específico DGES comum».'] }
      ]
    },
    {
      id: 'submit-in-person',
      title: 'Passo 5. Submeter o pedido presencialmente e aguardar a decisão',
      content: [
        { kind: 'paragraph', text: 'A submissão é feita presencialmente na secção regional da OM: Norte, Centro, Sul, Açores ou Madeira — normalmente de acordo com o local de residência/trabalho. Na prática, é melhor escrever antecipadamente um email para a secção adequada, enviar scans para pré-verificação e pedir uma vaga.' },
        { kind: 'checklist', items: ['Leve os originais e cópias de todos os documentos', 'Pague a taxa de abertura do processo/inscrição — 385 €', 'Guarde o comprovativo de pagamento', 'Confirme quando será a Prova de Comunicação Médica e se é necessário entregar documentos adicionais', 'Após aprovação, receba o número de cédula profissional', 'Verifique o estado da inscrição no site da OM antes de começar a trabalhar', 'Informe o empregador apenas após a ativação efetiva da inscrição'] },
        { kind: 'warning', text: 'Não inicie atos clínicos antes de obter a cédula profissional ativa. Trabalhar como médico sem inscrição na OM é um risco para si, para o empregador, para o seguro de responsabilidade civil e para futuros pedidos em Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Submissão/abertura de processo na Ordem dos Médicos', amountEUR: 385, note: 'Taxa do pedido de médico estrangeiro; confirme o valor atualizado na secção regional antes de pagar.' },
    { label: 'Reconhecimento do diploma através de universidade/DGES', amountEURMin: 300, amountEURMax: 700, note: 'A tabela é definida pela universidade escolhida; para Medicina, é frequentemente necessário reconhecimento específico.' },
    { label: 'Traduções, apostila/legalização, cópias notariais', amountEURMin: 100, amountEURMax: 400, note: 'Depende do país de emissão dos documentos e do número de páginas do programa de estudos.' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Sul — FAQ para inscrição de médicos estrangeiros', url: 'https://www.omsul.pt/Portals/0/MQ-FAQS-ENG-OM-Medicos-Estrangeiros.pdf', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Ordem dos Médicos — site oficial e secções regionais', url: 'https://ordemdosmedicos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGES — reconhecimento de graus e diplomas estrangeiros', url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 66/2018 — regime de reconhecimento de graus académicos estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
