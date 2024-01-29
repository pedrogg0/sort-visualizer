class Element {
    constructor(height) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "element");
        newDiv.style["height"] = height.toString() + "px";
        this.height = height;
        this.newDiv = newDiv;
    }
  }

function insertElements(numElements, elementsList){
    var visualizer = document.getElementById("visualizer")
    for(var i = 0; i < numElements ; i++){
        var value = Math.floor(Math.random() * 30 + 1) * 10;
        const element = new Element(value);
        elementsList.push(element)
    }
}

function showElements(elementsList){
    elementsList.forEach(element => {
        visualizer.insertAdjacentHTML('afterbegin', element.newDiv.outerHTML);
    });
}

elementsList = []
insertElements(20, elementsList);
showElements(elementsList);
