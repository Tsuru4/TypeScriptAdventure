import constructBook from "./PremadeStory.js";
//Chapter construction was moved to its own file for the sake of abstraction.
//Storyteller's role should focus soley on communication between the book and the HTML.
//The premade story was relevant to this task, but not vital.
//Any story could be used by Storyteller, and a non HTML project should be able to use these stories.
//Therefore, chapter construction is its own separate task, which has been moved to PremadeStory.ts 
const adventureBook = constructBook("Sparky");
//Div tags are set up here.
//This abstracts HTML code specific to this project. All the HTML project needs to do it load this script and the css file
//I was going to control the styles from here as well, but there are currently too many unknowns in the differences between css and JavaScript when it comes to editing classes before all elements in the class exists. It's better to play it safe.
const storytellerContent = document.createElement("div");
storytellerContent.id = "StorytellerContent";
document.body.appendChild(storytellerContent);
function createAndAppendDiv(divId) {
    const temporaryDiv = document.createElement("div");
    temporaryDiv.id = divId;
    storytellerContent.appendChild(temporaryDiv);
    return temporaryDiv;
}
const topArtBox = createAndAppendDiv("longartbox");
const storyBox = createAndAppendDiv("storybox");
const inputBox = createAndAppendDiv("inputbox");
const questionBox = createAndAppendDiv("questionbox");
const buttonGrid = createAndAppendDiv("buttongrid");
const artGrid = createAndAppendDiv("artgrid");
buttonGrid.className = "boxofboxes";
artGrid.className = "boxofboxes";
const tempButton = document.createElement("button");
tempButton.textContent = "Click here to autofill all custom names.";
tempButton.addEventListener("click", () => {
    usePremadeDictionary();
});
storytellerContent.appendChild(tempButton);
/**
 *
 * @param nextDictionaryValue A string to pass to Book so it can update character names.
 *
 * A function to recieve user strings and call Book's method for updating its dictionary.
 * It sets another asyncronous call of itself if there are still more names needed.
 * */
function updateHTMLDictionary(nextDictionaryValue) {
    inputBox.innerHTML = "";
    adventureBook.setNextUnassignedDictionaryKey(nextDictionaryValue);
    if (!adventureBook.isReadyToUpdateChapter()) {
        updateInputField();
    }
}
/**
 * This is a helper function to updateDictionary().
 * This function would be private if Storyteller were a class.
*/
function updateInputField() {
    //https://www.youtube.com/watch?v=J2kUg78Lf4o video on getting user input through html
    //Step one, prompt user.
    const inputPrompt = document.createElement("p");
    inputPrompt.id = "inputprompt";
    inputPrompt.textContent = "Please name " + adventureBook.getNextUnassignedDictionaryKey() + " before moving on.";
    inputBox.appendChild(inputPrompt);
    //Step two, share text input field
    const dictionaryInput = document.createElement("input");
    dictionaryInput.id = "dictionaryInput";
    inputBox.appendChild(dictionaryInput);
    //Step three, set up a submit button.
    const submitButton = document.createElement("button");
    submitButton.id = ("submitbutton");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", () => {
        updateHTMLDictionary(dictionaryInput.value);
    });
    inputBox.appendChild(submitButton);
}
/**
 * A helper function to UpdateHTMLChapter
 * Adds information from button to the HTML.
 * @param nextButton
 */
function printStoryBranchButton(nextButton) {
    const currentSubBox = document.createElement("div");
    currentSubBox.className = "buttonsubbox";
    buttonGrid.appendChild(currentSubBox);
    const buttonElement = document.createElement("button");
    buttonElement.textContent = nextButton.label;
    buttonElement.addEventListener("click", () => {
        updateHTMLChapter(nextButton);
    });
    currentSubBox.appendChild(buttonElement);
    const currentArtBox = document.createElement("div");
    currentArtBox.className = "buttonsubbox";
    artGrid.appendChild(currentArtBox);
    const currentIcon = document.createElement("img");
    currentIcon.src = nextButton.iconSrc;
    currentArtBox.appendChild(currentIcon);
}
/**
 * A helper function to UpdateHTMLChapter
 * Adds information from story to the storybox HTML.
 * @param paragraph
 */
