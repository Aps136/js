let modebtn = document.querySelector("#mode");
let modeo = "light";
modebtn.addEventListener("click", ()=>{
    if(modeo ==="light"){
        modeo="dark";
    }else{
        modeo="light";
    }
    console.log(modeo);
});
