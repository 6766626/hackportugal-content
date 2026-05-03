export default {
  editorialVoice: 'hackportugal',
  id: 'vinho-caseiro-particular',
  categoryId: 'food_leisure',
  title: 'Vinho caseiro próprio — o que é permitido sem licença',
  tldr: 'Se tem uvas na sua propriedade, pode fazer vinho para consumo próprio sem qualquer licença. Limite — 100 l por ano por família sem declaração (lei do IVDP). Acima de 100 l — declaração obrigatória no IVV (Instituto da Vinha e do Vinho), mesmo sem venda. Vender é um negócio fortemente regulado: exige certificado de qualidade, certificações IGP/DOC, IVA, registo no IVV. Para quintas com vinha, vale a pena verificar se o terreno está numa região DOC — isto influencia as castas e o estilo permitidos. Misturar com vinhos comuns e vender como DOC sem certificação = multa pesada.',
  tags: ['vinho', 'vinho', 'ivdp', 'doc', 'caseiro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'limits',
      title: 'Limites para consumo pessoal',
      content: [
        { kind: 'paragraph', text: 'Portugal é o quinto país produtor de vinho do mundo. A lei trata a produção doméstica de forma relativamente branda, mas há regras claras:' },
        { kind: 'checklist', items: [
          'Até 100 l/ano por família: NENHUMA declaração. Pode fazer e beber, oferecer aos vizinhos',
          '100-1000 l/ano: declaração no IVV (Instituto da Vinha e do Vinho) obrigatória, mesmo sem venda. A declaração é gratuita, mas obrigatória',
          '1000+ l/ano: já é produção comercial. Registo da vinha, atestado, amostras regulares',
          'Os limites contam-se por «família» (agregado familiar), não por cada adulto'
        ] },
        { kind: 'paragraph', text: 'Isto aplica-se ao «vinho de mesa» — o comum. Para outros produtos:' },
        { kind: 'checklist', items: [
          'Aguardente (brandy, aguardente de uva): requer licenciamento alfandegário (licença aduaneira), mesmo em pequeno volume',
          'Vinagre: para uso pessoal — não é regulado',
          'Licor (caseiro) — sem adição de açúcar/álcool: até 30 l/ano sem declaração'
        ] }
      ]
    },
    {
      id: 'doc-regions',
      title: 'Regiões DOC e a vinha no seu terreno',
      content: [
        { kind: 'paragraph', text: 'Se o seu terreno estiver numa das regiões DOC (Denominação de Origem Controlada), tem escolha: usar certificação ou não. Sem certificação, o seu vinho é «vinho regional» ou «vinho» (categoria geral).' },
        { kind: 'checklist', items: [
          'Douro DOC: clássico Vinho do Porto e vinhos secos. Castas: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca',
          'Vinho Verde DOC: vinhos jovens e leves. Castas: Loureiro, Trajadura, Alvarinho',
          'Alentejo DOC: tintos encorpados. Aragonez, Trincadeira, Castelão',
          'Dão DOC: tintos e brancos elegantes. Touriga Nacional, Encruzado, Jaen',
          'Bairrada DOC: clássicos Baga, Maria Gomes',
          'Madeira DOC: vinhos de sobremesa. Sercial, Verdelho, Bual, Malvasia',
          'Lisboa: «vinho regional» — entre DOC e a categoria geral. Grande flexibilidade',
          'Algarve: 4 regiões DOC + região «vinho regional»',
          'Açores: solos vulcânicos, castas específicas (Verdelho, Arinto dos Açores)'
        ] },
        { kind: 'paragraph', text: 'Para fazer um vinho DOC — é necessária certificação na Comissão Vitivinícola Regional (CVR) da região correspondente. Mínimo: registo da vinha no IVV + análises do vinho + prova pela comissão.' }
      ]
    },
    {
      id: 'making',
      title: 'Processo — o que é necessário',
      content: [
        { kind: 'paragraph', text: 'Conjunto básico para produção familiar até 100 l:' },
        { kind: 'checklist', items: [
          'Uvas: 100 kg = ~70-75 l de vinho',
          'Esmagador: manual ~150 € ou aluguer desde 30 €/dia',
          'Cuba de fermentação: depósito plástico com tampa 100 l — 50-100 €',
          'Sulfito (metabissulfito de potássio): obrigatório, contra bactérias. ~10 € por época',
          'Leveduras enológicas: ~5 €/saqueta para 100 l',
          'Hidrómetro (densímetro) + refratómetro: medir o açúcar. ~30-50 €',
          'Garrafas de vidro escuro 0,75 l: 0,5-1 € cada',
          'Rolhas naturais (cortiça do Algarve): 0,20-0,50 € cada',
          'Cápsulas e rótulos: adicional para estética',
          'Barrica (se quiser): carvalho 25-50 l = 200-500 €. Para tintos, estágio mais longo'
        ] },
        { kind: 'paragraph', text: 'Processo de forma simplificada:' },
        { kind: 'checklist', items: [
          'Vindima: meados de setembro — fim de outubro, consoante a região',
          'Esmagar + desengace (engaço)',
          'Sulfitar de imediato',
          'Leveduras ao fim de 24 horas',
          'Fermentação: 7-15 dias a ~22-26°C',
          'Trasfega para depósito limpo: separar das borras',
          'Encher até ao topo, tampa bem vedada',
          'Estágio: 3-12 meses, consoante o estilo',
          'Engarrafamento',
          'Maturação em garrafa: mínimo 6-12 meses para tintos'
        ] }
      ]
    },
    {
      id: 'selling',
      title: 'Se quiser vender — exigências sérias',
      content: [
        { kind: 'paragraph', text: 'Comércio é outra liga. Além do kit empresarial padrão, precisa de:' },
        { kind: 'checklist', items: [
          'Registo da vinha no IVV (RVCC — Registo Vitivinícola)',
          'Declarações de vindima e produção em cada campanha',
          'Análises do vinho: título alcoométrico, sulfitos, acidez, microrganismos',
          'Laboratório acreditado pelo IPAC: ~80-200 € por análise completa',
          'Rótulos segundo o EU 2019/787: tipo, região, % alcoólica, volume, NIF, país, alergénios (sulfitos, ovos)',
          'Código de lote (lote): obrigatório',
          'Atividade aberta nas Finanças: código CIRS 1102 — produção de vinhos',
          'IVA: 13% reduzido para vinho de mesa, 23% para premium',
          'Venda em mercados: licença da Câmara, imposto especial da AT (imposto sobre álcool) ~0,10 €/l',
          'Venda online: a ASAE fiscaliza, registo obrigatório do vendedor',
          'Exportação para fora da UE: licença da Direção-Geral das Alfândegas (alfândega)'
        ] }
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos e festivais',
      content: [
        { kind: 'checklist', items: [
          'Se tem 5-10 videiras no quintal — dão logo 50-70 l de vinho por época (já é reserva familiar)',
          'A casta «vinhão» (região Vinho Verde) — a mais «de quintal»: fácil de fazer, equipamento acessível',
          'Agricultores locais (vinicultores) muitas vezes aceitam azeitonas/uvas dos vizinhos em troca de percentagem ou dinheiro',
          'Adega cooperativa — cooperativa local de produtores de vinho, pode receber as suas uvas e fazer um vinho comum',
          'Festas regionais: Festa das Vindimas em Palmela (setembro), Vinho Verde Festival no Noroeste, Festa do Vinho na Madeira',
          'Cursos para entusiastas: IVDP no Porto, Universidade de Évora, ESAS Castelo Branco',
          'Livros: «Manual do Vinho Caseiro» (em português), muitos canais no YouTube'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Multas por infrações',
      content: [
        { kind: 'checklist', items: [
          'Produção acima de 100 l sem declaração no IVV: 100-1000 €',
          'Venda sem registo: 500-5000 €',
          'Uso do nome DOC sem certificação: 1500-25000 €',
          'Falsificação do nome regional: crime',
          'Aguardente sem licença aduaneira: 500-25000 € + apreensão',
          'Não pagar imposto especial sobre álcool na venda: 1000-50000 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Uvas (se comprar)', amountEURMin: 0.50, amountEURMax: 2, note: 'Por kg; para 100 l — 100-150 kg' },
    { label: 'Kit inicial (cuba, leveduras, sulfito)', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Esmagador manual', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Garrafas 0,75 l para 100 l de vinho', amountEURMin: 70, amountEURMax: 130, note: '~130 garrafas' },
    { label: 'Barrica de carvalho 25-50 l', amountEURMin: 200, amountEURMax: 500, note: 'Opcional para tinto' },
    { label: 'Análise para comércio', amountEURMin: 80, amountEURMax: 200, note: 'Laboratorial' },
    { label: 'Certificação DOC', amountEURMin: 200, amountEURMax: 500, note: 'Via CVR' }
  ],
  sources: [
    { title: 'IVV — Instituto da Vinha e do Vinho', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 219/2008 — regime jurídico do setor do vinho', url: 'https://dre.pt/dre/detalhe/decreto-lei/219-2008-441478', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — apoio à viticultura', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
