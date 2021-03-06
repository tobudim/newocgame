function checkWidthAndHeight(width, height) {
  const allowedValues = ['5', '10', '15', '20'];
  const givenDimensionsAreOK = allowedValues.includes(width) && allowedValues.includes(height);
  if (givenDimensionsAreOK) return true;
  return false;
}

module.exports = { checkWidthAndHeight };
