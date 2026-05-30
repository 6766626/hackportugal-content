export default {
  editorialVoice: 'hackportugal',
  id: 'alojamento-local-license',
  categoryId: 'housing_rent',
  title: 'Alojamento Local (AL): licença para arrendamento de curta duração',
  tldr: 'Alojamento Local é o registo de habitação para arrendamento de curta duração a turistas através da Câmara Municipal e do RNAL.\n\nEm 2026, o regime assenta no DL 128/2014, com as alterações do Mais Habitação e alterações posteriores: os municípios podem criar zonas de contenção e zonas de crescimento sustentável, onde novos AL são limitados ou suspensos. Sem número RNAL não é possível publicitar legalmente o imóvel no Airbnb/Booking. Verifique o regulamento da Câmara antes de comprar um apartamento para AL.',
  tags: ['al', 'arrendamento', 'rnal', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-al',
      title: 'O que conta como Alojamento Local',
      content: [
        { kind: 'paragraph', text: 'Alojamento Local (AL) é o alojamento de curta duração mediante pagamento, normalmente para turistas, quando o imóvel não é um hotel, complexo turístico ou empreendimento turístico. O registo atribui um número RNAL, que deve ser indicado nos anúncios, contratos, faturas e plataformas como Airbnb, Booking e Vrbo.' },
        { kind: 'checklist', items: ['Moradia — casa independente', 'Apartamento — apartamento ou fração autónoma', 'Estabelecimento de hospedagem — quartos/casa de hóspedes; se predominarem dormitórios, pode ser hostel', 'Quartos — arrendamento de quartos na sua habitação principal, normalmente no máximo 3 quartos', 'AL não substitui a licença de utilização: o imóvel deve estar apto para habitação ou serviços', 'AL não é o mesmo que arrendamento de longa duração: IRS, IVA e obrigações perante hóspedes são diferentes'] },
        { kind: 'warning', text: 'Se o apartamento estiver num condomínio, verifique o título constitutivo da propriedade horizontal e as actas da assembleia. Para hostel num apartamento, normalmente é necessária autorização prévia do condomínio. Para um apartamento comum, formalmente o registo é possível sem autorização geral, mas o condomínio pode procurar a cessação do AL perante violações comprovadas e seguindo o procedimento legal.' }
      ]
    },
    {
      id: 'check-municipality',
      title: 'Verifique primeiro a Câmara e as zonas de restrição',
      content: [
        { kind: 'paragraph', text: 'O principal risco em 2026 não é a submissão técnica, mas a proibição local. Após o Mais Habitação e alterações posteriores, os municípios passaram a ter um papel central: podem aprovar regulamento municipal do alojamento local, zonas de contenção e zonas de crescimento sustentável. Nessas zonas, novos registos de AL podem ser limitados, depender de quotas ou ficar temporariamente suspensos.' },
        { kind: 'checklist', items: ['Abra o site da Câmara Municipal correspondente à morada do imóvel', 'Procure “Alojamento Local”, “zonas de contenção”, “regulamento municipal”', 'Verifique se são permitidos novos AL para a modalidade apartamento', 'Confirme se existem quotas por freguesia, rua ou prédio', 'Verifique se está em vigor alguma suspensão de novos registos', 'Compare a morada com o mapa do RNAL e com o mapa municipal de zonas', 'Se o imóvel estiver em Lisboa, Porto, Cascais, Albufeira, Lagos, Loulé ou noutra zona turística — não compre para AL sem verificação escrita junto da Câmara', 'Peça ao vendedor a caderneta predial, a certidão permanente predial e as actas condomínio antes do CPCV'] },
        { kind: 'warning', text: 'A existência de AL num apartamento vizinho não garante que você obtenha um novo número. RNAL antigos podem ter sido emitidos antes da criação de uma zona de contenção. Em 2026, “compro um apartamento e depois trato do Airbnb” é um risco jurídico elevado.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos e condições antes da submissão',
      content: [
        { kind: 'paragraph', text: 'O registo de AL é submetido como comunicação prévia com prazo através do Balcão do Empreendedor/ePortugal ou do portal municipal, após o que a Câmara verifica os documentos e pode opor-se. Na prática, prepare o imóvel como um negócio: segurança contra incêndios, livro de reclamações, placa, seguro e atividade fiscal.' },
        { kind: 'checklist', items: ['NIF do proprietário ou da empresa', 'Acesso ao portal com Chave Móvel Digital, Cartão de Cidadão ou representante com procuração', 'Caderneta predial urbana das Finanças', 'Certidão permanente predial ou código de acesso', 'Licença de utilização / autorização de utilização ou documento que comprove o uso do imóvel', 'Contrato de arrendamento com autorização para subarrendamento/AL, se não for proprietário', 'Termo de responsabilidade relativo ao cumprimento dos requisitos de AL', 'Seguro de responsabilidade civil para a exploração do AL', 'Livro de reclamações físico e eletrónico', 'Extintor, manta de incêndio, kit de primeiros socorros, instruções de segurança e contactos 112', 'Placa AL à entrada, segundo o modelo legal', 'Declaração de início/alteração de atividade nas Finanças com CAE adequado, normalmente 55201 ou 55204 consoante a situação'] },
        { kind: 'warning', text: 'Um contrato de arrendamento habitacional comum quase sempre proíbe a cedência comercial de curta duração. Se você for arrendatário e lançar um AL sem autorização escrita do senhorio, arrisca a resolução do contrato, dívidas e uma queixa à Câmara.' }
      ]
    },
    {
      id: 'registration',
      title: 'Submissão e obtenção do número RNAL',
      content: [
        { kind: 'substeps', items: [
          { id: 'submit', title: '1. Submeta a comunicação prévia', content: [
            { kind: 'paragraph', text: 'A submissão é feita online através do Balcão do Empreendedor/ePortugal ou através do sistema da sua Câmara. Você escolhe a modalidade de AL, indica a morada, a capacidade, o titular da exploração e anexa os documentos. Após a submissão, o registo entra no RNAL — Registo Nacional de Alojamento Local.' }
          ] },
          { id: 'wait', title: '2. Aguarde o prazo de oposição da Câmara', content: [
            { kind: 'paragraph', text: 'Nos termos do DL 128/2014, a Câmara pode realizar uma vistoria e opor-se se os documentos estiverem incorretos, se o imóvel não corresponder ao uso autorizado, se estiver numa zona proibida ou se violar a regulamentação municipal. No regime típico, o prazo de oposição é mais curto para modalidades comuns e mais longo para hostel; na prática, siga as instruções da sua Câmara e não receba hóspedes até ter a certeza de que o número está ativo.' }
          ] },
          { id: 'publish', title: '3. Utilize o número RNAL em todo o lado', content: [
            { kind: 'checklist', items: ['Indique o número RNAL no anúncio do Airbnb/Booking', 'Coloque a placa AL à entrada', 'Emita faturas-recibo através das Finanças ou de um programa certificado', 'Submeta a comunicação de hóspedes estrangeiros no sistema das autoridades competentes, se aplicável', 'Mantenha o livro de reclamações eletrónico', 'Guarde o seguro e os documentos do imóvel acessíveis para inspeção'] }
          ] }
        ] },
        { kind: 'warning', text: 'As plataformas e a Câmara podem cruzar anúncios com o RNAL. Publicidade sem RNAL válido é um motivo típico para coima e remoção do anúncio.' }
      ]
    },
    {
      id: 'taxes-and-duties',
      title: 'Impostos, taxas e obrigações operacionais',
      content: [
        { kind: 'paragraph', text: 'AL não é “apenas arrendamento”. Para uma pessoa singular, o rendimento é normalmente declarado em IRS como categoria B, se a atividade estiver registada, ou noutro regime consoante a estrutura. Para uma empresa — IRC.\n\nO modelo fiscal influencia o IVA, as despesas, a contabilidade organizada e a Segurança Social.' },
        { kind: 'checklist', items: ['Abra ou altere a atividade nas Finanças antes dos primeiros hóspedes', 'Verifique o regime de IVA: a isenção ao abrigo do art. 53 CIVA só é possível se cumprir os limites e condições; caso contrário, a taxa é normalmente 6%/13%/23% consoante o serviço concreto e a região, exigindo verificação por um contabilista', 'Emita faturas por cada reserva, incluindo as comissões das plataformas', 'Verifique a tourist tax: Lisboa, Porto e muitos municípios cobram taxa turística por noite', 'Considere o IMI enquanto proprietário; o AL por si só não elimina o IMI', 'Pague as despesas de condomínio e cumpra o regulamento do condomínio', 'Comunique alterações: capacidade, titular da exploração, contactos, cessação de atividade', 'Cumpra as regras locais sobre ruído, lixo, check-in e limites de ocupação'] },
        { kind: 'warning', text: 'A otimização fiscal de AL depende do estatuto de residência, despesas, crédito habitação, IVA e número de imóveis. Antes de começar, é mais barato pagar a um contabilista do que corrigir IRS/IVA e coimas depois.' }
      ]
    },
    {
      id: 'loss-of-license',
      title: 'Quando o AL pode ser suspenso ou cancelado',
      content: [
        { kind: 'paragraph', text: 'O número RNAL não é uma “imunidade permanente”. A Câmara, a ASAE, o condomínio e os vizinhos podem iniciar inspeções. As regras municipais em 2026 são especialmente importantes: em zonas de contenção podem existir condições adicionais, restrições à transmissão da exploração e suspensão local.' },
        { kind: 'checklist', items: ['A Câmara detetou informações falsas na comunicação prévia', 'O imóvel não corresponde à licença de utilização', 'Não existe seguro obrigatório ou equipamento de segurança', 'O AL funciona numa zona onde novos registos são proibidos ou estão suspensos', 'Queixas sistemáticas sobre ruído, lixo, segurança ou violação das regras do condomínio', 'O condomínio aprovou uma decisão pelo procedimento legal contra a exploração de AL perante prejuízo comprovado para a tranquilidade dos moradores', 'Os dados do titular ou da capacidade não foram atualizados', 'É usado o número RNAL de outra pessoa ou o número de outro imóvel'] },
        { kind: 'warning', text: 'A compra de um imóvel “com AL” exige due diligence separado. Verifique se a exploração é transmissível, se existe proibição municipal de novos registos, se o RNAL está ativo, se há queixas do condomínio e se o imóvel corresponde aos documentos. Não confie apenas numa captura de ecrã do anúncio no Airbnb.' }
      ]
    }
  ],
  costs: [
    { label: 'Registo de AL na Câmara/RNAL', amountEURMin: 0, amountEURMax: 100, note: 'A submissão pública é muitas vezes gratuita ou sujeita a uma pequena taxa municipal; depende da Câmara.' },
    { label: 'Seguro de responsabilidade civil', amountEURMin: 60, amountEURMax: 250, note: 'Valor indicativo anual para um imóvel pequeno; depende da cobertura, limites e seguradora.' },
    { label: 'Livro de reclamações eletrónico', amountEURMin: 0, amountEURMax: 25, note: 'O registo do livro eletrónico é normalmente gratuito, mas o livro físico/fornecedores podem ter custos separados.' },
    { label: 'Equipamento básico de segurança', amountEURMin: 50, amountEURMax: 200, note: 'Extintor, manta de incêndio, kit de primeiros socorros, sinalética; o valor real depende do imóvel.' },
    { label: 'Contabilista', amountEURMin: 40, amountEURMax: 150, note: 'Intervalo mensal típico para um AL pequeno; empresa e IVA costumam ser mais caros.' }
  ],
  sources: [
    { title: 'RNAL — Pesquisa de AL no Registo Nacional de Turismo', url: 'https://rnt.turismodeportugal.pt/RNT/Pesquisa_AL.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Turismo de Portugal — Estabelecimentos de Alojamento Local | Registo', url: 'https://business.turismodeportugal.pt/pt/Planear_Iniciar/Licenciamento_Registo_da_Atividade/Alojamento_Local/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 128/2014 — regime jurídico da exploração dos estabelecimentos de alojamento local', url: 'https://dre.pt/dre/detalhe/decreto-lei/128-2014-25676943', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Programa Mais Habitação e alterações ao regime de AL', url: 'https://dre.pt/dre/detalhe/lei/56-2023-222477692', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Alojamento Local: registo e comunicação prévia', url: 'https://www.gov.pt/servicos/registar-um-estabelecimento-de-alojamento-local', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
