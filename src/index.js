module.exports = function reverse (n) {
    n = Math.abs(n);
  let arr = n.toString().split("");
  return arr.reverse().join("");
}
