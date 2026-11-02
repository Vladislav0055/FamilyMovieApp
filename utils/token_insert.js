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

/*     export async function setTokens(token){
   
        
       
        const data = await readFile(join(__dirname,"../client/client.js"), "utf8");

        const newData = data.replace("newToken", token);
        await writeFile(join(__dirname,"../client/client.js"), newData);
    
   
} */


 

//------------------------------------------------------------------------------








export async function removeToken(){
    const data=await readFile(DB_PATH,"utf8");
    const newdata=JSON.stringify(data).replace("newToken",token)
    await writeFile(DB_PATH,JSON.parse(newdata,null,2));
}





