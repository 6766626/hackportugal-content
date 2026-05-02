export default {
  editorialVoice: 'hackportugal',
  id: 'pma-ivf-sns',
  categoryId: 'healthcare',
  title: 'FIV / PMA no SNS: 3 ciclos gratuitos, idade e direito de acesso',
  tldr: 'Em Portugal, PMA significa procriação medicamente assistida: IUI, IVF/ICSI, gâmetas de dador e crioconservação. No SNS, o tratamento está disponível gratuitamente para utentes do SNS quando existam indicações médicas: normalmente até 3 ciclos de IVF/ICSI, se a mulher não tiver mais de 42 anos no momento da admissão/referenciação. Desde 2016, o acesso não está aberto apenas a casais heterossexuais: mulheres sozinhas e casais de mulheres têm o mesmo direito. Todos os ciclos são registados no CNPMA; o percurso começa com o médico de família ou ginecologia no SNS.',
  tags: ['pma', 'ivf', 'sns', 'fiv'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que é a PMA no SNS e o que é pago',
      content: [
        { kind: 'paragraph', text: 'PMA é o termo oficial português para tecnologias de reprodução medicamente assistida: inseminação intrauterina (IUI), fertilização in vitro (IVF/FIV), ICSI, utilização de gâmetas de dador, crioconservação de embriões/gâmetas por indicação médica.' },
        { kind: 'paragraph', text: 'No SNS, o paciente não paga o procedimento IVF/ICSI em si num centro público de PMA. Regra prática do SNS: até 3 ciclos de IVF/ICSI por mulher, desde que sejam cumpridos os critérios de admissão e idade. A IUI pode ser proposta antes da IVF, se for clinicamente razoável.' },
        { kind: 'checklist', items: [
          'É necessário número de utente SNS e inscrição activa no Centro de Saúde',
          'É necessária avaliação clínica de infertilidade ou outro fundamento legal para PMA',
          'A referenciação normalmente é feita através do médico de família, ginecologia ou consulta de infertilidade',
          'O tratamento é realizado em centros de PMA públicos ou em estruturas parceiras mediante referenciação do SNS',
          'A dádiva de gâmetas é possível, mas a lista de espera e a disponibilidade de dadores dependem do centro',
          'Todos os procedimentos de PMA estão sujeitos às regras do CNPMA e ao registo nos registos nacionais'
        ] },
        { kind: 'warning', text: '“3 ciclos gratuitos” não significa acesso imediato. A lista de espera nos centros públicos pode demorar meses, e o limite de idade é aplicado ao momento da admissão/início do processo segundo as regras do centro. Se tiver 41–42 anos, não adie a referenciação.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem tem direito: casais, mulheres sozinhas, casais do mesmo sexo',
      content: [
        { kind: 'paragraph', text: 'Após a Lei 17/2016, o acesso à PMA em Portugal está aberto a todas as mulheres, independentemente do estado civil, orientação sexual e diagnóstico de “infertilidade num casal heterossexual”. Isto significa: uma mulher sozinha, um casal de mulheres e um casal heterossexual podem recorrer ao SNS em igualdade de condições.' },
        { kind: 'checklist', items: [
          'A mulher deve ser maior de idade e juridicamente capaz',
          'É necessário consentimento informado para o procedimento de PMA',
          'Para um casal, é necessário o consentimento do segundo progenitor/parceiro, se ele ou ela participar no projecto parental',
          'Uma mulher sozinha pode utilizar esperma de dador',
          'Um casal de mulheres pode utilizar esperma de dador; ambas as mulheres formalizam o consentimento segundo as regras da PMA',
          'Casais de homens não têm acesso à gestação de substituição como serviço normal do SNS; a gestação de substituição em Portugal tem um regime jurídico separado e extremamente limitado',
          'Estrangeiros residentes com utente SNS seguem o mesmo percurso que os cidadãos portugueses'
        ] },
        { kind: 'warning', text: 'As clínicas e os médicos podem pedir documentos sobre estado civil, consentimento do parceiro e parentalidade jurídica. Para casais de mulheres, confirme antecipadamente quais os formulários de consentimento que o centro de PMA exige antes do início do ciclo.' }
      ]
    },
    {
      id: 'age-cap',
      title: 'Limite de idade: mulheres até aos 42 anos',
      content: [
        { kind: 'paragraph', text: 'Para o financiamento público da PMA no SNS, o limite essencial é a idade da mulher até aos 42 anos. Na prática, os centros analisam não só a data do primeiro contacto, mas também a possibilidade real de iniciar a estimulação/ciclo antes de atingir a idade-limite segundo o seu protocolo interno.' },
        { kind: 'paragraph', text: 'O limite de idade está relacionado com a eficácia clínica e a segurança: depois dos 40 anos, a probabilidade de sucesso da IVF diminui de forma significativa e os riscos obstétricos aumentam. Por isso, a lista de espera é especialmente crítica para pacientes dos 40 aos 42 anos.' },
        { kind: 'checklist', items: [
          'Até aos 35 anos: normalmente há mais tempo para diagnóstico, mas a lista de espera continua a ser relevante',
          '35–39 anos: peça referenciação para consulta de infertilidade sem atrasos',
          '40–42 anos: peça urgent/priority referral, se houver fundamentos médicos',
          'Depois dos 42 anos: o SNS normalmente não financia IVF/ICSI; resta a PMA privada ou uma avaliação individual fora do percurso padrão',
          'Os gâmetas de dador não eliminam automaticamente o limite do SNS',
          'A idade masculina e a qualidade do esperma são avaliadas, mas o principal cap público para acesso a IVF/ICSI é a idade da mulher'
        ] },
        { kind: 'warning', text: 'Se estiver perto dos 42 anos, não espere “um ano de tentativas”. Marque consulta com o médico de família e peça referenciação já, anexando análises anteriores, ecografias, espermograma e relatórios clínicos.' }
      ]
    },
    {
      id: 'how-to-start',
      title: 'Como começar pelo SNS: percurso passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-utente', title: '1. Obtenha ou verifique o número de utente', content: [
            { kind: 'paragraph', text: 'Sem utente SNS, não será integrado no percurso público normal de PMA. São necessários documento de identidade/autorização de residência ou outro estatuto de permanência legal, NIF e comprovativo de morada para o Centro de Saúde.' }
          ] },
          { id: 's2-family-doctor', title: '2. Marque consulta com o médico de família', content: [
            { kind: 'paragraph', text: 'Diga directamente: “quero referenciação para consulta de infertilidade / PMA”. Se não tiver médico de família, peça consulta aberta ou consulta de recurso no seu Centro de Saúde.' }
          ] },
          { id: 's3-basic-tests', title: '3. Reúna análises básicas', content: [
            { kind: 'checklist', items: [
              'AMH, FSH/LH/estradiol conforme prescrição médica',
              'Ecografia pélvica, AFC, avaliação da ovulação',
              'HSG/HyCoSy ou outra avaliação das trompas, se indicado',
              'Espermograma para o parceiro masculino, se existir',
              'Serologias: HIV, HBV, HCV, sífilis e outras conforme protocolo',
              'Grupo sanguíneo, imunidade a rubéola/varicela, rastreio clínico geral',
              'Relatórios sobre gravidezes anteriores, cirurgias, endometriose, PCOS, oncologia'
            ] }
          ] },
          { id: 's4-referral', title: '4. Obtenha referenciação para consulta de infertilidade/PMA', content: [
            { kind: 'paragraph', text: 'A referenciação segue através do SNS para um hospital ou centro público de PMA. Receberá uma marcação para a primeira consulta, onde serão confirmados as indicações, a idade, os documentos e o plano: IUI, IVF/ICSI, gâmetas de dador ou crioconservação.' }
          ] },
          { id: 's5-consent', title: '5. Assine os consentimentos e entre no ciclo', content: [
            { kind: 'paragraph', text: 'Antes do procedimento, são assinados consentimentos informados. O centro é obrigado a cumprir as regras do CNPMA, incluindo o registo do ciclo, dos embriões, da dádiva e dos resultados do tratamento.' }
          ] }
        ] }
      ]
    },
    {
      id: 'cnpma-registry',
      title: 'CNPMA: para que serve o registo e o que acontece aos dados',
      content: [
        { kind: 'paragraph', text: 'CNPMA é o Conselho Nacional de Procriação Medicamente Assistida. É o órgão que regula e fiscaliza a PMA em Portugal: licenças dos centros, dádiva, formulários de consentimento, registos de procedimentos e cumprimento da Lei 32/2006.' },
        { kind: 'paragraph', text: 'Cada centro de PMA transmite dados sobre os procedimentos para o sistema controlado pelo CNPMA. Isto não é uma “opção da clínica”, mas parte do regime jurídico da PMA. Os dados são necessários para acompanhar segurança, resultados, dádiva e prevenir violações dos limites.' },
        { kind: 'checklist', items: [
          'Verifique se o centro de PMA está licenciado/reconhecido pelo CNPMA',
          'Peça cópias de todos os consentimentos informados',
          'Confirme as regras de armazenamento dos embriões e o prazo de crioconservação',
          'Confirme o que acontece aos embriões em caso de separação do casal, morte de um dos participantes ou desistência do tratamento',
          'Em caso de dádiva, pergunte sobre o regime jurídico de anonimato/acesso aos dados segundo as regras actuais do CNPMA',
          'Guarde os resultados das análises e os protocolos de estimulação: serão necessários se mudar de centro ou passar para private'
        ] },
        { kind: 'warning', text: 'Não inicie PMA num esquema intermediário “cinzento” sem um centro português claro, licença e documentos do CNPMA. É um risco para os direitos parentais, a segurança médica e o registo da criança.' }
      ]
    },
    {
      id: 'private-option',
      title: 'Se a lista de espera for longa: PMA privada como plano de reserva',
      content: [
        { kind: 'paragraph', text: 'Muitos expats entram em simultâneo na lista de espera do SNS e fazem consulta em private. Isto é legal: os resultados de análises privadas podem muitas vezes ser levados para o SNS, mas o facto de ter uma consulta privada não garante a aceleração do ciclo público.' },
        { kind: 'checklist', items: [
          'Primeira consulta privada com especialista em medicina da reprodução: normalmente 90–180 €',
          'IVF/ICSI em private sem dádiva: frequentemente 4 000–6 500 € por ciclo, sem medicamentos',
          'Medicamentos para estimulação: frequentemente 800–1 800 €, dependendo do protocolo',
          'Esperma/ovócitos de dador aumentam o orçamento e os prazos',
          'A crioconservação e o armazenamento de embriões são pagos à parte',
          'O seguro privado raramente cobre IVF na totalidade; verifique exclusões relativas a infertility/PMA'
        ] },
        { kind: 'paragraph', text: 'Estratégia aos 40–42 anos: pedir imediatamente referenciação no SNS e, em paralelo, obter uma opinião e análises no privado. Se a lista de espera do SNS ultrapassar o limite de idade, ainda terá tempo para tomar uma decisão sobre private.' }
      ]
    }
  ],
  costs: [
    { label: 'PMA/IVF-ICSI no SNS', amountEUR: 0, note: 'Até 3 ciclos se forem cumpridos os critérios do SNS; podem existir custos com medicamentos/análises fora do SNS e deslocações' },
    { label: 'Consulta privada com especialista em medicina da reprodução', amountEURMin: 90, amountEURMax: 180, note: 'Referência para clínicas privadas em 2026; não substitui a referenciação pelo SNS' },
    { label: 'IVF/ICSI em clínica privada', amountEURMin: 4000, amountEURMax: 6500, note: 'Normalmente sem medicamentos, dádiva, crioconservação e procedimentos adicionais' },
    { label: 'Medicamentos para estimulação em private', amountEURMin: 800, amountEURMax: 1800, note: 'Depende do protocolo, dosagens e idade' }
  ],
  sources: [
    { title: 'CNPMA — Conselho Nacional de Procriação Medicamente Assistida', url: 'https://www.cnpma.org.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS — Saúde Reprodutiva', url: 'https://www.sns.gov.pt/sns/saude-publica/saude-reprodutiva/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 32/2006 — Procriação medicamente assistida', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34412975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 17/2016 — acesso à PMA para todas as mulheres independentemente do estado civil e orientação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/17-2016-74738646', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
