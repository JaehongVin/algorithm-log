/** @category 배열, 문자열 */
function solution(n) {
  return String(n).split('').reverse().map(Number);
}