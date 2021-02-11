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

// <-----------------LECTURE 25 STARTS ------------>
// Example 2:
// no need to import twice and start storage again, done to get into practice
// var storage = require('node-persist');
// storage.initSync()
// storage.setItemSync('accounts', [{
//     name: 'Rohit Kumar',
//     date: '11 Feb 2021'
// }])
// const accountsData = storage.getItemSync('accounts')
// console.log('accounts Data: ', accountsData)


// Assignment: Push new account
// accountsData.push({
//     name: 'Albert Dendam',
//     date: '11 Feb 2021'
// })

// storage.setItemSync('accounts', accountsData);
// console.log('updated accounts', storage.getItemSync('accounts'));
// <------------------LECTURE 25 ENDS ---------------->




// <------------------LECTURE 26 STARTS ---------------->
console.log('<------------------LECTURE 26 STARTS ---------------->')

var storage = require('node-persist');
storage.initSync();

function createAccount(account){
    console.log('Account creation starts!!')
    let storedAccounts = storage.getItemSync('stored_accounts');
    if(typeof storedAccounts === 'undefined'){
      storedAccounts = []
    }
    storedAccounts.push(account);
    storage.setItemSync('stored_accounts', storedAccounts);
    console.log('Account created: ', account);
    return account
}

function getAccount(accountName){
    let storedAccounts = storage.getItemSync('stored_accounts');
    if(typeof storedAccounts === 'undefined'){
        console.log('No account found. Please create account first !!')
        storedAccounts = []
    }
    let matchedAccount = null
    for(let i=0; i < storedAccounts.length; i++){
        if(storedAccounts[i].username === accountName){
            matchedAccount = storedAccounts[i];
            break;
        }
    }
    if(matchedAccount === null){
        console.log('Searched account ' + accountName + ' Not found');
    } else {
        console.log('Account found: ', matchedAccount)
    }
    return matchedAccount
}

getAccount();  // for undefined case
createAccount({
    username: 'rohitkumar',
    name: 'Rohit Kumar',
    date: '20-12-2005',
    balance: 100000
})
getAccount('xyz') //  for account not found case
createAccount({
    username: 'andrewShumak',
    name: 'Andrew Shumak',
    date: '20-09-2010',
    balance: 100
})
getAccount('rohitkumar');

console.log('<------------------LECTURE 26 ENDS ---------------->')
// <------------------LECTURE 26 ENDS ---------------->