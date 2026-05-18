export default {
  editorialVoice: 'hackportugal',
  id: 'cpcv-promise-contract',
  categoryId: 'housing_buy',
  title: 'CPCV — contrato-promessa de compra e venda de habitação e sinal',
  tldr: 'CPCV — contrato-promessa de compra e venda: contrato preliminar que normalmente é assinado 2–8 semanas antes da escritura. O comprador paga um sinal, frequentemente 10–20% do preço. Nos termos do art. 442 Código Civil: se a falha for do comprador — perde o sinal; se for do vendedor — devolve o sinal em dobro. Em 2026, um CPCV seguro deve incluir condições de crédito, verificações de licenças/dívidas e, sempre que possível, registo provisório de aquisição.',
  tags: ['cpcv', 'sinal', 'compra', 'imobiliário'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-cpcv',
      title: 'O que é o CPCV e porque é assinado',
      content: [
        { kind: 'paragraph', text: 'O CPCV não é uma “reserva de apartamento”, mas sim uma promessa juridicamente vinculativa de comprar e vender um imóvel. Fixa o preço, os prazos, o sinal, as condições de saída e a data da futura escritura ou Documento Particular Autenticado.' },
        { kind: 'paragraph', text: 'Em Portugal, o CPCV é assinado antes do negócio final porque o banco precisa de tempo para a aprovação do crédito habitação, avaliação, seguros e preparação da escritura. Mesmo em compras sem crédito, o CPCV também é usado: o vendedor retira o imóvel do mercado e o comprador ganha tempo para a due diligence.' },
        { kind: 'warning', text: 'Não assine um CPCV “com o modelo da agência” se os documentos do imóvel não tiverem sido verificados. Depois da assinatura, a perda do sinal pode ser legal, mesmo que você simplesmente mude de ideias.' }
      ]
    },
    {
      id: 'sinal-rules',
      title: 'Sinal: quanto pagar e o que diz o art. 442 CC',
      content: [
        { kind: 'paragraph', text: 'O sinal é um adiantamento que confirma a seriedade do negócio. No mercado habitacional, é frequente pedirem 10–20% do preço, mas a lei não estabelece uma percentagem obrigatória. Para imóveis caros e negócios com crédito, pode negociar-se um sinal mais baixo, por exemplo 5–10%, se o vendedor aceitar.' },
        { kind: 'checklist', items: [
          'Se o comprador incumprir o CPCV sem fundamento legal — o vendedor normalmente retém o sinal.',
          'Se o vendedor incumprir o CPCV — o comprador pode exigir a devolução do sinal em dobro.',
          'Estas consequências resultam do art. 442 Código Civil, salvo se as partes tiverem previsto outro mecanismo admissível.',
          'O sinal deve ser expressamente identificado no contrato como “sinal e princípio de pagamento”, e não apenas como “reserva”.',
          'Pague por transferência bancária para a conta do vendedor ou para escrow/conta cliente de advogado/solicitador, não em dinheiro.',
          'Na descrição da transferência indique o imóvel, o NIF das partes e “sinal CPCV”.',
          'Guarde o comprovativo de transferência: será necessário em caso de litígio, para o banco e para compliance.'
        ] },
        { kind: 'warning', text: '“A agência segura o imóvel por 5 000 €” — isto nem sempre é sinal nos termos do art. 442. Se o pagamento for feito à agência, deve existir um documento escrito separado: quem recebe o dinheiro, com que fundamento, se é reembolsável e quando passa a ser sinal.' }
      ]
    },
    {
      id: 'clauses-to-include',
      title: 'O que deve obrigatoriamente constar no CPCV',
      content: [
        { kind: 'paragraph', text: 'Um bom CPCV deve ser aborrecido e concreto: quem vende, o que vende, por quanto, quando, em que condições o negócio é cancelado sem penalização e que documentos o vendedor deve entregar antes da escritura.' },
        { kind: 'checklist', items: [
          'Dados completos das partes: nome, NIF, estado civil, regime de bens, morada, documento de identificação.',
          'Descrição exacta do imóvel: artigo matricial, descrição predial, fração, morada, área, garagem/arrecadação.',
          'Preço, montante do sinal, calendário dos pagamentos seguintes e forma de pagamento.',
          'Prazo-limite para a escritura: por exemplo até 60 ou 90 dias, com mecanismo de prorrogação por motivo imputável ao banco/Conservatória.',
          'Condição de crédito: o CPCV só produz efeitos com aprovação final do crédito habitacional; em caso de recusa do banco, o sinal é devolvido.',
          'Para due diligence, peça caderneta predial, certidão permanente, certificado energético, declaração de condomínio e, se existirem/forem aplicáveis, licença de utilização/construção, registos urbanísticos e ficha técnica antiga. Após o DL 10/2024, a licença/ficha já não têm o mesmo papel obrigatório na escritura, mas a ausência/incompatibilidade de licenças continua a ser um risco jurídico e bancário relevante.',
          'Garantia de inexistência de dívidas: IMI, condomínio, utilities, hipoteca, arrestos, penhoras, usufruto, arrendamento.',
          'Quem paga IMT, Imposto do Selo, escritura, registo, cancelamento da hipoteca do vendedor.',
          'Estado do imóvel e bens incluídos: mobiliário, electrodomésticos, ar condicionado, painéis solares, estacionamento.',
          'Consequências do incumprimento: perda do sinal/devolução em dobro nos termos do art. 442 CC e possível execução específica nos termos do art. 830 CC. Para CPCV de imóveis, as regras sobre exclusão da execução específica são especiais; não confie numa frase-modelo, peça a um jurista que negoceie separadamente a cláusula de remedies.'
        ] },
        { kind: 'warning', text: 'Se comprar com crédito habitação, a cláusula “subject to mortgage approval” é crítica. A pré-aprovação do banco não equivale à aprovação final após avaliação. Sem essa ressalva, a recusa do banco pode não salvar o sinal.' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Verificações antes da assinatura: mínimo para um expat',
      content: [
        { kind: 'paragraph', text: 'Antes do CPCV, é necessário verificar não só o vendedor, mas também o próprio imóvel. Em Portugal, encontram-se anexos sem licença, sótãos não legalizados, dívidas de condomínio e restrições na Conservatória.' },
        { kind: 'checklist', items: [
          'Certidão permanente do registo predial: proprietário, hipotecas, arrestos, usufruto, servidões.',
          'Caderneta predial urbana no Portal das Finanças: artigo, VPT, área, afectação.',
          'Licença de utilização ou confirmação de que o imóvel está dispensado dela por antiguidade/regime.',
          'Certificado energético: obrigatório na venda, a classe influencia o crédito e as obras.',
          'Ficha técnica da habitação — para imóveis antigos pode existir e ser útil para verificação, mas após o DL 10/2024 a sua apresentação na venda já não é uma formalidade geral obrigatória.',
          'Declaração de condomínio: inexistência de dívidas, mensalidade e obras previstas claras.',
          'Verificação na Câmara Municipal: licenças, obras, urbanismo, especialmente para moradia, anexos, sótão, cave.',
          'Se o vendedor for uma sociedade: certidão comercial, poderes de quem assina, nuances de IVA/impostos.',
          'Se o vendedor for não residente: quem assina, se existe procuração, se é necessária retenção de imposto em casos especiais.'
        ] },
        { kind: 'warning', text: 'O agente imobiliário trabalha para a concretização do negócio, não para a protecção jurídica do comprador. Para um CPCV de centenas de milhares de euros, a prática normal é contratar um advogado ou solicitador antes da assinatura, e não na véspera da escritura.' }
      ]
    },
    {
      id: 'provisional-registration',
      title: 'Registo provisório de aquisição: protecção do comprador',
      content: [
        { kind: 'paragraph', text: 'O registo provisório de aquisição é o registo preliminar da futura compra na Conservatória do Registo Predial. Torna a sua posição visível perante terceiros e reduz o risco de o vendedor voltar a vender o imóvel ou onerá-lo antes da escritura.' },
        { kind: 'paragraph', text: 'Normalmente, o pedido é submetido por advogado, solicitador, notário ou conservador através dos serviços de registo. Para o registo, é necessário um CPCV com identificação suficiente do imóvel e das partes; por vezes é exigido reconhecimento presencial das assinaturas.' },
        { kind: 'checklist', items: [
          'É especialmente útil se entre o CPCV e a escritura decorrerem mais de 30–45 dias.',
          'É recomendado na compra a promotor, em cadeias de venda complexas ou se o vendedor estiver sob stress financeiro.',
          'Verifique o prazo de validade do provisório e se pode ser convertido em definitivo após a escritura.',
          'Certifique-se de que o banco concorda com a redacção do CPCV e com o futuro registo da hipoteca.',
          'Após a escritura, a compra deve ser registada definitivamente; o provisório, por si só, não faz de si proprietário.'
        ] },
        { kind: 'warning', text: 'O registo provisório não substitui a due diligence. Se já existir hipoteca, penhora ou litígio no registo, o registo preliminar não “limpa” o imóvel — é necessária uma solução jurídica antes do negócio.' }
      ]
    },
    {
      id: 'signing-and-after',
      title: 'Assinatura, impostos e caminho até à escritura',
      content: [
        { kind: 'paragraph', text: 'O CPCV pode ser assinado presencialmente ou por procuração. Para CPCV de compra de edifício/fração, o art. 410(3) Código Civil exige documento com reconhecimento presencial das assinaturas e, quando aplicável, certification da licença de construção/utilização. Isto não é apenas “para força probatória”: a falta de formalidades pode criar riscos sérios para a enforceability, pelo que a forma deve ser verificada por advogado/solicitador/notário. Se o imóvel for vendido com entrega da posse antes da escritura, os requisitos de forma e as consequências fiscais devem ser verificados separadamente.' },
        { kind: 'checklist', items: [
          'Antes da assinatura, obtenha a versão final do CPCV em português; a tradução para russo é apenas auxiliar.',
          'Confirme nomes, NIF, IBAN, artigo matricial e descrição predial com os documentos.',
          'Não transfira o sinal antes da assinatura ou da troca simultânea de exemplares assinados.',
          'Logo após o CPCV, fixe o prazo para a avaliação do crédito habitação, seguro de vida, seguro multirriscos e escritura.',
          'IMT e Imposto do Selo são normalmente pagos antes da escritura, não no momento do CPCV.',
          'Na escritura, o vendedor deve liquidar a hipoteca ou apresentar distrate/cancelamento da hipoteca.',
          'Após o negócio final, verifique o registo definitivo e a actualização da titularidade nas Finanças.'
        ] },
        { kind: 'warning', text: 'Se o vendedor pedir para “entregar as chaves depois do CPCV”, isso já é um risco de posse sem propriedade. São necessárias cláusulas separadas: quem paga condomínio, utilities, seguro, obras, e o que acontece se a escritura não se concretizar.' }
      ]
    }
  ],
  costs: [
    { label: 'Sinal no CPCV', amountEURMin: 0, amountEURMax: 0, note: 'A lei não fixa o montante; na prática, é frequentemente 10–20% do preço do imóvel. Para um imóvel de 300 000 €, isto costuma ser 30 000–60 000 €.' },
    { label: 'Verificação jurídica do CPCV', amountEURMin: 300, amountEURMax: 1500, note: 'Referência de mercado para advogado/solicitador; negócios complexos, promotores e crédito habitação custam mais.' },
    { label: 'IMT e Imposto do Selo', amountEURMin: 0, amountEURMax: 0, note: 'Normalmente são pagos antes da escritura. O montante depende do preço, VPT, tipo de imóvel e estatuto do comprador; não é uma taxa do CPCV.' }
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
