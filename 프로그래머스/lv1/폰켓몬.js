/** @category 해시, Set */
function solution(nums) {
  const mon = new Set();
  
  for (const num of nums) {
      mon.add(num);
      
      if (mon.size >= nums.length / 2) return mon.size;
  }
  
  return mon.size;
}

//* 보편적 풀이
// function solution(nums) {
//   const types = new Set(nums).size;
//   return Math.min(types, nums.length / 2);
// }