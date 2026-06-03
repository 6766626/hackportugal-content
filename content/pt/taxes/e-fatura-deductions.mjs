export default {
  editorialVoice: 'hackportugal',
  id: 'e-fatura-deductions',
  categoryId: 'taxes',
  title: 'e-Fatura: validação de faturas e deduções fiscais em IRS',
  tldr: 'O e-Fatura é uma área do Portal das Finanças onde são reunidas as faturas com o seu NIF. Para o IRS de 2025, a entregar de 1 de abril a 30 de junho de 2026, verifique e confirme as faturas até 2 de março de 2026: sem validação, parte das despesas pode não entrar nas deduções. Limites principais: despesas gerais familiares — 35% até 250 € por sujeito passivo, saúde — 15% até 1 000 €, educação — 30% até 800 €, rendas de habitação — 15% até ao limite definido, IVA em restaurantes/reparações/veterinária/ginásios — até 250 € por agregado familiar.',
  tags: ['irs', 'efatura', 'deduções', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'O que é o e-Fatura e porque é dinheiro',
      content: [
        { kind: 'paragraph', text: 'O e-Fatura associa talões e faturas ao seu NIF. Quando uma loja, clínica, restaurante, escola ou senhorio comunica uma fatura às Finanças, ela aparece na sua área pessoal. Estes dados são depois puxados automaticamente para a declaração de IRS.' },
        { kind: 'paragraph', text: 'Para despesas de 2025, a data-chave é 2 de março de 2026: até essa data deve confirmar as faturas pendentes, atribuir a categoria e corrigir erros. O prazo legal é o último dia de fevereiro, mas em 2026 transita para o dia útil seguinte porque 28 de fevereiro calha a um sábado. A declaração de IRS de 2025 é entregue de 1 de abril a 30 de junho de 2026.' },
        { kind: 'checklist', items: [
          'Peça sempre para acrescentar o NIF à fatura: “com número de contribuinte, por favor”.',
          'Verifique o e-Fatura pelo menos uma vez por trimestre, não apenas em fevereiro.',
          'São especialmente importantes saúde, educação, rendas, restaurantes, reparação automóvel/motociclos, cabeleireiros, veterinária, ginásios.',
          'Faturas sem NIF normalmente não dão direito a deduções em IRS.',
          'Se uma fatura estiver como “pendente”, pode não entrar na categoria correta sem a sua intervenção.',
          'Se tiver filhos, verifique separadamente o e-Fatura de cada membro do agregado familiar.'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Como aceder e o que verificar',
      content: [
        { kind: 'paragraph', text: 'Aceda a faturas.portaldasfinancas.gov.pt com NIF + senha de acesso ou Chave Móvel Digital (CMD). Se tiver família, verifique o NIF de cada adulto e criança: as despesas são distribuídas pelos sujeitos passivos.' },
        { kind: 'checklist', items: [
          'Abra “Despesas dedutíveis em IRS” — visão geral das deduções.',
          'Abra “Verificar faturas” ou “Complementar Informação Faturas” — lista de faturas com problemas.',
          'Verifique se há algum estado “pendente”.',
          'Atribua o setor da despesa: saúde, educação, habitação, lares, despesas gerais familiares ou outro.',
          'Para despesas mistas, indique se a compra está relacionada com atividade profissional.',
          'Guarde as alterações e volte a verificar a página final das deduções.',
          'Descarregue ou guarde faturas contestáveis: farmácias, escolas, pagamentos de renda, despesas médicas elevadas.'
        ] },
        { kind: 'warning', text: 'A senha das Finanças não chega instantaneamente: se é um novo residente com NIF, peça a senha de acesso com antecedência. Em fevereiro, devido à carga, o portal pode funcionar lentamente.' }
      ]
    },
    {
      id: 'categories',
      title: 'Categorias de deduções em IRS em 2026',
      content: [
        { kind: 'paragraph', text: 'Abaixo estão as principais deduções que normalmente são visíveis através do e-Fatura e do Portal das Finanças para a declaração de IRS. Os limites aplicam-se segundo as regras do Código do IRS e podem ainda ser limitados por um teto global de deduções, consoante o rendimento da família.' },
        { kind: 'checklist', items: [
          'Despesas gerais familiares: 35% das despesas, máximo 250 € por sujeito passivo; para uma família com dois adultos, normalmente até 500 €.',
          'Monoparental: para família monoparental, a taxa nas despesas gerais familiares é de 45%, máximo 335 €.',
          'Saúde: 15% das despesas de saúde, máximo 1 000 € por agregado familiar; despesas com IVA a 23% normalmente exigem receita médica.',
          'Educação e formação: 30% das despesas, limite global de 800 €; incluem escolas, universidades, creche, livros escolares, formação com CAE correto.',
          'Habitação — rendas: 15% dos pagamentos de renda de habitação permanente, se o contrato estiver registado nas Finanças e forem emitidos recibos de renda eletrónicos.',
          'Lares: 25% das despesas com lares de idosos e apoio a familiares idosos, com limite próprio.',
          'Exigência de fatura: parte do IVA em restaurantes, alojamento, cabeleireiros, reparação automóvel/motociclos, veterinária, ginásios e passes mensais; o limite global é normalmente de 250 € por agregado familiar.'
        ] },
        { kind: 'warning', text: 'A existência de uma fatura no e-Fatura não significa o reembolso automático do valor total. A dedução em IRS reduz o imposto a pagar, não devolve o custo da compra. Se o IRS retido tiver sido baixo, o reembolso efetivo pode ser inferior ao limite visível.' }
      ]
    },
    {
      id: 'validate',
      title: 'Validação até 2 de março: em que clicar',
      content: [
        { kind: 'substeps', items: [
          { id: 'pending', title: '1. Tratar das “Faturas Pendentes”', content: [
            { kind: 'paragraph', text: 'Abra cada fatura com o estado pendente. O sistema pede para escolher o setor porque o vendedor tem vários tipos de atividade ou os dados estão incompletos.' },
            { kind: 'checklist', items: [
              'Farmácia: escolha saúde; se houver IVA a 23%, assinale a existência de receita médica apenas se ela existir realmente.',
              'Escola, universidade, creche: escolha educação, se o fornecedor tiver um CAE adequado.',
              'Restaurante ou café: normalmente restauração e alojamento para deduzir parte do IVA.',
              'Oficina: manutenção e reparação de veículos automóveis ou motociclos.',
              'Ginásio: atividades de clubes desportivos / ginásios, se o setor correspondente aparecer.'
            ] }
          ] },
          { id: 'professional', title: '2. Assinalar despesas profissionais', content: [
            { kind: 'paragraph', text: 'Se estiver em recibos verdes ou tiver atividade aberta, algumas faturas podem surgir com a pergunta “Âmbito da atividade profissional?”. Para despesas pessoais, responda “Não”; para despesas de negócio, responda “Sim” total ou parcialmente, se o portal permitir indicar uma percentagem.' }
          ] },
          { id: 'children', title: '3. Verificar filhos e cônjuge', content: [
            { kind: 'paragraph', text: 'As despesas das crianças entram frequentemente no NIF da criança: escola, creche, explicações, saúde. Entre no e-Fatura de cada dependente com o respetivo NIF e senha das Finanças ou através do acesso de representante, se estiver configurado.' }
          ] }
        ] }
      ]
    },
    {
      id: 'missing-or-wrong',
      title: 'Se a fatura não aparecer ou a categoria estiver errada',
      content: [
        { kind: 'paragraph', text: 'Os vendedores normalmente comunicam as faturas até ao dia 5 do mês seguinte, mas podem existir atrasos. Se no final de fevereiro a fatura ainda não aparecer, pode registá-la manualmente através de “Registar Faturas”, mas guarde o original: as Finanças podem pedir comprovativo.' },
        { kind: 'checklist', items: [
          'Verifique se o NIF foi impresso corretamente na fatura.',
          'Compare a data, o valor, o NIF do vendedor e o número da fatura.',
          'Se o NIF não foi acrescentado no momento do pagamento, normalmente não é possível corrigir mais tarde através do e-Fatura — peça ao vendedor para anular e emitir uma fatura correta, se ainda for possível.',
          'Se a categoria estiver errada, tente alterá-la em “Complementar Informação”.',
          'Se o portal não permitir escolher educação/saúde, o problema pode estar no CAE do vendedor; peça ao fornecedor uma fatura correta ou uma explicação.',
          'Para rendas, verifique não o e-Fatura, mas os recibos de renda eletrónicos e o contrato de arrendamento no Portal das Finanças.',
          'Depois de fechada a validação, as correções são mais difíceis: parte dos dados pode ser contestada mais tarde durante o período de reclamação, mas é melhor não contar com isso.'
        ] },
        { kind: 'warning', text: 'Não adicione manualmente faturas fictícias ou já contabilizadas. Duplicados e despesas não comprovadas podem levar a correção do IRS, juros compensatórios e coimas.' }
      ]
    },
    {
      id: 'irs-filing',
      title: 'Como isto entra na declaração de IRS',
      content: [
        { kind: 'paragraph', text: 'Depois do fecho do e-Fatura, as Finanças calculam as deduções à coleta. Antes de entregar o IRS, verifique a página “Despesas para Deduções à Coleta” e depois o Modelo 3 ou o IRS Automático, se estiver disponível para si.' },
        { kind: 'checklist', items: [
          'Até 15 de março, normalmente ficam visíveis os valores finais das deduções.',
          'De 16 a 31 de março, normalmente é possível reclamar despesas gerais familiares e exigência de fatura, se os valores estiverem incorretos.',
          'De 1 de abril a 30 de junho de 2026 é entregue o IRS relativo a 2025.',
          'Antes de submeter a declaração, simule o resultado: “Simular”.',
          'Compare tributação conjunta e separada, se for casado ou viver em união de facto.',
          'Se se mudou recentemente, verifique a residência fiscal: um residente em Portugal declara o rendimento mundial, um não residente declara apenas rendimentos portugueses.',
          'Guarde o comprovativo de entrega e a liquidação IRS quando ficar disponível.'
        ] },
        { kind: 'warning', text: 'O e-Fatura não substitui a revisão fiscal da declaração. Para situações de expat — rendimentos do estrangeiro, remote work, IFICI, cripto, venda de património, dupla residência — é melhor verificar separadamente o Modelo 3 e os anexos.' }
      ]
    }
  ],
  costs: [
    { label: 'Acesso ao e-Fatura', amountEUR: 0, note: 'Gratuito através do Portal das Finanças.' },
    { label: 'Senha de acesso das Finanças', amountEUR: 0, note: 'Pedida gratuitamente; a carta chega à morada fiscal.' },
    { label: 'Chave Móvel Digital', amountEUR: 0, note: 'Autenticação digital gratuita, se tiver um documento adequado e um número de telefone ativo.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — e-Fatura',
      url: 'https://faturas.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Manual e-Fatura',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/efatura_portal.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — deduções à coleta',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
