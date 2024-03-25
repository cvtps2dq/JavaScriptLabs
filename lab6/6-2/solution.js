function solve() {
    const text = document.getElementById('text').value.trim();
    const convention = document.getElementById('naming-convention').value.trim();

    const words = text.split(' ');
    let result = '';

    if (convention === 'Camel Case') {
        result = words[0].toLowerCase() + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    } else if (convention === 'Pascal Case') {
        result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    } else {
        result = 'Error!';
    }

    document.getElementById('result').innerText = result;
}