// 1a.

console.log(Math.min(-1, 0, 1, 2, 3, 4));

// 1b.

console.log(Math.max(-1, 0, 1, 2, 3, 4));

// 2a.

console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

// 2b.

console.log(Math.floor(3321.32321))
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
// Why does the console print -10 ?? shouldn't it have rounded DOWN to -9 ??
console.log(Math.floor(28.329));

// 3.

console.log(parseInt(Math.random() * 6));