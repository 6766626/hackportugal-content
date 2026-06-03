export default {
  editorialVoice: 'hackportugal',
  id: 'everyday-apps',
  categoryId: 'digital_gov',
  title: 'Aplicações essenciais para viver em Portugal',
  tldr: 'Kit básico para expatriados: MB WAY (pagamentos), Autenticação.gov (Chave Móvel Digital), SNS 24 (saúde), Portal AT (impostos), AIMA Renovações (autorização de residência), MobiCascais/Navegante (transportes), CTT (correio), Bolt/Uber (táxi), Glovo/Uber Eats (entrega de comida), Continente/Lidl Plus (supermercados), Via Verde (estradas), Folhetos.pt (descontos). Na prática, dificilmente se passa sem a Chave Móvel Digital: é com ela que funciona a maioria dos serviços públicos online — active-a primeiro.',
  tags: ['aplicações', 'serviços digitais', 'digital'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'gov',
      title: '🏛️ Serviços públicos — obrigatórios',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Autenticação.gov', content: [
            { kind: 'paragraph', text: 'CMD (Chave Móvel Digital) — assinatura electrónica do Estado. Sem ela não funcionam: Portal AT, serviços online da AIMA, SNS 24, IRN, Segurança Social Direta. Activação: autenticacao.gov.pt → Aderir CMD → NIF + número de telefone português. Código por SMS para cada operação.' }
          ]},
          { id: 'g2', title: 'SNS 24', content: [
            { kind: 'checklist', items: [
              'Registo médico, receitas, resultados de análises',
              'Chat online com médico ou enfermeiro 24/7',
              'Videochamada com um profissional de saúde',
              'Histórico electrónico de vacinas',
              'Marcação em serviço de urgência ou Centro de Saúde',
              'Teste para verificação de sintomas'
            ]}
          ]},
          { id: 'g3', title: 'Portal das Finanças', content: [
            { kind: 'checklist', items: [
              'Aplicação e-Fatura — digitaliza recibos para deduções no IRS',
              'Site principal através do navegador + CMD',
              'Verificação do estado do NIF / morada',
              'Entrega do IRS directamente pelo regime simplificado'
            ]}
          ]},
          { id: 'g4', title: 'ePortugal', content: [
            { kind: 'paragraph', text: 'Portal único de todos os serviços públicos — alteração de morada, certidões, licenças. Mais de 500 serviços num só lugar. Usa CMD ou CC para assinatura.' }
          ]},
          { id: 'g5', title: 'AIMA Renovações', content: [
            { kind: 'paragraph', text: 'Portal para renovar a autorização de residência — portal-renovacoes.aima.gov.pt. Através da CMD. O principal local onde vive o seu estatuto de imigração a partir de 2026.' }
          ]}
        ]}
      ]
    },
    {
      id: 'money',
      title: '💳 Dinheiro e pagamentos',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'MB WAY', content: [
            { kind: 'checklist', items: [
              'Aplicação portuguesa básica para pagamentos móveis — funciona quase em todo o lado',
              'Envio de dinheiro por número de telefone / NIF',
              'Pagamento por código QR em lojas e restaurantes',
              'Levantamento de dinheiro em caixas Multibanco sem cartão',
              'Os limites dependem do banco (normalmente cerca de 2 500 € por dia) — confirme na sua aplicação',
              'Associada a uma conta portuguesa: funciona com a Revolut (com IBAN português PT50), mas não com Wise / N26'
            ]}
          ]},
          { id: 'm2', title: 'Revolut / Wise / N26', content: [
            { kind: 'checklist', items: [
              'Revolut (desde julho de 2025 disponibiliza IBAN português PT50 gratuitamente) — conta multimoeda, criptomoeda, acções',
              'Wise (IBAN BE) — melhor para transferências multimoeda, mais de 20 moedas',
              'N26 (IBAN DE) — banca mínima, mas boa experiência de utilização',
              'Útil como segunda conta ou conta em moeda estrangeira + dinheiro para viagens'
            ]}
          ]},
          { id: 'm3', title: 'Aplicação do seu banco português', content: [
            { kind: 'paragraph', text: 'ActivoBank, Millennium BCP, Caixa, Novobanco, Santander — todos têm aplicações. Transferências SEPA, controlo de cartões, extractos, depósitos. Os bancos portugueses não são os mais práticos, mas são necessários.' }
          ]}
        ]}
      ]
    },
    {
      id: 'transport',
      title: '🚆 Transportes',
      content: [
        { kind: 'checklist', items: [
          'Navegante Metropolitano (Lisboa) — passe electrónico, bilhetes QR, horários de autocarros/metro/comboios',
          'MobiCascais (município de Cascais) — bicicletas, autocarros, estacionamento',
          'Anda (aplicação Andante/TIP para passes de transporte no Porto e em Lisboa)',
          'Bolt — táxi (mais barato do que Uber para viagens curtas)',
          'Uber — tem maior presença nas regiões',
          'FREE NOW — agregador de táxis',
          'BlaBlaCar — viagens partilhadas entre cidades',
          'Flixbus — autocarros interurbanos',
          'CP — Comboios de Portugal — comboios, bilhetes',
          'Via Verde — estradas com portagem',
          'GoEuro / Rome2Rio — comparação de formas de chegar'
        ]}
      ]
    },
    {
      id: 'food-shop',
      title: '🛒 Alimentação e compras',
      content: [
        { kind: 'checklist', items: [
          'Continente Siga — cartão digital, cupões, leitor de preços na loja',
          'Pingo Doce — semelhante',
          'Lidl Plus — raspadinhas, catálogos de promoções, cupões',
          'Folhetos.pt — agregador de descontos semanais de todas as cadeias',
          'Too Good To Go — comida com desconto de lojas/restaurantes no fim do dia (pode poupar 50-70%)',
          'Glovo — entrega de comida, mercearias, produtos',
          'Uber Eats — entrega de comida',
          'Bolt Food — popular no Porto',
          'Auchan, El Corte Inglés — se estiverem por perto'
        ]}
      ]
    },
    {
      id: 'mail-docs',
      title: '📨 Correio e documentos',
      content: [
        { kind: 'checklist', items: [
          'CTT — seguimento de encomendas, marcação numa estação, desalfandegamento online',
          'Id.Gov.Pt — carteira dos seus documentos digitais (Cartão de Cidadão, Chave Móvel Digital, carta de condução)',
          'DocsQR — digitalização de documentos com o telefone, OCR',
          'CamScanner — alternativa com exportação para PDF'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Autenticação.gov — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — aplicação e portal', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — aplicação AT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — portal único de serviços públicos', url: 'https://www.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
