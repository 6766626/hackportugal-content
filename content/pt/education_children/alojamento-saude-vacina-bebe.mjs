export default {
  editorialVoice: 'hackportugal',
  id: 'alojamento-saude-vacina-bebe',
  categoryId: 'education_children',
  title: 'Acompanhamento da saúde da criança no SNS: saúde infantil e vacinas',
  tldr: 'Em Portugal, a criança tem acompanhamento gratuito pelo Programa Nacional de Saúde Infantil e Juvenil: pelo menos 13 consultas programadas desde 1 mês até aos 14–18 anos, além das vacinas do Programa Nacional de Vacinação. No Centro de Saúde, isto é gratuito no SNS, incluindo para crianças sem autorização de residência e sem número de utente atribuído: a assistência e a vacinação da criança não devem ser adiadas por causa do estatuto dos pais. Na prática, é melhor tratar logo do utente, do médico de família e do eBoletim.',
  tags: ['sns', 'crianças', 'vacinas', 'utente'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a saúde infantil',
      content: [
        { kind: 'paragraph', text: 'A saúde infantil é o acompanhamento programado da criança no SNS segundo o programa da DGS. As consultas decorrem no Centro de Saúde: o enfermeiro e o médico avaliam crescimento, peso, desenvolvimento, alimentação, visão, audição, fala, sono, segurança, saúde mental do adolescente e riscos familiares.' },
        { kind: 'paragraph', text: 'Isto não substitui a assistência urgente. Se houver febre alta num bebé, dificuldade respiratória, desidratação, convulsões, traumatismo ou agravamento súbito do estado de saúde — ligue para o SNS 24: 808 24 24 24 ou para o 112 em caso de risco de vida.' },
        { kind: 'warning', text: 'As consultas e a vacinação da criança no SNS são gratuitas. A ausência de autorização de residência, NISS ou número de utente permanente não é motivo para recusar cuidados de saúde básicos e vacinas a uma criança. Mas, para marcações e histórico, é melhor obter o número de utente o mais cedo possível.' }
      ]
    },
    {
      id: 'schedule',
      title: 'Calendário de 13 consultas programadas 📅',
      content: [
        { kind: 'paragraph', text: 'A grelha de base da saúde infantil usada pelo SNS24/DGS abrange a criança desde a primeira infância até à maioridade. O Centro de Saúde pode acrescentar consultas se houver prematuridade, doença crónica, atraso do desenvolvimento, riscos familiares ou vacinas em falta.' },
        { kind: 'checklist', items: [
          '1 mês — primeiro controlo principal após o nascimento: peso, alimentação, icterícia, sono, segurança',
          '2 meses — desenvolvimento, alimentação, cólicas, primeira etapa importante de vacinação',
          '4 meses — motricidade, visão/audição de acordo com a idade, alimentação, vacinas',
          '6 meses — introdução da diversificação alimentar, crescimento, desenvolvimento, vacinas',
          '9 meses — sentar/gatinhar, alimentação, prevenção de acidentes',
          '12 meses — marcha/fala de acordo com a idade, alimentação, vacinação',
          '18 meses — fala, comportamento, motricidade, sono, vacinas se necessário',
          '2 anos — desenvolvimento, autonomia, alimentação, dentes, tempo de ecrã',
          '3 anos — fala, comportamento, visão, preparação para Jardim de Infância',
          '5 anos — visão, audição, desenvolvimento, prontidão para a escola, MMR/DTPa-IPV segundo o PNV',
          '6–9 anos — adaptação escolar, crescimento, visão, peso, desporto, segurança',
          '10–13 anos — puberdade, saúde mental, HPV e outras vacinas segundo o PNV',
          '14–18 anos — saúde do adolescente, sono, ansiedade, saúde sexual, dependências, vacinação Td de acordo com a idade'
        ] },
        { kind: 'paragraph', text: 'Se a criança chegou a Portugal sem ter nascido cá, não espere pela idade “certa”. Marque no Centro de Saúde: o médico verificará documentos, crescimento/peso, desenvolvimento e preparará um plano de recuperação das vacinas.' }
      ]
    },
    {
      id: 'vaccination',
      title: 'Vacinas pelo Programa Nacional de Vacinação 💉',
      content: [
        { kind: 'paragraph', text: 'O Programa Nacional de Vacinação, PNV, é o calendário estatal de vacinação da DGS. As vacinas do PNV são gratuitas no SNS. Normalmente são administradas por um enfermeiro no Centro de Saúde, muitas vezes no mesmo período da consulta programada.' },
        { kind: 'checklist', items: [
          'Hepatite B — começa à nascença, depois segue o esquema do PNV',
          'DTPa/IPV/Hib — difteria, tétano, tosse convulsa, poliomielite, Hib na primeira infância e reforços',
          'Vacina pneumocócica — na primeira infância e reforço segundo o PNV',
          'Vacinas meningocócicas — de acordo com a idade e o esquema PNV em vigor',
          'MMR/VASPR — sarampo, papeira, rubéola: normalmente aos 12 meses e aos 5 anos',
          'HPV — na adolescência segundo o PNV; em Portugal está incluída para raparigas e rapazes',
          'Td — tétano/difteria na adolescência e idade adulta',
          'A BCG em Portugal não é administrada automaticamente a todos os recém-nascidos: destina-se a grupos de risco segundo os critérios da DGS'
        ] },
        { kind: 'warning', text: 'O calendário português pode ser diferente do russo, ucraniano, brasileiro ou britânico. Não reinicie o esquema “por precaução”: leve todos os registos, e o Centro de Saúde fará a transposição para o PNV português e indicará as doses em falta.' }
      ]
    },
    {
      id: 'documents',
      title: 'O que levar ao Centro de Saúde',
      content: [
        { kind: 'paragraph', text: 'Dirija-se ao Centro de Saúde da sua área de residência. Se acabou de se mudar e não sabe qual é o seu centro, confirme no SNS24 ou pergunte no Centro de Saúde mais próximo, indicando o código postal.' },
        { kind: 'checklist', items: [
          'Passaporte da criança ou Cartão de Cidadão, se já existir',
          'Número de utente da criança, se já estiver atribuído',
          'NIF da criança, se existir; para a vacinação em si, não deve ser uma barreira',
          'Documento do progenitor ou representante legal',
          'Comprovativo de morada: contrato de arrendamento, factura, atestado de residência da Junta de Freguesia ou outro documento aceite pelo seu Centro de Saúde',
          'Boletim de Saúde Infantil e Juvenil, se tiver sido emitido em Portugal',
          'Boletim de vacinas de outro país: original, fotografia ou PDF',
          'Relatório da maternidade, informação sobre gravidez/parto, prematuridade, alergias e diagnósticos crónicos',
          'Lista de medicamentos que a criança toma regularmente',
          'Contactos do pediatra anterior, se houver historial clínico complexo'
        ] },
        { kind: 'paragraph', text: 'Em Portugal usa-se cada vez mais o eBoletim de Saúde Infantil e Juvenil, mas os registos em papel e certificados estrangeiros continuam a ser úteis. Peça ao enfermeiro para inserir as vacinas antigas no sistema.' }
      ]
    },
    {
      id: 'without-utente',
      title: 'Se ainda não houver utente ou autorização de residência',
      content: [
        { kind: 'paragraph', text: 'A criança deve ser observada e vacinada mesmo antes de a documentação estar totalmente regularizada. No balcão do Centro de Saúde, explique: “criança residente em Portugal, sem número de utente ainda, precisa de vacinação/consulta de saúde infantil”. Peça um registo temporário e marcação para enfermagem.' },
        { kind: 'checklist', items: [
          'Não espere pelo cartão de residência AIMA se chegou a altura da vacina',
          'Peça para tratar do número de utente da criança em paralelo com a marcação',
          'Se o balcão recusar verbalmente, peça o fundamento escrito da recusa e o nome do funcionário',
          'Ligue para o SNS 24: 808 24 24 24 e peça indicação do caminho mais próximo para vacinação infantil',
          'Se mudar de zona, peça para transferir o processo para o novo Centro de Saúde',
          'Se a criança frequenta Creche, Jardim de Infância ou escola, guarde uma cópia do boletim de vacinas: é frequentemente pedido na inscrição',
          'Em caso de sintomas urgentes, procure assistência de acordo com a necessidade clínica, não com o estatuto documental'
        ] },
        { kind: 'warning', text: 'A pediatria privada é conveniente, mas não substitui o PNV público: as vacinas do calendário nacional são mais fáceis e mais correctamente registadas através do SNS, para que a escola e futuros médicos vejam o histórico.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Detalhes práticos para os pais',
      content: [
        { kind: 'checklist', items: [
          'Marque a consulta com antecedência: nas grandes cidades, as vagas para o médico de família são limitadas, mas a vacinação é muitas vezes feita mais rapidamente através da enfermagem',
          'Chegue com margem de tempo: primeiro o balcão, depois o enfermeiro, por vezes o médico',
          'Depois da vacina, confirme qual foi administrada, a série/lote e a data da próxima dose',
          'Peça uma impressão ou registo no boletim se a aplicação/portal não mostrar os dados',
          'Se a criança estiver doente no dia da vacina, a decisão cabe ao enfermeiro ou ao médico; uma constipação ligeira nem sempre é motivo para adiar',
          'Para adolescentes, discuta previamente temas confidenciais: ansiedade, sono, alimentação, saúde sexual, álcool/vapes',
          'Guarde uma fotografia do boletim de vacinas no telemóvel e na cloud',
          'Antes de viagens para fora da UE, confirme com antecedência as vacinas de viagem: podem estar fora do PNV e ser pagas'
        ] },
        { kind: 'paragraph', text: 'Uma estratégia normal para um expatriado: obter o utente, ficar associado ao Centro de Saúde, inserir as vacinas estrangeiras, fazer a consulta mais próxima adequada à idade e receber o plano das doses seguintes em papel ou no eBoletim.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta programada de saúde infantil no SNS', amountEUR: 0, note: 'Gratuita para a criança no Centro de Saúde' },
    { label: 'Vacinas do Programa Nacional de Vacinação', amountEUR: 0, note: 'Gratuitas no SNS segundo o calendário da DGS' },
    { label: 'Pediatra privado', amountEURMin: 45, amountEURMax: 100, note: 'Valor indicativo de mercado; não é necessário para o PNV e depende da clínica/seguro' }
  ],
  sources: [
    {
      title: 'SNS24: saúde infantil e juvenil',
      url: 'https://www.sns24.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS: Programa Nacional de Saúde Infantil e Juvenil',
      url: 'https://www.dgs.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS: Programa Nacional de Vacinação',
      url: 'https://www.dgs.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
