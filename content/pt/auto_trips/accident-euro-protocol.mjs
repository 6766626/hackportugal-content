export default {
  editorialVoice: 'hackportugal',
  id: 'accident-euro-protocol',
  categoryId: 'auto_trips',
  title: 'Acidente de viação em Portugal — Declaração Amigável (protocolo europeu) e quando chamar a GNR',
  tldr: 'Em caso de acidente sem feridos e sem desacordo — preencha a Declaração Amigável de Acidente Automóvel (DAAA), o protocolo europeu bilateral. Se houver desacordo, condutor alcoolizado, feridos ou terceiros — 112 → GNR/PSP. O tomador do seguro deve comunicar o acidente à seguradora no prazo de 8 dias (DL 72/2008 — Regime Jurídico do Contrato de Seguro).\n\nO incumprimento do prazo não significa automaticamente a perda do direito a indemnização para todos (para o terceiro lesado aplica-se um regime separado), mas cria um risco real de recusa ou redução do pagamento, sobretudo se o atraso tiver causado prejuízo à seguradora. É melhor cumprir o prazo.',
  tags: ['acidente', 'sinistro', 'seguro', 'gnr', 'declaração amigável'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'first-minutes',
      title: 'Primeiros minutos no local',
      content: [
        { kind: 'checklist', items: [
          '🚨 Ligue os quatro piscas. Se estiver numa autoestrada — leia o guia «Pneu furado na autoestrada»',
          '🦺 Vista o colete refletor ANTES de sair do carro (obrigatório em Portugal)',
          '⚠️ Coloque o triângulo a 30 m (rua urbana — 50 cm do passeio é admissível, autoestrada — 30 m)',
          '🚑 Verifique todos: há feridos → 112 imediatamente',
          '📸 Fotografe: posição dos veículos, matrículas, sinais de trânsito, marcas de travagem, danos',
          '🪪 Troque: documentos de identificação, cartas de condução, documento do veículo (DUA), Carta Verde (apólice de seguro)'
        ]}
      ]
    },
    {
      id: 'when-gnr',
      title: 'Quando chamar a GNR / PSP (112)',
      content: [
        { kind: 'checklist', items: [
          '🚑 Há feridos (de qualquer tipo — mesmo que seja «só uma pisadura»)',
          '💥 Os danos materiais são claramente > 5 000 € ou há infraestrutura danificada',
          '⚖️ Há suspeita de condução sob o efeito de álcool ou drogas',
          '🚗 Um dos intervenientes não tem documentos ou não tem seguro',
          '🏃 O responsável fugiu do local do acidente',
          '🗣️ Há conflito, os intervenientes não conseguem chegar a acordo',
          '🌍 Um dos intervenientes é estrangeiro sem seguro português, não domina línguas'
        ]},
        { kind: 'paragraph', text: 'A GNR Brigada de Trânsito é responsável por autoestradas e estradas interurbanas, a PSP — pelas cidades. Elaboram o auto de notícia (relatório policial) — um documento de peso para tribunal ou seguradora.' }
      ]
    },
    {
      id: 'daaa',
      title: 'Declaração Amigável — como preencher',
      content: [
        { kind: 'paragraph', text: 'O impresso europeu de participação de acidente é uniforme em toda a UE. Cada condutor deve tê-lo no porta-luvas juntamente com a Carta Verde. Preenche-se o impresso autocopiativo.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: '1. Preencher a frente em conjunto', content: [
            { kind: 'checklist', items: [
              'Data, hora, local (quilómetro / rua)',
              'Se há feridos (mesmo que «não haja lesões»)',
              'Se há testemunhas',
              'Dados de ambas as apólices (seguradora, número)',
              'Descrição dos veículos (marca, matrícula, proprietário, condutor)',
              'Esquema do acidente — desenhar a posição, setas, sinais',
              'Assinalar as 17 caixas de circunstâncias (velocidade, viragem, ultrapassagem, etc.)'
            ]}
          ]},
          { id: 'd2', title: '2. Assinar por ambas as partes', content: [
            { kind: 'paragraph', text: 'IMPORTANTE: ao assinar, concorda APENAS com os factos constantes da frente. A responsabilidade é determinada pela seguradora. NÃO escreva «sou culpado» no campo «observações».' }
          ]},
          { id: 'd3', title: '3. Separar as cópias', content: [
            { kind: 'paragraph', text: 'A branca (original) — fica consigo, a amarela — com o outro interveniente. No topo do impresso há instruções sobre o que fazer a seguir.' }
          ]},
          { id: 'd4', title: '4. Entregar à seguradora em 8 dias', content: [
            { kind: 'checklist', items: [
              'E-mail / formulário no site / aplicação da seguradora',
              'Anexar fotografias do local',
              'O seu IBAN para indemnização',
              'Declaração da oficina'
            ]}
          ]}
        ]},
        { kind: 'warning', text: 'Sem DAAA e sem GNR → a seguradora, muito provavelmente, recusará a indemnização. Faça sempre uma participação.' }
      ]
    },
    {
      id: 'special-cases',
      title: 'Situações especiais',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'O outro interveniente fugiu', content: [
            { kind: 'paragraph', text: 'Chamada para 112 → GNR/PSP auto de notícia. O FGA (Fundo de Garantia Automóvel), quando o responsável não está segurado, cobre danos corporais em pessoas e (com limitações) danos materiais. No caso de responsável desconhecido que tenha fugido do local do acidente, a cobertura de danos materiais é limitada a situações especiais; os danos corporais em pessoas são, em regra, cobertos. Contacte diretamente o FGA (fga.pt) ou a sua seguradora para obter instruções.' }
          ]},
          { id: 's2', title: 'Acidente com objeto desconhecido (poste, sinal)', content: [
            { kind: 'paragraph', text: 'A GNR é obrigatória. Sem auto, a seguradora tratará isto como «danos próprios» — a indemnização integral só existe se tiver um pacote Casco (danos próprios), e não apenas RC básico.' }
          ]},
          { id: 's3', title: 'Estrangeiro como interveniente no acidente', content: [
            { kind: 'paragraph', text: 'A Carta Verde («carta verde») funciona em toda a UE/EEE. Se não a tiver — chame a GNR e verifique o seguro. Para condutores da Federação Russa/Brasil após 2022, a Carta Verde pode não funcionar — confirme com a seguradora.' }
          ]},
          { id: 's4', title: 'Táxi / Uber / Bolt', content: [
            { kind: 'paragraph', text: 'A plataforma tem seguro da viagem. Comunique obrigatoriamente o incidente através da aplicação no prazo de 24 horas.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'Depois — saúde e parte jurídica',
      content: [
        { kind: 'checklist', items: [
          '🏥 Mesmo uma pisadura «ligeira» → SNS / consulta privada no prazo de 24 h. A declaração é necessária para a seguradora / pensão',
          '⚖️ Acidente grave com incapacidade → advogado especializado em acidentes de viação',
          '💰 Danos morais, perda de rendimentos — tudo é indemnizável ao abrigo do Código Civil',
          '📋 Prazo para intentar ação — 3 anos a partir da estabilização dos danos (art. 498 CC)',
          '🚗 Reparação — apenas em oficinas acreditadas da rede da seguradora ou com orçamento acordado'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros (guia sobre DAAA)', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Estrada (regras de trânsito em Portugal) — artigo 89 (participação de acidente)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGA — Fundo de Garantia Automóvel', url: 'https://www.fga.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
