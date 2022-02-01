import react from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import {
  auth,
  createuserProfileDocument,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

class SignUp extends RemotePlayback.component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  //recieves the event
  handleSubmit = async (event) => {
    event.preventDefault(); //avoids default action
    const { displayName, password, confirmPassword, email } = this.state;

    //case 1: password and confirmpass do not match
    //returns if they do not match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    //try catch block to create if pass matches confirmpass
    try {
      //creates the user and pass with userauth
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //creates userref
      await createuserProfileDocument(user, { displayName });
      //wait for creating user and pass, then change the state back to empty for the app so users can make more accounts
      //clears the form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("Error creating sign up: ", error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
