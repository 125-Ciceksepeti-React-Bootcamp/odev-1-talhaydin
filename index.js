const form = document.querySelector(".leftContentForm")
const cards = document.querySelector (".rightContentGrid")
const grCell = document.querySelector(".gridCell")


fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((json) => json.slice(-10).forEach(item => {
     const wrapEl = document.createElement('div')
     wrapEl.innerHTML = ("")
     wrapEl.classList.add("gridCell")
     cards.appendChild(wrapEl)
     const imgEl = document.createElement('img')
     imgEl.setAttribute('src', 'https://www.logowik.com/content/uploads/images/t_cicek-sepeti3297.jpg')
     imgEl.classList.add('gridImg')
     wrapEl.appendChild(imgEl)
     const titleEl = document.createElement('h3')
     titleEl.innerHTML = (item.title)
     wrapEl.appendChild(titleEl)
     const bodyEl = document.createElement('p')
     bodyEl.innerHTML = (item.body)
     wrapEl.appendChild(bodyEl)
     const buttonEl = document.createElement ('button')
     buttonEl.innerHTML = ("Card Button")
     buttonEl.classList.add("cardButton")
     wrapEl.appendChild(buttonEl)
     const searchBar = document.forms['srcBar'].querySelector('input')
     searchBar.addEventListener('keyup', handleSearch = (e) => {
     if(item.title.includes(e.target.value.toLowerCase()) == false){wrapEl.classList.add('noDisplay')}
     else (wrapEl.classList.remove('noDisplay'))
     })
  }));  

const handleForm = () => { 
 form.classList.toggle("noDisplay")
}

const handleCards = () => { 
    cards.classList.toggle("noDisplay")
   }

 let formEl = document.getElementById("bestFormEver")  

 formEl.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("First Name:" + " " + formEl.fname.value)
    console.log("Last Name:" + " " + formEl.lname.value)
    console.log("Phone:" + " " + formEl.phone.value)
    console.log("Adress:" + " " + formEl.address.value)
  });


