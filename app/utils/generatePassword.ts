export const generatePassword = (
  length: number,
  includeUpperCase: boolean,
  includeLowerCase: boolean,
  includeNumbers: boolean,
  includeSpecialChars: boolean,
) => {
  let charset = '';
  let password = '';

  if (includeUpperCase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeLowerCase) {
    charset += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (includeNumbers) {
    charset += '0123456789';
  }

  if (includeSpecialChars) {
    charset += '!@#$%^&*';
  }

  if (charset === '') {
    return 'At least one character set must be included.';
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}
