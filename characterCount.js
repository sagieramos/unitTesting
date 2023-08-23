const checkCharactersCount = (string) => {
  const num = string.replace(/\s+/g, '').length

  if (num >= 1 && num <= 10) {
    return num;
  }
  else {
    throw new Error('String length should be between 1 and 10 characters!');
  }
}

export default checkCharactersCount;