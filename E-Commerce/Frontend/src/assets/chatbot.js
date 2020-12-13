var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  botName = 'Chatbot', 
  talking = true; 

function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; 

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {

    const hi = ['hi','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];

  }

  if (lastUserMessage === 'name') {

    botMessage = 'My name is ' + botName;

  }

  if(lastUserMessage === 'shanmukh' || lastUserMessage == 'shannu'|| lastUserMessage == 'i am shanmukh'){
    const manoj = ['Welcome boss !!','Good to see you boss','Ready Sir! How can i help you ?']
    botMessage = manoj[Math.floor(Math.random()*(manoj.length))];

  }
  if(lastUserMessage === "products")
   botMessage = "mobiles , laptops , mouses , laptop bags , telivisions"
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