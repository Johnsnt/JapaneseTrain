
import { trainsList } from "../data";

//dados do array
const returnTrains = () => {
    return trainsList;
};

//Filtra o tipo de trem
const filterTrain = (trainType) => {
    return trainsList.filter((train) => train.type === trainType);
};

const filterTrain2 = (trainName) => {
    return trainsList.filter((train) => train.name.includes('JR'));
};

export {returnTrains, filterTrain};