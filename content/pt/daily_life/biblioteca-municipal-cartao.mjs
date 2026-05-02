export default {
  editorialVoice: 'hackportugal',
  id: 'biblioteca-municipal-cartao',
  categoryId: 'daily_life',
  title: 'Cartão de Leitor: bibliotecas municipais gratuitas',
  tldr: 'As bibliotecas municipais em Portugal são gratuitas: em Lisboa funciona a rede BLX, com cerca de 15 bibliotecas; no Porto, a Biblioteca Municipal Almeida Garrett e serviços municipais de leitura; em Coimbra, a Biblioteca Municipal. O Cartão de Leitor é normalmente emitido gratuitamente em 5–15 minutos com passaporte/autorização de residência, NIF e comprovativo de morada. Pode levar para casa livros, DVD, audiolivros e publicações infantis; o prazo normal de empréstimo é muitas vezes de 21 dias, com renovação se não houver reserva.',
  tags: ['biblioteca', 'cartão', 'livros', 'blx'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-you-get',
      title: 'O que oferece o Cartão de Leitor',
      content: [
        { kind: 'paragraph', text: 'O Cartão de Leitor é o cartão de utilizador da biblioteca municipal. É um dos serviços gratuitos mais subestimados para expats: acesso a livros em português e noutras línguas, salas infantis, mesas de trabalho, Wi‑Fi, eventos, clubes de leitura e, por vezes, recursos digitais.' },
        { kind: 'checklist', items: [
          'Inscrição gratuita na biblioteca municipal da sua cidade',
          'Empréstimo domiciliário de livros — normalmente até 21 dias; as regras dependem do município',
          'DVD, CD, audiolivros, banda desenhada e livros infantis — se existirem no fundo da biblioteca em causa',
          'Renovação do prazo, se o documento não estiver reservado por outro leitor',
          'Reserva de livros através do catálogo online, quando disponível',
          'Postos de trabalho, tomadas e Wi‑Fi — útil se houver ruído em casa ou se não tiver escritório',
          'Horas do conto, oficinas, exposições, eventos linguísticos e culturais',
          'Acesso aos fundos de toda a rede: por exemplo, a BLX em Lisboa reúne as bibliotecas municipais'
        ] }
      ]
    },
    {
      id: 'where-to-go',
      title: 'Onde procurar uma biblioteca em Lisboa, Porto e Coimbra',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, as bibliotecas são geridas pelos municípios, por isso as regras de inscrição e o prazo de empréstimo variam ligeiramente. Comece pelo site da Câmara Municipal da sua cidade ou procure “biblioteca municipal + nome da cidade”.' },
        { kind: 'checklist', items: [
          'Lisboa: rede BLX — Bibliotecas de Lisboa; cerca de 15 bibliotecas municipais e espaços temáticos por bairros',
          'Porto: Biblioteca Municipal Almeida Garrett, nos Jardins do Palácio de Cristal — o principal endereço municipal, além de serviços municipais de leitura',
          'Coimbra: Biblioteca Municipal de Coimbra e espaços de leitura municipais',
          'Cascais, Oeiras, Sintra, Almada, Braga, Aveiro e Faro também têm bibliotecas municipais gratuitas',
          'Se não vive em Lisboa/Porto, procure “Cartão de Leitor”, “inscrição de leitor” ou “empréstimo domiciliário” no site do município',
          'Não é obrigatório ser cidadão português: normalmente basta viver na cidade e comprovar a morada'
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para a inscrição',
      content: [
        { kind: 'paragraph', text: 'A inscrição costuma ser feita numa única visita. Nas grandes cidades, podem emitir um cartão físico ou criar um registo no sistema e associá-lo ao seu documento de identificação.' },
        { kind: 'checklist', items: [
          'Passaporte, Cartão de Cidadão, autorização de residência ou outro documento com fotografia',
          'NIF — é frequentemente pedido para o registo no sistema',
          'Comprovativo de morada: contrato de arrendamento, factura de luz/água/internet, declaração da Junta de Freguesia, certificado de domicílio fiscal das Finanças',
          'Número de telefone português',
          'E-mail para notificações sobre prazos de devolução e reservas',
          'Para crianças: documento da criança e documento de identificação do progenitor/responsável',
          'Se a morada no documento estiver desactualizada, leve um comprovativo de morada separado',
          'Se não tiver NIF, pergunte na mesma ao balcão: algumas bibliotecas fazem um registo temporário com passaporte, mas o registo completo costuma exigir NIF'
        ] },
        { kind: 'warning', text: 'As regras não são nacionais. Uma biblioteca pode aceitar contrato de arrendamento, outra pode pedir um comprovativo de morada com menos de 3 meses. Antes da visita, confirme a secção “Inscrição” ou “Regulamento” no site da sua Câmara Municipal.' }
      ]
    },
    {
      id: 'how-to-register',
      title: 'Como obter o cartão numa única visita',
      content: [
        { kind: 'substeps', items: [
          { id: 'choose-library', title: '1. Escolha a biblioteca mais próxima', content: [
            { kind: 'paragraph', text: 'Abra o site da BLX, da CM Porto, da CM Coimbra ou do seu município. Verifique o horário: muitas bibliotecas estão fechadas ao domingo e algumas têm horário reduzido ao sábado.' }
          ] },
          { id: 'bring-documents', title: '2. Leve os documentos', content: [
            { kind: 'paragraph', text: 'Conjunto mínimo: documento de identificação com fotografia, NIF e comprovativo de morada. Se quiser inscrever uma criança, leve os documentos do progenitor e da criança.' }
          ] },
          { id: 'fill-form', title: '3. Preencha a ficha de inscrição', content: [
            { kind: 'paragraph', text: 'Ao balcão diga: “Quero fazer o Cartão de Leitor”. O funcionário introduzirá os seus dados e explicará os limites de empréstimo e os prazos de devolução.' }
          ] },
          { id: 'test-catalog', title: '4. Verifique o catálogo online', content: [
            { kind: 'paragraph', text: 'Peça para lhe mostrarem como pesquisar livros, renovar o empréstimo e fazer uma reserva. Em redes como a BLX, isto poupa muito tempo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'borrowing-rules',
      title: 'Prazos, limites e penalizações',
      content: [
        { kind: 'paragraph', text: 'A lógica de base nas bibliotecas municipais é semelhante: leva documentos para casa, devolve dentro do prazo e renova se necessário. Um prazo comum de empréstimo é 21 dias, mas os limites do número de livros/DVD e a possibilidade de renovação são definidos pela Câmara Municipal em causa.' },
        { kind: 'checklist', items: [
          'Verifique o prazo de devolução no talão, no e-mail ou na área pessoal',
          'Renove antes do fim do prazo, sobretudo se for sair da cidade',
          'Se o livro estiver reservado por outro leitor, a renovação pode não ser autorizada',
          'DVD e multimédia são por vezes emprestados por um prazo mais curto do que os livros',
          'Obras de referência, livros raros e imprensa recente são normalmente apenas para consulta local',
          'Em caso de atraso, é mais comum bloquearem novos empréstimos até à devolução; as coimas dependem do regulamento do município',
          'Em caso de perda ou dano, podem pedir a substituição do documento ou o pagamento do seu valor',
          'Se mudar de morada ou de e-mail, actualize os dados para receber notificações'
        ] },
        { kind: 'warning', text: 'Não confunda biblioteca municipal com biblioteca universitária. As bibliotecas da Universidade de Lisboa, Universidade do Porto ou Universidade de Coimbra podem ter regras de acesso próprias e cartões externos pagos para pessoas que não pertencem à universidade.' }
      ]
    },
    {
      id: 'expat-tips',
      title: 'Dicas práticas para expats',
      content: [
        { kind: 'paragraph', text: 'A biblioteca é uma boa forma de se integrar mais depressa no bairro: há cartazes de eventos locais, actividades gratuitas para crianças, clubes de conversação e um espaço tranquilo para trabalhar.' },
        { kind: 'checklist', items: [
          'Procure livros em inglês, francês, espanhol e livros bilingues para crianças',
          'Para aprender a língua, escolha livros de leitura fácil e livros infantis em português europeu',
          'Pergunte ao bibliotecário sobre clubes de leitura e actividades para famílias',
          'Use a biblioteca como coworking gratuito durante 2–4 horas, mas confirme as regras sobre chamadas e comida',
          'Em Lisboa, verifique não só as bibliotecas centrais da BLX, mas também as de bairro — aí há menos fila para livros populares',
          'No Porto, combine a visita à Biblioteca Municipal Almeida Garrett com um passeio nos Jardins do Palácio de Cristal',
          'Se se mudou para outro município, faça um novo cartão: o Cartão de Leitor antigo nem sempre funciona noutra rede',
          'Guarde o e-mail com a data de devolução — é a melhor forma de evitar um bloqueio por atraso'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Emissão do Cartão de Leitor', amountEUR: 0, note: 'Nas bibliotecas municipais é normalmente gratuita' },
    { label: 'Utilização da sala de leitura e do Wi‑Fi', amountEUR: 0, note: 'Gratuita, se o serviço estiver disponível na biblioteca em causa' },
    { label: 'Substituição de livro ou DVD perdido', amountEURMin: 5, amountEURMax: 40, note: 'Não é uma tarifa fixa: depende do valor do documento e do regulamento do município' }
  ],
  sources: [
    { title: 'BLX — Bibliotecas de Lisboa, rede de bibliotecas municipais de Lisboa', url: 'https://blx.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — Biblioteca Municipal Almeida Garrett', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Coimbra — Biblioteca Municipal', url: 'https://www.cm-coimbra.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
