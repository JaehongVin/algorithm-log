function solution(priorities, location) {
  const uniquePriorities = priorities.map((value, index) => ({ p: value, i: index }));
  const processedList = [];
  const totalCount = priorities.length;
  
  while(processedList.length < totalCount) {
      const outed = uniquePriorities.shift();
      
      if (uniquePriorities.some(({ p })=> p > outed.p)) {
          uniquePriorities.push(outed);
      } else {
          processedList.push(outed);
      }   
  }
  
  for (let i = 0; i < processedList.length; i++) {
      if (processedList[i].i === location) return i + 1;
  }
}