 // Muve Up and down
 let val;

 const list = document.querySelector('ul.collection');
 const listItem = document.querySelector('li.collection-item:first-child');

 val = listItem;
 val = list;

// // Get child nodes returns a node list array
 val = list.childNodes; 
 val = list.childNodes[0];
 val = list.childNodes[0].nodeName;
 val = list.childNodes[3].nodeType;
//Type of nodes
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype


// Get children element nodes returns html collection
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

 // Children of children
 list.children[3].children[0].id = 'test-link';
 val = list.children[3].children[0];

// // First child
 val = list.firstChild; // first node
 val = list.firstElementChild;// first element

 // Last child
 val = list.lastChild;
 val = list.lastElementChild;

 // Count child elements
 val = list.childElementCount;

 // Get parent node
 val = listItem.parentNode;
 val = listItem.parentElement;
 val = listItem.parentElement.parentElement;

 // Get next sibling 
 val = listItem.nextSibling; // return nodes
 val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

 // Get prev sibling
 val = listItem.previousSibling;
 val = listItem.previousElementSibling;
 console.log(val);