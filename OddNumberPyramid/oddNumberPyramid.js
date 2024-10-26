var x= prompt("Enter a number of rows: ");
var output="";

//specfies nb of columns
function count(x){
    for(let i=1; i<=x; i++){
        if(i%2!==0){
            output+=i+" "
        }
    }
    console.log(output);
    output="";
}

//specifies number of rows
function drawPyramid(x){
    for(let i=1; i<=2*x-1; i=i+2){
        count(i);
    }
    console.log("");
}

drawPyramid(x);