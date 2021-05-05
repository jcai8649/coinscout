export function numberWithCommas(x) {
  if (x >= 1000) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return x;
}
