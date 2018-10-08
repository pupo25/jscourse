// document.getElementsByClassName html collections

//  const items = document.getElementsByClassName('collection-item');
//  console.log(items);
//  console.log(items[0]);
//  items[0].style.color = 'red';
//  items[3].textContent = 'Hello';

//  console.log(listItems);const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

 

// document.getElementsByTagName html collections

//  let lis = document.getElementsByTagName('li');
//  console.log(lis);
//  console.log(lis[0]);
//  lis[0].style.color = 'red';
//  lis[3].textContent = 'Hello';

//  // Conver HTML Collection into array
//  lis = Array.from(lis);

//  lis.reverse();

//  lis.forEach(function(li, index){
//    console.log(li.className);
//    li.textContent = `${index}: Hello`;
//  });

//  console.log(lis);

// document.querySelectorAll, Returns node Lists no converting to array
 const items = document.querySelectorAll('ul.collection li.collection-item');

 items.forEach(function(item, index){
     item.textContent = `${index}: Hello`;
 });

 const liOdd = document.querySelectorAll('li:nth-child(odd)'); // css3
 const liEven = document.querySelectorAll('li:nth-child(even)');

 liOdd.forEach(function(li, index){
   li.style.background = '#ccc';
 });

 for(let i = 0; i < liEven.length; i++){
   liEven[i].style.background = '#f4f4f4';
 }


console.log(items);
