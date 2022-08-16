const textInput = document.querySelector("#textInput")

function encriptar() {
  var textModif = textInput.value
  var textReplace = textModif.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  var newText = textReplace.toLowerCase()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
   
  if (textModif === "") {
    console.log("Ingrese el texto aqui")
    let notify = document.getElementById("err");
    notify.innerHTML = "Ingrese el texto aqui";
    notify.style.display = "block";
    setTimeout(function() {
    notify.style.display = "none";
  }, 3000);
  } else {
    document.querySelector("#textDesencripted").innerHTML = newText;
    console.log(newText);
  }
}

function desencriptar() {
  var textModif = textInput.value
  var newText = textModif.toLowerCase()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
   
  if (textModif === "") {
    console.log("Ingrese el texto aqui")
  } else {
    document.querySelector("#textDesencripted").innerHTML = newText;
    console.log(newText);
  }
}

function copy(){
  var textArea = document.getElementById("textDesencripted");
  var copyText = textArea.innerHTML;
  navigator.clipboard.writeText(copyText);

  let notify = document.getElementById("popCopy");
  notify.innerHTML = "Copiado!";
  notify.style.display = "block";
  setTimeout(function() {
    notify.style.display = "none";
  }, 3000);
}
