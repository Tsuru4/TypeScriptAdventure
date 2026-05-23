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
    setPremadeDictionary(premadeDictionary) {
        this.premadeDictionary = premadeDictionary;
    }
    usePremadeDictionary() {
        for (const [key, value] of this.premadeDictionary) {
            this.storyDictionary.set(key, value);
        }
    }
    setChapterInVolume(volumeIndex, path, chapter) {
        const volume = this.volumes[volumeIndex - 1];
        if (!volume) {
            throw new Error(`Volume index ${volumeIndex} is out of bounds`);
        }
        volume.set(path, chapter);
    }
    //returns the name of the next key with a missing value. Return "" if there are no missing keys.
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
    //receives a value for the next missing key. Throw an error if there are no missing keys.
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
        const [story, question, buttons] = chapter.getAllContents();
        const heading = "Chapter " + (upcomingVolumeIndex + 1).toString();
        this.buttonLog.push(userChosenPath);
        this.refreshFoundNewKeys();
        return [heading, story, question, buttons];
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
    getRecentIconSrc() {
        if (this.buttonLog.length <= 1) {
            return "";
        }
        const recentButton = this.buttonLog[this.buttonLog.length - 1];
        if (recentButton) {
            return recentButton.iconSrc;
        }
        throw new Error(`Button ${recentButton} at index ${this.buttonLog.length - 1} of array, ${this.buttonLog}, is not defined.`);
    }
}
