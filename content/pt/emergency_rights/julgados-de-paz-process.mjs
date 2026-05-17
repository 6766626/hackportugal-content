export default {
  editorialVoice: 'hackportugal',
  id: 'julgados-de-paz-process',
  categoryId: 'emergency_rights',
  title: 'Julgados de Paz: tribunal de proximidade para litígios até 15 000 €',
  tldr: 'Os Julgados de Paz são tribunais cíveis rápidos para pequenos litígios até 15 000 €: reclamações de consumo, contratos, dívidas, condomínio, conflitos de vizinhança e patrimoniais. A taxa inicial é normalmente 35 € por requerente; a taxa única total é 70 €. O processo é mediation-first: primeiro é proposta a mediação e depois há audiência com o juiz de paz. Não servem para processos de família, sucessões, trabalho, penais, insolvência ou despejo. Funcionam apenas nos territórios onde existe Julgado de Paz.',
  tags: ['julgados', 'tribunal', 'litígios', 'mediação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é um Julgado de Paz',
      content: [
        { kind: 'paragraph', text: 'Os Julgados de Paz são tribunais especiais para litígios cíveis simples de pequeno e médio valor. São regulados pela Lei 78/2001 e funcionam em paralelo com os tribunais judiciais comuns. O objectivo é uma resolução de conflitos mais rápida, barata e menos formal.' },
        { kind: 'paragraph', text: 'O limite principal em 2026: o valor da acção não pode ser superior a 15 000 €. Não é uma “consulta” nem uma queixa à polícia: a decisão do juiz de paz tem a força de uma decisão judicial e pode ser executada coercivamente se a parte vencida não pagar.' },
        { kind: 'checklist', items: [
          'dívida típica resultante de contrato ou serviço não pago',
          'litígio de consumo com vendedor ou prestador de serviços',
          'conflito relativo a prestação de serviços: reparação, entrega, obras',
          'litígios de condomínio: quotas, utilização de partes comuns, pequenos danos',
          'conflitos de vizinhança: ruído, vedação, limites, árvores, passagem',
          'responsabilidade civil por danos em bens',
          'litígios sobre bens móveis e pequenas pretensões patrimoniais',
          'algumas questões de arrendamento, se não forem despejo'
        ] }
      ]
    },
    {
      id: 'excluded-cases',
      title: 'O que não pode ser apresentado aí',
      content: [
        { kind: 'paragraph', text: 'O Julgado de Paz não substitui todos os tribunais. Se a matéria estiver excluída por lei ou o valor for superior a 15 000 €, o requerimento não será aceite ou o processo seguirá para o tribunal comum.' },
        { kind: 'checklist', items: [
          'processos de família: divórcio, responsabilidades parentais, alimentos',
          'sucessões e partilha da herança',
          'litígios laborais com o empregador',
          'processos penais e queixas-crime',
          'litígios fiscais, migratórios e administrativos com o Estado',
          'falência, recuperação de empresas, insolvência',
          'despejo de arrendatário: o despejo segue pelo Balcão do Arrendatário e do Senhorio ou pelo tribunal',
          'processos em que é obrigatório recorrer a tribunal especializado',
          'acções superiores a 15 000 € mesmo que “quase tudo seja evidente”',
          'territórios sem Julgado de Paz competente — nesse caso é necessário recorrer ao tribunal judicial'
        ] },
        { kind: 'warning', text: 'Se o litígio com uma empresa estiver relacionado com consumo, verifique também o Centro de Arbitragem de Conflitos de Consumo. Para alguns sectores, a arbitragem pode ser mais rápida ou mais vinculativa para a empresa do que o Julgado de Paz.' }
      ]
    },
    {
      id: 'before-filing',
      title: 'Antes de apresentar: verificar a competência e reunir provas',
      content: [
        { kind: 'paragraph', text: 'Primeiro verifique se existe Julgado de Paz para o seu concelho e se o local do litígio é adequado. Normalmente são importantes a morada do requerido, o local de cumprimento do contrato, a localização do bem ou o local onde ocorreu o dano.' },
        { kind: 'checklist', items: [
          'NIF, nome e morada do requerente',
          'nome/denominação, NIF/NIPC e morada do requerido, se conhecidos',
          'valor do pedido em € e a forma como foi calculado',
          'contrato, orçamento, fatura, recibo, correspondência WhatsApp/email',
          'fotografias dos danos, relatórios, testemunhas, reclamações',
          'comprovativo de pagamento: MB WAY, Multibanco, transferência bancária',
          'pedido escrito à outra parte antes do tribunal, de preferência email ou carta registada',
          'tradução dos documentos principais, se não estiverem em português',
          'IBAN para receber o dinheiro, se pedir um pagamento',
          'morada para notificações em Portugal'
        ] },
        { kind: 'warning', text: 'Normalmente não é obrigatório ter advogado, mas a língua do processo é o português. Se não fala bem português, prepare antecipadamente um resumo curto dos factos e peça apoio a um tradutor/representante. O tribunal não é obrigado a conduzir o processo em russo ou inglês.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como apresentar o processo',
      content: [
        { kind: 'paragraph', text: 'O processo pode ser iniciado através do serviço ePortugal “Iniciar um processo num Julgado de Paz” ou directamente no Julgado de Paz competente — presencialmente, por escrito ou através dos canais disponíveis desse tribunal concreto. O formato depende de cada Julgado de Paz, por isso, antes da visita, verifique a página e os contactos.' },
        { kind: 'substeps', items: [
          { id: 'identify-court', title: '1. Encontre o Julgado de Paz correcto', content: [
            { kind: 'paragraph', text: 'No site do Conselho dos Julgados de Paz, abra a lista de tribunais e verifique se o seu concelho é abrangido. Se não for — a apresentação é feita no tribunal judicial comum ou através de arbitragem adequada.' }
          ] },
          { id: 'write-claim', title: '2. Descreva o pedido em linguagem simples', content: [
            { kind: 'paragraph', text: 'Indique: quem deve a quem, o que aconteceu, a data, o valor, as provas e exactamente o que pede: pagar X €, devolver o bem, reparar o defeito, cessar a infracção.' }
          ] },
          { id: 'pay-fee', title: '3. Pague a taxa inicial', content: [
            { kind: 'paragraph', text: 'Normalmente o requerente paga 35 € no momento da apresentação. A taxa única total do processo é 70 € e, regra geral, é repartida entre as partes; a repartição final depende do resultado do processo.' }
          ] },
          { id: 'wait-notification', title: '4. Aguarde a notificação do requerido', content: [
            { kind: 'paragraph', text: 'O Julgado de Paz notifica o requerido e indica os passos seguintes: mediação, contestação, marcação da audiência. Esteja atento ao correio: falhar uma notificação pode prejudicar o processo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'mediation-hearing-decision',
      title: 'Mediação, audiência e decisão',
      content: [
        { kind: 'paragraph', text: 'A lógica dos Julgados de Paz é começar por tentar uma solução amigável. A mediação é voluntária: se ambas as partes concordarem, o mediador ajuda a formalizar um acordo. Esse acordo pode ter a força de uma decisão judicial após homologação.' },
        { kind: 'checklist', items: [
          'a mediação é mais barata e mais rápida se o litígio puder ser resolvido com pagamento ou reparação',
          'não aceite promessas verbais sem acordo escrito',
          'no acordo, fixe o valor, o prazo, o IBAN, o pagamento em prestações e as consequências do incumprimento',
          'se a mediação falhar, o processo segue para o juiz de paz',
          'na audiência, fale de forma breve: factos, datas, documentos, valor',
          'leve os documentos originais e cópias para o tribunal/outra parte',
          'as testemunhas devem ser avisadas com antecedência',
          'a decisão do juiz de paz chama-se sentença e é de cumprimento obrigatório',
          'se a parte não pagar voluntariamente, pode haver processo executivo'
        ] },
        { kind: 'warning', text: 'Nem sempre é possível recorrer. Regra geral, depende do valor do processo e das condições processuais. Se o valor for relevante para si ou o litígio for juridicamente complexo, mostre os documentos a um advogado ou solicitador antes de apresentar o processo.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos para expatriados',
      content: [
        { kind: 'paragraph', text: 'O Julgado de Paz é útil quando existe um litígio monetário ou patrimonial claro, documentos e a morada do requerido. Funciona mal quando é necessária uma providência cautelar urgente, uma perícia complexa, existe litígio com um organismo público ou o requerido é desconhecido.' },
        { kind: 'checklist', items: [
          'antes do tribunal, envie à outra parte um ultimato escrito com prazo razoável: 7–15 dias',
          'calcule todos os valores em € e junte o cálculo numa folha separada',
          'guarde capturas de ecrã da correspondência com data, número de telefone/email e contexto',
          'se o requerido for uma empresa, verifique o NIPC e a morada da sede na certidão permanente ou nas faturas',
          'se o litígio for com o senhorio, separe dívida/danos do despejo: o despejo não é aqui',
          'se o processo for de condomínio, obtenha a ata, o regulamento e o cálculo das quotas',
          'não inflacione o pedido acima de 15 000 €: o Julgado de Paz perde competência',
          'se mudar de casa, actualize por escrito a morada para notificações',
          'para ameaças urgentes, violência, furto ou burla, contacte a PSP/GNR, não o Julgado de Paz'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação pelo requerente', amountEUR: 35, note: 'Normalmente é paga no início do processo no Julgado de Paz.' },
    { label: 'Taxa única total do processo', amountEUR: 70, note: 'Regra geral, 35 € por cada parte; a repartição final pode depender da decisão.' },
    { label: 'Advogado ou solicitador', amountEURMin: 50, amountEURMax: 250, note: 'Não é obrigatório para a maioria dos processos, mas é útil para verificar o pedido, as provas e o recurso.' }
  ],
  sources: [
    { title: 'ePortugal: iniciar um processo num Julgado de Paz', url: 'https://www2.gov.pt/en/servicos/iniciar-um-processo-num-julgado-de-paz', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz: tribunais, competência e informação', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001: organização, competência e funcionamento dos Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34412675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
