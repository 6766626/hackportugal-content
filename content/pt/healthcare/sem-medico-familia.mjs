export default {
  editorialVoice: 'hackportugal',
  id: 'sem-medico-familia',
  categoryId: 'healthcare',
  title: 'O que fazer sem médico de família: consultas de recurso e consulta aberta',
  tldr: 'A falta de médico de família não lhe retira o acesso ao SNS. Se tiver número de utente, contacte o seu Centro de Saúde/USF/UCSP para pedir consulta aberta, consulta de recurso ou atendimento complementar; em caso de sintomas, ligue para o SNS 24 — 808 24 24 24, para obter triagem e encaminhamento. A partir de meados de junho de 2026 será introduzida uma limpeza prática das listas: os utentes que não tiverem contactado o SNS durante 5 anos podem perder o médico atribuído, mas não a inscrição no SNS.',
  tags: ['sns', 'utente', 'consulta', 'medicina'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-means',
      title: 'Sem médico de família ≠ sem cuidados médicos',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o médico de família é o médico atribuído nos cuidados de saúde primários. Acompanha doenças crónicas, receitas, baixa médica, referenciações para especialistas e prevenção. Mas, se ainda não lhe tiver sido atribuído um médico, continua a ser utente SNS e tem direito a atendimento nos cuidados primários.' },
        { kind: 'paragraph', text: 'Na prática, será atendido por um médico “de recurso” ou por um médico de serviço em formato de consulta aberta. Os nomes variam consoante a Unidade Local de Saúde: consulta aberta, consulta de recurso, atendimento complementar, consulta do dia, consulta aguda. A ideia é a mesma: uma vaga para utentes sem médico de família ou para situações urgentes de utentes inscritos.' },
        { kind: 'checklist', items: [
          'Verifique a que Centro de Saúde / USF / UCSP está associado pela sua morada',
          'Leve o número de utente, NIF, documento de identificação e autorização de residência/visto, se os tiver',
          'Ligue de manhã: muitos centros abrem vagas de consulta aberta no próprio dia',
          'Se os sintomas forem agudos — ligue primeiro para o SNS 24: 808 24 24 24',
          'Se precisar de atendimento urgente, mas não do 112, peça triagem SNS 24 e encaminhamento',
          'Para receitas e doenças crónicas, peça consulta programada de recurso',
          'Para baixa médica, confirme se o médico de serviço pode emitir CIT',
          'Não espere pela “atribuição de médico de família” se já houver um problema: peça uma consulta alternativa'
        ] }
      ]
    },
    {
      id: 'how-to-get-consulta',
      title: 'Como marcar consulta aberta / de recurso',
      content: [
        { kind: 'substeps', items: [
          { id: 'call-center', title: '1. Ligar ou ir à sua unidade', content: [
            { kind: 'paragraph', text: 'Comece pelo telefone do seu Centro de Saúde, USF ou UCSP. Se não atenderem, vá pessoalmente ao balcão administrativo de manhã. Em Lisboa, no Porto e em zonas sobrecarregadas, a visita presencial é muitas vezes mais eficaz.' },
            { kind: 'checklist', items: [
              'Diga: “Não tenho médico de família atribuído”',
              'Peça: “consulta aberta” ou “consulta de recurso”',
              'Indique brevemente o problema: febre, dor, tensão arterial, receita, análises, baixa',
              'Confirme se há vagas hoje ou nos próximos dias',
              'Peça que registem a recusa ou que proponham uma alternativa, se não houver vagas'
            ] }
          ] },
          { id: 'sns24', title: '2. Ligar para o SNS 24 em caso de sintomas', content: [
            { kind: 'paragraph', text: 'O SNS 24 é a triagem médica oficial. O número 808 24 24 24 funciona 24/7. O operador e o enfermeiro avaliam os sintomas e podem encaminhar para o Centro de Saúde, Serviço de Urgência ou dar instruções para vigilância em casa.' },
            { kind: 'paragraph', text: 'Para uma pessoa estrangeira, isto é importante: o encaminhamento pelo SNS 24 reduz o risco de espera inútil na urgência e ajuda o sistema a perceber que não chegou sem orientação.' }
          ] },
          { id: 'app-portal', title: '3. Verificar a app / portal SNS 24', content: [
            { kind: 'paragraph', text: 'Se já tiver número de utente e acesso através da Chave Móvel Digital, Cartão de Cidadão ou outro método suportado, consulte a Área Pessoal do SNS 24. Aí são visíveis a unidade de saúde, o médico de família atribuído, receitas, exames e, por vezes, contactos disponíveis.' }
          ] }
        ] }
      ]
    },
    {
      id: 'what-to-ask',
      title: 'O que pedir exatamente consoante a situação',
      content: [
        { kind: 'paragraph', text: 'O erro principal é dizer “não tenho médico de família, o que faço?” e sair sem solução. Formule o pedido de acordo com a necessidade médica. O administrativo não faz diagnósticos, mas deve encaminhá-lo para um canal de atendimento disponível.' },
        { kind: 'checklist', items: [
          'Constipação aguda, infeção, dor, tensão arterial: “Preciso de consulta aberta hoje / o mais breve possível”',
          'Renovação de receita habitual: “Preciso de renovação de medicação crónica”',
          'Análises ou controlo de doença crónica: “Preciso de consulta programada de recurso”',
          'Baixa médica: “Preciso de avaliação médica para Certificado de Incapacidade Temporária / baixa”',
          'Gravidez: “Preciso de vigilância de saúde materna” — isto não deve esperar pelo médico de família',
          'Criança: “Consulta de saúde infantil” ou “doença aguda”',
          'Vacinação: pergunte pela sala de vacinação, muitas vezes não é preciso médico',
          'Saúde mental sem risco de vida: peça consulta médica e referenciação; em caso de risco de suicídio — 112 ou urgência',
          'Medicina dentária: no SNS o acesso é limitado; confirme o cheque-dentista, se cumprir os critérios'
        ] },
        { kind: 'warning', text: 'Se houver dor no peito, sinais de AVC, falta de ar grave, perda de consciência, hemorragia intensa, anafilaxia — não espere por consulta aberta. Ligue 112.' }
      ]
    },
    {
      id: 'if-refused',
      title: 'Se disserem “não há médico” ou “não há vagas”',
      content: [
        { kind: 'paragraph', text: 'A sobrecarga dos cuidados primários é real, mas a frase “não há médico de família” não deve significar automaticamente recusa de cuidados. Peça uma alternativa concreta: outro dia, atendimento complementar, Unidade de Saúde Familiar próxima, SNS 24, urgência básica ou informação por escrito.' },
        { kind: 'checklist', items: [
          'Confirme: “Qual é a alternativa para utentes sem médico de família?”',
          'Peça para o colocarem em lista de espera para consulta de recurso',
          'Pergunte se há atendimento complementar ao fim do dia ou ao fim de semana',
          'Verifique se não ficou associado a outra unidade depois de mudar de casa',
          'Atualize a morada no SNS/Centro de Saúde, se mudou de freguesia',
          'Se o problema for urgente — ligue para o SNS 24 diretamente do átrio e siga a triagem',
          'Se houver recusas sistemáticas sem solução — apresente reclamação no Livro de Reclamações ou através da ERS',
          'Guarde datas das chamadas, nomes, número de utente e respostas dos funcionários'
        ] },
        { kind: 'warning', text: 'Não use a urgência hospitalar como substituto do médico de família para receitas e declarações comuns. Sem encaminhamento do SNS 24, a espera pode ser longa, e o Serviço de Urgência destina-se a situações urgentes.' }
      ]
    },
    {
      id: 'five-year-rule',
      title: 'Regra dos 5 anos de inatividade a partir de junho de 2026',
      content: [
        { kind: 'paragraph', text: 'A partir de meados de junho de 2026, nos cuidados de saúde primários, será ativado um mecanismo de atualização das listas: os utentes que não tiverem tido contactos com o SNS durante 5 anos podem perder o médico de família atribuído. Até agora contava apenas o contacto com os cuidados primários; agora conta qualquer contacto com o SNS. O objetivo é libertar lugares nas listas dos médicos para pessoas que vivem efetivamente na zona e precisam de acompanhamento.' },
        { kind: 'paragraph', text: 'Isto não significa perder o número de utente nem o direito ao SNS. Está em causa a lista de um médico de família específico. Mas, para expats, o risco é prático: se saiu do país, mudou de morada, não responde a contactos ou nunca recorreu aos serviços, o sistema pode considerá-lo inativo.' },
        { kind: 'checklist', items: [
          'Uma vez por ano, verifique a Área Pessoal do SNS 24: unidade, contactos, médico de família',
          'Atualize o telefone português e o email no Centro de Saúde',
          'Depois de mudar de casa, altere a associação para a nova morada',
          'Não ignore SMS/cartas do SNS sobre confirmação de dados',
          'Mantenha pelo menos um contacto periódico: vacina, prevenção, receita, consulta',
          'Se lhe retirarem o médico, peça reinscrição e inclusão na lista de utentes sem médico de família',
          'Se vive em Portugal, mas raramente fica doente, confirme na mesma que os dados estão atualizados'
        ] }
      ]
    },
    {
      id: 'practical-limits',
      title: 'Limitações e o que ter à mão',
      content: [
        { kind: 'paragraph', text: 'A consulta aberta não é uma substituição completa de um médico de família permanente. O médico de serviço geralmente resolve um problema concreto: observação, receita, referenciação, baixa, análises. O acompanhamento a longo prazo de diabetes, hipertensão, gravidez ou psiquiatria deve ser organizado através de consultas programadas regulares.' },
        { kind: 'checklist', items: [
          'Número de utente',
          'Documento de identificação e autorização de residência/visto, se tiver',
          'NIF',
          'Lista de medicamentos com dosagens',
          'Receitas antigas, relatórios, resultados de análises',
          'Alergias e diagnósticos crónicos em português ou inglês',
          'Contactos da sua USF/UCSP e morada',
          'Telefone do SNS 24: 808 24 24 24',
          'Para emergências: 112'
        ] },
        { kind: 'warning', text: 'Se ainda não tiver número de utente, trate primeiro da inscrição no SNS no Centro de Saúde. Mas a assistência urgente, gravidez, crianças e riscos infecciosos não devem ser adiados por falta de número.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta em cuidados de saúde primários SNS', amountEUR: 0, note: 'As taxas moderadoras nos cuidados primários SNS foram abolidas; a consulta no Centro de Saúde para utente é normalmente gratuita.' },
    { label: 'Chamada para o SNS 24', amountEUR: 0, note: 'O serviço médico é gratuito; pode aplicar-se o custo da chamada segundo o tarifário do operador para o número 808.' },
    { label: 'GP/medicina geral privado sem seguro', amountEURMin: 40, amountEURMax: 90, note: 'Valor indicativo em clínicas privadas; não substitui a inscrição no SNS e não dá acesso automático a referenciações SNS.' }
  ],
  sources: [
    {
      title: 'Caixa Geral de Depósitos: o que fazer se não tiver médico de família',
      url: 'https://www.cgd.pt/Site/Saldo-Positivo/protecao/Pages/nao-tenho-medico-familia.aspx',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: acesso a consultas nos cuidados de saúde primários',
      url: 'https://www.sns24.gov.pt/guia/consulta-nos-cuidados-de-saude-primarios/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: contacto telefónico 808 24 24 24 e triagem',
      url: 'https://www.sns24.gov.pt/servico/atendimento-sns-24/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS: direitos dos utentes SNS e Livro de Reclamações',
      url: 'https://www.ers.pt/pt/utentes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
