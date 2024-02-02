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

//Play the currently selected algorithm
async function play(){
    const currentAlgorithm = document.getElementById("current-algorithm").innerHTML;
    switch (currentAlgorithm) {
        case "Selection Sort":
            await selectionSort(elementsList);
            break;
        case "Bubble sort":
            await bubbleSort(elementsList);
            break;
        case "Insertion sort":
            await insertionSort(elementsList);
            break;
        case "Quick sort":
            await quickSort(elementsList, 0, elementsList.length - 1);
            break;
        default:
            break;
    }
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


