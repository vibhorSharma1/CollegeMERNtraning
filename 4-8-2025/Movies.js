let Movies=[
    {id:"1",name:"50  Shades of Grey",type:"Interesting",length:"2:05",rating:4.5},
    {id:"2",name:"365 Days",type:"Interesting",length:"1:54",rating:4.0},
    {id:"3",name:"Friends with Benefits",type:"Interesting",length:"1:49",rating:4.2},
    {id:"4",name:"My fault",type:"Interesting",length:"2:00",rating:4.8},
    {id:"5",name:"Demon Slayer:Infinite Castle",type:"Anime",length:"2:00",rating:4.9}
];  
function getMovieById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movie = Movies.find(m => m.id === id);
            if (movie) {
                resolve(movie);
            } else {
                reject(new Error("Movie not found"));
            }
        }, 1000);
    });
}
function getCenema(movie){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cinemas = {
                "50  Shades of Grey": "Cinema A",
                "365 Days": "Cinema B",
                "Friends with Benefits": "Cinema C",
                "My fault": "Cinema D",
                "Demon Slayer:Infinite Castle": "Cinema E"
            };
            if (cinemas[movie.name]) {
                resolve(cinemas[movie.name]);
            } else {
                reject(new Error("Cinema not found"));
            }
        }, 1000);
    });
}
function getTicket(cinema){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tickets = {
                "Cinema A": 10,
                "Cinema B": 12,
                "Cinema C": 8,
                "Cinema D": 15,
                "Cinema E": 20
            };
            if (tickets[cinema]) {
                resolve(tickets[cinema]);
            } else {
                reject(new Error("Ticket not found"));
            }
        }, 1000);
    });
}

async function manageMovie(id){
    try {
        const movie = await getMovieById(id);
        console.log("Movie Details:", movie);
        
        const cinema = await getCenema(movie);
        console.log(`Cinema for ${movie.name}: ${cinema}`);
        
        const ticketPrice = await getTicket(cinema);
        console.log(`Ticket Price for ${cinema}: $${ticketPrice}`);
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}