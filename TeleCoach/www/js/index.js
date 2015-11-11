function onload(){
document.addEventListener("deviceready",onDeviceReady(), false);
}
function onDeviceReady(){
	alert("1234");
}
function leader(){
	window.location="leader.html";
}
function coworker(){
	window.location="coworker.html";
}
function loadcards(){
//    var traningskort1 = "Det här är texten för träningskort1";
    $("p").text(getValue());
}
//function readTextFile(file)
//{
//    alert("readTExtfile");
//    var rawFile = new XMLHttpRequest();
//    rawFile.open("GET", file, false);
//    rawFile.onreadystatechange = function ()
//    {
//        if(rawFile.readyState === 4)
//        {
//            if(rawFile.status === 200 || rawFile.status == 0)
//            {
//                var allText = rawFile.responseText;
//                alert(allText);
//                //loadcards(allText);
//            }
//        }
//    }
//    rawFile.send(null);
//}
function getQueryVariable(variable) {
    return window.location.search.substring(1);
}

function setValue(value){
    window.localStorage.setItem("key", value);
}
function getValue(){
    return window.localStorage.getItem("key");
}

function getBack(){
	window.history.back();
}