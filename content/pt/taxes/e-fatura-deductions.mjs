export default {
  editorialVoice: 'hackportugal',
  id: 'e-fatura-deductions',
  categoryId: 'taxes',
  title: 'e-Fatura: validação de faturas e deduções fiscais no IRS',
  tldr: 'O e-Fatura é uma área do Portal das Finanças onde são reunidas as faturas com o seu NIF. Para o IRS de 2025, a entregar de 1 de abril a 30 de junho de 2026, verifique e confirme as faturas até 25 de fevereiro de 2026: sem validação, parte das despesas pode não entrar nas deduções. Limites principais: despesas gerais familiares — 35% até 250 € por contribuinte, saúde — 15% até 1 000 €, educação — 30% até 800 €, rendas de habitação — 15% até ao limite legal, IVA de restaurantes/reparações/veterinária/ginásios — até 250 € por agregado familiar.',
  tags: ['irs', 'efatura', 'deduções', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'O que é o e-Fatura e porque isto é dinheiro',
      content: [
        { kind: 'paragraph', text: 'O e-Fatura associa recibos e faturas ao seu NIF. Quando uma loja, clínica, restaurante, escola ou senhorio comunica uma fatura às Finanças, ela aparece na sua área pessoal. Estes dados são depois automaticamente transferidos para a declaração de IRS.' },
        { kind: 'paragraph', text: 'Para as despesas de 2025, a data-chave é 25 de fevereiro de 2026: até essa data deve confirmar as faturas pendentes, atribuir a categoria e corrigir erros. A declaração de IRS relativa a 2025 é entregue de 1 de abril a 30 de junho de 2026.' },
        { kind: 'checklist', items: [
          'Peça sempre para adicionar o NIF à fatura: “com número de contribuinte, por favor”.',
          'Verifique o e-Fatura pelo menos uma vez por trimestre, não apenas em fevereiro.',
          'São especialmente importantes saúde, educação, rendas, restaurantes, reparação automóvel/motociclos, cabeleireiros, veterinária, ginásios.',
          'Faturas sem NIF normalmente não dão direito a deduções no IRS.',
          'Se uma fatura estiver como “pendente”, pode não entrar na categoria correta sem a sua intervenção.',
          'Se tiver filhos, verifique separadamente o e-Fatura de cada membro do agregado familiar.'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Como entrar e o que verificar',
      content: [
        { kind: 'paragraph', text: 'Entre em faturas.portaldasfinancas.gov.pt com NIF + senha de acesso ou Chave Móvel Digital (CMD). Se tiver família, verifique o NIF de cada adulto e criança: as despesas são distribuídas pelos contribuintes.' },
        { kind: 'checklist', items: [
          'Abra “Despesas dedutíveis em IRS” — a visão geral das deduções.',
          'Abra “Verificar faturas” ou “Complementar Informação Faturas” — a lista de faturas com problemas.',
          'Verifique se existe algum estado “pendente”.',
          'Atribua o setor da despesa: saúde, educação, habitação, lares, despesas gerais familiares ou outro.',
          'Para despesas mistas, indique se a compra está relacionada com a atividade profissional.',
          'Guarde as alterações e volte a verificar a página final das deduções.',
          'Descarregue ou guarde as faturas contestáveis: farmácias, escolas, rendas, despesas médicas elevadas.'
        ] },
        { kind: 'warning', text: 'A senha das Finanças não chega instantaneamente: se é um novo residente com NIF, peça a senha de acesso com antecedência. Em fevereiro, devido à carga, o portal pode funcionar lentamente.' }
      ]
    },
    {
      id: 'categories',
      title: 'Categorias de deduções de IRS em 2026',
      content: [
        { kind: 'paragraph', text: 'Abaixo estão as principais deduções que normalmente são visíveis através do e-Fatura e do Portal das Finanças para a declaração de IRS. Os limites aplicam-se de acordo com as regras do Código do IRS e podem ainda ser limitados pelo teto global de deduções, consoante o rendimento da família.' },
        { kind: 'checklist', items: [
          'Despesas gerais familiares: 35% das despesas, máximo de 250 € por contribuinte; para uma família com dois adultos, normalmente até 500 €.',
          'Monoparental: para família monoparental, a taxa nas despesas gerais familiares é de 45%, máximo de 335 €.',
          'Saúde: 15% das despesas de saúde, máximo de 1 000 € por agregado familiar; despesas com IVA a 23% normalmente exigem receita médica.',
          'Educação e formação: 30% das despesas, limite global de 800 €; incluem escolas, universidades, creche, livros escolares, formação com o CAE correto.',
          'Habitação — rendas: 15% das rendas de habitação permanente, se o contrato estiver registado nas Finanças e forem emitidos recibos de renda eletrónicos.',
          'Lares: 25% das despesas com lares e apoio a familiares idosos, com um limite próprio.',
          'Exigência de fatura: parte do IVA de restaurantes, alojamento, cabeleireiros, reparação automóvel/motociclos, veterinária, ginásios e passes mensais; o limite global é normalmente de 250 € por agregado familiar.'
        ] },
        { kind: 'warning', text: 'A existência de uma fatura no e-Fatura não significa o reembolso automático de todo o valor. A dedução no IRS reduz o imposto a pagar, não devolve o custo da compra. Se o IRS retido tiver sido baixo, o reembolso efetivo pode ser inferior ao limite visível.' }
      ]
    },
    {
      id: 'validate',
      title: 'Validação até 25 de fevereiro: onde clicar',
      content: [
        { kind: 'substeps', items: [
          { id: 'pending', title: '1. Tratar as “Faturas Pendentes”', content: [
            { kind: 'paragraph', text: 'Abra cada fatura com o estado pendente. O sistema pede para escolher o setor porque o vendedor tem vários tipos de atividade ou porque os dados estão incompletos.' },
            { kind: 'checklist', items: [
              'Farmácia: escolha saúde; se houver IVA a 23%, assinale a existência de receita médica apenas se ela existir de facto.',
              'Escola, universidade, creche: escolha educação, se o fornecedor tiver um CAE adequado.',
              'Restaurante ou café: normalmente restauração e alojamento para dedução de parte do IVA.',
              'Oficina: manutenção e reparação de veículos automóveis ou motociclos.',
              'Ginásio: atividades de clubes desportivos / ginásios, se for apresentado o setor correspondente.'
            ] }
          ] },
          { id: 'professional', title: '2. Assinalar despesas profissionais', content: [
            { kind: 'paragraph', text: 'Se está em recibos verdes ou tem atividade aberta, algumas faturas podem apresentar a pergunta “Âmbito da atividade profissional?”. Para despesas pessoais, responda “Não”; para despesas da atividade, responda “Sim” total ou parcialmente, se o portal permitir indicar uma percentagem.' }
          ] },
          { id: 'children', title: '3. Verificar filhos e cônjuge', content: [
            { kind: 'paragraph', text: 'As despesas das crianças entram muitas vezes no NIF da própria criança: escola, creche, explicações, saúde. Entre no e-Fatura de cada dependente com o respetivo NIF e senha das Finanças ou através do acesso de representante, se estiver configurado.' }
          ] }
        ] }
      ]
    },
    {
      id: 'missing-or-wrong',
      title: 'Se a fatura não aparece ou a categoria está errada',
      content: [
        { kind: 'paragraph', text: 'Os vendedores normalmente comunicam as faturas até ao dia 5 do mês seguinte, mas podem existir atrasos. Se em fevereiro a fatura ainda não aparecer, pode registá-la manualmente através de “Registar Faturas”, mas guarde o original: as Finanças podem pedir comprovativo.' },
        { kind: 'checklist', items: [
          'Verifique se o NIF foi impresso corretamente na fatura.',
          'Compare a data, o valor, o NIF do vendedor e o número da fatura.',
          'Se o NIF não foi acrescentado no momento do pagamento, normalmente não é possível corrigir depois através do e-Fatura — peça ao vendedor para anular e emitir uma fatura correta, se ainda for possível.',
          'Se a categoria estiver errada, tente alterá-la em “Complementar Informação”.',
          'Se o portal não permitir escolher educação/saúde, o problema pode estar no CAE do vendedor; peça ao fornecedor uma fatura correta ou uma explicação.',
          'Para rendas, verifique não o e-Fatura, mas os recibos de renda eletrónicos e o contrato de arrendamento no Portal das Finanças.',
          'Depois de 25 de fevereiro, as correções são mais difíceis: alguns dados podem ser contestados mais tarde durante o período de reclamação, mas é melhor não contar com isso.'
        ] },
        { kind: 'warning', text: 'Não adicione manualmente faturas fictícias ou já consideradas. Duplicados e despesas não comprovadas podem levar a uma correção do IRS, juros compensatórios e coimas.' }
      ]
    },
    {
      id: 'irs-filing',
      title: 'Como isto entra na declaração de IRS',
      content: [
        { kind: 'paragraph', text: 'Depois do fecho do e-Fatura, as Finanças calculam as deduções à coleta. Antes de entregar o IRS, verifique a página “Despesas para Deduções à Coleta” e depois o Modelo 3 ou o IRS Automático, se estiver disponível para si.' },
        { kind: 'checklist', items: [
          'Até 15 de março, normalmente ficam visíveis os valores finais das deduções.',
          'De 15 a 31 de março, normalmente é possível reclamar despesas gerais familiares e exigência de fatura, se os valores estiverem incorretos.',
          'De 1 de abril a 30 de junho de 2026 entrega-se o IRS relativo a 2025.',
          'Antes de submeter a declaração, simule o resultado: “Simular”.',
          'Compare tributação conjunta e separada, se for casado ou viver em união de facto.',
          'Se se mudou recentemente, verifique a residência fiscal: um residente em Portugal declara o rendimento mundial, um não residente declara apenas rendimentos portugueses.',
          'Guarde o comprovativo de entrega e a liquidação IRS quando esta ficar disponível.'
        ] },
        { kind: 'warning', text: 'O e-Fatura não substitui a verificação fiscal da declaração. Para situações de expat — rendimento do estrangeiro, remote work, IFICI, cripto, venda de bens, dupla residência — é melhor verificar separadamente o Modelo 3 e os anexos.' }
      ]
    }
  ],
  costs: [
    { label: 'Acesso ao e-Fatura', amountEUR: 0, note: 'Gratuito através do Portal das Finanças.' },
    { label: 'Senha de acesso às Finanças', amountEUR: 0, note: 'Pedida gratuitamente; a carta chega à morada fiscal.' },
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
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Manual_e-Fatura.pdf',
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
