class UserEntity {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.lastnamename = lastname;
    this.email = email;
    this.password = password;

    this.validateEmail();
    this.validatePassword();
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      throw new Error("Invalid email format");
    }
  }

  validatePassword() {
    if (this.password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
  }
}

module.exports = UserEntity;
