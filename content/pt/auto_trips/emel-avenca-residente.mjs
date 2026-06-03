export default {
  editorialVoice: "hackportugal",
  id: "emel-avenca-residente",
  categoryId: "auto_trips",
  title: "EMEL Avença Residente: estacionamento de residente em Lisboa",
  tldr: "A Avença Residente (Dístico de Residente) EMEL é uma autorização anual para residentes de Lisboa estacionarem na sua zona EMEL, em vez de pagarem à hora. O preço não depende da cor da zona, mas do número de automóveis do agregado: segundo a página oficial da EMEL, o primeiro dístico é gratuito, o segundo custa 54 € / ano e o terceiro 132 € / ano (até três por morada, até cinco quando vivem várias famílias). A condição principal é que a morada fiscal do seu NIF esteja na zona correspondente e que o automóvel esteja em seu nome ou lhe tenha sido legalmente disponibilizado. Pode pedir online ou numa Loja EMEL, mas para expats costuma ser mais seguro ir ao balcão com o pacote completo de documentos.",
  tags: ["emel", "estacionamento", "lisboa", "automóvel"],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: "what-it-is",
      title: "O que permite a Avença Residente",
      content: [
        {
          kind: "paragraph",
          text: "É uma autorização de residente da EMEL para estacionar na via pública na zona onde vive em Lisboa. Não dá estacionamento gratuito em toda a cidade: só é válida na zona/bairro associado à sua morada e apenas nos lugares EMEL onde o estacionamento de residentes é permitido."
        },
        {
          kind: "checklist",
          items: [
            "Adequada para residentes de Lisboa com morada numa zona EMEL",
            "É paga como assinatura anual, e não como estacionamento à hora",
            "Fica associada à matrícula do automóvel",
            "É verificada pelos fiscais da EMEL através da matrícula; normalmente não é necessário dístico em papel",
            "Não garante um lugar específico junto de casa",
            "Não é válida em parques privados, garagens e lugares com regime especial",
            "Não substitui o pagamento de coimas, IUC, seguro ou IPO"
          ]
        },
        {
          kind: "warning",
          text: "Não confunda Avença Residente / Dístico de Residente com o pagamento normal através da aplicação ePark. Se simplesmente estacionar o automóvel numa zona EMEL sem uma autorização de residente activa, o fiscal vê isso como estacionamento não pago."
        }
      ]
    },
    {
      id: "eligibility",
      title: "Quem tem direito",
      content: [
        {
          kind: "paragraph",
          text: "A condição essencial é que a sua morada fiscal nas Finanças, ou seja, a morada fiscal do NIF, esteja situada na zona EMEL para a qual pede a avença de residente. O contrato de arrendamento, por si só, ajuda, mas se o NIF ainda estiver registado na morada antiga ou na morada de um representante fiscal, a EMEL pode recusar."
        },
        {
          kind: "checklist",
          items: [
            "Vive efectivamente em Lisboa numa zona EMEL",
            "A morada fiscal do seu NIF foi actualizada para essa morada",
            "O automóvel está registado em seu nome, em nome do seu cônjuge/parceiro ou foi-lhe legalmente disponibilizado",
            "Tem documento de identificação: passaporte, autorização de residência, Cartão de Cidadão ou outro ID",
            "O automóvel tem Certificado de Matrícula / DUA",
            "Para leasing, renting, viatura da empresa ou comodato, existe contrato/declaração onde consta como utilizador",
            "A matrícula está correctamente indicada no pedido",
            "Não há contradição entre a morada nos documentos e a zona que está a pedir"
          ]
        },
        {
          kind: "warning",
          text: "O atestado de residência da Junta de Freguesia é útil, mas no caso típico a EMEL olha sobretudo para a morada fiscal. Antes da visita, verifique a morada no Portal das Finanças: Todos os Serviços → Dados Cadastrais → Morada."
        }
      ]
    },
    {
      id: "documents",
      title: "Documentos para o balcão da EMEL",
      content: [
        {
          kind: "paragraph",
          text: "Para um expat, a opção mais segura é levar mais documentos do que o mínimo. A EMEL tem verificação electrónica de parte dos dados, mas se o NIF, o automóvel ou a autorização de residência tiverem sido actualizados recentemente, o balcão pode pedir comprovativos."
        },
        {
          kind: "checklist",
          items: [
            "Documento de identificação: passaporte + autorização de residência ou Cartão de Cidadão",
            "NIF",
            "Comprovativo de morada fiscal do Portal das Finanças",
            "Contrato de arrendamento, escritura ou outro documento da habitação — como comprovativo adicional",
            "Certificado de Matrícula / Documento Único Automóvel",
            "Se o automóvel não estiver em seu nome: contrato de renting/leasing, declaração da entidade empregadora ou contrato de comodato",
            "Número de telemóvel e email",
            "Cartão bancário ou outro meio de pagamento",
            "Se a morada foi alterada recentemente: impressão/PDF com a data de alteração da morada fiscal"
          ]
        },
        {
          kind: "paragraph",
          text: "Se o automóvel tiver matrícula estrangeira, confirme previamente com a EMEL. As autorizações de residente estão normalmente pensadas para automóveis que possam ser associados de forma inequívoca ao requerente e à morada; a utilização prolongada de um automóvel estrangeiro em Portugal também tem riscos fiscais e aduaneiros relacionados com ISV/IUC."
        }
      ]
    },
    {
      id: "apply",
      title: "Como apresentar o pedido",
      content: [
        {
          kind: "substeps",
          items: [
            {
              id: "check-zone",
              title: "1. Verifique a sua zona EMEL",
              content: [
                {
                  kind: "paragraph",
                  text: "No site da EMEL, procure a rua onde vive e veja a que zona pertence: verde, amarela ou vermelha. A cor da zona define a tarifa à hora; para a autorização de residente apenas define o território onde é válida, sendo o preço calculado pelo número de automóveis do agregado."
                }
              ]
            },
            {
              id: "update-nif",
              title: "2. Actualize a morada fiscal",
              content: [
                {
                  kind: "paragraph",
                  text: "Se se mudou recentemente, altere primeiro a morada nas Finanças. Para titulares de Cartão de Cidadão, isto é feito através do ePortugal/CMD; para estrangeiros com autorização de residência, através do Portal das Finanças ou do atendimento das Finanças, consoante o acesso."
                }
              ]
            },
            {
              id: "go-emel",
              title: "3. Apresente o pedido na Loja EMEL",
              content: [
                {
                  kind: "paragraph",
                  text: "Faça marcação ou dirija-se a uma Loja EMEL/ponto de atendimento com os documentos. O funcionário verificará a morada, o automóvel e a zona, criará a avença e permitirá pagar a tarifa anual."
                }
              ]
            },
            {
              id: "confirm-active",
              title: "4. Confirme que a autorização está activa",
              content: [
                {
                  kind: "paragraph",
                  text: "Depois do pagamento, verifique a matrícula no gabinete pessoal/confirmação da EMEL. Não deixe o automóvel «à sorte» antes da activação: as coimas desses dias normalmente não são anuladas só porque o pedido já foi apresentado."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "prices-and-use",
      title: "Preços e como utilizar em 2026",
      content: [
        {
          kind: "paragraph",
          text: "Segundo a página oficial da EMEL para residentes, o preço não depende da cor da zona, mas do número de automóveis do agregado: o primeiro dístico é gratuito, o segundo custa 54 € / ano e o terceiro 132 € / ano. Cada morada tem direito a até três autorizações (até cinco quando vivem várias famílias na morada). Este é o preço pelo direito de estacionar como residente na sua zona, e não o custo de um lugar reservado."
        },
        {
          kind: "checklist",
          items: [
            "Guarde o comprovativo de pagamento em PDF ou email",
            "Verifique a data de fim e coloque um lembrete para 30 dias antes",
            "Em caso de mudança de morada, apresente a alteração à EMEL; a autorização antiga pode deixar de corresponder à zona",
            "Em caso de troca de automóvel, actualize a matrícula antes de estacionar",
            "Não estacione em lugares de cargas e descargas, lugares reservados, passadeiras, esquinas e passeios",
            "Esteja atento a sinalização temporária de obras e eventos: a autorização de residente não protege contra reboque",
            "Se receber um aviso/contraordenação, verifique a data, o local, a matrícula e se a avença estava activa nesse dia"
          ]
        },
        {
          kind: "warning",
          text: "Nos bairros históricos e nas zonas congestionadas de Lisboa, ter Avença Residente não significa que será fácil encontrar lugar à noite. É um direito jurídico de estacionar na zona em regime de residente, não uma garantia de existência de lugar livre."
        }
      ]
    }
  ],
  costs: [
    {
      label: "Avença Residente — primeiro automóvel",
      amountEUR: 0,
      note: "O primeiro dístico de residente por morada é emitido gratuitamente."
    },
    {
      label: "Avença Residente — segundo automóvel",
      amountEUR: 54,
      note: "Tarifa anual da EMEL para uma segunda autorização de residente na mesma morada."
    },
    {
      label: "Avença Residente — terceiro automóvel",
      amountEUR: 132,
      note: "Tarifa anual da EMEL para uma terceira autorização; cada morada tem direito a até três (até cinco para várias famílias)."
    }
  ],
  sources: [
    {
      title: "EMEL — Avenças Residentes",
      url: "https://www.emel.pt/pt/onde-estacionar/avencas/residentes/",
      kind: "official",
      language: "pt",
      lastRetrieved: "2026-04-28"
    },
    {
      title: "EMEL — onde estacionar e zonas de estacionamento em Lisboa",
      url: "https://www.emel.pt/pt/onde-estacionar/",
      kind: "official",
      language: "pt",
      lastRetrieved: "2026-04-28"
    },
    {
      title: "Câmara Municipal de Lisboa — estacionamento e mobilidade",
      url: "https://www.lisboa.pt/cidade/mobilidade/estacionamento",
      kind: "official",
      language: "pt",
      lastRetrieved: "2026-04-28"
    }
  ],
  lastVerified: "2026-05-31",
  verifyIntervalDays: 180
}
