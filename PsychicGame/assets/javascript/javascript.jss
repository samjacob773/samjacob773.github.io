
    var confirmSushi = confirm("Do you like sushi?");
    var confirmGingerTea = confirm("Do you like ginger tea");
    var sushiType = prompt("What kind of sushi do you like?");
    
    
    // If the user likes sushi (confirmSushi === true), we run the following block of code
    if (confirmSushi) {
        alert("You like ginger tea!");
    }

    //If the user like ginger tea (confirmGingerTea === true), we run the following block of code
    else if (confirmGingerTea) {
        alert("you like ginger tea!");
    }
    // If neither of the previous condition were true, we run the following block of text.
    else {

        doucument.write("You don't like sushi or ginger tea. No nipponese cuisine for you.")
    }
