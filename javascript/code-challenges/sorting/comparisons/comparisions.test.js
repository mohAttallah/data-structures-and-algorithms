const { sortByRecentYear, sortAlphabetical } = require('./index'); 
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
        title: "Avengers: Endgame",
        year: 2019,
        genres: ["Action", "Adventure"]
    },
    {
        title: "The Prestige",
        year: 2006,
        genres: ["Drama", "Mystery", "Thriller"]
    }
];

describe('sortByRecentYear', () => {
    it('should sort movies by recent year', () => {
        const sortedMovies = sortByRecentYear([...movies]);
        for (let i = 1; i < sortedMovies.length; i++) {
            expect(sortedMovies[i].year).toBeGreaterThanOrEqual(sortedMovies[i - 1].year);
        }
    });
});

describe('sort Alphabetical', () => {
    it('sort movies alphabetically (ignoring leading articles)', () => {
        const sortedMovies = sortAlphabetical([...movies]);
        for (let i = 1; i < sortedMovies.length; i++) {
            const prevTitle = sortedMovies[i - 1].title;
            const currentTitle = sortedMovies[i].title;
            const prevTitleWithoutLeading = ignoreLeading(prevTitle);
            const currentTitleWithoutLeading = ignoreLeading(currentTitle);
            expect(prevTitleWithoutLeading.localeCompare(currentTitleWithoutLeading)).toBeLessThanOrEqual(0);
        }
    });
});


function ignoreLeading(title) {
    return title.replace(/^(A|An|The)\s+/i, '');
}
