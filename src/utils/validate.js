export const chaeckValidData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])[a-zA-Z\d\S]{8,}$/.test(password);

  if (!isEmailValid) return "Please enter a valid email address";
  if (!isPasswordValid) return "Password must have atleast 8 characters";

  return null;
};
