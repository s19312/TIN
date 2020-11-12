function fibonacci(i){
    if(i <= 1)
        return i;
    return fibonacci(i - 1) + fibonacci(i - 2);
}
console.log(fibonacci(7));