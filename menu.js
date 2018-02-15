var menu = document.getElementById("menu");
var bgDiv = document.getElementById("bg");
var zoom = document.getElementById("zoom");
var appDiv = document.getElementById("app1");

document.getElementById("open").addEventListener("click", function () {
    menu.style.left = "0px";
});

document.getElementById("close").addEventListener("click", function () {
    menu.style.left = "-110px";
});

document.getElementById("makeBG").addEventListener("click", function () {
    bgDiv.style.backgroundImage = zoom.style.backgroundImage;
});

document.getElementById("reset").addEventListener("click", function () {
    bgDiv.style.backgroundImage = "none";
});

document.getElementById("show").addEventListener("click", function () {
    appDiv.style.display = "block";
});

document.getElementById("hide").addEventListener("click", function () {
    appDiv.style.display = "none";
});

document.getElementById("inpNum").addEventListener("change", function () {
    var myNum = parseInt(inpNum.value);

    if (myNum > 12 || myNum < 1) {
        alert("Doesn't exist!");
    } else {
        document.getElementById("bg").style.backgroundImage = "url(imgs/i" + myNum + ".jpg)";
    }
});