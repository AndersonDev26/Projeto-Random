const inputMin = document.getElementById("min");
const inputMax = document.getElementById("max");
const resultNumber = document.getElementById("result-number");
const resultLabel = document.getElementById("result-label");
const errorMsg = document.getElementById("error");
 
function generatenumber() {
    errorMsg.textContent = "";
 
    if (inputMin.value === "" || inputMax.value === "") {
        errorMsg.textContent = "Preencha os dois campos para sortear.";
        return;
    }
 
    const min = Math.ceil(Number(inputMin.value));
    const max = Math.floor(Number(inputMax.value));
 
    if (min >= max) {
        errorMsg.textContent = "O primeiro número precisa ser menor que o segundo.";
        return;
    }
 
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
 
    resultLabel.textContent = `Número sorteado entre ${min} e ${max}`;
    resultNumber.textContent = sorteado;
 
    // reinicia a animação a cada sorteio
    resultNumber.classList.remove("pop");
    void resultNumber.offsetWidth;
    resultNumber.classList.add("pop");
}
 
// Sortear também com a tecla Enter
[inputMin, inputMax].forEach((input) => {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") generatenumber();
    });
});
 