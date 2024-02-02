var algorithmList = ["Selection Sort", "Bubble sort", "Insertion sort", "Quick sort"] //All available algorithms 

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