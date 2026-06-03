export default {
  editorialVoice: 'hackportugal',
  id: 'lisboa-wifi-gratis-municipal',
  categoryId: 'telecom',
  title: 'Wi‑Fi gratuito em Lisboa e no Porto: Lisboa WiFi Plus',
  tldr: 'Em Lisboa funciona a rede municipal Lisboa WiFi Plus: centenas de pontos em espaços públicos da CML — praças, jardins, bibliotecas, mercados, Estação Oriente e zonas turísticas.\n\nNo Porto existe o Porto Free Wi-Fi: uma rede de pontos de acesso no centro e em locais municipais. A ligação normalmente não exige registo: escolher a rede, abrir o captive portal, aceitar os termos. As sessões são frequentemente limitadas no tempo; depois pode voltar a ligar-se. Para bancos, Finanças, AIMA e logins de trabalho, use VPN ou internet móvel.',
  tags: ['wifi', 'lisboa', 'porto', 'telecomunicações'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que redes são estas',
      content: [
        { kind: 'paragraph', text: 'Lisboa WiFi Plus é a rede municipal gratuita da Câmara Municipal de Lisboa. Cobre centenas de pontos de acesso em espaços públicos da CML: praças, jardins, bibliotecas, mercados municipais, equipamentos culturais, zonas com elevado tráfego turístico e interfaces de transporte como a Estação Oriente.' },
        { kind: 'paragraph', text: 'No Porto, a rede urbana equivalente chama-se Porto Free Wi-Fi e funciona com a Associação Porto Digital. Tem pontos de acesso em locais públicos essenciais da cidade — praças, bibliotecas e equipamentos culturais.' },
        { kind: 'checklist', items: [
          'Preço: 0 €',
          'Não precisa de cartão SIM',
          'Normalmente não precisa de número de telefone português',
          'Normalmente não é necessário registar uma conta',
          'Funciona através de captive portal — uma página de início de sessão no navegador',
          'A sessão dura frequentemente até 60 minutos; depois da quebra pode voltar a ligar-se',
          'A velocidade depende do local, da hora do dia e do número de pessoas',
          'É Wi‑Fi público: não o use como internet principal em casa'
        ] }
      ]
    },
    {
      id: 'connect-lisbon',
      title: 'Como ligar-se em Lisboa 📶',
      content: [
        { kind: 'paragraph', text: 'Na zona de cobertura, abra a lista de redes Wi‑Fi no telemóvel ou portátil e escolha a rede Lisboa WiFi Plus. O nome pode aparecer com pequenas variações, mas deve indicar claramente Lisboa WiFi.' },
        { kind: 'checklist', items: [
          'Active o Wi‑Fi e escolha Lisboa WiFi Plus',
          'Aguarde que o captive portal abra automaticamente',
          'Se a página não abrir — aceda a qualquer site HTTP, por exemplo neverssl.com',
          'Aceite os termos e condições / condições de utilização',
          'Não introduza NIF, NISS, dados bancários ou a palavra-passe do e-mail — para o acesso normal isso não é necessário',
          'Após 60 minutos, se a ligação cair, repita o acesso através do portal',
          'Se a rede aparecer como “ligada sem internet”, desligue a VPN no momento de entrada no captive portal e depois volte a ligá-la'
        ] },
        { kind: 'warning', text: 'Não confunda o Wi‑Fi municipal com redes semelhantes em cafés, hotéis e centros comerciais. Se o portal pedir pagamento, número de cartão ou instalação de uma aplicação — não é o Lisboa WiFi Plus padrão.' }
      ]
    },
    {
      id: 'where-lisbon',
      title: 'Onde procurar Lisboa WiFi Plus',
      content: [
        { kind: 'paragraph', text: 'A rede capta-se melhor em pontos municipais e turísticos. Dentro de edifícios antigos com paredes grossas, o sinal pode cair acentuadamente mesmo a 20–30 metros do ponto de acesso.' },
        { kind: 'checklist', items: [
          'Praças e largos no centro de Lisboa',
          'Jardins e miradouros com infraestrutura municipal',
          'Bibliotecas de Lisboa',
          'Mercados municipais e espaços culturais da CML',
          'Estação Oriente e zonas públicas adjacentes',
          'Percursos turísticos da Baixa, Chiado, Belém, Parque das Nações',
          'Paragens e praças junto a equipamentos da Câmara Municipal de Lisboa'
        ] },
        { kind: 'paragraph', text: 'Para encontrar o ponto mais próximo, use o site da Câmara Municipal de Lisboa ou simplesmente verifique a lista de redes no local: a rede municipal normalmente aparece no raio de cobertura sem aplicações adicionais.' }
      ]
    },
    {
      id: 'porto-wifi',
      title: 'Porto Free Wi-Fi: como funciona no Porto',
      content: [
        { kind: 'paragraph', text: 'Porto Free Wi-Fi é a rede gratuita da Câmara Municipal do Porto, em colaboração com a Associação Porto Digital. Os pontos de acesso estão sobretudo em locais públicos centrais e municipais: praças, bibliotecas e equipamentos culturais.' },
        { kind: 'checklist', items: [
          'Escolha a rede Porto Free Wi-Fi',
          'Abra o captive portal no navegador',
          'Aceite as condições de utilização',
          'Não é necessário comprar um tarifário nem introduzir dados do cartão bancário',
          'Se o portal não abrir, desligue o Private Relay / VPN / bloqueador de DNS durante o acesso',
          'Depois de a sessão terminar, volte a ligar-se',
          'Para uma videochamada estável, é melhor ter uma alternativa: eSIM, tarifário móvel ou Wi‑Fi num coworking'
        ] },
        { kind: 'paragraph', text: 'No Porto, a rede é útil para mapas, mensagens, pesquisa de percursos STCP/Metro do Porto e tarefas rápidas. Para trabalho remoto durante várias horas, é melhor usar uma biblioteca, coworking ou internet de casa.' }
      ]
    },
    {
      id: 'safety',
      title: 'Segurança: o que pode e não pode fazer',
      content: [
        { kind: 'paragraph', text: 'O Wi‑Fi municipal é útil, mas continua a ser uma rede pública. Outros utilizadores estão no mesmo ambiente, e o captive portal não torna a ligação privada.' },
        { kind: 'checklist', items: [
          'Para bancos, MB WAY, Finanças, Segurança Social Direta, AIMA e ePortugal, é melhor usar internet móvel',
          'Se precisar de entrar no e-mail de trabalho ou no CRM — active a VPN depois de passar pelo captive portal',
          'Verifique se os sites abrem por HTTPS',
          'Não aceite AirDrop / Nearby Share de dispositivos desconhecidos',
          'Desactive a ligação automática a redes abertas',
          'Não introduza palavras-passe em sites com aviso do navegador sobre o certificado',
          'Não descarregue “actualizações de Wi‑Fi” nem APK/perfis de configuração',
          'Depois de usar, pode escolher “Forget this network”, se o dispositivo se ligar sozinho num momento inadequado'
        ] },
        { kind: 'warning', text: 'Se está a submeter documentos, a pagar impostos ou a trabalhar com dados pessoais de clientes, o Wi‑Fi gratuito deve ser apenas uma alternativa. Um erro de ligação no momento do pagamento ou do envio de um formulário pode custar tempo e um prazo.' }
      ]
    },
    {
      id: 'backup-options',
      title: 'Opções de reserva para expats',
      content: [
        { kind: 'paragraph', text: 'O Wi‑Fi gratuito resolve o “ver rapidamente o mapa e escrever no WhatsApp”, mas não substitui uma ligação normal. Em 2026, o mínimo razoável para uma mudança é uma eSIM ou um SIM pré-pago, mais uma lista de locais com acesso gratuito.' },
        { kind: 'checklist', items: [
          'eSIM para os primeiros 7–30 dias até contratar um tarifário local',
          'SIM pré-pago da MEO, NOS, Vodafone ou NOWO, se precisar de um número português',
          'Biblioteca municipal: frequentemente mais silenciosa e estável do que uma praça ou café',
          'Coworking por um dia, se precisar de videochamadas',
          'Wi‑Fi em centros comerciais como opção de reserva',
          'Internet de casa por fibra, se arrendar habitação por um período a partir de vários meses'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa WiFi Plus', amountEUR: 0, note: 'Gratuito; as sessões são normalmente limitadas no tempo, frequentemente até 60 minutos, com possibilidade de novo acesso' },
    { label: 'Porto Free Wi-Fi', amountEUR: 0, note: 'Gratuito; cobertura menor do que em Lisboa' },
    { label: 'eSIM de reserva de curta duração', amountEURMin: 5, amountEURMax: 25, note: 'Referência para pacotes turísticos de dados; o preço depende do volume de GB e do fornecedor' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — Lisboa WiFi Plus e serviços digitais da cidade',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Associação Porto Digital — Porto Free Wi-Fi e pontos de acesso municipais',
      url: 'https://www.portodigital.pt/porto-free-wi-fi/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
