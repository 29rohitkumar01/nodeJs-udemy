function countDownWhile(startingPoint, stoppingPoint){
    if(stoppingPoint > startingPoint){
        console.log('Error: Starting point should be greater than stopping point in counting down.')
    } else {
        while(startingPoint >= stoppingPoint){
            console.log('Counting down in while: ', startingPoint);
            startingPoint--;
        }
    }
}


function countDownFor(startingPoint, stoppingPoint){
    if(stoppingPoint > startingPoint){
        console.log('Error: Starting point should be greater than stopping point in counting down.')
    } else {
        for(i= startingPoint; i >= stoppingPoint; i--){
            console.log('Counting down in while: ', i);
        }
    }
}


countDownWhile(10,1);
countDownWhile(0,10);  // shows error

countDownFor(10,0);
countDownFor(0,10); // shows error