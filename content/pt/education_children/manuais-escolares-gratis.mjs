export default {
  editorialVoice: 'hackportugal',
  id: 'manuais-escolares-gratis',
  categoryId: 'education_children',
  title: 'Manuais escolares gratuitos do 1.º ao 9.º ano: Programa Manuais',
  tldr: 'Nas escolas públicas em Portugal, os manuais escolares para o 1.º-9.º ano são atribuídos gratuitamente através do Programa Manuais Escolares Gratuitos: o encarregado de educação recebe vales MEGA e troca-os por livros numa livraria aderente ou na escola. O programa é universal, não depende do rendimento nem do ASE. No fim do ano, a maioria dos manuais deve ser devolvida para reutilização; os cadernos de atividades e consumíveis compram-se, em regra, à parte.',
  tags: ['escola', 'manuais', 'mega', 'manuais escolares'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que está exatamente incluído gratuitamente',
      content: [
        { kind: 'paragraph', text: 'O Programa Manuais Escolares Gratuitos é um esquema público de atribuição gratuita de manuais escolares. Para as famílias funciona através de vales eletrónicos MEGA: cada vale corresponde a um manual específico da lista da escola.' },
        { kind: 'checklist', items: [
          'São abrangidos os manuais principais, aprovados pela escola para o ano e a turma em causa.',
          'No 1.º-9.º ano da escola pública, o programa aplica-se independentemente do rendimento do agregado familiar.',
          'Não é o apoio ASE: o direito a manuais gratuitos não exige o estatuto de família carenciada.',
          'A criança tem de estar matriculada através do Portal das Matrículas / ePortugal ou diretamente na escola, se o estabelecimento assim o solicitar.',
          'Os livros, novos ou usados, são entregues contra vale — a família não escolhe o formato.',
          'Os cadernos de atividades, material escolar, mochila, calculadora e materiais para Educação Visual pagam-se, regra geral, à parte.',
          'O pré-escolar não está incluído: o 1.º ano começa, em regra, aos 6 anos, não aos 4.',
          'Em escolas privadas sem contrato com o Estado, os manuais gratuitos geralmente não são atribuídos.'
        ] }
      ]
    },
    {
      id: 'get-access',
      title: 'Como obter os vales MEGA',
      content: [
        { kind: 'substeps', items: [
          { id: 'matricula', title: '1. Confirme que a matrícula foi aceite', content: [
            { kind: 'paragraph', text: 'Primeiro, a criança tem de estar matriculada para o ano letivo. Para anos de transição e primeiras matrículas usa-se o Portal das Matrículas no ePortugal; noutros casos, a renovação é muitas vezes automática, mas a escola pode solicitar confirmação de dados.' },
            { kind: 'checklist', items: [
              'NIF da criança, se já existir.',
              'NIF do encarregado de educação — o progenitor ou tutor que trata dos assuntos escolares.',
              'Documento de identificação da criança: passaporte, Cartão de Cidadão, autorização de residência ou outro documento.',
              'Morada em Portugal.',
              'Contactos do encarregado: email e telefone.',
              'Dados da escola anterior, se a criança vem de outro país ou muda de escola.'
            ] }
          ] },
          { id: 'mega-registration', title: '2. Registe-se na plataforma MEGA', content: [
            { kind: 'paragraph', text: 'Depois de a escola processar a matrícula e carregar as listas, o encarregado de educação acede à plataforma MEGA / Manuais Escolares e associa o aluno ao seu NIF. A autenticação faz-se, em regra, com o NIF e os dados do encarregado de educação; a escola tem de reconhecer o mesmo adulto responsável.' },
            { kind: 'warning', text: 'Se o MEGA indicar que o aluno não foi encontrado, isso nem sempre é erro. Muitas vezes a escola ainda não fechou a turma, não carregou a lista de manuais ou está definido outro encarregado de educação no sistema.' }
          ] },
          { id: 'download-vouchers', title: '3. Descarregue os vales', content: [
            { kind: 'paragraph', text: 'Os vales costumam ser disponibilizados por fases perto do início do ano letivo: primeiro para alguns anos, depois para outros. Na prática, as famílias consultam o MEGA em agosto-setembro e por vezes recebem parte dos vales já após o arranque das aulas.' },
            { kind: 'checklist', items: [
              'Descarregue o PDF ou apresente o vale no telemóvel.',
              'Confirme o nome do aluno, o ano, a escola e a disciplina.',
              'Cada manual tem um código próprio.',
              'Não compre livros antecipadamente, salvo se a escola confirmar que não será emitido vale.',
              'Guarde o email e o acesso ao MEGA até ao fim do ano letivo.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'redeem',
      title: 'Onde trocar os vales por livros',
      content: [
        { kind: 'paragraph', text: 'Os vales são usados em livrarias aderentes, grandes cadeias, lojas online ou, por vezes, diretamente através da escola. O procedimento concreto depende do tipo de vale e da disponibilidade dos livros.' },
        { kind: 'checklist', items: [
          'Consulte a lista de aderentes na plataforma MEGA ou confirme na escola.',
          'Mostre o QR code/código do vale e o documento do encarregado, se a loja solicitar conferência.',
          'Confirme que foi entregue o manual do ano e da disciplina corretos.',
          'Se o livro for usado, verifique se não tem páginas rasgadas nem anotações intrusivas.',
          'Se o manual não estiver em stock, a loja pode encomendá-lo; o prazo depende da editora e da época.',
          'Não entregue o vale por outro manual ou “equivalente” sem confirmação da escola.',
          'Guarde o talão ou comprovativo de entrega até ao fim de setembro.'
        ] },
        { kind: 'warning', text: 'O vale não pode ser “convertido em dinheiro”: não é dinheiro, é o direito a receber um manual específico. Se comprar um manual por sua conta antes da emissão do vale, o reembolso do valor não está, em regra, garantido.' }
      ]
    },
    {
      id: 'return-books',
      title: 'Devolução dos manuais no fim do ano',
      content: [
        { kind: 'paragraph', text: 'A lógica do programa é a reutilização. Por isso, no final do ano letivo, a escola recolhe a maioria dos manuais, verifica o estado e volta a colocá-los em circulação para os alunos seguintes.' },
        { kind: 'checklist', items: [
          'O prazo de devolução é definido pela escola, normalmente após o fim das aulas ou depois dos exames.',
          'Os manuais devem ser devolvidos sem danos significativos, sem páginas rasgadas e sem marcações que os inutilizem.',
          'Escreva a lápis ou use marcadores destacáveis, se a escola avisar que haverá devolução.',
          'Evite colar definitivamente folhas e não recorte exercícios.',
          'Os manuais do 1.º ciclo podem ter regras próprias, porque as crianças escrevem muitas vezes no livro; confirme na escola.',
          'Os cadernos de atividades e materiais consumíveis normalmente não são devolvidos.',
          'Se o livro for perdido ou danificado, a escola pode exigir a sua substituição ou o pagamento do valor.'
        ] },
        { kind: 'warning', text: 'Não ignore a devolução. Em caso de não devolução ou danos, a escola pode bloquear a emissão de novos vales até regularizar a situação.' }
      ]
    },
    {
      id: 'expat-edge-cases',
      title: 'Se acabou de chegar ou a criança não fala português',
      content: [
        { kind: 'paragraph', text: 'As famílias estrangeiras têm as mesmas regras para manuais gratuitos, desde que a criança esteja matriculada numa escola pública portuguesa. A cidadania e a posse de Cartão de Cidadão não são condição para os manuais; o essencial é a matrícula, os dados do aluno e o NIF do encarregado responsável.' },
        { kind: 'checklist', items: [
          'Se a criança não tiver NIF, pergunte à escola como será registada no sistema; o NIF do encarregado é quase sempre necessário.',
          'Se chegou em agosto-setembro, obtenha primeiro a vaga na escola e depois aguarde que o aluno apareça no MEGA.',
          'Para crianças vindas de outro país, a escola pode determinar a equivalência e o ano de escolaridade após análise dos documentos.',
          'Peça a lista de manuais antes de comprar materiais adicionais: as editoras variam entre escolas.',
          'Para Português Língua Não Materna podem existir materiais próprios; nem todos fazem parte do conjunto padrão.',
          'Se no MEGA constarem dados antigos do encarregado, a escola deve atualizá-los.',
          'Em caso de divergência, escreva um email à secretaria da escola: o registo escrito ajuda a corrigir mais depressa a matrícula ou o vale.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Manuais do 1.º-9.º ano com vales MEGA', amountEUR: 0, note: 'Para alunos da escola pública; entregues como novos ou usados no âmbito do sistema de reutilização.' },
    { label: 'Cadernos de atividades e material escolar', amountEURMin: 30, amountEURMax: 150, note: 'Referência por criança/ano; depende do ano, da escola e dos requisitos dos professores.' }
  ],
  sources: [
    { title: 'DGE — Manuais Escolares (avaliação, certificação e reutilização)', url: 'https://www.dge.mec.pt/manuais-escolares', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'IGeFE — MEGA, Manuais Escolares Gratuitos', url: 'https://www.igefe.mec.pt/Page/Index/199', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'ePortugal — Matrículas escolares', url: 'https://eportugal.gov.pt/servicos/matricular-um-aluno-na-escola', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal MEGA — Manuais Escolares', url: 'https://manuaisescolares.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
