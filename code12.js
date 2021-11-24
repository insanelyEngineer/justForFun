document.querySelector('html').addEventListener('mousemove',doColor);

document.querySelector('#container').addEventListener('mouseenter',remEv);
document.querySelector('#container').addEventListener('mouseleave',addEv);
function addEv(){
    document.querySelector('html').addEventListener('mousemove',doColor);
}
function remEv(e){
    document.querySelector('html').removeEventListener('mousemove',doColor);
}



function doColor(e){
    document.querySelector('html').style
    .backgroundColor=`rgb(${e.offsetX%250},${e.offsetY%250+100},${(0.5*e.offsetY+0.5*e.offsetX)%250+100})`;
    
    if(e.offsetX>500 || e.offsetY>500){    
    document.querySelector('#container').style.display="block";
    document.querySelector('.greeting').style.display="none";
}
}



function listenEvent(){
for(i=0;i<document.querySelectorAll('a.dele').length;i++)
val=document.querySelectorAll('a.dele')[i].addEventListener('click',onclick);
}

listenEvent();

function onclick(e){
    e.target.parentElement.parentElement.remove();
    if(document.querySelector('li')===null){
        document.querySelector('.magic').style.display="none";
    }
}

const form=document.querySelector('form');
const inputForm=document.getElementById('task');
form.addEventListener('submit',doAdd);
function doAdd(e){
    if(inputForm.value!=='')addList(inputForm.value);
    e.preventDefault();
    inputForm.value=''; 
}

function addList(x){
    const li=document.createElement('li');
    li.className="jojo";
    li.innerHTML= `${x}<a href="#" class="dele" style="text-decoration: none; color: blue;"><img src="cross-icon.svg" alt="cross-icon" width="10px" height="10px" align="right" class="icon"></a>`;
    let val=document.querySelector('ul'); 
    val.appendChild(li);
    document.querySelector('.magic').style.display="block";
    listenEvent();
}
