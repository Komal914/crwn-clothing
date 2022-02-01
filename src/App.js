import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.componenet";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth, createuserProfileDocument } from "./firebase/firebase.utils";
import react from "react";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  // Google authentication with Firebase below

  unSubscribeFromAuth = null;

  //we need to unmount to avoid mem leaks so we use Unsubscribefromauth to unmount
  componentDidMount() {
    //gets the val if the current user is not null or null
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //user is not null -> signed in
      if (userAuth) {
        //callung the function in firebase to get user information: email, displayname etc...
        const userRef = await createuserProfileDocument(userAuth);
        //gets the snapshopt: to get other properties like the ID
        userRef.onSnapshot((snapShot) => {
          this.setState({
            //the .data is what is getting the propeties, snapshot.id is needed to get id which is not inside the Data
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }
      //user is null -> not signed in
      this.setState({ currentUser: userAuth }); //updates the state to null when userauth is null
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
        {/* pass in the state of the current userA: false or the user to header component */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
