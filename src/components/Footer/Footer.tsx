import * as C from "./style";
import LogoSpotify from "../../assets/header/header-logo.png";
import { useState } from "react";

import { 
    listagem_footer_empresa, listagem_footer_comunidade, listagem_footer_links_uteis,
    listagem_icones,
} from "../../data/menu";

function Footer(){

    const [footerEmpresa, setFooterEmpresa] = useState(listagem_footer_empresa);
    const [footerComunidade, setFooterComunidade] = useState(listagem_footer_comunidade);
    const [footerLinksUteis, setFooterLinksUteis] = useState(listagem_footer_links_uteis);
    const [footerIcones, setFooterIcones] = useState(listagem_icones);

    return(
        <C.Rodape>
            <C.FooterSuperior>
                <C.Colunas>
                    <C.ColunasImagem src={LogoSpotify}/>
                </C.Colunas>

                <C.Colunas>
                    <C.ColunasTitulo>empresa</C.ColunasTitulo>
                    <C.ColunasUl>
                        {footerEmpresa.map((empresa, index) => (
                            <C.ColunasLi key={index}>{empresa.lista}</C.ColunasLi>
                        ))}
                    </C.ColunasUl>
                </C.Colunas>

                <C.Colunas>
                    <C.ColunasTitulo>comunidades</C.ColunasTitulo>
                    <C.ColunasUl>
                        {footerComunidade.map((comunidade, index) => (
                            <C.ColunasLi key={index}>{comunidade.lista}</C.ColunasLi>
                        ))}
                    </C.ColunasUl>
                </C.Colunas>

                <C.Colunas>
                    <C.ColunasTitulo>links úteis</C.ColunasTitulo>
                    <C.ColunasUl>
                        {footerLinksUteis.map((links_uteis, index) => (
                            <C.ColunasLi key={index}>{links_uteis.lista}</C.ColunasLi>
                        ))}
                    </C.ColunasUl>
                </C.Colunas>

                <C.Colunas>
                    <C.IconesUl>
                        {footerIcones.map((icones, index) => (
                            <C.IconesLi>
                                <C.Icone className={icones.lista}/>
                            </C.IconesLi>
                        ))}
                    </C.IconesUl>
                </C.Colunas>
            </C.FooterSuperior>
        </C.Rodape>
    );
}

export default Footer;