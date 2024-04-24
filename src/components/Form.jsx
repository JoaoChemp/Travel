import styled from "styled-components";
import travelimg from "../img/pexels-maxravier-2253818.jpg"
import "../fontes/fontes.css"
import { useEffect } from "react";
import FilterButton from "./Filters";

function Form() {

    const Body = styled.body`
        width: 100vw;
        height: max-contain;
        background-image: url('${travelimg}');
        background-position: center;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const Form = styled.form`
        width: 80vw;
        height: max-content;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        align-items: center;
        padding-bottom: 50px;
        border-radius: 15px;
        margin-bottom: 100px;
        
        @media (max-width: 1024px) {
            flex-wrap: wrap;
        }
    `

    const Article = styled.article`
        width: 60vw;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        text-align: left;
        margin-top: 100px;
        @media (max-width: 1024px) {
            font-size: 20px;
            justify-content: flex-end;
        }
    `

    const H1 = styled.h1`
        font-size: 50px;
        font-family: Poppins-bold;
        font-weight: 900;   
        color: white;
        margin: 0;

        @media (max-width: 1024px) {
            font-size: 35px;
        }
        `
        
        const P = styled.p`
        font-size: 1.3em;
        font-family: Poppins-semibold;
        font-weight: bolder; 
        color: white;
        margin-left: 20px;
        
        @media (max-width: 1024px) {
                font-size: 1em;
                margin-left: 20px;
        }
    `

    const Label = styled.label`
        width: 20vw;
        height: 70px;
        display: flex;
        flex-direction: column;
        color: black;
        font-family: Poppins-semibold;
        font-size: 15px;
        color: #746D6D;
        margin-top: 30px;

        @media (max-width: 1024px) {
            font-size: 12px;
            width: 50vw;
        }
 
    `

    const Input = styled.input`
        width: 20vw;
        height: 35px;
        background-color: #D9D9D9;
        outline: none;
        border: 1px;
        color: #746D6D;
        font-family: Poppins-regular;
        padding: 0px 25px;
        border-radius: 15px;

        @media (max-width: 1024px) {
            font-size: 10px;
            width: 50vw;
       }
    `

    const Select = styled.select`
    width: 20vw;
    height: 35px;
    background-color: #D9D9D9;
    outline: none;
    border: 1px;
    color: #746D6D;
    font-family: Poppins-regular;
    padding: 0px 25px;
    border-radius: 15px;
    @media (max-width: 1024px) {
        width: 50vw;
    }
    `

    const InputRange = styled.input`
        padding: 0;
        width: 20vw;
        height: 35px;

        @media (max-width: 1024px) {
             margin: 0;
             width: 50vw;
        }
    `

    const InputSubmit = styled.button`
        position: absolute;
        right: 30px;
        bottom: 15px;
        height: 40px;
        width: 150px;
        font-family: Poppins-bold;
        background-color: green;
        color: white;
        opacity: 0.8;

    `

    const Button = styled.button`
        position: absolute;
        bottom: -25px;
        left: 40%;
        width: 100px;
        height: 50px;
    `
    const Div = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        padding: 0;
    `

    const H2 = styled.h2`
        font-family: Poppins-semibold;
        font-size: 15px;
        margin: 0;
        padding: 0;
        color: black;
        opacity: 0.5;
        display: flex;
        flex-direction: row;
        align-items: center;
        

        #price {
            font-size: 20px;
            color: black;
            opacity: 0.9;
            margin-left: 0px;
        }

        @media (max-width: 1024px) {
            font-size: 12px;
        }
    `

    const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 0;

    @media (max-width: 1024px) {
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

    useEffect(() => {
        const price = document.getElementById('price');
        const input = document.getElementById('range');
        input.addEventListener('input', () => {
            price.textContent = input.value;
            input.value = input.value;
        })
    }, [])
    
    return (
        <Body>
            <Article>
                <H1>VIAJE PELO MUNDO</H1>
                <P>FAÇA A SUA VIAGEM CONOSCO</P>
            </Article>
            <Form id="form">
                <Section id="firstForm">
                    <Label>
                        Informe o seu destino:
                        <Input type="text" id="destino" className="text" placeholder="Digite o nome do seu destino..." />
                    </Label>
                    <Label>
                        Escolha a sua data:
                        <Input type="date" className="date" placeholder="dd / mm / aaaa" />
                    </Label>
                
                    <Div>
                        <H2>Preço máximo:        R$   <H2 id="price">0</H2></H2>
                        <InputRange type="range" id="range" mix="0" value="0" step={100} max="5000" />
                    </Div>
                </Section>
                <FilterButton />
                
            </Form>
        </Body>
    )
}

export default Form;