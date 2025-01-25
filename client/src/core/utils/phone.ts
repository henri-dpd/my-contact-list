export const formatPhone = (phone: string) => {
  if (!phone) throw new Error('Invalid phone number to format');
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};
