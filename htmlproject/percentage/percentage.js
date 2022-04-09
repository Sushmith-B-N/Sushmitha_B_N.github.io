
function calculate()
{
var first = parseInt(document.getElementById("Initialvalue").value);
var second = parseInt(document.getElementById("Finalvalue").value);
var ansD = document.getElementById("Percentageincrease");
ansD.value = 100*(second-first)/(first)
}
function clearscreen(){
    document.getElementById("Percentageincrease").value = "";
    document.getElementById("Finalvalue").value = "";
    document.getElementById("Initialvalue").value = "";
    document.getElementById("Difference").value = "";
}
function difference()
{
var x = parseInt(document.getElementById("Initialvalue").value);
var y = parseInt(document.getElementById("Finalvalue").value);
var ansY = document.getElementById("Difference");
ansY.value = y-x;
}
