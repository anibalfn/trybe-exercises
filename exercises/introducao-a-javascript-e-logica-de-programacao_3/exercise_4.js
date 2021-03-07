let size = 5;
let symbol = '*';
let inputLine = '';
let midOfMatrix = (size + 1) / 2;
let left = midOfMatrix;
let right = midOfMatrix;


for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
        if (columnIndex >= left && columnIndex <= right) {
            inputLine = inputLine + symbol;
        } else {
            inputLine = inputLine + ' ';
        }
    }
    console.log(inputLine);
    inputLine = '';
    right += 1;
    left -= 1;
}