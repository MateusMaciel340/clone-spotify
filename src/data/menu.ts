import { lista_menu, lista_footer } from "../types/listas";

export const listagem_menu: lista_menu[] = [
    { titulo: "Premium", link: "/premium" }, 
    { titulo: "Suporte", link: "/suporte" },
    { titulo: "Baixar", link: "/baixar" },
    { titulo: "|", link: "/" },
    { titulo: "Increver-se", link: "/increver-se" },
    { titulo: "Entrar", link: "/entrar" }
]

export const listagem_footer_empresa: lista_footer[] = [
    { lista: "Sobre" }, { lista: "Empregos" }, { lista: "For the Record" }
]

export const listagem_footer_comunidade: lista_footer[] = [
    { lista: "Para Artistas" }, { lista: "Desenvolvedores" }, { lista: "Publicidade" },
    { lista: "Publicidade" }, { lista: "Investidores" }, { lista: "Fornecedores" }
]

export const listagem_footer_links_uteis: lista_footer[] = [
    { lista: "Suporte" }, { lista: "Player da Web" }, { lista: "Aplicativo móvel grátis" }
]

export const listagem_icones: lista_footer[] = [
    { lista: "fa-2x fa fa-instagram" }, { lista: "fa-2x fa fa-twitter" },
    { lista: "fa-2x fa fa-facebook" }
]