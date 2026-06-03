export default {
  editorialVoice: 'hackportugal',
  id: 'apple-pay-google-pay-pt',
  categoryId: 'banking',
  title: 'Apple Pay e Google Pay em Portugal — como configurar',
  tldr: 'Em Portugal, Apple Pay e Google Pay funcionam em todo o lado onde o terminal aceita contactless: supermercados, metro, táxis, restaurantes, online. Em abril de 2026, são suportados cartões de muitos bancos, incluindo CGD, Millennium bcp, Santander, ActivoBank, Banco Best e Revolut, mas cada cartão específico deve ser verificado na aplicação do banco/Wallet. O contactless normal sem PIN está limitado a 50 €, enquanto Apple Pay/Google Pay com Face ID/Touch ID/impressão digital normalmente passam também acima de 50 €, porque constituem autenticação forte. O MB WAY continua a ser a alternativa local.',
  tags: ['applepay', 'googlepay', 'mbway', 'bancos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-works',
      title: 'Onde isto funciona em Portugal',
      content: [
        { kind: 'paragraph', text: 'Apple Pay e Google Pay em Portugal são pagamentos normais por cartão Visa/Mastercard contactless através do telemóvel ou relógio. Se o terminal tiver o símbolo contactless, normalmente pode pagar com o telemóvel.' },
        { kind: 'checklist', items: [
          'Supermercados: Continente, Pingo Doce, Lidl, Aldi, Auchan, Mercadona',
          'Cafés, restaurantes, farmácias, postos de combustível, hotéis',
          'Táxis e serviços TVDE, se o motorista tiver um terminal com contactless',
          'Lojas online e aplicações, se no checkout houver Apple Pay ou Google Pay',
          'Máquinas de transporte e alguns torniquetes onde são aceites cartões bancários',
          'Terminais Multibanco de novo tipo — se o contactless estiver ativado pelo adquirente específico'
        ] },
        { kind: 'warning', text: 'Não confunda Apple Pay/Google Pay com Multibanco. Em Portugal, muitos pagamentos do dia a dia — luz, água, telecomunicações, impostos — são feitos através de entidade + referência no Multibanco/MB WAY. Apple Pay e Google Pay não substituem este sistema.' }
      ]
    },
    {
      id: 'supported-banks',
      title: 'Que bancos e cartões são suportados',
      content: [
        { kind: 'paragraph', text: 'O suporte depende não só do banco, mas também do tipo de cartão: débito/crédito, Visa/Mastercard, personal/business, por vezes até do país de emissão. O teste mais fiável é abrir a Wallet/Google Wallet ou a aplicação do banco e tentar adicionar o cartão.' },
        { kind: 'checklist', items: [
          'CGD / Caixa Geral de Depósitos — os cartões Caixa normalmente podem ser adicionados ao Apple Pay e ao Google Pay através da CaixaDirecta ou da Wallet',
          'Millennium bcp — suporta carteiras móveis para muitos cartões; confirme na app Millennium',
          'Santander Portugal — Apple Pay e Google Pay estão disponíveis para cartões Santander compatíveis',
          'ActivoBank — é frequentemente uma opção cómoda para expats; os cartões normalmente funcionam com Apple Pay/Google Pay',
          'Banco Best — o suporte depende do cartão; confirme na app Best Bank e na Wallet',
          'Revolut — uma das opções mais simples: o cartão virtual/físico é adicionado quase imediatamente após a abertura da conta',
          'Wise, N26, Openbank e outros cartões fintech da UE normalmente também funcionam, se o cartão tiver sido emitido num país suportado',
          'Cartão de refeição, cartões corporate e prepaid podem não ser adicionados, mesmo que o banco esteja na lista'
        ] },
        { kind: 'warning', text: 'As listas da Apple e da Google são atualizadas sem aviso específico. Se o banco estiver na lista, isso não garante o suporte de todos os cartões; se o banco não estiver, por vezes o cartão ainda assim é adicionado através de um emissor internacional.' }
      ]
    },
    {
      id: 'apple-pay-setup',
      title: 'Configurar Apple Pay no iPhone e no Apple Watch',
      content: [
        { kind: 'substeps', items: [
          { id: 'iphone', title: '1. Adicionar um cartão no iPhone', content: [
            { kind: 'checklist', items: [
              'Abra a Wallet',
              'Toque em “+”',
              'Escolha “Debit or Credit Card”',
              'Digitalize o cartão ou introduza os dados manualmente',
              'Aceite as condições do banco',
              'Confirme o cartão por SMS, chamada, email ou aplicação do banco',
              'Defina o cartão como predefinido, se quiser pagar primeiro com esse cartão'
            ] }
          ] },
          { id: 'watch', title: '2. Adicionar um cartão no Apple Watch', content: [
            { kind: 'paragraph', text: 'Abra a aplicação Watch no iPhone → Wallet & Apple Pay → Add Card. O cartão no relógio é tokenizado separadamente: se estiver no iPhone, isso nem sempre significa que já esteja no Apple Watch.' }
          ] },
          { id: 'pay', title: '3. Pagamento', content: [
            { kind: 'paragraph', text: 'Num iPhone com Face ID, prima duas vezes o botão lateral, confirme com Face ID e aproxime-o do terminal. Num iPhone com Touch ID, coloque o dedo no Touch ID. No Apple Watch, prima duas vezes o botão lateral.' }
          ] }
        ] },
        { kind: 'warning', text: 'Normalmente, a região do Apple ID não tem de ser Portugal para pagar com um cartão português, mas o dispositivo deve ter Face ID/Touch ID ou código de acesso. Sem bloqueio de ecrã, a Wallet não permitirá usar o cartão corretamente.' }
      ]
    },
    {
      id: 'google-pay-setup',
      title: 'Configurar Google Pay / Google Wallet no Android',
      content: [
        { kind: 'paragraph', text: 'Em 2026, para o utilizador, o Google Pay é a aplicação Google Wallet. O pagamento em loja funciona através de NFC. Em alguns telemóveis com firmware chinês ou sem Google Services, o pagamento contactless pode não funcionar.' },
        { kind: 'checklist', items: [
          'Instale a Google Wallet a partir do Google Play',
          'Ative o NFC: Settings → Connected devices → NFC',
          'Defina a Google Wallet como aplicação de pagamento predefinida',
          'Toque em “Add to Wallet” → “Payment card”',
          'Digitalize o cartão ou introduza os dados manualmente',
          'Confirme o cartão através do banco: SMS, push, app, chamada',
          'Verifique se o telemóvel tem bloqueio de ecrã: PIN, impressão digital, rosto ou palavra-passe',
          'Para pagar, desbloqueie o telemóvel e aproxime-o do terminal; normalmente não é necessário abrir a aplicação'
        ] },
        { kind: 'warning', text: 'Root, bootloader desbloqueado, versões antigas do Android, Google Play Services desativados ou restrições empresariais MDM podem bloquear o pagamento. Neste caso, o banco dirá que “o cartão é suportado”, mas a Google Wallet não permitirá pagar.' }
      ]
    },
    {
      id: 'limits-and-pin',
      title: 'Limites de 50 €, PIN e biometria',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o limite padrão para um pagamento contactless normal com cartão físico sem PIN é de 50 € por operação. Depois de várias operações pequenas seguidas (as regras limitam isto a cerca de 150 € ou cinco operações), o terminal ou o banco pode pedir o PIN devido às regras SCA.' },
        { kind: 'checklist', items: [
          'Um cartão físico contactless até 50 € normalmente passa sem PIN',
          'Um cartão físico acima de 50 € quase sempre exige PIN',
          'Apple Pay/Google Pay usam Face ID, Touch ID, impressão digital, PIN do telemóvel ou palavra-passe',
          'Devido à biometria, esses pagamentos são considerados autenticados e muitas vezes passam acima de 50 € sem o PIN do cartão',
          'Alguns terminais podem ainda assim pedir o PIN — é normal, especialmente em POS antigos',
          'O banco pode recusar uma operação invulgar e pedir para repetir o pagamento com cartão e PIN',
          'Para aluguer de automóvel, depósito de hotel e caução, por vezes exigem um cartão de crédito físico, e não a Wallet'
        ] },
        { kind: 'warning', text: 'Se o terminal pedir o PIN ao pagar com o telemóvel, introduza o PIN do cartão, não o código de desbloqueio do telemóvel. Se o cartão for virtual e não souber o PIN, consulte-o na aplicação do banco.' }
      ]
    },
    {
      id: 'mb-way-alternative',
      title: 'MB WAY como alternativa portuguesa',
      content: [
        { kind: 'paragraph', text: 'MB WAY é o sistema local da SIBS, associado a um número de telefone português e a um cartão bancário. Para viver em Portugal, é muitas vezes mais útil do que Apple Pay/Google Pay, porque cobre cenários quotidianos do Multibanco.' },
        { kind: 'checklist', items: [
          'Transferências imediatas por número de telefone dentro de Portugal',
          'Pagamento online através de MB WAY sem introduzir os dados do cartão',
          'Criação de cartões virtuais MB NET para compras na internet',
          'Levantamento de dinheiro no Multibanco sem cartão físico',
          'Pagamento de referências Multibanco: contas, impostos, serviços',
          'Divisão de conta entre amigos',
          'Pagamento por QR em algumas lojas e restaurantes',
          'Cómodo para OLX, arrendamento, transferências do dia a dia e pequenos pagamentos'
        ] },
        { kind: 'paragraph', text: 'A combinação ideal para um expat: Apple Pay/Google Pay para terminais e checkout online, MB WAY para transferências, referências e a infraestrutura portuguesa do dia a dia.' }
      ]
    }
  ],
  costs: [
    { label: 'Adicionar um cartão ao Apple Pay / Google Pay', amountEUR: 0, note: 'A Apple e a Google não cobram comissão ao utilizador por adicionar e pagar com cartão.' },
    { label: 'Pagamento em lojas em Portugal', amountEUR: 0, note: 'Normalmente sem comissão para o comprador; podem existir comissões do banco no seu cartão, se o cartão for estrangeiro ou a operação for noutra moeda.' }
  ],
  sources: [
    { title: 'Apple Support Portugal — Apple Pay, configuração e utilização', url: 'https://support.apple.com/pt-pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Google Pay / Google Wallet — ajuda e métodos de pagamento suportados', url: 'https://pay.google.com', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — pagamentos contactless e regras de segurança', url: 'https://www.bportugal.pt/page/pagamentos-contactless', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'MB WAY — site oficial do serviço SIBS', url: 'https://www.mbway.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
