function validation() {
    var name = document.getElementById("name").value; 
    var lastname = document.getElementById("lastname").value; 
    var tel = document.getElementById("tel").value; 
    var email = document.getElementById("email").value; 
    var message = document.getElementById("message").value; 
    var error_message = document.getElementById("error_message"); 
    var text; 

    error_message.style.padding = "10px";

    if (name.length <5) {
        text = "Ditt namn får ej vara mindre än 5 tecken!"
        error_message.innerHTML = text;
        return false; 
    }

    if (lastname.length <5) {
        text = "Ditt efternamn får ej vara mindre än 5 tecken!"
        error_message.innerHTML = text;
        return false; 
    }
    if (isNaN(tel) || !(tel.length >= 10 && tel.length <=13)) {
        text = "Ange ett svenskt nummer!(+46, 0046, 07x)";
        error_message.innerHTML = text; 
        return false; 
    }
    

   
    if (tel.indexOf("+46") == -1 && tel.indexOf("0046") ==-1 && tel.indexOf("07") == -1) {
        text= "nummret måste vara svenskt nummer!";
        error_message.innerHTML = text; 
        return false; 
    }
    
   
    
    if(email.indexOf("@") == -1 || email.length <6) {
        text = "Vänligen ange ett giltigt mejl.";
        error_message.innerHTML = text; 
        return false; 
    } 
    if (message.length <10) {
        text = "Meddelandet får ej vara mindre än 10!"; 
        error_message.innerHTML = text; 
        return false; 
    }
    if (message.length >20){
        text = "Meddelandet får ej vara mer än 20"
        error_message.innerHTML = text; 
        return false;
    }
    return false; 
}


//setTimeout ('window.location = "http://www.google.com";' , 10000); 

