export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-h-deducoes',
  categoryId: 'taxes',
  title: 'IRS Anexo H: todas as deduções de saúde, educação, lares e imóvel',
  tldr: 'O Anexo H no Modelo 3 IRS é o local onde, na declaração de 2026 relativa aos rendimentos de 2025, se verificam e, se necessário, corrigem as deduções: saúde 15% até 1 000 € por família, educação 30% até 800 €, lares 25% até 403,75 €, renda de habitação 15% até 502 €, juros de crédito à habitação antigo até 296 €. A maioria dos valores é puxada automaticamente do e-Fatura, mas se fizer correções manuais — guarde as faturas durante 4 anos. O Abono de família não é declarado como rendimento; “casamento jovem 750 €” não é uma linha padrão do Anexo H.',
  tags: ['irs', 'anexo-h', 'deduções', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-anexo-h-does',
      title: 'Para que serve o Anexo H',
      content: [
        { kind: 'paragraph', text: 'O Anexo H é um anexo ao Modelo 3 IRS para benefícios fiscais e deduções à coleta. Para um expat comum, é importante sobretudo por causa das despesas que as Finanças puxam do e-Fatura: medicina, educação, lares, renda de habitação e juros de créditos à habitação antigos.' },
        { kind: 'paragraph', text: 'A declaração de IRS em 2026 é entregue relativamente aos rendimentos de 2025, de 1 de abril a 30 de junho de 2026. Se entregar o IRS Automático, o Anexo H normalmente não é preenchido manualmente, mas os valores devem, ainda assim, ser verificados na simulação.' },
        { kind: 'checklist', items: [
          'Verifique o e-Fatura: o NIF deve constar da fatura no momento da compra ou do pagamento.',
          'As despesas da família são consideradas por household: cônjuges/união de facto e dependentes.',
          'Se os valores das Finanças estiverem corretos — em regra, deixe os valores automáticos.',
          'Se alterar valores manualmente no Anexo H, assume a obrigação de os comprovar com documentos.',
          'Guarde faturas, recibos e contrato de arrendamento durante, pelo menos, 4 anos.',
          'As despesas no estrangeiro dentro da UE/EEE podem ser declaradas, mas são necessários documentos e uma ligação ao seu NIF/residência fiscal.',
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
          'Saúde: 15% das despesas de saúde, máximo 1 000 € por household. Inclui consultas, análises, hospital, farmácia, prémios de seguros de saúde, se forem reconhecidos como saúde.',
          'Saúde com IVA a 23% só conta se existir receita ou justificação médica no e-Fatura.',
          'Educação e formação: 30% das despesas, máximo 800 € por household. Escolas, universidades, Creche, manuais escolares, propinas, cursos reconhecidos.',
          'Estudante deslocado: a renda de habitação de um estudante longe da morada permanente pode entrar em educação com o contrato de arrendamento correto e registo no Portal das Finanças; o limite global de educação pode aumentar segundo regras especiais.',
          'Lares: 25% das despesas com lares, apoio domiciliário e instituições semelhantes, máximo 403,75 €.',
          'Imóvel — renda de habitação permanente: 15% das rendas por contrato de arrendamento, máximo 502 €.',
          'Imóvel — juros de crédito à habitação: a dedução de juros de crédito à habitação aplica-se sobretudo a créditos antigos, celebrados até 31.12.2011, máximo 296 €.',
          'IMI, condomínio, obras e mobiliário não se tornam dedução no Anexo H apenas por estarem relacionados com a habitação.'
        ] },
        { kind: 'warning', text: 'Os limites “1 000 € / 800 € / 403,75 € / 502 € / 296 €” são a dedução máxima ao imposto, não o montante das despesas. Por exemplo, para obter 1 000 € em saúde, é necessário ter cerca de 6 666,67 € de despesas médicas reconhecidas.' }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'Como verificar e corrigir no Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar na declaração de IRS', content: [
            { kind: 'paragraph', text: 'Aceda ao Portal das Finanças → IRS → Entregar Declaração → Modelo 3. Precisa do NIF e da palavra-passe das Finanças ou da Chave Móvel Digital (CMD).' }
          ] },
          { id: 'open-h', title: '2. Abrir o Anexo H', content: [
            { kind: 'paragraph', text: 'Adicione o Anexo H se estiver a entregar uma declaração que não seja totalmente automática ou se quiser verificar as deduções à coleta. Numa declaração familiar, existe um Anexo H por household.' }
          ] },
          { id: 'choose-values', title: '3. Decidir: valores automáticos ou introdução manual', content: [
            { kind: 'paragraph', text: 'Na secção das despesas, as Finanças mostram os valores calculados com base no e-Fatura e nos dados dos contratos de arrendamento. Se escolher a correção manual, os valores do Anexo H substituem os dados automáticos na categoria correspondente.' },
            { kind: 'checklist', items: [
              'Compare saúde com farmácias, CUF/Luz/hospitais, seguradora e recibos.',
              'Compare educação com escolas, universidades, Creche, propinas e manuais escolares.',
              'Verifique se o contrato de arrendamento foi registado pelo senhorio nas Finanças.',
              'Para rendas, verifique os recibos de renda eletrónicos ou a declaração anual, se o senhorio estiver dispensado de recibos eletrónicos.',
              'Para juros de crédito à habitação, verifique a declaração anual do banco.',
              'Se a despesa pertencer a uma criança, confirme que a criança está indicada como dependente na sua declaração.'
            ] }
          ] },
          { id: 'simulate', title: '4. Fazer a simulação antes de entregar', content: [
            { kind: 'paragraph', text: 'Clique em Simular e compare o resultado com a opção sem correções manuais. Por vezes, a correção de uma linha não gera poupança por causa do limite global das deduções ou de um imposto a pagar baixo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'limits-and-income-cap',
      title: 'Porque a dedução pode não funcionar na totalidade',
      content: [
        { kind: 'paragraph', text: 'As deduções portuguesas reduzem o IRS à coleta, ou seja, o imposto já calculado. Se o imposto a pagar for baixo, a parte não utilizada da dedução normalmente não é reembolsada para além do IRS retido/pago.' },
        { kind: 'checklist', items: [
          'Existe um limite separado por cada categoria: saúde, educação, lares, imóvel.',
          'Existe um limite global de deduções à coleta, que depende do rendimento coletável do household.',
          'Para rendimentos baixos, o limite global é mais favorável; para rendimentos elevados, reduz-se.',
          'Famílias com 3 ou mais dependentes recebem um aumento do limite global de 5% por cada dependente.',
          'Se for não residente para efeitos de IRS, a disponibilidade de parte das deduções depende do regime escolhido e da proporção de rendimentos provenientes de Portugal/UE.',
          'Se se tornou residente a meio do ano, verifique o estatuto de residência e o período de permanência: isto afeta a declaração mais do que o Anexo H.',
          'IFICI/NHR, IRS Jovem e outros regimes de tributação de rendimentos não são “despesas” do Anexo H.'
        ] },
        { kind: 'warning', text: 'Não se oriente apenas pelo e-Fatura. A existência de uma fatura no e-Fatura não garante a dedução integral: a categoria, o NIF, o tipo de IVA, o documento comprovativo e o limite global de IRS são importantes.' }
      ]
    },
    {
      id: 'family-abono-casamento',
      title: 'Crianças, Abono de família e “casamento jovem 750 €”',
      content: [
        { kind: 'paragraph', text: 'O Abono de família é uma prestação social da Segurança Social. Não é um rendimento normal sujeito a IRS e não é declarado como despesa no Anexo H. As deduções fiscais por dependentes são normalmente calculadas automaticamente, se as crianças estiverem corretamente indicadas no household.' },
        { kind: 'checklist', items: [
          'Verifique a composição do agregado familiar no Portal das Finanças antes de entregar a declaração.',
          'Indique os dependentes com NIF; sem o NIF da criança, parte das deduções automáticas e do e-Fatura pode perder-se.',
          'As despesas da criança com saúde e educação devem ter o NIF da criança ou estar corretamente associadas ao household.',
          'Pais divorciados devem verificar a residência alternada e a repartição das despesas.',
          'O Abono de família não precisa de ser “adicionado” ao Anexo H como rendimento ou dedução.',
          'As deduções fixas por dependentes são calculadas separadamente dos limites de saúde/educação.'
        ] },
        { kind: 'warning', text: 'A nível nacional, em IRS, à data de 28.04.2026, não existe uma linha padrão do Anexo H “casamento jovem 750 €” que possa simplesmente ser inserida como dedução. Se nos media ou junto de um consultor surgir “750 € por casamento jovem”, verifique o código oficial do benefício no Portal das Finanças: pode estar relacionado com outro regime, uma medida regional ou o IRS Jovem, mas não com as despesas normais de saúde/educação/lares/imóvel.' }
      ]
    },
    {
      id: 'documents',
      title: 'O que guardar em caso de verificação',
      content: [
        { kind: 'paragraph', text: 'As Finanças podem pedir comprovativos após a entrega da declaração. As dúvidas surgem com especial frequência em correções manuais no Anexo H, faturas estrangeiras, arrendamento e despesas médicas com IVA a 23%.' },
        { kind: 'checklist', items: [
          'Faturas-recibo e recibos com o NIF do pagador ou do dependente.',
          'Receitas médicas para bens/serviços com IVA a 23%.',
          'Declarações da seguradora sobre pagamentos médicos e reembolsos.',
          'Faturas de escolas, universidades, Creche, centros de formação.',
          'Contrato de arrendamento, recibos de renda e confirmação de que a habitação é habitação permanente.',
          'Declaração anual do banco relativa a juros de crédito à habitação, se o crédito for antigo e se enquadrar no regime.',
          'Documentos de lares ou apoio domiciliário com o NIF da instituição.',
          'Comprovativo do estatuto de dependente, se a criança estudar, viver separada ou existir residência alternada.',
          'Documentos relativos a despesas estrangeiras com tradução, se necessário.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Entrega do Modelo 3 IRS através do Portal das Finanças', amountEUR: 0, note: 'A entrega online por conta própria é gratuita.' },
    { label: 'Apoio típico de contabilista com o IRS', amountEURMin: 40, amountEURMax: 120, note: 'O preço depende do número de anexos, de rendimentos estrangeiros e de correções manuais no Anexo H.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, deduções à coleta e entrega da declaração',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/IRS.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — despesas para dedução à coleta / e-Fatura',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/Despesas-deducao-coleta.aspx',
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
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
