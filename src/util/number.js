function isNumber(num) {
  return typeof num === "number";
}

function float(num, precision) {
  const accuracy = isNumber(precision) ? precision : 2;
  if (!isNumber(num) || isNaN(num)) return "-";
  return num.toFixed(accuracy);
}

function percentage(num, precision) {
  const accuracy = isNumber(precision) ? precision : 2;
  if (!isNumber(num) || isNaN(num)) return "-";
  return `${(num * 100).toFixed(accuracy)}%`;
}

export { isNumber, float, percentage };
