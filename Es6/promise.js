/**
 * Created by liao on 2017/8/30.
 */
var fs = require('fs');
var file="./data.json"

function loadJson(path) {
    return new Promise((resolve,reject) => {
        fs.readFile(path,'utf-8',(err,data) => {
            if(err){
                reject(new Error(err))
            }else {
                resolve(JSON.parse(data))
            }
        })

    })
}

/*
loadJson('./data1.json').then((data1) => {
    console.log(data1);
    loadJson('./data2.json').then((data2) =>{
        console.log(data2);
        loadJson('./data3.json').then((data3)=>{
            console.log(data3);
        })
    })
})*/
Promise.all([
    loadJson('./data1.json'),
    loadJson('./data2.json'),
    loadJson('./data3.json')
]).then((datas)=>{
    console.log(datas);
})
