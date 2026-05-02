export default {
  editorialVoice: 'hackportugal',
  id: 'bolsa-imoveis-estado',
  categoryId: 'housing_rent',
  title: 'Bolsa de Imóveis do Estado: base pública de habitação para arrendamento',
  tldr: 'A Bolsa de Imóveis do Estado em imoveis.gov.pt é uma montra de imóveis do Estado: alguns são disponibilizados para arrendamento, venda ou concessão. Não é uma lista única de espera para habitação social nem uma garantia de casa. Para arrendamento, consulte o aviso concreto: quem pode candidatar-se, renda, prazo, documentos e data-limite. Para expats, normalmente são necessários NIF, permanência legal/autorização de residência, rendimentos em Portugal/IRS ou equivalente, e inexistência de dívidas às Finanças/Segurança Social. A candidatura é, em regra, gratuita; a renda e a caução dependem do concurso.',
  tags: ['arrendamento', 'imóveis', 'habitação', 'estado'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é na prática',
      content: [
        { kind: 'paragraph', text: 'imoveis.gov.pt é o portal oficial de imóveis pertencentes ao Estado, a institutos públicos e a algumas empresas públicas. Ali são publicados imóveis para venda, arrendamento, concessão ou outros procedimentos. Para um arrendatário, são importantes os anúncios com o tipo de operação: arrendamento ou arrendamento para habitação.' },
        { kind: 'paragraph', text: 'O Portal da Habitação é um ecossistema separado do IHRU para programas de habitação: arrendamento acessível, Apoio ao Arrendamento, 1.º Direito, Porta 65 e outros. Por vezes, um anúncio em imoveis.gov.pt remete para regras ou para uma candidatura através do IHRU/Portal da Habitação.' },
        { kind: 'warning', text: 'Não confunda a Bolsa de Imóveis do Estado com uma “casa social da Câmara Municipal”. A habitação municipal é, em regra, tratada através da Câmara Municipal/Junta e tem listas de espera próprias. Em imoveis.gov.pt, você participa num concurso/aviso concreto para um imóvel concreto.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem pode candidatar-se',
      content: [
        { kind: 'paragraph', text: 'Não existe uma regra única para todos os imóveis: as condições são definidas pelo aviso. Mas, no arrendamento habitacional, os anúncios do Estado normalmente verificam a identidade, a identificação fiscal, a permanência legal e a capacidade de pagar a renda.' },
        { kind: 'checklist', items: [
          'NIF em Portugal',
          'documento de identificação: passaporte, Cartão de Cidadão, autorização de residência ou outro documento de permanência legal',
          'morada para notificações e email/telefone',
          'prova de rendimentos: IRS, recibos de vencimento, recibos verdes, contrato de trabalho, pensão ou rendimentos estrangeiros com tradução',
          'declaração de não dívida nas Finanças, se o aviso o exigir',
          'declaração de situação contributiva na Segurança Social, se o aviso o exigir',
          'composição do agregado familiar: cônjuge, filhos, dependentes',
          'confirmação de que não tem habitação própria adequada no município correspondente, se essa condição estiver indicada',
          'para programas de renda acessível — cumprimento dos limites de rendimento e da taxa de esforço indicados nas regras do programa',
          'para estudantes/jovens trabalhadores — declaração da universidade ou contrato de trabalho, se o imóvel se destinar a este grupo'
        ] },
        { kind: 'warning', text: 'Um cidadão estrangeiro não é excluído automaticamente, mas um “turista sem direito de residência” quase sempre fica em desvantagem: para um contrato de longa duração, o senhorio público normalmente exige permanência legal, NIF e rendimento verificável.' }
      ]
    },
    {
      id: 'how-to-search',
      title: 'Como procurar um imóvel em imoveis.gov.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-portal', title: '1. Abra o portal', content: [
            { kind: 'paragraph', text: 'Aceda a imoveis.gov.pt e use a pesquisa por distrito, concelho, freguesia, tipo de imóvel e operação. Procure as palavras “arrendamento”, “habitação”, “renda acessível”, “concurso” e “aviso”.' }
          ] },
          { id: 'read-listing', title: '2. Descarregue o aviso e as peças do procedimento', content: [
            { kind: 'paragraph', text: 'A ficha do imóvel pode parecer simples, mas os documentos juridicamente importantes são os PDF: aviso, caderno de encargos, minuta do contrato, planta, condições de visita, prazo de candidatura e critérios de selecção.' }
          ] },
          { id: 'check-rent', title: '3. Verifique a renda e as despesas', content: [
            { kind: 'paragraph', text: 'O anúncio deve indicar a renda mensal ou a base para a proposta. Veja se estão incluídos condomínio, IMI, seguro, água/electricidade/gás e quem paga as reparações. No arrendamento comum, os serviços são quase sempre pagos pelo arrendatário.' }
          ] },
          { id: 'visit', title: '4. Marque uma visita', content: [
            { kind: 'paragraph', text: 'Para imóveis antigos do Estado, a visita é crítica: o estado pode ser “as is”. Verifique humidade, janelas, instalação eléctrica, certificado energético, existência de cozinha, elevador e transportes.' }
          ] }
        ] }
      ]
    },
    {
      id: 'application',
      title: 'Candidatura: o que preparar',
      content: [
        { kind: 'paragraph', text: 'O formato de submissão é indicado no aviso: formulário online, email, entrega em mão física ou carta registada. Não envie “como for mais conveniente”: os concursos públicos podem rejeitar a candidatura por canal incorrecto ou por falta de assinatura.' },
        { kind: 'checklist', items: [
          'formulário de candidatura do aviso',
          'cópia do documento de identificação de todos os membros adultos do agregado',
          'NIF de todos os candidatos',
          'autorização de residência/visto/documento de permanência legal, se não for cidadão PT/EU',
          'última declaração de IRS e nota de liquidação; se chegou recentemente — declaração fiscal estrangeira/contrato/extractos com tradução',
          '3 últimos recibos de vencimento ou recibos verdes',
          'declaração de não dívida Finanças e Segurança Social, se exigida',
          'comprovativo de morada: contrato de arrendamento, atestado de residência, factura de serviços',
          'declaração de honra sobre a composição do agregado, inexistência de habitação ou cumprimento das condições do programa',
          'documentos de prioridade: incapacidade, filhos, monoparentalidade, deslocação, se o aviso atribuir pontos',
          'assinatura: digital através de CMD/Cartão de Cidadão ou manuscrita, conforme exigido pelo procedimento'
        ] },
        { kind: 'warning', text: 'Os prazos são contados de forma rigorosa. Se o prazo terminar às 17:00 de um dia útil, um email às 17:03 pode ser inválido. Guarde o comprovativo de submissão/recibo de entrega.' }
      ]
    },
    {
      id: 'contract-terms',
      title: 'Contrato, prazo e aumento da renda',
      content: [
        { kind: 'paragraph', text: 'Após a selecção, é publicada uma lista provisória/final ou uma notificação ao vencedor. Depois é assinado o contrato de arrendamento. Para habitação aplicam-se as regras do NRAU/Código Civil e, para arrendamento acessível, também as condições especiais do programa, incluindo limites de renda e requisitos de duração.' },
        { kind: 'checklist', items: [
          'prazo do contrato: consulte a minuta; no arrendamento acessível é frequentemente usado um prazo longo, enquanto para estudantes pode existir um prazo sazonal/lectivo',
          'caução: normalmente 1–2 mensalidades, mas o valor exacto está no aviso/contrato',
          'rendas adiantadas: verifique quantos meses é necessário pagar na assinatura',
          'actualização da renda: para contratos comuns, o coeficiente anual para 2026 é 2,16%, se o contrato não contiver outro regime legal e não houver excepção',
          'obras: a pequena manutenção corrente é normalmente do arrendatário, a reparação estrutural é do proprietário, mas os edifícios antigos exigem leitura atenta',
          'subarrendamento/Alojamento Local são quase sempre proibidos sem autorização escrita',
          'registo do contrato nas Finanças — obrigação do senhorio; peça recibos de renda',
          'saída: cumpra o prazo de pré-aviso do contrato e da lei, caso contrário pode perder parte da caução'
        ] },
        { kind: 'warning', text: 'Uma renda baixa não significa “sem termo e sem condições”. Nos programas públicos e acessíveis, a violação das condições — não viver no imóvel, ocultar rendimentos, arrendar um quarto, acumular dívida — pode levar à resolução do contrato.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Se não houver imóveis adequados',
      content: [
        { kind: 'paragraph', text: 'Em imoveis.gov.pt pode haver poucos imóveis habitacionais, especialmente em Lisboa, Porto, Cascais, Oeiras e Algarve. Verifique em paralelo o Portal da Habitação e os programas municipais da Câmara Municipal do local onde vive.' },
        { kind: 'checklist', items: [
          'Portal da Habitação: programas do IHRU e informações sobre arrendamento acessível',
          'Câmara Municipal: habitação municipal, renda apoiada, concursos locais',
          'Porta 65: apoio ao arrendamento para jovens arrendatários, se cumprir os requisitos de idade e rendimento',
          'Apoio ao Arrendamento: consulte as condições actualizadas em portaldahabitacao.pt',
          'mercado privado: Idealista, Imovirtual, OLX, agências com licença AMI',
          'cooperativas e fundações: por vezes publicam renda acessível fora de imoveis.gov.pt'
        ] },
        { kind: 'paragraph', text: 'Prática: crie uma tabela com imóveis, deadline, renda, documentos exigidos e estado. Os anúncios públicos aparecem de forma irregular e o prazo de candidatura pode ser curto.' }
      ]
    }
  ],
  costs: [
    { label: 'Pesquisa em imoveis.gov.pt', amountEUR: 0, note: 'O portal oficial é gratuito; não pague a intermediários por “acesso à base”.' },
    { label: 'Candidatura', amountEUR: 0, note: 'Normalmente é gratuita, salvo se o aviso prever uma taxa específica ou uma garantia.' },
    { label: 'Caução na assinatura', amountEURMin: 920, amountEURMax: 2400, note: 'Tipicamente 1–2 rendas mensais; o valor efectivo depende do imóvel. O intervalo é indicativo para arrendamento acessível, não é um limite legal.' },
    { label: 'Certidão de não dívida online', amountEUR: 0, note: 'Nas Finanças e na Segurança Social, normalmente é descarregada gratuitamente com acesso.' }
  ],
  sources: [
    {
      title: 'Portal oficial Imóveis do Estado',
      url: 'https://imoveis.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal da Habitação — programas do IHRU e arrendamento habitacional',
      url: 'https://www.portaldahabitacao.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 68/2019 — Programa de Arrendamento Acessível',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/68-2019-122317335',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código Civil — regime do contrato de arrendamento',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
