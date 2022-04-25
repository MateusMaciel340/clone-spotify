import * as C from "./style";
import LogoSpotify from "../../assets/header/header-logo.png";
import { useState, useEffect } from "react";
import { listagem_menu } from "../../data/menu";
import { Link } from "react-router-dom";

function Header(){

    const [listagemMenu, SetListagemMenu] = useState(listagem_menu);

    return(
        <C.Nav>
            <C.NavLogo>
                <Link to="/">
                    <C.NavLogoImagem src={LogoSpotify}/>
                </Link>
            </C.NavLogo>
            <C.NavMenu>
                <C.NavMenuUl>
                    {listagemMenu.map((menu, index) => (
                        menu.titulo === "|" ? (
                            <C.NavMenuLi key={index} cor="#FFFFFF" cursor="auto">
                                <Link to={menu.link}>{menu.titulo}</Link>
                            </C.NavMenuLi>
                        ):(
                            <C.NavMenuLi key={index}>
                                <Link to={menu.link}>{menu.titulo}</Link>
                            </C.NavMenuLi>
                        )
                    ))}
                </C.NavMenuUl>
            </C.NavMenu>
        </C.Nav>
    );
}

export default Header;