export default {
  editorialVoice: 'hackportugal',
  id: 'aquecimento-inverno-recuperador',
  categoryId: 'daily_life',
  title: 'Aquecimento da casa no inverno: recuperador de calor, salamandra, esquentador',
  tldr: 'O inverno português muitas vezes não significa gelo, mas sim 14–17 °C dentro de casa, humidade e bolor. A opção rápida é um aquecedor elétrico por 20–80 €, mas a fatura da eletricidade sobe depressa. A longo prazo: ar condicionado/bomba de calor 700–1 800 € por split, recuperador de calor a lenha a partir de 1 500 €, salamandra a pellets normalmente a partir de 2 000 €. Esquentador a gás é sobretudo para água quente; para aquecer divisões é necessária uma caldeira/radiadores. Verifique o Fundo Ambiental: o Vale Eficiência pode subsidiar bombas de calor, mas apenas nos avisos abertos e com condições.',
  tags: ['aquecimento', 'inverno', 'energia', 'casa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'reality-check',
      title: '1. Compreender o problema: em Portugal, o frio não está fora, está dentro de casa',
      content: [
        { kind: 'paragraph', text: 'Em muitas casas não há aquecimento central, o isolamento térmico é fraco, as janelas são simples e a humidade é elevada. No inverno, a rua pode estar a +10…+15 °C, mas dentro de um apartamento antigo é fácil manterem-se 14–17 °C. Isto é desconfortável e acelera o aparecimento de bolor.' },
        { kind: 'checklist', items: [
          'Comece por medir a temperatura e a humidade: um termohigrómetro barato custa 5–15 €',
          'Objetivo para o quarto: cerca de 18 °C; para a sala: 19–21 °C',
          'Mantenha a humidade aproximadamente entre 40–60%; acima de 65% aumenta o risco de bolor',
          'Verifique as janelas: frinchas, estores antigos, ausência de vedantes',
          'Verifique se existe chaminé, se está a pensar num recuperador ou numa salamandra',
          'Para um apartamento, confirme as regras do condomínio antes de qualquer obra na chaminé ou fachada',
          'Para gás, verifique a ventilação, a inspeção e o tipo de gás: natural ou botija',
          'Para aquecimento elétrico, verifique a potência contratada no contrato de eletricidade'
        ] },
        { kind: 'warning', text: 'Não tape as grelhas de ventilação na cozinha/casa de banho se houver em casa um esquentador ou caldeira a gás. O monóxido de carbono não tem cheiro; instale um detetor de CO por 20–40 €.' }
      ]
    },
    {
      id: 'compare-options',
      title: '2. Escolher o tipo de aquecimento para a casa, não pela publicidade',
      content: [
        { kind: 'substeps', items: [
          { id: 'electric', title: 'Aquecedores elétricos: rápidos e baratos de comprar', content: [
            { kind: 'paragraph', text: 'Um radiador a óleo, convetor ou termoventilador custa 20–120 € e não exige instalação. A desvantagem é o consumo elevado: um aparelho de 2 kW durante 5 horas consome 10 kWh. Com o preço doméstico da eletricidade, isto transforma-se facilmente em dezenas de euros por mês por uma só divisão.' }
          ] },
          { id: 'heat-pump', title: 'Ar condicionado / bomba de calor: normalmente o melhor equilíbrio', content: [
            { kind: 'paragraph', text: 'Um split AC moderno em modo heating é uma bomba de calor: fornece mais calor por 1 kWh de eletricidade do que um aquecedor comum. Para residência permanente, é muitas vezes a opção mais racional: 700–1 800 € por uma unidade interior com instalação, mais caro no caso de multisplit.' }
          ] },
          { id: 'wood', title: 'Recuperador de calor: inserção de lareira a lenha', content: [
            { kind: 'paragraph', text: 'O recuperador de calor é instalado numa lareira existente ou com uma nova chaminé. Pode aquecer uma divisão, condutas de ar ou água para radiadores. O orçamento típico com instalação começa nos 1 500 €, sendo frequentemente 2 000–4 000 € com uma instalação adequada.' }
          ] },
          { id: 'pellets', title: 'Salamandra a pellets: mais cómoda do que lenha, mas mais cara', content: [
            { kind: 'paragraph', text: 'A salamandra a pellets alimenta automaticamente o combustível, mantém a temperatura e é mais prática para uso diário. O orçamento com instalação é normalmente a partir de 2 000 €, sendo os modelos hydro para radiadores significativamente mais caros.' }
          ] },
          { id: 'gas', title: 'Esquentador a gás: não confundir com aquecimento das divisões', content: [
            { kind: 'paragraph', text: 'O esquentador a gás é um aquecedor de água instantâneo a gás para o duche e a cozinha. Não aquece divisões. Para aquecimento através de radiadores é necessária uma caldeira a gás ou um sistema com água quente, e isso é um projeto separado, com tubagens, radiadores, inspeção do gás e manutenção.' }
          ] }
        ] }
      ]
    },
    {
      id: 'installation-safety',
      title: '3. Instalação: onde se erra com mais frequência',
      content: [
        { kind: 'checklist', items: [
          'Para recuperador/salamandra é necessária uma chaminé em bom estado, com diâmetro e altura adequados',
          'Peça ao instalador que demonstre experiência especificamente com chaminés e combustíveis sólidos',
          'Não faça sair um tubo pela fachada sem aprovação do condomínio e, se necessário, da Câmara Municipal',
          'Verifique as distâncias até móveis, cortinados e vigas de madeira',
          'Instale um detetor de fumo e um detetor de CO; é um seguro barato',
          'A lenha deve estar seca; lenha húmida dá menos calor e mais fuligem',
          'Guarde os pellets num local seco, caso contrário desfazem-se e entopem o mecanismo',
          'A chaminé deve ser limpa pelo menos uma vez por ano antes da época fria',
          'Para equipamentos a gás, utilize um técnico certificado e guarde o relatório/declaração',
          'Se a casa for arrendada, obtenha autorização escrita do senhorio antes de instalar equipamento fixo'
        ] },
        { kind: 'warning', text: 'Aquecedores portáteis a gás de botija sem boa ventilação são perigosos: libertam humidade e produtos de combustão. Em quartos pequenos e casas de banho, é melhor não os utilizar.' }
      ]
    },
    {
      id: 'money-and-running-costs',
      title: '4. Calcular não só a compra, mas também a fatura mensal',
      content: [
        { kind: 'paragraph', text: 'A compra mais barata nem sempre resulta no inverno mais barato. Um convetor elétrico de 40 € pode custar mais ao longo da estação do que um split AC eficiente. Um recuperador a lenha funciona bem onde há chaminé, espaço para guardar lenha e onde você vai realmente acender o fogo todas as noites.' },
        { kind: 'checklist', items: [
          'Aquecedor elétrico: preço de compra mínimo, consumo elevado',
          'Split AC / bomba de calor: preço inicial mais alto, normalmente menor consumo',
          'Recuperador de calor: bom para uma casa com lareira e lenha acessível',
          'Salamandra a pellets: mais cómoda do que lenha, mas depende do preço e da entrega de pellets',
          'Caldeira a gás: faz sentido se já houver radiadores e uma infraestrutura de gás segura',
          'Desumidificador 150–300 € não substitui o aquecimento, mas melhora muito a sensação de calor',
          'Cortinados térmicos, vedantes e tapetes dão frequentemente um efeito rápido por 20–150 €',
          'Janelas duplas e isolamento são mais caros, mas reduzem todas as faturas futuras'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: '5. Verificar o Fundo Ambiental e o Vale Eficiência',
      content: [
        { kind: 'paragraph', text: 'O Fundo Ambiental abre periodicamente avisos para eficiência energética em habitações: substituição de janelas, isolamento térmico, bombas de calor, por vezes equipamento para aquecimento/AQS. As condições mudam consoante o ano, a região e o tipo de agregado familiar.' },
        { kind: 'paragraph', text: 'O Vale Eficiência tem sido historicamente dirigido a agregados familiares economicamente vulneráveis, por exemplo beneficiários da tarifa social de energia elétrica, e funcionava através de vouchers para medidas aprovadas. Em 2026, não compre equipamento “a contar com o subsídio” antes de verificar que o aviso está aberto, que o seu NIF é elegível e que o fornecedor/instalador aceita o programa.' },
        { kind: 'checklist', items: [
          'Verifique fundoambiental.pt antes da compra, não depois',
          'Veja o prazo de candidatura, eligible expenses e as datas das faturas',
          'Guarde a fatura com NIF, comprovativo de pagamento e ficha técnica',
          'Verifique se é necessário certificado energético antes ou depois das obras',
          'Confirme se o programa aceita o equipamento: split AC, bomba de calor AQS, salamandra ou isolamento',
          'Não conte com pagamento imediato: o tratamento das candidaturas pode demorar meses'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Aquecedor elétrico', amountEURMin: 20, amountEURMax: 120, note: 'Compra barata; utilização cara com uso diário' },
    { label: 'Desumidificador', amountEURMin: 150, amountEURMax: 300, note: 'Ajuda contra a humidade e o bolor, mas não substitui o aquecimento' },
    { label: 'Split AC / bomba de calor para uma divisão', amountEURMin: 700, amountEURMax: 1800, note: 'Valor indicativo com instalação; depende da potência, marca e percurso da instalação' },
    { label: 'Recuperador de calor a lenha', amountEURMin: 1500, amountEURMax: 4000, note: 'Com instalação; o preço depende muito da chaminé e dos acabamentos' },
    { label: 'Salamandra a pellets', amountEURMin: 2000, amountEURMax: 5000, note: 'Com instalação; modelos hydro para radiadores são mais caros' },
    { label: 'Detetor de monóxido de carbono CO', amountEURMin: 20, amountEURMax: 40, note: 'Recomendado para qualquer casa com gás, lareira ou salamandra' }
  ],
  sources: [
    { title: 'DGEG — informação sobre energia, gás e eficiência energética', url: 'https://www.dgeg.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — programas de apoio à eficiência energética e Vale Eficiência', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ADENE — informação prática sobre eficiência energética da habitação e certificado energético', url: 'https://www.adene.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
