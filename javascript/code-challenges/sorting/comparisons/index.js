const movies = [
    {
        title: "Matrix",
        year: 1999,
        genres: ["Science Fiction", "Action"]
    },
    {
        title: "An Inception",
        year: 2010,
        genres: ["Science Fiction", "Thriller"]
    },
    {
        title: "Titanic",
        year: 1997,
        genres: ["Drama", "Romance"]
    },
    {
        title: "Avengers Endgame",
        year: 2019,
        genres: ["Action", "Adventure"]
    },
    {
        title: "The Prestige",
        year: 2006,
        genres: ["Drama", "Mystery", "Thriller"]
    }
];




function sortByRecentYear(arr) {
    return arr.sort((a, b) => a.year - b.year);

}
function ignoreLeading(title) {
    return title.replace(/^(A|An|The)\s+/i, '')
}


function sortAlphabetical(arr) {
    return arr.sort((a, b) => {
        a= ignoreLeading(a.title);
        b = ignoreLeading(b.title)
        return a.localeCompare(b);
    })
}

console.log(sortByRecentYear(movies));
console.log(sortAlphabetical(movies));

module.exports = { sortByRecentYear, sortAlphabetical }

