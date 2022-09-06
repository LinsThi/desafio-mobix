function generateLineComplete(quantityChar) {
  var boardAmpu = [];
  for (var column = 0; column <= quantityChar; column++) boardAmpu.push("#");
  return boardAmpu.toString().split(",").join("");
}

function generateLine(quantityChar) {
  var lineAmpu = [];
  for (var column = 0; column <= quantityChar; column++) {
    (column === 0) | (column === quantityChar)
      ? lineAmpu.push("#")
      : lineAmpu.push(" ");
  }
  return lineAmpu;
}

function Ampulheta(quantityLine) {
  const board = generateLineComplete(quantityLine);

  console.log(board);

  for (var currentLine = 1; currentLine < quantityLine; currentLine++) {
    var line = generateLine(quantityLine);

    if (currentLine < 10) {
      for (
        var colum = currentLine;
        colum <= quantityLine - currentLine;
        colum++
      )
        line[colum] = "#";
    } else {
      line[currentLine] = "#";
      line[quantityLine - currentLine] = "#";
    }

    console.log(line.toString().split(",").join(""));
  }

  console.log(board);
}
Ampulheta(20);

// var input = prompt('Qual tamanho da ampulheta?');
// Ampulheta(input);
