const btnMo = document.querySelector(".btnMo");
const menuMo = document.querySelector(".menu_mobile");

btnMo.addEventListener("click", e =>{
    e.preventDefault();

    let isOn = menuMo.classList.contains("on");
    /*
    if(isOn) {
        menuMo.classList.remove("on");
    }else {
        menuMo.classList.add("on");
    }
    */
    (isOn) ? menuMo.classList.remove("on") : menuMo.classList.add("on");
});

window.addEventListener("resize", e => {
    let wid = window.innerWidth;

    if(wid >=1180) menuMo.classList.remove("on");
})