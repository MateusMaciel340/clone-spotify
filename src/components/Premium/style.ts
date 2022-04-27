import styled from "styled-components";

export const CorpoPremium = styled.div<{ fundo?: string }>`
    background-color: ${props => props.fundo ?? "#993399"}; padding: 40px 0px 40px 0px;
    padding: 10px;
`;

export const CorpoSuperior = styled.div<{ fundo?: string, cor?: string, grid?: string, }>`
    background-color: ${props => props.fundo ?? "#993399"}; max-width: 1200px; 
    margin: 0 auto; color: ${props => props.cor ?? "#FFFFFF"}; 
    display: ${props => props.grid ?? "grid"}; grid-template-columns: repeat(2, 1fr);

    @media(max-width: 819px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const DivisaoBotoes = styled.div`
    display: grid; grid-template-columns: 45% 30%;

    @media(max-width:1009px){
        grid-template-columns: 40% 40%;
    }
`;

// Por que ser Premium?
export const GrupoInformacoes = styled.div`
    display: grid; grid-template-columns: repeat(4, 1fr);

    @media(max-width: 716px){
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: 442px){
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Informacoes = styled.div<{ tipo?: string, }>`
    text-align: ${props => props.tipo ?? "center"}; margin: 20px 0px 40px 0px;
`;

// Escolha seu plano Premium
export const PlanosCard = styled.div`
    background-color: #FFFFFF; padding: 10px; border-radius: 5px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); margin-right: 20px;
`;

export const SelecaoAssinatura = styled.div`
    background-color: #2E77D0; color: #FFFFFF; width: 90%;
    padding: 5px 5px 5px 5px; font-weight: bold; border-radius: 5px;
    font-size: 15px;
`;

export const CardLinha = styled.hr`
    margin: 80px 0px 0px 0px;
    border: 0.5px solid #787878;
`;

export const CardUl = styled.ul`
    margin: 15px 0px 150px 0px;
`;
export const CardLi = styled.li`
    margin: 10px 0px 10px 0px; font-size: 18px;
`;