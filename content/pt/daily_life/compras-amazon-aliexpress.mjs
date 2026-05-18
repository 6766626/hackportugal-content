export default {
  editorialVoice: 'hackportugal',
  id: 'compras-amazon-aliexpress',
  categoryId: 'daily_life',
  title: 'Amazon ES/PT, AliExpress e eBay em Portugal: entrega, IVA e direitos aduaneiros',
  tldr: 'Para Portugal, a opção mais previsível é a Amazon.es: a entrega a partir de armazéns da UE demora normalmente 2–5 dias úteis, sem alfândega nem direitos aduaneiros. A Amazon PT é cómoda pela interface/promoções locais, mas o catálogo é menor. O AliExpress é barato, muitas vezes com IVA incluído no preço através do IOSS, mas a entrega a partir da China pode demorar 3–8 semanas.\n\nDesde 01.07.2021, as encomendas comerciais provenientes de fora da UE estão sujeitas a IVA: em mainland Portugal a taxa normal é 23%; acima de 150 € acrescem a declaração aduaneira, eventuais direitos aduaneiros e taxas dos CTT/transportadora.',
  tags: ['amazon', 'aliexpress', 'ctt', 'direitos aduaneiros'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'platforms',
      title: 'Onde comprar sem surpresas',
      content: [
        { kind: 'paragraph', text: 'A regra principal: se o artigo vier de um armazém dentro da UE e o vendedor processar a venda como EU sale, não há alfândega em Portugal. Você paga o preço com IVA no momento da compra, e a transportadora apenas entrega a encomenda.' },
        { kind: 'checklist', items: [
          'Amazon.es — normalmente o melhor equilíbrio entre preço, variedade e entrega em Portugal continental; muitos artigos chegam em 2–5 dias úteis.',
          'Amazon PT / montra portuguesa da Amazon — mais cómoda pelo idioma e pelas selecções locais, mas o catálogo é menor, e uma parte dos artigos continua a vir através da Amazon.es ou de outros vendedores da UE.',
          'AliExpress — verifique a linha “VAT included” / “IVA incluído”. Para encomendas até 150 €, isto significa frequentemente IOSS: o IVA já foi cobrado pela plataforma.',
          'eBay — o mais arriscado em termos aduaneiros: muitos vendedores do Reino Unido, EUA, China e particulares; veja antecipadamente “Item location” e “Import charges”.',
          'Armazéns UE do AliExpress/eBay — Espanha, França, Alemanha, Polónia, Chéquia — normalmente sem alfândega, se o artigo for realmente enviado a partir daí.',
          'Reino Unido após o Brexit — não é UE. Uma encomenda do Reino Unido para Portugal é considerada importação, tal como dos EUA ou da China.',
          'Madeira e Açores têm especificidades fiscais e logísticas próprias; os prazos e as taxas podem diferir de mainland Portugal.'
        ] }
      ]
    },
    {
      id: 'tax-rules',
      title: 'IVA e alfândega em 2026: limite de 150 €',
      content: [
        { kind: 'paragraph', text: 'Desde 01.07.2021, a UE aboliu a isenção de IVA para pequenas encomendas importadas. Por isso, um artigo comercial proveniente de fora da UE está sujeito a IVA independentemente do preço. Para mainland Portugal, a taxa normal de IVA é 23%.' },
        { kind: 'checklist', items: [
          '0–150 €: normalmente não são cobrados direitos aduaneiros, mas aplica-se IVA a 23%. Se a loja usar IOSS, o IVA é pago no momento da compra.',
          'Acima de 150 €: o IOSS não se aplica; é necessária uma declaração aduaneira de importação, é cobrado IVA a 23% e podem ser aplicados direitos aduaneiros segundo o código do artigo.',
          'O limite de 150 € para direitos aduaneiros é calculado pelo intrinsic value do artigo: geralmente o preço do artigo sem entrega nem seguro.',
          'A base do IVA é mais ampla: valor do artigo + entrega + seguro + direitos aduaneiros + taxas aduaneiras/postais, se estas forem incluídas na base de importação.',
          'Ofertas de particular para particular têm um limite separado de 45 €, mas compras em marketplaces não se enquadram nisso.',
          'Se o vendedor tiver escrito “gift” numa encomenda comercial, isso não anula o IVA e pode originar uma verificação.',
          'Para álcool, tabaco, perfumaria, baterias, medicamentos, suplementos alimentares, drones e equipamentos de rádio, podem existir restrições ou documentos adicionais.'
        ] },
        { kind: 'warning', text: 'Não se guie por conselhos antigos de “até 22 € sem imposto”. Esta regra foi abolida na UE em 01.07.2021. Em 2026, os CTT e as transportadoras ainda podem pedir IVA e taxa de apresentação se a plataforma não tiver transmitido correctamente os dados IOSS.' }
      ]
    },
    {
      id: 'ctt-clearance',
      title: 'Como funciona o desalfandegamento CTT',
      content: [
        { kind: 'paragraph', text: 'Se uma encomenda proveniente de fora da UE chegar por correio normal, quase sempre é tratada pelos CTT. O estado pode mudar para “A aguardar procedimentos declarativos” ou “Desalfandegamento”. Nesse caso, é necessário entrar no portal dos CTT, confirmar os dados e pagar os montantes cobrados.' },
        { kind: 'checklist', items: [
          'Abra o tracking em ctt.pt e verifique se é necessário “desalfandegar”.',
          'Prepare a invoice/recibo: captura de ecrã da encomenda com o preço do artigo, entrega, moeda e nome do destinatário.',
          'Se o IVA já tiver sido pago no AliExpress/eBay/Amazon, anexe a confirmação “VAT included” ou a invoice com IOSS/VAT.',
          'Verifique o NIF e a morada: o nome na encomenda deve coincidir com os documentos ou, pelo menos, estar claramente associado ao destinatário.',
          'Pague online o IVA, os eventuais direitos aduaneiros e o serviço de apresentação/desalfandegamento CTT.',
          'Depois do pagamento, a encomenda normalmente é libertada e segue para entrega; em períodos de pico, o atraso pode ser de 3–10 dias úteis.',
          'Se não apresentar os documentos a tempo, a encomenda pode ser devolvida ao remetente.'
        ] },
        { kind: 'warning', text: 'Os CTT não “inventam o imposto”: cobram os valores segundo as regras de importação da Autoridade Tributária e Aduaneira. Mas há erros — sobretudo quando a loja cobrou IVA via IOSS, mas o número IOSS não entrou nos dados postais. Nesse caso, apresente a invoice e conteste através do portal dos CTT antes de pagar, se o sistema o permitir.' }
      ]
    },
    {
      id: 'marketplace-tactics',
      title: 'Prática com Amazon, AliExpress e eBay',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'amazon',
            title: 'Amazon ES/PT',
            content: [
              { kind: 'paragraph', text: 'Para electrodomésticos, livros, cabos, artigos para a casa e produtos infantis, a Amazon.es costuma ser a opção mais simples: preço já com IVA, entrega dentro da UE, devoluções claras. Veja “Sold by” e “Dispatches from”: se o envio for a partir da Amazon/UE, não há alfândega.' },
              { kind: 'checklist', items: [
                'Compare Amazon.es e Amazon PT: a montra local pode mostrar menos artigos.',
                'Para compras urgentes, filtre por Prime/entrega rápida para Portugal.',
                'Verifique se o artigo é entregue no seu código postal: electrodomésticos grandes e baterias podem ter restrições.',
                'As devoluções na Amazon são geralmente mais simples do que no AliExpress/eBay, sobretudo se o vendedor for a Amazon ou um EU-business seller.',
                'Não confunda o preço do artigo com o custo de entrega: por vezes, um artigo barato com entrega cara fica pior do que uma loja local.'
              ] }
            ]
          },
          {
            id: 'aliexpress',
            title: 'AliExpress',
            content: [
              { kind: 'paragraph', text: 'O AliExpress é bom para pequenas coisas: capas, cabos, peças, artigos de hobby. A entrega económica a partir da China é muitas vezes gratuita, mas o prazo real é de 3–8 semanas. AliExpress Choice e EU-warehouse podem ser mais rápidos — por vezes 7–15 dias.' },
              { kind: 'checklist', items: [
                'Para encomendas até 150 €, procure “IVA incluído” / “VAT included”.',
                'Não junte muitos artigos numa só encomenda acima de 150 €, se quiser evitar uma declaração de importação completa.',
                'Escolha vendedores com tracking, e não apenas Cainiao Super Economy sem seguimento detalhado.',
                'Para electrónica, verifique a marcação CE, a ficha UE e avaliações reais com fotografias.',
                'Se precisar do artigo para uma data concreta, o AliExpress é uma má opção.'
              ] }
            ]
          },
          {
            id: 'ebay',
            title: 'eBay',
            content: [
              { kind: 'paragraph', text: 'No eBay, o principal risco é o país de envio e o estatuto do vendedor. O mesmo artigo vindo da Alemanha chegará sem alfândega, mas vindo do Reino Unido/EUA exigirá IVA, eventuais direitos aduaneiros e taxas de corretagem.' },
              { kind: 'checklist', items: [
                'Filtre “Item location: European Union”, se não quiser importação.',
                'Veja se o eBay inclui “VAT” ou “Import charges” no checkout.',
                'Em vendedores particulares, a invoice pode ser insuficiente — os CTT pedirão na mesma comprovativo de pagamento PayPal/cartão.',
                'Para electrónica usada proveniente de fora da UE, o IVA é frequentemente cobrado sobre o preço efectivamente pago + entrega.',
                'Para compras caras acima de 150 €, faça as contas antecipadamente: por vezes compensa comprar na UE mais caro, mas sem confusão aduaneira.'
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
        { kind: 'paragraph', text: 'Antes de comprar fora da UE, não calcule apenas o “preço no site”, mas sim o landed cost — quanto o artigo custará depois de IVA, direitos aduaneiros e processamento.' },
        { kind: 'checklist', items: [
          'Se o artigo vier da UE: total ≈ preço do artigo + entrega. Não há alfândega.',
          'Se o artigo vier da China/EUA/Reino Unido até 150 € e o IVA estiver incluído: total ≈ preço no checkout; o risco é apenas um erro IOSS ou atraso.',
          'Se o artigo for até 150 € e o IVA não estiver incluído: acrescente 23% de IVA sobre artigo/entrega e a taxa dos CTT/transportadora.',
          'Se o artigo for acima de 150 €: acrescente 23% de IVA, eventuais direitos aduaneiros por categoria do artigo e taxa de corretagem.',
          'Para transportadoras DHL/UPS/FedEx, as taxas de corretagem são muitas vezes mais altas do que nos CTT; em contrapartida, o processamento é mais rápido.',
          'Para artigos pesados, a entrega entra na base de IVA, pelo que o imposto pode ser bastante superior ao esperado.',
          'Se a diferença face a uma loja da UE for inferior a 15–25 €, normalmente é melhor comprar na UE: mais rápido, devolução mais simples, menos risco.'
        ] },
        { kind: 'warning', text: 'Não peça ao vendedor para declarar um valor inferior. Se os CTT/Alfândega pedirem extracto do cartão ou PayPal, o imposto será recalculado com base no pagamento real; em caso de suspeita, pode haver atraso, consequências sancionatórias ou devolução da encomenda.' }
      ]
    }
  ],
  costs: [
    { label: 'IVA sobre importação em mainland Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Taxa de 23% sobre a base tributável; o montante depende do preço do artigo, entrega, direitos aduaneiros e taxas.' },
    { label: 'Limite para IOSS simplificado', amountEUR: 150, note: 'Até 150 €, o marketplace pode cobrar o IVA no checkout; acima de 150 €, é necessária uma declaração de importação normal.' },
    { label: 'Entrega normal da Amazon.es em Portugal continental', amountEURMin: 0, amountEURMax: 8, note: 'Depende do Prime, valor da encomenda, vendedor e artigo; prazo típico de 2–5 dias úteis.' },
    { label: 'Entrega AliExpress economy a partir da China', amountEURMin: 0, amountEURMax: 5, note: 'Frequentemente gratuita ou barata; prazo típico de 3–8 semanas, mais rápida com Choice/EU-warehouse.' },
    { label: 'Processamento de importação pelos CTT/transportadora', amountEURMin: 2, amountEURMax: 30, note: 'Depende do valor, tipo de envio e operador; confirme a tarifa actual em ctt.pt antes de pagar.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: informação aduaneira e regras de importação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Compras/Encomendas_postais/Encomendas_Postais_Comercio_Eletronico/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: IVA e taxas em vigor',
      url: 'https://pauta.portaldasfinancas.gov.pt/pt/faqs/Pages/importacoes-via-internet-impostos.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CTT: desalfandegar encomendas',
      url: 'https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index/desalfandegar-encomendas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CTT: receber encomendas internacionais e custos de desalfandegamento',
      url: 'https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
