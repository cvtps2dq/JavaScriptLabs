function search() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    const towns = document.querySelectorAll('#towns li');

    let matches = 0;

    towns.forEach(town => {
        const townName = town.textContent.toLowerCase();
        const index = townName.indexOf(searchText);

        if (index !== -1) {
            const prefix = townName.substring(0, index);
            const match = townName.substring(index, index + searchText.length);
            const suffix = townName.substring(index + searchText.length);

            town.innerHTML = `<strong>${prefix}<u>${match}</u>${suffix}</strong>`;
            matches++;
        } else {
            town.innerHTML = town.textContent;
        }
    });

    document.getElementById('result').textContent = `${matches} matches found`;
}
