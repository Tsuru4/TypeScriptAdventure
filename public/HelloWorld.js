import constructBook from "./PremadeStory.js";
async function fetchStrings(index, path) {
    try {
        //! This method will eventually become private. When that happens, this function will be unable to call getStoryChapter().
        return adventureBook.getChapterStory(index - 1, path);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Failed to fetch strings.", error.message);
        }
        else {
            console.error("Failed to fetch strings. Unknown error.", error);
        }
        return [];
    }
}
//Note that adventureBook is being declared here, even though it has already been referenced in the function above.
const adventureBook = constructBook("Sparky");
const chapter1 = fetchStrings(1, "path1");
const message = "Hello World!";
console.log(message);
const message4 = message + 1;
console.log(message4);
const message2 = message.replaceAll("ello", "i");
console.log(message2);
console.log(adventureBook);
console.log(chapter1);
console.log(await fetchStrings(2, "path2Water"));
//It feels like it is rare for the await keyword to be nessecary.
