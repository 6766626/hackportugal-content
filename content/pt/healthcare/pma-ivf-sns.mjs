export default {
  editorialVoice: 'hackportugal',
  id: 'pma-ivf-sns',
  categoryId: 'healthcare',
  title: 'FIV / PMA no SNS: 3 ciclos gratuitos, idade e direito de acesso',
  tldr: 'Em Portugal, PMA significa procriação medicamente assistida: IUI, IVF/ICSI, gâmetas de dador e crioconservação. No SNS, o tratamento está disponível gratuitamente para utentes do SNS quando existe indicação médica: normalmente até 3 ciclos de IVF/ICSI, se a mulher não tiver mais de 42 anos no momento da admissão/referenciação. Desde 2016, o acesso não está limitado a casais heterossexuais: mulheres solteiras e casais de mulheres têm o mesmo direito. Todos os ciclos são registados no CNPMA; o percurso começa com o médico de família ou ginecologia no SNS.',
  tags: ['pma', 'ivf', 'sns', 'fiv'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que é a PMA no SNS e o que é pago',
      content: [
        { kind: 'paragraph', text: 'PMA é o termo oficial português para as tecnologias de reprodução medicamente assistida: inseminação intrauterina (IUI), fertilização in vitro (IVF/FIV), ICSI, utilização de gâmetas de dador, crioconservação de embriões/gâmetas por indicação médica.' },
        { kind: 'paragraph', text: 'No SNS, o utente não paga o próprio procedimento de IVF/ICSI num centro público de PMA. Regra prática do SNS: até 3 ciclos de IVF/ICSI por mulher, desde que cumpra os critérios de admissão e idade. A IUI pode ser proposta antes da IVF, se for clinicamente razoável.' },
        { kind: 'checklist', items: [
          'É necessário número de utente SNS e inscrição activa no Centro de Saúde',
          'É necessária avaliação clínica de infertilidade ou outro fundamento legal para PMA',
          'A referenciação passa normalmente pelo médico de família, ginecologia ou consulta de infertilidade',
          'O tratamento é realizado em centros públicos de PMA ou em estruturas parceiras por referenciação do SNS',
          'A dádiva de gâmetas é possível, mas a lista de espera e a disponibilidade de dadores dependem do centro',
          'Todos os procedimentos de PMA estão sujeitos às regras do CNPMA e ao registo nos registos nacionais'
        ] },
        { kind: 'warning', text: '“3 ciclos gratuitos” não significa acesso imediato. A lista de espera nos centros públicos pode demorar meses, e o limite de idade é aplicado no momento da admissão/início do processo segundo as regras do centro. Se tiver 41–42 anos, não adie a referenciação.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem tem direito: casais, mulheres solteiras, casais do mesmo sexo',
      content: [
        { kind: 'paragraph', text: 'Depois da Lei 17/2016, o acesso à PMA em Portugal está aberto a todas as mulheres independentemente do estado civil, orientação sexual e diagnóstico de “infertilidade em casal heterossexual”. Isto significa: uma mulher solteira, um casal de mulheres e um casal heterossexual podem recorrer ao SNS em igualdade de condições.' },
        { kind: 'checklist', items: [
          'A mulher deve ser maior de idade e ter capacidade jurídica',
          'É necessário consentimento informado para o procedimento de PMA',
          'No caso de casal, é necessário o consentimento do segundo progenitor/parceiro, se ele ou ela participar no projecto parental',
          'Uma mulher solteira pode utilizar esperma de dador',
          'Um casal de mulheres pode utilizar esperma de dador; ambas as mulheres formalizam o consentimento segundo as regras da PMA',
          'Casais de homens não têm acesso à gestação de substituição como serviço habitual do SNS; a gestação de substituição em Portugal tem um regime jurídico separado e extremamente limitado',
          'Estrangeiros residentes com utente SNS seguem o mesmo percurso que os cidadãos portugueses'
        ] },
        { kind: 'warning', text: 'As clínicas e os médicos podem pedir documentos sobre estado civil, consentimento do parceiro e parentalidade jurídica. Para casais de mulheres, confirme antecipadamente quais os formulários de consentimento que o centro de PMA exige antes do início do ciclo.' }
      ]
    },
    {
      id: 'age-cap',
      title: 'Limite de idade: mulheres até aos 42 anos',
      content: [
        { kind: 'paragraph', text: 'Para o financiamento público da PMA no SNS, o limite principal é a idade da mulher até aos 42 anos. Na prática, os centros analisam não só a data do primeiro pedido, mas também a possibilidade real de iniciar a estimulação/ciclo antes de atingir a idade-limite segundo o seu protocolo interno.' },
        { kind: 'paragraph', text: 'O limite de idade está ligado à eficácia clínica e à segurança: depois dos 40 anos, a probabilidade de sucesso da IVF diminui de forma visível e os riscos obstétricos aumentam. Por isso, a lista de espera é especialmente crítica para doentes dos 40–42 anos.' },
        { kind: 'checklist', items: [
          'Até aos 35 anos: normalmente há mais tempo para diagnóstico, mas a lista de espera continua a ser relevante',
          '35–39 anos: peça referenciação para consulta de infertilidade sem atrasar',
          '40–42 anos: peça urgent/priority referral, se existirem fundamentos médicos',
          'Depois dos 42 anos: o SNS normalmente não financia IVF/ICSI; resta a PMA privada ou uma avaliação individual fora do percurso padrão',
          'Gâmetas de dador não anulam automaticamente o limite do SNS',
          'A idade masculina e a qualidade do esperma são avaliadas, mas o principal cap público para acesso a IVF/ICSI é a idade da mulher'
        ] },
        { kind: 'warning', text: 'Se estiver perto dos 42 anos, não espere “um ano de tentativas”. Marque consulta com o médico de família e peça referenciação já, juntando análises anteriores, ecografias, espermograma e relatórios clínicos.' }
      ]
    },
    {
      id: 'how-to-start',
      title: 'Como começar através do SNS: percurso passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-utente', title: '1. Obtenha ou confirme o número de utente', content: [
            { kind: 'paragraph', text: 'Sem utente SNS, não entrará no percurso público habitual de PMA. São necessários documento de identidade/autorização de residência ou outro estatuto de permanência legal, NIF e comprovativo de morada para o Centro de Saúde.' }
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
              'Serologias: HIV, HBV, HCV, sífilis e outras segundo o protocolo',
              'Grupo sanguíneo, imunidade a rubella/varicella, rastreio clínico geral',
              'Relatórios sobre gravidezes anteriores, cirurgias, endometriose, PCOS, oncologia'
            ] }
          ] },
          { id: 's4-referral', title: '4. Obtenha referenciação para consulta de infertilidade/PMA', content: [
            { kind: 'paragraph', text: 'A referenciação segue pelo SNS para um hospital ou centro público de PMA. Receberá marcação para a primeira consulta, onde serão confirmados indicações, idade, documentos e plano: IUI, IVF/ICSI, gâmetas de dador ou crioconservação.' }
          ] },
          { id: 's5-consent', title: '5. Assine os consentimentos e entre no ciclo', content: [
            { kind: 'paragraph', text: 'Antes do procedimento, são assinados consentimentos informados. O centro é obrigado a cumprir as regras do CNPMA, incluindo o registo do ciclo, embriões, dádiva e resultados do tratamento.' }
          ] }
        ] }
      ]
    },
    {
      id: 'cnpma-registry',
      title: 'CNPMA: para que serve o registo e o que acontece aos dados',
      content: [
        { kind: 'paragraph', text: 'CNPMA é o Conselho Nacional de Procriação Medicamente Assistida. É o órgão que regula e fiscaliza a PMA em Portugal: licenças dos centros, dádiva, formulários de consentimento, registos de procedimentos e cumprimento da Lei 32/2006.' },
        { kind: 'paragraph', text: 'Cada centro de PMA transmite dados sobre os procedimentos para o sistema controlado pelo CNPMA. Isto não é uma “opção da clínica”, mas parte do regime jurídico da PMA. Os dados são necessários para acompanhar a segurança, resultados, dádiva e prevenção de violações dos limites.' },
        { kind: 'checklist', items: [
          'Confirme que o centro de PMA está licenciado/reconhecido pelo CNPMA',
          'Peça cópias de todos os consentimentos informados',
          'Confirme as regras de conservação de embriões e o prazo de crioconservação',
          'Confirme o que acontece aos embriões em caso de separação do casal, morte de um dos participantes ou desistência do tratamento',
          'Em caso de dádiva, pergunte sobre o regime jurídico de anonimato/acesso a dados segundo as regras actuais do CNPMA',
          'Guarde resultados de análises e protocolos de estimulação: serão necessários se mudar de centro ou passar para o private'
        ] },
        { kind: 'warning', text: 'Não inicie PMA num esquema intermediário “cinzento” sem um centro português claro, licença e documentos do CNPMA. É um risco para os direitos parentais, a segurança médica e o registo da criança.' }
      ]
    },
    {
      id: 'private-option',
      title: 'Se a lista de espera for longa: PMA privada como plano de reserva',
      content: [
        { kind: 'paragraph', text: 'Muitos expats entram simultaneamente na lista de espera do SNS e consultam no private. Isto é legal: os resultados de análises privadas podem muitas vezes ser apresentados no SNS, mas o facto de ter uma consulta privada não garante aceleração do ciclo público.' },
        { kind: 'checklist', items: [
          'Primeira consulta privada com especialista em medicina da reprodução: normalmente 90–180 €',
          'IVF/ICSI no private sem dádiva: frequentemente 4 000–6 500 € por ciclo sem medicamentos',
          'Medicamentos para estimulação: frequentemente 800–1 800 €, dependendo do protocolo',
          'Esperma/ovócitos de dador aumentam o orçamento e os prazos',
          'Crioconservação e armazenamento de embriões são pagos separadamente',
          'O seguro privado raramente cobre IVF integralmente; verifique as exclusões relativas a infertility/PMA'
        ] },
        { kind: 'paragraph', text: 'Estratégia aos 40–42 anos: pedir imediatamente referenciação no SNS e, em paralelo, recolher uma opinião e análises no privado. Se a lista de espera do SNS ultrapassar o limite de idade, ainda terá tempo para decidir sobre o private.' }
      ]
    }
  ],
  costs: [
    { label: 'PMA/IVF-ICSI no SNS', amountEUR: 0, note: 'Até 3 ciclos se forem cumpridos os critérios do SNS; podem existir despesas com medicamentos/análises fora do SNS e deslocações' },
    { label: 'Consulta privada com especialista em medicina da reprodução', amountEURMin: 90, amountEURMax: 180, note: 'Referência para clínicas privadas em 2026; não substitui a referenciação do SNS' },
    { label: 'IVF/ICSI em clínica privada', amountEURMin: 4000, amountEURMax: 6500, note: 'Normalmente sem medicamentos, dádiva, crioconservação e procedimentos adicionais' },
    { label: 'Medicamentos para estimulação no private', amountEURMin: 800, amountEURMax: 1800, note: 'Depende do protocolo, doses e idade' }
  ],
  sources: [
    { title: 'CNPMA — Conselho Nacional de Procriação Medicamente Assistida', url: 'https://www.cnpma.org.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS — Banco Público de Gâmetas e rede de centros públicos de PMA', url: 'https://www.sns.gov.pt/cidadao/banco-publico-de-gametas-2/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Lei 32/2006 — Procriação medicamente assistida', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34412975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 17/2016 — acesso à PMA para todas as mulheres independentemente do estado civil e orientação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/17-2016-74738646', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
