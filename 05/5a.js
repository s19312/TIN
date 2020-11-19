var obj = {
    firstName:'Roman',
    lastName:'Fedorchenko',
    sNumber:'s19312',
    study:'IT',
    year:3,
    getFullName : function(){
        return this.firstName + " " + this.lastName;
    },
    getStudyInfo : function () {
      return this.study + " year :" + this.year;
    },
    getSNumber : function () {
        return this.sNumber;
    }
}

function objInfo(obj){
    for (const [key, value] of Object.entries(obj)) {
        console.log(key + ": " + typeof value);
    }
}

objInfo(obj);