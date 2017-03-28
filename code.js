console.log("Hello To JS PayRoll Closures");


function payCheck(bonus, pxhr){
    return function (){
        var total = bonus;
        bonus += pxhr;
        return total;
    }
}

var elena = new payCheck(15, 10);
var maria = new payCheck( 0, 10);
var hector = new payCheck(0,  8);




// --- Code to control the Button and execution of fuctions ---

function hour(){
    console.log("Time Punch");

    if(document.getElementById('ele').checked){
        elena();
        console.log("Elena In");
        var te = elena.total;
        console.log(te);
    }

    if(document.getElementById('mar').checked){
        maria();
        console.log("Maria In");
    }

    if(document.getElementById('hec').checked){
        hector();
        console.log("Hector In");
    }

    console.log(" ");
}
