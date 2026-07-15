const input = document.getElementById("textarea-1");
const output = document.getElementById("textarea-2");
const clear = document.getElementById("clear-button")
const save = document.getElementById("save-button")
const alertBox = document.getElementById("save-alert")
// Output ogoh heseg
input.addEventListener("input", function () {
    output.innerHTML = marked.parse(input.value);
})
//Clear hiine
clear.addEventListener("click", function () {
    input.value = ""
    output.innerHTML = ""
})
//Save hiine 
save.addEventListener("click", function () {
    localStorage.setItem("savedText", output.innerHTML);
    alertBox.classList.add("show");
    setTimeout( function() {
        alertBox.classList.remove("show");
    }, 3000);
})
//Refresh hiigdeh uyd baij l baina
const savedText = localStorage.getItem("savedText");
if (savedText) {
    output.innerHTML = savedText;
}
//copy hiine
const copy = document.getElementById("copy-button")
copy.addEventListener("click", function () {
    navigator.clipboard.writeText(output.textContent);
})
