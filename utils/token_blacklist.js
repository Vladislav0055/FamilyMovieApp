//File to invalidate tokens after log out.

const blacklist=new Set();

export function  blacklistToken(token){
    blacklist.add(token)
}

export function isBlacklisted(token){
    return blacklist.has(token)
}