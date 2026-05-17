export default {
  editorialVoice: 'hackportugal',
  id: 'rental-contract',
  categoryId: 'housing_rent',
  title: 'Arrendamento de longa duração em Portugal — enquadramento jurídico e processo',
  tldr: 'O arrendamento de longa duração (arrendamento habitacional) é regulado pelo NRAU (Lei 6/2006 com alterações). Para **contratos com prazo certo**, o mínimo é 1 ano e o máximo 30 anos; se o prazo não for indicado, considera-se que o contrato foi celebrado por **5 anos** (Código Civil arts. 1094-1095). As exceções para contratos para fins especiais transitórios podem ter duração inferior. Pelo art. 1076 Código Civil, o limite é: caução até **2 rendas mensais** + renda antecipada até **2 meses**. Exigências de pré-pagamento de 3-12 meses são juridicamente vulneráveis — discuta com um jurista uma estrutura legal (seguro de fiança, garantia bancária, fiador). O contrato é registado nas Finanças pelo proprietário, que também emite os recibos de renda.',
  tags: ['arrendamento', 'nrau', 'contrato', 'caução', 'fiador'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'legal-framework',
      title: 'Enquadramento jurídico',
      content: [
        { kind: 'paragraph', text: 'Documentos principais: Código Civil (artigos sobre arrendamento), Lei 6/2006 (NRAU — Novo Regime do Arrendamento Urbano), Decreto-Lei 160/2006 (elementos formais do contrato), numerosas leis e decretos-lei com alterações. Importante para 2024–2026: a Lei 56/2023 «Mais Habitação» foi PARCIALMENTE REVOGADA no âmbito do programa «Construir Portugal»: o Decreto-Lei 43/2024 (julho de 2024) revogou/alterou medidas sobre arrendamento coercivo de imóveis devolutos, o Decreto-Lei 76/2024 (23 de outubro de 2024) levantou a moratória sobre novas licenças de AL em apartamentos e eliminou a caducidade automática de 5 anos do AL.' },
        { kind: 'paragraph', text: 'Princípios-chave: proteção do arrendatário (despejo apenas através de tribunal), obras de grande reparação — responsabilidade do proprietário, atualização da renda — não mais do que 1 vez por ano e não acima do coeficiente oficial do INE (em 2026: **2,24%**, coeficiente 1,0224, publicado no Aviso n.º 23174/2025/2 de 19.09.2025).' },
        { kind: 'paragraph', text: 'Caução e pré-pagamento (art. 1076 Código Civil após a Lei 56/2023 «Mais Habitação»): máximo de 2 rendas mensais como caução + máximo de 2 rendas mensais como pré-pagamento. Exigências superiores devem ser enquadradas numa estrutura jurídica separada (seguro de fiança, outra garantia), caso contrário a cláusula pode ser contestada como ilegal.' }
      ]
    },
    {
      id: 'terms',
      title: 'Termos-chave',
      content: [
        { kind: 'checklist', items: [
          'Arrendatário / inquilino — arrendatário',
          'Senhorio — senhorio (proprietário)',
          'Contrato de arrendamento habitacional — contrato de arrendamento de habitação',
          'Renda — renda mensal',
          'Caução — depósito de garantia, pelo art. 1076 Código Civil (após o Mais Habitação) máximo de 2 rendas mensais; é devolvida na saída. Além disso, pode ser acordado o pré-pagamento da renda até 2 meses',
          'Fiador — garante: pessoa singular residente em Portugal com rendimento estável, que responde com o seu património pelas obrigações do arrendatário',
          'Seguro de fiança — a seguradora substitui o fiador, cerca de 5-7% da renda anual',
          'IMI — imposto municipal sobre imóveis, por lei é pago pelo proprietário',
          'Condomínio — quotas do prédio; perante o condomínio responde o proprietário. No arrendamento, são frequentemente incluídas na renda, mas o contrato pode transferir separadamente para o arrendatário algumas despesas/encargos, se isso estiver expressamente previsto',
          'Recibo de renda — recibo fiscal mensal do senhorio, normalmente eletrónico no Portal das Finanças, base para a declaração fiscal'
        ]}
      ]
    },
    {
      id: 'pricing',
      title: 'Referências de mercado (2026)',
      content: [
        { kind: 'paragraph', text: 'Os preços aumentaram significativamente em 2022-2025. Segundo dados do INE e estatísticas do Banco de Portugal:' },
        { kind: 'checklist', items: [
          'Lisboa centro: T1 (1 quarto) 1400-2500 €/mês',
          'Lisboa periferia (Oeiras, Almada): T1 900-1500 €',
          'Porto centro: T1 900-1400 €',
          'Porto periferia: T1 650-1000 €',
          'Coimbra: T1 550-850 €',
          'Braga: T1 500-800 €',
          'Algarve sazonal: T1 700-1500 € (inverno), até x2 no verão',
          'Alentejo cidades pequenas: T1 350-600 €'
        ]},
        { kind: 'paragraph', text: 'Designações: T0 = estúdio, T1 = 1 quarto + sala, T2 = 2 quartos + sala, etc.' }
      ]
    },
    {
      id: 'search-channels',
      title: 'Canais de pesquisa',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem várias categorias de canais de pesquisa de habitação:' },
        { kind: 'checklist', items: [
          'Portais agregadores online (os maiores: Idealista, Imovirtual, Casa Sapo, Supercasa) — canal principal, centenas de milhares de anúncios',
          'OLX Imóveis — muitos anúncios diretamente de proprietários (menos comissões)',
          'Agências imobiliárias (imobiliárias) — maiores redes: RE/MAX, Century 21, ERA, Engel & Völkers. Comissão de 1 mês de renda, muitas vezes paga pelo proprietário',
          'Grupos locais de Facebook (por cidades e bairros)',
          'Arrendamento de média duração (6-12 meses) para estrangeiros: plataformas sem fiador, mas 20-40% mais caras',
          'Junta de Freguesia — por vezes tem programas de habitação social'
        ]},
        { kind: 'warning', text: 'Esquema fraudulento típico: anúncio com fotografias de um bom apartamento, o «proprietário» está no estrangeiro e pede pré-pagamento para «reservar» sem visita. NUNCA pague por uma casa que não viu pessoalmente ou através de um representante de confiança.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo de arrendamento — passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preparação prévia', content: [
            { kind: 'checklist', items: [
              'Obter NIF',
              'Abrir uma conta bancária em Portugal (preferencialmente)',
              'Preparar comprovativo de rendimentos: contrato de trabalho, recibos de vencimento dos últimos 3 meses, extrato bancário ou declaração de IRS',
              'Encontrar fiador (se disponível) — o seu Cartão de Cidadão (CC) + rendimentos',
              'Na ausência de fiador: discutir garantias **legais** — máximo de 2 meses de pré-pagamento + máximo de 2 meses de caução, ou seguro de fiança/garantia bancária/fiador. A exigência de 3–12 meses em dinheiro como renda antecipada ou caução adicional é juridicamente vulnerável'
            ]}
          ]},
          { id: 'p2', title: '2. Pesquisa e visita', content: [
            { kind: 'paragraph', text: 'Faça uma lista de opções. Na primeira visita, verifique: humidade nas paredes e janelas (marca branca nos cantos = bolor), aquecimento (crítico no inverno — Portugal é um dos piores países da UE em isolamento das habitações), água quente (esquentador a gás ou termoacumulador), ruído da rua e dos vizinhos, pressão da água.' }
          ]},
          { id: 'p3', title: '3. Proposta e negociação', content: [
            { kind: 'paragraph', text: 'Pontos a discutir: prazo (12/24/36 meses), montante da caução, quem paga IMI e condomínio, mobiliário (mobilado (com móveis) / mobilado parcialmente (parcialmente mobilado) / sem mobília), restrições a animais de estimação, atualização da renda, compromisso prévio do proprietário de corrigir os defeitos detetados antes da entrada.' }
          ]},
          { id: 'p4', title: '4. Assinatura do contrato', content: [
            { kind: 'paragraph', text: 'Mínimo de 2 exemplares. Elementos obrigatórios segundo a Lei 6/2006 + DL 160/2006: dados e NIF das partes, morada detalhada e identificação matricial/predial, finalidade do arrendamento, prazo, valor da renda e forma de atualização, valor da caução, data de início. Verifique também a **licença de utilização** (ou isenção aplicável), o **certificado energético** (se exigido) e todos os anexos/inventário.' }
          ]},
          { id: 'p5', title: '5. Entrega das chaves', content: [
            { kind: 'paragraph', text: 'Faça uma descrição do estado (inventário) — lista do mobiliário existente, estado das paredes, pavimento, loiças e canalização. Fotografe tudo. Isto protegê-lo-á na devolução da caução.' }
          ]},
          { id: 'p6', title: '6. Registo nas Finanças', content: [
            { kind: 'paragraph', text: 'No prazo de 30 dias, o proprietário deve registar o contrato no Portal das Finanças. Recebe um comprovativo, cuja cópia lhe deve entregar. Sem registo e recibos de renda, em regra, não conseguirá declarar corretamente a dedução de rendas no IRS. Para a Junta/AIMA, um contrato registado aumenta muito a fiabilidade da prova de morada, mas o conjunto concreto de documentos depende da Junta e do tipo de procedimento AIMA.' },
            { kind: 'warning', text: 'Se o proprietário se recusar a registar — é um sinal de alerta sério (possível evasão fiscal). Insista ou escolha outra casa.' }
          ]}
        ]}
      ]
    },
    {
      id: 'without-fiador',
      title: 'Se não tiver fiador',
      content: [
        { kind: 'paragraph', text: 'Os estrangeiros recém-chegados muitas vezes não têm acesso a fiador. Opções:' },
        { kind: 'checklist', items: [
          '⚠️ Pré-pagamento de 3-12 meses adiantados — prática de mercado comum para estrangeiros sem fiador, mas enquanto «renda antecipada» é juridicamente vulnerável: o art. 1076 CC limita-a a 2 meses. O excedente além dos 2 meses não deve ser formalizado como depósito/caução monetária adicional (isso volta a ser caução). Alternativas legais — seguro de fiança, garantia bancária, fiador ou outra garantia independente — confirme a estrutura com advogado/solicitador',
          '⚠️ «Caução aumentada» de 3-6 meses — também contraria o art. 1076 CC (máx. 2 meses). Se o senhorio insistir — enquadre o excedente através de seguro de fiança/garantia bancária',
          'Seguro de fiança — a seguradora garante as obrigações, custa 5-7% da renda anual (via legal para contornar os limites do art. 1076)',
          'Arrendamento de média duração (6-12 meses) através de serviços intermediários — normalmente sem fiador, mas 20-40% mais caro',
          'Fundo de habitação social (para algumas categorias) — através do município',
          'Arrendamento de quarto em habitação partilhada — processo frequentemente simplificado'
        ]}
      ]
    },
    {
      id: 'rights-and-duties',
      title: 'Direitos e deveres',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Direitos do arrendatário', content: [
            { kind: 'checklist', items: [
              'Uso pacífico da casa pelo prazo do contrato',
              'Proteção contra aumentos arbitrários da renda — apenas 1 vez por ano e não acima do coeficiente do INE',
              'Proteção contra despejo — o despejo por iniciativa própria é ILEGAL. Mesmo em caso de dívida de 2+ meses ou incumprimento grave, o senhorio deve resolver o contrato e usar o procedimento de despejo previsto através do BAS (Balcão do Arrendatário e do Senhorio) / tribunal; não pode simplesmente mudar fechaduras ou retirar bens',
              'Obras de grande reparação — a cargo do proprietário (telhado, instalação elétrica, defeitos estruturais)',
              'Devolução da caução: é melhor indicar diretamente o prazo no contrato (por exemplo, 15–30 dias após a entrega das chaves); não existe um prazo legal universal de «30 dias» no regime geral',
              'Dedução no IRS: 15% das despesas com renda de habitação permanente dentro do limite do ano em vigor — confirme o actual cap pelo art. 78.º-E CIRS em portaldasfinancas.gov.pt'
            ]}
          ]},
          { id: 'r2', title: 'Deveres do arrendatário', content: [
            { kind: 'checklist', items: [
              'Pagamento pontual da renda (normalmente até ao dia 8 do mês)',
              'Pagamento de serviços públicos (electricidade, gás, água — as faturas ficam diretamente em seu nome como arrendatário)',
              'Manutenção corrente (cosmética, substituição de lâmpadas, pequenas reparações)',
              'Conservação da casa — manter a limpeza, não causar danos',
              'Aviso ao proprietário com 120 dias de antecedência caso pretenda resolver o contrato (o prazo varia conforme o tipo)',
              'Cumprimento do regulamento do condomínio'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Situações de litígio',
      content: [
        { kind: 'checklist', items: [
          'Não devolução da caução — reclamação escrita, depois Julgado de Paz/tribunal ou (se as condições se aplicarem) injunção em matéria de arrendamento através do **Balcão do Arrendatário e do Senhorio (BAS)**',
          'Problemas com o estado técnico — exigência escrita por correio com aviso de receção, fotografias, prazos para reparação',
          'Ruído e vizinhos — queixa na Junta de Freguesia, polícia (112 para ruído noturno elevado)',
          'A atualização anual da renda num contrato em vigor não deve exceder o coeficiente oficial do INE, salvo fundamento legal especial. Litígio — oposição escrita, depois BAS/Julgado de Paz/tribunal/advogado',
          'Despejo antes do termo — apoio jurídico gratuito através da Ordem dos Advogados (se tiver baixos rendimentos) ou advogado privado',
          'DECO Proteste — defesa dos direitos dos consumidores, presta aconselhamento sobre contratos de arrendamento'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Passaporte / Cartão de Cidadão (CC)', note: 'ambas as partes' },
    { title: 'NIF', note: 'de ambas as partes — obrigatório no contrato' },
    { title: 'Comprovativo de rendimentos', note: 'recibos de vencimento / extratos / contrato' },
    { title: 'Fiador (se existir)', note: 'o seu Cartão de Cidadão (CC), NIF, comprovativo de rendimentos' },
    { title: 'IBAN', note: 'para débito automático da renda' }
  ],
  costs: [
    { label: 'Caução', amountEURMin: 500, amountEURMax: 3000, note: 'máx. 2 meses de renda pelo art. 1076 CC' },
    { label: 'Pré-pagamento da renda (máx.)', amountEURMin: 500, amountEURMax: 3000, note: 'máx. 2 meses pelo art. 1076 CC; mais do que isso — estruturar através de seguro de fiança' },
    { label: 'Seguro de fiança', amountEURMin: 300, amountEURMax: 1500, note: '5-7% da renda anual' },
    { label: 'Comissão do agente', amountEURMin: 0, amountEURMax: 2000, note: 'muitas vezes paga pelo proprietário' }
  ],
  sources: [
    { title: 'Lei 6/2006 — NRAU (Novo Regime do Arrendamento Urbano)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34498475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1076 (caução e antecipação de rendas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Mais Habitação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 76/2024 — Alojamento Local após Mais Habitação (Construir Portugal)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/76-2024-892301177', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 43/2024 — revoga arrendamento coercivo (CAE) de imóveis devolutos', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/43-2024-862870533', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Portal das Finanças — Registo de Contrato de Arrendamento', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Arrendar casa', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/arrendar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
