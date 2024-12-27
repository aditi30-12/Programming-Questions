function ReverseString(str){
    let newString ="";
    for(let i=str.length-1;i>=0;i--){
        newString+= str[i]
    }
    return newString
}
const string =console.log("Enter a String");
const result =ReverseString(string)
console.log(result)
