// pega todos os botões da lixeira
const botoesRemover = document.querySelectorAll(".remove")

// pega o alerta
const alerta = document.querySelector(".alert")

// botão de fechar mensagem
const fecharMensagem = document.querySelector(".mensagem")


botoesRemover.forEach(function(botao) {
  botao.addEventListener("click", function(event) {

    event.preventDefault()

    // pega o item da lista
    const item = botao.closest(".card")

    // pega o checkbox dentro do item
    const checkbox = item.querySelector('input[type="checkbox"]')

    // desmarca o checkbox
    checkbox.checked = false

    // mostra a mensagem
    alerta.style.display = "flex"

    // esconde depois de 3 segundos
    setTimeout(function() {
      alerta.style.display = "none"
    }, 3000)

  })
})

// fechar mensagem manualmente
fecharMensagem.addEventListener("click", function() {
  alerta.style.display = "none"
})



