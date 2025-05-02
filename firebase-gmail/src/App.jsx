import './App.css'
import { signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import { auth } from './firebase/firebase.init';
import { useState } from 'react';

function App() {
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const [user, setUser] = useState(null)

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result);
        setUser(result.user)
      })
      .catch(error => console.log(error))
  }

  const handleSignInWithGitHub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        console.log(result);
        setUser(result.user)
      })
      .catch(error => console.log(error))
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
        setUser(null)
      })
      .catch(error => console.log(error))
  }

  let userEmail = null
  if(user){
    if(user.email){
      userEmail = user.email
      console.log("ok");
    }else if(user.providerData[0]?.email){
      userEmail = user.providerData[0].email
      console.log(true);
    }
  }

  return (
    <>
      <h1>FireBase gmail authentication</h1>
      {
        user
        && <div>
          <img src={user.photoURL} alt="" />
          <h2>Name: {user.displayName}</h2>
          <h2>Email: {userEmail}</h2>
        </div>
      }
      {
        user
          ? <button onClick={handleSignOut} >Sign Out</button>
          : <div>
            <button onClick={handleSignInWithGoogle} >Sign In Using Google</button>
            <br />
            <br />
            <button onClick={handleSignInWithGitHub} >Sign In Using GitHub</button>
          </div>
      }
    </>
  )
}

export default App
