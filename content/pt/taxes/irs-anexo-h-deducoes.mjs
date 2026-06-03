export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-h-deducoes',
  categoryId: 'taxes',
  title: 'IRS Anexo H: todas as deduções de saúde, educação, lares e imóvel',
  tldr: 'O Anexo H no Modelo 3 IRS é o local onde, na declaração de 2026 relativa aos rendimentos de 2025, se verificam e, se necessário, se corrigem as deduções: saúde 15% até 1 000 € por família, educação 30% até 800 €, lares 25% até 403,75 €, renda de habitação 15% até 700–800 € (OE 2024/25), juros de crédito à habitação antigo até 296 €. A maioria dos valores é importada automaticamente do e-Fatura, mas, se fizer correções manuais, guarde as faturas durante 4 anos. O abono de família não é declarado como rendimento; “casamento jovem 750 €” não é uma linha padrão do Anexo H.',
  tags: ['irs', 'anexo-h', 'deduções', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-anexo-h-does',
      title: 'Para que serve o Anexo H',
      content: [
        { kind: 'paragraph', text: 'O Anexo H é um anexo ao Modelo 3 IRS para benefícios fiscais e deduções à coleta. Para um expat comum, é importante sobretudo por causa das despesas que as Finanças importam do e-Fatura: saúde, educação, lares, renda de habitação e juros de créditos à habitação antigos.' },
        { kind: 'paragraph', text: 'A declaração de IRS em 2026 é entregue relativamente aos rendimentos de 2025, de 1 de abril a 30 de junho de 2026. Se entregar o IRS Automático, o Anexo H normalmente não é preenchido manualmente, mas os valores devem, ainda assim, ser verificados na simulação.' },
        { kind: 'checklist', items: [
          'Verifique o e-Fatura: o NIF deve constar da fatura no momento da compra ou do pagamento.',
          'As despesas da família são consideradas por household: cônjuges/união de facto e dependentes.',
          'Se os valores das Finanças estiverem corretos — normalmente mantenha os valores automáticos.',
          'Se alterar manualmente valores no Anexo H, assume a obrigação de os comprovar com documentos.',
          'Guarde faturas, recibos e contrato de arrendamento durante pelo menos 4 anos.',
          'As despesas no estrangeiro dentro da UE/EEE podem ser declaradas, mas são necessários documentos e ligação ao seu NIF/residência fiscal.',
          'O Anexo H não substitui o Anexo J para rendimentos estrangeiros e não trata do IRS Jovem.'
        ] }
      ]
    },
    {
      id: 'main-deductions',
      title: 'Principais deduções: saúde, educação, lares, imóvel',
      content: [
        { kind: 'paragraph', text: 'Limites principais para a declaração de IRS 2026 relativa a 2025:' },
        { kind: 'checklist', items: [
          'Saúde: 15% das despesas de saúde, máximo 1 000 € por household. Inclui consultas, análises, hospital, farmácia, prémios de seguro de saúde, se forem reconhecidos como saúde.',
          'Saúde com IVA a 23% só é aceite se existir receita ou justificação médica no e-Fatura.',
          'Educação e formação: 30% das despesas, máximo 800 € por household. Escolas, universidades, Creche, manuais escolares, propinas, cursos reconhecidos.',
          'Estudante deslocado: a renda de habitação de um estudante longe da morada permanente pode entrar em educação se houver contrato de arrendamento correto e registo no Portal das Finanças; o limite global de educação pode aumentar segundo regras especiais.',
          'Lares: 25% das despesas com lares, apoio domiciliário e instituições semelhantes, máximo 403,75 €.',
          'Imóvel — renda de habitação permanente: 15% das rendas ao abrigo de contrato de arrendamento, máximo 700–800 € (após indexação OE 2024/25).',
          'Imóvel — juros de crédito à habitação: a dedução por juros de crédito à habitação aplica-se sobretudo a créditos antigos, contratados até 31.12.2011, máximo 296 €.',
          'IMI, condomínio, obras e mobiliário não se tornam dedução do Anexo H apenas por estarem relacionados com a habitação.'
        ] },
        { kind: 'warning', text: 'Os limites “1 000 € (saúde) / 800 € (educação) / 403,75 € (lares) / 700–800 € (renda HPP) / 296 € (juros de crédito antigo)” são a dedução máxima ao imposto, não o valor das despesas.\n\nPor exemplo, para obter 1 000 € em saúde, é necessário ter cerca de 6 666,67 € de despesas de saúde reconhecidas.' }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'Como verificar e corrigir no Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar na declaração de IRS', content: [
            { kind: 'paragraph', text: 'Entre no Portal das Finanças → IRS → Entregar Declaração → Modelo 3. É necessário o NIF e a palavra-passe das Finanças ou a Chave Móvel Digital (CMD).' }
          ] },
          { id: 'open-h', title: '2. Abrir o Anexo H', content: [
            { kind: 'paragraph', text: 'Adicione o Anexo H se não estiver a entregar uma declaração totalmente automática ou se quiser verificar as deduções à coleta. Numa declaração conjunta, há um Anexo H por household.' }
          ] },
          { id: 'choose-values', title: '3. Decidir: valores automáticos ou introdução manual', content: [
            { kind: 'paragraph', text: 'Na secção de despesas, as Finanças mostram os valores calculados com base no e-Fatura e nos dados dos contratos de arrendamento. Se escolher correção manual, os valores do Anexo H substituem os dados automáticos da respetiva categoria.' },
            { kind: 'checklist', items: [
              'Confira saúde com farmácias, CUF/Luz/hospitais, seguradora e recibos.',
              'Confira educação com escolas, universidades, Creche, propinas e manuais escolares.',
              'Verifique se o contrato de arrendamento foi registado pelo senhorio nas Finanças.',
              'Para rendas, verifique os recibos de renda eletrónicos ou a declaração anual, se o senhorio estiver dispensado de recibos eletrónicos.',
              'Para juros de crédito à habitação, verifique a declaração anual do banco.',
              'Se a despesa pertencer a uma criança, certifique-se de que a criança está indicada como dependente na sua declaração.'
            ] }
          ] },
          { id: 'simulate', title: '4. Fazer uma simulação antes de entregar', content: [
            { kind: 'paragraph', text: 'Clique em Simular e compare o resultado com a opção sem correções manuais. Por vezes, corrigir uma linha não gera poupança por causa do limite global das deduções ou por haver pouco imposto a pagar.' }
          ] }
        ] }
      ]
    },
    {
      id: 'limits-and-income-cap',
      title: 'Porque é que a dedução pode não funcionar por completo',
      content: [
        { kind: 'paragraph', text: 'As deduções portuguesas reduzem o IRS à coleta, ou seja, o imposto já calculado. Se o imposto a pagar for baixo, a parte não utilizada da dedução normalmente não é reembolsada para além do IRS retido/pago.' },
        { kind: 'checklist', items: [
          'Há um limite separado por cada categoria: saúde, educação, lares, imóvel.',
          'Há um limite global de deduções à coleta, que depende do rendimento coletável do household.',
          'Para rendimentos baixos, o limite global é mais favorável; para rendimentos elevados, reduz-se.',
          'Famílias com 3 ou mais dependentes beneficiam de um aumento do limite global de 5% por cada dependente.',
          'Se for não residente para efeitos de IRS, a disponibilidade de parte das deduções depende do regime escolhido e da percentagem de rendimentos provenientes de Portugal/UE.',
          'Se se tornou residente a meio do ano, verifique o estatuto de residência e o período de permanência: isto influencia a declaração mais do que o Anexo H.',
          'IFICI/NHR, IRS Jovem e outros regimes de tributação de rendimentos não são “despesas” do Anexo H.'
        ] },
        { kind: 'warning', text: 'Não se guie apenas pelo e-Fatura. A existência de uma fatura no e-Fatura não garante a dedução integral: contam a categoria, o NIF, o tipo de IVA, o documento comprovativo e o limite global de IRS.' }
      ]
    },
    {
      id: 'family-abono-casamento',
      title: 'Crianças, abono de família e “casamento jovem 750 €”',
      content: [
        { kind: 'paragraph', text: 'O abono de família é uma prestação social da Segurança Social. Não é um rendimento normal sujeito a IRS e não é declarado como despesa no Anexo H.\n\nAs deduções fiscais por dependentes normalmente são calculadas automaticamente, se as crianças estiverem corretamente indicadas no household.' },
        { kind: 'checklist', items: [
          'Verifique a composição do agregado familiar no Portal das Finanças antes de entregar a declaração.',
          'Indique dependentes com NIF; sem o NIF da criança, parte das deduções automáticas e do e-Fatura pode perder-se.',
          'As despesas da criança em saúde e educação devem estar associadas ao NIF da criança ou corretamente ligadas ao household.',
          'Pais divorciados devem verificar a residência alternada e a repartição das despesas.',
          'O abono de família não deve ser “adicionado” no Anexo H como rendimento ou dedução.',
          'As deduções fixas por dependentes são calculadas separadamente dos limites de saúde/educação.'
        ] },
        { kind: 'warning', text: 'A nível nacional, em IRS, à data de 03.05.2026, não existe uma linha padrão do Anexo H “casamento jovem 750 €” que possa simplesmente ser inscrita como dedução. Se nos media ou junto de um consultor surgir “750 € por casamento jovem”, confirme o código oficial do benefício no Portal das Finanças: pode dizer respeito a outro regime, a uma medida regional ou ao IRS Jovem, mas não às despesas comuns de saúde/educação/lares/imóvel.' }
      ]
    },
    {
      id: 'documents',
      title: 'O que guardar em caso de verificação',
      content: [
        { kind: 'paragraph', text: 'As Finanças podem pedir comprovativos após a entrega da declaração. As dúvidas surgem com especial frequência em correções manuais do Anexo H, faturas estrangeiras, rendas e despesas de saúde com IVA a 23%.' },
        { kind: 'checklist', items: [
          'Faturas-recibo e recibos com o NIF do pagador ou do dependente.',
          'Receitas médicas para bens/serviços com IVA a 23%.',
          'Declarações da seguradora sobre pagamentos médicos e reembolsos.',
          'Faturas de escolas, universidades, Creche, centros de formação.',
          'Contrato de arrendamento, recibos de renda e comprovativo de que a habitação é habitação permanente.',
          'Declaração anual do banco relativa a juros de crédito à habitação, se o crédito for antigo e enquadrável no regime.',
          'Documentos de lares ou apoio domiciliário com o NIF da instituição.',
          'Comprovativo do estatuto de dependente, se a criança estudar, viver separadamente ou existir residência alternada.',
          'Documentos relativos a despesas estrangeiras com tradução, se necessário.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Entrega do Modelo 3 IRS através do Portal das Finanças', amountEUR: 0, note: 'A entrega online feita pelo próprio é gratuita.' },
    { label: 'Apoio típico de contabilista com o IRS', amountEURMin: 40, amountEURMax: 120, note: 'O preço depende do número de anexos, de rendimentos estrangeiros e de correções manuais no Anexo H.' }
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
    },
    { title: 'AT — Folheto IRS deduções 2025', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/IRS_deducoes_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
