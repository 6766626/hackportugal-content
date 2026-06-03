export default {
  editorialVoice: 'hackportugal',
  id: 'centro-dia-idosos-bairro',
  categoryId: 'healthcare',
  title: 'Centro de Dia — apoio diurno a pessoas idosas',
  tldr: 'Centro de Dia é um centro diurno para pessoas idosas: a pessoa vive em casa e, durante o dia, recebe refeições, supervisão, actividades, apoio à higiene e frequentemente transporte. Normalmente é gerido por IPSS/Misericórdia/associação local, com horário aproximado das 8:00 às 18:00 nos dias úteis. Em 2026, o preço é muitas vezes 200–500 € por mês e depende dos rendimentos da família; as vagas procuram-se através da Carta Social, Junta de Freguesia, Segurança Social e IPSS locais. É uma alternativa à ERPI se a família quiser manter a pessoa idosa em casa, mas não a puder deixar sozinha durante o dia.',
  tags: ['idosos', 'ipss', 'cuidados', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é um Centro de Dia',
      content: [
        { kind: 'paragraph', text: 'Centro de Dia é uma resposta social diurna para pessoas idosas que vivem em casa, mas precisam de apoio durante o dia. Não é um lar: não há pernoita, e a residência permanente continua a ser em casa da família ou da própria pessoa idosa.' },
        { kind: 'paragraph', text: 'Formato típico: de manhã a pessoa é recolhida ou vai por meios próprios, no centro há pequeno-almoço/almoço/lanche, actividades, vigilância, apoio à higiene básica, toma de medicamentos segundo indicação da família/médico, socialização; ao fim do dia regressa a casa.' },
        { kind: 'checklist', items: [
          'Para pessoas idosas que não devem ficar sozinhas todo o dia',
          'Para famílias em que os familiares trabalham das 9:00 às 18:00',
          'Para pessoas com perda ligeira ou moderada de autonomia',
          'Para prevenir isolamento, depressão e quedas em casa',
          'Para quem ainda não precisa de ERPI ou para quem essa opção é psicologicamente difícil',
          'Para recuperar uma rotina depois de hospitalização, se houver apoio nocturno em casa'
        ] }
      ]
    },
    {
      id: 'services',
      title: 'O que normalmente está incluído 🧓',
      content: [
        { kind: 'paragraph', text: 'O conjunto de serviços depende da IPSS concreta e do acordo com a Segurança Social. Antes da inscrição, peça o regulamento interno e a tabela de comparticipações: aí está escrito o que está incluído, o que é pago à parte e como é calculada a mensalidade.' },
        { kind: 'checklist', items: [
          'Refeições: normalmente pequeno-almoço, almoço e lanche; por vezes jantar para levar',
          'Actividades sociais e cognitivas: ginástica, memória, música, trabalhos manuais',
          'Vigilância durante o dia e contacto com a família se o estado se agravar',
          'Apoio à higiene: lavar o rosto, banho em horário definido, muda de roupa — se o centro prestar esse serviço',
          'Apoio na toma de medicamentos de acordo com o esquema fornecido pela família/médico',
          'Transporte casa-centro-casa: existe frequentemente, mas o raio e o preço são limitados',
          'Festas, excursões, visitas culturais — por vezes com pagamento adicional',
          'Coordenação com Centro de Saúde ou médico de família quando necessário'
        ] },
        { kind: 'warning', text: 'Centro de Dia não substitui internamento médico, serviço de urgência, cuidador 24 horas ou ERPI. Se houver demência com necessidade de cuidados 24/7, risco de fuga, agressividade, estado acamado permanente ou episódios nocturnos — o centro pode recusar e sugerir ERPI, SAD ou cuidados continuados.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Onde procurar vaga',
      content: [
        { kind: 'paragraph', text: 'O caminho mais prático é não procurar “o melhor centro em Portugal”, mas sim as instituições mais próximas no seu concelho/freguesia: transportar a pessoa idosa todos os dias torna-se rapidamente a principal limitação.' },
        { kind: 'substeps', items: [
          { id: 'carta-social', title: '1. Consultar a Carta Social', content: [
            { kind: 'paragraph', text: 'Em cartasocial.pt, seleccione distrito, concelho, freguesia e a resposta social “Centro de Dia”. Nas fichas normalmente vê-se a entidade, morada, telefone, capacidade e por vezes a situação da resposta.' }
          ] },
          { id: 'local-network', title: '2. Perguntar à Junta de Freguesia e à Câmara Municipal', content: [
            { kind: 'paragraph', text: 'A Junta conhece muitas vezes as listas de espera reais, o transporte e as IPSS que aceitam residentes da zona. Em freguesias pequenas, isto é mais rápido do que esperar por uma resposta por email.' }
          ] },
          { id: 'social-security', title: '3. Contactar a Segurança Social', content: [
            { kind: 'paragraph', text: 'Se a situação for urgente — pessoa idosa sozinha, após alta hospitalar, família sem capacidade para assegurar cuidados — peça atendimento social na Segurança Social. Podem encaminhar para a rede social local ou indicar respostas sociais com acordo de cooperação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-application',
      title: 'Documentos e inscrição',
      content: [
        { kind: 'paragraph', text: 'O conjunto de documentos varia, mas a IPSS quase sempre avalia dados pessoais, estado de saúde, rendimentos e situação familiar. Para uma pessoa estrangeira são importantes o NIF, a morada e a permanência legal; a autorização de residência ajuda, mas um centro concreto pode aceitar documentos com visto, CRUE ou outro estatuto — confirme antecipadamente.' },
        { kind: 'checklist', items: [
          'Documento da pessoa idosa: Cartão de Cidadão, autorização de residência ou passaporte',
          'NIF da pessoa idosa e, frequentemente, NIF do familiar responsável',
          'Número de utente SNS e contacto do Centro de Saúde/médico de família',
          'Lista de diagnósticos, medicamentos, alergias e restrições alimentares',
          'Relatório médico, se houver demência, diabetes, incapacidade, quedas, incontinência',
          'Comprovativo de morada: atestado de residência, contrato de arrendamento ou factura de utilities',
          'Comprovativos de rendimentos: pensão, IRS, declaração da Segurança Social, extractos bancários — quando exigido',
          'Contactos da pessoa responsável e autorizações para contacto de emergência',
          'Se necessário: atestado médico de incapacidade multiuso'
        ] },
        { kind: 'paragraph', text: 'Depois da candidatura, normalmente é feita uma entrevista social: perguntam com quem vive a pessoa idosa, quem a vai buscar ao fim do dia, se há escadas/elevador, se precisa de transporte, se consegue comer sozinha, ir à casa de banho e orientar-se no tempo e no espaço.' }
      ]
    },
    {
      id: 'price-and-contract',
      title: 'Quanto custa em 2026',
      content: [
        { kind: 'paragraph', text: 'Numa IPSS com acordo de cooperação, o preço normalmente não é “fixo como uma subscrição”, mas sim uma mensalidade/comparticipação familiar calculada segundo os rendimentos da família e as regras da instituição. Na prática, as famílias vêem frequentemente valores entre 200–500 € por mês, mas com rendimentos elevados, transporte e serviços adicionais o montante pode ser superior.' },
        { kind: 'checklist', items: [
          'Peça a tabela de comparticipações antes de assinar o contrato',
          'Confirme se fraldas, medicamentos, produtos de higiene e podologia estão incluídos',
          'Verifique o preço do transporte e o raio do percurso',
          'Pergunte se os dias de ausência, hospitalização e férias da família são cobrados',
          'Confirme o horário: muitos centros funcionam aproximadamente das 8:00 às 18:00, de segunda a sexta-feira',
          'Verifique se há funcionamento em feriados, em Agosto e entre Natal/Ano Novo',
          'Peça por escrito o regulamento interno e o contrato de prestação de serviços',
          'Confirme o prazo de aviso prévio para cessação — muitas vezes 30 dias'
        ] },
        { kind: 'warning', text: 'Não se oriente apenas pelo preço. Para a pessoa idosa, são mais importantes a distância, a estabilidade do transporte, a equipa, a alimentação, a possibilidade de contactar rapidamente a família e a disponibilidade do centro para trabalhar com diagnósticos concretos.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Se não houver vaga ou for necessário outro nível de cuidados',
      content: [
        { kind: 'paragraph', text: 'As listas de espera em boas IPSS são normais, especialmente em Lisboa, Porto, Cascais, Oeiras, Algarve e subúrbios. Inscreva-se em lista de espera em vários centros ao mesmo tempo e, em paralelo, veja alternativas.' },
        { kind: 'checklist', items: [
          'SAD — Serviço de Apoio Domiciliário: apoio em casa, refeições, higiene, limpeza, medicamentos',
          'ERPI — Estrutura Residencial para Pessoas Idosas: residência permanente 24/7',
          'Centro de Convívio — mais leve do que Centro de Dia: mais socialização, menos cuidados',
          'Cuidados Continuados — rede médico-reabilitativa após doença/hospitalização, através do SNS',
          'Cuidador privado: flexível, mas normalmente mais caro com horário diário',
          'Combinação: Centro de Dia durante o dia + apoio domiciliário à noite/de manhã'
        ] },
        { kind: 'paragraph', text: 'Se a pessoa idosa teve alta hospitalar recentemente, peça ao hospital social worker ou ao Centro de Saúde ajuda com o encaminhamento. Têm contactos da rede social local e percebem mais rapidamente que tipo de resposta social é adequado.' }
      ]
    }
  ],
  costs: [
    { label: 'Centro de Dia em IPSS, referência', amountEURMin: 200, amountEURMax: 500, note: 'Normalmente a mensalidade depende dos rendimentos da família e das regras da instituição; transporte e consumíveis podem ser cobrados à parte.' },
    { label: 'Transporte casa-centro-casa', amountEURMin: 0, amountEURMax: 100, note: 'Por vezes está incluído, por vezes é pago à parte; depende da distância e do percurso.' },
    { label: 'Centro de Dia privado', amountEURMin: 400, amountEURMax: 900, note: 'Os preços de mercado variam muito conforme a região, horário, alimentação e nível de cuidados.' }
  ],
  sources: [
    { title: 'Carta Social — pesquisa de respostas sociais, incluindo Centro de Dia', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Segurança Social — respostas sociais para pessoas idosas', url: 'https://www.seg-social.pt/ptss/pssd/menu/acao-social/apoios-respostas-sociais/respostas-sociais-idosos', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Segurança Social — apoios e respostas sociais', url: 'https://www.seg-social.pt/ptss/pssd/menu/acao-social/apoios-respostas-sociais', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
