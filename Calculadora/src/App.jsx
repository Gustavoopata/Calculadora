import { useState } from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
  text-align:center;
  font-size:5vh;
  padding:5vh;
  color:white;
`

const Container = styled.section`
  display:flex;
  justify-content:center;
`
const Botao1 = styled.button`
  margin:10px;
  width:4vw;
  height:8vh;
  font-size:larger;
  background-color:#A3A3A3;
`
const Botao2 = styled.button`
  margin:10px;
  width:4vw;
  height:8vh;
  font-size:larger;
  background-color:#A3A3A3;
`
const Botao3 = styled.button`
  margin:10px;
  width:4vw;
  height:8vh;
  font-size:larger;
  background-color:#A3A3A3;
`
const Botao4 = styled.button`
  margin:10px;
  width:4vw;
  height:8vh;
  font-size:larger;
  background-color:#A3A3A3;
`
const Botao5 = styled.button`
  margin:10px;
  width:4vw;
  height:8vh;
  font-size:larger;
  background-color:#FFA500;
`

const Tela = styled.input`
width:10px;
flex: 1;
padding: 8px;
font-size: 1em;
border: 1px solid #ccc;
border-radius: 3px;
`
const Fundo = styled.body`
background-color:black;
padding:300px;
`
const Resposta = styled.h1`
color:white;
text-align:center;

`

  


function App() {
  const [primeiroValor, setPrimeiroValor] = useState()
  const [segundoValor, setSegundoValor] = useState()
  const [resultado,setResultado] = useState()

  const  CapturarValor = (item) => {
    setPrimeiroValor(Number(item.target.value))
  }
  const CapturarSegundoValor = (item) =>{
    setSegundoValor(Number(item.target.value))
  }
  const Soma = () =>{
    setResultado(primeiroValor + segundoValor)
  }
  const Subtracao = () =>{
    setResultado(primeiroValor - segundoValor)
  }
  const Multiplicacao = () =>{
    setResultado(primeiroValor * segundoValor)
  }
  const Divisao = () =>{
    setResultado(primeiroValor / segundoValor)
  }
  const Limpar = () =>{
    setResultado('0')
  }
                  
  return (
    <> 
    <Fundo>
    <Titulo>Calculadora</Titulo>
  <Container>
 
  <Tela type="number" onChange={CapturarValor} />
  <Tela type="number" onChange={CapturarSegundoValor} />
  
  </Container>

  <Resposta>{resultado}</Resposta>
  <Container>
  <Botao1 onClick={Soma}>+</Botao1>
  <Botao2 onClick={Subtracao}>-</Botao2>
  <Botao3 onClick={Multiplicacao}>x</Botao3>
  <Botao4 onClick={Divisao}>÷</Botao4>
  <Botao5 onClick={Limpar}>C</Botao5>
  </Container>
  </Fundo>
    </>
  )
}

export default App
