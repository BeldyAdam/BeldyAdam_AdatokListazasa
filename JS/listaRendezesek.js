export function listaRendezes(lista) {
  let txt = "";

  txt += `<table class="table">`;
  txt += `<tr class="table-dark"><th id ="nev">Név ⇌</th>
      <th id ="kor">Kor ⇌</th>
      <th id ="fajta">Fajta ⇌</th>
      <th>Képek</th>
      <th>Törlés</th></tr>`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    for (const key in lista[index]) {
      txt += `<td>${lista[index][key]} </td>`;
}

    txt += `<td><button id="t${index}" class="torlesB" type="button">✖</button> </td>`;
    `</tr>`;
  }
  txt += `</table>`;

  return txt;
}

export function listaRendezesPublic(lista) {
  let txt = "";
  txt += `<div class="container row ">`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card border col-sm-4" > `;
    txt += `<div class="card-body">`;
    txt += `<h2 class="card-title">${lista[index].nev}</h4>`;
    txt += `<p class="card-text">${lista[index].kor} éves</p>`;
    txt += `<p class="card-text">${lista[index].fajta}</p>`;
    txt += `<p class="card-text"><img src="${lista[index].kep}" alt=" #"></p>`;
    txt += `<input type="button" id="${index}" class=" btn btn-sucess	nez" value="Kosárba rak">`;
    txt += `</div>
        </div>`;
  }
  txt += `</div>`;
  return txt;
}
