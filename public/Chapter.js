export class Chapter {
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
    constructor(storyDictionary, storyBox, questionBox, buttonBox) {
        this.storyDictionary = storyDictionary;
        this.storyBox = storyBox;
        this.questionBox = questionBox;
        this.buttonBox = buttonBox;
    }
    //TODO Complete the below methods.
    /**
     * Replaces any string wrapped in [] with a new string based on storyDictionary
     */
    filterString() {
    }
    shuffleButtons() {
    }
    getAllContents() {
        this.filterString();
        return [this.storyBox, this.questionBox, this.buttonBox];
    }
    getStoryStrings() {
        this.filterString();
        return (this.storyBox);
    }
}
