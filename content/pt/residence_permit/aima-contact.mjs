export default {
  editorialVoice: 'hackportugal',
  id: 'aima-contact',
  categoryId: 'residence_permit',
  title: 'Como contactar a AIMA — todos os canais',
  tldr: 'A AIMA está sobrecarregada: a linha 808 202 653 está frequentemente ocupada, o email responde em 2–6 semanas, o atendimento presencial é apenas por marcação prévia. O caminho realista: área pessoal no AIMA Portal (portal.aima.gov.pt), marcação através de Espaço Cidadão ou contacto pela linha especial 800 203 373 para residentes que já têm processo. Para casos urgentes — email por região, lista abaixo.',
  tags: ['aima', 'contactos', 'contactar', 'telefone', 'email'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'channels',
      title: 'Canais de contacto — por prioridade',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. AIMA Portal (portal.aima.gov.pt) — área pessoal online', content: [
            { kind: 'paragraph', text: 'Canal online oficial para os procedimentos eletrónicos disponíveis da AIMA. Acesso através da Chave Móvel Digital (meio estatal de identificação eletrónica e assinatura). As funções disponíveis dependem do tipo de processo: para alguns serviços estão disponíveis o estado do processo, submissão de documentos, notificações e marcação de atendimento; para outros continua a ser necessário atendimento presencial ou uma notificação separada da AIMA. Verifique na área pessoal e na página AIMA/ePortugal se o seu serviço específico pode ser tratado online.' }
          ]},
          { id: 'c2', title: '2. Espaço Cidadão / ePortugal — atendimento presencial', content: [
            { kind: 'paragraph', text: 'No ePortugal/SIGA pode verificar os serviços AIMA disponíveis e os locais de atendimento. Nem todos os Espaço Cidadão têm serviços AIMA, e os serviços disponíveis estão limitados a procedimentos concretos; a disponibilidade depende do município e do tipo de serviço. Pode não haver vagas — verifique regularmente.' }
          ]},
          { id: 'c3', title: '3. Telefone oficial — 808 202 653', content: [
            { kind: 'checklist', items: [
              'Horário: seg–sex 09:00–17:30',
              'A tarifa 808 depende do operador e do tipo de rede — antes de ligar, verifique o custo e a existência de um número oficial alternativo na página de contactos da AIMA',
              'Frequentemente ocupado; a melhor hipótese é nos primeiros 30 minutos após a abertura',
              'Fale claramente em português; o inglês pode ser possível, mas mais lento',
              'Se a AIMA publicar um número geográfico alternativo, tente também esse. Não use números não verificados de chats'
            ]}
          ]},
          { id: 'c4', title: '4. Possível linha dedicada — 800 203 373', content: [
            { kind: 'paragraph', text: 'A linha gratuita é referida como canal para pessoas com processo aberto na AIMA, mas antes de a usar confirme obrigatoriamente o número e o público-alvo na página oficial aima.gov.pt — as campanhas telefónicas podem mudar.' }
          ]},
          { id: 'c5', title: '5. Email', content: [
            { kind: 'paragraph', text: 'Use os endereços de email e formulários de contacto publicados na página oficial “Contactos” da AIMA ou na página do local de atendimento concreto / na notificação da AIMA que recebeu. Circulam regularmente endereços regionais não verificados no formato cidade@aima.gov.pt — sem confirmação em aima.gov.pt, não envie dados pessoais para esses endereços.' },
            { kind: 'checklist', items: [
              'Indique sempre número de processo, nome completo, NIF, data de submissão',
              'Envie apenas os documentos necessários e apenas para endereços oficiais / através do AIMA Portal',
              'NÃO reencaminhe passaporte, dados bancários e pacotes completos de documentos para emails ou chats não verificados'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'community-tools',
      title: 'Ferramentas da comunidade para conseguir ligação telefónica',
      content: [
        { kind: 'paragraph', text: 'A linha AIMA 808 202 653 está frequentemente ocupada. O SEF foi extinto em outubro de 2023, e as suas funções de imigração foram transferidas para a AIMA — materiais antigos podem mencionar o SEF, mas deve contactar a AIMA. Quaisquer bots/chats não oficiais NÃO têm relação com a AIMA:' },
        { kind: 'checklist', items: [
          '⚠️ Bots de Telegram com “marcação automática de chamadas” (por exemplo, @callaimabot) — NÃO são oficiais. Ao fornecer ao bot o seu número de telefone, NIF, número de processo ou digitalização do passaporte, está a transmitir dados pessoais a um terceiro. Use apenas por sua conta e risco',
          '⚠️ Chats públicos/privados (tipo @aimasefgroup) — podem ser úteis para informação geral, mas NÃO publique aí DUC, códigos CN, NIF, número de processo, recibos, dados de passaporte e capturas de ecrã com dados pessoais',
          'Para estatísticas sobre “janelas de atendimento telefónico”, a comunidade mantém canais não oficiais — use-os apenas como referência, sem transmitir dados pessoais'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Prática: como conseguir uma resposta',
      content: [
        { kind: 'checklist', items: [
          '📅 O prazo de espera por marcação através do portal depende do serviço e da região; pode não haver vagas. Verifique regularmente e guarde comprovativos das tentativas de marcação',
          '☎️ É melhor ligar de terça a quinta-feira. Segunda e sexta-feira são dias mortos. Os primeiros 30 minutos após a abertura oferecem a maior probabilidade de conseguir ligação',
          '🗣️ Guião: “Bom dia, tenho o processo número X e gostaria de saber o estado” (bom dia, tenho o processo X, gostaria de saber o estado)',
          '📧 Uma mensagem sem processo é frequentemente ignorada. Anexe sempre documentos ou uma captura de ecrã do portal',
          '📮 Em caso de atraso injustificado, pode apresentar queixa ao Provedor de Justiça (provedor-jus.pt), anexando provas dos contactos com a AIMA — isto NÃO garante aceleração e não substitui os prazos processuais de impugnação',
          '⚖️ A medida judicial contra a inércia da AIMA deve ser escolhida por um advogado — normalmente trata-se de uma ação administrativa intimação para a prática de ato devido (CPTA). “Injunção” em Portugal é um procedimento de cobrança de créditos, não um meio contra a inércia administrativa'
        ]}
      ]
    },
    {
      id: 'physical-addresses',
      title: 'Endereços físicos — onde consultar a lista atual',
      content: [
        { kind: 'warning', text: 'Os endereços e funções dos balcões da AIMA mudam. Antes da visita, verifique “Locais de atendimento” em aima.gov.pt e a confirmação da marcação. O endereço indicado no SMS/email de confirmação do atendimento prevalece sobre qualquer lista estática.' },
        { kind: 'checklist', items: [
          'Há delegações em Lisboa, Porto, Coimbra, Faro, Funchal (Madeira), Ponta Delgada (Açores) e outras cidades — a lista e os endereços exatos estão em aima.gov.pt',
          '⚠️ SEM marcação prévia, o atendimento NÃO funciona desde 2024'
        ]}
      ]
    },
    {
      id: 'when-escalate',
      title: 'Quando escalar',
      content: [
        { kind: 'checklist', items: [
          'Recusa da AIMA → verifique IMEDIATAMENTE o prazo e meio de impugnação na própria notificação da AIMA e contacte um advogado; os prazos dependem do tipo de decisão e podem ser curtos (frequentemente 30 dias, mas não é universal)',
          'Silêncio > 90 dias sobre um pedido → queixa ao Provedor de Justiça (provedor-jus.pt) — não garante aceleração, mas regista o problema sistémico',
          'Reclamações sobre atendimento → Livro de Reclamações (físico/digital) ou reclamação oficial à AIMA; para violações sistémicas — Provedor de Justiça',
          'Suspeita de corrupção/crime por funcionário → Polícia Judiciária / Ministério Público (NÃO IGAI: IGAI — Inspeção-Geral da Administração Interna e atua sobretudo com forças de segurança)',
          'Problemas com autorização de residência e risco de deportação → advogado urgente da Ordem dos Advogados com prática de imigração',
          'Grupo vulnerável (refugiados, menores) → CPR (Conselho Português para os Refugiados)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — Contactos (página principal de contactos)', url: 'https://aima.gov.pt/pt/contactos', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA — Locais de atendimento', url: 'https://aima.gov.pt/pt/locais-de-atendimento', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA Portal — área pessoal', url: 'https://portal.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Agendamento', url: 'https://eportugal.gov.pt/agendamento', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Provedor de Justiça — provedor de justiça de Portugal', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 41/2023 — criação da AIMA / extinção do SEF', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/41-2023-212371907', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
