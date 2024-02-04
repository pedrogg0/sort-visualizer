var algorithmList = ["Insertion sort", "Selection Sort", "Bubble sort", "Quick sort"] //All available algorithms 

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

var selectionSortBestCase = "O(n²)"
var selectionSortWorstCase = "O(n²)"
var selectionSortDescription = "Selection sort is a method for sorting data such as numbers into an ordered list. It is not as efficient method of sorting data compared to more advanced algorithms such as quicksort and heapsort when given a list of unsorted data.<br><br> The algorithm will divide the list into two parts: one part that has all the sorted data and another part that has all the remaining unsorted data. When the algorithm first starts, there is no data in the first part as no data has been sorted yet and all the unsorted data is in the second part. The algorithm then starts to find the smallest item in the unsorted data and swap it with the left-most element of the list. The part with the sorted data is then the left-most element and the part with the unsorted data is the remaining unsorted elements. The algorithm repeats itself, by finding the smallest element within the list of unsorted data and swapping it with the left-most element, eventually getting a sorted data."
var selectionSortCode = `
<span style="color: #146C94;">for</span> i = 0 <span style="color: #146C94;">to</span> n-1<br>
&nbsp;&nbsp;&nbsp;minIndex = i<br>
&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">for</span> j = i+1 <span style="color: #146C94;">to</span> n<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">if</span> array[j] &lt; array[minIndex]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minIndex = j<br>
&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">if</span> minIndex != i<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">swap</span> array[i] <span style="color: #146C94;">with</span> array[minIndex]
`;



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

var bubbleSortBestCase = "O(n)"
var bubbleSortWorstCase = "O(n²)"
var bubbleSortDescription = "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name from the way smaller elements 'bubble' to the top of the list (beginning of the array) with each iteration, while the larger elements sink to the bottom (end of the array)."
var bubbleSortCode = `
<span style="color: #146C94;">for</span> i = 0 <span style="color: #146C94;">to</span> n-1<br>
&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">for</span> j = 0 <span style="color: #146C94;">to</span> n-i-2<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">if</span> array[j] &gt; array[j+1]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">swap</span> array[j] <span style="color: #146C94;">with</span> array[j+1]
`;


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

var insertionSortBestCase = "O(n)"
var insertionSortWorstCase = "O(n²)"
var insertionSortDescription = "Insertion Sort is a simple and efficient comparison sorting algorithm. It builds the final sorted array (or list) one item at a time. The algorithm iterates through the input elements, and for each iteration, it removes one element from the input data, finds the location it belongs within the already sorted section of the array, and inserts it there. This process is repeated until no unsorted elements remain.<br><br>The algorithm works similarly to the way you might sort a hand of playing cards, picking cards one by one and inserting them into their correct position. It is efficient for small data sets and even for larger datasets if the data is partially sorted, with a time complexity of O(n^2) in the average and worst-case scenarios, but can perform as well as O(n) in the best case, which is for nearly sorted or completely sorted data."
var insertionSortCode = `
<span style="color: #146C94;">for</span> i = 1 <span style="color: #146C94;">to</span> n-1<br>
&nbsp;&nbsp;&nbsp;key = array[i]<br>
&nbsp;&nbsp;&nbsp;j = i-1<br>
&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">while</span> j >= 0 <span style="color: #146C94;">and</span> array[j] > key<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[j+1] = array[j]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j = j-1<br>
&nbsp;&nbsp;&nbsp;array[j+1] = key
`;

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

var quickSortBestCase = "O(n × log n)"
var quickSortWorstCase = "O(n²)"
var quickSortDescription = "QuickSort is a highly efficient sorting algorithm and is based on the divide and conquer strategy. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. This process is repeated for each sub-array, eventually resulting in a sorted array.<br><br>The choice of the pivot selection and partitioning scheme can affect the algorithm's performance. The most common pivot selection methods include choosing the first element, the last element, the median, or a random element from the array. After partitioning, the pivot is in its final position, and each partition is then processed recursively."
var quickSortCode = `
<span style="color: #146C94;">function</span> quickSort(array, low, high)<br>
&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">if</span> low < high<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pi = partition(array, low, high)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quickSort(array, low, pi - 1)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quickSort(array, pi + 1, high)<br>
<br>
<span style="color: #146C94;">function</span> partition(array, low, high)<br>
&nbsp;&nbsp;&nbsp;pivot = array[high]<br>
&nbsp;&nbsp;&nbsp;i = (low - 1)<br>
&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">for</span> j = low <span style="color: #146C94;">to</span> high-1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">if</span> array[j] < pivot<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap array[i] <span style="color: #146C94;">with</span> array[j]<br>
&nbsp;&nbsp;&nbsp;swap array[i+1] <span style="color: #146C94;">with</span> array[high]<br>
&nbsp;&nbsp;&nbsp;<span style="color: #146C94;">return</span> i+1
`;
