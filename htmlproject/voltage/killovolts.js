function convert()
{
var val1 = parseInt(document.getElementById("volts").value);
var ansD = document.getElementById("Killovolts");
ansD.value = val1/1000;
}
function clearAll(){
    document.getElementById("Killovolts").value = "";
    document.getElementById("volts").value = "";
}