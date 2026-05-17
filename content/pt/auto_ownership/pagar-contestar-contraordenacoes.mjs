export default {
  editorialVoice: 'hackportugal',
  id: 'pagar-contestar-contraordenacoes',
  categoryId: 'auto_ownership',
  title: 'Portal das Contraordenações: pagar e contestar multas online',
  tldr: 'O Portal das Contraordenações da ANSR é a área oficial para multas rodoviárias: acesso com Cartão de Cidadão ou Chave Móvel Digital, consulta de processos por NIF, pagamento por referência Multibanco, apresentação de defesa/requerimento online e consulta dos pontos da carta. Em 2026, a defesa é normalmente apresentada no prazo de 15 dias úteis após a notificação. O pagamento em prestações pode ser pedido para multas a partir de 210 €, com mínimo de 50 € por pagamento, normalmente até 12 prestações.',
  tags: ['multas', 'ansr', 'contraordenações', 'mb', 'carta'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-portal-does',
      title: 'O que pode fazer no portal da ANSR',
      content: [
        { kind: 'paragraph', text: 'O Portal das Contraordenações é a área da Autoridade Nacional de Segurança Rodoviária para processos administrativos rodoviários: excesso de velocidade, estacionamento, álcool, uso do telemóvel ao volante, passagem de sinal vermelho, falta de documentos e outras contraordenações rodoviárias.' },
        { kind: 'checklist', items: [
          'Consultar processos associados ao seu NIF / documento de condutor',
          'Ver o número do auto de contraordenação, data, local, artigo do Código da Estrada e estado do processo',
          'Obter dados para pagamento: entidade, referência, montante para Multibanco / homebanking',
          'Apresentar defesa — oposição escrita à multa',
          'Apresentar requerimento: pagamento em prestações, identificação do condutor efetivo, alteração de morada, pedido de cópias',
          'Carregar documentos e provas em PDF',
          'Consultar pontos da carta — pontos da carta de condução',
          'Acompanhar notificações e decisões da ANSR'
        ] },
        { kind: 'warning', text: 'O portal funciona apenas para contraordenações rodoviárias da ANSR. Multas da EMEL, estacionamento municipal, Via Verde / portagens, IMT, Finanças ou tribunais podem ser pagas noutros sistemas.' }
      ]
    },
    {
      id: 'login-and-find-case',
      title: 'Acesso: NIF, CC, CMD e pesquisa do processo',
      content: [
        { kind: 'paragraph', text: 'Aceda a portalcontraordenacoes.ansr.pt e clique em autenticação. Em 2026, o acesso normal é feito através do Cartão de Cidadão com PIN/leitor ou da Chave Móvel Digital (CMD). Após a autenticação, o portal mostra os processos associados ao seu identificador/NIF.' },
        { kind: 'checklist', items: [
          'Prepare o NIF e o acesso à CMD ou ao Cartão de Cidadão',
          'Se tiver uma autorização de residência, mas não tiver Cartão de Cidadão, ative previamente a Chave Móvel Digital através do ePortugal / IRN / Espaço Cidadão, se estiver disponível para o seu documento',
          'Verifique a secção «Os meus processos» ou uma lista equivalente de processos',
          'Confirme o número do processo com a notificação em papel: auto / processo / data da infração',
          'Verifique o prazo: normalmente 15 dias úteis a contar da notificação para pagamento/defesa',
          'Descarregue ou guarde o PDF da notificação e os detalhes do processo',
          'Se a multa estiver associada ao veículo, mas outra pessoa conduzia, procure a opção identificação do condutor'
        ] },
        { kind: 'warning', text: 'Se não tiver CMD/Cartão de Cidadão, o acesso online pode não funcionar. Nesse caso, utilize os dados da notificação em papel e contacte a ANSR pelos contactos indicados na carta: por carta registada, email/formulário ou presencialmente através dos pontos de atendimento disponíveis. Não espere pelo fim do prazo apenas por problemas de autenticação.' }
      ]
    },
    {
      id: 'pay-online',
      title: 'Pagamento da multa por referência Multibanco',
      content: [
        { kind: 'paragraph', text: 'Na notificação e/ou no portal são indicados entidade, referência e montante. Pode pagar no Multibanco, no homebanking ou na aplicação bancária na secção «Pagamentos ao Estado / Pagamento de Serviços», dependendo do banco e do tipo de referência.' },
        { kind: 'substeps', items: [
          { id: 'get-reference', title: '1. Obtenha a referência', content: [
            { kind: 'checklist', items: [
              'Abra o processo no Portal das Contraordenações',
              'Procure a secção «Pagamento» / «Referência MB»',
              'Confirme o montante: coima, custas, depósito ou pagamento voluntário',
              'Verifique a validade da referência',
              'Guarde o PDF ou uma captura de ecrã com os dados de pagamento'
            ] }
          ] },
          { id: 'pay', title: '2. Pague e guarde o comprovativo', content: [
            { kind: 'checklist', items: [
              'Introduza entidade, referência, montante sem arredondamentos',
              'Confirme que está a pagar à ANSR / Estado, e não a um destinatário terceiro',
              'Guarde o comprovativo em PDF',
              'Passados alguns dias, verifique o estado do processo no portal',
              'Se o estado não tiver sido atualizado, envie o comprovativo à ANSR com o número do processo'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'O pagamento voluntário pelo mínimo muitas vezes resolve a questão da coima, mas nem sempre encerra o processo por completo: numa contraordenação grave ou muito grave pode haver uma sanção separada, por exemplo inibição de conduzir e perda de pontos. Se quiser contestar o mérito do caso, avalie primeiro se o pagamento será considerado reconhecimento/pagamento voluntário ou depósito.' }
      ]
    },
    {
      id: 'parcelamento',
      title: 'Pagamento em prestações: quando a multa pode ser dividida',
      content: [
        { kind: 'paragraph', text: 'Para multas rodoviárias elevadas, pode pedir pagamento em prestações. Regra prática da ANSR em 2026: o valor da multa deve ser, no mínimo, 210 €, cada pagamento deve ser de, pelo menos, 50 €, e o pagamento em prestações está normalmente limitado a 12 prestações mensais.' },
        { kind: 'checklist', items: [
          'Verifique que o montante da coima ≥ 210 €',
          'Calcule as prestações de modo a que cada prestação não seja inferior a 50 €',
          'Apresente o requerimento através do portal no seu processo ou por escrito à ANSR',
          'Indique o número do processo, NIF, nome, morada, email, telefone',
          'Escreva quantas prestações pretende e por que motivo precisa do pagamento em prestações',
          'Junte documentos sobre rendimentos/despesas, se comprovarem a necessidade',
          'Aguarde a decisão da ANSR e os novos dados de pagamento',
          'Pague rigorosamente dentro dos prazos: a falta de pagamento de uma prestação pode tornar imediatamente exigível todo o valor em falta'
        ] },
        { kind: 'warning', text: 'Não considere o pagamento em prestações aprovado automaticamente. Enquanto a ANSR não emitir despacho/decisão, o prazo inicial de pagamento pode continuar a ser relevante. Se o prazo estiver próximo, apresente o requerimento logo após receber a notificação.' }
      ]
    },
    {
      id: 'contest-defense',
      title: 'Como apresentar defesa online',
      content: [
        { kind: 'paragraph', text: 'A defesa é uma oposição escrita no processo. O prazo típico no Código da Estrada é de 15 dias úteis a contar da data da notificação. Conte dias úteis; fins de semana e feriados oficiais não entram na contagem. Se a notificação for recebida por carta registada, a data é normalmente a data da entrega ou a data legalmente prevista de presunção de notificação.' },
        { kind: 'checklist', items: [
          'Abra o processo correto no portal',
          'Selecione «Apresentar defesa» / «Requerimento»',
          'Escreva em português; é melhor não usar inglês ou russo',
          'Indique o número do processo, NIF, número da carta de condução, morada e email',
          'Descreva os factos: por que motivo a infração não foi cometida, erro do radar/local/matrícula, identificação incorreta do condutor, incumprimento do procedimento de notificação',
          'Junte provas: fotografias, GPS, recibos, talões de estacionamento, bilhetes, contrato de aluguer do veículo, declaração da entidade empregadora',
          'Se o condutor era outra pessoa, apresente a identificação do condutor com os respetivos dados e prova',
          'Se pedir testemunhas, indique o nome, morada e o que exatamente confirmam',
          'Guarde o comprovativo de submissão com data e hora'
        ] },
        { kind: 'warning', text: 'A apresentação de defesa não garante a suspensão de todas as consequências. Em infrações graves, a ANSR pode ainda assim proferir decisão sobre coima, custas, inibição de conduzir e perda de pontos. Para álcool, acidente, excesso elevado de velocidade, reincidência ou risco de perda da carta, é melhor mostrar o processo a um advogado.' }
      ]
    },
    {
      id: 'points-and-after-decision',
      title: 'Pontos, decisão e o que fazer a seguir',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o condutor tem normalmente 12 pontos da carta. Os pontos são retirados após a decisão definitiva, e não simplesmente no momento do radar. No Portal das Contraordenações pode consultar o saldo de pontos atual e o histórico de sanções.' },
        { kind: 'checklist', items: [
          'Uma contraordenação grave retira normalmente 2 ou 3 pontos, dependendo da infração',
          'Uma contraordenação muito grave retira normalmente 4 ou 5 pontos',
          'Um crime rodoviário pode retirar 6 pontos',
          'Com 4–5 pontos, a ANSR pode obrigar a frequentar uma ação de formação',
          'Com 1–3 pontos, pode ser determinado um novo exame de condução',
          'Com 0 pontos, a carta de condução é cassada, e não é possível obter uma nova de imediato',
          'Verifique o portal depois do pagamento ou da decisão: a atualização do estado nem sempre é imediata',
          'Guarde todos os comprovativos pelo menos até ao encerramento definitivo do processo'
        ] },
        { kind: 'paragraph', text: 'Se receber uma decisão condenatória e não concordar, o passo seguinte é a impugnação judicial dentro do prazo previsto, normalmente através do tribunal competente. Isto já não é uma simples reclamação online: verifique o prazo na decisão da ANSR e obtenha aconselhamento jurídico.' }
      ]
    }
  ],
  costs: [
    { label: 'Acesso ao Portal das Contraordenações', amountEUR: 0, note: 'O portal oficial da ANSR é gratuito; paga apenas a própria multa/coima, custas ou sanções do processo.' },
    { label: 'Valor mínimo da multa para pedir pagamento em prestações', amountEUR: 210, note: 'Valor-limite prático para pagamento em prestações em 2026.' },
    { label: 'Pagamento mínimo por prestação', amountEUR: 50, note: 'Cada prestação deve ser de, pelo menos, 50 €; normalmente, o máximo é de 12 prestações mensais.' }
  ],
  sources: [
    { title: 'Portal das Contraordenações da ANSR', url: 'https://portalcontraordenacoes.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: consultar o Portal das Contraordenações', url: 'https://www2.gov.pt/servicos/consultar-o-portal-das-contraordenacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — Decreto-Lei 114/94, artigos sobre contraordenações, pagamento, defesa e pontos', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
