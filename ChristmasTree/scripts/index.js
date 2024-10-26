// Christmas is around the corner! Create a JavaScript script that prompts the user for a number x. 
// The script should generate and display a Christmas tree on the website that looks like the attached picture.
// Use colors to enhance the visual appeal of the tree (red and green).
// Make the tree look cool by incorporating creative ideas.
// The tree should be built only with JavaScript.
// Your HTML body tag should be empty.
// Your CSS file can contain classes for styling.

var x=prompt("Enter a number🌲 (20 is recommended): ");
var spaces="";
var output="";

for(var i=0; i<x; i++){
    spaces=" ".repeat(x-i)
    const div=document.createElement("div");

    if(i===0){
        output=spaces+"*"
        div.classList.add("center","bigger");
        setInterval(()=>{div.classList.toggle("yellow")},500);
        div.textContent=output;
    }
    else{
        output+="*"+"|".repeat(2*i-1)+"*"; //*|||*
        div.classList.add("center","green");
        for(let j=0; j<output.length; j++){
            let pipe;
            if(output[j]==="|" && j%2!=0){
                pipe=document.createElement("p");
                pipe.textContent="|";
                setInterval(()=>{pipe.classList.toggle("red")},500);
            }
            else{
                pipe=document.createTextNode(output[j]);
            }
            div.appendChild(pipe);
        }
    }
    
    document.getElementById("body").appendChild(div);
    output=""; 
}







