export default {
  editorialVoice: 'hackportugal',
  id: 'cig-discriminacao-queixa',
  categoryId: 'emergency_rights',
  title: 'CIG — queixa por discriminação em razão do sexo, identidade ou orientação',
  tldr: 'A CIG — Comissão para a Cidadania e a Igualdade de Género — recebe queixas e denúncias sobre discriminação em razão do sexo, orientação sexual, identidade de género, expressão de género e características sexuais. A queixa é gratuita: através do formulário da CIG, por email ou por carta. Não é a “polícia” nem um tribunal: a CIG regista, aconselha e encaminha o caso para a ACT, CITE, PSP/GNR, Câmara Municipal, ERS, Banco de Portugal ou outra entidade competente. Para conflitos laborais, apresente também queixa na ACT/CITE; em caso de ameaças, ligue 112.',
  tags: ['cig', 'discriminação', 'lgbti', 'queixa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use-cig',
      title: 'Quando contactar a CIG',
      content: [
        { kind: 'paragraph', text: 'A CIG é uma comissão pública em Portugal para as áreas da igualdade, cidadania, violência de género e não discriminação. Para uma pessoa expatriada, é a porta de entrada oficial se estiver a ser discriminada por causa do sexo, gravidez, maternidade/paternidade, orientação sexual, identidade de género, expressão de género ou características sexuais.' },
        { kind: 'checklist', items: [
          'O empregador recusa a contratação, promoção ou renovação do contrato por causa do sexo, gravidez, orientação ou identidade de género.',
          'Num bar, ginásio, hotel, clínica, escola, banco ou serviço público recusam-lhe atendimento ou humilham-no/a.',
          'Um senhorio, agência ou condomínio recusa habitação por se tratar de um casal do mesmo sexo, estatuto trans ou “família inadequada”.',
          'Impõem-lhe uma forma de tratamento, nome ou documentos contra a Lei 38/2018 sobre autodeterminação da identidade de género.',
          'Existem assédio sexual, assédio sexista ou ambiente hostil no trabalho.',
          'Um anúncio publicitário, oferta de emprego ou anúncio de arrendamento contém uma condição discriminatória.',
          'Precisa não só de uma sanção, mas também de um registo oficial: registo da queixa, aconselhamento e encaminhamento para a entidade correcta.'
        ] },
        { kind: 'warning', text: 'Se houver perigo físico, perseguição, ameaças, violência doméstica ou crime de ódio — primeiro ligue 112, contacte a PSP/GNR ou a Linha Nacional de Emergência Social 144. A queixa à CIG não substitui protecção urgente nem uma participação criminal.' }
      ]
    },
    {
      id: 'prepare-evidence',
      title: 'Reúna provas antes de apresentar a queixa',
      content: [
        { kind: 'paragraph', text: 'As entidades portuguesas respondem melhor a uma cronologia e a documentos. Não é necessário escrever uma história longa e emocional: faça uma descrição curta dos factos, datas, local, quem disse/fez, quais as consequências e o que pede.' },
        { kind: 'checklist', items: [
          'Os seus dados: nome, NIF, email, telefone, morada em Portugal, língua de comunicação.',
          'Dados do infractor: empresa, NIPC/NIF se conhecido, morada, nome do funcionário ou gestor.',
          'Data, hora e local de cada episódio.',
          'Capturas de ecrã de WhatsApp, email, SMS, anúncios, avaliações, chats internos.',
          'Fotografias, vídeos, áudio — se obtidos legalmente; não os publique nas redes sociais antes de obter aconselhamento.',
          'Contrato de trabalho, recibos de vencimento, escala, carta de despedimento, se for uma situação laboral.',
          'Contrato de arrendamento, correspondência com o senhorio/agência, anúncio no Imovirtual/Idealista, se for habitação.',
          'Nomes das testemunhas e respectivos contactos.',
          'Documentos médicos ou relatório psicológico, se houve dano para a saúde.',
          'Cópia de queixa já apresentada no Livro de Reclamações, ACT, PSP/GNR, CITE ou outra entidade.'
        ] },
        { kind: 'warning', text: 'Não envie documentos originais. Faça cópias em PDF. No texto da queixa, indique apenas a informação pessoal necessária: a CIG é uma entidade oficial, mas os elementos podem ser transmitidos à inspecção competente ou ao Ministério Público.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como apresentar uma queixa/denúncia à CIG',
      content: [
        { kind: 'paragraph', text: 'A via principal é a secção “Queixas e Denúncias” da CIG no site. A queixa é apresentada gratuitamente. Pode escrever em português; se o seu português for fraco, apresente em inglês e anexe um breve resumo em PT feito com DeepL/tradutor. É melhor usar russo apenas como anexo, caso contrário o tratamento pode atrasar-se.' },
        { kind: 'substeps', items: [
          { id: 'online-form', title: '1. Online através do site da CIG', content: [
            { kind: 'paragraph', text: 'Abra cig.gov.pt → área “Queixas e Denúncias”. Preencha o formulário, anexe os ficheiros e guarde a confirmação de envio: captura de ecrã da página, email de confirmação automática ou número do processo, se for atribuído.' }
          ] },
          { id: 'email', title: '2. Email para a CIG', content: [
            { kind: 'paragraph', text: 'Se o formulário estiver indisponível, envie uma mensagem para o contacto oficial da CIG indicado em cig.gov.pt. Assunto: “Queixa por discriminação — orientação sexual / identidade de género / sexo”. Na mensagem: quem é, quem é o infractor, factos por datas, que provas anexa, o que pede.' }
          ] },
          { id: 'paper', title: '3. Carta ou atendimento presencial', content: [
            { kind: 'paragraph', text: 'Pode enviar uma denúncia escrita para a CIG, para a morada indicada no site, ou recorrer a outros serviços públicos que encaminhem o caso. Para situações urgentes, isto é mais lento do que online/email.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Escreva “Queixa” se for a pessoa lesada; “Denúncia” se estiver a comunicar o facto como testemunha.',
          'Indique se pretende confidencialidade dos seus contactos quando o caso for reencaminhado.',
          'Peça à CIG que confirme a recepção e informe para que entidade o caso será encaminhado.',
          'Se for uma situação laboral — no fim, peça expressamente encaminhamento para ACT/CITE.',
          'Se for um serviço/loja/banco/clínica — peça que indiquem a entidade competente e guarde o Livro de Reclamações.',
          'Se for habitação — anexe o anúncio, a correspondência e a recusa; peça avaliação da discriminação no acesso a bens e serviços/habitação.'
        ] }
      ]
    },
    {
      id: 'parallel-authorities',
      title: 'Onde apresentar queixa em paralelo',
      content: [
        { kind: 'paragraph', text: 'A CIG é útil como coordenadora e canal oficial em matéria de igualdade, mas muitas vezes é outra entidade que aplica sanções. Por isso, quando há dano concreto, é melhor apresentar queixa em paralelo: assim não perde prazos e aumenta a probabilidade de resposta.' },
        { kind: 'checklist', items: [
          'Trabalho: ACT — queixa contra o empregador; CITE — igualdade entre homens e mulheres, gravidez, direitos parentais, assédio sexual e discriminação no trabalho.',
          'Despedimento, salário, assédio: ACT + advogado/sindicato; os prazos em litígios laborais podem ser curtos.',
          'Ameaça, agressão, stalking, discurso de ódio: PSP/GNR ou Ministério Público; em caso de perigo — 112.',
          'Violência doméstica ou violência nas relações: 112, PSP/GNR, APAV, Linha 800 202 148; a CIG dispõe de materiais e encaminhamentos sobre violência doméstica.',
          'Serviço público recusou atendimento ou humilhou: Livro de Reclamações, Provedor de Justiça e queixa à entidade supervisora.',
          'Saúde: Livro de Reclamações + ERS, se o problema for numa clínica/hospital.',
          'Banco/seguros: Livro de Reclamações + Banco de Portugal ou ASF.',
          'Arrendamento/agência: Livro de Reclamações para a agência, queixa à CIG e, se houver dano — advogado/tribunal.'
        ] },
        { kind: 'warning', text: 'Não espere pela resposta da CIG se estiver em curso um despedimento, despejo ou se o prazo de impugnação estiver a terminar. A CIG não suspende despedimento, despejo, recusa bancária nem processo disciplinar.' }
      ]
    },
    {
      id: 'what-happens-next',
      title: 'O que acontece depois da apresentação',
      content: [
        { kind: 'paragraph', text: 'Depois de receber a queixa, a CIG normalmente analisa os factos, pode pedir esclarecimentos e encaminhar os elementos para a entidade competente. Em casos simples, receberá uma resposta informativa: onde deve dirigir-se, que normas se aplicam, que documentos deve acrescentar.' },
        { kind: 'checklist', items: [
          'Guarde o número do processo, a data de envio e uma cópia de todos os anexos.',
          'Se não houver resposta ao fim de 15–30 dias, envie um follow-up com o assunto “Pedido de informação sobre queixa enviada em DD/MM/2026”.',
          'Mantenha uma tabela: data, entidade, canal, número do processo, email do responsável, passo seguinte.',
          'Se o caso for encaminhado para ACT/CITE/polícia, responda já a essa entidade, mas mantenha a CIG em cópia em actualizações importantes.',
          'Se precisar de indemnização por danos patrimoniais ou morais, a CIG não a cobrará por si — é necessário advogado e tribunal/acordo extrajudicial.',
          'Se a discriminação continuar, envie provas adicionais por mensagem separada com o mesmo número de processo.'
        ] },
        { kind: 'paragraph', text: 'Base jurídica em 2026: Código do Trabalho art. 24–25 proíbe a discriminação no trabalho, incluindo sexo, orientação sexual e identidade de género; Lei 38/2018 protege o direito à autodeterminação da identidade de género e expressão de género; Lei 14/2008 regula a proibição de discriminação em razão do sexo no acesso a bens e serviços.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação de queixa à CIG', amountEUR: 0, note: 'Gratuita através do site oficial/email/carta.' },
    { label: 'Livro de Reclamações online', amountEUR: 0, note: 'Gratuito; útil para serviços, lojas, clínicas, bancos, agências.' },
    { label: 'Advogado para acção judicial', amountEURMin: 80, amountEURMax: 200, note: 'Consulta inicial típica em regime privado; depende da cidade e da complexidade.' }
  ],
  sources: [
    { title: 'CIG — site oficial da Comissão para a Cidadania e a Igualdade de Género', url: 'https://www.cig.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CIG — Queixa por discriminação em razão do sexo, orientação sexual, identidade e expressão de género e características sexuais', url: 'https://www.cig.gov.pt/area-servicos/servicos/queixa-por-discriminacao/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Lei 38/2018 — direito à autodeterminação da identidade de género e expressão de género', url: 'https://diariodarepublica.pt/dr/detalhe/lei/38-2018-115933863', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — Lei 7/2009, igualdade e não discriminação no trabalho', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
