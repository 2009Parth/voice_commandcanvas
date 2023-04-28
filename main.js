screen_height = 0;
screen_width = 0;
draw_apple = "";
speak_data = "";
to_number = "";
x = 0;
y = 0;
apple = "";







var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();







function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 





recognition.onresult = function(event)
{

   console.log(event); 
   
   content = event.results[0][0].transcript;
   
   document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
   
   to_number = Number(content);
   if(Number.isInteger(to_number))
   {
        draw_apple = "set";
   }
}



function preload()
{
    apple = loadeImage(('https://i.postimg.cc/CKrMWBGy/apple.png'));
}



function setup()
{
   screen_width = window.innerWidth;
   screen_height = window.innerHeight;
   canvas = createCanvas(screen_width, screen_height-150);
   canvas.position(0, 150);
}










function draw()
{
   if(draw_apple == "set")
   {
    i = 1;
    if(i >= to_number)
    {
        i+1;
    }
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    document.getElementById("status").innerHTML = "Started drawing Apple";
    speak();
   }
   for(var i = 1; i <= to_number; i++)
   {
    image(apple, x, y, 50, 50);
   }
}









function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}