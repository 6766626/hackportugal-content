export default {
  editorialVoice: 'hackportugal',
  id: 'online-supermercado-entrega',
  categoryId: 'food_leisure',
  title: 'Entrega de compras ao domicílio: Continente Online, Auchan, El Corte Inglés, Pingo Doce',
  tldr: 'Em 2026, a entrega de compras em Portugal funciona bem em Lisboa, Porto e arredores, mas a cobertura depende muito do código postal. O Continente Online cobra normalmente cerca de 3–7 € por janela de entrega, a Auchan e o Pingo Doce mostram o preço após inserir a morada, e o El Corte Inglés Supermercado/Express é prático no centro de Lisboa e pode entregar parte do sortido em cerca de 1 hora. Para compras urgentes, use Glovo Mercado e Bolt Market, mas os preços e as margens são mais elevados.',
  tags: ['supermercado', 'entrega', 'continente', 'glovo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'coverage-first',
      title: '1. Verifique primeiro a cobertura da morada',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe uma entrega de compras “nacional” única. A mesma marca pode entregar em Lisboa, Porto, Cascais, Oeiras, Matosinhos ou Gaia, mas não entregar num concelho vizinho. A verificação começa sempre pelo código postal.' },
        { kind: 'checklist', items: [
          'Introduza a morada completa e o código postal no site ou na aplicação do supermercado.',
          'Verifique não só a entrega ao domicílio, mas também Click & Collect / levantamento em loja.',
          'Veja as janelas de entrega mais próximas: à noite e antes dos feriados esgotam rapidamente.',
          'Verifique o carrinho mínimo: varia consoante as cadeias e as zonas.',
          'Compare o valor final, não apenas os preços dos produtos: entrega, taxa de serviço, sacos, promoções e substituições influenciam a conta.',
          'Se vive num prédio sem elevador, indique antecipadamente o andar e o código do intercomunicador.',
          'Para gated condominium, acrescente instruções para o estafeta em português ou inglês.'
        ] }
      ]
    },
    {
      id: 'main-supermarkets',
      title: '2. Principais cadeias: o que escolher',
      content: [
        { kind: 'substeps', items: [
          { id: 'continente', title: 'Continente Online', content: [
            { kind: 'paragraph', text: 'A opção mais versátil para uma compra grande. Boa escolha, promoções frequentes, cartão Continente, entrega em muitas zonas de Lisboa/Porto e de outras cidades. A taxa típica de entrega em 2026 é de cerca de 3–7 €, consoante a janela, a morada e as campanhas.' },
            { kind: 'checklist', items: [
              'Adequado para a compra semanal.',
              'Prático para comprar água, produtos de limpeza, artigos para criança e produtos Continente.',
              'Pode permitir ou proibir substituições — trocas de produtos indisponíveis.',
              'É melhor verificar os preços e promoções no dia da encomenda: as campanhas mudam com frequência.',
              'Clube/Cartão Continente pode dar cupões, saldo em cartão e descontos em combustível Galp em campanhas específicas.'
            ] }
          ] },
          { id: 'auchan', title: 'Auchan', content: [
            { kind: 'paragraph', text: 'Boa opção para sortido de hipermercado: alimentação, vinho, pequenos eletrodomésticos e artigos para a casa, produtos para animais, bio e internacional. A entrega e o levantamento dependem do código postal específico e da Auchan mais próxima.' }
          ] },
          { id: 'el-corte-ingles', title: 'El Corte Inglés Supermercado / Express', content: [
            { kind: 'paragraph', text: 'Opção premium, especialmente em Lisboa. No centro de Lisboa, o serviço Express pode ser prático para uma entrega rápida em cerca de 1 hora, se a morada estiver dentro da zona de cobertura. Os preços são frequentemente mais elevados, mas há uma boa seleção de delicatessen, produtos importados, carne, peixe, vinho e comida pronta.' }
          ] },
          { id: 'pingo-doce', title: 'Pingo Doce', content: [
            { kind: 'paragraph', text: 'O Pingo Doce é prático para o carrinho diário habitual e muitas vezes competitivo nos preços. A entrega online não está disponível em todo o lado: verifique a loja online / aplicação pela morada. Em algumas zonas, parte do sortido pode estar disponível através de plataformas parceiras como a Glovo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fast-delivery',
      title: '3. Entrega urgente: Glovo Mercado e Bolt Market',
      content: [
        { kind: 'paragraph', text: 'Se precisar de “leite, ovos, café e ração agora”, a Glovo Mercado, o Bolt Market ou supermercados dentro da Glovo costumam ser mais rápidos. Não substituem uma grande compra semanal: o sortido é menor, os preços podem ser mais altos, e há ainda delivery fee, service fee e por vezes small order fee.' },
        { kind: 'checklist', items: [
          'A Glovo é prática em Lisboa, Porto, Braga, Coimbra, Faro e zonas turísticas, mas a cobertura é por bairro.',
          'O Bolt Market funciona como dark store: rápido, mas com sortido limitado.',
          'Verifique o total antes do pagamento: as comissões aparecem no último ecrã.',
          'Para entrega urgente, escolha produtos sem substituições complicadas: leite, pão, ovos, snacks, produtos de limpeza.',
          'Para peixe fresco, carne e legumes, é melhor escolher um supermercado grande com picking e janelas de entrega adequados.',
          'Com chuva, à sexta-feira à noite e em feriados, o tempo de entrega e o preço podem aumentar muito.'
        ] },
        { kind: 'warning', text: 'Não compare diretamente o preço de um produto na Glovo/Bolt com o preço de prateleira na loja: a plataforma pode ter preços próprios, comissões e códigos promocionais. Um carrinho final de 30 € transforma-se facilmente em 35–40 €.' }
      ]
    },
    {
      id: 'ordering-tips',
      title: '4. Como fazer a encomenda sem surpresas',
      content: [
        { kind: 'checklist', items: [
          'Crie a conta antecipadamente, adicione o NIF apenas se precisar de fatura para IRS ou para a empresa.',
          'Escreva a morada no formato português: Rua/Avenida, número, andar, lado, código postal, cidade.',
          'No comentário, acrescente: “Tocar à campainha”, “Deixar na portaria” ou “Ligar antes de chegar”.',
          'Para álcool, o estafeta pode pedir um documento, especialmente se aparentar ter menos de 25 anos.',
          'Indique se precisa de sacos. Os sacos são normalmente pagos, mesmo quando o valor é baixo.',
          'Verifique as regras de substituição: “substituir por produto semelhante” ou “não substituir”.',
          'Depois da entrega, verifique de imediato o talão e os artigos em falta: é mais fácil pedir reembolso no próprio dia.',
          'Guarde o email com a encomenda e a fatura/recibo até ao fecho do pedido.'
        ] },
        { kind: 'paragraph', text: 'O pagamento é normalmente feito com cartão Visa/Mastercard, MB WAY, por vezes PayPal ou Multibanco. Cartões internacionais podem falhar por causa do 3-D Secure; um cartão português ou MB WAY costuma ser mais estável.' }
      ]
    },
    {
      id: 'fresh-products',
      title: '5. Produtos frescos e substituições',
      content: [
        { kind: 'paragraph', text: 'O principal problema dos supermercados online não é a entrega, mas a seleção dos produtos frescos. O picker escolhe legumes, fruta, carne e peixe por si. Nas boas cadeias isto funciona normalmente bem, mas a qualidade depende da loja, da equipa e da hora da encomenda.' },
        { kind: 'checklist', items: [
          'Legumes e fruta com ponto de maturação específico é melhor comprar offline no mercado municipal ou na frutaria.',
          'Para carne e peixe, indique o intervalo de peso e as preferências, se o campo de comentário estiver disponível.',
          'Verifique o prazo de validade dos laticínios no momento da receção.',
          'Encomende congelados para uma janela em que tenha a certeza de estar em casa.',
          'Se o produto chegar danificado, fotografe a embalagem e a etiqueta no dia da entrega.',
          'Numa compra grande de água, verifique se os estafetas sobem até ao apartamento ou deixam à entrada — as regras dependem do serviço.'
        ] },
        { kind: 'warning', text: 'Em Portugal, os estafetas e preparadores não são obrigados a ligar por cada produto em falta. Se as substituições forem críticas por alergias, alimentação infantil ou dieta, é melhor proibir substituições.' }
      ]
    },
    {
      id: 'best-strategy',
      title: '6. Estratégia prática para expat',
      content: [
        { kind: 'paragraph', text: 'O esquema ideal em 2026: uma grande encomenda por semana através do Continente/Auchan/Pingo Doce, produtos premium ou importados pelo El Corte Inglés, pequenos artigos urgentes pela Glovo ou Bolt Market. Após 2–3 encomendas, ficará claro qual a cadeia que cobre melhor a sua morada.' },
        { kind: 'checklist', items: [
          'Para famílias: Continente Online ou Auchan com uma janela ampla e entrega a 3–7 € / de acordo com a tarifa da morada.',
          'Para o centro de Lisboa: El Corte Inglés Express para compras rápidas e de qualidade.',
          'Para um estúdio ou uma pessoa: Glovo/Bolt para urgências, supermercado offline para o básico.',
          'Para poupar: compare promoções e compre o que é pesado online, e o que é fresco perto de casa.',
          'Para bairros novos depois de se mudar: nas primeiras duas semanas teste 2–3 serviços, não faça uma primeira encomenda enorme.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Continente Online — entrega', amountEURMin: 3, amountEURMax: 7, note: 'Intervalo típico por janelas e zonas; o preço exato é mostrado após inserir a morada e antes do pagamento.' },
    { label: 'El Corte Inglés Express', amountEURMin: 0, amountEURMax: 8, note: 'O custo e o carrinho mínimo dependem da morada, da janela e das campanhas; no centro de Lisboa é possível entrega rápida em cerca de 1 hora.' },
    { label: 'Glovo / Bolt Market', amountEURMin: 1.99, amountEURMax: 6.99, note: 'Normalmente há delivery fee e service fee; com carrinho pequeno pode haver small order fee.' }
  ],
  sources: [
    { title: 'Continente Online — site oficial para encomendar compras', url: 'https://www.continente.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'El Corte Inglés Portugal — supermercado e entrega', url: 'https://www.elcorteingles.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Auchan Portugal — loja online e entrega', url: 'https://www.auchan.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Pingo Doce — loja online e serviços', url: 'https://www.pingodoce.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
