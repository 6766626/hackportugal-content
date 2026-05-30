export default {
  editorialVoice: 'hackportugal',
  id: 'customs-parcels',
  categoryId: 'daily_life',
  title: 'Desalfandegamento de encomendas de países fora da UE — como pagar menos',
  tldr: 'Desde 01.07.2021 foi eliminado o limiar de 22 € — agora qualquer encomenda de países fora da UE está sujeita a IVA + direitos aduaneiros, se o valor for superior a 150 €. O processo é feito através do destinatário: os CTT ou a transportadora (DHL, FedEx, UPS) enviam um SMS com uma ligação para pagamento. Pagamento online: cartão, MB WAY, Multibanco. A taxa dos CTT pelo desalfandegamento depende do produto; nas transportadoras — 10–40 €. Tarifas actualizadas em ctt.pt.',
  tags: ['alfândega', 'encomenda', 'IVA', 'CTT', 'DHL'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Enquadramento legal 2026',
      content: [
        { kind: 'paragraph', text: 'Directiva EU 2006/112 (VAT) + Regulamento 952/2013 (Código Aduaneiro). Em Portugal, a aplicação faz-se através do Código do IVA, Código das Alfândegas.' },
        { kind: 'checklist', items: [
          '🎁 Presente de particular para particular: isenção até 45 € (se não for comercial)',
          '📦 Encomenda comercial < 150 €: apenas IVA 23 %, sem direitos aduaneiros',
          '📦 Comercial > 150 €: IVA + direitos aduaneiros (0–17 % conforme o código HS)',
          '📄 Qualquer encomenda com mercadorias proveniente de países fora da UE deve ser declarada através do IOSS ou como importação',
          '🌍 Taxas regionais de IVA: Madeira e Açores têm as suas próprias taxas normais (Açores — 16% standard, Madeira — 22% standard em 2026; confirme os valores actualizados)',
          '🍷 Excise duties (IEC): álcool, tabaco, energy products — para além do IVA. O perfume NÃO é um harmonised excise good na EU; para perfume aplicam-se duty/VAT normais, sem excise'
        ]}
      ]
    },
    {
      id: 'how-ctt-works',
      title: 'Como a encomenda passa pelos CTT',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Entrada na alfândega', content: [
            { kind: 'paragraph', text: 'A encomenda chega ao centro de triagem dos CTT em Cabo Ruivo (Lisboa). A alfândega avalia-a com base na factura e no formulário CN22/CN23.' }
          ]},
          { id: 'c2', title: '2. Notificação', content: [
            { kind: 'paragraph', text: 'O destinatário recebe SMS + email com uma ligação para o Portal CTT, onde é indicado o estado aduaneiro + o montante a pagar.' }
          ]},
          { id: 'c3', title: '3. Pagamento', content: [
            { kind: 'checklist', items: [
              'Métodos: cartão, MB WAY, Multibanco, SIBS MB',
              'A taxa dos CTT pelo desalfandegamento depende do tipo de envio e do procedimento; tarifas actualizadas em ctt.pt',
              'Prazo de pagamento: 10 dias, depois devolução ao remetente',
              'Confirmação de identidade — digitalização do seu Cartão de Cidadão/autorização de residência'
            ]}
          ]},
          { id: 'c4', title: '4. Entrega', content: [
            { kind: 'paragraph', text: 'Os CTT entregam em casa (com assinatura) ou numa Loja CTT (posto de correios mais próximo). Prazo após pagamento — 1–3 dias.' }
          ]}
        ]}
      ]
    },
    {
      id: 'couriers',
      title: 'Transportadoras (DHL, FedEx, UPS) — mais caro, mas mais rápido',
      content: [
        { kind: 'checklist', items: [
          '💵 Taxa de processamento: DHL 15–40 €, FedEx 10–30 €, UPS 15–25 €',
          '⚡ Muitas vezes o desalfandegamento já está feito antes da chegada',
          '📞 A transportadora telefona se forem necessários documentos',
          '🏃 Prazo — cerca de 24–48 horas após a chegada a Portugal',
          '⚠️ Uma encomenda comercial exige factura com código HS'
        ]}
      ]
    },
    {
      id: 'diy',
      title: 'Desalfandegamento por conta própria — mais barato',
      content: [
        { kind: 'paragraph', text: 'Através do Portal Aduaneiro em portaldasfinancas.gov.pt → «Alfândegas». Declaração H7 — declaração simplificada para low-value consignments até 150 €, não sujeitas a customs duty, e não aplicável a excise goods/mercadorias com proibições.' },
        { kind: 'checklist', items: [
          '📝 Preencher a H7: descrição da mercadoria, código CN (HS), valor, país',
          '💰 O sistema calcula o IVA + direitos aduaneiros',
          '💳 Pagamento por Multibanco',
          '📋 Imprimir a confirmação',
          '📬 Entregar no local de levantamento (Loja CTT, entreposto aduaneiro)',
          '💶 Poupança: é possível evitar 30–40 € de handling fee da DHL/UPS através de declaração própria'
        ]},
        { kind: 'warning', text: 'Exige português e compreensão dos códigos HS. Para casos complexos, é melhor deixar o processo aos CTT ou à transportadora.' }
      ]
    },
    {
      id: 'common',
      title: 'Perguntas frequentes',
      content: [
        { kind: 'substeps', items: [
          { id: 'q1', title: 'Presente de um amigo — é preciso pagar?', content: [
            { kind: 'paragraph', text: 'Formalmente, há isenção até 45 €, mas apenas se o remetente tiver indicado «GIFT» no CN22/CN23 e o valor declarado for < 45 €. Acima disso — aplicam-se as regras normais.' }
          ]},
          { id: 'q2', title: 'AliExpress / Shein — pagam o IVA?', content: [
            { kind: 'paragraph', text: 'O IOSS (Import One-Stop Shop) aplica-se a bens com intrinsic value até 150 € e não se aplica a excise goods. Se o marketplace estiver registado no IOSS — o IVA é cobrado no momento da compra. Se vir «VAT included» no recibo — está tudo certo. Caso contrário — os CTT notificam no momento da importação.' }
          ]},
          { id: 'q3', title: 'Livros / tecnologia / roupa — os direitos aduaneiros variam?', content: [
            { kind: 'checklist', items: [
              'Livros: 0 % de direitos aduaneiros, IVA 6 %',
              'Roupa: até 12 % de direitos aduaneiros + IVA 23 %',
              'Electrónica: 0–4 % de direitos aduaneiros + IVA 23 %',
              'Joalharia: 2,5 % de direitos aduaneiros + IVA 23 %',
              'Cosmética: 0 % de direitos aduaneiros + IVA 23 %',
              'Brinquedos: 0–4,7 % de direitos aduaneiros + IVA 23 %'
            ]}
          ]},
          { id: 'q4', title: 'A encomenda não chegou / perdeu-se', content: [
            { kind: 'paragraph', text: 'CTT — seguimento + reclamação através do Livro de Reclamações. Transportadoras — seguro. Prazo de investigação — 30–60 dias.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IVA sobre mercadoria > 0 €', amountEUR: 0, note: '23 % sobre o valor + envio' },
    { label: 'Taxa dos CTT pelo desalfandegamento', amountEURMin: 5, amountEURMax: 15, note: 'a tarifa depende do produto/procedimento; ver ctt.pt' },
    { label: 'Processamento DHL/UPS/FedEx', amountEURMin: 10, amountEURMax: 40 },
    { label: 'Direitos aduaneiros (mercadoria > 150 €)', amountEUR: 0, note: '0–17 % conforme HS' }
  ],
  sources: [
    { title: 'Portal das Finanças — Alfândegas', url: 'https://aduaneiro.portaldasfinancas.gov.pt/jsp/main.jsp', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento (UE) 952/2013 — Código Aduaneiro', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'CTT — Encomendas do estrangeiro', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Importar bens de países fora da UE', url: 'https://www.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 365
}
