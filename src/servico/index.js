import { trainsList } from "../data";

//dados da coleção de trens
const returnTrains = () => {
    return trainsList;
};

//Filtra o tipo de trem
const filterTrain = (trainType) => {
    return trainsList.filter((train) => train.type === trainType);
};

//Busca o trem com base em seu nome ou tipo
const searchTrain = (text) => {
    if (text.length >= 2) {
        return trainsList.filter(
            (train) =>
                train.name.toLowerCase().includes(text.toLowerCase())
        );
    } else {
        return trainsList;
    }
};

export { returnTrains, filterTrain, searchTrain };