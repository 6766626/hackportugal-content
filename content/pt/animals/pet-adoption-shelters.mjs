export default {
  editorialVoice: 'hackportugal',
  id: 'pet-adoption-shelters',
  categoryId: 'animals',
  title: 'Adoptar um animal em Portugal — abrigos e processo',
  tldr: 'Em Portugal, a adopção num abrigo é gratuita ou tem uma contribuição simbólica (10-50 €) para cobrir a esterilização e o chip. Principais fontes: CRO municipais (Centro de Recolha Oficial), associações privadas (União Zoófila, ANIMAL, Bianca, CB), Animais de Rua (Lisboa), Casa dos Animais Lisboa. No site adopt.cao.pt há uma base nacional. A lei exige chip + registo no SIAC + seguro (para cães de raças perigosas).\n\nA esterilização está normalmente incluída.',
  tags: ['adopção', 'abrigo', 'cão', 'gato', 'cro', 'animal'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'where-to-adopt',
      title: '🏠 Onde procurar um animal',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Abrigos municipais (CRO)', content: [
            { kind: 'checklist', items: [
              '🏛️ Cada município tem um CRO (Centro de Recolha Oficial)',
              '📍 Lisboa: Casa dos Animais Lisboa (CAL) — Parque das Conchas',
              '📍 Porto: Centro Municipal de Recolha Animal (gato/cão) — Camarinha',
              '📍 Cascais: Canil Municipal de Cascais',
              '📍 Sintra: abrigo municipal de Sintra',
              '🌐 Todos os CRO: cm-cidade.pt → Animais de Companhia',
              '💰 Taxas 10-30 € (apenas para cobrir a esterilização)',
              '⚠️ Muitas vezes estão sobrelotados — os animais esperam muito tempo pela adopção'
            ]}
          ]},
          { id: 'w2', title: 'Associações privadas', content: [
            { kind: 'checklist', items: [
              '🐕 **União Zoófila** (zoofila.pt) — a maior, Lisboa',
              '🐱 **ANIMAL** (animal.pt) — nacional',
              '🦴 **Bianca** (bianca.pt) — Algarve, especializada em cães idosos',
              '🐶 **SOS Animal** (sosanimal.pt) — resgate',
              '🐈 **Gatos de Rua** (gatosderua.pt) — esterilização de gatos urbanos',
              '💰 Taxas 30-100 € (para cobrir esterilização, vacinas, chip)',
              '✅ Muitas vezes fazem avaliação e identificam antecipadamente problemas de comportamento'
            ]}
          ]},
          { id: 'w3', title: 'Plataformas de pesquisa', content: [
            { kind: 'checklist', items: [
              '🌐 **adopt.cao.pt** — base nacional (cães e gatos)',
              '🌐 **adoptar.pt** — base privada, muitos anúncios',
              '📱 **Tirar de Caixa** (Lisboa) — grupo no Facebook',
              '📱 **Adopta Lisboa** — aplicação para adopção',
              '📱 **Pawsome** — aplicação económica para consultar animais'
            ]}
          ]},
          { id: 'w4', title: 'Achados ocasionais', content: [
            { kind: 'checklist', items: [
              '🚨 Animal sem dono na rua — ligar 112 (se estiver em perigo) ou para o CRO local',
              '⚖️ Animal encontrado — a lei exige tentar encontrar o dono (fotografia nas redes sociais, anúncio)',
              '🔢 Ler o chip em qualquer clínica veterinária (ID — pet-id.pt)',
              '⏰ Se ao fim de 30 dias não aparecer dono — pode adoptar oficialmente'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: '📋 Processo de adopção',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Passo 1 — Candidatura', content: [
            { kind: 'checklist', items: [
              '🌐 Formulário no site do abrigo ou presencialmente',
              '🆔 CC / autorização de residência + comprovativo de morada',
              '🏠 Descrição da habitação: apartamento/moradia, tamanho, varanda, se são permitidos animais',
              '👨‍👩‍👧 Quem vive na casa (adultos/crianças/outros animais)',
              '⏰ Quanto tempo o animal ficará sozinho',
              '📞 Dados de contacto'
            ]}
          ]},
          { id: 'p2', title: 'Passo 2 — Visita e escolha', content: [
            { kind: 'checklist', items: [
              '🐾 Ir ao abrigo e conhecer os animais',
              '⏰ Passeio de teste para cães (25-30 min de passeio, observar o temperamento)',
              '🐱 Teste de contacto para gatos (interacção, reacção ao toque)',
              '👨‍⚕️ Conversa com um voluntário sobre o comportamento do animal, historial e problemas de saúde'
            ]}
          ]},
          { id: 'p3', title: 'Passo 3 — Verificação da habitação (para cães)', content: [
            { kind: 'checklist', items: [
              '🏠 Muitos abrigos fazem verificação da habitação — um voluntário desloca-se ao local',
              '✅ Verifica: varanda/quintal seguro, sem janelas abertas, existência de espaço para a cama',
              '⚖️ Raças potencialmente perigosas (ver abaixo): é necessária licença especial na Junta, seguro de responsabilidade civil mínimo de 50 000 € e requisitos especiais de identificação',
              '🚫 Se a verificação da habitação não for aprovada — podem recusar',
              '⏱️ Decisão em 1-3 dias'
            ]}
          ]},
          { id: 'p4', title: 'Passo 4 — Contrato e levantamento', content: [
            { kind: 'checklist', items: [
              '📜 Assinar o «Termo de Adopção» (contrato de adopção)',
              '💰 Pagar a taxa (se existir)',
              '📋 Receber os documentos: passaporte do animal, Caderneta Sanitária, cartão do chip',
              '🪪 O chip já está registado no SIAC em seu nome (ou é-lhe entregue para novo registo)',
              '🐾 Levar o animal (preparar transportadora, trela)',
              '⚠️ As primeiras semanas são um período de adaptação; o animal vai sentir a mudança'
            ]}
          ]},
          { id: 'p5', title: 'Passo 5 — Registo no SIAC', content: [
            { kind: 'checklist', items: [
              '🌐 SIAC — Sistema de Informação de Animais de Companhia (siac.vet)',
              '📝 Transferência/alteração do titular no SIAC — dentro do prazo estabelecido (normalmente 15 dias após a entrega). Confirme se o CRO/associação o faz de imediato ou se tem de ir a um veterinário',
              '🆔 NIF, CC, informação sobre o animal',
              '💰 Gratuito',
              '🚨 Sem novo registo = coima até 500 €'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'costs',
      title: '💰 Obrigações financeiras',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Iniciais', content: [
            { kind: 'checklist', items: [
              '💰 Taxa de adopção 0-100 €',
              '🧪 Esterilização (se não estiver feita): gata 80-150 €, cadela 150-300 €',
              '💉 Vacinas (se não estiverem feitas): 50-100 €',
              '🦠 Desparasitação: 10-20 €',
              '🛏️ Cama, tigelas, trela, areia: 50-150 €',
              '📜 Seguro (para cães): 30-100 €/ano'
            ]}
          ]},
          { id: 'c2', title: 'Mensais', content: [
            { kind: 'checklist', items: [
              '🍖 Ração para cão (15 kg): 30-80 €',
              '🍗 Ração para gato: 20-50 €',
              '🩺 Veterinário de rotina: 10-30 €/mês em média',
              '🚿 Tosquia/banho (cães de pelo comprido): 30-60 € a cada 6 semanas',
              '💊 Antiparasitários: 10-20 €',
              '📅 Vacinas anuais: 60-100 €',
              '⚠️ Veterinário urgente (oncologia, cirurgia): 500-2 000 €'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: '🏠 Após a adopção',
      content: [
        { kind: 'checklist', items: [
          '🎓 **Primeiros 30 dias de adaptação**: ambiente calmo, não receber muitos convidados, dê tempo',
          '🩺 Primeira consulta de rotina no veterinário (o seu, não o do abrigo) — 2 semanas após a adopção',
          '💪 **Especialista em comportamento** (para cães com trauma): treinador com abordagem positiva',
          '🐾 Passeios 2-3 vezes por dia (cães), brincadeiras (gatos)',
          '📸 Redes sociais: ajude o abrigo — publique fotografias, recomende',
          '🎁 Devolução ao abrigo (se não resultar): normalmente há 30 dias para devolver; não abandone na rua!',
          '⚖️ Lei 92/95: maus-tratos = até 2 anos de prisão + coima de 5 000 €'
        ]}
      ]
    },
    {
      id: 'opasnye-porody',
      title: '⚠️ Cães perigosos e potencialmente perigosos — regime legal',
      content: [
        { kind: 'paragraph', text: 'Decreto-Lei 315/2009, alterado pela Lei 110/2015; lista de raças potencialmente perigosas — Portaria 422/2004. Para adopção são exigidas condições adicionais.' },
        { kind: 'checklist', items: [
          '🐕 **Raças potencialmente perigosas**: Cão de Fila Brasileiro, Dogo Argentino, Pit Bull Terrier, Rottweiler, American Staffordshire Terrier, Staffordshire Bull Terrier, Tosa Inu — e os seus cruzamentos',
          '📋 **Licença de detenção** na Junta de Freguesia',
          '💼 **Seguro de responsabilidade civil** mínimo de 50 000 €',
          '🐾 **Curso de comportamento** + certificado',
          '🩺 **Avaliação completa** do detentor (médica, psicológica)',
          '🚶 **No passeio**: açaime + trela curta ≤1 m + adulto ≥ 16 anos',
          '⚠️ Mais difícil de adoptar — os abrigos são exigentes',
          '📜 Testes comportamentais ao próprio cão'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Taxa de adopção', amountEURMin: 0, amountEURMax: 100 },
    { label: 'Esterilização de gata', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Esterilização de cadela', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Ração para cão/mês', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Veterinário de rotina/mês', amountEURMin: 10, amountEURMax: 30 },
    { label: 'Seguro de raças perigosas/ano', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'SIAC — Sistema de Informação de Animais de Companhia', url: 'https://www.siac.vet/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei 92/95 — Protecção animal', url: 'https://diariodarepublica.pt/dr/detalhe/lei/92-1995-241458', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 315/2009 + Lei 110/2015 — Cães perigosos', url: 'https://diariodarepublica.pt/dr/detalhe/lei/110-2015-69859225', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portaria 422/2004 — Lista de raças potencialmente perigosas', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/422-2004', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
