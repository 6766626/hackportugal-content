export default {
  editorialVoice: 'hackportugal',
  id: 'fa-vehicles-eletricos-2026',
  categoryId: 'auto_ownership',
  title: 'Fundo Ambiental: subsídio para automóvel elétrico em 2026',
  tldr: 'O Fundo Ambiental atribui anualmente vales para mobilidade elétrica: no último Aviso publicado, o Aviso 06/2025 (aberto a 29.12.2025, para 2025–2026), o orçamento foi de 17,6 milhões €, para particulares — 4 000 € para um veículo ligeiro novo M1 100% elétrico até 38 500 € com IVA (até 55 000 € para veículos com mais de 5 lugares) e entrega para abate de automóvel antigo a combustão com mais de 10 anos; os PHEV não eram elegíveis. Em 31.05.2026, ainda é necessário verificar o Aviso 2026 específico em fundoambiental.pt: regras, limites e datas só se aplicam após a publicação do novo Aviso.',
  tags: ['fundoambiental', 'automóvelelétrico', 'subsídio', 'auto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é este subsídio',
      content: [
        { kind: 'paragraph', text: 'O Fundo Ambiental é um fundo público que abre anualmente o programa Incentivo pela Introdução no Consumo de Veículos de Emissões Nulas. Não é um desconto do concessionário, mas sim uma compensação após a compra: você compra o veículo, apresenta a candidatura online, aguarda a validação e recebe uma transferência para o IBAN.' },
        { kind: 'paragraph', text: 'Importante: as regras mudam todos os anos. Em 31.05.2026, no site do Fundo Ambiental, deve verificar especificamente o novo Aviso 2026. A última referência publicada é o Aviso 06/2025 (Mobilidade Verde Passageiros, aberto a 29.12.2025 para 2025–2026): orçamento total de 17,6 milhões €, limites por categoria e princípio “até esgotar o orçamento”.' },
        { kind: 'warning', text: 'Não assine uma compra e venda apenas “por causa do subsídio”. O direito ao pagamento não nasce da publicidade do concessionário, mas sim do Aviso concreto. Se o Aviso 2026 alterar o limite de preço, a exigência de abate ou a lista de categorias, aplicam-se as novas regras.' }
      ]
    },
    {
      id: 'eligible-vehicles',
      title: 'O que normalmente é elegível: BEV, comerciais, bicicletas',
      content: [
        { kind: 'paragraph', text: 'Em 2025, o programa estava orientado para veículos de emissões nulas — veículos sem emissões no local de utilização. Para automóveis ligeiros, isto significava um automóvel 100% elétrico, e não um plug-in hybrid.' },
        { kind: 'checklist', items: [
          'Veículo ligeiro 100% elétrico M1 para particular: referência 2025 — 4 000 €.',
          'Preço máximo do veículo ligeiro segundo o Aviso 06/2025: 38 500 € com IVA e todas as despesas obrigatórias incluídas na fatura (até 55 000 € para veículos com mais de 5 lugares).',
          'PHEV / híbrido plug-in: nos Avisos 2025 não eram considerados “emissões nulas” para este apoio.',
          'Novo veículo comercial ligeiro 100% elétrico N1: referência 2025 — 6 000 €.',
          'Cargo bike / bicicleta de carga: referência 2025 — 50% do custo até 1 500 €.',
          'Bicicleta elétrica: referência 2025 — 50% do custo até 500 €.',
          'Bicicleta convencional: referência 2025 — 50% do custo até 150 €.',
          'Motociclo elétrico / ciclomotor: referência 2025 — 50% do custo até 500 €.',
          'Carregamento em condomínio: em 2025 existia uma categoria separada para condomínios, normalmente não equivalente a um subsídio para wallbox pessoal numa moradia.'
        ] },
        { kind: 'warning', text: 'A compra de veículo usado, veículo importado com primeira matrícula fora das regras do Aviso, renting/leasing sem transferência do direito de propriedade e veículos acima do limite de preço muitas vezes não são elegíveis. Verifique a formulação “aquisição” e “primeira matrícula” no Aviso em vigor.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem pode apresentar candidatura em Portugal',
      content: [
        { kind: 'paragraph', text: 'Para um expatriado, a questão-chave não é a nacionalidade, mas sim a residência e a situação fiscal regular. No modelo típico do Fundo Ambiental, a pessoa singular deve ser residente em Portugal, ter NIF, acesso ao Portal do Fundo Ambiental e IBAN para o qual o fundo transferirá o dinheiro.' },
        { kind: 'checklist', items: [
          'NIF e acesso a autenticação.gov.pt / Chave Móvel Digital ou outro meio de autenticação suportado.',
          'Morada portuguesa e estatuto de residente: autorização de residência, certificado de registo da UE ou outro estatuto legal não substitui por si só as condições do Aviso concreto, mas é necessário para uma identificação fiscal normal.',
          'Ausência de dívidas à Autoridade Tributária: normalmente é necessária uma declaração de não dívida ou consentimento para consulta.',
          'Ausência de dívidas à Segurança Social: mesmo que não trabalhe, o portal pode pedir confirmação.',
          'IBAN em nome do candidato; é preferível um IBAN PT, embora um IBAN SEPA deva ser formalmente aceite, na prática um IBAN PT reduz fricções.',
          'A fatura e o recibo devem estar em nome do mesmo candidato que apresenta a candidatura.',
          'Normalmente, um incentivo por categoria/candidato no âmbito do ano, mas consulte o limite exato no Aviso 2026.',
          'Para veículo ligeiro BEV, no modelo de 2025 era exigido o abate de um automóvel antigo com motor de combustão interna com mais de 10 anos; o novo Aviso pode manter ou alterar esta condição.'
        ] },
        { kind: 'warning', text: 'Se está apenas a mudar-se e ainda não é residente em Portugal, não conte com o Fundo Ambiental como desconto garantido. Verifique primeiro a eligibility no Aviso: “pessoas singulares residentes em território nacional” e os documentos que o fundo aceita como prova.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos antes da candidatura',
      content: [
        { kind: 'paragraph', text: 'A candidatura é apresentada online, mas a recusa surge frequentemente por pormenores: proprietário errado no Documento Único Automóvel, preço acima do limite, ausência de certificado de abate ou fatura emitida em nome do cônjuge.' },
        { kind: 'checklist', items: [
          'Fatura e recibo / comprovativo de pagamento em nome do candidato.',
          'Documento Único Automóvel ou certificado de matrícula do veículo novo.',
          'Confirmação da primeira matrícula em Portugal e da data da matrícula no período permitido pelo Aviso.',
          'Comprovativo de IBAN em nome do candidato.',
          'Declaração de situação regularizada nas Finanças ou autorização para consulta.',
          'Declaração de situação regularizada na Segurança Social ou autorização para consulta.',
          'Para categoria com abate: certificado de destruição emitido por centro autorizado de tratamento de veículos em fim de vida.',
          'Prova de que o veículo antigo pertencia ao candidato durante o prazo exigido pelo Aviso, se tal condição existir.',
          'Características técnicas do veículo: marca, modelo, versão, VIN/quadro, potência, tipo de bateria — na fatura ou em anexo.',
          'Para cargo bike/e-bike: fatura com indicação clara do modelo e da conformidade com a categoria, e não apenas “bicicleta”.'
        ] },
        { kind: 'warning', text: 'O preço de 38 500 € no Aviso 06/2025 era calculado com IVA. As “campanhas” dos concessionários por vezes mostram o preço sem despesas obrigatórias, ISV/IUC/entrega/documentação. Para o fundo, o que conta é o valor na fatura.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como candidatar-se em fundoambiental.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-aviso', title: '1. Encontre o Aviso em vigor', content: [
            { kind: 'paragraph', text: 'Aceda a fundoambiental.pt → Avisos → Mobilidade Elétrica. Abra especificamente o Aviso 2026, quando estiver publicado, e não o PDF do ano anterior. Descarregue o Regulamento/Aviso e a lista de FAQ.' }
          ] },
          { id: 'register', title: '2. Autentique-se e crie a candidatura', content: [
            { kind: 'paragraph', text: 'Use o NIF e a autenticação digital. No formulário, escolha a categoria: ligeiro BEV, N1, cargo bike, e-bike, motociclo ou carregamento condomínio — os nomes das categorias devem coincidir com o Aviso.' }
          ] },
          { id: 'upload', title: '3. Carregue os documentos', content: [
            { kind: 'paragraph', text: 'É melhor dar nomes claros aos ficheiros: fatura.pdf, recibo.pdf, dua.pdf, iban.pdf, certidao-at.pdf, certidao-ss.pdf, certificado-destruicao.pdf. Verifique se o NIF, o nome e o VIN coincidem em todos os documentos.' }
          ] },
          { id: 'submit', title: '4. Submeta e acompanhe o estado', content: [
            { kind: 'paragraph', text: 'Após a submissão, a candidatura recebe um número. A ordem depende normalmente da submissão correta e da existência de orçamento; um processo incompleto pode ir para correção e perder ritmo.' }
          ] },
          { id: 'payment', title: '5. Receba o pagamento', content: [
            { kind: 'paragraph', text: 'Após a validação, o Fundo Ambiental transfere o montante para o IBAN. O prazo de pagamento não é garantido: em ciclos anteriores, a espera podia demorar semanas ou meses devido à verificação dos documentos e ao limite orçamental.' }
          ] }
        ] }
      ]
    },
    {
      id: 'strategy-2026',
      title: 'Estratégia prática para 2026',
      content: [
        { kind: 'paragraph', text: 'Se está a comprar um automóvel elétrico na primavera de 2026, proceda como um contabilista: primeiro verifique o Aviso, depois escolha o modelo e trate dos documentos. O concessionário pode ajudar, mas a responsabilidade pela candidatura continua a ser sua.' },
        { kind: 'checklist', items: [
          'Antes de encomendar, verifique se o Aviso 2026 foi publicado e se o prazo de candidaturas está aberto.',
          'Escolha um veículo com margem abaixo do limite: por exemplo, não 38 490 €, se o concessionário puder acrescentar despesas administrativas.',
          'Pergunte antecipadamente ao concessionário se a fatura incluirá o preço total, o VIN e a data de entrega.',
          'Se for exigido abate, não entregue o automóvel antigo “em retoma” sem certificado de destruição de um centro autorizado.',
          'Não registe o veículo em nome do cônjuge/empresa se a candidatura for apresentada por si como pessoa singular.',
          'Verifique a inexistência de dívidas nas Finanças e na Segurança Social antes da submissão, e não depois de uma recusa.',
          'Guarde PDF de todos os documentos e uma captura de ecrã da submissão.',
          'Não considere o subsídio como entrada obrigatória: o fundo paga a posteriori e apenas após verificação.'
        ] },
        { kind: 'warning', text: 'O Fundo Ambiental é um orçamento concursal, não um direito social. Mesmo cumprindo formalmente os requisitos, o fundo pode encerrar as candidaturas após esgotamento das verbas. Em 2026, obtenha os montantes, quotas e datas definitivos apenas no Aviso 2026 publicado.' }
      ]
    }
  ],
  costs: [
    { label: 'Veículo ligeiro 100% elétrico M1 para pessoa singular', amountEUR: 4000, note: 'Referência Aviso 06/2025; preço do veículo até 38 500 € com IVA (até 55 000 € para veículos com mais de 5 lugares); em 2026, confirmar no novo Aviso.' },
    { label: 'Veículo comercial ligeiro 100% elétrico N1', amountEUR: 6000, note: 'Referência Avisos 2025; as condições dependem da categoria do candidato e do Aviso.' },
    { label: 'Cargo bike / bicicleta de carga', amountEURMax: 1500, note: 'Referência Avisos 2025: até 50% do custo, mas não acima do limite.' },
    { label: 'Bicicleta elétrica', amountEURMax: 500, note: 'Referência Avisos 2025: até 50% do custo.' },
    { label: 'Bicicleta convencional', amountEURMax: 150, note: 'Referência Avisos 2025: até 50% do custo.' },
    { label: 'Motociclo elétrico ou ciclomotor', amountEURMax: 500, note: 'Referência Avisos 2025: até 50% do custo.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — portal oficial', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — Aviso 06/2025: Veículos de Emissões Nulas (Mobilidade Verde Passageiros)', url: 'https://www.fundoambiental.pt/avisos-anteriores/apoios-20242/mitigacao-as-alteracoes-climaticas/incentivo-pela-aquisicao-de-veiculos-de-emissoes-nulas-ano-20252026-mobilidade-verde--passageiros.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
