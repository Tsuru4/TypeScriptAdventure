import { Book } from "./Book.js";
//import { button } from "./Button";
const adventureBook = new Book(16);
//Chapter construction goes here.
{
    adventureBook.constructChapter(1, "path1", ["This is the story of [Protagonist], a brave young boy with superpowers.",
        "One day, [Protagonist]'s father pulls him and his two older brothers aside and brings him to the family's secret library. He shows them four books, each with hidden techniques on superpowers."], "Which book will [Protagonist] choose?", [{ label: "Fire", path: "path2Fire" }, { label: "Water", path: "path2Water" }, { label: "Air", path: "path2Air" }, { label: "Earth", path: "path2Earth" }]);
    adventureBook.constructChapter(2, "path2Fire", ["[Protagonist] skeptically chose fire. The book claims that fire is the most powerful element, coveted even by the gods. But his progress is slow. Both of his older brothers leave him in the dust."], "To be continued.", []);
    adventureBook.constructChapter(2, "path2Water", ["[Protagonist] chose water."], "To be continued.", []);
    adventureBook.constructChapter(2, "path2Air", ["[Protagonist] chose air."], "To be continued.", []);
    adventureBook.constructChapter(2, "path2Earth", ["[Protagonist] chose earth."], "To be continued.", []);
}
//TODO  construct all chapters.
const storyBox = document.createElement("div");
storyBox.id = "storybox";
document.body.appendChild(storyBox);
const questionBox = document.createElement("div");
questionBox.id = "questionbox";
document.body.appendChild(questionBox);
const buttonBox = document.createElement("div");
buttonBox.id = "buttonbox";
document.body.appendChild(buttonBox);
function updateHTML() {
    const [storyStrings, questionString, buttonArray] = adventureBook.updateChapter("path1");
    storyBox.innerHTML = "";
    questionBox.innerHTML = "";
    buttonBox.innerHTML = "";
    storyStrings.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        storyBox.appendChild(p);
    });
    questionBox.textContent = questionString;
    //!This is block is incomplete. The path has no way of being passed yet.
    buttonArray.forEach(button => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = button.label;
        buttonElement.addEventListener("click", () => {
            updateHTML();
        });
        buttonBox.appendChild(buttonElement);
    });
}
updateHTML();
