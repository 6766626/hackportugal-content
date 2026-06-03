export default {
  editorialVoice: 'hackportugal',
  id: 'rent-dispute-bna-julgados',
  categoryId: 'housing_rent',
  title: 'Litígio com o senhorio: DECO, Julgados de Paz, BNA',
  tldr: 'Em Portugal, um litígio com o senhorio deve ser escalado por etapas: reclamação escrita → DECO/mediação → Julgados de Paz, se o valor for até 15 000 € e não se tratar de despejo → tribunal. O BNA não é um serviço de reclamações: na maioria das vezes, os inquilinos contactam com ele através do Procedimento Especial de Despejo, mas através do BNA também existe a Injunção em Matéria de Arrendamento para determinados pedidos do inquilino ou do senhorio previstos na lei. Para uma reclamação comum sobre caução ou um conflito doméstico, não é uma via universal. Se recebeu uma notificação do BNA, os prazos são curtos: normalmente 15 dias para oposição, sendo melhor contactar imediatamente um advogado.',
  tags: ['arrendamento', 'bna', 'julgados', 'deco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map',
      title: 'Mapa de escalada: onde ir consoante o litígio',
      content: [
        { kind: 'paragraph', text: 'Não comece pela polícia ou pelo BNA se o litígio for sobre reparações, caução, aumento da renda ou retenções ilegais. Em Portugal, os registos escritos são importantes: email, carta registada com aviso de receção, recibos de renda, fotografias, orçamento de um técnico.' },
        { kind: 'checklist', items: [
          'A caução não é devolvida — primeiro pedido escrito, depois DECO/mediação ou Julgados de Paz, se o valor for até 15 000 €.',
          'O senhorio não faz uma reparação urgente — notificação escrita com prazo, depois Julgados de Paz ou Tribunal Judicial; se houver risco para a saúde, também Câmara Municipal.',
          'Aumento ilegal da renda — para a atualização anual normal em 2026 use o coeficiente oficial de 2026 (1,0224, ou seja, 2,24%), publicado pelo INE no Diário da República; não o confunda com os 2,16% de 2025. O coeficiente muda todos os anos — verifique o Aviso do INE para o ano em causa.',
          'O senhorio entra sem autorização — proibição por escrito; em caso de ameaças ou arrombamento, chame a PSP/GNR.',
          'Notificação de cessação do contrato — verifique a forma, o prazo e o fundamento; não saia apenas por causa de um pedido verbal.',
          'Recebeu uma carta do BNA ou de um agente de execução — já é um procedimento de despejo; os prazos são curtos, é necessária oposição através de jurista.',
          'O valor do litígio é superior a 15 000 € ou o litígio é complexo — normalmente Tribunal Judicial, não Julgados de Paz.',
          'O despejo enquanto pedido não é apreciado pelos Julgados de Paz: para despejo usa-se o BNA ou o tribunal.'
        ] },
        { kind: 'warning', text: 'Não retenha a última renda “por conta da caução” sem verificação jurídica. Isto dá muitas vezes ao senhorio um argumento formal de atraso no pagamento.' }
      ]
    },
    {
      id: 'direct-letter',
      title: 'Passo 1 — reclamação escrita ao senhorio',
      content: [
        { kind: 'paragraph', text: 'Acordos verbais no WhatsApp são úteis como contexto, mas para um litígio são necessárias comunicações formais. Envie um email e, se a questão for monetária ou urgente, uma carta registada com aviso de receção para a morada do senhorio indicada no contrato ou na correspondência oficial mais recente.' },
        { kind: 'checklist', items: [
          'Indique o número do contrato, a morada do apartamento e a data de início do arrendamento.',
          'Descreva o facto: “infiltração na cozinha desde 10.03.2026”, “caução de 1 840 € não devolvida”.',
          'Anexe provas: fotografias, vídeos, recibos de renda, comprovativos Multibanco/MB WAY, orçamento, relatório técnico.',
          'Defina um prazo razoável: 5–10 dias úteis para resposta, menos apenas em caso de avaria urgente.',
          'Quanto a reparações, escreva separadamente se o defeito impede a habitação normal ou cria risco para a saúde.',
          'Quanto à caução, peça a discriminação das retenções e cópias das faturas de reparação.',
          'Quanto ao aumento da renda, invoque o coeficiente oficial de 2026 (1,0224, ou seja, 2,24%) e não os 2,16% de 2025; tenha presente que a percentagem muda todos os anos e deve ser verificada no Aviso do INE/Diário da República desse ano.',
          'Guarde o proof of delivery, capturas de ecrã e ficheiros enviados em PDF.'
        ] },
        { kind: 'paragraph', text: 'A formulação deve ser calma: o objetivo é mostrar que deu ao senhorio a oportunidade de corrigir a violação. Isto será útil na DECO, nos Julgados de Paz ou em tribunal.' }
      ]
    },
    {
      id: 'deco-mediation',
      title: 'Passo 2 — DECO e mediação antes do tribunal',
      content: [
        { kind: 'paragraph', text: 'A DECO é útil como filtro inicial: ajuda a verificar o contrato, redigir uma carta, avaliar a legalidade de um aumento da renda, da retenção da caução ou da recusa de reparação. Não é um tribunal estatal nem um órgão de execução coerciva: uma decisão da DECO, por si só, não obriga o senhorio a pagar.' },
        { kind: 'checklist', items: [
          'Prepare o contrato de arrendamento e todos os aditamentos.',
          'Descarregue os recibos de renda do Portal das Finanças, se o senhorio os emitir eletronicamente.',
          'Reúna proof of payment: transferências bancárias, Multibanco, MB WAY, recibos.',
          'Faça uma cronologia: data do problema → primeira mensagem → resposta → nova reclamação.',
          'Calcule separadamente o valor do pedido: caução, despesas de reparação, renda em excesso, juros, danos.',
          'Peça à DECO para avaliar se o litígio é adequado para os Julgados de Paz ou se é necessário Tribunal Judicial.',
          'Se o senhorio aceitar negociar, registe o resultado por escrito: valor, prazo de pagamento, IBAN, data da reparação.'
        ] },
        { kind: 'warning', text: 'A DECO não substitui um advogado se já recebeu uma notificação do BNA, uma citação judicial ou uma carta de um agente de execução. Nestes casos, a mediação pode chegar tarde.' }
      ]
    },
    {
      id: 'julgados-de-paz',
      title: 'Passo 3 — Julgados de Paz: via rápida até 15 000 €',
      content: [
        { kind: 'paragraph', text: 'Os Julgados de Paz são “tribunais de proximidade” simplificados para pequenos litígios civis. Nos termos da Lei 78/2001, podem apreciar litígios de arrendamento urbano até 15 000 €, exceto ações de despejo propriamente ditas. Casos típicos do inquilino: devolução da caução, pequenos danos, reparação não efetuada, litígio sobre pagamentos.' },
        { kind: 'checklist', items: [
          'Verifique a competência territorial: o Julgado de Paz deve servir o município onde se situa o apartamento ou onde o requerido tem morada.',
          'O valor do pedido deve ser até 15 000 €.',
          'O pedido de despejo não é apresentado aí — é BNA ou Tribunal Judicial.',
          'Um advogado normalmente não é obrigatório, mas é útil em litígios sobre cessação do contrato ou valores elevados.',
          'O processo começa com um requerimento: quem é você, quem é o requerido, factos, valor, provas.',
          'Normalmente é primeiro proposta mediação; se não houver acordo, o processo segue para julgamento.',
          'A decisão do Julgado de Paz tem força de decisão judicial e pode ser executada se a parte vencida não pagar.',
          'A taxa de justiça é normalmente 70 € por processo: em regra é repartida entre as partes; a parte vencida pode pagar mais por decisão.'
        ] },
        { kind: 'paragraph', text: 'É uma boa via se o senhorio ignora as cartas, mas o litígio é simples e documental. Por exemplo: “devolva a caução de 1 840 €, não há retenções nem faturas” é mais forte do que um abstrato “o senhorio é mau”.' }
      ]
    },
    {
      id: 'bna-eviction',
      title: 'Passo 4 — BNA: se já estiver em causa o despejo',
      content: [
        { kind: 'paragraph', text: 'BNA — Balcão Nacional do Arrendamento. É um canal eletrónico do Ministério da Justiça sobretudo para o Procedimento Especial de Despejo, bem como para a Injunção em Matéria de Arrendamento em casos especiais. Não é um serviço geral de proteção dos inquilinos nem um local para uma «reclamação» comum. Normalmente é utilizado pelo senhorio quando pretende cessar o contrato e recuperar o imóvel: por exemplo, por falta de pagamento da renda, termo do contrato ou cessação válida.' },
        { kind: 'checklist', items: [
          'Para o Procedimento Especial de Despejo são necessários fundamentos e documentos formais: contrato escrito, notificações, provas da dívida ou da cessação do contrato. Para a Injunção em Matéria de Arrendamento aplicam-se fundamentos e provas distintos, por exemplo relativos a determinados defeitos ou riscos da habitação.',
          'Se o senhorio não registou o contrato nas Finanças, isso pode complicar-lhe o procedimento, mas nem sempre “salva” o inquilino.',
          'Após a notificação, o inquilino tem normalmente 15 dias para oposição; o silêncio pode conduzir à emissão de título de desocupação.',
          'A oposição deve ser juridicamente fundamentada: notificação incorreta, dívida já paga, valor incorreto, cessação inválida, violação de prazos.',
          'Se for apresentada oposição, o processo normalmente transita para o Tribunal Judicial.',
          'Se houver risco de despejo, não se limite à DECO: contacte um advogado ou peça apoio judiciário através da Segurança Social, se o rendimento for baixo.',
          'Não ignore cartas, mesmo que tenham chegado a uma morada antiga ou que não compreenda o texto em português.'
        ] },
        { kind: 'warning', text: 'O despejo de facto sem procedimento legal — troca de fechaduras, corte de água/eletricidade, remoção de bens — é ilegal. Nessa situação, chame a PSP/GNR, registe provas e contacte urgentemente um advogado.' }
      ]
    },
    {
      id: 'evidence-and-tactics',
      title: 'O que preparar com antecedência',
      content: [
        { kind: 'paragraph', text: 'Nos litígios de arrendamento, não ganha quem se queixa mais alto, mas quem tem uma pasta de provas bem organizada. Prepare-a antes da consulta: poupa dinheiro e reduz o risco de perder um prazo.' },
        { kind: 'checklist', items: [
          'Contrato de arrendamento, aditamentos, inventário do mobiliário, auto de entrega das chaves.',
          'NIF do senhorio, morada para notificações, IBAN, nome da empresa gestora, se existir.',
          'Todos os recibos de renda e proof of payment por mês.',
          'Cartas sobre aumento da renda, cessação, reparações, visitas, caução.',
          'Fotografias/vídeos com datas: defeitos, bolor, infiltrações, danos à entrada e à saída.',
          'Orçamentos e faturas de técnicos; não pague reparações grandes sem consentimento escrito, salvo avaria urgente.',
          'Testemunhas: vizinhos, técnicos, antigos moradores; anote nomes e contactos.',
          'Cronologia de 1 página: datas, eventos, valores, ligações para as provas.',
          'Cálculo do pedido em €: capital, juros, despesas, valores já pagos.'
        ] },
        { kind: 'paragraph', text: 'Se o litígio estiver relacionado com habitação insegura — bolor, risco elétrico, colapso, esgotos — pode contactar paralelamente a Câmara Municipal. A vistoria municipal não substitui uma ação pecuniária, mas um relatório oficial reforça a posição.' }
      ]
    }
  ],
  costs: [
    { label: 'Carta registada com aviso de receção', amountEURMin: 3, amountEURMax: 6, note: 'Depende do peso e do serviço CTT; é necessária como prova de entrega.' },
    { label: 'Julgados de Paz', amountEUR: 70, note: 'Taxa de justiça padrão por processo; normalmente é repartida entre as partes, mas a parte vencida pode pagar mais.' },
    { label: 'Consulta de advogado sobre arrendamento', amountEURMin: 60, amountEURMax: 150, note: 'Valor indicativo para uma primeira consulta; em Lisboa e em caso de BNA urgente pode ser mais caro.' },
    { label: 'Apoio judiciário', amountEUR: 0, note: 'Apoio jurídico gratuito ou parcialmente gratuito através da Segurança Social para rendimentos baixos; a decisão não é imediata.' }
  ],
  sources: [
    { title: 'Balcão Nacional do Arrendamento — portal oficial do BNA', url: 'https://www.bna.mj.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz — competência, contactos e informação para cidadãos', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001 — organização, competência e funcionamento dos Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34480075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 6/2006 — Novo Regime do Arrendamento Urbano e procedimentos de cessação do arrendamento', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34515375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
