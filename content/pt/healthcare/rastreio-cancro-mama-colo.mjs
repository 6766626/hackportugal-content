export default {
  editorialVoice: 'hackportugal',
  id: 'rastreio-cancro-mama-colo',
  categoryId: 'healthcare',
  title: 'Rastreios oncológicos SNS: rastreio do cancro da mama, do colo do útero e do intestino',
  tldr: 'No SNS existem rastreios de base populacional gratuitos: cancro da mama — mulheres dos 50 aos 69 anos, habitualmente mamografia de 2 em 2 anos; cancro do colo do útero — dos 25 aos 69 anos, de acordo com o programa da sua ULS/antiga ARS; cancro colorretal — homens e mulheres dos 50 aos 74 anos, teste de pesquisa de sangue oculto nas fezes, seguido de colonoscopia em caso de resultado positivo. São necessários número de utente, morada e telefone actualizados no SNS. Se falhou a convocatória, telefone para o seu Centro de Saúde/USF ou para o SNS 24: normalmente a marcação pode ser reposta.',
  tags: ['sns', 'rastreio', 'oncologia', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que o SNS cobre gratuitamente',
      content: [
        { kind: 'paragraph', text: 'Rastreio de base populacional não é uma “verificação a pedido”, mas sim um programa organizado do SNS: o sistema convoca automaticamente as pessoas da idade adequada por carta, SMS ou telefone. O objectivo é detectar cancro ou alterações pré-cancerosas antes dos sintomas.' },
        { kind: 'checklist', items: [
          'Cancro da mama: mulheres dos 50 aos 69 anos; por norma, mamografia de 2 em 2 anos.',
          'Cancro do colo do útero: mulheres dos 25 aos 69 anos; utiliza-se citologia e/ou teste HPV segundo as regras da sua ULS/programa regional.',
          'Cancro colorretal: homens e mulheres dos 50 aos 74 anos; habitualmente teste de pesquisa de sangue oculto nas fezes e, depois, colonoscopia em caso de teste positivo.',
          'A participação é gratuita para utentes do SNS com número de utente.',
          'O convite pode chegar pela ULS, Centro de Saúde/USF, Unidade de Saúde Pública ou ainda com a antiga designação regional ARS/ACES.',
          'Se já tem sintomas — sangue, nódulo, dor, perda de peso inexplicada, hemorragias — não espere pelo rastreio: marque consulta com o médico de família ou recorra ao Atendimento Complementar/urgência.'
        ] },
        { kind: 'warning', text: 'O rastreio não substitui o diagnóstico. Os programas destinam-se a pessoas sem sintomas. Em caso de sintomas, as janelas etárias 50–69 / 25–69 / 50–74 não são um limite para recorrer a um médico.' }
      ]
    },
    {
      id: 'enrolment',
      title: 'Como entrar no programa se é expat',
      content: [
        { kind: 'paragraph', text: 'Regra geral, não existe um “pedido de rastreio oncológico” separado. A inclusão é automática se estiver registado no SNS, associado a um Centro de Saúde/USF e se os seus dados estiverem correctos.' },
        { kind: 'checklist', items: [
          'Obtenha o número de utente no Centro de Saúde da sua área de residência.',
          'Confirme que no SNS consta a morada correcta em Portugal: as cartas com convocatória são frequentemente enviadas por correio normal.',
          'Actualize o número de telefone português e o email no Centro de Saúde/USF.',
          'Verifique se está registado na freguesia/ULS correcta após uma mudança de residência.',
          'Se tiver médico de família, peça para confirmar se os seus rastreios por idade estão activos.',
          'Se não tiver médico de família, contacte o secretariado da USF/UCSP: a ausência de médico de família não deve, por si só, excluir a pessoa do population screening.',
          'Leve à consulta o passaporte/autorização de residência, o número de utente e, se existirem, resultados antigos de mammografia, citologia, HPV, colonoscopia.'
        ] },
        { kind: 'warning', text: 'Mudanças entre municípios quebram muitas vezes a cadeia de convites: a carta foi enviada para a morada antiga e o novo Centro de Saúde ainda não puxou o histórico. Depois de mudar de morada, peça expressamente para actualizarem os contactos no SNS.' }
      ]
    },
    {
      id: 'breast-screening',
      title: 'Cancro da mama: mammografia 50–69',
      content: [
        { kind: 'paragraph', text: 'As mulheres dos 50 aos 69 anos são convidadas para uma mamografia na área de residência. Em algumas zonas, o exame é feito em unidades móveis; noutras, num hospital ou centro de diagnóstico convencionado com o SNS.' },
        { kind: 'checklist', items: [
          'Intervalo habitual: 2 anos, se o resultado anterior for normal.',
          'Leve para o exame documento de identificação e número de utente.',
          'Não aplique desodorizante/talco/creme no peito e nas axilas no dia da mamografia: isso pode interferir com as imagens.',
          'Se tiver implantes, cirurgia mamária, gravidez ou estiver a amamentar, informe antes da imagem.',
          'O resultado costuma chegar por carta/SMS ou ser enviado para o Centro de Saúde; os prazos dependem da ULS.',
          'Em caso de resultado suspeito, será encaminhada para mammografia adicional, ecografia, consulta de senologia ou biópsia.',
          'Se tem 40–49 anos ou 70+, o rastreio populacional gratuito pode não convocar automaticamente, mas o médico do SNS pode pedir exames por indicação clínica.'
        ] }
      ]
    },
    {
      id: 'cervical-screening',
      title: 'Cancro do colo do útero: 25–69',
      content: [
        { kind: 'paragraph', text: 'O rastreio do cancro do colo do útero no SNS é realizado através do Centro de Saúde/USF ou de unidades de rastreio locais. Em 2026, os programas utilizam a janela etária dos 25 aos 69 anos, mas o tipo de teste e o intervalo podem variar consoante a região: citologia, teste HPV ou combinação.' },
        { kind: 'checklist', items: [
          'A marcação é normalmente feita pelo Centro de Saúde/USF após convocatória ou a seu pedido, se cumprir o critério de idade.',
          'Não planeie a colheita durante a menstruação.',
          'Nas 24–48 horas anteriores ao teste, é preferível evitar óvulos vaginais, duches vaginais e contacto sexual, se a sua USF tiver dado essa instrução.',
          'Se estiver grávida, tiver dado à luz recentemente ou tiver tratado uma displasia, informe a enfermeira/o médico antes do teste.',
          'A vacinação contra o HPV não dispensa o rastreio.',
          'Em caso de abnormal result, será encaminhada para consulta hospitalar, colposcopia e, se necessário, biópsia.',
          'Se não tem útero após histerectomia, as regras dependem do motivo da cirurgia: confirme com o médico de família.'
        ] },
        { kind: 'warning', text: 'Hemorragias pós-coitais, hemorragias após a menopausa, dor ou corrimento invulgar são motivo para consulta médica, não para esperar pelo próximo rastreio.' }
      ]
    },
    {
      id: 'colorectal-screening',
      title: 'Cancro colorretal: 50–74',
      content: [
        { kind: 'paragraph', text: 'Para homens e mulheres dos 50 aos 74 anos, o SNS utiliza um teste simples de pesquisa de sangue oculto nas fezes. Normalmente recebe o kit no Centro de Saúde/USF ou seguindo as instruções da carta, entrega a amostra e o laboratório envia o resultado para o sistema.' },
        { kind: 'checklist', items: [
          'O teste destina-se a pessoas sem sintomas.',
          'Siga as instruções do kit: armazenamento incorrecto ou entrega fora do prazo podem invalidar o teste.',
          'Se o resultado for negativo, normalmente voltará a ser convidado no intervalo definido pelo programa.',
          'Se o resultado for positivo, isso não é um diagnóstico de cancro: é necessária colonoscopia para procurar a origem do sangue.',
          'A colonoscopia por referenciação do SNS deve ser gratuita como parte do percurso diagnóstico.',
          'Se já fez colonoscopia, teve pólipos, doença inflamatória intestinal ou risco familiar, informe o médico: pode precisar de vigilância individualizada, e não do rastreio habitual.',
          'Sangue nas fezes, anemia, diarreia/obstipação persistente, perda de peso — contacte de imediato o médico de família, não espere pelo teste.'
        ] }
      ]
    },
    {
      id: 'missed-invitation',
      title: 'Se a carta não chegou ou falhou a marcação',
      content: [
        { kind: 'paragraph', text: 'Uma convocatória perdida normalmente não “expira” de forma definitiva. A reposição depende da ULS local, mas o caminho prático é o mesmo: actualizar os contactos e pedir uma nova data.' },
        { kind: 'checklist', items: [
          'Telefone ou dirija-se ao secretariado do seu Centro de Saúde/USF.',
          'Diga: “Quero confirmar o meu rastreio oncológico: mama / colo do útero / colorretal”.',
          'Peça para verificarem morada, telemóvel, email e número de utente.',
          'Se a carta veio da antiga ARS/ACES ou da ULS, telefone para o número indicado na convocatória.',
          'Se mudou de casa, transfira primeiro a inscrição para o novo Centro de Saúde.',
          'Se for impossível conseguir contacto, ligue para o SNS 24: 808 24 24 24; indicar-lhe-ão o percurso, embora nem sempre possam marcar directamente o rastreio.',
          'Guarde SMS/cartas e resultados: em caso de mudança de ULS, isso acelera a recuperação do histórico.'
        ] },
        { kind: 'warning', text: 'Não ignore um resultado positivo do teste de sangue oculto, abnormal cytology/HPV ou uma mammografia suspeita. Isto já não é “rastreio de rotina”, mas sim um percurso diagnóstico; insista na marcação através do Centro de Saúde/USF ou hospital referral.' }
      ]
    }
  ],
  costs: [
    { label: 'Participação no rastreio SNS', amountEUR: 0, note: 'Gratuito para utentes do SNS com número de utente no âmbito de population-based programmes.' },
    { label: 'Nova convocatória após falta', amountEUR: 0, note: 'Normalmente gratuita; é necessária nova marcação através do Centro de Saúde/USF ou do contacto indicado na convocatória.' },
    { label: 'Mamografia/teste HPV/colonoscopia privada sem SNS', amountEURMin: 40, amountEURMax: 400, note: 'Valor indicativo para o sector privado; o preço depende da clínica, do seguro e da sedação na colonoscopia.' }
  ],
  sources: [
    { title: 'SNS — Rastreios de base populacional', url: 'https://www.sns.gov.pt/cidadao/rastreios-de-base-populacional/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Direção-Geral da Saúde — rastreios oncológicos e normas da DGS', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contactos e navegação no SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
