export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-multibanco-pagamentos',
  categoryId: 'banking',
  title: 'Multibanco: pagamento de serviços, coimas, impostos e carregamento de telemóvel',
  tldr: 'O Multibanco não é apenas uma caixa automática para levantar dinheiro. Em 2026, através dele pagam-se habitualmente água, luz, internet, condomínio, coimas, IMI/IUC/IRS/IVA, fazem-se carregamentos de telemóvel, transferências, depósitos de cheques e pagam-se compras por entidade + referência. Para a maioria dos pagamentos, o NIF é necessário apenas na conta/aviso, não na caixa Multibanco. A comissão para quem paga é muitas vezes 0 €, mas transferências e operações com cheques dependem do preçário do banco.',
  tags: ['multibanco', 'pagamentos', 'impostos', 'mbway'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-multibanco',
      title: 'O que o Multibanco permite fazer em 2026',
      content: [
        { kind: 'paragraph', text: 'O Multibanco é a rede portuguesa de caixas automáticas e serviços de pagamento da SIBS. No menu da caixa Multibanco, não serve apenas para levantar dinheiro: também pode pagar contas por referência, impostos, coimas, serviços do Estado, carregar um cartão SIM, fazer uma transferência bancária, consultar saldo/movimentos e, por vezes, depositar um cheque.' },
        { kind: 'checklist', items: [
          'Pagamento de serviços: água, eletricidade, gás, internet, condomínio — normalmente através de Pagamento de Serviços/Compras',
          'Pagamento de impostos: IMI, IUC, IRS, IVA, Segurança Social — com os dados do Portal das Finanças ou do aviso',
          'Pagamento de coimas: trânsito, estacionamento, polícia, portagens — se o aviso tiver entidade/referência/valor',
          'Carregamento de telemóvel: MEO, NOS, Vodafone, Lycamobile e outros — através de Carregamentos/Telemóveis',
          'Transferências: transferência para IBAN ou através do menu interno do banco; os limites dependem do banco',
          'Depósito de cheques: apenas em caixas Multibanco com função de depósitos, muitas vezes — do seu próprio banco',
          'Pagamentos ao Estado: opção de menu separada para alguns pagamentos ao Estado',
          'MB WAY: aplicação separada da SIBS, mas a associação do cartão é muitas vezes confirmada através do Multibanco'
        ] },
        { kind: 'warning', text: 'O Multibanco não anula prazos de pagamento. Se a referência expirou, a caixa Multibanco pode recusar o pagamento ou aceitá-lo como pagamento fora de prazo apenas em casos especiais. Para impostos e coimas, verifique sempre o prazo limite no documento.' }
      ]
    },
    {
      id: 'pay-reference',
      title: 'Pagamento por entidade + referência + valor',
      content: [
        { kind: 'paragraph', text: 'O formato mais comum das contas portuguesas tem três campos: Entidade, Referência, Montante/Valor. Estes dados aparecem na conta em PDF, carta, email, SMS ou na área de cliente do fornecedor. Funciona para serviços domésticos, fornecedores de internet, escolas, seguros, condomínio, lojas online e muitos pagamentos ao Estado.' },
        { kind: 'substeps', items: [
          { id: 'insert-card', title: '1. Introduza o cartão e escolha o idioma', content: [
            { kind: 'paragraph', text: 'Na maioria das caixas Multibanco existem português e English. Normalmente não há russo. Introduza o PIN e escolha Pagamentos e Outros Serviços ou Pagamentos.' }
          ] },
          { id: 'choose-payment', title: '2. Escolha Pagamento de Serviços/Compras', content: [
            { kind: 'paragraph', text: 'O nome pode variar ligeiramente consoante o banco, mas procure Serviços/Compras. Para impostos, por vezes é melhor usar Pagamentos ao Estado, se essa opção existir.' }
          ] },
          { id: 'enter-codes', title: '3. Introduza a entidade, a referência e o montante', content: [
            { kind: 'checklist', items: [
              'Entidade — normalmente 5 dígitos',
              'Referência — normalmente 9 dígitos, mas o formato depende do emissor',
              'Montante/Valor — valor em euros e cêntimos',
              'Não arredonde: se a conta for de 47,38 €, introduza 47,38 €',
              'Verifique o destinatário no ecrã antes de confirmar',
              'Guarde o talão/comprovativo ou fotografe o ecrã de confirmação'
            ] }
          ] },
          { id: 'keep-proof', title: '4. Guarde o comprovativo', content: [
            { kind: 'paragraph', text: 'Para pagamentos contestáveis — especialmente coimas, impostos, condomínio e renda — guarde o comprovativo pelo menos até o assunto ficar encerrado. Para impostos, é prudente manter o PDF/fotografia juntamente com o aviso das Finanças.' }
          ] }
        ] },
        { kind: 'warning', text: 'Se o montante já vier preenchido na conta, não o altere sem motivo. Para algumas referências, o montante faz parte da lógica de controlo: um valor incorreto resultará na recusa ou num pagamento que o fornecedor não conseguirá associar automaticamente.' }
      ]
    },
    {
      id: 'taxes-and-fines',
      title: 'Impostos, IMI/IUC e coimas',
      content: [
        { kind: 'paragraph', text: 'Para pagar impostos, não precisa de saber o IBAN da Autoridade Tributária. No Portal das Finanças é gerado um documento de cobrança com referência de pagamento, montante e prazo. Com esse documento pagam-se IMI, IUC, IRS, IVA, coimas e outros valores. Na caixa Multibanco, use Pagamentos ao Estado, se disponível, ou Pagamento de Serviços/Compras — siga o formato do documento.' },
        { kind: 'checklist', items: [
          'IMI: o aviso aparece no Portal das Finanças; o pagamento em prestações depende do valor do imposto',
          'IUC: paga-se anualmente até ao fim do mês da matrícula do automóvel; a referência obtém-se nas Finanças',
          'IRS: o pagamento adicional da declaração anual é feito através da nota de cobrança',
          'IVA/recibos verdes: os trabalhadores independentes pagam através do documento de cobrança, se houver valor a pagar',
          'Coimas Finanças: as coimas fiscais são pagas com os dados indicados no aviso',
          'Coimas de trânsito: use os dados da carta da ANSR/PSP/GNR ou do aviso entregue no local',
          'Estacionamento/EMEL/coimas municipais: o método depende do município, muitas vezes existe referência Multibanco',
          'Portagens/SCUT: se houver referência, pague como serviços; por vezes é mais simples através dos CTT/Payshop/serviço online'
        ] },
        { kind: 'warning', text: 'Para coimas de trânsito, o pagamento pode significar depósito ou pagamento voluntário, mas nem sempre elimina o direito de defesa/recurso. Leia a carta: os prazos, dados de pagamento e efeito jurídico do pagamento estão aí indicados, não no menu do Multibanco.' },
        { kind: 'warning', text: 'Os prazos fiscais em 2026 continuam rigorosos: o atraso pode gerar juros de mora e coima. Se a referência não funcionar, verifique no Portal das Finanças se o prazo expirou ou se foi criado um novo documento de cobrança.' }
      ]
    },
    {
      id: 'mobile-and-utilities',
      title: 'Telemóvel e contas de serviços',
      content: [
        { kind: 'paragraph', text: 'O carregamento de telemóvel é feito através de Carregamentos ou Telemóveis. Escolhe o operador, introduz o número e o montante. Para cartões SIM pré-pagos, o dinheiro costuma chegar rapidamente, mas em operadores virtuais e cartões SIM internacionais pode haver atraso ou um menu separado.' },
        { kind: 'checklist', items: [
          'MEO/NOS/Vodafone: normalmente estão no menu Carregamentos',
          'O valor mínimo de carregamento depende do operador e do tarifário; são frequentes 5 €, 7,50 €, 10 € e valores superiores',
          'Verifique o número duas vezes: o banco normalmente não devolve automaticamente um carregamento feito por engano para outro número',
          'Para internet e TV em casa, use normalmente a entidade/referência da conta, e não o menu de carregamentos de telemóvel',
          'Contas da E-REDES, EDP, Galp, Endesa, Iberdrola, Águas municipais são normalmente pagas como serviços',
          'O condomínio pode enviar uma referência Multibanco ou pedir transferência bancária para IBAN',
          'A renda de casa é normalmente paga por transferência bancária, e não por Multibanco reference, salvo se o senhorio tiver fornecido uma referência'
        ] },
        { kind: 'paragraph', text: 'Se tiver débito direto ativo, a conta é cobrada automaticamente. Nesse caso, o Multibanco serve para um pagamento pontual, se o débito direto falhar, se mudou de banco ou se o fornecedor enviou uma cobrança separada.' },
        { kind: 'warning', text: 'Não pague novamente se, depois do pagamento, a conta ainda aparecer em aberto na aplicação do fornecedor. A atualização do estado pode demorar 1–3 dias úteis. Primeiro verifique os movimentos da conta e o comprovativo.' }
      ]
    },
    {
      id: 'transfers-cheques-mbway',
      title: 'Transferências, cheques e MB WAY',
      content: [
        { kind: 'paragraph', text: 'Através do Multibanco é possível fazer transferências, mas os tipos disponíveis e os limites são definidos pelo seu banco. Por vezes a caixa Multibanco só oferece transferência entre contas do mesmo banco ou por IBAN; por vezes é mais conveniente fazer a transferência na aplicação do banco.' },
        { kind: 'checklist', items: [
          'Transferência normal: pode ser executada no próprio dia útil/dia útil seguinte, dependendo do banco e do sistema',
          'Transferência imediata: em Portugal está amplamente disponível, mas a disponibilidade e a comissão dependem do banco e do canal',
          'Limites de montante: consulte o contrato/preçário do banco; para novos clientes, os limites são muitas vezes mais baixos',
          'Comissão: as operações no Multibanco para o consumidor são muitas vezes gratuitas, mas as transferências podem ser tarifadas pelo banco',
          'Depósito de cheques: procure uma caixa Multibanco com função de depósito; normalmente é necessário envelope/digitalização e a conta do beneficiário',
          'O crédito do cheque não é imediato: o banco pode apresentar saldo contabilístico e saldo disponível de forma diferente',
          'O MB WAY é associado ao número de telefone e ao cartão; a confirmação pode exigir uma caixa Multibanco ou a app do banco',
          'Pagamentos MB WAY e pedidos de dinheiro não são o mesmo que Multibanco reference'
        ] },
        { kind: 'warning', text: 'Em Portugal, em 2026, os cheques ainda existem, mas não são dinheiro imediato. Não entregue bens/chaves apenas porque a pessoa “depositou um cheque”: espere pelo saldo disponível ou use transferência imediata.' }
      ]
    },
    {
      id: 'safety-and-errors',
      title: 'Segurança e erros frequentes',
      content: [
        { kind: 'paragraph', text: 'A regra principal: a caixa Multibanco executa aquilo que você confirmou. Em caso de erro na referência, no montante ou no número de telefone, a devolução não é feita através de um “cancelamento na caixa Multibanco”, mas sim através do banco, do fornecedor do serviço ou do destinatário.' },
        { kind: 'checklist', items: [
          'Tape o PIN com a mão; em zonas turísticas, verifique se há dispositivos sobrepostos no leitor de cartões',
          'Não aceite ajuda de desconhecidos junto à caixa Multibanco, especialmente se o cartão “ficar preso”',
          'Guarde o comprovativo de impostos, coimas, renda, condomínio e contas de valor elevado',
          'Compare a entidade e a referência com o PDF/carta original, não com uma captura de ecrã reencaminhada',
          'Se suspeitar de phishing, telefone para o banco através do número no cartão/site, não pelo SMS',
          'Se a caixa Multibanco não entregou o dinheiro, mas debitou a conta, registe imediatamente o número do ATM, local, hora e montante',
          'Se o cartão for retido, bloqueie-o na aplicação do banco ou pela hotline, sem se afastar muito da caixa Multibanco',
          'Para pagamentos ao Estado, verifique o estado no Portal das Finanças após 1–3 dias úteis'
        ] },
        { kind: 'warning', text: 'Uma entidade/referência num email de phishing pode parecer “portuguesa”. Se estiver relacionado com impostos, uma coima, CTT, portagens ou banco — entre manualmente na área oficial, e não através de uma ligação de SMS/email.' }
      ]
    }
  ],
  costs: [
    { label: 'Pagamento de serviços/compras por Multibanco reference', amountEUR: 0, note: 'Normalmente gratuito para quem paga; a comissão é paga pelo destinatário/comerciante, mas raras exceções dependem do banco e do serviço.' },
    { label: 'Carregamento de telemóvel através do Multibanco', amountEUR: 0, note: 'A comissão da caixa Multibanco é normalmente 0 €; o valor mínimo de carregamento depende do operador e do tarifário.' },
    { label: 'Transferência bancária através do Multibanco', amountEURMin: 0, amountEURMax: 2, note: 'Valor indicativo para clientes particulares; a comissão exata e os limites constam do preçário do seu banco.' },
    { label: 'Depósito de cheque', amountEURMin: 0, amountEURMax: 5, note: 'Pode ser gratuito ou tarifado pelo banco; o crédito não é imediato.' }
  ],
  sources: [
    { title: 'SIBS — rede Multibanco e serviços de pagamento', url: 'https://www.sibs.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — pagamentos bancários e direitos dos utilizadores', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — pagamentos ao Estado e documentos de cobrança', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANSR — coimas por infrações rodoviárias e pagamento voluntário', url: 'https://www.ansr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
