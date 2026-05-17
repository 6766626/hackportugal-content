export default {
  editorialVoice: 'hackportugal',
  id: 'apostille-translation',
  categoryId: 'before_arrival',
  title: 'Apostilha e tradução certificada de documentos',
  tldr: 'Os documentos do país de origem para Portugal devem estar: 1) apostilhados (para países signatários da Convenção da Haia) ou legalizados no consulado; 2) traduzidos por um tradutor certificado. Sem isto, não são aceites na AIMA, Finanças, IRN, universidades.',
  tags: ['apostilha', 'tradução', 'legalização', 'documentos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-apostille',
      title: 'O que é uma apostilha',
      content: [
        { kind: 'paragraph', text: 'A apostilha é um carimbo que confirma a autenticidade de um documento oficial para utilização noutro país. É estabelecida pela Convenção da Haia de 1961.' },
        { kind: 'paragraph', text: 'Países da Convenção da Haia (a maioria dos países) — a apostilha é válida. Países fora da convenção — é necessária legalização consular (mais demorada e mais cara).' }
      ]
    },
    {
      id: 'what-apostilize',
      title: 'O que apostilhar para se mudar para Portugal',
      content: [
        { kind: 'checklist', items: [
          'Certidão de nascimento — SEMPRE (para NIF, AIMA, nacionalidade, casamento)',
          'Certidão de casamento — se for casado ou casada',
          'Certidão de divórcio (se tiver havido)',
          'Certidão de óbito do cônjuge (se for viúvo/viúva)',
          'Certificado de registo criminal — validade de 3-6 meses, muitas vezes é exigido um documento “recente”',
          'Diploma + suplemento + certificado académico — para reconhecimento de qualificações',
          'Certificado escolar — para crianças',
          'Atestados médicos — raramente, mas é possível',
          'Procurações'
        ]},
        { kind: 'warning', text: 'O passaporte e a autorização de residência NÃO precisam de apostilha — são reconhecidos internacionalmente por si próprios.' }
      ]
    },
    {
      id: 'russia-process',
      title: 'Apostilha na Rússia',
      audience: { countryCodes: ['RU'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Registo civil — certidões', content: [
            { kind: 'paragraph', text: 'Obter uma segunda via da certidão no registo civil → apostilha na direção regional do registo civil ou no Ministério da Justiça. 3-30 dias, 2 500-4 000 RUB.' }
          ]},
          { id: 'r2', title: '2. Certificado de registo criminal', content: [
            { kind: 'paragraph', text: 'Ministério dos Assuntos Internos → apostilha através do Ministério da Justiça. 2-4 semanas. Pode ser feito à distância através do Gosuslugi + consulado, mas o processo consular é mais lento.' }
          ]},
          { id: 'r3', title: '3. Diploma', content: [
            { kind: 'paragraph', text: 'Rosobrnadzor → apostilha. Ou certificação notarial da cópia + apostilha no Ministério da Justiça.' }
          ]},
          { id: 'r4', title: '4. Consulado de Portugal em Moscovo', content: [
            { kind: 'paragraph', text: 'Alternativa — legalização no consulado (apenas se a apostilha não estiver disponível).' }
          ]}
        ]}
      ]
    },
    {
      id: 'belarus-process',
      title: 'Apostilha na Bielorrússia',
      audience: { countryCodes: ['BY'] },
      content: [
        { kind: 'paragraph', text: 'Registo civil — certidões (apostilhadas no Ministério da Justiça da República da Bielorrússia). Ministério dos Assuntos Internos — certificado de registo criminal (apostilha no Ministério da Justiça). Diploma — Ministério da Educação da República da Bielorrússia.' },
        { kind: 'paragraph', text: 'O prazo é normalmente de 2-4 semanas. Estão disponíveis serviços urgentes mediante atendimento presencial em Minsk.' }
      ]
    },
    {
      id: 'ukraine-process',
      title: 'Apostilha na Ucrânia',
      audience: { countryCodes: ['UA'] },
      content: [
        { kind: 'paragraph', text: 'Registo civil — certidões + apostilha no Ministério da Justiça da Ucrânia. Certificado de registo criminal — Ministério dos Assuntos Internos → Ministério da Justiça. É possível tratar à distância através da Diia ou por procuração.' }
      ]
    },
    {
      id: 'translation',
      title: 'Tradução certificada em Portugal',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe a figura do “tradutor juramentado” como em alguns países. Em vez disso:' },
        { kind: 'substeps', items: [
          { id: 't1', title: 'Opção A — tradutor certificado na Conservatória do Registo Civil', content: [
            { kind: 'paragraph', text: 'O tradutor faz a tradução → certifica-a na Conservatória do Registo Civil. Este é o procedimento oficial.' }
          ]},
          { id: 't2', title: 'Opção B — tradução no notário', content: [
            { kind: 'paragraph', text: 'O notário faz um termo de certificação da tradução.' }
          ]},
          { id: 't3', title: 'Opção C — consulado de Portugal no país de origem', content: [
            { kind: 'paragraph', text: 'Tradução por tradutor consular. É conveniente se o documento for legalizado no consulado.' }
          ]},
          { id: 't4', title: 'Opção D — tradutor juramentado no seu país', content: [
            { kind: 'paragraph', text: 'Tradução por tradutor juramentado (se essa figura existir, como na Federação Russa/Ucrânia) + apostilha na tradução — é aceite em Portugal.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Apostilha na Federação Russa (certidão)', amountEURMin: 25, amountEURMax: 45, note: '2 500-4 000 RUB' },
    { label: 'Apostilha na Federação Russa (certificado de registo criminal)', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Tradução certificada (1 documento)', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Certificação na Conservatória do Registo Civil/no notário', amountEURMin: 25, amountEURMax: 60 }
  ],
  sources: [
    { title: 'Conferência da Haia — Convenção da Apostilha', url: 'https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Traduções e reconhecimentos', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
