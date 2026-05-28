export interface button {
    readonly label:string;
    path:pathstring;
    readonly iconSrc?:iconString;
    //readonly minigame?:string;
    readonly hideConditions?:pathstring[];//button should hidden by book if hideCondition can be found in pathLog.
    readonly clearConditions?:pathstring[];//button will lead to badPath instead of path if clear condition cannot be found in buttonLog.
    readonly badPath?:pathstring;
}

type pathstring = `path${number}${string}`
type iconString = `${string}.png`;