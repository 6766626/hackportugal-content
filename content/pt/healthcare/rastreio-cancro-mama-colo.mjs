export default {
  editorialVoice: 'hackportugal',
  id: 'rastreio-cancro-mama-colo',
  categoryId: 'healthcare',
  title: 'Rastreios oncológicos SNS: rastreio do cancro da mama, do colo do útero e do intestino',
  tldr: 'No SNS existem rastreios de base populacional gratuitos: cancro da mama — mulheres dos 50 aos 69 anos, normalmente mamografia de 2 em 2 anos; cancro do colo do útero — dos 25 aos 69 anos, de acordo com o programa da sua ULS/antiga ARS; cancro colorretal — homens e mulheres dos 50 aos 74 anos, teste de sangue oculto nas fezes com colonoscopia posterior em caso de resultado positivo. São necessários número de utente, morada atual e telefone no SNS. Se perdeu a convocatória, contacte o seu Centro de Saúde/USF ou o SNS 24: normalmente a marcação é reposta.',
  tags: ['sns', 'rastreio', 'oncologia', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que o SNS cobre gratuitamente',
      content: [
        { kind: 'paragraph', text: 'O rastreio de base populacional não é uma “verificação a pedido”, mas sim um programa organizado do SNS: o sistema convoca automaticamente as pessoas da idade adequada por carta, SMS ou telefone. O objetivo é detetar cancro ou alterações pré-cancerosas antes de existirem sintomas.' },
        { kind: 'checklist', items: [
          'Cancro da mama: mulheres dos 50 aos 69 anos; por norma, mamografia de 2 em 2 anos.',
          'Cancro do colo do útero: mulheres dos 25 aos 69 anos; é utilizada citologia e/ou teste HPV segundo as regras da sua ULS/programa regional.',
          'Cancro colorretal: homens e mulheres dos 50 aos 74 anos; normalmente teste de sangue oculto nas fezes, seguido de colonoscopia se o teste for positivo.',
          'A participação é gratuita para utentes do SNS com número de utente.',
          'O convite pode chegar pela ULS, Centro de Saúde/USF, Unidade de Saúde Pública ou com a antiga identificação regional ARS/ACES.',
          'Se já tem sintomas — sangue, nódulo, dor, perda de peso inexplicada, hemorragias — não espere pelo rastreio: marque consulta com o médico de família ou recorra ao Atendimento Complementar/urgência.'
        ] },
        { kind: 'warning', text: 'O rastreio não substitui o diagnóstico. Os programas destinam-se a pessoas sem sintomas. Em caso de sintomas, as janelas etárias 50–69 / 25–69 / 50–74 não são uma limitação para procurar um médico.' }
      ]
    },
    {
      id: 'enrolment',
      title: 'Como entrar no programa se é expatriado',
      content: [
        { kind: 'paragraph', text: 'Normalmente não existe um “pedido de rastreio oncológico” separado. A inclusão é automática se estiver inscrito no SNS, associado a um Centro de Saúde/USF e os seus dados estiverem corretos.' },
        { kind: 'checklist', items: [
          'Obtenha o número de utente no Centro de Saúde da sua área de residência.',
          'Confirme que o SNS tem a morada correta em Portugal: as cartas com convocatória chegam muitas vezes por correio normal.',
          'Atualize o número de telefone português e o email no Centro de Saúde/USF.',
          'Verifique se está registado na freguesia/ULS correta após uma mudança de casa.',
          'Se tiver médico de família — peça para confirmar se os seus rastreios por idade estão ativos.',
          'Se não tiver médico de família, contacte o secretariado da USF/UCSP: a ausência de médico de família não deve, por si só, excluí-lo do rastreio populacional.',
          'Leve para a consulta o passaporte/autorização de residência, número de utente e, se tiver, resultados antigos de mammografia, citologia, HPV, colonoscopia.'
        ] },
        { kind: 'warning', text: 'Uma mudança entre municípios quebra frequentemente a cadeia de convites: a carta foi para a morada antiga e o novo Centro de Saúde ainda não importou o histórico. Depois de mudar de morada, peça expressamente a atualização dos contactos no SNS.' }
      ]
    },
    {
      id: 'breast-screening',
      title: 'Cancro da mama: mammografia 50–69',
      content: [
        { kind: 'paragraph', text: 'As mulheres dos 50 aos 69 anos são convidadas para uma mamografia na área de residência. Em algumas zonas, o exame é feito em unidades móveis; noutras, num hospital ou centro de diagnóstico convencionado com o SNS.' },
        { kind: 'checklist', items: [
          'Intervalo habitual: 2 anos, se o resultado anterior foi normal.',
          'Para o exame, leve documento de identificação e número de utente.',
          'Não aplique desodorizante/talco/creme no peito e nas axilas no dia da mamografia: pode interferir com as imagens.',
          'Se tem implantes, cirurgia mamária anterior, gravidez ou está a amamentar — informe antes da imagem.',
          'O resultado costuma chegar por carta/SMS ou ser enviado para o Centro de Saúde; os prazos dependem da ULS.',
          'Em caso de resultado suspeito, será encaminhada para mammografia adicional, ecografia, consulta de senologia ou biópsia.',
          'Se tem 40–49 ou 70+ anos, o rastreio populacional gratuito pode não a convocar automaticamente, mas o médico do SNS pode prescrever exames por indicação clínica.'
        ] }
      ]
    },
    {
      id: 'cervical-screening',
      title: 'Cancro do colo do útero: 25–69',
      content: [
        { kind: 'paragraph', text: 'O rastreio do cancro do colo do útero no SNS é realizado através do Centro de Saúde/USF ou de unidades locais de rastreio. Em 2026, os programas usam a janela etária dos 25 aos 69 anos, mas o tipo de teste e o intervalo podem variar por região: citologia, teste HPV ou combinação.' },
        { kind: 'checklist', items: [
          'A marcação é normalmente feita pelo Centro de Saúde/USF após convocatória ou a seu pedido, se cumprir a idade indicada.',
          'Não marque a colheita durante a menstruação.',
          'Nas 24–48 horas antes do teste, é melhor evitar óvulos vaginais, duches vaginais e relações sexuais, se a sua USF tiver dado essa instrução.',
          'Se está grávida, teve um parto recente ou tratou uma displasia — diga-o à enfermeira/ao médico antes do teste.',
          'A vacinação contra o HPV não elimina a necessidade de rastreio.',
          'Em caso de abnormal result, será encaminhada para consulta hospitalar, colposcopia e, se necessário, biópsia.',
          'Se não tem útero após histerectomia, as regras dependem do motivo da cirurgia: confirme com o médico de família.'
        ] },
        { kind: 'warning', text: 'Hemorragia pós-coital, hemorragia após a menopausa, dor ou corrimento invulgar são motivos para consulta médica, não para esperar pelo próximo rastreio.' }
      ]
    },
    {
      id: 'colorectal-screening',
      title: 'Cancro colorretal: 50–74',
      content: [
        { kind: 'paragraph', text: 'Para homens e mulheres dos 50 aos 74 anos, o SNS utiliza um teste simples de sangue oculto nas fezes. Normalmente recebe o kit no Centro de Saúde/USF ou segundo as instruções da carta, entrega a amostra e o laboratório envia o resultado para o sistema.' },
        { kind: 'checklist', items: [
          'O teste destina-se a pessoas sem sintomas.',
          'Siga as instruções do kit: conservação incorreta ou entrega fora do prazo podem invalidar o teste.',
          'Se o resultado for negativo, normalmente voltará a ser convidado após o intervalo definido pelo programa.',
          'Se o resultado for positivo, não é um diagnóstico de cancro: é necessária colonoscopia para procurar a origem do sangue.',
          'A colonoscopia por referenciação do SNS deve ser gratuita enquanto parte do percurso diagnóstico.',
          'Se já fez colonoscopia, teve pólipos, doença inflamatória intestinal ou risco familiar — informe o médico: pode precisar de seguimento individual, e não do rastreio habitual.',
          'Sangue nas fezes, anemia, diarreia/obstipação persistente, perda de peso — contacte imediatamente o médico de família, não espere pelo teste.'
        ] }
      ]
    },
    {
      id: 'missed-invitation',
      title: 'Se não recebeu a carta ou perdeu a marcação',
      content: [
        { kind: 'paragraph', text: 'Uma convocatória perdida normalmente não “caduca”. A reposição depende da ULS local, mas o caminho prático é o mesmo: atualizar contactos e pedir uma nova data.' },
        { kind: 'checklist', items: [
          'Telefone ou vá ao secretariado do seu Centro de Saúde/USF.',
          'Diga: “Quero confirmar o meu rastreio oncológico: mama / colo do útero / colorretal”.',
          'Peça para confirmarem morada, telemóvel, email e número de utente.',
          'Se a carta veio da antiga ARS/ACES ou da ULS, ligue para o número indicado na convocatória.',
          'Se mudou de casa, primeiro transfira a inscrição para o novo Centro de Saúde.',
          'Se for impossível contactar por telefone, ligue para o SNS 24: 808 24 24 24; indicarão o percurso, mas nem sempre conseguem fazer a marcação do rastreio.',
          'Guarde SMS/cartas e resultados: em caso de mudança de ULS, isso acelera a recuperação do histórico.'
        ] },
        { kind: 'warning', text: 'Não ignore um resultado positivo no teste de sangue oculto, abnormal cytology/HPV ou uma mammografia suspeita. Isto já não é “rastreio de rotina”, mas sim um percurso diagnóstico; insista na marcação através do Centro de Saúde/USF ou hospital referral.' }
      ]
    }
  ],
  costs: [
    { label: 'Participação no rastreio SNS', amountEUR: 0, note: 'Gratuito para utentes do SNS com número de utente no âmbito de programas de base populacional.' },
    { label: 'Nova convocatória após falta', amountEUR: 0, note: 'Normalmente gratuito; é necessária nova marcação através do Centro de Saúde/USF ou do contacto indicado na convocatória.' },
    { label: 'Mamografia/teste HPV/colonoscopia no privado sem SNS', amountEURMin: 40, amountEURMax: 400, note: 'Valor indicativo para o setor privado; o preço depende da clínica, do seguro e da sedação na colonoscopia.' }
  ],
  sources: [
    { title: 'SNS — Programa Nacional para as Doenças Oncológicas', url: 'https://www.sns.gov.pt/institucional/programas-de-saude-prioritarios/programa-nacional-para-as-doencas-oncologicas/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'SNS 24 — Rastreios oncológicos', url: 'https://www.sns24.gov.pt/tema/doencas-oncologicas/rastreios-oncologicos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Direção-Geral da Saúde — rastreios oncológicos e normas da DGS', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contactos e navegação no SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
