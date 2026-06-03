export default {
  editorialVoice: 'hackportugal',
  id: 'seguro-saude-medis-multicare',
  categoryId: 'healthcare',
  title: 'Seguros de saúde em Portugal: Médis vs Multicare vs AdvanceCare',
  tldr: 'Em 2026, um seguro de saúde privado em Portugal custa normalmente 30–60 €/mês para pessoas dos 25 aos 35 anos, 60–100 €/mês depois dos 45 e 100–150 €+/mês depois dos 60, se incluir hospitalização e limites de ambulatório. A Médis é a rede premium da Ageas, com um serviço forte; a Multicare, da Fidelidade, é o maior operador de massas; a AdvanceCare é uma rede/administrador, muitas vezes através da Generali Tranquilidade e de planos empresariais. Não olhe para a marca, mas sim para o plafond, copagamentos, exclusions e período de carência.',
  tags: ['seguro', 'saúde', 'médis', 'multicare', 'advancecare'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'market-map',
      title: 'Quem é quem no mercado',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o seguro de saúde privado não substitui o SNS, mas complementa-o: permite chegar mais depressa a um especialista, fazer exames e ter acesso a hospitais privados como CUF, Lusíadas, Luz Saúde, Trofa Saúde e clínicas convencionadas locais.' },
        { kind: 'checklist', items: [
          'Médis — marca de seguro de saúde do grupo Ageas Portugal. É normalmente vista como um produto mais premium: boa aplicação, rede forte, telemedicina conveniente e apoio.',
          'Multicare — seguro de saúde do grupo Fidelidade. Um dos maiores operadores: muitos contratos empresariais, rede ampla e, muitas vezes, boa cobertura em todo o país.',
          'AdvanceCare — nem sempre é uma “seguradora” em sentido estrito, mas sim uma rede e administradora de serviços médicos. Surge frequentemente em apólices da Generali Tranquilidade e em pacotes empresariais.',
          'As três funcionam segundo o modelo de rede convencionada: você vai a um médico da rede e paga um copagamento em vez do preço total.',
          'Se o médico estiver fora da rede, é necessário o regime de reembolso: paga 100%, envia a factura-recibo e aguarda uma devolução parcial.',
          'Para um expatriado, o critério principal não é o logótipo, mas sim a existência das clínicas de que precisa perto de casa e os limites para hospitalização, parto, estomatologia, psiquiatria e exames.'
        ] },
        { kind: 'warning', text: 'Não compre uma apólice apenas pelo preço. O plano mais barato cobre muitas vezes apenas consultas e descontos, mas não oferece uma hospitalização completa. Para visto, crédito habitação ou família, esse plano pode ser inútil.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Quanto custa em 2026 💶',
      content: [
        { kind: 'paragraph', text: 'O preço exacto depende da idade, morada, histórico clínico, franquia, copagamentos e coberturas escolhidas. As seguradoras calculam frequentemente os preços de forma individual, sobretudo depois dos 55–60 anos.' },
        { kind: 'checklist', items: [
          '25–35 anos: cerca de 30–60 €/mês por um plano individual normal com consultas, exames e hospitalização básica.',
          '35–45 anos: cerca de 45–80 €/mês, se houver hospitalização de 25 000–50 000 € por ano.',
          '45–60 anos: cerca de 60–100 €/mês; as exclusões e o questionário de saúde tornam-se mais importantes.',
          '60+ anos: frequentemente 100–150 €+/mês, e alguns planos estão fechados a novas adesões depois de determinada idade.',
          'Família de 2 adultos + criança: frequentemente 100–220 €/mês, consoante o nível de cobertura.',
          'Dental normalmente vem como módulo separado ou como rede de descontos, e não como seguro completo.',
          'Maternidade/parto exige quase sempre um waiting period e um plafond separado.',
          'Um plano empresarial através do empregador é quase sempre mais vantajoso do que um individual: preço mais baixo e, por vezes, questionnaire médico menos exigente.'
        ] },
        { kind: 'paragraph', text: 'Se o orçamento for limitado, é melhor escolher um plano com hospitalização e copagamentos moderados do que um plano “de montra” com uma aplicação bonita, mas sem limites sérios para cirurgias.' }
      ]
    },
    {
      id: 'compare-brands',
      title: 'Comparação entre Médis, Multicare e AdvanceCare',
      content: [
        { kind: 'substeps', items: [
          { id: 'medis', title: 'Médis: quando faz sentido', content: [
            { kind: 'checklist', items: [
              'Adequada se a aplicação, o apoio, a telemedicina e uma UX premium forem importantes.',
              'Boa escolha para Lisboa, Porto, Cascais, Oeiras, Braga, Coimbra, Algarve, onde há muitas clínicas privadas.',
              'Frequentemente conveniente para uma expat family: pediatria, consultas online, exames em grandes redes.',
              'Verifique o limite de hospitalização: as opções baratas podem ser demasiado restritas.',
              'Veja o copagamento por consulta de especialidade: tipicamente 15–30 €, mas depende do plano.'
            ] }
          ] },
          { id: 'multicare', title: 'Multicare: quando faz sentido', content: [
            { kind: 'checklist', items: [
              'Adequada se precisar de uma rede da Fidelidade o mais massificada e familiar possível.',
              'Surge frequentemente em empregadores e em produtos bancários/de parceria.',
              'Boa opção se não vive apenas em Lisboa/Porto: a cobertura no país é geralmente forte.',
              'Conveniente para pacotes familiares e upgrades empresariais.',
              'Verifique o reembolso: nos planos básicos pode ser fraco ou inexistente.'
            ] }
          ] },
          { id: 'advancecare', title: 'AdvanceCare / Generali: quando faz sentido', content: [
            { kind: 'checklist', items: [
              'Adequada se a apólice der acesso a uma rede AdvanceCare ampla perto da sua morada.',
              'Surge frequentemente em produtos da Generali Tranquilidade e em seguros de grupo.',
              'Pode ser mais vantajosa no preço, sobretudo no canal empresarial.',
              'É importante perceber quem é exactamente a seguradora: a AdvanceCare, enquanto rede, nem sempre é a sua seguradora no contrato.',
              'Antes de comprar, verifique se as CUF/Lusíadas/Luz/clínicas locais de que precisa aceitam o seu cartão.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'fine-print',
      title: 'O que ler no contrato antes de pagar',
      content: [
        { kind: 'paragraph', text: 'Nas apólices portuguesas, o que conta não são as promessas publicitárias de “acesso a 30 000 médicos”, mas sim as condições particulares e as condições gerais. Peça o PDF antes de pagar e verifique os pontos-chave.' },
        { kind: 'checklist', items: [
          'Capital / plafond hospitalização: quanto é que o seguro paga por cirurgias e internamento por ano.',
          'Ambulatório: limite para consultas, exames, tratamentos, fisioterapia.',
          'Copagamentos: quanto paga por consulta, urgência, exame, cirurgia.',
          'Franquia: montante que paga por conta própria antes de a cobertura começar a actuar.',
          'Reembolso fora da rede: se há devolução fora da rede e qual a percentagem.',
          'Período de carência: prazo de espera até ao início da cobertura.',
          'Exclusões: doenças crónicas, preexistentes, psiquiatria, fertilidade, cosmética, desportos de alto risco.',
          'Maternidade: cobertura de gravidez, parto normal/cesariana, limite e waiting period.',
          'Idade limite de adesão: até que idade é possível entrar no plano.',
          'Renovação anual: se a seguradora pode alterar o preço ou as condições na renovação.'
        ] },
        { kind: 'warning', text: 'Pre-existing conditions são quase sempre excluídas ou exigem avaliação por um médico da seguradora. Não esconda diagnósticos: perante um claim dispendioso, a seguradora pode pedir o historial e recusar o pagamento.' }
      ]
    },
    {
      id: 'waiting-periods',
      title: 'Período de carência: quando é que o seguro começa realmente a funcionar',
      content: [
        { kind: 'paragraph', text: 'Período de carência é o prazo de espera após o início do contrato. Durante esse período, paga os prémios, mas parte das coberturas ainda não está activa. Os prazos concretos diferem consoante o plano, mas a estrutura do mercado é semelhante.' },
        { kind: 'checklist', items: [
          'Urgência por acidente é normalmente coberta de imediato ou quase de imediato.',
          'Consultas e exames têm frequentemente uma espera de cerca de 30–60 dias.',
          'Hospitalização e cirurgias têm frequentemente uma espera de cerca de 90–180 dias.',
          'Parto, gravidez e tratamentos de infertilidade exigem frequentemente 365 dias ou mais.',
          'Psychiatry, psicologia, physiotherapy e estomatologia podem ter limites e esperas separados.',
          'Se estiver a mudar de outra seguradora sem interrupção, por vezes pode pedir redução/eliminação de carências, mas isso não é um direito automático.',
          'Os planos empresariais dão por vezes melhores condições de carências, sobretudo quando há inclusão em massa de colaboradores.'
        ] },
        { kind: 'warning', text: 'Se já está grávida, planeia uma cirurgia ou está a tratar uma doença crónica, não conte com a nova apólice para pagar isso imediatamente. Obtenha primeiro uma confirmação por escrito da seguradora ou do mediador.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Escolha prática para expatriados',
      content: [
        { kind: 'paragraph', text: 'O algoritmo é simples: escolha não a marca, mas o cenário de utilização. Para uma pessoa de 30 anos sem doenças crónicas e para uma família com uma criança em Cascais, a apólice ideal será diferente.' },
        { kind: 'checklist', items: [
          'Abra os mapas da Médis, Multicare e AdvanceCare e verifique 5–10 clínicas perto de casa e do trabalho.',
          'Verifique se determinados hospitais estão na rede: CUF, Hospital da Luz, Lusíadas, Trofa Saúde ou uma clínica local.',
          'Compare a hospitalização mínima: para maior tranquilidade, é melhor olhar para planos a partir de 25 000–50 000 € por ano e acima.',
          'Calcule o preço real: monthly premium + copagamentos + franquia + dental add-on.',
          'Se precisa de parto — veja maternidade, plafond e o waiting period de 365 dias antes da gravidez, e não depois.',
          'Se precisa de psicólogo/psiquiatra — verifique a cobertura separada; nos planos básicos, é frequentemente limitada.',
          'Peça a proposta e as condições gerais em inglês ou português; promessas verbais do agente não contam.',
          'Se o empregador oferece um plano empresarial Multicare/Médis/AdvanceCare, avalie primeiro o upgrade — é frequentemente mais vantajoso do que uma apólice familiar separada.'
        ] },
        { kind: 'paragraph', text: 'Recomendação de base: Médis — se o serviço e uma UX premium forem importantes; Multicare — se precisar da rede mais familiar e ampla possível; AdvanceCare/Generali — se o preço for bom e as clínicas de que precisa aceitarem mesmo o cartão.' }
      ]
    }
  ],
  costs: [
    { label: 'Plano individual 25–35 anos', amountEURMin: 30, amountEURMax: 60, note: 'Referência por mês em 2026; depende da cobertura e dos copagamentos.' },
    { label: 'Plano individual 45–60 anos', amountEURMin: 60, amountEURMax: 100, note: 'Com hospitalização e ambulatório; questionário de saúde obrigatório.' },
    { label: 'Plano individual 60+', amountEURMin: 100, amountEURMax: 150, note: 'Pode ser superior; são possíveis limites de idade para adesão.' },
    { label: 'Copagamento por consulta de especialidade', amountEURMin: 15, amountEURMax: 30, note: 'Intervalo típico na rede; o montante exacto está indicado na tabela de copagamentos.' },
    { label: 'Plano familiar 2 adultos + criança', amountEURMin: 100, amountEURMax: 220, note: 'Referência por mês; os planos empresariais podem ser mais baratos.' }
  ],
  sources: [
    { title: 'Médis — planos oficiais e rede de saúde', url: 'https://www.medis.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Multicare — planos oficiais e rede médica', url: 'https://www.multicare.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Generali Tranquilidade — seguros de saúde e rede AdvanceCare', url: 'https://www.generali.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASF — supervisão do mercado segurador de Portugal', url: 'https://www.asf.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
