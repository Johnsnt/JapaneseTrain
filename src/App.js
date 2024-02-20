import "./App.css";
import React, { useState } from "react";
import Header from './components/Header/';
import TrainList from "./components/TrainList/";
import { returnTrains, filterTrain } from './servico/';

function App() {

  //Estado para armazernar o tipo de trem
  const [trainType, setTrainType] = useState(returnTrains());


  //Atualiza o tipo de trem ao pressionar o botão
  const handleTrainTypeFilter = (trainType) => {
    setTrainType(filterTrain(trainType));
  };

  //Limpa o filtro
  const handleClearFilter = () => {
    setTrainType(returnTrains());
  };

  return (
    <div>
      <Header
        express={() => handleTrainTypeFilter("express")}
        commuter={() => handleTrainTypeFilter("commuter")}
        clean={() => handleClearFilter()}
      />
      <TrainList
        trainCollection={trainType}
      />
    </div>
  );
}

export default App;
