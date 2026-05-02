export default {
  editorialVoice: 'hackportugal',
  id: 'mudar-comercializador-luz-gas',
  categoryId: 'daily_life',
  title: 'Mudar de fornecedor de eletricidade e gás: gratuito e sem corte',
  tldr: 'Em Portugal, mudar de comercializador de eletricidade/gás é gratuito: o novo fornecedor inicia o processo, o contrato antigo é encerrado sem visita de técnico e sem corte de luz/gás. Compare tarifas no simulador oficial simulador.erse.pt usando CPE/CUI, consumo anual e potência contratada. Principais operadores: EDP, Galp, Endesa, Iberdrola, Goldenergy, Coopérnico, Plenitude. Em contratos à distância, aplica-se o direito de livre resolução de 14 dias.',
  tags: ['eletricidade', 'gás', 'erse', 'faturas'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-changes',
      title: 'O que muda realmente',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, a rede e o fornecedor são coisas diferentes. Os cabos, o contador e o serviço de avarias continuam a pertencer ao operador de rede, e você muda apenas de comercializador: a empresa que emite a fatura e vende a tarifa.' },
        { kind: 'paragraph', text: 'Por isso, a mudança de fornecedor normalmente não exige visita de técnico, substituição do contador ou corte. O novo fornecedor faz o pedido administrativo, e o antigo recebe a notificação automaticamente.' },
        { kind: 'checklist', items: [
          'Eletricidade: precisa do CPE — código do ponto de entrega, indicado na fatura',
          'Gás: precisa do CUI — código do ponto de entrega de gás, indicado na fatura',
          'NIF do titular do contrato',
          'Morada de fornecimento',
          'IBAN, se quiser débito direto',
          'Última leitura / leituras atuais do contador — útil, mas nem sempre obrigatório',
          'Compreender a sua tarifa: simples, bi-horário ou tri-horário',
          'Compreender a potência contratada: por exemplo 3,45 kVA, 4,6 kVA, 6,9 kVA'
        ] }
      ]
    },
    {
      id: 'compare',
      title: 'Compare tarifas no Simulador ERSE',
      content: [
        { kind: 'paragraph', text: 'O comparador oficial é o simulador.erse.pt. Não é um agregador publicitário: é gerido pela ERSE, a entidade reguladora da energia. Introduza os dados da última fatura para obter um cálculo não “em média”, mas de acordo com o seu perfil de consumo.' },
        { kind: 'checklist', items: [
          'Abra simulador.erse.pt',
          'Escolha eletricidade, gás natural ou dual',
          'Introduza distrito/concelho e tipo de cliente: doméstico',
          'Indique o consumo anual em kWh — use o total anual indicado na fatura',
          'Para eletricidade, indique a potência contratada',
          'Indique a opção tarifária: simples / bi-horário / tri-horário',
          'Verifique se estão incluídos descontos por débito direto e fatura eletrónica',
          'Veja o preço com IVA e tarifas de acesso às redes, e não apenas o “desconto %”',
          'Compare as condições de rescisão e o prazo de preço fixo'
        ] },
        { kind: 'warning', text: 'Um desconto de 20–30% na publicidade muitas vezes aplica-se apenas à componente energia, e não à fatura inteira. A poupança final pode ser muito menor, porque a fatura inclui tarifas de acesso às redes, impostos e componentes fixas.' }
      ]
    },
    {
      id: 'choose-supplier',
      title: 'Escolha o fornecedor e verifique as letras pequenas',
      content: [
        { kind: 'paragraph', text: 'Grandes fornecedores no mercado: EDP Comercial, Galp, Endesa, Iberdrola, Goldenergy, Coopérnico, Plenitude. Todos permitem contratação online, mas as condições variam: preço fixo/indexado, desconto por direct debit, fatura eletrónica, serviços adicionais e período de fidelização.' },
        { kind: 'checklist', items: [
          'Preço kWh: separado para vazio/fora de vazio, se for bi-horário',
          'Preço potência: preço diário pela potência, €/dia',
          'Preço do gás: termo fixo e preço kWh',
          'Se existe fidelização e penalização por saída antecipada',
          'Se é necessário comprar serviço adicional: assistência casa, seguro, manutenção',
          'Se o desconto se mantém sem débito direto',
          'Com que frequência o preço muda: fixo, mensal, indexado OMIE/MIBGAS',
          'Se existe app e apoio em inglês, caso o seu português seja fraco',
          'Se é possível comunicar leituras online'
        ] },
        { kind: 'warning', text: 'Não assine o contrato se a “tarifa barata” estiver associada a um serviço pago de assistência ou seguro que elimina a poupança. Peça a ficha contratual / condições particulares em PDF antes de confirmar.' }
      ]
    },
    {
      id: 'contract-process',
      title: 'Como decorre a mudança',
      content: [
        { kind: 'paragraph', text: 'O pedido é apresentado ao novo fornecedor. Este solicita a mudança através do sistema de mercado. Normalmente não é necessário ligar separadamente ao fornecedor antigo, exceto em casos de dívida, fidelização ativa ou se quiser encerrar serviços adicionais.' },
        { kind: 'checklist', items: [
          'Forneça ao novo fornecedor NIF, CPE/CUI, morada e IBAN',
          'Indique o nome do titular do contrato exatamente como no contrato antigo',
          'Confirme o contrato por código SMS, assinatura eletrónica ou gravação de chamada',
          'Guarde o PDF do contrato e a ficha contratual',
          'Comunique as leituras do contador no dia da mudança ou perto dessa data',
          'Verifique a última fatura do fornecedor antigo: acerto final',
          'Confirme que a primeira fatura do novo fornecedor começa na data correta'
        ] },
        { kind: 'paragraph', text: 'A mudança em si é gratuita. Não deve haver corte de luz ou gás: o fornecimento físico continua através da mesma rede.' }
      ]
    },
    {
      id: 'cancel-14-days',
      title: 'Direito de livre resolução de 14 dias',
      content: [
        { kind: 'paragraph', text: 'Se o contrato for celebrado online, por telefone ou fora do estabelecimento do fornecedor, o consumidor normalmente tem 14 dias para livre resolução — cancelar sem apresentar motivo. Este direito decorre do regime dos contratos à distância e dos contratos celebrados fora do estabelecimento comercial.' },
        { kind: 'checklist', items: [
          'Envie o cancelamento por escrito: email, formulário de cliente ou carta registada',
          'Indique NIF, CPE/CUI, número do contrato e data de celebração',
          'Peça confirmação do cancelamento por escrito',
          'Se o fornecimento já tiver começado a seu pedido, podem cobrar a energia efetivamente consumida',
          'Guarde capturas de ecrã, emails e comprovativo de envio',
          'Se a recusa for ignorada — reclamação no Livro de Reclamações eletrónico e na ERSE'
        ] },
        { kind: 'warning', text: 'Os 14 dias contam a partir da celebração do contrato, e não da primeira fatura. Se tiver dúvidas sobre as condições, cancele de imediato, não espere pelo fim do mês.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Problemas frequentes para expats',
      content: [
        { kind: 'checklist', items: [
          'Contrato de arrendamento em nome de uma pessoa, mas fatura em nome de outra: o novo fornecedor pode pedir autorização ou mudança de titular',
          'Numa casa antiga, potência contratada baixa: com chaleira + forno + ar condicionado, o quadro dispara',
          'Bi-horário só compensa se a maior parte do consumo for à noite/ao fim de semana',
          'Uma tarifa indexada pode ser mais barata, mas é mais arriscada com subidas bruscas dos preços grossistas',
          'Se existir dívida ao fornecedor antigo, a mudança pode avançar, mas a dívida não desaparece',
          'Gás e eletricidade “dual” nem sempre são mais baratos do que duas melhores tarifas separadas',
          'Em caso de mudança de casa, isto não é “mudança de fornecedor”, mas sim um novo contrato ou mudança de titular na morada'
        ] },
        { kind: 'paragraph', text: 'Se acabou de entrar na casa, comece por encontrar o CPE/CUI. Podem estar numa fatura antiga do senhorio, no contrato de ligação, ou podem ser pedidos ao operador de rede com base na morada e nos dados do contador.' }
      ]
    }
  ],
  costs: [
    { label: 'Mudança de fornecedor de eletricidade/gás', amountEUR: 0, note: 'A mudança administrativa de comercializador é gratuita e não exige corte.' },
    { label: 'Rescisão do contrato antigo', amountEUR: 0, note: 'Normalmente é gratuita, se não houver fidelização ou serviço pago separado.' },
    { label: 'Consumo até à data da mudança', amountEURMin: 0, amountEURMax: 0, note: 'É pago de acordo com a fatura real do fornecedor antigo; não é uma comissão pela mudança.' }
  ],
  sources: [
    {
      title: 'ERSE — informação para consumidores sobre eletricidade e gás natural',
      url: 'https://www.erse.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERSE Simulador de preços de energia',
      url: 'https://www.simulador.erse.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 24/2014 — contratos à distância e fora do estabelecimento comercial',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2014-73252374',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
