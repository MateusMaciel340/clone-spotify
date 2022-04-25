import styled from "styled-components";

// Footer Geral
export const Rodape = styled.footer`
    background-color: #000000;
`;

// Footer - Superior
export const FooterSuperior = styled.div`
    padding: 60px 0px 60px 0px; display: flex; max-width: 1200px; margin: 0 auto;
    color: white;

    div{
        margin-right: 30px;
    }

    div:nth-child(5){
        margin-left: 200px;
    }
`;
export const Colunas = styled.div``;
export const ColunasImagem = styled.img`
    width: 100%;
`;
export const ColunasTitulo = styled.h1`
    color: #91927E; font-size: 12px; text-transform: uppercase;
    margin-left: 40px;
`;
export const ColunasUl = styled.ul`
    list-style: none;
`;
export const ColunasLi = styled.li`
    margin: 20px 0px 20px 0px; cursor: pointer;

    &:hover{
        color: #1ED754;
    }
`;

// Footer - Superior | Icones
export const IconesUl = styled.ul`
    list-style: none; display: flex;
`;
export const IconesLi = styled.li`
    margin-left: 20px; background-color: #222326;
    padding: 10px 10px 10px 10px; border-radius: 100px;

    &:hover{
        color: #1ED754; cursor: pointer;
    }
`;
export const Icone = styled.i``;