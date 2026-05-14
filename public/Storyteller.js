import { Book } from "./Book.js";
//import { button } from "./Button";
const adventureBook = new Book(16);
//Chapter construction goes here.
{
    adventureBook.constructChapter(1, "path1", ["This is the story of [Protagonist], a brave young boy with superpowers.",
        "One day, [Protagonist]'s father pulls him and his two older brothers aside and brings him to the family's secret library. He shows them four books, each with hidden techniques on superpowers."], "Which book will [Protagonist] choose?", [{ label: "Fire", path: "path2Fire" }, { label: "Water", path: "path2Water" }, { label: "Air", path: "path2Air" }, { label: "Earth", path: "path2Earth" }]);
    adventureBook.constructChapter(2, "path2Fire", ["[Protagonist] skeptically chose fire. The book claims that fire is the most powerful element, coveted even by the gods. But his progress is slow. Both of his older brothers leave him in the dust."], "To be continued.", []);
    adventureBook.constructChapter(2, "path2Water", ["[Protagonist] chose water."], "To be continued.", []);
    adventureBook.constructChapter(2, "path2Air", ["He felt drawn to the book on air related superpowers, almost as if he was destined to read it.", "After practicing for a few years, he developed his own specialty. Now he can generate his own lightning!", "One day, our protagonist realized that his dad is evil."], "What should he do?", [{ label: "Fight", path: "path3Fight" }]);
    adventureBook.constructChapter(2, "path2Earth", ["[Protagonist] chose earth."], "To be continued.", []);
    adventureBook.constructChapter(3, "path3Fight", ["He fights desperately to stand up against his father's supervillain reign of terror. His oldest brother and some of their friends join our protagonist. Using a laser pistol developed by one of his father's minions, he managed to hit his father's leg, but ultimately, both sides have superpower, and the other side has a lot more experience.", "Our protagonist lost the battle, and in a panic, he and his allies are forced to flee."], "To be continued.", []);
}
//TODO  construct all chapters.
function createAndAppendDiv(divId) {
    const temporaryDiv = document.createElement("div");
    temporaryDiv.id = divId;
    document.body.appendChild(temporaryDiv);
    return temporaryDiv;
}
//Div tags are set up here. This encapsulates HTML code specific to this project. All the HTML project needs to do it load this script and the css file
// I was going to control the styles from here as well, but there are currently too many unknowns in the differences between css and JavaScript when it comes to editing classes before all elements in the class exists. It's better to play it safe.
createAndAppendDiv("longartbox");
const storyBox = createAndAppendDiv("storybox");
const questionBox = createAndAppendDiv("questionbox");
const buttonBox = createAndAppendDiv("buttonbox");
const artGrid = document.createElement("artgrid");
buttonBox.className = "boxofboxes";
artGrid.className = "boxofboxes";
//Note, artBox will eventually contain a grid of images equal to the number of buttonBoxes. However, these images will not be implemented until very late in the project.
function updateHTML(nextPath) {
    const [storyStrings, questionString, buttonArray] = adventureBook.updateChapter(nextPath);
    storyBox.innerHTML = "";
    questionBox.innerHTML = "";
    buttonBox.innerHTML = "";
    storyStrings.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        storyBox.appendChild(p);
    });
    questionBox.textContent = questionString;
    buttonArray.forEach(button => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = button.label;
        buttonElement.addEventListener("click", () => {
            updateHTML(button.path);
        });
        buttonBox.appendChild(buttonElement);
    });
    //TODO, fix the grid.
}
updateHTML("path1");
