export default {
  editorialVoice: 'hackportugal',
  id: 'divorce-separation',
  categoryId: 'nationality',
  title: 'Divórcio em Portugal — procedimentos e custos',
  tldr: 'Dois caminhos: Divórcio por mútuo consentimento — na Conservatória, normalmente rápido (sem filhos pode ser possível numa única sessão; com filhos — após parecer do Ministério Público, o que muitas vezes acrescenta semanas), taxa base ~280 €, sem advogado, se não houver conflitos.\n\nDivórcio sem consentimento (através do tribunal) — 3-12 meses, advogado obrigatório, ~1 500-5 000 €. O período obrigatório de separação de facto foi abolido em 2008 (Lei 61/2008). Para casais internacionais, é necessário verificar separadamente jurisdiction e applicable law: aplicam-se Rome III (Reg. 1259/2010) para applicable law e Brussels II ter (Reg. 2019/1111) para jurisdiction/recognition na UE. Pensão de alimentos, partilha de bens e responsabilidades parentais são os principais pontos de divergência.',
  tags: ['divórcio', 'divórcio', 'separação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: '⚖️ Dois tipos de divórcio',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Mútuo Consentimento — simples', content: [
            { kind: 'checklist', items: [
              '✅ Quando: ambos os cônjuges concordam em divorciar-se',
              '✅ Acordo: plano conjunto sobre bens, responsabilidades parentais, pensão de alimentos e utilização da casa',
              '🏛️ Onde: Conservatória do Registo Civil (qualquer uma) — sem tribunal',
              '⏱️ Duração: após a entrega do processo completo, a Conservatória marca a conferência; se tudo for aceite, o divórcio é registado. Com filhos, é necessário aguardar o parecer do Ministério Público (NÃO existe em PT um «cooling-off» geral de 30 dias para o divorce por mútuo consentimento)',
              '💰 Custo: ~280 € de taxa base do IRN. Havendo filhos menores, o acordo sobre responsabilidades parentais é enviado ao Ministério Público (NÃO à CPCJ); a CPCJ é um organismo de protecção de crianças e não aprova acordos de divórcio. Despesas adicionais — advogado, partilha de bens, registos, traduções',
              '👨‍⚖️ Advogado não é obrigatório — poupança de 1 000-3 000 €',
              '🗓️ Submissão online possível através dos serviços oficiais justica.gov.pt / Civil Online, quando aplicável. Evite confundir com sites privados como divorcio.pt'
            ]}
          ]},
          { id: 't2', title: 'Sem Consentimento (através do tribunal)', content: [
            { kind: 'checklist', items: [
              '⚖️ Quando: um dos cônjuges não concorda; há filhos e disputa sobre responsabilidades parentais; há conflitos sobre bens',
              '🏛️ Onde: Tribunal da Família e Menores',
              '⏱️ Duração: normalmente 3-12 meses, até 24 meses em casos complexos',
              '💰 Custo: custas judiciais + advogado (obrigatório): 1 500-5 000 €',
              '👨‍⚖️ Advogado obrigatório para ambas as partes',
              '⚖️ Decisão: determinação judicial de todos os aspectos',
              '🆘 Apoio judiciário (apoio jurídico): sujeito a condição de recursos através da Segurança Social, considerando rendimentos/activos/despesas do agregado familiar segundo uma fórmula (não é um simples limite de rendimento bruto; IAS 2026 = 537,13 €). Candidate-se através da Segurança Social'
            ]}
          ]},
          { id: 't3', title: 'Separação de Pessoas (separação de facto/formal)', content: [
            { kind: 'paragraph', text: 'Um caminho intermédio — separação de pessoas e bens oficial sem dissolução do casamento. Altera direitos/obrigações dos cônjuges e as relações patrimoniais, mas não «preserva» automaticamente direitos sucessórios ou estatuto de imigração — verifique as consequências com um advogado/AIMA antes de confiar nesta forma. Procedimento na Conservatória/tribunal. Tornou-se menos popular desde 2008, quando o mútuo consentimento foi simplificado.' }
          ]}
        ]}
      ]
    },
    {
      id: 'mutual-process',
      title: '📋 Processo de divórcio por mútuo consentimento — passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preparar o acordo', content: [
            { kind: 'checklist', items: [
              'Acordo de partilha — que bens ficam para quem',
              'Acordo de Regulação Parental (se houver filhos): responsabilidades parentais, visitas/convívios, pensão de alimentos, decisões',
              'Casa de morada de família: quem fica, em que condições e por quanto tempo',
              'Pensão de alimentos para o ex-cônjuge (se dependia financeiramente)',
              'Apólices de seguro / pensões / contas conjuntas: separação',
              'Pode fazê-lo por conta própria ou com advogado (200-500 € pela preparação)',
              'A convenção antenupcial (se existir) define o regime de bens — leia-a!'
            ]}
          ]},
          { id: 'p2', title: '2. Marcação na Conservatória', content: [
            { kind: 'checklist', items: [
              'Qualquer Conservatória do Registo Civil',
              'Documentos: Cartão de Cidadão (CC) de ambos, certidão casamento, CC dos filhos, acordos',
              'Se houver filhos — o acordo sobre responsabilidades parentais é enviado ao Ministério Público para apreciação (não à CPCJ; a CPCJ é um organismo de protecção de crianças em situações de risco)',
              'Sem filhos: atendimento em 2-4 semanas'
            ]}
          ]},
          { id: 'p3', title: '3. Atendimento com a Conservadora', content: [
            { kind: 'checklist', items: [
              'Ambos devem estar presentes pessoalmente (ou através de procuração notarial)',
              'A Conservadora verifica o acordo e pede a confirmação do consentimento',
              'Se estiver tudo em ordem — o divórcio é registado',
              'É emitida a Certidão de Divórcio',
              'Certidão com o novo estado civil'
            ]}
          ]},
          { id: 'p4', title: '4. Depois do divórcio', content: [
            { kind: 'checklist', items: [
              'Actualizar o IRS (entrega separada)',
              'Actualizar os dados nos bancos, junto do empregador e nas seguradoras',
              'Informar as Finanças sobre a transmissão de bens (para isenção de IMT, se aplicável entre ex-cônjuges)',
              'Actualizar o Cartão de Cidadão — se mudou de apelido, pode voltar ao anterior',
              'Filhos: entra em vigor o novo calendário de guarda partilhada',
              'Pensão de alimentos: pagar por método rastreável, de preferência transferência bancária com descrição clara. Segurança Social Direta não é o canal padrão para pensões de alimentos privadas comuns'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'children',
      title: '👶 Responsabilidades parentais e pensão de alimentos',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Tipos de responsabilidades parentais', content: [
            { kind: 'checklist', items: [
              'Por defeito, normalmente há exercício conjunto das responsabilidades parentais nas questões de particular importância (Código Civil art. 1906)',
              'Residência alternada (a criança vive alternadamente em dois agregados familiares) é possível se corresponder ao interesse da criança — mas não é um default automático',
              'Residência com um dos progenitores: a criança vive com um progenitor; o outro tem convívios/visitas',
              'Lei 65/2020 reforçou o exercício conjunto das responsabilidades parentais nas questões de particular importância'
            ]}
          ]},
          { id: 'c2', title: 'Pensão de alimentos para filhos', content: [
            { kind: 'checklist', items: [
              'Pensão de alimentos é determinada pelas necessidades da criança e pelas possibilidades de cada progenitor; mesmo com residência alternada, pode haver pagamento compensatório em caso de rendimentos/despesas desiguais',
              'Não existe uma statutory formula única — o tribunal/acordo considera rendimentos, necessidades da criança, despesas de habitação/escola/saúde e regime de residência',
              'Intervalos típicos de 100-400 €/mês por criança — variam muito',
              'Até aos 18 anos normalmente; a prorrogação é possível em caso de estudos/falta de autonomia (Código Civil art. 1880)',
              'FGADM (Fundo de Garantia de Alimentos): pagamento estatal se o progenitor não pagar'
            ]}
          ]},
          { id: 'c3', title: 'Decisões parentais', content: [
            { kind: 'checklist', items: [
              'Decisões importantes (escola, religião, questões médicas graves): em conjunto',
              'Decisões do dia a dia (alimentação, rotina de sono): tomadas pelo progenitor cuidador',
              'Viagens da criança ao estrangeiro: verifique as regras concretas do passaporte, travel authorisation for minors e acordo parental aprovado pelo tribunal. Se a criança viajar sem um dos progenitores, pode ser necessária autorização escrita, dependendo do custody/residence setup',
              'Divergências sobre decisões: tribunal de família'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'property',
      title: '🏠 Partilha de bens',
      content: [
        { kind: 'checklist', items: [
          'O regime de bens é definido no momento do casamento:',
          '  - Comunhão de adquiridos (por defeito): bens adquiridos após o casamento são divididos 50/50; bens anteriores ao casamento — separados',
          '  - Comunhão geral: tudo é comum, incluindo bens anteriores ao casamento',
          '  - Separação total: nada é comum (se houver convenção antenupcial)',
          '🏠 Casa de família: o tribunal pode atribuí-la a um dos cônjuges, especialmente se for o cuidador dos filhos',
          '💰 Negócio: é avaliado, por vezes vendido',
          '🚗 Automóveis, mobiliário: as partes acordam entre si (se o divórcio for por mútuo consentimento) ou o tribunal distribui',
          '💼 Pensões: direitos de pensão pública normalmente NÃO são divididos 50/50; produtos de pensão privados podem integrar o património dependendo do regime e das condições do produto',
          '🌍 Activos no estrangeiro: são declarados no tribunal português; pode surgir uma questão de jurisdição',
          '📊 Isenção de IMT: transmissão de bens entre ex-cônjuges — sem IMT (Lei 24/2009)'
        ]}
      ]
    },
    {
      id: 'foreigners',
      title: '🌍 Divórcio para estrangeiros',
      content: [
        { kind: 'checklist', items: [
          'Casais que casaram em Portugal: o procedimento português é mais simples',
          'Casamento celebrado no estrangeiro, ambos residentes em Portugal: tribunal português ou Conservatória',
          'Nacionalidades diferentes: o processo pode decorrer em Portugal (se as partes forem residentes) ou no país onde o casamento foi celebrado',
          'Reg. 1259/2010 / Rome III regula applicable law for divorce nos países participantes da UE. Jurisdiction e EU recognition — Reg. 2019/1111 (Brussels II ter). Non-EU recognition depende da lei do país concreto',
          'Apostille certifica a autenticidade da certidão portuguesa de divórcio para países da Convenção da Haia, mas não garante o reconhecimento automático do divórcio. Verifique o procedimento de recognition/registration no país onde a vai utilizar',
          'Divórcio de casais do mesmo sexo: o mesmo procedimento',
          'autorização de residência por reunificação familiar: verifique urgentemente o direito a autorização de residência autónoma ao abrigo do art. 107 Lei 23/2007 — depende das condições (duração, circunstâncias); há regras especiais para domestic violence/morte/responsabilidades parentais. NÃO presuma conversão automática',
          'Cidadãos do Brasil: pode ser necessário transcribe/register o divórcio português no Brasil através do consulado/cartório. O estatuto de imigração CPLP não simplifica o divórcio português em si'
        ]}
      ]
    },
    {
      id: 'common-pitfalls',
      title: '🚩 Problemas frequentes',
      content: [
        { kind: 'checklist', items: [
          '⚠️ Não assine sem advogado se houver finanças / bens significativos',
          '⚠️ Contas offshore / activos ocultos: se houver suspeitas, um perito contabilístico judicial custa 2 000-5 000 €; o tribunal pode ordenar uma verificação',
          '⚠️ Responsabilidades parentais internacionais (um progenitor muda-se para fora): ao abrigo da Convenção da Haia pode haver procedimento por rapto de criança se a saída ocorrer sem consentimento',
          '⚠️ Ocultação de rendimento através de despedimento: por vezes um progenitor deixa de trabalhar para evitar a pensão de alimentos — o tribunal pode imputar rendimento',
          '⚠️ Mediação (Sistema de Mediação Familiar / DGPJ): pode ser útil e pode ser recomendada/encaminhada, mas não é uma condição prévia obrigatória geral para o divórcio. Confirme a tarifa na tabela DGPJ actual',
          '⚠️ Saúde mental: o divórcio é um grande fator de stress e, nos primeiros meses, muitas pessoas sofrem de ansiedade ou depressão — não adie a procura de apoio'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Divórcio por mútuo consentimento na Conservatória — taxa base IRN', amountEUR: 280, note: 'com filhos — despesas adicionais com parecer do MP e/ou advogado; partilha de bens/registos/traduções são pagos à parte' },
    { label: 'Divórcio litigioso através do tribunal', amountEURMin: 1500, amountEURMax: 5000, note: '+ advogado' },
    { label: 'Consulta de advogado', amountEURMin: 100, amountEURMax: 300, note: '€/hora' },
    { label: 'Pensão de alimentos para filho', amountEURMin: 100, amountEURMax: 400, note: '€/mês (intervalos amplos; dependem do caso)' }
  ],
  sources: [
    { title: 'Lei 61/2008 — Reforma do Divórcio', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2008-456587', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código Civil — Casamento e Divórcio (livro IV)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN / justica.gov.pt — Divórcio e separação de pessoas e bens por mútuo consentimento', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Reg. (UE) 1259/2010 — Rome III (applicable law for divorce)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32010R1259', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Reg. (UE) 2019/1111 — Brussels II ter (jurisdiction/recognition)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R1111', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
