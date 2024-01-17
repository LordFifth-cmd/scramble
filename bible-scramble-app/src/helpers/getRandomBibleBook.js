    // Gets Random Bible Book Object
export function getRandomBibleBook(bibleBooksArray) {
        // Pick random number between 0 and the length of the bible book array
        const randomNumber = Math.floor(Math.random() * bibleBooksArray.length);
        return bibleBooksArray[randomNumber];
    }