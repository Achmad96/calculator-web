export default function NumberFormat(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
