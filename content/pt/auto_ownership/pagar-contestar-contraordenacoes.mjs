export default {
  editorialVoice: 'hackportugal',
  id: 'pagar-contestar-contraordenacoes',
  categoryId: 'auto_ownership',
  title: 'Portal das Contraordenações: pagamento e contestação de coimas online',
  tldr: 'O Portal das Contraordenações da ANSR é a área oficial para coimas rodoviárias: acesso com Cartão de Cidadão ou Chave Móvel Digital, consulta de processos por NIF, pagamento por referência Multibanco, apresentação de defesa/requerimento online e verificação dos pontos da carta.\n\nEm 2026, a defesa é normalmente apresentada no prazo de 15 dias úteis após a notificação. O pagamento em prestações pode ser pedido para coimas a partir de 204 € (2 UC), com um mínimo de 50 € por pagamento, normalmente até 12 prestações.',
  tags: ['coimas', 'ansr', 'contraordenações', 'mb', 'carta'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-portal-does',
      title: 'O que pode fazer no portal da ANSR',
      content: [
        { kind: 'paragraph', text: 'O Portal das Contraordenações é a área da Autoridade Nacional de Segurança Rodoviária para processos administrativos rodoviários: excesso de velocidade, estacionamento, álcool, telemóvel ao volante, passagem de sinal vermelho, falta de documentos e outras contraordenações rodoviárias.' },
        { kind: 'checklist', items: [
          'Consultar processos associados ao seu NIF / documento de condutor',
          'Ver o número do auto de contraordenação, a data, o local, o artigo do Código da Estrada e o estado do processo',
          'Obter dados para pagamento: entidade, referência, montante para Multibanco / homebanking',
          'Apresentar defesa — oposição escrita à coima',
          'Apresentar requerimento: pagamento em prestações, identificação do condutor efetivo, alteração de morada, pedido de cópias',
          'Carregar documentos e provas em PDF',
          'Consultar os pontos da carta — pontos da carta de condução',
          'Acompanhar notificações e decisões da ANSR'
        ] },
        { kind: 'warning', text: 'O portal funciona apenas para contraordenações rodoviárias da ANSR. Coimas da EMEL, estacionamento municipal, Via Verde / portagens, IMT, Finanças ou tribunais podem ser pagas noutros sistemas.' }
      ]
    },
    {
      id: 'login-and-find-case',
      title: 'Acesso: NIF, CC, CMD e pesquisa do processo',
      content: [
        { kind: 'paragraph', text: 'Aceda a portalcontraordenacoes.ansr.pt e clique em autenticação. Em 2026, o acesso padrão é através do Cartão de Cidadão com PIN/leitor ou da Chave Móvel Digital (CMD). Depois de iniciar sessão, o portal mostra os processos associados ao seu identificador/NIF.' },
        { kind: 'checklist', items: [
          'Prepare o NIF e o acesso à CMD ou ao Cartão de Cidadão',
          'Se tem autorização de residência, mas não tem Cartão de Cidadão, ative previamente a Chave Móvel Digital através do ePortugal / IRN / Espaço Cidadão, se estiver disponível para o seu documento',
          'Consulte a secção «Os meus processos» ou uma lista semelhante de processos',
          'Confirme o número do processo com a notificação em papel: auto / processo / data da infração',
          'Verifique o prazo: normalmente 15 dias úteis a contar da notificação para pagamento/defesa',
          'Descarregue ou guarde o PDF da notificação e os detalhes do processo',
          'Se a coima estiver associada ao veículo, mas outra pessoa conduzia, procure a opção identificação do condutor'
        ] },
        { kind: 'warning', text: 'Se não tiver CMD/Cartão de Cidadão, o acesso online pode não funcionar. Nesse caso, utilize os dados da notificação em papel e contacte a ANSR pelos contactos indicados na carta: por carta registada, email/formulário ou presencialmente através dos pontos de atendimento disponíveis. Não espere pelo fim do prazo apenas por problemas de login.' }
      ]
    },
    {
      id: 'pay-online',
      title: 'Pagamento da coima por referência Multibanco',
      content: [
        { kind: 'paragraph', text: 'Na notificação e/ou no portal são indicados entidade, referência e montante. O pagamento pode ser feito no Multibanco, homebanking ou aplicação bancária na secção «Pagamentos ao Estado / Pagamento de Serviços», consoante o banco e o tipo de referência.' },
        { kind: 'substeps', items: [
          { id: 'get-reference', title: '1. Obter a referência', content: [
            { kind: 'checklist', items: [
              'Abra o processo no Portal das Contraordenações',
              'Procure a secção «Pagamento» / «Referência MB»',
              'Confirme o montante: coima, custas, depósito ou pagamento voluntário',
              'Verifique o prazo de validade da referência',
              'Guarde o PDF ou uma captura de ecrã com os dados de pagamento'
            ] }
          ] },
          { id: 'pay', title: '2. Pagar e guardar o comprovativo', content: [
            { kind: 'checklist', items: [
              'Introduza entidade, referência, montante sem arredondamentos',
              'Confirme que está a pagar à ANSR / Estado, e não a um destinatário terceiro',
              'Guarde o comprovativo em PDF',
              'Após alguns dias, verifique o estado do processo no portal',
              'Se o estado não for atualizado, envie o comprovativo à ANSR com o número do processo'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'O pagamento voluntário pelo mínimo encerra muitas vezes a questão da coima, mas nem sempre encerra todo o processo: em caso de contraordenação grave ou muito grave pode haver uma sanção separada, por exemplo inibição de conduzir e perda de pontos. Se quiser contestar o mérito da infração, avalie primeiro se o pagamento será considerado reconhecimento/pagamento voluntário ou depósito.' }
      ]
    },
    {
      id: 'parcelamento',
      title: 'Pagamento em prestações: quando a coima pode ser dividida',
      content: [
        { kind: 'paragraph', text: 'Para coimas rodoviárias elevadas, é possível pedir pagamento em prestações. Regra prática da ANSR para 2026: o valor da coima deve ser igual ou superior a 204 € (2 UC), cada pagamento deve ser de pelo menos 50 €, e o plano é normalmente limitado a 12 prestações mensais.' },
        { kind: 'checklist', items: [
          'Verifique que o montante da coima ≥ 204 € (2 UC)',
          'Calcule os pagamentos de modo a que cada prestação seja de pelo menos 50 €',
          'Apresente requerimento através do portal no seu processo ou por escrito à ANSR',
          'Indique o número do processo, NIF, nome, morada, email, telefone',
          'Escreva quantas prestações pede e porque precisa do pagamento em prestações',
          'Anexe documentos sobre rendimentos/despesas, se comprovarem a necessidade',
          'Aguarde a decisão da ANSR e os novos dados de pagamento',
          'Pague rigorosamente dentro dos prazos: a falta de uma prestação pode tornar imediatamente exigível todo o montante restante'
        ] },
        { kind: 'warning', text: 'Não considere o pagamento em prestações automaticamente aprovado. Enquanto a ANSR não emitir despacho/decisão, o prazo original de pagamento pode continuar a ser relevante. Se o prazo estiver próximo, apresente o requerimento imediatamente após receber a notificação.' }
      ]
    },
    {
      id: 'contest-defense',
      title: 'Como apresentar defesa online',
      content: [
        { kind: 'paragraph', text: 'A defesa é a oposição escrita no processo. O prazo típico previsto no Código da Estrada é de 15 dias úteis a contar da data da notificação. Conte precisamente dias úteis; fins de semana e feriados oficiais não entram. Se a notificação for recebida por carta registada, a data é normalmente a data de entrega ou a data legalmente fixada por presunção de notificação.' },
        { kind: 'checklist', items: [
          'Abra o processo correto no portal',
          'Selecione «Apresentar defesa» / «Requerimento»',
          'Escreva em português; é melhor não usar inglês ou russo',
          'Indique o número do processo, NIF, número da carta de condução, morada e email',
          'Descreva os factos: porque a infração não foi cometida, erro do radar/local/matrícula, identificação incorreta do condutor, violação do procedimento de notificação',
          'Anexe provas: fotografias, GPS, recibos, talões de estacionamento, bilhetes, contrato de aluguer do veículo, declaração da entidade empregadora',
          'Se havia outro condutor, apresente identificação do condutor com os dados dele e prova',
          'Se pedir testemunhas, indique nome, morada e o que confirmam concretamente',
          'Guarde o comprovativo de submissão com data e hora'
        ] },
        { kind: 'warning', text: 'A apresentação de defesa não garante a suspensão de todas as consequências. Em infrações graves, a ANSR pode ainda assim emitir decisão sobre coima, custas, inibição de conduzir e retirada de pontos. Para álcool, acidente, excesso elevado de velocidade, reincidência ou risco de perda da carta, é melhor mostrar o processo a um advogado.' }
      ]
    },
    {
      id: 'points-and-after-decision',
      title: 'Pontos, decisão e o que fazer a seguir',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o condutor tem normalmente 12 pontos da carta. Os pontos são retirados após a decisão definitiva, e não simplesmente no momento do radar. No Portal das Contraordenações pode consultar o saldo de pontos atual e o histórico de sanções.' },
        { kind: 'checklist', items: [
          'Uma contraordenação grave retira normalmente 2 ou 3 pontos, consoante a infração',
          'Uma contraordenação muito grave retira normalmente 4 ou 5 pontos',
          'Um crime rodoviário pode retirar 6 pontos',
          'Com 4–5 pontos, a ANSR pode obrigar à frequência de uma ação de formação',
          'Com 1–3 pontos, pode ser imposto um novo exame de condução',
          'Com 0 pontos, a carta de condução é cassada, e não é possível obter uma nova de imediato',
          'Verifique o portal após o pagamento ou decisão: a atualização do estado nem sempre é imediata',
          'Guarde todos os comprovativos pelo menos até ao encerramento definitivo do processo'
        ] },
        { kind: 'paragraph', text: 'Se receber uma decisão condenatória e não concordar, o passo seguinte é a impugnação judicial dentro do prazo estabelecido, normalmente através do tribunal competente. Isto já não é uma simples reclamação online: verifique o prazo na decisão da ANSR e obtenha aconselhamento jurídico.' }
      ]
    }
  ],
  costs: [
    { label: 'Acesso ao Portal das Contraordenações', amountEUR: 0, note: 'O portal oficial da ANSR é gratuito; paga apenas a própria coima, custas ou sanções do processo.' },
    { label: 'Valor mínimo da coima para pedir pagamento em prestações', amountEUR: 204, note: 'Limiar de 2 UC (UC = 102 €) para pagamento em prestações em 2026.' },
    { label: 'Pagamento mínimo por prestação', amountEUR: 50, note: 'Cada prestação deve ser de pelo menos 50 €; normalmente o máximo é de 12 prestações mensais.' }
  ],
  sources: [
    { title: 'Portal das Contraordenações da ANSR', url: 'https://portalcontraordenacoes.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: consultar o Portal das Contraordenações', url: 'https://www2.gov.pt/servicos/consultar-o-portal-das-contraordenacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — Decreto-Lei 114/94, artigos sobre contraordenações, pagamento, defesa e pontos', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
