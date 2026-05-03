export default {
  editorialVoice: 'hackportugal',
  id: 'caca-licenca-icnf',
  categoryId: 'food_leisure',
  title: 'Caça em Portugal — licença do ICNF + Carta de Caçador (carta de caçador)',
  tldr: 'A caça é um tema burocraticamente complexo. É necessário: 1) Carta de Caçador (teoria + prática, ~150–300 €) — faz-se uma vez e é vitalícia; 2) licença de arma (PSP) — procedimento separado: exame médico e teste psicológico; 3) licença anual de caçador do ICNF (~30–100 € por ano); 4) acesso a uma zona de caça (zonas de caça) — quase tudo é por concessão, geralmente pago (~50–500 € por dia/saída). Épocas: caça maior (javali, veado) — outubro–janeiro; caça menor (coelho, codorniz, pombo) — agosto–janeiro, as datas exatas dependem da espécie. Estrangeiros podem caçar se obtiverem a carta em Portugal ou conseguirem o reconhecimento da sua. Não recomendado a principiantes sem experiência e sem clube local.',
  tags: ['caça', 'caçador', 'icnf', 'arma', 'venatória'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'overview',
      title: 'Porque são necessários tantos documentos',
      content: [
        { kind: 'paragraph', text: 'A caça em Portugal é uma atividade estritamente regulada. Arma, direito a caçar, acesso ao território, espécie concreta e época — para cada um destes aspetos existe o seu documento.' },
        { kind: 'checklist', items: [
          '1️⃣ Carta de Caçador (ICNF): teoria + prática. Obtém-se uma vez para toda a vida',
          '2️⃣ Licença de Uso e Porte de Arma (PSP): direito a possuir arma. Classes B, B1, C, D — conforme o tipo de arma',
          '3️⃣ Licença anual de caçador (ICNF): taxa pelo direito a caçar na época em curso',
          '4️⃣ Direito de acesso às zonas de caça (zonas de caça): zona turística (paga), concessão (paga) ou zona associativa (via associação) — quase todo o país está dividido nestas zonas',
          '5️⃣ Autorizações adicionais por modalidade de caça: ao javali com matilhas, de posto/abrigada, com ave de presa (falcoaria)'
        ] }
      ]
    },
    {
      id: 'carta-caçador',
      title: 'Carta de Caçador (documento principal)',
      content: [
        { kind: 'paragraph', text: 'É o documento base: sem ele não se pode caçar. Obtém-se uma vez e é vitalício (após os 65 anos — atestado médico a cada 5 anos).' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Inscrição no curso',
            content: [
              { kind: 'checklist', items: [
                'Inscreva-se através do ICNF (icnf.pt) ou num centro de formação autorizado',
                'Centros populares: Federação Portuguesa de Caça (FPC), AcordCaça e dezenas de clubes locais',
                'Duração: 30–50 horas de teoria + ~10 horas de prática',
                'Tópicos: segurança, identificação de espécies, legislação, ecologia, armas, trabalho com cães, primeiros socorros',
                'Custo: 100–250 € por curso'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Exame teórico',
            content: [
              { kind: 'paragraph', text: 'Realiza-se no centro regional do ICNF. ~50 perguntas de escolha múltipla, nota mínima — 70%. Áreas: leis da caça, calendário venatório, espécies de fauna selvagem, regras de segurança, trabalho com cães, primeiros socorros.' }
            ]
          },
          {
            id: 's3',
            title: 'Exame prático',
            content: [
              { kind: 'checklist', items: [
                'Tiro aos pratos num stand de um clube autorizado',
                'Pelo menos 3 acertos em 10 disparos a 25 m',
                'Demonstração de manuseamento seguro da arma',
                'Identificação de pegadas e vocalizações de 5 espécies',
                'Custo: ~50–100 € por exame'
              ] }
            ]
          }
        ] },
        { kind: 'paragraph', text: 'Estrangeiros com habilitação/carta de caça do seu país (FACE — Federação das Associações de Caça e Conservação da Natureza da Europa) podem solicitar reconhecimento: para UE/EEE o procedimento é mais simples; para países terceiros, regra geral, é necessário realizar o curso completo.' }
      ]
    },
    {
      id: 'gun-licence',
      title: 'Licença de arma (PSP)',
      content: [
        { kind: 'paragraph', text: 'Paralelamente à Carta de Caçador, é necessário obter o direito ao uso e porte de arma. É um procedimento separado na Polícia de Segurança Pública (PSP).' },
        { kind: 'checklist', items: [
          'Classe B (arma curta): não necessária para caça; utilizada para defesa pessoal',
          'Classe B1 (pequeno revólver): raramente utilizada',
          'Classe C (arma longa semiautomática de cano liso): a maioria dos caçadores usa caçadeiras',
          'Classe D (carabina, “pump”): para cenários de caça mais avançados',
          'Classe E (arma raiada de ferrolho): para caça maior — javali, veado'
        ] },
        { kind: 'paragraph', text: 'Documentos para o pedido:' },
        { kind: 'checklist', items: [
          'Carta de Caçador — sem ela a PSP não emite autorização para arma de caça',
          'Exame médico: psiquiatria e clínica geral, ~150–300 €',
          'Avaliação psicológica em centro autorizado, ~80–150 €',
          'Certificado de registo criminal',
          'Entrega do requerimento no departamento regional da PSP: taxa ~80–200 €',
          'Curso de segurança/manuseamento de armas (se exigido pela PSP)',
          'Prazo de análise: 60–90 dias',
          'Renovação de 5 em 5 anos com novo exame médico'
        ] },
        { kind: 'paragraph', text: 'Armazenamento de armas: cofre e fixação anti-intrusão obrigatórios. A PSP pode efetuar uma inspeção sem aviso prévio.' }
      ]
    },
    {
      id: 'annual-license',
      title: 'Licença anual de caçador',
      content: [
        { kind: 'paragraph', text: 'Cada época (1 de junho — 31 de maio do ano seguinte) paga-se separadamente no ICNF.' },
        { kind: 'checklist', items: [
          'Apenas caça menor (coelho, codorniz, pombo, pato): ~30–50 €',
          'Caça maior (javali, veado, gamo): ~50–80 €',
          'Ambas as categorias (maior + menor): ~70–100 €',
          'Quotas (cota) para espécies específicas pagas adicionalmente: javali +5 €, veado +10–30 €',
          'Pagamento online em icnf.pt ou num posto local de atendimento a caçadores'
        ] }
      ]
    },
    {
      id: 'zonas-caça',
      title: 'Acesso às zonas de caça',
      content: [
        { kind: 'paragraph', text: 'A dificuldade está no acesso: ~95% do território de Portugal está dividido em zonas geridas, e quase todas são pagas.' },
        { kind: 'checklist', items: [
          'ZCA (Zona de Caça Associativa): zona associativa de clube. Requer ser sócio. Quota ~50–300 € por ano',
          'ZCM (Zona de Caça Municipal): municipal; acesso via Câmara Municipal ou por sorteio',
          'ZCT (Zona de Caça Turística): turística/comercial; pagamento por dia/visita ~50–500 €',
          'ZCNT (Zona de Caça Não Transferida): categoria rara, por vezes com acesso livre',
          'ZCS (Zona de Caça Social): para residentes locais; muitas vezes gratuita, mas é necessário ser residente do município',
          'Mapa das zonas: ICNF SI Caça — aplicação para iOS e Android'
        ] },
        { kind: 'paragraph', text: 'Para um estrangeiro sem contactos num clube local, é normalmente mais simples recorrer às ZCT (zonas turísticas). Regiões populares:' },
        { kind: 'checklist', items: [
          'Alentejo: região lendária para javali e veado. Coutadas Reais',
          'Beira Interior: a melhor perdiz-vermelha',
          'Trás-os-Montes: grande diversidade de espécies, fortes tradições de caça',
          'Algarve: aves aquáticas na Ria Formosa, coelho no interior',
          'Açores: cabra-brava na ilha do Pico'
        ] }
      ]
    },
    {
      id: 'seasons',
      title: 'Épocas e espécies',
      content: [
        { kind: 'paragraph', text: 'O calendário venatório é aprovado por Portaria anual do ICNF. Prazos típicos:' },
        { kind: 'checklist', items: [
          'Coelho: outubro — janeiro',
          'Lebre: outubro — dezembro',
          'Perdiz: outubro — janeiro, apenas aos fins de semana',
          'Codorniz: agosto — dezembro',
          'Pombo-torcaz: outubro — janeiro',
          'Pombo-bravo: dias específicos segundo o calendário',
          'Patos: outubro — janeiro',
          'Javali: outubro — janeiro; caça noturna possível mediante autorização específica',
          'Veado: setembro — fevereiro (dependendo da subcategoria)',
          'Corço: maio — agosto (por subcategorias)',
          'Gamo: agosto — fevereiro',
          'Raposa: agosto — fevereiro'
        ] },
        { kind: 'paragraph', text: 'Modalidades específicas: montarias (batidas ao javali com cães), aguardo (em posto/abrigada), espera (vigilância).' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Quem fiscaliza e coimas',
      content: [
        { kind: 'checklist', items: [
          'GNR/SEPNA — principal força de fiscalização na natureza',
          'Inspetores do ICNF (Vigilantes da Natureza)',
          'PSP — questões de armas nas cidades'
        ] },
        { kind: 'checklist', items: [
          'Sem Carta de Caçador: 200–2 500 € + possível apreensão da arma',
          'Sem licença anual: 100–1 000 €',
          'Caçar fora de época: 500–5 000 €',
          'Espécie protegida (lince, lobo, urso-pardo): procedimento criminal',
          'Sem autorização de arma: procedimento criminal',
          'Excesso de quota: 200–2 000 € por cada animal',
          'Caça furtiva noturna sem autorizações: procedimento criminal',
          'Intrusão em zonas de caça privadas sem autorização: 200–1 000 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Curso: Carta de Caçador', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Exame para a Carta', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Exame médico para arma', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Teste psicológico', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Licença de arma (PSP)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'Licença anual de caçador', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Quota de um clube de caça', amountEURMin: 50, amountEURMax: 300, note: 'Por ano' },
    { label: 'Dia de caça em ZCT', amountEURMin: 50, amountEURMax: 500, note: 'Em zona de caça turística' },
    { label: 'Troféu (caça maior — pagamento pela peça de javali/veado)', amountEURMin: 200, amountEURMax: 2000 },
    { label: 'Cofre para arma', amountEURMin: 200, amountEURMax: 1000, note: 'Obrigatório por lei' }
  ],
  sources: [
    { title: 'ICNF — Caça', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'PSP — Armas e Munições', url: 'https://www.psp.pt/Pages/atividade-da-psp/armas/inicio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 202/2004 — regime jurídico da caça', url: 'https://dre.pt/dre/detalhe/decreto-lei/202-2004-528700', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Lei 5/2006 — uso e porte de armas', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34539075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 105/2024 — Calendário Venatório 2024-2025', url: 'https://dre.pt/dre/detalhe/portaria/105-2024-848530150', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
