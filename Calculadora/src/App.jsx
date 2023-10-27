import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

const Titulo = styled.h1`
  text-align:center;
  font-size:5vh;
  padding:5vh;
`

const Container = styled.section`
  display:flex;
  justify-content:center;
`
const Tela = styled.input`


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
    <Titulo>Calculadora</Titulo>
  <Container>
 
  <Tela type="number" onChange={CapturarValor} />
  <Tela type="number" onChange={CapturarSegundoValor} />
  
  </Container>

  <Texto2>{resultado}</Texto2>
  <button onClick={Soma}>+</button>
  <button onClick={Subtracao}>-</button>
  <button onClick={Multiplicacao}>x</button>
  <button onClick={Divisao}>÷</button>
  <button onClick={Limpar}>C</button>
  
  
    </>
  )
}

export default App
