import { ADATLISTA } from "./adat.js";
import { listaRendezes } from "./listaRendezesek.js";
import { rendezes } from "./rendez.js";
import { kereses, keresesKorSzerint } from "./keres.js";


let nevrendezes = "nev";
let rendez2 = -1;

$(function () {
  init();
  felvetel();
 
  const TABLAZAT = $("#admin");
  const NEVBEVITEL = $("#nev");
  const KORBEVITEL = $("#kor");
  const FAJBEVITEL = $("#fajta");

  let tart = listaRendezes(ADATLISTA);
  TABLAZAT.append(tart);

  NEVBEVITEL.on("input", function () {
    let nevErtek = NEVBEVITEL.val();
    let lista = kereses(ADATLISTA, "nev", nevErtek);
    let tart = listaRendezes(lista);
    $("table").replaceWith(tart);
  });

  KORBEVITEL.on("change", function () {
    let kor = KORBEVITEL.val();
    let lista = keresesKorSzerint(ADATLISTA, "kor", kor);
    let tart = listaRendezes(lista);
    $("table").replaceWith(tart);
  });

  FAJBEVITEL.on("input", function () {
    let fajta = FAJBEVITEL.val();
    let lista = kereses(ADATLISTA, "fajta", fajta);
    let tart = listaRendezes(lista);
    $("table").replaceWith(tart);
  });
});

function felvetel() { 
  const NEV = $("#nev");
  const KOR = $("#kor");
  const FAJTA = $("#fajta");
  const FELVITEL = $("#felvitel");
  FELVITEL.on("click", function (event) {
    event.preventDefault()
    const UJ = {
      nev: NEV.val(),
      kor: KOR.val(),
      fajta: FAJTA.val(),
    };
    ADATLISTA.push(UJ);
    init()
    
  });
}



function init() {
  const ARTICLE = $("article");
  ARTICLE.html(listaRendezes(ADATLISTA));
  const TABLAZATHEAD = $("th");
  TABLAZATHEAD.on("click", function () {
    nevrendezes = event.target.id;
    rendezes(ADATLISTA, nevrendezes, rendez2);
    rendez2 *= -1;
    init();
  });
  const TORLES = $(".torlesB");
  TORLES.on("click", function () {
    let toroltElem = event.target.id;
    ADATLISTA.splice(toroltElem, 1);
    init();
  });
}


