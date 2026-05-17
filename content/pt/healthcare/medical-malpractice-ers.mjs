export default {
  editorialVoice: 'hackportugal',
  id: 'medical-malpractice-ers',
  categoryId: 'healthcare',
  title: 'Queixa sobre cuidados médicos: ERS, Ordem dos Médicos, tribunal',
  tldr: 'Se em Portugal os cuidados médicos foram mal prestados, comece por registar o facto através do Livro de Reclamações — em papel na clínica ou eletrónico. A ERS aprecia queixas sobre entidades do SNS, clínicas privadas e setor social: acesso, qualidade, espera, faturas, direitos do paciente. A Ordem dos Médicos é necessária para uma queixa disciplinar contra um médico. A ERS, em regra, não atribui indemnização por danos: o dinheiro é reclamado através de uma reclamação formal, da seguradora ou do tribunal.',
  tags: ['ers', 'queixa', 'medicina', 'tribunal'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-channel',
      title: 'Onde apresentar queixa: ERS, Ordem dos Médicos ou tribunal',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe um único “provedor médico” universal. O canal depende do objetivo: corrigir o funcionamento da clínica, responsabilizar disciplinarmente o médico ou obter indemnização.' },
        { kind: 'checklist', items: [
          'ERS — Entidade Reguladora da Saúde: queixas sobre hospitais, clínicas, centros de saúde, consultórios, laboratórios, clínicas dentárias, entidades privadas e públicas.',
          'A ERS é adequada se tiverem sido violados direitos do paciente: recusa de atendimento, má organização, fatura pouco clara, falta de informação, atraso no acesso, problemas com consentimento informado, queixa sobre a qualidade dos cuidados.',
          'Ordem dos Médicos — se a reclamação for pessoalmente contra o médico: violação grave da deontologia, negligência, conflito de interesses, comportamento inadequado, violação do segredo médico.',
          'Ordem dos Enfermeiros / Ordem dos Farmacêuticos / Ordem dos Médicos Dentistas — se a queixa for contra um enfermeiro, farmacêutico ou médico dentista.',
          'Tribunal — se for necessária indemnização por dano à saúde, dano moral, perda de rendimentos, despesas de tratamento ou reconhecimento de negligência médica.',
          'Polícia / Ministério Público — se houver indícios de crime: falsificação, abandono, agressão, morte ou dano grave com suspeita de negligência criminal.',
          'Livro de Reclamações — ponto de entrada de base: o registo segue automaticamente para a entidade e para o regulador, e uma cópia fica consigo.'
        ] },
        { kind: 'warning', text: 'A ERS não é um tribunal e, em regra, não atribui indemnização ao paciente. Pode pedir esclarecimentos, abrir um processo administrativo, dar instruções à entidade e aplicar sanções, mas a cobrança de dinheiro é uma reclamação separada ou tribunal.' }
      ]
    },
    {
      id: 'collect-evidence',
      title: 'Reúna provas antes de apresentar a queixa',
      content: [
        { kind: 'paragraph', text: 'Uma queixa sem documentos transforma-se muitas vezes numa disputa de “palavra contra palavra”. Primeiro peça os registos médicos e guarde todos os vestígios de comunicação.' },
        { kind: 'checklist', items: [
          'Identificação da entidade: nome, morada, NIPC/NIF se existir, serviço, data e hora da consulta.',
          'Nomes dos profissionais: médico, enfermeiro, técnico, receção; se não houver nome — gabinete, turno, número de marcação.',
          'Comprovativo de marcação, SMS, e-mail, número de episódio, pulseira hospitalar, triagem Manchester, relatório de urgência.',
          'Fatura-recibo, orçamento, comprovativo Multibanco/MB WAY, documentos da seguradora.',
          'Resultados de análises, exames, prescription, relatório médico, discharge letter.',
          'Cronologia: o que aconteceu, quem disse o quê, quando surgiram sintomas ou agravamento.',
          'Fotografias, se for adequado: lesão, queimadura, condições do quarto, documentos com datas.',
          'Contactos de testemunhas: acompanhante, intérprete, outro paciente — apenas com o consentimento delas.',
          'Pedido de cópia do processo clínico / ficha clínica. O paciente tem direito de acesso aos seus dados médicos; a entidade pode exigir pedido escrito e documento de identificação.',
          'Se não domina o português, junte uma descrição breve em português ou inglês. A ERS aceita queixas online, mas é melhor escrever os factos da forma mais estruturada possível.'
        ] },
        { kind: 'warning', text: 'Não publique nas redes sociais nomes de médicos, diagnósticos de outros pacientes, fotografias de funcionários ou gravações áudio do consultório sem avaliação jurídica. Isso pode criar riscos separados em matéria de proteção de dados e difamação.' }
      ]
    },
    {
      id: 'livro-reclamacoes',
      title: 'Livro de Reclamações: o rasto oficial mais rápido',
      content: [
        { kind: 'paragraph', text: 'Cada entidade que presta serviços ao consumidor deve ter Livro de Reclamações. Na medicina, isto funciona tanto para clínicas privadas como para muitos serviços públicos através do regulador competente.' },
        { kind: 'substeps', items: [
          {
            id: 'physical-book',
            title: 'Livro em papel na clínica',
            content: [
              { kind: 'checklist', items: [
                'Peça: “Quero fazer uma reclamação no Livro de Reclamações”.',
                'Preencha de forma legível: nome, contactos, data, factos, o que exige.',
                'Escreva factos, não emoções: “às 10:30 recusaram atender apesar de haver marcação”, “não forneceram relatório”, “a fatura não corresponde ao orçamento”.',
                'Leve a cópia da folha. Este é o seu principal comprovativo de apresentação.',
                'Se não lhe derem o livro — indique isso numa queixa separada à ERS e, se necessário, chame a PSP/GNR para registar a recusa.'
              ] }
            ]
          },
          {
            id: 'electronic-book',
            title: 'Livro de Reclamações Eletrónico',
            content: [
              { kind: 'paragraph', text: 'Pode apresentar online através do Livro de Reclamações Eletrónico. Escolhe o prestador do serviço, descreve o facto e anexa documentos. A resposta costuma chegar por e-mail.' },
              { kind: 'checklist', items: [
                'Adequado se já saiu da clínica ou se quer anexar ficheiros.',
                'Guarde o número da queixa e a confirmação de submissão.',
                'Não duplique a mesma queixa dez vezes: é melhor complementá-la com novos documentos.',
                'Se a entidade não for encontrada no sistema, apresente diretamente à ERS através do canal de reclamações.'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'O Livro de Reclamações não substitui cuidados médicos urgentes. Se o estado se agravar, primeiro 112, SNS 24 pelo 808 24 24 24 ou urgência, depois a queixa.' }
      ]
    },
    {
      id: 'ers-complaint',
      title: 'Queixa à ERS: quando e como',
      content: [
        { kind: 'paragraph', text: 'A ERS regula o setor da saúde: prestadores públicos, privados e sociais. Para um expat, é o principal canal se o problema estiver relacionado com acesso, qualidade do serviço, organização, faturação ou direitos do paciente.' },
        { kind: 'checklist', items: [
          'Apresente através do formulário da ERS para reclamações ou através do Livro de Reclamações.',
          'Indique o que pretende: resposta da entidade, correção da fatura, emissão de relatório, explicação da recusa, verificação do procedimento, reembolso do montante.',
          'Anexe cópias: fatura, relatório, e-mails, screenshots, fotografias, número do Livro de Reclamações.',
          'Escreva a cronologia por datas: “01.04.2026 consulta”, “03.04.2026 agravamento”, “04.04.2026 urgência”.',
          'Separe a opinião médica dos factos: “parece-me que o diagnóstico está errado” deve, idealmente, ser sustentado por uma segunda opinião ou por um novo relatório.',
          'Se a queixa estiver relacionada com discriminação por língua, nacionalidade, gravidez, deficiência — indique-o expressamente.',
          'Se a questão for urgente, escreva “urgente” e explique o risco: falta de medicamento, recusa de follow-up, complicação post-op.'
        ] },
        { kind: 'paragraph', text: 'Depois da submissão, a ERS pode encaminhar a queixa para a entidade, pedir resposta, abrir uma verificação administrativa ou usar a informação para supervisão. As respostas nem sempre são rápidas: conte com semanas ou meses, especialmente se forem necessários esclarecimentos clínicos.' },
        { kind: 'warning', text: 'A ERS não substitui uma segunda opinião médica. Se houver risco para a saúde, vá a outro médico, à urgência ou a uma clínica privada, e depois inclua as despesas e os documentos na reclamação.' }
      ]
    },
    {
      id: 'ordem-and-court',
      title: 'Ordem dos Médicos e tribunal: quando é necessário o nível seguinte',
      content: [
        { kind: 'paragraph', text: 'Se o problema não estiver apenas na clínica, mas no comportamento de um médico concreto, apresente uma queixa disciplinar à Ordem dos Médicos. Se pretende um resultado financeiro — prepare uma reclamação formal e a via judicial.' },
        { kind: 'checklist', items: [
          'Na Ordem dos Médicos indique o nome completo do médico, número da cédula profissional se souber, local de trabalho, data, factos e documentos.',
          'A queixa disciplinar pode terminar em arquivamento, advertência ou sanção disciplinar, mas não no pagamento de indemnização ao paciente.',
          'Para indemnização, peça primeiro o processo clínico e obtenha uma opinião médica independente junto de outro especialista.',
          'Verifique quem é o réu: clínica privada, médico, hospital público, seguradora, Administração Regional de Saúde / Unidade Local de Saúde.',
          'Regra geral, a responsabilidade civil por danos muitas vezes esbarra no prazo de 3 anos a contar do conhecimento do dano e da pessoa responsável, nos termos do Código Civil art. 498; em certas situações contratuais ou públicas, os prazos e a competência do tribunal podem ser diferentes.',
          'Para um hospital público, pode aplicar-se o regime de responsabilidade do Estado e das entidades públicas; estes casos são muitas vezes mais complexos e exigem advogado.',
          'Se o prejuízo for pequeno, comece por uma reclamação escrita à entidade e à seguradora: por vezes a questão resolve-se sem tribunal.',
          'Se houver dano grave, incapacidade, morte, erro cirúrgico, lesão no parto — procure de imediato um advogado com experiência em responsabilidade médica.'
        ] },
        { kind: 'warning', text: 'Não espere pelo fim da ERS se estiver a aproximar-se o prazo de prescrição. A queixa ao regulador normalmente não garante a suspensão dos prazos civis. Para danos graves, obtenha aconselhamento jurídico o mais cedo possível.' }
      ]
    }
  ],
  costs: [
    { label: 'Queixa à ERS', amountEUR: 0, note: 'A apresentação através da ERS ou do Livro de Reclamações é gratuita.' },
    { label: 'Livro de Reclamações', amountEUR: 0, note: 'A queixa em papel ou eletrónica é gratuita para o paciente.' },
    { label: 'Queixa disciplinar à Ordem dos Médicos', amountEUR: 0, note: 'Normalmente, a apresentação da queixa não exige taxa; podem existir despesas com cópias, traduções e apoio jurídico.' },
    { label: 'Segunda opinião médica / relatório pericial', amountEURMin: 150, amountEURMax: 1500, note: 'Depende da especialidade, do volume de documentos e da urgência; a perícia judicial pode custar mais.' },
    { label: 'Taxas de justiça', amountEURMin: 102, amountEURMax: 612, note: 'Referência de taxa de justiça para ações cíveis típicas, dependente do valor da ação; a Unidade de Conta em 2026 é usada como 102 €.' }
  ],
  sources: [
    {
      title: 'ERS: reclamações por utentes de cuidados de saúde',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
