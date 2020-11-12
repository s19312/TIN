function longestWord(string){
    let arr = string.split(" ");
    let longestIndex = 0;
    for(let i = 1; i < arr.length;i++){
        if(arr[longestIndex].length < arr[i].length){
            longestIndex = i;
        }
    }
    return arr[longestIndex];
}
console.log(longestWord("Hello6 Helloo7 Hellooo8"));