function binarySearch(arr,number){
    let l = 0;
    let r = arr.length-1;
    var mid = 0;
    while(l <= r){
        mid = l + Math.floor((r - l) / 2);
        if(arr[mid] === number){
            return mid;
        }
        if(arr[mid] < number){
            l = mid + 1;
        }else {
            r = mid - 1;
        }
    }
    return mid;
}
let arr = [1,2,3,4,5,6,7,8];
console.log(binarySearch(arr,5));
console.log(binarySearch(arr,1));