function fI(i){
    let f = 1;
    for(j = 1; j <= i;j++){
        f = f * j;
    }
    return f;
}
console.log(fI(5));