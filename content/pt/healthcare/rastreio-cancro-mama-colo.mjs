export default {
  editorialVoice: 'hackportugal',
  id: 'rastreio-cancro-mama-colo',
  categoryId: 'healthcare',
  title: 'Rastreios oncológicos SNS: rastreio do cancro da mama, do colo do útero e do intestino',
  tldr: 'No SNS existem rastreios populacionais gratuitos: cancro da mama — mulheres 50–69 anos, geralmente mamografia de 2 em 2 anos; cancro do colo do útero — 25–69 anos segundo o programa da sua ULS/antiga ARS; cancro colorretal — homens e mulheres 50–74 anos, teste de sangue oculto nas fezes com colonoscopia se o resultado for positivo. São necessários número de utente, morada e telefone atualizados no SNS. Se perdeu a convocatória, contacte o seu Centro de Saúde/USF ou o SNS 24: a marcação costuma ser reposta.',
  tags: ['sns', 'rastreio', 'oncologia', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que o SNS cobre gratuitamente',
      content: [
        { kind: 'paragraph', text: 'O rastreio de base populacional não é uma “verificação por iniciativa própria”, mas sim um programa organizado do SNS: o sistema convoca automaticamente as pessoas da faixa etária adequada por carta, SMS ou telefone. O objetivo é detetar cancro ou alterações pré-cancerosas antes de surgirem sintomas.' },
        { kind: 'checklist', items: [
          'Cancro da mama: mulheres 50–69 anos; por norma, mamografia de 2 em 2 anos.',
          'Cancro do colo do útero: mulheres 25–69 anos; usa-se citologia e/ou teste HPV segundo as regras da sua ULS/programa regional.',
          'Cancro colorretal: homens e mulheres 50–74 anos; normalmente teste de sangue oculto nas fezes, seguido de colonoscopia se o teste for positivo.',
          'A participação é gratuita para utilizadores do SNS com número de utente.',
          'O convite pode chegar da ULS, do Centro de Saúde/USF, da Unidade de Saúde Pública ou ainda com a designação regional antiga ARS/ACES.',
          'Se já tem sintomas — sangue, nódulo, dor, perda de peso inexplicada, hemorragias — não espere pelo rastreio: marque com o médico de família ou recorra ao Atendimento Complementar/urgência.'
        ] },
        { kind: 'warning', text: 'O rastreio não substitui a avaliação diagnóstica. Os programas destinam-se a pessoas sem sintomas. Com sintomas, as faixas etárias 50–69 / 25–69 / 50–74 não limitam o acesso ao médico.' }
      ]
    },
    {
      id: 'enrolment',
      title: 'Como integrar o programa sendo expatriado',
      content: [
        { kind: 'paragraph', text: 'Não existe, em regra, uma “candidatura ao rastreio oncológico”. A inclusão é automática se estiver registado no SNS, associado a um Centro de Saúde/USF e com os seus dados corretos.' },
        { kind: 'checklist', items: [
          'Obtenha o número de utente no Centro de Saúde da sua morada.',
          'Confirme que no SNS consta a morada correta em Portugal: as cartas de convocatória chegam muitas vezes por correio.',
          'Atualize o número de telemóvel português e o email no Centro de Saúde/USF.',
          'Verifique que está inscrito na freguesia/ULS correta após a mudança de morada.',
          'Se tiver médico de família, peça para confirmar se os seus rastreios por idade estão ativos.',
          'Se não tiver médico de família, dirija-se ao secretariado da USF/UCSP: a ausência de médico de família não deve, por si só, excluir do rastreio populacional.',
          'Leve à consulta o passaporte/autorização de residência, o número de utente e, se tiver, resultados anteriores de mamografia, citologia, HPV, colonoscopia.'
        ] },
        { kind: 'warning', text: 'Mudar de município quebra frequentemente a cadeia de convites: a carta foi para a morada antiga e o novo Centro de Saúde ainda não integrou o histórico. Após a alteração de morada, peça expressamente a atualização dos contactos no SNS.' }
      ]
    },
    {
      id: 'breast-screening',
      title: 'Cancro da mama: mamografia 50–69',
      content: [
        { kind: 'paragraph', text: 'As mulheres dos 50 aos 69 anos são convidadas para mamografia na área de residência. Em algumas zonas o exame é realizado em unidades móveis; noutras, no hospital ou em centro de diagnóstico com acordo SNS.' },
        { kind: 'checklist', items: [
          'Intervalo habitual: 2 anos, se o resultado anterior for normal.',
          'Leve documento de identificação e número de utente ao exame.',
          'Não aplique desodorizante/talco/creme no peito e axilas no dia da mamografia: pode interferir com as imagens.',
          'Se tiver implantes, cirurgia mamária, gravidez ou estiver a amamentar, informe antes do exame.',
          'O resultado chega normalmente por carta/SMS ou é enviado ao Centro de Saúde; os prazos dependem da ULS.',
          'Perante resultado suspeito, será encaminhada para mamografia adicional, ecografia, consulta de senologia ou biópsia.',
          'Se tem 40–49 ou 70+, o rastreio populacional gratuito pode não convocar automaticamente, mas o médico do SNS pode solicitar exame por indicação clínica.'
        ] }
      ]
    },
    {
      id: 'cervical-screening',
      title: 'Cancro do colo do útero: 25–69',
      content: [
        { kind: 'paragraph', text: 'O rastreio do cancro do colo do útero no SNS é realizado através do Centro de Saúde/USF ou de unidades locais de rastreio. Em 2026, os programas utilizam a faixa etária 25–69 anos, mas o tipo de teste e o intervalo podem variar por região: citologia, teste HPV ou combinação.' },
        { kind: 'checklist', items: [
          'A marcação é habitualmente feita pelo Centro de Saúde/USF após convocatória ou a seu pedido, se estiver na faixa etária.',
          'Evite marcar a colheita durante a menstruação.',
          '24–48 horas antes do teste, é preferível evitar óvulos vaginais, duches vaginais e relações sexuais, se a sua USF tiver dado essa instrução.',
          'Se estiver grávida, tiver tido parto recentemente ou tiver tratado displasia, informe a enfermeira/o médico antes do teste.',
          'A vacinação contra o HPV não dispensa o rastreio.',
          'Com resultado anormal, será encaminhada para consulta hospitalar, colposcopia e, se necessário, biópsia.',
          'Se não tiver útero após histerectomia, as regras dependem do motivo da cirurgia: confirme com o médico de família.'
        ] },
        { kind: 'warning', text: 'Hemorragias pós-coito, hemorragias após a menopausa, dor ou corrimento invulgar são motivo para consulta médica, e não para aguardar o próximo rastreio.' }
      ]
    },
    {
      id: 'colorectal-screening',
      title: 'Cancro colorretal: 50–74',
      content: [
        { kind: 'paragraph', text: 'Para homens e mulheres 50–74 anos, o SNS utiliza um teste simples de sangue oculto nas fezes. Normalmente recebe o kit no Centro de Saúde/USF ou conforme indicado na carta, entrega a amostra e o laboratório envia o resultado para o sistema.' },
        { kind: 'checklist', items: [
          'O teste destina-se a pessoas sem sintomas.',
          'Siga as instruções do kit: conservação inadequada ou atraso na entrega da amostra podem invalidar o teste.',
          'Se o resultado for negativo, será normalmente novamente convocado passado o intervalo definido pelo programa.',
          'Se o resultado for positivo, isso não é um diagnóstico de cancro: é necessária colonoscopia para procurar a origem do sangue.',
          'A colonoscopia por encaminhamento do SNS deve ser gratuita como parte do percurso diagnóstico.',
          'Se já realizou colonoscopia, tem pólipos, doença inflamatória intestinal ou risco familiar, informe o médico: pode necessitar de vigilância individual e não do rastreio habitual.',
          'Sangue nas fezes, anemia, diarreia/obstipação persistente, perda de peso — procure imediatamente o médico de família; não espere pelo teste.'
        ] }
      ]
    },
    {
      id: 'missed-invitation',
      title: 'Se não recebeu a carta ou perdeu a marcação',
      content: [
        { kind: 'paragraph', text: 'Uma convocatória perdida geralmente não “caduca”. A reposição depende da ULS local, mas o percurso prático é o mesmo: atualizar contactos e pedir nova data.' },
        { kind: 'checklist', items: [
          'Telefone ou dirija-se ao secretariado do seu Centro de Saúde/USF.',
          'Diga: “Quero confirmar o meu rastreio oncológico: mama / colo do útero / colorretal”.',
          'Peça para verificar morada, telemóvel, email e número de utente.',
          'Se a carta veio da antiga ARS/ACES ou da ULS, telefone para o número indicado na convocatória.',
          'Se mudou de casa, transfira primeiro a inscrição para o novo Centro de Saúde.',
          'Se não conseguir contacto telefónico, ligue para o SNS 24: 808 24 24 24; indicarão o percurso, mas nem sempre conseguem fazer a marcação do rastreio.',
          'Guarde SMS/cartas e resultados: ao mudar de ULS isso acelera a recuperação do histórico.'
        ] },
        { kind: 'warning', text: 'Não ignore um resultado positivo no teste de sangue oculto, citologia/HPV anormais ou mamografia suspeita. Já não é “rastreio programado”, mas sim percurso diagnóstico; insista na marcação através do Centro de Saúde/USF ou de encaminhamento hospitalar.' }
      ]
    }
  ],
  costs: [
    { label: 'Participação no rastreio do SNS', amountEUR: 0, note: 'Gratuito para utilizadores do SNS com número de utente no âmbito de programas populacionais.' },
    { label: 'Novo convite após falta', amountEUR: 0, note: 'Geralmente gratuito; é necessária nova marcação via Centro de Saúde/USF ou contacto da convocatória.' },
    { label: 'Mamografia/teste HPV/colonoscopia no privado (fora do SNS)', amountEURMin: 40, amountEURMax: 400, note: 'Referência para o setor privado; preço depende da clínica, do seguro e da sedação na colonoscopia.' }
  ],
  sources: [
    { title: 'SNS — Programa Nacional para as Doenças Oncológicas', url: 'https://www.sns.gov.pt/institucional/programas-de-saude-prioritarios/programa-nacional-para-as-doencas-oncologicas/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'SNS 24 — Rastreios oncológicos', url: 'https://www.sns24.gov.pt/tema/doencas-oncologicas/rastreios-oncologicos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Direção-Geral da Saúde — rastreios oncológicos e normas da DGS', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contactos e navegação no SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
