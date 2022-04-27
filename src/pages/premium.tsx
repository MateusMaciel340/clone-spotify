import * as C from "../components/Premium/style";
import * as Home from "../components/Home/style";
import ImagemHome from "../assets/home/imagem-home.png";

import { listagem_home_superior } from "../data/listagem";
import { useState } from "react";

function Premium(){

    const [listagemPremiumSuperior, setListagemPremiumSuperior] = useState(listagem_home_superior);

    return(
        <>
            <C.CorpoPremium>
                <C.CorpoSuperior>
                    {listagem_home_superior.map((listagem_premium_superior, index) => (
                        listagem_premium_superior.id === 3 ? (
                        <Home.Coluna>
                            <Home.TextoPrincipal tamanho_titulo="40px">{listagem_premium_superior.titulo}</Home.TextoPrincipal>
                            <Home.TextoParagrafo>{listagem_premium_superior.paragrafo}</Home.TextoParagrafo>

                            <C.DivisaoBotoes>
                                <Home.BotaoHome borda="#000000">{listagem_premium_superior.texto_botao}</Home.BotaoHome>
                                <Home.BotaoHome fundo="transparent" borda="#FFFFFF">ver planos</Home.BotaoHome>
                            </C.DivisaoBotoes>

                            <Home.TextoMini>{listagem_premium_superior.texto_mini}</Home.TextoMini>
                        </Home.Coluna>
                        ): ""
                    ))}

                    <Home.Coluna>
                        <Home.HomeImagem src={ImagemHome}/>
                    </Home.Coluna>
                </C.CorpoSuperior>
            </C.CorpoPremium>
        </>
    );
}

export default Premium;