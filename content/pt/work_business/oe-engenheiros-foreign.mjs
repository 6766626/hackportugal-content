export default {
  editorialVoice: 'hackportugal',
  id: 'oe-engenheiros-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Engenheiros: como um engenheiro estrangeiro pode obter o direito de assinar projectos',
  tldr: 'Para a maioria dos projectos de engenharia em Portugal, um diploma estrangeiro por si só não basta: para assinar peças escritas/desenhadas e termo de responsabilidade para a Câmara Municipal, é necessário ser técnico legalmente habilitado ao abrigo da Lei 31/2009 — normalmente através de uma inscrição válida na Ordem dos Engenheiros (OE) ou na Ordem dos Engenheiros Técnicos (OET) da especialidade. Em 2026, o percurso depende do país do diploma: UE/EEE — através da Lei 9/2009 e do reconhecimento da qualificação profissional; UK Chartered Engineer — através do MRA Engineering Council–OE; Brasil — através do Termo de Reciprocidade OE–CONFEA; restantes non-EU — normalmente DGES reconhecimento + candidatura à OE + relatório profissional/avaliação da experiência.',
  tags: ['engenheiros', 'projectos', 'ordem', 'dges'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-oe',
      title: 'Para que serve a Ordem dos Engenheiros',
      content: [
        { kind: 'paragraph', text: 'A Ordem dos Engenheiros (OE) é uma associação pública profissional de engenheiros. A inscrição, por si só, não substitui uma licença de construção, mas para projectar é muitas vezes o passe prático: o cliente, a Câmara Municipal, a fiscalização e a seguradora querem ver que o técnico autor tem uma inscrição válida e competência na especialidade.' },
        { kind: 'paragraph', text: 'Nos projectos para licenciamento/comunicação prévia, normalmente são entregues peças do projeto e termo de responsabilidade. Quem é técnico legalmente habilitado é definido pela Lei 31/2009 (qualificação dos técnicos de projeto, direção de obra e fiscalização) — a Câmara não verifica a inscrição em si, mas a habilitação para aquele tipo concreto de projecto. Nas disciplinas de engenharia, regra geral, trata-se de um membro efetivo da Ordem dos Engenheiros ou de um membro da Ordem dos Engenheiros Técnicos, dentro dos seus atos próprios e da especialidade; em alguns domínios a lei admite outros técnicos.' },
        { kind: 'checklist', items: [
          'Estruturas de construção: estabilidade, betão, aço, geotecnia — normalmente é necessário um engenheiro com a especialidade adequada',
          'Águas, esgotos, águas pluviais — normalmente por especialidade e habilitação; gás, eletricidade, térmica/SCE e segurança contra incêndio exigem muitas vezes registo próprio na DGEG, ADENE ou ANEPC além da OE/OET',
          'A SCIE para as 2.ª, 3.ª e 4.ª categorias de risco é assinada por técnico credenciado pela ANEPC; trabalho energético/SCE por perito qualificado ADENE — a inscrição na OE/OET não basta',
          'A assinatura de um arquitecto não substitui a de um engenheiro nas especialidades de engenharia',
          'Uma empresa estrangeira pode ser empreiteiro, mas o signatário do projecto deve ter habilitação profissional portuguesa',
          'Um PDF com assinatura sem termo de responsabilidade e número de inscrição OE muitas vezes não é aceite',
          'Em concursos e para grandes clientes, pode ser exigida uma declaração emitida pela OE sobre a situação da inscrição'
        ] }
      ]
    },
    {
      id: 'choose-route',
      title: 'Escolha o percurso consoante a origem da qualificação',
      content: [
        { kind: 'substeps', items: [
          { id: 'eu-eea', title: 'Diploma e profissão da UE/EEE/Suíça', content: [
            { kind: 'paragraph', text: 'O regime de base é a Lei 9/2009, que transpõe as regras europeias de reconhecimento das qualificações profissionais. Você apresenta à OE provas da formação, do direito a exercer a profissão no país de origem e da experiência profissional. A OE pode reconhecer a qualificação directamente ou determinar medidas de compensação, se existirem diferenças substanciais.' },
            { kind: 'checklist', items: [
              'Passaporte/ID',
              'Diploma de engenheiro e suplemento com disciplinas/ECTS',
              'Certidão do direito a exercer a profissão no país de origem, se a profissão aí for regulada',
              'Comprovativo de experiência: empregadores, projectos, funções, datas',
              'CV em português ou inglês',
              'Certidão de ausência de sanções disciplinares, se aplicável',
              'Traduções para português, se os documentos não estiverem em PT/EN/ES/FR conforme exigência da OE'
            ] }
          ]},
          { id: 'uk-ceng', title: 'UK Chartered Engineer: percurso Engineering Council — OE', content: [
            { kind: 'paragraph', text: 'Após o Brexit, o UK já não é considerado um percurso UE, mas existe um Mutual Recognition Agreement entre o Engineering Council e a Ordem dos Engenheiros. Destina-se sobretudo a Chartered Engineer (CEng) registados que pretendem obter reconhecimento profissional em Portugal.' },
            { kind: 'paragraph', text: 'Na prática, isto não é uma “substituição automática do cartão”: a OE continua a verificar documentos, disciplina, good standing e correspondência com a especialidade portuguesa. Mas o MRA reduz a incerteza e é geralmente mais forte do que uma candidatura non-EU comum sem estatuto profissional.' }
          ]},
          { id: 'non-eu', title: 'Diploma fora da UE: reconhecimento + relatório profissional', content: [
            { kind: 'paragraph', text: 'Para diplomas da Rússia, Bielorrússia, Ucrânia, Cazaquistão e outros países non-EU, a OE normalmente analisa não só o diploma, mas também o reconhecimento académico em Portugal. Um primeiro passo frequente é o reconhecimento de grau académico através da DGES/de uma instituição de ensino superior portuguesa ao abrigo do Decreto-Lei 66/2018: reconhecimento automático, de nível ou específico.' },
            { kind: 'paragraph', text: 'O Brasil é um caso à parte: para o reconhecimento académico também é non-EU, mas se estiver inscrito no sistema CONFEA/CREA, verifique o Termo de Reciprocidade em vigor entre a OE e o CONFEA. Assenta na reciprocidade total (sobre competências profissionais, sem revalidação do diploma) e dá normalmente um percurso mais rápido do que uma candidatura non-EU comum.' },
            { kind: 'paragraph', text: 'Depois, a OE avalia a candidatura. Para um engenheiro non-EU, o documento-chave é o relatório profissional: um relatório estruturado sobre projectos, responsabilidades, cálculos, normas, software, obras e o papel do candidato. O objectivo é demonstrar que você não “trabalhou apenas como engenheiro”, mas desempenhou pessoalmente funções de nível de engenheiro português.' }
          ]}
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Dossiê de documentos para a OE',
      content: [
        { kind: 'paragraph', text: 'A lista exacta depende da especialidade e do percurso, mas prepare o dossiê com antecedência. A causa mais frequente de atrasos são suplementos ao diploma incompletos, falta de traduções e um CV demasiado genérico sem provas de responsabilidade em projecto.' },
        { kind: 'checklist', items: [
          'Documento de identificação: passaporte, Cartão de Cidadão ou autorização de residência',
          'NIF e morada portuguesa para correspondência',
          'Diploma de engenheiro; para non-EU — de preferência já com reconhecimento DGES ou documento de uma instituição de ensino superior portuguesa',
          'Histórico escolar / suplemento ao diploma: disciplinas, horas, ECTS ou carga lectiva',
          'CV com datas, empregadores, cargos, tipos de projectos e o seu papel',
          'Relatório profissional: 5–15 páginas sobre projectos-chave, cálculos, normas, responsabilidades e resultados',
          'Portefólio: folhas de rosto de projectos, anonymized drawings, memórias de cálculo, exemplos BIM/CAE, se puder divulgar',
          'Declarações de empregadores ou clientes sobre funções e períodos de trabalho',
          'Certificate of good standing / disciplinary record da organização profissional, se já tiver pertencido a uma',
          'Traduções e legalização: apostila/legalização consular, se o documento tiver sido emitido fora da UE e a OE/DGES o exigir',
          'A prova de domínio do português nem sempre é formalmente exigida, mas para assinar projectos você deve compreender legislação, normas e regulamentos portugueses'
        ] },
        { kind: 'warning', text: 'Não apresente um relatório profissional “bonito” sem provas. A OE avalia competências: responsabilidade de cálculo, normas, risco, supervisão, coordenação, interação com autoridades. Uma simples enumeração de obras sem a sua função é muitas vezes devolvida para correcção.' }
      ]
    },
    {
      id: 'application',
      title: 'Como apresentar a candidatura e o que acontece depois',
      content: [
        { kind: 'paragraph', text: 'A candidatura é feita através da Ordem dos Engenheiros: formulários/contactos online no site da OE e a secção regional do local de residência ou trabalho. Antes de apresentar, confirme para que especialidade vai: civil, eletrotécnica, mecânica, informática, ambiente, química, agronómica, geológica e minas, etc. Uma especialidade errada atrasa o processo.' },
        { kind: 'checklist', items: [
          'Crie uma conta ou solicite instruções à secção regional da OE',
          'Escolha a modalidade: admissão como novo membro, reconhecimento de qualificação UE, MRA UK ou non-EU evaluation',
          'Carregue diplomas, reconhecimento, CV, relatório profissional e comprovativos de experiência',
          'Pague as taxas da OE de acordo com a tabela de emolumentos em vigor',
          'Responda aos pedidos de elementos adicionais — normalmente é dado um prazo, não ignore as mensagens',
          'Se necessário, realize entrevista, prova, estágio ou medidas de compensação',
          'Depois da aprovação, obtenha o número de membro e o estatuto; para assinar projectos, é necessário um estatuto que a OE reconheça como suficiente para essa especialidade',
          'Peça uma declaração de inscrição/regularidade, se a Câmara Municipal ou o cliente a exigir'
        ] },
        { kind: 'paragraph', text: 'Os prazos dependem muito do dossiê e da especialidade: uma candidatura simples com diploma europeu pode avançar mais depressa; uma non-EU com reconhecimento e relatório profissional pode demorar meses. Planeie a assinatura de um projecto real só depois de receber a confirmação da OE, não depois de enviar a candidatura.' }
      ]
    },
    {
      id: 'signing-projects',
      title: 'Assinatura de projectos: o que a Câmara e os clientes verificam',
      content: [
        { kind: 'paragraph', text: 'Quando a inscrição é obtida, isso ainda não significa o direito de assinar qualquer secção de engenharia. Consulte a habilitação por especialidade, os requisitos do município concreto e os regimes especiais: segurança contra incêndio, gás, eletricidade, térmica/REH/RECS, acústica, estruturas especiais.' },
        { kind: 'checklist', items: [
          'No termo de responsabilidade, indique o nome completo, número OE, especialidade e papel no projecto',
          'Verifique se a Câmara exige uma declaração da Ordem recente — por vezes só aceitam um documento emitido recentemente',
          'Use assinatura electrónica qualificada, se o processo decorrer através de plataforma urbanística',
          'Não assine secções fora da sua competência: é um risco disciplinar e segurador',
          'Guarde cálculos, versões de desenhos e correspondência: a fiscalização pode pedir fundamentação',
          'Confirme com a seguradora a responsabilidade civil profissional: a inscrição na OE não equivale a cobertura automática de todos os riscos',
          'Para projectos ao abrigo de normas portuguesas, use Eurocódigos, legislação nacional e regulamentos municipais, não apenas as normas do país de origem',
          'Antes de assinar secções especiais, verifique o registo/entidade competente próprio: ANEPC para SCIE (categorias de risco 2–4), ADENE/SCE para o perito qualificado e certificação energética, DGEG/entidade inspetora para gás e eletricidade — uma declaração da OE não substitui estes registos'
        ] },
        { kind: 'warning', text: 'Assinar “por um amigo”, assinar um projecto que não verificou ou usar o número OE de outra pessoa é um risco directo de processo disciplinar, responsabilidade civil e recusa da Câmara no licenciamento.' }
      ]
    },
    {
      id: 'practical-advice',
      title: 'Conselhos práticos para um engenheiro estrangeiro',
      content: [
        { kind: 'paragraph', text: 'Se o seu objectivo é trabalhar em Portugal, e não apenas obter um estatuto bonito, comece pelo mercado: encontre um gabinete de engenharia local e faça os primeiros projectos sob supervisão de um senior engineer português. Isto acelera a compreensão da Câmara, das plataformas municipais, dos Eurocódigos, REH/RECS e dos procedimentos de licenciamento.' },
        { kind: 'checklist', items: [
          'Antes da mudança, reúna originais de diplomas, suplementos, declarações de empregadores e apostila',
          'Faça uma tabela de correspondência entre as suas disciplinas e a especialidade OE portuguesa',
          'Para non-EU, inicie antecipadamente o reconhecimento DGES: sem ele, a OE pode não aceitar a parte académica',
          'Se for CEng do UK, obtenha primeiro junto do Engineering Council a confirmação de estatuto e good standing',
          'Obtenha uma certified translation dos documentos principais para português por um método aceite pela OE/DGES: tradução certificada por notário, advogado, solicitador ou consulado (Portugal não tem um sistema único de “tradutor juramentado” — confirme os requisitos da entidade recetora)',
          'No relatório profissional, escreva de forma concreta: obra, ano, área/potência, normas, cálculo, a sua assinatura ou responsabilidade',
          'Não prometa ao cliente um prazo de licenciamento enquanto a OE não confirmar a habilitação',
          'Após a inscrição, acompanhe quotas e regularidade: atrasos no pagamento das quotas podem prejudicar a declaração para a Câmara'
        ] }
      ]
    }
  ],
  costs: [
    {
      label: 'Reconhecimento académico DGES/instituição de ensino superior',
      amountEURMin: 27.3,
      amountEURMax: 600,
      note: 'Depende do tipo de reconhecimento e da instituição; o específico é normalmente mais caro do que o automático.'
    },
    {
      label: 'Traduções, apostila, certificações',
      amountEURMin: 20,
      amountEURMax: 250,
      note: 'Por documento/dossiê; depende do país de emissão e do volume do suplemento ao diploma.'
    },
    {
      label: 'Taxas e quotas da Ordem dos Engenheiros',
      amountEURMin: 0,
      amountEURMax: 300,
      note: 'Consulte a tabela de emolumentos OE actualizada: os valores dependem do tipo de candidatura, do estatuto e da secção.'
    }
  ],
  sources: [
    {
      title: 'Ordem dos Engenheiros — site oficial e regras de admissão',
      url: 'https://www.ordemengenheiros.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Engineering Council — Mutual Recognition Agreement com a Ordem dos Engenheiros',
      url: 'https://www.engc.org.uk/international-activity/european-recognition/mutual-recognition-agreement-portugal/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 9/2009 — reconhecimento das qualificações profissionais',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34532975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 31/2009 — qualificação dos técnicos de projeto, direção e fiscalização de obra',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/31-2009-491903',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'ANEPC — credenciação de técnicos de SCIE (segurança contra incêndio em edifícios)',
      url: 'https://prociv.gov.pt/pt/seguranca-contra-incendio/servicos/credenciacao-de-entidades/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'DGES — reconhecimento de graus e diplomas estrangeiros',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
