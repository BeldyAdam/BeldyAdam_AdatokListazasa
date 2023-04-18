export function kereses(lista,kulcs,keresesArg){

  const SZURTLISTA = lista.filter(function(a){
      return a[kulcs].includes(keresesArg);
  });
  return SZURTLISTA;
}

export function keresesKorSzerint(lista, kulcs, keresesArg) {
  let szurtLista = lista.filter(function (item) {
    return eval(item.kor + keresesArg);
  });
  return szurtLista;
}