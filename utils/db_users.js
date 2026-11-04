import{readFile,writeFile} from "fs/promises";
import{join,dirname} from "path";
import{fileURLToPath} from "url";
import users from "../data/users.json" with { type: "json" };
const __dirname=dirname(fileURLToPath(import.meta.url));
const DB_PATH=join(__dirname,"../data/users.json");

/* 
export async function getUsers(){
    const data=await readFile(DB_PATH,"utf8");
    return JSON.parse(data);
} */

export async function saveUsers(users){
    await writeFile(DB_PATH,JSON.stringify(users,null,2));
}


export async function findByUsername(username){
    
  /*  const users= await getUsers() */
  
   const user= users.find((u)=>{
       return u.username==username;
    }) || null;
    
    return user
 }



 export async function generateId(){
    
/* const users= await getUsers() */
  if(users.length==0){
    return 1
  }
const maxId = users.reduce((acc, curV) => {
  if (acc < curV.id) {
    return  curV.id;
  } else{
    return acc
  }

}, 1);

return maxId+1
}
