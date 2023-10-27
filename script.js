//Q1.How to compare the JSON have the same properties without order
//Answer:

let obj1={name:"person 1",age:5}
let obj2={age:5,name:"person 1"}
let a=JSON.stringify(obj1);
let b=JSON.stringify(obj2);
console.log(a===b);


//Q2.By using the given API display all the country flags in the consoole
//Answer;

var Request=new XMLHttpRequest();
Request.open("GET","https://restcountries.com/v3.1/all",true); //opening a connection to server
Request.send()                                                 //sending the request 
Request.onload=function(){                                     //getting response by funvtion
    var Data=Request.response;
    var Result=JSON.parse(Data)
    console.log(Result);
    for(i=0;i<Result.length;i++){
        console.log(Result[i].flags.png)
    }
}

//Q3.Use the smae rest countries and print all countries name, regions,sub-region and population
//Answer:
var Appeal=new XMLHttpRequest();
Appeal.open("GET","https://restcountries.com/v3.1/all",true); //opening a connection to server
Appeal.send()                                                 //sending the request 
Appeal.onload=function(){                                     //getting response by funvtion
    var info=Appeal.response;
    var Results=JSON.parse(info)
    console.log(Results);
    for(i=0;i<Results.length;i++){
        console.log(Results[i].name.common," ",Results[i].region," ",Results[i].subregion," ",Results[i].population)
    }
}

     