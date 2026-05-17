export default {
  editorialVoice: 'hackportugal',
  id: 'accident-euro-protocol',
  categoryId: 'auto_trips',
  title: 'Acidente de viação em Portugal — Declaração Amigável (protocolo europeu) e quando chamar a GNR',
  tldr: 'Em caso de acidente sem feridos e sem desacordo — preencha a **Declaração Amigável de Acidente Automóvel (DAAA)**, o protocolo europeu bilateral. Se houver desacordo, condutor embriagado, feridos ou terceiros — 112 → GNR/PSP. O tomador do seguro deve comunicar o acidente ao segurador no prazo de **8 dias** (DL 72/2008 — Regime Jurídico do Contrato de Seguro). O incumprimento do prazo **não significa automaticamente** a perda do direito a indemnização para todos (para o terceiro lesado aplica-se um regime próprio), mas cria um risco real de recusa ou redução do pagamento, sobretudo se o atraso tiver causado prejuízo ao segurador. É melhor cumprir o prazo.',
  tags: ['acidente', 'colisão', 'seguro', 'gnr', 'declaração amigável'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'first-minutes',
      title: 'Primeiros minutos no local',
      content: [
        { kind: 'checklist', items: [
          '🚨 Ligue os quatro piscas. Se estiver numa autoestrada — leia o guia «Pneu furado na autoestrada»',
          '🦺 Vista o colete refletor ANTES de sair do carro (obrigatório em Portugal)',
          '⚠️ Coloque o triângulo a 30 m (rua urbana — 50 cm do passeio é aceitável, autoestrada — 30 m)',
          '🚑 Verifique todas as pessoas: há feridos → 112 imediatamente',
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
          '🚑 Há feridos (de qualquer tipo — mesmo que seja «apenas uma contusão»)',
          '💥 Os danos materiais são claramente > 5 000 € ou há infraestruturas danificadas',
          '⚖️ O condutor é suspeito de conduzir sob o efeito de álcool ou drogas',
          '🚗 Um dos intervenientes não tem documentos ou não tem seguro',
          '🏃 O responsável fugiu do local do acidente',
          '🗣️ Há conflito, os intervenientes não conseguem chegar a acordo',
          '🌍 Um dos intervenientes é estrangeiro sem seguro português e não domina línguas'
        ]},
        { kind: 'paragraph', text: 'A GNR Brigada de Trânsito é responsável pelas autoestradas e estradas interurbanas; a PSP, pelas cidades. Elaboram um auto de notícia (relatório policial) — um documento com peso para tribunal ou seguradora.' }
      ]
    },
    {
      id: 'daaa',
      title: 'Declaração Amigável — como preencher',
      content: [
        { kind: 'paragraph', text: 'O formulário europeu de participação de acidente é comum em toda a UE. Cada condutor deve tê-lo no porta-luvas juntamente com a Carta Verde. Preenche-se um formulário autocopiativo.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: '1. Preencher a frente em conjunto', content: [
            { kind: 'checklist', items: [
              'Data, hora, local (quilómetro / rua)',
              'Se há feridos (mesmo que «não haja ferimentos»)',
              'Se há testemunhas',
              'Dados de ambas as apólices (segurador, número)',
              'Descrição dos veículos (marca, matrícula, proprietário, condutor)',
              'Esquema do acidente — desenhar a posição, setas, sinais',
              'Assinalar as 17 caixas de circunstâncias (velocidade, mudança de direção, ultrapassagem, etc.)'
            ]}
          ]},
          { id: 'd2', title: '2. Assinar por ambas as partes', content: [
            { kind: 'paragraph', text: 'IMPORTANTE: ao assinar, você concorda APENAS com os factos na parte frontal. A culpa é determinada pelo segurador. NÃO escreva «a culpa é minha» no campo «observações».' }
          ]},
          { id: 'd3', title: '3. Separar as cópias', content: [
            { kind: 'paragraph', text: 'A branca (original) fica consigo, a amarela fica com o outro interveniente. No topo do formulário há instruções sobre o que fazer a seguir.' }
          ]},
          { id: 'd4', title: '4. Entregar ao segurador no prazo de 8 dias', content: [
            { kind: 'checklist', items: [
              'E-mail / formulário no site / aplicação do segurador',
              'Anexar fotografias do local',
              'O seu IBAN para indemnização',
              'Declaração da oficina'
            ]}
          ]}
        ]},
        { kind: 'warning', text: 'Sem DAAA e sem GNR → a seguradora muito provavelmente recusará a indemnização. Faça sempre uma participação.' }
      ]
    },
    {
      id: 'special-cases',
      title: 'Situações especiais',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'O outro interveniente fugiu', content: [
            { kind: 'paragraph', text: 'Chamada para o 112 → auto de notícia da GNR/PSP. O FGA (Fundo de Garantia Automóvel), quando o responsável não tem seguro, cobre danos corporais e (com limitações) danos materiais. Quando o responsável é **desconhecido** e fugiu do local do acidente, a cobertura de danos materiais limita-se a casos especiais; os danos corporais são normalmente cobertos. Contacte diretamente o FGA (fga.pt) ou a sua seguradora para obter instruções.' }
          ]},
          { id: 's2', title: 'Acidente com objeto desconhecido (poste, sinal)', content: [
            { kind: 'paragraph', text: 'A GNR é obrigatória. Sem auto, a seguradora tratará isto como «danos próprios» — a indemnização total só existirá se tiver cobertura Casco (danos próprios), e não apenas RC básica.' }
          ]},
          { id: 's3', title: 'Estrangeiro envolvido no acidente', content: [
            { kind: 'paragraph', text: 'A Carta Verde funciona em toda a UE/EEE. Se não existir — chame a GNR e confirme o seguro. Para condutores da Federação Russa/Brasil após 2022, a Carta Verde pode não funcionar — confirme com o segurador.' }
          ]},
          { id: 's4', title: 'Táxi / Uber / Bolt', content: [
            { kind: 'paragraph', text: 'A plataforma tem seguro da viagem. Comunique obrigatoriamente o incidente através da aplicação no prazo de 24 horas.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'Depois — questões médicas e jurídicas',
      content: [
        { kind: 'checklist', items: [
          '🏥 Mesmo uma contusão «ligeira» → SNS / consulta privada no prazo de 24 h. O atestado é necessário para a seguradora / pensão',
          '⚖️ Acidente grave com incapacidade → advogado especializado em acidentes rodoviários',
          '💰 Danos não patrimoniais, perda de rendimentos — tudo é indemnizável nos termos do Código Civil',
          '📋 Prazo para intentar ação — 3 anos a partir da estabilização dos danos (art. 498 CC)',
          '🚗 Reparação — apenas em oficinas acreditadas da rede do segurador ou com orçamento aprovado'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros (guia sobre a DAAA)', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Estrada (regras de trânsito de Portugal) — artigo 89 (participação de acidente)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGA — Fundo de Garantia Automóvel', url: 'https://www.fga.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
