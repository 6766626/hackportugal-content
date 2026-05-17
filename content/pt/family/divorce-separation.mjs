export default {
  editorialVoice: 'hackportugal',
  id: 'divorce-separation',
  categoryId: 'nationality',
  title: 'Divórcio em Portugal — procedimentos e custos',
  tldr: 'Duas vias: **Divórcio por mútuo consentimento** — na Conservatória, normalmente rápido (sem filhos pode ser possível numa única sessão; com filhos — após parecer do Ministério Público, o que frequentemente acrescenta semanas), taxa base ~280 €, sem advogado se não houver conflitos. **Divórcio sem consentimento** (via tribunal) — 3-12 meses, advogado obrigatório, ~1 500-5 000 €. O período obrigatório de separação de facto foi eliminado em 2008 (Lei 61/2008). Para casais internacionais, é necessário verificar separadamente **jurisdiction** e **applicable law**: aplicam-se o Rome III (Reg. 1259/2010) para applicable law e o Brussels II ter (Reg. 2019/1111) para jurisdiction/recognition na UE. Pensão de alimentos, partilha de bens e responsabilidades parentais são os principais pontos de desacordo.',
  tags: ['divórcio', 'separação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: '⚖️ Dois tipos de divórcio',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Mútuo Consentimento — simples', content: [
            { kind: 'checklist', items: [
              '✅ **Quando**: ambos os cônjuges concordam em divorciar-se',
              '✅ **Acordo**: plano conjunto sobre bens, responsabilidades parentais, pensão de alimentos e utilização da casa',
              '🏛️ **Onde**: Conservatória do Registo Civil (qualquer uma) — sem tribunal',
              '⏱️ **Duração**: depois da entrega do processo completo, a Conservatória marca a conferência; se tudo for aceite, o divórcio é registado. Com filhos, é necessário aguardar o parecer do Ministério Público (NÃO existe em PT um «cooling-off» geral de 30 dias para o divórcio por mútuo consentimento)',
              '💰 **Custo**: ~280 € de taxa base do IRN. Existindo filhos menores, o acordo sobre responsabilidades parentais é enviado ao **Ministério Público** (NÃO à CPCJ); a CPCJ é um órgão de proteção de crianças e não aprova acordos de divórcio. Custos adicionais — advogado, partilha de bens, registos, traduções',
              '👨‍⚖️ **Advogado não é obrigatório** — poupança de 1 000-3 000 €',
              '🗓️ **Submissão online** pode ser possível através dos serviços oficiais justica.gov.pt / Civil Online, se aplicável. Evite confundir com sites privados como divorcio.pt'
            ]}
          ]},
          { id: 't2', title: 'Sem Consentimento (via tribunal)', content: [
            { kind: 'checklist', items: [
              '⚖️ **Quando**: um dos cônjuges não concorda; há filhos e disputa sobre responsabilidades parentais; há conflitos sobre bens',
              '🏛️ **Onde**: Tribunal da Família e Menores',
              '⏱️ **Duração**: normalmente 3-12 meses, até 24 meses em casos complexos',
              '💰 **Custo**: custas judiciais + advogado (obrigatório): 1 500-5 000 €',
              '👨‍⚖️ **Advogado obrigatório** para ambas as partes',
              '⚖️ **Decisão**: determinação judicial de todos os aspetos',
              '🆘 **Apoio judiciário**: sujeito a condição de recursos através da Segurança Social, tendo em conta rendimentos/ativos/despesas do agregado familiar segundo uma fórmula (não é um simples limiar de rendimento bruto; IAS 2026 = 537,13 €). Submeta o pedido através da Segurança Social'
            ]}
          ]},
          { id: 't3', title: 'Separação de Pessoas', content: [
            { kind: 'paragraph', text: 'Via intermédia — separação de pessoas e bens oficial sem dissolução do casamento. Altera direitos/deveres dos cônjuges e relações patrimoniais, mas não «mantém» automaticamente direitos sucessórios ou estatuto de imigração — confirme as consequências com um jurista/AIMA antes de se basear nesta forma. Procedimento na Conservatória/tribunal. Tornou-se menos popular desde 2008, quando o mútuo consentimento foi simplificado.' }
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
              '**Acordo de partilha** — que bens ficam para quem',
              '**Acordo de Regulação Parental** (se houver filhos): responsabilidades parentais, visitas, pensão de alimentos, decisões',
              '**Casa de morada de família**: quem fica, em que condições e por quanto tempo',
              '**Pensão de alimentos para o ex-cônjuge** (se dependia financeiramente)',
              '**Apólices de seguro / pensões / contas comuns**: separação',
              'Pode ser feito pelos próprios ou com advogado (200-500 € pela preparação)',
              'Convenção antenupcial (se existiu) define o regime de bens — leia-a!'
            ]}
          ]},
          { id: 'p2', title: '2. Marcação na Conservatória', content: [
            { kind: 'checklist', items: [
              'Qualquer Conservatória do Registo Civil',
              'Documentos: Cartão de Cidadão (CC) de ambos, certidão de casamento, CC dos filhos, acordos',
              '**Se houver filhos** — o acordo sobre responsabilidades parentais é enviado ao Ministério Público para apreciação (não à CPCJ; a CPCJ é um órgão de proteção de crianças em situações de risco)',
              'Sem filhos: atendimento em 2-4 semanas'
            ]}
          ]},
          { id: 'p3', title: '3. Atendimento com a Conservadora', content: [
            { kind: 'checklist', items: [
              'Ambos devem estar presentes pessoalmente (ou através de procuração notarial)',
              'A Conservadora verifica o acordo e pede a confirmação do consentimento',
              'Se tudo estiver em ordem — o divórcio é registado',
              'É emitida a Certidão de Divórcio',
              'Certidão com o novo estado civil'
            ]}
          ]},
          { id: 'p4', title: '4. Depois do divórcio', content: [
            { kind: 'checklist', items: [
              'Atualizar o IRS (entrega separada)',
              'Atualizar dados em bancos, junto do empregador e nas seguradoras',
              'Notificar as Finanças sobre a transmissão de bens (para isenção de IMT, se aplicável entre ex-cônjuges)',
              'Atualizar o Cartão de Cidadão — se mudou de apelido, pode recuperar o anterior',
              'Filhos: começa a vigorar o novo calendário de responsabilidades parentais partilhadas',
              'Pensão de alimentos: deve ser paga por método rastreável, preferencialmente transferência bancária com descrição clara. A Segurança Social Direta não é o canal padrão para pensões de alimentos privadas comuns'
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
              'Por regra, é comum o **exercício conjunto das responsabilidades parentais** nas questões de particular importância (Código Civil art. 1906)',
              '**Residência alternada** (a criança vive alternadamente em dois agregados familiares) é possível se corresponder ao interesse da criança — mas **não é um default automático**',
              '**Residência com um dos progenitores**: a criança vive com um deles, e o outro tem convívios/visitas',
              'A Lei 65/2020 reforçou o exercício conjunto das responsabilidades parentais nas questões de particular importância'
            ]}
          ]},
          { id: 'c2', title: 'Pensão de alimentos dos filhos', content: [
            { kind: 'checklist', items: [
              '**Pensão de alimentos** é definida pelas necessidades da criança e pelas possibilidades de cada progenitor; mesmo com residência alternada, pode haver pagamento compensatório se existirem rendimentos/despesas desiguais',
              'Não existe uma fórmula legal única — o tribunal/acordo considera rendimentos, necessidades da criança, despesas de habitação/escola/saúde e regime de residência',
              'Intervalos típicos de 100-400 €/mês por criança — variam muito',
              '**Até aos 18 anos** normalmente; pode prolongar-se em caso de estudos/dependência (Código Civil art. 1880)',
              '**FGADM (Fundo de Garantia de Alimentos)**: prestação do Estado se o progenitor não pagar'
            ]}
          ]},
          { id: 'c3', title: 'Decisões parentais', content: [
            { kind: 'checklist', items: [
              'Decisões importantes (escola, religião, questões médicas graves): em conjunto',
              'Decisões quotidianas (alimentação, horário de sono): tomadas pelo progenitor cuidador',
              'Viagens da criança ao estrangeiro: confirme as regras concretas do passaporte, travel authorisation for minors e acordo parental aprovado pelo tribunal. Se a criança viajar sem um dos progenitores, pode ser necessária autorização escrita consoante a configuração de custody/residence',
              'Desacordos sobre decisões: tribunal de família'
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
          '**O regime de bens é definido no momento do casamento**:',
          '  - **Comunhão de adquiridos** (regime supletivo): bens adquiridos depois do casamento são divididos 50/50; bens anteriores ao casamento ficam separados',
          '  - **Comunhão geral**: tudo é comum, incluindo bens anteriores ao casamento',
          '  - **Separação total**: nada é comum (se existir convenção antenupcial)',
          '🏠 **Casa de família**: o tribunal pode atribuí-la a um dos cônjuges, especialmente se for o cuidador dos filhos',
          '💰 **Empresa**: é avaliada, por vezes vendida',
          '🚗 **Carro, mobiliário**: as partes acordam entre si (se for divórcio por mútuo consentimento) ou o tribunal distribui',
          '💼 **Pensões**: direitos de pensão pública normalmente NÃO são divididos 50/50; produtos de pensão privados podem integrar os bens consoante o regime e as condições do produto',
          '🌍 **Ativos no estrangeiro**: declarados no tribunal português, podendo surgir questão de jurisdição',
          '📊 **Isenção de IMT**: transmissão de bens entre ex-cônjuges — sem IMT (Lei 24/2009)'
        ]}
      ]
    },
    {
      id: 'foreigners',
      title: '🌍 Divórcio para estrangeiros',
      content: [
        { kind: 'checklist', items: [
          '**Casais que casaram em Portugal**: formalização portuguesa — mais simples',
          '**Casamento celebrado no estrangeiro, ambos residentes em Portugal**: tribunal português ou Conservatória',
          '**Nacionalidades diferentes**: o processo pode correr em Portugal (se as partes forem residentes) ou no país de celebração do casamento',
          'Reg. 1259/2010 / **Rome III** regula applicable law for divorce nos países da UE participantes. Jurisdiction e EU recognition — Reg. 2019/1111 (**Brussels II ter**). Non-EU recognition depende da lei do país concreto',
          '**Apostille** certifica a autenticidade da certidão portuguesa de divórcio para países da Convenção da Haia, mas **não garante o reconhecimento automático** do divórcio. Confirme o procedimento de recognition/registration no país onde a vai utilizar',
          '**Divórcio de casais do mesmo sexo**: o mesmo procedimento',
          '**Autorização de residência por Reagrupamento Familiar**: confirme urgentemente o direito a autorização de residência autónoma ao abrigo do art. 107 Lei 23/2007 — depende de condições (duração, circunstâncias); regras especiais para domestic violence/morte/responsabilidades parentais. NÃO presuma conversão automática',
          '**Cidadãos do Brasil**: pode ser necessário transcrever/registar o divórcio português no Brasil através do consulado/cartório. O estatuto de imigração CPLP não simplifica o próprio divórcio português'
        ]}
      ]
    },
    {
      id: 'common-pitfalls',
      title: '🚩 Problemas frequentes',
      content: [
        { kind: 'checklist', items: [
          '⚠️ **Não assinar sem advogado** se existirem finanças / património significativos',
          '⚠️ **Contas offshore / ativos ocultos**: se houver suspeitas, um contabilista forense custa 2 000-5 000 €, e o tribunal pode ordenar uma verificação',
          '⚠️ **Responsabilidades parentais internacionais (um progenitor sai do país)**: ao abrigo da Convenção da Haia, pode haver processo por rapto de criança se a saída ocorrer sem consentimento',
          '⚠️ **Ocultação de rendimentos através de despedimento/demissão**: por vezes um progenitor deixa de trabalhar para evitar a pensão de alimentos — o tribunal pode imputar rendimento',
          '⚠️ **Mediação** (Sistema de Mediação Familiar / DGPJ): pode ser útil e pode ser recomendada/encaminhada, mas não é um requisito prévio geral e obrigatório para o divórcio. Confirme a tarifa na tabela atual da DGPJ',
          '⚠️ **Saúde mental**: 60% das pessoas após o divórcio sofrem depressão clínica nos primeiros 6 meses — procure apoio antecipadamente'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Divórcio por mútuo consentimento na Conservatória — taxa base do IRN', amountEUR: 280, note: 'com filhos — custos adicionais com parecer do MP e/ou advogado; partilha de bens/registos/traduções são pagos separadamente' },
    { label: 'Divórcio litigioso via tribunal', amountEURMin: 1500, amountEURMax: 5000, note: '+ advogado' },
    { label: 'Consulta de advogado', amountEURMin: 100, amountEURMax: 300, note: '€/hora' },
    { label: 'Pensão de alimentos por criança', amountEURMin: 100, amountEURMax: 400, note: '€/mês (intervalos amplos; dependem do caso)' }
  ],
  sources: [
    { title: 'Lei 61/2008 — Reforma do Divórcio', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2008-456587', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código Civil — Casamento e Divórcio (livro IV)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN / justica.gov.pt — Divórcio e separação de pessoas e bens por mútuo consentimento', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Reg. (UE) 1259/2010 — Rome III (lei aplicável ao divórcio)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32010R1259', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Reg. (UE) 2019/1111 — Brussels II ter (jurisdição/reconhecimento)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R1111', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
