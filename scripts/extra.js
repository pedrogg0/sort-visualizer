class Element {
    constructor(height) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "element");
        newDiv.style.height = height + "px";
        newDiv.style.backgroundColor = "#146C94";
        this.height = height;
        this.newDiv = newDiv;
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function insertElements(numElements, elementsList) {
    var visualizer = document.getElementById("visualizer");
    let unitValue = 300/numElements;
    let currentValue = unitValue;
    for(var i = 0; i < numElements; i++) {
        const element = new Element(currentValue);
        elementsList.push(element);
        currentValue += unitValue;
        visualizer.appendChild(element.newDiv);
    }
    shuffle(elementsList);
    showElements(elementsList);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
