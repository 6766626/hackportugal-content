export default {
  editorialVoice: 'hackportugal',
  id: 'termas-de-monfortinho-vidago',
  categoryId: 'healthcare',
  title: 'Termas de Monfortinho, Vidago e S. Pedro do Sul: estâncias termais terapêuticas de Portugal',
  tldr: 'As termas portuguesas não são apenas spa, mas estâncias terapêuticas com água mineral, médico e programas de 12–14 dias.\n\nEm 2026, o SNS pode comparticipar parcialmente tratamentos termais prescritos: normalmente 35% do custo, com um limite anual de cerca de 110 € por utente (novo limite desde 1 de outubro de 2025), se existir receita/prescrição do médico de família e a estância estiver incluída no programa. Orçamento prático: 400–1 500 € para alojamento + tratamentos; o Vidago Palace é mais caro, S. Pedro do Sul é a opção mais procurada.',
  tags: ['termas', 'sns', 'estâncias', 'spa'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-termas-are',
      title: 'O que são termas em Portugal',
      content: [
        { kind: 'paragraph', text: 'As termas são estâncias termais licenciadas onde a água mineral é usada como terapia médica: banhos, duches, inalações, tratamentos de ingestão de água, lamas, fisioterapia. Ao contrário de um spa comum, aqui existe indicação terapêutica, consulta médica e protocolo de tratamento.' },
        { kind: 'paragraph', text: 'Um programa típico dura 12–14 dias consecutivos. Alguns programas têm versões de 7 dias para turistas, mas as estâncias terapêuticas costumam considerar que o efeito sustentado surge após 10–14 tratamentos.' },
        { kind: 'checklist', items: [
          'Reumatologia e dores articulares: Caldas da Rainha, Termas de S. Pedro do Sul, Termas dos Cucos',
          'Digestão e metabolismo: Termas de Monfortinho, Vidago',
          'Vias respiratórias e ORL: existem programas de inalação em várias estâncias, dependendo da composição da água',
          'Reabilitação e fisioterapia: S. Pedro do Sul é uma das opções generalistas mais fortes',
          'Wellness sem diagnóstico: Vidago Palace, formatos boutique e hotel spa',
          'Programa médico: primeiro consulta termal, depois plano de tratamentos',
          'Dia de spa comum: pode ser comprado sem referenciação, mas o SNS não o comparticipa'
        ] }
      ]
    },
    {
      id: 'sns-comparticipacao',
      title: 'SNS comparticipação: quando é possível recuperar parte do custo',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a comparticipação parcial de tratamentos termais através do SNS aplica-se apenas a procedimentos termais médicos prescritos por um médico. Não é uma comparticipação de hotel, alimentação, spa-massage ou programas estéticos.' },
        { kind: 'checklist', items: [
          'É necessário número de utente SNS',
          'É necessária prescrição/receita do médico de família ou de outro médico do SNS',
          'A indicação deve corresponder ao perfil terapêutico da estância',
          'A estância deve ser aderente ao programa de termalismo SNS',
          'A comparticipação é normalmente calculada como 35% do preço dos tratamentos',
          'O limite anual prático é de 110 € por utente (desde 1 de outubro de 2025)',
          'Muitas vezes, o pagamento é feito primeiro pelo paciente e depois a comparticipação é processada segundo as regras da estância/SNS',
          'Alojamento, transporte e alimentação não estão incluídos',
          'Antes de reservar, deve perguntar às termas: “aceitam comparticipação SNS em 2026?”'
        ] },
        { kind: 'warning', text: 'Não compre um pacote de 1 000 € à espera de que o SNS pague uma parte significativa. A comparticipação real é limitada e aplica-se aos tratamentos terapêuticos, não ao hotel package.' }
      ]
    },
    {
      id: 'top-resorts',
      title: 'Para onde ir: Monfortinho, Vidago, S. Pedro do Sul e alternativas',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'monfortinho',
            title: 'Termas de Monfortinho — digestão e formato tranquilo',
            content: [
              { kind: 'paragraph', text: 'Monfortinho fica na Beira Baixa, junto à fronteira com Espanha. A estância é conhecida pela água de composição mineral suave e por programas para digestive system, metabolic comfort, vias urinárias e recuperação geral.' },
              { kind: 'checklist', items: [
                'Adequado para quem procura um programa médico tranquilo, sem a agitação urbana',
                'É frequentemente escolhido em casos de queixas gastrointestinais, metabólicas, renais e das vias urinárias',
                'É preciso carro: os transportes públicos são limitados',
                'O ideal é reservar alojamento perto do balneário termal',
                'Verifique a sazonalidade: algumas termas não funcionam todo o ano'
              ] }
            ]
          },
          {
            id: 'vidago',
            title: 'Vidago Palace — thermal spa premium',
            content: [
              { kind: 'paragraph', text: 'Vidago é conhecido pela água mineral e pelo hotel Vidago Palace. É mais um luxury thermal wellness com história médica do que um sanatório terapêutico económico. Nos rankings de hotel spa em Portugal, Vidago surge frequentemente nas primeiras posições, mas o preço é claramente acima da média.' },
              { kind: 'checklist', items: [
                'Ponto forte: premium accommodation, spa, parque, gastronomia',
                'Perfil: wellness, digestive/metabolic traditions, recuperação',
                'Boa opção para um casal ou para descanso “tratamento + hotel”',
                'Verifique separadamente quais os procedimentos que são tratamentos termais médicos',
                'Nem todos os pacotes luxury spa são elegíveis para SNS comparticipação'
              ] }
            ]
          },
          {
            id: 'sao-pedro-do-sul',
            title: 'Termas de S. Pedro do Sul — a maior estância terapêutica',
            content: [
              { kind: 'paragraph', text: 'S. Pedro do Sul, na região de Viseu, é considerada a maior estância termal de Portugal em volume de clientes e infraestrutura. O seu perfil forte é reumatologia, aparelho locomotor, dores crónicas e programas de reabilitação.' },
              { kind: 'checklist', items: [
                'Muitos médicos, salas de tratamentos e alojamentos à volta',
                'Adequado para um programa de 12–14 dias com tratamentos diários',
                'Boa escolha em caso de artrose, dores reumáticas e problemas músculo-esqueléticos',
                'Existem alojamentos locais e hotéis económicos nas proximidades',
                'É mais fácil organizar sem carro do que Monfortinho, mas o automóvel continua a ser conveniente'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'other-resorts',
      title: 'Mais 3 estâncias que vale a pena conhecer',
      content: [
        { kind: 'paragraph', text: 'Se o objetivo não for especificamente Monfortinho, Vidago ou S. Pedro do Sul, Portugal tem várias alternativas fortes com perfil médico e logística mais conveniente a partir de Lisboa ou Porto.' },
        { kind: 'checklist', items: [
          'Caldas da Rainha — estância histórica, perfil de reumatologia e aparelho locomotor; conveniente a partir de Lisboa',
          'Termas dos Cucos — perto de Torres Vedras, muitas vezes consideradas para reumatologia e tratamentos de recuperação',
          'Termas de Chaves — norte, água mineral, programas digestive/metabolic e wellness',
          'Termas de Luso — centro do país, conveniente para combinar com a Mata do Buçaco',
          'Termas de São Jorge — opção no norte, mais próxima do Porto',
          'Pedras Salgadas — mais formato wellness/hotel; verifique separadamente a componente médica'
        ] },
        { kind: 'warning', text: 'O nome “termas” não garante o mesmo perfil médico. Uma estância é forte em reumatologia, outra nas vias respiratórias ou em digestive. Veja primeiro a indicação terapêutica e só depois o preço do hotel.' }
      ]
    },
    {
      id: 'booking-plan',
      title: 'Como organizar um programa de 14 dias',
      content: [
        { kind: 'checklist', items: [
          'Com 1–2 meses de antecedência: obter consulta com o médico de família, se quiser SNS comparticipação',
          'Pedir prescrição para tratamentos termais com diagnóstico/indicação',
          'Escolher a estância em Termas de Portugal e verificar se funciona nas datas pretendidas',
          'Escrever ao balneário: “Tenho prescrição SNS. Qual é o plano de 14 dias e comparticipação?”',
          'Pedir orçamento separado: consulta termal, tratamentos, alojamento, alimentação',
          'Reservar alojamento a distância pedonal: os tratamentos podem ser cedo todas as manhãs',
          'Levar documentos médicos: relatórios, lista de medicamentos, análises, exames de imagem, se existirem',
          'Confirmar contraindicações: riscos cardiovasculares, oncologia, gravidez, infeções agudas',
          'Reservar 1 dia para a consulta termal inicial e adaptação do horário',
          'Depois do programa, guardar faturas e documentos para eventual comparticipação/seguro'
        ] },
        { kind: 'paragraph', text: 'O formato ideal para um expat que trabalha é de 2 semanas: tratamentos de manhã, trabalho remoto ou descanso à tarde. Em S. Pedro do Sul e Caldas da Rainha é mais fácil encontrar alojamento com internet normal; em Monfortinho é melhor perguntar antecipadamente a velocidade do Wi‑Fi.' }
      ]
    },
    {
      id: 'budget',
      title: 'Orçamento 2026: quanto preparar',
      content: [
        { kind: 'paragraph', text: 'O custo real depende da época, do nível do hotel e do número de tratamentos.\n\nUm programa económico com alojamento local simples pode custar cerca de 400–700 € por 12–14 dias, sem restaurantes. Um hotel package confortável costuma ficar entre 800–1 500 €. O Vidago Palace e os premium spa passam facilmente acima deste intervalo.' },
        { kind: 'checklist', items: [
          'Consulta termal: normalmente 40–80 €',
          'Um tratamento: cerca de 10–45 €, dependendo do tipo',
          'Pacote de tratamentos de 10–14 dias: frequentemente 150–500 €',
          'Alojamento simple/local: 25–60 € por noite',
          'Hotel 3–4*: 70–140 € por noite',
          'Premium hotel spa: 180–350 €+ por noite',
          'Alimentação: 15–35 € por dia em regime simples, mais em hotel restaurant',
          'SNS comparticipação: conte com ela como um pequeno reembolso, não como pagamento do programa'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Consulta termal', amountEURMin: 40, amountEURMax: 80, note: 'Primeira consulta médica na estância; por vezes incluída no pacote terapêutico.' },
    { label: 'Programa terapêutico de tratamentos 12–14 dias', amountEURMin: 150, amountEURMax: 500, note: 'Sem alojamento; depende do número e do tipo de tratamentos termais.' },
    { label: 'Pacote alojamento + tratamentos', amountEURMin: 400, amountEURMax: 1500, note: 'Intervalo realista para 2026 na maioria das estâncias; o Vidago Palace pode ser mais caro.' },
    { label: 'SNS comparticipação', amountEURMax: 110, note: 'Limite anual por utente para tratamentos prescritos (desde 1 de outubro de 2025: 35% do custo, até 110 €); confirme as regras junto do SNS e das termas específicas.' }
  ],
  sources: [
    {
      title: 'Termas de Portugal — catálogo das estâncias termais portuguesas',
      url: 'https://www.termasdeportugal.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24 — informação sobre termalismo e acesso a cuidados',
      url: 'https://www.sns24.gov.pt/tema/servicos-e-cuidados-de-saude/termalismo/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS — Lista de entidades aderentes aos tratamentos termais',
      url: 'https://www.sns.gov.pt/cidadao/lista-de-entidades-aderentes-aos-tratamentos-termais/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'Vidago Palace — Thermal Spa',
      url: 'https://www.vidagopalace.com',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
