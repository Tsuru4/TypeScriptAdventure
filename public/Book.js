import { Chapter } from "./Chapter.js";
/**
 * Represents a Choose Your Own Adventure book.
 * Book consists of an array of volumes. Each volume is sequential, creating chronological structure for the story. The volume is a map of Chapters for the reader to choose from. The reader is allowed to select one Chapter per volume.
 *
 */
export class Book {
    volumes = [new Map()];
    storyDictionary = new Map();
    buttonLog = [];
    foundNewKey = false;
    premadeDictionary = new Map();
    constructor(totalVolumes) {
        if (totalVolumes <= 0) {
            throw new Error("Total chapters must be a positive number");
        }
        for (let i = 1; i < totalVolumes; i++) {
            this.volumes.push(new Map());
        }
    }
    /**
     * Sets up a premade dictionary. This is a quality of life feature intended to give the reader an option to skip filling out all remaining values in the premade dictionary.
     * It is suggested that the premadeDictionary contains a matching [key,value] pair for every key asscociated with storyDictionary, though that is not required.
     * @method usePremadeDictionary must be called after this method for premadeDictionary to actually be implemented. This method merely sets the stage so that the reader may have that option.
     * @param premadeDictionary
     */
    setPremadeDictionary(premadeDictionary) {
        this.premadeDictionary = premadeDictionary;
    }
    /**
     * Assigns all [key,value] pairs of premadeDictionay to storyDictionary.
     * Skips all instances where the storyDictionary already has a value for that key.
     */
    usePremadeDictionary() {
        for (const [key, value] of this.premadeDictionary) {
            if (value == undefined) {
                console.error(`Value for ${key} in premadeDictionary is undefined. ${this.premadeDictionary}`);
            }
            else {
                if ((!this.storyDictionary.has(key)) || (this.storyDictionary.get(key) == "")) {
                    this.storyDictionary.set(key, value);
                }
                if (this.storyDictionary.get(key) == undefined) {
                    console.error(`Unexpected error. ${key} was undefined in storydictionary ${this.storyDictionary}. This does not stop the current method from completing its task, but this does imply some other part of the code is broken.`);
                    this.storyDictionary.set(key, value);
                }
            }
        }
    }
    setChapterInVolume(volumeIndex, path, chapter) {
        const volume = this.volumes[volumeIndex - 1];
        if (!volume) {
            throw new Error(`Volume index ${volumeIndex} is out of bounds`);
        }
        volume.set(path, chapter);
    }
    /**
     * @returns the next key to storyDictionary with a missing value. Returns "" if there are no missing keys.
    */
    getNextUnassignedDictionaryKey() {
        if (this.foundNewKey == true) {
            for (const [key, value] of this.storyDictionary) {
                if (value == "") {
                    return key;
                }
            }
        }
        return "";
    }
    /**
     * Receives a value for the next missing key. Throw an error if there are no missing keys.
     * @method getNextUnassignedDictionaryKey() Call this method first to know which key is the next missing key.
     * @param newValue The new value for the next missing key.
     */
    setNextUnassignedDictionaryKey(newValue) {
        if (newValue.includes("[") || newValue.includes("]")) {
            console.error(`"[" and "]" are not allowed in dictionary names. They will confuse the logic of the code. String ${newValue} is rejected.`);
            //Although this is an error, it is easier to simply return while ignoring the user input than it would be to throw in this case. 
            return;
        }
        console.log("Setting new key value " + newValue);
        if (this.foundNewKey == false) {
            throw new Error("This function was called, when it was not needed. There are no more new keys in need of a new value.");
        }
        for (const [key, value] of this.storyDictionary) {
            if (value == "") {
                this.storyDictionary.set(key, newValue);
                this.refreshFoundNewKeys();
                return;
            }
        }
    }
    /**
     *
     * @param volumeIndex Where the book belongs chronologically. The earliest index begins at 1. The final index is the equal to the total number of chapters.
     * @param path The key needed to access the chapter branch. To improve readability and help catch bugs, the recommended value should begin with path, followed by the volume number, then a short yet unique word to distinguish it from the other branches in this volume.
     * @param storyBox The core text of the story is represented by this array. Each string represents a paragraph within the chapter.
     * @param questionBox A prompt for the user to choose the next branch.
     * @param buttonBox A list of buttons, as defined in Button.ts, that the user can choose to select the next branch. Each button consists of a label (a string which summarizes the user's option without spoilers) and a path (the key needed to access the chapter branch that this button represents). For every unique path in a button, follow up by creating a chapter in the next volume with a matching string as its path, or there will be errors. Use an empty [] to signify an end to the story.
     *
     * Special cases:
     * The starting chapter should normally be the only chapter in volume 1. It is recommended to set the first chapter's path as "path1", standardizing it so anyone can assume that calling updateChapter("path1") is the proper way to start the book.
     *
     * To end a branch of the story, simply leave an empty array in the place of buttonBox. All chapters in the final volume should be set this way as well.
     */
    constructChapter(volumeIndex, path, storyBox, questionBox, buttonBox) {
        if (volumeIndex == this.volumes.length && buttonBox.length > 0) {
            console.error(`Warning. Buttons detected on the final chapter of book. These buttons will be deleted to prevent future errors, but the rest of this chapter will be accepted. Reminder, there should only be ${this.volumes.length} volumes in this book.`);
            buttonBox = [];
        }
        if (volumeIndex > this.volumes.length || volumeIndex < 1) {
            throw new Error(`Volume index out of range. Volume ${volumeIndex} is not between 1 and ${this.volumes.length}. Chapter rejected.`);
        }
        if (volumeIndex.toString() != path.charAt(4) && volumeIndex.toString() != path.substring(4, 6)) {
            console.error(`Warning. Detected that the number in ${path} is not equivalant to volume index ${volumeIndex}. Either the number of chapters is in the triple digits, or the path number does not conform to convention. If the cause is the later, then unexpected behavior will occur later in this program.`);
        }
        const chapter = new Chapter(this.storyDictionary, storyBox, questionBox, buttonBox);
        this.setChapterInVolume(volumeIndex, path, chapter);
        return chapter;
    }
    /**
     * Not all buttons are intended to be relayed to the client program as they are. This helper method returns a new and revised list of how the buttons should be returned.
     * @returns New list of modified buttons.
     */
    filterButtons(prefilteredButtons) {
        const filteredButtons = [];
        //! I already hate this method. I haven't even finished, and it already has 2 On^3 operations!
        for (const currentButton of prefilteredButtons) {
            if (this.buttonIsVisible(currentButton)) {
                filteredButtons.push(currentButton);
            }
        }
        for (const currentButton of filteredButtons) {
            if (!this.buttonIsClearable(currentButton)) {
                if (currentButton.badPath) {
                    currentButton.path = currentButton.badPath;
                }
                else {
                    console.error(`Server semantic error suspected at story setup. Button ${currentButton} is set as not clearable by the main path, but badPath is missing. Path reassignment will be skipped for this button. Continuing with main path even though path is not clearable. Setting a clear condition for a button is meaningless if there is no badPath to default to when the condition fails.`);
                }
            }
        }
        return filteredButtons;
    }
    //TODO this method has the same On^3 issue as buttonIsVisible(). And again, the final for loop is unnessecary if the pathlog was numbered correctly.
    buttonIsClearable(currentButton) {
        if (!currentButton.clearConditions) {
            return true;
        }
        for (const currentCondition of currentButton.clearConditions) {
            for (const loggedButton of this.buttonLog) {
                if (currentCondition == loggedButton.path) {
                    return true;
                }
            }
        }
        return false;
    }
    //TODO fix the complexity of this method. Its currently using On^3 steps. (It has two nested for loops inside it, and is being called from inside yet another for loop.) 
    buttonIsVisible(currentButton) {
        if (currentButton.hideConditions) {
            for (const currentCondition of currentButton.hideConditions) {
                //* In theory, I should not need to check every single button in the log.
                // If the person who constructed the chapters followed my convention of "path#string", 
                //  then only pathlog[#-1] should contain the condition being sought here.
                // That's a big if though. But if I did narrow this down, the complexity would drop from On^3 to On^2.
                // Not to mention of the three for loops, this one will usually be the longest,
                //  as buttonLog can reach as high as 18 places in my use case, and could be even longer for other users.
                for (const loggedButton of this.buttonLog) {
                    if (currentCondition == loggedButton.path) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    //? AI seems to be predicting my code as I write. This is weird. I thought I had turned this feature off a few months ago.
    // The results are impressive though. It seems to have guessed what I wanted by reading my notes from TypeScriptAdventure.ts. Accurately too.
    // I don't see any errors in this function for now. I'll watch it and adjust as needed.
    // But since the point of this project is to learn Typescript, I'll avoid using this feature for my other functions in this project. I may take advantage of this feature in future work though.
    /**
     *
     * @param userChosenPath The key to the chapter the user selected.
     * @returns All of the strings necessary to update the HTML page with the next part of the story.
     */
    updateChapter(userChosenPath) {
        const upcomingVolumeIndex = this.buttonLog.length;
        const upcomingVolume = this.volumes[upcomingVolumeIndex];
        this.refreshFoundNewKeys();
        console.log("Test 2" + this.foundNewKey);
        if (this.foundNewKey) {
            //This check here is to make sure all new keywords have been resolved before trying to proceed.
            //This is a semantic error which is easy to reach. The user just needs to click buttons out of order.
            //While it would not cause any runtime errors, for the best user experience, I do not want them moving on until they have named their characters.
            throw new Error("User input error. Requested the next chapter, but the next chaper had not been finished yet. Name all of the characters first.");
        }
        if (!upcomingVolume) {
            throw new Error(`No volume found for index ${upcomingVolumeIndex}`);
        }
        const chapter = upcomingVolume.get(userChosenPath.path);
        if (!chapter) {
            throw new Error(`No chapter found for path ${userChosenPath.path} in volume index ${upcomingVolumeIndex}`);
        }
        const [story, question, prefilteredButtons] = chapter.getAllContents();
        const heading = "Chapter " + (upcomingVolumeIndex + 1).toString();
        this.buttonLog.push(userChosenPath);
        this.refreshFoundNewKeys();
        const filteredButtons = this.filterButtons(prefilteredButtons);
        return [heading, story, question, filteredButtons];
    }
    /**
     *
     * @returns Identifies which function the client needs to call next. If value false, client needs to call setNextUnassignedDictionaryKey() until value becomes true. When value is true, it is safe to call updateChapter().
     */
    isReadyToUpdateChapter() {
        return !this.foundNewKey;
    }
    refreshFoundNewKeys() {
        for (const value of this.storyDictionary.values()) {
            if (value == "") {
                this.foundNewKey = true;
                return;
            }
        }
        this.foundNewKey = false;
    }
    //TODO Work in progress.
    //! Do not implement outside of testing purposes. Eventually this method will be made private, and a separate public method will call this to return all chosen stories.
    getChapterStory(volumeIndex, chapterPath) {
        const volume = this.volumes[volumeIndex];
        if (!volume) {
            throw new Error("Volume not found.");
        }
        const chapter = volume.get(chapterPath);
        if (!chapter) {
            throw new Error("Chapter not found.");
        }
        return chapter.getStoryStrings();
    }
    //TODO At the moment, this function does not separate the strings by chapter in any way. 
    /**
     * A recap with all story contents. Omits buttons and questions.
     * @returns An array with all story strings from all selected chapters.
     */
    getStoryStrings() {
        const storyStrings = [];
        for (let i = 0; i < this.buttonLog.length; i++) {
            const currentVolume = this.volumes[i];
            if (!currentVolume) {
                throw new Error(`Undefined volume ${currentVolume} at index ${i} of ${this.volumes}.`);
            }
            const currentButton = this.buttonLog[i];
            if (!currentButton) {
                throw new Error(`Undefined button ${currentButton} at index ${i} of ${this.buttonLog}.`);
            }
            const currentPath = currentButton.path;
            const currentChapter = currentVolume.get(currentPath);
            if (!currentChapter) {
                throw new Error(`Undefined chapter ${currentChapter} for key ${currentPath} in volume ${currentVolume}.`);
            }
            for (const paragraph of currentChapter.getStoryStrings()) {
                storyStrings.push(paragraph);
            }
            ;
        }
        return storyStrings;
    }
    /**
     *
     * @returns File path for the icon of the most recently pressed button. Returns "unknown.png" if button has no icon.
     */
    getRecentIconSrc() {
        if (this.buttonLog.length < 1) {
            throw new Error("This method has been called too early. Button log has no buttons.");
        }
        const recentButton = this.buttonLog[this.buttonLog.length - 1];
        if (recentButton) {
            if (recentButton.iconSrc) {
                return recentButton.iconSrc;
            }
            return "undefined.png";
        }
        throw new Error(`Button ${recentButton} at index ${this.buttonLog.length - 1} of array, ${this.buttonLog}, is not defined.`);
    }
}
