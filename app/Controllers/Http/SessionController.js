"use strict";

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.withRefreshToken().attempt(email, password);

    return token;
  }

  async logout({ request, response, auth }) {
    const refreshToken = request.input("refreshToken");
    if (!refreshToken) {
      // You can throw any exception you want here
      return `Refresh Token missing`;
    }

    await auth.authenticator("jwt").revokeTokens([refreshToken], true);

    return response.send({ status: 200, message: "success" });
  }

  async getUser({ auth }) {
    return await auth.getUser();
  }
}

module.exports = SessionController;
