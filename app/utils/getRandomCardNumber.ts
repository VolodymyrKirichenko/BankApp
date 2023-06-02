export const getRandomCardNumber = () => {
  const firstDigit = Math.floor(Math.random() * 10);
  let otherDigits = "";

  for (let i = 0; i < 15; i++) {
    otherDigits += Math.floor(Math.random() * 10);
  }

  let creditCardNumber = firstDigit + otherDigits;
  return creditCardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
}
