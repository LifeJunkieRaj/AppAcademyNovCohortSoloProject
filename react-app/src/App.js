import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
// import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import SearchResultsPage from "./components/SearchResultsPage";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authenticate())
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
      <NavBar />
       <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/" exact={true} >
          <LandingPage />
        </Route>
        <Route path="/SearchResultsPage" exact={true} >
          <SearchResultsPage />
        </Route>
        <Route path="/ProfilePage" exact={true} >
          <ProfilePage />
        </Route>
        {/* <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        <Route path="/users/:userId" exact={true} >
          <User />
        </Route>
        <Route path="/home" exact={true} >
          <HomePage />
        </Route> 
      </Switch>
    </BrowserRouter>
    <Footer />
      </>
  );
}

export default App;
