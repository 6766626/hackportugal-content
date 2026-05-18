export default {
  editorialVoice: 'hackportugal',
  id: 'tradutor-juramentado',
  categoryId: 'documents_fiscal',
  title: 'Tradutor juramentado / tradução certificada para visto e AIMA',
  tldr: 'Em Portugal não existe um estatuto estatal único de «tradutor juramentado» como em Espanha ou na Alemanha. Para vistos, AIMA, Conservatória e Finanças, normalmente é necessária uma tradução para português com certificação: por Notário, advogado/solicitador, Câmara de Comércio e Indústria Portuguesa ou no Consulado. Um pacote típico «certidão/certificado apostilado de 1–3 páginas + certificação» custa 55–120 €, urgente — 80–180 €. Prazo: 2–5 dias úteis, urgente 24–48 horas.',
  tags: ['tradução', 'aima', 'notário', 'apostila'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'no-sworn-system',
      title: 'O essencial: em Portugal não existe o clássico «tradutor juramentado»',
      content: [
        { kind: 'paragraph', text: 'A expressão tradutor juramentado é frequentemente usada no dia a dia e em anúncios, mas no sistema português não existe um registo estatal único de «tradutores juramentados» para todas as línguas. A força jurídica é normalmente dada não pelo próprio tradutor, mas pela certificação da assinatura/tradução por uma entidade competente.' },
        { kind: 'paragraph', text: 'Para AIMA, vistos D1–D8, Conservatória, Finanças, SNS e universidades, na maioria dos casos é necessária uma tradução para português com confirmação de que a tradução corresponde ao original ou a uma cópia certificada.' },
        { kind: 'checklist', items: [
          'Notário — certifica a assinatura do tradutor e/ou a declaração de tradução',
          'Advogado ou solicitador — pode certificar documentos e assinaturas no âmbito das suas competências',
          'Câmara de Comércio e Indústria Portuguesa / CCIP — faz ou certifica traduções comerciais e particulares',
          'Consulado de Portugal no estrangeiro — pode certificar uma tradução ou assinatura, se o serviço estiver disponível',
          'Consulado do país emissor do documento em Portugal — por vezes certifica a tradução, mas a AIMA nem sempre aprecia formatos não habituais',
          'Agência de tradução — é aceitável se organizar a certificação correcta, e não apenas colocar o seu carimbo'
        ] },
        { kind: 'warning', text: 'Um carimbo de «certified translation» de uma agência privada sem Notário/advogado/solicitador/Câmara/Consulado pode não ser aceite pela AIMA ou pela Conservatória. Antes de pagar, peça um exemplo do pacote final.' }
      ]
    },
    {
      id: 'when-needed',
      title: 'Quando a tradução é necessária para visto e AIMA',
      content: [
        { kind: 'paragraph', text: 'A regra prática é: se o documento não estiver em português e não tiver sido emitido por uma entidade portuguesa, prepare uma tradução. Mesmo que um determinado funcionário da AIMA aceite inglês, outro balcão pode pedir português.' },
        { kind: 'checklist', items: [
          'Certidão de nascimento para Reagrupamento Familiar, nacionalidade, Conservatória',
          'Certidão de casamento ou divórcio',
          'Certificado de registo criminal para visto ou autorização de residência',
          'Comprovativos de rendimentos, pensão, antiguidade laboral',
          'Diplomas, suplementos ao diploma, documentos escolares',
          'Decisões judiciais, procurações, autorizações parentais',
          'Declarações bancárias e documentos fiscais, se não estiverem em português/inglês e forem expressamente pedidos',
          'Documentos para IMT, troca de carta de condução, se o país emissor exigir tradução'
        ] },
        { kind: 'paragraph', text: 'Para um visto no consulado de Portugal fora do país, os requisitos podem diferir dos requisitos da AIMA dentro de Portugal. O consulado pode aceitar uma tradução para a língua do país de submissão ou para inglês, mas para a posterior autorização de residência na AIMA é mais seguro ter uma tradução certificada em português.' }
      ]
    },
    {
      id: 'apostille-first',
      title: 'Ordem: apostila → tradução → certificação',
      content: [
        { kind: 'paragraph', text: 'Para documentos de países da Convenção da Haia, normalmente coloca-se primeiro a Apostila de Haia no país emissor e depois traduz-se todo o documento juntamente com a apostila. Se traduzir apenas o certificado principal sem a apostila, a AIMA ou a Conservatória pode pedir que refaça.' },
        { kind: 'checklist', items: [
          'Obtenha um original recente do documento: para o certificado de registo criminal, normalmente exigem actualidade de 90 dias, salvo se a entidade indicar outro prazo',
          'Coloque a apostille no país emissor, se o documento se destinar a Portugal',
          'Digitalize todas as páginas: o próprio documento, verso, código QR, carimbos, apostila, anexos',
          'Envie ao tradutor precisamente a digitalização do documento final com apostila',
          'Peça a tradução de selos, carimbos, anotações manuscritas e QR/número da apostila',
          'Verifique a transliteração do nome: deve coincidir com o passaporte e com o registo na AIMA',
          'No final, receba a tradução + declaração/certificação + cópia do documento de origem, cosidas ou reunidas num único pacote',
          'Para submissões online, guarde o PDF de todo o pacote, e não apenas o texto da tradução'
        ] },
        { kind: 'warning', text: 'Não plastifique os originais e não destaque a apostila. Se a apostila estiver anexada ao documento, todo o conjunto é traduzido como um documento único.' }
      ]
    },
    {
      id: 'where-to-find',
      title: 'Onde procurar um tradutor e como verificar',
      content: [
        { kind: 'paragraph', text: 'Não procure apenas «tradutor russo Portugal», mas sim um prestador que indique claramente de que forma certifica a tradução: Notário, advogado, solicitador, Câmara de Comércio e Indústria Portuguesa ou Consulado. Para a AIMA, a certificação correcta é mais importante do que um papel timbrado bonito.' },
        { kind: 'checklist', items: [
          'Pergunte: «O documento final é tradução certificada para AIMA?»',
          'Confirme quem certifica: Notário, advogado, solicitador, CCIP ou Consulado',
          'Peça o preço por página e o preço da certificação em separado',
          'Verifique se o IVA 23% está incluído no preço',
          'Confirme o prazo: normal, urgente 24–48 horas, entrega por CTT/courier',
          'Peça para traduzir a partir do original/digitalização com apostila, e não a partir de uma fotografia incompleta',
          'Verifique a experiência especificamente com AIMA, Conservatória ou vistos consulares D1–D8',
          'Peça o PDF antes da emissão física, para verificar nomes, datas e números',
          'Não pague 100% a uma pessoa privada desconhecida sem recibo/fatura ou um contrato claro'
        ] },
        { kind: 'paragraph', text: 'A Câmara de Comércio e Indústria Portuguesa / CCIP é uma das vias claras para traduções certificadas em Lisboa. O serviço é pago; os prazos e o formato devem ser confirmados para a língua e o documento concretos.' }
      ]
    },
    {
      id: 'prices-turnaround',
      title: 'Preços e prazos em 2026',
      content: [
        { kind: 'paragraph', text: 'O mercado depende muito da língua. Russo, ucraniano, inglês e espanhol costumam ser mais baratos e rápidos; línguas raras são mais caras. A AIMA não fixa tarifas de tradutores — trata-se de um serviço privado acrescido de certificação notarial/jurídica.' },
        { kind: 'checklist', items: [
          '1 página de documento simples: normalmente 20–45 € pela tradução',
          'Certidão de nascimento/casamento com apostila: frequentemente 55–100 € pelo pacote completo',
          'Certificado de registo criminal com apostila: frequentemente 60–120 €',
          'Diploma + suplemento: normalmente 80–200 €+, depende do número de páginas',
          'Certificação notarial ou jurídica: frequentemente 20–40 € por documento/assinatura',
          'Urgência 24–48 horas: normalmente +30–100% ao preço',
          'Entrega em papel em Portugal: CTT/courier normalmente 5–15 €',
          'A digitalização em PDF é frequentemente dada gratuitamente, mas para AIMA/Conservatória podem pedir o original em papel da tradução certificada'
        ] },
        { kind: 'warning', text: 'Se o preço for «10 € por documento com certificação», verifique se não se trata de tradução automática com carimbo da agência. Um erro no nome, na data de nascimento ou no número do passaporte pode custar uma nova marcação na AIMA e meses de espera.' }
      ]
    },
    {
      id: 'final-check',
      title: 'Verificação antes da submissão na AIMA ou no consulado',
      content: [
        { kind: 'paragraph', text: 'Antes da submissão, verifique a tradução como um documento jurídico. O funcionário da AIMA não é obrigado a adivinhar que Ivanov/Ivanov/Ivanoff são a mesma pessoa, se no pacote não houver correspondência com o passaporte.' },
        { kind: 'checklist', items: [
          'Nome e apelido coincidem com o passaporte em caracteres latinos',
          'Data de nascimento, local de nascimento, nomes dos pais sem erros',
          'Número do passaporte, número do documento, número da apostila estão legíveis e traduzidos',
          'Todos os selos e carimbos estão descritos na tradução',
          'Existe uma frase sobre a conformidade da tradução com o original/cópia',
          'Existe assinatura do tradutor ou do requerente da tradução, certificada por uma pessoa competente',
          'Existem dados do Notário/advogado/solicitador/Câmara/Consulado',
          'A tradução e a cópia do documento de origem estão fisicamente ligadas ou inequivocamente associadas',
          'O documento não expirou à data da submissão: em especial o certificado de registo criminal',
          'Você tem o PDF e o original em papel da tradução certificada'
        ] },
        { kind: 'paragraph', text: 'Se a AIMA pedir «tradução certificada», não discuta a terminologia «juramentado». Na prática, precisa de uma tradução certificada por uma das formas reconhecidas.' }
      ]
    }
  ],
  costs: [
    { label: 'Tradução de 1 página de um documento padrão', amountEURMin: 20, amountEURMax: 45, note: 'Sem urgência; o preço depende da língua e da complexidade' },
    { label: 'Certidão/certificado de 1–3 páginas com apostila e certificação', amountEURMin: 55, amountEURMax: 120, note: 'Pacote completo típico para AIMA ou visto' },
    { label: 'Tradução urgente em 24–48 horas', amountEURMin: 80, amountEURMax: 180, note: 'Normalmente inclui sobretaxa de urgência e certificação' },
    { label: 'Certificação notarial/jurídica da tradução', amountEURMin: 20, amountEURMax: 40, note: 'Frequentemente cobrada separadamente da tradução; o IVA pode não estar incluído' }
  ],
  sources: [
    {
      title: 'Justiça.gov.pt — informação sobre notariado e certificação de documentos',
      url: 'https://justica.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara de Comércio e Indústria Portuguesa / CCIP — serviços de traduções e certificação',
      url: 'https://www.ccip.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'AIMA — serviços e documentação para autorização de residência',
      url: 'https://aima.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Procuradoria-Geral da República — Apostila de Haia em Portugal',
      url: 'https://www.ministeriopublico.pt/perguntas-frequentes/servico-apostilas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
