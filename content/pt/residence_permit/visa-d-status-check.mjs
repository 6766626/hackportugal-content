export default {
  editorialVoice: 'hackportugal',
  id: 'visa-d-status-check',
  categoryId: 'residence_permit',
  title: 'Verificação do estado do visto D e da marcação na AIMA',
  tldr: 'O visto de residência D é válido por 4 meses / 120 dias dentro das datas indicadas na vinheta do visto (não «a partir da data de entrada») e normalmente permite 2 entradas. Após a entrada, é necessário obter uma marcação na AIMA para recolha de dados biométricos e emissão da autorização de residência. O estado é verificado através do portal da AIMA (portal.aima.gov.pt). Para processos iniciados ainda no SEF (antes de outubro de 2023), por vezes é necessário enviar um pedido por email à delegação regional da AIMA. Se não houver marcação 30 dias após a entrada — contacte por email.',
  tags: ['visto', 'visto d', 'aima', 'estado', 'marcação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'timeline',
      title: 'Cronologia desde a emissão do visto até à autorização de residência',
      content: [
        { kind: 'checklist', items: [
          '1. Recebeu o visto de residência D — normalmente é válido por 4 meses / 120 dias dentro das datas indicadas na vinheta do visto (não «a partir da data de entrada») e permite 2 entradas. Oriente-se pelas datas «valid from / until» na vinheta',
          '2. Entrada em Portugal',
          '3. Durante a validade do visto, é necessário ter / conseguir uma marcação na AIMA para apresentar o pedido de autorização de residência e recolher dados biométricos. A decisão e o cartão são emitidos mais tarde',
          '4. Historicamente, a própria AIMA atribuía a marcação; atualmente, isso não acontece automaticamente — por vezes é necessário iniciar o processo',
          '5. Na marcação — recolha de dados biométricos, verificação de documentos, assinatura do pedido/declarações. Os documentos estrangeiros, quando necessário, devem ser previamente apostilados/legalizados e traduzidos (a apostilha NÃO é «assinada» na AIMA)',
          '6. O cartão da autorização de residência chega por correio em 2–4 semanas (por vezes até 90 dias)'
        ]},
        { kind: 'warning', text: 'Se o prazo do visto estiver a terminar e a AIMA não tiver atribuído uma marcação, guarde provas de todos os contactos e procure urgentemente obter confirmação por escrito / apresentação do pedido. Se houver risco de ultrapassar o prazo, é melhor obter aconselhamento jurídico individual — NÃO assuma que a simples espera legaliza automaticamente a permanência.' }
      ]
    },
    {
      id: 'portal-aima',
      title: '1. Verificação através do portal da AIMA',
      content: [
        { kind: 'paragraph', text: 'O AIMA Portal é um dos principais canais para alguns processos da AIMA, mas NÃO é um rastreador universal de todos os vistos D. Primeiro verifique a vinheta do visto / a carta do consulado / VFS e os documentos emitidos com o visto; depois o Portal e os contactos da AIMA.' },
        { kind: 'checklist', items: [
          'Aceder a portal.aima.gov.pt',
          'Login — através dos métodos de autenticação disponíveis no portal, incluindo Chave Móvel Digital (meio estatal de identificação e assinatura eletrónica), se já estiver ativada. Quem entrou recentemente com visto D muitas vezes ainda não tem CMD — verifique uma forma alternativa de acesso / contacto com a AIMA',
          'Secção «Meus Processos» — lista dos seus processos',
          'As designações dos estados (por exemplo, «Pendente», «Em análise», «Aprovado», «Notificado para entrevista») podem variar consoante o tipo de processo — isto NÃO é uma lista oficial completa',
          'A data e o local da marcação aparecem no campo «Agendamento»'
        ]}
      ]
    },
    {
      id: 'legacy-sef',
      title: '2. Processos antigos da base do SEF (antes de outubro de 2023)',
      content: [
        { kind: 'paragraph', text: 'Parte dos processos antigos do SEF foi transferida para os sistemas da AIMA, mas a visualização no Portal depende do tipo e da fase do processo. Se o processo não aparecer no Portal, isso NÃO significa necessariamente recusa ou erro.' },
        { kind: 'checklist', items: [
          'sef.pt redireciona para aima.gov.pt',
          'Processo antigo sem rasto no portal — contacto através dos contactos oficiais da AIMA (ver o guia «Como contactar a AIMA»). O email da delegação regional pode ajudar, mas NÃO é um canal garantido',
          'No contacto, indicar: nome completo, NIF, Nº do processo (SEF ou AIMA — aquele que tem consigo), data de apresentação',
          'A resposta chega em 2–6 semanas'
        ]}
      ]
    },
    {
      id: 'no-appointment',
      title: 'Sem marcação 30 dias após a entrada — o que fazer',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: '1. Primeiro, o portal', content: [
            { kind: 'paragraph', text: 'Verifique novamente o portal da AIMA — por vezes a marcação existe, mas sem notificação por email.' }
          ]},
          { id: 'n2', title: '2. Contacto através dos canais oficiais da AIMA', content: [
            { kind: 'paragraph', text: 'Utilize os contactos oficiais publicados em aima.gov.pt: formulário de contacto, telefone do centro de contacto, ou responda ao email concreto da delegação, se tiver recebido uma comunicação oficial. NÃO confie em endereços regionais não verificados do formato cidade@aima.gov.pt. Anexe ao contacto: visto D (PDF), carimbo de entrada, passaporte, NIF, comprovativo de morada.' }
          ]},
          { id: 'n3', title: '3. Após 60 dias — queixa ao Provedor de Justiça', content: [
            { kind: 'paragraph', text: 'O Provedor de Justiça aceita queixas online. Isto cria um registo oficial e por vezes ajuda, mas NÃO garante a atribuição de uma data.' }
          ]},
          { id: 'n4', title: '4. Antes do termo do prazo do visto', content: [
            { kind: 'paragraph', text: 'Antes do termo do prazo do visto, envie um contacto através de um canal oficial da AIMA e guarde as provas: cópia da mensagem, automatic reply, número do pedido/protocolo, capturas de ecrã do Portal, confirmação da marcação. Isto pode ajudar a demonstrar boa-fé, mas NÃO é uma garantia automática de estatuto legal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Problemas típicos',
      content: [
        { kind: 'checklist', items: [
          '❌ «Processo não encontrado» — pode significar que o processo não está associado à sua conta, não é apresentado no Portal ou está a ser tratado por outro canal. Verifique os dados do visto / a notificação consular e contacte a AIMA através de um contacto oficial com cópias dos documentos',
          '❌ Marcação para daqui a 6 meses — aceitar como está, a AIMA está sobrecarregada',
          '❌ Marcação noutra cidade — pode pedir alteração por motivo justificável; a alteração NÃO é garantida. Muitas vezes é mais seguro aceitar a marcação disponível, se for fisicamente possível deslocar-se',
          '❌ Perdeu a senha da marcação — reimpressão no portal ou pedido através dos canais oficiais da AIMA',
          '❌ O prazo do visto expirou — registe imediatamente o contacto com a AIMA através de um canal oficial, guarde provas, verifique a aplicabilidade das prorrogações temporárias de documentos e, se necessário, contacte um advogado/solicitador. A queixa ao Provedor é possível, mas NÃO substitui a legalização do estatuto'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA Portal — portal.aima.gov.pt', url: 'https://portal.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Visto de residência (visto para obter autorização de residência)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — regime de entrada e permanência', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Obter autorização de residência', url: 'https://www.gov.pt/cidadaos/-/informacoes/obter-autorizacao-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
