/*
TypeScriptAdventure Outline

I need the following:

    index.html
        This time, the body element will be empty of text and buttons. I will have Storyteller.ts write to the innerhtml. 
        Index will serve as the entry point.

    style.css
        This file will cover only instructions for the header and footer.
        This time, the body CSS will be handled solely by Storyteller.ts, so style.css will be kept blank in that regard.

    Storyteller.ts
        This file will act as the sole intermediary between index.html and the other Typescript classes.
        
        At initiation, Storyteller will construct an instance of Book.

        Storyteller will await events from index.html using asynchronous functions (such as event listeners).

        These async functions will call methods of Book.
        Book will update its internal data accordingly and return sufficient strings for Storyteller.
        Storyteller will use these string to edit the HTML and call new async functions, repeating the cycle until the book is complete.
        Book.ts will relay information to its own dependant classes, so Storyteller does not need to even be aware of chapter and button.

        Eventually, if the other features can be completed without issue, 
        Storyteller will also be tasked with animating a little character avatar.
        This will be an ambitious task, and it is superfluous to the core functions of this project,
        so it will not be implemented until the end.
        For now, I just need to be consious of this plan,
        so I do not accidentally write code which could later make this plan incompatible.

    Book.ts
        Abstracts a "choose your own adventure" book.
        It should be written in such a way that its methods can be tested in any console, not just a html page.
        Book.ts should not give any html specific instructions.
        
        Book.ts is a class. Only one instance of Book is needed in this project.

        Book will contain a list of maps, called Volumes. Each Volume represents a different phase of the story.
            The Volume map keys will be called Paths. They represent the different branches in the story caused by user input.
            The Volume map values are instances of Chapter, categorized by sequential order.
        
        Book will also contain various other information (mostly inside a map of strings) pertinent to the book. 
            IE: Character names. (Each character can be optionally renamed by the user when they are first introduced).
            Typescript does not pass strings by reference. These strings must be kept inside of a map so I can pass to Chapter by reference.

        Book will track the progress of the chapters as they are chosen using a dynamic array called pathLog. Psuedocode below. Variable names here are for example only:
            updateChapter(usersChosenPath){
                (pushes userChosenPath to the end of pathLog)
                StringsFromNextChapter = Volumes[pathLog.length-1].get(usersChosenPath).getStrings(); //A nested list of strings with information that Storyteller needs in order to update the HTML.
                return StringsFromNextChapter;
            }

    Chapter.ts
        Contains all strings for an individual chapter. 

        Strings will ultimately be displayed inside separate <div></div> tags. These ids will include storybox, questionbox, and buttonbox.

        Some of these strings will contain a variable. These variables will be names inside of [] brackets.
            For example: "Our protagonist, [protagonist], walked down the street." 
            Chapter needs to be able to recognize the brackets and string inside as a key.
            It will replace the key with its value using the map provided by Book.

    ?button.ts
        The fields in buttonbox <div></div> tag is more complicated than the other strings contained in Chapter.
        It may need to be abstracted further. Possibly as its own class or interface. I will come back to this.


*/