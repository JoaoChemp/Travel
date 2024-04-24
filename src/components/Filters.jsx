import { useState } from "react";
import styled from "styled-components";

function FilterButton() {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = (e) => {
        e.preventDefault();
        setShowFilters(!showFilters)
    }

    const Div = styled.div`
        width: 100%;
    `

    const Button = styled.button`
        position: absolute;
        bottom: -25px;
        left: 45%;
        width: 100px;
        height: 50px;
    `

    const SectionSec = styled.section`
            width: 100%; 
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 0;
            padding-bottom: 10px;
        `

        const Label = styled.label`
        width: 300px;
        height: 70px;
        display: flex;
        flex-direction: column;
        color: black;
        font-family: Poppins-semibold;
        font-size: 15px;
        color: #746D6D;
        background-collor: red;
        margin-top: 30px;
 
    `

    const Input = styled.input`
        width: 300px;
        height: 35px;
        background-color: #D9D9D9;
        outline: none;
        border: 1px;
        color: #746D6D;
        font-family: Poppins-regular;
        padding-left: 25px;
        border-radius: 15px;
    `

    const Select = styled.select`
    width: 300px;
    height: 35px;
    background-color: #D9D9D9;
    outline: none;
    border: 1px;
    color: #746D6D;
    font-family: Poppins-regular;
    padding-left: 25px;
    border-radius: 15px;
    `

    return (
        <Div>
            <Button id="btnFilter" onClick={toggleFilters}>+ Filtros</Button>
            {showFilters && (
                    <SectionSec id="SectionSec">
                    <Label>
                            Quantidade de dias:
                            <Input type="text" placeholder="Digite a quantidade de dias..." />
                        </Label>
                        <Label>
                            Transporte:
                            <Select>
                                <option value="aviao">Avião</option>
                                <option value="onibus">Ônibus</option>
                                <option value="trem">Trem</option>
                                <option value="cruzeiro">Cruzeiro</option>
                            </Select>
                        </Label>
                    
                        <Label>
                            Hospedagem:
                            <Select>
                                <option value="Hotel">Hotel</option>
                                <option value="Pousada">Pousada</option>
                                <option value="Resort">Resort</option>
                                <option value="HotelFazenda">Hotel Fazenda</option>
                            </Select>
                        </Label>
                    </SectionSec>

                )}
        </Div>
    )
}

export default FilterButton;

