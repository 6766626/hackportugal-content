export default {
  editorialVoice: 'hackportugal',
  id: 'iuc-tax',
  categoryId: 'auto_ownership',
  title: 'IUC — imposto anual sobre o automóvel',
  tldr: 'Imposto Único de Circulação (IUC) — imposto anual pela propriedade de um veículo em Portugal. É pago no mês do aniversário da primeira matrícula do veículo. O cálculo depende da categoria (A–G), da cilindrada, das emissões de CO2 e do ano da primeira matrícula. Categoria A — ligeiros de passageiros, matriculados entre 1981 e 30.06.2007 (base: cilindrada + ano); categoria B — passageiros/mistos, matriculados a partir de 01.07.2007 (base: cilindrada + CO2 + ano de matrícula). Para um ligeiro a gasolina de 1,4 l — normalmente 40–120 €. Um diesel grande — 300–700 €. Pagamento online através do Portal das Finanças. **O atraso não implica uma percentagem fixa, mas sim uma coima nos termos do RGIT + juros compensatórios/de mora; as taxas da coima dependem do tipo de infracção e do prazo de regularização voluntária.**',
  tags: ['iuc', 'imposto', 'automóvel', 'circulação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Quem paga e quando',
      content: [
        { kind: 'checklist', items: [
          'O sujeito passivo de IUC para as categorias A–E é o proprietário/titular registado na Conservatória no momento em que nasce a obrigação fiscal (ou seja, no mês do aniversário da matrícula). Não é “a 1 de Janeiro”',
          'O prazo de pagamento é até ao fim do mês do aniversário da primeira matrícula em Portugal (para usados importados — normalmente a data da matrícula portuguesa)',
          'Exemplo: matrícula portuguesa do automóvel em 10 de Março de 2020 — o IUC é pago até 31 de Março de cada ano',
          'Em caso de venda do automóvel, o IUC cabe a quem conste como titular no momento em que nasce a obrigação',
          '⚠️ Para veículos usados importados: a taxa do imposto pode ser calculada tendo em conta a primeira matrícula na UE/EEE, mas o mês de pagamento é determinado pela matrícula portuguesa'
        ]},
        { kind: 'warning', text: 'A falta de pagamento do IUC é uma dívida fiscal perante a AT (Autoridade Tributária): são cobrados juros, coimas e pode haver penhora. O IUC não é uma condição automática para realizar a inspecção técnica IPO, e a dívida é uma dívida pessoal do contribuinte; a venda do automóvel não é formalmente bloqueada apenas por uma dívida de IUC, mas numa transacção deve considerar-se o risco de responsabilidade e dívidas pendentes.' }
      ]
    },
    {
      id: 'rates',
      title: 'Taxas — categorias e classes',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Categoria A — ligeiros de passageiros/mistos, matrícula 1981–30.06.2007', content: [
            { kind: 'paragraph', text: 'Base do imposto: cilindrada (cc) + tipo de combustível + ano de matrícula. Sem componente de CO2. Valores típicos: 15–80 €.' }
          ]},
          { id: 'c2', title: 'Categoria B — ligeiros de passageiros/mistos, matrícula a partir de 01.07.2007', content: [
            { kind: 'paragraph', text: 'Base: cilindrada + emissões de CO2 + ano de matrícula (coeficiente ambiental). 1,0–1,4 l = 40–70 €; 1,6–2,0 l = 90–170 €; 2,5+ l = 300+ €. Diesel — coeficiente de agravamento.' }
          ]},
          { id: 'c3', title: 'Categorias C e D — ligeiros de mercadorias e pesados de mercadorias', content: [
            { kind: 'paragraph', text: 'C — mercadorias ≤ 12 t; D — > 12 t. Base: peso + eixo + tipo de combustível. C = 30–300 €, D — superior.' }
          ]},
          { id: 'c4', title: 'Categoria E — motociclos > 50 cc', content: [
            { kind: 'paragraph', text: '5–60 € consoante os cc.' }
          ]},
          { id: 'c5', title: 'Categorias F e G — barcos e aeronaves de uso particular', content: [
            { kind: 'paragraph', text: 'Aplicam-se de acordo com as tabelas próprias do Código do IUC.' }
          ]},
          { id: 'c6', title: 'Veículos eléctricos (100% BEV)', content: [
            { kind: 'paragraph', text: 'Isentos de IUC para a categoria B (ligeiros de passageiros/mistos); híbridos plug-in e híbridos — taxas reduzidas ou descontos consoante o ano de matrícula.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'A fórmula completa consta do Código do IUC (dre.pt). O valor exacto está sempre visível no Portal das Finanças → IUC → Consultar antes do pagamento.' }
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
          '📧 A confirmação de pagamento fica guardada no Portal das Finanças'
        ]}
      ]
    },
    {
      id: 'late-payment',
      title: 'Atraso no pagamento',
      content: [
        { kind: 'checklist', items: [
          '⏰ Atraso → são automaticamente cobrados juros de mora a partir do dia seguinte ao termo do prazo',
          '⚖️ Adicionalmente — coima nos termos do RGIT (Regime Geral das Infracções Tributárias). O valor da coima depende do montante do IUC e do prazo de regularização voluntária (reduzida → mais elevada)',
          '💼 Se não pagar e não apresentar defesa — a AT encaminha a dívida para cobrança coerciva: pode haver penhora de contas bancárias, salário ou pensão',
          '🚫 A verificação do IUC não é uma condição formal da IPO',
          '✅ Pedido de pagamento em prestações — possível para dívida > 102 € (normalmente até 36 prestações); é submetido no Portal das Finanças',
          '⏱️ A regularização voluntária antes de receber a notificação da coima dá direito a uma taxa de coima reduzida'
        ]},
        { kind: 'warning', text: 'O IUC é um imposto pessoal de quem constava como proprietário no momento em que nasceu a obrigação. O comprador formalmente NÃO “herda” a dívida do proprietário anterior, mas ao comprar um usado continua a ser aconselhável pedir comprovativos de pagamento do IUC dos últimos 3 anos, para evitar litígios e garantir que a AT não envia notificações para a sua morada.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Isenções e descontos',
      content: [
        { kind: 'checklist', items: [
          '♿ Pessoas com incapacidade ≥ 60 % — isenção total',
          '🚜 Máquinas agrícolas afectas a exploração agrícola — isenção',
          '🇵🇹 Diplomatas — isenção',
          '⚡ Veículos eléctricos das categorias B/E — isenção',
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
