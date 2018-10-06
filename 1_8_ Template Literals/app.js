// Compatible all browser

const name = 'Jonh';
const age = 30;
const job = 'Web Development';
const city = 'Louisville';
let html;
// Inserting HTML from JS without Template Strings
// Old Way JS (ES5)

html = 
  '<ul>' +
      '<li>Name: ' + name + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '<li>Job: ' + job +'</li>' +
      '<li>City: ' + city +'</li>' +
  '</ul>';

// With Template Strings JS (ES6)
function hello(){
  return 'Hello';
}
html = `
  <ul> 
  <li>Name: ${name}</li> 
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City:${city}</li>
  <li>${4 + 4}</li>
  <li>${hello()}</li>
  <li>${age>=21? 'you can drink':'you can not drink'}</li>
  </ul>
`;



  document.body.innerHTML = html; //Dom 


