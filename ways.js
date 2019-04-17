const n = 3;
const m = 4;

function ways(n, m) {
  if(typeof n !== "number" || typeof m !== "number") return "Wrong type!";
  if(n === 1 || m === 1) return 1;
  
  const r = n + m - 2;
  const k = n - 1;
  return c(r, k);
}

function factorial(n) {
  let res = 1;
  for(let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

function c(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

console.log(ways(n, m));
