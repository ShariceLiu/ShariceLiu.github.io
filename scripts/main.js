let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/anime1.png') {
        myImage.setAttribute('src', 'images/anime2.png');
    } else {
        myImage.setAttribute('src', 'images/anime1.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3')

function setUserName() {
    let myName = prompt('please enter your name');
    if (!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'welcome, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName=localStorage.getItem('name');
    myHeading.textContent = 'welcome, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}