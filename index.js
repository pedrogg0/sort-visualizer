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
//TODO: Merge with randomize
function insertElements(numElements, elementsList) {
    var visualizer = document.getElementById("visualizer");
    for(var i = 0; i < numElements; i++) {
        var value = Math.floor(Math.random() * 300) + 1;
        const element = new Element(value);
        elementsList.push(element);
        visualizer.appendChild(element.newDiv);
    }
}
//Show the elements of the list in the visualizer
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
        elementsList[minIndex].newDiv.style.backgroundColor = "#146C94";

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
        elementsList[minIndex].newDiv.style.backgroundColor = "#146C94";
    }
    return elementsList;
}

async function bubbleSort(elementsList){
    for (var i = 0; i < elementsList.length; i++) {
        // Last i elements are already in place  
        for (var j = 0; j < (elementsList.length - i - 1); j++) {
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (elementsList[j].height > elementsList[j + 1].height) {           
                // If the condition is true
                // then swap them
                var temp = elementsList[j]
                elementsList[j] = elementsList[j + 1]
                elementsList[j + 1] = temp
                showElements(elementsList);

                //Swap Animation
                elementsList[j].newDiv.style.backgroundColor = "green";
                elementsList[j+1].newDiv.style.backgroundColor = "red";
                await sleep(50);
                elementsList[j+1].newDiv.style.backgroundColor = "#146C94";
                elementsList[j].newDiv.style.backgroundColor = "#146C94";
            }
        }
    }
}

async function insertionSort(elementsList){
    let i, key, j;
    for (i = 1; i < elementsList.length; i++){
        key = elementsList[i];
        j = i - 1;
        key.newDiv.style.backgroundColor = "red";
        while (j >= 0 && elementsList[j].height > key.height){

            showElements(elementsList);
            await sleep(50);
            elementsList[j + 1] = elementsList[j];
            j = j - 1;
            elementsList[j + 1] = key;
            showElements(elementsList);
            await sleep(50);
        }
        key = key.newDiv.style.backgroundColor = "#146C94";
    }
}

async function swap(elementsList, leftIndex, rightIndex){
    var temp = elementsList[leftIndex];
    elementsList[leftIndex].newDiv.style.backgroundColor = "red";
    elementsList[rightIndex].newDiv.style.backgroundColor = "orange";
    showElements(elementsList);
    await sleep(200);
    elementsList[leftIndex] = elementsList[rightIndex];
    elementsList[rightIndex] = temp;
    showElements(elementsList);
    await sleep(200);
    elementsList[leftIndex].newDiv.style.backgroundColor = "#146C94";
    elementsList[rightIndex].newDiv.style.backgroundColor = "#146C94";
}

async function partition(elementsList, left, right) {
    var pivot   = elementsList[Math.floor((right + left) / 2)], //middle element
    i       = left, //left pointer
    j       = right; //right pointer
    pivot.newDiv.style.backgroundColor = "blue";
    while (i <= j) {
        while (elementsList[i].height < pivot.height) {
            i++;
        }
        while (elementsList[j].height > pivot.height) {
            j--;
        }
        if (i <= j) {
            await swap(elementsList, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

async function quickSort(elementsList, left, right) {
    var index;
    if (elementsList.length > 1) {
        index = await partition(elementsList, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            await quickSort(elementsList, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSort(elementsList, index, right);
        }
    }
    return elementsList;
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Play the currently selected algorithm
async function play(){
    const currentAlgorithm = document.getElementById("current-algorithm").innerHTML;
    switch (currentAlgorithm) {
        case "Selection Sort":
            await selectionSort(elementsList);
            break;
        case "Bubble sort":
            await bubbleSort(elementsList);
        case "Insertion sort":
            await insertionSort(elementsList);
        case "Quick sort":
            await quickSort(elementsList, 0, elementsList.length - 1);
        default:
            break;
    }
}

//Clean and fill the list with random value elements
function randomize(){
    elementsList = [];
    showElements(elementsList)
    insertElements(20, elementsList);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function changeAlgorithm() {
    document.getElementById("dropdown").classList.toggle("show");
}

//Function to change the name of the current algorithm
function changeCurrentAlgorithm(currentAlgorithm){
    document.getElementById("current-algorithm").innerHTML = currentAlgorithm;
    
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var algorithmList = ["Selection Sort", "Bubble sort", "Insertion sort", "Quick sort"] //All available algorithms 
changeCurrentAlgorithm(algorithmList[0]); //Start displaying the first algorithm of the list

dropdown = document.getElementById("dropdown");

//Fill dropdown with every algorithm available
algorithmList.forEach(element => {
    var newBtn = document.createElement('button');
    newBtn.innerHTML = element;
    newBtn.onclick = function() { changeCurrentAlgorithm(element); }; //Add onClick event to change selectedAlgorithm
    dropdown.appendChild(newBtn);
});


var elementsList = [];
insertElements(20, elementsList);


