function adicionar(){
    
    var nome = document.querySelector('input.nomeValor')
    var hora = document.querySelector('input.horaValor')

    var addNome = document.querySelector('tr.nome')
    var addHora = document.querySelector('tr.hora')

    addNome.innerHTML = `<td>${nome.value}</td>`
    addHora.innerHTML = `<td>${hora.value}</td>`
}