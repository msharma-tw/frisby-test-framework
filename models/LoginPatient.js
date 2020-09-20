class LoginPatient {

    constructor() {
        this.username = undefined;
        this.password = undefined;
        this.grantType = undefined;
    }

    setUsername(username) {
        this.username = username;
        return this;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    setGrantType(grantType) {
        this.grantType = grantType;
        return this;
    }
}

module.exports = LoginPatient;