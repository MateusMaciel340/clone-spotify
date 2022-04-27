import { lista_card, exemplo_lista_card } from "../types/listas";

export const listagem_card: lista_card[] = [
    {
        id_card: 1,
        titulo_card: "Individual",
        paragrafo_card: "R$ 19,90/mês após o período da oferta",
        paragrafo_conta_card: "1 conta",
        texto_pequeno_card: "3 meses grátis com a assinatura"
    },{
        id_card: 2,
        titulo_card: "Duo",
        paragrafo_card: "R$ 24,90/mês após o período da oferta",
        paragrafo_conta_card: "2 contas",
        texto_pequeno_card: "1 mês grátis ao assinar"
    },{
        id_card: 3,
        titulo_card: "Família",
        paragrafo_card: "R$ 34,90/mês após o período da oferta",
        paragrafo_conta_card: "Até 6 contas",
        texto_pequeno_card: "1 mês grátis ao assinar"
    },{
        id_card: 4,
        titulo_card: "Universitário",
        paragrafo_card: "R$ 9,90/mês após o período da oferta",
        paragrafo_conta_card: "1 conta",
        texto_pequeno_card: "1 mês grátis ao assinar"
    }
]

export const listar_pontos_card: exemplo_lista_card[] = [
    { listagem: "Ouça músicas sem anúncios" }, 
    { listagem: "Ouça em qualquer lugar — até no modo offline" },
    { listagem: "Escolha a música que quer ouvir" },
    { listagem: "Faça um plano pré-pago ou uma assinatura" }
]