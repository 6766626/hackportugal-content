export default {
  editorialVoice: 'hackportugal',
  id: 'common-scams',
  categoryId: 'emergency_rights',
  title: 'Esquemas de fraude típicos em Portugal e como os evitar',
  tldr: 'Fraudes dirigidas a recém-chegados a Portugal: anúncios falsos de arrendamento, “representantes” falsos para o NIF, phishing em nome da AIMA/Finanças, ataques por SMS com QR, furtos em caixas automáticas. Na UE, a protecção do consumidor é forte — apresente queixa à PSP, DECO, Banco de Portugal, CICDR. Nunca pague antecipadamente por algo que não viu pessoalmente.',
  tags: ['fraude', 'segurança', 'burla'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'housing-scams',
      title: 'Fraudes com arrendamento e habitação',
      content: [
        { kind: 'paragraph', text: 'Um dos tipos mais comuns. Visam estrangeiros que procuram casa a partir do estrangeiro.' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Esquema clássico do "proprietário no estrangeiro"', content: [
            { kind: 'paragraph', text: 'Anúncio: bom apartamento a um preço abaixo do mercado. O “proprietário” diz que vive no Reino Unido/Alemanha/EUA e pede um pagamento antecipado pela “reserva” via Western Union/criptomoeda/transferência bancária antes da visita. Depois da transferência — silêncio.' },
            { kind: 'warning', text: 'REGRA: nunca pague por um apartamento que não viu pessoalmente. Verifique sempre se o proprietário é titular do imóvel (certidão da Conservatória do Registo Predial).' }
          ]},
          { id: 's2', title: 'Agentes falsos', content: [
            { kind: 'paragraph', text: 'Um “agente” mostra um apartamento que não tem direito de arrendar: obtém as chaves, recebe a caução e desaparece. O verdadeiro proprietário aparece uma semana depois.' },
            { kind: 'warning', text: 'REGRA: verifique a licença do agente na AMI (Associação dos Mediadores Imobiliários, ami.pt). Os agentes profissionais têm um número AMI, que indicam no anúncio.' }
          ]},
          { id: 's3', title: 'Alteração das condições no dia da assinatura', content: [
            { kind: 'paragraph', text: 'O contrato está acordado, mas no dia da assinatura “as condições mudam” — caução mais alta, prazo mais curto, comissões adicionais.' },
            { kind: 'warning', text: 'REGRA: leia TODOS os pontos do contrato. Recuse assinar no momento — peça 24 horas para rever. Por lei, tem direito a fazê-lo.' }
          ]}
        ]}
      ]
    },
    {
      id: 'nif-niss-scams',
      title: 'Fraudes com NIF e NISS',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: '“Representante” cobra um preço excessivo', content: [
            { kind: 'paragraph', text: 'Oficialmente, o NIF nas Finanças é gratuito; um representante fiscal para cidadãos de países terceiros custa 60-150 €. Alguns “serviços” pedem 300-500 €. Isto é um pagamento em excesso.' }
          ]},
          { id: 'n2', title: 'Certificados NIF falsos', content: [
            { kind: 'paragraph', text: '“Obtenha o NIF numa hora” em sites suspeitos. O NIF emitido pode ser falso ou não estar registado na AT. Sem registo na AT, o número é inútil.' },
            { kind: 'warning', text: 'VERIFICAÇÃO: entre no Portal das Finanças com o NIF emitido e a palavra-passe temporária — se o acesso funcionar, o NIF é verdadeiro.' }
          ]},
          { id: 'n3', title: 'Continuação da colaboração sem consentimento', content: [
            { kind: 'paragraph', text: 'Depois de obter a sua autorização de residência, o “representante” continua a receber correspondência fiscal — e esconde-a ou extorque dinheiro. Após obter a autorização de residência, é necessário cancelar oficialmente o representante no Portal das Finanças.' }
          ]}
        ]}
      ]
    },
    {
      id: 'phishing',
      title: 'Phishing em nome da AIMA/Finanças/bancos',
      content: [
        { kind: 'checklist', items: [
          '⚠️ SMS “AIMA: a sua autorização de residência foi suspensa, clique para renovar” — phishing. A AIMA nunca envia links por SMS',
          '⚠️ E-mail “Finanças: deve XXX €, pague através do link” — phishing. A AT envia cartas oficiais por correio CTT',
          '⚠️ SMS “o seu banco: transacção suspeita, confirme” — phishing. Nunca abra links recebidos por SMS',
          '⚠️ “MB WAY: confirme o pagamento com o código XXXX” — se não iniciou o pagamento, NÃO confirme. O burlão conhece o seu número e está a tentar retirar dinheiro',
          '✅ Aceda SEMPRE ao portal oficialmente (através de marcador ou do Google), e não por um link',
          '✅ Para o banco — ligue para o número no verso do cartão'
        ]}
      ]
    },
    {
      id: 'atm-scams',
      title: 'Fraudes em caixas automáticas',
      content: [
        { kind: 'checklist', items: [
          '⚠️ Skimmers (dispositivos de leitura de cartões) — verifique o teclado e a ranhura do cartão antes de utilizar',
          '⚠️ “Ajudantes” junto ao Multibanco — nunca aceite ajuda, recuse educadamente',
          '⚠️ “O seu cartão ficou preso” — o burlão pede para introduzir novamente o PIN e depois fica com o cartão. Nunca introduza o PIN neste cenário',
          '✅ Utilize caixas automáticas dentro de balcões bancários (é mais seguro)',
          '✅ Cubra o teclado com a mão ao introduzir o PIN',
          '✅ Em caso de bloqueio — ligue imediatamente ao banco',
          '✅ Limites de levantamento de 200-400 €/dia → o prejuízo por fraude fica limitado'
        ]}
      ]
    },
    {
      id: 'tourist-scams',
      title: 'Fraudes com turistas (incluindo expats)',
      content: [
        { kind: 'checklist', items: [
          '🎫 “Sorteio” / “Promoção” na rua — pedem para assinar uma petição/inquérito → distraem-no para o roubar',
          '💰 “Venda de droga” no Bairro Alto / Cais do Sodré — muitas vezes o produto é falso, e a situação pode ser provocada pela polícia',
          '🚕 Táxi-armadilha no aeroporto — tarifas fixas até ao centro de Lisboa ~15-20 €; se for mais, é burla. Melhor Uber/Bolt/FreeNow',
          '👛 Carteiristas no eléctrico 28 (Lisboa), metro Baixa-Chiado, Rossio — mantenha a mala à sua frente',
          '🏧 “Trocamos moeda” em pontos não oficiais — enganam sempre na taxa de câmbio. Utilize bancos ou casas de câmbio oficiais',
          '🎭 Angariadores falsos para bares/restaurantes de fado nas ruas — levam-no para um local “autêntico”, onde a conta é 3-5 vezes mais alta',
          '📱 Wi-Fi “free_airport” — pode ser falso. Utilize VPN ou internet móvel'
        ]}
      ]
    },
    {
      id: 'money-laundering',
      title: 'Fraudes com transferências de dinheiro',
      content: [
        { kind: 'checklist', items: [
          '❌ “Troco Sberbank → Revolut, comissão de 5%” no Telegram/Facebook — em 80% dos casos é fraude',
          '❌ Casas de câmbio de cripto não verificadas — utilize apenas plataformas reguladas',
          '❌ Transferências “amigos e família” para desconhecidos — PayPal/Revolut não protegem estas operações',
          '✅ Canais oficiais: Wise (Transferwise), Revolut, bancos regulados',
          '✅ Criptomoeda: utilize plataformas com KYC (Kraken, Bitstamp, Coinbase)',
          '✅ Em caso de sanções — consulte um advogado em Portugal sobre conformidade, e não “representantes” em chats'
        ]}
      ]
    },
    {
      id: 'where-report',
      title: 'Onde comunicar',
      content: [
        { kind: 'checklist', items: [
          '🚨 PSP — 112 (emergência) ou a esquadra de polícia mais próxima. Para apresentar queixa na polícia',
          '🌐 Cibercrime — denúncia em cibercrime.ministeriopublico.pt para fraude online',
          '💰 Banco de Portugal — portal para reclamações sobre bancos e serviços financeiros',
          '📞 DECO PROteste — 218 410 801, defesa dos direitos do consumidor',
          '⚖️ Provedor do Cliente — provedor para reclamações contra bancos e seguradoras',
          '🏠 Instituto da Habitação (IHRU) — para litígios de habitação',
          '👥 CICDR — comissão para a discriminação',
          '📧 Portal da Queixa (portaldaqueixa.com) — portal geral para reclamações públicas'
        ]}
      ]
    },
    {
      id: 'prevention',
      title: 'Princípios gerais de protecção',
      content: [
        { kind: 'checklist', items: [
          '🛡️ Regra das “24 horas”: nunca tome decisões financeiras importantes no mesmo dia. Durma sempre sobre o assunto',
          '🔍 Verifique através de registos oficiais: AMI (imobiliário), RAM (automóveis), Conservatória (propriedade), OA (advogados)',
          '👨‍👩‍👦 Confie em contactos verificados, não em chats. Um jurista ou advogado privado em Portugal é mais barato do que perder 10 000 €',
          '💼 Documente TUDO: e-mails, SMS, capturas de ecrã, fotografias. Em caso de tribunal, isto são provas',
          '💳 Não utilize o cartão principal para compras online. Utilize um cartão adicional com limite de 1000 €',
          '🔐 2FA em todo o lado — bancos, Gov.pt, AIMA',
          '📱 Protecção contra troca de SIM — PIN no SIM e na conta do operador',
          '🇷🇺 Se fala russo — não “faça amizades” no Telegram com pessoas que oferecem ajuda: frequentemente são armadilhas'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'PSP — Polícia de Segurança Pública', url: 'https://www.psp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Cibercrime — Gabinete de Cibercrime (Ministério Público)', url: 'https://cibercrime.ministeriopublico.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Banco de Portugal — direitos do consumidor de serviços financeiros', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DECO Proteste — direitos do consumidor', url: 'https://www.deco.proteste.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMI — Associação dos Mediadores Imobiliários', url: 'https://www.ami.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
