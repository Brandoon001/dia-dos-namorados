function fuja() {
    const botaoNao = document.getElementById("nao");

    const maxX = window.innerWidth - botaoNao.offsetWidth;
    const maxY = window.innerHeight - botaoNao.offsetHeight;

    botaoNao.style.left = `${Math.random() * maxX}px`;
    botaoNao.style.top = `${Math.random() * maxY}px`;
}

function sim() {
    document.body.innerHTML = `
        <div style="
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:100vh;
            color:white;
            font-family:Arial;
        ">
            <h1>❤️ Eu te amo! ❤️</h1>
            <h2>Obrigado por aceitar meu presente!</h2>
        </div>
    `;
}

function criarCoracao() {
    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";
    coracao.classList.add("coracao");

    coracao.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 4000);
}

setInterval(criarCoracao, 300);