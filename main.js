
let atalhos = [];


const endPointAPI = localStorage.getItem('api');
get()
let json = localStorage.getItem('json')
exibirAtalhos();
exibirCalendarios();



async function get(){
    const res = await fetch(endPointAPI);
    atalhos = await res.json();
    localStorage.setItem("json", JSON.stringify(atalhos));
}
 

function exibirAtalhos(){
    const inserirAtalhos = document.getElementById('Atalhos');
    inserirAtalhos.innerHTML = '';
    json = JSON.parse(json)

    let cont = 0
    json.atalhos.forEach(element => {
      inserirAtalhos.innerHTML += ` <div class="cards__atalhos">
      <a href='${element.link}'>
      <img width="50px" height="50px" src="${element.img}">
      <p class="titulo">${element.titulo}</p>
        </a>
        </div>`  

        cont += 1
        
    });
}

function exibirCalendarios(){

    const calendar = document.getElementById('calendar');

    calendar.innerHTML = `<iframe id="calendario" src="${json.calendarios.calendario}" style="border: 0" width="500px" height="400px" frameborder="0" scrolling="yes"></iframe>
    <iframe id="compormissos" src="${json.calendarios.eventos}" style="border-width:0" width="300" height="500" frameborder="0" scrolling="no"></iframe>`

}
var checkbox = document.getElementById("toggle-checkbox");
let iframe = document.getElementById('calendario');

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
  });






function openJson(){
    window.open('/req.html');
}
