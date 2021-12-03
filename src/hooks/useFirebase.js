import { useEffect, useState } from "react"
import initializeFirebase from "../component/Login/Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile   } from "firebase/auth"


initializeFirebase()

const useFirebase = () => {
   const [user, setUser] = useState({})
   const [loader, setLoader] = useState(true)
   const [errorMessage, setErrorMessage] = useState()
   const [isAdmin, setIsAdmin] = useState(false)

   const auth = getAuth()
   const googleProvider = new GoogleAuthProvider()


   const saveUserData = (displayName, email, method) => {
      const user = {
         displayName,
         email
      }
      fetch('https://boot-kingdom.herokuapp.com/users', {
         method: method,
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
   }

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

         // When a user will sign up, this function will be called to add a new user into the Database according to Sign up Data.
         saveUserData(name, email, 'POST')
         
         setUser(newUser)
         updateProfile(auth.currentUser, {
            displayName: name
         })
         .then(() => {

         })
         .catch((error) => {
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
         // When a user will login via google, This function will be called and check that the user does exist in MongoDb database or not. If it does exist, it will not take any action. If the user doesn't exist into the Database, this will add a new user into the Database according to this user's Data.
         saveUserData(user.displayName, user.email, 'PUT')
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

   // Check this user is admin or not
   useEffect(() => {
      // console.log(user.email)
         fetch(`https://boot-kingdom.herokuapp.com/users/${user?.email}`)
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data?.role === 'admin') {
               setIsAdmin(true)
            }
         })
         .catch(error => console.log(error))
   }, [user?.email])

   // Logout user
   const logout = (location, history) => {
      setLoader(true)
      signOut(auth)
      .then(() => {
         setIsAdmin(false)
         const destination = '/'
         history.replace(destination)
      }).catch((error) => {
         // An error happened.
      })
      .finally(() => setLoader(false))
   }

   return {
      user,
      setUser,
      isAdmin,
      errorMessage,
      loader,
      registerUser,
      login,
      loginWithGoogle,
      logout
   }
}

export default useFirebase