function findCommonElements(arr1, arr2) {
    let commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        let currentElement = arr1[i];

        // add if not added yet
        if (arr2.includes(currentElement) && !commonElements.includes(currentElement)) {
            commonElements.push(currentElement);
        }
    }
    
    commonElements.forEach(element => console.log(element));
}

findCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
findCommonElements(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't']);