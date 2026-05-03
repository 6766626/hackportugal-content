export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-ludica-cana-mar',
  categoryId: 'food_leisure',
  title: 'Pesca marítima de costa — licença Pesca Lúdica à linha (DGRM)',
  tldr: 'A pesca marítima recreativa a partir da costa, pontões ou rochedos em Portugal requer a licença Pesca Lúdica (pesca recreativa) da DGRM. Faz-se online em portal.dgrm.mm.gov.pt em 5 minutos. Validades: 3 dias (~3 €), 1 mês (~10 €), 1 ano (~20 €), 3 anos (~50 €). Imprima ou guarde o código QR da licença: na fiscalização da Polícia Marítima / GNR‑SEPNA sem ela a coima começa nos 100 €. Respeite o limite diário (10 kg + 1 peixe, ou um peixe >10 kg), tamanhos mínimos e defeso (época de interdição) por espécie.',
  tags: ['pesca', 'pesca lúdica', 'licença', 'mar', 'dgrm'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-needs-license',
      title: 'Quem precisa de licença e o que é a Pesca Lúdica 🎣',
      content: [
        { kind: 'paragraph', text: 'A pesca marítima recreativa em Portugal é regulada pela DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos). Por «mar» entende-se o Atlântico, o Tejo e o Sado até aos limites das águas marítimas, estuários e barras.' },
        { kind: 'checklist', items: [
          'A licença é obrigatória para todos a partir dos 16 anos — tanto residentes como turistas',
          'Menores de 16 anos podem pescar sem licença sob supervisão de um adulto com licença',
          'Pesca Lúdica (recreativa/desportiva, não para venda)',
          'Qualquer tentativa de vender o pescado = pesca comercial; exige outra licença e as regras são muito mais rígidas',
          'Categorias de Pesca Lúdica: à linha (com cana/spinning da costa ou de barco), apneia (pesca submarina), apanha (recolha de moluscos, algas)',
          'Aqui tratamos de à linha a partir da costa. Para barco e submarina — em guias separados'
        ] },
        { kind: 'warning', text: 'Em águas doces (rios, albufeiras) a licença é outra — emitida pelo ICNF (Instituto da Conservação da Natureza e das Florestas), não pela DGRM. Não confunda: a licença marítima não é válida, por exemplo, no Mondego, no Douro acima da zona de maré, etc.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Pedido online — passo a passo',
      content: [
        { kind: 'paragraph', text: 'A forma mais rápida é através de portal.dgrm.mm.gov.pt. São necessários NIF e Cartão de Cidadão ou passaporte + email. Pagamento online por Multibanco ou MB WAY.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Aceda a portal.dgrm.mm.gov.pt',
            content: [
              { kind: 'paragraph', text: 'Secção Licenciamento → Pesca Lúdica. Pode ser sem conta: use um dos métodos de autenticação.' },
              { kind: 'checklist', items: [
                'Autenticação através da Chave Móvel Digital (CMD) — o mais rápido para residentes',
                'Ou com Cartão de Cidadão com leitor de cartões',
                'Ou registo com NIF + email — se não tiver CMD/CC'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Escolha o tipo e a validade da licença',
            content: [
              { kind: 'checklist', items: [
                'Pesca à linha — de costa (apeada: da praia, ponte, molhe): a opção mais comum',
                'Validade: 3 dias (para viagens curtas), 1 mês, 1 ano, 3 anos',
                'O anual é mais vantajoso se pescar pelo menos algumas vezes por época',
                'Não assinale o campo «Embarcação» — é para barco, guia à parte'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Pague e guarde a licença',
            content: [
              { kind: 'paragraph', text: 'Após o pagamento recebe um PDF com código QR e número. Não é obrigatório imprimir — pode mostrar no telemóvel na fiscalização. Guarde em Ficheiros / Notas / Apple Wallet.' },
              { kind: 'warning', text: 'A licença está associada ao nome e ao NIF. Não pode ser cedida a outra pessoa — na fiscalização será pedido o documento do titular.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-and-limits',
      title: 'Regras: onde, o quê e quanto pescar',
      content: [
        { kind: 'paragraph', text: 'A licença é apenas o início. Aplicam-se tamanhos mínimos por espécie, defeso (época de interdição) e limite diário.' },
        { kind: 'checklist', items: [
          'Limite diário: 10 kg de pescado por pessoa/dia + 1 exemplar, OU um único exemplar com peso >10 kg (se apanhar um destes — termina por hoje)',
          'Tamanhos mínimos: robalo 36 cm, dourada 23 cm, sargo 25 cm, choco 10 cm, polvo 750 g, etc. — lista completa no site da DGRM',
          'Defeso: períodos de interdição por espécie. robalo — interdição parcial nos meses de inverno; sardinha — defeso de verão (datas mudam anualmente)',
          'Espécies proibidas: santola em determinados períodos; algumas raias — todo o ano',
          'Métodos proibidos: tresmalho/redes — só para profissionais; explosivos, veneno, eletrochoque — nunca',
          'Equipamento: até 2 canas em simultâneo, até 3 anzóis em cada uma',
          'Zonas interditas: Reserva Natural das Berlengas, Parque Marinho Luiz Saldanha (Arrábida), parte da foz do Tejo — parcial ou totalmente fechadas a recreio',
          'Pesca noturna: permitida na maioria das zonas, mas nalguns parques naturais — apenas de dia'
        ] },
        { kind: 'warning', text: 'Cada espécie tem regras próprias. Antes da saída, verifique os dados atualizados em dgrm.pt para a espécie pretendida — portarias anuais alteram limites. A aplicação «Pesca em Portugal» da DGRM guarda a informação offline.' }
      ]
    },
    {
      id: 'where-to-fish',
      title: 'Bons locais para pescar da costa',
      content: [
        { kind: 'paragraph', text: 'A costa atlântica oferece espécies diferentes consoante a região e a época. Alguns pontos universais perto de Lisboa e do Porto:' },
        { kind: 'checklist', items: [
          'Cabo da Roca / Cabo Raso (Sintra-Cascais): rochedos, robalo e sargo; seguro com ondulação baixa',
          'Costa da Caparica: longo areal, surf‑casting para robalo e corvina',
          'Setúbal — estuário do Sado: pesca mista, dourada e robalo',
          'Sesimbra — porto e arribas: clássico para choco e sargo',
          'Marina de Cascais — molhes exteriores: acesso fácil, dá para ir com crianças',
          'Ericeira — rochedos: pesca desportiva, cuidado com a maré',
          'Peniche — porto e Cabo Carvoeiro: capturas consistentes todo o ano',
          'Foz do Arelho / Lagoa de Óbidos: estuário, necessita de licença da DGRM',
          'Algarve — lagunas da Ria Formosa: de Olhão a Tavira; algumas zonas em parque natural com regras adicionais',
          'Porto — Foz do Douro e molhes do norte: sardinha e cavala sazonais'
        ] },
        { kind: 'warning', text: 'Segurança: não fique em rochas molhadas com temporal. Todos os anos em Portugal morrem dezenas de pessoas durante a pesca no Atlântico. Siga a regra «olhe para as ondas»: observe o local 15 minutos antes de subir.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Quem fiscaliza e quais as coimas',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima — fiscalização principal na costa e nos portos',
          'GNR‑SEPNA — unidade ambiental da Guarda Nacional Republicana, patrulha parques naturais',
          'Capitania do Porto — nos portos e nas barras',
          'Vigilantes do ICNF — em parques naturais'
        ] },
        { kind: 'paragraph', text: 'Verificam: licença (PDF/código QR), documento de identificação, pescado (espécie, tamanho, peso), apetrechos.' },
        { kind: 'checklist', items: [
          'Sem licença: 100–500 €, possível apreensão de apetrechos e pescado',
          'Exceder o limite diário: 100–500 €, apreensão do excedente',
          'Peixe abaixo do tamanho mínimo: 100–250 € por ocorrência',
          'Defeso (época de interdição): até 1 000 €, podendo haver procedimento criminal em caso de reincidência',
          'Métodos proibidos (redes, explosivos, etc.): processo criminal',
          'Tentativa de vender o pescado: considerada pesca comercial sem licença — coimas de milhares de euros'
        ] },
        { kind: 'warning', text: 'Se apanhar peixe abaixo do tamanho mínimo — devolva-o VIVO à água. «Para não se estragar» levar não é permitido — é infração, o inspetor repara.' }
      ]
    },
    {
      id: 'gear-and-bait',
      title: 'Aparelhos, isco, onde comprar',
      content: [
        { kind: 'paragraph', text: 'Lojas de artigos de pesca existem em todas as cidades grandes. Cadeias: Decathlon, El Corte Inglés (em Lisboa e Porto), Trovo Pesca, A Náutica.' },
        { kind: 'checklist', items: [
          'Conjunto inicial para surf‑casting: cana 3,6–4,2 m, carreto 6000+, linha 0,30–0,40 mm — 60–120 €',
          'Spinning para robalo: cana 2,4–3 m, carreto 3000–4000, linha trançada 0,18 — 80–150 €',
          'Isca viva (camarão, minhocas) — nos mercados junto aos portos ou em lojas especializadas',
          'Isca artificial (jigs, paddle tails) — na Decathlon ou online',
          'Choco em Setúbal: jigs específicos para choco — 5–10 € cada',
          'Não é necessária licença para lançamentos «de treino» sem anzol, mas é discutível — melhor ter'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Licença Pesca Lúdica — 3 dias', amountEUR: 3, note: 'Para viagens turísticas curtas' },
    { label: 'Licença — 1 mês', amountEUR: 10, note: 'Boa opção para umas férias ou pesca sazonal' },
    { label: 'Licença — 1 ano', amountEUR: 20, note: 'Mais vantajosa se pescar 2+ vezes por época' },
    { label: 'Licença — 3 anos', amountEUR: 50, note: 'Para quem pesca regularmente' },
    { label: 'Conjunto básico para surf‑casting', amountEURMin: 60, amountEURMax: 150, note: 'Cana + carreto + linha + anzóis + isco' },
    { label: 'Coima por pescar sem licença', amountEURMin: 100, amountEURMax: 500, note: 'Mais apreensão de apetrechos e pescado' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica, licenças e regras', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portal de Licenciamento DGRM — pedido online', url: 'https://portal.dgrm.mm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — regime da Pesca Lúdica em águas marítimas', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Tamanhos mínimos por espécie — tabela DGRM', url: 'https://www.dgrm.pt/documents/20143/0/Tamanhos+m%C3%ADnimos.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Polícia Marítima — Autoridade Marítima Nacional', url: 'https://www.amn.pt/PM/Paginas/PoliciaMaritima.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
