export default {
  editorialVoice: 'hackportugal',
  id: 'eviction-tenant-protections',
  categoryId: 'housing_rent',
  title: 'Proteção do arrendatário em caso de despejo: BNA, denúncia e oposição à renovação',
  tldr: 'Em Portugal, o landlord não pode simplesmente mudar as fechaduras: o despejo segue por tribunal ou pelo Balcão Nacional do Arrendamento (BNA).\n\nSe recebeu uma denúncia, oposição à renovação ou uma notificação do BNA, o prazo principal é normalmente de 15 dias para oposição no BNA e 30 dias para respostas sobre “rendas antigas”. Em 2026, aplicam-se a Lei 6/2006 (NRAU) e as regras do Código Civil: verifique o prazo de aviso, o fundamento, a forma da carta e as proteções para pessoas com 65+, incapacidade ≥60% e contratos antigos.',
  tags: ['arrendamento', 'bna', 'despejo', 'denúncia'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-arrived',
      title: '1. Perceber exatamente o que lhe enviaram',
      content: [
        { kind: 'paragraph', text: 'No arrendamento habitacional em Portugal existem vários “papéis” diferentes que os expatriados muitas vezes chamam simplesmente de “despejo”. As consequências jurídicas são diferentes: uma simples carta do landlord ainda não equivale a um despejo imediato.' },
        { kind: 'checklist', items: [
          'Oposição à renovação — o landlord não quer renovar um contrato com prazo certo no fim do prazo.',
          'Denúncia — cessação de contrato sem prazo fixo ou com fundamento especial, por exemplo para habitação própria do landlord ou obras profundas.',
          'Resolução — cessação por incumprimento, mais frequentemente por dívida de rendas.',
          'Comunicação para desocupação — exigência de desocupar a habitação após o termo do contrato.',
          'Notificação do BNA — já foi iniciado um procedimento especial de despejo; isto não é um “aviso”, mas sim um processo de despejo.',
          'Carta de advogado/solicitador do landlord — é importante, mas por si só não dá o direito de mudar as fechaduras.',
          'Mensagem verbal no WhatsApp “saia dentro de um mês” — normalmente é insuficiente para a cessação legal do arrendamento.'
        ] },
        { kind: 'warning', text: 'Não ignore cartas registadas. Em Portugal, o prazo muitas vezes começa a contar a partir da receção da carta ou do momento em que esta se considera entregue segundo as regras da notificação postal, mesmo que você não a tenha levantado.' }
      ]
    },
    {
      id: 'check-validity',
      title: '2. Verificar a legalidade da denúncia ou da oposição à renovação',
      content: [
        { kind: 'paragraph', text: 'Para contratos com prazo certo, o landlord normalmente usa a oposição à renovação. Para contratos de duração indeterminada — denúncia nos termos do Código Civil art. 1101. Um erro no prazo, no fundamento ou na forma da notificação pode dar ao arrendatário uma posição forte para responder e apresentar oposição.' },
        { kind: 'checklist', items: [
          'Verifique o tipo de contrato: prazo certo, duração indeterminada ou contrato antigo anterior ao NRAU.',
          'Verifique a data de início, a data de fim do período em curso e as renovações automáticas.',
          'Para contrato com prazo certo, o landlord deve respeitar os prazos de aviso do Código Civil art. 1097: 240 dias, se o prazo do contrato ou da renovação for ≥6 anos; 120 dias, se for de 1 a 6 anos; 60 dias, se for de 6 meses a 1 ano; 1/3 do prazo, se for inferior a 6 meses.',
          'Normalmente, a oposição do landlord à primeira renovação só produz efeito depois de 3 anos desde o início do contrato, mesmo que o contrato indique um prazo de 1 ano; há exceções, por exemplo a necessidade de habitação para o landlord ou para os seus filhos.',
          'Para contrato de duração indeterminada, a denúncia pelo landlord é possível pelos fundamentos do Código Civil art. 1101: habitação própria do landlord ou dos seus descendentes em 1.º grau, demolição/reconstrução profunda, ou aviso mínimo de 5 anos.',
          'Se o fundamento for habitação própria do landlord, verifique se isso está indicado por escrito e se foram cumpridos os requisitos do art. 1102.',
          'Se o fundamento for obras profundas ou demolição, o landlord normalmente deve comprovar licenças/documentos municipais e cumprir o art. 1103.',
          'A notificação deve ser escrita e enviada por meio adequado: carta registada com aviso de receção, notificação avulsa ou outro canal legal.',
          'Confirme a morada, os nomes de todos os tenants, NIF, descrição do imóvel e assinatura do landlord/representante autorizado.',
          'Guarde o envelope, aviso de receção, capturas de ecrã do tracking CTT e uma cópia do contrato.'
        ] },
        { kind: 'warning', text: 'A cláusula contratual “o landlord pode despejar em 30 dias” não afasta as normas imperativas da Lei 6/2006 e do Código Civil. Essas cláusulas muitas vezes não funcionam contra o arrendatário habitacional.' }
      ]
    },
    {
      id: 'bna-process',
      title: '3. Se recebeu uma notificação do BNA: 15 dias é o prazo crítico',
      content: [
        { kind: 'paragraph', text: 'O Balcão Nacional do Arrendamento (BNA) é um mecanismo eletrónico para o procedimento especial de despejo. O landlord recorre a ele quando considera que o contrato já cessou legalmente e que o tenant não desocupou a habitação. O BNA não “verifica tudo por si”: se o tenant ficar em silêncio, o processo pode avançar rapidamente para título de desocupação.' },
        { kind: 'checklist', items: [
          'Encontre imediatamente a data de receção da notificação BNA.',
          'Normalmente, o tenant tem 15 dias para apresentar oposição.',
          'Se não apresentar oposição, o BNA pode emitir título para desocupação do locado.',
          'Se apresentar oposição, o processo normalmente segue para tribunal, onde são verificados a dívida, o prazo, os fundamentos e os documentos.',
          'Em caso de disputa sobre dívida de rendas, prepare recibos, transferências bancárias, MB WAY, Multibanco e correspondência.',
          'Se o landlord não emitia recibos eletrónicos, isso não elimina a sua obrigação de pagar, mas pode ajudar a demonstrar má-fé do landlord.',
          'Se a dívida existir realmente, discuta urgentemente com advogado a possibilidade de pagamento, acordo ou depósito, porque em caso de rendas em atraso a proteção é mais fraca.',
          'Não saia “sob pressão” se não compreende as consequências: a entrega das chaves pode parecer uma desocupação voluntária.',
          'Para oposição, é melhor recorrer a advogado ou solicitador; se tiver baixos rendimentos, peça apoio judiciário na Segurança Social.'
        ] },
        { kind: 'warning', text: 'Se recebeu notificação do BNA, não perca uma semana em correspondência com o landlord. Em paralelo, procure imediatamente advogado/solicitador: 15 dias passam depressa, sobretudo se a carta tiver sido recebida antes de fins de semana ou feriados.' }
      ]
    },
    {
      id: 'old-rents-vulnerable',
      title: '4. Contratos antigos e tenants vulneráveis: rendas antigas',
      content: [
        { kind: 'paragraph', text: 'Rendas antigas são, sobretudo, antigos residential leases, normalmente anteriores ao RAU/NRAU, em que a transição para o novo regime da Lei 6/2006 é limitada por garantias sociais. Para expatriados isto é raro, mas é importante ao comprar “direito ao arrendamento”, ao herdar a residência de familiares ou em arrendamento de longa duração no parque habitacional antigo de Lisboa/Porto.' },
        { kind: 'checklist', items: [
          'Se o contrato de arrendamento habitacional for antigo, não aceite verbalmente um “novo contrato padrão” sem verificação: pode perder a proteção.',
          'Estatutos-chave de proteção: idade ≥65 anos, deficiência com grau de incapacidade ≥60%, baixo RABC do agregado familiar e algumas situações de residência prolongada.',
          'A proposta do landlord para transitar o contrato para o NRAU ou aumentar as rendas deve ser respondida por escrito; para vários estatutos protegidos, o prazo de 30 dias é importante.',
          'Anexe comprovativos: Cartão de Cidadão/passaporte, certificado multiusos de incapacidade, documentos da AT/Finanças sobre rendimentos, composição do agregado familiar.',
          'Se o tenant 65+ ou com incapacidade ≥60% vive no imóvel há muito tempo, o landlord normalmente não pode simplesmente “não renovar” com fundamentos gerais; as exceções são complexas e estão mais frequentemente ligadas a obras importantes ou regimes especiais.',
          'Não assine adenda com novo prazo, nova renda ou renúncia ao estatuto antigo antes de obter aconselhamento.',
          'Se o landlord exigir numerário sem recibo, pague de forma rastreável ou exija recibo: a prova de pagamento é crítica no BNA.'
        ] },
        { kind: 'warning', text: 'As proteções das rendas antigas são técnicas e dependem da data do contrato, idade, rendimento e correspondência. Um erro na primeira resposta ao landlord pode sair muito caro; obtenha aconselhamento antes de enviar a carta.' }
      ]
    },
    {
      id: 'illegal-eviction',
      title: '5. O que fazer perante pressão ilegal ou mudança de fechaduras',
      content: [
        { kind: 'paragraph', text: 'Mesmo que o contrato tenha cessado, o landlord não tem o direito de retirar bens por sua conta, cortar água/eletricidade, mudar fechaduras ou ameaçar. O despejo efetivo é executado através de procedimento legal, não por “autotutela”.' },
        { kind: 'checklist', items: [
          'Se as fechaduras foram mudadas — chame a PSP/GNR e registe a ocorrência.',
          'Faça vídeos da porta, contadores, bens, correspondência e testemunhas.',
          'Não use força contra o landlord; o seu objetivo é obter provas e restabelecer o acesso por canais legais.',
          'Se utilities foram cortadas, peça ao fornecedor confirmação de quem iniciou o corte e quando.',
          'Escreva ao landlord de forma curta e por escrito: exige a reposição imediata do acesso e a cessação dos atos ilegais.',
          'Reúna provas de residência: contrato, recibos, faturas, correspondência, matrícula dos filhos, número de utente na morada.',
          'Procure advogado para providência cautelar ou outro meio judicial urgente.',
          'Se houver ameaças, perseguição ou violência — apresente queixa separada na polícia.'
        ] },
        { kind: 'warning', text: 'Não aceite “dinheiro pelas chaves” sem acordo escrito: montante, data de saída, devolução da caução, estado da habitação, quem paga utilities e renúncia a futuras reclamações devem ficar registados.' }
      ]
    },
    {
      id: 'response-plan',
      title: '6. Plano prático para as primeiras 48 horas',
      content: [
        { kind: 'substeps', items: [
          { id: 'hour-1', title: 'Primeira hora', content: [
            { kind: 'checklist', items: [
              'Fotografe a carta, o envelope e o aviso de receção.',
              'Anote a data da receção efetiva.',
              'Encontre o contrato de arrendamento e todas as adendas.',
              'Descarregue os recibos de renda do Portal das Finanças, se existirem.',
              'Guarde os pagamentos bancários dos últimos 12–24 meses.'
            ] }
          ] },
          { id: 'day-1', title: 'Primeiro dia', content: [
            { kind: 'checklist', items: [
              'Compare o prazo de aviso com o Código Civil art. 1097, 1098, 1101–1103.',
              'Verifique se existe dívida e a que meses se refere.',
              'Escreva uma cronologia: quando entrou, o que pagou, que cartas recebeu.',
              'Não envie uma resposta emocional ao landlord no WhatsApp.',
              'Marque consulta com advogado/solicitador; se tiver baixos rendimentos — peça apoio judiciário.'
            ] }
          ] },
          { id: 'day-2', title: 'Segundo dia', content: [
            { kind: 'checklist', items: [
              'Prepare uma resposta escrita ou oposição, se o prazo já estiver a contar.',
              'Se for necessária tradução de documentos, encomende-a imediatamente.',
              'Se o landlord estiver disponível para acordo, exija uma minuta por escrito.',
              'Se chegou BNA — a prioridade é a oposição, não as negociações.',
              'Faça um plano de reserva para habitação, mas não desocupe o imóvel sem compreender as consequências legais.'
            ] }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apoio judiciário através da Segurança Social', amountEUR: 0, note: 'Para agregados familiares com baixos rendimentos; pode cobrir advogado e custas judiciais.' },
    { label: 'Consulta inicial com advogado sobre arrendamento', amountEURMin: 80, amountEURMax: 200, note: 'Intervalo de mercado em Lisboa/Porto em 2026; uma BNA-oposição urgente pode custar mais.' },
    { label: 'Cartas registadas CTT com aviso de receção', amountEURMin: 4, amountEURMax: 8, note: 'Depende do peso e do serviço; use para respostas comprováveis ao landlord.' }
  ],
  sources: [
    { title: 'Balcão Nacional do Arrendamento — portal oficial do BNA', url: 'https://bna.mj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 6/2006 — NRAU, legislação consolidada', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34468375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — regras de arrendamento urbano, legislação consolidada', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — proteção jurídica / apoio judiciário', url: 'https://www.seg-social.pt/protecao-juridica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
