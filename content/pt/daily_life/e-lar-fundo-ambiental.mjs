export default {
  editorialVoice: 'hackportugal',
  id: 'e-lar-fundo-ambiental',
  categoryId: 'daily_life',
  title: 'E-LAR / Vale E-Lar: vale até 1 683 € para substituir gás por eletricidade',
  tldr: 'O E-LAR é um programa do Fundo Ambiental: desde 11.12.2025 decorre a 2.ª vaga, com um orçamento de cerca de 60,8 milhões €. O vale cobre a substituição de fogão/placa/forno/esquentador a gás por equipamentos elétricos de classe A+ ou superior. Grupos I/II — até 1 683 € com instalação, grupo III — até 1 100 €, mais até 50 € para a selagem da tubagem de gás. A candidatura é feita em fundoambiental.pt com CMD/Cartão de Cidadão, NIF, CPE e escolha de fornecedor da lista.',
  tags: ['elar', 'fundoambiental', 'energia', 'vale'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-e-lar',
      title: 'O que o E-LAR paga',
      content: [
        { kind: 'paragraph', text: 'O E-LAR, também Vale E-Lar, é um vale estatal do Fundo Ambiental para a descarbonização da habitação: retirar aparelhos domésticos a gás e instalar equipamentos elétricos de elevada eficiência energética.' },
        { kind: 'checklist', items: ['Substituição de fogão a gás ou fogão por fogão/forno elétrico', 'Substituição de placa a gás por placa de indução ou vitrocerâmica', 'Substituição de esquentador/caldeira a gás para águas quentes por termoacumulador elétrico ou outro aquecedor de água elétrico admissível', 'Compra apenas junto de fornecedores que aderiram ao programa', 'Os novos equipamentos devem cumprir os requisitos do aviso, normalmente classe A+ ou superior quando a etiqueta energética se aplica', 'O vale é aplicado como desconto/pagamento junto de um fornecedor aprovado, e não como transferência livre de dinheiro para a sua conta'] },
        { kind: 'warning', text: 'Não compre equipamentos antecipadamente em qualquer loja. Despesas fora do procedimento E-LAR e fora da lista de fornecedores aderentes podem não ser reembolsadas.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem pode candidatar-se em 2026',
      content: [
        { kind: 'paragraph', text: 'Na 2.ª vaga, aberta desde 11.12.2025, o programa divide os candidatos em 3 grupos. O importante não é a cidadania, mas sim a existência de habitação/contrato de eletricidade em Portugal e o cumprimento das condições do aviso.' },
        { kind: 'checklist', items: ['Grupo I: agregados familiares com Tarifa Social de Energia Elétrica — limite reforçado até 1 683 €', 'Grupo II: residentes em zonas/bairros Bairros + Sustentáveis — limite reforçado até 1 683 €', 'Grupo III: restantes clientes de eletricidade — limite até 1 100 €', 'Adicionalmente, é possível receber até 50 € para o encerramento/selagem segura da tubagem de gás', 'É necessário o CPE — Código de Ponto de Entrega da fatura de eletricidade', 'É necessário o NIF do candidato', 'Para entrar no portal é necessário Cartão de Cidadão com leitor/PIN ou Chave Móvel Digital', 'Arrendatários normalmente devem ter consentimento do proprietário se for alterado equipamento fixo ou a instalação de gás'] },
        { kind: 'warning', text: 'Se a eletricidade estiver em nome do senhorio, de um familiar ou do antigo morador, a candidatura pode ficar bloqueada: CPE, morada e dados do candidato devem corresponder de forma lógica às condições do programa. Antes de submeter, verifique o contrato de eletricidade.' }
      ]
    },
    {
      id: 'documents',
      title: 'O que preparar antes da candidatura',
      content: [
        { kind: 'paragraph', text: 'O portal do Fundo Ambiental normalmente verifica parte dos dados automaticamente, mas é melhor reunir previamente digitalizações e fotografias. Isto poupa semanas de troca de mensagens.' },
        { kind: 'checklist', items: ['Acesso através de CMD ou Cartão de Cidadão', 'NIF e dados de contacto atualizados', 'Fatura de eletricidade com CPE e morada do imóvel', 'Comprovativo do direito de utilização da habitação: contrato de arrendamento, caderneta predial/documento do proprietário ou outra confirmação, se for solicitada', 'Fotografias do antigo aparelho a gás antes da desmontagem', 'Marca, modelo e tipo do aparelho antigo: placa, fogão, forno, esquentador ou caldeira', 'Dados sobre a existência de gás: botija, rede de gás natural ou GPL canalizado, se aplicável', 'Se estiver na Tarifa Social — verifique se já aparece na fatura de eletricidade', 'Se se candidatar como Bairros + Sustentáveis — verifique se a morada está dentro da área/iniciativa elegível', 'Consentimento do senhorio para a substituição do equipamento, se a habitação for arrendada'] }
      ]
    },
    {
      id: 'application',
      title: 'Como submeter a candidatura em fundoambiental.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar na Área Reservada', content: [
            { kind: 'paragraph', text: 'Abra fundoambiental.pt, escolha o aviso E-LAR / Vale E-Lar e entre com CMD ou Cartão de Cidadão. Se ainda não tiver CMD, ative-a através do ePortugal, Espaço Cidadão ou com Cartão de Cidadão.' }
          ] },
          { id: 'fill-data', title: '2. Preencher os dados da habitação e o CPE', content: [
            { kind: 'paragraph', text: 'Indique o NIF, a morada, o CPE, o tipo de aparelho a gás antigo e o grupo pelo qual se candidata. Um erro no CPE é uma causa frequente de recusa, porque este é o identificador do ponto de fornecimento de eletricidade.' }
          ] },
          { id: 'upload', title: '3. Carregar os comprovativos', content: [
            { kind: 'paragraph', text: 'Anexe as fotografias/documentos de acordo com a lista do portal. É preferível dar nomes claros aos ficheiros: cpe-fatura.pdf, foto-esquentador.jpg, contrato-arrendamento.pdf.' }
          ] },
          { id: 'voucher', title: '4. Receber o vale digital', content: [
            { kind: 'paragraph', text: 'Após a aprovação, o portal emite um vale digital. Este é usado junto de um fornecedor aderente da lista oficial. Não confunda a candidatura ao vale com a compra final: o equipamento deve passar pelo fornecedor do programa.' }
          ] }
        ] }
      ]
    },
    {
      id: 'supplier-installation',
      title: 'Compra, instalação e encerramento do gás',
      content: [
        { kind: 'paragraph', text: 'Depois da emissão do vale, escolha um fornecedor da lista do Fundo Ambiental. Confirme não só o preço do equipamento, mas também se estão incluídos entrega, desmontagem do aparelho antigo, instalação, trabalhos elétricos e reciclagem.' },
        { kind: 'checklist', items: ['Peça um orçamento antes de confirmar a encomenda', 'Verifique se o modelo cumpre os requisitos do E-LAR e de eficiência energética', 'Para uma placa de indução, verifique a potência do quadro elétrico e do disjuntor — apartamentos antigos muitas vezes exigem reforço da linha', 'Para um termoacumulador, verifique a capacidade, o local de instalação e a carga na rede elétrica', 'Guarde a fatura, o auto de instalação e os documentos do fornecedor', 'Se um aparelho a gás for desligado, peça a devida selagem da ligação de gás', 'Para a selagem pode existir um apoio separado até 50 €', 'Não desmonte a tubagem de gás por iniciativa própria — é uma questão de segurança e de seguro da habitação'] },
        { kind: 'warning', text: 'O E-LAR cobre o limite do programa, mas não garante que todo o trabalho seja gratuito. Se o equipamento escolhido, a parte elétrica ou a instalação custarem mais do que o limite, a diferença é paga pelo candidato.' }
      ]
    },
    {
      id: 'practical-notes',
      title: 'Aspetos práticos para expats',
      content: [
        { kind: 'paragraph', text: 'O programa é útil mesmo para quem acabou de se mudar: está ligado à habitação portuguesa e ao CPE elétrico, e não ao tempo de residência. Mas sem CMD/CC, NIF e uma situação clara na morada é difícil candidatar-se.' },
        { kind: 'checklist', items: ['Se tiver apenas passaporte e NIF, mas não tiver CMD, configure primeiro o acesso aos serviços públicos', 'Se arrenda a habitação, obtenha acordo escrito do senhorio: um e-mail é bastante melhor do que um acordo verbal', 'Se o gás for de botija, fotografe a ligação e o próprio aparelho antes da substituição', 'Se o gás for de rede, não encerre o contrato de gás antes de consultar o instalador', 'Se a instalação elétrica da casa for fraca, preveja orçamento para uma linha/disjuntor separado — isto pode não estar incluído no vale', 'Verifique o estado da candidatura na Área Reservada; mensagens do Fundo Ambiental podem ir parar ao spam', 'Como o orçamento da 2.ª vaga é de cerca de 60,8 milhões €, na prática a candidatura funciona até ao limite dos fundos: não adie se os documentos estiverem prontos'] }
      ]
    }
  ],
  costs: [
    { label: 'Vale E-LAR para os grupos I/II', amountEURMax: 1683, note: 'Para Tarifa Social de Energia Elétrica ou Bairros + Sustentáveis; o limite inclui equipamentos elegíveis e instalação nos termos do aviso.' },
    { label: 'Vale E-LAR para o grupo III', amountEURMax: 1100, note: 'Para os restantes clientes de eletricidade, se forem cumpridas as condições do programa.' },
    { label: 'Apoio adicional para encerramento da tubagem de gás', amountEURMax: 50, note: 'Apoio adicional para selagem/encerramento da ligação de gás, quando aplicável.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — portal oficial dos programas e Área Reservada', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — Avisos 2025, Bairros + Sustentáveis e E-LAR', url: 'https://www.fundoambiental.pt/avisos-2025/avisos-bairros-sustentaveis', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Chave Móvel Digital', url: 'https://eportugal.gov.pt/servicos/ativar-a-chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
