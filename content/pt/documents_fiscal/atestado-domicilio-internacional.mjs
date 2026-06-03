export default {
  editorialVoice: 'hackportugal',
  id: 'atestado-domicilio-internacional',
  categoryId: 'documents_fiscal',
  title: 'Atestado de Transposição de Domicílio Fiscal Internacional: declaração de transferência de residência fiscal para Portugal',
  tldr: 'Atestado de Transposição de Domicílio Fiscal Internacional — declaração gratuita das Finanças que confirma que o seu domicílio fiscal foi transferido para Portugal. É frequentemente solicitada por autoridades fiscais, bancos e empregadores no estrangeiro quando é necessário provar que passou a ser residente fiscal em PT e que já não se declara como residente nos EUA/UK/Federação Russa/outro país. É pedida online através do Portal das Finanças → e-Balcão; normalmente são necessários NIF, morada actualizada em PT e o ano a partir do qual é necessária a confirmação.',
  tags: ['finanças', 'nif', 'residência', 'impostos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que documento é este',
      content: [
        { kind: 'paragraph', text: 'Atestado de Transposição de Domicílio Fiscal Internacional — é a confirmação da Autoridade Tributária e Aduaneira de que a sua morada fiscal, o domicílio fiscal, foi transferido para Portugal.\n\nNa prática, a declaração é usada como prova perante uma entidade estrangeira: administração fiscal, banco, corretora, empregador, fundo de pensões ou consulado.' },
        { kind: 'paragraph', text: 'O documento é pedido através do Portal das Finanças, normalmente no e-Balcão. Não há taxa administrativa: as Finanças emitem a declaração gratuitamente em formato electrónico, se o seu endereço fiscal português já constar do sistema.' },
        { kind: 'warning', text: 'Isto não é o mesmo que o Certificado de Residência Fiscal para efeitos de Convenção para Evitar a Dupla Tributação. Se a administração fiscal estrangeira pedir especificamente um certificado de residência fiscal ao abrigo de uma convenção para evitar a dupla tributação, é necessário pedir um documento separado às Finanças.' }
      ]
    },
    {
      id: 'when-needed',
      title: 'Quando é necessária',
      content: [
        { kind: 'checklist', items: [
          'A administração fiscal estrangeira pede prova de que deixou de ser residente fiscal desse país e transferiu o centro dos seus interesses fiscais para Portugal.',
          'Um banco ou uma corretora no estrangeiro solicita confirmação da alteração de morada fiscal e do estatuto CRS/FATCA.',
          'Um empregador, fundo de pensões ou seguradora noutro país pede um documento sobre o novo domicílio fiscal.',
          'Está a encerrar a residência fiscal no país de saída e junta uma confirmação emitida por PT.',
          'É necessário mostrar a data/ano a partir do qual as Finanças consideram que o seu domicílio fiscal é português.',
          'Está a preparar um pacote interno de compliance para um banco estrangeiro juntamente com NIF, comprovativo de morada e dados de IRS.'
        ] },
        { kind: 'paragraph', text: 'Para os EUA, a declaração por si só não elimina obrigações relacionadas com tributação baseada na cidadania nem com FATCA. Para UK, Federação Russa e outros países, também não substitui as regras locais de perda de residência fiscal. É uma confirmação portuguesa que a entidade estrangeira avalia de acordo com a sua própria legislação.' }
      ]
    },
    {
      id: 'before-request',
      title: 'Verifique se as Finanças o vêem como residente',
      content: [
        { kind: 'paragraph', text: 'Faz sentido pedir a declaração depois de, no Portal das Finanças, o seu domicílio fiscal já constar em Portugal. Se no perfil ainda estiver uma morada estrangeira ou se a autorização de residência/morada não estiver confirmada, o e-Balcão pode recusar ou pedir que actualize primeiro o cadastro.' },
        { kind: 'checklist', items: [
          'Tem NIF e acesso ao Portal das Finanças: senha de acesso ou Chave Móvel Digital (CMD).',
          'Na secção Dados Cadastrais está indicada uma morada em Portugal, e não a morada do país de saída.',
          'Se não é cidadão da UE/EEE, as Finanças normalmente devem ter uma autorização de residência, visto ou outro documento de permanência legal válido quando isso é solicitado para actualizar a morada.',
          'Tem comprovativo de morada: contrato de arrendamento, escritura, recibo de renda, factura de serviços públicos ou atestado de residência da Junta de Freguesia.',
          'Sabe qual é o ano a partir do qual precisa da declaração: por exemplo, 2025 ou 2026, e não apenas “agora”.',
          'Se o representante fiscal foi nomeado apenas porque vivia fora da UE/EEE, verifique se é necessário actualizar o seu estatuto depois de transferir a morada para PT.'
        ] },
        { kind: 'warning', text: 'A residência fiscal ao abrigo do CIRS art. 16 surge normalmente se permaneceu em Portugal mais de 183 dias em quaisquer 12 meses que comecem ou terminem no ano em causa, ou se tinha aqui habitação em condições que façam supor a intenção de a manter e ocupar como habitual residence. Ter NIF, por si só, não o torna residente fiscal.' }
      ]
    },
    {
      id: 'request-online',
      title: 'Como pedir através do e-Balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Abra portaldasfinancas.gov.pt e entre com NIF + senha de acesso ou através da CMD. Verifique que está a usar a área pessoal do NIF correcto, e não a de um representante/cônjuge.' }
          ] },
          { id: 'open-ebalcao', title: '2. Criar um pedido no e-Balcão', content: [
            { kind: 'paragraph', text: 'Vá a e-Balcão → Atendimento e-balcão → Registar nova questão. Os nomes das categorias na interface das Finanças mudam periodicamente; escolha um tema relacionado com cadastro, domicílio fiscal, residência fiscal ou certidões.' }
          ] },
          { id: 'write-request', title: '3. Escrever um pedido curto em português', content: [
            { kind: 'paragraph', text: 'No texto, peça: “Solicito a emissão de Atestado de Transposição de Domicílio Fiscal Internacional, comprovativo da transferência do meu domicílio fiscal para Portugal, para efeitos de apresentação junto de autoridade/entidade estrangeira.” Indique o ano e o país para o qual o documento é necessário.' }
          ] },
          { id: 'attach', title: '4. Anexar documentos, se houver risco de pedido adicional', content: [
            { kind: 'checklist', items: [
              'Passaporte ou Cartão de Cidadão/autorização de residência, se as Finanças puderem pedir identificação.',
              'Comprovativo de morada em Portugal.',
              'Captura de ecrã ou PDF da administração fiscal/banco estrangeiro com a exigência da declaração, se a formulação não for normalizada.',
              'Procuração, se o pedido for apresentado por contabilista ou representante.',
              'A tradução não é necessária para as Finanças, mas pode ser necessária para a entidade estrangeira depois da emissão.'
            ] }
          ] },
          { id: 'download', title: '5. Receber a resposta e descarregar o PDF', content: [
            { kind: 'paragraph', text: 'A resposta chega no e-Balcão. Se o documento estiver pronto, as Finanças anexam o PDF ou dão instruções sobre onde o descarregar. Se houver recusa, normalmente o motivo é morada desactualizada, falta de confirmação de residência ou pedido apresentado na categoria errada.' }
          ] }
        ] }
      ]
    },
    {
      id: 'wording-and-use',
      title: 'Como usar no estrangeiro',
      content: [
        { kind: 'paragraph', text: 'Antes de enviar à entidade estrangeira, verifique se a declaração indica correctamente o nome, NIF, morada, data/ano de transferência do domicílio fiscal e a formulação sobre Portugal. Se for necessária apostila ou tradução certificada, isso é uma exigência da entidade receptora, não das Finanças.' },
        { kind: 'checklist', items: [
          'Para um banco, muitas vezes basta o PDF das Finanças + tradução para inglês.',
          'Para uma administração fiscal no estrangeiro, pode ser necessária uma sworn/certified translation.',
          'Para países da Convenção da Haia, por vezes é pedida apostila; confirme antecipadamente, porque documentos fiscais electrónicos nem sempre podem ser apostilados directamente.',
          'Se exigirem especificamente um treaty residence certificate, peça o Certificado de Residência Fiscal, e não o atestado de transposição.',
          'Guarde o PDF original e a confirmação do e-Balcão: é útil em caso de disputa sobre a data do pedido.',
          'Se o país de saída determinar a residência por dias de permanência, junte também travel history, contrato de arrendamento em PT, recibos de renda, contrato de trabalho ou provas do centro dos interesses vitais.'
        ] },
        { kind: 'warning', text: 'Não declare à administração fiscal estrangeira que a declaração termina automaticamente a residência anterior. Em 2026, cada país aplica os seus próprios testes: dias, habitação permanente, centro dos interesses vitais, cidadania, domicile, tie-breaker ao abrigo de convenção fiscal.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Problemas frequentes e soluções rápidas',
      content: [
        { kind: 'checklist', items: [
          'Nas Finanças ainda consta uma morada estrangeira — actualize primeiro o domicílio fiscal e depois repita o pedido.',
          'Não tem acesso ao Portal das Finanças — recupere a senha de acesso ou active a CMD; sem acesso, o e-Balcão não está disponível.',
          'A entidade estrangeira pede “tax residency certificate” — confirme se é necessário o Certificado de Residência Fiscal, e não este atestado.',
          'A declaração não contém a data necessária — responda no mesmo e-Balcão e peça a correcção/clarificação do período.',
          'O documento é urgente — indique o deadline e anexe a carta da entidade estrangeira, mas as Finanças não garantem aceleração.',
          'Precisa de uma declaração para o ano anterior — indique o ano fiscal específico e esteja preparado para confirmar que nesse período já cumpria os critérios de residência.',
          'Mudou-se para PT, mas ainda não apresentou a primeira declaração de IRS — isto nem sempre bloqueia a emissão da declaração, mas as Finanças podem pedir provas adicionais de residência efectiva.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Emissão da declaração pelas Finanças através do e-Balcão', amountEUR: 0, note: 'Não é cobrada taxa administrativa.' },
    { label: 'Tradução certificada para entidade estrangeira', amountEURMin: 25, amountEURMax: 80, note: 'Não é exigida pelas Finanças; depende da língua, do país e do tradutor.' },
    { label: 'Apostila/actos notariais', amountEURMin: 0, amountEURMax: 60, note: 'Apenas se o país receptor o exigir; a aplicabilidade a um PDF electrónico deve ser verificada separadamente.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — e-Balcão e área pessoal do contribuinte',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — Domicílio fiscal e dados cadastrais',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 16: residência fiscal em território português',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
