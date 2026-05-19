import {Book} from "./Book.js";
//import { button } from "./Button";

const adventureBook = new Book(16);
console.log(adventureBook);

//Chapter construction goes here.
{
adventureBook.constructChapter(
    1, "path1", 
    ["This is the story of [Protagonist], a brave young boy with superpowers.",
        "One day, [Protagonist]'s father pulls him and his two older brothers aside and brings him to the family's secret library. He shows them four books, each with hidden techniques on superpowers."],
    "Which book will [Protagonist] choose?",
    [{label:"Fire", path:"path2Fire"}, {label:"Water", path:"path2Water"}, {label:"Air", path:"path2Air"}, {label:"Earth", path:"path2Earth"}]
    );

adventureBook.constructChapter(
    2, "path2Fire", 
    ["[Protagonist] skeptically chose fire. The book claims that fire is the most powerful element, coveted even by the gods. But his progress is slow. Both of his older brothers leave him in the dust."],
    "To be continued.",
    []
    );

adventureBook.constructChapter(
    2, "path2Water", 
    ["[Protagonist] chose water."],
    "To be continued.",
    []
    );
    
adventureBook.constructChapter(
    2, "path2Air", 
    ["[Protagonist] felt drawn to the book on air related superpowers, almost as if he was destined to read it.", "After practicing for a few years, he developed his own specialty. Now he can generate his own lightning!","One day, our protagonist realized that his dad is evil."],
    "What should he do?",
    [{label:"Fight", path:"path3Fight"}]
    );
    
adventureBook.constructChapter(
    2, "path2Earth", 
    ["[Protagonist] chose earth."],
    "To be continued.",
    []
    );

adventureBook.constructChapter(
    3, "path3Fight",
    ["[Protagonist] fights desperately to stand up against his father's supervillain reign of terror. His oldest brother and some of their friends join our protagonist. Using a laser pistol developed by one of his father's minions, he managed to hit his father's leg, but ultimately, both sides have superpower, and the other side has a lot more experience.", "Our protagonist lost the battle, and in a panic, he and his allies are forced to flee."],
    "To be continued.",
    []
    );




}

//TODO  construct all chapters.

const storytellerContent = document.createElement("div");
storytellerContent.id = "StorytellerContent";
document.body.appendChild(storytellerContent);

function createAndAppendDiv(divId:string): HTMLDivElement
{
    const temporaryDiv = document.createElement("div");
    temporaryDiv.id = divId;
    storytellerContent.appendChild(temporaryDiv);
    return temporaryDiv;
}

//Div tags are set up here. This encapsulates HTML code specific to this project. All the HTML project needs to do it load this script and the css file
// I was going to control the styles from here as well, but there are currently too many unknowns in the differences between css and JavaScript when it comes to editing classes before all elements in the class exists. It's better to play it safe.
createAndAppendDiv("longartbox");
const storyBox = createAndAppendDiv("storybox");
const questionBox = createAndAppendDiv("questionbox");
const inputBox = createAndAppendDiv("inputbox");
const buttonBox = createAndAppendDiv("buttonbox");
const artGrid = createAndAppendDiv("artgrid");

buttonBox.className = "boxofboxes";
artGrid.className = "boxofboxes";
//Note, artBox will eventually contain a grid of images equal to the number of buttonBoxes. However, these images will not be implemented until very late in the project.

//TODO set a function to recieve user strings and call Book's method for updating the dictionary.
function updateDictionary(nextValue:string)
{
    adventureBook.setNextUnassignedDictionaryKey(nextValue);
    if (adventureBook.getFoundNewKeys())
    {
        updateInputField();
    }
    else 
    {
        inputBox.innerHTML = "";
    }
}

/**
 * This is a helper function.
*/
function updateInputField()
{   
    //https://www.youtube.com/watch?v=J2kUg78Lf4o video on getting user input through html
    //Step one, prompt user.
    inputBox.innerHTML = "";

    const inputPrompt = document.createElement("p");
    inputPrompt.id = "inputprompt";
    inputPrompt.textContent = "Please name " + adventureBook.getNextUnassignedDictionaryKey() + " before moving on.";
    inputBox.appendChild(inputPrompt);

    //Step two, share text input field
    const dictionaryInput = document.createElement("input");
    dictionaryInput.id = "dictionaryInput";
    inputBox.appendChild(dictionaryInput);

    //Step three, set up a button later input.
    const submitButton = document.createElement("button");
    submitButton.id = ("submitbutton");
    submitButton.textContent = adventureBook.getNextUnassignedDictionaryKey();
    
    submitButton.addEventListener("click", () => 
        {updateDictionary(dictionaryInput.value);
    });
    inputBox.appendChild(submitButton);
}

function updateHTML(nextPath:string)
{

    try {
        const [headingString, storyStrings, questionString, buttonArray] = adventureBook.updateChapter(nextPath);
    
    
        storyBox.innerHTML = "";
        questionBox.innerHTML = "";
        buttonBox.innerHTML = "";

        const chapterHeading = document.createElement("h1");
        chapterHeading.textContent = headingString;
        storyBox.appendChild(chapterHeading);

        storyStrings.forEach(paragraph => {
            const p = document.createElement("p");
            p.textContent = paragraph;
            storyBox.appendChild(p);
        });

//TODO set up prompt for user to set up new names for dictionary terms here.
        console.log(adventureBook.getFoundNewKeys())
        if (adventureBook.getFoundNewKeys())
        {
            updateInputField();
        }

        questionBox.textContent += questionString;

        buttonArray.forEach(button => {
            const currentSubBox = document.createElement("div");
            currentSubBox.className = "buttonsubbox";
            buttonBox.appendChild(currentSubBox);

            const buttonElement = document.createElement("button");
            buttonElement.textContent = button.label;
            buttonElement.addEventListener("click", () => 
                {updateHTML(button.path);
            });
            currentSubBox.appendChild(buttonElement);
        });

        const gridBoxes = document.getElementsByClassName("boxofboxes");
        for (let i = 0; i < gridBoxes.length; i++)
        {
            const currentbox = gridBoxes[i];

            //Error: "Property 'style' does not exist on type 'Element'" will trigger without this check.
            // I googled this error. This is because there are some types of element which do not have a style.
            if (currentbox instanceof HTMLElement)
            {
                //Funnily enough, this is the first time so far I've needed to cast a number as a string in typescript.
                currentbox.style.gridTemplateColumns = "repeat(" + buttonArray.length.toString() + ", 1fr)";
            }
        }
    }
    catch(error){
        //Most online documentation on catching errors was outdated and did not address the issue of the type of recieved by catch being unknown instead of Error. Google AI had to explain this issue for me instead.  
        //AI sited this source: https://stackoverflow.com/questions/64452484/how-can-i-safely-access-caught-error-properties-in-typescript
        if (error instanceof Error)
        {
            console.error('An error has occured.', error.message);
        }
        else
        {
            console.error('Unknown error.');
        }
    }
    

}



updateHTML("path1");