console.log('%c HI', 'color: firebrick')

function fetchPics() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderPics(json));
  }
  
function renderPics(json) {
    let cont = document.getElementById('dog-image-container')
    json.message.forEach(
    function(element){
      let img = document.createElement('img')
      img.src = element
      cont.append(img)
    })
  }

function fetchBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json){
    let ul = document.getElementById("dog-breeds")
    Object.keys(json.message).forEach(
        function(element){
            let li = document.createElement('li')
            li.innerHTML = element
            li.style.color = "black"
            li.addEventListener('click', function(event){
                li.style.color = li.style.color === "black" ? "red" : "black"
            })
            ul.append(li)
        })
}


// let breed_dropdown = document.getElementById('breed-dropdown');
// let x = document.getElementById("breed-dropdown").value;


document.addEventListener('DOMContentLoaded', function() {
    fetchPics()
    fetchBreeds()
    document.getElementById('breed-dropdown').addEventListener('change', function(e) {
        console.log(document.querySelectorAll('li'))
        document.querySelectorAll('li').forEach(li => {
            li.style.display = ''
            if(li.innerText[0] != e.target.value){
                li.style.display = 'none'
            }
        })
     })
  })