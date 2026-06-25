// let  obj = {
//   a: {
//     b: {
//       c: 1
//     }
//   }
// };
// let value = obj.a.b.c;

// let flat = {
//   "a.b.c": value
// };

// console.log(flat);



let flat = {
  "a.b.c": 1
};

let obj = {};

obj.a = {};
obj.a.b = {};
obj.a.b.c = flat["a.b.c"];

console.log(obj);