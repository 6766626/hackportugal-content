export default {
  editorialVoice: 'hackportugal',
  id: 'rvcc-anqep-centro-qualifica',
  categoryId: 'education_children',
  title: 'RVCC: reconhecimento do nível de escolaridade de adultos através do Centro Qualifica',
  tldr: 'O RVCC é um procedimento gratuito para adultos em Portugal, se o diploma escolar de um país da CPLP/Ucrânia se perdeu, não é reconhecido pelo empregador ou se for necessário confirmar o nível de escolaridade pela escala portuguesa. Através de um Centro Qualifica é possível obter certificação escolar: B1 = 4.º ano, B2 = 6.º ano, B3 = 9.º ano, secundário = 12.º ano, bem como certificação profissional segundo o Catálogo Nacional de Qualificações. O processo decorre em português: inscrição, diagnóstico, portfólio reflexivo, validação e júri.',
  tags: ['rvcc', 'qualifica', 'educação', 'cplp', 'ucrânia'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-rvcc-is',
      title: 'O que é o RVCC e a quem se adequa',
      content: [
        { kind: 'paragraph', text: 'RVCC significa Reconhecimento, Validação e Certificação de Competências. Não é uma “tradução de diploma”, mas sim o reconhecimento de competências obtidas na escola, no trabalho, no exército, em negócios, no cuidado da família, no voluntariado ou por autoaprendizagem. O procedimento é conduzido pelos Centros Qualifica sob coordenação da ANQEP.' },
        { kind: 'paragraph', text: 'Para migrantes da CPLP e da Ucrânia, o RVCC é útil quando não é possível obter rapidamente uma apostilha, uma certidão de arquivo, uma tradução notarial ou um reconhecimento/equivalência formal de um diploma estrangeiro. O resultado do RVCC é uma certificação portuguesa de nível de escolaridade ou de qualificação profissional, compreendida pelo IEFP, por empregadores e por centros de formação.' },
        { kind: 'checklist', items: [
          'Não tem consigo o diploma escolar ou certificado de habilitações',
          'Tem o documento, mas o empregador/curso exige o nível português B3 ou secundário',
          'Precisa do 9.º ano ou 12.º ano para emprego, formação, concurso ou cursos profissionais',
          'Tem muita experiência prática, mas não tem certificado profissional',
          'É adulto e já vive em Portugal ou está a planear mudar-se',
          'Está preparado para fazer entrevistas, tarefas e a defesa do portfólio em português',
          'Não precisa de equivalência académica para a universidade — para isso utiliza-se um procedimento separado de reconhecimento/equivalência'
        ] }
      ]
    },
    {
      id: 'levels',
      title: 'Que níveis podem ser certificados',
      content: [
        { kind: 'paragraph', text: 'O RVCC escolar certifica o nível escolar segundo o sistema português. Isto é importante: a frase “tenho 10 anos de escolaridade” de outro país, por si só, não equivale automaticamente ao 9.º ano ou ao 12.º ano em Portugal.' },
        { kind: 'checklist', items: [
          'B1 — corresponde ao 1.º ciclo do ensino básico, normalmente 4.º ano',
          'B2 — corresponde ao 2.º ciclo do ensino básico, normalmente 6.º ano',
          'B3 — corresponde ao 3.º ciclo do ensino básico, normalmente 9.º ano',
          'Secundário — corresponde ao ensino secundário, normalmente 12.º ano',
          'RVCC profissional — certificação de competências profissionais segundo o Catálogo Nacional de Qualificações',
          'O profissional exige normalmente experiência de trabalho relevante; muitas vezes a referência é pelo menos 3 anos na área, mas o Centro Qualifica avalia o perfil individualmente',
          'É possível obter uma validação parcial: as unidades de competência em falta são concluídas com formação curta ou formação complementar'
        ] },
        { kind: 'warning', text: 'O RVCC não substitui o reconhecimento automático de um diploma estrangeiro para a universidade, profissões regulamentadas ou ordens profissionais. Para medicina, engenharia, ensino, direito e acesso ao ensino superior, confirme as regras específicas de reconhecimento de diplomas.' }
      ]
    },
    {
      id: 'enrolment',
      title: 'Como inscrever-se num Centro Qualifica',
      content: [
        { kind: 'paragraph', text: 'A inscrição é feita através do portal Qualifica ou diretamente no Centro Qualifica mais próximo: escolas, IEFP, centros municipais e associações. Não é obrigatório dirigir-se apenas ao local da sua morada oficial, mas na prática é mais conveniente escolher um centro perto de casa ou do trabalho.' },
        { kind: 'substeps', items: [
          { id: 'find-centro', title: '1. Encontre um Centro Qualifica', content: [
            { kind: 'paragraph', text: 'Em qualifica.gov.pt, abra a pesquisa de Centros Qualifica e escolha o distrito. Se estiver em Lisboa/Porto, é melhor escrever a 2–3 centros: as listas de espera e as especializações variam.' }
          ] },
          { id: 'send-contact', title: '2. Envie o pedido de inscrição', content: [
            { kind: 'checklist', items: [
              'Nome completo',
              'Data de nascimento',
              'Telefone de contacto e email',
              'Morada atual em Portugal, se já existir',
              'NIF, se já tiver sido obtido',
              'Documento de identificação: passaporte, Cartão de Cidadão, autorização de residência, título CPLP ou outro documento',
              'Último nível de escolaridade conhecido',
              'Experiência profissional e área pretendida para RVCC profissional'
            ] }
          ] },
          { id: 'first-meeting', title: '3. Faça o acolhimento e diagnóstico', content: [
            { kind: 'paragraph', text: 'Na primeira reunião, o técnico do Centro Qualifica determina se precisa de RVCC, curso EFA, Português Língua de Acolhimento, formação modular ou uma equivalência normal. Para estrangeiros, muitas vezes é primeiro recomendado melhorar o português, porque as provas e o júri decorrem em português.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos e provas: o que preparar',
      content: [
        { kind: 'paragraph', text: 'O principal documento do RVCC não é o diploma, mas sim o portfólio reflexivo de aprendizagens: um portefólio estruturado onde demonstra o que já sabe fazer e liga isso ao referencial de competências. Quanto melhores forem as provas, mais rápida será a validação.' },
        { kind: 'checklist', items: [
          'Passaporte ou outro documento de identificação',
          'NIF — se tiver; a ausência de NIF não deve ser motivo para ignorar o pedido, mas o centro pode pedir que o trate para efeitos de registo',
          'Autorização de residência, título CPLP, visa D1-D8, proteção temporária UA ou outro documento de permanência — se tiver',
          'Certificados escolares estrangeiros, declarações, pautas, anexos, diplomas — mesmo sem apostilha, são úteis como prova',
          'Tradução dos documentos-chave para português, se o centro não conseguir avaliar o original',
          'CV em formato Portugal/Europass',
          'Declarações de entidade patronal, contratos, recibos verdes, certificados de formação',
          'Exemplos de trabalhos: relatórios, projetos, fotografias, instruções, portefólio, recomendações',
          'Para profissional: descrição de funções, experiência, equipamento/software, processos, responsabilidade',
          'Para escolar: textos, cálculos, competências digitais, competência cívica, exemplos de resolução de tarefas'
        ] },
        { kind: 'warning', text: 'Não compre “RVCC pronto” a intermediários. A certificação é emitida apenas através da rede de Centros Qualifica e passa por validação/júri. Promessas pagas de “fazer o 12.º ano sem participação” são risco de fraude.' }
      ]
    },
    {
      id: 'process',
      title: 'Como decorre o processo: portfólio, validação, júri',
      content: [
        { kind: 'paragraph', text: 'Após a inscrição, o centro atribui um técnico de orientação, formadores e calendário. O prazo depende do nível, da sua preparação e da lista de espera: casos rápidos demoram alguns meses, casos complexos demoram mais. Não existe uma garantia oficial universal de “em 30 dias”.' },
        { kind: 'checklist', items: [
          'Acolhimento — registo inicial e recolha de dados',
          'Diagnóstico — avaliação do objetivo: RVCC escolar, profissional, formação ou outro percurso',
          'Encaminhamento — encaminhamento para um processo concreto',
          'Reconhecimento — entrevistas e tarefas em que descreve a sua experiência',
          'Portfólio reflexivo — recolha de provas e textos em português',
          'Validação — os formadores comparam as provas com o referencial',
          'Formação complementar — formação curta, se faltarem competências',
          'Certificação — decisão final após a sessão de júri',
          'Emissão de certificado de qualificações ou diploma/certificado do nível correspondente'
        ] },
        { kind: 'paragraph', text: 'No júri estão normalmente presentes especialistas do centro e, no caso do RVCC profissional, um representante da área. Não é um exame escolar no sentido clássico, mas sim a defesa do portefólio e a verificação de competências. Ainda assim, terá de responder de forma autónoma e em português.' }
      ]
    },
    {
      id: 'after-certificate',
      title: 'Depois do certificado: onde o utilizar e o que não confundir',
      content: [
        { kind: 'paragraph', text: 'A certificação RVCC é registada no sistema português de qualificações e pode ser usada para trabalho, IEFP, progressão de categoria, acesso a formação, conclusão do 9.º ano ou 12.º ano. Para muitos migrantes adultos, isto é mais prático do que passar anos a recuperar arquivos escolares no país de origem.' },
        { kind: 'checklist', items: [
          'Para vagas: indique “9.º ano obtido por processo RVCC” ou “12.º ano obtido por RVCC”',
          'Para o IEFP: anexe o certificado de qualificações à inscrição ou candidatura',
          'Para formação posterior: pergunte ao Centro Qualifica sobre cursos EFA, CET, formações modulares',
          'Para universidade: esclareça antecipadamente as condições de acesso; o RVCC secundário, por si só, não elimina as regras de concurso do ensino superior',
          'Para profissões regulamentadas: confirme junto da ordem profissional ou entidade competente',
          'Para procedimentos de imigração: o RVCC pode ajudar na integração e empregabilidade, mas não é um fundamento autónomo para autorização de residência',
          'Guarde uma cópia digital e em papel do certificado/diploma; em caso de perda, contacte o centro que conduziu o processo'
        ] },
        { kind: 'warning', text: 'Se já tem um diploma completo reconhecido, o RVCC pode não ser o melhor percurso. Compare primeiro: equivalência/reconhecimento de educação estrangeira, certificação profissional através de ordem/setor ou RVCC. O Centro Qualifica deve ajudar a escolher o caminho, e não inscrever automaticamente todos no RVCC.' }
      ]
    }
  ],
  costs: [
    { label: 'Inscrição e acompanhamento no Centro Qualifica', amountEUR: 0, note: 'Na rede de Centros Qualifica, o procedimento é normalmente gratuito para o candidato.' },
    { label: 'Tradução de documentos estrangeiros', amountEURMin: 20, amountEURMax: 60, note: 'Referência por página junto de tradutores em Portugal; nem sempre é exigida, depende do centro e da língua do documento.' },
    { label: 'Cópias notariais ou certificações', amountEURMin: 10, amountEURMax: 40, note: 'Opcional, se o centro ou o empregador pedir cópias certificadas.' }
  ],
  sources: [
    {
      title: 'Portal Qualifica — pesquisa de Centros Qualifica e informação para adultos',
      url: 'https://www.qualifica.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANQEP — descrição oficial do RVCC',
      url: 'https://www.anqep.gov.pt/np4/rvcc.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Catálogo Nacional de Qualificações — referenciais de qualificações profissionais',
      url: 'https://catalogo.anqep.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
