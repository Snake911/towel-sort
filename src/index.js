
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }
  return matrix.map((row, index) => index % 2 ? row.reverse() : row).flat();
}
