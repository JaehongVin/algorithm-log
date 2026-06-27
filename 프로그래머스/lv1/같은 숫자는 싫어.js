function solution(arr)
{
    const filteredArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (filteredArray.at(-1) === arr[i]) continue;
        
        filteredArray.push(arr[i]);
    }
    
    return filteredArray;
}