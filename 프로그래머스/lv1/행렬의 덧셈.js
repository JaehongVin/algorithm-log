/** @category 배열, 2차원 배열 */
function solution(arr1, arr2) {
  const newArray = [];
  
  for (let i = 0; i < arr1.length; i++) {
    newArray[i] = [];
      for (let j = 0; j < arr1[i].length; j++) {
          newArray[i][j] = arr1[i][j] + arr2[i][j];
      }
  }
  return newArray;
}