console.log("Hello To JS PayRoll Closures");
console.log("");


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







// --- Code to control: Button, Display, and Functin Execution ---

function hour(){
    console.log("Time Punch");

    if(document.getElementById('ele').checked){
        var pay1 = elena();
        document.getElementById("ele-d").innerHTML = pay1;
        console.log("Elena: ", pay1);
    }

    if(document.getElementById('mar').checked){
        var pay2 = maria();
        document.getElementById("mar-d").innerHTML = pay2;
        console.log("Maria: ", pay2);
    }

    if(document.getElementById('hec').checked){
        var pay3 = hector();
        document.getElementById("hec-d").innerHTML = pay3;
        console.log("Hector: ", pay3);
    }

    console.log(" ");
}
