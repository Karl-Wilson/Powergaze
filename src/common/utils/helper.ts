export function classJoiner (...args: any[]): string {
    let joined: string = ""
    for(let i=0; i<args.length;i++){
        if(typeof args[i] != "undefined"){
            joined = joined + " " + args[i]
        }
    }
    return joined.trim();
}