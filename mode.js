let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let modeo = "light";
modebtn.addEventListener("click", ()=>{
    if(modeo ==="light"){
        modeo="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        modeo="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(modeo);
});
