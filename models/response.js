class Response {
  constructor({success, message, data, errors, code}) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.errors = errors;
    this.code = code;
  }
  

  toJSON = function() {
    return {
      success: this.success,
      message: this.message,
      data: this.data,
      errors: this.errors,
      code: this.code
    };
  };
}

module.exports = {
    Response
}