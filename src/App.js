import "./App.css";
import React, { useState } from "react";
import Header from './components/Header/';
import TrainList from "./components/TrainList/";
import { returnTrains, filterTrain, searchTrain } from './servico/';

function App() {

  //Estado para armazernar o tipo de trem
  const [trainType, setTrainType] = useState(returnTrains());
  const [searchText, setSearchText] = useState("");


  //Atualiza o tipo de trem ao pressionar o botão
  const handleTrainTypeFilter = (trainType) => {
    setTrainType(filterTrain(trainType));
    setSearchText("");
  };

  //Limpa o filtro
  const handleClearFilter = () => {
    setTrainType(returnTrains());
    setSearchText("");
  };

  const handleSearchTrain = (text) => {
    setSearchText(text);
    setTrainType(searchTrain(text));
  };

  return (
    <div>
      <Header
        express={() => handleTrainTypeFilter("express")}
        commuter={() => handleTrainTypeFilter("commuter")}
        clean={() => handleClearFilter()}
        typedText={searchText}
        handleTextFilter={(texto) => handleSearchTrain(texto.target.value)}
      />
      <TrainList
        trainCollection={trainType}
      />
    </div>
  );
}

export default App;
