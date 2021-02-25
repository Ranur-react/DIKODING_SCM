const menu = document.querySelectorAll(".menu");
for (let Onmenu of menu) {
    Onmenu.addEventListener('click', function(event) {
        const target = event.target;
        const klikTarget=target.classList;
        console.log(klikTarget[1]);
        if(klikTarget[1] == "show"){
            target.classList.remove("show");
            
        }else{
            target.classList.add("show");
        }

        
    });
}

// const Submenu = document.querySelectorAll(".menu>.sub-menu");
//  for (let Sub of Submenu) {
//     Sub.addEventListener('mouseout', function(event) {
//         const target = event.target;
//         // target.classList.add("show");
//         const mainmenu=document.querySelectorAll(".menu>.sub-menu");
//         console.log(mainmenu);
        
//     });
//  }