import react from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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
}

export default SignUp;
