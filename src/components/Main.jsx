import Card from "./Card.jsx";
import styled from "styled-components";
import { ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

function Main() {
    const Main = styled.main`
    width: 100%;
    height: max-content;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    `
    
    const Div = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: max-content;
        margin-top: 100px;
    
    `
    const Icons = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        height: max-content;
        margin-top: 100px;
    
    `

    const H1 = styled.h1`
        font-family: Poppins-light;
        font-size: 30px;
        opacity: 0.7;
        margin-top: 50px;

        @media (max-width: 1024px) {
            padding: 15px;
            font-size: 25px;
        }
    `

    const  ArrowLeft = styled(ArrowLeftIcon)`
        &:hover {
            cursor: pointer;
        }
    `

    const ChevronLeft = styled(ChevronLeftIcon)`
        &:hover {
            cursor: pointer;
        }
    `

    const ChevronRight = styled(ChevronRightIcon)`
        &:hover {
            cursor: pointer;
        }
    `

    const ArrowRight = styled(ArrowRightIcon)`
        &:hover {
            cursor: pointer;
        }
    `
    return (
        <Main>
            <H1 >MOSTRANDO RESULTADOS DE BRASIL</H1>
            <Div>
                <Card src="https://www.transportal.com.br/noticias/wp-content/uploads/2022/08/jardim-botanico-de-curitiba-area-externa.jpg" title="Jardim botânico" locale="Curitiba - PR" price="600,00"/>
                <Card src="https://riotur.rio/wp-content/uploads/2015/09/14521730864_3b0816ce80_c.jpg" title="Pão de açucar" locale="Rio de Janeiro - RJ" price="R$ 550,00"/>
                <Card src="https://www.recantodossonhos.com.br/wp-content/uploads/2019/03/post-1080x675.png" title="Campos do Jordão" locale="Campos do Jordão - SP" price="R$ 930,00"/>
                <Card src="https://www.viagensbacanas.com.br/wp-content/uploads/2021/12/Nascente-Azul-Flutuacao-Bonito-foto-divulgacao.jpg" title="Nascente azul" locale="Bonito - MS" price="R$ 1240,00"/>
                <Card src="https://www.dicasdeviagem.com/wp-content/uploads/2022/01/baia-dos-porcos-morro-noronha-scaled.jpg" title="Fernando de Noronha" locale="Fernando de Noronha - PE" price="R$ 1000,00"/>
                <Card src="https://www.ark7.com.br/fotos/projeto/galeria/1675185459.jpg" title="Florianópolis" locale="Florianópolis - SC" price="R$ 1100,00"/>
            
            
            </Div>
            <Icons>

                <ArrowLeft  />

                <ChevronLeft />
                <ChevronRight />

                <ArrowRight />

            </Icons>
        </Main>
    )
}

export default Main;