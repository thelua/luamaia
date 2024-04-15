
const presentationTexts = [
  "Estagiária em Engenharia e Análise de Dados",
  "Entusiasta em Business Inteligence",
  "Graduanda em Sistemas de Informação pela Universidade de São Paulo.",
];

function changePresentationText() {
  const presentationElement = document.querySelector('.presentation-text');
  const currentText = presentationElement.innerText;
  const randomText = presentationTexts[Math.floor(Math.random() * presentationTexts.length)];
  
  if (currentText !== randomText) {
    presentationElement.classList.add('fade-out');
    setTimeout(function() {
      presentationElement.innerText = randomText;
      presentationElement.classList.remove('fade-out');
      presentationElement.classList.add('fade-in');
      setTimeout(function() {
        presentationElement.classList.remove('fade-in');
      }, 500);
    }, 500);
  }
}

setInterval(changePresentationText, 5000);

