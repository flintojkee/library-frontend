export enum Role {
  user = 'user'
}

class AuthForm {
  email: string;
  password: string;
  constructor() {
    this.email = null;
    this.password = null;
  }
}

export class LoginForm extends AuthForm {
  constructor(email: string, password: string) {
    super();
    super.email = email;
    super.password = password;
  }
}

export class SignUpForm extends AuthForm {
  fullName: string;
  dateOfBirth: string;
  address: string;
  constructor() {
    super();
    this.fullName = null;
    this.dateOfBirth = null;
    this.address = null;
  }
}

