let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generateDomains() {
    let domainList = document.getElementById("domainList");
    domainList.innerHTML = ""; // Limpia la lista antes de generar nuevos elementos

    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
                let domain = `${p}${a}${n}.com`;
                let listItem = document.createElement("li");
                listItem.textContent = domain;
                domainList.appendChild(listItem);
            }
        }
    }
}

document.getElementById("generateBtn").addEventListener("click", generateDomains);
