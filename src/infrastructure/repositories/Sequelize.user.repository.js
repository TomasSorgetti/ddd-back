const { User } = require("../database/models/user.model");
const UserRepository = require("../../domain/user/repositories/user.repository");

class SequelizeUserRepository extends UserRepository {
  async save(user) {
    return await User.create(user);
  }

  async findById(userId) {
    return await User.findByPk(userId);
  }

  async findAll() {
    return await User.findAll();
  }
}

module.exports = SequelizeUserRepository;
