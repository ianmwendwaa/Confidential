const envelopeElement = document.getElementById("envelope");
const triangularFlap = document.getElementById("triangular-flap");
const secondaryFlap = document.getElementById("secondary-flap");
const messageContainer = document.getElementById("message-container");
const signingOff = document.getElementById("signing-off");

const message = document.getElementById("message");
var isTyping = true;
const letterMessage = "Lo and behold my brethren! A suppeth awaits my letter. Furiated by this carriage traffic, I may be tardy...oh wait, wrong story😂😂.\n Hey Odriyaa❤️, first of all I hope hujabonda ukisoma hii letter😔.So this is just my own style of wishing you a Happy Valentines😝and even though my Valentine's gift backfired, in as much as you'd rock in that necklace🥺(too bad they tarnish/rust? quicker than they look), my rusty(pun unintended😭) coding apparently didn't. I haven't done web dev in like a year now so pardon my amateur piece😭. I did this project to show you that, in as much as you may not get something for the 14th, someone cares about you, you feel me? Anywhooo, much said so I'mma just shut up now since as you know, these days I am a well-reserved man😂😌.\nHappy Valentines Odydy <333! ";
const typingSpeed = 60;
var i = 0;
const pauseDuration = 400;
var is = true;
signingOff.style.visibility = "hidden";
setTimeout(()=>{
    signingOff.style.visibility = "visible";
},68000);
setTimeout(()=>{
    typeWrite(message,letterMessage,typingSpeed,pauseDuration);
},5000);


async function typeWrite(message,content,typingSpeed,pauseDuration) {
    message.innerHTML = "";
    for(const char of content){
        message.innerHTML += char;
        i++;
        let delay = typingSpeed;

        if(char==="."||char===","||char=="!"||char==="?"){
            delay+=pauseDuration;
        }
        await new Promise(resolve=>setTimeout(resolve,delay));
    }
}
function toggleRumble(envelopeElement){
    if(envelopeElement){
        envelopeElement.classList.toggle('rumbling');
    }
}
function toggleView(){
    if(envelopeElement){
        envelopeElement.addEventListener("click",function(){
            triangularFlap.style.visibility = "hidden";
            triangularFlap.style.transform = "translate(0%,-100%) rotate(180deg)";
            secondaryFlap.style.animation = 'fadeOut 1s forwards';
            messageContainer.style.visibility = "visible";
        })
    }
}