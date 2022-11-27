//let som = document.

function tocarSom(idAudioElement){
   document.querySelector(idAudioElement).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
   
   let tecla = listaTeclas[i];
   let instrumento = tecla.classList[1];
   let idAudio = `#som_${instrumento}`;

   tecla.onclick = function(){
      tocarSom(idAudio);
   };
}