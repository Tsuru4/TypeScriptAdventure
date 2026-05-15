import type {button} from "./Button.js";

export class Chapter 
{

    private storyBox: string[];
    private questionBox: string;
    private buttonBox: button[];

    //Reminder, storyDictionary is a reference to a map which the Book is sharing with its Chapters. Again, this is passed by reference, not by value.
    private storyDictionary:Map<string,string>;
    
    /**
     * 
     * @param storyDictionary A reference to a map of variable names this chapter will need to filter out of its strings later. The key is the name of the variable. 
     * @param storyBox An array of paragraphs. The bulk of the story goes here.
     * @param questionBox A single paragraph, distinguished from the actual story. It poses a question to the reader to prompt the next input.
     * @param buttonBox An array of Buttons, as defined in Button.ts. NOTE: this list of buttons will be shuffled.
     * 
     * Note, [] will be used as the delimiter to identify variable names inside of strings. Do not use them elsewhere in your strings.
     * 
     */
    constructor(storyDictionary:Map<string, string>,storyBox:string[], questionBox:string, buttonBox:button[])
    {
        this.storyDictionary = storyDictionary;
        this.storyBox = storyBox;
        this.questionBox = questionBox;
        this.buttonBox = this.shuffleList(buttonBox);
    }

//TODO this function is complete but untested.
    /**
     *Replaces all keywords in the strings with new values. 
     */
    public updateStringKeywords()
    {
        const allKeys = this.storyDictionary.keys()
        for (const currentKey of allKeys)
        {
            const currentValue = this.storyDictionary.get(currentKey);
            if (currentValue === undefined)
            {
                throw new Error(`Undefined value for key ${currentKey} in storyDictionary.`);
            }
            if(currentValue=="")
            {
                console.log(`Minor semantic error. A string is missing from the story dictionary for ${currentKey}. The most likely cause is that the key was properly added to the dictionary, but user input was not properly gathered.`);
            }
            else
            {
                for (let i = 0; i < this.storyBox.length; i++)
                {
                    const currentParagraph = this.storyBox[i];
                    if (currentParagraph === undefined)
                    {
                        throw new Error(`Undefined paragraph in story array.`)
                    }
                    currentParagraph.replaceAll(currentKey,currentValue);
                }
                this.questionBox.replaceAll(currentKey,currentValue);
            }
        }
            
    }

    /**
     * First part of a multistep process. This function identifies keys which have not already been added to the shared storyDictionary.
     * This could technically be called upon construction, but I want them added one chapter at a time.
     */
    private identifyAllKeys()
    {
        //First step, search all strings in story and question for new keys.
        for(let i = 0; i < this.storyBox.length; i++)
        {
            const currentString = this.storyBox[i];
            if (currentString !== undefined)
            {
            this.identifyNewKeys(currentString);
            }
        }
        this.identifyNewKeys(this.questionBox);
    }

    /**
     * A helper function to identifyAllKeys()
     * This function searches a paragraph for unregistered keywords and adds them to storyDictionary with an empty string value.
     * 
     * @param paragraph 
     */
    private identifyNewKeys(paragraph:string)
    {
        const leftCount:number[] = [];
        const rightCount:number[] = [];

        const paragraphLength = paragraph.length;
        
        //First step. Identify where any of the matching [] markers are located and and add them to the arrays I just declared.
        //Throw errors for any case where [] was used out of order.
        for (let i = 0; i < paragraphLength; i++)
        {
            const currentLetter = paragraph.charAt(i);
            if (currentLetter == "[") 
            {
                if (leftCount.length != rightCount.length)
                {
                    throw new Error(`Too many open "[" in a row. Do not use nested [] in chapter construction.`);
                }
                leftCount.push(i);
            }
            else 
            {
                if (currentLetter == "]")
                {
                    rightCount.push(i);
                    if (rightCount.length>leftCount.length)
                    {
                        throw new Error(`There is an ] without a preceding [. Double check chapter construction.`);
                    }
                }
            }
        }
        if (rightCount.length != leftCount.length)
        {
            throw new Error(`Unequal amount of []. Double check that every "[" was followed with an "]" during chapter construction.`);
        }

        //Step two. Any strings between the [] should be compared with the dictionary keys. If they are not already in the story dictionary, they need to be added now.
        for (let i = 0; i < leftCount.length;i++)
        {
            const startingIndex = leftCount[i];
            const endingIndex = rightCount[i];

            if (startingIndex === undefined ||endingIndex === undefined)
            {
                throw new Error (`An undefined value was used found in an array of numbers.`);
            }
            //record the new key. Not, the [] are included in the name of the new key.
            const currentKey = paragraph.substring(startingIndex,endingIndex+1);
            if (!this.storyDictionary.has(currentKey))
            {
                this.storyDictionary.set(currentKey,"");
            }
                
        }

    }

    //ESLint was absurdly picky about this. I had to ask AI to explain the problem multiple times.
    //It seems that somehow there is some chance that it thought my random integer would end up outside of the bounds of the index.
    //Even when I put checks in place to ensure the buttons were not undefined, it still rejected my solutions.
    //Hence, AI had me assign each value to a constant button, then check if it was defined, and only then could I add it.
    //I can't imagine how this would be possible; the math is solid, and this function worked on my previous Javascript project.
    //But I suppose if something went wrong on the Math class's end of things, there would indeed be trouble. Talk about paranoid. 
    //Then again, JavaScript is weird, what with no type safety and asynchronous functions and passing arrays by reference.
    //Perhaps it really is possible to break this function. If goes that far though, this function would be doomed to fail in its purpose anyway.
    
    /**
     * Pops the old list of buttons recursively until it is empty and returns a new and shuffled list.
     * 
     * @param oldList A list of buttons to be shuffled. This old list will be popped until it is empty, so be sure to assign the return value back to the list, or you will just get an empty list.
     * @returns A new list of the same buttons, shuffled recursively.
     */
    private shuffleList(oldList:button[]): button[]
    {
        if (oldList.length > 1)
        {
            //generate a random index number
            const randomIndex = Math.floor(Math.random() * oldList.length);
            const firstButton = oldList[randomIndex];
            //create new placeholder list while the old one is recursively shuffled.
            if (firstButton === undefined)
            {
                throw new Error(`Index is out of bounds for the list.`);
            }
            let newList: button[] = [firstButton];

            //Note that i starts at randomIndex, not randomIndex-1. The line above already took care of randomIndex-1.
            //Note as well that i + 1 and < are both used. This is also deliberate, as the value at i+1 is being modified as well.
            for (let i = randomIndex; i + 1 < oldList.length; i++)
            {
                const nextButton = oldList[i+1];
                if (nextButton === undefined)
                {
                    throw new Error(`Index is out of bounds for the list.`);
                }
                oldList[i] = nextButton;
            }
            oldList.pop();

            newList = newList.concat(this.shuffleList(oldList));
            //newList is now the shuffled list, and oldList is now empty.
            return newList;
        }
        //base case.
        return oldList;
    }

    /**
     * 
     * @returns A tuple with the storyStrings[], question, and buttons[]. Take care, as I believe question is passed by value, while the other two are passed by reference.
     */
    public getAllContents(): [string[], string, button[]]
    {
        this.identifyAllKeys();
        return [this.storyBox, this.questionBox, this.buttonBox];
    }

    /**
     *
     * @returns The reference to the array of story strings.
     */
    public getStoryStrings()
    {
        return (this.storyBox);
    }

    public getButtonAmount()
    {
        return this.buttonBox.length;
    }

}