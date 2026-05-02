export default {
  editorialVoice: 'hackportugal',
  id: 'iva-autoliquidacao-ue-b2b',
  categoryId: 'taxes',
  title: 'Reverse charge / autoliquidação IVA: facturas a clientes na UE B2B',
  tldr: 'Se em Portugal emitir uma factura a uma empresa da UE com um VAT ID válido no VIES, normalmente não cobra IVA português: o lugar de tributação passa para o cliente, e na factura escreve-se «IVA - autoliquidação». Antes de enviar a factura, verifique o VAT ID no VIES e guarde a prova. As operações B2B na UE entram na Declaração Recapitulativa, normalmente até ao dia 20 após o período. Para B2C, o reverse charge quase nunca funciona: muitas vezes é necessário IVA PT ou OSS.',
  tags: ['iva', 'vies', 'b2b', 'recapitulativa'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-applies',
      title: 'Quando se aplica a autoliquidação na UE B2B',
      content: [
        { kind: 'paragraph', text: 'Autoliquidação / reverse charge significa: você não acrescenta IVA português à factura, e o cliente autoliquida o VAT no seu próprio país. Para um freelancer típico em Portugal, isto aplica-se a serviços B2B prestados a um cliente de outro país da UE, se o cliente for taxable person e tiver fornecido um VAT ID válido.' },
        { kind: 'checklist', items: [
          'Está registado em Portugal como sujeito passivo de IVA: empresa, empresário em nome individual ou recibos verdes.',
          'O cliente está noutro país da UE, não em Portugal.',
          'O cliente é uma empresa, não um particular.',
          'O cliente tem um VAT ID válido, verificável através do VIES.',
          'O serviço enquadra-se na regra geral B2B: o lugar de tributação é o país do cliente nos termos do CIVA art. 6.º, n.º 6, al. a).',
          'Não cobra 23%, 13% ou 6% de IVA português na factura.',
          'A factura indica o motivo: «IVA - autoliquidação».',
          'A operação é reflectida na Declaração Recapitulativa e na declaração periódica de IVA, se estiver obrigado a entregar IVA.'
        ] },
        { kind: 'warning', text: 'Se o cliente for de Portugal, não é um serviço B2B intracomunitário: normalmente cobra-se IVA português, salvo isenções especiais. Se o cliente for dos EUA/UK/Suíça — não é VIES nem Declaração Recapitulativa da UE; as regras do lugar da prestação de serviços continuam a ter de ser verificadas em separado.' }
      ]
    },
    {
      id: 'vies-check',
      title: 'Verificação do cliente no VIES antes da factura',
      content: [
        { kind: 'paragraph', text: 'O VIES é o serviço oficial da Comissão Europeia para verificar o VAT ID de empresas da UE. Para reverse charge, é uma prova essencial de que o cliente é efectivamente B2B. Verifique o VAT ID antes de cada primeira factura e depois regularmente, sobretudo se a colaboração durar vários meses.' },
        { kind: 'checklist', items: [
          'Abra o VIES: ec.europa.eu/taxation_customs/vies/.',
          'Seleccione o país do cliente e introduza o VAT ID sem espaços nem caracteres desnecessários.',
          'Se o VIES devolver valid — guarde um PDF/captura de ecrã com data e hora.',
          'Compare o nome e a morada da empresa com o contrato, PO, domínio de email e dados para a factura.',
          'Se o VIES mostrar invalid — não aplique autoliquidação enquanto o cliente não corrigir o VAT ID.',
          'Se o VIES estiver temporariamente indisponível — repita a verificação mais tarde e guarde prova da tentativa.',
          'Para clientes espanhóis, verifique especificamente o NIF-IVA, e não apenas o número fiscal; algumas empresas têm número, mas o VAT intracomunitário não está activado.',
          'Guarde as provas VIES juntamente com a factura pelo menos durante o prazo de caducidade fiscal.'
        ] },
        { kind: 'warning', text: 'Um resultado «valid» no VIES não transforma automaticamente um particular num cliente empresarial. Mas a ausência de um VAT ID válido quase sempre inviabiliza o B2B reverse charge na UE: as Finanças podem exigir IVA português, juros compensatórios e coima.' }
      ]
    },
    {
      id: 'invoice-text',
      title: 'Como emitir a factura: formulação exacta',
      content: [
        { kind: 'paragraph', text: 'Numa Portuguese invoice / recibo verde, o valor do serviço é indicado sem IVA. No campo do motivo de não liquidação de IVA, escolha «IVA - autoliquidação». No texto da factura, é útil acrescentar a base legal: «Reverse charge — serviço localizado no Estado-Membro do adquirente, nos termos do art. 6.º, n.º 6, al. a) do CIVA».' },
        { kind: 'checklist', items: [
          'Dados do vendedor: o seu nome/empresa, NIF, morada em Portugal.',
          'Dados do cliente: denominação legal, morada, VAT ID com código do país, por exemplo DE123456789.',
          'Descrição do serviço: concreta, sem um «consulting» vago quando se pode escrever «software development», «design», «marketing services».',
          'Data da prestação do serviço ou período: por exemplo «services provided in March 2026».',
          'Tax base: valor sem IVA.',
          'IVA rate: não coloque 23%; no Portal das Finanças escolha o motivo «IVA - autoliquidação».',
          'Menção obrigatória: «IVA - autoliquidação».',
          'Menção adicional recomendada: «Reverse charge / VAT due by the customer».',
          'Moeda: pode facturar em €, e se for noutra moeda — guarde a taxa de conversão para a contabilidade.',
          'Guarde o contrato, a correspondência, a verificação VIES e a confirmação de pagamento.'
        ] },
        { kind: 'warning', text: 'Não use «Isento art. 53.º» como substituto do reverse charge. O art. 53.º CIVA é o pequeno regime de isenção de IVA em Portugal, enquanto «IVA - autoliquidação» é outro mecanismo. Se estiver no art. 53.º, confirme com um contabilista se precisa de alterar o regime antes de iniciar operações B2B intracomunitárias.' }
      ]
    },
    {
      id: 'recapitulativa',
      title: 'Declaração Recapitulativa: o que entregar nas Finanças',
      content: [
        { kind: 'paragraph', text: 'Os serviços B2B intracomunitários com reverse charge normalmente entram na Declaração Recapitulativa. É uma declaração separada no Portal das Finanças, onde se indica, para cada cliente, o VAT ID e o valor das operações. Não substitui a declaração periódica de IVA normal.' },
        { kind: 'checklist', items: [
          'Verifique se tem nas Finanças o activity code aberto e o regime de IVA correcto.',
          'Entre no Portal das Finanças → IVA → Declaração Recapitulativa.',
          'Indique o período a que os serviços dizem respeito.',
          'Para cada cliente B2B da UE, introduza o país, o VAT ID e o taxable amount.',
          'Os valores devem coincidir com as facturas emitidas e com a declaração de IVA.',
          'Normalmente, o prazo é até ao dia 20 do mês seguinte ao período correspondente; se o prazo calhar num fim-de-semana/feriado, oriente-se pelo dia útil seguinte, mas não deixe para a última hora.',
          'Mesmo que o IVA a pagar seja 0 €, a obrigação de entregar a recapitulativa pode manter-se.',
          'Guarde o comprovativo de entrega depois da submissão.',
          'Se se enganou no VAT ID ou no valor — entregue uma substituição/correcção o quanto antes.'
        ] },
        { kind: 'warning', text: 'As coimas por declarações fiscais em falta em Portugal são muitas vezes mais caras do que a própria contabilidade. Se emitir facturas regularmente para a UE, crie um calendário: invoice date, VIES proof, Declaração Recapitulativa, declaração periódica de IVA, IRS/IRC.' }
      ]
    },
    {
      id: 'b2c-and-edge-cases',
      title: 'B2B ≠ B2C: onde o reverse charge não resolve',
      content: [
        { kind: 'paragraph', text: 'O principal erro dos freelancers é aplicar «IVA - autoliquidação» a qualquer cliente da UE. Para particulares da UE, isto é quase sempre incorrecto. Os serviços B2C são tributados por outras regras: por vezes IVA português, por vezes IVA do país do consumidor através do OSS, por vezes regras especiais para imóveis, eventos, formação ou serviços electrónicos.' },
        { kind: 'checklist', items: [
          'Cliente B2B da UE com VAT ID valid: normalmente reverse charge e Declaração Recapitulativa.',
          'Particular B2C da UE: o reverse charge não se aplica.',
          'Serviços digitais B2C, SaaS, produtos descarregáveis, conteúdo online: muitas vezes o lugar de tributação é o país do cliente; pode ser necessário OSS.',
          'Consultoria/design/marketing B2C comuns: a regra depende da natureza do serviço; não copie o esquema B2B.',
          'Serviços relacionados com imóveis: muitas vezes são tributados onde o imóvel se situa.',
          'Formação, eventos, admission to events: podem existir regras especiais pelo local de realização efectiva ou de acesso.',
          'Cliente sem VAT ID valid, mas que diz «somos uma empresa»: peça para activar o VAT intracomunitário e aguarde por VIES valid.',
          'Marketplace/plataforma pode ser deemed supplier ou agente — verifique o contrato e o VAT treatment.',
          'Se emitiu uma factura com IVA português por engano, a correcção faz-se através de nota de crédito e nova factura, não por troca de emails.'
        ] },
        { kind: 'warning', text: 'OSS e reverse charge são regimes diferentes. O OSS é necessário para algumas vendas/serviços B2C na UE, para declarar o IVA dos países dos clientes através de um balcão único. Para B2B reverse charge com VAT ID, o OSS normalmente não é usado.' }
      ]
    },
    {
      id: 'practical-controls',
      title: 'Mini-checklist antes de enviar a factura',
      content: [
        { kind: 'paragraph', text: 'Antes de enviar a factura ao cliente na UE, faça uma verificação rápida. Demora 3 minutos e poupa horas de explicações com o contabilista e as Finanças.' },
        { kind: 'checklist', items: [
          'O país do cliente é UE, mas não Portugal.',
          'O cliente é empresa/profissional, não consumer.',
          'VAT ID valid no VIES à data da factura.',
          'O nome e a morada na factura coincidem com o VIES ou com os dados empresariais do cliente.',
          'A factura não inclui IVA português.',
          'Foi seleccionado o motivo «IVA - autoliquidação».',
          'A descrição inclui um serviço e período claros.',
          'A factura entrará na Declaração Recapitulativa.',
          'O valor entrará na declaração periódica de IVA nos campos correctos.',
          'VIES proof, invoice PDF e contrato guardados na mesma pasta.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Verificação do VAT ID no VIES', amountEUR: 0, note: 'O serviço oficial da Comissão Europeia é gratuito.' },
    { label: 'Entrega da Declaração Recapitulativa', amountEUR: 0, note: 'Gratuita no Portal das Finanças; o contabilista pode cobrar uma fee separada.' },
    { label: 'Contabilista para recibos verdes/IVA', amountEURMin: 40, amountEURMax: 120, note: 'Intervalo mensal típico para um freelancer; depende do número de facturas, IVA, OSS e IRS.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: informação e serviços de IVA',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'VIES: verificação do VAT ID na UE',
      url: 'https://ec.europa.eu/taxation_customs/vies/',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA no Diário da República',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: Declaração Recapitulativa IVA',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
