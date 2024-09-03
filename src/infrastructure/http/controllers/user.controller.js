class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  /**
   * this function is the user controller used to get a user by id
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async getUserById(req, res) {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
