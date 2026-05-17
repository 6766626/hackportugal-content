export default {
  editorialVoice: 'hackportugal',
  id: 'credito-pessoal-tan-taeg',
  categoryId: 'banking',
  title: 'Crédito Pessoal: crédito ao consumo, TAN, TAEG e como comparar',
  tldr: 'Em Portugal, o crédito pessoal é regulado pelo DL 133/2009: normalmente é um crédito ao consumo de 200 € a 75 000 €, não hipotecário. Compare não a TAN, mas a TAEG: esta inclui juros, comissões, impostos e serviços obrigatórios. Tem 14 dias de calendário para revogar o contrato. O Banco de Portugal publica trimestralmente as TAEG máximas e disponibiliza um comparador oficial em clientebancario.bportugal.pt.',
  tags: ['crédito', 'taeg', 'empréstimo', 'bancos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-personal-credit',
      title: 'O que é crédito pessoal',
      content: [
        { kind: 'paragraph', text: 'Crédito pessoal é um crédito ao consumo sem garantia imobiliária: obras, eletrodomésticos, férias, consolidação de dívidas, educação, saúde, automóvel sem hipoteca. No regime jurídico do DL 133/2009, normalmente abrange contratos de 200 € a 75 000 €.' },
        { kind: 'paragraph', text: 'Não é cartão de crédito nem descoberto autorizado. Um crédito pessoal tem montante, prazo, plano de prestações mensais e taxa contratada. O banco é obrigado a entregar antecipadamente a ficha de informação normalizada, para que possa comparar propostas antes de assinar.' },
        { kind: 'checklist', items: [
          'Montante do crédito: quanto receberá efetivamente na conta.',
          'Prazo: duração em meses; para crédito pessoal comum, os bancos orientam-se pelos limites do Banco de Portugal para prazos de crédito ao consumo.',
          'Prestação mensal: pagamento mensal.',
          'TAN: taxa anual nominal.',
          'TAEG: custo anual efetivo do crédito com encargos obrigatórios.',
          'MTIC: montante total imputado ao consumidor — o total que pagará ao banco durante todo o prazo.',
          'Comissão de abertura/processamento, se existir.',
          'Imposto do Selo: imposto sobre o crédito e os juros.',
          'Seguro: seguro, se o banco o tornar condição da taxa ou da aprovação.'
        ] }
      ]
    },
    {
      id: 'tan-vs-taeg',
      title: 'TAN vs TAEG: o que comparar',
      content: [
        { kind: 'paragraph', text: 'A TAN é apenas a taxa de juro aplicada ao dinheiro. Não mostra o preço total do crédito. Dois bancos podem apresentar a mesma TAN, mas um deles acrescentar uma comissão, um seguro obrigatório e carga fiscal — a sobrecarga total será mais elevada.' },
        { kind: 'paragraph', text: 'A TAEG é a taxa anual de encargos efetiva global. Inclui juros, comissões, impostos e encargos obrigatórios associados à obtenção do crédito. Por isso, para comparar propostas, use a TAEG e o MTIC, não a TAN publicitária.' },
        { kind: 'warning', text: 'Uma TAN baixa na publicidade não significa um crédito barato. Verifique a TAEG, o MTIC e o valor da prestação mensal no documento do banco, não no anúncio.' },
        { kind: 'checklist', items: [
          'Se a TAEG for mais alta — o crédito é normalmente mais caro para o mesmo montante e prazo.',
          'Se o prazo for mais longo — a prestação mensal é mais baixa, mas o MTIC é quase sempre mais alto.',
          'Se o seguro for obrigatório para obter a taxa — o seu custo deve estar refletido na TAEG.',
          'Se o banco propuser “sem comissões”, veja na mesma o Imposto do Selo e o MTIC.',
          'Se a taxa for variável — a prestação pode mudar; nos créditos pessoais é mais comum encontrar taxa fixa.',
          'Compare propostas apenas com o mesmo montante, prazo e finalidade do crédito.'
        ] }
      ]
    },
    {
      id: 'legal-limits-and-approval',
      title: 'Limites, rendimento e aprovação em 2026',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe uma fórmula universal do tipo “o banco é obrigado a conceder X salários”. O montante depende do rendimento líquido, da estabilidade do emprego, das despesas do agregado, de outros créditos na Central de Responsabilidades de Crédito e das regras internas de risco do banco.' },
        { kind: 'paragraph', text: 'O Banco de Portugal aplica recomendações macroprudenciais: os bancos devem avaliar o DSTI — a percentagem de todos os pagamentos de crédito no rendimento líquido. Referência prática de mercado: se todas as prestações após o novo crédito se aproximarem de 50% do rendimento líquido, a aprovação torna-se difícil ou o montante é reduzido.' },
        { kind: 'checklist', items: [
          'Mostre o rendimento mensal líquido: recibos de vencimento, contrato de trabalho, declaração IRS, recibos verdes.',
          'Para recém-chegados, o banco pode pedir 3–6 meses de movimentos de conta em Portugal.',
          'O NIF é quase sempre obrigatório; o NISS é frequentemente necessário para confirmar a situação laboral.',
          'A autorização de residência, Cartão de Cidadão UE ou passaporte + visto ajudam a confirmar a permanência legal.',
          'Dívidas de cartões de crédito e descobertos são visíveis para o banco através da CRC e reduzem o montante disponível.',
          'Um contrato sem termo estável é normalmente mais forte do que um contrato a termo curto ou recibos verdes recentes.',
          'Se o rendimento for estrangeiro, o banco pode aplicar um desconto prudencial ou pedir documentos traduzidos.',
          'Um crédito pessoal comum é frequentemente limitado a um prazo até 7 anos; finalidades específicas, como educação, saúde, energia renovável ou automóvel, podem ter outros limites segundo as regras do banco e do Banco de Portugal.'
        ] },
        { kind: 'warning', text: 'Não contraia crédito “para outra pessoa”. Para o banco, o mutuário é quem assinou o contrato, mesmo que o dinheiro tenha sido efetivamente recebido por um amigo, parceiro ou familiar.' }
      ]
    },
    {
      id: 'how-to-compare',
      title: 'Como comparar propostas através do Banco de Portugal',
      content: [
        { kind: 'paragraph', text: 'O ponto oficial de comparação é o Portal do Cliente Bancário do Banco de Portugal: clientebancario.bportugal.pt. Aí existe um comparador de crédito aos consumidores e páginas informativas sobre TAEG, TAN, MTIC e direitos do consumidor.' },
        { kind: 'substeps', items: [
          { id: 'prepare-inputs', title: '1. Prepare parâmetros iguais', content: [
            { kind: 'checklist', items: [
              'Finalidade do crédito: pessoal, automóvel, educação, saúde, consolidação.',
              'Montante: por exemplo 5 000 €, 10 000 € ou 20 000 €.',
              'Prazo: por exemplo 24, 48, 60 ou 84 meses.',
              'Tipo de taxa: fixa ou variável, se disponível.',
              'Existência de seguro: obrigatório ou facultativo.',
              'Comissões: abertura, processamento, manutenção, se o banco as aplicar.'
            ] }
          ] },
          { id: 'compare-output', title: '2. Veja a TAEG e o MTIC', content: [
            { kind: 'paragraph', text: 'Escolha 3–5 bancos e compare a TAEG, o MTIC e a prestação mensal. A prestação mais baixa nem sempre é a melhor: com um prazo longo, o custo total pode ser muito mais elevado.' }
          ] },
          { id: 'check-usury-rate', title: '3. Verifique a TAEG máxima', content: [
            { kind: 'paragraph', text: 'O Banco de Portugal publica trimestralmente as taxas máximas para crédito ao consumo. Se a TAEG estiver acima do máximo para a categoria de crédito na data do contrato, é um sinal de alerta: verifique o cálculo e apresente reclamação ao Banco de Portugal.' }
          ] }
        ] }
      ]
    },
    {
      id: 'rights-after-signing',
      title: 'Depois da assinatura: 14 dias, reembolso antecipado, reclamações',
      content: [
        { kind: 'paragraph', text: 'Ao abrigo do DL 133/2009, o consumidor tem 14 dias de calendário para livre revogação — desistência do contrato sem indicar motivo. O prazo conta-se a partir da data de celebração do contrato ou da data de receção de todas as condições obrigatórias, se estas tiverem sido fornecidas mais tarde.' },
        { kind: 'paragraph', text: 'Se revogar depois de receber o dinheiro, terá de devolver o capital e os juros pelos dias efetivos de utilização do crédito. Normalmente, isto deve ser feito no prazo de 30 dias após o envio da comunicação de revogação.' },
        { kind: 'checklist', items: [
          'Envie a revogação por escrito: email com confirmação, carta registada ou através do canal indicado no contrato.',
          'Guarde o comprovativo de envio e o cálculo do montante a devolver.',
          'O reembolso antecipado é possível a qualquer momento.',
          'Com taxa fixa, a compensação ao banco é limitada por lei: normalmente até 0,5% do montante reembolsado antecipadamente, se faltar mais de 1 ano para o fim do contrato, e até 0,25%, se faltar 1 ano ou menos.',
          'Com taxa variável, normalmente não é cobrada comissão por reembolso antecipado de crédito ao consumo.',
          'Se o banco impôs um produto, não explicou a TAEG ou recusou entregar documentos — apresente reclamação no Livro de Reclamações e ao Banco de Portugal.',
          'Verifique o intermediário de crédito: deve estar registado no Banco de Portugal.'
        ] },
        { kind: 'warning', text: 'Não pague “taxa de aprovação” a intermediários desconhecidos antes da disponibilização do crédito. Bancos legais e intermediários de crédito registados podem ser verificados no site do Banco de Portugal; propostas por WhatsApp com pagamento antecipado são um esquema de fraude frequente.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Banco de Portugal — Portal do Cliente Bancário: crédito aos consumidores e comparador',
      url: 'https://clientebancario.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal — taxas máximas e supervisão do crédito aos consumidores',
      url: 'https://www.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 133/2009 — regime do crédito aos consumidores',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2009-34555075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
