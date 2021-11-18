import { useEffect, useState } from "react"
import initializeFirebase from "../component/Login/Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile   } from "firebase/auth"


initializeFirebase()

const useFirebase = () => {
   const [user, setUser] = useState(null)
   const [loader, setLoader] = useState(false)
   const [errorMessage, setErrorMessage] = useState()

   const auth = getAuth()
   const googleProvider = new GoogleAuthProvider()

   // Register an user with email and password
   const registerUser = (name, email, password, history) => {
      setLoader(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // const user = userCredential.user;
         setErrorMessage('')
         const newUser = {
            email,
            displayName: name
         }
         setUser(newUser)
         updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {

          }).catch((error) => {
            console.log(error)
          });
         history.replace('/')
      })
      .catch((error) => {
         // const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorMessage)
      })
      .finally(() => setLoader(false))
   }

   // Login user
   const login = (email, password, location, history) => {
      setLoader(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         const destination = location?.state?.from || '/'
         history.replace(destination)
         setErrorMessage('')
         setUser(user)
      })
      .catch((error) => {
         // const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorMessage)
      })
      .finally(() => setLoader(false))
   }

   // Login with Google
   const loginWithGoogle = (location, history) => {
      setLoader(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
         const user = result.user;
         const destination = location?.state?.from || '/'
         history.replace(destination)
         setUser(user)
       }).catch((error) => {
         const errorMessage = error.message;
         setErrorMessage(errorMessage)
       })
       .finally(() => setLoader(false))
   }

   // Auth observer
   useEffect(() => {
      setLoader(true)
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
         } else {
           setUser(null)
         }
         setLoader(false)
      })
      return () => unsubscribe
   }, [])

   // Logout user
   const logout = () => {
      setLoader(true)
      signOut(auth).then(() => {
         // Sign-out successful.
      }).catch((error) => {
         // An error happened.
      })
      .finally(() => setLoader(false))
   }

   return {
      user,
      errorMessage,
      loader,
      registerUser,
      login,
      loginWithGoogle,
      logout
   }
}

export default useFirebase