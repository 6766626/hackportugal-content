export default {
  editorialVoice: 'hackportugal',
  id: 'porto-card-residente',
  categoryId: 'daily_life',
  title: 'Porto Card Resident: cartão de residente do Porto',
  tldr: 'Cartão Porto. — cartão municipal gratuito da Câmara Municipal do Porto para quem vive, estuda ou trabalha no concelho do Porto. Não é a Porto Card turística. Serve para descontos em cultura, desporto e serviços municipais e, para jovens residentes, como porta de entrada no ecossistema Cartão Jovem Municipal / Movijovem. Para o Andante Sub23, o cartão em si não substitui o comprovativo de estudante, mas ajuda a reunir benefícios locais num só perfil. O pedido é normalmente feito online ou através da CMP; prepare NIF, documento de identificação e comprovativo de morada/estudo/trabalho.',
  tags: ['porto', 'cartão', 'descontos', 'andante'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que cartão é este e o que não é',
      content: [
        { kind: 'paragraph', text: 'Cartão Porto. — cartão de residente da Câmara Municipal do Porto. Está associado ao município do Porto, não a toda a Área Metropolitana do Porto. Normalmente, têm direito as pessoas que vivem, estudam ou trabalham no concelho do Porto.' },
        { kind: 'paragraph', text: 'Não o confunda com a Porto Card turística, vendida a visitantes da cidade para transportes e museus durante 1–4 dias. O cartão de residente não é um passe Andante, não substitui autorização de residência, NIF, Cartão de Cidadão nem atestado de residência.' },
        { kind: 'checklist', items: [
          'Para residentes: comprovativo de morada no concelho do Porto',
          'Para estudantes: comprovativo de estudo numa instituição situada no Porto',
          'Para trabalhadores: comprovativo de trabalho no Porto',
          'Para jovens: acesso a vantagens locais para jovens associadas ao Cartão Jovem Municipal / Movijovem',
          'Para a vida quotidiana: descontos e entradas gratuitas/com preço reduzido em equipamentos culturais e desportivos municipais',
          'Para transportes: útil como parte de um pacote local de benefícios, mas não substitui o Andante Sub23'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem pode pedir',
      content: [
        { kind: 'paragraph', text: 'A CMP descreve o Cartão Porto. como uma ferramenta municipal para ligar residentes e utilizadores da cidade aos serviços da Câmara Municipal do Porto. Na prática, para um expatriado é importante provar uma de três ligações à cidade: residência, estudo ou trabalho.' },
        { kind: 'checklist', items: [
          'Você vive numa freguesia do município do Porto: Bonfim, Campanhã, Paranhos, Ramalde, entre outras.',
          'Tem NIF e uma morada portuguesa',
          'Pode apresentar contrato de arrendamento, recibo de renda, factura de serviços públicos ou atestado de residência da Junta de Freguesia',
          'Estuda numa escola, universidade ou outra instituição no Porto',
          'Trabalha para um empregador com local de trabalho no Porto ou tem declaração da entidade patronal',
          'Um menor normalmente precisa de representante legal',
          'A autorização de residência é útil como ID, mas o cartão em si é municipal, não de imigração'
        ] },
        { kind: 'warning', text: 'Se vive em Vila Nova de Gaia, Matosinhos, Maia ou Gondomar, mas se desloca frequentemente ao Porto, isso não é o mesmo que residir no concelho do Porto. Para o estatuto de residente, a CMP pode exigir especificamente uma morada no Porto.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos: o que preparar antecipadamente',
      content: [
        { kind: 'paragraph', text: 'A lista exacta de documentos depende do seu fundamento: residente, estudante ou trabalhador. Antes de submeter o pedido, verifique o formulário actualizado no site cm-porto.pt, porque a CMP pode alterar a forma de comprovação e os canais digitais.' },
        { kind: 'checklist', items: [
          'Documento de identificação: autorização de residência, passaporte, Cartão de Cidadão ou outro ID aceite',
          'NIF',
          'Comprovativo de morada: atestado de residência, contrato de arrendamento, recibo de renda, factura de água/luz/gás/internet',
          'Se é estudante: declaração de matrícula ou comprovativo de inscrição',
          'Se é trabalhador: declaração da entidade empregadora ou outro documento sobre o local de trabalho',
          'E-mail de contacto e telefone português',
          'Para crianças/adolescentes: ID do representante legal e comprovativo de parentesco/tutela, se solicitado',
          'Pode ser necessária uma fotografia se o cartão for emitido em formato físico'
        ] },
        { kind: 'warning', text: 'A morada nas Finanças, por si só, nem sempre é suficiente para um procedimento municipal. Se se mudou recentemente, a forma mais rápida é obter um atestado de residência na Junta de Freguesia da sua residência efectiva.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como submeter o pedido 📝',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-page', title: '1. Abra a secção Cartão Porto. no site da CMP', content: [
            { kind: 'paragraph', text: 'Comece pelo site oficial da Câmara Municipal do Porto. Procure a secção Cartão Porto. ou benefícios Cartão Porto. Não use páginas da Porto Card turística: é outro produto.' }
          ] },
          { id: 'create-profile', title: '2. Crie ou confirme o perfil', content: [
            { kind: 'paragraph', text: 'Se o pedido online estiver disponível, preencha os dados, carregue os documentos e verifique o e-mail. Em alguns casos, a CMP pode encaminhá-lo para o atendimento municipal ou pedir comprovativos adicionais.' }
          ] },
          { id: 'submit-documents', title: '3. Carregue os comprovativos', content: [
            { kind: 'paragraph', text: 'O ficheiro deve estar legível: nome, morada, data e entidade emissora devem estar visíveis. Para arrendamento, é melhor anexar o contrato e o último recibo de renda, se existir.' }
          ] },
          { id: 'wait-validation', title: '4. Aguarde a validação', content: [
            { kind: 'paragraph', text: 'A CMP verifica o direito ao cartão. Os prazos não são universais: nos períodos de renovação do ano lectivo e de muitos pedidos, a espera costuma ser mais longa.' }
          ] },
          { id: 'use-card', title: '5. Use o cartão digital ou físico', content: [
            { kind: 'paragraph', text: 'Após a aprovação, verifique onde o cartão aparece: na área pessoal, na aplicação ou como cartão físico. Nas bilheteiras de museus, piscinas e eventos, podem pedir ID juntamente com o cartão.' }
          ] }
        ] }
      ]
    },
    {
      id: 'benefits',
      title: 'Que benefícios pode realisticamente esperar',
      content: [
        { kind: 'paragraph', text: 'O objectivo do Cartão Porto. são vantagens municipais, não um cartão universal de descontos para tudo. A lista de parceiros e regras muda, por isso, antes de comprar um bilhete ou assinatura, verifique o equipamento específico em cm-porto.pt.' },
        { kind: 'checklist', items: [
          'Descontos ou acesso com preço reduzido a equipamentos culturais da CMP',
          'Benefícios em eventos do Teatro Municipal do Porto e outros programas municipais, se estiverem incluídos na lista actual',
          'Vantagens em bibliotecas, museus, galerias e iniciativas da cidade',
          'Descontos em desporto e lazer em equipamentos municipais, se indicados nas regras',
          'Vantagens para jovens através do Cartão Jovem Municipal / Movijovem para a idade adequada',
          'Campanhas locais da CMP para residentes do Porto',
          'Descontos de parceiros que devem ser verificados antes do pagamento',
          'Por vezes é necessária inscrição prévia num evento específico; o cartão por si só à entrada pode não ser suficiente'
        ] },
        { kind: 'warning', text: 'Não planeie o orçamento com base num desconto permanente. As vantagens municipais podem estar limitadas por datas, quotas, idade, local de residência ou disponibilidade de lugares.' }
      ]
    },
    {
      id: 'transport-youth',
      title: 'Andante Sub23 e Movijovem: onde há ligação e onde não há',
      content: [
        { kind: 'paragraph', text: 'O Cartão Porto. é útil para jovens residentes enquanto cartão municipal e ponto de entrada em programas locais para jovens, incluindo Cartão Jovem Municipal / Movijovem, se cumprir os requisitos de idade e condições. Mas os direitos de transporte Andante são tratados segundo as regras do Andante e dos programas nacionais, não apenas através da CMP.' },
        { kind: 'checklist', items: [
          'Andante Sub23 — é um perfil/benefício de transporte para estudantes, não uma função do Cartão Porto.',
          'Para o Andante Sub23, normalmente são necessários ID, NIF, fotografia e declaração de matrícula/documento da instituição de ensino.',
          'O cartão Andante personalizado normalmente custa 6 € na emissão.',
          'O Andante Municipal normal no Porto custa 30 €/mês, o Andante Metropolitano — 40 €/mês; o benefício de estudante pode reduzir o custo ou tornar o transporte gratuito se cumprir as condições do programa.',
          'O Cartão Jovem Municipal / Movijovem dá descontos para jovens, mas não é um passe de transporte autónomo.',
          'Se tem menos de 23 anos e estuda, verifique simultaneamente três coisas: CMP, Movijovem e Andante.',
          'Se acabou de se mudar, estabilize primeiro a morada, o NIF e a matrícula: sem isso, os benefícios são na maioria dos casos recusados.'
        ] },
        { kind: 'warning', text: 'Não compre a Porto Card turística em vez do Andante ou do Cartão Porto. O cartão turístico foi pensado para visitantes de curta duração e não prova estatuto de residente.' }
      ]
    }
  ],
  costs: [
    { label: 'Cartão Porto.', amountEUR: 0, note: 'Cartão municipal da CMP para residentes/estudantes/trabalhadores elegíveis; verifique as condições actuais de emissão em cm-porto.pt.' },
    { label: 'Emissão do cartão Andante personalizado', amountEUR: 6, note: 'Valor de referência para o cartão Andante personalizado físico; o Cartão Porto. em si não o substitui.' },
    { label: 'Andante Municipal', amountEUR: 30, note: 'Passe mensal normal para uma zona municipal; aos estudantes Sub23 podem aplicar-se benefícios separados.' },
    { label: 'Andante Metropolitano', amountEUR: 40, note: 'Passe mensal normal para a Área Metropolitana do Porto; não faz parte do Cartão Porto.' }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto — Cartão Porto.', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — serviços e benefícios municipais', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Andante — passes, títulos e cartão personalizado', url: 'https://andante.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Movijovem — Cartão Jovem', url: 'https://www.cartaojovem.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
