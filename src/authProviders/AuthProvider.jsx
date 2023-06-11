import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./firebase.config";
import { getRole } from "../api/userAuth";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      getRole(user?.email).then((data) => setRole(data));
    }
  }, [user]);

  //   to create a new user using email & password
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // to update user profile info to firebase auth
  const updateUserData = (userName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photo,
    });
  };

  //   to log in an user using email & password
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log in with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log in with gitHub
  const gitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //   to log out existing user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // to observe auth state change
  useEffect(() => {
    const unmount = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("auth state change:", currentUser);
      
      // get and set token
      if (currentUser) {
        axios
        .post(`${import.meta.env.VITE_API_URL}/jwt`, { email: currentUser.email })
        .then((data) => {
          // console.log(data.data);
          localStorage.setItem("access-token", data.data.token);
          setLoading(false);
        });
      } else {
        localStorage.removeItem("access-token");
      }
    });

    // to stop observing while unmounting
    return () => unmount();
  }, []);

  //   to pass the data for further re-using purpose
  const AuthInfo = {
    user,
    loading,
    setLoading,
    setUser,
    createNewUser,
    updateUserData,
    userLogin,
    googleSignIn,
    gitHubSignIn,
    logOut,
    role,
    setRole,
  };

  // providing " AuthInfo " data to its all children components
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
