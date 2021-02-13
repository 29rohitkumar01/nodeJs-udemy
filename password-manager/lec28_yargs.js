// Come to the directory containing this file
// To run enter command --> node lec28_vargs.js hello --name ROhit --lastname Kumar
// also user can use help command --> node node lec28_vargs.js hello --help
var argv = require('yargs').command(
    'hello',
    'Greets user',
    function(yargs){
        yargs.options({
          name : {
              demand: true,
              alias: 'n',  // alias that can be used in place of name so --name / --n
              description: 'Your first name goes here'
          },
          lastname: {
              demand: true,
              alias: 'l',
              description: 'Last name of the user'
          }
        }).help('help')
    }
).help('help')
.argv

var command = argv._[0]

console.log('command', command)
console.log('argv', argv)
