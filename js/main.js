const topBtn = document.querySelector('#top');
window.addEventListener('scroll' , (event)=>{
    topBtn.classList.toggle("active",window.scrollY>200);
    
})