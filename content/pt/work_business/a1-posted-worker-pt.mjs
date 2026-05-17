export default {
  editorialVoice: 'hackportugal',
  id: 'a1-posted-worker-pt',
  categoryId: 'work_business',
  title: 'Certificado A1: destacamento de trabalhador de Portugal para a UE',
  tldr: 'O Documento Portátil A1 é necessário se um trabalhador com contrato de trabalho português se deslocar temporariamente para trabalhar noutro país da UE/EEE/Suíça, mas tiver de permanecer no sistema da Segurança Social de Portugal. Regra geral, o máximo é 24 meses ao abrigo do Reg. 883/2004 art. 12, sem substituir outro trabalhador destacado. O pedido é submetido pelo empregador através da Segurança Social Direta antes da partida; as contribuições continuam a ser pagas em Portugal e o país de acolhimento não deve exigir contribuições sociais locais.',
  tags: ['a1', 'destacamento', 'segurança-social', 'trabalho'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-a1-does',
      title: 'O que o A1 permite e quando é necessário',
      content: [
        { kind: 'paragraph', text: 'O Documento Portátil A1 confirma que, durante o período de trabalho temporário no estrangeiro, o trabalhador continua sujeito à segurança social portuguesa. Não é um visto de trabalho nem uma autorização de trabalho; é um certificado sobre a legislação aplicável em matéria de Segurança Social.' },
        { kind: 'paragraph', text: 'Caso típico: vive e trabalha em Portugal ao abrigo de um contrato de trabalho, e o empregador envia-o para um projecto, montagem, auditoria, consultoria, conferência com tarefas profissionais ou trabalho temporário noutro país da UE, do EEE ou na Suíça.' },
        { kind: 'checklist', items: [
          'O trabalhador permanece na folha salarial do empregador português',
          'O contrato de trabalho com a empresa portuguesa não cessa',
          'As contribuições para a Segurança Social continuam a ser pagas em Portugal',
          'O país de acolhimento não deve cobrar as suas contribuições sociais pelo mesmo período',
          'O A1 pode ser solicitado pela inspecção do trabalho, pelo cliente, pela folha salarial da empresa de acolhimento ou pelo organizador do projecto',
          'O documento é necessário mesmo para destacamentos curtos, se durante a viagem for realizado trabalho',
          'Para turismo normal, o A1 não é necessário'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Condições para o destacamento ao abrigo do art. 12',
      content: [
        { kind: 'paragraph', text: 'Regra de base do Reg. (EC) 883/2004 art. 12: uma pessoa que trabalha por conta de outrem num país da UE e é enviada pelo empregador para trabalhar temporariamente noutro país pode permanecer no sistema do primeiro país, se a duração previsível do trabalho no estrangeiro não exceder 24 meses e se não for enviada para substituir outro trabalhador destacado.' },
        { kind: 'checklist', items: [
          'O empregador exerce normalmente uma actividade substancial em Portugal, não sendo uma empresa de «caixa postal»',
          'Mantém-se uma ligação laboral directa entre o trabalhador e o empregador português',
          'O trabalhador já está sujeito à Segurança Social portuguesa antes do destacamento',
          'O destacamento é temporário: no pedido são indicadas datas concretas de início e de fim',
          'O prazo normal máximo é de até 24 meses',
          'Não se pode usar o A1 para substituir sucessivamente um trabalhador destacado por outro na mesma posição',
          'O país de destino é a UE, Islândia, Listenstaine, Noruega ou Suíça',
          'Para trabalho regular em vários países aplica-se outro regime: multi-state worker, e não o destacamento normal'
        ] },
        { kind: 'warning', text: 'Se o país de acolhimento se tornar, na prática, o local de trabalho habitual, ou se o prazo for desde logo superior a 24 meses, o A1 normal para destacamento pode não ser adequado. É necessária uma avaliação separada da legislação aplicável e, por vezes, um acordo excepcional ao abrigo do Reg. 883/2004 art. 16.' }
      ]
    },
    {
      id: 'request-online',
      title: 'Como pedir através da Segurança Social Direta',
      content: [
        { kind: 'paragraph', text: 'Para um trabalhador por conta de outrem, o pedido é normalmente submetido pelo empregador na Segurança Social Direta. É útil que o trabalhador verifique antecipadamente que tem NISS e que o empregador declara correctamente as remunerações e as contribuições.' },
        { kind: 'substeps', items: [
          { id: 'prepare-data', title: '1. Preparar os dados', content: [
            { kind: 'checklist', items: [
              'NISS do trabalhador',
              'Nome completo e data de nascimento do trabalhador',
              'NIF do empregador e dados da empresa',
              'País ou países de destino',
              'Morada do local de trabalho no estrangeiro, se conhecida',
              'Data de início e data de fim do destacamento',
              'Descrição do trabalho a realizar',
              'Dados da empresa de acolhimento ou do cliente, se existirem',
              'Confirmação de que o trabalhador não substitui outro trabalhador destacado',
              'Contactos da pessoa responsável do empregador'
            ] }
          ] },
          { id: 'submit-ssd', title: '2. Submeter o Pedido de destacamento', content: [
            { kind: 'paragraph', text: 'O empregador entra na Segurança Social Direta e escolhe o serviço relacionado com destacamento de trabalhadores / pedido de A1. É preferível submeter o pedido antes do início da viagem: o A1 é muitas vezes necessário logo à entrada no local de trabalho ou antes de o cliente autorizar o início das funções.' }
          ] },
          { id: 'download-a1', title: '3. Descarregar e entregar ao trabalhador', content: [
            { kind: 'paragraph', text: 'Após aprovação, o A1 fica disponível em formato digital. O trabalhador deve ter o PDF no telemóvel e uma cópia impressa: em alguns países, os inspectores em obras, fábricas e eventos ainda pedem uma cópia em papel.' }
          ] }
        ] }
      ]
    },
    {
      id: 'during-posting',
      title: 'O que fazer durante o destacamento',
      content: [
        { kind: 'paragraph', text: 'O A1 resolve apenas a questão da segurança social. Não afasta as regras do país de acolhimento sobre remuneração mínima, tempo de trabalho, segurança e saúde no trabalho, registo de trabalhadores destacados e riscos fiscais.' },
        { kind: 'checklist', items: [
          'Mantenha o A1 consigo durante todo o período de trabalho no estrangeiro',
          'Verifique se o empregador tem de fazer uma notificação de posted worker no país de destino',
          'Guarde travel orders, bilhetes, contrato com o cliente e folhas de horas',
          'Controle que as datas do trabalho efectivo não ultrapassam as datas do A1',
          'Se a viagem for prolongada, o empregador deve pedir uma prorrogação ou um novo documento antes do fim do período actual',
          'O salário continua a ser declarado à Segurança Social em Portugal',
          'O IRS e a residência fiscal são avaliados separadamente do A1',
          'É melhor cobrir a assistência médica durante a viagem com EHIC/CESD e seguro de trabalho, porque o A1 não é um seguro de saúde'
        ] },
        { kind: 'warning', text: 'O A1 não prova o direito ao trabalho para cidadãos de países terceiros noutro país da UE. Se não for cidadão da UE, a autorização de residência portuguesa nem sempre dá o direito de exercer trabalho na Alemanha, França, Países Baixos, etc. Verifique as regras de imigração do país de destino antes da viagem.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes e consequências',
      content: [
        { kind: 'checklist', items: [
          'Partir sem A1 e tentar obtê-lo «com efeitos retroactivos» — por vezes é possível, mas o risco de coimas e de recusa de acesso ao local de trabalho é maior',
          'Confundir o A1 com o cartão europeu de seguro de doença: são documentos diferentes',
          'Achar que uma viagem curta de 2–3 dias não exige A1: muitos clientes continuam a exigi-lo para qualquer actividade profissional',
          'Emitir o A1 por 24 meses «por precaução», embora o projecto dure 2 semanas: as datas devem ser realistas',
          'Não actualizar o A1 quando há alteração de país, datas ou empregador',
          'Usar o destacamento normal para uma pessoa que trabalha regularmente a partir de dois países todas as semanas',
          'Esquecer o registo local de posted worker: em muitos países é um portal separado e há coimas separadas',
          'Ignorar as regras fiscais dos 183 dias e de permanent establishment: o A1 não protege contra consequências fiscais'
        ] },
        { kind: 'paragraph', text: 'Se não houver A1, ou se o A1 não corresponder aos factos, o país de acolhimento pode exigir o registo no seu próprio sistema de segurança social e cobrar contribuições locais. Para o empregador, isso é normalmente mais caro do que pedir atempadamente o A1 correcto.' }
      ]
    }
  ],
  costs: [
    { label: 'Pedido de A1 na Segurança Social Direta', amountEUR: 0, note: 'Não é cobrada taxa pública pelo pedido de destacamento normal.' },
    { label: 'Coimas por falta de registo local de posted worker', amountEURMin: 0, amountEURMax: 10000, note: 'Dependem do país de destino e da infracção; não é uma taxa portuguesa, mas sim um risco no país de acolhimento.' }
  ],
  sources: [
    {
      title: 'gov.pt: Destacamento de trabalhadores para países da União Europeia',
      url: 'https://www2.gov.pt/en/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/trabalhadores-em-portugal/destacamento-de-trabalhadores-para-paises-da-uniao-europeia',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: destacamento de trabalhadores — informação e formulários',
      url: 'https://www.seg-social.pt/destacamento-de-trabalhadores',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'EUR-Lex: Regulamento (EC) n.º 883/2004, art. 12 sobre trabalhadores destacados',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0883',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Your Europe: Formulário A1 — certificado de cobertura de segurança social',
      url: 'https://europa.eu/youreurope/citizens/work/social-security-forms/contact_points_pd_a1.pdf',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
