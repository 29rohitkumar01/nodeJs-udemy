console.log('Starting password manager')

// import storage
// initialise Sync
// set item in sync in key and value
// get item from sync storage by passing key

// Example 1: 
// var storage = require('node-persist'); 
// storage.initSync()
// storage.setItemSync('name', 'Rohit Kumar');
// const name = storage.getItemSync('name');
// console.log('name is: ', name)


// Example 2:
// no need to import twice and start storage again, done to get into practice
var storage = require('node-persist');
storage.initSync()
storage.setItemSync('accounts', [{
    name: 'Rohit Kumar',
    date: '11 Feb 2021'
}])
const accountsData = storage.getItemSync('accounts')
console.log('accounts Data: ', accountsData)


// Assignment: Push new account
accountsData.push({
    name: 'Albert Dendam',
    date: '11 Feb 2021'
})

storage.setItemSync('accounts', accountsData);
console.log('updated accounts', storage.getItemSync('accounts'));