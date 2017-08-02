/**
 * Created by 27353 on 2017/7/30.
 */
function  getClothing(isCold) {
    if(isCold){
        const freezing = 'Grab a jacket'
    }else {
        const hot = 'It`s a shorts kind of day';
        console.log(freezing);
    }
}
getClothing(true);``
let instructor ='Janme';
instructor ='Richard';
console.log(instructor);
const  myName = '[NAME]';
let greeting = `Hello, my name is ${myName},
                sdsdshhh.`;
console.log(greeting);

function aloop() {
    const years = ['1999','2001','2013','2016'];
    for(const i=0;i < years.length; i++){
        console.log(years[i]);
    }
}

function loopforof() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    for(const day of days){
        console.log(day);
    }
}

// loopforof();

function Spread() {
    const fruits = ["apples", "bananas", "pears"];
    const vegetables = ["corn", "potatoes", "carrots"];

    const produce = [...fruits,...vegetables];//fruits.add(...vegetables);
 //   produce.add(...fruits);
   // produce = produce.concat(fruits).concat(vegetables);
    //produce.set(...fruits);

    console.log(produce);

}
//Spread();
function average(...nums) {
    let sum = 0;
    for(const num of nums){
        sum += num;
    }
    if(nums.length === 0){
        return 0
    }
    return sum/nums.length;

}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
