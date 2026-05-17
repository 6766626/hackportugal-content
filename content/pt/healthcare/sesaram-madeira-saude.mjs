export default {
  editorialVoice: 'hackportugal',
  id: 'sesaram-madeira-saude',
  categoryId: 'healthcare',
  title: 'Cuidados de saúde na Madeira e nos Açores: SESARAM, SRS e diferenças face ao SNS',
  tldr: 'A Madeira e os Açores são regiões autónomas: em vez do SNS continental, na prática funcionam sistemas regionais — SESARAM (Madeira) e SRS-Açores. Para viver nas ilhas, é necessário registar-se no Centro de Saúde/Unidade de Saúde local com NIF, documento de permanência e morada. O número de utente pode estar ligado ao RNU nacional, mas o encaminhamento, o médico de família, as referenciações, as análises, os hospitais e os transportes médicos são geridos pela região. A emergência é o 112, mas os tratamentos programados do continente não transitam automaticamente.',
  tags: ['sesaram', 'açores', 'sns', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'Diferença principal: não é o SNS continental',
      content: [
        { kind: 'paragraph', text: 'Em Portugal continental, a saúde é gerida pelo SNS através dos ACES/ULS, hospitais e Centros de Saúde. Na Madeira funciona o Serviço de Saúde da Região Autónoma da Madeira, na prática através do SESARAM, E.P.E.R.A.M. Nos Açores, funciona o Serviço Regional de Saúde dos Açores, com Unidade de Saúde de Ilha e hospitais regionais.' },
        { kind: 'paragraph', text: 'Para o paciente, isto significa o seguinte: você não se limitou a “mudar-se dentro do SNS”. Tem de se inscrever no sistema local, ficar associado a um Centro de Saúde/Unidade de Saúde, actualizar a morada e obter acesso à rede regional de referenciações.' },
        { kind: 'checklist', items: [
          'Madeira: o SESARAM integra hospitais, Centros de Saúde e parte dos cuidados especializados.',
          'Açores: o SRS-Açores funciona por ilhas; os cuidados primários são prestados através da Unidade de Saúde de Ilha.',
          'O número de utente pode continuar a ser o identificador nacional, mas a inscrição local continua a ser necessária.',
          'Ter médico de família no continente não significa ter automaticamente médico de família na Madeira ou nos Açores.',
          'As referenciações para análises, consultas e cirurgias normalmente devem passar pelos cuidados primários locais.',
          'Existem clínicas privadas, mas a escolha é menor do que em Lisboa/Porto; nas ilhas pequenas é mínima.',
          'Se o serviço não existir na ilha, a região organiza a referenciação e, por vezes, o transporte médico.'
        ] }
      ]
    },
    {
      id: 'register-as-resident',
      title: 'Como inscrever-se após a mudança',
      content: [
        { kind: 'paragraph', text: 'Depois da mudança, não espere até ficar doente: dirija-se ao Centro de Saúde local na Madeira ou à Unidade de Saúde de Ilha nos Açores. O objectivo é actualizar a morada, confirmar o direito de acesso ao sistema regional e entrar na lista de médico de família ou da equipa de cuidados primários.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / autorização de residência / certificado de registo de cidadão da UE.',
          'NIF.',
          'Número de utente, se já tiver sido emitido no continente.',
          'Comprovativo de morada: contrato de arrendamento, factura de serviços ou atestado de residência da Junta de Freguesia.',
          'NISS, se existir; normalmente é útil, mas não deve ser uma barreira universal ao acesso ao SNS/SRS.',
          'Contactos: número de telefone português e e-mail.',
          'Lista de diagnósticos crónicos, medicamentos e exames/relatórios recentes da clínica anterior.',
          'Para crianças — boletim de vacinas.'
        ] },
        { kind: 'warning', text: 'Não conte que uma referenciação antiga do continente funcione automaticamente nas ilhas. Muitas vezes, o médico na Madeira/Açores tem de inserir novamente o pedido no sistema regional ou confirmar a necessidade clínica.' }
      ]
    },
    {
      id: 'madeira-sesaram',
      title: 'Madeira: como funciona o SESARAM',
      content: [
        { kind: 'paragraph', text: 'O SESARAM é o principal operador da medicina pública na Madeira. Cobre cuidados primários, cuidados hospitalares, urgência, consultas especializadas e parte do diagnóstico. A maior carga concentra-se no Funchal, pelo que os residentes de outros municípios por vezes têm de se deslocar à capital da região.' },
        { kind: 'checklist', items: [
          'Para questões correntes, dirija-se ao seu Centro de Saúde, não vá logo à urgência.',
          'Em emergência — ligue 112 ou dirija-se ao serviço de urgência.',
          'As consultas de especialidade programadas normalmente exigem referenciação do médico de família/médico dos cuidados primários.',
          'Se vive em Câmara de Lobos, Machico, Ribeira Brava, Calheta, Santana ou Porto Santo, confirme qual é o Centro de Saúde responsável pela sua morada.',
          'Porto Santo tem uma rede limitada: algumas especialidades exigem deslocação à Madeira.',
          'É melhor levar receitas e exames consigo em papel/PDF: a troca de dados com o continente nem sempre é fluida.',
          'Para medicina privada na Madeira, a escolha é melhor no Funchal; fora do Funchal é limitada.'
        ] },
        { kind: 'paragraph', text: 'Dica prática: no momento da inscrição, peça uma impressão ou comprovativo do seu número de utente/inscrição. Será útil na farmácia, numa clínica privada, na marcação de exames e se precisar de explicar o seu estatuto após uma mudança recente.' }
      ]
    },
    {
      id: 'azores-srs',
      title: 'Açores: SRS-Açores e logística insular',
      content: [
        { kind: 'paragraph', text: 'Nos Açores, a saúde está distribuída por 9 ilhas. A porta de entrada para os cuidados primários é a Unidade de Saúde de Ilha. A rede hospitalar concentra-se em três hospitais: Hospital do Divino Espírito Santo de Ponta Delgada em São Miguel, Hospital de Santo Espírito da Ilha Terceira e Hospital da Horta no Faial.' },
        { kind: 'checklist', items: [
          'Em São Miguel e na Terceira, o acesso a especialistas é mais amplo do que nas ilhas pequenas.',
          'Em Santa Maria, Graciosa, São Jorge, Pico, Flores e Corvo, parte dos cuidados exige referenciação inter-ilhas.',
          'As deslocações programadas para consultas/cirurgias são tratadas através do SRS-Açores, e não directamente pelo SNS continental.',
          'Atrasos meteorológicos são um factor real: mantenha uma reserva de medicamentos para, pelo menos, 2–4 semanas.',
          'Se tem uma doença crónica, pergunte antecipadamente onde fica o especialista mais próximo e como se processa a deslocação.',
          'Para gravidez, oncologia, diálise, cardiologia e diagnóstico complexo, confirme o percurso antes de se mudar para uma ilha pequena.',
          'O seguro privado é útil, mas não substitui o SRS: nas ilhas pequenas pode simplesmente não existir médico privado da especialidade necessária.'
        ] },
        { kind: 'warning', text: 'Nos Açores, a distância não se mede em quilómetros, mas em voos e meteorologia. Se está a escolher uma ilha para viver com um diagnóstico sério, verifique primeiro a disponibilidade efectiva dos cuidados necessários, e não apenas a existência de um arrendamento bonito.' }
      ]
    },
    {
      id: 'moving-from-mainland',
      title: 'Se vier do continente ou se mudar entre ilhas',
      content: [
        { kind: 'paragraph', text: 'Antes da mudança, reúna uma pasta médica. Os sistemas portugueses são cada vez mais digitais, mas a troca de informação entre o continente, a Madeira e os Açores pode ser incompleta. O médico no novo local tomará decisões mais rapidamente se você tiver os documentos consigo.' },
        { kind: 'checklist', items: [
          'Peça ao antigo médico de família um resumo clínico.',
          'Descarregue as análises recentes, exames de imagem, notas de alta e relatórios operatórios.',
          'Verifique as receitas sem papel activas e o respectivo prazo de validade.',
          'Leve uma lista de medicamentos com dosagens em português ou inglês.',
          'Se está à espera de consulta/cirurgia no continente, confirme se a lista de espera se mantém após a mudança de região.',
          'Depois de alterar a morada, actualize os dados nas Finanças e no Centro de Saúde/Unidade de Saúde.',
          'Se tem seguro privado, confirme a rede de providers especificamente na Madeira/Açores, e não “Portugal” no geral.'
        ] },
        { kind: 'paragraph', text: 'Para turismo ou uma estadia curta, a assistência de emergência está disponível através do 112. Mas para vida residente — médico de família, receitas crónicas, referenciações e acompanhamento de crianças — é necessária inscrição local.' }
      ]
    },
    {
      id: 'private-and-emergency',
      title: 'Medicina privada e situações de emergência',
      content: [
        { kind: 'paragraph', text: 'A medicina privada nas ilhas cobre parte das consultas rápidas, estomatologia, fisioterapia, dermatologia, ginecologia e diagnóstico básico. Mas nem sempre cobre cuidados hospitalares complexos, cuidados intensivos, partos de alto risco ou especialidades raras.' },
        { kind: 'checklist', items: [
          'Emergência: 112.',
          'Consulta médica por telefone: SNS 24 — 808 24 24 24; o operador pode encaminhar para a urgência ou para um médico.',
          'Para casos ligeiros, ligue primeiro para o SNS 24 ou dirija-se aos cuidados primários: isto reduz o risco de espera desnecessária na urgência.',
          'Na Madeira, a principal urgência pública concentra-se no SESARAM.',
          'Nos Açores, o percurso depende da ilha: Unidade de Saúde de Ilha, hospital ou evacuação.',
          'Seguros como Médis, Multicare, AdvanceCare, Allianz e outros são úteis, mas confirme as clínicas concretas no Funchal/Ponta Delgada/Angra/Horta.',
          'Se o médico falar em deslocação, peça por escrito: referenciação, data, local, quem paga o transporte e se é necessária autorização prévia.'
        ] },
        { kind: 'warning', text: 'Não adie a inscrição até ao primeiro episódio agudo. Na urgência será atendido, mas receitas crónicas, médico de família e referenciações sem inscrição local transformam-se numa missão complicada.' }
      ]
    }
  ],
  costs: [
    { label: 'Inscrição no Centro de Saúde / Unidade de Saúde', amountEUR: 0, note: 'A inscrição pública de residente é normalmente gratuita; podem pedir documentos de morada e de estatuto.' },
    { label: 'Seguro privado básico', amountEURMin: 25, amountEURMax: 80, note: 'Referência mensal por adulto; confirme a rede na Madeira/Açores antes de comprar.' },
    { label: 'Consulta privada sem seguro', amountEURMin: 50, amountEURMax: 100, note: 'Ordem de preços típica; especialistas e consultas urgentes podem ser mais caros.' }
  ],
  sources: [
    {
      title: 'SESARAM Madeira — portal oficial do serviço regional de saúde',
      url: 'https://www.sesaram.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Governo dos Açores — Direção Regional da Saúde',
      url: 'https://portal.azores.gov.pt/web/drs',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'ERS — direitos e acesso dos utentes aos serviços de saúde',
      url: 'https://www.ers.pt/pt/utentes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ITIJ — análise do sistema de saúde de Portugal e da Madeira',
      url: 'https://www.itij.com/latest/long-read/destination-spotlight-review-portugal-and-madeiras-healthcare-system',
      kind: 'news',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
