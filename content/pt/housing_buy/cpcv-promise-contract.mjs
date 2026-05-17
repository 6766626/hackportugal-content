export default {
  editorialVoice: 'hackportugal',
  id: 'cpcv-promise-contract',
  categoryId: 'housing_buy',
  title: 'CPCV — contrato-promessa de compra e venda de habitação e sinal',
  tldr: 'CPCV — contrato-promessa de compra e venda: contrato preliminar que normalmente é assinado 2–8 semanas antes da escritura. O comprador paga um sinal, frequentemente 10–20% do preço. Nos termos do art. 442 Código Civil: se o comprador incumprir — perde o sinal; se o vendedor incumprir — devolve o sinal em dobro. Em 2026, um CPCV seguro deve incluir condições de crédito, verificações de licenças/dívidas e, sempre que possível, registo provisório de aquisição.',
  tags: ['cpcv', 'sinal', 'compra', 'imobiliário'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-cpcv',
      title: 'O que é o CPCV e porque é assinado',
      content: [
        { kind: 'paragraph', text: 'O CPCV não é uma “reserva de apartamento”, mas uma promessa juridicamente vinculativa de comprar e vender um imóvel. Fixa o preço, os prazos, o sinal, as condições de saída e a data da futura escritura ou Documento Particular Autenticado.' },
        { kind: 'paragraph', text: 'Em Portugal, o CPCV é assinado antes do negócio final porque o banco precisa de tempo para mortgage approval, valuation, seguros e preparação da escritura. Mesmo numa compra sem crédito, o CPCV também é utilizado: o vendedor retira o imóvel do mercado e o comprador ganha tempo para due diligence.' },
        { kind: 'warning', text: 'Não assine um CPCV “com base no modelo da agência” se os documentos do imóvel não tiverem sido verificados. Depois da assinatura, a perda do sinal pode ser legal, mesmo que simplesmente tenha mudado de ideias.' }
      ]
    },
    {
      id: 'sinal-rules',
      title: 'Sinal: quanto pagar e o que diz o art. 442 CC',
      content: [
        { kind: 'paragraph', text: 'O sinal é um adiantamento que confirma a seriedade do negócio. No mercado habitacional, é frequente pedirem 10–20% do preço, mas a lei não estabelece uma percentagem obrigatória. Para imóveis caros e negócios com crédito, pode negociar-se um sinal mais baixo, por exemplo 5–10%, se o vendedor aceitar.' },
        { kind: 'checklist', items: [
          'Se o comprador incumprir o CPCV sem fundamento legal — o vendedor normalmente fica com o sinal.',
          'Se o vendedor incumprir o CPCV — o comprador pode exigir a devolução do sinal em dobro.',
          'Estas consequências decorrem do art. 442 Código Civil, se as partes não tiverem previsto outro mecanismo admissível.',
          'O sinal deve ser expressamente identificado no contrato como “sinal e princípio de pagamento”, e não apenas como “reserva”.',
          'Pague por transferência bancária para a conta do vendedor ou para escrow/conta cliente de advogado/solicitador, não em numerário.',
          'Na descrição da transferência, indique o imóvel, o NIF das partes e “sinal CPCV”.',
          'Guarde o comprovativo de transferência: será necessário em caso de litígio, para o banco e para compliance.'
        ] },
        { kind: 'warning', text: '“A agência segura o imóvel por 5 000 €” — isto nem sempre é sinal nos termos do art. 442. Se o pagamento for feito à agência, deve existir um documento escrito separado: quem recebe o dinheiro, com que fundamento, se é reembolsável e quando passa a ser sinal.' }
      ]
    },
    {
      id: 'clauses-to-include',
      title: 'O que deve constar obrigatoriamente no CPCV',
      content: [
        { kind: 'paragraph', text: 'Um bom CPCV deve ser aborrecido e concreto: quem vende, o que vende, por quanto, quando, em que condições o negócio é cancelado sem penalização e que documentos o vendedor é obrigado a entregar antes da escritura.' },
        { kind: 'checklist', items: [
          'Dados completos das partes: nome, NIF, estado civil, regime de bens, morada, documento de identificação.',
          'Descrição exacta do imóvel: artigo matricial, descrição predial, fração, morada, área, garagem/arrecadação.',
          'Preço, montante do sinal, calendário de pagamentos posteriores e método de pagamento.',
          'Prazo limite para a escritura: por exemplo, até 60 ou 90 dias, com mecanismo de prorrogação por responsabilidade do banco/Conservatória.',
          'Condição de crédito: o CPCV só produz efeitos mediante aprovação final do crédito habitacional; em caso de recusa do banco, o sinal é devolvido.',
          'Lista de documentos do vendedor: caderneta predial, certidão permanente, licença de utilização ou dispensa legal, ficha técnica da habitação, certificado energético, declaração do condomínio.',
          'Garantia de inexistência de dívidas: IMI, condomínio, utilities, hipoteca, arrestos, penhoras, usufruto, arrendamento.',
          'Quem paga IMT, Imposto do Selo, escritura, registo, cancelamento da hipoteca do vendedor.',
          'Estado do imóvel e bens incluídos: mobiliário, electrodomésticos, aparelhos de ar condicionado, solar panels, estacionamento.',
          'Consequências do breach: perda do sinal, devolução em dobro, execução específica nos termos do art. 830 Código Civil, se as partes não a excluírem.'
        ] },
        { kind: 'warning', text: 'Se comprar com hipoteca, a clause “subject to mortgage approval” é crítica. A pré-aprovação bancária não equivale à aprovação final após avaliação. Sem esta ressalva, a recusa do banco pode não salvar o sinal.' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Verificações antes da assinatura: mínimo para expat',
      content: [
        { kind: 'paragraph', text: 'Antes do CPCV, é necessário verificar não só o vendedor, mas também o próprio imóvel. Em Portugal, existem anexos sem licença, sótãos não legalizados, dívidas de condomínio e restrições na Conservatória.' },
        { kind: 'checklist', items: [
          'Certidão permanente do registo pred: proprietário, hipotecas, arrestos, usufruto, servidões.',
          'Caderneta predial urbana no Portal das Finanças: artigo, VPT, área, afectação.',
          'Licença de utilização ou confirmação de que o imóvel está dispensado devido à idade/regime.',
          'Certificado energético: obrigatório na venda, a classe influencia o crédito e as obras.',
          'Ficha técnica da habitação para imóveis em que seja exigida.',
          'Declaração de condomínio: inexistência de dívidas, mensalidade e obras previstas claras.',
          'Verificação na Câmara Municipal: licenças, works, urbanismo, especialmente para moradia, anexos, attic, basement.',
          'Se o vendedor for uma empresa: certidão comercial, poderes do signatário, IVA/nuances fiscais.',
          'Se o vendedor for não residente: quem assina, se existe procuração, se é necessária retenção de imposto em casos especiais.'
        ] },
        { kind: 'warning', text: 'O agente imobiliário trabalha para o negócio, não para a protecção jurídica do comprador. Para um CPCV de centenas de milhares de euros, a prática normal é contratar um advogado ou solicitador antes da assinatura, não na véspera da escritura.' }
      ]
    },
    {
      id: 'provisional-registration',
      title: 'Registo provisório de aquisição: protecção do comprador',
      content: [
        { kind: 'paragraph', text: 'O registo provisório de aquisição é o registo preliminar da futura compra na Conservatória do Registo Predial. Torna a sua posição visível perante terceiros e reduz o risco de o vendedor voltar a vender o imóvel ou onerá-lo antes da escritura.' },
        { kind: 'paragraph', text: 'Normalmente, o pedido é apresentado por advogado, solicitador, notário ou conservador através dos serviços de registo. Para o registo, é necessário um CPCV com identificação suficiente do imóvel e das partes; por vezes é necessário reconhecimento presencial das assinaturas.' },
        { kind: 'checklist', items: [
          'É especialmente útil se entre o CPCV e a escritura decorrerem mais de 30–45 dias.',
          'É recomendado em compras a promotores, em cadeias de venda complexas ou se o vendedor estiver sob pressão financeira.',
          'Verifique o prazo de validade do provisório e se pode ser convertido em definitivo após a escritura.',
          'Certifique-se de que o banco concorda com a redacção do CPCV e com o futuro registo da hipoteca.',
          'Após a escritura, a compra deve ser registada de forma definitiva; o provisório, por si só, não o torna proprietário.'
        ] },
        { kind: 'warning', text: 'O registo provisório não substitui a due diligence. Se já existir uma hipoteca, penhora ou litígio no registo, o registo preliminar não “limpa” o imóvel — é necessária uma solução jurídica antes do negócio.' }
      ]
    },
    {
      id: 'signing-and-after',
      title: 'Assinatura, impostos e caminho até à escritura',
      content: [
        { kind: 'paragraph', text: 'O CPCV pode ser assinado presencialmente ou por procuração. Para maior força probatória, as assinaturas são frequentemente feitas com reconhecimento presencial em notário, advogado ou solicitador. Se o imóvel for vendido com entrega da posse antes da escritura, os requisitos de forma e as consequências fiscais devem ser verificados separadamente.' },
        { kind: 'checklist', items: [
          'Antes da assinatura, obtenha a versão final do CPCV em português; a tradução para a sua língua é apenas auxiliar.',
          'Confirme nomes, NIF, IBAN, artigo matricial e descrição predial com os documentos.',
          'Não transfira o sinal antes da assinatura ou da troca simultânea de exemplares assinados.',
          'Logo após o CPCV, fixe o deadline para mortgage valuation, seguro de vida, seguro multirriscos e escritura.',
          'O IMT e o Imposto do Selo são normalmente pagos antes da escritura, não no momento do CPCV.',
          'Na escritura, o vendedor deve liquidar a hipoteca ou apresentar distrate/cancelamento da hipoteca.',
          'Após o negócio final, verifique o registo definitivo e a actualização da ownership nas Finanças.'
        ] },
        { kind: 'warning', text: 'Se o vendedor pedir para “entregar as chaves depois do CPCV”, isso já é um risco de posse sem propriedade. São necessárias clauses separadas: quem paga condomínio, utilities, seguro, reparações, o que acontece se a escritura falhar.' }
      ]
    }
  ],
  costs: [
    { label: 'Sinal no CPCV', amountEURMin: 0, amountEURMax: 0, note: 'A lei não fixa o montante; na prática, é frequentemente 10–20% do preço do imóvel. Para um imóvel de 300 000 € isto corresponde normalmente a 30 000–60 000 €.' },
    { label: 'Verificação jurídica do CPCV', amountEURMin: 300, amountEURMax: 1500, note: 'Referência de mercado para advogado/solicitador; negócios complexos, promotores e hipoteca custam mais.' },
    { label: 'IMT e Imposto do Selo', amountEURMin: 0, amountEURMax: 0, note: 'Normalmente são pagos antes da escritura. O montante depende do preço, VPT, tipo de imóvel e estatuto do comprador; não é uma taxa pelo CPCV.' }
  ],
  sources: [
    {
      title: 'Código Civil — Decreto-Lei 47344/1966, incluindo art. 410, 442 e 830',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt — Comprar ou vender casa',
      url: 'https://justica.gov.pt/Servicos/Comprar-vender-casa',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Registo Predial Online',
      url: 'https://www.predialonline.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
