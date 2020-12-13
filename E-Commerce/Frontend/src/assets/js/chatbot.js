var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  botName = 'Tout Assistant', 
  talking = true; 
  email = ' sivaganesh1528@gmail.com'

function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused please repeat"; 

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
    const hi = ['hi','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];
  }
   else if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
   }
  else if(lastUserMessage === 'siva' || lastUserMessage == 'ganesh'|| lastUserMessage == 'i am siva'){
    const siva = ['Welcome boss !!','Good to see you boss','Ready Sir! How can i help you ?']
    botMessage = siva[Math.floor(Math.random()*(siva.length))];

  }
 else if(lastUserMessage === "products"){
   botMessage = "mobiles , laptops , mouses , laptop bags , telivisions , headphones"
}
else if (lastUserMessage === "mobiles")
   { botMessage = " Mobiles we are having in our website are : ,  Oppo F11 pro , IPhone 12 , IPhone 12 Pro , Galaxy F41 , OnePlus Nord 5G , Samsung Galaxy M21 , Samsung Galaxy F41 , ONE PLUS 8 , Galaxy Note10 Lite , Oppo A31 , Galaxy Note10 Lite , Nokia 5.3 Android , Techno Spark 6 Air , Oppo A15 , OnePlus 7T , Oppo A15 , Samsung Galaxy M51 , Redmi Note 9 Pro , Redmi 9A , Oppo A15 , APPLE IPhone 11 , New APPLE iPhone 12 mini"}
   else if (lastUserMessage === "laptops")
   { botMessage = " Laptops we are having in our website are : ,  apple mac book , Apple MacBook Pro , Apple MacBook Air , Dell Inspiron 15 , Dell Vostro , Dell XPS , Dell G387 , Pavilion x360 , Omen 15 , Spectre x360 , HP zBook , Ideapad v14 , lenovo Thickpad , lenovo Yoga sx3 , lenovo Ideapad x45 , Asus Vivobook X54 , Asus ROG Strix G15 , Asus Zenbook UX , Asus Zenbook Duo , Acer Aspire 3 , Acer ChromeBook "}
   else if (lastUserMessage === "mouses")
   { botMessage = " Mobuses we are having in our website are : ,  Wireless Optical Mouse , 3-Button USB Wired Mouse , Logitech Pebble M350 Wireless Mouse , Ergonomic Wireless Mouse , Mi Portable Wireless Mouse , Zebronics USB Gaming Mouse , Asus TUF Gaming RGB gaming mouse "}
   else if (lastUserMessage === "headphones")
   {botMessage = "  Headphones we are having in our website are : , Sony Trivia Headphones , Reconnect Wireless Headphone , boAt Rockerz 255 Sports , boAt Airdopes 441 TWS Ear-Buds , boAt Airdopes 171  , boAt Rockerz 261 , boAt Rockerz 510 , Sony WH-1000XM3 Wireless Noise Cancelling Headphones , Kanzy Beast Wireless Headphones BH40 , Master & Dynamic MW07 Plus True Wireless"}
   else if(lastUserMessage === "bye" || lastUserMessage === "ok" || lastUserMessage === 'thanks')
   {
     botMessage = "Thank you!! Have a nice day"
   }
   else if(lastUserMessage === "feedback")
   {
     botMessage= "you can directly email to" + email
   }
   else {
     botMessage = "I am confused !! Please ask me related queries"
   }

}

function newEntry() {
  
  if (document.getElementById("chatbox").value != "") {
    
    lastUserMessage = document.getElementById("chatbox").value;
   
    document.getElementById("chatbox").value = "";
  
    messages.push(lastUserMessage);
   
    chatbotResponse();
    
    messages.push("<b>" + botName + ":</b> " + botMessage);
   
    Speech(botMessage);

    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}


function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
  
    speechSynthesis.speak(utterance);
  }
}


document.onkeypress = keyPress;

function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
 
    newEntry();
  }
  if (key == 38) {
    console.log('hi')

  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}