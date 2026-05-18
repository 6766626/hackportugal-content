export default {
  editorialVoice: 'hackportugal',
  id: 'casa-restaurar-licenciamento',
  categoryId: 'housing_buy',
  title: 'Restaurar um apartamento antigo: licenciamento da Câmara, ARU e benefício de IMI',
  tldr: 'Num apartamento antigo em Portugal, não se deve iniciar uma «restauração» como se fosse uma simples remodelação se mexer na fachada, estrutura, partes comuns, janelas, varandas, azulejos ou se o prédio estiver numa ARU / zona de património. São necessários arquitecto, verificação da Câmara Municipal e, por vezes, DGPC. As taxas municipais do processo ficam muitas vezes entre 100–500 €, mas o projecto e a fiscalização são pagos à parte. Em ARU, pode haver IMI: isenção de 3 anos após a reabilitação, depois prorrogação por mais 5 anos para HPP ou arrendamento, além de IRS de 30% das despesas até 500 €.',
  tags: ['aru', 'imi', 'licenciamento', 'obra'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'diagnostico',
      title: '1. Primeiro determinar: remodelação ou obra sujeita a controlo',
      content: [
        { kind: 'paragraph', text: 'Em 2026 está em vigor o RJUE com alterações do SIMPLEX urbanístico. Um acabamento interior simples, sem alteração da estrutura, fachada, colunas técnicas e partes comuns, normalmente não exige licença. Mas os apartamentos antigos têm quase sempre «armadilhas»: pavimentos de madeira, paredes portantes, janelas de fachada, azulejos históricos, ventilação, chaminés, condomínio e zonas de protecção do património.' },
        { kind: 'checklist', items: [
          'Pintura, pavimentos, cozinha sem deslocar colunas técnicas — normalmente obra de conservação, muitas vezes sem licenciamento',
          'Demolição de paredes, reforço de vigas, abertura de vãos — é necessário arquitecto / engenheiro e controlo da Câmara',
          'Substituição de janelas por outro material, cor ou desenho — risco de recusa, especialmente em Lisboa / Porto / centros históricos',
          'Ar condicionado na fachada, fecho de varanda, alteração de guardas — quase sempre exige verificação da Câmara',
          'Trabalhos em partes comuns: telhado, fachada, escadas, colunas — exigem condomínio e normalmente Câmara',
          'Um prédio em ARU não significa autorização automática: a ARU dá benefícios, mas não anula as regras de urbanismo',
          'Um prédio em zona de proteção ou imóvel classificado — pode exigir parecer da DGPC ou da estrutura municipal de património'
        ] },
        { kind: 'warning', text: 'Não confie na frase do vendedor «pode remodelar tudo». Antes da compra, peça à Câmara Municipal o histórico do processo, a planta aprovada e verifique se existem obras ilegais. Depois da escritura, as coimas e a obrigação de legalização passam, na prática, para o novo proprietário.' }
      ]
    },
    {
      id: 'verificar-zona',
      title: '2. Verificar ARU, património e restrições pelo endereço',
      content: [
        { kind: 'paragraph', text: 'Antes do orçamento, é preciso perceber o regime do edifício.\n\nEm Lisboa, por exemplo, a Rua Garrett / Chiado, Baixa Pombalina, Alfama, Mouraria e Avenida da Liberdade entram frequentemente em zonas com regras especiais para fachada, caixilharia, letreiros, aparelhos de ar condicionado, telhados e materiais. Nestes locais, o arquitecto deve ler não só o RJUE, mas também o PDM, o regulamento municipal, as cartas de património e as regras da ARU.' },
        { kind: 'checklist', items: [
          'Verifique o endereço no site da Câmara Municipal: PDM, condicionantes, ARU, loteamento, licença de utilização',
          'Verifique na DGPC: imóvel classificado, monumento nacional, interesse público, zona especial de proteção',
          'Peça ao vendedor: caderneta predial, certidão permanente, licença de utilização, ficha técnica da habitação, se aplicável',
          'Peça as plantas aprovadas: a disposição actual deve coincidir com o que está registado na Câmara',
          'Se o prédio for anterior a 1951, não conclua que «não é necessária licença»: podem existir requisitos de segurança, salubridade e património',
          'Se o apartamento estiver num prédio em propriedade horizontal, verifique o título constitutivo e as regras do condomínio',
          'Para ARU, guarde a prova de que o imóvel se encontra na zona: será necessária para benefícios de IMI / IMT / IVA / IRS'
        ] },
        { kind: 'warning', text: 'Em bairros históricos, «janelas de plástico iguais às do vizinho» não são prova de legalidade. A Câmara pode exigir a reposição da caixilharia original, da cor, do desenho ou a remoção de unidades exteriores de AC.' }
      ]
    },
    {
      id: 'licenciamento',
      title: '3. O que submeter à Câmara: comunicação prévia, licença ou isenção',
      content: [
        { kind: 'paragraph', text: 'A forma depende dos trabalhos e do município. Num cenário típico, o arquitecto prepara levantamento, projeto de arquitetura, peças desenhadas, memória descritiva, termo de responsabilidade e, quando necessário, specialty projects: estabilidade, águas, esgotos, eletricidade, acústica, térmica, segurança contra incêndio.' },
        { kind: 'substeps', items: [
          { id: 'isencao', title: 'Obras isentas', content: [
            { kind: 'paragraph', text: 'Pequenos trabalhos interiores sem impacto na estrutura, fachada, segurança e sistemas comuns podem ser isentos de controlo prévio. Mas é prudente obter confirmação escrita do arquitecto ou informação da Câmara, sobretudo antes de vender o apartamento no futuro.' }
          ] },
          { id: 'comunicacao', title: 'Comunicação prévia', content: [
            { kind: 'paragraph', text: 'É frequentemente usada para trabalhos que cumprem as regras estabelecidas e não exigem uma licença completa. Após submissão correcta e pagamento das taxas, é possível começar nos prazos definidos pelo RJUE e pelos procedimentos municipais, mas erros nos documentos criam risco de embargo.' }
          ] },
          { id: 'licenca', title: 'Licença administrativa', content: [
            { kind: 'paragraph', text: 'É necessária para casos mais sensíveis: alteração da fachada, estrutura, volume, uso, trabalhos em zonas protegidas, reabilitação substancial. Em Lisboa e Porto, os prazos dependem da zona e da carga dos serviços; conte meses, não semanas.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Contratar um arquitecto que já tenha submetido processos exactamente nesta Câmara',
          'Fazer o levantamento do estado existente antes das demolições',
          'Acordar com o condomínio ruído, acesso, elevador, entulho, seguro do empreiteiro',
          'Obter orçamento com IVA separado: 6% só é possível se forem cumpridas as condições de reabilitação / ARU; caso contrário, normalmente 23%',
          'Submeter o processo no balcão urbanístico municipal ou através do portal da Câmara',
          'Pagar as taxas municipais; para processos pequenos, muitas vezes 100–500 €, mas nas grandes cidades e em projectos complexos pode ser mais',
          'Não iniciar trabalhos até o arquitecto confirmar por escrito que o início é legal',
          'Após a conclusão, obter comprovativos, termo de responsabilidade e, se necessário, atualização da licença de utilização'
        ] }
      ]
    },
    {
      id: 'beneficios-fiscais',
      title: '4. IMI, IRS e IVA: como não perder os benefícios da ARU',
      content: [
        { kind: 'paragraph', text: 'O principal benefício para a restauração é o regime de reabilitação urbana. Nos termos do Estatuto dos Benefícios Fiscais, para prédios urbanos objeto de reabilitação em ARU ou edifícios com mais de 30 anos, pode haver isenção de IMI por 3 anos a contar do ano de conclusão dos trabalhos. Pode ser prorrogada por mais 5 anos se o imóvel for usado como habitação própria e permanente ou arrendado em arrendamento para habitação permanente.' },
        { kind: 'checklist', items: [
          'Verifique se o imóvel está em ARU ou cumpre o critério de edifício com mais de 30 anos e se a reabilitação é reconhecida pela Câmara',
          'Antes dos trabalhos, faça vistoria / avaliação do estado de conservação, se a Câmara o exigir',
          'Depois dos trabalhos, peça certidão / reconhecimento da reabilitação urbana na Câmara',
          'Submeta o pedido de isenção de IMI nas Finanças com a confirmação municipal',
          'A isenção de IMI não é automática: sem documento da Câmara, as Finanças normalmente não aplicam o benefício',
          'IRS: pode declarar 30% das despesas de reabilitação até ao limite de 500 € se cumprir as condições do EBF e tiver faturas com NIF',
          'IVA 6% nos trabalhos é possível para algumas empreitadas de reabilitação urbana, mas não para qualquer compra de mobiliário, electrodomésticos ou decoração',
          'Guarde faturas-recibo, contratos de empreitada, comprovativos de pagamento e fotografias antes/depois durante pelo menos 4 anos'
        ] },
        { kind: 'warning', text: 'Não confunda «o apartamento está em ARU» com «todos os trabalhos têm automaticamente IVA 6% e IMI durante 5 anos». São necessários o tipo correcto de trabalhos, confirmação da Câmara e faturas correctas. Se o empreiteiro aplicar 6% sem fundamento, o risco fiscal também pode recair sobre o proprietário.' }
      ]
    },
    {
      id: 'contratos',
      title: '5. Contrato com o arquitecto e o empreiteiro: o que prever',
      content: [
        { kind: 'paragraph', text: 'Um apartamento antigo não é uma remodelação cosmética. No orçamento surgem frequentemente problemas escondidos: vigas, humidade, canalização, electricidade sem terra, asbestos/fibrocimento, mezzanines ilegais, acústica fraca. São necessários não só um designer, mas também um arquitecto com experiência em licenciamento e um engenheiro.' },
        { kind: 'checklist', items: [
          'No contrato com o arquitecto: levantamento, estudo prévio, projeto, submissão à Câmara, respostas a notificações, acompanhamento de obra',
          'Indicar separadamente quem obtém parecer da DGPC / património, se o endereço estiver em zona protegida',
          'No contrato com o empreiteiro: prazo, preço, IVA, materiais, garantias, seguro de acidentes de trabalho, remoção de entulho',
          'Prever retention de 5–10% até à correcção dos defeitos e entrega dos documentos finais',
          'Pedir alvará ou registo do empreiteiro no IMPIC para o tipo de trabalhos correspondente',
          'Para o condomínio: aviso sobre prazos, ruído, elevador, proteção das zonas comuns, responsabilidade por danos',
          'Para compra destinada a restauração: incluir no CPCV uma condição de verificação do licenciamento, ARU e possibilidade dos trabalhos',
          'Para zonas de património: incluir cláusulas de património — proibição de alterar fachada, caixilharia, azulejos, cantarias sem autorização escrita'
        ] },
        { kind: 'warning', text: 'O erro mais caro é demolir tudo antes das autorizações. Se a Câmara decretar embargo, você paga a paragem da equipa, a legalização, a coima e, por vezes, a reposição do estado inicial.' }
      ]
    },
    {
      id: 'practical-plan',
      title: '6. Plano prático antes da compra ou do início da obra',
      content: [
        { kind: 'paragraph', text: 'Para um comprador expatriado, a ordem segura é esta: primeiro due diligence, depois a compra, depois o projecto, depois a Câmara e só então a obra. Se o apartamento for comprado para flip ou arrendamento, calcule antecipadamente não só o orçamento de construção, mas também os meses de espera, IMI, condomínio, juros do crédito e a impossibilidade de arrendar o imóvel durante os trabalhos.' },
        { kind: 'checklist', items: [
          'Semana 1: pedir documentos ao vendedor e ao condomínio',
          'Semana 1–2: o arquitecto verifica Câmara, ARU, DGPC, plantas e alterações ilegais',
          'Semana 2–3: preliminary budget com reserva de 15–25% para defeitos ocultos',
          'Antes do CPCV: incluir condição de saída se a Câmara / património não permitirem a reabilitação planeada',
          'Após a compra: encomendar o projeto e submeter comunicação prévia / licença / pedido de informação',
          'Durante a obra: guardar diário de obra, fotografias, faturas com NIF, autos de trabalhos ocultos',
          'Após a obra: pedir o reconhecimento da reabilitação e submeter a isenção de IMI',
          'Antes da venda ou arrendamento: garantir que a utilização, a planta e os documentos coincidem'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Taxas municipais por um pequeno processo urbanístico', amountEURMin: 100, amountEURMax: 500, note: 'Referência para submissões simples; a Câmara, a área e o tipo de trabalhos podem aumentar o valor.' },
    { label: 'Arquitecto para levantamento + submissão', amountEURMin: 1500, amountEURMax: 6000, note: 'Para apartamento; zonas de património complexas, specialty projects e fiscalização são pagos à parte.' },
    { label: 'Dedução de IRS por reabilitação', amountEUR: 500, note: 'Limite da dedução: 30% das despesas elegíveis até 500 € se forem cumpridas as condições do EBF e existirem faturas.' },
    { label: 'Isenção de IMI após reabilitação', amountEUR: 0, note: 'O benefício não é um montante, mas uma isenção: 3 anos, com possível prorrogação por mais 5 anos para HPP ou arrendamento habitacional de longa duração.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — Urbanismo, licenciamento e reabilitação urbana',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGPC — Património cultural, imóveis classificados e zonas de proteção',
      url: 'https://www.dgpc.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Decreto-Lei 555/99, RJUE, com alterações do SIMPLEX urbanístico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34567875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Estatuto dos Benefícios Fiscais, benefícios à reabilitação urbana',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34554075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
