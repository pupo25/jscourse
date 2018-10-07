const person = {
  firstName:'Israel',
  lastName:'Pupo',
  age: 26,
  email:'@pupo.com',
  hobbies: ['online','music','sports'],
  address:{
    city:'louisville',
    state:'Kentucky'
  },
  getBirthYear: function(){
    return 2018 -this.age; //this.age acces propetys inside an object
  }
}

let val;

val = person;

// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[0];
val = person.address['city']; // same
val = person.address.city;// same
val = person.getBirthYear();
const today = new Date() ; // new is calling date object
console.log(val);


// Arrays of objects
const people = [
  {name:'Jonhn',age: 25},
  {name:'pupo',age: 26},
  {name:'ibaceta',age: 27},
];

//for loop aRRAY
for(i=0;i<people.length;i++){
  console.log(people[i].name.concat(' '+people[i].age));
  
}