function printStaggeredParagraphs(headingString, paragraphs) {
    const chapterHeading = document.createElement("h1");
    chapterHeading.textContent = headingString;
    storyBox.appendChild(chapterHeading);
    //TODO figure out how to implement a timer so that paragraphs are staggered one second apart.
    paragraphs.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        storyBox.appendChild(p);
    });
}
function updateTopArt() {
    const currentIcon = document.createElement("img");
    currentIcon.src = adventureBook.getRecentIconSrc();
    topArtBox.appendChild(currentIcon);
}
function displayFullStory() {
    storyBox.innerHTML = "";
    questionBox.innerHTML = "";
    const fullStory = adventureBook.getStoryStrings();
    fullStory.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        storyBox.appendChild(p);
    });
    buttonGrid.innerHTML = "";
}
function usePremadeDictionary() {
    adventureBook.usePremadeDictionary();
    if (tempButton) {
        tempButton.remove();
    }
}
/**
 * The core function of Storyteller.
 * This function is called each time that the buttons at the bottom of the page are clicked.
 * It tries to recieve the text for the next Chapter of the Book.
 * If successful, Book will move to the next chapter, and Storyteller will rewrite the HTML according to the text.
 * An error will be thrown by Book and caught by updateHTMLChapter if updateHTMLChapter is called before updateHTMLDictionary is resolved.
 * This function is like a domino, and finishes its logic by setting up a asynchronous call to itself for each branch in the next section of Book.
 * The "dominoes" stop naturally once an end to the Book has been reached.
 *
 * @param nextPath The value of path. It should match one of the next paths in Book.
 */
function updateHTMLChapter(nextButton) {
    try {
        const [headingString, storyStrings, questionString, buttonArray] = adventureBook.updateChapter(nextButton);
        storyBox.innerHTML = "";
        questionBox.innerHTML = "";
        buttonGrid.innerHTML = "";
        artGrid.innerHTML = "";
        updateTopArt();
        printStaggeredParagraphs(headingString, storyStrings);
        //Sets up prompts for user to set up new names for dictionary terms.
        console.log(!adventureBook.isReadyToUpdateChapter());
        if (!adventureBook.isReadyToUpdateChapter()) {
            updateInputField();
        }
        questionBox.textContent += questionString;
        buttonArray.forEach(button => {
            printStoryBranchButton(button);
        });
        if (buttonArray.length == 0) {
            const currentSubBox = document.createElement("div");
            currentSubBox.className = "buttonsubbox";
            buttonGrid.appendChild(currentSubBox);
            const buttonElement = document.createElement("button");
            buttonElement.textContent = "Playback Full Story";
            buttonElement.addEventListener("click", () => {
                displayFullStory();
            });
            currentSubBox.appendChild(buttonElement);
        }
        const gridBoxes = document.getElementsByClassName("boxofboxes");
        for (let i = 0; i < gridBoxes.length; i++) {
            const currentbox = gridBoxes[i];
            //Error: "Property 'style' does not exist on type 'Element'" will trigger without this check.
            // I googled this error. This is because there are some types of element which do not have a style.
            if (currentbox instanceof HTMLElement) {
                //Funnily enough, this is the first time so far I've needed to cast a number as a string in typescript.
                currentbox.style.gridTemplateColumns = "repeat(" + buttonArray.length.toString() + ", 1fr)";
            }
        }
    }
    catch (error) {
        //Most online documentation on catching errors was outdated and did not address the issue of the type of recieved by catch being unknown instead of Error. Google AI had to explain this issue for me instead.  
        //AI sited this source: https://stackoverflow.com/questions/64452484/how-can-i-safely-access-caught-error-properties-in-typescript
        if (error instanceof Error) {
            console.error('An error has occured.', error.message);
        }
        else {
            console.error('Unknown error.');
        }
    }
}
//This call acts as the "first domino".
updateHTMLChapter({ label: "", path: "path1", iconSrc: "Potion.png" });
