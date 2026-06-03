export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-multibanco-pagamentos',
  categoryId: 'banking',
  title: 'Multibanco: pagamento de serviços, multas, impostos e carregamento do telemóvel',
  tldr: 'O Multibanco não é apenas uma caixa automática para levantar dinheiro. Em 2026, é normalmente usado para pagar água, eletricidade, internet, condomínio, multas, IMI/IUC/IRS/IVA, carregar o telemóvel, fazer transferências, depositar cheques e pagar compras por entidade + referência. Para a maioria dos pagamentos, o NIF só é necessário na conta/aviso, não na caixa automática. A comissão para quem paga é muitas vezes 0 €, mas transferências e operações com cheques dependem do preçário do banco.',
  tags: ['multibanco', 'pagamentos', 'impostos', 'mbway'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-multibanco',
      title: 'O que o Multibanco permite fazer em 2026',
      content: [
        { kind: 'paragraph', text: 'O Multibanco é a rede portuguesa de caixas automáticas e serviços de pagamento da SIBS. No menu da caixa automática, pode não só levantar dinheiro, mas também pagar contas por referência, impostos, multas, serviços do Estado, carregar um cartão SIM, fazer uma transferência bancária, consultar saldo/movimentos e, por vezes, depositar um cheque.' },
        { kind: 'checklist', items: [
          'Pagamento de serviços: água, eletricidade, gás, internet, condomínio — normalmente através de Pagamento de Serviços/Compras',
          'Pagamento de impostos: IMI, IUC, IRS, IVA, Segurança Social — com os dados do Portal das Finanças ou do aviso',
          'Pagamento de multas: trânsito, estacionamento, polícia, portagens — se o aviso tiver entidade/referência/valor',
          'Carregamento do telemóvel: MEO, NOS, Vodafone, Lycamobile e outros — através de Carregamentos/Telemóveis',
          'Transferências: transferência para IBAN ou através do menu interno do banco; os limites dependem do banco',
          'Depósito de cheques: apenas em caixas automáticas com função de depósitos, muitas vezes — do seu próprio banco',
          'Pagamentos ao Estado: opção de menu separada para alguns pagamentos ao Estado',
          'MB WAY: aplicação separada da SIBS, mas a associação do cartão é frequentemente confirmada através do Multibanco'
        ] },
        { kind: 'warning', text: 'O Multibanco não anula os prazos de pagamento. Se a referência expirou, a caixa automática pode recusar o pagamento ou aceitá-lo como vencido apenas em casos especiais. Para impostos e multas, verifique sempre o prazo limite no documento.' }
      ]
    },
    {
      id: 'pay-reference',
      title: 'Pagamento por entidade + referência + valor',
      content: [
        { kind: 'paragraph', text: 'O formato mais comum das contas portuguesas tem três campos: Entidade, Referência, Montante/Valor. São impressos na fatura em PDF, carta, email, SMS ou na área de cliente do fornecedor. Funciona para serviços, fornecedores de internet, escolas, seguros, condomínio, lojas online e muitos pagamentos ao Estado.' },
        { kind: 'substeps', items: [
          { id: 'insert-card', title: '1. Insira o cartão e escolha o idioma', content: [
            { kind: 'paragraph', text: 'Na maioria das caixas automáticas há português e English. Normalmente não há russo. Introduza o PIN e escolha Pagamentos e Outros Serviços ou Pagamentos.' }
          ] },
          { id: 'choose-payment', title: '2. Escolha Pagamento de Serviços/Compras', content: [
            { kind: 'paragraph', text: 'O nome pode variar ligeiramente conforme o banco, mas procure Serviços/Compras. Para impostos, por vezes é melhor usar Pagamentos ao Estado, se essa opção existir.' }
          ] },
          { id: 'enter-codes', title: '3. Introduza a entidade, a referência e o montante', content: [
            { kind: 'checklist', items: [
              'Entidade — normalmente 5 algarismos',
              'Referência — normalmente 9 algarismos, mas o formato depende do emissor',
              'Montante/Valor — valor em euros e cêntimos',
              'Não arredonde: se a conta for de 47,38 €, introduza 47,38 €',
              'Verifique o destinatário no ecrã antes de confirmar',
              'Guarde o talão/comprovativo ou fotografe o ecrã de confirmação'
            ] }
          ] },
          { id: 'keep-proof', title: '4. Guarde o comprovativo', content: [
            { kind: 'paragraph', text: 'Para pagamentos contestáveis — especialmente multas, impostos, condomínio e renda — guarde o comprovativo pelo menos até o assunto ficar encerrado. Para impostos, é sensato manter o PDF/fotografia juntamente com o aviso das Finanças.' }
          ] }
        ] },
        { kind: 'warning', text: 'Se o montante já estiver preenchido na conta, não o altere sem motivo. Para algumas referências, o montante faz parte da lógica de controlo: um valor incorreto levará à recusa ou a um pagamento que o fornecedor não conseguirá associar automaticamente.' }
      ]
    },
    {
      id: 'taxes-and-fines',
      title: 'Impostos, IMI/IUC e multas',
      content: [
        { kind: 'paragraph', text: 'Para impostos, não precisa de saber o IBAN da Autoridade Tributária. No Portal das Finanças é gerado um documento de cobrança com referência de pagamento, montante e prazo. Com esse documento pagam-se IMI, IUC, IRS, IVA, coimas e outros valores. Na caixa automática, use Pagamentos ao Estado, se disponível, ou Pagamento de Serviços/Compras — oriente-se pelo formato do documento.' },
        { kind: 'checklist', items: [
          'IMI: o aviso aparece no Portal das Finanças; o pagamento em prestações depende do valor do imposto',
          'IUC: é pago anualmente até ao fim do mês da matrícula do veículo; a referência é obtida nas Finanças',
          'IRS: o valor adicional da declaração anual é pago através da nota de cobrança',
          'IVA/recibos verdes: os trabalhadores independentes pagam através do documento cobrança, se houver valor a pagar',
          'Coimas Finanças: as multas fiscais são pagas com os dados constantes do aviso',
          'Multas de trânsito: use os dados da carta da ANSR/PSP/GNR ou do aviso entregue no local',
          'Estacionamento/EMEL/multas municipais: o método depende do município; muitas vezes há uma referência Multibanco',
          'Portagens/SCUT: se houver referência, pague como serviços; por vezes é mais simples através de CTT/Payshop/serviço online'
        ] },
        { kind: 'warning', text: 'Para multas de trânsito, o pagamento pode significar depósito ou pagamento voluntário, mas nem sempre encerra o direito de defesa/reclamação. Leia a carta: os prazos, os dados de pagamento e o efeito jurídico do pagamento estão aí indicados, não no menu do Multibanco.' },
        { kind: 'warning', text: 'Os prazos fiscais em 2026 continuam rígidos: o atraso pode gerar juros de mora e coima. Se a referência não funcionar, verifique no Portal das Finanças se o prazo expirou ou se foi criado um novo documento de cobrança.' }
      ]
    },
    {
      id: 'mobile-and-utilities',
      title: 'Telemóvel e contas de serviços',
      content: [
        { kind: 'paragraph', text: 'O carregamento do telemóvel é feito através de Carregamentos ou Telemóveis. Escolhe o operador, introduz o número e o montante. Para cartões SIM pré-pagos, o dinheiro normalmente chega rapidamente, mas nos operadores virtuais e cartões SIM internacionais pode haver atraso ou um menu separado.' },
        { kind: 'checklist', items: [
          'MEO/NOS/Vodafone: normalmente estão no menu Carregamentos',
          'O montante mínimo de carregamento depende do operador e do tarifário; são comuns 5 €, 7,50 €, 10 € e valores superiores',
          'Verifique o número duas vezes: o banco normalmente não devolve automaticamente um carregamento feito para o número errado',
          'Para internet e televisão de casa, use normalmente a entidade/referência da fatura, e não o menu de carregamentos de telemóvel',
          'As contas da E-REDES, EDP, Galp, Endesa, Iberdrola e Águas municipais são normalmente pagas como serviços',
          'O condomínio pode enviar uma referência Multibanco ou pedir uma transferência bancária para IBAN',
          'A renda de casa é normalmente paga por transferência bancária, não através de referência Multibanco, salvo se o senhorio tiver fornecido uma referência'
        ] },
        { kind: 'paragraph', text: 'Se tiver débito direto ativo, a conta é cobrada automaticamente. Nesse caso, o Multibanco serve para um pagamento pontual se o débito direto falhar, se mudar de banco ou se o fornecedor enviar uma cobrança separada.' },
        { kind: 'warning', text: 'Não pague de novo se, depois do pagamento, a conta ainda aparecer em aberto na aplicação do fornecedor. A atualização do estado pode demorar 1–3 dias úteis. Primeiro verifique os movimentos da conta e o comprovativo.' }
      ]
    },
    {
      id: 'transfers-cheques-mbway',
      title: 'Transferências, cheques e MB WAY',
      content: [
        { kind: 'paragraph', text: 'Através do Multibanco é possível fazer transferências, mas os tipos disponíveis e os limites são definidos pelo seu banco. Por vezes, a caixa automática só permite transferências entre contas do mesmo banco ou por IBAN; por vezes é mais cómodo fazer a transferência na aplicação do banco.' },
        { kind: 'checklist', items: [
          'Transferência normal: pode ser executada num dia útil/no dia útil seguinte, dependendo do banco e do sistema',
          'Transferência imediata: está amplamente disponível em Portugal, mas a disponibilidade e a comissão dependem do banco e do canal',
          'Limites de montante: consulte o contrato/preçário do banco; para novos clientes os limites são frequentemente mais baixos',
          'Comissão: as operações no Multibanco para o consumidor são muitas vezes gratuitas, mas as transferências podem ser cobradas pelo banco',
          'Depósito de cheques: procure uma caixa automática com função de depósito; normalmente é necessário envelope/digitalização e a conta do beneficiário',
          'O crédito do cheque não é imediato: o banco pode apresentar saldo contabilístico e saldo disponível de forma diferente',
          'O MB WAY é associado ao número de telefone e ao cartão; a confirmação pode exigir uma caixa automática ou a app do banco',
          'Pagamentos MB WAY e pedidos de dinheiro não são o mesmo que uma referência Multibanco'
        ] },
        { kind: 'warning', text: 'Em Portugal, em 2026, os cheques ainda existem, mas não são dinheiro imediato. Não entregue mercadoria/chaves apenas porque a pessoa “depositou um cheque”: aguarde pelo saldo disponível ou use transferência imediata.' }
      ]
    },
    {
      id: 'safety-and-errors',
      title: 'Segurança e erros frequentes',
      content: [
        { kind: 'paragraph', text: 'A regra principal: a caixa automática executa aquilo que você confirmou. Em caso de erro na referência, no montante ou no número de telefone, a devolução não é feita através de “cancelamento na caixa automática”, mas sim através do banco, do fornecedor do serviço ou do destinatário.' },
        { kind: 'checklist', items: [
          'Tape o PIN com a mão; em zonas turísticas, verifique se há dispositivos sobrepostos no leitor de cartões',
          'Não aceite ajuda de desconhecidos na caixa automática, especialmente se o cartão “ficar preso”',
          'Guarde o comprovativo de impostos, multas, renda, condomínio e contas de valor elevado',
          'Confirme a entidade e a referência no PDF/carta original, não numa captura de ecrã reencaminhada',
          'Se suspeitar de phishing, ligue para o banco através do número indicado no cartão/site, não por SMS',
          'Se a caixa automática não entregar o dinheiro, mas o valor for debitado, registe imediatamente o número do ATM, o local, a hora e o montante',
          'Se o cartão for retido, bloqueie-o na aplicação do banco ou pela hotline, sem se afastar muito da caixa automática',
          'Para pagamentos ao Estado, verifique o estado no Portal das Finanças após 1–3 dias úteis'
        ] },
        { kind: 'warning', text: 'Uma entidade/referência num email de phishing pode parecer “portuguesa”. Se estiver em causa impostos, uma multa, CTT, portagens ou um banco — entre manualmente na área oficial, e não através de uma ligação recebida por SMS/email.' }
      ]
    }
  ],
  costs: [
    { label: 'Pagamento de serviços/compras por referência Multibanco', amountEUR: 0, note: 'Normalmente gratuito para quem paga; a comissão é paga pelo destinatário/comerciante, mas raras exceções dependem do banco e do serviço.' },
    { label: 'Carregamento do telemóvel através do Multibanco', amountEUR: 0, note: 'A comissão da caixa automática é normalmente 0 €; o montante mínimo de carregamento depende do operador e do tarifário.' },
    { label: 'Transferência bancária através do Multibanco', amountEURMin: 0, amountEURMax: 2, note: 'Valor indicativo para clientes particulares; a comissão exata e os limites constam do preçário do seu banco.' },
    { label: 'Depósito de cheque', amountEURMin: 0, amountEURMax: 5, note: 'Pode ser gratuito ou cobrado pelo banco; o crédito não é imediato.' }
  ],
  sources: [
    { title: 'SIBS — rede Multibanco e serviços de pagamento', url: 'https://www.sibs.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — pagamentos bancários e direitos dos utilizadores', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — pagamentos ao Estado e documentos de cobrança', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANSR — multas por infrações rodoviárias e pagamento voluntário', url: 'https://www.ansr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
