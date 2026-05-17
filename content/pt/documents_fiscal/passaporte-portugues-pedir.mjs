export default {
  editorialVoice: 'hackportugal',
  id: 'passaporte-portugues-pedir',
  categoryId: 'documents_fiscal',
  title: 'Obter o passaporte português: IRN, agendamento e preços',
  tldr: 'O Passaporte Eletrónico Português é emitido apenas a cidadãos portugueses: autorização de residência, NIF ou muitos anos de vida no país, por si só, não dão direito a passaporte. Em abril de 2026, a taxa base para um pedido normal em Portugal é de 65 €. Os regimes urgentes custam mais: referência de 85 € para expresso e valores superiores para urgente/aeroporto. O agendamento é feito através de justiça.gov.pt, IRN, Loja de Cidadão ou por telefone. A fotografia, assinatura e biometria são recolhidas no local; os adultos precisam do Cartão de Cidadão.',
  tags: ['passaporte', 'irn', 'documentos', 'agendamento'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-apply',
      title: 'Quem pode realmente obter um passaporte 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'O passaporte português é um documento de cidadão português. Não pode ser obtido com autorização de residência, D7, D8, NIF, compra de habitação ou 5 anos de residência de forma automática. Primeiro, é necessário ter nacionalidade portuguesa e o respetivo registo no sistema português de registo civil.' },
        { kind: 'checklist', items: [
          'Você já é cidadão português por nascimento, casamento, naturalização ou outro fundamento',
          'O seu nascimento ou a aquisição da nacionalidade está registado na Conservatória / IRN',
          'Tem um Cartão de Cidadão válido ou, em casos antigos, Bilhete de Identidade',
          'Os dados no Cartão de Cidadão estão atualizados: nome, data de nascimento, nacionalidade, assinatura',
          'Se o passaporte for necessário para uma criança, a criança também deve ser cidadã portuguesa',
          'Se acabou de obter a aprovação da nacionalidade, aguarde pelo assento de nascimento e trate primeiro do Cartão de Cidadão'
        ] },
        { kind: 'warning', text: 'A nova legislação da nacionalidade (Decreto AR 48/XVII) foi promulgada pelo Presidente Seguro em 03.05.2026 e entrará em vigor após publicação no Diário da República. Para o passaporte, o que importa não é o facto de ter apresentado o pedido de nacionalidade, mas sim o registo da nacionalidade já concluído.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para o IRN ou Loja de Cidadão',
      content: [
        { kind: 'paragraph', text: 'Na maioria dos casos normais, não é necessário levar uma fotografia em separado: a fotografia, a assinatura e os dados biométricos são recolhidos diretamente ao balcão. As impressões digitais são recolhidas segundo as regras do passaporte biométrico; no caso de crianças pequenas, o procedimento é diferente.' },
        { kind: 'checklist', items: [
          'Cartão de Cidadão válido e consigo em formato físico',
          'Passaporte Eletrónico Português antigo, se for uma renovação ou substituição',
          'Confirmação do agendamento, se tiver feito a marcação online',
          'Meio de pagamento: cartão, Multibanco ou numerário, se o balcão concreto o aceitar',
          'Para menor: presença da criança',
          'Para menor: Cartão de Cidadão da criança',
          'Para menor: presença de um dos pais ou representante legal com documento',
          'Em caso de perda ou roubo do passaporte: declaração de perda/roubo; por vezes é exigida a intervenção da polícia ou uma declaração conforme a situação'
        ] },
        { kind: 'warning', text: 'Não planeie pedir o passaporte no mesmo dia em que acabou de receber o Cartão de Cidadão após a naturalização. Os dados devem aparecer corretamente nos sistemas do IRN; por vezes é mais seguro esperar alguns dias.' }
      ]
    },
    {
      id: 'where-book',
      title: 'Onde marcar: agendamento',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o passaporte é tratado nos balcões do Passaporte Eletrónico Português: serviços do IRN, algumas Lojas de Cidadão, estruturas da Região Autónoma dos Açores e da Madeira. No estrangeiro, através dos consulados. Para um residente em Portugal, o caminho mais comum é fazer o agendamento online em justiça.gov.pt ou escolher a Loja de Cidadão mais próxima.' },
        { kind: 'checklist', items: [
          'Abra justiça.gov.pt e procure o serviço Pedir o passaporte eletrónico português',
          'Escolha o distrito e um balcão IRN / Loja de Cidadão disponível',
          'Confirme que o agendamento é mesmo para passaporte, e não para Cartão de Cidadão',
          'Se não houver vagas online, tente concelhos vizinhos, não apenas Lisboa ou Porto',
          'Para casos urgentes, verifique balcões com regime expresso / urgente',
          'Pode ligar para a Linha Registos: +351 211 950 500',
          'Nas grandes cidades, as vagas aparecem muitas vezes por vagas de manhã ou após cancelamentos'
        ] },
        { kind: 'paragraph', text: 'No dia da visita, chegue com 10-15 minutos de antecedência. O funcionário confirmará a identidade, recolherá a fotografia, a assinatura e a biometria, imprimirá a confirmação do pedido e indicará a data/local de levantamento.' }
      ]
    },
    {
      id: 'fees-and-speed',
      title: 'Preços e prazos em 2026',
      content: [
        { kind: 'paragraph', text: 'O preço base do passaporte normal pedido em Portugal é de 65 €. Trata-se da taxa pública para um pedido padrão. Os regimes urgentes custam mais e dependem do tipo escolhido: expresso, urgente ou urgente aeroporto.' },
        { kind: 'checklist', items: [
          'Normal: 65 €, prazo de produção padrão',
          'Expresso: referência de 85 €, mais rápido do que o regime normal',
          'Urgente: mais caro do que expresso; confirme o preço no momento do agendamento e no balcão',
          'Urgente aeroporto: o regime urgente mais caro, não está disponível em todos os locais',
          'A entrega numa morada, se disponível e escolhida, é paga à parte',
          'O pagamento é normalmente feito no momento da apresentação do pedido',
          'Os prazos contam-se em dias úteis e dependem da hora de apresentação e do local de levantamento'
        ] },
        { kind: 'warning', text: 'Não compre bilhetes com base no prazo prometido sem margem de segurança. Mesmo em regime urgente, podem ocorrer atrasos devido a problemas técnicos, feriados, erros nos dados do Cartão de Cidadão ou necessidade de verificação adicional.' }
      ]
    },
    {
      id: 'validity-and-pickup',
      title: 'Validade e levantamento',
      content: [
        { kind: 'paragraph', text: 'O Passaporte Eletrónico Português tem um prazo de validade limitado. Segundo as regras oficiais, no caso de um passaporte normal, a validade é geralmente de 5 anos; para crianças muito pequenas, o prazo pode ser mais curto. Antes de viajar, confirme os requisitos do país de destino: muitos Estados exigem que o passaporte esteja válido por pelo menos mais 6 meses após a entrada.' },
        { kind: 'checklist', items: [
          'O passaporte deve ser levantado no local indicado no comprovativo do pedido',
          'Leve o Cartão de Cidadão e o recibo/confirmação do pedido',
          'O passaporte antigo pode ser anulado; se tiver vistos válidos, pergunte antecipadamente se pode ficar com ele anulado',
          'Verifique o nome, a data de nascimento, o número do passaporte e a validade diretamente ao balcão',
          'No caso de uma criança, o levantamento é normalmente feito por um dos pais ou representante legal',
          'Se não levantar o passaporte a tempo, confirme junto do balcão durante quanto tempo fica guardado antes de devolução/arquivo'
        ] },
        { kind: 'paragraph', text: 'O passaporte português não substitui o Cartão de Cidadão dentro de Portugal. Para impostos, SNS, banco, CMD e a maioria dos procedimentos internos, o documento principal continua a ser o Cartão de Cidadão.' }
      ]
    }
  ],
  costs: [
    { label: 'Pedido normal de Passaporte Eletrónico Português em Portugal', amountEUR: 65, note: 'Taxa pública base à data da verificação; prazo de produção padrão' },
    { label: 'Pedido expresso', amountEUR: 85, note: 'Regime acelerado; a disponibilidade e o prazo efetivo dependem do balcão' },
    { label: 'Urgente / aeroporto', amountEURMin: 95, amountEURMax: 100, note: 'Para viagens urgentes; não se aplica em todos os locais e pode exigir um regime de pedido separado' }
  ],
  sources: [
    {
      title: 'Portal oficial do Passaporte Eletrónico Português',
      url: 'https://www.passaporte.mai.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: Pedir o passaporte eletrónico português',
      url: 'https://justica.gov.pt/Servicos/Pedir-o-passaporte-eletronico-portugues',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: agendamento de serviços do IRN',
      url: 'https://justica.gov.pt/Servicos/Agendar-atendimento-nos-servicos-do-IRN',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
