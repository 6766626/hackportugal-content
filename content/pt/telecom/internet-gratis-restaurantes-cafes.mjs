export default {
  editorialVoice: 'hackportugal',
  id: 'internet-gratis-restaurantes-cafes',
  categoryId: 'telecom',
  title: 'Wi‑Fi gratuito em cafés e restaurantes em Portugal: etiqueta e segurança',
  tldr: 'Em Portugal, o Wi‑Fi gratuito em cafés é um serviço comum, mas não garantido. Nas redes McDonald’s, Starbucks, A Padaria Portuguesa, FNAC e em muitos centros comerciais costuma existir; em pequenas pastelarias, a palavra-passe é muitas vezes dada depois de fazer um pedido. Pergunte com educação: “Tem WiFi?” ou “Qual é a password do WiFi, por favor?”. Para bancos, Finanças, AIMA, SNS e e-mail de trabalho, use VPN ou internet móvel: as redes públicas não são seguras. Clientes MEO podem usar MEO WiFi fora de casa.',
  tags: ['wifi', 'cafés', 'segurança', 'meo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-find',
      title: 'Onde costuma haver Wi‑Fi gratuito',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o Wi‑Fi em Portugal é visto como uma opção normal em cafés de cadeia, fast food, livrarias, centros comerciais e cafés de coworking. Mas não é uma obrigação legal do estabelecimento: numa pequena pastelaria ou tasca pode não haver internet, e a palavra-passe pode ser dada apenas a clientes.' },
        { kind: 'checklist', items: [
          'McDonald’s — normalmente há Wi‑Fi, muitas vezes através de um portal cativo com aceitação das condições',
          'Starbucks — normalmente há Wi‑Fi para clientes, sobretudo em Lisboa, no Porto e em zonas turísticas',
          'A Padaria Portuguesa — em muitos espaços há Wi‑Fi para clientes, e a palavra-passe é frequentemente pedida na caixa',
          'FNAC — nas lojas e zonas de café há frequentemente Wi‑Fi disponível, prático para trabalho curto',
          'Centros comerciais: Colombo, Vasco da Gama, NorteShopping, ArrábidaShopping — muitas vezes há Wi‑Fi geral para visitantes',
          'Hotéis e hostels — o Wi‑Fi é normalmente apenas para hóspedes, mas no lobby café às vezes dão acesso depois de fazer um pedido',
          'Pequenos cafés/pastelarias — a palavra-passe pode estar no talão, ao balcão ou com o empregado',
          'Restaurantes de alta cozinha — pode haver Wi‑Fi, mas pedi-lo durante o jantar nem sempre é apropriado'
        ] }
      ]
    },
    {
      id: 'how-to-ask',
      title: 'Como pedir a palavra-passe sem constrangimento 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'A etiqueta portuguesa é simples: primeiro faça o pedido, depois pergunte com calma. Em estabelecimentos pequenos, não se sente com o portátil durante 2 horas tendo pedido apenas uma bica por 0,80–1,20 €, se a sala estiver cheia. Em cafés de cadeia e centros comerciais, isso é visto de forma mais flexível.' },
        { kind: 'checklist', items: [
          '“Tem WiFi?” — “Tem Wi‑Fi?”',
          '“Qual é a password do WiFi, por favor?” — “Qual é a palavra-passe do Wi‑Fi, por favor?”',
          '“Posso ligar o portátil?” — “Posso ligar o portátil?”',
          '“Há tomadas?” — “Há tomadas?”',
          '“É preciso registar?” — “É preciso fazer registo?”',
          '“O WiFi é só para clientes?” — “O Wi‑Fi é só para clientes?”',
          'Se a palavra-passe não funcionar: “A password não funciona. Pode confirmar, por favor?”',
          'Se ficar muito tempo — peça mais um café, água ou comida; é normal e mais barato do que um conflito'
        ] },
        { kind: 'warning', text: 'Não discuta se o funcionário disser que o Wi‑Fi “não está disponível” ou “é só para clientes”. A internet gratuita é um serviço do estabelecimento, não um direito seu enquanto cliente.' }
      ]
    },
    {
      id: 'safe-use',
      title: 'Segurança: o que não deve fazer numa rede pública',
      content: [
        { kind: 'paragraph', text: 'O Wi‑Fi público num café é uma rede gerida por um router ou portal cativo que lhe é desconhecido. O risco não está em “roubarem todos os dados de imediato”, mas sim na intercepção de tráfego, em páginas de phishing, em redes falsas com nomes parecidos e na ligação automática do dispositivo a uma rede insegura.' },
        { kind: 'checklist', items: [
          'Não aceda a Finanças, Segurança Social Direta, AIMA, SNS 24, banco e bolsas de criptomoedas sem VPN',
          'Não introduza dados do Cartão de Cidadão, NIF, NISS, cartão bancário e códigos SMS em páginas suspeitas',
          'Confirme o nome da rede com o pessoal: “É esta a rede oficial?”',
          'Desactive o auto-join para redes abertas no iPhone/Android',
          'Use VPN, especialmente para e-mail de trabalho, Slack, Notion, GitHub, Google Workspace',
          'Active 2FA: uma aplicação Authenticator é melhor do que SMS, se houver escolha',
          'Não aceite ficheiros por AirDrop/Bluetooth de pessoas desconhecidas',
          'Não instale “certificados”, “perfis” ou aplicações sugeridos pela página de Wi‑Fi do café',
          'Depois de usar, carregue em “Forget This Network”, se já não precisar da rede',
          'Para pagamentos, é melhor usar internet móvel 4G/5G ou Apple Pay/Google Pay sem iniciar sessão no banco'
        ] },
        { kind: 'warning', text: 'O CNCS alerta regularmente para phishing e engenharia social. Um portal cativo que pareça a página de um café ou operador pode ser falso. Se a página pedir login do Google, Apple ID, banco ou dados do cartão “para Wi‑Fi gratuito” — feche-a.' }
      ]
    },
    {
      id: 'meo-wifi',
      title: 'MEO WiFi: útil se for cliente MEO',
      content: [
        { kind: 'paragraph', text: 'A MEO tem o serviço MEO WiFi: clientes MEO podem ligar-se a pontos de acesso fora de casa onde a rede MEO WiFi esteja disponível. Não substitui uma internet doméstica normal, mas é prático na cidade, junto a estações, em cafés e em espaços públicos, se a rede tiver melhor sinal do que a internet móvel.' },
        { kind: 'checklist', items: [
          'Verifique na Área de Cliente MEO se o serviço está activo para o seu pacote',
          'Use as instruções oficiais da MEO para iniciar sessão, não introduza a palavra-passe MEO em páginas aleatórias',
          'A rede pode exigir dados de cliente MEO ou uma configuração especial',
          'A velocidade depende do ponto de acesso e da carga da rede',
          'Para trabalho confidencial, continue a usar VPN',
          'Se não for cliente MEO, esta opção normalmente não está disponível — é mais simples usar eSIM/tarifário com um pacote de dados maior'
        ] }
      ]
    },
    {
      id: 'work-etiquette',
      title: 'Se trabalha a partir de um café',
      content: [
        { kind: 'paragraph', text: 'Portugal é favorável ao trabalho remoto, mas um café não é um escritório gratuito. Em Lisboa e no Porto, alguns estabelecimentos começaram a limitar portáteis à hora de almoço, porque as mesas são necessárias para refeições. Regra: quanto menor o pedido e maior a mesa ocupada, maior a probabilidade de olharem de lado para si.' },
        { kind: 'checklist', items: [
          'Escolha horas fora de pico: 10:00–12:00 ou 15:00–18:00 é melhor do que o almoço 12:30–14:30',
          'Pergunte se pode usar portátil, se o estabelecimento for pequeno',
          'Não ocupe sozinho uma mesa para 4 pessoas se a sala estiver a encher',
          'Faça chamadas em voz baixa e com auscultadores; um Zoom alto numa pastelaria irrita toda a gente',
          'Não estenda cabos por zonas de passagem — é um risco para o pessoal e para os clientes',
          'Para 2–3 horas de trabalho, é normal pedir não só café, mas também comida/bebida',
          'Se precisar de internet estável durante todo o dia — procure coworking, biblioteca municipal ou espaço cidadão'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Café bica/espresso num café comum', amountEURMin: 0.8, amountEURMax: 1.4, note: 'Referência para Portugal em 2026; em zonas turísticas de Lisboa/Porto pode ser mais caro.' },
    { label: 'Cappuccino/latte num café de cadeia', amountEURMin: 2.5, amountEURMax: 4.5, note: 'Ordem de preço típica em Starbucks/FNAC café e locais semelhantes.' },
    { label: 'VPN', amountEURMin: 3, amountEURMax: 12, note: 'Por mês com pagamento anual; VPN gratuitas são muitas vezes lentas e recolhem dados elas próprias.' }
  ],
  sources: [
    {
      title: 'CNCS: recomendações de cibersegurança e protecção contra phishing',
      url: 'https://www.cncs.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'MEO: serviço MEO WiFi fora de casa',
      url: 'https://www.meo.pt/servicos/casa/internet/fibra/wifi-fora-de-casa',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANACOM: informação para consumidores sobre acesso à internet e serviços de comunicações',
      url: 'https://www.anacom.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
