const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {

  // toggle dark class body
  document.body.classList.toggle("dark")

  // local save mode

  if (document.body.className.includes("dark")) {
    localStorage.setItem("back","dark")
  }else{
    localStorage.setItem("back","light")
  }


 
})

window.onload = function(){
  let back = localStorage.getItem("back")

  if(back === "dark"){
    document.body.classList.add("dark")
  }
}

