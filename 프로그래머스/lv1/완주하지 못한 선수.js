function solution(participant, completion) {
  const participantMap = new Map();
  
  for (let i = 0; i < participant.length; i++) {
      const part = participant[i];
      const complete = completion[i];
      
      participantMap.set(part, (participantMap.get(part) ?? 0) + 1);
      //* undefined 처리는 해주고싶으면 해주면 된다.
      participantMap.set(complete, (participantMap.get(complete) ?? 0) - 1);
  }
  
  for (const part of participant) {
      if (participantMap.get(part) > 0) return part;
  }
}