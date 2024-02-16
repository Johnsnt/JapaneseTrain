import "./App.css";

import React, { useState } from "react";
import { trainsList } from "./data/index.js";
import GalleryItem from "./components/Card/index.jsx";


function App() {

  // Estado para armazernar o tipo de trem
    const [trainType, setTrainType] = useState(trainsList);

  //Filtra o tipo de trem
  const filterTrain = (trainType) => {
    return trainsList.filter((train) => train.trainType === trainType)
  };
 
  // atualiza o tipo de trem ao pressionar o botão
  const handleTrainTypeFilter = (trainType) => {
    setTrainType(filterTrain(trainType))
  };



  return (
    <div className="App">
      <button onClick={() => handleTrainTypeFilter("express")}>Filtrar por Trem Expresso</button>
      <button onClick={() => handleTrainTypeFilter("commuter")}>Filtrar por Trem Commuter</button>
      <section className="secao-train-images">
      <div className="gallery">
        {trainType.map((item) => (
        <GalleryItem
          key = {item.id}
          name={item.name}
          img={item.img} 
        />
        ))};
      </div>
      </section>
      
    </div>
  );
}

export default App;
