const api = document.getElementById('api');
showlink();

function showlink(){
    api.value = localStorage.getItem('api');
}

function saveJson(){
    valorAPI = api.value
    localStorage.setItem('api',valorAPI);
    mensagem();
}

function mensagem(){
    let mudar = document.getElementById('mensagem');

    mudar.innerHTML = `<h2>Salvo com sucesso</h2>
    <button onclick="window.close()">Fechar</button>`
}
