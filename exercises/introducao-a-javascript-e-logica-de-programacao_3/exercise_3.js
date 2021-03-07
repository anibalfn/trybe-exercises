let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size;

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
        if (columnIndex < inputPosition) {
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}