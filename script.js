function app() {
    function printMyName(e) {
        var myName = document.getElementById("name").value;
        document.getElementById("intro").innerHTML = "Hello " + myName;
    }
    document.getElementById("buttonName").onclick = printMyName;
}
window.onload = app;