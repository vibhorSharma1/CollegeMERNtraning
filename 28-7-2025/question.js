function getMovie(id, callback) {
    setTimeout(() => {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === id) {
                callback(movies[i]);
                break;
            }
        }
    }, 3000);
}

function getCinemaHall(movieName,callback){
    if (movieName === "Demon Slayer : Infinity castle") {
        callback(["Hall 1", "Hall 2"]);
    }else if (movieName === "The Dark Knight") {
        callback(["Hall 3", "Hall 4"]);
    } else {
        callback([]);
    }    
}
function getTicketPrice(hall, callback) {
    setTimeout(() => {
        if (hall === "Hall 1" || hall === "Hall 3") {
            callback(10);
        } else if (hall === "Hall 2" || hall === "Hall 4") {
            callback(12);
        } else {
            callback(0);
        }
    }, 2000);
}   

let movies = [
    {
        id: 1,
        title: "Demon Slayer : Infinity castle",
        director: "Haruo Sotozaki",
        type: "Anime",
        timing: "2h 20m",
    },
    {
        id: 2,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        type: "Action",
        timing: "2h 32m",
    }
];

getMovie(1, (movie) => {
    console.log("Movie Details:", movie);
    getCinemaHall(movie.title, (halls) => {
        console.log("Available Halls:", halls);
        if (halls.length > 0) {
            getTicketPrice(halls[0], (price) => {
                console.log(`Ticket Price for ${halls[0]}: $${price}`);
            });
        } else {
            console.log("No halls available for this movie.");
        }
    });
});