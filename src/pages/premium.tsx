import * as C from "../components/Premium/style";
import * as Home from "../components/Home/style";
import ImagemHome from "../assets/home/imagem-home.png";
import { listagem_home_superior, listagem_informacoes } from "../data/listagem";

function Premium(){

    return(
        <>
            <C.CorpoPremium>
                <C.CorpoSuperior>
                    {listagem_home_superior.map((listagem_premium_superior, index) => (
                        listagem_premium_superior.id === 3 ? (
                        <Home.Coluna key={index}>
                            <Home.TextoPrincipal tamanho_titulo="40px">{listagem_premium_superior.titulo}</Home.TextoPrincipal>
                            <Home.TextoParagrafo tamanho_paragrafo="20px">{listagem_premium_superior.paragrafo}</Home.TextoParagrafo>

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

            <C.CorpoPremium fundo="#FFFFFF">
                <C.CorpoSuperior fundo="#FFFFFF" cor="#000000" grid="">
                    <Home.TextoPrincipal tamanho_titulo="40px" tipo_titulo="center">Por que ser Premium?</Home.TextoPrincipal>

                    <C.GrupoInformacoes>
                        {listagem_informacoes.map((dado, index) => (
                            <C.Informacoes key={index}>
                                <Home.HomeImagem src={dado.imagem} width="50%"/>
                                <Home.TextoPrincipal tamanho_titulo="21px">{dado.titulo}</Home.TextoPrincipal>
                                <Home.TextoParagrafo tamanho_paragrafo="16px" negrito="">{dado.paragrafo}</Home.TextoParagrafo>
                            </C.Informacoes>
                        ))}
                    </C.GrupoInformacoes>
                </C.CorpoSuperior>
            </C.CorpoPremium>
        </>
    );
}

export default Premium;