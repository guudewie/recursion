// install node and run following command in terminal >>> $node merge_sort/ms.js

// MERGE SORT

function mergeSort (array) {

    if ( array.length < 2 ) return array

    let half = Math.floor(array.length / 2);

    let leftSorted = mergeSort(array.slice(0, half));
    let rightSorted = mergeSort(array.slice(half));

    let sortedArray = [];


    while (leftSorted.length > 0 && leftSorted.length > 0) {
        
        arrayMin = leftSorted[0] > rightSorted[0] ? rightSorted : leftSorted;
        
        // add llowest first element to sorted array while removing from original array
        sortedArray.push(arrayMin.shift())
    }
    
    // add remainding numbers in either right or left array to sorted array
    return sortedArray.concat(rightSorted, leftSorted)
}
