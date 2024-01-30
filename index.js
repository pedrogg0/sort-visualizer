class Element {
    constructor(height) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "element");
        newDiv.style.height = height + "px";
        this.height = height;
        this.newDiv = newDiv;
    }
}

function insertElements(numElements, elementsList) {
    var visualizer = document.getElementById("visualizer");
    for(var i = 0; i < numElements; i++) {
        var value = Math.floor(Math.random() * 300) + 1;
        const element = new Element(value);
        elementsList.push(element);
        visualizer.appendChild(element.newDiv);
    }
}

function showElements(elementsList){
    var visualizer = document.getElementById("visualizer");
    while (visualizer.lastElementChild) {
        visualizer.removeChild(visualizer.lastElementChild);
    }
    elementsList.forEach(element => {
        visualizer.appendChild(element.newDiv);
    });
}

async function selectionSort(elementsList) {
    
    for (let i = 0; i < elementsList.length - 1; i++) { // Recorre lista de elementos
        let minIndex = i;
        //Swap Animation
        elementsList[minIndex].newDiv.style.backgroundColor = "red";
        await sleep(100);
        elementsList[minIndex].newDiv.style.backgroundColor = "white";

        for (let j = i + 1; j < elementsList.length; j++) {
            if (elementsList[j].height < elementsList[minIndex].height) {
                minIndex = j;
            }
        }
        let aux = elementsList[i];
        elementsList[i] = elementsList[minIndex];
        elementsList[minIndex] = aux;  

        showElements(elementsList);
        
        //Swap Animation
        elementsList[minIndex].newDiv.style.backgroundColor = "red";
        await sleep(100);
        elementsList[minIndex].newDiv.style.backgroundColor = "white";
    }
    return elementsList;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var elementsList = [];
insertElements(20, elementsList);
selectionSort(elementsList);
console.log(elementsList);

