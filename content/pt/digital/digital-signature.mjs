export default {
  editorialVoice: 'hackportugal',
  id: 'digital-signature',
  categoryId: 'digital_gov',
  title: 'Assinatura eletrónica qualificada — Chave Móvel Digital (assinatura eletrónica do Estado) e Cartão de Cidadão',
  tldr: 'Em Portugal existe a assinatura eletrónica qualificada — Assinatura Digital Qualificada (QES): uma assinatura eletrónica com a mesma força jurídica que uma assinatura manuscrita. Dois instrumentos oficiais: Chave Móvel Digital (assinatura móvel) e Cartão de Cidadão (documento de identificação de cidadão português) + leitor USB/NFC. Com QES é possível assinar contratos de arrendamento, documentos notariais e submeter documentos à AIMA/Finanças/IRN sem papel.',
  tags: ['assinatura eletrónica', 'assinatura', 'cmd', 'cartão de cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-framework',
      title: 'Enquadramento jurídico',
      content: [
        { kind: 'paragraph', text: 'A assinatura eletrónica na UE é regulada pelo regulamento eIDAS (Regulation (EU) 910/2014). Em Portugal, o Decreto-Lei 12/2021 adapta o eIDAS à legislação nacional.' },
        { kind: 'checklist', items: [
          'Três níveis de assinatura segundo o eIDAS:',
          '  • Simples (SES) — email, código por SMS, etc. Força probatória básica',
          '  • Avançada (AES) — criptograficamente única, ligada ao signatário',
          '  • Qualificada (QES) — AES + certificado QTSP + dispositivo QSCD. Juridicamente equivalente à assinatura manuscrita em toda a UE',
          '🇵🇹 Portugal disponibiliza QES através de dois instrumentos oficiais: CMD e Cartão de Cidadão digital'
        ]}
      ]
    },
    {
      id: 'cmd-signature',
      title: 'Assinatura através da Chave Móvel Digital (CMD)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Ativação da função de assinatura', content: [
            { kind: 'paragraph', text: 'Se a CMD estiver ativada, a função de assinatura é ativada separadamente. Em autenticacao.gov.pt → «Ativar Assinatura Digital» → confirmação por PIN e SMS. Gratuito.' }
          ]},
          { id: 'c2', title: '2. Assinatura do documento', content: [
            { kind: 'checklist', items: [
              'Abrir o documento no portal de assinatura digital Autenticação.gov',
              'Carregar o PDF',
              'Introduzir o PIN da CMD',
              'Confirmar com código por SMS ou notificação push através da aplicação Autenticação',
              'Descarregar o PDF assinado — com certificado criptográfico'
            ]}
          ]},
          { id: 'c3', title: '3. Verificação da assinatura', content: [
            { kind: 'paragraph', text: 'Qualquer pessoa pode verificar a assinatura em autenticacao.gov.pt/validacao-de-assinaturas — aí é possível ver o nome do signatário, a hora e o estado.' }
          ]}
        ]}
      ]
    },
    {
      id: 'cc-signature',
      title: 'Assinatura através do Cartão de Cidadão',
      content: [
        { kind: 'paragraph', text: 'Para cidadãos portugueses com Cartão de Cidadão (esta opção não está disponível para não residentes — têm autorização de residência sem chip de assinatura). É necessário um leitor USB ou um telemóvel com NFC.' },
        { kind: 'substeps', items: [
          { id: 'cc1', title: '1. Ativação da função de assinatura', content: [
            { kind: 'paragraph', text: 'Ao receber o Cartão de Cidadão pela primeira vez, a função de assinatura está frequentemente desativada. A ativação é feita em qualquer Espaço Cidadão ou online através do Autenticação.gov com leitor USB.' }
          ]},
          { id: 'cc2', title: '2. Instalação do programa', content: [
            { kind: 'paragraph', text: 'Descarregar a aplicação de computador «Autenticação.gov» (macOS/Windows/Linux) — o programa oficial do Estado português.' }
          ]},
          { id: 'cc3', title: '3. Assinatura', content: [
            { kind: 'paragraph', text: 'Inserir o Cartão de Cidadão no leitor → abrir o PDF na aplicação Autenticação.gov → assinar → introduzir o PIN do Cartão de Cidadão → concluído.' }
          ]},
          { id: 'cc4', title: '4. Códigos PIN', content: [
            { kind: 'checklist', items: [
              'PIN Autenticação (acesso a portais do Estado) — 4 dígitos',
              'PIN Assinatura (assinatura) — 4 dígitos, separado',
              'PUK (desbloqueio) — 8 dígitos, no envelope do Cartão de Cidadão',
              'Esqueceu-se do PIN → até 3 tentativas → bloqueio → desbloquear presencialmente num balcão Espaço Cidadão / IRN com o PUK (não disponível online para o Cartão de Cidadão)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'use-cases',
      title: 'Onde pode ser utilizada',
      content: [
        { kind: 'checklist', items: [
          '📄 Contrato de arrendamento (contrato de arrendamento de habitação) — sem deslocação ao notário',
          '💼 Contratos de trabalho',
          '📋 Declaração de IRS e outras declarações fiscais',
          '🏛️ Pedidos à AIMA através do portal online',
          '⚖️ Decisões judiciais e documentos processuais',
          '🏢 Operações com empresas (Empresa na Hora)',
          '🏥 Acesso a registos clínicos no SNS 24',
          '🎓 Candidaturas universitárias, diplomas',
          '📜 Procuração com assinatura digital',
          '💰 Operações bancárias (alguns bancos aceitam QES em vez de presença física)'
        ]}
      ]
    },
    {
      id: 'cross-border',
      title: 'Reconhecimento transfronteiriço (UE e fora da UE)',
      content: [
        { kind: 'paragraph', text: 'Segundo o eIDAS, uma assinatura de um país da UE é reconhecida em todos os outros. A assinatura CMD de Portugal tem plena força jurídica na Alemanha, Espanha, França, Itália, entre outros.' },
        { kind: 'paragraph', text: 'Verificação: o PDF assinado pode ser validado em qualquer portal da UE (DSS Validator da Comissão Europeia — dss.nowina.lu).' },
        { kind: 'warning', text: 'Fora da UE (Federação Russa, EUA, China), o reconhecimento depende das leis e dos acordos locais. Na Federação Russa, a assinatura eIDAS não é reconhecida automaticamente — para documentos destinados à Federação Russa, é necessária uma assinatura eletrónica qualificada russa separada.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'QTSP comerciais',
      content: [
        { kind: 'paragraph', text: 'Além da CMD e do Cartão de Cidadão do Estado, existem em Portugal prestadores comerciais de serviços de confiança qualificados (QTSP). A maioria das pessoas não precisa deles — a CMD cobre 99% dos casos.' },
        { kind: 'checklist', items: [
          'DigitalSign (Portugal) — o maior QTSP comercial',
          'Multicert — soluções empresariais',
          'Bundesdruckerei / D-Trust (Alemanha) — aplicáveis em Portugal',
          'Lista de todos os QTSP na UE — EU Trust List (eidas.ec.europa.eu/efda/browse)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Autenticação.gov — centro de identificação eletrónica', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 910/2014 — eIDAS', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32014R0910', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 12/2021 (adaptação do eIDAS em Portugal)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/12-2021', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMA — Agência para a Modernização Administrativa', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
