export default {
  editorialVoice: 'hackportugal',
  id: 'seguro-saude-medis-multicare',
  categoryId: 'healthcare',
  title: 'Seguros de saúde em Portugal: Médis vs Multicare vs AdvanceCare',
  tldr: 'Em 2026, o seguro de saúde privado em Portugal custa normalmente 30–60 €/mês para pessoas dos 25 aos 35 anos, 60–100 €/mês depois dos 45 e 100–150 €+/mês depois dos 60, se incluir hospitalização e limites de ambulatório. A Médis é a rede premium da Ageas com um serviço forte; a Multicare, da Fidelidade, é o maior operador de massas; a AdvanceCare é uma rede/administrador, muitas vezes através da Generali Tranquilidade e de planos empresariais. Não olhe para a marca, mas sim para o plafond, copagamentos, exclusions e período de carência.',
  tags: ['seguro', 'saúde', 'médis', 'multicare', 'advancecare'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'market-map',
      title: 'Quem é quem no mercado',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o seguro de saúde privado não substitui o SNS, complementa-o: permite chegar mais depressa a um especialista, fazer exames e aceder a hospitais privados como CUF, Lusíadas, Luz Saúde, Trofa Saúde e clínicas convencionadas locais.' },
        { kind: 'checklist', items: [
          'Médis — marca de saúde insurance do grupo Ageas Portugal. É normalmente vista como um produto mais premium: boa aplicação, rede forte, telemedicina prática e apoio eficiente.',
          'Multicare — seguro de saúde do grupo Fidelidade. Um dos maiores operadores: muitos contratos empresariais, rede ampla e, frequentemente, boa cobertura em todo o país.',
          'AdvanceCare — nem sempre é uma “seguradora” em sentido estrito, mas sim uma rede e administradora de serviços médicos. Surge muitas vezes em apólices da Generali Tranquilidade e em pacotes empresariais.',
          'As três funcionam com o modelo de rede convencionada: você vai a um médico da rede e paga um copagamento em vez do preço total.',
          'Se o médico estiver fora da rede, é necessário o regime de reembolso: você paga 100%, envia a factura-recibo e aguarda o reembolso parcial.',
          'Para um expat, o critério principal não é o logótipo, mas sim a existência das clínicas necessárias perto de casa e os limites para hospitalização, parto, estomatologia, psiquiatria e exames.'
        ] },
        { kind: 'warning', text: 'Não compre uma apólice apenas pelo preço. O plano mais barato cobre muitas vezes só consultas e descontos, mas não oferece hospitalização completa. Para visto, crédito à habitação ou família, esse plano pode ser inútil.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Quanto custa em 2026 💶',
      content: [
        { kind: 'paragraph', text: 'O preço exacto depende da idade, morada, histórico clínico, franquia, copagamentos e coberturas escolhidas. Nas seguradoras, os preços são frequentemente calculados de forma individual, especialmente depois dos 55–60 anos.' },
        { kind: 'checklist', items: [
          '25–35 anos: cerca de 30–60 €/mês por um plano individual normal com consultas, exames e hospitalização básica.',
          '35–45 anos: cerca de 45–80 €/mês, se houver hospitalização de 25 000–50 000 € por ano.',
          '45–60 anos: cerca de 60–100 €/mês; as exclusões e o questionário de saúde tornam-se mais importantes.',
          '60+ anos: muitas vezes 100–150 €+/mês, e alguns planos estão fechados a novas adesões depois de determinada idade.',
          'Família de 2 adultos + criança: frequentemente 100–220 €/mês, consoante o nível de cobertura.',
          'Dental normalmente surge como módulo separado ou como rede de descontos, não como um seguro completo.',
          'Maternidade/parto exige quase sempre waiting period e um plafond separado.',
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
              'Faz sentido se a aplicação, o apoio, a telemedicina e uma UX premium forem importantes.',
              'Boa escolha para Lisboa, Porto, Cascais, Oeiras, Braga, Coimbra, Algarve, onde há muitas clínicas privadas.',
              'É muitas vezes prática para uma expat family: pediatria, consultas online, exames em grandes redes.',
              'Verifique o limite de hospitalização: as opções baratas podem ser demasiado restritas.',
              'Veja o copagamento por consulta de especialidade: tipicamente 15–30 €, mas depende do plano.'
            ] }
          ] },
          { id: 'multicare', title: 'Multicare: quando faz sentido', content: [
            { kind: 'checklist', items: [
              'Faz sentido se precisar de uma rede muito disseminada e familiar, da Fidelidade.',
              'Surge frequentemente junto de empregadores e em produtos bancários/de parceiros.',
              'Boa opção se não vive apenas em Lisboa/Porto: a cobertura nacional costuma ser forte.',
              'É prática para pacotes familiares e upgrades empresariais.',
              'Verifique o reembolso: nos planos básicos pode ser fraco ou inexistente.'
            ] }
          ] },
          { id: 'advancecare', title: 'AdvanceCare / Generali: quando faz sentido', content: [
            { kind: 'checklist', items: [
              'Faz sentido se a apólice der acesso a uma ampla rede AdvanceCare perto da sua morada.',
              'Surge frequentemente em produtos da Generali Tranquilidade e em seguros de grupo.',
              'Pode ser mais vantajosa em preço, especialmente no canal empresarial.',
              'É importante perceber quem é exactamente a seguradora: a AdvanceCare, enquanto rede, nem sempre é a sua seguradora no contrato.',
              'Antes de comprar, verifique se os CUF/Lusíadas/Luz/clínicas locais de que precisa aceitam o seu cartão.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'fine-print',
      title: 'O que ler no contrato antes de pagar',
      content: [
        { kind: 'paragraph', text: 'Nas apólices portuguesas, o que decide não são frases publicitárias como “acesso a 30 000 médicos”, mas sim as condições particulares e as condições gerais. Peça o PDF antes do pagamento e verifique os pontos-chave.' },
        { kind: 'checklist', items: [
          'Capital / plafond hospitalização: quanto o seguro paga por cirurgias e internamento por ano.',
          'Ambulatório: limite para consultas, exames, tratamentos, fisioterapia.',
          'Copagamentos: quanto você paga por consulta, urgência, exame, cirurgia.',
          'Franquia: montante que você paga por conta própria antes de a cobertura começar a aplicar-se.',
          'Reembolso fora da rede: se existe reembolso fora da rede e qual é a percentagem.',
          'Período de carência: prazo de espera até ao início da cobertura.',
          'Exclusões: doenças crónicas, preexistentes, psiquiatria, fertilidade, cosmética, desporto de alto risco.',
          'Maternidade: cobertura da gravidez, parto normal/cesariana, limite e waiting period.',
          'Idade limite de adesão: até que idade é possível entrar no plano.',
          'Renovação anual: se a seguradora pode alterar o preço ou as condições na renovação.'
        ] },
        { kind: 'warning', text: 'Pre-existing conditions quase sempre são excluídas ou exigem avaliação por um médico da seguradora. Não oculte diagnósticos: num claim dispendioso, a seguradora pode pedir o histórico e recusar o pagamento.' }
      ]
    },
    {
      id: 'waiting-periods',
      title: 'Período de carência: quando o seguro começa realmente a funcionar',
      content: [
        { kind: 'paragraph', text: 'Período de carência é o prazo de espera depois do início do contrato. Durante este período, você paga os prémios, mas parte das coberturas ainda não está activa. Os prazos concretos variam por plano, mas a estrutura do mercado é semelhante.' },
        { kind: 'checklist', items: [
          'Urgência por acidente é normalmente coberta imediatamente ou quase imediatamente.',
          'Consultas e exames têm frequentemente uma espera de cerca de 30–60 dias.',
          'Hospitalização e cirurgias têm frequentemente uma espera de cerca de 90–180 dias.',
          'Parto, gravidez e tratamentos de infertilidade exigem frequentemente 365 dias ou mais.',
          'Psychiatry, psicologia, physiotherapy e estomatologia podem ter limites e esperas próprios.',
          'Se estiver a mudar de outra seguradora sem interrupção, por vezes é possível pedir redução/eliminação de carências, mas isso não é um direito automático.',
          'Os planos empresariais dão por vezes melhores condições de carências, especialmente quando há inclusão em massa de colaboradores.'
        ] },
        { kind: 'warning', text: 'Se já está grávida, planeia uma cirurgia ou trata uma doença crónica, não conte que o novo seguro pague isso de imediato. Primeiro obtenha confirmação por escrito da seguradora ou do mediador.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Escolha prática para um expat',
      content: [
        { kind: 'paragraph', text: 'O algoritmo é simples: escolha não pela marca, mas pelo cenário de utilização. Para uma pessoa de 30 anos sem doenças crónicas e para uma família com criança em Cascais, a apólice ideal será diferente.' },
        { kind: 'checklist', items: [
          'Abra os mapas da Médis, Multicare e AdvanceCare e verifique 5–10 clínicas perto de casa e do trabalho.',
          'Verifique se há hospitais concretos na rede: CUF, Hospital da Luz, Lusíadas, Trofa Saúde ou uma clínica local.',
          'Compare a hospitalização mínima: para maior tranquilidade, é melhor olhar para planos a partir de 25 000–50 000 € por ano ou mais.',
          'Calcule o preço real: monthly premium + copagamentos + franquia + dental add-on.',
          'Se precisa de parto — veja maternidade, plafond e waiting period de 365 dias antes da gravidez, não depois.',
          'Se precisa de psicólogo/psiquiatra — verifique a cobertura separada; nos planos básicos é frequentemente limitada.',
          'Peça a proposta e as condições gerais em inglês ou português; promessas verbais do agente não contam.',
          'Se o empregador oferece Multicare/Médis/AdvanceCare empresarial, avalie primeiro o upgrade — muitas vezes é mais vantajoso do que uma apólice familiar separada.'
        ] },
        { kind: 'paragraph', text: 'Recomendação de base: Médis — se o serviço e uma UX premium forem importantes; Multicare — se precisar da rede mais familiar e ampla possível; AdvanceCare/Generali — se o preço for bom e as clínicas necessárias aceitarem realmente o cartão.' }
      ]
    }
  ],
  costs: [
    { label: 'Plano individual 25–35 anos', amountEURMin: 30, amountEURMax: 60, note: 'Valor indicativo por mês em 2026; depende da cobertura e dos copagamentos.' },
    { label: 'Plano individual 45–60 anos', amountEURMin: 60, amountEURMax: 100, note: 'Com hospitalização e ambulatório; questionário de saúde obrigatório.' },
    { label: 'Plano individual 60+', amountEURMin: 100, amountEURMax: 150, note: 'Pode ser mais alto; são possíveis limites de idade para adesão.' },
    { label: 'Copagamento por consulta de especialidade', amountEURMin: 15, amountEURMax: 30, note: 'Intervalo típico dentro da rede; o montante exacto está indicado na tabela de copagamentos.' },
    { label: 'Plano familiar 2 adultos + criança', amountEURMin: 100, amountEURMax: 220, note: 'Valor indicativo por mês; os planos empresariais podem ser mais baratos.' }
  ],
  sources: [
    { title: 'Médis — planos oficiais e rede saúde', url: 'https://www.medis.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Multicare — planos oficiais e rede médica', url: 'https://www.multicare.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Generali Tranquilidade — seguros de saúde e rede AdvanceCare', url: 'https://www.generali.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASF — supervisão do mercado segurador em Portugal', url: 'https://www.asf.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
