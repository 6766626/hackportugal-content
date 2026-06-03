export default {
  editorialVoice: 'hackportugal',
  id: 'radar-multa-contestar',
  categoryId: 'auto_ownership',
  title: 'Contestar uma multa de câmara de velocidade SINCRO',
  tldr: 'As multas dos radares SINCRO chegam pela ANSR: para automóveis ligeiros, excesso até 20 km/h dentro de localidade ou até 30 km/h fora de localidade — 60–300 €; acima disso, as multas aumentam até 2 500 € e pode haver inibição de conduzir.\n\nEm Portugal aplica-se uma correcção metrológica: normalmente 5–7 km/h até 100 km/h (muitas vezes 5 km/h nos radares fixos) e 5–7% acima de 100 km/h. Para apresentar defesa ou indicar outro condutor, há normalmente 15 dias úteis após a notificação; se pagar, faça-o como depósito, para não encerrar o processo. Verifique a fotografia, o sinal, o local, o prazo de verificação do IPQ e a prescrição de 2 anos.',
  tags: ['radar', 'multa', 'ansr', 'automóvel'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'read-notice',
      title: '1. Analise a notificação da ANSR',
      content: [
        { kind: 'paragraph', text: 'A carta da multa por excesso de velocidade chega normalmente ao proprietário do veículo na morada constante do Documento Único Automóvel / registo automóvel. No documento, procure: número do auto de contraordenação, data e local, limite de velocidade, velocidade medida e velocidade após a correcção, artigo do Código da Estrada, montante da coima e dados para pagamento.' },
        { kind: 'checklist', items: [
          'Verifique quem é indicado como arguido: proprietário, condutor ou empresa.',
          'Compare a matrícula e a marca do automóvel na fotografia.',
          'Verifique a data, hora, estrada, sentido de circulação e km.',
          'Compare o limite indicado com o sinal real no local.',
          'Verifique se foi aplicada a correcção à velocidade: normalmente 5–7 km/h até 100 km/h (muitas vezes 5 km/h nos radares fixos) ou 5–7% acima de 100 km/h.',
          'Veja se existe ameaça de sanção acessória: a inibição de conduzir surge normalmente em contraordenação grave / muito grave.',
          'Conte o prazo: normalmente 15 dias úteis a partir da data da notificação para defesa ou identificação do condutor.'
        ] },
        { kind: 'warning', text: 'Não ignore a carta. Se o proprietário não indicar o condutor real, o processo segue muitas vezes contra o proprietário; para empresas e em caso de não prestação de dados, podem existir sanções separadas.' }
      ]
    },
    {
      id: 'know-amounts',
      title: '2. Perceba a gravidade do excesso de velocidade',
      content: [
        { kind: 'paragraph', text: 'Para automóveis ligeiros e motociclos, as multas nos termos do art. 27 Código da Estrada dependem do local e da dimensão do excesso após a correcção metrológica, e não da velocidade “bruta” do radar.' },
        { kind: 'checklist', items: [
          'Dentro de localidade: até +20 km/h — 60–300 €.',
          'Dentro de localidade: +20 a +40 km/h — 120–600 €, normalmente grave.',
          'Dentro de localidade: +40 a +60 km/h — 300–1 500 €, normalmente muito grave.',
          'Dentro de localidade: mais de +60 km/h — 500–2 500 €, muito grave.',
          'Fora de localidade: até +30 km/h — 60–300 €.',
          'Fora de localidade: +30 a +60 km/h — 120–600 €, normalmente grave.',
          'Fora de localidade: +60 a +80 km/h — 300–1 500 €, normalmente muito grave.',
          'Fora de localidade: mais de +80 km/h — 500–2 500 €, muito grave.'
        ] },
        { kind: 'paragraph', text: 'Para pesados, autocarros, veículos com reboque e algumas categorias, os limites são mais baixos. Se a notificação não indicar um automóvel ligeiro, verifique a linha aplicável do art. 27.' }
      ]
    },
    {
      id: 'pay-or-deposit',
      title: '3. Se pagar — preserve o direito de defesa',
      content: [
        { kind: 'paragraph', text: 'A principal armadilha: o pagamento voluntário da coima é normalmente entendido como aceitação da multa e encerra a discussão quanto à própria coima. Se quiser contestar, mas evitar problemas de cobrança, utilize o mecanismo de depósito.' },
        { kind: 'checklist', items: [
          'Se for mandado parar na estrada, peça que o pagamento seja registado como depósito, e não como pagamento voluntário.',
          'Se a carta chegou a casa, escreva expressamente na defesa que o montante, se pago, foi entregue como depósito e não como pagamento voluntário.',
          'Guarde o comprovativo de pagamento e uma cópia da defesa.',
          'Não pague “só para se livrar do assunto” se tenciona contestar a fotografia, o sinal ou a verificação do radar.',
          'Em caso de grave / muito grave, mesmo o pagamento da coima nem sempre resolve a questão: pode correr separadamente uma inibição de conduzir por 1–12 meses ou 2–24 meses.',
          'Para condutores com histórico limpo, por vezes é possível pedir a suspensão da sanção acessória, mas não é um direito automático.'
        ] },
        { kind: 'warning', text: 'A regra das 48 horas é importante em fiscalização na estrada: para contestar depois de pagar, o dinheiro deve ser entregue como depósito nas 48 horas seguintes à notificação e nos termos previstos. A formulação no recibo importa.' }
      ]
    },
    {
      id: 'defence-arguments',
      title: '4. O que vale realmente a pena verificar na defesa',
      content: [
        { kind: 'paragraph', text: 'Uma boa defesa não é “não reparei no sinal”, mas sim pontos processuais e técnicos concretos. Escreva em português, de forma breve, com anexos: fotografias do local, captura do mapa, cópia de documentos, prova de quem era o condutor.' },
        { kind: 'checklist', items: [
          'Identificação do condutor: se não era você quem conduzia, apresente a identificação do condutor dentro do prazo e anexe os dados do condutor.',
          'Fotografia: peça cópia da fotografia, se não tiver sido anexada ou se não permitir identificar com segurança o veículo.',
          'Local: verifique se a coordenada/km corresponde à estrada e ao sentido onde o radar SINCRO está efectivamente instalado.',
          'Sinal de limite: fotografe a aproximação ao local, especialmente se o sinal estiver tapado, ausente, contraditório ou colocado depois do radar.',
          'Correcção da velocidade: verifique se a ANSR utilizou a velocidade depois de descontar a correcção (5–7 km/h ou 5–7% conforme o certificado do equipamento), e não a medição “bruta”.',
          'IPQ / metrologia: solicite o certificado de aprovação de modelo e o certificado de verificação periódica do cinemómetro, válidos na data da infracção.',
          'Prazos: verifique a data da infracção, a data do auto, a data da notificação e a eventual prescrição.',
          'Duplicação: se recebeu várias cartas pelo mesmo episódio, verifique se os factos não foram erradamente separados.'
        ] },
        { kind: 'paragraph', text: 'O argumento do IPQ não funciona como um botão mágico, mas como pedido de prova: o radar deve estar homologado/aprovado e ter verificação metrológica válida. Se no processo não existir certificado válido à data da infracção, este é um ponto forte para arquivamento.' }
      ]
    },
    {
      id: 'submit',
      title: '5. Onde apresentar: Portal Contraordenações ou carta',
      content: [
        { kind: 'paragraph', text: 'A via mais cómoda é o Portal das Contraordenações Rodoviárias ANSR. Para entrar, são normalmente necessários NIF e autenticação digital: Chave Móvel Digital, Cartão de Cidadão ou outro método suportado. Através do portal pode consultar processos, apresentar defesa, indicar o condutor e anexar ficheiros.' },
        { kind: 'checklist', items: [
          'Entre em portalcontraordenacoes.ansr.pt.',
          'Encontre o processo pelo número do auto de contraordenação.',
          'Escolha a acção: defesa, identificação do condutor ou consulta do processo.',
          'Carregue um PDF com o texto da defesa e os anexos.',
          'Peça a juntada aos autos de fotografia, certificado IPQ e relatório do equipamento, se não constarem.',
          'Descarregue o comprovativo de submissão.',
          'Se o portal não funcionar, envie carta registada com aviso de receção para a morada indicada na notificação.',
          'Guarde o envelope: a data de recepção influencia o prazo de 15 dias úteis.'
        ] },
        { kind: 'warning', text: 'O portal da ANSR não suspende prazos. Se não conseguir reunir tudo a tempo, apresente uma defesa curta dentro do prazo e peça acesso aos elementos do processo; poderá complementar mais tarde, se a entidade o permitir.' }
      ]
    },
    {
      id: 'prescription',
      title: '6. Acompanhe a prescrição de 2 anos',
      content: [
        { kind: 'paragraph', text: 'Nas contraordenações rodoviárias, um prazo frequentemente essencial é a prescrição do procedimento ao fim de 2 anos a contar da data da infracção. Se nesse período não houver decisão definitiva, pode pedir arquivamento por prescrição. Na prática, porém, a ANSR pode invocar interrupção ou suspensão dos prazos, pelo que deve verificar o histórico dos actos processuais.' },
        { kind: 'checklist', items: [
          'Anote a data da infracção: é o ponto de partida.',
          'Verifique as datas das notificações, decisões e das suas submissões.',
          'Se passaram cerca de 2 anos, apresente um requerimento de prescrição.',
          'Não confunda a prescrição do procedimento com o prazo de pagamento de uma multa já definitiva.',
          'Se receber uma decisão final com inibição de conduzir, o prazo para impugnação judicial é curto — não espere pela prescrição.',
          'Em multas graves com risco de inibição de conduzir, faz sentido mostrar o processo a um advogado ou solicitador.'
        ] },
        { kind: 'paragraph', text: 'A lista e a localização dos radares SINCRO podem ser facilmente conferidas em radaresavista.pt: aí é publicada uma carta e lista de câmaras fixas, incluindo SINCRO. Isto não substitui os elementos da ANSR, mas ajuda a verificar o local, o sentido e o limite de velocidade.' }
      ]
    }
  ],
  costs: [
    { label: 'Excesso de velocidade ligeiro', amountEURMin: 60, amountEURMax: 300, note: 'Tipicamente até +20 km/h dentro de localidade ou até +30 km/h fora de localidade para automóvel ligeiro.' },
    { label: 'Excesso grave', amountEURMin: 120, amountEURMax: 600, note: 'Pode implicar sanção acessória — inibição de conduzir; depende do histórico do condutor e da categoria da infracção.' },
    { label: 'Excesso muito grave', amountEURMin: 300, amountEURMax: 2500, note: 'O intervalo depende da dimensão do excesso; o risco de inibição de conduzir é maior.' },
    { label: 'Carta registada com aviso de receção', amountEURMin: 4, amountEURMax: 8, note: 'Referência CTT; utilize se apresentar a defesa fora do portal da ANSR.' }
  ],
  sources: [
    {
      title: 'Portal das Contraordenações Rodoviárias ANSR',
      url: 'https://portalcontraordenacoes.ansr.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código da Estrada — art. 27 e regime das contraordenações',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34474975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANSR — fiscalização, radares e segurança rodoviária',
      url: 'https://www.ansr.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Radares à Vista — lista e mapa dos radares SINCRO',
      url: 'https://radaresavista.pt/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
