// closure implementation
function incrementNumber(baseNumber){
    return function adder(add){
        return baseNumber + add
    }
}


const incrementer = incrementNumber(10);

console.log('output: ', incrementer(5));
console.log('Ouput 1: ', incrementer(3));