export default {
  editorialVoice: 'hackportugal',
  id: 'e-lar-fundo-ambiental',
  categoryId: 'daily_life',
  title: 'E-LAR / Vale E-Lar: vale para substituir gás por electricidade',
  tldr: 'O E-LAR é um programa do Fundo Ambiental: a 2.ª fase (aviso AAC 11/C13-i01/2025) tem um orçamento de cerca de 60,8 milhões de €, mas desde 24.03.2026 está encerrada a novas candidaturas, a aguardar renegociação do PRR. O vale cobre a substituição de fogão/placa/forno/esquentador a gás por equipamentos eléctricos de classe A+ ou superior. O apoio é pago por limites por equipamento (e não numa única verba): para a Tarifa Social (Grupo II) — por exemplo, termoacumulador até 615 €, conjunto placa+forno até 738 €; para os restantes (Grupo III) — até 500 € e 600 € respectivamente. Candidatura através de fundoambiental.pt com CMD/Cartão de Cidadão, NIF, CPE e escolha de fornecedor da lista.',
  tags: ['elar', 'fundoambiental', 'energia', 'vale'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-e-lar',
      title: 'O que o E-LAR paga',
      content: [
        { kind: 'paragraph', text: 'O E-LAR, também Vale E-Lar, é um vale estatal do Fundo Ambiental para a descarbonização da habitação: retirar equipamentos domésticos a gás e instalar equipamentos eléctricos de elevada eficiência energética.' },
        { kind: 'checklist', items: ['Substituição de fogão a gás ou fogão por fogão/forno eléctrico', 'Substituição de placa a gás por placa de indução ou vitrocerâmica', 'Substituição de esquentador/caldeira a gás para água quente por termoacumulador eléctrico ou outro aquecedor de água eléctrico elegível', 'Compra apenas junto de fornecedores que aderiram ao programa', 'Os novos equipamentos devem cumprir os requisitos do aviso, normalmente classe A+ ou superior quando a etiqueta energética é aplicável', 'O vale é aplicado como desconto/pagamento junto do fornecedor aprovado, e não como transferência livre de dinheiro para a sua conta'] },
        { kind: 'warning', text: 'Não compre os equipamentos antecipadamente em qualquer loja. Despesas fora do procedimento E-LAR e fora da lista de fornecedores aderentes podem não ser comparticipadas.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem pode candidatar-se',
      content: [
        { kind: 'paragraph', text: 'Na 2.ª fase (aberta desde 11.12.2025, mas encerrada a novas candidaturas desde 24.03.2026, a aguardar renegociação do PRR) o programa divide os candidatos em 2 grupos com dotação. O importante não é a nacionalidade, mas sim ter habitação/contrato de electricidade em Portugal e cumprir as condições do aviso.' },
        { kind: 'checklist', items: ['Grupo II: agregados familiares com Tarifa Social de Energia Elétrica (TSEE) — limites por equipamento mais altos (por exemplo, termoacumulador até 615 €, conjunto placa+forno até 738 €) mais despesas de transporte e instalação', 'Grupo III: restantes clientes de electricidade — limites por equipamento mais baixos (por exemplo, termoacumulador até 500 €, conjunto placa+forno até 600 €), sem transporte nem instalação pagos', 'Bairros + Sustentáveis (Grupo I) está marcado «Não Aplicável» nesta fase e não recebe dotação', 'Transporte, instalação e os até 50 € pela remoção/selagem do antigo equipamento a gás só existem para a Tarifa Social (Grupo II); para o Grupo III estes serviços são «Não elegível»', 'É necessário o CPE — Código de Ponto de Entrega da factura de electricidade', 'É necessário o NIF do candidato', 'Para entrar no portal é necessário Cartão de Cidadão com leitor/PIN ou Chave Móvel Digital', 'Os arrendatários normalmente devem ter consentimento do proprietário se houver alteração de equipamento fixo ou da instalação de gás'] },
        { kind: 'warning', text: 'Se a electricidade estiver em nome do senhorio, de um familiar ou do antigo morador, a candidatura pode ficar bloqueada: CPE, morada e dados do candidato devem estar logicamente alinhados com as condições do programa. Antes de candidatar-se, verifique o contrato de eletricidade.' }
      ]
    },
    {
      id: 'documents',
      title: 'O que preparar antes da candidatura',
      content: [
        { kind: 'paragraph', text: 'O portal do Fundo Ambiental normalmente verifica parte dos dados automaticamente, mas é melhor reunir previamente digitalizações e fotografias. Isto poupa semanas de troca de mensagens.' },
        { kind: 'checklist', items: ['Acesso através de CMD ou Cartão de Cidadão', 'NIF e contactos actualizados', 'Factura de electricidade com CPE e morada do imóvel', 'Prova do direito de utilização da habitação: contrato de arrendamento, caderneta predial/documento do proprietário ou outro comprovativo, se for pedido', 'Fotografias do antigo equipamento a gás antes da desmontagem', 'Marca, modelo e tipo do equipamento antigo: placa, fogão, forno, esquentador ou caldeira', 'Dados sobre a existência de gás: botija, rede de gás natural ou GPL canalizado, se aplicável', 'Se estiver na Tarifa Social — verifique que esta já aparece na factura de electricidade, pois é isso que determina o grupo (Grupo II) e os limites mais altos', 'Consentimento do senhorio para a substituição do equipamento, se a habitação for arrendada'] }
      ]
    },
    {
      id: 'application',
      title: 'Como apresentar candidatura em fundoambiental.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar na Área Reservada', content: [
            { kind: 'paragraph', text: 'Abra fundoambiental.pt, escolha o aviso E-LAR / Vale E-Lar e entre com CMD ou Cartão de Cidadão. Se ainda não tiver CMD, active-a através do ePortugal, Espaço Cidadão ou com Cartão de Cidadão.' }
          ] },
          { id: 'fill-data', title: '2. Preencher os dados da habitação e o CPE', content: [
            { kind: 'paragraph', text: 'Indique NIF, morada, CPE, tipo do antigo equipamento a gás e o grupo pelo qual se candidata. Um erro no CPE é uma causa frequente de recusa, porque este é o identificador do ponto de fornecimento de electricidade.' }
          ] },
          { id: 'upload', title: '3. Carregar comprovativos', content: [
            { kind: 'paragraph', text: 'Anexe as fotografias/documentos de acordo com a lista do portal. É melhor dar nomes claros aos ficheiros: cpe-fatura.pdf, foto-esquentador.jpg, contrato-arrendamento.pdf.' }
          ] },
          { id: 'voucher', title: '4. Receber o vale digital', content: [
            { kind: 'paragraph', text: 'Após aprovação, o portal emite um vale digital. Este é utilizado junto de um fornecedor aderente da lista oficial. Não confunda a candidatura ao vale com a compra final: o equipamento deve passar pelo fornecedor do programa.' }
          ] }
        ] }
      ]
    },
    {
      id: 'supplier-installation',
      title: 'Compra, instalação e encerramento do gás',
      content: [
        { kind: 'paragraph', text: 'Depois de emitido o vale, escolha um fornecedor da lista do Fundo Ambiental. Confirme não só o preço do equipamento, mas também se estão incluídos entrega, desmontagem do equipamento antigo, instalação, trabalhos eléctricos e reciclagem.' },
        { kind: 'checklist', items: ['Peça um orçamento antes de confirmar a encomenda', 'Verifique que o modelo cumpre os requisitos do E-LAR e de eficiência energética', 'Para uma placa de indução, verifique a potência do quadro elétrico e do disjuntor — apartamentos antigos exigem muitas vezes reforço da linha', 'Para um termoacumulador, verifique a capacidade, o local de instalação e a carga na rede eléctrica', 'Guarde a fatura, o auto de instalação e os documentos do fornecedor', 'Se for desligado um equipamento a gás, peça a devida selagem da ligação de gás', 'Para a selagem pode haver um apoio separado até 50 €', 'Não desmonte o tubo de gás por conta própria — é uma questão de segurança e de seguro da habitação'] },
        { kind: 'warning', text: 'O E-LAR cobre o limite do programa, mas não garante que todo o trabalho seja gratuito. Se o equipamento escolhido, a instalação eléctrica ou a instalação forem mais caros do que o limite, a diferença é paga pelo candidato.' }
      ]
    },
    {
      id: 'practical-notes',
      title: 'Aspectos práticos para expats',
      content: [
        { kind: 'paragraph', text: 'O programa é útil mesmo para quem acabou de se mudar: está associado à habitação portuguesa e ao CPE eléctrico, não ao tempo de residência. Mas sem CMD/CC, NIF e um estatuto claro na morada, é difícil candidatar-se.' },
        { kind: 'checklist', items: ['Se tem apenas passaporte e NIF, mas não tem CMD, configure primeiro o acesso aos serviços públicos', 'Se arrenda a habitação, combine por escrito com o senhorio: um e-mail já é melhor do que um acordo verbal', 'Se o gás for de botija, fotografe a ligação e o próprio equipamento antes da substituição', 'Se o gás for da rede, não encerre o contrato de gás antes de consultar o instalador', 'Se a instalação eléctrica da casa for fraca, preveja orçamento para uma linha/disjuntor separado — isto pode não estar incluído no vale', 'Verifique o estado da candidatura na Área Reservada; as mensagens do Fundo Ambiental podem ir para spam', 'Como o orçamento da 2.ª fase é de cerca de 60,8 milhões de €, a candidatura funciona na prática por limite de verba: não adie se os documentos estiverem prontos'] }
      ]
    }
  ],
  costs: [
    { label: 'Vale E-LAR para os grupos I/II', amountEURMax: 1683, note: 'Para Tarifa Social de Energia Elétrica ou Bairros + Sustentáveis; o limite inclui equipamentos elegíveis e instalação de acordo com as condições do aviso.' },
    { label: 'Vale E-LAR para o grupo III', amountEURMax: 1100, note: 'Para os restantes clientes de electricidade, se forem cumpridas as condições do programa.' },
    { label: 'Apoio adicional para encerramento do tubo de gás', amountEURMax: 50, note: 'Apoio adicional para selagem/encerramento da ligação de gás, quando aplicável.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — portal oficial dos programas e Área Reservada', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — Avisos 2025, Bairros + Sustentáveis e E-LAR', url: 'https://www.fundoambiental.pt/apoios-prr/c13-eficiencia-energetica-em-edificios/11c13-i012025-programa-e-lar-2-fase.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Chave Móvel Digital', url: 'https://www.gov.pt/servicos/ativar-a-chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
