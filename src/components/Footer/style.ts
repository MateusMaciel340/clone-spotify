import styled from "styled-components";

// Footer Geral
export const Rodape = styled.footer`
    background-color: #000000;
`;

// Footer - Superior
export const FooterSuperior = styled.div`
    padding: 60px 0px 60px 0px; display: flex; max-width: 1200px; margin: 0 auto;
    color: white;

    div{ margin-right: 30px; }

    div:nth-child(5){ margin-left: 200px }

    @media(max-width: 976px){
        display: grid; grid-template-columns: repeat(2, 1fr);
        div:nth-child(5){
            margin-left: 0px;
        }
    }

    @media(max-width: 556px){
        display: grid; grid-template-columns: repeat(1, 1fr);
        padding-left: 30px;
    }
`;
export const Colunas = styled.div`
    &:nth-child(3){
        margin-left: 30px; margin-right: 50px;
    }

    @media(max-width: 558px){
        &:nth-child(3){
            margin: 0px;
        }
    }
`;
export const ColunasImagem = styled.img`
    @media(max-width: 892px){
        margin-left: 30px;
    }
`;
export const ColunasTitulo = styled.h1`
    color: #91927E; font-size: 12px; text-transform: uppercase;
    margin-left: 0px;
`;
export const ColunasUl = styled.ul`
    list-style: none; padding-left: 0px;
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

    &:nth-child(3){
        padding: 10px 15px 10px 15px;
    }

    &:hover{
        color: #1ED754; cursor: pointer;
    }

    @media(max-width: 892px){
        margin: 0px; margin-right: 20px;
    }
`;
export const Icone = styled.i``;

// Footer - Inferior
export const FooterInferior = styled.div`
    color: white; display: flex; max-width: 1200px; margin: 0 auto; justify-content: space-between;

    @media(max-width: 784px){
        display: grid; grid-template-columns: repeat(1, 1fr);
    }
`;
export const ColunasInferior = styled.div``;
export const ColunasInferiorUl = styled.ul<{ display?: string }>`
    display: ${props => props.display ?? "flex"}; list-style: none;
    margin: 20px 0px 44px 0px;
    
    @media(max-width: 622px){
        display: grid; grid-template-columns: repeat(1, 1fr);
    }
`;
export const ColunasInferiorLi = styled.li`
    color: #919496; font-size: 15px; margin: 10px 15px 0px 0px;
    cursor: pointer;

    &:hover{
        color: #19CD60;
    }
`;