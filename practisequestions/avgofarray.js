function avgarray(arr){
    var avg=0;
    for(var i=0;i<arr.length;i++)
    {
        avg+=arr[i]/2
    }
    return avg
}
var arr=[10,20,30,40]
console.log(avgarray(arr))