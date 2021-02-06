var isGood = true;

// function to toggle boolean
function toggleBoolean(param){
    if(typeof param === 'boolean'){
        console.log('Pased value: ', param)
        console.log('Toogled value: ', !param)
    } else {
        console.log('Passed value: ' + param + ' is not a boolean')
    }
}

toggleBoolean(isGood)
toggleBoolean('abv')