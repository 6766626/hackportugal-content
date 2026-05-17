export default {
  editorialVoice: 'hackportugal',
  id: 'fundo-garantia-deposito',
  categoryId: 'banking',
  title: 'Fundo de Garantia de Depósitos: proteção de depósitos bancários até 100 000 €',
  tldr: 'O Fundo de Garantia de Depósitos protege os depósitos bancários em Portugal até 100 000 € por depositante em cada banco. Uma conta conjunta de duas pessoas dá normalmente cobertura até 200 000 €. A proteção é gratuita e automática: não é necessário fazer qualquer pedido. Estão cobertos os depósitos à ordem e os depósitos a prazo, mas não ações, obrigações, ETF, fundos, crypto nem contas de investimento — para estes existe um regime separado, o SII, com outros limites.',
  tags: ['fgd', 'bancos', 'depósitos', 'poupanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que é exatamente protegido pelo FGD',
      content: [
        { kind: 'paragraph', text: 'O Fundo de Garantia de Depósitos, ou FGD, é o sistema português de garantia de depósitos bancários. Se um banco participante não conseguir devolver o dinheiro aos clientes, o FGD compensa o depositante até ao montante de 100 000 €.' },
        { kind: 'checklist', items: [
          'Contas à ordem: depósitos à ordem',
          'Depósitos a prazo: depósitos a prazo',
          'Depósitos bancários de poupança, se forem efetivamente um depósito',
          'Saldo da conta mais juros vencidos — dentro do limite total de 100 000 €',
          'Contas de pessoas singulares, empresas, associações e da maioria das pessoas coletivas',
          'Contas de residentes e não residentes: a nacionalidade e a autorização de residência não são condição para a proteção',
          'Contas em euros e noutra moeda — a compensação é paga em euros'
        ] },
        { kind: 'warning', text: 'O limite de 100 000 € não é calculado por cada conta, mas por depositante em cada banco. Se tiver 3 contas no mesmo banco com 40 000 €, 50 000 € e 30 000 €, só estão cobertos 100 000 €, e 20 000 € ficam em risco.' }
      ]
    },
    {
      id: 'limit-per-bank',
      title: 'Como funciona na prática o limite de 100 000 €',
      content: [
        { kind: 'paragraph', text: 'A fórmula principal é: um depositante + um banco = máximo de 100 000 €. Se o dinheiro estiver em bancos diferentes com licenças bancárias diferentes, o limite aplica-se separadamente a cada banco.' },
        { kind: 'checklist', items: [
          'Conta individual em seu nome: cobertura até 100 000 €',
          'Conta conjunta de duas pessoas: a quota de cada uma é considerada separadamente, normalmente até 100 000 € por pessoa, ou seja, até 200 000 € por conta',
          'Se as quotas da conta conjunta não estiverem indicadas, normalmente presumem-se quotas iguais',
          'Várias contas no mesmo banco são somadas',
          'Uma conta noutro banco com licença separada tem um limite próprio de 100 000 €',
          'Marcas diferentes dentro do mesmo grupo bancário podem ter uma única licença — confirme no Banco de Portugal',
          'Depósitos numa sucursal de um banco português fora de Portugal pertencem normalmente ao regime português, se o banco for participante no FGD'
        ] },
        { kind: 'warning', text: 'Não se guie apenas pelo nome comercial da aplicação ou do banco. Para distribuir montantes superiores a 100 000 €, confirme a pessoa jurídica e a participação no FGD no registo do Banco de Portugal ou no site fgd.pt.' }
      ]
    },
    {
      id: 'eu-branches',
      title: 'Banco português, sucursal da UE ou fintech: onde está a garantia',
      content: [
        { kind: 'paragraph', text: 'O FGD cobre depósitos em instituições de crédito participantes no sistema português. Normalmente, trata-se de bancos registados e autorizados em Portugal. As sucursais de bancos de outros países da UE que operam em Portugal são, em regra, cobertas pelo sistema de garantia do país do banco-mãe, e não pelo FGD português. Na UE, o limite padrão também é de 100 000 € por depositante por banco.' },
        { kind: 'checklist', items: [
          'Banco português com licença do Banco de Portugal: normalmente FGD',
          'Sucursal de um banco espanhol, alemão, francês ou de outro país da UE em Portugal: normalmente o regime do país do banco-mãe',
          'Dinheiro eletrónico e instituições de pagamento não são o mesmo que um depósito bancário',
          'Um IBAN PT50, por si só, não prova a participação no FGD',
          'Dinheiro junto de uma corretora ou plataforma de investimento não se torna um depósito bancário apenas por aparecer como cash balance',
          'Antes de uma transferência avultada, confirme a página do banco, a ficha de informação do depositante e o registo do Banco de Portugal'
        ] },
        { kind: 'warning', text: 'Os serviços fintech podem ter modelos diferentes: banco, instituição de pagamento, dinheiro eletrónico, corretora. O nível de proteção depende do modelo jurídico, e não da interface da aplicação.' }
      ]
    },
    {
      id: 'not-covered',
      title: 'O que NÃO é coberto pelo FGD',
      content: [
        { kind: 'paragraph', text: 'O FGD é uma proteção de depósitos bancários, não de todos os ativos financeiros. Se o produto promete rendimento e está estruturado como investimento, obrigação ou fundo, trata-se de outro tipo de risco.' },
        { kind: 'checklist', items: [
          'Ações, ETF e fundos de investimento',
          'Obrigações, incluindo obrigações bancárias',
          'Structured products e notes, se não forem um depósito',
          'Cryptoativos e stablecoins',
          'Carteiras de investimento numa corretora',
          'Produtos de seguros e seguros de capitalização',
          'PPR sob a forma de fundo ou produto de seguro',
          'Perdas resultantes da queda do preço de mercado dos ativos',
          'Transferências fraudulentas, phishing e operações que o banco considere autorizadas'
        ] },
        { kind: 'paragraph', text: 'Para instrumentos de investimento em Portugal existe o Sistema de Indemnização aos Investidores, ou SII, mas é um regime separado, com regras e limites diferentes. Não transforma investimentos num depósito garantido.' }
      ]
    },
    {
      id: 'if-bank-fails',
      title: 'Se o banco falir: o que acontece',
      content: [
        { kind: 'paragraph', text: 'A proteção do FGD é automática. O cliente não precisa de contratar previamente um seguro, pagar uma contribuição ou apresentar um registo separado. Os bancos participantes financiam o sistema por si próprios.' },
        { kind: 'checklist', items: [
          'O Banco de Portugal determina que o banco não consegue devolver os depósitos',
          'O FGD recebe do banco os dados dos depositantes',
          'A compensação é calculada por cada depositante e banco',
          'O prazo padrão de pagamento na UE é de até 7 dias úteis após a determinação da indisponibilidade dos depósitos',
          'O pagamento é feito em euros',
          'Os documentos de identificação e os dados de contacto atualizados no banco devem estar corretos',
          'Se mudou de morada, e-mail, telefone ou residência fiscal, atualize os dados antecipadamente',
          'Para contas conjuntas, o banco considera as quotas dos titulares'
        ] },
        { kind: 'warning', text: 'O FGD não assegura montantes acima do limite. Se mantiver liquidez elevada, a proteção prática consiste em distribuir o dinheiro por vários bancos com licenças diferentes e em não confundir um depósito com um produto de investimento.' }
      ]
    }
  ],
  costs: [
    { label: 'Participação do depositante no FGD', amountEUR: 0, note: 'A proteção é automática e gratuita para o cliente do banco.' },
    { label: 'Garantia máxima por depositante em cada banco', amountEUR: 100000, note: 'Somam-se todos os depósitos de um depositante no mesmo banco, incluindo juros vencidos.' },
    { label: 'Máximo habitual para uma conta conjunta de duas pessoas', amountEUR: 200000, note: '100 000 € por cada cotitular, se as quotas não alterarem o cálculo.' }
  ],
  sources: [
    { title: 'Fundo de Garantia de Depósitos — site oficial e regras de cobertura', url: 'https://www.fgd.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — informação sobre a garantia de depósitos e bancos', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — registo de instituições autorizadas', url: 'https://www.bportugal.pt/entidades-autorizadas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
