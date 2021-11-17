import { useEffect, useState } from "react"
import initializeFirebase from "../component/Login/Firebase/firebase.init"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth"


initializeFirebase()

const useFirebase = () => {
   const [user, setUser] = useState(null)
   const [loader, setLoader] = useState(false)
   const [errorMessage, setErrorMessage] = useState()

   const auth = getAuth()

   // Register an user with email and password
   const registerUser = (email, password) => {
      setLoader(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
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
      logout
   }
}

export default useFirebase