/** @category 해시 */
function solution(phone_book) {
  const set = new Set(phone_book);
  
  for (const number of set) {
      for(let i = 1; i < number.length; i++) {
          const sliced = number.slice(0, i);
          if (set.has(sliced)) return false;
      }
  }
  
  return true;
}
