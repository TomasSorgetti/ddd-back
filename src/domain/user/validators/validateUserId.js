function validateUserId(userId) {
  const id = parseInt(userId);
  if (isNaN(id)) {
    throw new Error("User Id is not a number");
  } else if (id <= 0) {
    throw new Error("User Id must be greater than 0");
  }
}

module.exports = { validateUserId };
