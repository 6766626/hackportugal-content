export default {
  editorialVoice: 'hackportugal',
  id: 'rrc-oncologia-sns',
  categoryId: 'healthcare',
  title: 'Percurso oncológico no SNS: Rede de Referenciação Oncológica e TMRG',
  tldr: 'Perante suspeita de cancro, o percurso no SNS começa no Médico de Família: regista a suspeita, pede os exames iniciais e referencia através do CTH/SIGA para um hospital da Rede de Referenciação Oncológica. Para casos urgentes é usada a prioridade P1 / Alerta-Oncológico. Os TMRG legais para a primeira consulta hospitalar são: 30 dias para muito prioritária, 60 para prioritária, 120 para normal. Se o prazo for ultrapassado — reclamação à ERS e no Livro de Reclamações.',
  tags: ['oncologia', 'sns', 'tmrg', 'aima', 'ers'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route',
      title: 'Como funciona o percurso: da MGF à consulta decisão terapêutica',
      content: [
        { kind: 'paragraph', text: 'No SNS, o percurso oncológico não começa com uma marcação feita autonomamente no IPO. A entrada normal é através do Médico de Família / MGF no Centro de Saúde ou através da urgência, se os sintomas forem agudos. A MGF formaliza a suspeita, pede exames básicos e faz a referenciação eletrónica para o hospital através do CTH/SIGA.' },
        { kind: 'paragraph', text: 'Depois, a referenciação segue para o hospital da área de referenciação — o hospital atribuído à sua morada e ao diagnóstico na Rede de Referenciação Hospitalar de Oncologia Médica. Para Lisboa, pode ser, por exemplo, o IPO Lisboa, CHULN / Hospital de Santa Maria, CHLO, ULS São José e outros centros, consoante o tumor, a área de residência e a especialização disponível.' },
        { kind: 'checklist', items: [
          'A MGF regista sintomas de alarme: sangue, perda de peso inexplicada, massa, dor persistente, alterações em sinais, análises anormais',
          'A MGF pede exames iniciais: análises, ecografia, RX, mamografia, colonoscopia, TAC — conforme a situação clínica',
          'Se a suspeita for séria, a referenciação é marcada como muito prioritário / P1 ou através do Alerta-Oncológico, se esse canal estiver disponível na região',
          'O hospital faz a triagem do pedido: aceita, altera a prioridade ou devolve o pedido solicitando dados adicionais',
          'Após a primeira consulta hospitalar, é pedido o staging: TAC, RM, PET, biópsia, anatomia patológica, marcadores',
          'O caso é apresentado em reunião multidisciplinar / consulta de grupo',
          'Depois realiza-se a consulta de decisão terapêutica: explicam ao paciente o plano — cirurgia, quimioterapia, radioterapia, imunoterapia, vigilância ou combinação'
        ] }
      ]
    },
    {
      id: 'rede-referencia',
      title: 'O que é a Rede de Referenciação Oncológica',
      content: [
        { kind: 'paragraph', text: 'A Rede de Referenciação Hospitalar de Oncologia Médica é o mapa oficial dos fluxos de pacientes entre hospitais do SNS. A ideia é simples: nem todos os hospitais devem tratar todos os tipos de cancro. As fases mais simples podem decorrer numa ULS local; os casos complexos seguem para um centro regional ou nacional, incluindo o IPO.' },
        { kind: 'paragraph', text: 'A rede tem em conta o tipo de tumor, o estádio, a necessidade de cirurgia complexa, radioterapia, medicina nuclear, hematologia, transplantes, clinical trials e equipas multidisciplinares. Por isso, “quero mesmo ir para o IPO” nem sempre funciona automaticamente: o médico tem de justificar a referenciação e o hospital tem de a aceitar segundo a rede.' },
        { kind: 'checklist', items: [
          'IPO Lisboa, IPO Porto e IPO Coimbra são institutos oncológicos especializados, mas não são o único ponto de tratamento do cancro',
          'CHULN / Hospital de Santa Maria trata muitos casos oncológicos e tem equipas de oncologia, cirurgia e radioterapia',
          'ULS e hospitais centrais podem fazer diagnóstico, cirurgia, quimioterapia ou follow-up mais perto de casa',
          'O paciente pode ser transferido entre hospitais se for necessária tecnologia ou uma equipa que não exista na ULS inicial',
          'A frase certa para o médico: “pode referenciar como suspeita oncológica / prioridade P1 se clinicamente indicado?”',
          'Para uma segunda opinião no SNS, normalmente é necessário um novo pedido / referenciação, e não apenas telefonar para outro hospital'
        ] },
        { kind: 'warning', text: 'A Rede de Referenciação não é um seguro privado nem uma escolha livre de qualquer hospital. Mas, se houver fundamento clínico — tumor raro, cirurgia complexa, inexistência do tratamento necessário na ULS local — peça à MGF ou ao hospital specialist que o indique claramente no referral.' }
      ]
    },
    {
      id: 'tmrg',
      title: 'TMRG: que prazos pode exigir',
      content: [
        { kind: 'paragraph', text: 'TMRG significa Tempos Máximos de Resposta Garantidos, os prazos máximos garantidos de resposta no SNS para cuidados programados. Não contam “a partir do momento em que se assustou com os sintomas”, mas sim a partir do registo do pedido correto no sistema do SNS: por exemplo, referral da MGF no CTH/SIGA ou hospital order.' },
        { kind: 'checklist', items: [
          'Primeira consulta de especialidade hospitalar muito prioritária: até 30 dias de calendário',
          'Primeira consulta de especialidade hospitalar prioritária: até 60 dias de calendário',
          'Primeira consulta de especialidade hospitalar normal: até 120 dias de calendário',
          'Perante suspeita de cancro, o médico deve justificar a prioridade clinicamente; a palavra “cancro” por si só não garante P1 automático',
          'P1 / Alerta-Oncológico é um canal acelerado prático para suspeita oncológica, mas, juridicamente, confirme que prioridade consta no SIGA',
          'Se a triagem hospitalar baixou a prioridade, peça uma explicação por escrito ou uma reavaliação através da MGF',
          'Na urgência, os TMRG de consulta programada não se aplicam: se houver sinais de alarme, deve ir à urgência ou ligar SNS 24 / 808 24 24 24'
        ] },
        { kind: 'warning', text: 'Não espere 30 dias em silêncio se os sintomas piorarem: hemorragia, icterícia, défice neurológico, falta de ar intensa, obstrução intestinal, fraqueza súbita, febre alta durante tratamento — isto é motivo para urgência / 112, não para uma discussão sobre TMRG.' }
      ]
    },
    {
      id: 'documents',
      title: 'O que preparar antes da visita à MGF ou ao hospital',
      content: [
        { kind: 'paragraph', text: 'Em oncologia, muitas vezes perde-se tempo não por falta de médico, mas por dossier incompleto: exames antigos, ausência do texto do relatório, imagens apenas numa aplicação privada, falta de informação sobre medicação. Reúna tudo antecipadamente e leve em papel + PDF.' },
        { kind: 'checklist', items: [
          'Número de utente SNS',
          'NIF e documento de identificação: autorização de residência, Cartão de Cidadão, passaporte ou registo UE',
          'Lista de sintomas com datas: quando começou, o que está a piorar, peso, temperatura, dor, hemorragia',
          'Todas as análises, relatórios de ecografia / TAC / RM / mamografia / colonoscopia',
          'Imagens dos exames em CD, USB ou por link, se a clínica privada disponibilizar acesso',
          'Resultados de biópsia / anatomia patológica, se já existirem',
          'Lista de medicamentos: anticoagulantes, hormonas, imunossupressores, suplementos',
          'Alergias, doenças crónicas, cirurgias, história familiar de cancro',
          'Número de telefone de contacto que atende realmente chamadas em português',
          'Se não fala bem português — intérprete ou uma nota previamente escrita em PT'
        ] }
      ]
    },
    {
      id: 'if-delayed',
      title: 'Se a referenciação ficou bloqueada ou o prazo TMRG foi ultrapassado',
      content: [
        { kind: 'paragraph', text: 'A primeira ação não é reclamar, mas verificar o estado. Peça no Centro de Saúde uma impressão ou confirmação de que o referral foi mesmo enviado, com data, specialty, hospital e priority. Problema frequente: o pedido foi devolvido ao médico, está à espera de exames adicionais ou o telefone do paciente não atende.' },
        { kind: 'substeps', items: [
          { id: 'check-referral', title: '1. Verificar o pedido no Centro de Saúde', content: [
            { kind: 'checklist', items: [
              'Data de envio do referral',
              'Especialidade: Oncologia Médica, Cirurgia, Gastro, Pneumologia, Ginecologia, etc.',
              'Hospital de destino',
              'Prioridade: muito prioritária / prioritária / normal',
              'Se existe nota clínica com suspeita oncológica',
              'Se o pedido foi devolvido pela triagem hospitalar'
            ] }
          ] },
          { id: 'ask-retriage', title: '2. Pedir retriagem ou novo referral', content: [
            { kind: 'paragraph', text: 'Se surgiram novos sintomas ou um exame privado confirmou a suspeita, a MGF pode acrescentar dados e pedir retriagem. Importante: a frase “tenho medo” é mais fraca do que um concreto “perda de 8 kg em 2 meses + anemia + sangue nas fezes + colonoscopia com lesão suspeita”.' }
          ] },
          { id: 'complain', title: '3. Reclamar se o TMRG foi ultrapassado', content: [
            { kind: 'checklist', items: [
              'Apresente uma reclamação no Livro de Reclamações físico ou eletrónico do hospital / ULS',
              'Indique a data do referral, specialty, prioridade e TMRG que foi ultrapassado',
              'Anexe provas: SMS, cartas, impressões, exames',
              'Apresente separadamente uma reclamação à ERS — Entidade Reguladora da Saúde',
              'Peça não uma compensação, mas uma ação concreta: marcação de consulta / reavaliação da prioridade / transferência para outra unidade'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Uma reclamação à ERS não substitui cuidados médicos. Se o estado estiver a piorar rapidamente, recorra em paralelo à urgência. Em oncologia, a disputa administrativa e a urgência clínica devem avançar ao mesmo tempo.' }
      ]
    },
    {
      id: 'private-parallel',
      title: 'É possível acelerar através do setor privado',
      content: [
        { kind: 'paragraph', text: 'Sim, muitos pacientes fazem parte do diagnóstico privately: colonoscopia, RM, PET, biópsia, second opinion. Isto pode acelerar os dados factuais para a MGF e a triagem hospitalar, mas não cria um direito automático a tratamento num IPO específico. Para que um resultado privado “funcione” no SNS, é necessário relatório médico e, idealmente, imagens digitais.' },
        { kind: 'checklist', items: [
          'Peça não só a imagem, mas também relatório médico assinado',
          'Para biópsia, obtenha o relatório completo de anatomia patológica',
          'Pergunte se é possível entregar lâminas / blocos para revisão no SNS',
          'Leve os resultados à MGF e peça para anexar ao pedido CTH/SIGA',
          'Se o médico privado escrever uma carta, peça que indique suspected diagnosis, ICD/termos PT e urgency',
          'Não inicie tratamento privately sem perceber se o SNS aceitará o esquema já iniciado e onde será feito o follow-up'
        ] },
        { kind: 'warning', text: 'O diagnóstico privado é útil, mas pode custar centenas de euros e nem sempre é coberto pelo seguro em caso de pre-existing condition. Antes do exame, confirme copagamento, autorização prévia e prazo de emissão do relatório.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultas e tratamento no percurso SNS com número de utente', amountEUR: 0, note: 'As taxas moderadoras no SNS foram em grande parte eliminadas; o percurso oncológico através do SNS não deve exigir pagamento da consulta.' },
    { label: 'Second opinion privada com oncologista', amountEURMin: 80, amountEURMax: 200, note: 'Valor indicativo no mercado privado; o preço depende da clínica e do médico, e o seguro pode cobrir parcialmente.' },
    { label: 'RM / TAC / colonoscopia privada sem cobertura', amountEURMin: 150, amountEURMax: 800, note: 'O intervalo é amplo; peça sempre orçamento e prazo do relatório antes da marcação.' }
  ],
  sources: [
    {
      title: 'SNS — Rede de Referenciação Hospitalar de Oncologia Médica',
      url: 'https://www.sns.gov.pt/wp-content/uploads/2017/08/RRH-Oncologia-Médica.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal — Tempos Máximos de Resposta Garantidos (TMRG)',
      url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/tempos-maximos-de-resposta-garantidos-tmrg',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS — Reclamações dos utentes dos serviços de saúde',
      url: 'https://www.ers.pt/pt/utentes/reclamacoes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria n.º 153/2017 — TMRG no SNS',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/153-2017-106988080',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
