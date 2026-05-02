export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-divida-onus-verificar',
  categoryId: 'housing_buy',
  title: 'Verificação de dívidas e ónus de um imóvel antes da compra',
  tldr: 'Antes do CPCV e da escritura, verifique não apenas uma caderneta predial “bonita”. O documento principal é a certidão permanente do registo predial: custa 15 €, é válida durante 6 meses e mostra o proprietário, hipotecas, penhora, usufruto, servidões e registos judiciais. Peça separadamente ao vendedor a certidão de não dívida das Finanças, os últimos IMI, a declaração do condomínio e documentos da Câmara Municipal. A Conservatória, as Finanças e a Câmara mantêm registos diferentes — as correspondências devem ser verificadas manualmente.',
  tags: ['imovel', 'dividas', 'onus', 'finanças', 'compra'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'three-registries',
      title: 'Compreenda 3 fontes diferentes: Conservatória, Finanças, Câmara',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe um “super-registo” único onde se veja tudo. Antes da compra, é necessário comparar pelo menos três bases: Registo Predial, Autoridade Tributária / Finanças e Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Conservatória do Registo Predial — propriedade jurídica e ónus: hipoteca, penhora, arresto, usufruto, servidão, promessa com eficácia real, acções judiciais.',
          'Predial Online — acesso online à certidão permanente do registo predial; é a mesma informação do Registo Predial em formato electrónico.',
          'Finanças / Portal das Finanças — ficha fiscal do imóvel: caderneta predial, artigo matricial, VPT, IMI, proprietário fiscal para efeitos tributários.',
          'Câmara Municipal — licenças, licença de utilização, urbanismo, obras ilegais, plantas, possíveis restrições de construção.',
          'Condomínio — dívidas de quotas mensais, obras, fundo comum de reserva e despesas futuras já aprovadas.',
          'Um notário, solicitador ou advogado não “adivinha” problemas ocultos: verifica os documentos que você ou o vendedor lhe entregaram.'
        ] },
        { kind: 'warning', text: 'A caderneta predial das Finanças não prova o direito de propriedade. É um documento fiscal. Se na caderneta constar uma pessoa e na certidão predial outra, oriente-se pelo Registo Predial e esclareça a divergência antes de assinar o CPCV.' }
      ]
    },
    {
      id: 'certidao-predial',
      title: 'Peça a certidão permanente do registo predial por 15 €',
      content: [
        { kind: 'paragraph', text: 'Este é o documento principal para verificar ónus. É pedido em predialonline.justica.gov.pt. O custo da certidão permanente electrónica é de 15 €, e o acesso é válido durante 6 meses. Normalmente basta o código de acesso: não é necessário PDF, o notário e o banco introduzem o código e vêem o registo actualizado.' },
        { kind: 'checklist', items: [
          'Peça ao vendedor o código da certidão permanente ou peça-a você mesmo, se souber a freguesia, concelho e número de descrição predial.',
          'Verifique a “Descrição” — tipo de imóvel, morada, área, quotas-partes, fração autónoma, garagem, arrecadação.',
          'Verifique as “Inscrições” — quem é o proprietário e com que fundamento adquiriu o imóvel.',
          'Procure “Hipoteca voluntária” — a hipoteca bancária normal do vendedor.',
          'Procure “Penhora”, “Arresto”, “Apreensão” — processo executivo, arresto ou apreensão.',
          'Procure “Usufruto” — direito de uso de um terceiro; comprar a nua propriedade sem direito a viver ali é possível, mas é um risco completamente diferente.',
          'Procure “Servidão” — direito de passagem, circulação, infra-estruturas ou outra limitação do terreno.',
          'Procure “Ação” ou “Registo de ação” — litígio judicial sobre o imóvel.',
          'Compare a descrição predial com a caderneta predial: morada, fração, artigo matricial, áreas e finalidade devem coincidir de forma lógica.'
        ] },
        { kind: 'warning', text: 'A hipoteca do vendedor, por si só, nem sempre é um problema: na escritura, o banco do vendedor normalmente emite o distrate / autorização de cancelamento da hipoteca após o pagamento. O problema existe se o mecanismo de cancelamento da hipoteca não estiver previsto no CPCV e não for confirmado pelo banco antes da transacção.' }
      ]
    },
    {
      id: 'financas-tax-debt',
      title: 'Verifique nas Finanças: caderneta, IMI e certidão de não dívida',
      content: [
        { kind: 'paragraph', text: 'As Finanças mostram o lado fiscal do imóvel. O comprador não consegue ver por si próprio todas as dívidas fiscais do vendedor: a certidão de dívida e não dívida é pedida pelo próprio vendedor no Portal das Finanças e entregue a si ou ao notário.' },
        { kind: 'checklist', items: [
          'Peça uma caderneta predial atualizada — recente, não um PDF antigo do arquivo da agência imobiliária.',
          'Compare artigo matricial, fração, localização, área, afetação e VPT com a certidão predial.',
          'Peça ao vendedor a certidão de não dívida das Finanças / Autoridade Tributária.',
          'Peça comprovativos de pagamento do IMI pelo menos do último ano; se o imóvel for caro, peça vários anos.',
          'Verifique se existe AIMI para imóveis de valor elevado — é um imposto do vendedor até à data da escritura, mas a dívida pode criar risco de cobranças coercivas.',
          'Esclareça quem paga o IMI do ano da transacção: juridicamente, o IMI é liquidado ao proprietário em 31 de dezembro do ano fiscal, mas as partes fazem frequentemente um cálculo proporcional no contrato.',
          'Se o imóvel pertencer a uma empresa, peça a certidão permanente comercial da empresa e verifique os poderes de quem assina.',
          'Se o vendedor for não residente, certifique-se de que tem NIF e representante fiscal, se estiver obrigado a tê-lo.'
        ] },
        { kind: 'warning', text: 'A certidão de não dívida das Finanças não significa que o imóvel esteja livre de hipoteca ou penhora. A certidão fiscal e o Registo Predial respondem a perguntas diferentes. São necessários ambos os documentos.' }
      ]
    },
    {
      id: 'condominio-and-municipality',
      title: 'Não se esqueça do condomínio e da Câmara Municipal',
      content: [
        { kind: 'paragraph', text: 'Para um apartamento num prédio em propriedade horizontal, as dívidas ao condomínio são uma surpresa desagradável frequente. Para uma moradia ou terreno, o principal risco encontra-se mais frequentemente na Câmara Municipal: licenças, ampliações ilegais, ausência de licença de utilização ou restrições urbanísticas.' },
        { kind: 'checklist', items: [
          'Peça a declaração do administrador do condomínio sobre dívidas, quotas e despesas aprovadas.',
          'Verifique as actas da assembleia de condóminos dos últimos 2–3 anos: podem ter sido aprovadas obras de dezenas de milhares de euros.',
          'Peça o regulamento do condomínio, se forem importantes short-term rental / Alojamento Local, animais, estacionamento ou utilização das zonas comuns.',
          'Verifique se a garagem e a arrecadação estão incluídas na mesma fração, numa fração separada ou apenas numa zona comum de uso exclusivo.',
          'Na Câmara Municipal, peça a licença de utilização ou confirmação da dispensa para imóveis antigos.',
          'Para uma moradia, verifique as plantas aprovadas e a coincidência da configuração real com as plantas licenciadas.',
          'Para um terreno, verifique o PDM, classificação do solo, restrições REN / RAN, servidões de estradas, linhas eléctricas e zonas hídricas.',
          'Se no anúncio estiver escrito “possibilidade de construir”, exija confirmação escrita do urbanismo, não uma promessa do agente.'
        ] },
        { kind: 'warning', text: 'Uma ampliação ilegal, uma varanda fechada, uma garagem convertida ou uma piscina sem licença podem não aparecer na certidão predial. Isto é matéria da Câmara Municipal, não da Conservatória.' }
      ]
    },
    {
      id: 'cpcv-protection',
      title: 'Proteja-se no CPCV antes de entregar o sinal',
      content: [
        { kind: 'paragraph', text: 'O CPCV não deve limitar-se a fixar o preço. Deve repartir riscos: que dívidas o vendedor é obrigado a liquidar, que documentos deve fornecer e o que acontece se surgir um problema antes da escritura.' },
        { kind: 'checklist', items: [
          'Inclua a condição de que o imóvel é vendido livre de ónus e encargos, excepto os expressamente enumerados.',
          'Se existir hipoteca, indique que será liquidada e cancelada no dia da escritura através de distrate / cancelamento da hipoteca.',
          'Anexe ou enumere o código da certidão permanente, caderneta predial, licença de utilização, declaração do condomínio.',
          'Indique o prazo máximo para entrega da certidão de não dívida Finanças e da declaração do condomínio.',
          'Preveja o direito do comprador a desistir e a receber o sinal em dobro ou o sinal simples — consoante a estrutura acordada — se o vendedor não conseguir remover o ónus.',
          'Não transfira um sinal elevado antes de verificar a certidão predial; os habituais 10% podem ser um risco demasiado alto num imóvel problemático.',
          'Para a hipoteca do comprador, acrescente uma cláusula de financiamento: devolução do sinal se o banco recusar o crédito por motivo relacionado com o imóvel ou a avaliação.',
          'Pague o sinal por transferência bancária para a conta do vendedor indicado na certidão predial, não em numerário nem para a conta de um terceiro sem explicação.'
        ] },
        { kind: 'warning', text: 'O agente imobiliário trabalha para a transacção, o notário autentica o acto, o banco protege o seu crédito. Se o montante for significativo ou o imóvel não for standard, contrate o seu próprio advogado ou solicitador antes do CPCV, não na véspera da escritura.' }
      ]
    },
    {
      id: 'red-flags',
      title: 'Sinais de alerta antes da escritura',
      content: [
        { kind: 'paragraph', text: 'Se vir algum destes sinais, não assine a escritura sem uma explicação escrita de um especialista e documentos actualizados.' },
        { kind: 'checklist', items: [
          'O vendedor recusa entregar o código da certidão permanente ou entrega apenas um PDF antigo.',
          'Na certidão existe penhora, arresto, ação ou várias hipotecas, e o vendedor diz que “é uma formalidade”.',
          'A descrição da fração na certidão predial não coincide com aquilo que está fisicamente a comprar.',
          'O anúncio inclui estacionamento ou arrecadação, mas nos documentos não estão indicados.',
          'A caderneta predial mostra áreas ou afetação que não coincidem com as plantas da Câmara.',
          'Não existe licença de utilização e ninguém consegue explicar o fundamento legal da dispensa.',
          'O condomínio informa sobre obras futuras ou uma dívida, e o vendedor pede para “resolver depois”.',
          'O vendedor é casado, a herança não está regularizada, existem herdeiros menores ou procuração do estrangeiro sem verificação de poderes.',
          'O preço está claramente abaixo do mercado, mas exigem um sinal rápido sem due diligence.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Certidão permanente do registo predial', amountEUR: 15, note: 'Código de acesso electrónico através do Predial Online, válido durante 6 meses.' },
    { label: 'Certidão de não dívida Finanças', amountEUR: 0, note: 'Normalmente gratuita no Portal das Finanças; é pedida pelo próprio contribuinte-vendedor.' },
    { label: 'Caderneta predial', amountEUR: 0, note: 'Gratuita no Portal das Finanças para o proprietário do imóvel.' },
    { label: 'Advogado / solicitador para due diligence', amountEURMin: 300, amountEURMax: 1500, note: 'O intervalo de mercado depende da complexidade do imóvel, da hipoteca, da herança, de uma empresa vendedora e da verificação na Câmara Municipal.' }
  ],
  sources: [
    { title: 'Predial Online — pedido de certidão permanente do registo predial', url: 'https://predialonline.justica.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — informação e serviços da Autoridade Tributária', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Predial — Decreto-Lei 224/84', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — compra e venda de casa e documentação associada', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
