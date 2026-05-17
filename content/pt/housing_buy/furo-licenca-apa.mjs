export default {
  editorialVoice: 'hackportugal',
  id: 'furo-licenca-apa',
  categoryId: 'housing_buy',
  title: 'Furo no terreno — licença APA / ARH',
  tldr: 'Qualquer furo de captação de água no seu terreno (para rega, uso doméstico, piscina) exige registo ou licença da APA (Agência Portuguesa do Ambiente) / ARH (Administração da Região Hidrográfica). Sem licença — coimas de 1 500–37 500 € + possível obrigação de encerrar o furo. O registo (para uso doméstico até 5 m³/dia) é gratuito, a licença (para volumes maiores ou uso comercial) ~50–300 € + projecto de hidrogeólogo. Prazos: registo quase imediato, licença 60–90 dias. Proibido: perfurar a menos de 50 m de uma fossa séptica, em zonas de captações públicas de água, bem como sem projecto para profundidade >100 m. A instalação de bomba de calor também é regulada.',
  tags: ['furo', 'água', 'apa', 'arh', 'poço', 'captação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-license',
      title: 'Porque é necessária licença — lei e realidade',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, toda a água (rios, lagos, águas superficiais e subterrâneas) é propriedade do Estado. A utilização de águas subterrâneas é regulada pelo Decreto-Lei 226-A/2007 (Lei da Água). Sem licença ou registo, é ilegal utilizar água de um furo privado, mesmo no seu próprio terreno.' },
        { kind: 'checklist', items: [
          'Abastecimento de água para uso doméstico: 100–300 l/dia por pessoa — é considerado uso doméstico',
          'Rega de jardim/horta até 5 m³/dia no total — uso doméstico',
          'Piscina (100–200 m³ por época) — já acima do limite de uso doméstico',
          'Negócio (arrendamento turístico Alojamento Local (AL), agricultura) — é claramente necessária licença',
          'Reserva de combate a incêndios — registo separado',
          'Geotermia (bomba de calor) — regulada separadamente pela DGEG'
        ] },
        { kind: 'warning', text: 'Muitos furos antigos em quintas foram construídos antes de 2007 e NÃO estão registados. Se comprou esse imóvel — normalmente tem 6–12 meses para regularizar tudo. Desde 2024, há mais processos e fiscalização no Algarve e no Alentejo (regiões secas, onde a água é escassa).' }
      ]
    },
    {
      id: 'registo-vs-licenca',
      title: 'Registo vs licença — qual é a diferença',
      content: [
        { kind: 'checklist', items: [
          'REGISTO (declaração) — para:',
          '  • Uso doméstico até 5 m³/dia',
          '  • Poço escavado até 5 m de profundidade',
          '  • Furos já existentes antes de 2007',
          '  • Na prática gratuito (~30 € de taxa administrativa)',
          '  • Submissão na Junta de Freguesia (órgão local) ou através do ePortugal (portal de serviços públicos)',
          '  • Prazo: regularização em 30–60 dias',
          'LICENÇA — para:',
          '  • Utilização > 5 m³/dia',
          '  • Profundidade > 5 m (furo perfurado)',
          '  • Uso comercial',
          '  • Piscina, sistemas de rega',
          '  • Bomba de calor (geotérmica)',
          '  • Custo: 50–300 € + serviços de hidrogeólogo',
          '  • Submissão na ARH ou APA',
          '  • Prazo: 60–180 dias'
        ] }
      ]
    },
    {
      id: 'how-to-register',
      title: 'Registo — caso simples',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Reúna os documentos',
            content: [
              { kind: 'checklist', items: [
                'Caderneta Predial do terreno',
                'Certidão de Teor (certidão da Conservatória)',
                'Mapa com a localização do furo (GPS)',
                'Fotografias do furo e da área',
                'Descrição da utilização: para que serve a água (rega, doméstico)',
                'Estimativa de volumes: litros/dia'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submissão',
            content: [
              { kind: 'paragraph', text: 'Através do ePortugal (portal de serviços públicos): Cidadão → Ambiente → Pedido de Registo de Furo. Autenticação com Chave Móvel Digital (CMD).' },
              { kind: 'paragraph', text: 'Em alternativa — presencialmente na ARH (5 regiões: Norte, Centro, Tejo e Oeste, Alentejo, Algarve).' }
            ]
          },
          {
            id: 's3',
            title: 'Receber o comprovativo',
            content: [
              { kind: 'paragraph', text: 'O comprovativo de regularização chega por email e por correio normal. É a confirmação que pode apresentar aos inspectores da APA.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Licença — para utilização elevada',
      content: [
        { kind: 'paragraph', text: 'É mais complexo e exige um projecto profissional.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Encontre um hidrogeólogo',
            content: [
              { kind: 'paragraph', text: 'Engenheiro hidrogeólogo — deve estar inscrito na Ordem dos Engenheiros. Estes profissionais fazem:' },
              { kind: 'checklist', items: [
                'Estudo hidrogeológico justificativo (1 500–3 500 €)',
                'Projecto técnico (plano de perfuração, medidas de segurança, gestão)',
                'Memória descritiva para a APA',
                'Carta hidrogeológica da região',
                'Avaliação do caudal e da qualidade da água',
                'Avaliação dos riscos para furos vizinhos e aquíferos'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submissão na ARH',
            content: [
              { kind: 'paragraph', text: 'Com o projecto do hidrogeólogo. Através do portal ARH Online, autenticação com Chave Móvel Digital (CMD), pagamento ~50–300 €. Análise pela ARH: 60–180 dias (muitas vezes mais devido a pareceres da DRAP — direcção regional de agricultura e pescas, e do ICNF — instituto de conservação da natureza, se o terreno estiver em zona protegida).' }
            ]
          },
          {
            id: 's3',
            title: 'Perfuração',
            content: [
              { kind: 'paragraph', text: 'Só depois de obter a licença. O empreiteiro de perfuração deve estar registado na ANEFA (Associação Nacional de Empresas de Furos de Água). Custo: 50–150 €/m de profundidade. Furo padrão de 50–100 m = 3 000–15 000 €.' }
            ]
          },
          {
            id: 's4',
            title: 'Vistoria técnica final',
            content: [
              { kind: 'paragraph', text: 'Depois da perfuração, a ARH verifica a conformidade com o projecto. As não conformidades identificadas podem exigir correcções.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'restrictions',
      title: 'Onde NÃO se pode perfurar',
      content: [
        { kind: 'checklist', items: [
          '🛑 Zonas de protecção sanitária de captações públicas de água (abastecimento municipal de água potável): proibição total',
          '🛑 Menos de 50 m de uma fossa séptica',
          '🛑 Menos de 100 m de um cemitério',
          '🛑 Menos de 50 m de um campo de infiltração (poços absorventes)',
          '🛑 Menos de 200 m de uma zona industrial',
          '🛑 Em zonas RAN/REN (Reserva Agrícola Nacional / Reserva Ecológica Nacional) — por vezes proibição, por vezes pareceres adicionais',
          '🛑 Em zonas de protecção de oleodutos e gasodutos',
          '🛑 Em zonas de risco geológico (solo instável)',
          'No Algarve e no Alentejo — regras especialmente rigorosas devido aos aquíferos sob pressão'
        ] },
        { kind: 'paragraph', text: 'Também existem zonas vulneráveis a nitratos (zonas vulneráveis) devido à poluição agrícola — especialmente no Algarve e em partes do Alentejo.' }
      ]
    },
    {
      id: 'water-quality',
      title: 'Qualidade da água e análises obrigatórias',
      content: [
        { kind: 'paragraph', text: 'Se utilizar a água para consumo em casa — as análises são obrigatórias.' },
        { kind: 'checklist', items: [
          'Análise microbiológica: E.coli, coliformes, enterococos. Pelo menos uma vez por ano',
          'Análise química: pH, nitratos, sulfatos, cloretos, metais pesados',
          'Custo: 50–150 € por análise completa em laboratório privado',
          'Laboratórios acreditados: Águas do Portugal, IST Lab, Edibon',
          'Se for para uso comercial (restaurantes, Alojamento Local (AL)): análises trimestrais + certificados especiais',
          'Se for no Algarve/Alentejo: acrescente análise de nitratos — frequentemente acima do limite devido à agricultura intensiva',
          'Tratamento: UV para micróbios, osmose inversa para sais/química, filtros de cartucho para partículas em suspensão'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Coimas',
      content: [
        { kind: 'checklist', items: [
          'Furo sem registo (pessoa singular): 250–1 500 €',
          'Furo sem licença (pessoa singular): 1 500–37 500 €',
          'Furo sem licença (pessoa colectiva): até 2 500 000 €',
          'Exceder o volume autorizado: 500–25 000 €',
          'Perfuração em zona protegida: 5 000–37 500 €',
          'Utilização da rede pública de abastecimento de água para consumo comercial sem licença: procedimento criminal',
          'Encerramento de furo abandonado — obrigação do proprietário; 1 000–10 000 €, se não for feito e alguém sofrer danos'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registo (declaração) de furo simples', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Licença APA/ARH', amountEURMin: 50, amountEURMax: 300, note: 'Taxa administrativa' },
    { label: 'Estudo hidrogeológico', amountEURMin: 1500, amountEURMax: 3500, note: 'Engenheiro hidrogeólogo' },
    { label: 'Perfuração de furo de 50 m', amountEURMin: 3000, amountEURMax: 7500, note: 'Furo padrão para uso doméstico' },
    { label: 'Perfuração de furo de 100 m', amountEURMin: 7500, amountEURMax: 15000 },
    { label: 'Instalação de bomba submersível', amountEURMin: 800, amountEURMax: 2500 },
    { label: 'Reservatório / hidroacumulador', amountEURMin: 300, amountEURMax: 1500 },
    { label: 'Análise da água uma vez por ano', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Instalação de UV + sistema de filtros', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Coima por furo sem licença', amountEURMin: 1500, amountEURMax: 37500 }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'APA — Actividade de pesquisa e de captação de águas subterrâneas', url: 'https://apambiente.pt/agua/atividade-de-pesquisa-e-de-captacao-de-aguas-subterraneas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 226-A/2007 (Lei da Água, consolidado)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34540975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ARH Tejo e Oeste', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANEFA — Associação Nacional Empresas de Furos de Água', url: 'https://www.anefa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
