export default {
  editorialVoice: 'hackportugal',
  id: 'julgados-de-paz-process',
  categoryId: 'emergency_rights',
  title: 'Julgados de Paz: tribunal de proximidade para litígios até 15 000 €',
  tldr: 'Os Julgados de Paz são tribunais cíveis rápidos para pequenos litígios até 15 000 €: reclamações de consumo, contratos, dívidas, condomínio, conflitos de vizinhança e patrimoniais. A taxa única é paga no fim do processo: 25 € por parte se houver acordo na mediação, ou 70 € pela parte vencida se o juiz decidir.\n\nO processo é mediation-first: primeiro é proposta mediação, depois há audiência perante o juiz de paz. Não servem para processos de família, sucessões, trabalho, crime, insolvência nem despejo. Funcionam apenas nos territórios onde exista Julgado de Paz.',
  tags: ['julgados', 'tribunal', 'litígios', 'mediação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é um Julgado de Paz',
      content: [
        { kind: 'paragraph', text: 'Os Julgados de Paz são tribunais especiais para litígios cíveis simples de pequeno e médio valor. São regulados pela Lei 78/2001 e funcionam em paralelo com os tribunais judiciais comuns. O objectivo é resolver conflitos de forma rápida, barata e menos formal.' },
        { kind: 'paragraph', text: 'O limite principal em 2026: o valor da acção não pode exceder 15 000 €. Isto não é uma “consulta” nem uma queixa à polícia: a decisão do juiz de paz tem força de sentença judicial e pode ser executada coercivamente se a parte vencida não pagar.' },
        { kind: 'checklist', items: [
          'dívida típica resultante de contrato ou serviço não pago',
          'litígio de consumo com vendedor ou prestador de serviços',
          'conflito relativo a prestação de serviços: reparação, entrega, obras',
          'litígios de condomínio: quotas, utilização de partes comuns, pequenos danos',
          'conflitos de vizinhança: ruído, vedação, limites, árvores, passagem',
          'responsabilidade civil por danos em bens',
          'litígios sobre bens móveis e pequenas pretensões patrimoniais',
          'algumas questões de arrendamento, se não se tratar de despejo'
        ] }
      ]
    },
    {
      id: 'excluded-cases',
      title: 'O que não pode ser apresentado aí',
      content: [
        { kind: 'paragraph', text: 'O Julgado de Paz não substitui todos os tribunais. Se a matéria estiver excluída por lei ou o valor exceder 15 000 €, o requerimento não será aceite ou o processo seguirá para o tribunal comum.' },
        { kind: 'checklist', items: [
          'processos de família: divórcio, responsabilidades parentais, pensão de alimentos',
          'sucessões e partilha da herança',
          'litígios laborais com o empregador',
          'processos-crime e queixas relativas a crimes',
          'litígios fiscais, migratórios e administrativos com o Estado',
          'falência, recuperação de empresas, insolvência',
          'despejo de arrendatário: o despejo segue pelo Balcão do Arrendatário e do Senhorio ou pelo tribunal',
          'processos em que é obrigatório recorrer a um tribunal especializado',
          'acções acima de 15 000 €, mesmo que “quase tudo seja óbvio”',
          'territórios sem Julgado de Paz competente — nesse caso é necessário recorrer ao tribunal judicial'
        ] },
        { kind: 'warning', text: 'Se o litígio com uma empresa envolver consumo, verifique também o Centro de Arbitragem de Conflitos de Consumo. Em alguns sectores, a arbitragem pode ser mais rápida ou mais vinculativa para a empresa do que o Julgado de Paz.' }
      ]
    },
    {
      id: 'before-filing',
      title: 'Antes de apresentar: verificar a competência e reunir provas',
      content: [
        { kind: 'paragraph', text: 'Comece por verificar se existe Julgado de Paz para o seu concelho e se o local do litígio é adequado. Normalmente são relevantes a morada do requerido, o local de cumprimento do contrato, o local onde se encontra o bem ou o local onde ocorreu o dano.' },
        { kind: 'checklist', items: [
          'NIF, nome e morada do requerente',
          'nome/denominação, NIF/NIPC e morada do requerido, se conhecidos',
          'valor do pedido em € e forma como foi calculado',
          'contrato, orçamento, fatura, recibo, correspondência por WhatsApp/email',
          'fotografias dos danos, relatórios, testemunhas, reclamações',
          'comprovativo de pagamento: MB WAY, Multibanco, transferência bancária',
          'pedido escrito à outra parte antes de ir a tribunal, de preferência por email ou carta registada',
          'tradução dos documentos essenciais, se não estiverem em português',
          'IBAN para receber dinheiro, se pedir um pagamento',
          'morada para notificações em Portugal'
        ] },
        { kind: 'warning', text: 'Normalmente não é obrigatório advogado, mas a língua do processo é o português. Se não fala bem português, prepare antecipadamente um resumo dos factos e peça apoio a um intérprete/representante. O tribunal não é obrigado a conduzir o processo em russo ou inglês.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como apresentar o processo',
      content: [
        { kind: 'paragraph', text: 'O processo pode ser iniciado através do serviço ePortugal “Iniciar um processo num Julgado de Paz” ou directamente no Julgado de Paz competente — presencialmente, por escrito ou pelos canais disponíveis desse tribunal concreto. O formato depende do Julgado de Paz em causa, por isso confirme a página e os contactos antes da visita.' },
        { kind: 'substeps', items: [
          { id: 'identify-court', title: '1. Encontre o Julgado de Paz correcto', content: [
            { kind: 'paragraph', text: 'No site do Conselho dos Julgados de Paz, abra a lista de tribunais e confirme se o seu concelho é abrangido. Se não for, a apresentação é feita no tribunal judicial comum ou através de arbitragem adequada.' }
          ] },
          { id: 'write-claim', title: '2. Descreva o pedido em linguagem simples', content: [
            { kind: 'paragraph', text: 'Indique: quem deve a quem, o que aconteceu, a data, o valor, as provas e o que pede exactamente: pagar X €, devolver um bem, corrigir um defeito, cessar a infracção.' }
          ] },
          { id: 'pay-fee', title: '3. Tenha em conta a taxa única', content: [
            { kind: 'paragraph', text: 'No momento da apresentação não se paga nada: a taxa é paga no fim do processo por transferência bancária. Se as partes chegarem a acordo na mediação, cada uma paga 25 €. Se o juiz decidir o processo, a taxa única é de 70 €, suportada pela parte vencida (em caso de perda parcial, o juiz reparte o valor proporcionalmente).' }
          ] },
          { id: 'wait-notification', title: '4. Aguarde a notificação do requerido', content: [
            { kind: 'paragraph', text: 'O Julgado de Paz notifica o requerido e propõe a tramitação seguinte: mediação, contestação, marcação de audiência. Esteja atento ao correio: falhar uma notificação pode prejudicar o processo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'mediation-hearing-decision',
      title: 'Mediação, audiência e decisão',
      content: [
        { kind: 'paragraph', text: 'A lógica dos Julgados de Paz é tentar primeiro uma solução amigável. A mediação é voluntária: se ambas as partes concordarem, o mediador ajuda a formalizar um acordo. Esse acordo pode ter força de sentença judicial após homologação.' },
        { kind: 'checklist', items: [
          'a mediação é mais barata e mais rápida: um acordo custa apenas 25 € por parte',
          'não aceite promessas verbais sem acordo escrito',
          'no acordo, fixe o valor, o prazo, o IBAN, o pagamento em prestações e as consequências do atraso',
          'se a mediação falhar, o processo segue para o juiz de paz',
          'na audiência, fale de forma breve: factos, datas, documentos, valor',
          'leve os documentos originais e cópias para o tribunal/outra parte',
          'as testemunhas devem ser avisadas antecipadamente',
          'a decisão do juiz de paz chama-se sentença e é de cumprimento obrigatório',
          'se a parte não pagar voluntariamente, pode haver processo executivo'
        ] },
        { kind: 'warning', text: 'O recurso nem sempre é possível: em regra, só se o valor da causa for superior a 2 500 € e, nessa fase, o advogado passa a ser obrigatório. Se o valor for significativo para si ou o litígio for juridicamente complexo, mostre os documentos a um advogado ou solicitador antes de apresentar o processo.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos para expats',
      content: [
        { kind: 'paragraph', text: 'O Julgado de Paz é útil quando existe um litígio monetário ou patrimonial claro, documentos e a morada do requerido. Funciona mal quando é necessária uma providência urgente, uma perícia complexa, há litígio com um organismo público ou o requerido é desconhecido.' },
        { kind: 'checklist', items: [
          'antes de recorrer ao tribunal, envie à outra parte um ultimato escrito com prazo razoável: 7–15 dias',
          'calcule todos os valores em € e junte o cálculo numa folha separada',
          'guarde capturas de ecrã da correspondência com data, número de telefone/email e contexto',
          'se o requerido for uma empresa, confirme o NIPC e a morada da sede na certidão permanente ou nas faturas',
          'se o litígio for com o senhorio, separe a dívida/dano do despejo: despejo não é aqui',
          'se o processo for sobre condomínio, obtenha a ata, o regulamento e o cálculo das quotas',
          'não aumente artificialmente o pedido acima de 15 000 €: o Julgado de Paz perderá competência',
          'se mudar de casa, actualize por escrito a morada para notificações',
          'em caso de ameaças urgentes, violência, furto ou burla, contacte a PSP/GNR, não o Julgado de Paz'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Acordo na mediação', amountEUR: 25, note: '25 € por cada parte (50 € no total) se o litígio terminar em acordo de mediação.' },
    { label: 'Taxa única se o juiz decidir', amountEUR: 70, note: 'Paga pela parte vencida no fim do processo; em caso de perda parcial, o juiz reparte o valor proporcionalmente.' },
    { label: 'Advogado ou solicitador', amountEURMin: 50, amountEURMax: 250, note: 'Não é obrigatório para a maioria dos processos, mas é útil para verificar o pedido, as provas e o recurso.' }
  ],
  sources: [
    { title: 'ePortugal: iniciar um processo num Julgado de Paz', url: 'https://www2.gov.pt/en/servicos/iniciar-um-processo-num-julgado-de-paz', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz: tribunais, competência e informação', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001: organização, competência e funcionamento dos Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34412675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 342/2019: regime de cobrança das taxas nos Julgados de Paz', url: 'https://files.dre.pt/1s/2019/10/18900/0011900120.pdf', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
