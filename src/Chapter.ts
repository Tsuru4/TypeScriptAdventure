import type {button} from "./Button.js";

export class Chapter 
{

    private storyBox: string[];
    private questionBox: string;
    
    //? Not sure if buttonBox should be a string[]. Maybe an interface is better?
    //* Answer, buttonBox should NOT be a string[]. They should be an array of interfaces called buttons.
    //TODO finish defining Button in Buttons.ts.
    private buttonBox: button[];

    //Reminder, storymap is a reference to a map that the Book is sharing with its chapters.
    private storyDictionary:Map<string,string>;
    
    /**
     * 
     * @param storyDictionary A reference to a map of variable names this chapter will need to filter out of its strings later. The key is the name of the variable. 
     * @param storyBox An array of paragraphs. The bulk of the story goes here.
     * @param questionBox A single paragraph, distinguished from the actual story. It poses a question to the reader to prompt the next input.
     * @param buttonBox An array of Buttons, as defined in Button.ts.
     * 
     * Note, [] will be used as the delimiter to identify variable names inside of strings. Do not use them elsewhere in your strings.
     * 
     */
    constructor(storyDictionary:Map<string, string>,storyBox:string[], questionBox:string, buttonBox:button[])
    {
        this.storyDictionary = storyDictionary;
        this.storyBox = storyBox;
        this.questionBox = questionBox;
        this.buttonBox = buttonBox;
    }

    //TODO Complete the below methods.

    /**
     * Replaces any string wrapped in [] with a new string based on storyDictionary
     */
    private filterString()
    {
        
    }

    private shuffleButtons()
    {

    }

    public getAllContents(): [string[], string, button[]]
    {
        this.filterString();
        return [this.storyBox, this.questionBox, this.buttonBox];
    }

    public getStoryStrings()
    {
        this.filterString();
        return (this.storyBox);
    }

}