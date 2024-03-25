function parseTableData(table) {
    table.forEach(function(row) {
        let [town, latitude, longitude] = row.split('|').map(value => value.trim());

        latitude = parseFloat(latitude).toFixed(2);
        longitude = parseFloat(longitude).toFixed(2);

        let cityData = {
            town: town,
            latitude: latitude,
            longitude: longitude
        };

        console.log(cityData);
    });
}

let table = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
];

parseTableData(table);