function generatePassword(passwordLength) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let passwordResult = "";
  for (let i=1;i<=passwordLength;i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    passwordResult += chars[randomIndex];
  }
  return passwordResult;
}

// Define a variable and log to console
const password = generatePassword(6);
console.log(`Generated password:${password}`);
