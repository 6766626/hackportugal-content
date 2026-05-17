export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-embarcada-mar',
  categoryId: 'food_leisure',
  title: 'Pesca no mar a partir de barco — licença Pesca Lúdica Embarcada',
  tldr: 'Pescar a partir de qualquer barco no mar (próprio, alugado ou charter) exige a modalidade embarcada da licença Pesca Lúdica (pesca lúdica — pesca marítima recreativa). É mais cara do que a pesca a partir da costa: ~10 € por 3 dias, ~20 € por mês, ~40 € por ano. O barco deve estar registado na Capitania, e cada pescador a bordo deve ter a sua própria licença. O limite diário para todo o barco é mais elevado: 15 kg + 1 peixe de grande porte. Para um charter, confirme que o capitão tem uma licença profissional "Marítimo‑Turística"; para os passageiros basta a embarcada normal.',
  tags: ['pesca', 'pesca', 'lancha', 'embarcação', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-needs-it',
      title: 'Quando é necessária a modalidade embarcada — casos concretos',
      content: [
        { kind: 'checklist', items: [
          'Barco a motor/veleiro próprio: tanto o capitão como cada passageiro que esteja a pescar precisam de uma licença separada de pesca marítima recreativa com a modalidade "Embarcada"',
          'Aluguer de barco sem capitão (charter sem skipper): também é necessária uma licença com a modalidade embarcada',
          'Charter com capitão (sea fishing): o passageiro precisa de embarcada — muitas vezes está incluída no preço ou é proposta a compra no local',
          'Barco turístico com guia (Marítimo‑Turística): a empresa pode ter uma licença colectiva, mas é mais prático ter a sua',
          'Caiaque/SUP com cana de pesca: é considerado barco → precisa de embarcada',
          'Paddle surf com lançamento na rebentação: caso-limite, é mais seguro ter embarcada'
        ] },
        { kind: 'warning', text: 'Os charters em Sesimbra, Setúbal, Cascais e no Algarve dizem frequentemente «temos tudo incluído», mas, em caso de fiscalização, cada pescador responde individualmente. Pergunte ANTES de pagar o passeio: «A licença está incluída ou tenho de comprar?». Se o charter não lhe entregar o PDF da licença — compre a sua antecipadamente.' }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'Como comprar — diferenças face à licença de costa',
      content: [
        { kind: 'paragraph', text: 'A compra é feita através do portal da DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos): portal.dgrm.mm.gov.pt. No pedido, seleccione a opção «Embarcação» (a partir de barco). O preço é mais alto:' },
        { kind: 'checklist', items: [
          '3 dias (embarcada): ~10 € (para comparação: a partir da costa — ~3 €; modalidade apeada)',
          '1 mês (embarcada): ~20 €',
          '1 ano (embarcada): ~40 €',
          '3 anos (embarcada): ~100 €',
          'Pode comprar o combinado «à linha apeada + embarcada» — por vezes compensa face a duas licenças separadas'
        ] },
        { kind: 'paragraph', text: 'A licença a partir de barco (embarcada) também é válida para pesca a partir da costa; o inverso não: apenas a licença de costa (apeada) não cobre a pesca a partir de barco.' }
      ]
    },
    {
      id: 'boat-rules',
      title: 'O que o próprio barco deve ter',
      content: [
        { kind: 'paragraph', text: 'Se o barco for seu ou estiver alugado sem capitão — deve estar registado na capitania do porto.' },
        { kind: 'checklist', items: [
          'Registo da embarcação (livrete) — tratado na capitania do porto',
          'Carta de navegador — exigida a partir de determinados comprimentos/potências da embarcação',
          'Coletes salva-vidas em número igual ao das pessoas a bordo — obrigatório',
          'Comunicações rádio VHF — para embarcações maiores e saídas mais longe no mar',
          'Foguetes de sinalização, âncora, bomba — para veleiros/barcos a motor de classes superiores a Local',
          'Extintor — obrigatório se houver motor'
        ] },
        { kind: 'checklist', items: [
          'A classe de navegação (categoria de navegação) determina a distância a que pode afastar-se da costa',
          '«Local» — até 2 milhas da costa, requisitos mínimos',
          '«Costeira» — até 12 milhas',
          '«Largo» — sem limites de distância, requisitos exigentes',
          'Para pesca recreativa, normalmente basta a classe Local e um barco a motor até ~6 m'
        ] },
        { kind: 'warning', text: 'Sem registo do barco, pescar a partir dele é uma dupla infracção: a embarcação é ilegal e a pesca também. A Polícia Marítima pode confiscar a embarcação e aplicar coimas de milhares de euros.' }
      ]
    },
    {
      id: 'limits',
      title: 'Limites e regras no barco',
      content: [
        { kind: 'checklist', items: [
          'Limite diário para o barco: 15 kg no total para todos + 1 peixe de grande porte',
          'Tamanhos mínimos — os mesmos que na pesca a partir da costa',
          'Defeso (período de interdição por espécie) — as mesmas épocas',
          'Métodos proibidos: arrasto, redes, explosivos, canas eléctricas — nunca',
          'Métodos permitidos: cana com bóia/de fundo, spinning, jig vertical (jigging), corrico (trolling)',
          'No máximo 2 canas por pessoa em simultâneo',
          'Plotter GPS com marcações de locais de pesca — normal para uso pessoal; não é permitido vender esses dados'
        ] },
        { kind: 'paragraph', text: 'O atum grande é uma história à parte. O atum-rabilho do Atlântico (bluefin tuna, atum‑rabilho) é capturado ao abrigo de quotas especiais e exige uma licença profissional ou participação num campeonato autorizado. Não é permitido capturá-lo e ficar com ele ao abrigo de uma licença recreativa.' }
      ]
    },
    {
      id: 'good-spots-charters',
      title: 'Charters e bons locais',
      content: [
        { kind: 'paragraph', text: 'Se não tiver barco próprio, o mais simples é ir num charter. Preços aproximados por dia para um barco de 4–6 pessoas:' },
        { kind: 'checklist', items: [
          'Sesimbra: pesca de fundo ao pargo e dourada, saída de 6–8 horas, ~250–400 € por barco',
          'Cascais: spinning ao robalo e atum, dia inteiro ~350–500 €',
          'Setúbal: pesca ao choco no Inverno, peixe-rei no Verão, ~200–300 €',
          'Algarve (Vilamoura, Albufeira): pesca grossa oceânica (big game) — marlin e tuna, ~400–700 €',
          'Açores (Faial, Pico): pesca de profundidade ao blue marlin, ~600–1 200 € — nível mundial',
          'Madeira: época do marlin de Junho a Outubro, ~500–900 €',
          'Reservas: Booking.com ou plataformas especializadas como a FishingBooker'
        ] },
        { kind: 'warning', text: 'Antes do charter, confirme: 1) cada pescador tem a sua própria licença, 2) o seguro marítimo está tratado, 3) tome comprimidos para o enjoo 1 hora antes da saída (Cinarizina ou Vertix). O Atlântico tem frequentemente ondulação, mesmo no Verão.' }
      ]
    }
  ],
  costs: [
    { label: 'Licença Pesca Lúdica Embarcada — 3 dias', amountEUR: 10 },
    { label: 'Licença — 1 mês', amountEUR: 20 },
    { label: 'Licença — 1 ano', amountEUR: 40 },
    { label: 'Charter para 4–6 pessoas, dia', amountEURMin: 200, amountEURMax: 700, note: 'Depende da região e do tipo de pesca' },
    { label: 'Charter para pesca grossa oceânica (big game) (Algarve/Açores)', amountEURMin: 400, amountEURMax: 1200, note: 'Marlin, tuna' },
    { label: 'Registo de barco até 7 m', amountEURMin: 50, amountEURMax: 200, note: 'Através da capitania do porto, depende da classe' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica Embarcada', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Autoridade Marítima Nacional — registo de embarcações', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICCAT — quotas de atum rabilho', url: 'https://www.iccat.int', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
