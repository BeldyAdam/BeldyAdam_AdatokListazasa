import { ADATLISTA } from "./adat.js";
import { listaRendezesPublic } from "./listaRendezesek.js";


$(function () {
  init();
});




function init() {
  const ARTICLEELEM = $("article");
  ARTICLEELEM.html(listaRendezesPublic(ADATLISTA));
}


function kosar()
{
    let container = $("#publik");
    for(let i =0;i<ADATLISTA.length;i++)
    {
        let row = `<div class="card m-1" id="gallery-images" style="width: 18rem;">
        <img class="card-img-top" src="./images/teszt.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${ADATLISTA[i].nev}</h5>
        <p class="card-text">Fajta:${ADATLISTA[i].fajta}</p>
        <p class="card-text">Kor:${ADATLISTA[i].kor}</p>
        <a href="#" class="btn btn-primary megvizsgal">Megvizsgál</a>
        <button href="#" class="btn btn-primary" value="${i}" id="buy">Kosárba tesz</button>
      </div>
        </div>`;
        container.append(row);
     }
}
kosar();

$(".btn").click('#buy',function(){
    let index = $(this).val();

    let newrecord = {nev:ADATLISTA[index].nev,fajta:ADATLISTA[index].fajta,kor:ADATLISTA[index].kor,lab:ADATLISTA[index].lab};
    
kosarbaRak(newrecord,index);
});



function kosarbaRak(newrecord,id)
{
    let container = document.getElementById("kosar");
    let row = `<div class="card m-1" id="remove_${id}>
        <img class="card-img-top" src="./images/teszt.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${nev}</h4>
        <p class="card-text">Fajta:${fajta}</p>
        <p class="card-text">Kor:${kor}</p>
        <a class="btn btn-primary">Megvizsgál</a>
        <button  class="btn btn-primary" value="${id}" id="delete">✖</button>
      </div>
        </div>`
        container.innerHTML+=row;
}

$(document).on('click', '#delete', function() {
    let index = $(this).val();
    document.getElementById("remove_"+index).remove();
  });
