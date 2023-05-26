const images = [
    'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1682712581615-18fc7a7b9092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1683107311237-0200075993c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1682705605835-58dbad30e467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1682407853472-78554e927bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1563283498-93413b5abbe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1652458767767-eda5962e3827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1682555479528-dc4561bbd7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
]

const n= images.length;
const flexcontainer = document.getElementById('flex-container');
const leftbtn = document.getElementById('lft-btn');
const rightbtn = document.getElementById('right-btn');
const carouselNav = document.getElementById('carousel-nav');


const containerWidth = 50;
const flexcontainerWidth = n*containerWidth;
flexcontainer.style.width = flexcontainerWidth;

for(let i = 0;i<n;i++){
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexcontainer.appendChild(newImg);

    const dotDiv = document.createElement('div');
    dotDiv.classList.add('carousel-dot');
    carouselNav.appendChild(dotDiv);

    dotDiv.addEventListener('click',(event) => {
       const index =  [...carouselNav.children].indexOf(event.target);
       console.log(index);
       curPosition = index;
       showimg(currentPos);
    })
}

let currentPos = 0;
showimg(0);
leftbtn.addEventListener('click', () => {
    if(currentPos > 0){
        showimg(currentPos-1);

    }else{
        showimg(n-1);
        
    }
})

rightbtn.addEventListener('click', () => {
    if(currentPos < n-1){
        showimg(currentPos + 1);
    }else{
        showimg(0);
    }
})

function showimg(position) {

    const prevDot = carouselNav.children[currentPos];
    prevDot.classList.remove('active');
    currentPos = position;

    const curDot = carouselNav.children[currentPos];
    curDot.classList.add('active');

    const translateXDistance = -currentPos*containerWidth;
    flexcontainer.style.transform = `translateX(${translateXDistance}vw)`;

}
