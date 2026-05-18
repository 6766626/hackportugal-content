export default {
  editorialVoice: 'hackportugal',
  id: 'alojamento-local-license',
  categoryId: 'housing_rent',
  title: 'Alojamento Local (AL): licença para arrendamento de curta duração',
  tldr: 'Alojamento Local — registo de alojamento para arrendamento de curta duração a turistas através da Câmara Municipal e do RNAL.\n\nEm 2026, o regime assenta no DL 128/2014, com as alterações do Mais Habitação e alterações posteriores: os municípios podem criar zonas de contenção e zonas de crescimento sustentável, onde novos AL são limitados ou suspensos. Sem número RNAL, não é possível anunciar legalmente o imóvel no Airbnb/Booking. Verifique o regulamento da Câmara antes de comprar um apartamento para AL.',
  tags: ['al', 'arrendamento', 'rnal', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-al',
      title: 'O que conta como Alojamento Local',
      content: [
        { kind: 'paragraph', text: 'Alojamento Local (AL) é alojamento de curta duração mediante pagamento, normalmente para turistas, quando o imóvel não é um hotel, complexo turístico ou empreendimento turístico. O registo atribui um número RNAL, que deve ser indicado nos anúncios, contratos, facturas e em plataformas como Airbnb, Booking e Vrbo.' },
        { kind: 'checklist', items: ['Moradia — casa independente', 'Apartamento — apartamento ou fracção autónoma', 'Estabelecimento de hospedagem — quartos/guest house; se predominarem dormitories, pode ser hostel', 'Quartos — arrendamento de quartos na sua habitação principal, normalmente até 3 quartos', 'AL não substitui a licença de utilização: o imóvel deve estar apto para habitação ou serviços', 'AL não é o mesmo que arrendamento de longa duração: IRS, IVA e obrigações perante hóspedes são diferentes'] },
        { kind: 'warning', text: 'Se o apartamento estiver num condomínio, verifique o título constitutivo da propriedade horizontal e as actas da assembleia. Para hostel num apartamento, normalmente é necessária autorização prévia do condomínio. Para um apartamento comum, formalmente o registo é possível sem autorização geral, mas o condomínio pode procurar pôr fim ao AL em caso de infracções comprovadas e através do procedimento previsto na lei.' }
      ]
    },
    {
      id: 'check-municipality',
      title: 'Verifique primeiro a Câmara e as zonas de restrição',
      content: [
        { kind: 'paragraph', text: 'O principal risco em 2026 não é a submissão técnica, mas sim a proibição local. Depois do Mais Habitação e das alterações posteriores, os municípios passaram a ter um papel-chave: podem aprovar regulamento municipal do alojamento local, zonas de contenção e zonas de crescimento sustentável. Nessas zonas, novos registos de AL podem ser limitados, depender de quotas ou estar temporariamente suspensos.' },
        { kind: 'checklist', items: ['Abra o site da Câmara Municipal correspondente à morada do imóvel', 'Procure “Alojamento Local”, “zonas de contenção”, “regulamento municipal”', 'Verifique se são permitidos novos AL para a modalidade apartamento', 'Confirme se existem quotas por freguesia, rua ou prédio', 'Verifique se está em vigor uma suspensão de novos registos', 'Compare a morada com o mapa do RNAL e o mapa municipal de zonas', 'Se o imóvel estiver em Lisboa, Porto, Cascais, Albufeira, Lagos, Loulé ou noutra zona turística — não compre para AL sem confirmação por escrito da Câmara', 'Peça ao vendedor a caderneta predial, a certidão permanente predial e as actas condomínio antes do CPCV'] },
        { kind: 'warning', text: 'A existência de AL no apartamento vizinho não garante que você obtenha um novo número. RNAL antigos podem ter sido emitidos antes da criação da zona de contenção. Em 2026, “compro um apartamento e depois trato do Airbnb” é um risco jurídico elevado.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos e condições antes da submissão',
      content: [
        { kind: 'paragraph', text: 'O registo de AL é submetido como comunicação prévia com prazo através do Balcão do Empreendedor/ePortugal ou do portal municipal, após o que a Câmara verifica os documentos e pode opor-se. Na prática, prepare o imóvel como um negócio: segurança contra incêndios, livro de reclamações, placa, seguro e actividade fiscal.' },
        { kind: 'checklist', items: ['NIF do proprietário ou da empresa', 'Acesso ao portal com Chave Móvel Digital, Cartão de Cidadão ou representante com procuração', 'Caderneta predial urbana das Finanças', 'Certidão permanente predial ou código de acesso', 'Licença de utilização / autorização de utilização ou documento que comprove a afectação do imóvel', 'Contrato de arrendamento com autorização para subarrendamento/AL, se não for proprietário', 'Termo de responsabilidade sobre o cumprimento dos requisitos de AL', 'Seguro de responsabilidade civil para a exploração do AL', 'Livro de reclamações físico e electrónico', 'Extintor, manta de incêndio, kit de primeiros socorros, instruções de segurança e contactos 112', 'Placa AL à entrada segundo o modelo previsto na lei', 'Declaração de início/alteração de actividade nas Finanças com CAE adequado, normalmente 55201 ou 55204 conforme a situação'] },
        { kind: 'warning', text: 'Um contrato de arrendamento habitacional comum quase sempre proíbe a exploração comercial de curta duração. Se você for arrendatário e iniciar AL sem autorização escrita do senhorio, arrisca-se à resolução do contrato, dívidas e queixa à Câmara.' }
      ]
    },
    {
      id: 'registration',
      title: 'Submissão e obtenção do número RNAL',
      content: [
        { kind: 'substeps', items: [
          { id: 'submit', title: '1. Submeta a comunicação prévia', content: [
            { kind: 'paragraph', text: 'A submissão é feita online através do Balcão do Empreendedor/ePortugal ou através do sistema da sua Câmara. Selecciona a modalidade de AL, indica a morada, a capacidade, o titular da exploração e anexa os documentos. Após a submissão, o registo entra no RNAL — Registo Nacional de Alojamento Local.' }
          ] },
          { id: 'wait', title: '2. Aguarde o prazo de oposição da Câmara', content: [
            { kind: 'paragraph', text: 'Nos termos do DL 128/2014, a Câmara pode realizar uma vistoria e opor-se se os documentos estiverem incorrectos, se o imóvel não corresponder à sua afectação, se estiver numa zona proibida ou se violar municipal regulation. No regime típico, o prazo de oposição é mais curto para modalidades comuns e mais longo para hostel; na prática, siga as instruções da sua Câmara e não receba hóspedes até ter a certeza de que o número está activo.' }
          ] },
          { id: 'publish', title: '3. Use o número RNAL em todo o lado', content: [
            { kind: 'checklist', items: ['Indique o número RNAL no anúncio Airbnb/Booking', 'Coloque a placa AL à entrada', 'Emita faturas-recibo através das Finanças ou de um programa certificado', 'Submeta a comunicação de hóspedes estrangeiros no sistema das entidades competentes, se aplicável', 'Mantenha o livro de reclamações electrónico', 'Guarde o seguro e os documentos do imóvel acessíveis para fiscalização'] }
          ] }
        ] },
        { kind: 'warning', text: 'As plataformas e a Câmara podem cruzar anúncios com o RNAL. Publicidade sem RNAL válido é um motivo típico para coima e remoção do anúncio.' }
      ]
    },
    {
      id: 'taxes-and-duties',
      title: 'Impostos, taxas e obrigações operacionais',
      content: [
        { kind: 'paragraph', text: 'AL não é “apenas arrendamento”. Para uma pessoa singular, o rendimento é normalmente declarado em IRS como categoria B, se a actividade estiver registada, ou noutro regime consoante a estrutura. Para uma empresa — IRC. O modelo fiscal afecta IVA, despesas, contabilidade organizada e Segurança Social.' },
        { kind: 'checklist', items: ['Abra ou altere a actividade nas Finanças antes dos primeiros hóspedes', 'Verifique o regime de IVA: a isenção pelo art. 53 CIVA só é possível se forem cumpridos os limites e condições; caso contrário, a taxa é normalmente 6%/13%/23% conforme o serviço concreto e a região, exigindo verificação com um contabilista', 'Emita facturas por cada reserva, incluindo comissões das plataformas', 'Verifique a tourist tax: Lisboa, Porto e muitos municípios cobram taxa turística por noite', 'Considere o IMI enquanto proprietário; o AL por si só não elimina o IMI', 'Pague condominium charges e cumpra o regulamento do condomínio', 'Comunique alterações: capacidade, titular da exploração, contactos, cessação de actividade', 'Acompanhe as local rules sobre ruído, lixo, check-in e occupancy limits'] },
        { kind: 'warning', text: 'A optimização fiscal do AL depende do estatuto de residência, despesas, crédito à habitação, IVA e número de imóveis. Antes de começar, é mais barato pagar a um contabilista do que corrigir depois IRS/IVA e coimas.' }
      ]
    },
    {
      id: 'loss-of-license',
      title: 'Quando o AL pode ser suspenso ou cancelado',
      content: [
        { kind: 'paragraph', text: 'O número RNAL não é uma “imunidade eterna”. A Câmara, a ASAE, o condomínio e os vizinhos podem iniciar fiscalizações. As regras municipais em 2026 são especialmente importantes: em zonas de contenção podem existir condições adicionais, restrições à transmissão da exploração e local suspension.' },
        { kind: 'checklist', items: ['A Câmara detectou informações falsas na comunicação prévia', 'O imóvel não corresponde à licença de utilização', 'Não existe seguro obrigatório ou safety equipment', 'O AL funciona numa zona onde novos registos são proibidos ou estão suspensos', 'Queixas sistemáticas sobre ruído, lixo, segurança ou violação das regras do condomínio', 'O condomínio aprovou uma decisão, através do procedimento previsto na lei, contra a exploração de AL por prejuízo comprovado para a tranquilidade dos moradores', 'Os dados do titular ou da capacidade não foram actualizados', 'É usado o número RNAL de outra pessoa ou de outro imóvel'] },
        { kind: 'warning', text: 'A compra de um imóvel “com AL” exige due diligence própria. Verifique se a exploração é transmissível, se existe proibição municipal de novos registos, se o RNAL está activo, se há queixas do condomínio e se o imóvel corresponde aos documentos. Não confie apenas numa captura de ecrã do anúncio Airbnb.' }
      ]
    }
  ],
  costs: [
    { label: 'Registo de AL na Câmara/RNAL', amountEURMin: 0, amountEURMax: 100, note: 'A submissão pública é frequentemente gratuita ou sujeita a uma pequena taxa municipal; depende da Câmara.' },
    { label: 'Seguro de responsabilidade civil', amountEURMin: 60, amountEURMax: 250, note: 'Referência anual para um imóvel pequeno; depende da cobertura, limites e seguradora.' },
    { label: 'Livro de reclamações electrónico', amountEURMin: 0, amountEURMax: 25, note: 'O registo do livro electrónico é normalmente gratuito, mas o livro físico/fornecedores podem ter custos à parte.' },
    { label: 'Equipamento básico de segurança', amountEURMin: 50, amountEURMax: 200, note: 'Extintor, manta de incêndio, kit de primeiros socorros, signage; o valor efectivo depende do imóvel.' },
    { label: 'Contabilista', amountEURMin: 40, amountEURMax: 150, note: 'Intervalo mensal típico para um AL pequeno; empresa e IVA são normalmente mais caros.' }
  ],
  sources: [
    { title: 'RNAL — Pesquisa AL no Registo Nacional de Turismo', url: 'https://rnt.turismodeportugal.pt/RNT/Pesquisa_AL.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Turismo de Portugal — Estabelecimentos de Alojamento Local | Registo', url: 'https://business.turismodeportugal.pt/pt/Planear_Iniciar/Licenciamento_Registo_da_Atividade/Alojamento_Local/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 128/2014 — regime jurídico da exploração dos estabelecimentos de alojamento local', url: 'https://dre.pt/dre/detalhe/decreto-lei/128-2014-25676943', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Programa Mais Habitação e alterações ao regime de AL', url: 'https://dre.pt/dre/detalhe/lei/56-2023-222477692', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Alojamento Local: registo e comunicação prévia', url: 'https://eportugal.gov.pt/servicos/registar-um-estabelecimento-de-alojamento-local', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
