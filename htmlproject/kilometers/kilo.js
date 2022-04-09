function convert()
{
var val1 = parseInt(document.getElementById("kilometer").value);
var ansD = document.getElementById("meter");
ansD.value = val1*1000;
}
function clearAll(){
    document.getElementById("kilometer").value = "";
    document.getElementById("meter").value = "";
}