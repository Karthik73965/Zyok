import { Redis } from "@upstash/redis";

const redis =  new Redis({
    url :"https://apn1-actual-sunbeam-35218.upstash.io",
    token:"AYmSASQgNDdjNTk3NTAtZWJkOC00Nzg2LTg0MTctYzAzZDQxYTYwOWMxNDAxYjIzNzdhNWIxNDNkYzhmMWMyYTIyMmMwZWIwMTc="
})

export async function RandomEndpoint() :Promise<string> {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word = "";

    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        word += characters[randomIndex];
    }
    const exists = await redis.exists(word);
    if(!exists){
        await redis.set(word, JSON.stringify(word))
        return word
    }
    
    return "some thing"
}