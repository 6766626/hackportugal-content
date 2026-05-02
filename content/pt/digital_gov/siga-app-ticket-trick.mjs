export default {
  editorialVoice: 'hackportugal',
  id: 'siga-app-ticket-trick',
  categoryId: 'digital_gov',
  title: 'SigaApp + ePortugal: como tirar senha correctamente numa Loja de Cidadão',
  tldr: 'A SigaApp é a forma oficial de tirar uma senha electrónica para muitas Loja de Cidadão e Espaço Cidadão antes de chegar, em vez de ficar junto à máquina. Truque prático para 2026: abra o ePortugal/Siga, veja as filas em várias Lojas próximas e tire a senha cerca de 20–30 minutos antes da chegada. As senhas remotas normalmente têm uma janela/atraso de 30 minutos, mas se for chamado e não estiver presente — a senha expira. Nem todos os serviços estão disponíveis sem marcação: AIMA, IRN, Finanças e Segurança Social têm frequentemente regras próprias.',
  tags: ['siga', 'eportugal', 'loja', 'senha'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-solves',
      title: 'O que a SigaApp resolve',
      content: [
        { kind: 'paragraph', text: 'Uma Loja de Cidadão é um espaço comum com vários serviços: IRN, Finanças, Segurança Social, Espaço Cidadão, por vezes IMT, IEFP, EDP, telecomunicações e balcões municipais. As filas são diferentes: uma fila curta para entrar no edifício não significa uma fila curta para o serviço de que precisa.' },
        { kind: 'paragraph', text: 'A SigaApp e o portal ePortugal mostram atendimento presencial, serviços disponíveis, senhas actuais e, por vezes, permitem tirar talão/senha remotamente. A principal vantagem é não ir às cegas: pode comparar várias Lojas na cidade e escolher aquela onde a fila real é mais curta.' },
        { kind: 'warning', text: 'A SigaApp não substitui a marcação se um serviço específico atender apenas por agendamento. Tenha especial cuidado com AIMA, IRN, Finanças e Segurança Social: algumas operações funcionam por marcação, outras por fila presencial, e as regras variam consoante o balcão.' }
      ]
    },
    {
      id: 'install-and-setup',
      title: 'Preparação: aplicação, idioma, geolocalização',
      content: [
        { kind: 'checklist', items: [
          'Instale a SigaApp a partir da App Store / Google Play com antecedência, não à porta da Loja.',
          'Active a geolocalização: a aplicação procura os pontos de atendimento mais próximos.',
          'Consulte ePortugal.gov.pt: existem páginas das Lojas de Cidadão, moradas, horários e serviços disponíveis.',
          'Tenha à mão o NIF, número de processo ou documento — alguns serviços exigem dados antes de emitir a senha.',
          'Se tiver CMD ou Cartão de Cidadão, podem ser úteis no ePortugal, mas para uma senha comum na SigaApp muitas vezes não são obrigatórios.',
          'Identifique antecipadamente 2–3 Loja de Cidadão alternativas num raio de 20–40 minutos: a fila pode mudar rapidamente.',
          'Verifique o horário: muitos balcões deixam de emitir novas senhas antes do encerramento oficial do edifício.'
        ] }
      ]
    },
    {
      id: 'thirty-minute-trick',
      title: 'O truque dos 30 minutos: tirar senha antes de chegar',
      content: [
        { kind: 'paragraph', text: 'Na prática: não espere até estar junto à máquina. 20–30 minutos antes da chegada, abra a SigaApp, escolha a Loja de Cidadão, o serviço necessário e o tipo de atendimento, e depois tire a senha. Isto permite “entrar na fila” ainda a caminho.' },
        { kind: 'paragraph', text: 'As senhas remotas seguem frequentemente uma lógica de 30 minutos: o sistema pode ter em conta que a pessoa precisa de tempo para chegar, ou mostrar uma janela em que deve apresentar-se. Por isso, tirar senha com 2 horas de antecedência é arriscado: a fila pode avançar mais depressa, pode ser chamado e a senha será perdida.' },
        { kind: 'checklist', items: [
          'Se está a 5 minutos da Loja — veja primeiro a velocidade da fila, não tire a senha demasiado cedo.',
          'Se está a 20–30 minutos da Loja — esta é normalmente a janela ideal para tirar a senha antecipadamente.',
          'Se a fila estiver a avançar muito depressa — é melhor tirar a senha mais perto do local.',
          'Se a fila estiver parada — pode tirar mais cedo, mas acompanhe o ecrã na aplicação.',
          'Faça uma captura de ecrã do número da senha para o caso de haver problemas com a internet.',
          'Ao chegar, encontre imediatamente os ecrãs de chamada e a zona/serviço correcto.',
          'Se o número já tiver passado — vá ao balcão apenas para perguntar educadamente; na maioria dos casos terá de tirar uma nova senha.'
        ] },
        { kind: 'warning', text: 'Não tire várias senhas “por precaução” em serviços diferentes se não conseguir apresentar-se fisicamente a tempo. Isto prejudica a fila dos outros e muitas vezes acaba com todas as senhas expiradas.' }
      ]
    },
    {
      id: 'choose-by-live-queue',
      title: 'Como escolher a Loja pela fila real',
      content: [
        { kind: 'paragraph', text: 'As páginas oficiais do ePortugal indicam moradas e a lista de serviços, mas a decisão é melhor tomada pela SigaApp: veja as senhas actuais, o movimento aproximado da fila e a disponibilidade de senha remota.' },
        { kind: 'checklist', items: [
          'Escolha primeiro o serviço, não o edifício: por exemplo, “Finanças”, “Segurança Social”, “Cartão de Cidadão”, “Espaço Cidadão”.',
          'Compare 2–3 Lojas: a mais próxima nem sempre é a mais rápida.',
          'Veja não só o número de pessoas em espera, mas também a velocidade de chamada: se em 10 minutos chamaram 1 número — a fila está pesada.',
          'Verifique se existem filas separadas: informação, entrega, levantamento e atendimento geral podem avançar a ritmos diferentes.',
          'A manhã nem sempre é melhor: nas Lojas maiores, o pico pode ocorrer logo após a abertura.',
          'Antes do almoço e nos 60–90 minutos antes do fecho, o risco é maior: a emissão de talões pode ser limitada.',
          'Nos Espaço Cidadão mais pequenos há menos serviços, mas para operações simples a fila é frequentemente mais curta.'
        ] }
      ]
    },
    {
      id: 'at-the-location',
      title: 'No local: o que fazer depois de chegar',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-screen', title: '1. Encontre o ecrã de chamada', content: [
            { kind: 'paragraph', text: 'Numa Loja de Cidadão há normalmente vários ecrãs e zonas. Certifique-se de que está a olhar para o ecrã do seu serviço, e não para o de um balcão vizinho.' }
          ] },
          { id: 'watch-number', title: '2. Acompanhe a senha', content: [
            { kind: 'paragraph', text: 'O número na aplicação e o número no ecrã devem coincidir. Por vezes, a letra antes do número é mais importante do que o próprio número: A123 e F123 são filas diferentes.' }
          ] },
          { id: 'documents-ready', title: '3. Prepare os documentos antes da chamada', content: [
            { kind: 'checklist', items: [
              'Passaporte ou Cartão de Cidadão / autorização de residência, se tiver.',
              'NIF, se a operação estiver relacionada com Finanças, contratos, morada ou impostos.',
              'NISS, se for à Segurança Social.',
              'Comprovativo de morada: contrato de arrendamento, factura, atestado de residência — consoante a situação.',
              'Número da marcação/agendamento, se existir.',
              'PDF ou impressões: nem todos os balcões aceitam documentos apenas “no telemóvel”.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'when-it-will-not-work',
      title: 'Quando a SigaApp não o vai salvar',
      content: [
        { kind: 'paragraph', text: 'A SigaApp é uma ferramenta de fila, não uma garantia de serviço. Se o seu assunto exigir marcação prévia, se não houver funcionário, se as vagas diárias tiverem esgotado ou se o sistema do serviço específico estiver desligado, a senha electrónica não ajudará.' },
        { kind: 'checklist', items: [
          'AIMA: a maioria dos processos de imigração depende de agendamento e notificações da AIMA, não da fila normal da Loja.',
          'IRN: Cartão de Cidadão, passaporte, nacionalidade, registos e Conservatória podem ter filas e limites diferentes.',
          'Finanças: muitas operações são mais rápidas através do Portal das Finanças ou do e-balcão do que deslocando-se à Loja.',
          'Segurança Social: algumas questões estão disponíveis através da Segurança Social Direta; o atendimento presencial pode exigir palavra-passe/marcação.',
          'SNS/utente normalmente resolve-se no Centro de Saúde, não numa Loja de Cidadão.',
          'Se a aplicação não mostrar talão remoto para o serviço de que precisa, isso significa que nesse balcão, nesse momento, é necessário tirar senha no local ou fazer marcação separada.'
        ] },
        { kind: 'warning', text: 'Verifique sempre a página da Loja específica no ePortugal no dia da visita: horários, serviços disponíveis e restrições mudam mais depressa do que as placas no edifício.' }
      ]
    }
  ],
  sources: [
    {
      title: 'ePortugal: acesso aos serviços públicos e atendimento nas Lojas de Cidadão',
      url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nas-lojas-de-cidadao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: portal oficial dos serviços públicos',
      url: 'https://eportugal.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
