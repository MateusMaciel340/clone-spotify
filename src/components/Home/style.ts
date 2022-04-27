import styled from "styled-components";

export const CorpoGeral = styled.div<{ cor_geral?: string, fundo?: string, }>`
    background-color: ${props => props.cor_geral ?? "#993399;"};
    padding: 50px 0px 80px 0px;
    background-image: url(${props => props.fundo ?? ""});
`;
export const Corpo = styled.div<{ cor?: string, }>`
    max-width: 1200px; margin: 0 auto; display: grid;
    grid-template-columns: repeat(2, 1fr); padding: 10px;
    color: ${props => props.cor ?? "#FFFFFF"};

    @media(max-width: 681px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Coluna = styled.div`
    &:nth-child(2){
        text-align: center;
    }

    @media(max-width: 681px){
        padding-top: 20px;
    }
`;

export const TextoPequeno = styled.h3`
    text-transform: uppercase; font-size: 16px;
`;

export const TextoPrincipal = styled.h1`
    font-size: 60px;
`;
export const TextoParagrafo = styled.p`
    font-size: 24px; font-weight: bold;
`;

export const TextoMini = styled.p`
    font-size: 13px;
`;

export const BotaoHome = styled.button<{ fundo?: string, cor?: string,  }>`
    background-color: ${props => props.fundo ?? "#000000"}; border: none; 
    padding: 18px 25px 18px 25px; font-size: 14px; text-transform: uppercase; font-weight: bold; border-radius: 30px;
    margin: 20px 0px 20px 0px; color: ${props => props.cor ?? "#FFFFFF"};
`;

export const HomeImagem = styled.img`
    @media(max-width: 427px){
        width: 100%;
    }
`;