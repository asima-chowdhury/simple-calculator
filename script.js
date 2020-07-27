
function getHistory() {
    return document.getElementById("history-value").innerText;
}
alert(getHistory());
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
printHistory("99");
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}