function alphabetical(string){
    return string.split("").sort().join("");
}
console.log(alphabetical("webmaster"));
console.log(alphabetical("ebacd"));