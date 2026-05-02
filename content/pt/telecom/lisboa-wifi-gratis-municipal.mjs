export default {
  editorialVoice: 'hackportugal',
  id: 'lisboa-wifi-gratis-municipal',
  categoryId: 'telecom',
  title: 'Wi‑Fi gratuito em Lisboa e no Porto: Lisboa WiFi Plus',
  tldr: 'Em Lisboa funciona a rede municipal Lisboa WiFi Plus: mais de 300 pontos em espaços públicos da CML — praças, jardins, bibliotecas, mercados, Estação Oriente e zonas turísticas. No Porto existe o Porto WiFi: cerca de 35 hotspots no centro e em espaços municipais. A ligação normalmente não exige registo: escolher a rede, abrir o captive portal e aceitar os termos. As sessões são frequentemente limitadas a 60 minutos; depois é possível voltar a ligar. Para bancos, Finanças, AIMA e logins de trabalho, use VPN ou dados móveis.',
  tags: ['wifi', 'lisboa', 'porto', 'telecomunicações'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que redes são estas',
      content: [
        { kind: 'paragraph', text: 'Lisboa WiFi Plus é a rede municipal gratuita da Câmara Municipal de Lisboa. Cobre mais de 300 pontos de acesso em espaços públicos da CML: praças, jardins, bibliotecas, mercados municipais, equipamentos culturais, zonas com elevado tráfego turístico e interfaces de transporte como a Estação Oriente.' },
        { kind: 'paragraph', text: 'No Porto, a rede municipal equivalente chama-se Porto WiFi. Segundo a Câmara Municipal do Porto, estão disponíveis cerca de 35 hotspots em locais públicos essenciais da cidade.' },
        { kind: 'checklist', items: [
          'Preço: 0 €',
          'Não é necessário cartão SIM',
          'Normalmente não é necessário número de telefone português',
          'Normalmente não é necessário registar uma conta',
          'Funciona através de captive portal — uma página de acesso no navegador',
          'A sessão dura frequentemente até 60 minutos; depois da desconexão, é possível voltar a ligar',
          'A velocidade depende do local, da hora do dia e do número de pessoas',
          'É Wi‑Fi público: não o use como internet principal em casa'
        ] }
      ]
    },
    {
      id: 'connect-lisbon',
      title: 'Como ligar em Lisboa 📶',
      content: [
        { kind: 'paragraph', text: 'Na zona de cobertura, abra a lista de redes Wi‑Fi no telemóvel ou portátil e escolha a rede Lisboa WiFi Plus. O nome pode aparecer com pequenas variações, mas deve indicar claramente Lisboa WiFi.' },
        { kind: 'checklist', items: [
          'Active o Wi‑Fi e escolha Lisboa WiFi Plus',
          'Aguarde a abertura automática do captive portal',
          'Se a página não abrir — aceda a qualquer site HTTP, por exemplo neverssl.com',
          'Aceite os termos e condições / condições de utilização',
          'Não introduza NIF, NISS, dados bancários ou a palavra-passe do e-mail — para o acesso normal isso não é necessário',
          'Após 60 minutos, se a ligação cair, repita o acesso através do portal',
          'Se a rede aparecer como “ligada sem internet”, desligue a VPN no momento de entrar no captive portal e volte a ligá-la depois'
        ] },
        { kind: 'warning', text: 'Não confunda o Wi‑Fi municipal com redes parecidas em cafés, hotéis e centros comerciais. Se o portal pedir pagamento, número de cartão ou instalação de uma aplicação — não é o Lisboa WiFi Plus padrão.' }
      ]
    },
    {
      id: 'where-lisbon',
      title: 'Onde procurar o Lisboa WiFi Plus',
      content: [
        { kind: 'paragraph', text: 'A rede costuma funcionar melhor em pontos municipais e turísticos. Dentro de edifícios antigos com paredes espessas, o sinal pode cair abruptamente mesmo a 20–30 metros do ponto de acesso.' },
        { kind: 'checklist', items: [
          'Praças e largos no centro de Lisboa',
          'Jardins e miradouros com infraestrutura municipal',
          'Bibliotecas de Lisboa',
          'Mercados municipais e espaços culturais da CML',
          'Estação Oriente e zonas públicas adjacentes',
          'Percursos turísticos da Baixa, Chiado, Belém, Parque das Nações',
          'Paragens e praças junto a equipamentos da Câmara Municipal de Lisboa'
        ] },
        { kind: 'paragraph', text: 'Para encontrar o ponto mais próximo, use o site da Câmara Municipal de Lisboa ou simplesmente verifique a lista de redes no local: a rede municipal costuma ficar visível dentro do raio de cobertura sem aplicações adicionais.' }
      ]
    },
    {
      id: 'porto-wifi',
      title: 'Porto WiFi: como funciona no Porto',
      content: [
        { kind: 'paragraph', text: 'Porto WiFi é a rede gratuita da Câmara Municipal do Porto. É mais pequena do que a de Lisboa: como referência, há cerca de 35 hotspots, sobretudo em locais públicos centrais e municipais.' },
        { kind: 'checklist', items: [
          'Escolha a rede Porto WiFi',
          'Abra o captive portal no navegador',
          'Aceite as condições de utilização',
          'Não é necessário comprar um tarifário nem introduzir dados do cartão bancário',
          'Se o portal não abrir, desligue o Private Relay / VPN / bloqueador de DNS durante o acesso',
          'Depois de a sessão terminar, volte a ligar',
          'Para uma videochamada estável, é melhor ter uma alternativa: eSIM, tarifário móvel ou Wi‑Fi num coworking'
        ] },
        { kind: 'paragraph', text: 'No Porto, a rede é prática para mapas, mensagens, pesquisa de percursos STCP/Metro do Porto e tarefas rápidas. Para trabalho remoto durante várias horas, é melhor usar uma biblioteca, coworking ou internet em casa.' }
      ]
    },
    {
      id: 'safety',
      title: 'Segurança: o que se pode e não se deve fazer',
      content: [
        { kind: 'paragraph', text: 'O Wi‑Fi municipal é útil, mas continua a ser uma rede pública. Outros utilizadores estão no mesmo ambiente, e o captive portal não torna a ligação privada.' },
        { kind: 'checklist', items: [
          'Para bancos, MB WAY, Finanças, Segurança Social Direta, AIMA e ePortugal, é melhor usar dados móveis',
          'Se precisar de entrar no e-mail de trabalho ou no CRM — active a VPN depois de passar pelo captive portal',
          'Verifique se os sites abrem por HTTPS',
          'Não aceite AirDrop / Nearby Share de dispositivos desconhecidos',
          'Desactive a ligação automática a redes abertas',
          'Não introduza palavras-passe em sites com aviso do navegador sobre o certificado',
          'Não descarregue “actualizações Wi‑Fi” nem APK/perfis de configuração',
          'Depois de usar, pode escolher “Esquecer esta rede”, se o dispositivo se ligar sozinho num momento inadequado'
        ] },
        { kind: 'warning', text: 'Se está a submeter documentos, pagar impostos ou trabalhar com dados pessoais de clientes, o Wi‑Fi gratuito deve ser apenas uma alternativa. Um erro de ligação no momento do pagamento ou do envio de um formulário pode custar tempo e comprometer um prazo.' }
      ]
    },
    {
      id: 'backup-options',
      title: 'Opções de reserva para expats',
      content: [
        { kind: 'paragraph', text: 'O Wi‑Fi gratuito resolve “ver rapidamente o mapa e escrever no WhatsApp”, mas não substitui uma ligação normal. Em 2026, o mínimo sensato para uma mudança é ter um eSIM ou um SIM pré-pago, além de uma lista de locais com acesso gratuito.' },
        { kind: 'checklist', items: [
          'eSIM para os primeiros 7–30 dias antes de contratar um tarifário local',
          'SIM pré-pago da MEO, NOS, Vodafone ou NOWO, se precisar de um número português',
          'Biblioteca municipal: muitas vezes mais silenciosa e estável do que uma praça ou café',
          'Coworking por um dia, se precisar de videochamadas',
          'Wi‑Fi em centros comerciais como opção de reserva',
          'Internet em casa por fibra, se arrendar habitação por um período a partir de alguns meses'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa WiFi Plus', amountEUR: 0, note: 'Gratuito; as sessões normalmente são limitadas no tempo, frequentemente até 60 minutos, com possibilidade de novo acesso' },
    { label: 'Porto WiFi', amountEUR: 0, note: 'Gratuito; cobertura menor, cerca de 35 hotspots' },
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
      title: 'Câmara Municipal do Porto — Porto WiFi e hotspots municipais',
      url: 'https://www.cm-porto.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
