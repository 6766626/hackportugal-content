export default {
  editorialVoice: 'hackportugal',
  id: 'passaporte-portugues-pedir',
  categoryId: 'documents_fiscal',
  title: 'Obter o passaporte português: IRN, agendamento e preços',
  tldr: 'O Passaporte Eletrónico Português é emitido apenas a cidadãos portugueses: a autorização de residência, o NIF ou muitos anos de residência no país, por si só, não conferem direito ao passaporte. Em abril de 2026, a taxa base para um pedido normal em Portugal é de 65 €. Os regimes urgentes são mais caros: referência de 85 € para expresso e mais para urgente/aeroporto. A marcação faz-se através de justiça.gov.pt, IRN, Loja de Cidadão ou por telefone. A fotografia, a assinatura e a biometria são recolhidas no local; os adultos precisam do Cartão de Cidadão.',
  tags: ['passaporte', 'irn', 'documentos', 'agendamento'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-apply',
      title: 'Quem pode obter o passaporte 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'O passaporte português é um documento de cidadão português. Não é possível obtê-lo com uma autorização de residência, D7, D8, NIF, compra de imóvel ou 5 anos de residência de forma automática. Primeiro tem de existir cidadania portuguesa e registo no sistema do registo civil português.' },
        { kind: 'checklist', items: [
          'Você já é cidadão português por nascimento, casamento, naturalização ou outro fundamento',
          'O seu nascimento ou a aquisição de cidadania estão registados na Conservatória / IRN',
          'Tem um Cartão de Cidadão válido ou, em casos antigos, um Bilhete de Identidade',
          'Os dados no Cartão de Cidadão estão atualizados: nome, data de nascimento, nacionalidade, assinatura',
          'Se o passaporte for para uma criança, a criança também deve ser cidadã portuguesa',
          'Se acabou de obter a aprovação da cidadania, aguarde o assento de nascimento e trate primeiro do Cartão de Cidadão'
        ] },
        { kind: 'warning', text: 'A nova legislação da nacionalidade, aprovada em 01.04.2026, à data da verificação ainda não se encontra promulgada nem em vigor. Para o passaporte, o relevante não é o facto de ter sido apresentado o pedido de cidadania, mas sim o registo da cidadania concluído.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para o IRN ou Loja de Cidadão',
      content: [
        { kind: 'paragraph', text: 'Na maioria dos casos comuns, não é necessário levar fotografia separada: a foto, a assinatura e os dados biométricos são recolhidos no balcão. As impressões digitais são colhidas segundo as regras do passaporte biométrico; para crianças pequenas o procedimento é diferente.' },
        { kind: 'checklist', items: [
          'Cartão de Cidadão válido e fisicamente consigo',
          'Passaporte Eletrónico Português anterior, se for renovação ou substituição',
          'Comprovativo da marcação (agendamento), se marcou online',
          'Meio de pagamento: cartão, Multibanco ou numerário, se o balcão em causa os aceitar',
          'Para menor: presença da criança',
          'Para menor: Cartão de Cidadão da criança',
          'Para menor: presença de um dos pais ou representante legal com documento',
          'Em caso de perda ou roubo do passaporte: declaração de perda/roubo; por vezes é exigida participação policial ou declaração consoante a situação'
        ] },
        { kind: 'warning', text: 'Não planeie pedir o passaporte no mesmo dia em que recebeu o Cartão de Cidadão após a naturalização. Os dados têm de aparecer corretamente nos sistemas do IRN; por vezes é mais seguro aguardar alguns dias.' }
      ]
    },
    {
      id: 'where-book',
      title: 'Onde marcar: agendamento',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o passaporte é tratado nos balcões do Passaporte Eletrónico Português: serviços do IRN, algumas Lojas de Cidadão, e estruturas das Regiões Autónomas dos Açores e da Madeira. No estrangeiro, através dos consulados. Para residentes em Portugal, o mais comum é marcar online em justiça.gov.pt ou escolher a Loja de Cidadão mais próxima.' },
        { kind: 'checklist', items: [
          'Aceda a justiça.gov.pt e procure o serviço "Pedir o passaporte eletrónico português"',
          'Escolha o distrito/concelho e um balcão disponível do IRN / Loja de Cidadão',
          'Confirme que a marcação é para passaporte e não para Cartão de Cidadão',
          'Se não houver vagas online, tente concelhos vizinhos, não apenas Lisboa ou Porto',
          'Para casos urgentes, verifique balcões com regime expresso / urgente',
          'Também pode ligar para a Linha Registos: +351 211 950 500',
          'Nas grandes cidades, as vagas costumam surgir em ondas de manhã ou após cancelamentos'
        ] },
        { kind: 'paragraph', text: 'No dia da visita, chegue 10-15 minutos antes. O operador confirmará a sua identidade, recolherá a foto, assinatura e biometria, imprimirá o comprovativo do pedido e indicará a data/local de levantamento.' }
      ]
    },
    {
      id: 'fees-and-speed',
      title: 'Preços e prazos em 2026',
      content: [
        { kind: 'paragraph', text: 'O preço base de um passaporte normal pedido em Portugal é 65 €. Esta é a taxa estatal para o pedido padrão. Os regimes urgentes são mais caros e dependem do tipo escolhido: expresso, urgente ou urgente aeroporto.' },
        { kind: 'checklist', items: [
          'Normal: 65 €, prazo de emissão padrão',
          'Expresso: referência de 85 €, mais rápido do que o regime normal',
          'Urgente: mais caro do que expresso; confirme o preço na altura da marcação e no balcão',
          'Urgente aeroporto: o regime urgente mais caro, não disponível em todo o lado',
          'Entrega para morada, quando disponível e escolhida, é paga à parte',
          'O pagamento é normalmente efetuado no momento do pedido',
          'Os prazos contam em dias úteis e dependem da hora do pedido e do local de levantamento'
        ] },
        { kind: 'warning', text: 'Não compre bilhetes com base no prazo prometido sem margem. Mesmo em regime urgente podem ocorrer atrasos por problemas técnicos, feriados, erros nos dados do Cartão de Cidadão ou necessidade de verificação adicional.' }
      ]
    },
    {
      id: 'validity-and-pickup',
      title: 'Validade e levantamento',
      content: [
        { kind: 'paragraph', text: 'O Passaporte Eletrónico Português tem prazo de validade limitado. As regras oficiais indicam, para o passaporte normal, validade geralmente de 5 anos; para crianças muito pequenas o prazo pode ser mais curto. Antes de viajar, verifique os requisitos do país de destino: muitos exigem que o passaporte seja válido por pelo menos 6 meses após a entrada.' },
        { kind: 'checklist', items: [
          'Levante o passaporte no local indicado no comprovativo do pedido',
          'Leve o Cartão de Cidadão e o recibo/comprovativo do pedido',
          'O passaporte antigo pode ser anulado; se nele existirem vistos válidos, confirme antecipadamente se pode ficar com ele anulado na sua posse',
          'Confirme nome, data de nascimento, número do passaporte e validade no próprio balcão',
          'Para criança, o levantamento é normalmente feito por um dos pais ou representante legal',
          'Se o passaporte não for levantado a tempo, confirme no balcão quanto tempo é guardado antes de devolução/arquivo'
        ] },
        { kind: 'paragraph', text: 'O passaporte português não substitui o Cartão de Cidadão dentro de Portugal. Para Finanças, SNS, banco, CMD e a maioria dos procedimentos internos, o documento principal continua a ser o Cartão de Cidadão.' }
      ]
    }
  ],
  costs: [
    { label: 'Pedido normal de Passaporte Eletrónico Português em Portugal', amountEUR: 65, note: 'Taxa base do Estado à data da verificação; prazo de emissão padrão' },
    { label: 'Pedido expresso', amountEUR: 85, note: 'Regime acelerado; disponibilidade e prazo efetivo dependem do balcão' },
    { label: 'Urgente / aeroporto', amountEURMin: 95, amountEURMax: 100, note: 'Para viagens urgentes; não disponível em todos os locais e pode exigir regime de pedido específico' }
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
      title: 'Justiça.gov.pt: agendamento dos serviços do IRN',
      url: 'https://justica.gov.pt/Servicos/Agendar-atendimento-nos-servicos-do-IRN',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
