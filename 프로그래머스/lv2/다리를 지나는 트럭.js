/** @category 큐 */
function solution(bridge_length, weight, truck_weights) {
  const trucks = truck_weights.map((weight) => ({ w: weight, process: 0 }));
  const bridgeQue = [];
  let totalWeight = 0;
  let second = 0;
  
  while(trucks.length > 0 || bridgeQue.length > 0) {
      if (bridgeQue.length > 0 && bridgeQue[0].process === bridge_length) {
          const deleteTruck = bridgeQue.shift();
          totalWeight -= deleteTruck.w;
      }
      
      if (trucks.length > 0 && bridgeQue.length < bridge_length && totalWeight + trucks[0].w <= weight) {
          const addTruck = trucks.shift();
          bridgeQue.push(addTruck);
          totalWeight += addTruck.w;
      }
      
      for (let i = 0; i < bridgeQue.length; i++) {
          bridgeQue[i].process++;
      }
      
      second++;
  }
  
  return second;
}