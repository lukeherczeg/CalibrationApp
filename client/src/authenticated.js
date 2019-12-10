class authenticated {

  // This file is just a class that handles a boolean value of
  // whether or not a user has logged in.

  constructor() {
    this.authenticated = false;
  }

  login() {
    this.authenticated = true;
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new authenticated();
