import { Book } from "./Book.js";
//import { button } from "./Button";
const adventureBook = new Book(16);
console.log(adventureBook);
//Chapter construction goes here.
{
    adventureBook.constructChapter(1, "path1", ["This is the story of [Protagonist], a brave young boy with superpowers.",
        "One day, [Protagonist]'s father pulls him and his two older brothers aside and brings him to the family's secret library. He shows them four books, each with hidden techniques on superpowers."], "Which book will [Protagonist] choose?", [{ label: "Fire", path: "path2Fire" }, { label: "Water", path: "path2Water" }, { label: "Air", path: "path2Air" }, { label: "Earth", path: "path2Earth" }]);
    adventureBook.constructChapter(2, "path2Fire", ["[Protagonist] skeptically chose fire. The book claims that fire is the most powerful element, coveted even by the gods. but when he tried to spar against his brothers, he was easily overpowered. Dumb book was all talk, but his father told him to stick with it.",
        "After years of reluctant practice, he developed his own variation of the book's fire powers, lightning! This variation is much stronger. He can beat the younger of his two older brothers now, but his oldest brother is still the strongest.",
        "[Protagonist] has a new problem now. He has tried to ignore the truth his entire childhood, but he can no longer ignore reality. His dad is a supervillain."], "To be continued.", []);
    adventureBook.constructChapter(2, "path2Water", ["[Protagonist] reluctantly picked up the book on water powers. But he has absolutely no talent for superpowers. His older brothers both laugh at him.",
        "[Protagonist] has a new problem now. He has tried to ignore the truth his entire childhood, but he can no longer ignore reality. His dad is a supervillain."], "To be continued.", []);
    adventureBook.constructChapter(2, "path2Air", ["[Protagonist] felt drawn to the book on air related superpowers, almost as if he was destined to read it.", "After practicing for a few years, he developed his own specialty. Now he can generate his own lightning!",
        "[Protagonist] has a new problem now. He has tried to ignore the truth his entire childhood, but he can no longer ignore reality. His dad is a supervillain."], "What should he do?", [{ label: "Fight", path: "path3Fight" }]);
    adventureBook.constructChapter(2, "path2Earth", ["[Protagonist] picked up the book on earth. It was a bit dry, but he did like the parts about controlling various metals.", "After years of practice, he develops his own variation of superpowers, magnetism.",
        "[Protagonist] has a new problem now. He has tried to ignore the truth his entire childhood, but he can no longer ignore reality. His dad is a supervillain."], "To be continued.", []);
    adventureBook.constructChapter(3, "path3Fight", ["[Protagonist] fights desperately to stand up against his father's supervillain reign of terror. His oldest brother and some of their friends join him. Using a laser pistol developed by one of his father's minions, [Protagonist] manages to hit his father's leg, but ultimately, both sides have superpower, and the other side has a lot more experience.",
        "[Protagonist] lost this battle, and in a panic, he and his allies scatter and flee."], "Who will he go with?", [{ label: "Friend", path: "path4Friend" }]);
    adventureBook.constructChapter(4, "path4Friend", ["[Protagonist] follows a friend, [Friend 1], west. Together, they cross the sea. Just as they are about to reach land, however, a sea monster attacks them, and he is separated from [Friend 1].",
        "After an epic battle against the sea monster, he eventually escapes its grasp and swims the rest of the way to the shore. He reaches a large city by the coast and starts to wander the streets. [Enormous City] is even bigger than his home city, but not very friendly. [Protagonist] has no food, and now he is starving."], "How will [Protagonist] eat tonight?", [{ label: "Find Job", path: "path5Job" }]);
    adventureBook.constructChapter(5, "path5Job", ["[Protagonist] tries looking for a job, but no one in [Enormous City] will hire him.",
        "Somehow, he gets for a couple weeks by eating scraps out of a dumptser. He isn't alone, though, as the alleys are crawling with homeless children by day and gangters by night.",
        "One day, a boy [Friend 2] discovers [Protagonist] and takes him to a food kitchen run by his mother.",
        "[Friend 2]'s mother gives him a part time job at the food kitchen."], "[Protagonist] has a lot of free time on his hands now. How will he spend it?", [{ label: "Work Out", path: "path6Train" }]);
    adventureBook.constructChapter(6, "path6Train", ["Although he is now hundreds of miles away from home, [Protagonist] still remembers his defeat at the hands of his father. In his free time, he anxiously practices his superpowers. And at night, when no one is watching, he prowls the streets and gets in fist fights with the local gang members.",
        "A few years of diligent training pass in the blink of an eye, and now he is fourteen. He is very powerful, and now he wins most of his fights against the gangs.",
        "He has gotten strong just in time too; all is not well in the world around him.",
        "Now, riots are breaking out throughout the local kingdom, and his father tries to make an ambitious bid to take over it.",
        "This time, our hero is ready. Together with his brother, they prepare an ambush and intercept their father's invasion. After a difficult battle the boys take down their father and his minions.",
        "However, this doesn't solve everything. The riots are still ongoing. A few weeks after defeating his father, our protagonist sees a girl his age being attacked by rioters."], "Will he help her?", [{ label: "Obviously", path: "path7Rescue" }]);
    adventureBook.constructChapter(7, "path7Rescue", ["He saved the girl with ease! She is impressed by his act of heroism. She's quite pretty too. She said her name is [Girl 1], and that one day she would repay him. [Protagonist] likes how this turned out. It feels good to be thanked.",
        "The next day, as he is thinking about his encounter with [Girl 1], he encounters a second girl, this one much younger, being attacked by rioters. But when he tries to rescue her, she attacks him! The rioters are all knocked back."], "How will he defend himself?", [{ label: "Fight Back", path: "path8Fight" }, { label: "Run Away", path: "path8Run" }]);
    adventureBook.constructChapter(8, "path8Fight", ["He tries to fight back, but suddenly, this girl turns into wolf! He's caught off guard and gets bitten badly. He fights her off with a blast of his powers, when suddenly, she turns into an enourmous ape and knocks him aside! With a daze, [Protagonist] realizes that this girl can change into any animal at will. He feels a strange sense of deja vu, but he can't quite place it.",
        "He changes his strategy and creates some distance with [Animal Girl]. After a few exchanges, she tranforms into an eagle and flies away. This was much easier than fighting his father.",
        "The local people witnessed this intense battle. By the end of the day, everyone in [Enormous City] begins to hail [Protagonist] as the hero who saved them from the supervillain. He's quite popular now!",
        "This popularity doesn't come without earning some grudges, though. The newly elected mayor, [New Mayor], hates him, and says that people don't need vigilantes when the police force is perfectly capable of protecting the people."], "What should [Protagonist] do?", [{ label: "Be a Hero", path: "path9Hero" }]);
    adventureBook.constructChapter(8, "path8Run", ["[Protagonist] runs away in fear. Angry girls are even scarier than his dad."], "The end.", []);
    adventureBook.constructChapter(9, "path9Hero", ["As a superhero, he is more famous than ever. He is especially popular with the ladies. A girl wants to date him."], "What should he do?", [{ label: "Accept", path: "path10Date" }]);
    adventureBook.constructChapter(10, "path10Date", ["To be continued"], "", []);
}
//TODO  construct all chapters.
const storytellerContent = document.createElement("div");
storytellerContent.id = "StorytellerContent";
document.body.appendChild(storytellerContent);
function createAndAppendDiv(divId) {
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
function updateDictionary(nextValue) {
    adventureBook.setNextUnassignedDictionaryKey(nextValue);
    if (adventureBook.getFoundNewKeys()) {
        updateInputField();
    }
    else {
        inputBox.innerHTML = "";
    }
}
/**
 * This is a helper function.
*/
function updateInputField() {
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
    submitButton.addEventListener("click", () => {
        updateDictionary(dictionaryInput.value);
    });
    inputBox.appendChild(submitButton);
}
function updateHTML(nextPath) {
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
        console.log(adventureBook.getFoundNewKeys());
        if (adventureBook.getFoundNewKeys()) {
            updateInputField();
        }
        questionBox.textContent += questionString;
        buttonArray.forEach(button => {
            const currentSubBox = document.createElement("div");
            currentSubBox.className = "buttonsubbox";
            buttonBox.appendChild(currentSubBox);
            const buttonElement = document.createElement("button");
            buttonElement.textContent = button.label;
            buttonElement.addEventListener("click", () => {
                updateHTML(button.path);
            });
            currentSubBox.appendChild(buttonElement);
        });
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
updateHTML("path1");
