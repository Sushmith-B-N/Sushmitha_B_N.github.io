function convert()
{
var val1 = parseInt(document.getElementById("volts").value);
var ansD = document.getElementById("Microvolts");
ansD.value = val1*1000000;
}
function clearAll(){
    document.getElementById("Microvolts").value = "";
    document.getElementById("volts").value = "";
}