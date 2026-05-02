export default {
  editorialVoice: 'hackportugal',
  id: 'aima-escalation-ombudsman',
  categoryId: 'emergency_rights',
  title: 'AIMA não responde: escalada através do Provedor de Justiça',
  tldr: 'Se a AIMA perdeu o ficheiro, não disponibiliza vaga, demora meses a emitir o cartão de residência ou não responde a e-mails, siga uma escada: reunir provas → reclamação no Livro de Reclamações → dar à AIMA até 60 dias para reagir → queixa ao Provedor de Justiça → em caso de prejuízo urgente, avançar para o Tribunal Administrativo com advogado. O Provedor é gratuito, mas não substitui o tribunal nem suspende prazos da autorização de residência.',
  tags: ['aima', 'reclamação', 'provedor', 'autorização de residência'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-escalate',
      title: 'Quando isto se aplica',
      content: [
        { kind: 'paragraph', text: 'O Provedor de Justiça é o ombudsman de Portugal. Recebe queixas sobre actos ou omissões de entidades públicas, incluindo a AIMA. Não é um “acelerador em 48 horas”, mas sim um canal oficial de pressão: o Provedor pode pedir explicações à AIMA, apontar uma violação e recomendar a correcção da situação.' },
        { kind: 'checklist', items: [
          'a AIMA não responde a e-mails/formulário de contacto durante mais do que um prazo razoável',
          'o pedido foi aceite, mas o cartão de residência não é emitido há meses',
          'a marcação foi cancelada ou desapareceu, e não há nova vaga',
          'o dossiê foi “perdido” ou pedem documentos que já foram entregues',
          'existe risco de perder trabalho, habitação, viagem, vaga de estudo ou acesso ao SNS devido ao atraso',
          'você já contactou directamente a AIMA e consegue prová-lo',
          'a situação diz respeito a uma função pública da AIMA, e não a um intermediário privado ou advogado'
        ] },
        { kind: 'warning', text: 'O Provedor não emite autorização de residência, não marca vagas por conta própria e não pode substituir a decisão da AIMA. Também não é um recurso contra uma recusa: se tiver uma recusa formal com prazo para impugnação, conte os prazos judiciais separadamente com um advogado.' }
      ]
    },
    {
      id: 'build-evidence',
      title: 'Reúna provas antes da queixa',
      content: [
        { kind: 'paragraph', text: 'Uma queixa fraca soa a “a AIMA não responde”. Uma queixa forte é uma cronologia com datas, números, cópias e um pedido concreto. Antes do Livro de Reclamações e do Provedor, reúna um único pacote em PDF.' },
        { kind: 'checklist', items: [
          'passaporte e estatuto actual: visto D1-D8, manifestação de interesse, CPLP, renovação da autorização de residência, Reagrupamento Familiar, etc.',
          'NIF, NISS e número de utente, se estiverem relacionados com o prejuízo',
          'comprovativo de submissão, recibo, referência de pagamento ou número de processo AIMA',
          'cópias de e-mails para a AIMA, respostas automáticas, capturas de ecrã do formulário de contacto',
          'prova de pagamento de taxas da AIMA, por exemplo 133 € por admissão ou 307,20 € ao abrigo do art. 75 após 01.03.2026, se aplicável',
          'capturas de ecrã do portal/área pessoal com erro, falta de vagas ou estado do processo',
          'provas do prejuízo: contrato de trabalho, carta do empregador, matrícula, contrato de arrendamento, bilhetes, documentos médicos',
          'pedido exacto: “peço que localizem o processo”, “peço marcação de atendimento”, “peço a emissão do cartão”, “peço esclarecimento escrito sobre o estado”'
        ] },
        { kind: 'warning', text: 'Não envie documentos originais por correio sem necessidade. Para queixas, bastam cópias e capturas de ecrã; oculte os dados pessoais de terceiros se não forem necessários para o caso.' }
      ]
    },
    {
      id: 'livro-reclamacoes',
      title: 'Passo 1: Livro de Reclamações',
      content: [
        { kind: 'paragraph', text: 'Comece pelo Livro de Reclamações Electrónico: é o canal oficial de reclamações contra entidades, disponível online. Para a AIMA, escolha a entidade/serviço, descreva os factos por datas e anexe ficheiros. A reclamação fica registada, tem um número, que depois é útil para indicar ao Provedor.' },
        { kind: 'substeps', items: [
          { id: 'open-portal', title: '1. Abra o portal', content: [
            { kind: 'paragraph', text: 'Entre em livroreclamacoes.pt, escolha a apresentação de reclamação, indique os seus contactos e procure a AIMA como entidade reclamada. Se o sistema não encontrar a delegação específica, escolha a entidade central e indique no texto o local/canal do contacto.' }
          ] },
          { id: 'write-text', title: '2. Escreva de forma breve e juridicamente limpa', content: [
            { kind: 'checklist', items: [
              'quem é: nome, nacionalidade, NIF, número de processo AIMA, se existir',
              'o que aconteceu: 5-10 linhas por datas',
              'o que já fez: e-mails, chamadas, visitas, pagamentos',
              'que prejuízo está a ocorrer: trabalho, habitação, estudos, saúde, impossibilidade de viajar',
              'o que pede: uma acção concreta ou uma resposta escrita',
              'anexos: PDF/capturas de ecrã com nomes dos ficheiros'
            ] }
          ] },
          { id: 'save-proof', title: '3. Guarde a confirmação', content: [
            { kind: 'paragraph', text: 'Descarregue ou guarde o comprovativo da reclamação e o número. Sem isto, o Provedor verá que não tentou resolver a questão directamente e poderá pedir que contacte primeiro a AIMA.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não escreva ameaças, insultos nem “conheço o ministro”. Escreva factos verificáveis. Em Portugal, uma cronologia seca funciona melhor do que um texto emocional.' }
      ]
    },
    {
      id: 'wait-60-days',
      title: 'Passo 2: aguarde até 60 dias e faça follow-up',
      content: [
        { kind: 'paragraph', text: 'Para o Provedor, é importante que primeiro dê à administração a oportunidade de responder. A referência prática é 60 dias após a reclamação/último contacto, se não houver risco urgente. Se a AIMA respondeu de forma formal, mas não resolveu o problema, isso também é material para o Provedor.' },
        { kind: 'checklist', items: [
          'após 15-20 dias, verifique o e-mail, o spam e o estado da reclamação',
          'se chegar uma resposta da AIMA, guarde-a em PDF',
          'se não houver resposta, envie um follow-up curto com o número do Livro de Reclamações',
          'não crie 10 reclamações iguais todas as semanas: isso piora a legibilidade do caso',
          'se surgir um facto novo, por exemplo despedimento ou expiração do visto, acrescente-o num e-mail separado',
          'após 60 dias, prepare o pacote para o Provedor: primeira reclamação, follow-up, respostas/silêncio, prejuízo'
        ] },
        { kind: 'warning', text: 'Se houver risco imediato de deportação, perda de emprego, separação familiar, impossibilidade de tratamento ou se estiver a expirar um prazo judicial após uma recusa, não espere 60 dias — consulte em paralelo um advogado sobre o tribunal administrativo.' }
      ]
    },
    {
      id: 'provedor-complaint',
      title: 'Passo 3: queixa ao Provedor de Justiça',
      content: [
        { kind: 'paragraph', text: 'A queixa ao Provedor é gratuita e pode ser apresentada online, por carta ou presencialmente. Pode ser apresentada em português ou inglês; na prática, para a AIMA é melhor em português. Um texto em russo deve ser traduzido pelo menos por tradução automática e revisto quanto a nomes, datas e números.' },
        { kind: 'checklist', items: [
          'indique que a queixa é contra a AIMA — Agência para a Integração, Migrações e Asilo',
          'indique o número da reclamação no Livro de Reclamações e a data de submissão',
          'apresente a cronologia: data de submissão à AIMA, pagamentos, atendimento, e-mails, silêncio',
          'explique por que razão a omissão é ilegal ou desproporcionada: falta de resposta, falta de decisão, impossibilidade de exercer direitos',
          'demonstre o prejuízo com documentos, não com afirmações genéricas',
          'formule o pedido: solicitar à AIMA o estado do processo e recomendar a tomada de decisão/marcação de atendimento',
          'anexe um pacote único em PDF e documentos-chave separados',
          'guarde o número de processo do Provedor e toda a correspondência posterior'
        ] },
        { kind: 'paragraph', text: 'Depois da submissão, o Provedor pode pedir informações adicionais, remeter a questão à AIMA e aguardar a resposta do serviço. Não há prazos do tipo “resolvem em X dias”: por vezes ajuda em algumas semanas, por vezes demora meses. O valor da queixa é o rasto oficial e a pressão de uma entidade independente.' },
        { kind: 'warning', text: 'O Provedor normalmente não intervém se a mesma questão já estiver a ser apreciada por um tribunal, ou se a queixa for manifestamente infundada. Se apresentou uma acção, comunique isso com honestidade.' }
      ]
    },
    {
      id: 'court-option',
      title: 'Passo 4: se o silêncio estiver a destruir a vida — Tribunal Administrativo',
      content: [
        { kind: 'paragraph', text: 'Se a AIMA continuar inactiva e o atraso criar um prejuízo grave, o nível seguinte é o tribunal administrativo. O tipo de instrumento é escolhido pelo advogado: por exemplo, ação de condenação à prática de ato devido em caso de omissão ilegal ou intimação para proteção de direitos, liberdades e garantias ao abrigo do CPTA, quando estão em causa direitos fundamentais.' },
        { kind: 'checklist', items: [
          'vá ao advogado com o pacote PDF completo, não com um resumo no WhatsApp',
          'leve passaporte, autorização de residência/visto, comprovativos AIMA, Livro de Reclamações, queixa ao Provedor',
          'peça a avaliação da urgência: trabalho, família, saúde, saída do país, risco de estatuto irregular',
          'confirme custos judiciais, honorários e probabilidade de uma providência cautelar',
          'verifique se tem direito a apoio judiciário através da Segurança Social, se o rendimento for baixo',
          'não deixe passar prazos de impugnação se tiver uma decisão formal da AIMA, e não apenas silêncio'
        ] },
        { kind: 'paragraph', text: 'O tribunal não é mais uma “reclamação”, mas um litígio jurídico com regras processuais. É mais caro, mas por vezes é a única forma eficaz de obrigar a administração a tomar uma decisão quando meses de espera já causam prejuízo real.' },
        { kind: 'warning', text: 'Não confie apenas em publicações no Facebook e modelos do Telegram. O mesmo modelo pode prejudicar se tiver uma recusa, estatuto expirado, processo familiar ou uma situação médica urgente.' }
      ]
    }
  ],
  costs: [
    { label: 'Livro de Reclamações Electrónico', amountEUR: 0, note: 'A apresentação da reclamação online é gratuita.' },
    { label: 'Provedor de Justiça', amountEUR: 0, note: 'A queixa ao ombudsman é gratuita.' },
    { label: 'Tribunal administrativo: taxa de justiça', amountEURMin: 306, amountEURMax: 612, note: 'Referência de 3-6 UC com UC de 102 €; o montante exacto depende do processo e de isenções/benefícios.' },
    { label: 'Advogado', amountEURMin: 300, amountEURMax: 1500, note: 'O mercado varia muito; acções urgentes e providências cautelares costumam ser mais caras.' }
  ],
  sources: [
    { title: 'Provedor de Justiça: como apresentar uma queixa', url: 'https://www.provedor-jus.pt/en/who-we-are/faq/file-a-complaint/', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Electrónico', url: 'https://livroreclamacoes.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA: contactos e canais de atendimento', url: 'https://aima.gov.pt/pt/contactos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código de Processo nos Tribunais Administrativos — Lei 15/2002', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2002-34464475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
