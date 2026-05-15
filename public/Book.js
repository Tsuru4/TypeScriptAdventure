import { Chapter } from "./Chapter.js";
export class Book {
    volumes = [new Map()];
    storyDictionary = new Map();
    pathLog = [];
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
    // I wish it would let me write my comments myself though. (Take a hint, AI, I'm talking to you.)
    /**
     *
     * @param userChosenPath The key to the chapter the user selected.
     * @returns All of the strings necessary to update the HTML page with the next part of the story.
     */
    updateChapter(userChosenPath) {
        this.pathLog.push(userChosenPath);
        const currentVolumeIndex = this.pathLog.length - 1;
        const currentVolume = this.volumes[currentVolumeIndex];
        if (!currentVolume) {
            throw new Error(`No volume found for index ${currentVolumeIndex}`);
        }
        const chapter = currentVolume.get(userChosenPath);
        if (!chapter) {
            throw new Error(`No chapter found for path ${userChosenPath} in volume index ${currentVolumeIndex}`);
        }
        const [story, question, buttons] = chapter.getAllContents();
        const heading = "Chapter " + (currentVolumeIndex + 1).toString();
        return [heading, story, question, buttons];
    }
}
