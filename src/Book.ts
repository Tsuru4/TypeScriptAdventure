import { Chapter } from "./Chapter.js"
import type {button} from "./Button.js";

export class Book 
{

    private volumes: Map<string,Chapter>[] = [new Map<string,Chapter>()];
    private storyDictionary: Map<string,string> = new Map<string,string>();
    private pathLog: string[] = [];

    constructor(totalChapters:number)
    {
        if (totalChapters <= 0) {
            throw new Error("Total chapters must be a positive number");
        }

        for (let i = 1; i < totalChapters; i++)
        {
            this.volumes.push(new Map<string,Chapter>());
        }
    }

    private setChapterInVolume(volumeIndex:number, path:string, chapter:Chapter)
    {

        const volume = this.volumes[volumeIndex-1];
        if (!volume) {
            throw new Error(`Volume index ${volumeIndex} is out of bounds`);
        }
        volume.set(path,chapter);
    }

    /**
     * 
     * @param volumeIndex Where the book belongs chronologically.
     * @param path The key needed to access the chapter branch. To improve redability and help catch bugs, the recommended value should begin with path, followed by the volume number, then a short yet unique word to distinguish it from the other branches in this volume.
     * @param storyBox The bulk of the story goes here. Each string is a paragraph. 
     * @param questionBox A prompt for the user to choose the next branch.
     * @param buttonBox A list of buttons, as defined in Button.ts, that the user can choose to select the next branch. Each button consists of a label (a string which summarizes the user's option without spoilers) and a path (the key needed to access the chapter branch that this button represents). For every path, follow up by creating a chapter with a matching path as its key, or there will be errors.
     */
    public constructChapter(
        volumeIndex:number,
        path:string,
        storyBox:string[], questionBox:string, buttonBox:button[])
    {
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
    public updateChapter(userChosenPath:string): [string, string[], string, button[]]
    {

        //check here to make sure all new keywords have been resolved before trying to proceed.
        

        const upcomingVolumeIndex = this.pathLog.length;
        const resolvedVolumeIndex = upcomingVolumeIndex - 1;
        const upcomingVolume = this.volumes[upcomingVolumeIndex];

        if (resolvedVolumeIndex >= 0)
        {
        const resolvedVolume = this.volumes[resolvedVolumeIndex];
        if (resolvedVolume === undefined)
        {
            throw new Error(`Previous volume entry at index ${resolvedVolumeIndex}, is not defined.`);
        }
        const resolvedPath = this.pathLog[resolvedVolumeIndex];
        if (resolvedPath === undefined)
        {
            throw new Error(`Previous pathlog entry at index ${resolvedVolumeIndex}, is not defined.`);
        }
        const resolvedChapter = resolvedVolume.get(resolvedPath)
        if (resolvedChapter === undefined)
        {
            throw new Error(`Previous chapter at path ${resolvedPath} of volume ${resolvedVolumeIndex} is missing.`);
        }

        /*if (resolvedChapter.getFoundNewKey())
        {
            //This error is easy to reach.
            throw new Error("User input error. Requested the next chapter, but the next chaper had not been finished yet. Name all of the characters first.");
        }*/
        }

        if (!upcomingVolume) {
            throw new Error(`No volume found for index ${upcomingVolumeIndex}`);
        }
        const chapter = upcomingVolume.get(userChosenPath);
        
        if (!chapter) {
            throw new Error(`No chapter found for path ${userChosenPath} in volume index ${upcomingVolumeIndex}`);
        }
        const [story,question,buttons] = chapter.getAllContents();
        const heading = "Chapter " + (upcomingVolumeIndex+1).toString();
        this.pathLog.push(userChosenPath);
        return [heading, story, question, buttons];
    }



}