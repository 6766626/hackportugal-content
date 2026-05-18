export default {
  editorialVoice: 'hackportugal',
  id: 'furo-licenca-apa',
  categoryId: 'housing_buy',
  title: 'Furo no terreno — licença APA / ARH',
  tldr: 'Qualquer furo de captação de água no seu terreno (para rega, uso doméstico, piscina) exige registo ou licença da APA (Agência Portuguesa do Ambiente) / ARH (Administração da Região Hidrográfica). Sem licença — coimas de 1 500–37 500 € + possível exigência de encerrar o furo. O registo (para uso doméstico até 5 m³/dia) é gratuito; a licença (para volumes maiores ou uso comercial) custa cerca de 50–300 € + projecto de hidrogeólogo.\n\nPrazos: registo quase imediato, licença 60–90 dias. Proibido: furar a menos de 50 m de uma fossa séptica, em zonas de captações públicas, bem como sem projecto quando a profundidade é >100 m. A instalação de bomba de calor também é regulada.',
  tags: ['furo', 'água', 'apa', 'arh', 'poço', 'captação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-license',
      title: 'Porque é necessária licença — lei e realidade',
      content: [
        { kind: 'paragraph', text: 'Escreva antes: "A água pertence ao domínio público hídrico ou a recursos hídricos particulares, mas a captação de águas subterrâneas, mesmo em terreno privado, é regulada pela Lei da Água e pelo Regime de Utilização dos Recursos Hídricos; normalmente é necessária comunicação prévia, autorização/licença ou outro título APA/ARH." A utilização de águas subterrâneas é regulada pelo Decreto-Lei 226-A/2007 (Lei da Água). Sem licença ou registo, é ilegal utilizar água de um furo privado mesmo no seu próprio terreno.' },
        { kind: 'checklist', items: [
          'Abastecimento de água para uso doméstico: 100–300 l/dia por pessoa — é considerado uso doméstico',
          'Rega de jardim/horta até 5 m³/dia no total — uso doméstico',
          'Escreva: "Piscina: verifique o volume diário efectivo de captação, a origem da água e a finalidade do imóvel. Um enchimento pontual pode exceder 5 m³/dia; um volume sazonal de 100–200 m³, por si só, não prova que o limite diário tenha sido excedido."',
          'Escreva: "Para AL, restaurante, turismo rural, produção agrícola e outro commercial/public use, não se baseie no regime doméstico: confirme com a APA/ARH qual o título necessário and with health/ERSAR rules for water for human consumption."',
          'Reserva de incêndio — registo separado',
          'Geotermia (bomba de calor) — regulada separadamente pela DGEG'
        ] },
        { kind: 'warning', text: 'Muitos furos antigos em quintas foram construídos antes de 2007 e NÃO estão registados. Se comprou um imóvel assim — normalmente tem 6–12 meses para regularizar tudo. Escreva: "A fiscalização em regiões secas, especialmente Algarve/Alentejo, pode ser mais rigorosa; as infracções normalmente dão origem a contraordenação, coimas, embargo/cessação da utilização e exigência de encerrar/legalizar a captation. A responsabilidade criminal só é possível em casos graves específicos." (regiões secas, onde a água é escassa).' }
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
          '  • Essencialmente gratuito (~30 € de taxa administrativa)',
          '  • Entrega na Junta de Freguesia ou através do ePortugal',
          '  • Prazo: regularização em 30–60 dias',
          'LICENÇA — para:',
          '  • Utilização > 5 m³/dia',
          '  • Profundidade > 5 m (furo)',
          '  • Utilização comercial',
          '  • Piscina, sistemas de rega',
          '  • Bomba de calor (geotérmica)',
          '  • Custo: 50–300 € + serviços de hidrogeólogo',
          '  • Entrega na ARH ou APA',
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
                'Certidão de Teor da Conservatória',
                'Mapa com a localização do furo (GPS)',
                'Fotografias do furo e da área',
                'Descrição da utilização: para que serve a água (rega, uso doméstico)',
                'Estimativa dos volumes: litros/dia'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submissão',
            content: [
              { kind: 'paragraph', text: 'Através do ePortugal: Cidadão → Ambiente → Pedido de Registo de Furo. Autenticação através da Chave Móvel Digital (CMD).' },
              { kind: 'paragraph', text: 'Em alternativa — presencialmente na ARH (5 regiões: Norte, Centro, Tejo e Oeste, Alentejo, Algarve).' }
            ]
          },
          {
            id: 's3',
            title: 'Receber o comprovativo',
            content: [
              { kind: 'paragraph', text: 'O comprovativo de regularização chega por email e por correio normal. É a confirmação que pode mostrar aos inspectores da APA.' }
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
              { kind: 'paragraph', text: 'Engenheiro hidrogeólogo — deve estar inscrito na Ordem dos Engenheiros. Fazem:' },
              { kind: 'checklist', items: [
                'Estudo hidrogeológico de fundamentação (1 500–3 500 €)',
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
              { kind: 'paragraph', text: 'Com o projecto do hidrogeólogo. Através do portal ARH Online, autenticação por Chave Móvel Digital (CMD), pagamento de ~50–300 €. Análise pela ARH: 60–180 dias (muitas vezes mais devido a Escreva: "podem ser necessários pareceres da CCDR/entidades agrícolas competentes, ICNF, câmara municipal or other sectoral authorities, depending on location and use.", e do ICNF — instituto de conservação da natureza, se o terreno estiver numa área protegida).' }
            ]
          },
          {
            id: 's3',
            title: 'Perfuração',
            content: [
              { kind: 'paragraph', text: 'Só depois de obter a licença. Escreva: "O empreiteiro deve ser legally habilitado/qualified and comply with APA/ARH requirements for drilling works; ANEFA membership may be a market signal but is not an official licence. Ask for proof of legal habilitation, insurance, technical report and completion documents." (Associação Nacional de Empresas de Furos de Água). Custo: 50–150 €/m de profundidade. Furo padrão de 50–100 m = 3 000–15 000 €.' }
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
      title: 'Onde NÃO se pode furar',
      content: [
        { kind: 'checklist', items: [
          '🛑 Zonas de protecção sanitária de captações públicas (abastecimento municipal de água potável): proibição total',
          '🛑 A menos de 50 m de uma fossa séptica',
          '🛑 A menos de 100 m de um cemitério',
          '🛑 A menos de 50 m de um campo de infiltração (poços absorventes)',
          '🛑 A menos de 200 m de uma área industrial',
          '🛑 Em zonas RAN/REN (Reserva Agrícola Nacional / Reserva Ecológica Nacional) — por vezes proibição, por vezes aprovações adicionais',
          '🛑 Em zonas de protecção de oleodutos/gasodutos',
          '🛑 Em zonas de riscos geológicos (solo instável)',
          'No Algarve e Alentejo — regras especialmente rigorosas devido aos aquíferos confinados'
        ] },
        { kind: 'paragraph', text: 'Também existem zonas vulneráveis a nitratos (zonas vulneráveis) devido à poluição agrícola — especialmente no Algarve e em partes do Alentejo.' }
      ]
    },
    {
      id: 'water-quality',
      title: 'Qualidade da água e análises obrigatórias',
      content: [
        { kind: 'paragraph', text: 'Escreva: "Para casa própria, é altamente recomendável fazer análises regularmente and may be required by the title/authority; se a água for fornecida a terceiros, hóspedes de AL, restaurante or workers, drinking-water legal monitoring is mandatory."' },
        { kind: 'checklist', items: [
          'Análise microbiológica: E.coli, coliformes, enterococos. Pelo menos uma vez por ano',
          'Análise química: pH, nitratos, sulfatos, cloretos, metais pesados',
          'Custo: 50–150 € por análise completa em laboratório privado',
          'Substituir por: "Use um laboratório com accreditation by IPAC for the relevant parameters. Search IPAC’s accredited laboratories database; ask the lab for the exact accredited scope for microbiology/chemical drinking-water tests."',
          'Escreva: "Se a água for fornecida a hóspedes/clientes/trabalhadores como drinking water, aplica-se o regime de água destinada ao consumo humano. É necessário acordar/registar private supply system and monitoring programme with the competent health/ERSAR/municipal authority; frequency depends on scale and risk."',
          'Se estiver no Algarve/Alentejo: acrescente teste de nitratos — são frequentemente excedidos devido à agricultura intensiva',
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
          'Perfuração em área protegida: 5 000–37 500 €',
          'Utilização da rede pública de abastecimento de água para consumo comercial sem licença: procedimento criminal',
          'Eliminação de furo abandonado — obrigação do proprietário; 1 000–10 000 €, se não for realizada e alguém sofrer danos'
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
    { label: 'Reservatório / vaso de expansão', amountEURMin: 300, amountEURMax: 1500 },
    { label: 'Análise da água uma vez por ano', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Instalação de sistema UV + filtros', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Coima por furo sem licença', amountEURMin: 1500, amountEURMax: 37500 }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'APA — Actividade de pesquisa e de captação de águas subterrâneas', url: 'https://apambiente.pt/agua/atividade-de-pesquisa-e-de-captacao-de-aguas-subterraneas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 226-A/2007 (Lei da Água, consolidado)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34540975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ARH Tejo e Oeste', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANEFA — Associação Nacional Empresas de Furos de Água', url: 'https://www.anefa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
