 //document.querySelector('.clear-tasks').addEventListener('click', function(e){ e = eventlistener
  // console.log('Hello World');

  // e.preventDefault(); disable default
 //});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
//  console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
 // val = e.target.innerText = "Hello";// Change text
  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;  
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}