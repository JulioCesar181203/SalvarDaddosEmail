let email1 = document.querySelector("#email")
let email2 = document.querySelector("#email2")
let senha = document.querySelector("#senha")
let nome = document.querySelector("#Nome")
let sexo = document.querySelector("#sexo")
let botao = document.querySelector("button")
let texto = document.querySelector("h2")
let div = document.querySelector("div")




function cadastrar(){
if(email1.value == email2.value){
    localStorage.setItem("nome", nome.value)
    localStorage.setItem("email1", email1.value)
    localStorage.setItem("email2", email2.value)
    localStorage.setItem("senha", senha.value)
    localStorage.setItem("sexo", sexo.value)
    }
    
    else{
        
        alert("ERRO ENCONTRADO");
    }
    
        
        
}



botao.onclick = cadastrar;




















// div.style.display = "none"
// texto.innerHTML = `Bem vindo ${localStorage.nome}`;