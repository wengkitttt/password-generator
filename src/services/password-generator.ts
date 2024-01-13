import { GenerateAllowedCharactersModel } from "../models/password-generate.model";

export function generateAllowedCharacters(
  options: GenerateAllowedCharactersModel
): string {
  const { checkbox } = options;
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-=_+[]{}|;:,.<>?";
  const ambiguousCharacters = "l1O0";

  let allowedCharacters = "";
  if (checkbox.includes("uppercase")) {
    allowedCharacters += uppercaseLetters;
  }
  if (checkbox.includes("lowercase")) {
    allowedCharacters += lowercaseLetters;
  }
  if (checkbox.includes("numbers")) {
    allowedCharacters += numbers;
  }
  if (checkbox.includes("symbols")) {
    allowedCharacters += specialCharacters;
  }

  return allowedCharacters;
}

export function generatePassword(
  allowedCharacters: string,
  length: number
): string {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters.charAt(randomIndex);
  }
  return password;
}
