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

//Clean and fill the list with random value elements
async function randomize(){
    if(!running){
        document.getElementById("randomizer").classList.add("randomizer-filled");
        elementsList = [];
        showElements(elementsList)
        insertElements(20, elementsList);
        await sleep(80);
        document.getElementById("randomizer").classList.remove("randomizer-filled");

    }
}

//Play the currently selected algorithm
async function play(){
    if(!running){
        document.getElementById("play-btn").classList.add("play-btn-filled");
        running = true;
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
        running = false;
        document.getElementById("play-btn").classList.remove("play-btn-filled");
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function changeAlgorithm() {
    if(!running){
        document.getElementById("dropdown").classList.toggle("show");
    }
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

function ajustarPuntos() {
    const puntos = document.querySelectorAll('.navigation-widget .dot');
    const secciones = document.querySelectorAll('.section');

    secciones.forEach((seccion, index) => {
        const punto = puntos[index];
        const distancia = Math.abs(window.scrollY - seccion.offsetTop);
        const alturaSeccion = window.innerHeight; // Altura aproximada de cada sección

        // Escala el punto en función de la distancia
        let escala = 1 - (distancia / alturaSeccion);
        escala = Math.min(Math.max(escala, 0.5), 1.5); // Limita la escala entre 0.5 y 1.5

        punto.style.transform = `scale(${escala})`;
    });
}

// Evento de scroll
document.addEventListener("scroll", ajustarPuntos);


document.querySelectorAll('.navigation-widget .dot').forEach((punto, index) => {
    punto.addEventListener('click', () => {
        const seccion = document.querySelectorAll('.section')[index];
        window.scrollTo({
            top: seccion.offsetTop,
            behavior: 'smooth'
        });
    });
});

ajustarPuntos();
changeCurrentAlgorithm(algorithmList[0]); //Start displaying the first algorithm of the list
dropdown = document.getElementById("dropdown");

//Fill dropdown with every algorithm available
algorithmList.forEach(element => {
    var newBtn = document.createElement('button');
    newBtn.innerHTML = element;
    newBtn.onclick = function() { changeCurrentAlgorithm(element); }; //Add onClick event to change selectedAlgorithm
    dropdown.appendChild(newBtn);
});

var running = false;
var elementsList = [];
insertElements(20, elementsList);


