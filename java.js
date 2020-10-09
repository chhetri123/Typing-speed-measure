const words=["He sobered, staring at the screen a moment before typing again.","He hung up and texted her quickly, typing with his thumb.","What sorts of search phrases do you think they will be typing in on Google?","He whipped out his phone and trotted down the stairs,typing a response to one of the many texts he\'d received.","Without looking up or pausing in her typing she issued directions.","She heard him typing in the background.","\"No problem,\" she answered, neither stopping her typing nor looking up.","\"You\'re not far,\" she murmured, typing in lock and alarm release codes.","Just in case, she waited a full two minutes outside his condo before typing in the code.","Chat rooms rely on the use of abbreviations and acronyms to save keystrokes (and time) when typing messages.","It was a mistake typing the note—Jeffrey Byrne\'s office said he didn\'t type."];


const msg=document.getElementById('msg');
const typeWords=document.getElementById('myWord');
const btn=document.getElementById('btn');
let startTime,endTime;

const playGames=()=>{
  let num=Math.floor(Math.random()*words.length);
    //console.log(words[num]);
    msg.innerHTML=words[num];
    let date=new Date();
    startTime=date.getTime();
    //console.log(startTime);
    btn.innerHTML="Done";
}
const WordCounter=(str)=>{
    
    let res=str.split(" ").length;
    console.log(res);
    return res;
    
}
const compareWords=(ms,str)=>{
 let word=ms.split(" ");
    let word1=str.split(" ");
    //console.log(word1);
    let cnt=0;
    word.forEach((item,index)=>{
        if(item===word1[index]){
            cnt++;
        }
    })
    let errorWord=(word.length-cnt);
    if(errorWord>=6|| word1.length<=4){
        return 1;
    }else if(errorWord===0){
            return (cnt+" correct out of "+word.length+"words With no errors.");
        
    }else{
           return ( cnt+" correct out of "+word.length+"words.Total number of error words are "+errorWord+".");
            }
}


const selection=(el)=>{
    if(el>=80){
        return ("You are professonal in typing. ");
    }else if(el>=30 && el<=79){
        return(" You are Good in typing. ");
    }else{
        return(" You are average in typing.");
    }
}

const endPlay=() =>{
    let date=new Date();
    endTime=date.getTime();
    let Total=((endTime-startTime)/1000);
    console.log(Total);
    let totalString=typeWords.value;
    //console.log(totalString);
    let wordCount=WordCounter(totalString); 
    let speed= Math.round((wordCount/Total)*60);
    let display=compareWords(msg.innerText,totalString);
    if (display===1){
       msg.innerHTML="You have to type at least 4 words and correctly .Try again"
        
    }else{
 let test=selection(speed);
 msg.innerHTML="You typed total "+wordCount+" Words at "+speed+" words/min."+ display+test;

    }
}
const  start=function(){
    if(this.innerText==='Start'){
        typeWords.disable=false;
         typeWords.value="";
        playGames();
    } else if(this.innerText=='Done'){
        typeWords.disable=true;
       
        btn.innerHTML="Start";
        endPlay();
    }
}

btn.addEventListener('click',start);
btn.addEventListener('keypress',(event)=>{
    if(event.keyCode===13){
        start();
    }
});

























