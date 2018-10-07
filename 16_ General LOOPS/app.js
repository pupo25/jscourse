// Instruction that repeats till a condition is reached

// For Loops can not use const
//    declara   cond   parame

for(let i = 0; i < 10; i++){
  //console.log("NUMBER "+i);
  if(i === 2){
    console.log("Two is my favorite number");
    continue; // go to next
  }

  if(i === 5){
    break;
  }

  console.log("For Loop "+ i);
}

// While Loop
let i = 0;

while(i < 10){
  console.log("While Loop "+ i);
  i++;
}

// do While
 
let f = 100;

do { // will allways run
  console.log("Do Wile Loop "+ f);
  i++;
}

while (i < 10) ;

// Loop Arrays

const cars = ["ford","Honda","Toyota","Chevy"];

for(i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// Loop Arrays forEach() Method
const cars1 = ["ford","Honda","Toyota","Chevy"];

cars1.forEach(function(car,index,array){
  console.log(`${index}:${car}`);
  console.log(array);
});

// Map method return a different array
const users = [   // array with objects
  {id: 1, name: "Israel"},
  {id: 2, name: "Pedro"},
  {id: 3, name: "Mike"},
  {id: 4, name: "Pupo"},
];

const ids = users.map(function(user){
  return user.id;
});
console.log(ids);

// For let x in loop for objects
 
const person = {
  // Key  :    Value Pairs
  firstName: "Israel",
  lastName:"PUpo",
  age: 28
}
// x= Key  :   person[x] value
for(let x in person){
  console.log(`${x} : ${person[x]}`);
}






  




