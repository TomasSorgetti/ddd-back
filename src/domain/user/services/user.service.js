const { validateUserId } = require("../validators/validateUserId");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * This method will return a user by id
   * @param {*} userId
   * @returns
   */
  async getUserById(userId) {
    validateUserId(userId);
    return {
      id: userId,
      name: "Tomás",
      lastname: "Sorgetti",
      email: "qjX2S@example.com",
    };
    // return await this.userRepository.findById(userId);
  }
}

module.exports = UserService;
