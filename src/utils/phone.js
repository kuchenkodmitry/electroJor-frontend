export function phoneDigits(phone) {
  return phone.replace(/\D/g, "");
}
export function formatPhone(phone) {
  const digits = phoneDigits(phone);
  if (digits.length !== 11) return phone;
  return `+${digits[0]}-(${digits.slice(1,4)})-${digits.slice(4,7)}-${digits.slice(7,9)}-${digits.slice(9)}`;
}

export function maskPhoneInput(value) {
  const digits = phoneDigits(value).slice(0, 11);
  let result = "+7";
  if (digits.length > 1) result += `-(${digits.slice(1, 4)}`;
  if (digits.length >= 4) result += ")-" + digits.slice(4, 7);
  if (digits.length >= 7) result += "-" + digits.slice(7, 9);
  if (digits.length >= 9) result += "-" + digits.slice(9, 11);
  return result;
}
