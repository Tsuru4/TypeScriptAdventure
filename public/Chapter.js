export class Chapter {
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
    constructor(storyDictionary, storyBox, questionBox, buttonBox) {
        this.storyDictionary = storyDictionary;
        this.storyBox = storyBox;
        this.questionBox = questionBox;
        this.buttonBox = this.shuffleList(buttonBox);
    }
    //TODO Complete the below methods.
    filterAllStrings() {
    }
    /**
     * Replaces any string wrapped in [] with a new string based on storyDictionary
     */
    filterString(paragraph) {
        let leftCount = 0;
        let rightCount = 0;
        const paragraphLength = paragraph.length;
        for (let i = 0; i < paragraphLength; i++) {
            const currentLetter = paragraph.charAt(i);
            if (currentLetter == "[") {
                leftCount++;
            }
            else {
                if (currentLetter == "]") {
                    rightCount++;
                    if (rightCount > leftCount) {
                        throw new Error(`There is an ] without a preceding [. Double check chapter construction.`);
                    }
                }
            }
        }
    }
    //ESLint was absurdly picky about this. I had to ask AI to explain the problem multiple times.
    //It seems that somehow there is some chance that it thought my random integer would end up outside of the bounds of the index.
    //Even when I put checks in place to ensure the buttons were not undefined, it still rejected my solutions.
    //Hence, AI had me assign each value to a constant button, then check if it was defined, an only then could I add it.
    //I can't imagine how this would be possible; the math is solid, and this function worked on my previous Javascript project.
    //But I suppose if something went wrong on the Math class's end of things, there would indeed be trouble. Talk about paranoid. 
    //Then again, JavaScript is weird, what with no type safety and asynchronous functions and passing arrays by reference.
    // Perhaps it really is possible to break this function. If goes that far though, this function would be doomed to fail in its purpose anyway.
    /**
     * Pops the old list of buttons recursively until it is empty and returns a new and shuffled list.
     *
     * @param oldList A list of buttons to be shuffled. This old list will be popped until it is empty, so be sure to assign the return value back to the list, or you will just get an empty list.
     * @returns A new list of the same buttons, shuffled recursively.
     */
    shuffleList(oldList) {
        if (oldList.length > 1) {
            //generate a random index number
            const randomIndex = Math.floor(Math.random() * oldList.length);
            const firstButton = oldList[randomIndex];
            //create new placeholder list while the old one is recursively shuffled.
            if (firstButton === undefined) {
                throw new Error(`Index is out of bounds for the list.`);
            }
            let newList = [firstButton];
            //Note that i starts at randomIndex, not randomIndex-1. The line above already took care of randomIndex-1.
            //Note as well that i + 1 and < are both used. This is also deliberate, as the value at i+1 is being modified as well.
            for (let i = randomIndex; i + 1 < oldList.length; i++) {
                const nextButton = oldList[i + 1];
                if (nextButton === undefined) {
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
    getAllContents() {
        this.filterAllStrings();
        return [this.storyBox, this.questionBox, this.buttonBox];
    }
    getStoryStrings() {
        this.filterAllStrings();
        return (this.storyBox);
    }
    getButtonAmount() {
        return this.buttonBox.length;
    }
}
