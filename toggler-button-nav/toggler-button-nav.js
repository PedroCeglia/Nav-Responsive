btn_close = document.querySelector(".toogler-button2");
btn_open = document.querySelector(".toogler-button");
nav_2 = document.querySelector("#header-nav");

btn_close.addEventListener("click", ()=>{
    // Função fechar Menu
    nav_2.classList.add('sumir')
    btn_close.classList.add('sumir')
    btn_open.classList.remove('sumir')
})
btn_open.addEventListener("click", ()=>{
    // Função Abrir Menu
    nav_2.classList.remove('sumir')
    btn_close.classList.remove('sumir')
    btn_open.classList.add('sumir')
})