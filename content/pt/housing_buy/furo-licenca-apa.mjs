export default {
  editorialVoice: 'hackportugal',
  id: 'furo-licenca-apa',
  categoryId: 'housing_buy',
  title: 'Furo no terreno — licença da APA / ARH',
  tldr: 'Qualquer furo/captação de água no seu terreno (para rega, uso doméstico, piscina) exige registo ou licença da APA (Agência Portuguesa do Ambiente — agência do ambiente) / ARH (Administração da Região Hidrográfica — administração regional dos recursos hídricos). Sem licença — coimas de 1 500–37 500 € + possível exigência de encerrar o furo. O registo (para uso doméstico até 5 m³/dia) é gratuito, a licença (para volumes maiores ou uso comercial) ~50–300 € + projeto de hidrogeólogo. Prazos: registo quase imediato, licença 60–90 dias. É proibido furar a menos de 50 m de uma fossa séptica (fossa séptica), em zonas de captação pública, bem como sem projeto para profundidade >100 m. A instalação de bomba de calor também é regulada.',
  tags: ['furo', 'água', 'apa', 'arh', 'poço', 'captação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-license',
      title: 'Porque é necessária a licença — lei e realidade',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, toda a água (rios, lagos, superficiais e subterrâneas) é propriedade do Estado. A utilização de águas subterrâneas é regulada pelo Decreto-Lei 226-A/2007 (Lei da Água). Sem licença ou registo é ilegal utilizar água de um furo privado mesmo no seu próprio terreno.' },
        { kind: 'checklist', items: [
          'Abastecimento de água para uso doméstico: 100–300 l/dia por pessoa — considera-se uso doméstico',
          'Rega de jardim/horta até 5 m³/dia no total — uso doméstico',
          'Piscina (100–200 m³ por época) — já acima do limite de uso doméstico',
          'Negócio (Alojamento Local (AL), agricultura) — é claramente necessária licença',
          'Reserva contra incêndios — registo separado',
          'Geotermia (bomba de calor) — regulada separadamente pela DGEG'
        ] },
        { kind: 'warning', text: 'Muitos furos antigos em quintas foram executados antes de 2007 e NÃO estão registados. Se comprou um imóvel destes — tem normalmente 6–12 meses para regularizar. Desde 2024 há fiscalização e ação penal mais ativas no Algarve e no Alentejo (regiões secas, onde a água é escassa).' }
      ]
    },
    {
      id: 'registo-vs-licenca',
      title: 'Registo vs licença — qual a diferença',
      content: [
        { kind: 'checklist', items: [
          'REGISTO (requerimento) — para:',
          '  • Uso doméstico até 5 m³/dia',
          '  • Poço cavado até 5 m de profundidade',
          '  • Furos existentes anteriores a 2007',
          '  • Na prática gratuito (~30 € de taxa administrativa)',
          '  • Entrega na Junta de Freguesia ou via ePortugal (portal de serviços públicos)',
          '  • Prazo: regularização em 30–60 dias',
          'LICENÇA — para:',
          '  • Utilização > 5 m³/dia',
          '  • Profundidade > 5 m (furo de sondagem)',
          '  • Uso comercial',
          '  • Piscinas, sistemas de rega',
          '  • Bomba de calor (geotermia)',
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
                'Certidão de Teor (da Conservatória)',
                'Mapa com a localização do furo (GPS)',
                'Fotos do furo e da propriedade',
                'Descrição do uso: para que é a água (rega, doméstico)',
                'Estimativa de volumes: litros/dia'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Entrega',
            content: [
              { kind: 'paragraph', text: 'Através do ePortugal (portal de serviços públicos): Cidadão → Ambiente → Pedido de Registo de Furo. Autenticação via Chave Móvel Digital (CMD).' },
              { kind: 'paragraph', text: 'Em alternativa — presencialmente na ARH (5 regiões: Norte, Centro, Tejo e Oeste, Alentejo, Algarve).' }
            ]
          },
          {
            id: 's3',
            title: 'Obtenção do comprovativo',
            content: [
              { kind: 'paragraph', text: 'O comprovativo de regularização chega por email e por correio. É a confirmação a apresentar aos inspetores da APA.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Licença — para utilização intensiva',
      content: [
        { kind: 'paragraph', text: 'Mais complexo e requer projeto profissional.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Encontre um hidrogeólogo',
            content: [
              { kind: 'paragraph', text: 'Engenheiro hidrogeólogo — deve estar registado na Ordem dos Engenheiros. Fazem:' },
              { kind: 'checklist', items: [
                'Estudo hidrogeológico de fundamentação (1 500–3 500 €)',
                'Projeto técnico (plano de furação, medidas de segurança, exploração)',
                'Memória descritiva para a APA',
                'Carta hidrogeológica da região',
                'Estimativa de débito e qualidade da água',
                'Avaliação de riscos para furos vizinhos e aquíferos'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submissão à ARH',
            content: [
              { kind: 'paragraph', text: 'Com o projeto do hidrogeólogo. Via portal ARH Online, autenticação com Chave Móvel Digital (CMD), pagamento ~50–300 €. Análise da ARH: 60–180 dias (muitas vezes mais devido a pareceres da DRAP — Direção Regional de Agricultura e Pescas, e do ICNF — Instituto da Conservação da Natureza, se o terreno estiver em zona protegida).' }
            ]
          },
          {
            id: 's3',
            title: 'Perfuração',
            content: [
              { kind: 'paragraph', text: 'Só depois de obter a licença. O empreiteiro de perfuração deve estar registado na ANEFA (Associação Nacional de Empresas de Furos de Água). Custo: 50–150 €/m de profundidade. Furo padrão 50–100 m = 3 000–15 000 €.' }
            ]
          },
          {
            id: 's4',
            title: 'Inspeção técnica final',
            content: [
              { kind: 'paragraph', text: 'Após a perfuração, a ARH verifica a conformidade com o projeto. As não conformidades detetadas podem exigir correções.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'restrictions',
      title: 'Onde NÃO é permitido furar',
      content: [
        { kind: 'checklist', items: [
          '🛑 Zonas de proteção sanitária de captações públicas (abastecimento municipal): proibição total',
          '🛑 A menos de 50 m de uma fossa séptica',
          '🛑 A menos de 100 m de um cemitério',
          '🛑 A menos de 50 m de um campo de infiltração (poços absorventes)',
          '🛑 A menos de 200 m de um terreno industrial',
          '🛑 Em zonas RAN/REN (Reserva Agrícola Nacional / Reserva Ecológica Nacional) — por vezes proibido, por vezes requer autorizações adicionais',
          '🛑 Em zonas de servidão de oleodutos e gasodutos',
          '🛑 Em zonas de risco geológico (solos instáveis)',
          'No Algarve e no Alentejo — regras especialmente rigorosas devido a aquíferos pressurizados'
        ] },
        { kind: 'paragraph', text: 'Também existem zonas vulneráveis a nitratos (zonas vulneráveis) devido à poluição agrícola — especialmente no Algarve e em partes do Alentejo.' }
      ]
    },
    {
      id: 'water-quality',
      title: 'Qualidade da água e testes obrigatórios',
      content: [
        { kind: 'paragraph', text: 'Se utilizar a água para consumo no domicílio — os testes são obrigatórios.' },
        { kind: 'checklist', items: [
          'Análise microbiológica: E. coli, coliformes, enterococos. Pelo menos uma vez por ano',
          'Análise química: pH, nitratos, sulfatos, cloretos, metais pesados',
          'Custo: 50–150 € por teste completo em laboratório privado',
          'Laboratórios acreditados: Águas do Portugal, IST Lab, Edibon',
          'Se for para uso comercial (restaurantes, Alojamento Local (AL)): testes trimestrais + certificados específicos',
          'Se for no Algarve/Alentejo: inclua teste de nitratos — frequentemente elevados devido à agricultura intensiva',
          'Tratamento: UV para micróbios, osmose inversa para sais/químicos, filtros de cartucho para sólidos em suspensão'
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
          'Furo sem licença (pessoa coletiva): até 2 500 000 €',
          'Excesso do volume autorizado: 500–25 000 €',
          'Perfuração em zona protegida: 5 000–37 500 €',
          'Utilização da rede pública de abastecimento para consumo comercial sem licença: procedimento criminal',
          'Selagem de furo abandonado — obrigação do proprietário; 1 000–10 000 €, se não executada e alguém sofrer danos'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registo (requerimento) de furo simples', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Licença APA/ARH', amountEURMin: 50, amountEURMax: 300, note: 'Taxa adm.' },
    { label: 'Estudo hidrogeológico', amountEURMin: 1500, amountEURMax: 3500, note: 'Engenheiro hidrogeólogo' },
    { label: 'Perfuração de furo 50 m', amountEURMin: 3000, amountEURMax: 7500, note: 'Furo padrão para uso doméstico' },
    { label: 'Perfuração de furo 100 m', amountEURMin: 7500, amountEURMax: 15000 },
    { label: 'Instalação de bomba submersível', amountEURMin: 800, amountEURMax: 2500 },
    { label: 'Depósito / hidroacumulador', amountEURMin: 300, amountEURMax: 1500 },
    { label: 'Análise de água anual', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Instalação de UV + sistema de filtragem', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Coima por furo sem licença', amountEURMin: 1500, amountEURMax: 37500 }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'APA — Captações de água subterrânea', url: 'https://apambiente.pt/agua/captacoes-de-agua-subterranea', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 226-A/2007 (Lei da Água, consolidado)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34540975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ARH Tejo e Oeste', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANEFA — Associação Nacional Empresas de Furos de Água', url: 'https://www.anefa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
