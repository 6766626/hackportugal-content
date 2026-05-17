export default {
  editorialVoice: 'hackportugal',
  id: 'encanador-electricista-urgencia',
  categoryId: 'emergency_rights',
  title: 'Canalizador e electricista — quem chamar numa avaria 24/7',
  tldr: 'Em caso de rebentamento de um tubo ou curto-circuito em Portugal, comece por fechar a água/eletricidade e verifique a apólice do seguro: a assistência ao lar no seguro multirriscos pode pagar a deslocação ou indicar o seu próprio prestador. Um canalizador/electricista privado 24/7 cobra normalmente 60–120 € por hora + deslocação + IVA 23%, sendo mais caro à noite/fins de semana. Antes de pagar, exija o preço por escrito, NIF da empresa, fatura/recibo e não aceite “diagnóstico” sem limite.',
  tags: ['avaria', 'canalizador', 'electricista', 'seguro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'first-minutes',
      title: 'Primeiros 5 minutos: limitar os danos',
      content: [
        { kind: 'paragraph', text: 'Antes de telefonar ao técnico, a sua tarefa não é “reparar”, mas sim reduzir os danos e não criar risco de vida. Num prédio, avise imediatamente os vizinhos de baixo e o condomínio/administrador se a água puder estar a passar por colunas comuns.' },
        { kind: 'checklist', items: [
          'Rebentamento de água: feche a torneira de segurança do aparelho ou o registo/torneira de corte da água geral dentro da habitação.',
          'Inundação proveniente de uma coluna ou tubagens comuns: telefone ao condomínio/administrador, porque pode ser responsabilidade do condomínio.',
          'Faíscas, cheiro a queimado, disparo do quadro elétrico: desligue o disjuntor geral e não volte a ligar antes de uma inspeção.',
          'Entrou água em tomadas/quadro: não toque em interruptores molhados; desligue apenas o disjuntor geral com as mãos secas, se for seguro.',
          'Cheiro a gás: não chame “um electricista para verificar”, não acenda a luz, abra as janelas, feche o gás e ligue 112 ou para a linha de emergência do fornecedor de gás.',
          'Tire fotografias/vídeos antes de limpar: local da avaria, contadores, danos, hora e data — isto é necessário para o seguro.',
          'Se for arrendatário: escreva de imediato ao senhorio/agência por WhatsApp/email, para ficar registada a notificação.'
        ] },
        { kind: 'warning', text: 'Não aceite abrir paredes, substituir o quadro ou fazer uma “remodelação completa” à noite sem orçamento escrito. O técnico de urgência deve resolver a avaria, não vender uma grande obra sob pressão.' }
      ]
    },
    {
      id: 'who-to-call',
      title: 'Quem chamar: particular, plataforma ou seguro',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, os canalizadores de urgência são procurados por canalizador 24 horas, piquete canalização, desentupimento urgente; os electricistas — electricista 24 horas, avaria elétrica, piquete elétrico. Encanador é uma palavra usada no Brasil; em Portugal diz-se mais frequentemente canalizador, embora muitos profissionais compreendam ambos os termos.' },
        { kind: 'substeps', items: [
          { id: 'insurance-first', title: '1. Verifique primeiro o seguro', content: [
            { kind: 'paragraph', text: 'Se tiver seguro multirriscos habitação ou seguro de arrendatário com assistência ao lar, ligue para a linha de emergência da seguradora antes de chamar um técnico privado. A apólice pode cobrir a deslocação, a reparação provisória de uma fuga, a abertura de porta, electricista, serralheiro, ou encaminhar um prestador sem pagamento antecipado.' }
          ] },
          { id: 'platforms', title: '2. Se o seguro não ajudar — plataformas', content: [
            { kind: 'paragraph', text: 'Para procurar, use Habitissimo, Fixando, Zaask, PortugalMaster, Google Maps e grupos locais de Facebook/WhatsApp. As plataformas têm a vantagem de disponibilizar avaliações e troca de mensagens; a desvantagem é que à noite há menos profissionais disponíveis, e o preço continua a ter de ser confirmado pelo executante concreto.' }
          ] },
          { id: 'building-admin', title: '3. Num apartamento — chamada ao condomínio', content: [
            { kind: 'paragraph', text: 'Se a avaria estiver relacionada com tubagens comuns, coluna montante, telhado, fachada, quadro comum ou contador em zona comum, um técnico privado pode apenas travar temporariamente os danos. A reparação definitiva deve ser organizada pelo condomínio ou pela entidade gestora.' }
          ] }
        ] }
      ]
    },
    {
      id: 'price-check',
      title: 'Preço antes da deslocação: o que perguntar por telefone',
      content: [
        { kind: 'paragraph', text: 'Uma deslocação urgente típica de um canalizador ou electricista privado em 2026: 60–120 € por hora de trabalho. À parte podem acrescentar deslocação, taxa de urgência, agravamento noturno/fim de semana, materiais e IVA 23%. Em Lisboa, Porto e Algarve, as chamadas urgentes ficam normalmente mais perto do limite superior.' },
        { kind: 'checklist', items: [
          'Quanto custa a deslocação até à minha morada?',
          'Quanto custa 1 hora de trabalho e qual é o mínimo de cobrança: 1 hora, 2 horas ou pacote fixo?',
          'Existe taxa de urgência por noite, fim de semana ou feriado?',
          'O preço inclui IVA 23% ou o IVA será acrescentado por cima?',
          'Quanto custa o diagnóstico se eu recusar a reparação?',
          'Qual é o preço de uma peça típica: torneira, sifão, tubo flexível, disjuntor, tomada?',
          'Pode enviar orçamento ou pelo menos um intervalo de preço por WhatsApp antes da deslocação?',
          'Emitem fatura/recibo com NIF e descrição dos trabalhos?',
          'Qual é a garantia do trabalho realizado e dos materiais?',
          'O técnico virá por uma empresa ou como trabalhador independente com recibos verdes?'
        ] },
        { kind: 'warning', text: 'A frase “vamos ver agora e depois dizemos” sem preço de deslocação e diagnóstico é um sinal de alerta. No mínimo, deixe registado em mensagem: deslocação, tarifa/hora, IVA, suplemento noturno e limite de trabalhos sem o seu consentimento separado.' }
      ]
    },
    {
      id: 'before-paying',
      title: 'Antes de pagar: documentos e sinais de um técnico correto',
      content: [
        { kind: 'paragraph', text: 'Pagar em numerário sem fatura é um risco: o seguro pode recusar o reembolso e, em caso de litígio, não terá provas. Mesmo que a reparação seja pequena, peça um documento da empresa ou recibo do trabalhador independente.' },
        { kind: 'checklist', items: [
          'Nome da empresa ou nome do prestador de serviços e NIF.',
          'Telefone, email ou morada para reclamação após a reparação.',
          'Fatura/recibo com data, morada do imóvel e descrição dos trabalhos.',
          'Separação entre “mão de obra”, “deslocação”, “materiais”, “IVA”.',
          'Fotografia da peça substituída e, se possível, a peça antiga deixada consigo até encerrar a questão com o seguro.',
          'Para eletricidade: o técnico não deve contornar proteções, colocar “pontes”, desligar a ligação à terra ou aumentar disjuntores sem verificar o cabo.',
          'Para canalização: depois da reparação, verifique se há fugas durante 10–15 minutos com a água aberta e peça que lhe mostrem exatamente o que foi substituído.',
          'Pagamento por MB WAY/transferência é melhor do que numerário: fica rasto do pagamento.',
          'Se pagar em numerário, a fatura continua a ser obrigatória; peça que indiquem “pago em numerário”.'
        ] },
        { kind: 'warning', text: 'Não entregue o cartão bancário “como caução” e não pague a totalidade antecipadamente a um técnico desconhecido. É admissível um pequeno adiantamento para uma peça rara, mas com confirmação escrita e NIF do destinatário.' }
      ]
    },
    {
      id: 'insurance-claims',
      title: 'Seguro e litígios: como recuperar dinheiro ou reclamar',
      content: [
        { kind: 'paragraph', text: 'Se os danos forem cobertos pela apólice, a seguradora normalmente pede fotos, participação do sinistro, fatura/recibo, relatório do técnico e, por vezes, declaração do condomínio ou do vizinho. Quanto mais cedo telefonar para a seguradora, menor é o risco de as despesas serem consideradas “não autorizadas”.' },
        { kind: 'checklist', items: [
          'Abra a apólice e procure as coberturas: danos por água, riscos elétricos, assistência ao lar, responsabilidade civil.',
          'Telefone para a linha de assistência 24h da seguradora e peça o número do processo/sinistro.',
          'Confirme o plafond: limite para deslocação, horas de trabalho, materiais, número de chamadas por ano.',
          'Não deite fora peças danificadas até autorização da seguradora, se for seguro guardá-las.',
          'Reúna fotografias antes/depois, vídeo da fuga ou do quadro, mensagens com o técnico e recibo.',
          'Se a avaria veio do vizinho de cima, registe o contacto do vizinho e da seguradora dele.',
          'Se a culpa for das partes comuns do edifício, peça ao condomínio os dados do seguro do condomínio.',
          'Em caso de litígio com o técnico, primeiro faça uma reclamação escrita por email/WhatsApp, depois Livro de Reclamações.'
        ] },
        { kind: 'paragraph', text: 'O Livro de Reclamações Eletrónico serve para reclamar contra um prestador de serviços registado. Se a empresa não emitir fatura ou impuser pagamento sem documento, também pode reclamar junto da Autoridade Tributária e Aduaneira e da ASAE, mas, na prática, para o reembolso é mais importante guardar logo as provas e não pagar “acréscimos” contestados sem discriminação.' }
      ]
    }
  ],
  costs: [
    { label: 'Canalizador/electricista de urgência', amountEURMin: 60, amountEURMax: 120, note: 'Intervalo habitual por hora de trabalho numa chamada urgente; deslocação, suplemento noturno, materiais e IVA 23% podem ser cobrados à parte.' },
    { label: 'IVA em reparações domésticas', amountEUR: 23, note: 'A taxa normal de IVA em Portugal continental é 23%; confirme se está incluída no preço indicado.' },
    { label: 'Assistência ao lar pelo seguro', amountEURMin: 0, amountEURMax: 50, note: 'Muitas vezes a deslocação pela apólice é gratuita ou tem franquia/limite; depende da apólice e do plafond.' }
  ],
  sources: [
    { title: 'DECO PROteste — direitos do consumidor em serviços e reparações domésticas', url: 'https://www.deco.proteste.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Eletrónico — apresentação oficial de reclamações contra prestadores de serviços', url: 'https://www.livroreclamacoes.pt/Inicio/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — informação para consumidores de eletricidade e situações de avaria', url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária e Aduaneira — faturas, NIF e documentos fiscais', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
