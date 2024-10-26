var x= prompt("Enter a number of rows: ");

function drawDiamond(x){
    for(let i=1; i<=x; i++){
    var r= 2*i-1;
    var stars= "*".repeat(r);
    var spaces= " ".repeat(x-i);
    console.log(spaces+stars);  
    }

    for(let i=2*x-3; i>=1; i-=2){
        var stars="*".repeat(i);
        var spaces=" ".repeat((2*x-1-i)/ 2);
        console.log(spaces+stars);
    }
}

drawDiamond(x);