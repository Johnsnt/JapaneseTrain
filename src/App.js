import './App.css';

import React, { useState } from 'react';
import {royaltrain, nex, musky} from './assets/specialExpress/index';
import { series733, enoden } from './assets/commuterRail';


function App() {
  // Estado para armazernar o tipo de trem
    const [trainType, setTrainType] = useState('');
 
  // Define a função para atualizar o tipo de trem ao pressionar o botão
  const handleExpressFilter = () => {
    setTrainType('express')
  }

  const handleCommuterFilter = () => {
    setTrainType('commuter')
  }

  //Mapeia o tipo de trem para sua respectiva lista de imagens
  const imagesByType = {
    express: [royaltrain, nex, musky],
    commuter: [series733, enoden]
  };


  return (
    <div className="App">
      <button onClick={handleExpressFilter}>Filtrar por Trem Expresso</button>
      <button onClick={handleCommuterFilter}>Filtrar por Trem Commuter</button>
      <div className="gallery">
        {/* Renderiza as imagens correspondentes ao tipo de trem selecionado */}
        {trainType && imagesByType[trainType].map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={`Imagem ${index + 1} do tipo de trem ${trainType}`}
            />
          ))}
      </div>
      
    </div>
  );
}

export default App;
