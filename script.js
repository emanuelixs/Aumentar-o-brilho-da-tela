let brilho = 100;

document.getElementById("botao-certo").addEventListener("click", () => {
  const conteudo = document.getElementById("conteudo");

  if (brilho < 200) {
    brilho += 20;
    conteudo.style.filter = `brightness(${brilho / 100})`;
  }
});

function tocarSom() {
  const audio = new Audio("./Irra Efeito Sonoro.mp3");
  audio.play();
}
