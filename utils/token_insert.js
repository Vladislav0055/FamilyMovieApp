/* This file adds tokens to requests from client 
 folder as if it is browser who sets tokens for every request header. */


import{readFile,writeFile} from "fs/promises";
import{join,dirname} from "path";
import{fileURLToPath} from "url";


const __dirname=dirname(fileURLToPath(import.meta.url));
const tokenedQueries=["../client/watchlist_delete_m.js","../client/watchlist_update_m.js","../client/login.js","../client/logout.js","../client/watchlist.js","../client/whoami.js","../client/watchlist_add_m.js"];


   export async function setTokens(token){
    for(let url of tokenedQueries){
        
        const path = join(__dirname, url);
        const data = await readFile(path, "utf8");
        const newData = data.replace("newToken", token);
        await writeFile(path, newData);
    
    }
}



   export async function deleteTokens(){
    for(let url of tokenedQueries){
        
        const path = join(__dirname, url);
        const data = await readFile(path, "utf8");
        const newData = data.replace(/[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/, "newToken");
        await writeFile(path, newData);
    
    }
}








