export default {
  editorialVoice: 'hackportugal',
  id: 'financas-password',
  categoryId: 'documents_fiscal',
  title: 'Palavra-passe do Portal das Finanças (portal fiscal) — ativação e recuperação',
  tldr: 'Depois de obter o NIF, é necessário ativar a palavra-passe para entrar em portaldasfinancas.gov.pt. O pedido é feito online — a palavra-passe chega por correio para o seu domicílio fiscal em 5–10 dias; com morada no estrangeiro, pode demorar até 3 semanas. Recuperação: se tiver um telemóvel confirmado na AT, poderá estar disponível um código/SMS; caso contrário, é enviada uma nova senha por carta para a morada fiscal registada. Alternativa — Chave Móvel Digital (CMD) através de autenticacao.gov.pt.',
  tags: ['finanças', 'palavra-passe', 'senha', 'portal'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'first-time',
      title: 'Primeira ativação — pedido da palavra-passe',
      content: [
        { kind: 'checklist', items: [
          '💻 Aceder a portaldasfinancas.gov.pt',
          '🔑 Canto superior direito → «Iniciar Sessão» → «Registar-se»',
          '📝 Introduzir o NIF, endereço de e-mail, telefone, data de nascimento',
          '✅ Confirmar — o sistema verificará a correspondência com os dados da Autoridade Tributária',
          '📬 A palavra-passe será enviada por correio CTT para a sua morada fiscal REGISTADA',
          '📅 5–10 dias em Portugal, até 3 semanas no estrangeiro'
        ]},
        { kind: 'warning', text: 'A palavra-passe chega à morada que consta nas Finanças como o seu domicílio fiscal. Se a morada estiver desatualizada — altere-a primeiro (ver o guia «Alteração da morada fiscal»).' }
      ]
    },
    {
      id: 'recovery',
      title: 'Recuperação de palavra-passe esquecida',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'A. Recuperação rápida através de contacto confirmado', content: [
            { kind: 'paragraph', text: 'Se tiver previamente confirmado nas Finanças um telemóvel/contacto para recuperação, pode tentar «Esqueceu-se da sua palavra-chave?» → introduzir o NIF → receber um código de confirmação (normalmente SMS) → definir uma nova palavra-passe. Se essa opção não existir — veja a opção B.' }
          ]},
          { id: 'r2', title: 'B. Por correio', content: [
            { kind: 'paragraph', text: 'Se o e-mail não estiver configurado — a palavra-passe é enviada por correio CTT da mesma forma que na ativação inicial. 5–10 dias.' }
          ]},
          { id: 'r3', title: 'C. Através da Chave Móvel Digital', content: [
            { kind: 'paragraph', text: 'Se tiver a CMD ativada — entre no Portal das Finanças através de «Autenticação.gov» (botão no topo). Não precisa de palavra-passe.' }
          ]}
        ]}
      ]
    },
    {
      id: 'cmd-alt',
      title: 'Alternativa: Chave Móvel Digital',
      content: [
        { kind: 'paragraph', text: 'A CMD é a identificação eletrónica do Estado. A CMD pode ser ativada online com Cartão de Cidadão; cidadãos estrangeiros — através do acesso ao Portal das Finanças ou presencialmente em pontos autorizados (Loja de Cidadão/IRN), apresentando documento de identificação e NIF. Apenas NIF + SMS não é suficiente. Para estrangeiros sem CC e sem acesso válido ao Portal das Finanças, muitas vezes a CMD não resolve o problema de imediato — pode ser necessária ativação presencial.' },
        { kind: 'checklist', items: [
          '📱 CMD + PIN + código SMS de utilização única em vez da palavra-passe das Finanças',
          '✍️ Possibilidade de assinar documentos',
          '🔐 Funciona na AIMA, SNS 24, Segurança Social, ePortugal',
          '🆓 Gratuito; a validade é limitada — verifique a validade em autenticacao.gov.pt e renove a CMD antes do fim do prazo'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📧 Configure logo o e-mail e o número de telemóvel nas Finanças — é uma salvaguarda',
          '🔐 Palavra-passe: siga os requisitos de complexidade apresentados pelo formulário da AT; guarde a senha num gestor de palavras-passe',
          '📂 Guarde a palavra-passe num gestor de palavras-passe — a recuperação por correio demora uma semana',
          '🏠 Atualize a morada fiscal quando mudar de casa — caso contrário, a palavra-passe irá para a morada antiga',
          '👫 Conta familiar: o cônjuge tem um NIF separado e uma palavra-passe separada'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Registo/recuperar senha', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Autenticação.gov — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Pedir a senha de acesso ao Portal das Finanças', url: 'https://www.gov.pt/servicos/pedir-a-senha-de-acesso-ao-portal-das-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
