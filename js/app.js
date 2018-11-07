'use strict'
let travelPlaces =[]
let displayArray =[]
let elImageContainer = document.getElementById("img-container")
let eltravelInterest = document.getElementsByClassName("travel-image")

function Images (newtitle, Path, id, description) {
  this.title = newtitle
  this.filePath = Path
  this._id = id
  this.alt = description
  this.clicked = 0
  this.shown = 0
}
// instantiating new instances of our image object
let paris = new Images('paris', './images/paris.jpg', 'paris', 'Image of thunder paris')
let dubai = new Images( 'dubai', './images/dubai.jpeg', 'dubai', ' image of dubai')
let singapore = new Images ('singapore', './images/singapore.jpeg', 'image of singapore' )
let thailand = new Images('thailand', './images/thailand.jpeg',' image of thailand' )
let london = new Images('london', './images/london.jpeg',' image of london' )
let Moscow = new Images('Moscow', './images/Moscow.jpg', 'Moscow', 'Image of thunder Moscow')
let istanbul = new Images('istanbul', './images/istanbul.jpg', 'istanbul', 'Image of thunder istanbul')
let Asmara = new Images('Asmara', './images/Asmara.jpg', 'Asmara', 'Image of thunder istanbul')
//let dubai = new Images( 'dubai', '../images/dubai.jpeg', 'dubai', ' image of dubai')
//let singapore = new Images ('singapore', '../images/singapore.jpg', 'image of singapore' )
//let thailand = new Images('thailand', '../images/thailand.jpg',' image of thailand' )


travelPlaces.push(dubai,istanbul,london, Moscow, paris, singapore, thailand,Asmara )

let randomNumber = function(){
  return Math.floor(Math.random()* travelPlaces.length)
}

let FirstImage 
let SecondImage
let ThirdImage

let counter = 0
let clickHandler = function(event) {
  if(FirstImage._id === event.target.id) {
    FirstImage.clicked++
    counter++
  } else if(SecondImage._id === event.target.id) {
    SecondImage.clicked++
    counter++
  } else {
    ThirdImage.clicked++
    counter++
  }
  displayImages()
  while(counter===25){
    displayChart()
    break
  } 
}


let displayImages = function() {
  for(let i = 0; i < eltravelInterest.length; i++) {
    let elImage = eltravelInterest[i]
    let randomPlace = travelPlaces[randomNumber()]
    if(i === 0) {
      FirstImage = randomPlace
      while( displayArray.includes(FirstImage)){ 
        randomPlace = travelPlaces[randomNumber()]
        FirstImage = randomPlace
      }
    } else if(i === 1){
      SecondImage = randomPlace
      while(FirstImage === SecondImage || displayArray.includes(SecondImage) ) {
        randomPlace = travelPlaces[randomNumber()]     
        SecondImage = randomPlace   
      }
    } else if (i===2) {
      ThirdImage = randomPlace
      while(ThirdImage === FirstImage || ThirdImage ===SecondImage || displayArray.includes(ThirdImage)){
        randomPlace = travelPlaces[randomNumber()]
        ThirdImage = randomPlace
            
      }
      displayArray=[]
      displayArray.push(FirstImage, SecondImage, ThirdImage)
      console.log(displayArray)
      
    }
    elImage.src = randomPlace.filePath
    elImage.setAttribute('id', randomPlace._id)
    randomPlace.shown++

    elImage.addEventListener('click', clickHandler)
  }
}
displayImages()


