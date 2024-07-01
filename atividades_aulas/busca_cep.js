let cep = document.getElementById("cep");

cep.addEventListener('blur', function(){

    cep = cep.value;

    if(cep.length === 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('uf').value = data.uf;
        })
    } else {
        alert("CEP inválido");
    }
});