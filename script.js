const form = document.getElementById("form");

const resultado = document.createElement("p");
form.appendChild(resultado);

const CalcularMP = (apl, ps, tt) => {
    return ((2 * apl) + (5 * ps) + (3 * tt))/ 10 
}

const MP = (mp) => {
    if (mp > 10) return "Inválida";
    if (mp > 9) return "A"
    if (mp > 8) return "B"
    if (mp > 7) return "C"
    if (mp > 6) return "D"
    if (mp >= 0) return "E"
    return "Inválida";
}
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const apl = Number(document.getElementById("apl").value);
    const ps = Number(document.getElementById("ps").value);
    const tt = Number(document.getElementById("tt").value);

    const media = CalcularMP(apl, ps, tt);

    resultado.innerHTML = `Sua média é ${media.toFixed(2)} e sua classificação é ${MP(media)}`;
});
