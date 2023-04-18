import { ADATLISTA } from "./adat.js";
import { listaRendezesPublic } from "./listaRendezesek.js";


$(function () {
  init();
});




function init() {
  const ARTICLEELEM = $("article");
  ARTICLEELEM.html(listaRendezesPublic(ADATLISTA));
}
