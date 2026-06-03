export default {
  editorialVoice: 'hackportugal',
  id: 'smart-meter-edp-direitos',
  categoryId: 'daily_life',
  title: 'Contadores inteligentes E-REDES: direitos do consumidor',
  tldr: 'Em Portugal, o contador de eletricidade pertence normalmente ao operador da rede E-REDES, e não à EDP Comercial nem ao arrendatário. A substituição em massa por smart meter deveria ter sido concluída pela E-REDES até ao final de 2024; em 2026, a instalação e a substituição programada são gratuitas para o cliente. O contador inteligente permite telecontagem: leituras automáticas, menos estimativas, consulta do consumo online. Mas a precisão pode ser contestada, o acesso aos dados é regulado pela ERSE/GDPR, e os comercializadores não têm o direito de impor uma nova tarifa “por causa do contador”.',
  tags: ['edp', 'e-redes', 'contadores', 'eletricidade'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-is-who',
      title: 'Quem faz o quê: E-REDES ≠ EDP Comercial',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há o fornecedor de eletricidade — por exemplo EDP Comercial, Galp, Iberdrola, Endesa, Goldenergy — e o operador da rede de distribuição. Na maior parte de Portugal continental, o operador é a E-REDES. É a E-REDES que gere o contador, a recolha de leituras, a substituição de equipamentos e as avarias técnicas.' },
        { kind: 'checklist', items: [
          'O contrato e a fatura da luz são com o seu comercializador: EDP Comercial, Endesa, Galp, etc.',
          'Contador, leitura, avaria, potência contratada ao nível técnico — são área da E-REDES.',
          'CPE — código do ponto de entrega, normalmente começa por PT; é necessário para contactos e mudança de fornecedor.',
          'O contador inteligente não o prende à EDP: pode mudar de fornecedor.',
          'O colaborador da E-REDES deve ter identificação; não deve vender tarifas no local.',
          'Se lhe ligarem “da EDP/E-REDES” e exigirem que assine um novo contrato por causa do smart meter — é motivo para verificar através de um contacto oficial.'
        ] }
      ]
    },
    {
      id: 'installation-rights',
      title: 'Instalação e substituição: o que é gratuito ✅',
      content: [
        { kind: 'paragraph', text: 'A substituição programada de um contador analógico por um contador inteligente faz parte da modernização da rede. Para um cliente normal em baixa tensão normal, não deve ter custos: a E-REDES troca o equipamento enquanto operador da rede. O rollout em massa da E-REDES estava previsto para ficar concluído até ao final de 2024, pelo que em 2026 um contador analógico já é uma exceção: casa antiga, acesso fechado, problema técnico ou comunicação ainda não ativada.' },
        { kind: 'checklist', items: [
          'Instalação programada de smart meter — 0 € para o cliente.',
          'Substituição de contador avariado, se a culpa não for do cliente — 0 €.',
          'Não precisa de celebrar um novo contrato com a EDP Comercial apenas por causa do novo contador.',
          'Se o contador estiver dentro do apartamento/casa, a E-REDES pode pedir acesso numa hora combinada.',
          'Se o contador estiver no exterior, a substituição muitas vezes acontece sem a sua participação.',
          'Depois da instalação, verifique o número do contador e o CPE nos documentos/área de cliente.',
          'Fotografe as leituras antiga e nova no dia da substituição.',
          'Se a fatura subir abruptamente após a substituição, não espere 3 meses: peça de imediato a verificação das leituras.'
        ] },
        { kind: 'warning', text: 'O que é gratuito é a substituição técnica programada. Se for você a pedir a deslocação do contador, a alteração da entrada, o aumento da potência contratada com trabalhos no quadro ou a alteração da instalação elétrica, isso pode ter custos e ser feito através de eletricista/certificação.' }
      ]
    },
    {
      id: 'data-and-telecounting',
      title: 'Telecontagem e acesso aos dados',
      content: [
        { kind: 'paragraph', text: 'Um smart meter, por si só, nem sempre significa telecontagem ativa. É necessária a integração do contador na rede inteligente. Quando está ativa, as leituras são transmitidas automaticamente, e as faturas dependem menos de estimativas. No Balcão Digital E-REDES e em alguns fornecedores é possível ver o histórico de consumo — normalmente por dia e, quando os dados estão disponíveis, também por intervalos mais curtos.' },
        { kind: 'checklist', items: [
          'Verifique o estado da telecontagem no Balcão Digital E-REDES através do CPE.',
          'Se a telecontagem estiver ativa, normalmente não é necessário enviar a leitura todos os meses.',
          'Se a telecontagem ainda não estiver ativa, continue a comunicar as leituras ao fornecedor ou à E-REDES no período indicado na fatura.',
          'Os dados detalhados de consumo são dados pessoais: a sua utilização é regulada pela ERSE e pelo GDPR.',
          'O fornecedor recebe os dados necessários para faturação; acessos alargados e serviços de análise podem exigir consentimento.',
          'Pode pedir acesso aos seus dados através da E-REDES e da área de cliente do fornecedor.',
          'Para monitorização local em tempo real, alguns contadores suportam HAN/local port; a disponibilidade depende do modelo e da ativação pela E-REDES.',
          'Se os dados na aplicação da EDP Comercial e da E-REDES forem diferentes, verifique primeiro o CPE, o período da fatura e o tipo de leitura: real, estimada ou corrigida.'
        ] },
        { kind: 'warning', text: 'Não forneça a desconhecidos CPE, NIF, IBAN e códigos SMS “para ativar o contador inteligente”. Para instalar um smart meter não é necessário o seu código bancário nem um novo contrato tarifário.' }
      ]
    },
    {
      id: 'opt-in-opt-out',
      title: 'Consentimento, recusa e privacidade',
      content: [
        { kind: 'paragraph', text: 'O contador faz parte da rede de distribuição, por isso a substituição programada do equipamento não pode ser tratada como um serviço comercial comum “à escolha”. A E-REDES tem o direito de fazer a manutenção e substituir o equipamento de medição. Mas o consumidor mantém direitos à informação, à proteção de dados pessoais, ao acesso às suas leituras e à limitação da utilização comercial de dados detalhados.' },
        { kind: 'checklist', items: [
          'Tem o direito de saber quem chegou, de que empresa, por que motivo o contador vai ser substituído e que CPE é afetado.',
          'Tem o direito de obter confirmação da instalação e as leituras finais do contador antigo/novo.',
          'Tem o direito de recusar uma proposta de marketing do fornecedor, mesmo que esteja relacionada com o smart meter.',
          'Tem o direito de pedir ao fornecedor ou à E-REDES uma explicação sobre que dados são usados para a fatura.',
          'Tem o direito de retirar consentimentos para serviços comerciais adicionais, se não forem obrigatórios para faturação e funcionamento da rede.',
          'Tem o direito de reclamar no Livro de Reclamações e junto da ERSE, se os dados forem utilizados de forma pouco transparente.',
          'Não é obrigado a pagar uma “taxa de contador inteligente” pelo simples facto da instalação.'
        ] },
        { kind: 'warning', text: 'Um “opt-out” total do próprio equipamento de medição é, na prática, limitado: o operador da rede tem de ter um contador funcional para medir o consumo. Se a questão for a privacidade, não peça a desmontagem; peça esclarecimentos sobre o regime dos dados, a telecontagem e os consentimentos.' }
      ]
    },
    {
      id: 'accuracy-disputes',
      title: 'Se o contador estiver errado ou a fatura se tornar suspeita',
      content: [
        { kind: 'paragraph', text: 'Um aumento brusco da fatura após a instalação de um smart meter muitas vezes não está relacionado com um “contador acelerado”, mas sim com o fim das estimativas: a fatura antiga pode ter ficado subavaliada durante meses e depois chegou uma correção. Mas não se deve excluir um erro. Atue por escrito e guarde fotografias do visor.' },
        { kind: 'substeps', items: [
          { id: 's1-compare', title: '1. Compare a fatura e as leituras reais', content: [
            { kind: 'checklist', items: [
              'Encontre na fatura o tipo de leitura: real, estimada ou corrigida.',
              'Fotografe o visor do contador com data.',
              'Compare o CPE e o número do contador na fatura.',
              'Verifique o período: por vezes a fatura cobre mais de 30 dias.',
              'Verifique a potência contratada e a tarifa: simples, bi-horário, tri-horário.'
            ] }
          ] },
          { id: 's2-contact', title: '2. Escreva ao fornecedor e à E-REDES', content: [
            { kind: 'paragraph', text: 'O fornecedor responde pela fatura e pelo pagamento, a E-REDES pelos dados de medição. No contacto, indique NIF, CPE, número da fatura, data da substituição, fotografias das leituras e o que contesta exatamente: leitura, consumo, potência ou avaria.' }
          ] },
          { id: 's3-verification', title: '3. Peça a verificação do contador', content: [
            { kind: 'paragraph', text: 'Se o litígio não ficar resolvido com a conferência dos dados, pode pedir uma verificação técnica/verificação do contador. Segundo as regras do setor, se o equipamento estiver fora da margem de erro permitida, os custos e a correção não devem recair sobre o cliente; se o contador estiver correto, a verificação pode ser cobrada ao cliente de acordo com as tarifas aplicáveis.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não deixe de pagar a fatura toda sem estratégia: a dívida pode levar a um procedimento de corte. É mais seguro pagar a parte não contestada, abrir uma reclamação e pedir por escrito a suspensão/correção do montante contestado.' }
      ]
    },
    {
      id: 'analog-quirks',
      title: 'O que muda depois de um contador analógico',
      content: [
        { kind: 'paragraph', text: 'A principal mudança é haver menos leituras manuais e menos surpresas de estimativas. Mas os primeiros meses após a substituição podem ser “confusos”: fecho do período antigo, correção de estimativas acumuladas, ativação da comunicação que pode não ocorrer no mesmo dia.' },
        { kind: 'checklist', items: [
          'Depois da instalação, guarde uma fotografia da leitura antiga: é proteção contra uma correção incorreta.',
          'Verifique a primeira e a segunda fatura após a substituição com especial atenção.',
          'Se a telecontagem não estiver ativa, continue a comunicar as leituras manualmente.',
          'Não confunda EDP Comercial com E-REDES: a reclamação sobre a fatura vai para o fornecedor, a reclamação sobre a medição vai para a E-REDES.',
          'Ao arrendar uma casa, peça ao landlord uma fotografia do contador no dia da entrada e no dia da saída.',
          'Ao mudar de ocupante, registe sempre o CPE e a leitura, caso contrário pode pagar consumos de outra pessoa.',
          'Se o contador estiver num armário comum, informe-se junto do condomínio sobre como obter acesso para fotografar.',
          'Para poupar, veja não só os kWh, mas também a potência contratada: 6,9 kVA desnecessários em vez de 3,45/4,6 kVA geram um pagamento excessivo permanente.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Instalação programada de smart meter E-REDES', amountEUR: 0, note: 'Não deve ser cobrada ao cliente como serviço separado.' },
    { label: 'Substituição programada de contador avariado sem culpa do cliente', amountEUR: 0, note: 'Normalmente é coberta pelo operador da rede.' },
    { label: 'Verificação do contador em caso de litígio', amountEURMin: 0, amountEURMax: 100, note: 'O valor exato depende das tarifas aplicáveis e do resultado da verificação; se o erro do contador for confirmado, o cliente não deve suportar os custos.' }
  ],
  sources: [
    { title: 'E-REDES: contadores inteligentes, leituras e Balcão Digital', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: direitos dos consumidores de eletricidade e relações comerciais', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: Livro de Reclamações e resolução de conflitos no setor energético', url: 'https://www.erse.pt/consumidores-de-energia/pedidos-de-informacao-reclamacoes/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
