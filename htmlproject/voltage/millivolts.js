function convert()
{
var val1 = parseInt(document.getElementById("volts").value);
var ansD = document.getElementById("millivolts");
ansD.value = val1*1000;
}
function clearAll(){
    document.getElementById("millivolts").value = "";
    document.getElementById("volts").value = "";
}