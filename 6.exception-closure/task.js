'use strict';

function parseCount(count) {
  const parsedCount = parseFloat(count);
  if(isNaN(parseCount)) {
    throw new Error("Невалидное значение");
  } 
  return parsedCount;
}

console.log(parseCount(123));