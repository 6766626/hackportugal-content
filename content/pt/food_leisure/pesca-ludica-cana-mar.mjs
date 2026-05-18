export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-ludica-cana-mar',
  categoryId: 'food_leisure',
  title: 'Pesca marítima a partir da costa — licença Pesca Lúdica à linha (DGRM)',
  tldr: 'A pesca marítima recreativa a partir da costa, de molhes ou de rochas em Portugal exige uma licença de Pesca Lúdica da DGRM. Pode fazê-la online em portal.dgrm.mm.gov.pt em 5 minutos.\n\nDurações: 3 dias (~3 €), mês (~10 €), ano (~20 €), 3 anos (~50 €)\.\n\nImprima ou guarde o código QR da licença: numa fiscalização da Polícia Marítima / GNR‑SEPNA (serviço ambiental da guarda nacional), sem ela a coima começa nos 100 €. Respeite o limite diário (10 kg + 1 peixe, ou um peixe >10 kg), os tamanhos mínimos e o defeso por espécie.',
  tags: ['pesca', 'pesca', 'licença', 'mar', 'dgrm'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-needs-license',
      title: 'Quem precisa de licença e o que é a Pesca Lúdica 🎣',
      content: [
        { kind: 'paragraph', text: 'A pesca marítima recreativa em Portugal é regulada pela DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos). Por “mar” entendem-se o Atlântico, o Tejo e o Sado até aos limites das águas marítimas, estuários e fozes.' },
        { kind: 'checklist', items: [
          'A licença é necessária para todas as pessoas a partir dos 16 anos — residentes e turistas',
          'Crianças com menos de 16 anos podem pescar sem licença sob supervisão de um adulto com licença',
          'Pesca Lúdica (pesca recreativa/desportiva, não destinada à venda)',
          'Qualquer tentativa de vender a captura = pesca comercial, é necessária outra licença e aí as regras são muito mais rigorosas',
          'Categorias de Pesca Lúdica: à linha (com cana/spinning a partir da costa ou de barco), apneia (pesca submarina), apanha (recolha de moluscos, algas)',
          'Aqui falamos de à linha a partir da costa. Barco e pesca submarina ficam para guias separados'
        ] },
        { kind: 'warning', text: 'Em águas interiores (rios, albufeiras) a licença é outra — é emitida pelo ICNF (Instituto da Conservação da Natureza e das Florestas), não pela DGRM. Não confunda: a licença marítima não é válida, por exemplo, no Mondego, no Douro acima da zona de maré, etc.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Pedido online — passo a passo',
      content: [
        { kind: 'paragraph', text: 'A forma mais rápida é através de portal.dgrm.mm.gov.pt. Precisa de NIF (número fiscal) e Cartão de Cidadão ou passaporte + email. Pagamento online através de Multibanco (sistema de pagamento/caixas automáticas) ou MB WAY (carteira móvel).' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Entre em portal.dgrm.mm.gov.pt',
            content: [
              { kind: 'paragraph', text: 'Secção Licenciamento → Pesca Lúdica. Também é possível sem conta: use uma das opções de autenticação.' },
              { kind: 'checklist', items: [
                'Autenticação através de Chave Móvel Digital (CMD) — a forma mais rápida para residentes',
                'Ou através do Cartão de Cidadão com leitor de cartões',
                'Ou registo com NIF + email — se não tiver CMD/CC'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Escolha o tipo e a duração da licença',
            content: [
              { kind: 'checklist', items: [
                'Pesca à linha — a partir da costa (apeada: da costa, ponte, molhe): a escolha mais frequente',
                'Duração: 3 dias (para viagens curtas), 1 mês, 1 ano, 3 anos',
                'A licença anual compensa se pescar pelo menos algumas vezes por época',
                'Não assinale o campo “Embarcação” — é para barco, guia separado'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Pague e guarde a licença',
            content: [
              { kind: 'paragraph', text: 'Depois do pagamento receberá um PDF com código QR e número. Não é obrigatório imprimir — pode mostrá-lo no telemóvel durante uma fiscalização. Guarde em Files / Notes / Apple Wallet.' },
              { kind: 'warning', text: 'A licença está associada ao nome e ao NIF. Não pode ser cedida a outra pessoa — numa fiscalização pedirão o documento do titular.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-and-limits',
      title: 'Regras: onde, o quê e quanto pescar',
      content: [
        { kind: 'paragraph', text: 'A licença é apenas o começo. Depois aplicam-se os tamanhos mínimos por espécie, o defeso e o limite diário.' },
        { kind: 'checklist', items: [
          'Limite diário: 10 kg de captura por pessoa por dia + 1 peixe, OU um peixe com peso >10 kg (se apanhou esse, por hoje terminou)',
          'Tamanhos mínimos: robalo 36 cm, dourada 23 cm, sargo 25 cm, choco 10 cm, polvo 750 g, etc. — lista completa no site da DGRM',
          'Defeso: períodos de proibição por espécie. robalo — proibição parcial nos meses de inverno, sardinha — defeso de verão (as datas mudam anualmente)',
          'Espécies proibidas: santola em determinados períodos, algumas raias — todo o ano',
          'Métodos proibidos: tresmalho/redes — apenas para profissionais; explosivos, veneno, choque elétrico — nunca',
          'Equipamento: até 2 canas em simultâneo, até 3 anzóis em cada uma',
          'Zonas proibidas: Reserva Natural das Berlengas, Parque Marinho Luiz Saldanha (Arrábida), parte do estuário do Tejo — parcial ou totalmente fechadas a amadores',
          'Pesca noturna: permitida na maioria das zonas, mas em alguns parques naturais — apenas durante o dia'
        ] },
        { kind: 'warning', text: 'Cada espécie tem as suas regras. Antes da viagem, verifique os dados atualizados em dgrm.pt para a espécie pretendida — as portarias anuais alteram limites. A aplicação “Pesca em Portugal” da DGRM guarda a informação offline.' }
      ]
    },
    {
      id: 'where-to-fish',
      title: 'Bons locais para pescar a partir da costa',
      content: [
        { kind: 'paragraph', text: 'A costa atlântica oferece peixes diferentes consoante a região e a época. Alguns pontos versáteis perto de Lisboa e do Porto:' },
        { kind: 'checklist', items: [
          'Cabo da Roca / Cabo Raso (Sintra-Cascais): rochas, robalo e sargo; seguro com ondulação baixa',
          'Costa da Caparica: praia arenosa extensa, surf‑casting ao robalo e à corvina',
          'Setúbal — estuário do Sado: pesca mista, dourada e robalo',
          'Sesimbra — porto e rochas: clássico para choco e sargo',
          'Cascais Marina — molhes exteriores: acesso fácil, dá para ir com crianças',
          'Ericeira — rochas: pesca desportiva, cuidado com a maré',
          'Peniche — porto e Cabo Carvoeiro: capturas estáveis durante todo o ano',
          'Foz do Arelho / Lagoa de Óbidos: estuário, é necessária licença DGRM',
          'Algarve — lagunas da Ria Formosa: de Olhão a Tavira; parte das zonas fica em parque natural com regras adicionais',
          'Porto — Foz do Douro e molhes norte: sardinha e cavala sazonais'
        ] },
        { kind: 'warning', text: 'Segurança: não fique em rochas molhadas durante temporal. Todos os anos, em Portugal, dezenas de pessoas morrem durante a pesca no Atlântico. Siga a regra “observe as ondas”: observe o local durante 15 minutos antes de subir.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Quem fiscaliza e quais são as coimas',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima — principal fiscalização na costa e nos portos',
          'GNR‑SEPNA — serviço ambiental da guarda nacional, patrulha parques naturais',
          'Capitania do Porto — nos portos e estuários',
          'Vigilantes do ICNF — nos parques naturais'
        ] },
        { kind: 'paragraph', text: 'Fiscalizam: licença (PDF/QR), documento de identificação, captura (espécie, tamanho, peso), artes de pesca.' },
        { kind: 'checklist', items: [
          'Sem licença: 100–500 €, possível apreensão das artes de pesca e da captura',
          'Exceder o limite diário: 100–500 €, apreensão do excedente',
          'Peixe abaixo do tamanho mínimo: 100–250 € por cada ocorrência',
          'Defeso: até 1 000 €, possível procedimento criminal em caso de reincidência',
          'Métodos proibidos (redes, explosivos, etc.): processo-crime',
          'Tentativa de vender a captura: é considerada pesca comercial sem licença — coimas de milhares de euros'
        ] },
        { kind: 'warning', text: 'Se apanhou um peixe abaixo do tamanho mínimo — devolva-o VIVO à água. Não pode ficar com ele “para não se estragar” — é uma infração, e o inspetor vê isso.' }
      ]
    },
    {
      id: 'gear-and-bait',
      title: 'Equipamento, isco, onde comprar',
      content: [
        { kind: 'paragraph', text: 'Há lojas de artigos de pesca em todas as grandes cidades. Cadeias: Decathlon, El Corte Inglés (em Lisboa e Porto), Trovo Pesca, A Náutica.' },
        { kind: 'checklist', items: [
          'Kit inicial para surf‑casting: cana 3.6–4.2 m, carreto 6000+, linha 0.30–0.40 mm — 60–120 €',
          'Spinning para robalo: cana 2.4–3 m, carreto 3000–4000, entrançado 0.18 — 80–150 €',
          'Isco vivo (camarão, minhocas) — nos mercados junto aos portos ou em lojas especializadas',
          'Amostras artificiais (jigs, paddle tails) — na Decathlon ou online',
          'Choco em Setúbal: jigs especiais para choco — 5–10 € por unidade',
          'Não é necessária licença para lançamentos “de treino” sem anzol, mas é discutível — melhor ter'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Licença Pesca Lúdica — 3 dias', amountEUR: 3, note: 'Para viagens turísticas curtas' },
    { label: 'Licença — 1 mês', amountEUR: 10, note: 'Boa opção para umas férias ou pesca sazonal' },
    { label: 'Licença — 1 ano', amountEUR: 20, note: 'A opção mais vantajosa se pescar 2+ vezes por época' },
    { label: 'Licença — 3 anos', amountEUR: 50, note: 'Para quem pesca regularmente' },
    { label: 'Kit básico para surfcasting', amountEURMin: 60, amountEURMax: 150, note: 'Cana + carreto + linha + anzóis + isco' },
    { label: 'Coima por falta de licença', amountEURMin: 100, amountEURMax: 500, note: 'Mais apreensão das artes de pesca e da captura' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica, licenças e regras', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portal de Licenciamento DGRM — pedido online', url: 'https://portal.dgrm.mm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — regime da Pesca Lúdica em águas marítimas', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Tamanhos mínimos por espécie — tabela da DGRM', url: 'https://www.dgrm.pt/pesca_cpt_especies', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Polícia Marítima — Autoridade Marítima Nacional', url: 'https://www.amn.pt/PM/Paginas/MissaoCompetencias.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
