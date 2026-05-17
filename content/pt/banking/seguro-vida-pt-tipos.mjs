export default {
  editorialVoice: 'hackportugal',
  id: 'seguro-vida-pt-tipos',
  categoryId: 'banking',
  title: 'Seguro de vida em Portugal: tipos e requisitos dos bancos',
  tldr: 'O seguro de vida em Portugal é mais frequentemente necessário para o crédito habitação: a lei não o torna expressamente obrigatório, mas os bancos quase sempre exigem uma apólice com cobertura de morte e invalidez, normalmente pelo valor do empréstimo. Pode contratar o seguro no banco — CGD, Millennium e outros oferecem frequentemente um desconto no spread — ou junto de uma seguradora externa como a Fidelidade, Generali, Zurich. Intervalo típico em 2026: 15–100 €/mês, dependendo muito da idade, saúde, capital e cobertura IAD/ITP.',
  tags: ['seguro', 'crédito habitação', 'banco', 'vida'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o seguro de vida',
      content: [
        { kind: 'paragraph', text: 'Seguro de vida é um contrato pelo qual a seguradora paga o capital seguro ao beneficiário indicado em caso de morte da pessoa segura ou quando ocorre um risco adicional: invalidez, doença grave, incapacidade temporária para o trabalho. No contexto do crédito habitação, o banco é normalmente o beneficiário ou o destinatário do montante até ao limite do capital em dívida.' },
        { kind: 'paragraph', text: 'Em Portugal, o seguro de vida não é universalmente obrigatório para todos os residentes. Torna-se uma necessidade prática no crédito habitação: o banco não quer assumir o risco de incumprimento do empréstimo se o mutuário morrer ou ficar incapacitado para o trabalho.' },
        { kind: 'checklist', items: [
          'Risco principal: morte — morte da pessoa segura',
          'Cobertura adicional frequente: IAD — Invalidez Absoluta e Definitiva',
          'Cobertura mais ampla: ITP — Invalidez Total e Permanente',
          'Capital seguro — montante que a seguradora pagará',
          'Beneficiário — destinatário da indemnização; no crédito habitação é frequentemente o banco',
          'Tomador do seguro — quem celebra e paga o contrato',
          'Pessoa segura — cuja vida está segurada',
          'Prémio — pagamento mensal, trimestral ou anual'
        ] }
      ]
    },
    {
      id: 'types',
      title: 'Tipos principais: term life, whole life, apólice para crédito habitação',
      content: [
        { kind: 'substeps', items: [
          { id: 'term-life', title: 'Term life / temporário', content: [
            { kind: 'paragraph', text: 'É o formato mais comum. A apólice vigora por um prazo limitado: por exemplo, 10, 20, 30 anos ou até ao fim do crédito habitação. Se o sinistro não ocorrer, não há pagamentos. É a opção mais barata para proteger a família ou o banco.' }
          ] },
          { id: 'mortgage-life', title: 'Seguro de vida crédito habitação', content: [
            { kind: 'paragraph', text: 'É a versão do term life para crédito habitação. O capital seguro pode ser constante — um montante fixo durante todo o prazo, ou decrescente — diminui juntamente com o capital em dívida. O capital decrescente é normalmente mais barato, porque o risco segurado para a seguradora diminui.' }
          ] },
          { id: 'whole-life', title: 'Whole life / vida inteira', content: [
            { kind: 'paragraph', text: 'A cobertura vitalícia é menos comum e custa mais. Pode ser usada para planeamento sucessório ou protecção da família, mas, para um crédito habitação comum, os bancos aceitam mais frequentemente uma apólice temporária pelo prazo do empréstimo.' }
          ] },
          { id: 'mixed-savings', title: 'Produtos mistos e de poupança', content: [
            { kind: 'paragraph', text: 'Alguns produtos do ramo vida combinam seguro e investimento/poupança. Não são equivalentes a um seguro de vida simples para crédito habitação: comissões, risco, liquidez e regime fiscal devem ser analisados separadamente na informação pré-contratual.' }
          ] }
        ] }
      ]
    },
    {
      id: 'bank-requirements',
      title: 'O que os bancos exigem no crédito habitação 🏦',
      content: [
        { kind: 'paragraph', text: 'CGD, Millennium bcp, Santander, Novobanco, BPI e outros bancos exigem normalmente que a vida de todos os principais mutuários esteja segurada. Formalmente, o cliente pode escolher uma seguradora externa, mas o banco pode oferecer um desconto no spread se você contratar o pacote junto da seguradora parceira.' },
        { kind: 'checklist', items: [
          'O capital seguro é normalmente igual ao valor do empréstimo ou ao outstanding debt actual',
          'Prazo da apólice — pelo menos até ao fim do empréstimo',
          'A cobertura de morte é quase sempre obrigatória',
          'A IAD é frequentemente a cobertura mínima de invalidez aceite',
          'A ITP é mais cara, mas protege melhor o mutuário: o gatilho de pagamento é menos exigente do que na IAD',
          'O banco pede para ser indicado como beneficiário/credor hipotecário até ao limite do capital em dívida',
          'Com dois mutuários, a cobertura pode ser 50/50, 100/100 ou proporcional ao rendimento',
          'A não residentes e novos expats podem ser pedidos questionário médico, análises ou relatório médico',
          'Em caso de recusa da apólice do banco, o banco pode recalcular o spread e retirar a bonificação',
          'Antes de assinar, peça a FINE do empréstimo e uma simulação com a apólice do banco e sem ela'
        ] },
        { kind: 'warning', text: 'O banco não deve ocultar o custo do seguro dentro do empréstimo. Compare o MTIC, TAN, TAEG e o preço do seguro de vida separadamente. Um spread barato pode ser anulado por um seguro caro do banco.' }
      ]
    },
    {
      id: 'costs',
      title: 'Quanto custa em 2026',
      content: [
        { kind: 'paragraph', text: 'Para uma pessoa saudável de 25–40 anos, um seguro de vida básico para crédito habitação começa frequentemente em cerca de 15–30 €/mês. Depois dos 45–50 anos, o preço aumenta rapidamente. Para um casal, um empréstimo elevado, cobertura ITP e capital seguro de 250 000–400 000 €, o pagamento mensal pode ser 50–100 € ou mais.' },
        { kind: 'checklist', items: [
          'Idade: o principal factor; cada ano pode aumentar o prémio',
          'Valor do empréstimo / capital seguro: 100 000 € e 400 000 € dão preços diferentes',
          'Prazo: 30–40 anos é mais caro do que um prazo curto',
          'A IAD é mais barata, a ITP é mais cara, mas mais útil',
          'Fumar quase sempre aumenta o custo',
          'IMC, diabetes, oncologia, doenças cardiovasculares influenciam a aceitação e as exclusões',
          'Profissão e desportos perigosos podem originar agravamento',
          'O capital decrescente é normalmente mais barato do que o constante',
          'O pagamento anual é por vezes mais barato do que o mensal',
          'O pacote bancário nem sempre é mais barato do que um seguro externo da Fidelidade, Generali, Zurich, Allianz ou Ageas'
        ] },
        { kind: 'paragraph', text: 'Abordagem prática: peça pelo menos 3 simulações — ao banco, a um mediador de seguros independente e directamente a uma grande seguradora. Compare não só o preço, mas também a definição de invalidez, exclusões, carências, atualização do prémio e a possibilidade de resolver antecipadamente o contrato.' }
      ]
    },
    {
      id: 'tax-beneficiaries',
      title: 'Beneficiário e impostos: IRS e Imposto do Selo',
      content: [
        { kind: 'paragraph', text: 'Na apólice é importante indicar o beneficiário. No crédito habitação, o banco recebe o montante necessário para liquidar a dívida; o remanescente, se previsto no contrato, pode passar para a família ou para outros beneficiários indicados. Se o beneficiário não for indicado, o pagamento pode seguir as regras do contrato e da sucessão, o que atrasa o processo.' },
        { kind: 'paragraph', text: 'Num seguro de vida de risco comum, o pagamento por morte normalmente não é considerado salário nem rendimento empresarial para efeitos de IRS. O Imposto do Selo em Portugal aplica-se a heranças e transmissões gratuitas à taxa de 10%, mas cônjuges, união de facto nos casos reconhecidos, filhos, netos, pais e avós estão isentos desta taxa de 10% para heranças/doações.' },
        { kind: 'warning', text: 'O regime fiscal depende do produto. Risk life puro, ramo vida de poupança, unit-linked e resgate da apólice em vida são tributados de formas diferentes. Se o montante for significativo ou o beneficiário não for um familiar próximo, verifique o contrato, a declaração fiscal da seguradora e a posição do contabilista antes do pagamento.' },
        { kind: 'checklist', items: [
          'Indique expressamente o beneficiário: nome, NIF, data de nascimento, relação',
          'No crédito habitação, verifique quem recebe o remanescente acima da dívida',
          'Após o nascimento de um filho, divórcio ou casamento, actualize o beneficiário',
          'Guarde a apólice, condições particulares e recibos de prémio',
          'Comunique à seguradora alterações de morada, NIF e conta bancária',
          'Não oculte doenças no questionário: isso cria risco de recusa do pagamento',
          'Para uma família internacional, verifique se não existe conflito com os impostos de outro país'
        ] }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'Como contratar sem pagar a mais',
      content: [
        { kind: 'checklist', items: [
          'Defina o objectivo: crédito habitação, protecção da família, parceiro de negócio, planeamento sucessório',
          'Decida o capital seguro: capital em dívida, 3–5 anos de despesas familiares ou outro montante',
          'Escolha a cobertura: morte + IAD ou morte + ITP',
          'Peça ao banco as condições por escrito: que coberturas e beneficiário são obrigatórios',
          'Recolha propostas do banco e de insurers/mediadores externos',
          'Compare exclusões: suicide period, pre-existing conditions, risky sports, war, alcohol/drugs',
          'Verifique se o prémio aumenta anualmente com a idade ou se é fixo',
          'Confirme se pode substituir a apólice após a concessão do empréstimo sem penalização',
          'Assine apenas depois de receber as condições gerais e condições particulares',
          'Configure direct debit e acompanhe para que a apólice não termine por falta de pagamento'
        ] },
        { kind: 'warning', text: 'Se mudar de seguradora depois de obter o crédito habitação, obtenha primeiro o consentimento escrito do banco para a nova apólice. Caso contrário, pode violar as condições do crédito habitação e perder o desconto no spread.' }
      ]
    }
  ],
  costs: [
    { label: 'Term life básico para jovem mutuário', amountEURMin: 15, amountEURMax: 30, note: 'Referência mensal com capital seguro baixo e sem historial médico complexo' },
    { label: 'Seguro de vida para crédito habitação com IAD/ITP', amountEURMin: 30, amountEURMax: 100, note: 'Intervalo mensal típico; idade 45+, tabagismo e empréstimo elevado podem resultar num preço superior a 100 €' },
    { label: 'Exames médicos para underwriting', amountEURMin: 0, amountEURMax: 150, note: 'Por vezes pagos pela seguradora, por vezes pelo cliente; depende do montante e da idade' }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros e Fundos de Pensões: seguro de vida e direitos do cliente', url: 'https://www.asf.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fidelidade — Seguro Vida e Seguro Vida Crédito Habitação', url: 'https://www.fidelidade.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — crédito habitação, FINE, TAEG e produtos associados', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Jurídico do Contrato de Seguro — Decreto-Lei 72/2008', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2008-34561275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
