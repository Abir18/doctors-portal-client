import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
} from 'firebase/auth';
import axios from 'axios';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const registerUser = (name, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setAuthError('');

        const newUser = { email, displayName: name };
        // const newUser = { ...user };
        // newUser['displayName'] = name;

        setUser(newUser);

        // Set displayName to Firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch(error => {
            // An error occurred
            // ...
          });

        // Store User Into Mongo Database Collection
        saveUserToDatabase(email, name, 'POST');

        history.replace('/');
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setAuthError('');

        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        // console.log(user, 'google user');
        const { email, displayName } = user;

        setAuthError('');

        // Store Google User Into Mongo Database Collection
        saveUserToDatabase(email, displayName, 'PUT');

        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   Observe User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin);
        // console.log(data, 'from server');
      });
  }, [user.email]);

  const logOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setAuthError('');
      })
      .catch(error => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUserToDatabase = (email, displayName, method) => {
    const user = { email, displayName };

    // With Axios
    // axios.post('http://localhost:5000/users', user).then(res => {
    //   console.log(res);
    //   if (res.data.insertedId) {
    //     console.log('You Are Created Specially');
    //   }
    // });

    // With Fetch
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return {
    isLoading,
    user,
    admin,
    registerUser,
    signInUser,
    signInWithGoogle,
    logOutUser,
    authError,
    setAuthError,
  };
};

export default useFirebase;
