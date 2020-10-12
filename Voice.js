const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can speak now!!!');
   
    
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
   
    
    window.speechSynthesis.speak(speech);

}