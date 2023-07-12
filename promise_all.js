//1//

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("print me");
  },1000);
});

Promise.all([promise1, promise2, promise3])
   .then((values) => {
    console.log(values);
  })
   .catch((rejected)=>{
    console.log(rejected);
  });



  //2//

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
  }, 1000);
});       
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second");
    }, 100);
  });
Promise.all([p1,p2])
    .then((resolve)=>{
       console.log(resolve);
    })
    .catch((rejected)=>{
        console.log(rejected)
    });

// -------------------------------------------(3)-------------------------------//

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hey i am first");
//     },2000);
// });

// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hey i am second");
//     },3000);
// });

// const promise3=new Promise((resolve,reject)=>{
//     resolve(9);
// });

// Promise.all([promise1,promise2,promise3])
//   .then((resolve)=>{
//     console.log(resolve);
//   })
//    .catch((rejected)=>{
//     console.log(rejected)
//   });
