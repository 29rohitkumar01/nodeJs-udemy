const marks = [100, 89, 93];
let total = 0;

marks.forEach((mark) => {
 total += mark;
})

console.log('Average:', total/marks.length);