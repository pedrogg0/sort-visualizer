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

function insertElements(numElements, elementsList) {
    var visualizer = document.getElementById("visualizer");
    for(var i = 0; i < numElements; i++) {
        var value = Math.floor(Math.random() * 300) + 1;
        const element = new Element(value);
        elementsList.push(element);
        visualizer.appendChild(element.newDiv);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
