console.log('App is running');

function showImg(which) {
    
    var allImages=document.getElementsByClassName('chart');
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].style.display = 'none';
    }    
    var i = document.getElementById(which);
    if (!i) return;
    i.style.display='initial';
}