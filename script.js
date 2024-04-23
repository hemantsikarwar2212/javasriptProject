const span = document.querySelectorAll('.button')
const body = document.querySelector('body')
span.forEach(function(button){
  console.log(button)
button.addEventListener('click' , function(event){
  // console.log(event)
  // console.log(event.target)
if(event.target.id === 'blue'){
  body.style.backgroundColor = event.target.id
}if(event.target.id === 'white'){
  body.style.backgroundColor = event.target.id
}if(event.target.id === 'lightgreen'){
  body.style.backgroundColor = event.target.id
}if(event.target.id === 'yellow'){
  body.style.backgroundColor = event.target.id
}

})
})