export default {
  editorialVoice: 'hackportugal',
  id: 'rrc-oncologia-sns',
  categoryId: 'healthcare',
  title: 'Percurso oncológico no SNS: Rede de Referenciação Oncológica e TMRG',
  tldr: 'Em caso de suspeita de cancro, o percurso no SNS começa no Médico de Família: este regista a suspeita, prescreve exames iniciais e referencia através do CTH/SIGA para um hospital da Rede de Referenciação Oncológica. Para casos urgentes, usa-se a prioridade P1 / Alerta-Oncológico. Os TMRG legais para a primeira consulta hospitalar em doença oncológica suspeita/confirmada têm apenas dois níveis: 7 dias para muito prioritária e 30 dias para prioritária (Portaria 137/2026/1, em vigor desde 2 de abril de 2026). Se o prazo for ultrapassado — reclamação à ERS e no Livro de Reclamações.',
  tags: ['oncologia', 'sns', 'tmrg', 'aima', 'ers'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route',
      title: 'Como funciona o percurso: da MGF à consulta decisão terapêutica',
      content: [
        { kind: 'paragraph', text: 'No SNS, o percurso oncológico não começa com uma marcação autónoma no IPO. A entrada normal é através do Médico de Família / MGF no Centro de Saúde ou através da urgência, se os sintomas forem agudos. A MGF formaliza a suspeita, prescreve exames básicos e faz a referenciação eletrónica para o hospital através do CTH/SIGA.' },
        { kind: 'paragraph', text: 'Depois, a referenciação segue para o hospital da área de referenciação — o hospital atribuído à sua morada e ao seu diagnóstico na Rede de Referenciação Hospitalar de Oncologia Médica. Para Lisboa, pode ser, por exemplo, o IPO Lisboa, CHULN / Hospital de Santa Maria, CHLO, ULS São José e outros centros, consoante o tumor, a área de residência e a especialização disponível.' },
        { kind: 'checklist', items: [
          'A MGF regista sintomas de alarme: sangue, perda de peso inexplicada, massa/tumor, dor persistente, alterações em sinais, análises patológicas',
          'A MGF prescreve exames iniciais: análises, ecografia, RX, mamografia, colonoscopia, TAC — conforme a situação clínica',
          'Se a suspeita for grave, a referenciação é marcada como muito prioritário / P1 ou através de Alerta-Oncológico, se esse canal estiver disponível na região',
          'O hospital faz a triagem do pedido: aceita, altera a prioridade ou devolve o pedido solicitando dados adicionais',
          'Depois da primeira consulta hospitalar, é prescrito o staging: TAC, RM, PET, biópsia, anatomia patológica, marcadores',
          'O caso é apresentado em reunião multidisciplinar / consulta de grupo',
          'Depois realiza-se a consulta de decisão terapêutica: é explicado ao doente o plano — cirurgia, quimioterapia, radioterapia, imunoterapia, vigilância ou uma combinação'
        ] }
      ]
    },
    {
      id: 'rede-referencia',
      title: 'O que é a Rede de Referenciação Oncológica',
      content: [
        { kind: 'paragraph', text: 'A Rede de Referenciação Hospitalar de Oncologia Médica é o mapa oficial dos fluxos de doentes entre hospitais do SNS. A ideia é simples: nem todos os hospitais devem tratar qualquer tipo de cancro. Etapas simples podem decorrer na ULS local; casos complexos seguem para um centro regional ou nacional, incluindo o IPO.' },
        { kind: 'paragraph', text: 'A rede considera o tipo de tumor, o estádio, a necessidade de cirurgia complexa, radioterapia, medicina nuclear, hematologia, transplantes, ensaios clínicos e equipas multidisciplinares. Por isso, “quero especificamente ir para o IPO” nem sempre funciona automaticamente: o médico deve justificar a referenciação e o hospital deve aceitá-la de acordo com a rede.' },
        { kind: 'checklist', items: [
          'IPO Lisboa, IPO Porto e IPO Coimbra são institutos oncológicos especializados, mas não são o único ponto de tratamento do cancro',
          'CHULN / Hospital de Santa Maria trata muitos casos oncológicos e tem equipas de oncologia, cirurgia e radioterapia',
          'ULS e hospitais centrais podem fazer diagnóstico, cirurgia, quimioterapia ou follow-up mais perto de casa',
          'O doente pode ser transferido entre hospitais se for necessária tecnologia ou uma equipa que não exista na ULS de origem',
          'A frase certa para o médico: “pode referenciar como suspeita oncológica / prioridade P1 se clinicamente indicado?”',
          'Para uma segunda opinião no SNS, normalmente é necessário um novo pedido / referenciação, não apenas uma chamada para outro hospital'
        ] },
        { kind: 'warning', text: 'A Rede de Referenciação não é um seguro privado nem livre escolha de qualquer hospital. Mas, se houver fundamentos clínicos — tumor raro, cirurgia complexa, inexistência do tratamento necessário na ULS local — peça à MGF ou ao hospital specialist que o indique explicitamente no referral.' }
      ]
    },
    {
      id: 'tmrg',
      title: 'TMRG: que prazos pode exigir',
      content: [
        { kind: 'paragraph', text: 'TMRG significa Tempos Máximos de Resposta Garantidos, os prazos máximos garantidos de resposta no SNS para cuidados programados. Não contam “a partir do momento em que ficou assustado com os sintomas”, mas a partir do registo do pedido correto no sistema do SNS: por exemplo, referral da MGF no CTH/SIGA ou hospital order.' },
        { kind: 'checklist', items: [
          'Para doença oncológica suspeita/confirmada, a primeira consulta hospitalar tem apenas dois níveis (Portaria 137/2026/1): muito prioritária — até 7 dias, prioritária — até 30 dias, contados a partir da receção do pedido',
          'Não existe nível “normal” para a primeira consulta oncológica; o antigo nível intermédio de 15 dias foi eliminado',
          'Para cirurgia oncológica programada (cirurgia programada): prioritária — até 30 dias, normal — até 60 dias',
          'Atenção: a ladder geral de 30 / 60 / 120 dias aplica-se às especialidades comuns, não à oncologia — não a confunda com a garantia oncológica',
          'Em caso de suspeita de cancro, o médico deve justificar clinicamente a prioridade; a palavra “cancro” por si só não garante P1 automático',
          'P1 / Alerta-Oncológico é um canal prático acelerado para suspeita oncológica, mas, juridicamente, confirme qual é a prioridade registada no SIGA',
          'Se a triage hospitalar baixou a prioridade, peça uma explicação por escrito ou uma reavaliação através da MGF',
          'Para urgência, os TMRG de consulta programada não se aplicam: se houver sinais de alarme, deve ir à urgência ou ligar para o SNS 24 / 808 24 24 24'
        ] },
        { kind: 'warning', text: 'Não espere 30 dias em silêncio se os sintomas piorarem: hemorragia, icterícia, défice neurológico, falta de ar intensa, obstrução intestinal, fraqueza súbita, febre alta durante tratamento — isto é motivo para urgência / 112, não para uma discussão sobre TMRG.' }
      ]
    },
    {
      id: 'documents',
      title: 'O que preparar antes da consulta com a MGF ou no hospital',
      content: [
        { kind: 'paragraph', text: 'Em oncologia, muitas vezes perde-se tempo não por falta de médico, mas por dossier incompleto: exames antigos, ausência do texto do relatório, imagens apenas numa aplicação privada, falta de informação sobre medicamentos. Reúna tudo com antecedência e leve em papel + PDF.' },
        { kind: 'checklist', items: [
          'Número de utente SNS',
          'NIF e documento de identificação: autorização de residência, Cartão de Cidadão, passaporte ou registo UE',
          'Lista de sintomas com datas: quando começou, o que está a piorar, peso, temperatura, dor, hemorragia',
          'Todas as análises, relatórios de ecografia / TAC / RM / mamografia / colonoscopia',
          'Imagens dos exames em CD, USB ou por link, se a clínica privada disponibilizar acesso',
          'Resultados de biópsia / anatomia patológica, se já existirem',
          'Lista de medicamentos: anticoagulantes, hormonas, imunossupressores, suplementos',
          'Alergias, doenças crónicas, cirurgias, história familiar de cancro',
          'Número de telefone de contacto que atenda efetivamente chamadas em português',
          'Se não fala bem português — intérprete ou uma nota previamente escrita em PT'
        ] }
      ]
    },
    {
      id: 'if-delayed',
      title: 'Se a referenciação ficar parada ou o prazo TMRG for ultrapassado',
      content: [
        { kind: 'paragraph', text: 'A primeira ação não é reclamar, mas verificar o estado. Peça no Centro de Saúde uma impressão ou confirmação de que o referral foi realmente enviado, com data, specialty, hospital e priority. Um problema frequente: o pedido foi devolvido ao médico, está à espera de exames adicionais ou o telefone do doente não atende.' },
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
            { kind: 'paragraph', text: 'Se surgiram novos sintomas ou um exame privado confirmou a suspeita, a MGF pode acrescentar dados e pedir retriagem. Importante: a frase “tenho medo” é mais fraca do que um dado concreto como “perda de 8 kg em 2 meses + anemia + sangue nas fezes + colonoscopia com lesão suspeita”.' }
          ] },
          { id: 'complain', title: '3. Reclamar se o TMRG foi ultrapassado', content: [
            { kind: 'checklist', items: [
              'Apresente reclamação no Livro de Reclamações físico ou eletrónico do hospital / ULS',
              'Indique a data do referral, specialty, prioridade e o TMRG que foi ultrapassado',
              'Anexe provas: SMS, cartas, impressões, exames',
              'Apresente separadamente uma reclamação à ERS — Entidade Reguladora da Saúde',
              'Peça não uma compensação, mas uma ação concreta: marcação de consulta / reavaliação da prioridade / transferência para outra unidade'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'A reclamação à ERS não substitui cuidados médicos. Se o estado se agravar rapidamente, recorra em paralelo à urgência. Em oncologia, o conflito administrativo e a urgência clínica devem avançar ao mesmo tempo.' }
      ]
    },
    {
      id: 'private-parallel',
      title: 'É possível acelerar através do setor privado',
      content: [
        { kind: 'paragraph', text: 'Sim, muitos doentes fazem parte do diagnóstico privately: colonoscopia, RM, PET, biópsia, second opinion. Isto pode acelerar a informação disponível para a MGF e a hospital triage, mas não cria um direito automático a tratamento num IPO específico. Para que um resultado privado “funcione” no SNS, é necessário relatório médico e, idealmente, imagens digitais.' },
        { kind: 'checklist', items: [
          'Peça não apenas a imagem, mas também relatório médico assinado',
          'Para biópsia, leve o relatório completo de anatomia patológica',
          'Pergunte se é possível entregar lâminas / blocos para revisão no SNS',
          'Leve os resultados à MGF e peça para anexar ao pedido CTH/SIGA',
          'Se o médico privado escrever uma carta, peça que indique suspected diagnosis, ICD/termos PT e urgency',
          'Não inicie tratamento privately sem perceber se o SNS aceitará o esquema já iniciado e onde será feito o follow-up'
        ] },
        { kind: 'warning', text: 'O diagnóstico privado é útil, mas pode custar centenas de euros e nem sempre é coberto pelo seguro em caso de pre-existing condition. Antes do exame, confirme o copagamento, autorização prévia e o prazo de entrega do relatório.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultas e tratamento no percurso SNS com número de utente', amountEUR: 0, note: 'As taxas moderadoras no SNS foram em grande parte eliminadas; o percurso oncológico através do SNS não deve exigir pagamento pela consulta.' },
    { label: 'Second opinion privada com oncologista', amountEURMin: 80, amountEURMax: 200, note: 'Valor indicativo no mercado privado; o preço depende da clínica e do médico, e o seguro pode cobrir parcialmente.' },
    { label: 'RM / TAC / colonoscopia privada sem cobertura', amountEURMin: 150, amountEURMax: 800, note: 'O intervalo é amplo; peça sempre orçamento e prazo do relatório antes da marcação.' }
  ],
  sources: [
    {
      title: 'SNS — Programa Nacional para as Doenças Oncológicas',
      url: 'https://www.sns.gov.pt/institucional/programas-de-saude-prioritarios/programa-nacional-para-as-doencas-oncologicas/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'ePortugal — Tempos Máximos de Resposta Garantidos (TMRG)',
      url: 'https://www.gov.pt/cidadaos/-/informacoes/tempos-maximos-de-resposta-garantidos-tmrg',
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
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
