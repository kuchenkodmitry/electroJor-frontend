export function phoneDigits(phone) {
  return phone.replace(/\D/g, "");
}
export function formatPhone(phone) {
  const digits = phoneDigits(phone);
  if (digits.length !== 11) return phone;
  return `+${digits[0]}-${digits.slice(1,4)}-${digits.slice(4,7)}-${digits.slice(7,9)}-${digits.slice(9)}`;
}
