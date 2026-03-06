export const checkValidData = (email, password) => {
  const cleanEmail = email?.trim();
  const cleanPassword = password?.trim();

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    cleanEmail,
  );

  // At least 8 chars, 1 lowercase, 1 uppercase, 1 number
  // Allows special characters too
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
    cleanPassword,
  );

  if (!isEmailValid) {
    return "Email ID is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  return null;
};
