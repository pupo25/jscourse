 //document.getElementById() Selects by id

 //console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
//  taskTitle.style.background = '#333';
//  taskTitle.style.color = '#fff';
//  taskTitle.style.padding = '5px';
 //taskTitle.style.display = 'none'; Disapear

// // Change content
//  taskTitle.textContent = 'Task List'; // Change Content
//  taskTitle.innerText = 'My Tasks';
//  taskTitle.innerHTML = '<span style="color:red">Task List</span>'; // Insert html

// document.querySelector() More powerfull select by anything

 console.log(document.querySelector('#task-title'));
 console.log(document.querySelector('.card-title'));
 console.log(document.querySelector('h5')); //only the first one

 document.querySelector('li').style.color = 'red';
 document.querySelector('ul li').style.color = 'blue'; //nested

 document.querySelector('li:last-child').style.color = 'red';//Sudo Classes last-child nth child
 document.querySelector('li:nth-child(3)').style.color = 'yellow';
 document.querySelector('li:nth-child(4)').textContent = 'Hello World';
 document.querySelector('li:nth-child(odd)').style.background = '#ccc';
 document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




