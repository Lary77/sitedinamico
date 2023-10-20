function tocaSpm(idElementoAudio) {
    document.querySelector(idelementoAudio).play();
}

const listaDeTeclas= document.querySelectorAll(tecla);

//para
for(let contador= 0; conytador<listaDeTeclas. length; contador++) {

const tecla= listaDeTeclas[contador];
const instrumento = tecla.classilist[1];
const idAudio= #som_$ {instrumento} ;//template tring

tecla.onclick= function(){
tocaSom(idAudio);
}

}