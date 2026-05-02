export default {
  editorialVoice: 'hackportugal',
  id: 'centro-dia-idosos-bairro',
  categoryId: 'healthcare',
  title: 'Centro de Dia — apoio diurno a idosos',
  tldr: 'Centro de Dia — centro diurno para idosos: a pessoa vive em casa e, durante o dia, recebe alimentação, supervisão, actividades, ajuda com a higiene e muitas vezes transporte. Normalmente são geridos por IPSS/ Misericórdia/associação local, com horário aproximadamente 8:00–18:00 nos dias úteis. Em 2026, o preço é mais frequentemente 200–500 €/mês e depende dos rendimentos do agregado familiar; as vagas procuram-se através da Carta Social, Junta de Freguesia, Segurança Social e IPSS locais. É uma alternativa à ERPI se a família quiser manter o idoso em casa, mas não puder deixá-lo sozinho durante o dia.',
  tags: ['idosos', 'ipss', 'cuidados', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é um Centro de Dia',
      content: [
        { kind: 'paragraph', text: 'Centro de Dia é uma resposta social diurna para pessoas idosas que vivem em casa, mas precisam de apoio durante o dia. Não é um lar de idosos: não há pernoita, e a residência permanente continua a ser em casa da família ou do próprio idoso.' },
        { kind: 'paragraph', text: 'Formato típico: de manhã a pessoa é recolhida ou vem pelos seus próprios meios, no centro tem pequeno-almoço/almoço/lanche, actividades, vigilância, ajuda com higiene básica, toma de medicamentos segundo instruções da família/médico, socialização; ao fim do dia regressa a casa.' },
        { kind: 'checklist', items: [
          'Para idosos que não devem ficar sozinhos todo o dia',
          'Para famílias em que os familiares trabalham das 9:00 às 18:00',
          'Para pessoas com perda ligeira ou moderada de autonomia',
          'Para prevenir isolamento, depressão e quedas em casa',
          'Para quem ainda não precisa de ERPI ou para quem essa opção é psicologicamente difícil',
          'Para recuperar rotinas após hospitalização, se existir cuidado nocturno em casa'
        ] }
      ]
    },
    {
      id: 'services',
      title: 'O que normalmente está incluído 🧓',
      content: [
        { kind: 'paragraph', text: 'O conjunto de serviços depende da IPSS concreta e do acordo com a Segurança Social. Antes da inscrição, peça o regulamento interno e a tabela de comparticipações: aí está escrito o que está incluído, o que é pago à parte e como é calculada a mensalidade.' },
        { kind: 'checklist', items: [
          'Alimentação: normalmente pequeno-almoço, almoço e lanche; por vezes jantar para levar',
          'Actividades sociais e cognitivas: ginástica, memória, música, trabalhos manuais',
          'Vigilância durante o dia e contacto com a família em caso de agravamento do estado',
          'Ajuda com a higiene: lavar-se, banho em horário definido, troca de roupa — se o centro prestar esse serviço',
          'Apoio na toma de medicamentos segundo o esquema fornecido pela família/médico',
          'Transporte casa-centro-casa: existe frequentemente, mas o raio e o preço são limitados',
          'Festas, passeios, visitas culturais — por vezes com custo adicional',
          'Coordenação com Centro de Saúde ou médico de família quando necessário'
        ] },
        { kind: 'warning', text: 'O Centro de Dia não substitui internamento hospitalar, serviço de urgência, cuidador 24 horas por dia ou ERPI. Se houver demência com necessidade de cuidados 24/7, risco de fuga, agressividade, situação permanente de acamado ou episódios nocturnos — o centro pode recusar e propor ERPI, SAD ou cuidados continuados.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Onde procurar uma vaga',
      content: [
        { kind: 'paragraph', text: 'O caminho mais prático não é procurar o “melhor centro em Portugal”, mas sim as instituições mais próximas no seu concelho/freguesia: transportar o idoso todos os dias torna-se rapidamente a principal limitação.' },
        { kind: 'substeps', items: [
          { id: 'carta-social', title: '1. Verificar a Carta Social', content: [
            { kind: 'paragraph', text: 'Em cartasocial.pt seleccione distrito, concelho, freguesia e resposta social “Centro de Dia”. Nas fichas normalmente vê-se a entidade, morada, telefone, capacidade e por vezes a situação da resposta.' }
          ] },
          { id: 'local-network', title: '2. Perguntar na Junta de Freguesia e na Câmara Municipal', content: [
            { kind: 'paragraph', text: 'A Junta conhece muitas vezes as listas de espera reais, o transporte e as IPSS que aceitam residentes da zona. Em freguesias pequenas, isto é mais rápido do que esperar por uma resposta por email.' }
          ] },
          { id: 'social-security', title: '3. Contactar a Segurança Social', content: [
            { kind: 'paragraph', text: 'Se a situação for urgente — idoso sozinho, após alta hospitalar, família sem capacidade — peça atendimento social na Segurança Social. Podem encaminhar para a rede social local ou indicar respostas sociais com acordo de cooperação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-application',
      title: 'Documentos e inscrição',
      content: [
        { kind: 'paragraph', text: 'O conjunto de documentos varia, mas a IPSS quase sempre avalia dados pessoais, estado de saúde, rendimentos e situação familiar. Para um estrangeiro são importantes o NIF, a morada e a permanência legal; a autorização de residência ajuda, mas um centro concreto pode aceitar documentos com visto, CRUE ou outro estatuto — confirme antecipadamente.' },
        { kind: 'checklist', items: [
          'Documento do idoso: Cartão de Cidadão, autorização de residência ou passaporte',
          'NIF do idoso e, muitas vezes, NIF do familiar responsável',
          'Número de utente SNS e contacto do Centro de Saúde/médico de família',
          'Lista de diagnósticos, medicamentos, alergias e restrições alimentares',
          'Relatório médico, se houver demência, diabetes, incapacidade, quedas, incontinência',
          'Comprovativo de morada: atestado de residência, contrato de arrendamento ou factura de utilities',
          'Comprovativos de rendimentos: pensão, IRS, declaração da Segurança Social, extractos bancários — conforme exigido',
          'Contactos da pessoa responsável e autorizações para contacto de emergência',
          'Se necessário: atestado médico de incapacidade multiuso'
        ] },
        { kind: 'paragraph', text: 'Após a candidatura, normalmente é feita uma entrevista social: perguntam com quem vive o idoso, quem o vai buscar ao fim do dia, se há escadas/elevador, se precisa de transporte, se consegue comer sozinho, ir à casa de banho, orientar-se no tempo e no espaço.' }
      ]
    },
    {
      id: 'price-and-contract',
      title: 'Quanto custa em 2026',
      content: [
        { kind: 'paragraph', text: 'Numa IPSS com acordo de cooperação, o preço normalmente não é “fixo como uma subscrição”, mas sim uma mensalidade/comparticipação familiar, calculada segundo os rendimentos do agregado e as regras da instituição. Na prática, as famílias veem muitas vezes um intervalo de 200–500 €/mês, mas com rendimentos elevados, transporte e serviços adicionais o valor pode ser superior.' },
        { kind: 'checklist', items: [
          'Peça a tabela de comparticipações antes de assinar o contrato',
          'Confirme se fraldas, medicamentos, produtos de higiene e podologia estão incluídos',
          'Verifique o preço do transporte e o raio do percurso',
          'Pergunte se os dias de ausência, hospitalização e férias da família são pagos',
          'Confirme o horário: muitos centros funcionam aproximadamente 8:00–18:00, segunda–sexta',
          'Verifique se funciona em feriados, em Agosto e entre Natal/Ano Novo',
          'Peça por escrito o regulamento interno e o contrato de prestação de serviços',
          'Confirme o prazo de aviso prévio para rescisão — frequentemente 30 dias'
        ] },
        { kind: 'warning', text: 'Não se oriente apenas pelo preço. Para o idoso são mais importantes a distância, a estabilidade do transporte, a equipa, a alimentação, a possibilidade de contactar rapidamente a família e a disponibilidade do centro para trabalhar com diagnósticos concretos.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Se não houver vaga ou se for necessário outro nível de cuidados',
      content: [
        { kind: 'paragraph', text: 'As listas de espera em boas IPSS são normais, sobretudo em Lisboa, Porto, Cascais, Oeiras, Algarve e subúrbios. Inscreva-se em lista de espera em vários centros ao mesmo tempo e veja alternativas em paralelo.' },
        { kind: 'checklist', items: [
          'SAD — Serviço de Apoio Domiciliário: ajuda em casa, alimentação, higiene, limpeza, medicamentos',
          'ERPI — Estrutura Residencial para Pessoas Idosas: residência permanente 24/7',
          'Centro de Convívio — mais leve do que Centro de Dia: mais socialização, menos cuidados',
          'Cuidados Continuados — rede médico-reabilitativa após doença/hospitalização, através do SNS',
          'Cuidador privado: flexível, mas normalmente mais caro com horário diário',
          'Combinação: Centro de Dia durante o dia + apoio domiciliário à noite/de manhã'
        ] },
        { kind: 'paragraph', text: 'Se o idoso teve alta hospitalar recentemente, peça ao assistente social do hospital ou ao Centro de Saúde ajuda com o encaminhamento. Eles têm contactos da rede social local e percebem mais rapidamente que tipo de resposta social é adequado.' }
      ]
    }
  ],
  costs: [
    { label: 'Centro de Dia em IPSS, valor indicativo', amountEURMin: 200, amountEURMax: 500, note: 'Normalmente a mensalidade depende dos rendimentos do agregado familiar e das regras da instituição; transporte e consumíveis podem ser pagos à parte.' },
    { label: 'Transporte casa-centro-casa', amountEURMin: 0, amountEURMax: 100, note: 'Por vezes está incluído, por vezes é pago à parte; depende da distância e do percurso.' },
    { label: 'Centro de Dia privado', amountEURMin: 400, amountEURMax: 900, note: 'Os preços de mercado variam muito consoante a região, o horário, a alimentação e o nível de cuidados.' }
  ],
  sources: [
    { title: 'Carta Social — pesquisa de respostas sociais, incluindo Centro de Dia', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — respostas sociais para pessoas idosas', url: 'https://www.seg-social.pt/idosos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — informação sobre instituições particulares de solidariedade social', url: 'https://www.seg-social.pt/ipss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
