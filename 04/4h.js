function secondLargestAndLowest(arr){
    var sortedArr = arr.sort(function (a,b) {return a-b;})
    let secondLowest = sortedArr[1];
    let secondLargest = sortedArr[arr.length-2];
    return "second lowest is : " + secondLowest + "\nSecond largest is : " + secondLargest;
}
console.log(secondLargestAndLowest([11,22,3,5,17,19]));