import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';

export function Calculator () {
    const [som, setSom] = useState(0)
    const [ operator, setOperator] = useState()
    const [firstSom, setFirstSom] = useState(0)


    function InputNum(e) {
        const input = e.target.value 
        if(som === 0) {
            setSom(input) 
        } else{
        setSom(som + input)
        }
    }
    function porcent () {
        setSom(som/100)
    }
    function clearCalc () {
        setSom(0)
    }

    function ChangePosandNeg () {
        if(som >0) {
            setSom(-som)
        } else {
            setSom(Math.abs(som))
        }
    }
    return (
        <>
        <Box m={3}>
        <Container fixed maxWidth="xs">
        <DivStyled>
            <H1Styled>{som}</H1Styled>
            <button onClick={InputNum} value={1}>1</button>
            <button onClick={InputNum} value={2}>2</button>
            <button onClick={InputNum} value={3}>3</button>
            <button onClick={clearCalc}>C</button>
            <button onClick={InputNum} value={4}>4</button>
            <button onClick={InputNum} value={5}>5</button>
            <button onClick={InputNum} value={6}>6</button>
            <button>X</button>
            <button onClick={InputNum} value={7}>7</button>
            <button onClick={InputNum} value={8}>8</button>
            <button onClick={InputNum} value={9}>9</button>
            <button>+</button>
            <button>,</button>
            <button onClick={InputNum} value={0}>0</button>
            <button>/</button>
            <button>-</button>
            <BgButtonIconsStyled sx={{background: '#ffeb3b',}} onClick={porcent}>%</BgButtonIconsStyled>
            <BgButtonIconsStyled onClick={ChangePosandNeg}>+/-</BgButtonIconsStyled>
            <button>=</button>
        </DivStyled>
        </Container>
        </Box>
        </>
    )
}

const DivStyled = styled.div`
    height: 250px;
    width: 110px;
    background-color: black;
    
`
const H1Styled = styled.h1`
color: white;
`

const BgButtonIconsStyled = styled.button`
    background-color: red;
    border-radius: 150px;
`