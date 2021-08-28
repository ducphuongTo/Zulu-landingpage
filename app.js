
function handleToggleMenu(){
    const menuToggle = document.getElementById(".menu-toggle")
    const menu = document.querySelector(".header-menu")

    if (!menuToggle || !menu) return;

    menuToggle.addEventListener("click",function(){
        menu.classList.add("is-active")

    })
    document.getElementById('click',function(e){
        if(!menu.contains(e.target) && !e.target.matches(".menu-toggle")){
            menu.classList.remove("is-active");
        }
    })
}

handleToggleMenu();