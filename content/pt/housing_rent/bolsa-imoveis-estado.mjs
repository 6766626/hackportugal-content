export default {
  editorialVoice: 'hackportugal',
  id: 'bolsa-imoveis-estado',
  categoryId: 'housing_rent',
  title: 'Bolsa de Imóveis do Estado: base estatal de habitação para arrendamento',
  tldr: 'A Bolsa de Imóveis do Estado em imoveis.gov.pt é uma montra de imóveis do Estado: alguns são disponibilizados para arrendamento, venda ou concessão. Não é uma lista única de espera para habitação social nem uma garantia de obter casa. Para arrendamento, consulte o aviso concreto: quem pode candidatar-se, renda, prazo, documentos e data-limite. Os expatriados normalmente precisam de NIF, permanência legal/autorização de residência, rendimentos em Portugal/IRS ou equivalente, inexistência de dívidas às Finanças/Segurança Social. A candidatura é frequentemente gratuita; a renda e a caução dependem do concurso.',
  tags: ['arrendamento', 'imoveis', 'habitação', 'estado'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é na prática',
      content: [
        { kind: 'paragraph', text: 'imoveis.gov.pt é o portal oficial de imóveis pertencentes ao Estado, a institutos públicos e a algumas empresas públicas. Aí são publicados imóveis para venda, arrendamento, concessão ou outros procedimentos. Para o arrendatário, são relevantes os anúncios com tipo de operação: arrendamento ou arrendamento para habitação.' },
        { kind: 'paragraph', text: 'O Portal da Habitação é um ecossistema separado do IHRU para programas de habitação: arrendamento acessível, Apoio ao Arrendamento, 1.º Direito, Porta 65 e outros. Por vezes, um anúncio em imoveis.gov.pt remete para regras ou candidatura através do IHRU/Portal da Habitação.' },
        { kind: 'warning', text: 'Não confunda a Bolsa de Imóveis do Estado com “habitação social da Câmara Municipal”. A habitação municipal é normalmente tratada através da Câmara Municipal/Junta e tem listas de espera próprias. Em imoveis.gov.pt participa num concurso/aviso concreto para um imóvel concreto.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem pode candidatar-se',
      content: [
        { kind: 'paragraph', text: 'Não existe uma regra única para todos os imóveis: as condições são definidas pelo aviso. Mas, para arrendamento habitacional, os anúncios do Estado normalmente verificam a identidade, a identificação fiscal, a permanência legal e a capacidade de pagar a renda.' },
        { kind: 'checklist', items: [
          'NIF em Portugal',
          'documento de identidade: passaporte, Cartão de Cidadão, autorização de residência ou outro documento de permanência legal',
          'morada para notificações e email/telefone',
          'comprovativo de rendimentos: IRS, recibos de vencimento, recibos verdes, contrato de trabalho, pensão ou rendimentos estrangeiros com tradução',
          'declaração de não dívida nas Finanças, se o aviso exigir',
          'declaração de situação contributiva na Segurança Social, se o aviso exigir',
          'composição do agregado familiar: cônjuge, filhos, dependentes',
          'confirmação de que não possui habitação adequada em propriedade no município correspondente, se essa condição estiver indicada',
          'para programas de renda acessível — cumprimento dos limites de rendimento e da taxa de esforço indicados nas regras do programa',
          'para estudantes/jovens trabalhadores — declaração da universidade ou contrato de trabalho, se o imóvel se destinar a esse grupo'
        ] },
        { kind: 'warning', text: 'Um cidadão estrangeiro não é excluído automaticamente, mas um “turista sem direito de residência” quase sempre fica em desvantagem: para um contrato de longa duração, o senhorio estatal normalmente exige permanência legal, NIF e rendimento verificável.' }
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
            { kind: 'paragraph', text: 'A ficha do imóvel muitas vezes parece simples, mas os documentos PDF são juridicamente importantes: aviso, caderno de encargos, minuta do contrato, planta, condições da visita, prazo de candidatura e critérios de seleção.' }
          ] },
          { id: 'check-rent', title: '3. Verifique a renda e as despesas', content: [
            { kind: 'paragraph', text: 'O anúncio deve indicar a renda mensal ou a base para proposta. Veja se condomínio, IMI, seguro, água/eletricidade/gás estão incluídos e quem paga reparações. No arrendamento comum, os serviços essenciais são quase sempre pagos pelo arrendatário.' }
          ] },
          { id: 'visit', title: '4. Marque uma visita', content: [
            { kind: 'paragraph', text: 'Para imóveis antigos do Estado, a visita é crítica: o estado pode ser “as is”. Verifique humidade, janelas, instalação elétrica, certificado energético, existência de cozinha, elevador e transportes.' }
          ] }
        ] }
      ]
    },
    {
      id: 'application',
      title: 'Candidatura: o que preparar',
      content: [
        { kind: 'paragraph', text: 'O formato de submissão é indicado no aviso: formulário online, email, entrega em mão física ou carta registada. Não envie “como der mais jeito”: os concursos públicos podem rejeitar a candidatura por canal incorreto ou falta de assinatura.' },
        { kind: 'checklist', items: [
          'formulário de candidatura do aviso',
          'cópia do documento de identidade de todos os membros adultos da família',
          'NIF de todos os candidatos',
          'autorização de residência/visto/documento de permanência legal, se não for cidadão PT/EU',
          'última declaração de IRS e nota de liquidação; se chegou recentemente — declaração fiscal estrangeira/contrato/extratos com tradução',
          '3 últimos recibos de vencimento ou recibos verdes',
          'declaração de não dívida Finanças e Segurança Social, se exigida',
          'comprovativo de morada: contrato de arrendamento, atestado de residência, fatura de serviços essenciais',
          'declaração de honra sobre composição do agregado familiar, inexistência de habitação ou cumprimento das condições do programa',
          'documentos de prioridade: deficiência, filhos, família monoparental, deslocação, se o aviso atribuir pontos',
          'assinatura: digital através de CMD/Cartão de Cidadão ou manuscrita, conforme exigido pelo procedimento'
        ] },
        { kind: 'warning', text: 'Os prazos são contados de forma rigorosa. Se o prazo terminar às 17:00 de um dia útil, um email às 17:03 pode ser inválido. Guarde o comprovativo de submissão/recibo de entrega.' }
      ]
    },
    {
      id: 'contract-terms',
      title: 'Contrato, prazo e aumento da renda',
      content: [
        { kind: 'paragraph', text: 'Após a seleção, é publicada uma lista provisória/final ou enviada notificação ao vencedor. Depois é assinado o contrato de arrendamento. Para habitação aplicam-se as regras do NRAU/Código Civil e, para arrendamento acessível, também as condições especiais do programa, incluindo limites de renda e requisitos de prazo.' },
        { kind: 'checklist', items: [
          'prazo do contrato: consulte a minuta; no arrendamento acessível é frequente ser usado um prazo longo, enquanto para estudantes pode ser um prazo sazonal/letivo',
          'Escrever: "caução: no arrendamento habitacional, o limite legal é até ao valor equivalente a 2 rendas; o montante concreto deve constar do aviso/contrato".',
          'Acrescentar: "Para habitação, a lei limita as rendas antecipadas a um máximo de 2 meses; se o aviso/contrato exigir mais, é necessário verificar a base legal antes de assinar".',
          'Substituir por: "atualização da renda: para contratos comuns, o coeficiente de atualização de rendas para 2026 é 1,0224, ou seja, 2,24%, se o contrato não contiver outro regime legal e não houver exceção".',
          'obras: a pequena manutenção corrente normalmente cabe ao arrendatário, a reparação estrutural cabe ao proprietário, mas edifícios antigos exigem leitura atenta',
          'subarrendamento/Alojamento Local são quase sempre proibidos sem autorização escrita',
          'registo do contrato nas Finanças — é obrigação do senhorio; peça recibos de renda',
          'saída: respeite o prazo de pré-aviso do contrato e da lei, caso contrário pode perder parte da caução'
        ] },
        { kind: 'warning', text: 'Uma renda baixa não significa “sem prazo e sem condições”. Nos programas estatais e acessíveis, a violação das condições — não residir no imóvel, ocultar rendimentos, subarrendar um quarto, acumular dívida — pode levar à resolução do contrato.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Se não houver imóveis adequados',
      content: [
        { kind: 'paragraph', text: 'Em imoveis.gov.pt pode haver poucos imóveis habitacionais, sobretudo em Lisboa, Porto, Cascais, Oeiras e Algarve. Verifique em paralelo o Portal da Habitação e os programas municipais da Câmara Municipal do local onde reside.' },
        { kind: 'checklist', items: [
          'Portal da Habitação: programas do IHRU e informações sobre arrendamento acessível',
          'Câmara Municipal: habitação municipal, renda apoiada, concursos locais',
          'Porta 65: apoio ao arrendamento para jovens arrendatários, se cumprir os critérios de idade e rendimentos',
          'Apoio ao Arrendamento: consulte as condições atuais em portaldahabitacao.pt',
          'mercado privado: Idealista, Imovirtual, OLX, agências com licença AMI',
          'cooperativas e fundações: por vezes publicam renda acessível fora de imoveis.gov.pt'
        ] },
        { kind: 'paragraph', text: 'Prática: crie uma tabela com imóveis, deadline, renda, documentos exigidos e estado. Os anúncios do Estado aparecem de forma irregular e o prazo de candidatura pode ser curto.' }
      ]
    }
  ],
  costs: [
    { label: 'Pesquisa em imoveis.gov.pt', amountEUR: 0, note: 'O portal oficial é gratuito; não pague a intermediários por “acesso à base de dados”.' },
    { label: 'Submissão da candidatura', amountEUR: 0, note: 'Normalmente é gratuita, salvo se o aviso previr uma taxa ou garantia específica.' },
    { label: 'Caução na assinatura', amountEURMin: 920, amountEURMax: 2400, note: 'Tipicamente 1–2 rendas mensais; o valor efetivo depende do imóvel. O intervalo é indicativo para arrendamento acessível, não um limite legal.' },
    { label: 'Certidão de não dívida online', amountEUR: 0, note: 'Nas Finanças e na Segurança Social normalmente pode ser descarregada gratuitamente com acesso.' }
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
      title: 'Portal da Habitação — programas IHRU e arrendamento habitacional',
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
