const myPet = {
    name: 'Rusky',
    type: 'Dog',
    breed: 'Alsastian'
}

function printPetDetails(pet = {}){
  if(pet.type === 'Dog'){
    console.log('You own a Dog named ' + pet.name)
  } else if(pet.type === 'Cat'){
    console.log('You own a cat named ' + pet.name)
  } else {
    console.log("You don't own a cat or dog as pet. Get one soon!!")
  }
}

printPetDetails(myPet)