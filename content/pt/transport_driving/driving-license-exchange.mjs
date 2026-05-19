export default {
  editorialVoice: 'hackportugal',
  id: 'driving-license-exchange',
  categoryId: 'driving_license',
  title: 'Troca da carta de condução por carta portuguesa',
  tldr: 'Cidadãos da UE/EEE — reconhecimento automático até ao fim da validade da carta (sem troca). CPLP/OCDE/países com acordo (Brasil, Cabo Verde, Ucrânia, entre outros) — troca sem exame através do IMT se forem cumpridas as condições. Para a Federação Russa/Bielorrússia, actualmente não há reciprocidade — normalmente é necessário realizar os exames. As cartas ucranianas são reconhecidas durante todo o período da Proteção Temporária (até 04.03.2027). Pelo DL 138/2012, as regras dependem do país de emissão: para países com regime reconhecido, a troca sem exame é normalmente possível até 2 anos a contar da data de fixação da residência; após 2 anos, pode ser exigido exame prático.',
  audience: { citizenships: ['cplp', 'thirdCountry'] },
  tags: ['carta', 'imt', 'troca'],
  estimatedReadMinutes: 6,
  variants: [
    {
      id: 'eu',
      audience: { citizenships: ['euEeaSwiss'] },
      tldr: 'UE/EEE/Suíça: a carta é válida automaticamente em Portugal. Se desejar, pode obter uma carta portuguesa através do registo no IMT. É obrigatório registar a carta no IMT no prazo de 60 dias após obter o estatuto de residente.'
    },
    {
      id: 'cplp',
      audience: { citizenships: ['cplp'] },
      tldr: 'CPLP (quando exista acordo): troca sem exame. Não é necessária tradução para cartas brasileiras. Prazo de processamento no IMT — 60-120 dias.'
    },
    {
      id: 'third-country',
      audience: { citizenships: ['thirdCountry'] },
      tldr: 'Países terceiros com acordo bilateral em vigor (Ucrânia desde 2019, vários outros) — troca sem exame. Rússia e Bielorrússia — NÃO há reciprocidade, é necessário fazer novamente a teoria + prática completas. Cazaquistão/Moldávia/Azerbaijão — confirme a lista actual do IMT (imt-ip.pt).'
    }
  ],
  steps: [
    {
      id: 'deadline',
      title: 'Prazo',
      content: [
        { kind: 'warning', text: 'Pelo Decreto-Lei 138/2012, as regras dependem do país de emissão. Se a carta for elegível para troca, o pedido normalmente deve ser feito após a fixação da residência dentro dos prazos estabelecidos; até 2 anos a contar da data de residência, a troca é possível sem exame para países com regime reconhecido, após 2 anos podem exigir exame prático. Para CPLP/OCDE, as condições são muitas vezes simplificadas. Para ucranianos com Proteção Temporária — validade durante todo o período de protecção (até 04.03.2027, ao abrigo do Regulamento EU 2022/1280).' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos',
      content: [
        { kind: 'checklist', items: [
          'Carta estrangeira (original + cópia)',
          'Tradução notarial (para não UE, excepto Brasil)',
          'Passaporte / autorização de residência / Cartão de Cidadão',
          'Atestado médico de farmácia acreditada pelo IMT (~30 €)',
          'Declaração do país de emissão sobre se a carta é válida',
          'Cópia do processo (se tiver havido anteriormente multas/inibições de conduzir)'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Exame médico', content: [
            { kind: 'paragraph', text: 'Numa clínica acreditada pelo IMT. Verificam a visão, audição e estado geral de saúde. Emitem o "Atestado de Aptidão Física e Psíquica". Validade — 6 meses.' }
          ]},
          { id: 'p2', title: '2. Apresentar o pedido no IMT', content: [
            { kind: 'paragraph', text: 'Online através de portal.imt-ip.pt ou presencialmente num centro de exames do IMT. Taxa ~30 €.' }
          ]},
          { id: 'p3', title: '3. Se houver acordo — aguardar', content: [
            { kind: 'timeline', text: '60-120 dias. No fim — convite para levantar o novo cartão ou recepção por correio.' }
          ]},
          { id: 'p4', title: '3b. Se não houver acordo — exames', content: [
            { kind: 'paragraph', text: 'Teoria sobre o Código da Estrada + prática num carro com instrutor. Curso em escola de condução 500-900 €. Exames pagos (~30-50 €).' }
          ]}
        ]}
      ]
    },
    {
      id: 'renewal',
      title: 'Renovação/substituição',
      content: [
        { kind: 'paragraph', text: 'Os prazos de renovação dependem da data de emissão e da categoria. Para a categoria B/grupo I, emitida após 30.07.2016: de 15 em 15 anos até aos 60 anos, depois aos 60, 65, 70 e, após os 70 — de 2 em 2 anos; o atestado médico é normalmente exigido a partir dos 60 anos. Para cartas antigas e categorias profissionais, as regras são diferentes — confirme a tabela do IMT.' }
      ]
    }
  ],
  costs: [
    { label: 'Exame médico', amountEURMin: 25, amountEURMax: 50 },
    { label: 'Taxa IMT (troca)', amountEUR: 30 },
    { label: 'Escola de condução + exames (se não houver acordo)', amountEURMin: 600, amountEURMax: 1200 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 180,
  sources: [
    { title: 'IMT — Troca de Carta de Condução (carta de condução)', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Trocar Carta de Condução', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/trocar-a-carta-de-conducao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
