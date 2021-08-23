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
      return response.status(400).send({ message: "Token não informado." });
    }

    await auth.authenticator("jwt").revokeTokens([refreshToken], true);

    return response.send({ status: 200, message: "success" });
  }
}

module.exports = SessionController;
