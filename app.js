var knopka = document.getElementById('button');
var cursor = document.getElementById('cursor');
knopka.onclick = function(){
    alert(`Siz ikkinchi marta bosdingiz`)
}
function clickMe(){
    alert('bu click uchun')
}
knopka.addEventListener('click',clickMe);
window.addEventListener('mousemove',(event)=>{
    console.log(event);
})
document.addEventListener('mousemove',function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
})