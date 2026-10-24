export function validateContact(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 20)
    errors.message = "Please write at least 20 characters.";
  if (values.message.length > 5000)
    errors.message = "Please keep your message under 5,000 characters.";
  return errors;
}
