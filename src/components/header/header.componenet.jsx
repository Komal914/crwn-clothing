import react from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //higher order component -> lets us connect redux to components
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//destructure the current user property
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {/* conditionally render a div if true, or a link if the user is null */}

      {currentUser ? (
        //render if currentuser is TRUE -> user found: new div which will render to sign out the user
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        //render if cyrrentuser is FALSE -> no user found: renders new link which will sign in the user
        <Link className="option" to="/signin">
          {" "}
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

//gets the state from root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
