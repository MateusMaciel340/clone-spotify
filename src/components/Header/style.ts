import styled from "styled-components";

// Navegação Geral
export const Nav = styled.header`
    background-color: #000000; display: flex; padding: 15px 0px 10px 0px;
    justify-content: space-between;

    @media(max-width: 945px){
        flex-direction: column; text-align: center; margin: 0px;
    }
`;

// Navegação do Logo
export const NavLogo = styled.div`
    margin-left: 90px;
`;
export const NavLogoImagem = styled.img`
    cursor: pointer;
`;

// Navegação do Menu
export const NavMenu = styled.div``;
export const NavMenuUl = styled.ul`
    display: flex; list-style: none; font-weight: bold;
    margin-right: 100px;

    @media(max-width: 570px){
        display: grid; grid-template-columns: repeat(3, 1fr);

        li{
            margin: 5px 0px 5px 0px;
        }
    }

    @media(max-width: 338px){
        display: grid; grid-template-columns: repeat(1, 1fr); 
    }
`;
export const NavMenuLi = styled.li<{ cor?: string, cursor?: string, }>`
    a{
        text-decoration: none; color: #FFFFFF; margin-left: 20px;
        margin-right: 20px;
    }
    a:hover{
        color: ${props => props.cor ?? "#16D460"};
        cursor: ${props => props.cursor ?? "pointer"};
    }
`;