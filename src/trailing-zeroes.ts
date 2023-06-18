export function trailingZeroes(n: number): number {
  return (
    Math.floor(n / 3125) +
    Math.floor(n / 625) +
    Math.floor(n / 125) +
    Math.floor(n / 25) +
    Math.floor(n / 5)
  );
}
console.log(trailingZeroes(100));
