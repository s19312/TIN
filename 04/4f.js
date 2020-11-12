function isPrime(number){
    if(number <= 1)return "not prime not composite number"
    return number % 2 != 0;
}
console.log(isPrime(7));