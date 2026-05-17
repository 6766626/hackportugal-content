export default {
  editorialVoice: 'hackportugal',
  id: 'caca-licenca-icnf',
  categoryId: 'food_leisure',
  title: 'Caça em Portugal — licença ICNF + carta de caçador',
  tldr: 'A caça é um tema burocraticamente complexo. É necessário: 1) carta de caçador (teoria + prática, ~150-300 €) — uma vez e vitalícia; 2) licença de uso e porte de arma (PSP) — procedimento separado: junta médica e teste psicológico; 3) licença anual de caçador do ICNF (~30-100 € por ano); 4) acesso a uma zona de caça (zonas de caça) — quase tudo funciona por concessões, normalmente pago (~50-500 € por dia/saída). Épocas: caça maior (caça maior: javali, veado) — outubro–janeiro; caça menor (caça menor: coelho, codorniz, pombo) — agosto–janeiro, as datas exactas dependem da espécie. Estrangeiros podem caçar se obtiverem a carta em Portugal ou conseguirem o reconhecimento da sua. Não recomendamos a principiantes sem experiência e sem clube local.',
  tags: ['caça', 'caçador', 'icnf', 'arma', 'venatória'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'overview',
      title: 'Porque são necessários tantos documentos',
      content: [
        { kind: 'paragraph', text: 'A caça em Portugal é uma actividade estritamente regulada. Arma, direito a caçar, acesso ao território, espécie concreta e época — para cada um destes aspectos existe um documento próprio.' },
        { kind: 'checklist', items: [
          '1️⃣ Carta de caçador (ICNF): teoria + prática. Obtém-se uma vez para toda a vida',
          '2️⃣ Licença de Uso e Porte de Arma (PSP): direito a usar arma. Classes B, B1, C, D — conforme o tipo de arma',
          '3️⃣ Licença anual de caçador (ICNF): pagamento pelo direito a caçar na época em curso',
          '4️⃣ Direito de acesso às zonas de caça (zonas de caça): zona turística (paga), concessão (paga) ou zona associativa (através de filiação) — quase todo o país está dividido nestas zonas',
          '5️⃣ Autorizações adicionais conforme o modo de caça: ao javali com cães de rasto, de espera, com ave de presa (falcoaria)'
        ] }
      ]
    },
    {
      id: 'carta-caçador',
      title: 'Carta de Caçador (documento principal)',
      content: [
        { kind: 'paragraph', text: 'É a credencial de base: sem ela não se pode caçar. Obtém-se uma vez e é vitalícia (após os 65 anos — confirmação médica de 5 em 5 anos).' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Inscrição no curso',
            content: [
              { kind: 'checklist', items: [
                'Inscreva-se através do ICNF (icnf.pt) ou num centro de formação autorizado',
                'Centros populares: Federação Portuguesa de Caça (FPC), AcordCaça, bem como dezenas de clubes locais',
                'Duração: 30–50 horas de teoria + ~10 horas de prática',
                'Temas: segurança, identificação de espécies, legislação, ecologia, armas, trabalho com cães, primeiros socorros',
                'Custo: 100–250 € pelo curso'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Exame teórico',
            content: [
              { kind: 'paragraph', text: 'É realizado num centro regional do ICNF. ~50 perguntas de escolha múltipla, nota mínima — 70%. Secções: legislação da caça, calendário das épocas venatórias, espécies de animais selvagens, regras de segurança, trabalho com cães, primeiros socorros.' }
            ]
          },
          {
            id: 's3',
            title: 'Exame prático',
            content: [
              { kind: 'checklist', items: [
                'Tiro aos pratos num campo de tiro de clube autorizado',
                'Pelo menos 3 acertos em 10 a 25 m',
                'Demonstração de manuseamento seguro da arma',
                'Identificação de rastos e vocalizações de 5 espécies',
                'Custo: ~50–100 € pelo exame'
              ] }
            ]
          }
        ] },
        { kind: 'paragraph', text: 'Estrangeiros com direitos de caça do seu país (FACE — Federação Europeia de Associações de Caçadores e Conservação) podem pedir reconhecimento: para UE/EEE o procedimento é mais simples; para países terceiros, normalmente é necessário fazer o curso completo.' }
      ]
    },
    {
      id: 'gun-licence',
      title: 'Licença de arma (PSP)',
      content: [
        { kind: 'paragraph', text: 'Em paralelo com a carta de caçador, é necessário obter o direito a usar arma. É um procedimento separado na Polícia de Segurança Pública (PSP).' },
        { kind: 'checklist', items: [
          'Classe B (arma curta): não é necessária para caça; aplica-se a defesa pessoal',
          'Classe B1 (revólver pequeno): raramente utilizada',
          'Classe C (arma longa semiautomática de alma lisa): a maioria dos caçadores usa espingardas de caça',
          'Classe D (carabina, arma de repetição por acção de bomba): para cenários de caça mais avançados',
          'Classe E (arma estriada de ferrolho): para caça maior — javali, veado'
        ] },
        { kind: 'paragraph', text: 'O que reunir para a candidatura:' },
        { kind: 'checklist', items: [
          'Carta de caçador — sem ela a PSP não emite direito a arma de caça',
          'Junta médica: psiquiatra e médico de clínica geral, ~150–300 €',
          'Teste psicológico em centro autorizado, ~80–150 €',
          'Certificado de registo criminal',
          'Entrega do requerimento no departamento regional da PSP: taxa ~80–200 €',
          'Curso de manuseamento seguro de armas (se exigido pela PSP)',
          'Prazo de apreciação: 60–90 dias',
          'Renovação de 5 em 5 anos com nova junta médica'
        ] },
        { kind: 'paragraph', text: 'Armazenamento de armas: é obrigatório cofre e fixação anti-intrusão. A PSP pode fazer uma inspecção sem aviso prévio.' }
      ]
    },
    {
      id: 'annual-license',
      title: 'Licença anual de caçador',
      content: [
        { kind: 'paragraph', text: 'Cada época (1 de junho — 31 de maio do ano seguinte) é paga separadamente no ICNF.' },
        { kind: 'checklist', items: [
          'Apenas caça menor (coelho, codorniz, pombo, pato): ~30–50 €',
          'Caça maior (javali, veado, gamo): ~50–80 €',
          'Ambas as categorias (maior + menor): ~70–100 €',
          'Quotas (cota) para animais específicos são pagas à parte: javali +5 €, veado +10–30 €',
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
          'ZCA (Zona de Caça Associativa): zona associativa de clube. É necessária filiação. Quota ~50–300 € por ano',
          'ZCM (Zona de Caça Municipal): municipal; acesso através da Câmara Municipal ou por sorteio',
          'ZCT (Zona de Caça Turística): turística/comercial; pagamento por dia/visita ~50–500 €',
          'ZCNT (Zona de Caça Não Transferida): categoria rara, por vezes com acesso livre',
          'ZCS (Zona de Caça Social): para residentes locais; muitas vezes gratuita, mas é necessário ser residente do município',
          'Mapa das zonas: ICNF SI Caça — aplicação para iOS e Android'
        ] },
        { kind: 'paragraph', text: 'Para um estrangeiro sem contactos num clube local, a opção mais conveniente é, na maioria dos casos, recorrer a ZCT (zonas turísticas). Regiões populares:' },
        { kind: 'checklist', items: [
          'Alentejo: região lendária para javali e veado. Coutadas Reais',
          'Beira Interior: a melhor perdiz-vermelha',
          'Trás-os-Montes: grande diversidade de espécies, fortes tradições venatórias',
          'Algarve: aves aquáticas na Ria Formosa, coelho no interior',
          'Açores: cabra-brava na ilha do Pico'
        ] }
      ]
    },
    {
      id: 'seasons',
      title: 'Épocas e espécies',
      content: [
        { kind: 'paragraph', text: 'O calendário das épocas venatórias é aprovado por Portaria anual do ICNF. Prazos típicos:' },
        { kind: 'checklist', items: [
          'Coelho (coelho): outubro — janeiro',
          'Lebre (lebre): outubro — dezembro',
          'Perdiz (perdiz): outubro — janeiro, apenas aos fins de semana',
          'Codorniz (codorniz): agosto — dezembro',
          'Pombo-torcaz (pombo): outubro — janeiro',
          'Pombo-bravo: dias específicos conforme o calendário',
          'Patos (patos): outubro — janeiro',
          'Javali (javali): outubro — janeiro; a caça nocturna é possível mediante autorização separada',
          'Veado (veado-vermelho): setembro — fevereiro (depende da subcategoria)',
          'Corço (corço): maio — agosto (por subcategorias)',
          'Gamo (gamo): agosto — fevereiro',
          'Raposa (raposa): agosto — fevereiro'
        ] },
        { kind: 'paragraph', text: 'Modalidades especiais de caça: monteiras (batidas ao javali com cães), aguardo (espera), espera (espera).' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Quem fiscaliza e coimas',
      content: [
        { kind: 'checklist', items: [
          'GNR/SEPNA — principal serviço de fiscalização na natureza',
          'Inspectores do ICNF (Vigilantes da Natureza)',
          'PSP — questões de armas nas cidades'
        ] },
        { kind: 'checklist', items: [
          'Sem carta de caçador: 200–2 500 € + possível apreensão da arma',
          'Sem licença anual: 100–1 000 €',
          'Caça fora da época: 500–5 000 €',
          'Espécie proibida (lince, lobo, urso-pardo): procedimento criminal',
          'Sem direito a arma: procedimento criminal',
          'Excesso de quota: 200–2 000 € por cada animal',
          'Caça furtiva nocturna sem autorizações: procedimento criminal',
          'Entrada em zonas de caça privadas sem autorização: 200–1 000 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Curso: carta de caçador', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Exame para a carta', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Junta médica para arma', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Teste psicológico', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Licença de arma (PSP)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'Licença anual de caçador', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Filiação em clube de caça', amountEURMin: 50, amountEURMax: 300, note: 'Por ano' },
    { label: 'Dia de caça em ZCT', amountEURMin: 50, amountEURMax: 500, note: 'Em zona turística de caça' },
    { label: 'Troféu (caça maior — pagamento pelo abate de javali/veado)', amountEURMin: 200, amountEURMax: 2000 },
    { label: 'Cofre para arma', amountEURMin: 200, amountEURMax: 1000, note: 'Obrigatório por lei' }
  ],
  sources: [
    { title: 'ICNF — Caça', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'PSP — Armas e Munições', url: 'https://www.psp.pt/Pages/atividade-da-psp/armas/inicio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 202/2004 — regime jurídico da caça', url: 'https://dre.pt/dre/detalhe/decreto-lei/202-2004-528700', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Lei 5/2006 — uso e porte de armas', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34539075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 105/2024 — Calendário Venatório 2024-2025', url: 'https://dre.pt/dre/detalhe/portaria/105-2024-848530150', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
