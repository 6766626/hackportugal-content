export default {
  editorialVoice: 'hackportugal',
  id: 'doctoralia-marcacao-medico',
  categoryId: 'healthcare',
  title: 'Doctoralia e Linkare — pesquisa e marcação de médico privado',
  tldr: 'Em Portugal, a forma mais rápida de procurar um médico privado é através do Doctoralia.pt: mais de 25 000 médicos e clínicas, avaliações, preços, idiomas, calendário online e filtros por Médis/Multicare. O Linkare é prático para análises, exames e alguns especialistas: pode comparar vagas e marcar sem telefonemas. Uma consulta típica com um clínico geral privado custa 50–80 €, com um especialista 70–120 €, e com seguro de saúde muitas vezes 15–40 €. Antes da visita, confirme sempre o preço, a rede do seguro e se é necessário pedido médico.',
  tags: ['doctoralia', 'linkare', 'medicina', 'seguro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use-private',
      title: 'Quando recorrer à medicina privada',
      content: [
        { kind: 'paragraph', text: 'O SNS continua a ser o sistema de base, mas para um expatriado um médico privado é muitas vezes mais rápido: é possível conseguir consulta no próprio dia ou no prazo de uma semana, escolher o idioma do médico, a zona, a clínica e o preço. Isto é especialmente útil antes de obter o número de utente, quando há uma longa espera pelo médico de família ou quando é necessário um especialista.' },
        { kind: 'checklist', items: [
          'Precisa de consulta hoje/esta semana e não há vagas no SNS',
          'Precisa de um médico que fale inglês, espanhol ou russo',
          'Precisa de dermatologia, ginecologia, pediatria, psiquiatria, ortopedia, oftalmologia sem longa espera',
          'Precisa de uma segunda opinião antes de uma operação ou tratamento',
          'Precisa de análises, ecografia, raio-X, TAC, ressonância magnética',
          'Tem seguro de saúde: Médis, Multicare, AdvanceCare, Allianz, Tranquilidade, etc.',
          'Ainda não tem autorização de residência ou número de utente, mas está disponível para pagar em privado'
        ] }
      ]
    },
    {
      id: 'doctoralia',
      title: 'Doctoralia.pt: a principal pesquisa de médico',
      content: [
        { kind: 'paragraph', text: 'Doctoralia.pt é o maior agregador de médicos privados em Portugal: mais de 25 000 médicos e clínicas, perfis, avaliações de pacientes, calendário online, moradas, preços e alguns filtros de seguros. Para Lisboa, Porto, Braga, Coimbra, Algarve e Madeira, é normalmente o primeiro site para procurar especialista.' },
        { kind: 'checklist', items: [
          'Abra doctoralia.pt e escolha a especialidade: “Clínico geral”, “Dermatologista”, “Ginecologista”, “Pediatra”, “Psiquiatra”',
          'Indique a cidade ou o código postal: Lisboa, Porto, Cascais, Oeiras, Braga, Faro, etc.',
          'Filtre por “Marcação online” se quiser marcar sem telefonar',
          'Verifique as “Opiniões”: não olhe apenas para a classificação, mas também para a atualidade das avaliações',
          'Verifique o preço da consulta: “Consulta privada” ou “Primeira consulta”',
          'Se tiver seguro, procure “Seguro de saúde” e o nome da rede: Médis, Multicare, AdvanceCare',
          'Verifique os idiomas no perfil do médico; se não estiver indicado, escreva no chat/telefone para a clínica',
          'Guarde a confirmação da marcação recebida por email/SMS/WhatsApp'
        ] },
        { kind: 'warning', text: 'O preço no Doctoralia nem sempre é final. Procedimentos adicionais, exames, remoção de um sinal, citologia, ecografia, relatório médico ou consulta urgente podem ser pagos à parte. Antes da visita, escreva: “Qual é o preço total da consulta? Aceitam o meu seguro?”' }
      ]
    },
    {
      id: 'linkare-myclinic',
      title: 'Linkare, MyClinic e clínicas diretamente',
      content: [
        { kind: 'paragraph', text: 'Linkare.pt é útil quando a tarefa não é apenas “encontrar um médico”, mas também marcar rapidamente análises, exames ou uma consulta de especialista. Dependendo da cidade, estão disponíveis análises clínicas, procedimentos de diagnóstico e médicos especialistas com marcação online.' },
        { kind: 'paragraph', text: 'Também vale a pena verificar diretamente o MyClinic e os sites das redes de clínicas privadas: CUF, Lusíadas, Hospital da Luz, Trofa Saúde, Joaquim Chaves Saúde, Germano de Sousa, Unilabs. Por vezes, as vagas disponíveis aparecem no site da clínica antes de surgirem no agregador.' },
        { kind: 'checklist', items: [
          'Para análises, procure “análises clínicas”, “check-up”, “exames”',
          'Para diagnóstico, procure “ecografia”, “raio-X”, “TAC”, “ressonância magnética”, “endoscopia”',
          'Confirme se é necessário pedido médico: para alguns exames, a clínica pode exigir encaminhamento',
          'Se precisar do resultado em inglês, peça “relatório em inglês” antecipadamente',
          'Para o seguro, verifique se a clínica específica é prestador convencionado',
          'Para uma questão urgente, uma chamada é muitas vezes mais rápida do que o formulário online',
          'Para crianças, confirme a existência de pediatra e as restrições de idade'
        ] }
      ]
    },
    {
      id: 'insurance',
      title: 'Como não pagar demasiado com seguro Médis/Multicare',
      content: [
        { kind: 'paragraph', text: 'O seguro de saúde em Portugal funciona normalmente através de uma rede convencionada: paga um copagamento, e não o preço total. Mas o mesmo médico pode atender em regime privado, pela Médis, pela Multicare ou apenas por uma rede — isto deve ser confirmado antes da visita.' },
        { kind: 'checklist', items: [
          'Verifique o médico na aplicação da seguradora: Médis, Multicare, AdvanceCare, etc.',
          'Confirme a morada: o médico pode trabalhar em várias clínicas, mas o seguro pode não ser válido em todas',
          'Pergunte à clínica: “Trabalham com a rede Médis/Multicare para esta consulta?”',
          'Confirme o copagamento: muitas vezes 15–40 € em vez de 70–120 €',
          'Verifique a carência: um seguro novo pode ter período de espera',
          'Para psiquiatria, gravidez, medicina dentária e fisioterapia, os limites são muitas vezes separados',
          'Leve o cartão do seguro, NIF e documento de identificação',
          'Se pagar a totalidade, peça fatura com NIF — pode ser considerada em despesas de saúde no IRS'
        ] },
        { kind: 'warning', text: 'O filtro “seguro” num agregador não é garantia de cobertura. A regra final é sempre a da seguradora e da clínica na data da visita. Em 2026, é melhor verificar através da aplicação da seguradora e confirmar por telefone.' }
      ]
    },
    {
      id: 'appointment-day',
      title: 'Dia da consulta: o que levar e o que perguntar',
      content: [
        { kind: 'checklist', items: [
          'Documento de identificação: passaporte, Cartão de Cidadão ou autorização de residência',
          'NIF — para fatura e IRS',
          'Cartão do seguro ou dados da apólice, se tiver seguro de saúde',
          'Número de utente SNS, se já tiver',
          'Lista de medicamentos com dosagens e alergias',
          'Análises antigas, exames, relatórios de alta, imagens, PDF no telemóvel',
          'Peça receita eletrónica se precisar de medicamentos',
          'Pergunte se é necessário follow-up e quanto custa',
          'Se precisar de um documento para o trabalho/escola/processo de visto, peça relatório médico ou declaração'
        ] },
        { kind: 'paragraph', text: 'O pagamento é normalmente por cartão, MB WAY ou Multibanco. Em consultórios pequenos, por vezes aceitam apenas cartão/Multibanco ou dinheiro, por isso é melhor confirmar antecipadamente.' }
      ]
    }
  ],
  costs: [
    { label: 'Clínico geral privado', amountEURMin: 50, amountEURMax: 80, note: 'Preço típico sem seguro; em grandes redes pode ser mais elevado.' },
    { label: 'Especialista privado', amountEURMin: 70, amountEURMax: 120, note: 'Dermatologia, ginecologia, pediatria, ortopedia, psiquiatria; procedimentos e exames à parte.' },
    { label: 'Consulta com seguro de saúde', amountEURMin: 15, amountEURMax: 40, note: 'Copagamento habitual em rede convencionada; depende da apólice e da clínica.' },
    { label: 'Análises clínicas básicas', amountEURMin: 10, amountEURMax: 60, note: 'O preço depende do conjunto de análises e da existência de encaminhamento/seguro.' }
  ],
  sources: [
    { title: 'Doctoralia Portugal — pesquisa de médicos, avaliações e marcação online', url: 'https://www.doctoralia.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Linkare Portugal — marcação de exames, análises e especialistas', url: 'https://www.linkare.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
