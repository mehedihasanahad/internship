// DOM Element Selectors
// There are multiple methods available in DOM to select the HTML elements and manipulate them as listed below:

// querySelectorAll()
// querySelector()
// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// getElementsByName()


// const queryS = document.querySelector(".example");
// const querySAll = document.querySelectorAll("p");
// const gebi = document.getElementById("target");
// const gebcn = document.getElementsByClassName('example');
// const gebtn = document.getElementsByTagName('p');
// const gebn = document.getElementsByName('username');

// console.log(queryS, 'querySelector'); // single element
// console.log(gebi, 'getElementById'); // single element

// console.log(querySAll, 'querySelectorAll'); // nodelist
// console.log(gebn, 'getElementsByTagName'); // nodelist

// console.log(gebcn, 'getElementsByClassName'); // html collection
// console.log(gebtn, 'getElementsByName'); // html collection







//==============================================================

// DOM content manipulators
// textContent
// innerHTML
// innerText

// const tcontentexample = document.querySelector(".manipulators h1");
// const innerhtmlexample = document.querySelector(".manipulators h2");
// const innertextexample = document.querySelector(".manipulators h3");

// // difference between textContent & innerText
// console.log(tcontentexample.textContent);
// console.log(tcontentexample.innerText);


// tcontentexample.textContent = "<p>Hello Geeks!- textContent</p>";
// innertextexample.innerText = "<p>Hello Geeks! - innerText</p>";
// innerhtmlexample.innerHTML = "<p>Hello Geeks!- innerHTML</p>";




// ===========================================================================

//DOM element creators


// createElement()
// appendChild()
// append()
// createTextNode()
// insertBefore()

// const tcontentexample = document.querySelector(".manipulators");

// const para = document.createElement("p");
// para.textContent = "This paragraph is created using createElement!";

// const para1 = document.createTextNode("This paragraph is created using createTextNode");

// const para2 = document.createElement("p");
// para2.textContent = "This paragraph is created using createElement 2!";

// const para3 = document.createElement("p");
// para3.textContent = "This paragraph is created using createElement 3!";

// document.body.appendChild(para);
// document.body.appendChild(para1);
// document.body.insertBefore(para2, tcontentexample);
// document.body.append(para3, "Hello");



// =========================================================================

//DOM CSS manipulators
// style
// cssText
// classList

// const tcontentexample = document.querySelector(".manipulators h1");
// const innerhtmlexample = document.querySelector(".manipulators h2");
// const innertextexample = document.querySelector(".manipulators h3");

// tcontentexample.style.color = "white";
// tcontentexample.style.backgroundColor = "black";
// tcontentexample.style.textAlign = "center";

// innerhtmlexample.style.cssText = "color: white; background-color: black; text-align: center";

// innertextexample.classList.add("classList");
