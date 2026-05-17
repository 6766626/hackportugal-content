export default {
  editorialVoice: 'hackportugal',
  id: 'iuc-tax',
  categoryId: 'auto_ownership',
  title: 'IUC — imposto anual sobre veículos',
  tldr: 'Imposto Único de Circulação (IUC) — imposto anual pela posse de um veículo em Portugal. É pago no mês do aniversário da primeira matrícula do veículo. O cálculo depende da categoria (A–E), cilindrada, emissões de CO2 e ano. Para um automóvel ligeiro a gasolina de 1,4 l — normalmente 40–120 €; para um diesel grande — 300–700 €. Pagamento online através do Portal das Finanças, por cartão / MB WAY / Multibanco. Atraso — coima de 10–50 %.',
  tags: ['iuc', 'imposto', 'automóvel', 'circulação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Quem paga e quando',
      content: [
        { kind: 'checklist', items: [
          'O sujeito passivo de IUC para as categorias A–E é o proprietário/titular registado na Conservatória no momento em que nasce a obrigação fiscal (ou seja, no mês do aniversário da matrícula). Não é “a 1 de janeiro”',
          'O prazo de pagamento é até ao fim do mês do aniversário da primeira matrícula em Portugal (para usados importados — normalmente a data da matrícula portuguesa)',
          'Exemplo: matrícula portuguesa do veículo em 10 de março de 2020 — o IUC é pago até 31 de março de cada ano',
          'Em caso de venda do veículo, o IUC recai sobre quem constar como titular no momento em que nasce a obrigação',
          '⚠️ Para veículos usados importados: a taxa do imposto pode ser calculada tendo em conta a primeira matrícula na EU/EEA, mas o mês de pagamento é determinado pela matrícula portuguesa'
        ]},
        { kind: 'warning', text: 'A falta de pagamento do IUC é uma dívida fiscal perante a AT (Autoridade Tributária): são cobrados juros, coimas, e pode haver penhora. O IUC não é uma condição automática para passar a inspeção periódica obrigatória IPO, e a dívida é uma dívida pessoal do contribuinte; a venda do veículo não é formalmente bloqueada apenas por uma dívida de IUC, mas na transação deve ter-se em conta o risco de transferência de responsabilidade e de dívidas.' }
      ]
    },
    {
      id: 'rates',
      title: 'Taxas — categorias e classes',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Categoria A — ligeiros < 1100 cc (até 1981)', content: [
            { kind: 'paragraph', text: 'Veículos clássicos. 15–25 € por ano.' }
          ]},
          { id: 'c2', title: 'Categoria B — ligeiros com motor a gasolina (1982+)', content: [
            { kind: 'paragraph', text: 'Categoria padrão. A taxa depende da cilindrada e das emissões de CO2. 1,0–1,4 l = 40–70 €; 1,6–2,0 l = 90–170 €; 2,5+ l = 300+ €.' }
          ]},
          { id: 'c3', title: 'Categoria E — motociclos (> 250 cc)', content: [
            { kind: 'paragraph', text: '30–100 €.' }
          ]},
          { id: 'c4', title: 'Categoria C — pesados de mercadorias até 12 t', content: [
            { kind: 'paragraph', text: '50–300 € consoante a massa.' }
          ]},
          { id: 'c5', title: 'Veículos elétricos', content: [
            { kind: 'paragraph', text: 'Isentos de IUC (apenas Imposto sobre os Veículos, IVA na compra + taxa nominal).' }
          ]}
        ]},
        { kind: 'paragraph', text: 'A fórmula completa está no Código do IUC, art. 9–15 (dre.pt). Calculadora simples — no Portal das Finanças antes do pagamento.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Como pagar',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças → «IUC» → «Consultar / Pagar»',
          '📄 É gerado um documento de pagamento com entidade + referência + montante',
          '💳 Multibanco por referência',
          '📱 MB WAY',
          '🏦 Transferência bancária interna',
          '🏪 Payshop / CTT — em numerário',
          '📧 A confirmação do pagamento fica guardada no Portal das Finanças'
        ]}
      ]
    },
    {
      id: 'late-payment',
      title: 'Atraso no pagamento',
      content: [
        { kind: 'checklist', items: [
          '⏰ +30 dias — coima de 10 % do IUC',
          '⏰ +60 dias — +20 %',
          '⏰ +90 dias — +30 %',
          '💼 > 90 dias — processo nas Finanças → possível penhora salarial',
          '🚫 Cobrança fiscal pela AT: coima, juros, cobrança coerciva e penhora. A verificação do IUC não é uma condição habitual da IPO',
          '✅ Plano de pagamento em prestações (parcelamento) — possível para valores > 102 €'
        ]},
        { kind: 'warning', text: 'Ao comprar um veículo usado, peça obrigatoriamente ao vendedor o comprovativo de pagamento do IUC dos últimos 3 anos. Sem isso, pode herdar uma dívida.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Isenções e descontos',
      content: [
        { kind: 'checklist', items: [
          '♿ Pessoas com deficiência ≥ 60 % — isenção total',
          '🚜 Máquinas agrícolas afetas a exploração agrícola — isenção',
          '🇵🇹 Diplomatas — isenção',
          '⚡ Veículos elétricos das categorias B/E — isenção',
          '🚗 Primeiro ano para veteranos e famílias numerosas — desconto',
          '🏝️ Madeira e Açores — taxas locais reduzidas'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Ligeiro a gasolina 1,0–1,4 l', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Ligeiro 1,6–2,0 l', amountEURMin: 90, amountEURMax: 170 },
    { label: 'Ligeiro > 2,0 l', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Motociclo', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'Código do IUC (consolidado)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34442375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — IUC', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pagar o IUC', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pagar-o-imposto-unico-de-circulacao-iuc-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
