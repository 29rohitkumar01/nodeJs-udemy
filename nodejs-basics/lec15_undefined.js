function greetUser(name){
    if(typeof name === 'undefined'){
        console.log('Hello World');
    } else {
        console.log('Hello ' + name)
    }
}

greetUser('Rahul');
greetUser(123);
greetUser(null);
greetUser(undefined);
greetUser();