let elementList = document.querySelectorAll(".fa-star"); 
 
let content = document.querySelector(".back");

elementList.forEach(function(element){
    element.addEventListener('click',function(){
        element.classList.remove("fas");
        element.classList.add("far");
    })
});

content.forEach(function(back){
    back.addEventListener('click',function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href="/";
        }, 500);
    })
})