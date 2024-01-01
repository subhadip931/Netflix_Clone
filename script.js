console.log("hello world")
let cover = document.getElementById("cover1").classList
let signin = document.getElementById("signin")
let cross = document.getElementById("cross")

signin.addEventListener("click", ()=>{
    cover.remove("hidden")
})
cross.addEventListener("click", ()=>{
    cover.add("hidden")
})