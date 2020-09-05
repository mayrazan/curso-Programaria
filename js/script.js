
document.getElementById("botaoEnviar").addEventListener("click", enviarDados);

function enviarDados(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Dados cadastrados. Você receberá as novidades por e-mail!");
  }else{
    alert("Todos os campos devem ser preenchidos.");
  }
}


