// Declarations Statements

function greet(firstName = "Israel",lastName = "Ibaceta"){    // Deafault
  //if(typeof firstName === "undefined" ){firstName = "Israel"} ES5 old Way
  //if(typeof lastName === "undefined" ){lastName = "Ibaceta"}
  //console.log("Hello");
  return 'Hello ' + firstName + " " + lastName;
}

console.log(greet());

// Function Expresions

const square = function(x){
  return x*x;
}; // variable

console.log(square(3));

// Immiatleley Invocable Expressions - IIFEs  declare and run at the same time

(function(){
  console.log("IFFE Ran...")
})();

(function(name){
  console.log("Hello " + name);
})("Israel");

// functions inside Objects are called Methos

const todo ={
  add: function(){
    console.log("add to do..")
  },
  edit: function(id){
    console.log(`EDIT TO DO ${id}`);
  }
} 

todo.delete = function(){
  console.log("Delete todo ...")
}

todo.add();
todo.edit(22);
todo.delete();