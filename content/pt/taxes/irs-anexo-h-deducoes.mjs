export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-h-deducoes',
  categoryId: 'taxes',
  title: 'IRS Anexo H: todas as deduções saúde, educação, lares e imóvel',
  tldr: 'O Anexo H no Modelo 3 do IRS é o local onde, na declaração de 2026 sobre rendimentos de 2025, se verificam e, se necessário, corrigem deduções: saúde 15% até 1 000 € por família, educação 30% até 800 €, lares 25% até 403,75 €, renda de habitação 15% até 700–800 € (OE 2024/25), juros de hipoteca antiga até 296 €. A maioria dos valores é importada automaticamente do e-Fatura, mas se corrigir manualmente, guarde as faturas 4 anos. Abono de família não se declara como rendimento; “casamento jovem 750 €” não é uma linha padrão do Anexo H.',
  tags: ['irs', 'anexo-h', 'deduções', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-anexo-h-does',
      title: 'O que faz o Anexo H',
      content: [
        { kind: 'paragraph', text: 'O Anexo H é o anexo do Modelo 3 do IRS para benefícios fiscais e deduções à coleta. Para um expat comum, é especialmente relevante pelas despesas que as Finanças importam do e-Fatura: saúde, educação, lares, rendas de habitação e juros antigos do crédito à habitação.' },
        { kind: 'paragraph', text: 'A declaração de IRS em 2026 é entregue pelos rendimentos de 2025 de 1 de abril a 30 de junho de 2026. Se apresentar IRS Automático, o Anexo H geralmente não é preenchido manualmente, mas os montantes devem ser verificados na simulação.' },
        { kind: 'checklist', items: [
          'Verifique o e-Fatura: o NIF tem de constar na fatura no momento da compra ou do pagamento.',
          'As despesas contam por agregado familiar: cônjuges/união de facto e dependentes.',
          'Se os montantes das Finanças estiverem corretos — normalmente mantenha os valores automáticos.',
          'Se alterar os montantes manualmente no Anexo H, assume a obrigação de os comprovar com documentos.',
          'Guarde faturas, recibos e o contrato de arrendamento durante pelo menos 4 anos.',
          'Despesas no estrangeiro na UE/EEE podem ser declaradas, mas exigem documentação e ligação ao seu NIF/residência fiscal.',
          'O Anexo H não substitui o Anexo J para rendimentos estrangeiros e não trata do IRS Jovem.'
        ] }
      ]
    },
    {
      id: 'main-deductions',
      title: 'Deduções principais: saúde, educação, lares, imóvel',
      content: [
        { kind: 'paragraph', text: 'Limites-chave para a declaração de IRS de 2026 sobre rendimentos de 2025:' },
        { kind: 'checklist', items: [
          'Saúde: 15% das despesas de saúde, máximo 1 000 € por agregado familiar. Inclui consultas, análises, hospital, farmácia, prémios de seguro de saúde, se forem reconhecidos como saúde.',
          'Despesas de saúde com IVA a 23% só contam se houver receita médica ou enquadramento médico no e-Fatura.',
          'Educação e formação: 30% das despesas, máximo 800 € por agregado familiar. Escolas, universidades, creche, manuais, propinas, cursos reconhecidos.',
          'Estudante deslocado: a renda de estudante longe da morada permanente pode integrar educação com o contrato de arrendamento correto e registo no Portal das Finanças; o limite global da educação pode aumentar por regras específicas.',
          'Lares: 25% das despesas com lares, apoio domiciliário e instituições similares, máximo 403,75 €.',
          'Imóvel — renda de habitação permanente: 15% das rendas por contrato de arrendamento, máximo 700–800 € (após indexação OE 2024/25).',
          'Imóvel — juros do crédito à habitação: a dedução aplica-se sobretudo a créditos celebrados até 31.12.2011, máximo 296 €.',
          'IMI, condomínio, obras e mobiliário não passam a dedução do Anexo H apenas por estarem relacionados com a habitação.'
        ] },
        { kind: 'warning', text: 'Os limites “1 000 € (saúde) / 800 € (educação) / 403,75 € (lares) / 700–800 € (renda HPP) / 296 € (juros de hipoteca antiga)” são o máximo dedutível ao imposto, não o montante de despesas. Por exemplo, para obter 1 000 € em saúde, é preciso ter cerca de 6 666,67 € de despesas médicas reconhecidas.' }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'Como verificar e corrigir no Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar na declaração de IRS', content: [
            { kind: 'paragraph', text: 'Aceda ao Portal das Finanças → IRS → Entregar Declaração → Modelo 3. Necessita do NIF e senha das Finanças ou Chave Móvel Digital (CMD).' }
          ] },
          { id: 'open-h', title: '2. Abrir o Anexo H', content: [
            { kind: 'paragraph', text: 'Adicione o Anexo H se estiver a apresentar uma declaração não totalmente automática ou se pretende verificar as deduções à coleta. Numa declaração conjunta existe um único Anexo H para o agregado familiar.' }
          ] },
          { id: 'choose-values', title: '3. Decidir: valores automáticos ou introdução manual', content: [
            { kind: 'paragraph', text: 'Na secção das despesas, as Finanças mostram os montantes calculados pelo e-Fatura e pelos dados dos contratos de arrendamento. Se optar por correção manual, os valores do Anexo H substituem os dados automáticos da categoria correspondente.' },
            { kind: 'checklist', items: [
              'Confronte saúde com farmácias, CUF/Luz/hospitais, seguradora e recibos.',
              'Confronte educação com escolas, universidades, creche, propinas e manuais.',
              'Confirme que o contrato de arrendamento está registado pelo senhorio nas Finanças.',
              'Para a renda, verifique os recibos de renda eletrónicos ou a declaração anual, se o senhorio estiver dispensado de recibos eletrónicos.',
              'Para os juros do crédito, confirme a declaração anual do banco.',
              'Se a despesa pertencer à criança, garanta que a criança está indicada como dependente na sua declaração.'
            ] }
          ] },
          { id: 'simulate', title: '4. Fazer simulação antes do envio', content: [
            { kind: 'paragraph', text: 'Carregue em Simular e compare o resultado com a versão sem correções manuais. Por vezes, corrigir uma linha não gera poupança devido ao limite global de deduções ou a imposto baixo a pagar.' }
          ] }
        ] }
      ]
    },
    {
      id: 'limits-and-income-cap',
      title: 'Porque a dedução pode não funcionar na totalidade',
      content: [
        { kind: 'paragraph', text: 'As deduções portuguesas diminuem o IRS à coleta, ou seja, o imposto já calculado. Se o imposto a pagar for baixo, a parte não utilizada da dedução geralmente não é devolvida para além do IRS retido/pago.' },
        { kind: 'checklist', items: [
          'Há um limite próprio por categoria: saúde, educação, lares, imóvel.',
          'Há um limite global das deduções à coleta, que depende do rendimento coletável do agregado familiar.',
          'Para rendimentos baixos o limite global é mais brando; para rendimentos elevados, reduz-se.',
          'Famílias com 3 ou mais dependentes obtêm aumento do limite global em 5% por cada dependente.',
          'Se for não residente para IRS, a disponibilidade de parte das deduções depende do regime escolhido e da proporção de rendimentos de Portugal/UE.',
          'Se se tornou residente a meio do ano, verifique o estatuto de residência e o período de permanência: isso afeta a declaração mais do que o Anexo H.',
          'IFICI/NHR, IRS Jovem e outros regimes de tributação de rendimentos não são “despesas” do Anexo H.'
        ] },
        { kind: 'warning', text: 'Não se baseie apenas no e-Fatura. Ter uma fatura no e-Fatura não garante a dedução integral: contam a categoria, o NIF, o tipo de IVA, o documento comprovativo e o limite global do IRS.' }
      ]
    },
    {
      id: 'family-abono-casamento',
      title: 'Crianças, abono de família e “casamento jovem 750 €”',
      content: [
        { kind: 'paragraph', text: 'O abono de família é uma prestação social da Segurança Social. Não é um rendimento tributável normal em IRS e não se declara como despesa no Anexo H. As deduções fiscais por dependentes são calculadas automaticamente, se as crianças estiverem corretamente indicadas no agregado familiar.' },
        { kind: 'checklist', items: [
          'Verifique a composição do agregado familiar no Portal das Finanças antes de submeter a declaração.',
          'Indique os dependentes com NIF; sem o NIF da criança, parte das deduções automáticas e do e-Fatura pode perder-se.',
          'As despesas da criança em saúde e educação devem trazer o NIF da criança ou estar corretamente associadas ao agregado familiar.',
          'Pais divorciados devem verificar a residência alternada e a repartição das despesas.',
          'O abono de família não precisa de ser “adicionado” ao Anexo H como rendimento ou dedução.',
          'As deduções fixas por dependentes contam-se separadamente dos limites de saúde/educação.'
        ] },
        { kind: 'warning', text: 'A nível nacional do IRS à data de 03.05.2026 não existe uma linha padrão do Anexo H “casamento jovem 750 €” que se possa simplesmente inserir como dedução. Se nos media ou com um consultor surgir “750 € por casamento jovem”, confirme o código oficial do benefício no Portal das Finanças: pode referir-se a outro regime, a uma medida regional ou ao IRS Jovem, mas não a despesas normais de saúde/educação/lares/imóvel.' }
      ]
    },
    {
      id: 'documents',
      title: 'O que guardar para uma eventual verificação',
      content: [
        { kind: 'paragraph', text: 'As Finanças podem solicitar comprovativos após a entrega da declaração. As questões surgem com frequência sobre correções manuais do Anexo H, faturas estrangeiras, rendas e despesas de saúde com IVA a 23%.' },
        { kind: 'checklist', items: [
          'Faturas-recibo e recibos com o NIF do pagador ou do dependente.',
          'Receitas médicas para bens/serviços com IVA a 23%.',
          'Declarações da seguradora sobre pagamentos médicos e reembolsos.',
          'Faturas de escolas, universidades, creche, centros de formação.',
          'Contrato de arrendamento, recibos de renda e comprovativo de que a habitação é permanente.',
          'Declaração anual do banco dos juros do crédito à habitação, se o crédito for antigo e se enquadrar no regime.',
          'Documentos dos lares ou do apoio domiciliário com o NIF da instituição.',
          'Comprovativo do estatuto de dependente, se a criança estudar, viver separadamente ou houver residência alternada.',
          'Documentos de despesas no estrangeiro com tradução, se necessário.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Entrega do Modelo 3 do IRS através do Portal das Finanças', amountEUR: 0, note: 'A submissão autónoma online é gratuita.' },
    { label: 'Apoio típico de um contabilista no IRS', amountEURMin: 40, amountEURMax: 120, note: 'O preço depende do número de anexos, de rendimentos estrangeiros e de correções manuais no Anexo H.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, deduções à coleta e entrega da declaração',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Rendimentos/Declaracao/Deducoes_a_coleta/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — despesas para dedução à coleta / e-Fatura',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Rendimentos/Declaracao/Deducoes_beneficios_taxas/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — artigos 78.º a 85.º sobre deduções à coleta',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Portal e-Fatura',
      url: 'https://faturas.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
,
    { title: 'AT — Folheto IRS deduções 2025', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/IRS_deducoes_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}
