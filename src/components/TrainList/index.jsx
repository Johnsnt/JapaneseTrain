import './TrainList.css';
import { useState } from 'react';
import GalleryItem from '../Card';
import {arrow, eastJRLogo} from '../../assets/items/'
import {returnTrains, filterTrain} from '../../servico/'

export default function TrainList() {
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
        <>
            <header>
            <img src={eastJRLogo} alt="JR_Logo" id="logo" />
            <div className="btn-filter">
            <button onClick={() => handleTrainTypeFilter("express")}>Special Express</button>
            <button onClick={() => handleTrainTypeFilter("commuter")}>Commuter Rail</button>
            <button onClick={handleClearFilter}>Limpar Filtro</button>
            </div>
            </header>

            <a href="#top" className="arrowBtn">
                <img src={arrow} alt="topArrow" />
                
            </a>
            
            <section className="secao-train-images" id="top">
                <div className="gallery">
                    {trainType.map((item) => (
                        <GalleryItem
                            key={item.id}
                            name={item.name}
                            img={item.img}
                        />
                    ))}
                </div>
            </section>
            <footer>
                <p>aaaa awdwfa</p>
            </footer>
        </>
    );
};


