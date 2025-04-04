function generateCard() {
    const palos = ["♥", "♦", "♣", "♠"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    let item = palos[Math.floor(Math.random() * palos.length)];
    let value = values[Math.floor(Math.random() * values.length)];
    
    document.getElementById("top-item").innerText = item;
    document.getElementById("bottom-item").innerText = item;
    document.getElementById("value").innerText = value;
    
    if (item === "♥" || item === "♦") {
        document.getElementById("top-item").classList.add("red");
        document.getElementById("bottom-item").classList.add("red");
    } else {
        document.getElementById("top-item").classList.remove("red");
        document.getElementById("bottom-item").classList.remove("red");
    }
}

window.onload = generateCard;
