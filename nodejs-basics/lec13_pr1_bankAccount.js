var myAccount = {
    name: 'Mukesh Ambani',
    balance: 1000000000
}


// function to deposit
function deposit(account, amount){
    account.balance = (account.balance || 0) + amount;
    console.log('Amount deposited: '+ amount)
    console.log('Updated balance is: ' + account.balance)
    return account
}

// function to withdraw from account
function withdraw(account, amount){
    if(account.balance >= amount){
        account.balance =  account.balance - amount;
        console.log('Amount Withdraw: ' + amount)
        console.log('Updated balance is: ' + account.balance)
        return account
    } else {
        console.log("Cannot withdraw!! " + amount+ " You don't have sufficient balance in your account. Your balance: " + (account.balance || 0))
        return account
    }
}

// function to return balance
function showBalance(account) {
    console.log('Your balance is '+ (account.balance || 0))
}

showBalance(myAccount);
withdraw(myAccount,10000);
showBalance(myAccount);
deposit(myAccount, 10000);
showBalance(myAccount);
withdraw(myAccount, 1000000000)
withdraw(myAccount, 100)