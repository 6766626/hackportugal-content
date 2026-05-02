export default {
  editorialVoice: 'hackportugal',
  id: 'atestado-multiusos-amim',
  categoryId: 'healthcare',
  title: 'Atestado Médico de Incapacidade Multiuso (AMIM): como obter o comprovativo de deficiência',
  tldr: 'O AMIM é um atestado multiuso português em que a junta médica fixa a percentagem de incapacidade com base nas tabelas médicas. O limiar essencial é ≥60%: dá acesso a benefícios em sede de IRS, isenções/reduções na compra e posse de automóvel (ISV, IVA, IUC — nos termos previstos na lei), prioridades e medidas sociais. O pedido é apresentado na Unidade de Saúde Pública/Delegado de Saúde da área de residência. Taxa base em 2026: 12,50 €; reavaliação — 5 €; recurso — 25 €.',
  tags: ['amim', 'sns', 'deficiência', 'irs', 'benefícios'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o AMIM e para que serve',
      content: [
        { kind: 'paragraph', text: 'O Atestado Médico de Incapacidade Multiuso (AMIM) é um certificado médico oficial que confirma o grau de incapacidade em percentagem. Não é emitido pelo médico de família nem por uma clínica privada, mas sim por uma junta médica após avaliação dos documentos e, se necessário, exame presencial.' },
        { kind: 'paragraph', text: 'A palavra Multiuso é importante: um único documento é utilizado perante diferentes entidades — Finanças, Segurança Social, IMT, escolas, empregador, serviços municipais. Normalmente, o limiar decisivo é incapacidade igual ou superior a 60%.' },
        { kind: 'checklist', items: [
          'IRS: deduções acrescidas e regras fiscais especiais para o contribuinte com deficiência ≥60%',
          'ISV: possível isenção na compra de automóvel para pessoa com deficiência, se forem cumpridas condições específicas',
          'IVA: possível benefício/isenção na compra de automóvel para algumas categorias de deficiência',
          'IUC: possível isenção ou limitação do imposto automóvel em caso de incapacidade ≥60% e cumprimento das condições',
          'Atendimento prioritário nos serviços públicos, quando aplicável',
          'Acesso a determinadas medidas sociais, educativas e municipais',
          'Comprovação do estatuto perante o empregador, se você decidir fornecê-la'
        ] },
        { kind: 'warning', text: 'O AMIM, por si só, não significa pagamento automático de uma prestação nem isenção automática de todos os impostos. Cada benefício tem regras próprias: percentagem, tipo de deficiência, categoria do veículo, limites, prazo de propriedade, registo nas Finanças ou no IMT.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem pode apresentar o pedido',
      content: [
        { kind: 'paragraph', text: 'O pedido pode ser apresentado por uma pessoa que resida em Portugal e tenha fundamentos médicos para a avaliação da incapacidade. Para um expatriado, o percurso prático principal é obter primeiro o número de utente no SNS e depois contactar a Unidade de Saúde Pública da área de residência.' },
        { kind: 'checklist', items: [
          'Cidadãos portugueses e estrangeiros que vivem em Portugal',
          'Titulares de autorização de residência, vistos D1-D8, cidadãos da UE com CRUE — desde que tenham morada em Portugal',
          'Crianças — através dos pais ou do representante legal',
          'Pessoas com doenças crónicas, oncologia, sequelas de traumatismos, limitações de mobilidade, visão, audição ou saúde mental',
          'Pessoas que precisam de reavaliação de um AMIM antigo devido a agravamento do estado de saúde',
          'Pessoas cujo AMIM antigo está a expirar e que necessitam de renovação'
        ] },
        { kind: 'warning', text: 'Um médico privado pode preparar um relatório médico e exames, mas não pode substituir a junta médica. Um atestado privado sem AMIM normalmente não é aceite pelas Finanças para benefícios fiscais.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos: o que reunir antes de apresentar o pedido',
      content: [
        { kind: 'paragraph', text: 'O erro principal é comparecer apenas com o diagnóstico. A junta médica avalia limitações funcionais segundo tabelas, por isso são necessários documentos médicos recentes, detalhados e traduzidos, se necessário.' },
        { kind: 'checklist', items: [
          'Documento de identificação: autorização de residência, Cartão de Cidadão ou passaporte',
          'Número de utente SNS',
          'NIF',
          'Comprovativo de morada na área da sua Unidade de Saúde Pública',
          'Requerimento para AMIM — normalmente o formulário é fornecido pela Unidade de Saúde Pública',
          'Relatório médico do médico assistente com diagnóstico, historial clínico e limitações actuais',
          'Resultados de exames: ressonância magnética/TAC, análises, notas de alta hospitalar, audiogramas, oftalmologia, relatórios psiquiátricos, etc.',
          'Lista de medicamentos e terapias',
          'AMIM anterior, se for uma renovação ou reavaliação',
          'Os documentos devem ser compreensíveis para os médicos portugueses; é preferível traduzir relatórios estrangeiros para PT/EN, especialmente se forem essenciais'
        ] },
        { kind: 'warning', text: 'Se a doença for rara ou os documentos vierem de outro país, peça a um especialista português que faça um relatório médico breve em português. Isto reduz muito o risco de a junta médica não considerar limitações importantes.' }
      ]
    },
    {
      id: 'application',
      title: 'Como apresentar o pedido e passar pela junta médica',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-unit', title: '1. Encontrar a Unidade de Saúde Pública', content: [
            { kind: 'paragraph', text: 'Dirija-se à Unidade de Saúde Pública/Delegado de Saúde da área de residência. Normalmente é uma estrutura integrada numa ULS ou num ACES, não uma consulta normal com o médico de família.' }
          ] },
          { id: 'submit-request', title: '2. Apresentar o requerimento', content: [
            { kind: 'paragraph', text: 'Entregue o pedido, o documento de identificação, o número de utente e os documentos médicos. Peça comprovativo de entrega ou referência para pagamento.' }
          ] },
          { id: 'pay-fee', title: '3. Pagar a taxa', content: [
            { kind: 'paragraph', text: 'O custo base de emissão do AMIM é 12,50 €. A renovação/reavaliação normalmente custa 5 €. O recurso, se impugnar a decisão, custa 25 €.' }
          ] },
          { id: 'medical-board', title: '4. Aguardar a convocatória', content: [
            { kind: 'paragraph', text: 'Será convocado para a junta médica. Leve os documentos originais e exames recentes. Por vezes a decisão é tomada com base nos documentos, mas é melhor estar preparado para um exame presencial.' }
          ] },
          { id: 'receive-certificate', title: '5. Receber o AMIM', content: [
            { kind: 'paragraph', text: 'O certificado indica a percentagem de incapacidade, a data, o prazo de validade ou a menção de carácter permanente. Verifique o nome, NIF/ID, percentagem e prazo de validade antes de sair.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-receiving',
      title: 'O que fazer depois de receber um AMIM ≥60%',
      content: [
        { kind: 'paragraph', text: 'Digitalize o AMIM e guarde o original. Para a maioria dos benefícios basta uma cópia, mas as entidades podem pedir o original ou uma cópia autenticada.' },
        { kind: 'checklist', items: [
          'Finanças: actualize o cadastro/dados de IRS para que a Autoridade Tributária considere a deficiência ≥60%',
          'IRS: verifique a declaração Modelo 3 — o estatuto deve estar reflectido correctamente no ano a que o atestado se aplica',
          'Automóvel: antes da compra, confirme junto da Autoridade Tributária/Alfândega e do IMT as condições de ISV, IVA e IUC, caso contrário pode perder o benefício',
          'Trabalho: informe o empregador apenas se precisar de adaptações, quotas ou efeitos fiscais/sociais',
          'Segurança Social: verifique se tem direito à prestação social para a inclusão ou a outras medidas',
          'Benefícios municipais: pergunte na Câmara Municipal/Junta de Freguesia sobre transporte, estacionamento, habitação e desporto',
          'SNS: guarde todos os novos relatórios médicos para uma futura reavaliação',
          'Se o AMIM for temporário, coloque um lembrete 6 meses antes do fim'
        ] },
        { kind: 'warning', text: 'Para o IRS, a data de validade do AMIM é importante. Se o atestado for emitido mais tarde, mas confirmar a condição desde uma data anterior, os efeitos fiscais podem depender da formulação e da posição das Finanças. Quando estiverem em causa milhares de euros, vale a pena falar com um contabilista.' }
      ]
    },
    {
      id: 'appeal-renewal',
      title: 'Se a percentagem for baixa, houver indeferimento ou o prazo estiver a expirar',
      content: [
        { kind: 'paragraph', text: 'Se a junta médica fixou uma percentagem inferior à esperada, pode apresentar recurso. Normalmente é necessário um dossiê médico forte: parecer de especialista, testes funcionais, novos exames, descrição das limitações na vida diária e no trabalho.' },
        { kind: 'checklist', items: [
          'Peça imediatamente cópia da decisão e confirme o prazo para recurso',
          'Verifique que diagnósticos e limitações não foram considerados',
          'Obtenha um relatório médico com descrição directa da perda funcional, e não apenas do diagnóstico',
          'Junte exames e notas de alta recentes',
          'Pague a taxa de recurso — 25 €',
          'Para a renovação, apresente o pedido com antecedência, especialmente se o IRS ou benefícios automóveis dependerem do AMIM',
          'Em caso de agravamento do estado de saúde, pode pedir reavaliação antes do fim do prazo'
        ] },
        { kind: 'warning', text: 'Não conte com a conversão automática de uma deficiência reconhecida no estrangeiro para 60% em Portugal. Portugal aplica as suas próprias tabelas médicas e o procedimento de junta médica.' }
      ]
    }
  ],
  costs: [
    { label: 'Primeira emissão do AMIM', amountEUR: 12.50, note: 'Taxa pela junta médica/emissão do atestado; é paga no momento do pedido ou de acordo com as instruções da Unidade de Saúde Pública.' },
    { label: 'Renovação ou reavaliação', amountEUR: 5, note: 'Reavaliação/renovação, se o prazo expirou ou o estado de saúde se alterou.' },
    { label: 'Recurso', amountEUR: 25, note: 'Impugnação da decisão da junta médica; prepare provas médicas novas ou mais fortes.' }
  ],
  sources: [
    {
      title: 'SNS 24: Atestado Médico de Incapacidade Multiuso',
      url: 'https://www.sns24.gov.pt/servico/atestado-multiuso/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS: FAQ sobre obtenção do AMIM',
      url: 'https://www.ers.pt/pt/utentes/perguntas-frequentes/faq/obtencao-de-atestado-medico-de-incapacidade-multiuso-amim/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 202/96: regime de avaliação de incapacidade das pessoas com deficiência',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/202-1996-175469',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 352/2007: Tabela Nacional de Incapacidades',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/352-2007-629069',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
