import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.componenet";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth, createuserProfileDocument } from "./firebase/firebase.utils";
import react from "react";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends react.Component {
  // Google authentication with Firebase below

  unSubscribeFromAuth = null;

  //we need to unmount to avoid mem leaks so we use Unsubscribefromauth to unmount
  componentDidMount() {
    const { setCurrentUser } = this.props;
    //gets the val if the current user is not null or null
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //user is not null -> signed in
      if (userAuth) {
        //callung the function in firebase to get user information: email, displayname etc...
        const userRef = await createuserProfileDocument(userAuth);
        //gets the snapshopt: to get other properties like the ID
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      //user is null -> not signed in
      else {
        setCurrentUser(userAuth); //updates the state to null when userauth is null
      }
    });
  }
  //if the current user is null, then we unmount to close the connection and avoid leaks
  componentWillUnmount() {
    this.unSubscribeFromAuth(); //closes the subscription
  }

  //google authentication over

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

//gets user's updated val from redux store
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

//dispatches the actions which we want to use
const mapDispatchToProps = (dispatch) => ({
  //gets the user object which will dispatch an action object to every reducer
  //this will return a user action object which will then be used as the payload
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
