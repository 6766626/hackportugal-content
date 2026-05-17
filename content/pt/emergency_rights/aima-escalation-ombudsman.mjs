export default {
  editorialVoice: 'hackportugal',
  id: 'aima-escalation-ombudsman',
  categoryId: 'emergency_rights',
  title: 'AIMA não responde: escalada através do Provedor de Justiça',
  tldr: 'Se a AIMA perdeu o ficheiro, não dá vaga, demora meses a emitir o cartão de residência ou não responde a emails, siga a escada: reunir provas → reclamação no Livro de Reclamações → dar à AIMA até 60 dias para reagir → queixa ao Provedor de Justiça → em caso de prejuízo urgente, avançar para o Tribunal Administrativo com advogado. O Provedor é gratuito, mas não substitui o tribunal nem suspende prazos da autorização de residência.',
  tags: ['aima', 'reclamação', 'provedor', 'autorização de residência'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-escalate',
      title: 'Quando isto se aplica',
      content: [
        { kind: 'paragraph', text: 'O Provedor de Justiça é o ombudsman de Portugal. Recebe queixas sobre actos ou omissões de entidades públicas, incluindo a AIMA. Não é um «acelerador em 48 horas», mas sim um canal oficial de pressão: o Provedor pode pedir explicações à AIMA, assinalar uma violação e recomendar a correcção da situação.' },
        { kind: 'checklist', items: [
          'a AIMA não responde a emails/formulário de contacto durante mais tempo do que seria razoável',
          'o pedido foi aceite, mas o cartão de residência não é emitido há meses',
          'a marcação foi cancelada ou desapareceu, e não há nova vaga',
          'o dossiê foi «perdido» ou pedem documentos que já foram entregues',
          'existe risco de perder o trabalho, a casa, uma viagem, uma vaga de estudo ou o acesso ao SNS devido ao atraso',
          'você já contactou directamente a AIMA e consegue prová-lo',
          'a situação diz respeito a uma função pública da AIMA, e não a um intermediário privado ou advogado'
        ] },
        { kind: 'warning', text: 'O Provedor não emite autorização de residência, não marca vagas por iniciativa própria e não pode substituir a decisão da AIMA. Também não é um recurso contra uma recusa: se tiver uma recusa formal com prazo para impugnação, conte os prazos judiciais separadamente com um advogado.' }
      ]
    },
    {
      id: 'build-evidence',
      title: 'Reúna provas antes da queixa',
      content: [
        { kind: 'paragraph', text: 'Uma queixa fraca soa a «a AIMA não responde». Uma queixa forte é uma cronologia com datas, números, cópias e um pedido concreto. Antes do Livro de Reclamações e do Provedor, prepare um único pacote em PDF.' },
        { kind: 'checklist', items: [
          'passaporte e estatuto actual: visto D1-D8, Manifestação de Interesse, CPLP, renovação da autorização de residência, Reagrupamento Familiar, etc.',
          'NIF, NISS e número de utente, se estiverem relacionados com o prejuízo',
          'comprovativo de submissão, recibo, referência de pagamento ou número de processo AIMA',
          'cópias de emails enviados à AIMA, respostas automáticas, capturas de ecrã do formulário de contacto',
          'prova de pagamento de taxas da AIMA, por exemplo 133 € por admissão ou 307,20 € ao abrigo do art. 75 após 01.03.2026, se aplicável',
          'capturas de ecrã do portal/área reservada com erro, ausência de vagas ou estado do processo',
          'provas do prejuízo: contrato de trabalho, carta do empregador, matrícula, contrato de arrendamento, bilhetes, documentos médicos',
          'pedido exacto: «peço que localizem o processo», «peço a marcação de atendimento», «peço a emissão do cartão», «peço esclarecimento escrito sobre o estado»'
        ] },
        { kind: 'warning', text: 'Não envie documentos originais por correio sem necessidade. Para queixas, bastam cópias e capturas de ecrã; oculte dados pessoais de terceiros se não forem necessários para o caso.' }
      ]
    },
    {
      id: 'livro-reclamacoes',
      title: 'Passo 1: Livro de Reclamações',
      content: [
        { kind: 'paragraph', text: 'Comece pelo Livro de Reclamações Electrónico: é o canal oficial de reclamações contra entidades, disponível online. Para a AIMA, escolha a entidade/serviço, descreva os factos por datas e anexe os ficheiros. A reclamação fica registada, tem um número, que depois é útil indicar ao Provedor.' },
        { kind: 'substeps', items: [
          { id: 'open-portal', title: '1. Abra o portal', content: [
            { kind: 'paragraph', text: 'Aceda a livroreclamacoes.pt, escolha a submissão de reclamação, indique os seus contactos e procure a AIMA como entidade reclamada. Se o sistema não encontrar o balcão específico, escolha a entidade central e indique no texto o local/canal de contacto.' }
          ] },
          { id: 'write-text', title: '2. Escreva de forma breve e juridicamente limpa', content: [
            { kind: 'checklist', items: [
              'quem é: nome, nacionalidade, NIF, número de processo AIMA, se existir',
              'o que aconteceu: 5-10 linhas com datas',
              'o que já fez: emails, chamadas, deslocações, pagamentos',
              'que prejuízo está a ocorrer: trabalho, habitação, estudos, saúde, impossibilidade de viajar',
              'o que pede: uma acção concreta ou uma resposta escrita',
              'anexos: PDF/capturas de ecrã com nomes de ficheiros'
            ] }
          ] },
          { id: 'save-proof', title: '3. Guarde o comprovativo', content: [
            { kind: 'paragraph', text: 'Descarregue ou guarde o comprovativo da reclamação e o número. Sem isso, o Provedor verá que não tentou resolver a questão directamente e poderá pedir que contacte primeiro a AIMA.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não escreva ameaças, insultos nem «conheço o ministro». Escreva factos verificáveis. Em Portugal, uma cronologia seca funciona melhor do que um texto emocional.' }
      ]
    },
    {
      id: 'wait-60-days',
      title: 'Passo 2: aguarde até 60 dias e faça follow-up',
      content: [
        { kind: 'paragraph', text: 'Para o Provedor, é importante que primeiro tenha dado à administração a possibilidade de responder. Como referência prática, conte 60 dias após a reclamação/último contacto, se não houver risco urgente. Se a AIMA respondeu formalmente, mas não resolveu o problema, isso também é material para o Provedor.' },
        { kind: 'checklist', items: [
          'após 15-20 dias, verifique o email, o spam e o estado da reclamação',
          'se chegar uma resposta da AIMA, guarde-a em PDF',
          'se não houver resposta, envie um follow-up curto com o número do Livro de Reclamações',
          'não crie 10 reclamações iguais todas as semanas: isso piora a leitura do caso',
          'se surgir um facto novo, por exemplo despedimento ou caducidade do visto, acrescente-o por email separado',
          'após 60 dias, prepare o pacote para o Provedor: primeira reclamação, follow-up, respostas/silêncio, prejuízo'
        ] },
        { kind: 'warning', text: 'Se existir risco imediato de deportação, perda de trabalho, separação familiar, impossibilidade de tratamento médico ou se estiver a terminar um prazo judicial após uma recusa, não espere 60 dias — consulte um advogado sobre o tribunal administrativo em paralelo.' }
      ]
    },
    {
      id: 'provedor-complaint',
      title: 'Passo 3: queixa ao Provedor de Justiça',
      content: [
        { kind: 'paragraph', text: 'A queixa ao Provedor é gratuita e pode ser apresentada online, por carta ou presencialmente. Pode ser apresentada em português ou inglês; na prática, para a AIMA é melhor em português. Um texto em russo deve ser traduzido pelo menos por tradução automática e os nomes, datas e números devem ser verificados.' },
        { kind: 'checklist', items: [
          'indique que a queixa é contra a AIMA — Agência para a Integração, Migrações e Asilo',
          'escreva o número da reclamação no Livro de Reclamações e a data de submissão',
          'apresente a cronologia: data de submissão na AIMA, pagamentos, atendimento, emails, silêncio',
          'explique por que motivo a omissão é ilegal ou desproporcionada: ausência de resposta, ausência de decisão, impossibilidade de exercer direitos',
          'demonstre o prejuízo com documentos, não com afirmações genéricas',
          'formule o pedido: solicitar à AIMA o estado do processo e recomendar a tomada de decisão/marcação de atendimento',
          'anexe um único pacote PDF e documentos-chave separados',
          'guarde o número de processo do Provedor e toda a correspondência posterior'
        ] },
        { kind: 'paragraph', text: 'Depois da submissão, o Provedor pode pedir informações adicionais, encaminhar a questão para a AIMA e aguardar a resposta do organismo. Não há prazos do tipo «resolvem em X dias»: por vezes ajuda em algumas semanas, outras vezes demora meses. O valor da queixa está no rasto oficial e na pressão de uma entidade independente.' },
        { kind: 'warning', text: 'O Provedor normalmente não intervém se a mesma questão já estiver em tribunal, ou se a queixa for manifestamente infundada. Se intentou uma acção judicial, comunique-o com transparência.' }
      ]
    },
    {
      id: 'court-option',
      title: 'Passo 4: se o silêncio lhe está a destruir a vida — Tribunal Administrativo',
      content: [
        { kind: 'paragraph', text: 'Se a AIMA continuar sem agir e o atraso estiver a causar prejuízo sério, o nível seguinte é o tribunal administrativo. O tipo de instrumento é escolhido pelo advogado: por exemplo, ação de condenação à prática de ato devido em caso de omissão ilegal ou intimação para proteção de direitos, liberdades e garantias ao abrigo do CPTA, quando estejam em causa direitos fundamentais.' },
        { kind: 'checklist', items: [
          'vá ao advogado com o pacote PDF completo, não com um resumo no WhatsApp',
          'leve passaporte, autorização de residência/visto, comprovativos AIMA, Livro de Reclamações, queixa ao Provedor',
          'peça uma avaliação da urgência: trabalho, família, saúde, saída do país, risco de estatuto irregular',
          'confirme as custas judiciais, honorários e a probabilidade de uma providência cautelar',
          'verifique se tem direito a apoio judiciário através da Segurança Social, se o rendimento for baixo',
          'não deixe passar prazos de impugnação se tiver uma decisão formal da AIMA, e não apenas silêncio'
        ] },
        { kind: 'paragraph', text: 'O tribunal não é uma última «reclamação», mas sim um litígio jurídico com regras processuais. É mais caro, mas por vezes é a única forma eficaz de obrigar a administração a tomar uma decisão quando meses de espera já causam prejuízo real.' },
        { kind: 'warning', text: 'Não confie apenas em publicações no Facebook e em modelos do Telegram. O mesmo modelo pode prejudicar se tiver uma recusa, estatuto caducado, um caso familiar ou uma situação médica urgente.' }
      ]
    }
  ],
  costs: [
    { label: 'Livro de Reclamações Electrónico', amountEUR: 0, note: 'A apresentação da reclamação online é gratuita.' },
    { label: 'Provedor de Justiça', amountEUR: 0, note: 'A queixa ao ombudsman é gratuita.' },
    { label: 'Tribunal administrativo: taxa de justiça', amountEURMin: 306, amountEURMax: 612, note: 'Referência de 3-6 UC com UC de 102 €; o montante exacto depende do processo e de benefícios.' },
    { label: 'Advogado', amountEURMin: 300, amountEURMax: 1500, note: 'O mercado varia muito; acções urgentes e providências cautelares tendem a ser mais caras.' }
  ],
  sources: [
    { title: 'Provedor de Justiça: como apresentar uma queixa', url: 'https://www.provedor-jus.pt/en/who-we-are/faq/file-a-complaint/', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Electrónico', url: 'https://livroreclamacoes.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — Perguntas Frequentes e contactos', url: 'https://aima.gov.pt/pt/perguntas-frequentes-faq-s', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Código de Processo nos Tribunais Administrativos — Lei 15/2002', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2002-34464475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
