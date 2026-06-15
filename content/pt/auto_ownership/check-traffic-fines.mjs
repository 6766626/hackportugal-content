export default {
  editorialVoice: 'hackportugal',
  id: 'check-traffic-fines',
  categoryId: 'auto_ownership',
  title: 'Como verificar multas de carro e contraordenações em Portugal',
  tldr: 'Portugal não tem uma pesquisa única e fiável “por matrícula” para todas as multas. As contraordenações rodoviárias consultam-se no Balcão do Condutor / Portal das Contraordenações da ANSR, mas o acesso normal costuma exigir Chave Móvel Digital ou Cartão de Cidadão.\n\nSe tem título de residência mas não tem Cartão de Cidadão, o portal pode não abrir ou aparecer vazio mesmo com CMD. Verifique por tipo de dívida: ANSR/GNR/PSP para processos rodoviários, município para estacionamento leve e CTT/Via Verde/Ascendi para portagens.',
  tags: ['multas', 'ansr', 'carro', 'portagens', 'cmd'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-can-check',
      title: 'Separe primeiro o tipo de multa',
      content: [
        { kind: 'paragraph', text: 'A principal armadilha é que uma “multa do carro” em Portugal pode estar em sistemas diferentes. Um Portal das Contraordenações vazio não significa que não existam dívidas de estacionamento ou portagens eletrónicas.' },
        { kind: 'checklist', items: [
          'ANSR / polícia / GNR / PSP: excesso de velocidade, sinal vermelho, telemóvel, álcool, contraordenações graves/muito graves, pontos da carta.',
          'Estacionamento municipal: EMEL, Câmara Municipal, Polícia Municipal ou concessionário. Contraordenações leves de estacionamento consultam-se normalmente no município onde ocorreram.',
          'Portagens: portagens eletrónicas em dívida consultam-se nos CTT, Via Verde, Ascendi, Via Livre/Globalvia ou Portal de Pagamento de Portagens.',
          'Carro alugado: a rent-a-car pode cobrar a sua taxa administrativa e identificar o condutor perante a entidade que emitiu a multa.',
          'Parques privados ou garagens: pode ser uma dívida contratual ao operador, não uma coima do Estado.'
        ] },
        { kind: 'warning', text: 'Não procure apenas por matrícula. Na ANSR a ligação principal costuma ser ao condutor/arguido, NIF, título de condução e processo, não apenas ao número do veículo.' }
      ]
    },
    {
      id: 'online-cabinet',
      title: 'Online: Balcão do Condutor e Portal das Contraordenações',
      content: [
        { kind: 'paragraph', text: 'O Balcão do Condutor no gov.pt mostra pontos, histórico de contraordenações, processos correntes e coimas por pagar. O gov.pt indica que o acesso exige Chave Móvel Digital ou Cartão de Cidadão. O Portal das Contraordenações da ANSR permite consultar processos, cadastro e apresentar pedidos: defesa, prestações e consulta de processo.' },
        { kind: 'checklist', items: [
          'Tente o Balcão do Condutor através do gov.pt se tiver CMD ou Cartão de Cidadão.',
          'Consulte o Portal das Contraordenações da ANSR para processos, cadastro, pontos, pedidos e documentos do processo.',
          'Se já tem uma conta antiga do portal, o acesso por NIF/senha pode funcionar; para novo utilizador particular, conte com CMD/Cartão de Cidadão.',
          'Se tem carta estrangeira ou carta portuguesa trocada recentemente, os dados podem não coincidir automaticamente.',
          'Se o portal estiver vazio, guarde a data/captura, mas não trate isso como prova de que não existe nenhuma multa.',
          'Verifique a morada fiscal e a morada associada ao veículo: notificações oficiais chegam muitas vezes por correio físico.'
        ] },
        { kind: 'warning', text: 'A CMD por si só não garante que apareça tudo. Muitos residentes sem Cartão de Cidadão e sem carta de condução portuguesa encontram o portal indisponível ou vazio, sobretudo em processos antigos ou com dados desencontrados.' }
      ]
    },
    {
      id: 'if-no-access',
      title: 'Se não tem CMD/CC ou o portal aparece vazio',
      content: [
        { kind: 'paragraph', text: 'O caminho prático é contactar a entidade certa, não um site universal. Leve NIF, passaporte/título de residência, carta de condução, matrícula, Documento Único Automóvel ou contrato de aluguer/leasing, e quaisquer avisos em papel.' },
        { kind: 'checklist', items: [
          'Para processos rodoviários, pergunte na Secção de Contraordenações da PSP ou no Gabinete de Atendimento ao Cidadão da GNR da sua área.',
          'Use Espaço Cidadão / apoio gov.pt se o problema for o acesso por CMD ou Balcão do Condutor.',
          'Se o veículo não é seu, peça ao proprietário, leasing ou rent-a-car cópias das notificações e prova de quem foi identificado como condutor.',
          'Se recebeu carta da ANSR, use o número de auto/processo da carta. O pedido fica muito mais forte.',
          'Se apenas suspeita de uma multa, indique intervalo de datas, matrícula, NIF, número da carta de condução e morada para resposta.',
          'Se for estacionamento leve, contacte o município ou operador da cidade, não a ANSR.'
        ] },
        { kind: 'warning', text: 'Não espere pelo acesso online se já recebeu carta registada. O prazo de defesa/pagamento normalmente conta da notificação, não do dia em que finalmente conseguiu entrar no portal.' }
      ]
    },
    {
      id: 'ask-ansr',
      title: 'Como pedir informação à ANSR',
      content: [
        { kind: 'paragraph', text: 'Os contactos gerais oficiais da ANSR são mail@ansr.pt e 21 423 68 00. Para pedido formal de consulta de processo ou envio de prova fotográfica, usa-se frequentemente o formulário F304; cópias ou certidões podem exigir outros formulários e taxas.' },
        { kind: 'checklist', items: [
          'Assunto do email: Pedido de informação sobre processos de contraordenação rodoviária.',
          'Inclua: nome completo, NIF, data de nascimento, número de identificação, número da carta de condução, país emissor da carta, matrícula, morada, telefone/email.',
          'Se tiver número de auto/processo, coloque-o na primeira linha.',
          'Peça a verificação de “processos de contraordenação rodoviária pendentes ou notificados associados ao meu NIF, título de condução e matrícula”.',
          'Anexe cópias de documentos apenas quando forem necessárias para identificação; oculte dados que não tenham relação com o pedido.',
          'Para um requerimento formal no processo, prefira portal, correio registado ou email assinado digitalmente.'
        ] },
        { kind: 'paragraph', text: 'Frase útil: “Venho solicitar informação sobre a eventual existência de processos de contraordenação rodoviária pendentes ou notificados associados ao meu NIF, título de condução e matrícula abaixo indicados. Não consigo consultar a informação no Portal das Contraordenações por não dispor de Cartão de Cidadão / por a autenticação não apresentar processos.”' },
        { kind: 'warning', text: 'Um email simples sem assinatura digital pode ajudar como pedido de informação, mas nem sempre substitui um requerimento juridicamente válido. Se há prazo de defesa ou precisa de cópia do processo, use a via oficial indicada na notificação.' }
      ]
    },
    {
      id: 'parking-tolls',
      title: 'Estacionamento e portagens consultam-se à parte',
      content: [
        { kind: 'paragraph', text: 'O gov.pt nota separadamente que contraordenações leves de estacionamento desde novembro de 2018 devem ser consultadas junto do município onde ocorreram. Em Lisboa é muitas vezes EMEL/Câmara Municipal de Lisboa, no Porto Câmara Municipal do Porto, e noutros locais a Câmara ou concessionário local.' },
        { kind: 'checklist', items: [
          'Procure no site municipal por estacionamento, contraordenações, polícia municipal, avisos ou coimas.',
          'Se o aviso em papel tiver referência Multibanco ou número de aviso, use o canal indicado no próprio aviso.',
          'Para portagens eletrónicas, consulte CTT “Portagens em dívida” por matrícula; os CTT avisam que só mostram dívidas ainda pagáveis nos CTT.',
          'Consulte Via Verde “Pagamentos em Falta / consultar por matrícula” se não tem identificador ou suspeita de passagem por pagar.',
          'Para Ascendi/Via Livre/Globalvia, use o Portal de Pagamento de Portagens ou o site do operador.',
          'Não consulte apenas no próprio dia: as passagens podem aparecer com atraso e sair do portal após o prazo.'
        ] },
        { kind: 'warning', text: 'Portagens não são o mesmo que multa da ANSR. Primeiro é portagem mais custos administrativos; se ficar por pagar, pode encarecer e seguir para cobrança.' }
      ]
    },
    {
      id: 'scams',
      title: 'Atenção a phishing e avisos falsos',
      content: [
        { kind: 'paragraph', text: 'A ANSR alerta regularmente para emails/SMS falsos com “multas” e links de pagamento. As notificações oficiais da ANSR são enviadas por correio físico; em caso de dúvida, confirme no site oficial, em mail@ansr.pt ou pelo telefone da ANSR.' },
        { kind: 'checklist', items: [
          'Não pague por link de email/SMS se não corresponder a uma notificação oficial em papel.',
          'Confirme entidade, referência, montante e número de processo.',
          'Não introduza dados bancários em páginas abertas por links encurtados.',
          'Se um email disser que é da ANSR, confirme o domínio do remetente e contacte a ANSR pelos contactos do gov.pt.',
          'Guarde comprovativos de pagamento e respostas das entidades até ao encerramento do processo.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Consulta no Balcão do Condutor / Portal das Contraordenações', amountEUR: 0, note: 'O acesso é gratuito; precisa de CMD/Cartão de Cidadão ou acesso já existente ao portal.' },
    { label: 'Pedido de informação à ANSR', amountEUR: 0, note: 'Um pedido simples é gratuito; cópias, certidões ou envio postal podem ter taxas separadas.' },
    { label: 'Correio registado para a ANSR', amountEURMin: 4, amountEURMax: 8, note: 'Estimativa de custo postal; depende do serviço CTT e dos anexos.' },
    { label: 'Custos administrativos CTT de portagens', amountEURMin: 0.32, amountEURMax: 2.56, note: 'Os CTT indicam este intervalo de custos administrativos acrescidos à portagem no momento de pagamento.' }
  ],
  sources: [
    { title: 'gov.pt: Consultar o Portal das Contraordenações', url: 'https://www.gov.pt/servicos/consultar-o-portal-das-contraordenacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Balcão do Condutor', url: 'https://www2.gov.pt/balcao-do-condutor', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Consultar o histórico de contraordenações rodoviárias', url: 'https://www.gov.pt/servicos/consultar-o-historico-de-contraordenacoes-rodoviarias', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Autoridade Nacional de Segurança Rodoviária', url: 'https://www.gov.pt/entidades/autoridade-nacional-de-seguranca-rodoviaria', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'ANSR: formulários de contraordenações', url: 'https://www.ansr.pt/Contraordenacoes/Formularios', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'CTT: consultar portagens em dívida', url: 'https://www.ctt.pt/forms/portagens-em-divida', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'Via Verde: pagamentos em falta por matrícula', url: 'https://www.viaverde.pt/particulares/pagamentos-em-falta/consultar-por-matricula', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' }
  ],
  lastVerified: '2026-06-15',
  verifyIntervalDays: 120
}
