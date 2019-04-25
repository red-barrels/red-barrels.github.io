

var counter = 0;

function darkLightMode(){
    // Transitions
    document.getElementsByClassName("card darkLight")[0].style.transition = "2s";
    document.body.style.transition = "2s";
    document.getElementsByTagName("nav")[0].style.transition = "2s";
    document.getElementById("about").style.transition = "2s";

    // Dark mode
	if (counter === 0){
        
        // Change all ul in nav
        var navItems = document.querySelectorAll("nav ul li a");
        var i;
        for (i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "white";
        }

        // Change all cards
        var cards = document.getElementsByClassName("darkLight");
        var o;
        for (o = 0; o < cards.length; o++) {
            cards[o].style.color = "white";
            cards[o].style.backgroundColor = "#363840";
        }

        // Change buttons
        var buttons = document.getElementsByTagName("button");
        var p;
        for (p = 0; p < buttons.length; p++) {
            buttons[p].style.color = "white";
            buttons[p].style.backgroundColor = "#363840";
            buttons[p].style.borderColor = "white";
        }



        document.querySelector("nav h1 a").style.color = "white";
        document.getElementById("about").style.backgroundColor = "#363840";
        document.getElementById("about").style.color = "white";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "#24262b";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#363840";
        document.body.style.backgroundColor = "#24262b";

        // Change text inside button to 'Light mode'.
        document.getElementById("darkMode").innerHTML = "Light mode";

        counter +=1;
        
    // Light mode
	} else {
        counter = 0;

        var navItems = document.querySelectorAll("nav ul li a");
        var i;
        for (i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "#363840";
        }

         // Change all cards
         var cards = document.getElementsByClassName("darkLight");
         var o;
         for (o = 0; o < cards.length; o++) {
             // cards[i].style.color = "white";
             cards[o].style.color = "#363840";
             cards[o].style.backgroundColor = "white";
         }

            // Change buttons
        var buttons = document.getElementsByTagName("button");
        var p;
        for (p = 0; p < buttons.length; p++) {
            buttons[p].style.color = "#363840";
            buttons[p].style.backgroundColor = "white";
            buttons[p].style.borderColor = "#363840";
        }

        document.querySelector("nav h1 a").style.color = "#363840";
        document.getElementById("about").style.backgroundColor = "white";
        document.getElementById("about").style.color = "#363840";
        document.getElementsByClassName("card darkLight")[0].style.backgroundColor = "white";
        document.getElementsByClassName("card darkLight")[0].style.color = "#363840";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "white";


        document.body.style.backgroundColor = "whitesmoke";

        // Change text inside button to 'Dark mode'.
        document.getElementById("darkMode").innerHTML = "Dark mode";
        
	}
}

document.getElementById("darkMode").addEventListener("click", darkLightMode);