import{readFile,writeFile} from "fs/promises";
import{join,dirname} from "path";
import{fileURLToPath} from "url";


const __dirname=dirname(fileURLToPath(import.meta.url));
const tokenedQueries=["../client/client.js","../client/login.js","../client/logout.js","../client/watchlist.js"];


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








