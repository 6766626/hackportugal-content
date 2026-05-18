export default {
  editorialVoice: 'hackportugal',
  id: 'cplp-mobility',
  categoryId: 'residence_permit',
  title: 'Autorização de residência ao abrigo do Acordo de Mobilidade CPLP',
  tldr: 'Acordo de Mobilidade CPLP — via simplificada para cidadãos do Brasil, Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé, Timor-Leste, Guiné Equatorial. Para brasileiros: entrada sem visto + pedido de autorização de residência a partir de Portugal. Para os restantes cidadãos CPLP: o visto consular é obrigatório após a Lei 61/2025.',
  audience: { citizenships: ['cplp'] },
  tags: ['cplp', 'autorização de residência', 'brasil', 'mobilidade'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2025-10-23',
  changeSummary: 'O Decreto-Lei 37-A/2024 pôs fim à aceitação de novas Manifestação de Interesse a partir de junho de 2024; a Lei 61/2025 (em vigor desde 23.10.2025) alterou/agravou o regime subsequente, incluindo os procedimentos CPLP — para cidadãos CPLP, exceto brasileiros, passa a ser obrigatório visto antes da entrada. A nova lei da nacionalidade (Decreto AR 48/XVII, promulgado pelo Presidente António José Seguro em 03.05.2026; entrará em vigor após publicação no DRE) aumentará o período até à nacionalidade de 5 para 7 anos para todos os cidadãos CPLP.',
  variants: [
    {
      id: 'brazil',
      audience: { countryCodes: ['BR'] },
      tldr: 'Brasileiros: entrada sem visto até 90 dias + pedido de autorização de residência dentro do país junto da AIMA. Se um familiar próximo for cidadão português/UE, poderá estar disponível uma via familiar separada (isto NÃO é uma aceleração automática do procedimento CPLP).'
    },
    {
      id: 'other-cplp',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      tldr: 'Angola, Moçambique, Cabo Verde e outros países CPLP: é necessário visto consular para Portugal ANTES da entrada. Após a entrada — pedido de autorização de residência na AIMA. A Lei 61/2025 proibiu a submissão através de Manifestação de Interesse.'
    }
  ],
  steps: [
    {
      id: 'step-brazil',
      title: 'Via para brasileiros',
      audience: { countryCodes: ['BR'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Entrada sem visto', content: [
            { kind: 'paragraph', text: 'Os brasileiros podem entrar sem visto por um período até 90 dias, desde que cumpram as condições de entrada de curta duração. Se estiver previsto um pedido posterior ao abrigo da CPLP dentro de Portugal, é necessário ter documentos que comprovem a entrada legal e o fundamento do pedido; a decisão final sobre a admissão na fronteira continua a caber às autoridades fronteiriças.' }
          ]},
          { id: 'b2', title: '2. Obter o NIF', content: [
            { kind: 'paragraph', text: 'Através das Finanças presencialmente (ver guia "NIF UE/CPLP").' }
          ]},
          { id: 'b3', title: '3. Marcar atendimento na AIMA', content: [
            { kind: 'paragraph', text: 'Verifique o canal de marcação atual no site oficial da AIMA para «Acordo de Mobilidade CPLP» — não confundir o pedido inicial com o portal de renovações (portal-renovacoes — isto é renewals).\n\nSe o canal online não estiver disponível, use o centro de contacto oficial da AIMA e as instruções em aima.gov.pt.' }
          ]},
          { id: 'b4', title: '4. Entregar documentos', content: [
            { kind: 'checklist', items: [
              'Passaporte + cópia',
              'NIF',
              'Comprovativo de morada em Portugal',
              'Comprovativo de meios de subsistência (contrato / extratos bancários / carta de patrocinador)',
              'Certificado brasileiro de registo criminal com apostila',
              'Foto 3x4'
            ]}
          ]},
          { id: 'b5', title: '5. Receber a autorização de residência', content: [
            { kind: 'timeline', text: 'Normalmente 30–90 dias. O cartão chega por correio.' }
          ]}
        ]}
      ]
    },
    {
      id: 'step-other',
      title: 'Via para outros cidadãos CPLP (exceto Brasil)',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Visto consular', content: [
            { kind: 'paragraph', text: 'Dirija-se à embaixada ou ao consulado português no seu país. Categoria — mobilidade CPLP ou tipo D, conforme a situação. Tipos de documentos — ver vistos.mne.gov.pt.' }
          ]},
          { id: 'o2', title: '2. Entrada com visto', content: [
            { kind: 'paragraph', text: 'O visto confere o direito inicial de entrada e de pedido de autorização de residência na AIMA.' }
          ]},
          { id: 'o3', title: '3. NIF + NISS', content: [
            { kind: 'paragraph', text: 'Tratar logo após a entrada.' }
          ]},
          { id: 'o4', title: '4. Pedido de autorização de residência CPLP na AIMA', content: [
            { kind: 'paragraph', text: 'O mesmo processo que para brasileiros, mas com o visto na mão.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Vantagens da autorização de residência CPLP',
      content: [
        { kind: 'checklist', items: [
          'O prazo de validade e as renovações dependem do tipo de documento emitido: certificados CPLP iniciais/eletrónicos podiam ser emitidos por 1 ano; autorizações de residência temporárias em cartão ao abrigo do art. 75 seguem normalmente o esquema de 2 anos inicial + 3 anos de renovação — confirme o prazo impresso no cartão/decisão da AIMA',
          'Trabalho livre sem autorização de trabalho separada',
          'Segundo a lei em vigor, naturalização após 5 anos de residência legal. **03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII** — após publicação no DRE, o prazo para a CPLP aumentará para 7 anos',
          'Brasileiros residentes podem solicitar separadamente o Estatuto de Igualdade de Direitos e Deveres; os direitos políticos exigem um estatuto separado e normalmente 3 anos de residência',
          'Acesso simplificado ao SNS e às escolas'
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Observações importantes para 2026',
      content: [
        { kind: 'warning', text: 'As novas Manifestação de Interesse foram encerradas pelo Decreto-Lei 37-A/2024 a partir de junho de 2024. A Lei 61/2025, em vigor desde 23.10.2025, alterou/agravou o regime subsequente e as regras transitórias, incluindo os procedimentos CPLP. 31.12.2025 — prazo-limite do período transitório para pedidos já submetidos. Todos os novos procedimentos seguem através da AIMA ou de visto consular.' },
        { kind: 'warning', text: 'Há uma grande fila na AIMA — as marcações podem estar disponíveis apenas para daqui a 2–4 meses. Reserve o atendimento com antecedência.' },
        { kind: 'paragraph', text: 'Atualizações e prazos atuais — site oficial da AIMA (aima.gov.pt) e Vistos MNE (vistos.mne.gov.pt).' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: 'válido por ≥ 6 meses' },
    { title: 'Visto CPLP', note: 'apenas para não brasileiros' },
    { title: 'NIF', note: 'NISS — se aplicável/se já existir, especialmente em caso de trabalho por conta de outrem ou atividade independente' },
    { title: 'Comprovativo de morada', note: 'o formato depende da checklist atual da AIMA' },
    { title: 'Comprovativo de meios de subsistência', note: 'pode ser exigido pelo consulado ou pela AIMA num cenário concreto' },
    { title: 'Certificado de registo criminal', note: 'apostila/legalização segundo as regras do país emissor; é necessária tradução se o documento não estiver em português' }
  ],
  costs: [
    { label: 'Visto CPLP (consulado)', amountEURMin: 75, amountEURMax: 100 },
    { label: 'AIMA — atendimento + análise', amountEUR: 133, note: 'desde 01.03.2026' },
    { label: 'AIMA — autorização de residência (art. 75)', amountEUR: 307.20, note: 'desde 01.03.2026' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 61/2025 (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — portal oficial', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 60
}
