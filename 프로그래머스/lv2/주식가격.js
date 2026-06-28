/** @category 스택, 모노토닉 스택 */
function solution(prices) {
  const result = [];
  const stack = [];    
  
  for (let i = 0; i < prices.length; i++) {
      while(stack.length > 0 && prices[stack[stack.length-1]] > prices[i]) {
          const top = stack.pop();
          result[top] = i - top;
      }
      
      stack.push(i);
  }
  
  for (let i = 0; i < stack.length; i++) {
      result[stack[i]] = prices.length - 1 - stack[i];
  }

  return result;
}