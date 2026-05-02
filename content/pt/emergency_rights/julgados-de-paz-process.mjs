export default {
  editorialVoice: 'hackportugal',
  id: 'julgados-de-paz-process',
  categoryId: 'emergency_rights',
  title: 'Julgados de Paz: tribunal de proximidade para litígios até 15 000 €',
  tldr: 'Os Julgados de Paz são tribunais cíveis rápidos para litígios de menor valor até 15 000 €: reclamações de consumo, contratos, dívidas, condomínio, conflitos de vizinhança e patrimoniais. A taxa inicial é normalmente de 35 € por requerente; a taxa única total é de 70 €. O processo é mediation-first: primeiro é proposta a mediação, depois há audiência perante o juiz de paz. Não são adequados para processos de família, sucessões, trabalho, crime, insolvência ou despejo. Só funcionam nos territórios onde existe Julgado de Paz.',
  tags: ['julgados', 'tribunal', 'litígios', 'mediação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é um Julgado de Paz',
      content: [
        { kind: 'paragraph', text: 'Os Julgados de Paz são tribunais especiais para litígios cíveis simples de pequeno e médio valor. São regulados pela Lei 78/2001 e funcionam em paralelo com os tribunais judiciais comuns. O objectivo é resolver conflitos de forma rápida, barata e menos formal.' },
        { kind: 'paragraph', text: 'O limite principal em 2026: o valor da acção não pode exceder 15 000 €. Isto não é uma “consulta” nem uma queixa à polícia: a decisão do juiz de paz tem força de decisão judicial e pode ser executada coercivamente se a parte vencida não pagar.' },
        { kind: 'checklist', items: [
          'dívida típica resultante de contrato ou serviço não pago',
          'litígio de consumo com vendedor ou prestador de serviço',
          'conflito relativo a prestação de serviços: reparação, entrega, obras',
          'litígios de condomínio: quotas, utilização das partes comuns, pequenos danos',
          'conflitos de vizinhança: ruído, vedação, limites, árvores, passagem',
          'responsabilidade civil por danos em bens',
          'litígios sobre bens móveis e pequenas pretensões patrimoniais',
          'algumas questões de arrendamento, se não forem despejo'
        ] }
      ]
    },
    {
      id: 'excluded-cases',
      title: 'O que não pode ser apresentado ali',
      content: [
        { kind: 'paragraph', text: 'O Julgado de Paz não substitui todos os tribunais. Se a matéria estiver excluída por lei ou o valor for superior a 15 000 €, o requerimento não será aceite ou o processo seguirá para o tribunal comum.' },
        { kind: 'checklist', items: [
          'processos de família: divórcio, responsabilidades parentais, alimentos',
          'sucessões e partilha da herança',
          'litígios laborais com o empregador',
          'processos-crime e queixas relativas a crimes',
          'litígios fiscais, migratórios e administrativos com o Estado',
          'falência, recuperação de empresas, insolvência',
          'despejo de arrendatário: o despejo segue pelo Balcão do Arrendatário e do Senhorio ou pelo tribunal',
          'processos em que é obrigatório recorrer a um tribunal especializado',
          'acções acima de 15 000 € mesmo que “esteja quase tudo evidente”',
          'territórios sem Julgado de Paz competente — nesse caso é necessário o tribunal judicial'
        ] },
        { kind: 'warning', text: 'Se o litígio com uma empresa estiver relacionado com consumo, verifique também o Centro de Arbitragem de Conflitos de Consumo. Em alguns sectores, a arbitragem pode ser mais rápida ou mais vinculativa para a empresa do que o Julgado de Paz.' }
      ]
    },
    {
      id: 'before-filing',
      title: 'Antes de apresentar: verificar a competência e reunir provas',
      content: [
        { kind: 'paragraph', text: 'Primeiro, verifique se existe Julgado de Paz para o seu concelho e se o local do litígio é adequado. Normalmente são relevantes a morada do requerido, o local de cumprimento do contrato, o local onde se encontra o bem ou o local onde ocorreu o dano.' },
        { kind: 'checklist', items: [
          'NIF, nome e morada do requerente',
          'nome/designação, NIF/NIPC e morada do requerido, se conhecidos',
          'valor do pedido em € e forma como foi calculado',
          'contrato, orçamento, fatura, recibo, correspondência por WhatsApp/email',
          'fotografias dos danos, relatórios, testemunhas, reclamações',
          'comprovativo de pagamento: MB WAY, Multibanco, transferência bancária',
          'pedido escrito à outra parte antes do tribunal, de preferência por email ou carta registada',
          'tradução dos documentos essenciais, se não estiverem em português',
          'IBAN para receber dinheiro, se pedir um pagamento',
          'morada para notificações em Portugal'
        ] },
        { kind: 'warning', text: 'Normalmente não é obrigatório advogado, mas a língua do processo é o português. Se você não fala bem português, prepare antecipadamente um resumo breve dos factos e peça apoio a um intérprete/representante. O tribunal não é obrigado a conduzir o processo em russo ou inglês.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como apresentar o processo',
      content: [
        { kind: 'paragraph', text: 'O processo pode ser iniciado através do serviço ePortugal “Iniciar um processo num Julgado de Paz” ou directamente no Julgado de Paz competente — presencialmente, por escrito ou pelos canais disponíveis nesse tribunal. O formato depende do Julgado de Paz concreto, por isso verifique a página e os contactos antes da visita.' },
        { kind: 'substeps', items: [
          { id: 'identify-court', title: '1. Encontre o Julgado de Paz correcto', content: [
            { kind: 'paragraph', text: 'No site do Conselho dos Julgados de Paz, abra a lista de tribunais e verifique se o seu concelho é abrangido. Se não for, a apresentação faz-se no tribunal judicial comum ou através de arbitragem adequada.' }
          ] },
          { id: 'write-claim', title: '2. Descreva o pedido em linguagem simples', content: [
            { kind: 'paragraph', text: 'Indique: quem deve a quem, o que aconteceu, a data, o valor, as provas e o que exactamente pede: pagar X €, devolver um bem, reparar um defeito, cessar a violação.' }
          ] },
          { id: 'pay-fee', title: '3. Pague a taxa inicial', content: [
            { kind: 'paragraph', text: 'Normalmente, o requerente paga 35 € ao apresentar o processo. A taxa única total do processo é de 70 € e, em regra, é repartida entre as partes; a repartição final depende do resultado do processo.' }
          ] },
          { id: 'wait-notification', title: '4. Aguarde a notificação do requerido', content: [
            { kind: 'paragraph', text: 'O Julgado de Paz notifica o requerido e indica os passos seguintes: mediação, contestação, marcação da audiência. Acompanhe o correio: falhar uma notificação pode prejudicar o processo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'mediation-hearing-decision',
      title: 'Mediação, audiência e decisão',
      content: [
        { kind: 'paragraph', text: 'A lógica dos Julgados de Paz é tentar primeiro uma solução amigável. A mediação é voluntária: se ambas as partes concordarem, o mediador ajuda a formalizar um acordo. Esse acordo pode ter força de decisão judicial após homologação.' },
        { kind: 'checklist', items: [
          'a mediação é mais barata e rápida se o litígio puder ser resolvido com pagamento ou reparação',
          'não aceite promessas verbais sem acordo escrito',
          'no acordo, fixe o valor, o prazo, o IBAN, as prestações e as consequências do atraso',
          'se a mediação falhar, o processo segue para o juiz de paz',
          'na audiência, fale de forma breve: factos, datas, documentos, valor',
          'leve os documentos originais e cópias para o tribunal/para a outra parte',
          'as testemunhas devem ser avisadas com antecedência',
          'a decisão do juiz de paz chama-se sentença e é obrigatória',
          'se a parte não pagar voluntariamente, pode haver processo executivo'
        ] },
        { kind: 'warning', text: 'Nem sempre é possível recorrer. Em regra, isso depende do valor do processo e das condições processuais. Se o valor for significativo para si ou o litígio for juridicamente complexo, mostre os documentos a um advogado ou solicitador antes de apresentar o processo.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos para expatriados',
      content: [
        { kind: 'paragraph', text: 'O Julgado de Paz é útil quando existe um litígio monetário ou patrimonial claro, documentos e a morada do requerido. Funciona mal quando é necessária uma providência cautelar urgente, perícia complexa, litígio com entidade pública ou quando o requerido é desconhecido.' },
        { kind: 'checklist', items: [
          'antes do tribunal, envie à outra parte um ultimato escrito com prazo razoável: 7–15 dias',
          'calcule todos os valores em € e junte o cálculo numa folha separada',
          'guarde capturas de ecrã da correspondência com data, número de telefone/email e contexto',
          'se o requerido for uma empresa, verifique o NIPC e a morada da sede na certidão permanente ou nas faturas',
          'se o litígio for com o senhorio, separe dívida/danos de despejo: despejo não é aqui',
          'se o processo for sobre condomínio, obtenha a ata, o regulamento e o cálculo das quotas',
          'não aumente artificialmente o pedido acima de 15 000 €: o Julgado de Paz perderá competência',
          'se mudar de casa, actualize por escrito a morada para notificações',
          'para ameaças urgentes, violência, furto ou fraude, contacte a PSP/GNR, não o Julgado de Paz'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação pelo requerente', amountEUR: 35, note: 'Normalmente paga no início do processo no Julgado de Paz.' },
    { label: 'Taxa única total do processo', amountEUR: 70, note: 'Em regra, 35 € por cada parte; a repartição final pode depender da decisão.' },
    { label: 'Advogado ou solicitador', amountEURMin: 50, amountEURMax: 250, note: 'Não é obrigatório para a maioria dos processos, mas é útil para verificar o pedido, as provas e o recurso.' }
  ],
  sources: [
    { title: 'ePortugal: iniciar um processo num Julgado de Paz', url: 'https://www2.gov.pt/en/servicos/iniciar-um-processo-num-julgado-de-paz', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz: tribunais, competência e informação', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001: organização, competência e funcionamento dos Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34412675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
