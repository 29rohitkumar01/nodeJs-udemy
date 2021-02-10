var accounts = []

// function to create account
function createAccount(account) {
    if(typeof account !== 'undefined' && typeof account.username === 'string' && typeof account.balance === 'number'){
        accounts.push(account)
        console.log('Account created!!', account)
        return account
    } else {
        console.log("Please give account details in format of object as  { username: 'xyz', balance: 0, name: 'Your name' }")
    }
}


// function to get Account details using forEach
function getAccount(username){
    if(typeof username !== 'undefined'){
        let searchedAccount = {
            index: -1
        }
        accounts.forEach((acc, index) => {
          if(acc.username === username){
              searchedAccount.account = acc;
              searchedAccount.index = index
              console.log('Account found: ', searchedAccount)
          }
        })
        if(searchedAccount.index !== -1){
            return searchedAccount
        } else {
            console.log('Account not found :(. Please create account first ', username)
            return -1
        }
    }
    console.log('Please enter a valid username')
    return -1
}


// function to deposit
function deposit(account, amount){
    if(typeof account !== 'undefined' && account.username && typeof amount === 'number'){
        const searchedAccount = getAccount(account.username)
        if(searchedAccount === -1){
            console.log('Error in depositing in account', account)
        }else {
            searchedAccount.account.balance = (searchedAccount.account.balance || 0) + amount
            console.log('Amount deposited: '+ amount + ' in account ' + account.username)
            console.log('Updated balance is: ' + account.balance)
            accounts[searchedAccount.index] = searchedAccount.account
        }
    } else {
        console.log('Please enter account information correctly. Depositing in account should contain username and amount')
    }
}

// function to withdraw from account
function withdraw(account, amount){
    if(typeof account !== 'undefined' && account.username && typeof amount === 'number'){
        const searchedAccount = getAccount(account.username)
        if(searchedAccount === -1){
            console.log('Error in withdrawing from account', account)
        }else {
            if(searchedAccount.account.balance >= amount){
                searchedAccount.account.balance = (searchedAccount.account.balance || 0) - amount
                console.log('Amount deposited: '+ amount + ' in account ' + account)
                console.log('Updated balance is: ' + account.balance)
                accounts[searchedAccount.index] = searchedAccount.account
            } else {
                console.log("Cannot withdraw!! " + amount+ " You don't have sufficient balance in your account. Your balance: " + (searchedAccount.account.balance || 0))
        
            }
        }
    } else {
        console.log('Please enter account information correctly. Depositing in account should contain username and amount')
    }
}

const user1 = {
    username: 'rohitkumar',
    name: 'Rohit Kumar',
    balance: 0
}

const user2 = {
    username: 'vikassharma',
    name: 'Vikas Sharma',
    balance: 100
}

createAccount(user1);
createAccount(user2)


getAccount(user1.username);
getAccount('xyz')
deposit(user1, 1000)
getAccount(user1.username)
deposit(user2,10000)
getAccount(user2.username)
withdraw(user1, 100000)


const errAccount = {
    username: 'undefined',
    name: 'Abc',
    balance:0
}

// createAccount(errAccount);
withdraw(errAccount,100)