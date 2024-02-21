import { trainsList } from "../data";

//dados do array
const returnTrains = () => {
    return trainsList;
};

//Filtra o tipo de trem
const filterTrain = (trainType) => {
    return trainsList.filter((train) => train.type === trainType);
};

const searchTrain = (text) => {
    return trainsList.filter(
        (train) =>
            train.name.toLowerCase().includes(text.toLowerCase())
    );
};

export { returnTrains, filterTrain, searchTrain };