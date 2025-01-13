let key = { name: 'zhufeng' }
let map = new WeakMap([[key, ['zhang', 'san']]]);
/* const map = new Map();

map.set(key, ['zhang', 'san']); */
console.log(map.get(key));