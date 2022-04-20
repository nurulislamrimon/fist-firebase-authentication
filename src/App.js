import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})

  const auth = getAuth(app);

  const getGoogleAuthenticate = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(res => setUser(res.user))
      .catch(err => console.log(err.massage))
  }
  const getGithubAuthenticate = () => {
    const gitProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitProvider)
      .then(res => setUser(res.user))
      .catch(err => console.log(err.massage))
  }
  const signOutHandler = () => {
    signOut(auth)
      .then(setUser({}))
      .catch(setUser({}))
  }
  console.log(user.photoURL);
  return (
    <div className="App">
      {
        user.uid ? <button onClick={signOutHandler}>Sign Out</button> :
          <>
            <button onClick={getGoogleAuthenticate}>Google Authenticate</button>
            <button onClick={getGithubAuthenticate}>Github Authenticate</button>
          </>
      }
      <h1>{user.displayName}</h1>
      <h3>{user.email}</h3>
      <img src={user.photoURL} alt="photos" />
    </div>
  );
}

export default App;
