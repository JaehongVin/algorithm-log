function solution(progresses, speeds) {
  let copyProgresses = [...progresses];
  let copySpeeds = [...speeds];
  let startProgressesIndex = 0;
  const result = []; 
  
  for (let i = 1; i <= 100; i++) {
      copyProgresses = copyProgresses.map((progress, index)=> progress + copySpeeds[index]);
      
      let count = 0;
      for (let i = startProgressesIndex; i < copyProgresses.length; i++) {
          const progress = copyProgresses[i];
          if (progress < 100) break;
          
          count++;
      }
      
      if (count < 1) continue;
      
      result.push(count);
      startProgressesIndex += count;

      if (copyProgresses.length === 0) break;
  }
  
  return result;
}