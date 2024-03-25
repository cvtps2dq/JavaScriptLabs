function addItem() {
    const text = document.getElementById('newItemText').value;
    const value = document.getElementById('newItemValue').value;

    const option = document.createElement('option');
    option.text = text; // set the label of element "option"
    option.value = value; // set the value of element "option"

    const select = document.getElementById('menu');

    // adding the option
    select.add(option);
}