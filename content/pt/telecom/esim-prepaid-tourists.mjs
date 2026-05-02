export default {
  editorialVoice: 'hackportugal',
  id: 'esim-prepaid-tourists',
  categoryId: 'telecom',
  title: 'SIM pré-pago e eSIM em Portugal: MEO, NOS, Vodafone',
  tldr: 'Em 2026, para começar rapidamente em Portugal, o mais simples é comprar um SIM pré-pago da MEO, NOS ou Vodafone: normalmente 10–25 € por um pacote inicial, carregamento por Multibanco/MB WAY/app. Todas as três têm eSIM, mas o eSIM pré-pago é muitas vezes activado apenas numa loja da marca, com passaporte; o NIF é útil para a factura e para a área de cliente, mas normalmente não é obrigatório para um pré-pago turístico. Na UE aplica-se o Roam Like at Home, mas o limite de GB em roaming pode ser inferior ao pacote doméstico.',
  tags: ['esim', 'pré-pago', 'telecomunicações', 'roaming'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'choose-operator',
      title: '1. Escolha o operador: a cobertura é mais importante do que a publicidade',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há três redes móveis principais: MEO, NOS e Vodafone. Todas têm SIM pré-pago, 4G quase em todo o lado e 5G nas grandes cidades. Para um expat, a diferença normalmente não está no preço, mas sim na cobertura em casa, no trabalho e em deslocações.' },
        { kind: 'checklist', items: [
          'MEO — tem frequentemente uma cobertura forte fora das grandes cidades e no litoral, e muitas lojas físicas.',
          'NOS — é conveniente se mais tarde for contratar internet fixa da NOS; os tarifários pré-pagos e youth costumam ser agressivos em GB.',
          'Vodafone — normalmente tem boa velocidade em Lisboa, Porto, Algarve e Madeira; procedimento de eSIM claro nas lojas.',
          'Se viver numa casa antiga com paredes grossas, verifique o sinal dentro do apartamento antes de transferir o número principal.',
          'Para trabalho remoto, não compre logo um pacote anual: compre um pré-pago para 1–2 semanas e faça speedtest de manhã, à noite e ao fim de semana.',
          'No metro de Lisboa e do Porto, normalmente há rede, mas a qualidade depende da linha e da estação.',
          'Nos Açores e em zonas rurais, verifique o mapa de cobertura do operador específico, não apenas uma classificação geral.'
        ] }
      ]
    },
    {
      id: 'sim-vs-esim',
      title: '2. SIM ou eSIM: o que é realmente mais simples em 2026',
      content: [
        { kind: 'paragraph', text: 'Um SIM físico pré-pago é mais fácil de comprar e activar: aeroporto, centro comercial, loja da marca, por vezes supermercado/quiosque. O eSIM é mais cómodo para iPhone e Android recentes, mas nos operadores portugueses o eSIM pré-pago exige muitas vezes uma visita à loja e um código QR.' },
        { kind: 'checklist', items: [
          'Verifique se o telefone não está bloqueado a um operador de outro país.',
          'Confirme que o modelo suporta eSIM na Europa: iPhone XS/XR e posteriores, muitos Samsung Galaxy S/Flip/Fold, Google Pixel, mas nem todas as versões regionais.',
          'Para eSIM é necessária internet durante a activação: Wi‑Fi na loja, hotel ou aeroporto.',
          'O código QR do eSIM é normalmente de utilização única: não apague o perfil sem necessidade.',
          'Ao trocar de telefone, normalmente é necessário pedir uma reemissão do eSIM ao operador; isto pode custar alguns euros ou ser gratuito em campanha.',
          'Se precisar de um número para bancos, AIMA, Finanças e entregas, é mais seguro ter um número português + SIM físico ou eSIM da MEO/NOS/Vodafone, e não apenas um travel eSIM sem número.',
          'Um travel eSIM de serviços internacionais é bom para internet nos primeiros dias, mas muitas vezes não fornece um número português para SMS.'
        ] },
        { kind: 'warning', text: 'Não compre eSIM na rua nem a um intermediário que peça para enviar uma foto do passaporte por messenger. Vá a uma loja oficial da MEO, NOS, Vodafone ou compre no site/app oficial.' }
      ]
    },
    {
      id: 'documents',
      title: '3. Documentos: passaporte, NIF e factura',
      content: [
        { kind: 'paragraph', text: 'Para um pré-pago normal em Portugal, o operador pode vender um cartão sem contrato longo, mas numa loja da marca quase sempre será pedido um documento para registar o cliente, recuperar o SIM/eSIM e emitir a factura. Para um estrangeiro, basta o passaporte ou o Cartão de Residência. O NIF nem sempre é obrigatório para um pacote turístico, mas é útil.' },
        { kind: 'checklist', items: [
          'Leve o passaporte ou o Cartão de Residência.',
          'Se tiver NIF — indique-o para a fatura; isto ajuda em reclamações, portabilidade do número e registo de despesas.',
          'Se ainda não tiver NIF, peça para fazer o pré-pago com o passaporte; em pontos turísticos é uma situação normal.',
          'Para eSIM, peça especificamente “prepaid eSIM” ou “cartão pré-pago em eSIM”, porque nem todos os vendedores propõem eSIM para pré-pago por defeito.',
          'Verifique o nome, número de telefone, tarifário e data do próximo débito antes de sair da loja.',
          'Guarde o suporte plástico do SIM ou o documento com PIN/PUK; o PUK é necessário se o SIM ficar bloqueado.',
          'Peça o talão/fatura com NIF ou sem NIF, mas com o nome do operador e a data da compra.'
        ] },
        { kind: 'warning', text: 'O NIF não deve transformar automaticamente um pré-pago num contrato com fidelização. Não assine “pacote”, “mensalidade” ou “contrato com fidelização” se o que precisa é precisamente um pré-pago sem compromissos.' }
      ]
    },
    {
      id: 'plans-and-costs',
      title: '4. Tarifários: ao que deve prestar atenção além dos GB',
      content: [
        { kind: 'paragraph', text: 'Os pré-pagos em Portugal funcionam muitas vezes com um débito semanal ou a cada 28/30 dias. Os GB anunciados podem incluir apps específicas, 5G, tráfego nocturno ou um bónus apenas no primeiro mês. Antes de pagar, verifique não só o preço, mas também a validade do pacote.' },
        { kind: 'checklist', items: [
          'Validade do pacote: 7 dias, 15 dias, 28 dias ou 30 dias.',
          'Débito automático: se houver saldo, o tarifário renova automaticamente.',
          'Preço fora do pacote: chamadas, SMS e internet sem pacote activo podem consumir rapidamente o saldo.',
          '5G: por vezes está incluído, por vezes depende do tarifário e da zona de cobertura.',
          'Hotspot/tethering: normalmente funciona, mas alguns pacotes turísticos ou “unlimited” podem ter limitações de fair use.',
          'Roaming na UE/EEE: aplica-se o Roam Like at Home, mas o limite de dados em roaming pode ser inferior aos GB domésticos.',
          'Chamadas para a Ucrânia, Federação Russa, CEI, EUA e Reino Unido são quase sempre cobradas à parte; WhatsApp/Telegram fica mais barato.',
          'Manutenção do número: se passar muito tempo sem carregar, o número pré-pago pode ser desactivado; as regras dependem do operador.'
        ] },
        { kind: 'paragraph', text: 'Referência prática para 2026: um SIM/eSIM pré-pago inicial custa normalmente 10–25 € com saldo ou pacote incluído. Internet móvel para uso diário — cerca de 10–30 € por 15–30 dias. Tarifários youth muito baratos podem exigir idade, estatuto de estudante ou condições específicas.' }
      ]
    },
    {
      id: 'activation-and-topup',
      title: '5. Activação, carregamento e portabilidade do número',
      content: [
        { kind: 'paragraph', text: 'O cenário mais simples: comprar o SIM/eSIM numa loja oficial, inserir/activar com a ajuda do funcionário, fazer uma chamada de teste, ligar os dados móveis e instalar imediatamente a app do operador.' },
        { kind: 'substeps', items: [
          { id: 'store-check', title: 'Na loja', content: [
            { kind: 'checklist', items: [
              'Peça para activar o idioma inglês na app, se estiver disponível.',
              'Verifique o APN: normalmente é configurado automaticamente, mas depois de um eSIM por vezes é necessário reiniciar o telefone.',
              'Faça uma chamada de saída ou envie um SMS, se o número for necessário para códigos bancários.',
              'Abra um site ou faça um speedtest através dos dados móveis.',
              'Confirme a data do próximo débito e o valor mínimo de carregamento.'
            ] }
          ] },
          { id: 'topup', title: 'Carregamento', content: [
            { kind: 'checklist', items: [
              'Multibanco: Pagamentos e Outros Serviços / Carregamentos Telemóveis.',
              'MB WAY: se já tiver um cartão português e o banco suportar MB WAY.',
              'App MEO/NOS/Vodafone: cartão, saldo, pacotes, por vezes PayPal/cartão.',
              'Caixa do supermercado ou quiosque: indique o operador e o número de telefone.',
              'O carregamento automático é cómodo, mas controle para que o tarifário não renove quando já tiver saído do país.'
            ] }
          ] },
          { id: 'portability', title: 'Portabilidade do número', content: [
            { kind: 'paragraph', text: 'Se já tiver um número português, pode fazer portabilidade entre MEO, NOS e Vodafone. É necessário o CVP — Código de Validação de Portabilidade. Pode obtê-lo junto do operador actual, na factura ou através da área de cliente/apoio ao cliente.' }
          ] }
        ] }
      ]
    },
    {
      id: 'roaming',
      title: '6. Roaming: a UE funciona, mas “ilimitado” não é ilimitado',
      content: [
        { kind: 'paragraph', text: 'Nos países da UE/EEE aplica-se a regra Roam Like at Home: chamadas, SMS e internet devem ser tarifados como em casa, se viver periodicamente ou tiver uma ligação estável a Portugal. Mas o operador tem o direito de aplicar fair use e um limite separado de GB em roaming, especialmente em tarifários baratos ou ilimitados.' },
        { kind: 'checklist', items: [
          'Antes da viagem, verifique na app “dados em roaming” ou “limite UE”.',
          'Em Andorra, Suíça, Turquia, Sérvia, Bósnia, Montenegro, Marrocos e Reino Unido, as regras da UE podem não se aplicar — consulte o tarifário separadamente.',
          'Em ferries e cruzeiros, o telefone pode ligar-se a uma rede por satélite/marítima com tráfego muito caro.',
          'Active o limite de dados móveis no telefone se viajar para fora da UE.',
          'Para viagens frequentes pela UE, escolha não os GB domésticos máximos, mas um tarifário com um EU roaming allowance claro.',
          'Se viver em Portugal, mas usar o SIM durante meses apenas noutro país da UE, o operador pode pedir um pagamento adicional por fair use.'
        ] },
        { kind: 'warning', text: '“Unlimited” num banner publicitário quase sempre significa domestic fair use. Para roaming, hotspot e utilização prolongada fora de Portugal, leia o PDF com as condições do tarifário.' }
      ]
    }
  ],
  costs: [
    { label: 'SIM/eSIM pré-pago inicial', amountEURMin: 10, amountEURMax: 25, note: 'Normalmente inclui saldo ou um pacote de 7–30 dias; o preço depende da campanha e do ponto de venda.' },
    { label: 'Pacote móvel pré-pago para 15–30 dias', amountEURMin: 10, amountEURMax: 30, note: 'Referência para MEO/NOS/Vodafone em 2026; consulte os GB exactos e a validade no PDF do tarifário.' },
    { label: 'Reemissão de SIM/eSIM', amountEURMin: 0, amountEURMax: 10, note: 'Pode ser gratuita em campanha ou paga em caso de substituição/perda; confirme na loja.' },
    { label: 'Carregamento por Multibanco/app', amountEURMin: 5, amountEURMax: 20, note: 'O valor mínimo depende do operador e do canal de carregamento.' }
  ],
  sources: [
    { title: 'ANACOM: informação para consumidores sobre roaming e comunicações móveis', url: 'https://www.anacom.pt/render.jsp?contentId=1670036', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'MEO: pré-pagos móveis e eSIM', url: 'https://www.meo.pt/servicos/movel/tarifarios-telemovel/pre-pagos', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'NOS: cartões móveis pré-pagos e eSIM', url: 'https://www.nos.pt/particulares/telemovel/tarifarios/pre-pagos', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Vodafone Portugal: tarifários pré-pagos e eSIM', url: 'https://www.vodafone.pt/telemoveis/tarifarios.html', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
