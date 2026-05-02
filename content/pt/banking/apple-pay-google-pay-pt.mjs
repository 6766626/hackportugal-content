export default {
  editorialVoice: 'hackportugal',
  id: 'apple-pay-google-pay-pt',
  categoryId: 'banking',
  title: 'Apple Pay e Google Pay em Portugal — como configurar',
  tldr: 'Em Portugal, Apple Pay e Google Pay funcionam em todos os locais onde o terminal aceita contactless: supermercados, metro, táxis, restaurantes, online. Em abril de 2026, são suportados cartões de muitos bancos, incluindo CGD, Millennium bcp, Santander, ActivoBank, Banco Best e Revolut, mas cada cartão concreto deve ser verificado na app do banco/Wallet. O contactless normal sem PIN está limitado a 50 €, enquanto Apple Pay/Google Pay com Face ID/Touch ID/impressão digital normalmente passam também acima de 50 €, porque constituem autenticação forte. MB WAY continua a ser a alternativa local.',
  tags: ['applepay', 'googlepay', 'mbway', 'bancos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-works',
      title: 'Onde funciona em Portugal',
      content: [
        { kind: 'paragraph', text: 'Apple Pay e Google Pay em Portugal são pagamentos contactless normais com cartão Visa/Mastercard através do telefone ou relógio. Se o terminal tiver o símbolo contactless, normalmente é possível pagar com o telefone.' },
        { kind: 'checklist', items: [
          'Supermercados: Continente, Pingo Doce, Lidl, Aldi, Auchan, Mercadona',
          'Cafés, restaurantes, farmácias, postos de combustível, hotéis',
          'Táxis e serviços TVDE, se o motorista tiver um terminal com contactless',
          'Lojas online e aplicações, se no checkout existir Apple Pay ou Google Pay',
          'Máquinas de transporte e alguns torniquetes onde são aceites cartões bancários',
          'Terminais Multibanco de novo tipo — se o contactless estiver ativo no adquirente concreto'
        ] },
        { kind: 'warning', text: 'Não confunda Apple Pay/Google Pay com Multibanco. Em Portugal, muitos pagamentos do dia a dia — luz, água, telecomunicações, impostos — são feitos através de entidade + referência no Multibanco/MB WAY. Apple Pay e Google Pay não substituem este sistema.' }
      ]
    },
    {
      id: 'supported-banks',
      title: 'Que bancos e cartões são suportados',
      content: [
        { kind: 'paragraph', text: 'O suporte depende não só do banco, mas também do tipo de cartão: débito/crédito, Visa/Mastercard, personal/business, por vezes até do país de emissão. O teste mais fiável é abrir a Wallet/Google Wallet ou a app do banco e tentar adicionar o cartão.' },
        { kind: 'checklist', items: [
          'CGD / Caixa Geral de Depósitos — os cartões Caixa normalmente podem ser adicionados ao Apple Pay e Google Pay através do CaixaDirecta ou da Wallet',
          'Millennium bcp — suporta carteiras móveis para muitos cartões; confirme na app Millennium',
          'Santander Portugal — Apple Pay e Google Pay estão disponíveis para cartões Santander compatíveis',
          'ActivoBank — é frequentemente uma opção conveniente para expatriados; os cartões normalmente funcionam com Apple Pay/Google Pay',
          'Banco Best — o suporte depende do cartão; confirme na app Best Bank e na Wallet',
          'Revolut — uma das opções mais simples: o cartão virtual/físico é adicionado quase imediatamente após a abertura da conta',
          'Wise, N26, Openbank e outros cartões fintech da UE normalmente também funcionam, se o cartão tiver sido emitido num país suportado',
          'Cartão de refeição, cartões empresariais e cartões prepaid podem não ser adicionados, mesmo que o banco esteja na lista'
        ] },
        { kind: 'warning', text: 'As listas da Apple e da Google são atualizadas sem aviso separado. Se o banco estiver na lista, isso não garante o suporte de todos os cartões; se o banco não estiver, por vezes o cartão é adicionado na mesma através de um emissor internacional.' }
      ]
    },
    {
      id: 'apple-pay-setup',
      title: 'Configuração do Apple Pay no iPhone e Apple Watch',
      content: [
        { kind: 'substeps', items: [
          { id: 'iphone', title: '1. Adicionar o cartão ao iPhone', content: [
            { kind: 'checklist', items: [
              'Abra a Wallet',
              'Toque em “+”',
              'Selecione “Cartão de débito ou crédito”',
              'Digitalize o cartão ou introduza os dados manualmente',
              'Aceite as condições do banco',
              'Confirme o cartão por SMS, chamada, email ou pela app do banco',
              'Defina o cartão como predefinido, se quiser pagar primeiro com ele'
            ] }
          ] },
          { id: 'watch', title: '2. Adicionar o cartão ao Apple Watch', content: [
            { kind: 'paragraph', text: 'Abra a app Watch no iPhone → Wallet e Apple Pay → Adicionar cartão. O cartão no relógio é tokenizado separadamente: se estiver no iPhone, isso nem sempre significa que já esteja no Apple Watch.' }
          ] },
          { id: 'pay', title: '3. Pagamento', content: [
            { kind: 'paragraph', text: 'Num iPhone com Face ID, prima duas vezes o botão lateral, confirme com Face ID e aproxime do terminal. Num iPhone com Touch ID, coloque o dedo no Touch ID. No Apple Watch, prima duas vezes o botão lateral.' }
          ] }
        ] },
        { kind: 'warning', text: 'Normalmente, a região do Apple ID não tem de ser Portugal para pagar com um cartão português, mas o dispositivo tem de ter Face ID/Touch ID ou código de acesso. Sem bloqueio de ecrã, a Wallet não permite utilizar o cartão corretamente.' }
      ]
    },
    {
      id: 'google-pay-setup',
      title: 'Configuração do Google Pay / Google Wallet no Android',
      content: [
        { kind: 'paragraph', text: 'Em 2026, para o utilizador, o Google Pay é a aplicação Google Wallet. O pagamento em loja funciona por NFC. Em alguns telemóveis com firmware chinês ou sem Google Services, o pagamento contactless pode não funcionar.' },
        { kind: 'checklist', items: [
          'Instale a Google Wallet a partir do Google Play',
          'Ative o NFC: Definições → Dispositivos ligados → NFC',
          'Defina a Google Wallet como aplicação de pagamento predefinida',
          'Toque em “Adicionar à Wallet” → “Cartão de pagamento”',
          'Digitalize o cartão ou introduza os dados manualmente',
          'Confirme o cartão através do banco: SMS, push, app, chamada',
          'Confirme que o telefone tem bloqueio de ecrã: PIN, impressão digital, rosto ou palavra-passe',
          'Para pagar, desbloqueie o telefone e aproxime-o do terminal; normalmente não é necessário abrir a aplicação'
        ] },
        { kind: 'warning', text: 'Root, bootloader desbloqueado, versões antigas do Android, Google Play Services desativados ou restrições empresariais MDM podem bloquear o pagamento. Nesse caso, o banco dirá que “o cartão é suportado”, mas a Google Wallet não permitirá pagar.' }
      ]
    },
    {
      id: 'limits-and-pin',
      title: 'Limites de 50 €, PIN e biometria',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o limite padrão para pagamentos contactless normais com cartão físico sem PIN é de 50 € por operação. Após várias operações pequenas seguidas, o terminal ou o banco pode pedir o PIN devido às regras de SCA.' },
        { kind: 'checklist', items: [
          'Um cartão físico contactless até 50 € normalmente passa sem PIN',
          'Um cartão físico acima de 50 € quase sempre exige PIN',
          'Apple Pay/Google Pay usam Face ID, Touch ID, impressão digital, PIN do telefone ou palavra-passe',
          'Devido à biometria, estes pagamentos são considerados autenticados e frequentemente passam acima de 50 € sem o PIN do cartão',
          'Alguns terminais podem ainda assim pedir o PIN — é normal, sobretudo em POS antigos',
          'O banco pode recusar uma operação invulgar e pedir que repita o pagamento com o cartão e PIN',
          'Para aluguer de automóvel, depósito de hotel e caução, por vezes exigem um cartão de crédito físico, e não a Wallet'
        ] },
        { kind: 'warning', text: 'Se o terminal pedir PIN ao pagar com o telefone, introduza o PIN do cartão, não o código de desbloqueio do telefone. Se o cartão for virtual e não souber o PIN, consulte-o na aplicação do banco.' }
      ]
    },
    {
      id: 'mb-way-alternative',
      title: 'MB WAY como alternativa portuguesa',
      content: [
        { kind: 'paragraph', text: 'MB WAY é o sistema local da SIBS, associado a um número de telefone português e a um cartão bancário. Para viver em Portugal, muitas vezes é mais útil do que Apple Pay/Google Pay, porque cobre cenários quotidianos do Multibanco.' },
        { kind: 'checklist', items: [
          'Transferências instantâneas por número de telefone dentro de Portugal',
          'Pagamento online através de MB WAY sem introduzir dados do cartão',
          'Criação de cartões virtuais MB NET para compras na internet',
          'Levantamento de dinheiro no Multibanco sem cartão físico',
          'Pagamento de referências Multibanco: faturas, impostos, serviços',
          'Divisão de conta entre amigos',
          'Pagamento por QR em algumas lojas e restaurantes',
          'Conveniente para OLX, arrendamento, transferências do dia a dia e pequenos pagamentos'
        ] },
        { kind: 'paragraph', text: 'A combinação ideal para um expatriado: Apple Pay/Google Pay para terminais e online checkout, MB WAY para transferências, referências e a infraestrutura portuguesa quotidiana.' }
      ]
    }
  ],
  costs: [
    { label: 'Adicionar cartão ao Apple Pay / Google Pay', amountEUR: 0, note: 'A Apple e a Google não cobram comissão ao utilizador por adicionar e pagar com cartão.' },
    { label: 'Pagamento em lojas de Portugal', amountEUR: 0, note: 'Normalmente sem comissão para o comprador; podem existir comissões do seu banco associadas ao cartão, se o cartão for estrangeiro ou a operação for noutra moeda.' }
  ],
  sources: [
    { title: 'Apple Support Portugal — Apple Pay, configuração e utilização', url: 'https://support.apple.com/pt-pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Google Pay / Google Wallet — ajuda e métodos de pagamento suportados', url: 'https://pay.google.com', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — pagamentos contactless e regras de segurança', url: 'https://www.bportugal.pt/page/pagamentos-contactless', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'MB WAY — site oficial do serviço SIBS', url: 'https://www.mbway.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
