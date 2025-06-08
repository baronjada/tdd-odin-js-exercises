function palindromes(string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  let cleanedString = "";

  // Step 1: Build cleanedString by keeping only letters and numbers
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (alphanumerical.includes(char)) {
      cleanedString += char;
    }
  }

  // Step 2: Manually build the reversed version of cleanedString
  let reversedString = "";
  for (let i = cleanedString.length - 1; i >= 0; i--) {
    reversedString += cleanedString[i];
  }

  // Step 3: Compare the cleaned string to the reversed one
  return cleanedString === reversedString;
}

console.log("palindromes function output:", palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
