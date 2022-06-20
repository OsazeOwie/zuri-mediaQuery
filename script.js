function valid() {
var fname = document.getElementById("fname");

if (fname.value.length < 6) {
   fname.className = "red"
}


}