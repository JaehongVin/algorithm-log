/** @category 정렬 */
function solution(numbers) {
  const result = numbers.sort((prev, next)=> Number(String(next)+String(prev)) - Number(String(prev)+String(next)) ).join("");

  return result[0] === '0' ? '0' : result;
}