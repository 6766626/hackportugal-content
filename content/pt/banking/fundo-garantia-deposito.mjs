export default {
  editorialVoice: 'hackportugal',
  id: 'fundo-garantia-deposito',
  categoryId: 'banking',
  title: 'Fundo de Garantia de Depósitos: proteção dos depósitos bancários até 100 000 €',
  tldr: 'O Fundo de Garantia de Depósitos protege os depósitos bancários em Portugal até 100 000 € por depositante em cada banco. Uma conta conjunta de duas pessoas normalmente permite uma cobertura até 200 000 €. A proteção é gratuita e automática: não é necessário tratar de nada. Estão cobertos depósitos à ordem e depósitos a prazo, mas não ações, obrigações, ETF, fundos, crypto nem contas de investimento — para estes existe o regime separado SII, com outros limites.',
  tags: ['fgd', 'bancos', 'depósitos', 'poupanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que é exatamente protegido pelo FGD',
      content: [
        { kind: 'paragraph', text: 'O Fundo de Garantia de Depósitos, ou FGD, é o sistema português de garantia de depósitos bancários. Se um banco participante não conseguir devolver o dinheiro aos clientes, o FGD compensa o depositante até ao montante de 100 000 €.' },
        { kind: 'checklist', items: [
          'Contas correntes: depósitos à ordem',
          'Depósitos a prazo: depósitos a prazo',
          'Depósitos bancários de poupança, se forem efetivamente um depósito',
          'Saldo da conta mais juros vencidos — dentro do limite global de 100 000 €',
          'Contas de pessoas singulares, empresas, associações e da maioria das pessoas coletivas',
          'Contas de residentes e não residentes: a cidadania e a autorização de residência não são condição para a proteção',
          'Contas em euros e noutra moeda — a compensação é paga em euros'
        ] },
        { kind: 'warning', text: 'O limite de 100 000 € não é calculado por cada conta, mas por depositante em cada banco. Se tiver 3 contas no mesmo banco com 40 000 €, 50 000 € e 30 000 €, apenas 100 000 € estão cobertos, e 20 000 € ficam em risco.' }
      ]
    },
    {
      id: 'limit-per-bank',
      title: 'Como funciona na prática o limite de 100 000 €',
      content: [
        { kind: 'paragraph', text: 'A fórmula essencial é: um depositante + um banco = máximo de 100 000 €. Se o dinheiro estiver em bancos diferentes com licenças bancárias diferentes, o limite aplica-se separadamente a cada banco.' },
        { kind: 'checklist', items: [
          'Conta individual em seu nome: cobertura até 100 000 €',
          'Conta conjunta de duas pessoas: a quota de cada uma é calculada separadamente, normalmente até 100 000 € por pessoa, ou seja, até 200 000 € por conta',
          'Se as quotas numa conta conjunta não estiverem indicadas, normalmente presume-se que são iguais',
          'Várias contas no mesmo banco são somadas',
          'Uma conta noutro banco com licença separada tem um limite separado de 100 000 €',
          'Marcas diferentes dentro do mesmo grupo bancário podem ter uma única licença — confirme junto do Banco de Portugal',
          'Depósitos numa sucursal de um banco português fora de Portugal normalmente pertencem ao regime português, se o banco for participante do FGD'
        ] },
        { kind: 'warning', text: 'Não se oriente apenas pelo nome comercial da aplicação ou do banco. Para distribuir montantes acima de 100 000 €, verifique a pessoa coletiva e a participação no FGD no registo do Banco de Portugal ou no site fgd.pt.' }
      ]
    },
    {
      id: 'eu-branches',
      title: 'Banco português, EU branch ou fintech: onde está a garantia',
      content: [
        { kind: 'paragraph', text: 'O FGD cobre depósitos em instituições de crédito participantes no sistema português. Normalmente são bancos registados e autorizados em Portugal. As sucursais de bancos de outros países da UE que operam em Portugal, em regra, são cobertas pelo sistema de garantia do país do banco-mãe, e não pelo FGD português. Na UE, o limite padrão também é de 100 000 € por depositante por banco.' },
        { kind: 'checklist', items: [
          'Banco português com licença do Banco de Portugal: normalmente FGD',
          'Sucursal de banco espanhol, alemão, francês ou de outro país da UE em Portugal: normalmente o regime do país do banco-mãe',
          'Dinheiro eletrónico e instituições de pagamento não são o mesmo que um depósito bancário',
          'Um IBAN PT50, por si só, não prova participação no FGD',
          'Dinheiro junto de uma corretora ou plataforma de investimento não se torna depósito bancário apenas por aparecer como cash balance',
          'Antes de uma transferência de valor elevado, verifique a página do banco, a ficha de informação do depositante e o registo do Banco de Portugal'
        ] },
        { kind: 'warning', text: 'Os serviços fintech podem ter modelos diferentes: banco, instituição de pagamento, dinheiro eletrónico, corretora. O nível de proteção depende do modelo jurídico, e não da interface da aplicação.' }
      ]
    },
    {
      id: 'not-covered',
      title: 'O que NÃO é coberto pelo FGD',
      content: [
        { kind: 'paragraph', text: 'O FGD é uma proteção de depósitos bancários, não de todos os ativos financeiros. Se um produto promete rentabilidade e é constituído como investimento, obrigação ou fundo, o risco já é outro.' },
        { kind: 'checklist', items: [
          'Ações, ETF e fundos de investimento',
          'Obrigações, incluindo obrigações bancárias',
          'Structured products e notes, se não forem depósitos',
          'Cryptoativos e stablecoins',
          'Carteiras de investimento numa corretora',
          'Produtos de seguros e seguros de capitalização',
          'PPR sob a forma de fundo ou produto de seguro',
          'Perdas resultantes da queda do preço de mercado dos ativos',
          'Transferências fraudulentas, phishing e operações que o banco considere autorizadas'
        ] },
        { kind: 'paragraph', text: 'Para instrumentos de investimento em Portugal existe o Sistema de Indemnização aos Investidores, ou SII, mas é um regime separado com regras e limites diferentes. Não transforma investimentos num depósito garantido.' }
      ]
    },
    {
      id: 'if-bank-fails',
      title: 'Se o banco colapsar: o que acontece',
      content: [
        { kind: 'paragraph', text: 'A proteção do FGD é automática. O cliente não precisa de comprar antecipadamente um seguro, pagar uma contribuição ou fazer um registo separado. Os bancos participantes financiam o sistema por conta própria.' },
        { kind: 'checklist', items: [
          'O Banco de Portugal determina que o banco não é capaz de devolver os depósitos',
          'O FGD recebe do banco os dados dos depositantes',
          'A compensação é calculada por cada depositante e banco',
          'O prazo padrão de pagamento na UE é até 7 dias úteis após a determinação da indisponibilidade dos depósitos',
          'O pagamento é feito em euros',
          'Os documentos de identificação e os dados de contacto atualizados no banco devem estar corretos',
          'Se mudou de morada, e-mail, telefone ou residência fiscal, atualize os dados antecipadamente',
          'Para contas conjuntas, o banco tem em conta as quotas dos titulares'
        ] },
        { kind: 'warning', text: 'O FGD não assegura montantes acima do limite. Se mantiver liquidez elevada, a proteção prática consiste em distribuir o dinheiro por vários bancos com licenças diferentes e em não confundir um depósito com um produto de investimento.' }
      ]
    }
  ],
  costs: [
    { label: 'Participação do depositante no FGD', amountEUR: 0, note: 'A proteção é automática e gratuita para o cliente do banco.' },
    { label: 'Garantia máxima por depositante em cada banco', amountEUR: 100000, note: 'São somados todos os depósitos de um depositante no mesmo banco, incluindo juros vencidos.' },
    { label: 'Máximo habitual para uma conta conjunta de duas pessoas', amountEUR: 200000, note: '100 000 € por cada cotitular, se as quotas não alterarem o cálculo.' }
  ],
  sources: [
    { title: 'Fundo de Garantia de Depósitos — site oficial e regras de cobertura', url: 'https://www.fgd.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — informação sobre a garantia de depósitos e bancos', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — registo de instituições autorizadas', url: 'https://www.bportugal.pt/entidades-autorizadas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
