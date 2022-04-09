
function calculate()
{
var first = parseInt(document.getElementById("firstnumber").value);
var second = parseInt(document.getElementById("secondnumber").value);
var ansD = document.getElementById("result");
ansD.value = first+second;
}
function clearscreen(){
    document.getElementById("result").value = "";
    document.getElementById("firstnumber").value = "";
    document.getElementById("secondnumber").value = "";
}
