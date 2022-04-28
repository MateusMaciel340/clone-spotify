import * as C from "../components/Suporte/style";
import * as Home from "../components/Home/style";

import { listar_titulo_suporte, listar_pontos_suporte } from "../data/menu";

function Suporte(){
    return(
        <>
        <C.CorpoCentral>
            <C.CorpoSuporte>
                    <C.CamadaCentral>
                        {listar_titulo_suporte.map((dado, index) => (
                        <C.CamadaDivisao key={index}>
                             <Home.TextoPrincipal tamanho_titulo="24px" tipo_titulo="">{dado.lista}</Home.TextoPrincipal>
 
                             <C.SuporteUl>
                                 {listar_pontos_suporte.map((dado, index) => (
                                     <C.SuporteLi key={index}>{dado.lista}</C.SuporteLi>
                                 ))}
                             </C.SuporteUl>
                        </C.CamadaDivisao>
                        ))}
                    </C.CamadaCentral>
            </C.CorpoSuporte>
        </C.CorpoCentral>
        </>
    );
}

export default Suporte;