export default {
  editorialVoice: 'hackportugal',
  id: 'ler-factura-luz',
  categoryId: 'daily_life',
  title: 'Como ler a fatura da eletricidade: consumo, taxas e cálculo',
  tldr: 'A fatura da EDP, Galp, Iberdrola ou Endesa tem 3 partes principais: potência contratada em kVA — valor fixo pela potência, consumo em kWh — energia real ou estimada, e impostos/taxas. Em 2026, em Portugal continental, a fatura inclui normalmente contribuição audiovisual RTP 2,85 € + IVA 6%, taxa DGEG cerca de 0,07 €/mês + IVA 23%, IEC 0,001 €/kWh e IVA 6%/13%/23% conforme as regras. O essencial é verificar se consta leitura real ou estimativa: se a fatura for estimada, comunique as leituras à E-REDES ou ao fornecedor.',
  tags: ['eletricidade', 'edp', 'fatura', 'iva', 'kwh'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'structure',
      title: '1. Encontre os 5 blocos-chave na factura da luz',
      content: [
        { kind: 'paragraph', text: 'O desenho varia entre fornecedores, mas a lógica é a mesma: o fornecedor vende energia, o operador da rede calcula o acesso à rede e as leituras, e o Estado acrescenta impostos e taxas. A conta pode chamar-se factura, fatura ou nota de débito.' },
        { kind: 'checklist', items: [
          'Dados do contrato — nome, morada, NIF, CPE e fornecedor',
          'CPE — identificador do ponto de consumo, necessário para mudar de fornecedor',
          'Potência contratada — potência em kVA: 3,45 / 4,6 / 5,75 / 6,9 kVA e superior',
          'Ciclo horário — simples, bi-horário ou tri-horário',
          'Consumo — quantidade de kWh no período',
          'Leitura real ou estimativa — leitura real ou estimada',
          'Tarifas de acesso às redes — tarifas de rede, por vezes incluídas no preço por kWh',
          'Taxas e impostos — IVA, contribuição audiovisual, DGEG, IEC',
          'Total a pagar e data limite de pagamento — montante e prazo de pagamento'
        ] },
        { kind: 'warning', text: 'Não compare apenas o “total a pagar” entre meses. Inverno, ar condicionado, termoacumulador, leituras estimadas e alterações da potência contratada podem causar um salto sem que a tarifa tenha mudado.' }
      ]
    },
    {
      id: 'potencia',
      title: '2. Potência contratada: aquilo que paga todos os dias',
      content: [
        { kind: 'paragraph', text: 'Potência contratada é a potência máxima que pode usar em simultâneo. É indicada em kVA e paga como componente fixa: €/dia ou €/mês. Mesmo que esteja fora e consuma 0 kWh, esta parte mantém-se.' },
        { kind: 'paragraph', text: 'Níveis domésticos típicos: 3,45 kVA — apartamento pequeno sem cargas simultâneas; 4,6 kVA — mínimo frequente para apartamento com termoacumulador/forno; 5,75 ou 6,9 kVA — se houver placa elétrica, termoacumulador, aquecedores, ar condicionado ou família.' },
        { kind: 'checklist', items: [
          'Se ao ligar chaleira + forno + termoacumulador o quadro elétrico/ICP disparar — a potência pode ser baixa',
          'Se nunca dispara nada, mas tem 6,9 kVA num apartamento pequeno — pode estar a pagar a mais na parte fixa',
          'Reduzir a potência permite poupar todos os dias, mas não reduz o preço por kWh',
          'Aumentar a potência aumenta a parte fixa da fatura',
          'A alteração da potência faz-se normalmente através do fornecedor, sem visita a uma loja',
          'Para casas com wallbox, bomba de calor ou aquecimento totalmente elétrico, 6,9 kVA pode ser pouco'
        ] },
        { kind: 'paragraph', text: 'O IVA sobre a parte fixa depende da potência e da região. Para Portugal continental em 2026, a referência é a seguinte: em baixa tensão normal, as taxas reduzida/intermédia aplicam-se à parte da potência até aos limites definidos, e a parte superior é tributada a 23%. Na prática, consulte a linha de IVA na fatura: o fornecedor é obrigado a discriminar a base tributável por taxas de 6%, 13% e 23%.' }
      ]
    },
    {
      id: 'consumo',
      title: '3. Consumo kWh: consumo real e zonas tarifárias',
      content: [
        { kind: 'paragraph', text: 'Consumo é a diferença entre a leitura anterior e a leitura atual do contador. A unidade é kWh. A fórmula é simples: kWh × preço kWh. Se tiver bi-horário ou tri-horário, o cálculo é feito separadamente por zonas horárias.' },
        { kind: 'checklist', items: [
          'Simples — um único preço por kWh durante todo o dia',
          'Bi-horário — normalmente vazio é mais barato, fora de vazio é mais caro',
          'Tri-horário — vazio, cheias e ponta',
          'Vazio compensa se a máquina de lavar roupa, o termoacumulador, a máquina de lavar loiça ou o carregamento do carro funcionarem de facto à noite/ao fim de semana',
          'Se consome quase tudo à noite em ponta/fora de vazio, o bi-horário pode ficar mais caro do que o simples',
          'O preço por kWh pode incluir energy + tarifas de acesso às redes ou aparecer em linhas separadas',
          'No mercado liberalizado, o preço depende do contrato, e não apenas da ERSE'
        ] },
        { kind: 'paragraph', text: 'IVA sobre consumo em Portugal continental: para potência até 6,9 kVA, os primeiros 100 kWh em 30 dias são tributados a 6%; para agregados familiares numerosos, o limite pode ser 150 kWh em 30 dias após confirmação do estatuto; o consumo acima do limite é tributado a 23%. Se o período de faturação não for de 30 dias, o limite é recalculado proporcionalmente.' },
        { kind: 'warning', text: 'Se a fatura tiver um período de 60 dias, o limite para o IVA reduzido sobre consumo não é “100 kWh”, mas cerca de 200 kWh. Por isso, as linhas de IVA podem parecer inesperadas: parte dos kWh a 6%, o restante a 23%.' }
      ]
    },
    {
      id: 'taxas',
      title: '4. Taxas e impostos: porque é que são acrescentadas mais linhas à energia',
      content: [
        { kind: 'paragraph', text: 'Na factura da luz há pagamentos que não são o seu preço da eletricidade. São obrigatórios e aparecem em todos os fornecedores, embora os nomes das linhas possam variar ligeiramente.' },
        { kind: 'checklist', items: [
          'Contribuição audiovisual / CAV / RTP — 2,85 € por mês + IVA 6%, total cerca de 3,02 €',
          'Para beneficiário da tarifa social de eletricidade, a CAV é normalmente reduzida para 1,00 € + IVA 6%',
          'Com consumo anual muito baixo, até 400 kWh, a CAV pode não ser cobrada',
          'Taxa de Exploração DGEG — cerca de 0,07 € por mês + IVA 23%',
          'IEC / Imposto Especial de Consumo de Eletricidade — 0,001 €/kWh + IVA 23%',
          'IVA — não é aplicado a um único total, mas a bases diferentes: 6%, 13% e 23%',
          'Juros, penalizações ou custos de cobrança só aparecem em caso de atrasos/operações especiais'
        ] },
        { kind: 'paragraph', text: 'Exemplo de verificação rápida: se a CAV num apartamento normal for cerca de 3,02 € por mês — é normal. Se a fatura for de 2 meses, a linha será cerca de 6,04 €. A DGEG por mês é cerca de 0,09 € com IVA, ou seja, não é a causa de uma fatura elevada.' },
        { kind: 'warning', text: 'Na Madeira e nos Açores, as taxas de IVA são inferiores às regionais, pelo que os montantes de IVA diferem dos de Portugal continental. A regra para ler a fatura é a mesma, mas as percentagens nas linhas do imposto serão outras.' }
      ]
    },
    {
      id: 'leituras',
      title: '5. Leitura real vs estimativa: onde surge o erro mais frequente',
      content: [
        { kind: 'paragraph', text: 'A linha mais importante é o tipo de leitura. Leitura real significa que a fatura se baseia numa leitura real do contador: remota, da E-REDES ou comunicada por si. Estimativa significa cálculo por previsão. Depois de uma estimativa, a fatura seguinte pode aumentar muito ou baixar devido a acerto.' },
        { kind: 'checklist', items: [
          'Encontre na fatura o bloco “Leituras” ou “Detalhe de consumo”',
          'Verifique a data da leitura anterior e da leitura atual',
          'Procure as palavras real, comunicada pelo cliente, estimada ou acerto',
          'Compare a leitura atual com o contador em casa',
          'Se o contador for inteligente, a telecontagem pode ainda assim não funcionar sempre',
          'Comunique as leituras na janela de comunicação indicada na fatura',
          'Pode comunicar a leitura pelo site/app do fornecedor, pela E-REDES, por telefone ou, por vezes, no Multibanco',
          'Guarde um screenshot/confirmação da comunicação das leituras',
          'Se chegar um acerto excessivo, peça detalhe de leituras e faça reclamação junto do fornecedor'
        ] },
        { kind: 'paragraph', text: 'Fórmula para verificação manual: leitura atual − leitura anterior = kWh. Depois, os kWh são multiplicados pelo preço da sua tarifa. Para bi-horário, verifique separadamente vazio e fora de vazio: o contador normalmente tem vários registos.' },
        { kind: 'warning', text: 'Não ignore estimativa durante vários meses seguidos. Se o fornecedor subestimou a previsão, depois chegará um acerto pela diferença acumulada; se sobrestimou — o dinheiro volta por compensação, mas o cash-flow continua a ser desagradável.' }
      ]
    },
    {
      id: 'check',
      title: '6. Mini-auditoria da fatura em 10 minutos',
      content: [
        { kind: 'paragraph', text: 'Analise uma vez a fatura linha a linha e guarde os valores normais para o seu apartamento. Depois disso, qualquer mês estranho será imediatamente visível.' },
        { kind: 'checklist', items: [
          'Verifique se NIF, morada e CPE estão corretos',
          'Compare a potência contratada com a vida real: não estará demasiado alta',
          'Calcule kWh/dia: total kWh ÷ número de dias do período',
          'Compare kWh/dia com o mês anterior e com a mesma estação do ano',
          'Certifique-se de que a leitura não é estimativa sem motivo',
          'Verifique se o ciclo horário ou o preço kWh não mudou',
          'Veja se existem serviços adicionais: assistência técnica, seguros, manutenção',
          'Verifique CAV, DGEG e IEC: devem ser pequenos e previsíveis',
          'Se a fatura aumentou, procure primeiro em consumo/acerto, depois em preço kWh, depois em potência',
          'Para contestar, primeiro reclamação ao fornecedor, depois Livro de Reclamações ou ERSE/CNIACC'
        ] },
        { kind: 'paragraph', text: 'Referência prática: um grande salto é normalmente causado não pela DGEG nem pela CAV, mas por aquecimento/termoacumulador, ar condicionado, leituras estimadas, acerto após vários meses de estimativa ou fim de uma tarifa promocional.' }
      ]
    }
  ],
  costs: [
    { label: 'Contribuição audiovisual RTP / CAV', amountEUR: 2.85, note: 'Por mês sem IVA; com IVA 6% — cerca de 3,02 € em Portugal continental' },
    { label: 'CAV para tarifa social', amountEUR: 1.00, note: 'Por mês sem IVA; com IVA 6% — cerca de 1,06 €' },
    { label: 'Taxa de Exploração DGEG', amountEUR: 0.07, note: 'Cerca de 0,07 € por mês sem IVA; com IVA 23% — cerca de 0,09 €' },
    { label: 'IEC / Imposto Especial de Consumo de Eletricidade', amountEUR: 0.001, note: 'Por 1 kWh sem IVA; aplica-se ao consumo' },
    { label: 'Comunicação de leitura', amountEUR: 0, note: 'Através da E-REDES ou do fornecedor, normalmente grátis' }
  ],
  sources: [
    { title: 'ERSE: informação para consumidores de eletricidade e explicação da fatura', url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: tarifas, preços e IVA sobre eletricidade', url: 'https://www.erse.pt/atividade/regulacao/tarifas-e-precos/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DECO Proteste: como ler a fatura da eletricidade', url: 'https://www.deco.proteste.pt/casa-energia/eletricidade-gas/dicas/como-ler-fatura-eletricidade', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES: comunicação de leituras do contador', url: 'https://www.e-redes.pt/pt-pt/clientes/leituras', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
