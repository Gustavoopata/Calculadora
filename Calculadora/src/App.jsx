import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

const CalculadoraCaixa = styled.section`



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



  

  return (
    <>
    <CalculadoraCaixa>
  <h1>Calculadora</h1>
  <input type="number" onChange={CapturarValor} />
  <input type="number" onChange={CapturarSegundoValor} />
  <button onClick={Soma}>+</button>
  <button onClick={Subtracao}>-</button>
  <button onClick={Multiplicacao}>x</button>
  <button onClick={Divisao}>÷</button>
  <h1>{resultado}</h1>
  </CalculadoraCaixa>
    </>
  )
}

export default App
