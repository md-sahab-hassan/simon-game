let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let highscore=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
            levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function levelup(){
    userseq=[];//jab level up hoga user sequent reset ho jayega
    level++;
    h2.innerText=`Level ${level}`;
    if(highscore<level){//high score ke liye hai
        highscore=level;
    }
    //random button choose
    let randindx=Math.floor(Math.random()*4)
    let randcolor=btns[randindx]
    let randbtn=document.querySelector(`.${randcolor}`);
    console.log(randindx);
    console.log(randcolor);
    console.log(randbtn);
    gameseq.push(randcolor);//array mein color seq daal rahe hai
    console.log(gameseq)
    btnflash(randbtn);
}
function checkseq(idx){
    //console.log("curr level",level);
    //let idx=level-1;//hamare seq mein hamesa level 1 sein kamm value rahegi agar level 1 hai to 1 value rahi gi index 0 par
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            console.log("same value")
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over your score is <b>${level}</b> highest score <b>${highscore}</b><br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function btnpress(){
    console.dir(this);
    let btn=this;//pressed button added in this
    btnflash(btn);
    let usercolor=btn.getAttribute("id");//jo user button press karega uski id store karega compare ke liye
    userseq.push(usercolor);
    console.log(userseq);
    checkseq(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}