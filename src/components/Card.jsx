import styled from "styled-components";
import '../fontes/fontes.css'
import localeicon from '../img/pngwing.com.png'

function Card(props) {

    const Section = styled.section`
        width: 450px;
        height: 535px:
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 1px 5px black;
        margin-top: 50px;

        &:hover {
            box-shadow: 5px 5px 10px black;
        }
    `
    const Img = styled.img`
        margin: 0;
        padding: 0;
        width: 450px;
        height: 240px;
    `

    const Locale = styled.img`
        width: 15px;
        height: 15px;
    `

    const Article = styled.article`
        display: flex;
        margin: 0;
        padding-left: 30px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 350px;
        height: 295px;
        align-items: flex-start;
    `

    const H1 = styled.h1`
        font-size: 22px;
        font-family: Poppins-bold;
        margin: 0;
        `
        
        const P = styled.p`
        font-size: 13px;
        font-family: Poppins-light;
        margin: 0;
        opacity: 0.8;
    `

    const Div = styled.div`
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        `
        
        const H2 = styled.h2`
        margin: 0;
        font-size: 20px;
        font-family: Poppins-semibold;
        opacity: 0.8;
        `

        const Hr = styled.hr`
            width: 100%;
            height: .5px;
            background-color: black;
            margin: 0;
        `
        
        const Button = styled.button`
        margin-left: 100px;
        width: 170px;
        height: 40px;
    `

    return (
            <Section price={props.price}>
                <Img src={props.src}/>
                <Article>
                    <H1>{props.title}</H1>
                    <P><Locale src={localeicon} id="locale" alt="icone" />{props.locale}</P>
                    <Hr></Hr>
                    <Div>
                        <P>Planos de 1 a 7 dias</P>
                        <H2>{props.price}</H2>
                    </Div>
                    <Hr></Hr>
                    <Button>VER PLANOS</Button>

                </Article>


            </Section>
    )
}

export default Card;