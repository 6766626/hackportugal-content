export default {
  editorialVoice: 'hackportugal',
  id: 'compras-amazon-aliexpress',
  categoryId: 'daily_life',
  title: 'Amazon ES/PT, AliExpress e eBay em Portugal: entrega, IVA e direitos aduaneiros',
  tldr: 'Para Portugal, a opção mais previsível é a Amazon.es: a entrega a partir de armazéns da UE demora normalmente 2–5 dias úteis, sem alfândega nem direitos aduaneiros. A Amazon PT é conveniente pela interface/promoções locais, mas o catálogo é menor. O AliExpress é barato, muitas vezes com IVA incluído no preço através do IOSS, mas a entrega a partir da China pode demorar 3–8 semanas. Desde 01.07.2021, as encomendas comerciais provenientes de fora da UE estão sujeitas a IVA: em mainland Portugal, a taxa normal é 23%; acima de 150 € acrescem declaração aduaneira, possíveis direitos aduaneiros e taxas dos CTT/transportadora.',
  tags: ['amazon', 'aliexpress', 'ctt', 'direitos aduaneiros'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'platforms',
      title: 'Onde comprar sem surpresas',
      content: [
        { kind: 'paragraph', text: 'A regra principal: se o artigo vier de um armazém dentro da UE e o vendedor tratar a venda como EU sale, não há desalfandegamento em Portugal. Você paga o preço com IVA no momento da compra e a transportadora apenas entrega a encomenda.' },
        { kind: 'checklist', items: [
          'Amazon.es — normalmente o melhor equilíbrio entre preço, variedade e entrega em Portugal continental; muitos artigos chegam em 2–5 dias úteis.',
          'Amazon PT / montra portuguesa da Amazon — mais conveniente em termos de idioma e seleções locais, mas o catálogo é menor, e parte dos artigos continua a vir através da Amazon.es ou de outros vendedores da UE.',
          'AliExpress — verifique a linha “VAT included” / “IVA incluído”. Para encomendas até 150 €, isto significa frequentemente IOSS: o IVA já foi cobrado pela plataforma.',
          'eBay — o mais arriscado em termos de alfândega: muitos vendedores do UK, US, China e particulares; veja antecipadamente “Item location” e “Import charges”.',
          'Armazéns da UE do AliExpress/eBay — Spain, France, Germany, Poland, Czechia — normalmente sem alfândega, se o artigo for realmente enviado de lá.',
          'UK depois do Brexit — não é UE. Uma encomenda do Reino Unido para Portugal é considerada importação, como dos EUA ou da China.',
          'Madeira e Açores têm as suas próprias especificidades fiscais e logísticas; os prazos e as taxas podem diferir de mainland Portugal.'
        ] }
      ]
    },
    {
      id: 'tax-rules',
      title: 'IVA e alfândega em 2026: limiar de 150 €',
      content: [
        { kind: 'paragraph', text: 'Desde 01.07.2021, a UE eliminou a isenção de IVA para pequenas encomendas importadas. Por isso, qualquer artigo comercial proveniente de fora da UE está sujeito a IVA, independentemente do preço. Para mainland Portugal, a taxa normal de IVA é 23%.' },
        { kind: 'checklist', items: [
          '0–150 €: normalmente não são cobrados direitos aduaneiros, mas aplica-se IVA de 23%. Se a loja utilizar IOSS, o IVA é pago no momento da compra.',
          'Acima de 150 €: o IOSS não se aplica; é necessária uma declaração aduaneira de importação, é cobrado IVA de 23% e podem existir direitos aduaneiros conforme o código do artigo.',
          'O limiar de 150 € para direitos aduaneiros é calculado sobre o intrinsic value do artigo: normalmente o preço do artigo sem entrega nem seguro.',
          'A base do IVA é mais ampla: valor do artigo + entrega + seguro + direitos aduaneiros + taxas aduaneiras/postais, se forem incluídas na base de importação.',
          'Presentes de um particular para outro particular têm um limite separado de 45 €, mas compras em marketplace não se enquadram nisso.',
          'Se o vendedor tiver escrito “gift” numa encomenda comercial, isso não elimina o IVA e pode provocar uma verificação.',
          'Para álcool, tabaco, perfumaria, baterias, medicamentos, suplementos alimentares, drones e equipamentos de rádio podem existir restrições ou documentos adicionais.'
        ] },
        { kind: 'warning', text: 'Não se guie por conselhos antigos de “até 22 € sem imposto”. Esta regra foi eliminada na UE em 01.07.2021. Em 2026, os CTT e as transportadoras continuam a poder pedir IVA e uma taxa de processamento se a plataforma não tiver transmitido corretamente os dados IOSS.' }
      ]
    },
    {
      id: 'ctt-clearance',
      title: 'Como funciona o desalfandegamento CTT',
      content: [
        { kind: 'paragraph', text: 'Se uma encomenda de fora da UE chegar por correio normal, quase sempre é tratada pelos CTT. O estado pode mudar para “A aguardar procedimentos declarativos” ou “Desalfandegamento”. Nesse caso, é necessário entrar no portal dos CTT, confirmar os dados e pagar os valores cobrados.' },
        { kind: 'checklist', items: [
          'Abra o tracking em ctt.pt e verifique se é necessário “desalfandegar”.',
          'Prepare a invoice/recibo: captura de ecrã da encomenda com o preço do artigo, entrega, moeda e nome do destinatário.',
          'Se o IVA já tiver sido pago no AliExpress/eBay/Amazon, anexe a confirmação “VAT included” ou a invoice com IOSS/VAT.',
          'Verifique o NIF e a morada: o nome na encomenda deve coincidir com os documentos ou, pelo menos, estar claramente associado ao destinatário.',
          'Pague online o IVA, eventuais direitos aduaneiros e o serviço de apresentação/desalfandegamento CTT.',
          'Após o pagamento, a encomenda é normalmente libertada e segue para entrega; em períodos de pico, o atraso pode ser de 3–10 dias úteis.',
          'Se não apresentar os documentos a tempo, a encomenda pode ser devolvida ao remetente.'
        ] },
        { kind: 'warning', text: 'Os CTT não “inventam impostos”: cobram os valores segundo as regras de importação da Autoridade Tributária e Aduaneira. Mas há erros — especialmente quando a loja cobrou IVA através do IOSS, mas o número IOSS não entrou nos dados postais. Nesse caso, apresente a invoice e conteste através do portal dos CTT antes de pagar, se o sistema o permitir.' }
      ]
    },
    {
      id: 'marketplace-tactics',
      title: 'Prática para Amazon, AliExpress e eBay',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'amazon',
            title: 'Amazon ES/PT',
            content: [
              { kind: 'paragraph', text: 'Para eletrodomésticos, livros, cabos, artigos para casa e produtos infantis, a Amazon.es é normalmente a opção mais simples: o preço já inclui IVA, a entrega é dentro da UE e as devoluções são claras. Veja “Sold by” e “Dispatches from”: se o envio for feito pela Amazon/UE, não há alfândega.' },
              { kind: 'checklist', items: [
                'Compare a Amazon.es e a Amazon PT: a montra local pode mostrar menos artigos.',
                'Para compras urgentes, filtre por Prime/entrega rápida em Portugal.',
                'Verifique se o artigo é entregue no seu código postal: eletrodomésticos grandes e baterias podem ter restrições.',
                'As devoluções na Amazon são normalmente mais simples do que no AliExpress/eBay, especialmente se o vendedor for a Amazon ou um EU-business seller.',
                'Não confunda o preço do artigo com o custo de entrega: por vezes, um artigo barato com entrega cara fica pior do que comprar numa loja local.'
              ] }
            ]
          },
          {
            id: 'aliexpress',
            title: 'AliExpress',
            content: [
              { kind: 'paragraph', text: 'O AliExpress é bom para pequenos artigos: capas, cabos, peças, artigos de hobby. A entrega económica da China é frequentemente gratuita, mas o prazo real é de 3–8 semanas. AliExpress Choice e EU-warehouse podem ser mais rápidos — por vezes 7–15 dias.' },
              { kind: 'checklist', items: [
                'Para encomendas até 150 €, procure “IVA incluído” / “VAT included”.',
                'Não junte muitos artigos numa única encomenda acima de 150 € se quiser evitar uma declaração de importação completa.',
                'Escolha vendedores com tracking, e não apenas Cainiao Super Economy sem acompanhamento detalhado.',
                'Para eletrónica, verifique a marcação CE, a ficha EU e avaliações reais com fotos.',
                'Se precisar do artigo para uma data concreta, o AliExpress é uma má opção.'
              ] }
            ]
          },
          {
            id: 'ebay',
            title: 'eBay',
            content: [
              { kind: 'paragraph', text: 'No eBay, o principal risco é o país de envio e o estatuto do vendedor. O mesmo artigo vindo da Alemanha chega sem alfândega, enquanto vindo do UK/US exigirá IVA, possíveis direitos aduaneiros e taxas de corretagem.' },
              { kind: 'checklist', items: [
                'Filtre por “Item location: European Union” se não quiser importação.',
                'Veja se o eBay inclui “VAT” ou “Import charges” no checkout.',
                'Com vendedores particulares, a invoice pode ser fraca — os CTT irão mesmo assim pedir comprovativo de pagamento PayPal/cartão.',
                'Para equipamento usado vindo de fora da UE, o IVA é frequentemente cobrado sobre o preço efetivamente pago + entrega.',
                'Para compras caras acima de 150 €, faça as contas antecipadamente: por vezes compensa comprar mais caro na UE, mas sem complicações alfandegárias.'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-to-estimate',
      title: 'Como calcular rapidamente o preço final',
      content: [
        { kind: 'paragraph', text: 'Antes de comprar fora da UE, não calcule apenas o “preço no site”, mas o landed cost — quanto o artigo vai custar depois do IVA, direitos aduaneiros e processamento.' },
        { kind: 'checklist', items: [
          'Se o artigo vier da UE: total ≈ preço do artigo + entrega. Não há alfândega.',
          'Se o artigo vier da China/US/UK até 150 € e o IVA estiver incluído: total ≈ preço no checkout; o risco é apenas erro de IOSS ou atraso.',
          'Se o artigo for até 150 € e o IVA não estiver incluído: acrescente 23% de IVA sobre artigo/entrega e a taxa dos CTT/transportadora.',
          'Se o artigo for acima de 150 €: acrescente 23% de IVA, possíveis direitos aduaneiros pela categoria do artigo e taxa de corretagem.',
          'Nas transportadoras DHL/UPS/FedEx, as taxas de corretagem são frequentemente mais altas do que nos CTT; em contrapartida, o processamento é mais rápido.',
          'Para artigos pesados, a entrega entra na base do IVA, por isso o imposto pode ser consideravelmente mais alto do que o esperado.',
          'Se a diferença face a uma loja da UE for inferior a 15–25 €, normalmente é melhor comprar na UE: mais rápido, devolução mais simples, menos risco.'
        ] },
        { kind: 'warning', text: 'Não peça ao vendedor para declarar um valor inferior. Se os CTT/Alfândega pedirem extrato do cartão ou PayPal, o imposto será recalculado com base no pagamento real; em caso de suspeita, podem ocorrer atrasos, consequências sancionatórias ou devolução da encomenda.' }
      ]
    }
  ],
  costs: [
    { label: 'IVA sobre importação em mainland Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Taxa de 23% sobre a base tributável; o valor depende do preço do artigo, da entrega, dos direitos aduaneiros e das taxas.' },
    { label: 'Limiar para IOSS simplificado', amountEUR: 150, note: 'Até 150 €, o marketplace pode cobrar o IVA no checkout; acima de 150 €, é necessária uma declaração de importação normal.' },
    { label: 'Entrega normal da Amazon.es em Portugal continental', amountEURMin: 0, amountEURMax: 8, note: 'Depende do Prime, do valor da encomenda, do vendedor e do artigo; prazo típico de 2–5 dias úteis.' },
    { label: 'Entrega AliExpress economy a partir da China', amountEURMin: 0, amountEURMax: 5, note: 'Frequentemente gratuita ou barata; prazo típico de 3–8 semanas, mais rápido com Choice/EU-warehouse.' },
    { label: 'Processamento de importação pelos CTT/transportadora', amountEURMin: 2, amountEURMax: 30, note: 'Depende do valor, do tipo de envio e do operador; verifique a tarifa atual em ctt.pt antes de pagar.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: informação aduaneira e regras de importação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/aduaneira/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: IVA e taxas em vigor',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/taxas/Pages/iva.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CTT: desalfandegar encomendas',
      url: 'https://www.ctt.pt/particulares/receber/desalfandegar/desalfandegar-encomendas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CTT: receber encomendas internacionais e custos de desalfandegamento',
      url: 'https://www.ctt.pt/particulares/receber/desalfandegar',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
