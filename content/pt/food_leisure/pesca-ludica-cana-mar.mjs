export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-ludica-cana-mar',
  categoryId: 'food_leisure',
  title: 'Pesca marítima a partir da costa — licença Pesca Lúdica à linha (DGRM)',
  tldr: 'A pesca marítima recreativa a partir da costa, de um pontão ou de rochas em Portugal exige uma licença Pesca Lúdica da DGRM. Pode obtê-la online em portal.dgrm.mm.gov.pt em 5 minutos. Prazos: 3 dias (cerca de 3 €), um mês (cerca de 10 €), um ano (cerca de 20 €), 3 anos (cerca de 50 €). Imprima ou guarde o código QR da licença: numa fiscalização da Polícia Marítima / GNR-SEPNA (serviço de protecção da natureza e do ambiente da guarda nacional), sem ela a coima começa nos 100 €. Respeite o limite diário (10 kg + 1 peixe, ou um peixe >10 kg), os tamanhos mínimos e o defeso por espécie.',
  tags: ['pesca', 'pesca desportiva', 'licença', 'mar', 'dgrm'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-needs-license',
      title: 'Quem precisa de licença e o que é a Pesca Lúdica 🎣',
      content: [
        { kind: 'paragraph', text: 'A pesca marítima recreativa em Portugal é regulada pela DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos). Por «mar» entende-se o Atlântico, o Tejo e o Sado até aos limites das águas marítimas, estuários e fozes.' },
        { kind: 'checklist', items: [
          'A licença é necessária para todas as pessoas a partir dos 16 anos — residentes e turistas',
          'Crianças com menos de 16 anos podem pescar sem licença sob supervisão de um adulto com licença',
          'Pesca Lúdica (pesca recreativa/desportiva, não destinada à venda)',
          'Qualquer tentativa de vender a captura = pesca comercial; é necessária outra licença e as regras são muito mais rigorosas',
          'Categorias de Pesca Lúdica: à linha (com cana/spinning a partir da costa ou de embarcação), apneia (caça submarina), apanha (apanha de moluscos, algas)',
          'Aqui trata-se da pesca à linha a partir da costa. Embarcação e pesca submarina ficam para guias separados'
        ] },
        { kind: 'warning', text: 'Em águas interiores (rios, albufeiras) a licença é diferente — é emitida pelo ICNF (Instituto da Conservação da Natureza e das Florestas), não pela DGRM. Não confunda: a licença marítima não é válida, por exemplo, no Mondego, no Douro acima da zona de maré, etc.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Pedido online — passo a passo',
      content: [
        { kind: 'paragraph', text: 'A forma mais rápida é através de portal.dgrm.mm.gov.pt. Precisa de NIF e Cartão de Cidadão ou passaporte + email. O pagamento online é feito por Multibanco ou MB WAY.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Aceda a portal.dgrm.mm.gov.pt',
            content: [
              { kind: 'paragraph', text: 'Secção Licenciamento → Pesca Lúdica. Também é possível sem conta: use uma das opções de autenticação.' },
              { kind: 'checklist', items: [
                'Autenticação por Chave Móvel Digital (CMD) — a forma mais rápida para residentes',
                'Ou através do Cartão de Cidadão com leitor de cartões',
                'Ou registo por NIF + email — se não tiver CMD/CC'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Escolha o tipo e a duração da licença',
            content: [
              { kind: 'checklist', items: [
                'Pesca à linha — a partir da costa (apeada: da costa, ponte, molhe): a escolha mais comum',
                'Duração: 3 dias (para viagens curtas), 1 mês, 1 ano, 3 anos',
                'A licença anual compensa se pescar pelo menos algumas vezes por época',
                'Não assinale o campo «Embarcação» — isso é para pesca de barco, abordada noutro guia'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Pague e guarde a licença',
            content: [
              { kind: 'paragraph', text: 'Após o pagamento, receberá um PDF com código QR e número. Não é obrigatório imprimir — pode mostrar no telemóvel durante uma fiscalização. Guarde em Files / Notes / Apple Wallet.' },
              { kind: 'warning', text: 'A licença está associada ao nome e ao NIF. Não pode ser cedida a outra pessoa — numa fiscalização será pedido o documento do titular.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-and-limits',
      title: 'Regras: onde, o que e quanto pode pescar',
      content: [
        { kind: 'paragraph', text: 'A licença é apenas o começo. Depois aplicam-se os tamanhos mínimos por espécie, o defeso e o limite diário.' },
        { kind: 'checklist', items: [
          'Limite diário: 10 kg de captura por pessoa por dia + 1 peixe, OU um peixe com peso >10 kg (se apanhar um assim — por hoje terminou)',
          'Tamanhos mínimos: robalo 36 cm, dourada 23 cm, sargo 25 cm, choco 10 cm, polvo 750 g, etc. — lista completa no site da DGRM',
          'Defeso: períodos de proibição por espécie. robalo — proibição parcial nos meses de inverno; sardinha — defeso no verão (as datas mudam anualmente)',
          'Espécies proibidas: santola em determinados períodos, algumas raias — durante todo o ano',
          'Métodos proibidos: tresmalho/redes — apenas para profissionais; explosivos, veneno, choque eléctrico — nunca',
          'Equipamento: até 2 canas em simultâneo, até 3 anzóis em cada uma',
          'Zonas proibidas: Reserva Natural das Berlengas, Parque Marinho Luiz Saldanha (Arrábida), parte do estuário do Tejo — parcial ou totalmente fechadas a pescadores recreativos',
          'Pesca nocturna: permitida na maioria das zonas, mas em alguns parques naturais — apenas de dia'
        ] },
        { kind: 'warning', text: 'Cada espécie tem as suas próprias regras. Antes da saída, verifique os dados actualizados em dgrm.pt para a espécie pretendida — as portarias anuais alteram limites. A aplicação «Pesca em Portugal» da DGRM guarda informação offline.' }
      ]
    },
    {
      id: 'where-to-fish',
      title: 'Bons locais para pescar a partir da costa',
      content: [
        { kind: 'paragraph', text: 'A costa atlântica oferece peixes diferentes consoante a região e a época. Alguns pontos versáteis perto de Lisboa e do Porto:' },
        { kind: 'checklist', items: [
          'Cabo da Roca / Cabo Raso (Sintra-Cascais): rochas, robalo e sargo; seguro com ondulação baixa',
          'Costa da Caparica: longa praia de areia, surf-casting para robalo e corvina',
          'Setúbal — estuário do Sado: pesca mista, dourada e robalo',
          'Sesimbra — porto e rochas: clássico para choco e sargo',
          'Cascais Marina — molhes exteriores: acesso fácil, possível com crianças',
          'Ericeira — rochas: pesca desportiva, cuidado com a maré',
          'Peniche — porto e Cabo Carvoeiro: capturas estáveis durante todo o ano',
          'Foz do Arelho / Lagoa de Óbidos: estuário, é necessária licença DGRM',
          'Algarve — lagunas da Ria Formosa: de Olhão a Tavira; algumas zonas ficam em parque natural com regras adicionais',
          'Porto — Foz do Douro e molhes a norte: sardinha e cavala sazonais'
        ] },
        { kind: 'warning', text: 'Segurança: não fique em rochas molhadas durante temporal. Todos os anos, em Portugal, dezenas de pessoas morrem durante a pesca no Atlântico. Siga a regra de «observar as ondas»: observe o local durante 15 minutos antes de se aproximar.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Quem fiscaliza e quais são as coimas',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima — principal fiscalização na costa e nos portos',
          'GNR-SEPNA — serviço de protecção da natureza e do ambiente da guarda nacional, patrulha parques naturais',
          'Capitania do Porto — em portos e estuários',
          'Vigilantes do ICNF — em parques naturais'
        ] },
        { kind: 'paragraph', text: 'Verificam: licença (PDF/QR), documento de identificação, captura (espécie, tamanho, peso), artes de pesca.' },
        { kind: 'checklist', items: [
          'Sem licença: 100–500 €, possível apreensão das artes de pesca e da captura',
          'Exceder o limite diário: 100–500 €, apreensão do excedente',
          'Peixe abaixo do tamanho mínimo: 100–250 € por cada caso',
          'Defeso: até 1 000 €, possível procedimento criminal em caso de reincidência',
          'Métodos proibidos (redes, explosivos, etc.): processo-crime',
          'Tentativa de vender a captura: é considerada pesca comercial sem licença — coimas de milhares de euros'
        ] },
        { kind: 'warning', text: 'Se apanhou um peixe abaixo do tamanho mínimo — devolva-o VIVO à água. Não pode ficar com ele «para não se estragar» — é uma infracção, e o inspector vê isso.' }
      ]
    },
    {
      id: 'gear-and-bait',
      title: 'Material, isco, onde comprar',
      content: [
        { kind: 'paragraph', text: 'Lojas de artigos de pesca existem em todas as grandes cidades. Cadeias: Decathlon, El Corte Inglés (em Lisboa e Porto), Trovo Pesca, A Náutica.' },
        { kind: 'checklist', items: [
          'Kit inicial para surf-casting: cana 3,6–4,2 m, carreto 6000+, linha 0,30–0,40 mm — 60–120 €',
          'Spinning para robalo: cana 2,4–3 m, carreto 3000–4000, entrançado 0,18 — 80–150 €',
          'Isco vivo (camarão, minhocas) — em mercados junto aos portos ou em lojas especializadas',
          'Isco artificial (jigs, paddle tails) — na Decathlon ou online',
          'Choco em Setúbal: jigs especiais para choco — 5–10 € por unidade',
          'Não é necessária licença para lançamentos «de treino» sem anzol, mas é discutível — é melhor tê-la'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Licença Pesca Lúdica — 3 dias', amountEUR: 3, note: 'Para viagens turísticas curtas' },
    { label: 'Licença — 1 mês', amountEUR: 10, note: 'Boa escolha para umas férias ou pesca sazonal' },
    { label: 'Licença — 1 ano', amountEUR: 20, note: 'A opção mais vantajosa se pescar 2+ vezes por época' },
    { label: 'Licença — 3 anos', amountEUR: 50, note: 'Para quem pesca regularmente' },
    { label: 'Kit básico para surf-casting', amountEURMin: 60, amountEURMax: 150, note: 'Cana + carreto + linha + anzóis + isco' },
    { label: 'Coima por falta de licença', amountEURMin: 100, amountEURMax: 500, note: 'Mais apreensão das artes de pesca e da captura' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica, licenças e regras', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portal de Licenciamento DGRM — pedido online', url: 'https://portal.dgrm.mm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — regime da Pesca Lúdica em águas marítimas', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Tamanhos mínimos por espécie — tabela da DGRM', url: 'https://www.dgrm.pt/pesca_cpt_especies', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Polícia Marítima — Autoridade Marítima Nacional', url: 'https://www.amn.pt/PM/Paginas/MissaoCompetencias.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
