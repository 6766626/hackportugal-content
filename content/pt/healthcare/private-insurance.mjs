export default {
  editorialVoice: 'hackportugal',
  id: 'private-insurance',
  categoryId: 'healthcare',
  title: 'Seguro de saúde privado — como funciona o mercado',
  tldr: 'O seguro privado em Portugal é um complemento ao SNS, não uma substituição. A principal utilidade: acesso rápido a especialistas em redes privadas de clínicas. O mercado é regulado pela ASF (Autoridade de Supervisão de Seguros). Custo típico por adulto: 25–40 €/mês num plano básico, 40–80 € num plano intermédio, 80–150 € num plano completo. Para uma família de 4 pessoas — a partir de 120 €/mês. Os preços dependem muito da idade, deductible, network e módulos dental/maternity. Os parâmetros-chave para comparar são o limite anual, os co-pagamentos (co-pagamento) e os períodos de espera (carência).',
  tags: ['seguro', 'saúde', 'sns'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'sns-vs-private',
      title: 'Como o SNS e o seguro privado se complementam',
      content: [
        { kind: 'paragraph', text: 'O SNS é financiado por impostos e está disponível para residentes com número de utente. A maioria das consultas de cuidados primários está isenta de taxas moderadoras (taxas moderadoras; reforma Decreto-Lei 37/2022), mas medicamentos, exames especializados, despesas privadas e internacionais ficam a cargo do paciente. O SNS é forte em situações de emergência, doenças crónicas e internamentos. O ponto fraco são os tempos de espera para consultas programadas com especialistas: 1–12 meses, consoante a região e a especialidade.' },
        { kind: 'paragraph', text: 'O seguro privado cobre consultas em clínicas privadas (maiores redes: Luz Saúde, CUF, Lusíadas, HPA, Trofa Saúde). Uma consulta com especialista é normalmente possível em 1–3 dias. O SNS cobre oftalmologia e saúde mental, mas o acesso pode ser lento; a estomatologia no SNS é limitada. Nas apólices privadas, estas áreas estão muitas vezes disponíveis mais rapidamente, mas a medicina dentária normalmente surge como módulo/rede de descontos separada e com limites.' }
      ]
    },
    {
      id: 'market-overview',
      title: 'Mercado das seguradoras',
      content: [
        { kind: 'paragraph', text: 'Verifique a empresa concreta no registo público da ASF (asf.com.pt): a seguradora deve ter autorização para o ramo Doença / health insurance, ou o direito de operar em Portugal através de sucursal, ou através do regime de livre prestação de serviços. Não se guie pelo número de operadores no mercado — muitas marcas não são seguradoras distintas, mas canais de distribuição. Veja a seguradora jurídica na apólice.' },
        { kind: 'checklist', items: [
          'Grandes marcas de massas: **Médis** (Ocidental–Ageas Portugal), **Multicare** (Fidelidade), **Allianz**, **Generali Tranquilidade**, **Ageas**, **Zurich**, **Mapfre** e outras.',
          'Compare separadamente as apólices internacionais para expats (**Allianz Care**, **Cigna Global** e outras): verifique quem é a seguradora jurídica, a lei aplicável, a existência de billing directo em Portugal, a cobertura de pre-existing conditions e a adequação para IRS/visto. Isto nem sempre é o mesmo que um seguro de saúde local regulado pela ASF',
          'Nos regimes empresariais podem participar uma seguradora, um corretor/consultor e um gestor de rede/claims administrator. Por exemplo, a **AdvanceCare** actua frequentemente como rede/administrador, e a **Mercer** como corretor/benefits consultant; veja a seguradora jurídica na apólice'
        ]},
        { kind: 'paragraph', text: 'Na pesquisa, use o termo «**seguro de saúde**» e distinga-o de «**plano de saúde**» ou «**cartão de saúde**»: estes últimos são frequentemente planos de desconto, não seguros. Todas as seguradoras licenciadas constam do registo público da ASF.' }
      ]
    },
    {
      id: 'what-to-compare',
      title: 'Parâmetros-chave de comparação',
      content: [
        { kind: 'checklist', items: [
          'Plafond anual — limite anual de reembolsos/prestações (de 10 000 € até ausência de limite)',
          'Co-pagamento — comparticipação paga pelo paciente por cada serviço (15–35 € por consulta é típico)',
          'Período de carência — período de espera antes do acesso aos serviços: normalmente 30–60 dias para ambulatório, 180–365 dias para gravidez, oncologia, medicina dentária',
          'Rede de prestadores — rede de clínicas: quanto mais ampla, melhor',
          'Medicina dentária — frequentemente um módulo separado com limite',
          'Cobertura internacional — normalmente uma opção para famílias que viajam',
          'Doenças crónicas — é obrigatório declarar; muitas vezes são excluídas da cobertura',
          'Agravamentos por idade — a apólice fica 20–50% mais cara depois dos 60 anos',
          'Prazo de vigência — normalmente um ano, com renovação automática'
        ]}
      ]
    },
    {
      id: 'how-to-buy',
      title: 'Como comprar',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Obter propostas', content: [
            { kind: 'paragraph', text: 'Através dos sites das seguradoras directamente ou através de corretores-agregadores. Pelas exigências da ASF, a seguradora ou mediador é obrigado a fornecer informação pré-contratual (IPID, condições), mas as cotações de diferentes empresas não são padronizadas — compare cuidadosamente coberturas, exclusões, co-pagamentos e redes de clínicas. Obtenha pelo menos 3 propostas para comparação.' }
          ]},
          { id: 'b2', title: '2. Preencher o questionário médico (questionário de saúde)', content: [
            { kind: 'paragraph', text: 'Para apólices individuais completas, normalmente é exigido um questionário de saúde; em regimes empresariais de grupo ou em produtos básicos/dental, o questionário pode ser simplificado ou inexistente. Declare todas as doenças crónicas, cirurgias e medicamentos que toma. Mentir é fundamento para recusa de pagamento em caso de sinistro e anulação da apólice.' }
          ]},
          { id: 'b3', title: '3. Receber uma proposta individual', content: [
            { kind: 'paragraph', text: 'Com base no questionário, a seguradora pode: aceitar em condições normais; aceitar com agravamento (agravamento); excluir doenças concretas (exclusões); recusar.' }
          ]},
          { id: 'b4', title: '4. Assinar a apólice', content: [
            { kind: 'paragraph', text: 'Normalmente online. Pagamento por cartão ou débito directo. A apólice começa a produzir efeitos na data indicada nas condições particulares, normalmente após a aceitação do risco pela seguradora e o pagamento do primeiro prémio; a carência continua a aplicar-se.' }
          ]},
          { id: 'b5', title: '5. Receber o cartão de seguro', content: [
            { kind: 'paragraph', text: 'O cartão físico chega por correio, o digital fica disponível na aplicação da seguradora. É apresentado na clínica juntamente com o Cartão de Cidadão/autorização de residência.' }
          ]}
        ]}
      ]
    },
    {
      id: 'claims',
      title: 'Como funcionam os pagamentos',
      content: [
        { kind: 'paragraph', text: 'O modelo «rede convencionada» é o mais cómodo: a clínica integra a rede da seguradora, você paga apenas o co-pagamento e o restante é liquidado directamente.' },
        { kind: 'paragraph', text: 'Fora da rede — modelo «reembolso»: paga a totalidade, depois apresenta recibos e pedido à seguradora, e recebe o reembolso na conta normalmente no prazo de 30 dias.' },
        { kind: 'warning', text: 'Ponto-chave — o contrato é regulado pela Lei do Contrato de Seguro (Decreto-Lei 72/2008). A seguradora é obrigada a explicar a recusa por escrito. Reclamações — através da ASF e do Provedor do Cliente.' }
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          'Não contrate uma apólice «online em um minuto» sem ler as condições gerais (Condições Gerais) — as exclusões são frequentemente ignoradas',
          'Para famílias com crianças, verifique a cobertura de vacinação e pediatria',
          'Se está a planear uma gravidez — a apólice deve ser contratada pelo menos 10 meses antes (a carência maternity é frequentemente de 365 dias)',
          'Para expats que viajam, uma apólice com componente internacional (Allianz, Cigna) pode ser mais vantajosa. Tenha em conta: apólices internacionais podem não ter uma rede de billing directo em Portugal e funcionam frequentemente por reimbursement',
          'O seguro empresarial é frequentemente mais barato e pode ter uma regra de underwriting simplificada, mas verifique dependents, upgrades, pre-existing conditions, carências e o que acontece em caso de despedimento — se existe direito a transitar para uma apólice individual sem novos waiting periods',
          'Para residentes fiscais em Portugal, os prémios de health insurance podem ser considerados no IRS como despesas de saúde se estiverem correctamente classificados no e-Fatura; normalmente a dedução é de 15% das health expenses dentro do household cap aplicável (Código do IRS art. 78.º-C). Verifique o e-Fatura e os recibos',
          'Antes de sair da empresa, pergunte aos RH/seguradora sobre continuation ou conversion to individual policy. Ao comprar uma nova apólice, os waiting periods normalmente começam de novo, salvo se a nova seguradora reconhecer por escrito o seguro anterior',
          'Reclamações: primeiro Provedor do Cliente da seguradora, Livro de Reclamações, depois ASF; para a qualidade clínica do serviço, a entidade relevante pode ser a ERS, não a ASF'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Plano básico para adulto', amountEURMin: 25, amountEURMax: 40, note: '/mês; o preço depende muito da idade, deductible, network e módulos dental/maternity' },
    { label: 'Plano intermédio', amountEURMin: 40, amountEURMax: 80, note: '/mês' },
    { label: 'Plano completo', amountEURMin: 80, amountEURMax: 150, note: '/mês' },
    { label: 'Família de 4 pessoas, pacote básico/intermédio', amountEURMin: 120, amountEURMax: 200, note: '/mês a partir de; pacotes completos com internamento, dental/maternity e redes amplas podem ser significativamente mais caros' },
    { label: 'Co-pagamento por consulta de especialista', amountEURMin: 15, amountEURMax: 35 }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 72/2008 — Regime Jurídico do Contrato de Seguro', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2008-107544019', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS art. 78.º-C — despesas de saúde', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ERS — Entidade Reguladora da Saúde', url: 'https://www.ers.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — Portal oficial', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
