export default {
  editorialVoice: 'hackportugal',
  id: 'certificados-aforro-ot',
  categoryId: 'banking',
  title: 'Obrigações do Estado português: Certificados de Aforro, Certificados do Tesouro e OT através do AforroNet',
  tldr: 'O AforroNet é o acesso online do IGCP à dívida pública de retalho de Portugal. Em 2026, o principal produto de massas é o Certificados de Aforro Série F: mínimo 100 €, máximo 50 000 € por pessoa, prazo até 15 anos, não pode ser resgatado nos primeiros 3 meses, taxa = Euribor 3M + 1%, mas no máximo 2,5% antes dos prémios. São necessários NIF, Conta Aforro, IBAN confirmado e morada fiscal portuguesa. Os juros estão sujeitos a retenção de IRS na fonte: normalmente 28%.',
  tags: ['aforronet', 'igcp', 'obrigações', 'irs', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-can-buy',
      title: 'O que pode realmente comprar em 2026',
      content: [
        { kind: 'paragraph', text: 'O IGCP vende dívida pública de retalho diretamente a pessoas singulares através da rede CTT/parceiros e online através do AforroNet. Trata-se de dívida da República Portuguesa: o risco não é bancário, é soberano. Não está abrangida pelo Fundo de Garantia de Depósitos, porque não é um depósito.' },
        { kind: 'checklist', items: ['Certificados de Aforro Série F — o principal produto disponível para novas subscrições em 2026', 'Subscrição mínima da Série F: 100 €', 'Máximo da Série F: 50 000 € por pessoa; limite total Série E + Série F — 250 000 €', 'Prazo da Série F: até 15 anos', 'O resgate antecipado da Série F é proibido nos primeiros 3 meses', 'Taxa da Série F: média da Euribor 3M + 1%, mas a taxa base está limitada a 2,5%', 'Os prémios de permanência da Série F são adicionados após o 1.º ano: +0,25%, +0,50% ou +1,00%, consoante o período de detenção', 'Certificados do Tesouro — as séries antigas podem ser mantidas e resgatadas; novas subscrições dependem de a série concreta do IGCP estar aberta', 'OT / Obrigações do Tesouro — obrigações do tesouro normais; a disponibilidade para retalho através do AforroNet depende da emissão concreta, e no mercado secundário são normalmente compradas através de um banco ou corretora'] },
        { kind: 'warning', text: 'Não confunda Certificados de Aforro com um depósito bancário a prazo. A rentabilidade muda, a liquidez é limitada pelas regras da série, e o preço das OT normais no mercado pode cair quando as taxas sobem.' }
      ]
    },
    {
      id: 'eligibility-documents',
      title: 'A quem está disponível e que documentos são necessários',
      content: [
        { kind: 'paragraph', text: 'Um expat não precisa de passaporte português. São necessários identificação, NIF e uma conta bancária para pagamentos. Na prática, quase tudo depende da Conta Aforro — a conta individual de investidor no IGCP.' },
        { kind: 'checklist', items: ['NIF com morada fiscal atualizada nas Finanças', 'Passaporte, Cartão de Cidadão ou autorização de residência', 'IBAN português ou IBAN que o IGCP/ponto de atendimento aceite associar à Conta Aforro', 'Comprovativo de IBAN: declaração bancária, extracto ou documento do homebanking com o nome do titular', 'Número de telefone português e email para notificações e AforroNet', 'Morada de residência; se a morada nas Finanças estiver desatualizada, atualize-a primeiro', 'Para menores — documentos do representante legal e da criança', 'Para não residentes fiscais — verifique que morada e estatuto constam nas Finanças, porque isso influencia a retenção de IRS'] },
        { kind: 'warning', text: 'Se tiver um NIF com a morada de um antigo representante fiscal ou uma morada fora de Portugal, não abra o produto “em piloto automático”. Primeiro verifique o estatuto de residência nas Finanças: os erros aparecem depois no IRS e na retenção de imposto.' }
      ]
    },
    {
      id: 'open-conta-aforro',
      title: 'Abrir a Conta Aforro e activar o AforroNet',
      content: [
        { kind: 'paragraph', text: 'O AforroNet não cria um investidor do zero apenas com o NIF. Primeiro é necessária uma Conta Aforro no sistema do IGCP. Normalmente é aberta presencialmente num balcão CTT ou noutro ponto indicado pelo IGCP.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Prepare os documentos', content: [
            { kind: 'checklist', items: ['Documento de identificação', 'NIF', 'Comprovativo de IBAN', 'Telefone e email', 'Morada atualizada', 'Dinheiro para a primeira subscrição, se abrir a conta já com uma compra'] }
          ]},
          { id: 's2', title: '2. Abra a Conta Aforro', content: [
            { kind: 'paragraph', text: 'No ponto de atendimento, criam a Conta Aforro e associam o seu NIF e IBAN. Verifique o nome, NIF, morada e IBAN antes de assinar — as correções depois demoram tempo.' }
          ]},
          { id: 's3', title: '3. Peça a adesão ao AforroNet', content: [
            { kind: 'paragraph', text: 'Depois de criada a Conta Aforro, active o AforroNet em aforronet.igcp.pt. O sistema utiliza os dados da Conta Aforro e envia/activa o acesso de acordo com o procedimento do IGCP. O acesso pode não surgir de imediato no dia da abertura.' }
          ]},
          { id: 's4', title: '4. Verifique o acesso e os limites', content: [
            { kind: 'paragraph', text: 'Após o primeiro acesso, verifique a carteira, IBAN, contactos e operações disponíveis: subscrição, resgate, extratos, alteração de dados. Se o produto não aparecer, isso normalmente significa que a série está fechada a novas subscrições ou que a operação não está disponível online.' }
          ]}
        ] }
      ]
    },
    {
      id: 'buy-redeem',
      title: 'Compra, resgate e dinheiro na conta',
      content: [
        { kind: 'paragraph', text: 'No AforroNet, as operações parecem simples, mas cada produto tem os seus próprios prazos. Para Certificados de Aforro Série F, a principal limitação é que o dinheiro fica bloqueado nos primeiros 3 meses.' },
        { kind: 'checklist', items: ['Escolha subscrição e o produto, se estiver aberto a subscrição', 'Indique o montante: para a Série F, o mínimo é 100 €', 'Pague de acordo com as instruções do IGCP, normalmente através de canal bancário/Multibanco, se o sistema emitir referências de pagamento', 'Guarde o comprovativo da subscrição e o documento de pagamento', 'Os juros dos Certificados de Aforro são calculados trimestralmente e capitalizados após a retenção do imposto', 'O resgate da Série F só é possível após 3 meses de detenção', 'Em caso de resgate parcial, confirme que o saldo remanescente não viola as regras mínimas da série', 'O dinheiro do resgate é transferido para o IBAN associado à Conta Aforro', 'Se mudar de banco, atualize primeiro o IBAN no IGCP e aguarde a confirmação'] },
        { kind: 'warning', text: 'OT não é o mesmo que Certificados de Aforro. Se comprar Obrigações do Tesouro normais através de um banco/corretora, o preço depende do mercado, há bid/ask spread e comissões. O AforroNet não substitui uma conta de investimento numa corretora para o mercado secundário.' }
      ]
    },
    {
      id: 'tax',
      title: 'Impostos: IRS e declaração',
      content: [
        { kind: 'paragraph', text: 'Para pessoas singulares residentes em Portugal, os juros de Certificados de Aforro, Certificados do Tesouro e títulos de dívida portugueses estão normalmente sujeitos a retenção na fonte à taxa de 28% nos termos do Código do IRS. É uma retenção na fonte com carácter liberatório: no caso típico, o imposto já foi retido e não é obrigatório declarar o rendimento separadamente, se não optar pelo englobamento.' },
        { kind: 'checklist', items: ['Residente em Portugal: retenção normal de IRS — 28%', 'Os juros são creditados já após a retenção do imposto', 'Pode optar pelo englobamento no Modelo 3 IRS, mas nesse caso todo o rendimento correspondente entra na tabela progressiva — não é vantajoso para todos', 'Se for não residente fiscal, verifique a taxa aplicável e a convenção para evitar a dupla tributação', 'Para aplicar uma taxa convencional, um não residente pode precisar de formulários e comprovativo de residência fiscal de outro país', 'Se se mudou para Portugal a meio do ano, verifique a data de alteração da residência fiscal nas Finanças', 'O rendimento da venda de OT no mercado pode gerar mais-valias/menos-valias; não é o mesmo que juros de Certificados de Aforro', 'Guarde os extratos do IGCP e os documentos bancários anuais pelo menos até ao fim do prazo de inspeção do IRS'] },
        { kind: 'warning', text: 'Não se guie pela lógica fiscal russa ou ucraniana. Em Portugal, são importantes a residência fiscal, a fonte do rendimento, o tipo de instrumento e se o imposto foi retido na fonte. Se tiver uma carteira com OT através de corretora, verifique a declaração IRS com antecedência.' }
      ]
    },
    {
      id: 'practical-choice',
      title: 'Como escolher: Série F, Tesouro ou OT',
      content: [
        { kind: 'paragraph', text: 'Para uma reserva de 3–24 meses, os Certificados de Aforro são normalmente mais simples: não há preço de mercado, as regras de resgate são claras e a entrada começa nos 100 €. Para dinheiro que possa ser necessário antes de 3 meses, o produto não é adequado.' },
        { kind: 'checklist', items: ['Precisa de simplicidade e de um emitente estatal — veja Certificados de Aforro Série F', 'Precisa de liquidez amanhã — é melhor uma conta bancária ou depósito a prazo sem bloqueio', 'Está disposto a manter até ao prazo e a série está aberta — pode comparar Certificados do Tesouro, se o IGCP voltar a disponibilizar uma nova subscrição', 'Quer uma rentabilidade fixa de uma OT concreta até ao vencimento — calcule yield, comissões e imposto através do banco/corretora', 'Planeia sair de Portugal — verifique com antecedência a alteração de morada, IBAN e estatuto fiscal', 'Não coloque todo o emergency fund na Série F: nos primeiros 3 meses não há acesso ao dinheiro', 'Compare a rentabilidade após 28% de IRS, e não apenas a gross rate'] },
        { kind: 'warning', text: 'A taxa da Série F tem um teto: mesmo que a Euribor esteja elevada, a taxa base dos Certificados de Aforro Série F não ultrapassa 2,5% antes dos prémios de permanência. Isto é uma proteção para o Estado, não para o investidor.' }
      ]
    }
  ],
  costs: [
    { label: 'Abertura da Conta Aforro / AforroNet', amountEUR: 0, note: 'O IGCP não cobra comissão pela abertura nem pelo acesso online; podem existir comissões bancárias do seu banco por operações.' },
    { label: 'Subscrição mínima de Certificados de Aforro Série F', amountEUR: 100, note: 'O valor nominal da subscrição segue as regras da série; verifique o formulário da operação no AforroNet.' },
    { label: 'Máximo de Certificados de Aforro Série F', amountEUR: 50000, note: 'Limite por pessoa para a Série F; limite total Série E + Série F — 250 000 €.' },
    { label: 'IRS sobre juros para residente', amountEURMin: 0, amountEURMax: 28, note: 'É uma taxa de 28%, não um montante fixo em euros; é retida sobre o rendimento apurado.' },
    { label: 'Comissões sobre OT através de banco/corretora', amountEURMin: 0, amountEURMax: 50, note: 'Dependem do intermediário: compra, custódia, pagamento de cupão, venda. Através do AforroNet, normalmente não há comissões do IGCP para Certificados.' }
  ],
  sources: [
    { title: 'AforroNet IGCP — portal oficial de operações com dívida pública de retalho', url: 'https://www.aforronet.igcp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IGCP — Dívida Pública de Retalho: Certificados de Aforro, Tesouro e OT', url: 'https://www.igcp.pt/pt/divida-publica-de-retalho/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — retenção na fonte, art. 71', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS e englobamento de rendimentos de capitais', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
