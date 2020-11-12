function palindrome(string){
    let arr = string.split("").reverse().join("");
    if(arr != string)
        return false;
    return true;
}
console.log(palindrome('refer'));