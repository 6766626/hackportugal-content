export default {
  editorialVoice: 'hackportugal',
  id: 'via-verde-full',
  categoryId: 'auto_trips',
  title: 'Via Verde (sistema eletrónico de pagamento de portagens) — guia completo para pagar portagens em Portugal',
  tldr: 'Via Verde — pagamento eletrónico de portagens através de um transponder (identificador). Subscrição a partir de 5 € de ativação + 1,75 €/mês. Alternativa — pós-pagamento através de portagens.ctt.pt ou terminais CTT/Payshop: para matrículas portuguesas, o pagamento fica normalmente disponível **cerca de 48 horas** após a passagem e é válido durante **15 dias úteis**. Atraso → a dívida passa para cobrança administrativa: coima fixa por contraordenação (intervalo conforme tabela, não «25× o valor da portagem»), mais % por falta de pagamento. IMPORTANTE: desde 01.01.2025 foram abolidas portagens na A22, A23, A24, A25, em partes da A28, A4, A13. O «bloqueio automático do DUA» NÃO é uma consequência padrão.',
  tags: ['via verde', 'portagens', 'estradas', 'automóvel', 'autoestradas'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'what-is',
      title: 'O que é a Via Verde',
      content: [
        { kind: 'paragraph', text: 'A Via Verde Portugal é uma concessão Brisa / Ascendi / IP (Infraestruturas de Portugal). É o principal sistema eletrónico de pagamento de portagens: um pequeno dispositivo (identificador) no para-brisas que debita automaticamente a portagem ao passar sob o pórtico sem parar.' },
        { kind: 'checklist', items: [
          'Abrange TODAS as autoestradas e pontes com portagem em Portugal',
          'Funciona também em parques de estacionamento de muitos aeroportos e centros comerciais',
          'Funciona em Espanha (Bip&Drive) e em França (TIS) com o mesmo dispositivo',
          'Tarifa separada para motociclos',
          'Classes de veículos 1–4 conforme as dimensões'
        ]}
      ]
    },
    {
      id: 'how-to-get',
      title: 'Como obter um identificador',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'A. Residente em Portugal', content: [
            { kind: 'checklist', items: [
              'Online em `viaverde.pt` ou através da aplicação «Via Verde»',
              'Necessário: NIF, documento de identificação (CC/autorização de residência), dados do veículo (matrícula, modelo), IBAN ou cartão',
              'Entrega do identificador — 3–5 dias úteis via CTT',
              'Está disponível a versão «Via Verde Digital» — transponder virtual na aplicação sem dispositivo (funciona em Portugal através de reconhecimento da matrícula)'
            ]}
          ]},
          { id: 'g2', title: 'B. Não residente / turista (Via Verde Visitors)', content: [
            { kind: 'paragraph', text: 'Tarifa especial para turistas. Pode ser obtida nos aeroportos de Lisboa/Porto/Faro ou em terminais CTT. A associação é feita a um cartão bancário. Pagamento consoante as passagens realizadas, sem subscrição.' }
          ]},
          { id: 'g3', title: 'C. Através de bancos parceiros', content: [
            { kind: 'paragraph', text: 'Millennium, Santander, Novo Banco — permitem pedir a Via Verde diretamente na aplicação do banco com débito direto.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tariffs',
      title: 'Tarifas e subscrições',
      content: [
        { kind: 'checklist', items: [
          '💶 Ativação do identificador: ~5–10 € uma única vez (com devolução da caução em caso de cancelamento)',
          '💶 Mensalidade: ~1,75 €/mês por dispositivo',
          '💶 Portagem — valor fixo por troços (por exemplo, Lisboa → Porto pela A1 ~22 €)',
          '💶 Via Verde Visitors: sem mensalidade, apenas uma % adicional',
          '🏷️ Descontos para veículos elétricos em algumas autoestradas',
          '🏷️ «Dispositivos múltiplos» — desconto quando há vários carros na mesma conta'
        ]},
        { kind: 'warning', text: 'As tarifas são atualizadas anualmente a 1 de janeiro. A tabela de preços atualizada está apenas em `viaverde.pt`.' }
      ]
    },
    {
      id: 'no-via-verde',
      title: 'Se não tiver Via Verde — como pagar',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'A. Autoestradas eletrónicas (antigas SCUT). Desde 01.01.2025, em várias autoestradas as portagens foram abolidas — A22 Algarve, A23, A24, A25, partes da A28, A4, A13', content: [
            { kind: 'paragraph', text: 'Não há cabine — apenas pórticos com câmaras. Leem a matrícula e emitem a cobrança.' },
            { kind: 'checklist', items: [
              'O pagamento é possível quando a cobrança aparece no sistema — para matrículas portuguesas, normalmente **cerca de 48 horas após a passagem**',
              'Janela de pagamento — normalmente **15 dias úteis** através de terminais CTT/Payshop ou em `portagens.ctt.pt`',
              'Pré-pagamento em postos de abastecimento — associar previamente um cartão',
              'Se o pagamento não for efetuado dentro do prazo estabelecido — a dívida passa para cobrança administrativa: aplica-se uma coima por contraordenação (intervalo conforme tabela, **não «25× o valor da portagem»**), mais % por falta de pagamento'
            ]}
          ]},
          { id: 'n2', title: 'B. Autoestradas clássicas (A1, A2, A5 — com cabines)', content: [
            { kind: 'paragraph', text: 'Pode pagar em numerário ou com cartão na cabine. Siga pela faixa com o sinal «Outras Vias». Não confunda com «Via Verde» (faixa verde) — essa é APENAS para quem tem dispositivo; caso contrário, há coima.' }
          ]},
          { id: 'n3', title: 'C. Carro alugado', content: [
            { kind: 'paragraph', text: 'Todas as grandes empresas de aluguer (Europcar, Avis, Sixt, Goldcar, Drivalia) oferecem aluguer de Via Verde. Preço médio — 3–5 €/dia + valor das portagens. Nas antigas SCUT não convém recusar — caso contrário, a rent-a-car irá cobrar-lhe as coimas.' }
          ]}
        ]}
      ]
    },
    {
      id: 'app-features',
      title: 'Aplicação Via Verde — o que mais permite fazer',
      content: [
        { kind: 'checklist', items: [
          '⛽ Pagamento de combustível sem passar pela caixa (parceiros Galp, BP, Repsol)',
          '🅿️ Pagamento de estacionamento (EMEL Lisboa, SABA, Estrela do Norte)',
          '🚇 Pagamento de transportes públicos em algumas cidades (modo piloto)',
          '📊 Histórico de passagens e extratos para efeitos fiscais (Anexo H no IRS)',
          '📱 Notificações sobre coimas e débitos em tempo real',
          '🧾 Fatura eletrónica com NIF — dedução no IRS como despesa na categoria despesas gerais familiares'
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Débitos contestados',
      content: [
        { kind: 'checklist', items: [
          'Classe do veículo incorreta → formulário de reclamação em `viaverde.pt` + fotografia do documento do veículo',
          'Débito duplicado → normalmente regularização automática em 5 dias',
          'Coima com identificador a funcionar → contestação através da AT Ascendi / Brisa',
          'Pórtico sem funcionar → num pórtico negro é feita uma fotografia emulada; contestar através de `portagens.ctt.pt`'
        ]},
        { kind: 'warning', text: 'A falta de pagamento prolongada pode levar a medidas administrativas de cobrança (penhora de contas bancárias, salário, etc. através da AT). O «bloqueio automático do DUA como consequência padrão» não é uma regra geral; confirme o estado através de portagens.ctt.pt e da AT.' }
      ]
    }
  ],
  costs: [
    { label: 'Ativação do dispositivo', amountEURMin: 5, amountEURMax: 10, note: 'frequentemente reembolsável' },
    { label: 'Mensalidade', amountEUR: 1.75, note: '€/mês' },
    { label: 'Coima por falta de pagamento de portagem', amountEURMin: 25, amountEURMax: 250, note: 'intervalo fixo por contraordenação; depende da portagem e das circunstâncias — valores exatos na notificação da IP/AT' },
    { label: 'Lisboa → Porto pela A1', amountEUR: 22 }
  ],
  sources: [
    { title: 'Via Verde — site do operador', url: 'https://www.viaverde.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portagens CTT — pós-pagamento de autoestradas eletrónicas', url: 'https://portagens.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal — portagens e concessões', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Regulamento de Portagens', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
