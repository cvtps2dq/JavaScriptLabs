class Movie {
    constructor(name) {
        this.name = name;
        this.director = null;
        this.date = null;
    }

    addDirector(director) {
        this.director = director;
    }

    addDate(date) {
        this.date = date;
    }

    addName(name){
        this.name = name;
    }

    getInfo() {
        if (this.name && this.director && this.date) {
            return {
                name: this.name,
                director: this.director,
                date: this.date
            };
        }
        return null;
    }
}

function processCommands(commands) {
    const movies = new Set();
    const movies_string = [];
    const commandList = [
        "addMovie",
        "directedBy",
        "onDate"
    ];

    let current_cmd = "";

    for (const command of commands) {
        for(const cmd of commandList){
            if(command.includes(cmd)){
                current_cmd = cmd;
                break;
            }
        }

        let name = "";
        let director = "";
        let movie = new Movie();
        let date = "";
        switch (current_cmd){
            case "addMovie":
                name = command.split(current_cmd)[1].trim();
                movie.addName(name);
                movies.add(movie);
            break;

            case "directedBy":
                name = command.split(current_cmd)[0].trim();
                director = command.split(current_cmd)[1].trim();
                movie = [...movies].find(movie => movie.name === name)
                if (movie){
                    //console.log(command);
                    movie.addDirector(director);
                    movies.add(movie);
                }
                break;

            case "onDate":
                name = command.split(current_cmd)[0].trim();
                date = command.split(current_cmd)[1].trim();
                movie = [...movies].find(movie => movie.name === name)
                if (movie){
                    //console.log(command);
                    movie.addDate(date);
                    movies.add(movie);
                }
                break;

        }

    }

    const completeMovies = [...movies].filter(movie => movie.getInfo() !== null);
    return completeMovies.map(movie => JSON.stringify(movie.getInfo()));
}

const commands = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];

const output = processCommands(commands);
output.forEach(movie => console.log(movie));