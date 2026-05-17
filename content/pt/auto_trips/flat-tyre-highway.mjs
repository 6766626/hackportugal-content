export default {
  editorialVoice: 'hackportugal',
  id: 'flat-tyre-highway',
  categoryId: 'auto_trips',
  title: 'Pneu furado na autoestrada — sequência correcta',
  tldr: 'Nas autoestradas portuguesas é estritamente proibido mudar um pneu na faixa de rodagem. Procedimento: quatro piscas → encostar na berma de emergência → triângulo a 30 m → colete → chamada para a assistência (707 500 501 Brisa ou 707 509 510 IP). Para condutores comuns, o seguro assistência em viagem cobre normalmente o reboque e o transporte.',
  tags: ['acidente', 'roda', 'pneu', 'autoestrada', 'assistência'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'first-seconds',
      title: 'Primeiros segundos — segurança',
      content: [
        { kind: 'checklist', items: [
          '🚨 Ligar imediatamente os quatro piscas',
          '🛞 NÃO travar bruscamente — segurar o volante e aliviar o acelerador suavemente',
          '➡️ Olhar para o espelho direito — verificar se é possível encostar na berma de emergência',
          '🛑 Encostar o MAIS longe possível da faixa de rodagem, paralelamente ao rail de protecção',
          '⚙️ Engatar o modo de estacionamento / travão de mão, desligar a ignição, retirar a chave'
        ]},
        { kind: 'warning', text: 'Se o pneu rebentou a uma velocidade >100 km/h e perdeu o controlo — não tente parar de imediato; reduza a velocidade suavemente, mantenha a direcção no centro da faixa e estabilize o veículo.' }
      ]
    },
    {
      id: 'get-out',
      title: 'Como sair do veículo',
      content: [
        { kind: 'checklist', items: [
          '🦺 Vestir o colete reflector ANTES de sair',
          '🚪 Sair pelo lado OPOSTO ao trânsito (pela porta do passageiro)',
          '🚸 Colocar todos os passageiros atrás do rail de protecção, afastados da faixa',
          '⚠️ Colocar o triângulo a uma distância ≥30 m atrás do veículo (art. 88 Código da Estrada)',
          '📍 Memorizar o marco quilométrico (kp) — será necessário para a assistência'
        ]},
        { kind: 'warning', text: 'NÃO mude o pneu na berma da autoestrada, mesmo que tenha pneu suplente. Isto é expressamente proibido pelo Código da Estrada e é perigoso — todos os anos há condutores que morrem atropelados por camiões em circulação.' }
      ]
    },
    {
      id: 'call-help',
      title: 'Chamar assistência',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'A. Seguro assistência em viagem', content: [
            { kind: 'paragraph', text: 'Se tiver esta cobertura (normalmente incluída no pacote RC ou contratada separadamente por ~30 €/ano), ligue para o número da seguradora — esta organizará o reboque e o transporte até à oficina mais próxima. Habitualmente, os primeiros 50–100 km são gratuitos.' }
          ]},
          { id: 'c2', title: 'B. Concessionária da autoestrada', content: [
            { kind: 'checklist', items: [
              'Brisa (A1, A2, A5, A6, A9-A14): 707 500 501',
              'Ascendi (A4, A7, A24, A25, A41, A42): 707 509 510',
              'AE do Atlântico (A8, A15): 707 200 002',
              'Norscut (A24): 800 203 021',
              'Há sempre postos SOS de emergência a cada 2 km'
            ]}
          ]},
          { id: 'c3', title: 'C. GNR — se houver feridos ou acidente', content: [
            { kind: 'paragraph', text: '112 — número universal de emergência. A GNR Brigada de Trânsito desloca-se a acidentes rodoviários.' }
          ]}
        ]}
      ]
    },
    {
      id: 'paperwork',
      title: 'Depois — documentos e indemnização',
      content: [
        { kind: 'checklist', items: [
          '📄 Recibo do reboque — necessário para a seguradora',
          '🏪 Talão do pneu novo — se a avaria resultou de um buraco / detritos, pode apresentar reclamação à concessionária (707 500 501)',
          '📝 Apresentar reclamação no site da Brisa / Ascendi com fotografias do local + kp',
          '⏰ Prazo da reclamação — 30 dias',
          '💶 A concessionária muitas vezes reembolsa o custo do pneu, se conseguir provar a causa (fotografia do buraco, relatório da GNR)'
        ]}
      ]
    },
    {
      id: 'prevention',
      title: 'Prevenção',
      content: [
        { kind: 'checklist', items: [
          '🛞 Verificar a pressão uma vez por mês na bomba de combustível (gratuito na Galp/BP)',
          '🌡️ No Verão, +0,3 bar face ao valor nominal — o calor português faz “perder ar” aos pneus',
          '👀 Inspeccionar o piso para detectar fissuras e bolhas a cada 2 meses',
          '📐 Profundidade do piso não inferior a 1,6 mm (IPO é rigorosa)',
          '🎯 Substituir pneus aos pares no mesmo eixo',
          '📅 Pneus com mais de 10 anos — substituir mesmo com bom piso (envelhecimento do composto de borracha)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Código da Estrada — texto consolidado', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal — segurança rodoviária', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Nacional de Segurança Rodoviária (ANSR)', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — segurança dos pneus', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
