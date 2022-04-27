import { lista_home, lista_informacoes } from "../types/listas";

// Assets - Imagens
import ModoOffline from "../assets/premium/coluna-1-musica.png";
import Sem_Anuncios from "../assets/premium/coluna-2-celular.png";
import Ouca_Onde_Quiser from "../assets/premium/coluna-3-sons.png";
import Play from "../assets/premium/coluna-4-play.png";

export const listagem_home_superior: lista_home[] = [
    { 
        id: 1,
        titulo_pequeno: "spotify premium", 
        titulo: "Curta 3 meses de Premium grátis", 
        paragrafo: "Curta músicas sem anúncios, ouça no modo offline e muito mais. Cancele quando quiser.", 
        texto_botao: "aproveite 3 meses grátis", 
        texto_mini: "Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou o Premium. Oferta termina em 12 de maio de 2022." 
    },
    {
        id: 2,
        titulo_pequeno: "spotify free",
        titulo: "Escutar muda tudo",
        paragrafo: "Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.",
        texto_botao: "baixe o spotify free",
        texto_mini: "",
    },
    {
        id: 3,
        titulo_pequeno: "",
        titulo: "R$ 0,00 por três meses de Premium",
        paragrafo: "Começa hoje a ouvir música sem anúncios e offline grátis até 27 de julho de 2022. Cancela quando quiseres.",
        texto_botao: "aproveite 3 meses grátis",
        texto_mini: "Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou o Premium. Esta oferta termina em 12 de maio de 2022."
    }
]

export const listagem_informacoes: lista_informacoes[] = [
    {
        id: 1,
        imagem: ModoOffline,
        titulo: "Modo offline.",
        paragrafo: "Ouça música onde estiver."
    },{
        id: 2,
        imagem: Sem_Anuncios,
        titulo: "Sem anúncios.",
        paragrafo: "Curta música, sem parar.",
    },{
        id: 3,
        imagem: Ouca_Onde_Quiser,
        titulo: "Ouça o que quiser.",
        paragrafo: "Mesmo no celular ou tablet."
    },{
        id: 4,
        imagem: Play,
        titulo: "Troque de música o quanto quiser.",
        paragrafo: "Pule quando quiser."
    }
]