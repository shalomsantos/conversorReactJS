import React, { useState } from 'react';
import Api from './Componentes/api';
import './App.css';

const App = () => {
  const [moedaEsquerda, setMoedaEsquerda] = useState("CardMoeda");
  
  const [cotacao, setCotacao] = useState([]);
    
  const componentDidMount = async () => {
    const resposta = await Api.get('');
    this.setState({ setCotacao: resposta.data.USD_BRL });
    setCotacao(resposta.data.USD_BRL)

    console.log(cotacao)
  }

  const converter = () => {
    this.valor = this.valor * cotacao.currency
    console.log(this.valor)
  }

  const escolha = () => {
    if (moedaEsquerda == "CardMoeda_escolhida"){
      setMoedaEsquerda("CardMoeda")  
    }
    else  setMoedaEsquerda("CardMoeda_escolhida")
  }

  return (
    <div className={moedaEsquerda}>
      <div className="cardMoedaMenor">
        <div className="titulo">
          <button className="btn btnMoedaEsquerda" type="button" onClick={escolha}>USD</button>
          <h2> Para </h2>
          <button className="btn btnMoedaDireita" type="button" onClick={escolha}>BRL</button>
        </div>
        <input id="valor" ype="text" placeholder="Valor R$..."></input>
        <div className="rodape">
          <button className="btn btnLimpar" type="button">Limpar</button>
          <button className="btn btnConverter" type="button" onclick={converter}>Converter</button>
        </div>
      </div>
    </div>
  )
}

export default App;
