// 1. Using callback
// 2. Using Promises



// Using callback
// function myFunction(callback) { 
//     setTimeout(() => { 
//         const data = { name: "Aman", age: 21 }; 
//         callback(data); 
//     }, 100);
// }

// // call function
// myFunction((data) => { 
//     console.log("Data:", data); 
// });

// console.log(1);
// console.log(2);


// ============================================================



// Using Promises
// function mydata() {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => { 
//             const data = { name: "Rohit", age: 23 }; 
//             resolve(data); 
//         }, 1000);
//     });
// } 
  
// mydata()
//     .then((data) => {
//         console.log("Data:", data); 
//     })
//     .catch((error) => { 
//         console.error("Error:", error); 
//     });

// console.log(1);
// console.log(2);