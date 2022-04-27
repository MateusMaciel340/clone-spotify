import styled from "styled-components";

export const CorpoPremium = styled.div`
    background-color: #993399; padding: 40px 0px 40px 0px;
    padding: 10px;
`;

export const CorpoSuperior = styled.div`
    background-color: #993399; max-width: 1200px; margin: 0 auto; color: #FFFFFF;
    display: grid; grid-template-columns: repeat(2, 1fr);

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