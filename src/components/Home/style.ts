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

export const TextoPrincipal = styled.h1<{ tamanho_titulo?: string, }>`
    font-size: ${props => props.tamanho_titulo ?? "60px"};
`;
export const TextoParagrafo = styled.p<{ tamanho_paragrafo?: string, }>`
    font-weight: bold;
    font-size: ${props => props.tamanho_paragrafo ?? "24px"};
`;

export const TextoMini = styled.p`
    font-size: 13px;
`;

export const BotaoHome = styled.button<{ fundo?: string, cor?: string, borda?: string,  }>`
    background-color: ${props => props.fundo ?? "#000000"}; 
    padding: 18px 25px 18px 25px; font-size: 14px; text-transform: uppercase; font-weight: bold; border-radius: 30px; cursor: pointer;
    margin: 20px 10px 20px 0px; color: ${props => props.cor ?? "#FFFFFF"};
    border: 2px solid ${props => props.borda ?? "none"};
`;

export const HomeImagem = styled.img`
    @media(max-width: 427px){
        width: 100%;
    }
`;