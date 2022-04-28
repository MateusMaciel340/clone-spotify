import styled from "styled-components";

export const CorpoSuporte = styled.div<{ fundo?: string, }>`
    max-width: 1200px; margin: 0 auto;
    background-color: ${props => props.fundo ?? "#EEEEEE"}; padding: 10px;
`;

export const CorpoCentral = styled.div<{ fundo?: string, tipo?: string, }>`
    background-color: ${props => props.fundo ?? "#EEEEEE"};
    padding-top: 40px; padding-bottom: 40px;
    text-align: ${props => props.tipo ?? ""};
`;

export const CamadaCentral = styled.div`
    display: grid; grid-template-columns: repeat(3, 1fr);

    @media(max-width: 738px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 420px){
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const CamadaDivisao = styled.div`
    h1{
        margin-left: 40px;
    }
`;

export const SuporteUl = styled.ul`
    list-style: none; margin-top: 40px;
`;
export const SuporteLi = styled.li`
    color: #117A37; font-weight: bold; font-size: 18px; cursor: pointer;

    margin: 15px 0px 10px 0px;

    &:hover{
        text-decoration: underline;
    }
`;

export const AgrupamentoCentralizado = styled.div`
    display: grid; grid-template-columns: repeat(3, 1fr);
`;