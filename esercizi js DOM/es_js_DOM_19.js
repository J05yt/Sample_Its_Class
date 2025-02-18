function TextChange() {
    let element = document.getElementById("T1");

    if (!element) {
        console.error("Elemento con ID 'T1' non trovato!");
        return;
    }

    setTimeout(() => {
        element.textContent = "My second Text Sample!";
        console.log("Testo cambiato: My second Text Sample!");

        setTimeout(() => {
            element.textContent = "My third Text Sample!";
            console.log("Testo cambiato: My third Text Sample!");
        }, 3000); // Dopo altri 3 secondi
    }, 3000); // Dopo 3 secondi
}
