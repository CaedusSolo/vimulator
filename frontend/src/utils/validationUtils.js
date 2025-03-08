export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    toast.error("Invalid email format.", {
      position: "top-right"
    })
    return false
  }
  return emailRegex.test(email)
}

export const isValidPassword = (password, toast) => {
  if (password.length < 8) {
    if (toast) {
      toast.error('Password must be at least 8 characters long.', { position: 'top-center' });
      return false;
    }
  }

  if (!/[A-Z]/.test(password)) {
    if (toast) {
      toast.error('Password must contain at least one uppercase letter.', { position: 'top-center' });
      return false;
    }
  }

  if (!/[a-z]/.test(password)) {
    if (toast) {
      toast.error('Password must contain at least one lowercase letter.', { position: 'top-center' });
      return false;
    }
  }

  if (!/[0-9]/.test(password)) {
    if (toast) {
      toast.error('Password must contain at least one digit.', { position: 'top-center' });
      return false;
    }
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    if (toast) {
      toast.error('Password must contain at least one special character.', { position: 'top-center' });
      return false;
    }
  }
  
  return true;
};