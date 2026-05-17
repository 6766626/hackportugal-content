export default {
  editorialVoice: 'hackportugal',
  id: 'boletim-saude-eletronico',
  categoryId: 'healthcare',
  title: 'Boletim de Saúde Infantil eletrónico: registo médico digital da criança',
  tldr: 'O Boletim de Saúde Infantil e Juvenil eletrónico no SNS 24 mostra as vacinas do Programa Nacional de Vacinação, consultas de Saúde Infantil, crescimento/peso e gráficos de desenvolvimento da criança. O acesso é normalmente feito através da aplicação SNS 24 do progenitor, com o número de utente da criança e a relação parental confirmada no SNS. Vacinas estrangeiras não aparecem automaticamente: são registadas pelo Centro de Saúde após verificação dos documentos. Para a escola, é melhor entregar uma declaração de vacinas, e não todo o registo médico.',
  tags: ['sns24', 'crianças', 'vacinas', 'boletim'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é',
      content: [
        { kind: 'paragraph', text: 'O Boletim de Saúde Infantil e Juvenil eletrónico é a versão digital do boletim de saúde infantil no ecossistema SNS. Em 2026, está disponível através do SNS 24 e é usado em conjunto com o acompanhamento regular da criança no Centro de Saúde, USF ou UCSP.' },
        { kind: 'paragraph', text: 'Não é um documento separado para imigração nem substitui o médico. É uma interface onde a família vê parte dos dados que os profissionais de saúde já registaram nos sistemas do SNS.' },
        { kind: 'checklist', items: [
          'calendário e estado das vacinas segundo o Programa Nacional de Vacinação',
          'dados sobre consultas de Saúde Infantil e Juvenil',
          'medições de altura, peso e perímetro cefálico, se tiverem sido registadas pelos profissionais de saúde',
          'curvas de crescimento e desenvolvimento',
          'lembretes e informação útil do SNS 24',
          'por vezes — apenas parte do histórico, se a criança se mudou recentemente ou foi acompanhada fora do SNS'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Como obter acesso no SNS 24 📱',
      content: [
        { kind: 'paragraph', text: 'Primeiro, a criança precisa de um número de utente. Normalmente, este é pedido no Centro de Saúde da área de residência. Para crianças, o acesso aos dados na aplicação SNS 24 é aberto ao progenitor ou representante legal, se a ligação à criança estiver confirmada nos registos do SNS.' },
        { kind: 'checklist', items: [
          'instale a aplicação SNS 24 ou aceda a sns24.gov.pt',
          'entre com Chave Móvel Digital (CMD), Cartão de Cidadão ou outro método de autenticação disponível',
          'verifique se a criança aparece na secção de dados familiares/infantis',
          'se a criança não aparecer, contacte o Centro de Saúde e peça para verificarem o agregado familiar / representação legal',
          'tenha consigo o documento da criança, número de utente, NIF se existir e comprovativo de morada',
          'para recém-nascidos nascidos em Portugal, parte dos dados pode aparecer após o registo de nascimento e a atribuição do utente',
          'para crianças vindas do estrangeiro, normalmente é necessário primeiro fazer a inscrição no SNS'
        ] },
        { kind: 'warning', text: 'Se a criança já tem utente, mas o SNS 24 está vazio, isso não significa que as vacinas ou consultas “não existam”. Muitas vezes, os dados simplesmente não migraram ou foram registados noutro sistema. Quem corrige isto é o Centro de Saúde, não o apoio técnico da aplicação.' }
      ]
    },
    {
      id: 'foreign-vaccines',
      title: 'Como registar vacinas de outro país',
      content: [
        { kind: 'paragraph', text: 'As vacinas estrangeiras não entram automaticamente no boletim português. Têm de ser verificadas por um enfermeiro ou médico no Centro de Saúde e registadas no sistema de vacinação do SNS. Depois disso, normalmente ficam visíveis no boletim eletrónico / área de vacinas.' },
        { kind: 'checklist', items: [
          'leve o original do boletim de vacinas infantil do país de saída',
          'se o documento não estiver em português, inglês, espanhol ou francês — prepare uma tradução compreensível dos nomes das vacinas e das datas',
          'as datas devem ser legíveis: dia, mês, ano',
          'é recomendável ter os nomes das vacinas, séries/lotes e carimbos da clínica, se existirem',
          'marque vacinação ou consulta de enfermagem no Centro de Saúde',
          'peça para comparar as vacinas com o Programa Nacional de Vacinação de Portugal',
          'se houver lacunas, o enfermeiro proporá um catch-up schedule — calendário de recuperação',
          'depois do registo, verifique o SNS 24 passados alguns dias ou semanas'
        ] },
        { kind: 'warning', text: 'Não tente “traduzir” nomes russos, ucranianos, brasileiros ou outros nomes de vacinas por conta própria para equivalentes portugueses arbitrários. O que importa são os antigénios e as datas das doses, não o nome comercial. A decisão de validação cabe ao profissional de saúde do SNS.' }
      ]
    },
    {
      id: 'school-sharing',
      title: 'O que mostrar à escola, ao jardim de infância e ao ATL',
      content: [
        { kind: 'paragraph', text: 'A escola normalmente não precisa de todo o Boletim de Saúde Infantil, mas sim de uma confirmação de que a vacinação está atualizada ou de uma informação de saúde específica. O registo médico digital completo contém dados médicos pessoais desnecessários, que não devem ser enviados por WhatsApp ou email sem necessidade.' },
        { kind: 'checklist', items: [
          'para matrícula, na maioria dos casos basta uma declaração / comprovativo de vacinas',
          'esta declaração pode ser pedida no Centro de Saúde ou obtida através do SNS 24, se a função estiver disponível no seu perfil',
          'se a criança precisar de medicamentos na escola, dieta, EpiPen ou restrições na educação física — peça ao médico de família uma declaração médica separada',
          'não envie capturas de ecrã de todo o boletim, onde são visíveis consultas, altura, peso e outros dados',
          'para Creche ou Jardim de Infância privado, confirme antecipadamente a lista de documentos: os requisitos variam',
          'se a escola pedir “boletim de vacinas”, normalmente refere-se ao comprovativo de vacinação, e não a todo o boletim infantil'
        ] },
        { kind: 'warning', text: 'Em Portugal, o Programa Nacional de Vacinação é um programa nacional gratuito, mas não é uma “vacinação obrigatória” universal no sentido de haver multa por cada dose. No entanto, as escolas, os serviços de saúde e a DGS podem controlar riscos epidemiológicos e pedir o estado vacinal.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Problemas frequentes e como resolvê-los',
      content: [
        { kind: 'substeps', items: [
          { id: 'child-not-visible', title: 'A criança não aparece na aplicação', content: [
            { kind: 'paragraph', text: 'Verifique se a criança tem número de utente e se os progenitores ou representantes legais estão corretamente indicados no Centro de Saúde. Por vezes, é necessária uma deslocação presencial com documentos.' }
          ] },
          { id: 'vaccines-missing', title: 'As vacinas existem, mas o SNS 24 está vazio', content: [
            { kind: 'paragraph', text: 'Marque vacinação / enfermagem e peça para verificarem o registo de vacinas. Leve o boletim em papel ou PDF do país de residência anterior.' }
          ] },
          { id: 'wrong-data', title: 'Erro na data ou na dose', content: [
            { kind: 'paragraph', text: 'Não apague nem corrija por conta própria: a interface do utente normalmente apenas apresenta os dados. A correção é feita pelo Centro de Saúde após verificação da fonte.' }
          ] },
          { id: 'private-care', title: 'A criança é acompanhada numa clínica privada', content: [
            { kind: 'paragraph', text: 'A clínica privada pode manter o seu próprio registo, mas para o PNV e para o estado oficial das vacinas é melhor sincronizar os dados com o Centro de Saúde. As vacinas gratuitas do PNV são administradas através do SNS.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Acesso ao Boletim de Saúde Infantil eletrónico no SNS 24', amountEUR: 0, note: 'Gratuito com acesso ao SNS 24 e número de utente da criança.' },
    { label: 'Vacinas do Programa Nacional de Vacinação', amountEUR: 0, note: 'Gratuitas no SNS para crianças incluídas no programa de vacinação.' },
    { label: 'Tradução de boletim de vacinas estrangeiro', amountEURMin: 20, amountEURMax: 80, note: 'Nem sempre é necessária; o preço depende da língua, do volume e da necessidade de certificação.' }
  ],
  sources: [
    { title: 'SNS 24 — portal e aplicação para acesso aos dados do SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — Programa Nacional de Vacinação e normas de vacinação', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — informação sobre vacinas e boletim de vacinas', url: 'https://www.sns24.gov.pt/tema/vacinas/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
