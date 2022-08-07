
function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}


/*var i = 0;
var images = [];
var slideTime = 8000; // 3 seconds

images[0] = 'img/img1.jpg';
images[1] = 'img/img2.jpg';
images[2] = 'img/img3.jpg';
images[3] = 'img/img4.jpg';

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;*/