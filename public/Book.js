import { Chapter } from "./Chapter.js";
export class Book {
    volumes = [new Map()];
    storyDictionary = new Map();
    pathLog = [];
    foundNewKey = false;
    constructor(totalChapters) {
        if (totalChapters <= 0) {
            throw new Error("Total chapters must be a positive number");
        }
        for (let i = 1; i < totalChapters; i++) {
            this.volumes.push(new Map());
        }
    }
    setChapterInVolume(volumeIndex, path, chapter) {
        const volume = this.volumes[volumeIndex - 1];
        if (!volume) {
            throw new Error(`Volume index ${volumeIndex} is out of bounds`);
        }
        volume.set(path, chapter);
    }
    //TODO create a new public method which returns the name of the next key with a missing value. Return "" if there are no missing keys.
    //This function should be complete. It just needs implementation and testing.
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
    //TODO create a new public method which receives a value for the next missing key. Throw an error if there are no missing keys.
    //This method should be complete. It just needs implimentation and testing.
    setNextUnassignedDictionaryKey(newValue) {
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
        throw new Error("This line of code should never be reachable.");
    }
    /**
     *
     * @param volumeIndex Where the book belongs chronologically.
     * @param path The key needed to access the chapter branch. To improve redability and help catch bugs, the recommended value should begin with path, followed by the volume number, then a short yet unique word to distinguish it from the other branches in this volume.
     * @param storyBox The bulk of the story goes here. Each string is a paragraph.
     * @param questionBox A prompt for the user to choose the next branch.
     * @param buttonBox A list of buttons, as defined in Button.ts, that the user can choose to select the next branch. Each button consists of a label (a string which summarizes the user's option without spoilers) and a path (the key needed to access the chapter branch that this button represents). For every path, follow up by creating a chapter with a matching path as its key, or there will be errors.
     */
    constructChapter(volumeIndex, path, storyBox, questionBox, buttonBox) {
        const chapter = new Chapter(this.storyDictionary, storyBox, questionBox, buttonBox);
        this.setChapterInVolume(volumeIndex, path, chapter);
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
        //check here to make sure all new keywords have been resolved before trying to proceed.
        const upcomingVolumeIndex = this.pathLog.length;
        const upcomingVolume = this.volumes[upcomingVolumeIndex];
        this.refreshFoundNewKeys();
        console.log("Test 2" + this.foundNewKey);
        if (this.foundNewKey) {
            //This error is easy to reach.
            throw new Error("User input error. Requested the next chapter, but the next chaper had not been finished yet. Name all of the characters first.");
        }
        if (!upcomingVolume) {
            throw new Error(`No volume found for index ${upcomingVolumeIndex}`);
        }
        const chapter = upcomingVolume.get(userChosenPath);
        if (!chapter) {
            throw new Error(`No chapter found for path ${userChosenPath} in volume index ${upcomingVolumeIndex}`);
        }
        const [story, question, buttons] = chapter.getAllContents();
        const heading = "Chapter " + (upcomingVolumeIndex + 1).toString();
        this.pathLog.push(userChosenPath);
        this.refreshFoundNewKeys();
        return [heading, story, question, buttons];
    }
    getFoundNewKeys() {
        return this.foundNewKey;
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
}
