export default {
  editorialVoice: 'hackportugal',
  id: 'sia-password-issues',
  categoryId: 'digital_gov',
  title: 'Reposição da palavra-passe do Portal das Finanças e SIA — o que fazer',
  tldr: 'Se se esqueceu da palavra-passe da AT (Portal das Finanças / SIA): através de portaldasfinancas.gov.pt → «Recuperar Senha» → SMS ou carta pelo correio (5-7 dias).\n\nAlternativa: presencialmente num Espaço Cidadão ou num balcão das Finanças. Com CMD (Chave Móvel Digital) é possível entrar SEM palavra-passe. Para repor a CMD — ePortugal.gov.pt → reemissão de códigos de utilização única. Se perdeu tudo — Conservatória/Espaço Cidadão com CC.',
  tags: ['palavra-passe', 'finanças', 'sia', 'cmd', 'portal', 'esqueci palavra-passe'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'pf-password',
      title: '🔐 Recuperar a palavra-passe do Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'O cenário mais frequente. A AT (autoridade tributária) utiliza a «Senha de Acesso» — uma palavra-passe de pelo menos 8 caracteres (letra maiúscula e minúscula, algarismo e caracter especial) para entrar no Portal das Finanças.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Método 1 — SMS (rápido, se tiver o número)', content: [
            { kind: 'checklist', items: [
              '🌐 portaldasfinancas.gov.pt → «Iniciar Sessão» → «Recuperar Senha»',
              '🔢 Introduzir o NIF',
              '📱 Se a AT tiver o seu número de telemóvel — receberá um código por SMS',
              '🔐 Com o código, cria uma nova palavra-passe',
              '⏱️ 5-10 minutos para todo o processo',
              '⚠️ Se o SMS não chegou — o número de telemóvel não está registado na AT'
            ]}
          ]},
          { id: 'p2', title: 'Método 2 — por correio (se não houver número de telemóvel na AT)', content: [
            { kind: 'checklist', items: [
              '🌐 No mesmo local → escolher a opção «Por carta»',
              '📮 A carta chegará à morada oficial da AT (a que está indicada no Portal das Finanças)',
              '⏱️ 5-7 dias úteis',
              '⚠️ Se a morada estiver desactualizada — a carta não chegará. Primeiro, actualize a morada presencialmente num balcão das Finanças'
            ]}
          ]},
          { id: 'p3', title: 'Método 3 — presencialmente num balcão das Finanças', content: [
            { kind: 'checklist', items: [
              '🏛️ Marcar atendimento num balcão das Finanças ou Espaço Cidadão',
              '🆔 CC + NIF',
              '📋 Pedir «Recuperação de senha presencial»',
              '🔐 Receber uma palavra-passe temporária em papel, alterá-la após o primeiro acesso',
              '✅ Imediato, sem esperar pelo correio'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cmd-issues',
      title: '🔑 Problemas com a Chave Móvel Digital (CMD)',
      content: [
        { kind: 'paragraph', text: 'A CMD é a «chave única» do Estado para entrar em todos os serviços públicos. Esquecer o código = aguardar pela recuperação.' },
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Formas de acesso através da CMD', content: [
            { kind: 'checklist', items: [
              '🔢 Código PIN + código SMS de utilização única',
              '👁️ Biometria: Apple Touch ID / Face ID, impressão digital Android',
              '📱 Aplicação móvel autenticacao.gov.pt',
              '⚠️ Se os SMS não chegam — o telefone não está associado ou não funciona em roaming'
            ]}
          ]},
          { id: 'c2', title: 'Reposição do PIN ou substituição do telefone', content: [
            { kind: 'checklist', items: [
              '🌐 ePortugal.gov.pt → «Chave Móvel Digital» → «Recuperar PIN»',
              '🆔 Autenticação com CC + código PIN do CC (não da CMD!)',
              '🔢 Criar um novo PIN',
              '📱 Se perdeu o telefone: presencialmente num Espaço Cidadão / Loja CTT — substituir o número associado'
            ]}
          ]},
          { id: 'c3', title: 'Recuperação completa da CMD (se perdeu tudo)', content: [
            { kind: 'checklist', items: [
              '🏛️ Espaço Cidadão / Loja CTT / Loja de Cidadão',
              '🆔 CC + novo telemóvel (para associação)',
              '⏱️ No local, 15-20 min',
              '🔄 A CMD antiga é desactivada, é emitida uma nova'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cc-pin',
      title: '🪪 PIN do Cartão de Cidadão',
      content: [
        { kind: 'paragraph', text: 'O CC tem 3 códigos PIN: PIN de autenticação (4 dígitos), PIN de assinatura (4 dígitos), PIN de alteração de morada (4 dígitos). Após 3 introduções incorrectas, o PIN fica bloqueado.' },
        { kind: 'checklist', items: [
          '🔓 Desbloquear: Espaço Cidadão / Loja CC, presencialmente, gratuito',
          '🆕 Alterar o PIN autonomamente: no site autenticacao.gov.pt (é necessário o PIN antigo)',
          '📤 Repor totalmente (se o PIN foi esquecido e está bloqueado): novos códigos PIN na Loja CC, 5 €, no dia da visita',
          '⚠️ Carta de códigos («carta de PINs») — chega aquando da emissão do CC. Guarde-a!',
          '💡 Se perdeu o cartão: bloquear através do 808 12 12 30 ou do ePortugal — imediatamente'
        ]}
      ]
    },
    {
      id: 'common-errors',
      title: '⚠️ Erros típicos',
      content: [
        { kind: 'checklist', items: [
          '🔴 «Não há número de telemóvel associado ao NIF» — o número de telemóvel não está associado. Presencialmente num balcão das Finanças',
          '🔴 «Morada incorrecta» — a morada está desactualizada. Primeiro, actualizar a morada na AT/IRN',
          '🔴 «Palavra-passe bloqueada após 3 tentativas» — fica bloqueada por 24 horas, depois há mais 3 tentativas',
          '🔴 «A carta não chegou» — contactar o balcão local das Finanças, será reemitida',
          '🔴 «A aplicação CMD não funciona em roaming» — o telefone deve estar em PT para receber SMS',
          '🔴 «O Face ID do iPhone não reconhece a CMD» — actualizar a aplicação autenticacao.gov.pt',
          '🔴 «Navegadores antigos não funcionam com a CMD» — utilizar uma versão actual do Chrome/Safari'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '🔐 Utilizar um gestor de palavras-passe (1Password, Bitwarden) — não se esquecerá',
          '📱 Configurar a biometria da CMD — não terá de introduzir o PIN de cada vez',
          '📩 Actualizar SEMPRE o número de telemóvel no Portal das Finanças — para todas as recuperações',
          '🏛️ Em Lisboa, os Espaço Cidadão mais rápidos: Saldanha (Loja de Cidadão Saldanha) e Marvila (Loja de Cidadão das Laranjeiras)',
          '⏰ Marcação em agendamentos.gov.pt — normalmente com 1-2 semanas de antecedência',
          '💼 Se tiver empresa/Lda: um representante (advogado) pode actuar em seu nome com procuração',
          '⏰ Prevenção: a cada 6 meses, verificar a morada e o número de telemóvel no Portal das Finanças',
          '🌐 Protecção multifactor: activar sempre o 2FA nas contas bancárias e do Estado'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Recuperação da palavra-passe do Portal das Finanças', amountEUR: 0 },
    { label: 'Recuperação da CMD', amountEUR: 0 },
    { label: 'Desbloqueio do PIN do CC', amountEUR: 0 },
    { label: 'Novos códigos PIN do CC', amountEUR: 5 }
  ],
  sources: [
    { title: 'Portal das Finanças', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autenticação.gov.pt — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Cartão de Cidadão', url: 'https://www.gov.pt/cidadaos/-/informacoes/o-que-e-o-cartao-de-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
