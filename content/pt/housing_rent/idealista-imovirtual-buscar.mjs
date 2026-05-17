export default {
  editorialVoice: 'hackportugal',
  id: 'idealista-imovirtual-buscar',
  categoryId: 'housing_rent',
  title: 'Idealista, Imovirtual, Casa Sapo: como procurar arrendamento em Portugal',
  tldr: 'Em 2026, o arrendamento em Portugal é mais frequentemente procurado através do Idealista, Imovirtual, Casa Sapo e, por vezes, Custojusto. O Idealista oferece os alertas mais rápidos, o Imovirtual tem um catálogo grande, o Casa Sapo duplica muitas vezes anúncios de agências, e o Custojusto é útil para senhorios particulares, mas o risco de burla é maior. Procure por T1/T2/T3, mobilado/sem mobília, verifique a licença de utilização, contrato, recibos de renda e não transfira a caução antes da visita e da identificação do senhorio/agência.',
  tags: ['arrendamento', 'idealista', 'imovirtual', 'burla'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'platforms',
      title: 'Onde procurar: o que oferece cada plataforma',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, os anúncios são muitas vezes duplicados: o mesmo imóvel pode estar no Idealista, no Imovirtual e no site da agência com preço ou estado diferentes. A estratégia mais eficaz é configurar alertas em 2–3 plataformas e escrever nas primeiras horas após a publicação.' },
        { kind: 'checklist', items: [
          'Idealista — o agregador mais popular, mapa prático, alertas rápidos, muitas agências e particulares.',
          'Imovirtual — catálogo grande, mais forte fora de Lisboa e do Porto, muitas vezes com anúncios de agências.',
          'Casa Sapo — portal antigo, muitos imóveis de agências; útil como verificação adicional, mas alguns anúncios ficam desatualizados.',
          'Custojusto — plataforma de classificados particulares; pode encontrar o proprietário diretamente, mas há mais anúncios falsos e preços “demasiado bons”.',
          'Sites de agências: Remax, ERA, Century 21, Zome, Keller Williams, Savills, JLL — por vezes o imóvel aparece aí antes dos agregadores.',
          'Grupos de Facebook e chats de Telegram — apenas como canal adicional; não transfira dinheiro para desconhecidos sem contrato e verificação.'
        ] },
        { kind: 'warning', text: 'Se o anúncio estiver online há semanas com um preço muito abaixo do mercado, o mais provável é que o imóvel já esteja arrendado, seja um lead para a agência ou uma burla. Em Lisboa, Porto, Cascais, Oeiras, Braga, os bons apartamentos desaparecem muitas vezes em 24–72 horas.' }
      ]
    },
    {
      id: 'filters',
      title: 'Como configurar corretamente os filtros',
      content: [
        { kind: 'paragraph', text: 'A tipologia portuguesa é diferente da ideia habitual de “número de divisões”. T significa número de quartos — quartos de dormir, não todas as divisões. T1 = um quarto + sala, T2 = dois quartos + sala, T0 = estúdio.' },
        { kind: 'checklist', items: [
          'Tipo: apartamento, moradia, quarto. Para uma família, normalmente é necessário um apartamento ou moradia; quarto é um quarto numa casa partilhada.',
          'Tipologia: T0, T1, T2, T3. T1 serve para uma pessoa/casal, T2 — para casal com uma criança ou para escritório, T3 — para família.',
          'Preço: defina o limite superior de forma realista e verifique se condomínio, água, luz, gás, internet estão incluídos.',
          'Área: a área pode ser indicada como área bruta ou área útil; compare com cuidado.',
          'Mobilado — com móveis; sem mobília — sem móveis. “Cozinha equipada” significa cozinha equipada, mas não necessariamente mobiliário nos quartos.',
          'Casas de banho: o número de casas de banho é importante em T2/T3; “1 WC” em prédios antigos pode ser estreito e sem janela.',
          'Andar / elevador: 3.º andar sem elevador — é o quarto nível na lógica russa e sem elevador.',
          'Certificado energético: A/B é melhor, E/F/G significa muitas vezes frio no inverno, humidade e contas de eletricidade elevadas.',
          'Animais permitidos: se tem um animal, pergunte por escrito antes da visita; muitos anúncios, por defeito, não aceitam pets.',
          'Duração mínima: alguns imóveis só são arrendados por 12+ meses; o arrendamento de curta duração pode funcionar como Alojamento Local (AL) e custar mais.'
        ] }
      ]
    },
    {
      id: 'messages',
      title: 'Como escrever ao senhorio ou agente para obter resposta',
      content: [
        { kind: 'paragraph', text: 'Num mercado aquecido, não ganha quem escreve “Está disponível?”, mas sim quem parece desde logo um arrendatário solvente e claro. Escreva em português ou inglês, de forma curta, sem uma biografia longa.' },
        { kind: 'checklist', items: [
          'Indique quem vai viver no imóvel: “casal sem filhos”, “família de 3 pessoas”, “one person working remotely”.',
          'Escreva a data de entrada e o prazo pretendido: por exemplo, “entrada a partir de 1 de junho, contrato de 12 meses ou mais”.',
          'Explique o rendimento: contrato de trabalho, recibos verdes, remote work, pensão, poupanças. Não envie documentos completos na primeira mensagem.',
          'Mencione NIF, autorização de residência/visa status, se for relevante: “tenho NIF e contrato de trabalho em Portugal”.',
          'Se tem animal — seja honesto: “temos um cão pequeno, treinado, podemos pagar caução adicional se necessário”.',
          'Proponha 2–3 horários para visita: “posso visitar hoje depois das 18h ou amanhã de manhã”.',
          'Peça confirmação de: preço, caução, rendas adiantadas, duração do contrato, recibos de renda, licença de utilização.'
        ] },
        { kind: 'paragraph', text: 'Exemplo de mensagem curta: “Bom dia, tenho interesse no T2 em Arroios. Somos um casal, ambos com contrato de trabalho, temos NIF e pretendemos arrendar por 12+ meses a partir de 1 de maio. Podemos visitar hoje às 18h ou amanhã de manhã? Pode confirmar caução, rendas adiantadas e se há recibos de renda?”' }
      ]
    },
    {
      id: 'documents-money',
      title: 'Documentos e dinheiro: o que normalmente pedem',
      content: [
        { kind: 'paragraph', text: 'Não existe uma lista oficial única de documentos para arrendamento: o senhorio avalia o risco. Mas, em 2026, nas grandes cidades quase sempre pedem comprovativo de rendimentos e pagamentos antecipados.' },
        { kind: 'checklist', items: [
          'Documento de identificação: passaporte, Cartão de Cidadão, cartão de residência ou visa page.',
          'NIF — quase sempre necessário para o contrato e recibos de renda.',
          'Comprovativo de rendimentos: contrato de trabalho, últimos recibos de vencimento, declaração IRS, recibos verdes, declaração bancária.',
          'Fiador — pessoa que presta garantia em Portugal; é frequentemente exigido a estudantes, recém-chegados e pessoas sem rendimento local.',
          'Caução — depósito por danos; normalmente 1–2 rendas mensais, mas na prática podem pedir mais.',
          'Rendas adiantadas — renda paga antecipadamente; a lei limita o adiantamento de rendas antecipadas, mas o mercado continua a negociar de forma dura.',
          'Contrato de arrendamento — deve incluir o imóvel, prazo, preço, NIF das partes, condições de rescisão e assinaturas.',
          'Recibos de renda — recibos eletrónicos através do Portal das Finanças; necessários para IRS e para comprovar arrendamento legal.',
          'Licença de utilização ou confirmação de que a habitação é legal para residência; especialmente importante em prédios antigos e anexos.'
        ] },
        { kind: 'warning', text: 'Não envie scans do passaporte, autorização de residência, payslips e extratos bancários antes de uma verificação básica do anúncio. Para o primeiro contacto, basta descrever a sua situação. Documentos completos — apenas a uma agência/senhorio que tenha identificado.' }
      ]
    },
    {
      id: 'scams-red-flags',
      title: 'Sinais de alerta e burlas',
      content: [
        { kind: 'paragraph', text: 'Burla típica: “senhorio no estrangeiro”, “chaves por estafeta/Airbnb”, “primeiro a caução, depois a visita”, fotografias de outra cidade, preço 30–50% abaixo do mercado. Em Portugal isto acontece regularmente, especialmente no Custojusto, Facebook e WhatsApp.' },
        { kind: 'checklist', items: [
          'O preço é claramente inferior ao de imóveis semelhantes no mesmo bairro e, ao mesmo tempo, o apartamento é “perfeito”.',
          'Pedem a transferência da caução ou primeira renda antes de uma visita presencial ou videochamada com demonstração da morada.',
          'Recusam mostrar documentos do proprietário ou da agência, dão apenas WhatsApp e um IBAN estrangeiro.',
          'As fotografias parecem de catálogo Airbnb, não há vista das janelas, fachada, entrada do prédio, contadores.',
          'A morada não coincide com o mapa, a zona é descrita de forma vaga: “near center” sem rua ou freguesia.',
          'O anúncio desaparece e reaparece com outro telefone/preço.',
          'O agente não consta no site da agência, não há número AMI da mediadora imobiliária.',
          'Propõem fazer o contrato “depois”, mas agora pedem uma “reservation fee”.',
          'Prometem arrendamento sem NIF, contrato e recibos, mas exigem uma caução elevada em cash.'
        ] },
        { kind: 'warning', text: 'Mínimo seguro: ver o apartamento, verificar a identidade do proprietário ou a licença AMI da agência, obter minuta do contrato, pagar para um IBAN português/verificável e guardar o comprovativo. Dinheiro em numerário sem recibo — má ideia.' }
      ]
    },
    {
      id: 'market-reality',
      title: 'Realidade do mercado em 2026: rapidez, negociação e renovação',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o mercado de arrendamento continua tenso em Lisboa, Porto, Cascais, Oeiras, Amadora, Almada, Braga, Aveiro, Algarve. Bons imóveis recebem rapidamente dezenas de contactos. Se o apartamento servir, é melhor ir à visita de imediato e ter os documentos preparados.' },
        { kind: 'checklist', items: [
          'Crie alertas no Idealista e no Imovirtual por preço, zona e tipologia; ative push/email.',
          'Veja não só o centro: os transportes em Lisboa/Porto podem ser mais importantes do que a distância no mapa.',
          'Verifique a humidade: cheiro a mofo, manchas junto às janelas, paredes frias, ausência de aquecimento.',
          'Confirme despesas: condomínio, IMI normalmente é pago pelo proprietário, mas serviços/utility bills — pelo arrendatário.',
          'Registe o estado do apartamento com fotos/vídeo no dia da entrega das chaves e envie ao senhorio por escrito.',
          'A indexação das rendas em 2026 orienta-se pelo coeficiente de 2,16%, se o contrato permitir atualização anual nos termos da lei.',
          'Se precisar de atestado de residência, SNS, escola ou documentos NHR/IFICI, um arrendamento ilegal sem contrato criará problemas.'
        ] },
        { kind: 'paragraph', text: 'Não tenha medo de negociar, mas em imóveis muito procurados a negociação perde frequentemente para a rapidez. Uma posição negocial mais realista é propor um prazo estável, documentos transparentes, data de entrada rápida e uma caução normal, em vez de tentar baixar o preço em 10–15%.' }
      ]
    }
  ],
  costs: [
    { label: 'Caução habitual', amountEURMin: 920, amountEURMax: 3000, note: 'Frequentemente 1–2 rendas mensais; o valor depende da cidade, do preço do apartamento e do perfil do arrendatário.' },
    { label: 'Renda adiantada', amountEURMin: 920, amountEURMax: 3000, note: 'Na prática, é comum pedirem 1–2 meses adiantados no momento da assinatura do contrato.' },
    { label: 'Utilização do Idealista/Imovirtual/Casa Sapo pelo arrendatário', amountEUR: 0, note: 'A pesquisa e as respostas a anúncios são normalmente gratuitas; as promoções pagas dizem sobretudo respeito à publicação/agências.' }
  ],
  sources: [
    { title: 'Idealista Portugal — pesquisa de arrendamento e alertas', url: 'https://www.idealista.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Imovirtual — catálogo imobiliário em Portugal', url: 'https://www.imovirtual.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — recibos de renda eletrónicos', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Diário da República — regime do arrendamento urbano e atualização de rendas', url: 'https://diariodarepublica.pt', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
