
const api = "https://api.adviceslip.com/advice"; 
async function getQuote() {
    let request = await fetch(api);
    let data = await request.json();
    document.getElementById("quoteID").textContent = data.slip.id;
    document.getElementById("quote").textContent = data.slip.advice;
}
window.onload = getQuote();
function pageReload() {
    window.location.reload();
}
document.getElementById("changeQuote").addEventListener("click", pageReload);
