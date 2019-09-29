module.exports = {
  UnauthorizedError: class UnauthorizedError extends Error {
    constructor(msg) {
      super(msg);
      this.name = 'Unauthorized';
      this.message = msg;
    }
  },
  BadRequestError: class BadRequestError extends Error {
    constructor(msg) {
      super(msg);
      this.name = 'Bad Request';
      this.message = msg;
    }
  }
};
