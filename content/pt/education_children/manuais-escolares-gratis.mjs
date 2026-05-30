export default {
  editorialVoice: 'hackportugal',
  id: 'manuais-escolares-gratis',
  categoryId: 'education_children',
  title: 'Manuais escolares gratuitos do 1.º ao 12.º ano: Programa Manuais',
  tldr: 'Nas escolas públicas em Portugal, os manuais escolares de todo o ensino obrigatório (1.º-12.º ano) são disponibilizados gratuitamente através do Programa Manuais Escolares Gratuitos: o encarregado de educação recebe vouchers MEGA e troca-os por livros numa livraria ou na escola. O programa é universal, não depende do rendimento nem da ASE. No fim do ano, a maioria dos manuais deve ser devolvida para reutilização; os cadernos de atividades e consumíveis são normalmente comprados à parte.',
  tags: ['escola', 'manuais', 'mega', 'manuais escolares'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que é exatamente gratuito',
      content: [
        { kind: 'paragraph', text: 'O Programa Manuais Escolares Gratuitos é um regime público de distribuição gratuita de manuais escolares. Para a família, funciona através de vouchers eletrónicos MEGA: cada voucher corresponde a um manual específico da lista da escola.' },
        { kind: 'checklist', items: [
          'São abrangidos os manuais principais aprovados pela escola para um ano e turma específicos.',
          'Em todo o ensino obrigatório (1.º-12.º ano) na escola pública, o programa aplica-se independentemente do rendimento da família.',
          'Não é um apoio ASE: o direito a manuais gratuitos não exige estatuto de família carenciada.',
          'A criança deve estar matriculada na escola através do Portal das Matrículas / ePortugal ou diretamente através da escola, se o estabelecimento de ensino assim o solicitar.',
          'Os livros novos ou usados são entregues mediante voucher — a família não escolhe o formato.',
          'Cadernos de atividades, cadernos, material de papelaria, mochila, calculadora e materiais para Educação Visual são normalmente pagos à parte.',
          'A educação pré-escolar não está incluída: o 1.º ano começa normalmente aos 6 anos, e não aos 4.',
          'Nas escolas privadas sem contrato com o Estado, normalmente não há direito a manuais gratuitos.'
        ] }
      ]
    },
    {
      id: 'get-access',
      title: 'Como obter os vouchers MEGA',
      content: [
        { kind: 'substeps', items: [
          { id: 'matricula', title: '1. Confirme que a matrícula foi aceite', content: [
            { kind: 'paragraph', text: 'Primeiro, a criança tem de estar matriculada para o ano letivo. Para anos de transição e primeiras matrículas, usa-se o Portal das Matrículas no ePortugal; nos restantes casos, a renovação é muitas vezes automática, mas a escola pode pedir a confirmação dos dados.' },
            { kind: 'checklist', items: [
              'NIF da criança, se já existir.',
              'NIF do encarregado de educação — o progenitor ou tutor que trata dos assuntos escolares.',
              'Documento de identificação da criança: passaporte, Cartão de Cidadão, autorização de residência ou outro documento.',
              'Morada de residência em Portugal.',
              'Contactos do encarregado de educação: email e telefone.',
              'Dados sobre a escola anterior, se a criança vier de outro país ou mudar de escola.'
            ] }
          ] },
          { id: 'mega-registration', title: '2. Registe-se na plataforma MEGA', content: [
            { kind: 'paragraph', text: 'Depois de a escola processar a matrícula e carregar as listas, o encarregado de educação acede à plataforma MEGA / Manuais Escolares e associa o aluno ao seu NIF. A autenticação é normalmente feita através do NIF e dos dados do encarregado de educação; a escola deve ter registado o mesmo adulto responsável.' },
            { kind: 'warning', text: 'Se o MEGA indicar que o aluno não foi encontrado, isso nem sempre é um erro. Muitas vezes, a escola ainda não fechou a turma, não carregou a lista de manuais ou tem outro encarregado de educação indicado no sistema.' }
          ] },
          { id: 'download-vouchers', title: '3. Descarregue os vouchers', content: [
            { kind: 'paragraph', text: 'Os vouchers costumam aparecer por fases, mais perto do início do ano letivo: primeiro para alguns anos, depois para outros. Na prática, as famílias verificam o MEGA em agosto-setembro e, por vezes, recebem parte dos vouchers já depois do início das aulas.' },
            { kind: 'checklist', items: [
              'Descarregue o PDF ou mostre o voucher no telemóvel.',
              'Confirme o nome do aluno, o ano, a escola e a disciplina.',
              'Haverá um código separado para cada manual.',
              'Não compre livros antecipadamente se a escola não tiver confirmado que o voucher não será emitido.',
              'Guarde o email e o acesso ao MEGA até ao fim do ano letivo.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'redeem',
      title: 'Onde trocar os vouchers por livros',
      content: [
        { kind: 'paragraph', text: 'Os vouchers são usados em livrarias aderentes, grandes cadeias, lojas online ou, por vezes, diretamente através da escola. O método concreto depende do tipo de voucher e da disponibilidade dos livros.' },
        { kind: 'checklist', items: [
          'Abra a lista de aderentes na plataforma MEGA ou confirme junto da escola.',
          'Mostre o código QR / código do voucher e o documento do encarregado de educação, se a loja pedir verificação.',
          'Confirme que recebeu exatamente o manual do ano e da disciplina corretos.',
          'Se o livro for usado, verifique se não há páginas arrancadas nem anotações graves.',
          'Se o manual não estiver disponível, a loja pode encomendá-lo; o prazo depende da editora e da época.',
          'Não entregue o voucher por outro manual ou por um “equivalente” sem confirmação da escola.',
          'Guarde o recibo ou a confirmação de entrega até ao fim de setembro.'
        ] },
        { kind: 'warning', text: 'O voucher não pode, na prática, ser “levantado em dinheiro”: não é dinheiro, mas sim o direito a receber um manual específico. Se comprou o manual com o seu dinheiro antes da emissão do voucher, o reembolso do valor normalmente não é garantido.' }
      ]
    },
    {
      id: 'return-books',
      title: 'Devolução dos manuais no fim do ano',
      content: [
        { kind: 'paragraph', text: 'A ideia do programa é a reutilização. Por isso, no fim do ano letivo, a escola recolhe a maioria dos manuais, verifica o estado e volta a colocá-los em circulação para os alunos seguintes.' },
        { kind: 'checklist', items: [
          'O prazo de devolução é definido pela escola, normalmente depois do fim das aulas ou depois dos exames.',
          'Os manuais devem ser devolvidos sem danos graves, páginas arrancadas ou anotações que os tornem inutilizáveis.',
          'Escreva a lápis ou use marcadores de página, se a escola avisar que os manuais terão de ser devolvidos.',
          'Não plastifique páginas de forma permanente nem recorte exercícios.',
          'Os manuais do 1.º ciclo podem ter um regime especial, porque as crianças escrevem frequentemente diretamente no livro; confirme junto da escola.',
          'Os cadernos de atividades e materiais consumíveis normalmente não são devolvidos.',
          'Se o livro se perder ou ficar danificado, a escola pode exigir a sua substituição ou o pagamento do valor.'
        ] },
        { kind: 'warning', text: 'Não ignore a devolução. Em caso de não devolução ou dano, a escola pode bloquear a emissão de novos vouchers até a situação ficar regularizada.' }
      ]
    },
    {
      id: 'expat-edge-cases',
      title: 'Se acabou de se mudar ou se a criança não fala português',
      content: [
        { kind: 'paragraph', text: 'As famílias estrangeiras têm as mesmas regras para manuais gratuitos se a criança estiver matriculada numa escola pública portuguesa. A nacionalidade e a posse de Cartão de Cidadão não são condição para os manuais; o mais importante é a matrícula, os dados do aluno e o NIF do encarregado de educação.' },
        { kind: 'checklist', items: [
          'Se a criança não tiver NIF, pergunte à escola como irá inseri-la no sistema; o NIF do encarregado de educação é quase sempre necessário.',
          'Se chegou em agosto-setembro, primeiro assegure uma vaga na escola e depois aguarde que o aluno apareça no MEGA.',
          'Para crianças vindas de outro país, a escola pode determinar a equivalência e o ano de escolaridade após analisar os documentos.',
          'Peça a lista de manuais antes de comprar materiais adicionais: diferentes escolas usam diferentes editoras.',
          'Para Português Língua Não Materna, pode haver materiais separados; nem todos entram no conjunto padrão.',
          'Se no MEGA constarem dados antigos do encarregado de educação, a escola deve atualizar o encarregado de educação.',
          'Em caso de divergência, escreva um email para a secretaria da escola: um registo escrito ajuda a corrigir mais rapidamente a matrícula ou o voucher.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Manuais escolares do 1.º-12.º ano com vouchers MEGA', amountEUR: 0, note: 'Para alunos da escola pública; são entregues como novos ou usados no sistema de reutilização.' },
    { label: 'Cadernos de atividades e material de papelaria', amountEURMin: 30, amountEURMax: 150, note: 'Estimativa por criança por ano; depende do ano, da escola e das exigências dos professores.' }
  ],
  sources: [
    { title: 'DGE — Manuais Escolares (avaliação, certificação e reutilização)', url: 'https://www.dge.mec.pt/manuais-escolares', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'IGeFE — MEGA, Manuais Escolares Gratuitos', url: 'https://www.igefe.mec.pt/Page/Index/199', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'ePortugal — Matrículas escolares', url: 'https://www.gov.pt/servicos/matricular-um-aluno-na-escola', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal MEGA — Manuais Escolares', url: 'https://manuaisescolares.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
