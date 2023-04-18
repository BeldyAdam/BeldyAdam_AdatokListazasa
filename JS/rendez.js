export function rendezes(lista, kulcs, rendez) {
  lista.sort(function (a, b) {
    let rendezErtek = 1;
    if (a[kulcs] < b[kulcs]) {
      rendezErtek = -1;
    }
    rendezErtek *= rendez;
    return rendezErtek;
  });
}
