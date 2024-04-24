import styled from "styled-components";
import '../fontes/fontes.css'

function Footer() {
    
    const Footer = styled.footer`
       margin: 0;
       width: 100%;
       height: 380px;
       background-color: #D9D9D9;
       display: flex;
       flex-direction: column;
       justify-content: flex-end;
       align-items: center;
    `

    const P = styled.p`
       font-family: Poppins-light;
       font-size: 20px;
       margin-top: 100px;
    `

    return (
        <Footer>
            <P>Desenvolvido por João Chemp</P>
            <P>html - styled-components - javascript - react + vite - nodejs</P>
        </Footer>
    )
}

export default Footer;