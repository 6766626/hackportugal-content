export default {
  editorialVoice: 'hackportugal',
  id: 'viver-em-comunidade-condominio',
  categoryId: 'housing_rent',
  title: 'Regras do condomínio: quotas, assembleia, regulamento',
  tldr: 'O condomínio em Portugal não é um “chat voluntário de moradores”, mas sim o regime jurídico de prédio em propriedade horizontal. Cada proprietário paga quotas segundo a permilagem, normalmente 20–100 € por mês por apartamento, além de contribuições para obras. A assembleia anual aprova o orçamento, as contas, o administrador e as obras. O fundo comum de reserva é obrigatório: no mínimo 10% do orçamento anual. O arrendatário normalmente cumpre o regulamento, mas quem vota e responde perante o condomínio é o proprietário.',
  tags: ['condomínio', 'arrendamento', 'apartamento', 'quotas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-condominio',
      title: 'O que é o condomínio e quem é responsável por quê',
      content: [
        { kind: 'paragraph', text: 'O condomínio existe quando um edifício está dividido em fracções autónomas — apartamentos, lojas, garagens — e partes comuns: escadas, elevadores, telhado, fachada, colunas, porta de entrada, pátio. A base jurídica é o Código Civil, art. 1414–1438-A, e o Decreto-Lei 268/94.' },
        { kind: 'checklist', items: [
          'Condómino — o proprietário da fracção, não o arrendatário.',
          'Administrador do condomínio — o gestor/empresa eleito, que executa as decisões da assembleia e cobra as quotas.',
          'Assembleia de condóminos — reunião de proprietários onde são aprovados o orçamento, as obras, as contas e o regulamento.',
          'Quotas — contribuições regulares para a manutenção do edifício: limpeza, electricidade, elevador, seguro, pequenas reparações.',
          'Fundo comum de reserva — reserva obrigatória para obras de maior dimensão nas partes comuns.',
          'Regulamento do condomínio — regras internas do prédio: ruído, lixo, animais, estacionamento, utilização das zonas comuns.',
          'O arrendatário é obrigado a cumprir as regras do prédio, mas as dívidas perante o condomínio normalmente continuam a ser responsabilidade do proprietário, salvo se o contrato de arrendamento tiver transferido parte das despesas para o arrendatário.'
        ] },
        { kind: 'warning', text: 'Se arrenda um apartamento, não aceite “condomínio incluído” apenas verbalmente. No contrato de arrendamento deve ficar claro: quem paga as quotas mensais, quem paga as obras extraordinárias, e se estão incluídos garagem, elevador, piscina, arrecadação.' }
      ]
    },
    {
      id: 'quotas-and-reserve',
      title: 'Quotas e fundo comum de reserva: quanto pagar',
      content: [
        { kind: 'paragraph', text: 'O valor das quotas não é igual para todos os apartamentos. Normalmente é calculado pela permilagem — a quota-parte da sua fracção no edifício, indicada na caderneta predial / título constitutivo da propriedade horizontal. Um apartamento maior, uma garagem ou um terraço implicam frequentemente uma maior participação nas despesas.' },
        { kind: 'checklist', items: [
          'Intervalo típico num prédio normal sem piscina nem porteiro: 20–100 € por mês por apartamento.',
          'Um prédio com elevador, garagem, jardim, piscina ou portaria pode custar 100–250 €+ por mês.',
          'O fundo comum de reserva é obrigatório pelo DL 268/94: no mínimo 10% do último orçamento anual do condomínio.',
          'O dinheiro da reserva é usado para obras de conservação: telhado, fachada, colunas, elevador, reparações estruturais.',
          'Podem existir quotas extra se a reserva não cobrir as obras: por exemplo, uma fachada de 40 000 € é repartida entre os condóminos segundo a permilagem.',
          'O atraso no pagamento das quotas pode levar a cobrança judicial; a ata da assembleia com o montante da dívida constitui título executivo se cumprir os requisitos legais.',
          'Na compra de apartamento, o notário/banco normalmente solicita a declaração de dívida do condomínio — comprovativo de dívidas relativas a contribuições.'
        ] },
        { kind: 'warning', text: 'Uma quota baixa nem sempre é uma vantagem. Se o prédio cobrou 10–15 € durante anos e não constituiu reserva, o novo proprietário pode rapidamente receber uma quota extra de milhares de euros para telhado, elevador ou fachada.' }
      ]
    },
    {
      id: 'assembleia',
      title: 'Assembleia: quando se realiza e como se vota',
      content: [
        { kind: 'paragraph', text: 'A assembleia anual ordinária reúne-se para aprovar as contas do ano anterior e o orçamento do novo ano. Segundo o Código Civil art. 1431, realiza-se na primeira quinzena de Janeiro, mas o regulamento ou uma deliberação dos condóminos pode transferir a reunião ordinária para o primeiro trimestre.' },
        { kind: 'checklist', items: [
          'A convocatória é feita pelo administrador por carta, email ou outro meio acordado, com ordem de trabalhos.',
          'Verifique se existe procuração: o proprietário pode transmitir o direito de voto a outra pessoa.',
          'Os votos são normalmente contados por permilagem, e não como “um apartamento = um voto”.',
          'As decisões ordinárias são tomadas por maioria do capital presente, salvo se a lei exigir maioria superior.',
          'As obras de conservação das partes comuns são normalmente aprovadas pela assembleia; as obras urgentes podem ser encomendadas pelo administrador e depois comunicadas.',
          'A alteração do título constitutivo, a utilização das partes comuns para fim diferente ou alterações construtivas relevantes podem exigir unanimidade ou maioria qualificada.',
          'A ata da assembleia deve ser solicitada e guardada: confirma o orçamento, as quotas, as dívidas e as decisões sobre obras.',
          'Se comprou o apartamento recentemente, peça as últimas 2–3 atas antes da escritura: muitas vezes mostram despesas futuras.'
        ] },
        { kind: 'paragraph', text: 'Para um expatriado, o mínimo prático é saber os contactos do administrador, a data da próxima assembleia, o valor da quota mensal, o saldo do fundo comum de reserva e se existem obras aprovadas para os próximos 12–24 meses.' }
      ]
    },
    {
      id: 'regulamento',
      title: 'Regulamento: regras do prédio, ruído, lixo, animais',
      content: [
        { kind: 'paragraph', text: 'O regulamento do condomínio é obrigatório se o edifício tiver mais de 4 condóminos. Nele fica definido o funcionamento interno: como usar as zonas comuns, onde guardar bicicletas, quando se podem fazer obras, o que é proibido na fachada e nas varandas.' },
        { kind: 'checklist', items: [
          'Ruído: o período nocturno geral segundo o Regulamento Geral do Ruído é das 23:00 às 07:00; as regras municipais e a polícia podem intervir em caso de infracções.',
          'Obras: muitas vezes só são permitidas em dias úteis e durante o horário diurno; confirme as regras da Câmara Municipal e do condomínio.',
          'Lixo: em Lisboa e noutras cidades há horários para depositar lixo indiferenciado, reciclagem e monos; podem existir coimas por deposição incorrecta.',
          'Animais: o condomínio não pode proibir arbitrariamente a detenção legal de animais domésticos dentro da sua fracção, mas pode regular as zonas comuns, trela, elevador e limpeza.',
          'Fachada e varandas: ar condicionado, toldo, antena parabólica, fecho de varanda exigem frequentemente autorização do condomínio e por vezes da Câmara Municipal.',
          'Garagem: não é possível usar automaticamente o lugar de estacionamento como armazém, oficina ou ponto de carregamento de veículo eléctrico sem cumprir as regras de segurança.',
          'Alojamento Local: as restrições específicas dependem da lei, das zonas municipais e das decisões do condomínio; não presuma que o apartamento serve automaticamente para AL.'
        ] },
        { kind: 'warning', text: 'Uma regra no chat de WhatsApp não equivale ao regulamento. Peça o regulamento escrito e as atas. Mas, mesmo que as regras estejam mal formalizadas, as normas gerais sobre ruído, segurança, fachada e partes comuns continuam a aplicar-se.' }
      ]
    },
    {
      id: 'renters-buyers-check',
      title: 'Checklist para arrendatário e comprador',
      content: [
        { kind: 'substeps', items: [
          { id: 'tenant', title: 'Se arrenda', content: [
            { kind: 'checklist', items: [
              'No contrato de arrendamento, verifique a cláusula despesas de condomínio.',
              'As quotas ordinárias são pagas mais frequentemente pelo proprietário, mas o contrato pode transferi-las para o arrendatário — isso deve estar escrito.',
              'As quotas extra para fachada, telhado, elevador e obras estruturais normalmente devem ficar a cargo do proprietário.',
              'Peça o regulamento antes de entrar, sobretudo se tiver cão, bicicleta, garagem, ar condicionado ou planos de obras.',
              'Confirme as regras de ruído, utilização do elevador durante a mudança, recolha de móveis e utilização de garagem/arrecadação.',
              'Se o administrador lhe escrever directamente sobre dívidas, reencaminhe para o proprietário e para o agente gestor; o devedor jurídico é normalmente o condómino.'
            ] }
          ] },
          { id: 'buyer', title: 'Se compra', content: [
            { kind: 'checklist', items: [
              'Solicite a declaração de não dívida ao condomínio.',
              'Peça as últimas atas da assembleia dos últimos 2–3 anos.',
              'Verifique a quota mensal e o saldo do fundo comum de reserva.',
              'Procure nas atas as palavras obras, infiltrações, fachada, telhado, elevador, garagem, dívida.',
              'Compare o estado do edifício com o valor da reserva: prédio antigo + fundo pequeno = risco de quota extra.',
              'Verifique se existe administrador profissional ou se tudo depende de um único vizinho voluntário.',
              'Se comprar no último piso ou na cave, verifique separadamente infiltrações no telhado, terraço, humidade e responsabilidades comuns.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'disputes',
      title: 'Conflitos: primeiro ata e administrador, depois Julgado de Paz',
      content: [
        { kind: 'paragraph', text: 'A sequência típica é: primeiro escrever ao administrador com factos, fotografias, datas e referência ao regulamento; depois o assunto é levado à assembleia; se não for resolvido — queixa na Câmara Municipal, polícia em caso de ruído/perigo, ou acção cível.' },
        { kind: 'checklist', items: [
          'Sobre ruído nocturno: registe datas, vídeo/áudio para si, chame a PSP/GNR em caso de infracções sistemáticas.',
          'Sobre infiltrações: notifique por escrito o proprietário, o administrador e o vizinho de cima; peça vistoria e intervenção do seguro.',
          'Sobre dívidas ao condomínio: o administrador actua contra o proprietário devedor, não contra o arrendatário sem obrigação contratual.',
          'Sobre obras ilegais nas partes comuns: exija ata com autorização e, se a fachada/estrutura for afectada, verificação pela Câmara Municipal.',
          'Para pequenos litígios civis, pode recorrer ao Julgado de Paz, se existir na sua área e o valor estiver dentro da competência.',
          'Os Julgados de Paz apreciam causas cíveis até 15 000 €; a taxa de justiça normal é 70 € por processo, normalmente repartida entre as partes conforme o resultado.'
        ] },
        { kind: 'warning', text: 'Não retenha a renda ou a quota de condomínio por iniciativa própria sem aconselhamento jurídico. Em Portugal, isso muitas vezes prejudica a sua posição: primeiro notificação escrita, provas, prazo para resolver, depois procedimento oficial.' }
      ]
    }
  ],
  costs: [
    { label: 'Quotas mensais ordinárias', amountEURMin: 20, amountEURMax: 100, note: 'Intervalo típico para apartamento num prédio normal; não é uma tarifa legal, depende da permilagem, elevador, garagem, serviços e cidade.' },
    { label: 'Fundo comum de reserva', amountEURMin: 0, amountEURMax: 0, note: 'Mínimo de 10% do orçamento anual do condomínio; pago como parte das quotas ou em linha separada.' },
    { label: 'Julgado de Paz', amountEUR: 70, note: 'Taxa de justiça normal por processo; causas até 15 000 €, se o Julgado de Paz for competente territorialmente e em razão da matéria.' }
  ],
  sources: [
    { title: 'Código Civil — propriedade horizontal, art. 1414–1438-A', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 268/94 — regime do condomínio, fundo comum de reserva e cobrança', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/268-1994-619403', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — ruído, regras municipais e contactos', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Julgados de Paz — competência, custos e funcionamento', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
