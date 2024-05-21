let x = 0;
let MyimageInterval = '';
let flag = false;
const imgpath = ["CityLap.jpg", "FlowerLap.jpg", "KrushnaLap.jpg", "NightLap.png", "RiverLap.jpg", 
                "SeaBeachlap.jpg", "SunFlowerLap.jpg", "tree_Night.jpg", "WorldLap.jpg", "jungle.jpeg", "Nature.jpg", "show.jpeg", "water.avif", "water.avif"];
const h1Element = document.getElementById('cntval');
function Increment(){
    if(x == 20) alert("You are at highest level")
    else x++;
    h1Element.textContent = x;
}
function Decrement(){
    if(x == 0) alert("Counter value should not be less than zero")
    else x--;
    h1Element.textContent = x;
}
function Reset(){
    if(x == 0) alert("Counter value is already zero")
    else x = 0;
    h1Element.textContent = x;
}


const secondid = document.getElementById("abcd")
let colors = ["Red", "Orange", "Pink", "Yellow", "Sky Blue","#0F52BA", "#50C878", "#FF4500",  "#E6E6FA","#B76E79", "#40E0D0", "#DC143C", "#FFD700", "#800080", "#98FF98" ]

function Random(){
    let random = Math.floor((Math.random()*15))
    secondid.style.backgroundColor = colors[random]
}
function ResetColor(){
    secondid.style.backgroundColor = "transparent";
}
const button = document.getElementsByTagName("button")
const Dark = document.getElementById("DarkButton")
const body = document.body
Dark.addEventListener('click', ChangeTheme, true)
function ChangeTheme(){
    body.classList.toggle("Dark")
}
console.log(imgpath.length);

const back = document.getElementById("BackSlider");
back.addEventListener('click', SetFunction)
function SetFunction(){
    if(flag){
        flag = false
        Dark.click();
        clearInterval(MyimageInterval);
        location.reload();
    }
    else{
        flag = true;
        MyimageInterval = setInterval(SetBackGround, 2000)
    }
} 

function SetBackGround(){
    let index = Math.floor(Math.random() * imgpath.length);
    const img = "Assets/" + imgpath[index];
    document.body.style.backgroundImage = `url(${img})`;
}

