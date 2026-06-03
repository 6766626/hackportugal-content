export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-post',
  categoryId: 'daily_life',
  title: 'CTT — correios de Portugal',
  tldr: 'CTT = empresa pública Correios de Portugal, S.A., privatizada e a operar sob concessão do serviço postal universal. Há estações em todas as cidades, serviços bancários Banco CTT, encomendas, seguimento. Para a AIMA, muitas vezes é necessária uma Carta Registada com Aviso de Receção. Encomendas da UE sem alfândega; de países fora da UE — IVA sobre todas, direitos aduaneiros — sobre bens acima de 150 €.',
  tags: ['ctt', 'correios', 'encomendas'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'services',
      title: 'Serviços dos CTT',
      content: [
        { kind: 'checklist', items: [
          'Carta Normal — carta comum, 0,73 € em Portugal / 1,30 € na UE',
          'Carta Registada — carta registada com número para seguimento',
          'Carta com Aviso de Receção — carta registada + aviso de receção (obrigatório para a AIMA em alguns casos)',
          'Encomenda — encomenda até 30 kg em Portugal, até 20 kg internacional',
          'EMS / Express — entrega urgente',
          'CTT Expresso — entrega expresso, no dia seguinte',
          'CTT Pay — pagamentos de serviços públicos, multas, impostos',
          'CTT Loja Gigante — loja online (produtos por correio sem encomenda do estrangeiro)'
        ]}
      ]
    },
    {
      id: 'parcels',
      title: 'Encomendas',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Da UE', content: [
            { kind: 'paragraph', text: 'Sem alfândega, sem direitos. Chegam como encomendas normais. Entrega em 2–7 dias, dependendo do país.' }
          ]},
          { id: 'p2', title: 'De países fora da UE (Federação Russa, Brasil, EUA, China)', content: [
            { kind: 'paragraph', text: 'Declaração aduaneira. Limites:' },
            { kind: 'checklist', items: [
              'Até 22 € — sem IVA nem direitos (antes; agora REVOGADO desde 2021)',
              'Qualquer encomenda: IVA às taxas da região de destino (Continente 23%, Madeira/Açores taxas regionais)',
              'A partir de 150 € — adicionalmente direitos aduaneiros (taxa segundo o código TARIC do produto)',
              'Os CTT enviam SMS/e-mail com o montante a pagar → paga online ou no momento da receção',
              'O desalfandegamento é normalmente feito através do CTT Desalfandegamento Online (ctt.pt) ou de um despachante aduaneiro; balcaounico.dgav.pt — outro portal (DGAV, para procedimentos agroalimentares/veterinários)'
            ]}
          ]},
          { id: 'p3', title: 'Seguimento', content: [
            { kind: 'paragraph', text: 'Seguimento em ctt.pt pelo número. Envios internacionais — também no site de origem (17track.net para envios agregados).' }
          ]},
          { id: 'p4', title: 'Entrega falhada', content: [
            { kind: 'paragraph', text: 'Se não estiver ninguém em casa — deixam um aviso. Deve levantar na Loja CTT mais próxima no prazo de 7 dias (caso contrário, devolução ao remetente).' }
          ]}
        ]}
      ]
    },
    {
      id: 'sending',
      title: 'Envio para países da ex-URSS',
      content: [
        { kind: 'checklist', items: [
          '📦 Federação Russa/Bielorrússia — o serviço, os prazos e as categorias permitidas são instáveis devido a sanções e restrições; confirme em ctt.pt antes de enviar',
          '📦 Para a Ucrânia — funciona; os prazos são instáveis e dependem da situação',
          '📦 Para o Cazaquistão — funciona, confirme os prazos',
          '⚠️ Dinheiro em numerário, títulos, joias e muitas outras categorias têm restrições/são proibidos de enviar (regras postais internacionais UPU/CTT)',
          '⚠️ A declaração é obrigatória para todas as encomendas fora da UE'
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Estafetas privados',
      content: [
        { kind: 'checklist', items: [
          'DHL Express — rápido, caro (35–80 € por entrega internacional)',
          'UPS — 30–60 €, dia seguinte na UE',
          'FedEx — 30–70 €',
          'GLS — entrega económica na UE, 15–30 €',
          'SEUR / Correos Express — Espanha / Portugal',
          'InPost — cacifos automáticos para encomendas (em crescimento em Portugal)'
        ]}
      ]
    },
    {
      id: 'retention',
      title: 'Retenção de correio / reencaminhamento',
      content: [
        { kind: 'paragraph', text: 'Em caso de mudança de casa, pode pedir o reencaminhamento de correio através dos CTT (Mudança de Morada) por 15 €/3 meses. Ou a retenção (Retenção) — guardam na estação e você levanta.' }
      ]
    }
  ],
  sources: [
    { title: 'CTT — oficial', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AT — alfândega / importação de encomendas', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
