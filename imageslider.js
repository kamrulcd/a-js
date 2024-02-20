var images = ['image1.png','image2.png','image3.png']


var image = document.getElementById("img")
var count = 0

function nextImage(){
    count++;
    if(count>=images.length){
        count = 0 ;
        image.src = images[count]
    }
    else{
        image.src = images[count]
    }  
}

function prevImage(){
    count--;
    if(count<0){
        count = images.length - 1;
        image.src = images[count]
    }
    else{
        image.src = images[count]
    }
}
