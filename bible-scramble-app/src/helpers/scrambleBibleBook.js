// Using Fisher–Yates Shuffle to scramble the name of the bible book given a bible book object
export const scrambleBibleBook = (bibleBook) => {
        const bibleBookArray = bibleBook["Book"].toUpperCase().split("")

        // console.log(bibleBookArray)
        var copy = [], n = bibleBookArray.length, i;
    
        // While there remain elements to shuffle…
        while (n) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * bibleBookArray.length);
    
        // If not already shuffled, move it to the new array.
        if (i in bibleBookArray) {
            copy.push(bibleBookArray[i]);
            delete bibleBookArray[i];
            n--;
        }
        }
    
        return copy;
    }