export default {
  editorialVoice: 'hackportugal',
  id: 'mudanca-morada-todos-servicos',
  categoryId: 'documents_fiscal',
  title: 'Mudança de morada em Portugal: alteração em lote em todos os serviços',
  tldr: 'Depois de mudar de casa em Portugal, a morada deve ser actualizada não apenas nas Finanças. Em 2026, o principal percurso online é o gov.pt / ePortugal “Mudança de Morada”: altera a morada fiscal e transmite a morada a alguns organismos públicos, mas funciona plenamente sobretudo para quem tem Cartão de Cidadão + CMD. Os titulares de autorização de residência devem actualizar separadamente as Finanças e comunicar a AIMA no prazo de 60 dias. Não se esqueça da Segurança Social, SNS, bancos, serviços de utilidade pública, IMT para automóveis, seguros e entregas.',
  tags: ['morada', 'finanças', 'aima', 'endereço'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'mapa',
      title: 'Mapa: onde a morada muda automaticamente e onde muda manualmente',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe uma alteração “mágica” de morada que cubra todos os serviços privados e públicos. O gov.pt / ePortugal “Mudar de Morada” é um bom ponto de partida, mas a sua cobertura depende do seu documento e da identificação digital.' },
        { kind: 'checklist', items: [
          'Finanças / Autoridade Tributária: morada fiscal — essencial para IRS, IMI, coimas, cartas e notificações',
          'AIMA: para titulares de autorização de residência, a comunicação da alteração de morada é obrigatória no prazo de 60 dias',
          'Segurança Social: morada para cartas, prestações, contribuições e NISS',
          'SNS / Centro de Saúde: a morada influencia a inscrição no Centro de Saúde e o médico de família',
          'Junta de Freguesia: novo atestado de residência, se for necessário para escola, banco, AIMA, SNS ou troca de documentos de condução',
          'Bancos e correctoras: Millennium, Caixa, ActivoBank, Santander, Revolut, Wise, Interactive Brokers, etc. — a morada KYC nem sempre é importada das Finanças',
          'Serviços de utilidade pública e telecomunicações: EDP, Galp, MEO, NOS, Vodafone, Águas, condomínio',
          'IMT e automóvel: morada nos documentos do condutor/proprietário, especialmente se tiver automóvel, IUC, seguro, Via Verde',
          'Seguradoras: automóvel, casa, saúde, responsabilidade civil',
          'Lojas online e fidelização: Worten, Continente, Pingo Doce, Amazon, CTT, perfis de estafetas'
        ] }
      ]
    },
    {
      id: 'govpt',
      title: '1. Tente a alteração em lote através do gov.pt / ePortugal',
      content: [
        { kind: 'paragraph', text: 'O serviço oficial chama-se “Mudar de Morada” / “Change the address”. Está disponível no ePortugal e no gov.pt. Para cidadãos com Cartão de Cidadão, a morada é alterada online através da Chave Móvel Digital (CMD) ou de leitor de cartões + PIN do Cartão de Cidadão.' },
        { kind: 'checklist', items: [
          'Aceda ao ePortugal: serviço “Mudar de Morada”',
          'Autentique-se através da CMD ou do Cartão de Cidadão',
          'Indique a nova morada: rua, número, andar, código postal, localidade',
          'Seleccione as entidades às quais pretende comunicar a morada, se o serviço apresentar uma lista',
          'Confirme o pedido',
          'Aguarde a carta com o código de confirmação para a nova morada, se o procedimento exigir código',
          'Conclua a confirmação online dentro do prazo indicado na carta',
          'Guarde o comprovativo / comprovativo de alteração de morada em PDF'
        ] },
        { kind: 'warning', text: 'Para muitos expats com título de residência, e não Cartão de Cidadão, o serviço em lote do ePortugal pode estar indisponível ou não abranger todos os organismos. Nesse caso, faça um “lote manual”: Finanças online, AIMA separadamente e depois Segurança Social, SNS, bancos e fornecedores.' }
      ]
    },
    {
      id: 'financas',
      title: '2. Actualize a morada fiscal nas Finanças',
      content: [
        { kind: 'paragraph', text: 'A morada fiscal é a principal morada jurídica para efeitos fiscais. Está ligada ao IRS, IMI, IUC, notificações da Autoridade Tributária, coimas e prazos de resposta. Se as cartas da AT forem enviadas para a morada antiga, isso normalmente não anula as consequências.' },
        { kind: 'substeps', items: [
          {
            id: 'financas-online',
            title: 'Através do Portal das Finanças',
            content: [
              { kind: 'checklist', items: [
                'Aceda ao Portal das Finanças',
                'Autentique-se com NIF + senha ou através da CMD',
                'Procure “Alterar Morada” / “Dados Cadastrais”',
                'Introduza a nova morada completa no formato CTT',
                'Verifique o código postal: 0000-000 + localidade',
                'Confirme a alteração',
                'Descarregue o comprovativo de morada fiscal'
              ] }
            ]
          },
          {
            id: 'financas-eportugal',
            title: 'Através do ePortugal',
            content: [
              { kind: 'paragraph', text: 'Se tiver acesso ao gov.pt “Mudar de Morada”, a alteração pode ser transmitida automaticamente à Autoridade Tributária. Depois de concluir, entre ainda assim no Portal das Finanças e confirme que a morada fiscal foi efectivamente alterada.' }
            ]
          }
        ] },
        { kind: 'warning', text: 'Se saiu de Portugal ou está a alterar a residência fiscal, isto não é apenas uma “mudança de morada”. Pode ser necessária a nomeação de representante fiscal e uma análise do estatuto de residente para efeitos de IRS. Não altere o país da morada nas Finanças às cegas.' }
      ]
    },
    {
      id: 'aima',
      title: '3. AIMA: titulares de autorização de residência — obrigatório em 60 dias',
      content: [
        { kind: 'paragraph', text: 'Se tem autorização de residência, a alteração de morada deve ser comunicada à AIMA no prazo de 60 dias. É uma obrigação autónoma do estrangeiro ao abrigo da Lei 23/2007. A alteração da morada nas Finanças, por si só, não garante que a AIMA tenha recebido e registado a nova morada.' },
        { kind: 'checklist', items: [
          'Prepare uma digitalização da autorização de residência dos dois lados',
          'Passaporte',
          'NIF',
          'Novo comprovativo de morada: contrato de arrendamento, factura de serviços, declaração do senhorio ou atestado de residência',
          'Comprovativo de morada fiscal das Finanças, se tiver',
          'Comunique à AIMA através do canal oficial disponível: portal / formulário de contacto / atendimento, se for necessária marcação',
          'Guarde prova do envio: PDF, email, número de processo, captura de ecrã',
          'Se a AIMA pedir atendimento presencial — leve os documentos originais'
        ] },
        { kind: 'warning', text: 'Não espere pela renovação da autorização de residência para comunicar a morada. Em cartas, convocatórias e decisões da AIMA, uma morada antiga pode criar problemas reais: prazo perdido, falta de notificação, marcação adicional ou atraso na renovação.' }
      ]
    },
    {
      id: 'public-services',
      title: '4. Outros serviços públicos: Segurança Social, SNS, Junta, IMT',
      content: [
        { kind: 'paragraph', text: 'Depois das Finanças e da AIMA, percorra os restantes serviços públicos. Demora 1–2 horas, mas poupa semanas de troca de correspondência se mais tarde precisar de uma prestação, médico, escola, automóvel ou comprovativo de morada.' },
        { kind: 'checklist', items: [
          'Segurança Social Direta: actualize a morada no perfil, sobretudo se tiver contrato de trabalho, recibos verdes, prestações ou filhos',
          'SNS / Centro de Saúde: comunique a nova morada; ao mudar para outra zona, o Centro de Saúde pode mudar',
          'Junta de Freguesia: peça um novo atestado de residência, se precisar de uma morada oficial para banco, escola, SNS, AIMA ou procedimentos de condução',
          'Câmara Municipal: verifique serviços locais — estacionamento de residente, EMEL, dísticos, transporte escolar, benefícios municipais',
          'IMT: se tiver carta de condução portuguesa, automóvel, registo de proprietário ou precisar de notificações relacionadas com transportes',
          'Autoridade Tributária para automóvel: verifique o IUC e a morada de notificações nas Finanças',
          'Via Verde / Brisa / serviços de estacionamento: actualize a morada de facturação e do automóvel',
          'Escola, universidade, Creche, ATL: a morada influencia a zona, quotas e comunicação'
        ] },
        { kind: 'warning', text: 'O atestado de residência da Junta de Freguesia não é uma mudança automática de morada nas Finanças ou na AIMA. É apenas a confirmação da residência efectiva numa morada, frequentemente usada como prova.' }
      ]
    },
    {
      id: 'private-services',
      title: '5. Serviços privados: bancos, serviços de utilidade pública, entregas',
      content: [
        { kind: 'paragraph', text: 'As empresas privadas quase nunca recebem automaticamente a sua nova morada a partir do gov.pt. É especialmente importante actualizar a morada onde existam KYC, facturas, cartões, coimas, entrega de cartões SIM, documentos de seguro e devoluções.' },
        { kind: 'checklist', items: [
          'Bancos: Millennium, Caixa Geral de Depósitos, ActivoBank, Novo Banco, Santander, BPI — carregue o comprovativo de morada',
          'Fintech: Revolut, Wise, N26, correctoras — verifique residential address e tax residence',
          'Electricidade e gás: EDP, Galp, Iberdrola, Endesa — a morada do contrato e a morada de correspondência podem ser diferentes',
          'Água: Águas do município / SMAS — feche o contrato antigo ou altere a titularidade',
          'Internet e comunicações móveis: MEO, NOS, Vodafone, NOWO',
          'Seguros: auto, casa, saúde; no automóvel, a morada pode influenciar o risco e o preço',
          'Empregador ou contabilista: morada em payroll, IRS, recibos verdes e invoices',
          'CTT: se necessário, contrate a reexpedição de correspondência da morada antiga para a nova',
          'Lojas online: Worten, Continente, Pingo Doce, Amazon, IKEA, transportadoras DHL/DPD/CTT Expresso',
          'Assinaturas: ginásio, escolas, clubes, médicos privados, veterinário, subscrições'
        ] },
        { kind: 'warning', text: 'Antes de sair da casa antiga, fotografe os contadores de água, electricidade e gás, feche ou transfira os contratos e guarde a leitura final. Caso contrário, pode acabar a pagar o consumo do morador seguinte.' }
      ]
    }
  ],
  costs: [
    { label: 'Mudança de morada através do ePortugal / gov.pt', amountEUR: 0, note: 'Normalmente gratuito; é necessária CMD ou Cartão de Cidadão/leitor de cartões, se o procedimento estiver disponível' },
    { label: 'Comprovativo de morada fiscal nas Finanças', amountEUR: 0, note: 'Pode ser descarregado online gratuitamente' },
    { label: 'Atestado de residência na Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'A tarifa depende da Junta; em algumas freguesias é gratuito, frequentemente 5–15 €' },
    { label: 'Reexpedição de correspondência CTT', amountEURMin: 20, amountEURMax: 80, note: 'Depende do prazo, destino e tipo de serviço; consulte a tarifa CTT actualizada' }
  ],
  sources: [
    {
      title: 'ePortugal: mudança de morada / Mudar de Morada',
      url: 'https://eportugal.gov.pt/en/cidadaos/-/informacoes/mudar-de-morada',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: portal dos serviços públicos de Portugal',
      url: 'https://www.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 23/2007: regime jurídico de entrada, permanência e saída de estrangeiros, obrigação de comunicar a morada',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34554775',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: alteração da morada fiscal',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/alterar_morada.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
