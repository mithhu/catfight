//overRide avatar handle
const overRideHandle = selectedElement => {
    while (selectedElement.innerHTML) {
        [index1, index2, index] = matrixIndex();
        selectedElement = document.getElementById(index);
    }
    return [selectedElement, index1, index2];
};

//Get the index of player and weapon
const matrixIndex = () => {
    let index1 = getRandomIndex(0, store.length - 1);
    let index2 = getRandomIndex(0, store.length - 1);
    let index = `${index1}${index2}`;
    return [index1, index2, index];
};

//Get random index
const getRandomIndex = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};