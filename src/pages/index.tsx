import * as C from "../components/Home/style";
import ImagemPrincipalHome from "../assets/home/imagem-home.png";
import ImagemDeFundoHome from "../assets/home/fundo-home-inferior.png";
import { listagem_home_superior } from "../data/listagem";
import { useState } from "react";

function Inicial(){

    const [listagemHomeSuperior, setListagemHomeSuperior] = useState(listagem_home_superior);

    return(
        <>
        <C.CorpoGeral cor_geral="#993399">
            <C.Corpo>
                {listagemHomeSuperior.map((listagem_home_superior, index) => (
                        listagem_home_superior.id === 1 ? (
                        <C.Coluna key={index}>
                            <C.TextoPequeno>{listagem_home_superior.titulo_pequeno}</C.TextoPequeno>
                            <C.TextoPrincipal>{listagem_home_superior.titulo}</C.TextoPrincipal>
                            <C.TextoParagrafo>{listagem_home_superior.paragrafo}</C.TextoParagrafo>
                            <C.BotaoHome borda="#000000">{listagem_home_superior.texto_botao}</C.BotaoHome>
                            <C.TextoMini>{listagem_home_superior.texto_mini}</C.TextoMini>
                        </C.Coluna>
                        ):""))}

                <C.Coluna>
                    <C.HomeImagem src={ImagemPrincipalHome}/>
                </C.Coluna>
            </C.Corpo>
        </C.CorpoGeral>

        <C.CorpoGeral cor_geral="#2941AB" fundo={ImagemDeFundoHome}>
            <C.Corpo cor="#1ED760">
                    {listagem_home_superior.map((listagem_home_superior, index) => (
                        listagem_home_superior.id === 2 ? (
                        <C.Coluna key={index}>
                            <C.TextoPequeno>{listagem_home_superior.titulo_pequeno}</C.TextoPequeno>
                            <C.TextoPrincipal>{listagem_home_superior.titulo}</C.TextoPrincipal>
                            <C.TextoParagrafo>{listagem_home_superior.paragrafo}</C.TextoParagrafo>
                            <C.BotaoHome fundo="#1ed760" borda="#1ed760" cor="#2941AB">{listagem_home_superior.texto_botao}</C.BotaoHome>
                        </C.Coluna>
                        ): ""
                    ))}
            </C.Corpo>
        </C.CorpoGeral>
        </>
    )
}

export default Inicial;