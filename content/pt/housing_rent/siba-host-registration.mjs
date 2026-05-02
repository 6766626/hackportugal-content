export default {
  editorialVoice: 'hackportugal',
  id: 'siba-host-registration',
  categoryId: 'housing_rent',
  title: 'SIBA: registo obrigatório de hóspedes estrangeiros em 3 dias úteis',
  tldr: 'O SIBA é o sistema online de boletins de alojamento: se alojar um estrangeiro em Portugal mediante pagamento — AL, Airbnb, Booking, quartos, guest house, hostel, hotel ou até arrendamento pago de habitação — deve comunicar os dados do hóspede no prazo de 3 dias úteis após a entrada e após a saída. A obrigação decorre da Lei 23/2007, arts. 15–16. A coima por incumprimento é normalmente de 100–500 € para pessoa singular e até 2 000 € para empresa por cada infração.',
  tags: ['siba', 'arrendamento', 'alojamento', 'aima'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-siba',
      title: 'O que é o SIBA e quem é obrigado a submeter',
      content: [
        { kind: 'paragraph', text: 'SIBA significa Sistema de Informação de Boletins de Alojamento. É a submissão eletrónica do boletim de alojamento: uma notificação ao Estado de que um cidadão estrangeiro ficou alojado consigo em alojamento pago.' },
        { kind: 'paragraph', text: 'Após o encerramento do SEF, as funções passaram para a AIMA e outros organismos, mas o nome antigo do portal siba.sef.pt ainda aparece em instruções e entre anfitriões. Para o utilizador, o essencial não mudou: o host pago é obrigado a enviar os dados do hóspede estrangeiro.' },
        { kind: 'checklist', items: [
          'Devem submeter: hotéis, hostels, guest houses, alojamento local (AL), Airbnb, Booking, Expedia e reservas diretas',
          'Devem submeter: proprietários de quartos e apartamentos, se o alojamento for pago',
          'Devem submeter: empresas de gestão imobiliária e property managers',
          'Deve ser submetido por cada hóspede estrangeiro, e não apenas pelo titular principal da reserva',
          'Cidadãos da UE também são considerados estrangeiros para esta obrigação: o critério é não ter cidadania portuguesa',
          'A visita gratuita de amigos ou familiares ao seu próprio apartamento normalmente não é um cenário SIBA, porque não há alojamento a título oneroso',
          'O registo do contrato de arrendamento nas Finanças não substitui o boletim de alojamento se, na prática, você disponibilizar alojamento pago a um estrangeiro'
        ] }
      ]
    },
    {
      id: 'deadlines',
      title: 'Prazo: 3 dias úteis após a entrada e a saída',
      content: [
        { kind: 'paragraph', text: 'A Lei 23/2007, art. 16 exige a comunicação da entrada e da saída do cidadão estrangeiro através de boletim de alojamento. Regra prática para o anfitrião: submeta os dados no SIBA o mais tardar 3 dias úteis após a data de entrada e o mais tardar 3 dias úteis após a data de saída.' },
        { kind: 'checklist', items: [
          'Entrada numa sexta-feira: a contagem faz-se por dias úteis; sábado e domingo normalmente não contam',
          'Os feriados nacionais em Portugal não contam como dias úteis',
          'Se o hóspede chegou a 1 de abril de 2026 e esse dia for dia útil, o prazo seguro é até ao fim de 6 de abril de 2026, se não houver feriado/fim de semana pelo meio',
          'Se a reserva for prolongada, verifique se é necessário atualizar a data de saída no SIBA',
          'Se o hóspede saiu mais cedo, envie a saída com a data efetiva',
          'Se um hóspede cancelou a viagem e não pernoitou, não se submete boletim para essa pessoa',
          'Se chegaram 4 estrangeiros, são necessários 4 boletins, mesmo que a reserva seja uma só'
        ] },
        { kind: 'warning', text: 'Não espere pelo fim do mês nem transmita dados “em lote” com efeito retroativo. A coima é calculada pela violação da obrigação de comunicação e, havendo vários hóspedes, o valor cresce rapidamente.' }
      ]
    },
    {
      id: 'data-to-collect',
      title: 'Que dados pedir ao hóspede',
      content: [
        { kind: 'paragraph', text: 'Recolha os dados no check-in, antes de entregar as chaves. A prática normal é conferir o passaporte/ID presencialmente ou através de um pre-check-in seguro, se o alojamento funcionar à distância.' },
        { kind: 'checklist', items: [
          'Nome completo tal como consta do passaporte ou national ID',
          'Data de nascimento',
          'Local de nascimento, se o formulário o solicitar',
          'Cidadania / nationality',
          'País de residência habitual',
          'Tipo de documento: passport, ID card, residence card',
          'Número do documento',
          'País de emissão do documento',
          'Data de entrada',
          'Data de saída',
          'Morada do alojamento',
          'Dados da reserva ou referência interna, se utilizar um sistema de property management'
        ] },
        { kind: 'warning', text: 'Guarde cópias de documentos com cuidado. Para o SIBA são necessários dados, não necessariamente a conservação indefinida de digitalizações de passaportes. Se fizer cópias, limite o acesso, o prazo de conservação e explique ao hóspede a finalidade do tratamento ao abrigo do GDPR.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como submeter o boletim no SIBA',
      content: [
        { kind: 'substeps', items: [
          { id: 'register-host', title: '1. Registe o anfitrião ou o alojamento', content: [
            { kind: 'paragraph', text: 'É necessário acesso ao SIBA. Normalmente é tratado pelo proprietário, pela empresa de gestão ou pelo administrador do alojamento. Para AL, prepare previamente o NIF, os dados do proprietário/empresa, a morada do alojamento e o número de registo AL, se aplicável.' }
          ] },
          { id: 'create-arrival', title: '2. Insira a entrada após o check-in', content: [
            { kind: 'paragraph', text: 'Crie um boletim para cada hóspede estrangeiro. Verifique a grafia do nome, o número do documento e as datas: erros no passaporte e nas datas são a causa mais frequente de problemas numa inspeção.' }
          ] },
          { id: 'create-departure', title: '3. Feche a saída após o check-out', content: [
            { kind: 'paragraph', text: 'Depois do check-out, envie a saída no prazo de 3 dias úteis. Se utilizar Channel Manager/PMS, não confie cegamente na automatização: confirme que o registo foi efetivamente enviado para o SIBA.' }
          ] },
          { id: 'save-proof', title: '4. Guarde o comprovativo', content: [
            { kind: 'paragraph', text: 'Guarde o número/recibo de submissão e o histórico interno da reserva. Numa inspeção, é útil demonstrar que os dados foram enviados dentro do prazo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fines-and-risks',
      title: 'Coimas e erros típicos',
      content: [
        { kind: 'paragraph', text: 'A responsabilidade decorre do regime da Lei 23/2007. Na prática, é frequentemente indicado um intervalo de 100–500 € para pessoa singular e até 2 000 € para pessoa coletiva por falta de submissão ou atraso do boletim. O risco é avaliado por cada hóspede/episódio, pelo que uma reserva grande pode transformar-se em várias infrações.' },
        { kind: 'checklist', items: [
          'Erro: submeter apenas o hóspede principal, e não todos os estrangeiros',
          'Erro: assumir que não é preciso submeter cidadãos da UE',
          'Erro: pensar que o Airbnb ou o Booking enviam tudo automaticamente',
          'Erro: não submeter a saída após o check-out',
          'Erro: submeter com base na data da reserva, e não na entrada efetiva',
          'Erro: não verificar a integração automática do PMS com o SIBA',
          'Erro: não ter comprovativo de submissão em caso de inspeção',
          'Erro: considerar o arrendamento pago de longa duração totalmente fora do regime sem verificação jurídica'
        ] },
        { kind: 'warning', text: 'Se arrendar habitação não como AL, mas por contrato de longa duração a um estrangeiro, a obrigação SIBA é mais discutida na prática, mas a formulação da lei é mais ampla: “todos aqueles que facultem, a título oneroso, alojamento a cidadãos estrangeiros”. Para arrendamento sistemático a estrangeiros, é melhor configurar um processo ou obter uma posição escrita de um advogado/contabilista.' }
      ]
    },
    {
      id: 'practical-setup',
      title: 'Configuração prática para o anfitrião',
      content: [
        { kind: 'paragraph', text: 'Faça do SIBA parte do check-in/check-out, tal como a limpeza e a entrega das chaves. Isto é especialmente importante se o alojamento for gerido por várias pessoas: proprietário, co-host, cleaning team e property manager.' },
        { kind: 'checklist', items: [
          'Adicione um ponto SIBA ao modelo de mensagem de pre-check-in',
          'Recolha os dados de todos os hóspedes antes da entrada, mas confirme-os no momento do alojamento',
          'Designe uma pessoa responsável pela submissão da entrada',
          'Designe uma pessoa responsável pela saída',
          'No calendário, coloque um lembrete para o 2.º dia útil após a entrada e a saída',
          'Uma vez por mês, exporte a lista de reservas e confronte-a com o SIBA',
          'Para PMS/Channel Manager, ative o registo de erros de integração',
          'Guarde os comprovativos de submissão juntamente com a booking reference',
          'Para trabalho em equipa, utilize acessos separados, e não uma palavra-passe comum numa aplicação de mensagens'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Coima por falta de submissão/atraso para pessoa singular', amountEURMin: 100, amountEURMax: 500, note: 'Normalmente indicada para a violação da obrigação relativa ao boletim de alojamento; a qualificação concreta depende da autoridade e das circunstâncias.' },
    { label: 'Coima para pessoa coletiva', amountEURMin: 400, amountEURMax: 2000, note: 'Intervalo superior prático, frequentemente citado para empresas/operadores de alojamento.' },
    { label: 'Submissão do boletim no SIBA', amountEUR: 0, note: 'Não é cobrada taxa pública pela submissão eletrónica em si; podem ser pagos PMS/Channel Manager ou serviços de property manager.' }
  ],
  sources: [
    { title: 'Lei 23/2007 — regime de entrada, permanência e saída de estrangeiros, arts. 15–16 e sanções', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-67564445', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SIBA — portal de boletins de alojamento', url: 'https://siba.sef.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'GuestReady: registo de hóspedes SIBA em Portugal', url: 'https://www.guestready.com/blog/siba-guest-registration-sef-aima-portugal/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
