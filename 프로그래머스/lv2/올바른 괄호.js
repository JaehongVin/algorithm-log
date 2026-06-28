/** @category 스택 */
function solution(s){
  const stack = [];
  const open = '(';
  const close = ')';
  
  for (const scope of s) {
      if (scope === open) {
          stack.push(scope);
          continue;
      }
      
      if (stack.length < 1) return false;
      
      stack.pop();
  }
  
  
  return stack.length < 1;
}