
const iconOn = document.querySelector(".bi-toggle-on"),
 iconOff = document.querySelector(".bi-toggle-off")
 let facebookCount = document.getElementById("facebook-count")


 

 let link = document.createElement("link")
  link.rel = "stylesheet"
  document.getElementsByTagName("head")[0].appendChild(link)


  let theme = localStorage.getItem("theme")
  if(localStorage.getItem("theme") === null){
     localStorage.setItem("theme", JSON.stringify(false))

  }

  function dark() {
   if(JSON.parse(localStorage.getItem("theme"))== false){
      localStorage.setItem("theme", JSON.stringify(true))



   }

   let darkTheme = JSON.parse(localStorage.getItem("theme"))

   if (darkTheme == true) {
      link.href = "./dark.css"
   }

 }


 function light() {
   if(JSON.parse(localStorage.getItem("theme"))== true){
      localStorage.setItem("theme", JSON.stringify(false))



   }

   let darkTheme = JSON.parse(localStorage.getItem("theme"))

   if (darkTheme == false) {
      link.href = ""
   }


   
 }



 iconOff.addEventListener("click", ()=>{
    iconOff.style.display ="none"
    iconOn.style.display ="block"

    dark()
    

 })
 iconOn.addEventListener("click", ()=>{
    iconOn.style.display ="none"
    iconOff.style.display ="block"
    light()

 })


 window.onload = function(){

   if(JSON.parse(localStorage.getItem("theme")) == false){

     link.href = ""
     console.log(iconOff);
    



      console.log("it is false");




   }else{

      let darkTheme = JSON.parse(localStorage.getItem("theme"))

      iconOff.style.display = "none"
      iconOn.style.display ="block"
      link.href ="./dark.css"
     




   }
 }









