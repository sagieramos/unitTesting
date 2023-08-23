const reverseString = (string) => {
  if (string === null || string.replace(/\s+/g, '').length === 0) {
    return '';
  }
  return [...string].reverse().join('');
}

export default reverseString;