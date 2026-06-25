function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (const [a, b] of sizes) {
        maxWidth = Math.max(maxWidth, Math.max(a, b));
        maxHeight = Math.max(maxHeight, Math.min(a, b));
    }
    return maxWidth * maxHeight;
}