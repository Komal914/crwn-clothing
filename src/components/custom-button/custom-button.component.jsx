//this is a custom button with dif properties
// we can use the same button for different functions and cutomize the css for each function as well

import react from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : " "} ${
      isGoogleSignIn ? "google-sign-in" : " "
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
