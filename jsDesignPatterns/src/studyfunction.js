
var str = '2A3*3*a_#23.,';
var test = 'My age is 0, 0 si ega ym.'
//var my=str.replace(/\*|\_/g,'');
var my=str.replace(/[ -/]|_/g,'');
//my =test.toLocaleLowerCase();
console.log(my);
var i =0;
while(i < my.length/2 ){
    i++;
    console.log(i);
    console.log(my.length - i);

}

function palindrome(str) {
    // Good luck!

    str = str.toLowerCase();
    var my=str.replace(/[ -/]|_/g,'');
    var i=0;
    while(i <my.length/2 ){

        var a= my[i];
        var b=my[my.length -i-1];
        if (a !== b){
            return false;
        }
        i++;

    }
    return true;
}

console.log(palindrome('eye'));