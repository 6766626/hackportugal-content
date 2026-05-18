export default {
  editorialVoice: 'hackportugal',
  id: 'sia-password-issues',
  categoryId: 'digital_gov',
  title: 'Reposição da palavra-passe do Portal das Finanças e SIA — o que fazer',
  tldr: 'Se se esqueceu da palavra-passe da AT (Portal das Finanças / SIA): através de portaldasfinancas.gov.pt → «Recuperar Senha» → SMS ou carta por correio (5-7 dias)\.\n\nAlternativa: presencialmente num Espaço Cidadão ou num serviço de Finanças. Com CMD (Chave Móvel Digital) pode entrar SEM palavra-passe. Para repor a CMD — ePortugal.gov.pt → reemissão de códigos de utilização única. Se perdeu tudo — Conservatória/Espaço Cidadão com Cartão de Cidadão.',
  tags: ['palavra-passe', 'finanças', 'sia', 'cmd', 'portal', 'palavra-passe esquecida'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'pf-password',
      title: '🔐 Recuperar a palavra-passe do Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'É o cenário mais comum. A AT (Autoridade Tributária) usa a «Senha de Acesso» — uma palavra-passe de 8 dígitos para entrar no Portal das Finanças.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Método 1 — SMS (rápido, se tiver número)', content: [
            { kind: 'checklist', items: [
              '🌐 portaldasfinancas.gov.pt → «Iniciar Sessão» → «Recuperar Senha»',
              '🔢 Introduzir o NIF',
              '📱 Se a AT tiver o seu número de telemóvel — receberá um código por SMS',
              '🔐 Com o código, cria uma nova palavra-passe',
              '⏱️ 5-10 minutos para todo o processo',
              '⚠️ Se a SMS não chegar — o número de telemóvel não está registado na AT'
            ]}
          ]},
          { id: 'p2', title: 'Método 2 — por correio (se não houver número de telemóvel na AT)', content: [
            { kind: 'checklist', items: [
              '🌐 No mesmo local → escolher a opção «Por carta»',
              '📮 A carta chegará ao endereço oficial da AT (o que está indicado no Portal das Finanças)',
              '⏱️ 5-7 dias úteis',
              '⚠️ Se o endereço estiver desactualizado — a carta não chegará. Primeiro, actualize o endereço presencialmente num serviço de Finanças'
            ]}
          ]},
          { id: 'p3', title: 'Método 3 — presencialmente num serviço de Finanças', content: [
            { kind: 'checklist', items: [
              '🏛️ Marcar atendimento num serviço de Finanças ou Espaço Cidadão',
              '🆔 Cartão de Cidadão + NIF',
              '📋 Pedir «Recuperação de senha presencial»',
              '🔐 Receber uma palavra-passe temporária em papel, alterá-la após a primeira entrada',
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
        { kind: 'paragraph', text: 'A CMD é a «chave única» do Estado para entrar em todos os serviços públicos. Esquecer o código = esperar pela recuperação.' },
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Formas de entrar através da CMD', content: [
            { kind: 'checklist', items: [
              '🔢 **Código PIN** + código de utilização única por SMS',
              '👁️ **Biometria**: Apple Touch ID / Face ID, impressão digital Android',
              '📱 Aplicação móvel **autenticacao.gov.pt**',
              '⚠️ Se as SMS não chegam — o telefone não está associado ou não funciona em roaming'
            ]}
          ]},
          { id: 'c2', title: 'Reposição do PIN ou troca de telefone', content: [
            { kind: 'checklist', items: [
              '🌐 ePortugal.gov.pt → «Chave Móvel Digital» → «Recuperar PIN»',
              '🆔 Autenticação através do Cartão de Cidadão + PIN do Cartão de Cidadão (não da CMD!)',
              '🔢 Criar um novo PIN',
              '📱 Se perdeu o telefone: presencialmente num Espaço Cidadão / Loja CTT — substituir o número associado'
            ]}
          ]},
          { id: 'c3', titleRecuperação completa da CMD (se perdeu tudo)', content: [
            { kind: 'checklist', items: [
              '🏛️ Espaço Cidadão / Loja CTT / Loja de Cidadão',
              '🆔 Cartão de Cidadão + novo telemóvel (para associação)',
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
        { kind: 'paragraph', text: 'O Cartão de Cidadão tem 3 códigos PIN: PIN de autenticação (4 dígitos), PIN de assinatura (4 dígitos), PIN de alteração de morada (4 dígitos). Após 3 tentativas incorrectas, o PIN fica bloqueado.' },
        { kind: 'checklist', items: [
          '🔓 **Desbloquear**: Espaço Cidadão / Loja do Cartão de Cidadão, presencialmente, gratuito',
          '🆕 **Alterar o PIN por si**: no site autenticacao.gov.pt (é necessário o PIN antigo)',
          '📤 **Repor completamente** (se o PIN foi esquecido e está bloqueado): Loja do Cartão de Cidadão, cerca de 10 €, no dia da visita',
          '⚠️ A carta de códigos («carta de PINs») — chega aquando da emissão do Cartão de Cidadão. Guarde-a!',
          '💡 Se perdeu o cartão: bloquear através do 808 12 12 30 ou ePortugal — imediatamente'
        ]}
      ]
    },
    {
      id: 'common-errors',
      title: '⚠️ Erros típicos',
      content: [
        { kind: 'checklist', items: [
          '🔴 «Não existe número de telemóvel associado ao NIF» — o número de telemóvel não está associado. Presencialmente num serviço de Finanças',
          '🔴 «Morada incorrecta» — a morada está desactualizada. Primeiro, actualizar a morada na AT/IRN',
          '🔴 «Palavra-passe bloqueada após 3 tentativas» — fica bloqueada durante 24 horas, depois há mais 3 tentativas',
          '🔴 «A carta não chegou» — contactar o serviço de Finanças local, fazem a reemissão',
          '🔴 «A aplicação CMD não funciona em roaming» — o telefone deve estar em PT para receber SMS',
          '🔴 «O Face ID do iPhone não reconhece a CMD» — actualizar a aplicação autenticacao.gov.pt',
          '🔴 «Navegadores antigos não funcionam com a CMD» — usar uma versão actual do Chrome/Safari'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '🔐 Usar um gestor de palavras-passe (1Password, Bitwarden) — não se esquecerá',
          '📱 Configurar a biometria da CMD — não terá de introduzir o PIN todas as vezes',
          '📩 Actualizar SEMPRE o número de telemóvel no Portal das Finanças — para todas as recuperações',
          '🏛️ Em Lisboa, os Espaço Cidadão mais rápidos: Saldanha (Loja de Cidadão Saldanha) e Marvila (Loja de Cidadão das Laranjeiras)',
          '⏰ Marcação em agendamentos.gov.pt — normalmente com 1-2 semanas de antecedência',
          '💼 Se for uma empresa/Lda: um representante (advogado) pode actuar em seu nome com procuração',
          '⏰ Prevenção: de 6 em 6 meses, verificar a morada e o número de telemóvel no Portal das Finanças',
          '🌐 Protecção multifactor: activar sempre 2FA nas contas bancárias e do Estado'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Recuperação da palavra-passe do Portal das Finanças', amountEUR: 0 },
    { label: 'Recuperação da CMD', amountEUR: 0 },
    { label: 'Desbloqueio do PIN do Cartão de Cidadão', amountEUR: 0 },
    { label: 'Reposição completa do PIN do Cartão de Cidadão', amountEURMin: 10, amountEURMax: 15 }
  ],
  sources: [
    { title: 'Portal das Finanças', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autenticação.gov.pt — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Cartão de Cidadão', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/o-que-e-o-cartao-de-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
