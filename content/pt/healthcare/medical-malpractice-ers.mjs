export default {
  editorialVoice: 'hackportugal',
  id: 'medical-malpractice-ers',
  categoryId: 'healthcare',
  title: 'Reclamação sobre cuidados médicos: ERS, Ordem dos Médicos, tribunal',
  tldr: 'Se, em Portugal, lhe prestaram cuidados médicos de forma inadequada, comece por registar o facto através do Livro de Reclamações — em papel na clínica ou eletrónico. A ERS analisa reclamações sobre entidades do SNS, clínicas privadas e o setor social: acesso, qualidade, espera, faturas, direitos do paciente. A Ordem dos Médicos é necessária para uma queixa disciplinar contra um médico. A ERS normalmente não atribui indemnização por danos: o dinheiro é reclamado através de reclamação extrajudicial, seguradora ou tribunal.',
  tags: ['ers', 'reclamação', 'medicina', 'tribunal'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-channel',
      title: 'Onde reclamar: ERS, Ordem dos Médicos ou tribunal',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe um único “provedor médico” universal. O canal depende do objetivo: corrigir o funcionamento da clínica, sancionar disciplinarmente o médico ou obter indemnização.' },
        { kind: 'checklist', items: [
          'ERS — Entidade Reguladora da Saúde: reclamações sobre hospitais, clínicas, centros de saúde, consultórios, laboratórios, medicina dentária, entidades privadas e públicas.',
          'A ERS é adequada se foram violados direitos do paciente: recusa de atendimento, má organização, fatura pouco clara, falta de informação, atraso no acesso, problemas com consentimento informado, reclamação sobre a qualidade dos cuidados.',
          'Ordem dos Médicos — se a queixa for pessoalmente contra o médico: violação grave da deontologia, negligência, conflito de interesses, comportamento inadequado, violação do sigilo médico.',
          'Ordem dos Enfermeiros / Ordem dos Farmacêuticos / Ordem dos Médicos Dentistas — se a reclamação for contra um enfermeiro, farmacêutico ou médico dentista.',
          'Tribunal — se for necessária indemnização por danos à saúde, danos morais, perda de rendimento, despesas de tratamento ou reconhecimento de negligência médica.',
          'Polícia / Ministério Público — se houver indícios de crime: falsificação, abandono, agressão, morte ou dano grave com suspeita de negligência criminal.',
          'Livro de Reclamações — ponto de entrada básico: o registo segue automaticamente para a entidade e para o regulador, e fica consigo uma cópia.'
        ] },
        { kind: 'warning', text: 'A ERS não é um tribunal e normalmente não atribui indemnização ao paciente. Pode pedir esclarecimentos, abrir um processo administrativo, dar instruções à entidade e aplicar sanções, mas a cobrança de dinheiro é uma reclamação separada ou tribunal.' }
      ]
    },
    {
      id: 'collect-evidence',
      title: 'Reúna provas antes de apresentar a reclamação',
      content: [
        { kind: 'paragraph', text: 'Uma reclamação sem documentos transforma-se muitas vezes numa disputa de “palavra contra palavra”. Primeiro peça os registos médicos e guarde todos os vestígios de comunicação.' },
        { kind: 'checklist', items: [
          'Identificação da entidade: nome, morada, NIPC/NIF se existir, serviço, data e hora da consulta.',
          'Nomes dos profissionais: médico, enfermeiro, técnico, receção; se não houver nome — gabinete, turno, número do registo.',
          'Comprovativo de marcação, SMS, e-mail, número do episódio, pulseira hospitalar, triagem Manchester, relatório de urgência.',
          'Fatura-recibo, orçamento, comprovativo Multibanco/MB WAY, documentos da seguradora.',
          'Resultados de análises, exames, prescrição, relatório médico, carta de alta.',
          'Cronologia: o que aconteceu, quem disse o quê, quando surgiram sintomas ou agravamento.',
          'Fotografias, se for adequado: lesão, queimadura, condições do quarto, documentos com datas.',
          'Contactos de testemunhas: acompanhante, intérprete, outro paciente — apenas com o seu consentimento.',
          'Pedido de cópia do processo clínico / ficha clínica. O paciente tem direito de acesso aos seus dados médicos; a entidade pode exigir pedido por escrito e documento de identificação.',
          'Se não domina o português, anexe uma breve descrição em português ou inglês. A ERS aceita reclamações online, mas é melhor escrever os factos de forma o mais estruturada possível.'
        ] },
        { kind: 'warning', text: 'Não publique nas redes sociais nomes de médicos, diagnósticos de outros pacientes, fotografias de funcionários ou gravações áudio do consultório sem avaliação jurídica. Isto pode criar riscos separados em matéria de proteção de dados e difamação.' }
      ]
    },
    {
      id: 'livro-reclamacoes',
      title: 'Livro de Reclamações: o rasto oficial mais rápido',
      content: [
        { kind: 'paragraph', text: 'Cada entidade que presta serviços ao consumidor deve ter Livro de Reclamações. Na área da saúde, isto funciona tanto para clínicas privadas como para muitos serviços públicos através do regulador competente.' },
        { kind: 'substeps', items: [
          {
            id: 'physical-book',
            title: 'Livro em papel na clínica',
            content: [
              { kind: 'checklist', items: [
                'Peça: “Quero fazer uma reclamação no Livro de Reclamações”.',
                'Preencha de forma legível: nome, contactos, data, factos, o que exige.',
                'Escreva factos, não emoções: “às 10:30 recusaram o atendimento apesar de existir marcação”, “não forneceram relatório”, “a fatura não corresponde ao orçamento”.',
                'Leve a cópia da página. É o seu principal comprovativo de apresentação.',
                'Se não lhe entregarem o livro — indique isso numa reclamação separada à ERS e, se necessário, chame a PSP/GNR para registar a recusa.'
              ] }
            ]
          },
          {
            id: 'electronic-book',
            title: 'Livro de Reclamações Eletrónico',
            content: [
              { kind: 'paragraph', text: 'Pode apresentar online através do Livro de Reclamações Eletrónico. Escolhe o prestador do serviço, descreve o facto e anexa documentos. A resposta normalmente chega por e-mail.' },
              { kind: 'checklist', items: [
                'É adequado se já saiu da clínica ou se quer anexar ficheiros.',
                'Guarde o número da reclamação e a confirmação de apresentação.',
                'Não duplique a mesma reclamação dez vezes: é melhor complementá-la com novos documentos.',
                'Se a entidade não for encontrada no sistema, apresente diretamente à ERS através do canal de reclamações.'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'O Livro de Reclamações não substitui cuidados médicos urgentes. Se o estado se agravar, primeiro 112, SNS 24 pelo 808 24 24 24 ou urgência, depois a reclamação.' }
      ]
    },
    {
      id: 'ers-complaint',
      title: 'Reclamação à ERS: quando e como',
      content: [
        { kind: 'paragraph', text: 'A ERS regula o setor da saúde: prestadores públicos, privados e sociais. Para expatriados, este é o canal principal se o problema estiver relacionado com acesso, qualidade do serviço, organização, faturação ou direitos do paciente.' },
        { kind: 'checklist', items: [
          'Apresente através do formulário da ERS para reclamações ou através do Livro de Reclamações.',
          'Indique o que pretende: resposta da entidade, correção da fatura, emissão de relatório, explicação da recusa, verificação do procedimento, reembolso do valor.',
          'Anexe cópias: fatura, relatório, e-mails, screenshots, fotografias, número do Livro de Reclamações.',
          'Escreva a cronologia por datas: “01.04.2026 consulta”, “03.04.2026 agravamento”, “04.04.2026 urgência”.',
          'Separe a opinião médica dos factos: “parece-me que o diagnóstico está errado” deve, de preferência, ser sustentado por uma segunda opinião ou por um novo relatório.',
          'Se a reclamação estiver relacionada com discriminação por língua, nacionalidade, gravidez, deficiência — indique-o expressamente.',
          'Se a questão for urgente, escreva “urgente” e explique o risco: falta de medicamento, recusa de follow-up, complicação pós-operatória.'
        ] },
        { kind: 'paragraph', text: 'Depois da apresentação, a ERS pode reencaminhar a reclamação para a entidade, pedir resposta, abrir uma verificação administrativa ou usar a informação para supervisão. As respostas nem sempre são rápidas: conte com semanas ou meses, sobretudo se forem necessários esclarecimentos clínicos.' },
        { kind: 'warning', text: 'A ERS não substitui uma segunda opinião médica. Se houver risco para a saúde, vá a outro médico, à urgência ou a uma clínica privada, e depois inclua as despesas e documentos na reclamação.' }
      ]
    },
    {
      id: 'ordem-and-court',
      title: 'Ordem dos Médicos e tribunal: quando é necessário o nível seguinte',
      content: [
        { kind: 'paragraph', text: 'Se o problema não estiver apenas na clínica, mas no comportamento de um médico específico, apresente uma queixa disciplinar à Ordem dos Médicos. Se precisar de um resultado financeiro — prepare a reclamação e a via judicial.' },
        { kind: 'checklist', items: [
          'Na Ordem dos Médicos indique o nome completo do médico, número da cédula profissional se souber, local de trabalho, data, factos e documentos.',
          'A queixa disciplinar pode terminar em arquivamento, advertência ou sanção disciplinar, mas não no pagamento de indemnização ao paciente.',
          'Para indemnização, primeiro peça o processo clínico e obtenha uma opinião médica independente de outro especialista.',
          'Verifique quem é o demandado: clínica privada, médico, hospital público, seguradora, Administração Regional de Saúde / Unidade Local de Saúde.',
          'Regra geral, a responsabilidade civil por danos muitas vezes depende do prazo de 3 anos a contar do conhecimento do dano e da pessoa responsável, nos termos do Código Civil art. 498; em certas situações contratuais ou públicas, os prazos e a competência do tribunal podem diferir.',
          'Para hospital público pode aplicar-se o regime de responsabilidade do Estado e das entidades públicas; estes casos são frequentemente mais complexos e exigem advogado.',
          'Se o prejuízo for pequeno, comece por uma reclamação escrita à entidade e à seguradora: por vezes a questão resolve-se sem tribunal.',
          'Se houver dano grave, incapacidade, morte, erro cirúrgico, lesão no parto — contacte de imediato um advogado com experiência em responsabilidade médica.'
        ] },
        { kind: 'warning', text: 'Não espere pelo fim do processo na ERS se o prazo de prescrição estiver a aproximar-se. A reclamação ao regulador normalmente não garante a suspensão dos prazos civis. Para danos graves, obtenha aconselhamento jurídico o mais cedo possível.' }
      ]
    }
  ],
  costs: [
    { label: 'Reclamação à ERS', amountEUR: 0, note: 'A apresentação através da ERS ou do Livro de Reclamações é gratuita.' },
    { label: 'Livro de Reclamações', amountEUR: 0, note: 'A reclamação em papel ou eletrónica é gratuita para o paciente.' },
    { label: 'Queixa disciplinar à Ordem dos Médicos', amountEUR: 0, note: 'Normalmente a apresentação da queixa não exige taxa; podem existir custos com cópias, traduções e apoio jurídico.' },
    { label: 'Segunda opinião médica / relatório pericial', amountEURMin: 150, amountEURMax: 1500, note: 'Depende da especialidade, do volume de documentos e da urgência; uma perícia judicial pode custar mais.' },
    { label: 'Taxas de justiça', amountEURMin: 102, amountEURMax: 612, note: 'Valor indicativo da taxa de justiça para ações cíveis típicas, dependente do valor da ação; a Unidade de Conta em 2026 é usada como 102 €.' }
  ],
  sources: [
    {
      title: 'ERS: reclamações de utentes dos cuidados de saúde',
      url: 'https://www.ers.pt/en/users/complaints/',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS: canal de denúncias da ERS',
      url: 'https://www.ers.pt/pt/institucional/canal-de-denuncias-da-ers/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Ordem dos Médicos: participação disciplinar e deontologia médica',
      url: 'https://ordemdosmedicos.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código Civil português, art. 498 — prescrição da responsabilidade civil',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
