var argv = require('yargs').command(
    'hello',
    'Greets user',
    function(yargs){
        yargs.options({
          name : {
              demand: true,
              alias: 'n',
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