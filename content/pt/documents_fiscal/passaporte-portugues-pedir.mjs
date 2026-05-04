export default {
  editorialVoice: 'hackportugal',
  id: 'passaporte-portugues-pedir',
  categoryId: 'documents_fiscal',
  title: 'Obter o passaporte português: IRN, agendamento e preços',
  tldr: 'O Passaporte Eletrónico Português é emitido apenas a cidadãos portugueses: autorização de residência, NIF ou longa permanência no país, por si só, não dão direito ao passaporte. Em abril de 2026 a taxa base para um pedido normal em Portugal — 65 €. Os regimes urgentes são mais caros: referência 85 € para expresso e mais para urgente/aeroporto. A marcação faz-se via justiça.gov.pt, IRN, Loja de Cidadão ou por telefone. A foto, assinatura e biometria são recolhidas no local; os adultos precisam do Cartão de Cidadão.',
  tags: ['passaporte', 'irn', 'documentos', 'agendamento'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-apply',
      title: 'Quem pode obter o passaporte 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'O passaporte português é um documento de cidadão português. Não pode ser obtido com autorização de residência, D7, D8, NIF, compra de imóvel ou 5 anos de residência de forma automática. Primeiro tem de existir cidadania portuguesa e o registo no sistema português do registo civil.' },
        { kind: 'checklist', items: [
          'É cidadão português por nascimento, casamento, naturalização ou outro fundamento',
          'O nascimento ou a aquisição da nacionalidade está registado na Conservatória / IRN',
          'Tem um Cartão de Cidadão válido ou, em casos antigos, um Bilhete de Identidade',
          'Os dados no Cartão de Cidadão estão atualizados: nome, data de nascimento, nacionalidade, assinatura',
          'Se o passaporte for para uma criança, a criança também tem de ser cidadã portuguesa',
          'Se só agora obteve a aprovação da nacionalidade, aguarde o assento de nascimento e trate primeiro do Cartão de Cidadão'
        ] },
        { kind: 'warning', text: 'A nova legislação da nacionalidade (Decreto AR 48/XVII) foi promulgada pelo Presidente Seguru em 03.05.2026 e entra em vigor após publicação no Diário da República. Para o passaporte, o que importa não é o facto de ter apresentado o pedido de nacionalidade, mas sim o registo da nacionalidade já concluído.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para o IRN ou Loja de Cidadão',
      content: [
        { kind: 'paragraph', text: 'Na maioria dos casos comuns não é necessário levar fotografia separada: a foto, a assinatura e os dados biométricos são recolhidos diretamente no balcão. As impressões digitais são recolhidas segundo as regras do passaporte biométrico; para crianças pequenas o procedimento é diferente.' },
        { kind: 'checklist', items: [
          'Cartão de Cidadão válido e fisicamente consigo',
          'Passaporte Eletrónico Português antigo, se for renovação ou substituição',
          'Comprovativo de agendamento, se marcou online',
          'Meio de pagamento: cartão, Multibanco ou numerário, se o balcão em causa os aceitar',
          'Para menor: presença da criança',
          'Para menor: Cartão de Cidadão da criança',
          'Para menor: presença do progenitor ou representante legal com documento de identificação',
          'Em caso de perda ou roubo do passaporte: declaração de perda/roubo; por vezes é exigida participação policial ou declaração conforme a situação'
        ] },
        { kind: 'warning', text: 'Não planeie requerer o passaporte no mesmo dia em que recebeu o Cartão de Cidadão após naturalização. Os dados têm de aparecer corretamente nos sistemas do IRN; por vezes é mais seguro aguardar alguns dias.' }
      ]
    },
    {
      id: 'where-book',
      title: 'Onde marcar: agendamento',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o passaporte é tratado nos balcões do Passaporte Eletrónico Português: postos do IRN, algumas Lojas de Cidadão, estruturas das Regiões Autónomas dos Açores e da Madeira. No estrangeiro — através dos consulados. Para um residente em Portugal, o caminho mais comum é marcar online em justiça.gov.pt ou escolher a Loja de Cidadão mais próxima.' },
        { kind: 'checklist', items: [
          'Abra justiça.gov.pt e procure o serviço Pedir o passaporte eletrónico português',
          'Escolha o concelho/zona e um balcão disponível do IRN / Loja de Cidadão',
          'Confirme que a marcação é para passaporte e não para Cartão de Cidadão',
          'Se não houver vagas online, tente concelhos vizinhos, não apenas Lisboa ou Porto',
          'Para casos urgentes, verifique balcões com regime expresso / urgente',
          'Também pode telefonar para a Linha Registos: +351 211 950 500',
          'Nas grandes cidades, as vagas costumam aparecer em blocos de manhã ou após cancelamentos'
        ] },
        { kind: 'paragraph', text: 'No dia da visita, chegue 10–15 minutos antes. O operador verificará a sua identidade, recolherá a foto, a assinatura e a biometria, imprimirá o comprovativo do pedido e indicará a data/local de levantamento.' }
      ]
    },
    {
      id: 'fees-and-speed',
      title: 'Preços e prazos em 2026',
      content: [
        { kind: 'paragraph', text: 'O preço base de um passaporte normal pedido em Portugal é 65 €. Esta é a taxa estatal para um pedido padrão. Os regimes urgentes são mais caros e dependem do tipo escolhido: expresso, urgente ou urgente aeroporto.' },
        { kind: 'checklist', items: [
          'Normal: 65 €, prazo de emissão padrão',
          'Expresso: referência 85 €, mais rápido do que o regime normal',
          'Urgente: mais caro do que o expresso; verifique o preço no momento da marcação e no balcão',
          'Urgente aeroporto: o regime urgente mais caro, disponível nem em todos os locais',
          'Entrega para morada, se disponível e escolhida, é paga à parte',
          'O pagamento é, normalmente, efetuado no ato do pedido',
          'Os prazos contam em dias úteis e dependem do momento do pedido e do local de levantamento'
        ] },
        { kind: 'warning', text: 'Não compre bilhetes com base no prazo prometido sem margem. Mesmo em regime urgente podem ocorrer atrasos por problemas técnicos, feriados, erros nos dados do Cartão de Cidadão ou necessidade de verificação adicional.' }
      ]
    },
    {
      id: 'validity-and-pickup',
      title: 'Validade e levantamento',
      content: [
        { kind: 'paragraph', text: 'O Passaporte Eletrónico Português tem validade limitada. Pelas regras oficiais, para um passaporte comum a validade é geralmente de 5 anos; para crianças muito pequenas pode ser mais curta. Antes da viagem verifique os requisitos do país de destino: muitos exigem que o passaporte seja válido por pelo menos mais 6 meses após a entrada.' },
        { kind: 'checklist', items: [
          'O passaporte deve ser levantado no local indicado no comprovativo do pedido',
          'Leve o Cartão de Cidadão e o recibo/comprovativo do pedido',
          'O passaporte antigo pode ser anulado; se contiver vistos válidos, pergunte antecipadamente se o pode manter na sua posse já anulado',
          'Verifique o nome, a data de nascimento, o número do passaporte e a validade no próprio balcão',
          'Para criança, o levantamento é normalmente feito por um progenitor ou representante legal',
          'Se o passaporte não for levantado a tempo, confirme no balcão por quanto tempo é guardado até devolução/arquivamento'
        ] },
        { kind: 'paragraph', text: 'O passaporte português não substitui o Cartão de Cidadão em Portugal. Para impostos, SNS, banco, CMD e a maioria dos procedimentos internos, o documento principal continua a ser o Cartão de Cidadão.' }
      ]
    }
  ],
  costs: [
    { label: 'Pedido normal de Passaporte Eletrónico Português em Portugal', amountEUR: 65, note: 'Taxa estatal base na data da verificação; prazo de emissão padrão' },
    { label: 'Pedido expresso', amountEUR: 85, note: 'Regime acelerado; disponibilidade e prazo efetivo dependem do balcão' },
    { label: 'Urgente / aeroporto', amountEURMin: 95, amountEURMax: 100, note: 'Para viagens urgentes; não se aplica em todos os locais e pode exigir um regime de pedido próprio' }
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
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
