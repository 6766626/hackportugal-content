export default {
  editorialVoice: 'hackportugal',
  id: 'via-card-electronic-toll',
  categoryId: 'auto_trips',
  title: 'Via Verde e alternativas — todas as formas de pagar portagens',
  tldr: 'A Via Verde é um dispositivo eletrónico para passar sem parar. Não é a única forma. Alternativas: Via Card (descartável), TollCard pré-pago, pagamento posterior através dos CTT/Payshop, EasyToll para matrículas estrangeiras. Para matrículas portuguesas, após a passagem, o pagamento fica disponível após ~48 h, e a janela de pagamento é normalmente de 15 dias úteis. Depois dessa janela — coima por contraordenação (intervalo fixo, NÃO é um “×25” universal). A partir de 01.01.2025, foram abolidas as portagens na A22 Algarve, A23, A24, A25 e em partes da A28, A4, A13.',
  tags: ['via verde', 'portagem', 'estradas com portagem', 'scut'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'options',
      title: 'Que opções existem',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Via Verde (a melhor opção para residentes)', content: [
            { kind: 'checklist', items: [
              'Identificador eletrónico (a caixinha verde no para-brisas)',
              'Débito automático da conta bancária / cartão',
              'Funciona em TODAS as autoestradas com portagem, parques EMEL, postos Galp/Repsol (descontos), ferries Transtejo, Soflusa',
              'Instalação: encomendar online em viaverde.pt, recebe por correio, ou levantar em lojas Via Verde/CTT',
              'Caução de 27,50 € reembolsável + 2 €/mês',
              'Gratuito (sem mensalidade): subscrição Via Verde Gratuita para quem tem <8 €/mês de tráfego'
            ]}
          ]},
          { id: 'o2', title: 'Via Card (para viagens curtas)', content: [
            { kind: 'paragraph', text: 'Cartão de plástico pré-pago com um determinado valor (5, 10, 20 €).\n\nÉ utilizado nas portagens “eletrónicas” em autoestradas antigas com portagem (A1, A2) — insere-o no dispositivo Via Verde na via de contacto. NÃO funciona nas Scut (estradas sem praças de portagem).' }
          ]},
          { id: 'o3', title: 'EasyToll (para matrículas estrangeiras)', content: [
            { kind: 'paragraph', text: 'Na primeira entrada numa Scut, associa o cartão bancário à matrícula nos terminais EasyToll (existem junto à fronteira e nos aeroportos). Depois disso, as passagens são cobradas automaticamente. Válido por 30 dias.' }
          ]},
          { id: 'o4', title: 'TollCard (pré-pago para turistas)', content: [
            { kind: 'paragraph', text: 'Cartão com saldo de 5/10/20/40 €. Ativa-se por SMS → depois o saldo vai sendo debitado. Pode ser comprado em postos Galp, Repsol, BP. Para viagens curtas.' }
          ]},
          { id: 'o5', title: 'CTT / Payshop (após a passagem)', content: [
            { kind: 'paragraph', text: 'Se passou num pórtico eletrónico sem Via Verde e não associou EasyToll — para matrículas portuguesas, o pagamento fica disponível após ~48 h, e a janela de pagamento é normalmente de 15 dias úteis. Pode pagar nos CTT, em agentes Payshop, ou online em portagens.ctt.pt. Depois dessa janela — coima por contraordenação.' }
          ]}
        ]}
      ]
    },
    {
      id: 'scut-explained',
      title: 'O que são ex-SCUT e quais são agora gratuitas',
      content: [
        { kind: 'paragraph', text: 'SCUT (Sem Cobrança ao Utilizador) — antigas estradas sem praças de portagem. Com o tempo, algumas passaram a ser pagas através de pórticos eletrónicos (sem cabines), e a partir de 01.01.2025 o governo aboliu as portagens em várias ex-SCUT — A22, A23, A24, A25 e partes da A28, além da A4 e A13/A13-1. Antes da viagem, confirme o estado atual de cada via (Infraestruturas de Portugal, Via Verde) — o regime ainda pode mudar.' },
        { kind: 'checklist', items: [
          '✅ A partir de 01.01.2025 GRÁTIS: A22 Algarve, A23 Beira Interior, A24 Interior Norte, A25 Beira Litoral, partes da A28 Norte Litoral, A4 Marão, A13/A13-1',
          '💳 Pagas através de pórtico eletrónico (pórticos eletrónicos, sem cabines): A29 Espinho-Ovar, A41/A42 circular do Porto e os restantes troços',
          '📷 Sinal de estrada com portagem: pórtico sobre a via com a placa “Pórtico Eletrónico”',
          '🟢 Ao passar com Via Verde: luz verde = passou; ⚠️ sem Via Verde — estado “é necessário pagar” através dos CTT/Payshop no prazo indicado (normalmente de 48 h a 15 dias úteis para matrículas portuguesas)'
        ]}
      ]
    },
    {
      id: 'proehali-bez',
      title: 'Passou numa Scut sem Via Verde — o que fazer',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Se o veículo tiver matrícula portuguesa', content: [
            { kind: 'checklist', items: [
              'O pagamento fica disponível após ~48 h da passagem, e a janela de pagamento é normalmente de 15 dias úteis através dos CTT/Payshop ou portagens.ctt.pt',
              'Tenha a matrícula + data/hora aproximada da passagem',
              'Depois dessa janela — notificação da AT com coima por contraordenação (intervalo fixo segundo a tabela — NÃO é um “×25” universal)',
              'Adicionalmente, custas judiciais de 30-100 €',
              'É melhor pagar rapidamente — o valor mínimo da coima só se aplica dentro do prazo estabelecido (ver na notificação)'
            ]}
          ]},
          { id: 'p2', title: 'Se o veículo tiver matrícula estrangeira', content: [
            { kind: 'checklist', items: [
              'A notificação segue através da autoridade nacional de registo do seu país',
              'Matrícula da UE: aplica-se a Diretiva 2011/82/EU — a informação é transmitida e a coima chega',
              'Fora da UE (Federação Russa, UA, BY, CH, USA): a carta da Infraestruturas de Portugal chega à morada de registo',
              'Se ignorar — na próxima entrada em Portugal, na fronteira podem mandá-lo parar e exigir o pagamento',
              'Solução: associar EasyToll antes da viagem ou instalar Via Verde Visitors'
            ]}
          ]},
          { id: 'p3', title: 'Contestar a coima', content: [
            { kind: 'paragraph', text: 'Através da AT portaldasfinancas.gov.pt → e-balcão. Fundamentos: Via Verde avariada, coima duplicada, matrícula incorreta. Prazo — 15 dias a contar da receção da notificação.' }
          ]}
        ]}
      ]
    },
    {
      id: 'via-verde-visitors',
      title: 'Via Verde Visitors (para viagens de curta duração)',
      content: [
        { kind: 'checklist', items: [
          'Dispositivo eletrónico como a Via Verde normal, mas com prazo fixo de 1 semana / 2 semanas / 1 mês',
          'Preço: 6 / 8 / 12 € + saldo pré-pago',
          'Encomendar online ou nas lojas Via Verde',
          'Para carros alugados — muitas vezes incluído no pacote de aluguer (confirme)',
          'Após a devolução — a caução é reembolsada'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Via Verde — caução (reembolsável)', amountEUR: 27.50 },
    { label: 'Via Verde — mensalidade', amountEUR: 2, note: '/mês' },
    { label: 'Via Verde Gratuita (com <8 €/mês de tráfego)', amountEUR: 0 },
    { label: 'Via Card (pré-pago)', amountEURMin: 5, amountEURMax: 40 },
    { label: 'Via Verde Visitors (1 semana)', amountEUR: 6 },
    { label: 'Ativação EasyToll', amountEUR: 0, note: '+portagem' },
    { label: 'Coima por não pagamento de portagem (após a janela)', note: 'intervalo fixo por contraordenação segundo a tabela IP/AT; valores concretos — na notificação (NÃO é um “×25” universal)' }
  ],
  sources: [
    { title: 'Via Verde — portal oficial', url: 'https://www.viaverde.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal — portagens', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EasyToll — associação para estrangeiros', url: 'https://www.portugaltolls.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Diretiva 2011/82/EU — cobrança transfronteiriça', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0082', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
