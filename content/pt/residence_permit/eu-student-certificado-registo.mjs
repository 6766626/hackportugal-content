export default {
  editorialVoice: 'hackportugal',
  id: 'eu-student-certificado-registo',
  categoryId: 'residence_permit',
  title: 'Estudante UE/Erasmus: Certificado de Registo em vez do visto D4',
  tldr: 'Um cidadão da UE/EEE/Suíça que venha estudar em Portugal ao abrigo do Erasmus ou num curso completo não precisa de visto D4 nem de autorização de residência através da AIMA. Nos primeiros 3 meses pode viver sem registo; depois, no prazo de 30 dias, deve pedir o Certificado de Registo de Cidadão da União Europeia na Câmara Municipal da área de residência. A taxa é de 15 €. Normalmente são necessários passaporte/ID, comprovativo de matrícula, morada, EHIC/seguro e declaração de meios de subsistência.',
  tags: ['ue', 'erasmus', 'crue', 'estudante'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'not-d4',
      title: 'Essencial: não é D4 nem AIMA',
      content: [
        { kind: 'paragraph', text: 'Se tem nacionalidade da UE, EEE ou Suíça, beneficia da liberdade de circulação. Para estudar em Portugal não se pede o visto nacional de estudante D4: o D4 é para nacionais de países terceiros.' },
        { kind: 'paragraph', text: 'O seu documento de residência após os primeiros 3 meses é o Certificado de Registo de Cidadão da União Europeia, muitas vezes abreviado como CRUE ou Certificado de Registo. Não é uma autorização de residência nem um cartão de autorização de residência.' },
        { kind: 'checklist', items: [
          'Até 90 dias: pode permanecer em Portugal sem registo separado enquanto cidadão da UE/EEE/Suíça',
          'Se tenciona viver mais de 3 meses: deve registar-se',
          'Prazo: no prazo de 30 dias após o termo dos primeiros 3 meses, ou seja, na prática até ao fim do 4.º mês',
          'Onde: Câmara Municipal da área de residência; a AIMA não é necessária para este certificado',
          'A Junta de Freguesia é normalmente necessária para o atestado de residência ou comprovativo de morada, mas o próprio Certificado de Registo é normalmente emitido pela Câmara Municipal',
          'A taxa do Certificado de Registo é de 15 €',
          'O certificado é normalmente válido por 5 anos ou pelo período de residência declarado, se este for inferior'
        ] },
        { kind: 'warning', text: 'Não peça o D4 se é cidadão da UE/EEE/Suíça. O visto consular D4 e a marcação na AIMA dizem respeito a estudantes de países terceiros; para UE/Erasmus é uma via desnecessária e incorrecta.' }
      ]
    },
    {
      id: 'when-to-register',
      title: 'Quando pedir o Certificado de Registo',
      content: [
        { kind: 'paragraph', text: 'A regra da Lei 37/2006: um cidadão da UE tem direito a residir em Portugal por mais de 3 meses se estiver a estudar, tiver cobertura médica e meios de subsistência suficientes para não se tornar uma sobrecarga injustificada para o sistema social.' },
        { kind: 'checklist', items: [
          'Dia 1–90: permanência legal sem registo separado',
          'Dia 91–120: janela para pedir o Certificado de Registo',
          'Se veio para um semestre Erasmus com duração superior a 3 meses — o certificado é necessário',
          'Se o programa durar exactamente até 90 dias — o certificado normalmente não é exigido',
          'Se ficar depois do Erasmus para estágio, trabalho ou segundo semestre — registe-se até ao fim do 4.º mês',
          'Se mudar de município, confirme na nova Câmara Municipal se é necessário actualizar a morada'
        ] },
        { kind: 'warning', text: 'A Lei 37/2006 prevê uma coima pela falta de pedido do Certificado de Registo dentro do prazo legal. Na prática, muitas vezes os estudantes são primeiro orientados a tratar do documento, mas não convém contar com isso.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para estudante UE/Erasmus',
      content: [
        { kind: 'paragraph', text: 'A lista varia um pouco de município para município. Antes da visita, consulte o site da sua Câmara Municipal ou escreva ao atendimento. Mas o conjunto básico para estudante é quase sempre o mesmo.' },
        { kind: 'checklist', items: [
          'Passaporte ou national ID card do país da UE/EEE/Suíça',
          'NIF, se já tiver; formalmente não é uma condição do direito de residência, mas os municípios pedem-no frequentemente para a marcação/recibo',
          'Comprovativo de morada em Portugal: contrato de arrendamento, declaração do senhorio, factura de serviços ou atestado de residência da Junta de Freguesia',
          'Documento de matrícula: declaração de matrícula, acceptance letter, Erasmus learning agreement ou declaração da universidade',
          'EHIC — Cartão Europeu de Seguro de Doença — ou seguro de saúde privado',
          'Declaração de meios de subsistência suficientes: muitas vezes é uma simples declaração sob compromisso de honra; por vezes pedem extracto bancário ou comprovativo de bolsa',
          'Comprovativo do pagamento da taxa de 15 €, se a Câmara pedir pagamento antecipado',
          'Contactos em Portugal: telefone e email'
        ] },
        { kind: 'paragraph', text: 'Para “meios de subsistência suficientes”, a lei não fixa um montante específico para estudante da UE. Na prática, é sensato ter comprovativo de bolsa Erasmus, apoio dos pais ou saldo bancário que cubra habitação e despesas. Como referência: o SMN em 2026 é de 920 € por mês, mas este não é um limiar oficial para o CRUE.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como pedir: Câmara, marcação e emissão',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-camara', title: '1. Encontre a sua Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Dirija-se à Câmara Municipal da sua morada efectiva, não à da universidade, se forem municípios diferentes. Por exemplo, se vive em Almada e estuda em Lisboa — normalmente deve tratar do pedido na Câmara Municipal de Almada.' }
          ] },
          { id: 'book-or-walk-in', title: '2. Confirme o formato do atendimento', content: [
            { kind: 'paragraph', text: 'Em cidades pequenas, muitas vezes atendem sem marcação. Em Lisboa, Porto, Cascais, Oeiras e outros municípios com maior procura, pode ser obrigatória a marcação online ou por telefone.' }
          ] },
          { id: 'bring-originals', title: '3. Leve originais e cópias', content: [
            { kind: 'paragraph', text: 'O funcionário confirmará a identidade, a morada e o fundamento da residência. Na maioria dos casos, o requerimento é preenchido no local. Se a morada for comprovada através da Junta de Freguesia, obtenha antecipadamente o atestado de residência.' }
          ] },
          { id: 'pay-fee', title: '4. Pague 15 €', content: [
            { kind: 'paragraph', text: 'A taxa pela emissão do Certificado de Registo é de 15 €. Normalmente pode pagar com cartão ou Multibanco, mas em municípios pequenos é melhor levar dinheiro.' }
          ] },
          { id: 'receive-certificate', title: '5. Receba o certificado em papel', content: [
            { kind: 'paragraph', text: 'O CRUE é muitas vezes emitido no próprio dia. É um documento/certificado em papel A4 que deve guardar: pode ser pedido pelo banco, empregador, Finanças, SNS, serviços da universidade ou senhorio.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-certificate',
      title: 'O que fazer depois de obter o certificado',
      content: [
        { kind: 'paragraph', text: 'O Certificado de Registo resolve a questão da residência legal enquanto cidadão da UE, mas não substitui os restantes registos práticos do dia-a-dia.' },
        { kind: 'checklist', items: [
          'Guarde o original e uma digitalização do CRUE na nuvem',
          'Comunique à universidade a morada portuguesa, se tal for exigido para Erasmus/bolsa',
          'Registe ou actualize a morada do NIF nas Finanças, se passou a ser residente fiscal',
          'Obtenha o número de utente no SNS no Centro de Saúde, se pretende usar o sistema público de saúde',
          'Trate do NISS se for trabalhar com contrato de trabalho ou recibos verdes',
          'Se encontrou trabalho, o CRUE continua válido: não é necessário trocá-lo por uma “autorização de residência de trabalho”',
          'Após 5 anos de residência legal e contínua, pode pedir o Certificado de Residência Permanente para cidadão da UE/EEE/Suíça'
        ] },
        { kind: 'warning', text: 'O CRUE não é um Cartão de Cidadão português e não confere nacionalidade portuguesa automaticamente. É apenas o registo do direito de residência de um cidadão da UE em Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de Registo de Cidadão da União Europeia', amountEUR: 15, note: 'Taxa oficial pela primeira emissão do CRUE' },
    { label: 'Atestado de residência na Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Depende da Junta; por vezes é gratuito, por vezes custa alguns euros' },
    { label: 'Seguro privado, se não tiver EHIC', amountEURMin: 15, amountEURMax: 50, note: 'Referência para um plano básico de estudante/saúde por mês' }
  ],
  sources: [
    {
      title: 'AIMA: Certificado de Registo para nacionais da UE',
      url: 'https://aima.gov.pt/pt/nacionais-ue-e-familiares/nacionais-ue/certificado-de-registo-para-nacionais-ue',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: Certificado de residência permanente para cidadão da UE/EEE/Suíça',
      url: 'https://www2.gov.pt/servicos/pedir-o-certificado-de-residencia-permanente-para-cidadao-da-ue/eee/suica',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 37/2006: regime jurídico de entrada, permanência e residência de cidadãos da UE e familiares',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34517175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
