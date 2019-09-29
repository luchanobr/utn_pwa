module.exports = {
  UnauthorizedError: class UnauthorizedError extends Error {
    constructor(value, msg, param, location) {
      super(msg);
      this.name = 'Unauthorized';
      this.message = msg;
      this.location = location;
      this.param = param;
      this.value = value;
    }
  },
  BadRequestError: class BadRequestError extends Error {
    constructor(value, msg, param, location) {
      super(msg);
      this.name = 'Bad Request';
      this.message = msg;
      this.location = location;
      this.param = param;
      this.value = value;
    }
  }
};
