import styled from 'styled-components';
import '../fontes/fontes.css'

function Header() {
    const Header = styled.header`
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `
    const H1 = styled.h1`
        font-size: 16px;
        font-weight: 100;
        font-family: poppins-bold;
        padding-left: 50px;
        opacity: 0.8;
        `
        
        const Nav = styled.nav`
        width: 600px;
        `
        
        const Ul = styled.ul`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        opacity: 0.8;
        `
        
        const Li = styled.li`
        list-style: none;
        opacity: 0.6;
        font-size: 15px;
        font-weight: bolder;
        font-family: Poppins, sans-serif;

        &:hover {
            cursor: pointer;
            color: blue;
        }
        `


    return (
        <Header>
            <H1>TRAVEL</H1>
            <Nav>
                <Ul>
                    <Li>Início</Li>
                    <Li>Cidades</Li>
                    <Li>Contate-nos</Li>
                </Ul>
            </Nav>
        </Header>
    )
}

export default Header;