// Lecture 27: Installed yargs node package
// this package is used to take command line arguments
// to run go to command line and run node lec27_example_argv.js


var yargs = require('yargs');
//  return arguments passed as plain objects
console.log('Command line arguments: ', yargs.argv) 
// to test : 
// Command 1: run ---> node lect27_example_argv.js helloWorld
// OUTPUT 1:  { _: [ 'helloWorld' ], '$0': 'lec27_example_argv.js' }
// Command 2: run ==> node lect27_example_argv.js helloWorld --name Rohit
// OUTPUT 2: { _: [ 'helloWorld' ], name: 'Rohit','$0': 'lec27_example_argv.js' }

if(yargs.argv._[0] === 'helloWorld'){
    console.log('Hello world printed as argument matched')
}

if(typeof yargs.argv.name !== 'undefined'){
    console.log('Welcome ' + yargs.argv.name)
}

