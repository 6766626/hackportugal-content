export default {
  editorialVoice: 'hackportugal',
  id: 'transporte-escolar-gratis',
  categoryId: 'education_children',
  title: 'Transporte escolar gratuito: responsabilidade do município',
  tldr: 'Em Portugal, o transporte escolar é organizado pela Câmara Municipal/município, e não pela escola. Em 2026, o transporte gratuito é normalmente atribuído a crianças e jovens dos 6 aos 18 anos no ensino básico e no ensino secundário, se a escola ficar a mais de 3 km de casa e a criança frequentar a escola da área/atribuída oficialmente. O pedido é apresentado no município após a matrícula; são necessários NIF, morada, escola e horário. Para crianças com menos de 12 anos, deve existir um adulto acompanhante no transporte escolar.',
  tags: ['escola', 'transporte', 'município', 'crianças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Quem é responsável e quem paga',
      content: [
        { kind: 'paragraph', text: 'O transporte escolar é uma competência do município. Na prática, isto significa que a rota, o autocarro/táxi/passe, o operador, os prazos de candidatura e as regras de devolução dos cartões são definidos pela Câmara Municipal do local de residência da criança.' },
        { kind: 'paragraph', text: 'A escola confirma a matrícula e o horário, mas não “emite transporte” por si própria. Se a secretaria da escola disser “isso é na Câmara”, é normal: apresente o pedido através do site do município, do Balcão Único ou do departamento de Educação/Transportes Escolares.' },
        { kind: 'checklist', items: [
          'Idade: normalmente crianças e jovens dos 6 aos 18 anos em escolaridade obrigatória',
          'Níveis: ensino básico e ensino secundário',
          'Distância: casa a mais de 3 km da escola',
          'Escola: em regra, a escola mais próxima ou oficialmente atribuída da área de residência / Agrupamento',
          'Morada: confirmada por NIF/Finanças, atestado de residência, contrato de arrendamento ou fatura — depende do município',
          'Forma de apoio: passe gratuito, autocarro escolar, percurso municipal, taxi escolar ou compensação',
          'Entidade responsável: Câmara Municipal, mesmo que o transporte seja efectuado pela Carris, STCP, CP, Rodoviária, Vimeca, Fertagus ou por um operador local'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Verifique o direito ao transporte gratuito',
      content: [
        { kind: 'paragraph', text: 'A regra de base para 2026: o transporte escolar gratuito é concedido a alunos da escolaridade obrigatória se a distância entre o local de residência e a escola for superior a 3 km. O município pode detalhar como mede a distância: por estrada, pelo percurso pedonal mais curto ou através de um mapa GIS.' },
        { kind: 'checklist', items: [
          'A criança tem entre 6 e 18 anos ou ainda está a concluir a escolaridade obrigatória',
          'Existe matrícula ou renovação de matrícula confirmada para o ano lectivo',
          'A escola pertence à sua zona ou a criança foi encaminhada para lá oficialmente',
          'A casa fica a mais de 3 km da escola',
          'Não existe outra opção escolar gratuita mais próxima de casa que a família tenha recusado voluntariamente utilizar',
          'A criança reside efectivamente nesse município',
          'O pedido foi apresentado dentro dos prazos publicados pela Câmara Municipal',
          'Para special educational needs pode existir um regime separado, incluindo transporte adaptado'
        ] },
        { kind: 'warning', text: 'Se a família escolher uma escola privada ou uma escola pública fora da área “por escolha pessoal”, o município pode recusar o transporte gratuito ou pagar apenas o custo do percurso até à escola atribuída. Isto deve ser verificado no regulamento municipal de transportes escolares.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como apresentar o pedido 🚌',
      content: [
        { kind: 'paragraph', text: 'Apresente o pedido logo após a matrícula/renovação de matrícula. Na maioria dos municípios, o período de candidaturas abre na primavera–verão antes do ano lectivo: como referência, maio–julho, mas as datas exactas são locais. Um pedido tardio é muitas vezes tratado já depois do início das aulas.' },
        { kind: 'substeps', items: [
          { id: 'find-page', title: '1. Encontre a página da Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Procure no site do município a secção “Educação”, “Transportes Escolares”, “Ação Social Escolar” ou “Balcão Online”. Em municípios pequenos, por vezes o pedido é aceite por email ou presencialmente no Balcão Único.' }
          ] },
          { id: 'prepare-documents', title: '2. Prepare os documentos', content: [
            { kind: 'checklist', items: [
              'Documento da criança: passaporte, Cartão de Cidadão ou autorização de residência',
              'NIF da criança, se já existir',
              'NIF do progenitor/encarregado de educação',
              'Comprovativo de morada: atestado de residência, contrato de arrendamento, fatura de água/luz/telecomunicações ou certidão fiscal de domicílio',
              'Comprovativo de matrícula ou declaração da escola',
              'Nome do Agrupamento/Escola e ano lectivo',
              'Horário, se o município pedir horários',
              'Fotografia da criança para o passe, se exigida',
              'IBAN, se estiver prevista compensação de despesas e não um passe'
            ] }
          ] },
          { id: 'submit', title: '3. Apresente online ou presencialmente', content: [
            { kind: 'paragraph', text: 'Depois de submeter, guarde o comprovativo. Se a criança precisar de um percurso com transbordo, confirme quem emite o cartão: município, escola ou operador de transporte.' }
          ] },
          { id: 'confirm', title: '4. Receba o passe ou o horário', content: [
            { kind: 'paragraph', text: 'Antes do início do ano lectivo, o município normalmente publica listas/percursos ou envia um email. Verifique a paragem, a hora de manhã e depois das aulas, as regras em caso de atrasos e o contacto do responsável pela operação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'under-12',
      title: 'Crianças com menos de 12 anos: adulto acompanhante',
      content: [
        { kind: 'paragraph', text: 'Para crianças pequenas, não é importante apenas o direito ao transporte gratuito, mas também a segurança. No transporte escolar para crianças com menos de 12 anos deve existir um adulto acompanhante — normalmente um funcionário/monitor, contratado pelo município ou pelo operador.' },
        { kind: 'checklist', items: [
          'Confirme se há monitor/acompanhante no percurso',
          'Peça as regras de entrada e saída: quem tem direito a ir buscar a criança',
          'Forneça à escola e ao operador os números de telefone de ambos os progenitores',
          'Se a criança estiver no 1.º ciclo, confirme se a acompanham até à entrada da escola ou apenas até à paragem',
          'Comunique por escrito se a criança for recolhida por uma ama, avó/avô ou outro adulto',
          'Verifique os cintos de segurança e os lugares fixos, especialmente em taxi escolar ou carrinha',
          'Guarde o contacto da Câmara Municipal e do operador de transporte para o caso de atraso'
        ] },
        { kind: 'warning', text: 'Não aceite uma indicação verbal de que “ele já é crescido, vai sozinho”, se a criança tiver menos de 12 anos e o percurso estiver organizado como transporte escolar. Peça confirmação escrita ao município sobre o regime de acompanhamento.' }
      ]
    },
    {
      id: 'problems',
      title: 'Se houver recusa ou se o percurso for inconveniente',
      content: [
        { kind: 'paragraph', text: 'As recusas estão, na maioria das vezes, associadas a três motivos: distância inferior a 3 km, escola escolhida fora da área, pedido apresentado fora de prazo. Peça uma decisão escrita com referência ao regulamento municipal — sem isso, é difícil contestar.' },
        { kind: 'checklist', items: [
          'Verifique como o município mediu os 3 km: por estrada ou em linha recta',
          'Compare a morada indicada na escola, nas Finanças e no pedido',
          'Peça ao Agrupamento que confirme que a escola foi atribuída oficialmente',
          'Se a criança tiver necessidades educativas especiais, anexe o relatório técnico-pedagógico ou confirmação da escola',
          'Se não houver transporte público, pergunte sobre taxi escolar ou circuito especial',
          'Se o percurso a pé for perigoso, anexe fotografias/mapas: ausência de passeio, iluminação, passadeiras',
          'Apresente uma reclamação na Câmara Municipal através do Livro de Reclamações Eletrónico ou do Balcão Único',
          'Em paralelo, informe o director do Agrupamento: a escola pode confirmar a necessidade do percurso'
        ] },
        { kind: 'warning', text: 'Não compre antecipadamente um passe anual contando com reembolso automático. Muitos municípios só compensam após aprovação prévia do pedido ou apenas em operadores específicos.' }
      ]
    }
  ],
  costs: [
    { label: 'Transporte escolar gratuito quando as condições são cumpridas', amountEUR: 0, note: 'O município paga ou fornece passe/percurso para ensino básico/secundário quando a distância é normalmente >3 km.' },
    { label: 'Duplicado/substituição do cartão de transporte', amountEURMin: 5, amountEURMax: 15, note: 'Não existe uma tarifa nacional única; depende do operador e do município.' }
  ],
  sources: [
    {
      title: 'Direção-Geral da Educação — transporte escolar e organização da rede escolar',
      url: 'https://www.dge.mec.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Gov.pt — educação, matrícula e serviços públicos para famílias',
      url: 'https://www.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 21/2019 — transferência de competências na área da educação para os municípios',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/21-2019-118748848',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2006 — transporte coletivo de crianças e acompanhamento',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2006-672586',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
