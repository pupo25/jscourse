// Window is on top of everything/ Methods Object Property

//Alert box
//alert("Hello World");

// Prompt takes input
// const input = prompt();
// alert(input);

// Confirm when deleting 
// if(confirm("Are you sure")){
//   console.log("yes");
// } else {
//   console.log("no");
// }

// Propertys

let val;

// outter height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points used when scrolling down and animations stay in the side
val = window.scrollY;
val = window.scrollX;

// Location Object get info
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; //cool extrac info from url

// Redirect location
//window.location.href = 'http://google.com';
//window.location.reload(); reloads the page

// History object
// val = window.history.length;

// Navigator Object browser
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val)

